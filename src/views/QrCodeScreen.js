import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { saveBase64ToDisk } from '../services/QRCode';
import { colors } from '../utils/colos';
import { Input } from '../components';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textCode: '',
      qrCodeValue: '',
      qrCodeSize: 1,
      isVisibleSaveIcon: true,
    };
    this.qrCodeRef;
  }

  /**
   * Método de alteração de texto de TextInput
   * @memberof HomeScreen
   * @param {string} text - Novo texto inserido em TextInput
   */
  onChangeText = text => {
    this.setState({ textCode: text });
  };

  /**
   * Método de gravação de imagem
   * @memberof HomeScreen
   * @param {string} dataURL - código base64 de image
   */
  saveImage = dataURL => {
    saveBase64ToDisk(dataURL)
      .then(() => {
        this.setState({ isVisibleSaveIcon: false });
      })
      .catch(() => {
        console.warn('foi nao');
      });
  };

  getRef = ref => (this.qrCodeRef = ref);

  onLayout = ({
    nativeEvent: {
      layout: { width },
    },
  }) => {
    this.setState({ qrCodeSize: width - 80 });
  };

  handleGenerateButton = () => {
    const { textCode } = this.state;
    this.setState({ qrCodeValue: textCode, isVisibleSaveIcon: true });
  };

  handleExcludeButton = () => {
    this.setState({ qrCodeValue: '' });
  };

  handleSaveButton = () => {
    this.qrCodeRef.toDataURL(this.saveImage);
  };

  render = () => {
    const { textCode, qrCodeValue, qrCodeSize, isVisibleSaveIcon } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Input
            value={textCode}
            multiline
            onChangeText={this.onChangeText}
            placeholder="Conteúdo"
            placeholderTextColor={colors.GRAY}
          />
        </View>
        <TouchableOpacity
          style={styles.buttonContainer}
          disabled={textCode === ''}
          onPress={this.handleGenerateButton}
        >
          <Text style={styles.buttonText}>Gerar</Text>
        </TouchableOpacity>

        {qrCodeValue !== '' && (
          <View onLayout={this.onLayout} style={styles.qrCodeContainer}>
            <View>
              <View style={styles.qrCodeBar}>
                {/* Deletar  */}
                <Icon
                  name="delete"
                  size={36}
                  color="red"
                  onPress={this.handleExcludeButton}
                />
                {/* Salvar */}
                {isVisibleSaveIcon && (
                  <Icon
                    name="check"
                    size={36}
                    color="blue"
                    onPress={this.handleSaveButton}
                  />
                )}
              </View>
              <QRCode
                getRef={this.getRef}
                value={qrCodeValue}
                size={qrCodeSize}
              />
            </View>
          </View>
        )}
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
  },
  inputContainer: { marginVertical: 10 },
  buttonContainer: {
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
  },
  buttonText: { alignSelf: 'center' },
  qrCodeContainer: {
    flex: 1,
    paddingTop: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  qrCodeBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
});

export default HomeScreen;

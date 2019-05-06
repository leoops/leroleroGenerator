import { createStackNavigator } from 'react-navigation';
import QrCodeScreen from '../views/QrCodeScreen';

const AppNavigator = createStackNavigator({
  QrCodeScreen: {
    screen: QrCodeScreen,
  },
  LeroLeroScreen: {
    screen: LeroLeroScreen,
  },
});

export default AppNavigator;

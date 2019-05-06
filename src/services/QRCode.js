import RNFS from 'react-native-fs';
import { CameraRoll } from 'react-native';
export const saveBase64ToDisk = data => {
  const imageName = RNFS.CachesDirectoryPath + '/' + Date.now() + '_qclg.png';

  return new Promise((resolve, reject) => {
    RNFS.writeFile(imageName, data, 'base64')
      .then(success => {
        CameraRoll.saveToCameraRoll(imageName, 'photo');
        resolve(success);
      })
      .catch(error => {
        reject(error);
        // Tratar caso de erro
      });
  });
};

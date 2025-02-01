// import { NativeModules } from 'react-native';


// const { DeviceAdmin } = NativeModules;


// const enableDeviceAdmin = () => {
//   if (DeviceAdmin) {
//     try {
//       DeviceAdmin.enableDeviceAdmin();
//     } catch (error) {
//       console.error('Error enabling Device Admin:', error);
//     }
//   } else {
//     console.error('DeviceAdmin module is not available.');
//   }
// };


// export default enableDeviceAdmin;

import { NativeModules } from 'react-native';

const { DeviceAdmin } = NativeModules;
console.log(NativeModules);

const enableDeviceAdmin = () => {
  if (DeviceAdmin && DeviceAdmin.enableDeviceAdmin) {
    DeviceAdmin.enableDeviceAdmin();
  } else {
    console.warn('DeviceAdmin module is not available');
  }
};

const checkDeviceAdminStatus = async () => {
  if (DeviceAdmin && DeviceAdmin.isDeviceAdminEnabled) {
    try {
      const isAdmin = await DeviceAdmin.isDeviceAdminEnabled();
      if (isAdmin) {
        console.log('Device Admin is enabled');
      } else {
        console.log('Device Admin is not enabled');
      }
    } catch (error) {
      console.error('Error checking device admin status:', error);
    }
  } else {
    console.warn('isDeviceAdminEnabled method is not available');
  }
};


export { enableDeviceAdmin, checkDeviceAdminStatus };

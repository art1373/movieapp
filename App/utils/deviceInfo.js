import {
  getUniqueId,
  getManufacturer,
  getApplicationName,
  getSystemName,
  getSystemVersion,
  getBuildNumber,
  getBundleId,
  getDeviceId,
  getDeviceName,
  getType,
  getVersion,
  isTablet,
  getIpAddress,
} from 'react-native-device-info';
export const deviceInfo = async () => {
  const appName = getApplicationName();
  const manufacturer = await getManufacturer();
  const systemName = getSystemName();
  const systemVersion = getSystemVersion();
  const buildNumber = getBuildNumber();
  const bundleId = getBundleId();
  const deviceId = getDeviceId();
  const deviceName = await getDeviceName();
  const type = await getType();
  const version = getVersion();
  const uniqueId = getUniqueId();
  const isTablett = isTablet();
  const ip = await getIpAddress();
  const pushNotifToken = 'klkjkljkljkljkljkjlk';
  const enabledNotif = true;
  return {
    appName,
    manufacturer,
    systemName,
    systemVersion,
    buildNumber,
    bundleId,
    deviceId,
    deviceName,
    type,
    version,
    uniqueId,
    isTablet: isTablett,
    OS: systemName,
    ip,
    pushNotifToken,
    enabledNotif,
  };
  //.............
};

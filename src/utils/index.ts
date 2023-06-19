import remoteConfig from '@react-native-firebase/remote-config';
import { AllowListType } from '../types';

export const getAllowDocuments = async (): Promise<AllowListType[]> => {
  await remoteConfig().setDefaults({
    allow_list: '',
  })
  await remoteConfig().fetch(200);
  const isActive = await remoteConfig().fetchAndActivate();
  if(isActive) {
    const value = remoteConfig().getValue('allow_list').asString();
    return JSON.parse(value);
  }
  return;       
}
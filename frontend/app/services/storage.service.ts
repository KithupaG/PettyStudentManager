import AsyncStorage from '@react-native-async-storage/async-storage';

export const setSession = async (username: string) => {
    await AsyncStorage.setItem('userSession', username);
};

export const getSession = async () => {
    return await AsyncStorage.getItem('userSession');
};

export const clearSession = async () => {
    await AsyncStorage.removeItem('userSession');
};
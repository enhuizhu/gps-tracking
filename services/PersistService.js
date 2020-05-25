import AsyncStorage from "@react-native-community/async-storage";
import { store } from '../store/store';
import { receiveUserToken } from '../actions/user.action';

const TOKEN = 'TOKEN';

export class PersistService {
	static async getToken() {
		try {
			return await AsyncStorage.getItem(TOKEN);
		} catch(e) {
			console.error(e);
		}
	}

	static async setToken(tokenObj) {
    console.log('set token:', tokenObj);
    store.dispatch(receiveUserToken(tokenObj));
		return await AsyncStorage.setItem(TOKEN, JSON.stringify(tokenObj))
	}

	static async removeToken() {
		return await AsyncStorage.removeItem(TOKEN);
	}

	static async syncWithStore() {
    console.log('sync store');
    const token = await this.getToken();
    console.log('--- token is storage ---', token);
    store.dispatch(receiveUserToken(token !== null && typeof token === 'object' ? JSON.parse(token) : token ));
	}
}


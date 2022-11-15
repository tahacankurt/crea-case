import axios from 'axios';
import LocalStorage from './localStorage';
import API_URL from '../constants/api';
import { logOutRequest } from '../pages/Auth/redux/authState';
// eslint-disable-next-line import/no-cycle
import { store } from '../store';

const jwtInterceptor = (instance) => {
  const localStorage = new LocalStorage({ key: 'auth' });
  instance.interceptors.request.use((config) => {
    Object.assign(config.headers, {
      Authorization: `Bearer ${localStorage.item?.accessToken}`,
    });
    return config;
  });

  instance.interceptors.response.use(
    (response) => response,
    async (error) => {
      const config = error?.config;

      if (error?.response?.status === 401) {
        // TODO: There is no refresh token option on fake json auth server
        // so when token expired user will signOut
        store.dispatch(logOutRequest());
        return axios(config);
      }
      return Promise.reject(error);
    },
  );
};

const instance = axios.create({ baseURL: API_URL });

jwtInterceptor(instance);

export default instance;

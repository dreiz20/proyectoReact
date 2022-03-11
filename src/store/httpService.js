import axios from 'axios';
import logger from './logService';
import config from '../config.json';

const instance = axios.create({
  baseURL: config.baseUrl
});

instance.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response && error.response.status >= 400 && error.response.status < 500;

  if (!expectedError) {
    logger.log(error);
    alert('An unexpected error occurrred.');
  }

  return Promise.reject(error);
});

export default {
  get: instance.get,
  post: instance.post,
  put: instance.put,
  delete: instance.delete
};

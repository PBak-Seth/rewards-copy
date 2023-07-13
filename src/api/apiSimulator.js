import { API_TIMEOUT } from '../constants/apiTimeout';

export const apiSimulator = (dataSource) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch(dataSource)
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((error) => {
          reject(error);
        });
    }, API_TIMEOUT);
  });
};

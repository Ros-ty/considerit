import { mainAPI } from '../constants/urlAPI';

export const getGiphy = async () => {
  const API = `${mainAPI}`;
  let response = await fetch(API, {
    method: 'GET',
  });
  response = await response.json();
  return response;
};

export default getGiphy;

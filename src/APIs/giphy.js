import { trendsAPI, API_KEY } from '../constants/urlAPI';

export const getGiphy = async () => {
  const API = `${trendsAPI}${API_KEY}`;
  let response = await fetch(API, {
    method: 'GET',
  });
  response = await response.json();
  return response;
};

export default getGiphy;

import { searchAPI, API_KEY } from '../constants/urlAPI';

export const getSearch = async (search) => {
  const API = `${searchAPI}`;
  let response = await fetch(`${API}q=${search}&limit=5${API_KEY}`, {
    method: 'GET',
  });
  response = await response.json();
  return response;
};

export default getSearch;

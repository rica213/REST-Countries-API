import url from './url.js';

const retrieve = async (requestURL) => {
  const request = new Request(requestURL);
  const response = await fetch(request);
  const json = await response.json();
  return json;
};

const result = retrieve(url);
export default result;
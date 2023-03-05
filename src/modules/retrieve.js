const retrieve = async (requestURL) => {
  const request = new Request(requestURL);
  const response = await fetch(request);
  const json = await response.json();
  return json;
};

export default retrieve;
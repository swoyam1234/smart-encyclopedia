const getCountry = async (name) => {
  const url = `https://restcountries.com/v2/name/${name}`;
  const response = await fetch(url);
  let data = await response.json();
  return data;
};

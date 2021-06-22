export const fetcher = async (endpoint: string) => {
  const url = `http://localhost:3000/api/${endpoint}`;
  return fetch(url).then((res) => {
    return res.json();
  });
};

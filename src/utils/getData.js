const getData = async () => {
  let catData = await fetch(
    'https://5e5932cd7777050014463360.mockapi.io/cats'
  ).json();
  console.log(catData);
  return catData;
};

const getData = async () => {
  return await (
    await fetch('https://5e5932cd7777050014463360.mockapi.io/cats')
  ).json();
};
export default getData;

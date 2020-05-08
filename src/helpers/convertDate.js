export default date => {
  const arr = date.split('.');
  return new Date(`${arr[2]}-${arr[1]}-${arr[0]}`);
};

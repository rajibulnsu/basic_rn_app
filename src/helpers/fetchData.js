import { HOST_URL } from '../common/constants';

const data = async () => {
  const response = await fetch(HOST_URL);
  const responseData = await response.json();
  return responseData;
};

export default data;

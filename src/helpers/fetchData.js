import { HOST_URL, USE_LOCAL_DATA } from '../common/constants';
import jsonData from '../data/data.json';

const data = async () => {
  let responseData;
  if (USE_LOCAL_DATA){
    responseData = jsonData.data;
  } else {
    const response = await fetch(HOST_URL);
    responseData = await response.json();
  }
  console.log(responseData);
  return responseData;
};

export default data;

import fetchData from '../../helpers/fetchData';
import sortDataByDate from '../../helpers/sortDataByDate';

export const FILTER_BY_ID = 'FILTER_BY_ID';
export const FETCH_NEW_DATA = 'FETCH_NEW_DATA';

export const filterById = id => {
  return {
    type: FILTER_BY_ID,
    testId: id,
  };
};

export const loadData = () => {
  return async dispatch => {
    const fetchedData = await fetchData();
    const sortedData = sortDataByDate(fetchedData);

    dispatch({
      type: FETCH_NEW_DATA,
      data: sortedData,
    });
  };
};

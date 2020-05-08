import { FETCH_NEW_DATA, FILTER_BY_ID } from '../actions/bloodTest.js';

const initialState = {
  data: [],
  filteredData: [],
};

const bloodTestReducer = (state = initialState, action) => {
  switch (action.type) {

    case FETCH_NEW_DATA:
      state.data = action.data;
      return state;

    case FILTER_BY_ID:
      const filteredById = state.data.filter( item => item.id === action.testId);
      state.filteredData = filteredById;
      return state;

    default:
      return state;
  }
};

export default bloodTestReducer;

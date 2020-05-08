import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';

import BloodTestNavigator from './navigation/BloodTestNavigator';
import BloodTestReducer from './store/reducer/bloodTest';

const rootReducer = combineReducers({
  bloodTest: BloodTestReducer,
});

const store = createStore(rootReducer, applyMiddleware(reduxThunk));

const App = () => {
  return (
    <Provider store={store}>
      <BloodTestNavigator />
    </Provider>
  );
};

export default App;

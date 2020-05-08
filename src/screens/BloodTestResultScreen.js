import React, { useEffect, useCallback } from 'react';
import { ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import TestResultCard from '../components/TestResultCard/TestResultCard';
import { filterById } from '../store/actions/bloodTest';


const BloodTestResultScreen = props => {
  const { navigation } = props;

  const dispatch = useDispatch();
  const bloodTestResultHandler = useCallback(id => dispatch(filterById(id)), [dispatch]);
  const data = useSelector(state => state.bloodTest.filteredData);

  useEffect(() => {
    bloodTestResultHandler(navigation.getParam('testId'));
  }, []);

  return (
    <ScrollView>
      {
        data.length > 0 && data[0].result.map(
          (item, index) => {
            return (
              <TestResultCard
                key={`testResultCard_${index}`}
                item={item}
              />
            );
          }
        )
      }
    </ScrollView>
  );
};

export default BloodTestResultScreen;

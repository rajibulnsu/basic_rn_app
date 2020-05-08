import React, { useEffect, useCallback } from 'react';
import { ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { loadData } from '../store/actions/bloodTest';

import BloodTestCard from '../components/BloodTestCard/BloodTestCard';

const BloodTestListScreen = props => {
  const { navigation } = props;

  const dispatch = useDispatch();
  const onLoadHandler = useCallback(() => dispatch(loadData()), [dispatch]);
  const data = useSelector(state => state.bloodTest.data);

  useEffect(() => {
    onLoadHandler();
  }, []);

  return (
    <ScrollView>
      {
        data.length > 0 && data.map(
          item => {
            return (
              <BloodTestCard
                key={`bloodTestCard_${item.id}`}
                item={item}
                onPress={
                  () => {
                    navigation.navigate({
                      routeName: 'TestResult',
                      params: {testId: item.id },
                    });
                  }
                }
              />
            );
          }
        )
      }
    </ScrollView>
  );
};

export default BloodTestListScreen;

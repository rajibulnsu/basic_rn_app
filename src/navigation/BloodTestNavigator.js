import { createStackNavigator, createAppContainer } from 'react-navigation';

import BloodTestListScreen from '../screens/BloodTestListScreen';
import BloodTestResultScreen from '../screens/BloodTestResultScreen';

const BloodTestNavigator = createStackNavigator({
  TestList: BloodTestListScreen,
  TestResult: BloodTestResultScreen,
});

export default createAppContainer(BloodTestNavigator);

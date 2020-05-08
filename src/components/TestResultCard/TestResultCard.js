import React from 'react';
import { View, Text, ProgressBarAndroid } from 'react-native';
import styles from './TestResultCard.style';

const TestResultCard = props => {
  const { biomarker, color, percentage } = props.item;

  return (
    <View style={styles.cardLayout}>
      <Text style={styles.title}>Biomarker: {biomarker}</Text>
      <Text style={styles.text}>Percentage: {percentage}%</Text>
      <ProgressBarAndroid
        style={styles.percentageBar}
        styleAttr="Horizontal"
        color={color}
        indeterminate={false}
        progress={percentage / 100}
        />
    </View>
  );
};

export default TestResultCard;

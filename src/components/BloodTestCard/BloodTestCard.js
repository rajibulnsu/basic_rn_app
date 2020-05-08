import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from './BloodTestCard.style';

const BloodTestCard = props => {
  const { title, date } = props.item;
  return (
    <View style={styles.cardLayout}>
      <View style={styles.text}>
        <Text style={styles.title}>
          {title}
        </Text>
        <Text>
          {date}
        </Text>
      </View>
      <View>
        <Button color={styles.button.color} title="View" onPress={props.onPress} />
      </View>
    </View>
  );
};

export default BloodTestCard;

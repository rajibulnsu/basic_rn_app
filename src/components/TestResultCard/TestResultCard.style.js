import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  cardLayout: {
    maxWidth: '100%',
    minHeight: 90,
    margin: 10,
    padding: 20,
    borderRadius: 5,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 20,
  },
  text: {
    fontSize: 16,
  },
  percentageBar: {
    padding: 10,
    transform: [{ scaleX: 0.7 }, { scaleY: 5 }],
  },
});

export default styles;

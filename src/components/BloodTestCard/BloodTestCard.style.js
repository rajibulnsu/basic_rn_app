import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  cardLayout: {
    flexDirection: 'row',
    alignItems: 'center',
    maxWidth: '100%',
    height: 90,
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
  text: {
    flex: 1,
  },
  title: {
    fontSize: 20,
  },
  button: {
    color: '#f5785a',
  },
});

export default styles;

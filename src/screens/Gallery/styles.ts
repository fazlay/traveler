import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: 400,
    borderRadius: 20,
    marginTop: 24,
  },
  backContainer: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 1,
  },
  icon: {width: 24, height: 24, margin: 8},
});

export default styles;

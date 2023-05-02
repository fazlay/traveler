import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  icon: {
    width: 40,
  },
  title: {
    fontSize: 12,
    color: '#000',
    marginHorizontal: 8,
  },
  circle: {
    width: 45,
    height: 45,
    borderRadius: 30,
    backgroundColor: '#d3d3d3',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
});

export default styles;

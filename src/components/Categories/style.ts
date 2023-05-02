import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  itemContainer: {
    marginVertical: 14,
    marginRight: 17,
  },
  selectedItemContainer: {
    borderBottomColor: '#4681A3',
    borderBottomWidth: 2,
  },
  item: {
    fontSize: 12,
    color: 'rgba(0,0,0,0.5)',
    fontWeight: 'bold',

    paddingVertical: 2,
  },
  selectedItem: {
    color: '#000',
  },
});

export default styles;

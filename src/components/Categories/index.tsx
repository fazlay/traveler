import React from 'react';
import {FlatList, Text, TouchableOpacity} from 'react-native';
import styles from './style';

const Categories = ({categories, selectedCategory, onCategorySelect}: any) => {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={categories}
      renderItem={({item, index}) => {
        const selected = selectedCategory === item;
        return (
          <TouchableOpacity
            onPress={() => onCategorySelect(item)}
            style={[
              styles.itemContainer,
              selected ? styles.selectedItemContainer : {},
              index === 0 ? {marginLeft: 32} : {},
            ]}>
            <Text style={[styles.item, selected ? styles.selectedItem : {}]}>
              {item}
            </Text>
          </TouchableOpacity>
        );
      }}></FlatList>
  );
};

export default React.memo(Categories);

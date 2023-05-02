import React from 'react';
import {Image, Text, View, TouchableOpacity} from 'react-native';
import styles from './style';

const AttractionCard = ({imageSrc, title, subTitle, style, onPress}: any) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.card, style]}>
      <Image style={styles.image} source={{uri: imageSrc}} />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.row}>
        <Image
          style={styles.icon}
          source={require('../../assets/locationPin.png')}
        />
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default React.memo(AttractionCard);

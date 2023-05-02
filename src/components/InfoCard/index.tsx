import React from 'react';
import {Text, View} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface InfoCardProps {
  icon: string;
  text: string;
}

const InfoCard: React.FC<InfoCardProps> = ({icon, text}) => {
  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <Icon size={30} name={icon} />
      </View>
      <Text style={styles.title}>{text}</Text>
    </View>
  );
};

export default React.memo(InfoCard);

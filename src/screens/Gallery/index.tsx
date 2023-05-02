import {Image, SafeAreaView, Text, View} from 'react-native';
import styles from './styles';

import {FlatList} from 'react-native-gesture-handler';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native';

const GalleryView = ({route}: any) => {
  const {images} = route?.params || {};
  const navigation = useNavigation<StackNavigationProp<any>>();
  const handleBack = () => {
    navigation.goBack();
  };
  console.log(images);
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TouchableOpacity
          hitSlop={8}
          onPress={handleBack}
          style={styles.backContainer}>
          <Image
            style={styles.icon}
            source={require('../../assets/back_icon.png')}
          />
        </TouchableOpacity>
        <FlatList
          style={{marginBottom: 32, paddingHorizontal: 32}}
          data={images}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <Image source={{uri: item}} style={styles.image} />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default GalleryView;

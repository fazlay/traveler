import React from 'react';
import {ImageBackground, SafeAreaView, ScrollView} from 'react-native';
import styles from './styles';
import {Text, View, Image, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Title from '../../components/Title';
import {StackNavigationProp} from '@react-navigation/stack';
import InfoCard from '../../components/InfoCard';
import AreaMap from '../../components/MapBox';

const AttractionDetails = ({route}: any) => {
  const {item} = route?.params || {};

  const navigation = useNavigation<StackNavigationProp<any>>();

  const mainImage = item?.images?.length ? item?.images[0] : null;
  const slicedImages = item?.images?.length ? item?.images.slice(0, 5) : [];
  const diffImages = item?.images?.length - slicedImages?.length;
  const handleBack = () => {
    navigation.goBack();
  };

  const onGalleryNavigate = () => {
    navigation.navigate('Gallery', {images: item?.images});
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground
          style={styles.minImage}
          imageStyle={{borderRadius: 10}}
          source={{uri: mainImage}}>
          <View style={styles.header}>
            <Pressable hitSlop={8} onPress={handleBack}>
              <Image
                style={styles.icon}
                source={require('../../assets/back_icon.png')}
              />
            </Pressable>
            <Pressable hitSlop={8}>
              <Image
                style={styles.icon}
                source={require('../../assets/share_icon.png')}
              />
            </Pressable>
          </View>
          <Pressable onPress={onGalleryNavigate} style={styles.footer}>
            {slicedImages.map((image: any, index: number) => (
              <View key={image}>
                <Image
                  key={index}
                  style={styles.galleryPrevImage}
                  source={{uri: image}}
                />
                {diffImages > 0 && index === slicedImages?.length - 1 ? (
                  <View style={styles.moreImagesContainer}>
                    <Text style={styles.moreImages}>{`+${diffImages}`}</Text>
                  </View>
                ) : null}
              </View>
            ))}
          </Pressable>
        </ImageBackground>

        <View style={styles.headerContainer}>
          <View style={styles.textContainer}>
            <Title style={styles.title} text={item?.name} />
            <Text style={styles.city}>{item?.city}</Text>
          </View>
          <Title style={styles.title} text={item?.entry_price} />
        </View>
        <View>
          <InfoCard text={item?.address} icon={'place'} />
          <InfoCard
            text={`OPEN
${item?.opening_time}-${item.closing_time}`}
            icon={'schedule'}
          />
        </View>
        <View>
          <AreaMap />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AttractionDetails;

import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, ScrollView, View} from 'react-native';
import Title from '../../components/Title';
import styles from './styles';
import Categories from '../../components/Categories';
import AttractionCard from '../../components/AttractionCard';
import jsonData from '../../data/attraction.json';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
const All = 'All';
const categories = [
  'Popular',
  'Historical',
  'Random',
  'Trending',
  'Exclusive',
  'Others',
];
export type RootStackParamList = {
  AttractionDetails: {item: any} | undefined;
};
const Home = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [selectedCategory, setSelectedCategory] = useState(All);
  const [attractionList, setAttractionList] = useState(jsonData);

  useEffect(() => {
    if (selectedCategory === All) {
      setAttractionList(jsonData);
      return;
    } else {
      const filteredList = jsonData.filter(item =>
        item?.categories?.includes(selectedCategory),
      );
      setAttractionList(filteredList);
    }
  }, [selectedCategory]);
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={attractionList}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        style={{flexGrow: 1}}
        ListHeaderComponent={
          <>
            <View style={{margin: 32}}>
              <Title text={'Where do'} style={{fontWeight: 'normal'}} />
              <Title text={'you want to go'} />
              <Title text={'Explore Attraction'} style={styles.subtitle} />
            </View>
            <Categories
              selectedCategory={selectedCategory}
              onCategorySelect={setSelectedCategory}
              categories={[All, ...categories]}
            />
          </>
        }
        keyExtractor={item => item.name}
        renderItem={({item, index}) => (
          <AttractionCard
            key={item.name}
            style={
              index % 2 === 0
                ? {marginRight: 12, marginLeft: 32}
                : {marginRight: 32}
            }
            onPress={() => navigation.navigate('AttractionDetails', {item})}
            title={item.name}
            imageSrc={item?.images[0] || null}
            subTitle={item.city}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default Home;

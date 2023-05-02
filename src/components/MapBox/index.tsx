import React from 'react';
import {StyleSheet, View} from 'react-native';
import Mapbox from '@rnmapbox/maps';

const token =
  'sk.eyJ1IjoiZmF6bGF5IiwiYSI6ImNsZzdtYWc2bDBwMGozZXFscXl5YjBjNmwifQ.5iSGxznCak6QgEHyT96hCA';
import MapboxGL from '@rnmapbox/maps';
MapboxGL.setAccessToken(token);
const AreaMap = () => {
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <MapboxGL.MapView style={styles.map} />
      </View>
    </View>
  );
};

export default AreaMap;

const styles = StyleSheet.create({
  page: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  container: {
    height: 200,
    width: '100%',

    paddingBottom: 10,
  },
  map: {
    flex: 1,
    borderRadius: 20,
  },
});

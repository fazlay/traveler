import {StyleSheet, Dimensions} from 'react-native';
const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    margin: 32,
  },
  minImage: {
    width: '100%',
    height: height / 2,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
    margin: 8,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.35)',
    margin: 16,
    paddingHorizontal: 8,
  },
  galleryPrevImage: {
    width: 40,
    height: 40,
    marginHorizontal: 4,
    marginVertical: 8,
    borderRadius: 10,
  },
  textContainer: {},
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 16,
  },
  title: {color: '#000'},
  city: {marginTop: 8, fontSize: 20, fontWeight: '400', color: '#000'},
  moreImages: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  moreImagesContainer: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.38)',
    width: 40,
    height: 40,
    top: 8,
    left: 4,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;

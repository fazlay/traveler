import 'react-native-gesture-handler';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import Home from './src/screens/Home';
import AttractionDetails from './src/screens/AttractionDetails';
import GalleryView from './src/screens/Gallery';
//npx react-native run-android --deviceId 21259ca47d24
const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="AttractionDetails" component={AttractionDetails} />
        <Stack.Screen name="Gallery" component={GalleryView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

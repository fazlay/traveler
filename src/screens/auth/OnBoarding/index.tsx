import {View,Image, Text} from 'react-native'

import styles from './style'

const OnBoarding = () => {
  return (
   <View>
     <View>
    <Image style={styles.image} source={require('../../../assets/image01.png')} />

    </View>
    <View>
        <Text style={styles.title}>Welcome to the</Text>
        <Text style={styles.subTitle}>Best App Ever</Text>
    </View>
   </View>
  )
}

export default OnBoarding;
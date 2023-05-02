import React from 'react'
import { Text } from 'react-native'
import styles from './style'

interface ITitleProps { 
  text: string;
  style?: any;
}

const Title: React.FC<ITitleProps> = ({ text,style }) => {
  return (
      <Text style={[styles.title,style]}>{text}</Text>
  )
}

Title.defaultProps = {
text:'Default Title'
}

export default Title
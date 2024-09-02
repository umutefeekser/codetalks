import { View, Text, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import styles from './RoomCard.style'

const RoomCard = ({item, onPress}) => {

  return (
    <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.container}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.length}>Toplam {item.messages ? Object.keys(item.messages).length : 0} Mesaj</Text>
        </View>
    </TouchableWithoutFeedback>
  )
}

export default RoomCard
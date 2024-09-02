import { View, TextInput, Text } from 'react-native'
import styles from './ContentInputModal.style'
import { useState } from 'react'
import Modal from 'react-native-modal'

import Button from '../../Button'

const ContentInputModal = ({visible, onClose, onSend}) => {

  const [text, setText] = useState("")

  function handleSend(){
    if(!text.trim()) {
      return
    }

    onSend(text)
    setText("")
  }

  return (
    <Modal
      style={styles.modal}
      isVisible={visible} 
      onSwipeComplete={onClose} 
      onBackdropPress={onClose} 
      onBackButtonPress={onClose}
      swipeDirection="down"
    >
      <View style={styles.container}>
        <TextInput 
          placeholder='Bir şeyler yaz' 
          onChangeText={setText}
          value={text}
          multiline
          style={styles.input_container}
          />
        <Button text="Gönder" onPress={handleSend} />
      </View>
    </Modal>
  )
}

export default ContentInputModal
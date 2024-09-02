import { View, TextInput, Text } from 'react-native'
import styles from './RoomInputModal.style'
import { useState } from 'react'
import Modal from 'react-native-modal'

import Button from '../../Button'

const ContentInputModal = ({visible, onClose, onCreate}) => {

  const [text, setText] = useState("")

  function handleCreate(){
    if(!text.trim()) {
      return
    }

    onCreate(text)
    setText("")
  }

  function handleClose(){
    onClose()
    setText("")
  }

  return (
    <Modal
      style={styles.modal}
      isVisible={visible} 
      onSwipeComplete={handleClose} 
      onBackdropPress={handleClose} 
      onBackButtonPress={handleClose}
      swipeDirection="down"
    >
      <View style={styles.container}>
        <Text style={styles.text}>{text.length}/80</Text>
        <TextInput 
          placeholder='Oda adı(en fazla 80 karakter)'
          onChangeText={setText}
          value={text}
          multiline
          maxLength={80}
          style={styles.input_container}
          />
        <Button text="Oluştur" onPress={handleCreate} />
      </View>
    </Modal>
  )
}

export default ContentInputModal
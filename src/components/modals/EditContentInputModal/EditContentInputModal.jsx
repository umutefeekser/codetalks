import { View, TextInput } from 'react-native'
import styles from './EditContentInputModal.style'
import { useEffect, useState } from 'react'
import Modal from 'react-native-modal'

import Button from '../../Button'

const EditContentInputModal = ({visible, onClose, onEdit}) => {

  const [text, setText] = useState(visible.text)

  useEffect(()=>{
    setText(visible.text)
  },[visible])

  function handleEdit(){
    if(!text.trim()) {
      return
    }

    onEdit(visible.id, text)
  }

  return (
    <Modal
      style={styles.modal}
      isVisible={visible !== false} 
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
        <Button text="Düzenle" onPress={handleEdit} />
      </View>
    </Modal>
  )
}

export default EditContentInputModal
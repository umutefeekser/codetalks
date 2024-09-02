import { TouchableOpacity } from 'react-native'
import styles from './FloatingButton.style'
import { Ionicons } from '@expo/vector-icons'

const FloatingButton = ({onPress, color="orange"}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles[color]}>
      <Ionicons name="add" size={48} color="white" />
    </TouchableOpacity>
  )
}

export default FloatingButton
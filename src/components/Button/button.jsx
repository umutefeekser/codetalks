import { ActivityIndicator, Text, TouchableOpacity } from 'react-native'
import styles from './button.style'

const Button = ({text, onPress, loading, theme="primary"}) => {
  return (
    <TouchableOpacity disabled={loading} onPress={onPress} style={styles[theme].container}>
      {loading ? 
      <ActivityIndicator color={theme=="primary" ? "white" : "#0fa4fa"} size="small" /> : 
      <Text style={styles[theme].title}>{text}</Text>
      }
    </TouchableOpacity>
  )
}

export default Button
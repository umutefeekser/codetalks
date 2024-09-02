import { View, TextInput } from 'react-native'
import styles from './input.style'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const Input = ({placeholder, onChangeText, value, iconName, isSecure}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        secureTextEntry={isSecure}
        autoCapitalize='none'
      />
      <MaterialCommunityIcons name={iconName} size={24} color="black" />
    </View>
  )
}

export default Input
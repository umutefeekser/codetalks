import { Text, TouchableOpacity, View } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { formatDistance, parseISO } from 'date-fns'
import styles from './MessageCard.style'
import { tr } from 'date-fns/locale';
import { auth } from '../../../firebaseConfig';
import AntDesign from '@expo/vector-icons/AntDesign';

const MessageContent = ({item, onDelete, onEdit}) => {

  const formattedDate = formatDistance(parseISO(item.date), new Date(), { addSuffix: true, locale: tr })

  return (
    <View style={styles.container}>
      <View style={styles.top_container}>
        <View style={styles.user_container}>
          <FontAwesome name="user-circle" size={24} color="black" />
          <Text style={styles.username}>{item.username}</Text>
        </View>
        <Text style={styles.date}>{formattedDate}</Text>
      </View>

      <View style={styles.inner_container}>
        <Text style={styles.text}>{item.message}</Text>
      </View>

      <View style={styles.bottom_container}>
        {item.username == auth.currentUser.email.split("@")[0] &&
          <>
          <TouchableOpacity onPress={() => onEdit(item.id, item.message)} style={styles.button}>
              <AntDesign style={styles.button_text} name="edit" size={18} color="#0fa4fa" />
          </TouchableOpacity>
          <TouchableOpacity onPress={onDelete} style={styles.button}>
              <AntDesign style={styles.button_text} name="delete" size={18} color="#0fa4fa" />
          </TouchableOpacity>
          </>
        }
      </View>
    </View>
  )
}

export default MessageContent
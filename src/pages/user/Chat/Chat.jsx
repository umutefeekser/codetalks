import { View, FlatList, Alert, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { onValue, push, remove, update } from 'firebase/database'
import { auth, roomRef } from '../../../firebaseConfig'
import parseContentData from '../../../utils/parseContentData';
import styles from './Chat.style'

import FloatingButton from '../../../components/FloatingButton';
import MessageCard from '../../../components/cards/MessageCard';
import ContentInputModal from '../../../components/modals/ContentInputModal';
import EditContentInputModal from '../../../components/modals/EditContentInputModal';

const Chat = ({navigation, route}) => {

  const [list, setList] = useState([])
  const [modalShown, setModalShown] = useState(false)
  const [editModalShown, setEditModalShown] = useState(false)

  useEffect(()=>{
    navigation.setOptions({headerTitle: route.params.name})

    onValue(roomRef(`${route.params.id}/messages`), (snapshot) => {
      
      setList(parseContentData(snapshot.val() || {}));
    })
  },[])

  const handleSend = (text) => {
    push(roomRef(`${route.params.id}/messages`), {
      date: (new Date()).toISOString(),
      username: auth.currentUser.email.split("@")[0],
      message: text,
    })
    setModalShown(!modalShown)
  }

  const handleDelete = (id) => {
    Alert.alert('Codetalks', 'Mesajınızı silmek istediğinize emin misiniz?',
      [
        {
          text:'İptal',
          style:'cancel'
        },
        {
          text:'Sil',
          onPress: () => remove(roomRef(`${route.params.id}/messages/${id}`))
        }
      ],
      { 
        cancelable: true
      }
    )
  }

  const toggleEdit = (id, text) => {
    setEditModalShown({id, text})
  }

  const handleEdit = (id, text) => {
    update(roomRef(`${route.params.id}/messages/${id}`), {
      message: text
    })
    setEditModalShown(false)
  }

  const renderItem = ({item}) => <MessageCard 
    item={item} 
    onDelete={()=>handleDelete(item.id)} 
    onEdit={toggleEdit} 
  />


  return (
    <View style={styles.container}>
      <FlatList 
        data={list}
        renderItem={renderItem}
      />
      <FloatingButton color="blue" onPress={()=>setModalShown(!modalShown)} />

      <ContentInputModal visible={modalShown} onClose={()=>setModalShown(!modalShown)} onSend={handleSend} />
      <EditContentInputModal visible={editModalShown} onClose={()=>setEditModalShown(false)} onEdit={handleEdit}  />
    </View>
  )
}

export default Chat
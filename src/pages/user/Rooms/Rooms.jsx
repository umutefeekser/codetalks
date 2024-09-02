import { ActivityIndicator, FlatList, Modal, View } from 'react-native';
import FloatingButton from '../../../components/FloatingButton';
import { useEffect, useState } from 'react';
import { onValue, push } from 'firebase/database';
import styles from './Rooms.style';

import RoomCard from '../../../components/cards/RoomCard';
import { roomRef } from '../../../firebaseConfig';
import parseRoomData from '../../../utils/parseRoomData';

import RoomInputModal from '../../../components/modals/RoomInputModal';

const Rooms = ({navigation}) => {

  const [list, setList] = useState([])
  const [loading, setLoading] = useState(true)
  const [modalShown, setModalShown] = useState(false)

  useEffect(()=>{
    onValue(roomRef(), (snapshot) => {
      setList(
        parseRoomData(snapshot.val() || {})
      )
      setLoading(false)
    })
  },[])

  const handleClick = (item) => {
    navigation.navigate("ChatPage", {
      name: item.name,
      id: item.id
    })
  }

  const handleCreateRoom = (text) => {
    push(roomRef(), {
      name: text
    })
    setModalShown(!modalShown)
  }

  const renderItem = ({item}) => <RoomCard item={item} onPress={()=>handleClick(item)} />
  if(loading) return <ActivityIndicator style={{flex: 1, alignSelf: "center"}} size="large" color="orange" />

  return (
    <View style={styles.container}>
      <FlatList
        data={list}
        renderItem={renderItem}
        key={0}
        numColumns={2}
      />
      <FloatingButton onPress={()=>setModalShown(!modalShown)} />

      <RoomInputModal
        visible={modalShown} 
        onClose={()=>setModalShown(!modalShown)}
        onCreate={handleCreateRoom}
      />
      
    </View>
  )
}

export default Rooms
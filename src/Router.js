import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from './firebaseConfig';

import LoginPage from './pages/auth/Login'
import SignPage from './pages/auth/SignUp'
import RoomsPage from './pages/user/Rooms'
import ChatPage from './pages/user/Chat'

const Router = () => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    setLoading(true)

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false)
    });

    return () => unsubscribe();
  }, []);

  const Stack = createNativeStackNavigator()

  const AuthStack = () => {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="SignUpPage" component={SignPage} />
      </Stack.Navigator>
    )
  }

  const UserStack = () => {
    return (
      <Stack.Navigator screenOptions={{
        headerRight: () => <MaterialCommunityIcons name="logout" size={26} color="orange" onPress={()=>signOut(auth)} />,
        headerTitleAlign: "center",
        headerTintColor: "orange",
        headerTitleStyle: { fontSize: 25 }
      }}>
        <Stack.Screen name="RoomsPage" component={RoomsPage} options={{headerTitle: "Odalar"}} />
        <Stack.Screen name="ChatPage" component={ChatPage} />
      </Stack.Navigator>
    )
  }

  if(loading) return <ActivityIndicator style={{flex: 1, alignSelf: "center"}} size="large" color="orange" />

  return (
    <NavigationContainer>
        {
          user == null
          ? <AuthStack />
          : <UserStack/>
        }
    </NavigationContainer>
  )
}

export default Router
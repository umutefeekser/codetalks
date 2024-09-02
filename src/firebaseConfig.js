import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getDatabase, ref } from "firebase/database";
import AsyncStorage from '@react-native-async-storage/async-storage'

const firebaseConfig = JSON.parse(process.env.EXPO_PUBLIC_FIREBASE)
const app = initializeApp(firebaseConfig)

// AUTH
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
})

// REALTIME DATABASE
const database = getDatabase()

const roomRef = (path) => {
    return ref(database, `rooms/${path || ""}`)
}


export {app, auth, database, roomRef}
import { View, Text } from 'react-native'
import React, { useState } from 'react'
import styles from './Login.style'
import { Formik } from 'formik'
import { showMessage } from 'react-native-flash-message'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../../firebaseConfig'
import authErorrMessageParser from '../../../utils/authErrorMessageParser'

import Input from '../../../components/Input'
import Button from '../../../components/Button'

const Login = ({navigation}) => {

  const [loading, setLoading] = useState(false)

  const initialValues = {
    mail: "",
    password: ""
  }

  const handleSubmit = async(values) => {
    setLoading(true)
    try {
      await signInWithEmailAndPassword(auth, values.mail, values.password)
      showMessage({
        message: "Başarıyla giriş yaptınız.",
        type: "success"
      })
    } catch (error) {
      showMessage({
        message: authErorrMessageParser(error.code),
        type: "danger"
      })
    }finally {
      setLoading(false)
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.logo_container}>
        <Text style={styles.logo_text}>codetalks</Text>
        <Text style={styles.auth_text}>Giriş</Text>
        </View>
      <View style={styles.input_container}>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          {({values, handleChange, handleSubmit}) => (
            <>
              <Input
                placeholder="Mail adresinizi giriniz."
                value={values.mail}
                onChangeText={handleChange("mail")}
              />
              <Input
                placeholder="Şifrenizi giriniz."
                value={values.password}
                onChangeText={handleChange("password")}
                isSecure 
              />
              <Button 
                text="Giriş Yap" 
                onPress={handleSubmit} 
                loading={loading}
              />
            </>
          )}
        </Formik>
        <Button 
          text="Hesabın yok mu? Kayıt Ol!" 
          theme='secondary'
          onPress={()=>navigation.navigate("SignUpPage")}
          loading={loading}
        />
      </View>
    </View>
  )
}

export default Login
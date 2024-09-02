import { View, Text } from 'react-native'
import React, { useState } from 'react'
import styles from './Signup.style'
import { Formik } from 'formik'
import { showMessage } from 'react-native-flash-message'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../../firebaseConfig'
import authErorrMessageParser from '../../../utils/authErrorMessageParser'

import Input from '../../../components/Input'
import Button from '../../../components/Button'

const SignUp = ({navigation}) => {
  const [loading, setLoading] = useState(false)

  const initialValues = {
    mail: "",
    password: "",
    passwordAgain: ""
  }

  const handleSubmit = async(values) => {
    if(values.password !== values.passwordAgain) return showMessage({
      message: "Şifreler aynı değil.",
      type: "danger"
    })
    setLoading(true)
    try {
      await createUserWithEmailAndPassword(auth, values.mail, values.password)
      showMessage({
        message: "Başarıyla kayıt oldunuz.",
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
        <Text style={styles.auth_text}>Kayıt</Text>
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
              <Input
                placeholder="Şifrenizi tekrar giriniz."
                value={values.passwordAgain}
                onChangeText={handleChange("passwordAgain")}
                isSecure 
              />
              <Button 
                text="Kayıt Ol" 
                onPress={handleSubmit} 
                loading={loading}
              />
            </>
          )}
        </Formik>
        <Button 
          text="Zaten hesabın var mı? Giriş Yap!" 
          theme='secondary'
          onPress={()=>navigation.goBack()}
          loading={loading}
        />
      </View>
    </View>
  )
}

export default SignUp
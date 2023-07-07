import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';
import style from '../styles/loginStyle';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    const unsub = auth.onAuthStateChanged(user => {
      if (user) {
       navigation.replace("Home");
      }
    })
    //stop listening for auth state change
    return unsub
  }, [])
  
  //Sign up function
  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Registered with: ', user.email);
      }) 
      .catch(error => alert(error.message))
  }
  //Login function
  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
    .then(userCredentials => {
      const user = userCredentials.user;
      console.log('Logged in with: ', user.email);
    }) 
    .catch(error => alert(error.message))
  }
  return (
    <KeyboardAvoidingView
      style={style.container}
      behavior="padding"
    >
      <View style={style.inputContainer}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          style={style.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={text => setPassword(text)}
          style={style.input}
          secureTextEntry
        />
      </View>
      
      <View style={style.buttonContainer}>
        <TouchableOpacity
          onPress={handleLogin}
          style={style.button}
        >
          <Text style={style.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleSignUp}
          style={[style.button, style.buttonOutline]}
        >
          <Text style={style.registerButton}>Register</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>

  )
}

export default LoginScreen

















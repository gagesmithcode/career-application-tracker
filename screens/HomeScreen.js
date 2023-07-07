import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import style from '../styles/homePageStyle';
import { auth } from '../firebase';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
       navigation.replace("Login");
      })
      .catch(error => Alert(error.message))
  }

  return (
    <View style={style.container}>
      <Text>Email: {auth.currentUser?.email}</Text>
      <TouchableOpacity
        onPress={handleSignOut}
        style={style.button}
      >
        <Text style={style.buttonText}>Sign out</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomeScreen

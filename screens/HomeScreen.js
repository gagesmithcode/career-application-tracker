import { Text, TouchableOpacity, View, FlatList } from 'react-native';
import React from 'react';
import style from '../styles/homePageStyle';
import { auth } from '../firebase';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  //static data for testing until email data can be gathered
  const data = [{id:1, title:"Google", description:"Thank you for applying to work for Google. We will reach out to you if we think you are a good fit for the position!"}];

  //Sign out function
  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
       navigation.replace("Login");
      })
      .catch(error => Alert(error.message))
  }

  const Item = ({title, description}) => (
    <View>
      <Text style={style.title}>{title}</Text>
      <Text> {description} </Text>
    </View>
  );

  const renderItem = ({ item }) => (
    <Item title={item.title} description={item.description} />
  );

  return (
    <View style={style.container}>
      {data && (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          />
      )}
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

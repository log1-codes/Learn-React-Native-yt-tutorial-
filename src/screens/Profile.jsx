import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';

const Profile = ({ navigation, route }) => {
  const { id, name } = route.params;
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
      }}
    >
      <Text style={{ fontSize: 20, fontWeight: 500, marginBottom: 10 }}>
        Profile
      </Text>
      <Button title="search" onPress={() => navigation.navigate('Search')} />
      <View style={{ marginTop: 20,display:"flex" , justifyContent:"center", flexDirection:"row", gap:10, alignItems: 'center' }}>
        <Text style={{ fontSize: 20, fontWeight: 500 }}>Id: {id}</Text>
      <Text style={{ fontSize: 20, fontWeight: 500 }}>Name: {name}</Text>
      </View>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});

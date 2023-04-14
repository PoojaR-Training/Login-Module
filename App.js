import React,{useState} from 'react';
import {View, Text, StyleSheet,Button} from 'react-native';

const App = () => {
  const [name,setname]= useState("First Name",)
  
  const updateName = () => {
    setname("Name Updated")
  };
  return (
    <View>
      <Text style={{fontSize : 30, marginTop : 50, marginLeft:10}}>States Example</Text>
      <Text style={{fontSize : 20, marginTop : 20, textAlign: "center"}}>{name}</Text>
      <Button title='Change Name' color={"green"} onPress={updateName}/> 
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
  },
});

export default App;

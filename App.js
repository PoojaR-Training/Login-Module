import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, ScrollView, SafeAreaView} from 'react-native';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen/SignUpScreen';
import EmailConfirm from './src/screens/EmailConfirmScreen/EmailConfirm';
import ForgetPasswordScreen from './src/screens/ForgetPasswordScreen/ForgetPasswordScreen';
import NewPasswordScreen from './src/screens/NewPasswordScren/NewPasswordScreen';
import Navigation from './src/navigation';
const App = () => {
 
  return (
   
      <SafeAreaView style={styles.main}>
    <Navigation/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    marginTop: 20,
    backgroundColor: '#dee1e3',
  },
});

export default App;

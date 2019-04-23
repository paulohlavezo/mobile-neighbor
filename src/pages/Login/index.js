/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Image, KeyboardAvoidingView } from "react-native";
import LoginForm from './LoginForm';

export default class Login extends Component {
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.logoContainer}>
          <Image 
            style={styles.logo}
            source={require('../../images/logo.png')}/>
        </View>
        <View style={styles.formcontainer}>
        <LoginForm />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000000"
  },
  logoContainer:{
    flexGrow: 1,
    justifyContent: 'center'

  },
  logo:{
    width:100
  }

});

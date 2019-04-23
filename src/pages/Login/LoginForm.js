/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, TextInput, TouchableOpacity, StatusBar } from "react-native";

export default class LoginForm extends Component {
  render() {
    return (
      <View style={styles.container}>
      <StatusBar 
        barStyle="light-content"
        />  
        <TextInput
            placeholder="email"
            placeholderTextColor="rgba(255,255,255,0.7)"
            onSubmitEditing={() => this.passwordInput.focus()}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input}
            />
        <TextInput
            placeholder="senha"
            placeholderTextColor="rgba(255,255,255,0.7)"
            secureTextEntry  
            style={styles.input}
            ref={(input) => this.passwordInput = input}
            />
            <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.buttonText}>LOGIN</Text>
            </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      padding: 20

  },
  input: {
      height: 40,
      backgroundColor: 'rgba(255,255,255,0.1)', //trocar a cor
      marginBottom: 20,
      color: '#FFF',
      paddingHorizontal: 100
  },
  buttonContainer: {
      backgroundColor: 'rgb(62,249,139)',
      paddingVertical: 10
  },
  buttonText: {
      textAlign: 'center',
      color: '#FFF',
      fontWeight: '700'
  }

});

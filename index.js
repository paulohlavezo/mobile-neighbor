/**
 * @format
 */

import React, { Component } from "react";
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

import Login from "./src/pages/Login";
import { name as appName } from "./app.json";

AppRegistry.registerComponent(appName, () => Login);

export default class Neighbor extends Component{
    render(){
        return(
            <Login />
        );
    }
}
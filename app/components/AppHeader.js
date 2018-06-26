import React, { Component } from "react";
import { StyleSheet, Image, StatusBar } from 'react-native';
import {
    Container,
    Header,
    Title,
    Content,
    Button,
    Left,
    Right,
    Body,
    Text,
   
} from "native-base";

import headlogo from '../resource/headlogo1White.png';

class AppHeader extends Component {
    render() {
        return (
            
             <Header style={styles.head}>
                <StatusBar
                    backgroundColor="#8b181c"
                    barStyle="light-content"
                    translucent={false}
                />
                <Body style={{alignItems: 'center'}}>
                    <Image style={styles.headlogo} source={headlogo} />
                </Body> 
            </Header>
           
        );
    }
} 

const styles = StyleSheet.create({ 
    head: {
        backgroundColor: "#9f1c20",
   
    },
    titlehead:{
        color: "#800000"
    },
    headlogo:{
        height: 100,
        width: 160,
        
    }
});

export default AppHeader;
import React, { Component } from 'react';
import {StyleSheet, Image, View, Text} from 'react-native';

import Menuitem from '../components/Menuitem';
import Imgslider from '../components/Imgslider';
class Home extends Component {
    render() {
        return (
           
                 
                    <View style={styles.containOverlay}>
                        
                    <Imgslider style={styles.img} />
                        <View style={styles.menuContain}>
                            <Menuitem itemImage={require('../resource/icon1.png')} />
                            <Menuitem itemImage={require('../resource/icon2.png')} />
                            <Menuitem itemImage={require('../resource/icon3.png')} />
                        </View>
                    </View>
                                  
            
           
        );
    }
}

const styles = StyleSheet.create({
    img: {
        alignSelf: 'center',
        height: 180,
        width: 450,
     
    },
    containOverlay:{
        flex: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.26)'
    },
    top: {
        height: '50%',
      
        justifyContent:'center'
    },
    homeTitle:{
        color: '#fff',
        fontSize: 28,
        borderColor: '#fff',
        borderWidth: 2,
        padding: 70,
        
        paddingRight: 70,
        backgroundColor: 'rgba(224,224,224, .1)'
    },
    menuContain:{
        height: '50%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-end'
    }
});

export default Home;


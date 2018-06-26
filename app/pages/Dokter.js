import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Body, Left } from 'native-base';

class Dokter extends Component {
    render () {
        return (
        <Content>
            <Card style={{flex: 0}}> 
                <CardItem> 
                    <Left>
                        <Thumbnail source={require('../resource/dok1.jpg')} />
                        <Body>
                            <Text>dr. Meita Marseilla Siborutorop </Text>
                            <Text note> Dokter Umum </Text>
                            <Text note> 08.00 - 15.00 </Text>
                        </Body>
                    </Left>
                </CardItem>
            </Card>

                <Card style={{ flex: 0 }}>
                    <CardItem>
                        <Left>
                            <Thumbnail source={require('../resource/dok2.jpg')} />
                            <Body>
                                <Text>dr. Andre Hasiholan Simarmata </Text>
                                <Text note> Dokter Umum </Text>
                                <Text note> 08.00 - 15.00 </Text>
                            </Body>
                        </Left>
                    </CardItem>
                </Card>
        </Content>
        )
    }
}
export default Dokter;
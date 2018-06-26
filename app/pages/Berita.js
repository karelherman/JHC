import React, { Component } from 'react';
import {Image, StyleSheet} from 'react-native';
import {Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Body, Left} from 'native-base';

class Berita extends Component {
    render() {
        return (
            <Content>
                <Card style={{flex: 0}}>
                    <CardItem>
                        <Left>
                            <Body>
                                <Text>Dokter Baru JHC</Text>
                                <Text note>2 November 2017</Text>
                            </Body>
                        </Left>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <Image source={require('../resource/card1.jpg')} style= {styles.CardHead} />
                            <Text>
                                "Selamat datang kami ucapkan kepada semua pada Dokter yang baru bergabung bersama keluarga RS. Jantung Jakarta"
                                Sukses buat kita semua, semangat JHC...!
                            </Text>
                        </Body>
                    </CardItem>
                    <CardItem>
                       
                            <Button transparent textStyle={{ color: '#9f1c20'}}>
                            <Text>Read More >>> </Text>
                            </Button>
                        
                    </CardItem>
                </Card>

                <Card style={{ flex: 0 }}>
                    <CardItem>
                        <Left>
                            <Body>
                                <Text>HKN, Sehat Keluargaku Sehat Indonesiaku</Text>
                                <Text note>14 November 2017</Text>
                            </Body>
                        </Left>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <Image source={require('../resource/card2.jpg')} style={styles.CardHead} />
                            <Text>
                                
                            </Text>
                        </Body>
                    </CardItem>
                </Card>
            </Content>

            

            
        );
    }
}

const styles = StyleSheet.create({
    CardHead: {
        width: 400,
        height: 300,
        flex: 1,
        alignItems: 'center'
    }
});

export default Berita;
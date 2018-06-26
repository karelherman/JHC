import React, { Component } from 'react';
import { StyleSheet } from "react-native";
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';

class AppFooter extends Component {
    constructor() {
        super();
        this.state = {
            index: 0
        }
    }

    change(index) {
        this.setState({ index });
    }

    color = (index) => {
        return {
            color: (this.state.index == index) ? "#9f1c20" : "#cccccc",
            
        }
    }

    font = (index) => {
        return {
            fontSize: (this.state.index == index) ? "21" : "8"
        }
    }
    
    render() {
        return (
            
                <Footer>
                <FooterTab style={styles.footTab}>
                    <Button vertical onPress={() => this.change(0)} >
                        <Icon name="home" style={[this.color(0)]} />
                        {(this.state.index == 0) && (<Text style={[this.color(0)]}>Home</Text>)}
                        </Button>
                    <Button vertical onPress={() => this.change(2)}>
                            <Icon active name="person" style={[this.color(2)]} />
                            {(this.state.index == 2) && (<Text style={[this.color(2)]}>Profil</Text>)}
                        </Button>
                    <Button vertical onPress={() => this.change(3)}>
                            <Icon name="settings" style={[this.color(3)]}  />
                            {(this.state.index == 3) && (<Text style={[this.color(3)]}>More</Text>)}
                        </Button>
                    </FooterTab>
                </Footer>
            
        );
    }
}

const styles = StyleSheet.create({

    footTab: {
        backgroundColor: "#fff",
        borderWidth: 2,
        borderColor: "#cccccc"
    } 
});

export default AppFooter;
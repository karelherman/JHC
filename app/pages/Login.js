import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, KeyboardAvoidingView, Animated } from 'react-native';
import LoginForm from '../components/LoginForm';
import logo from '../resource/login.png';

class FadeInView extends Component {
	state = {
		fadeAnim: new Animated.Value(0),  
	}

	componentDidMount() {
		Animated.timing(                 
			this.state.fadeAnim,            
			{
				toValue: 1,                  
				duration: 500,             
			}
		).start();                        
	}

	render() {
		let { fadeAnim } = this.state;

		return (
			<Animated.View                 
				style={{
					...this.props.style,
					opacity: fadeAnim,        
				}}
			>
				{this.props.children}
			</Animated.View>
		);
	}
} 

class Login extends Component {
	render() {
		return (
			<KeyboardAvoidingView behavior="padding" enabled style={styles.container}>

				<View style = { styles.loginContainer }>
					<FadeInView style={{ width: 400, height: 400 }}>
						<Image style = { styles.logo } source = { logo } />
					</FadeInView>
				</View>
					
		
				<View style = { styles.formContainer }>
					<LoginForm />
				</View>
			
			</KeyboardAvoidingView>
		);
	} 
}

const styles = StyleSheet.create({


	container: {
		flex: 1,
		backgroundColor: 'white',
	},
	loginContainer:{
		alignItems: 'center',
		flexGrow: 1,
		justifyContent: 'center'
	},
	logo:{
		justifyContent: 'center',
		alignItems:'center',
		width: 400,
		height: 400

	},

});

export default Login;
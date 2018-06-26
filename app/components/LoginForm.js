import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, StatusBar } from 'react-native';
import { Button } from 'native-base'


const onButtonPress = () => {
	Alert.alert ('sda');
};

class LoginForm extends Component {
	render() {
		return (
			<View style={styles.container}>
				<StatusBar barStyle="light-content" />
				<TextInput style={styles.input}
					autoCapitalize="none"
					onSubmitEditing={() => this.passwordInput.focus()}
					autoCorrect={false}
					keyboardType='email-address'
					returnKeyType="next"
					placeholder='Email or Medical Number'
					placeholderTextColor='grey'
					underlineColorAndroid = 'transparent' />

				<TextInput style={styles.input}
					returnKeyType="go" ref={(input) => this.passwordInput = input}
					placeholder='Password'
					placeholderTextColor='grey'
					secureTextEntry
					underlineColorAndroid='transparent' />
				{/*   <Button onPress={onButtonPress} title = 'Login' style={styles.loginButton} /> */}
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
		backgroundColor: '#fff',
		borderWidth: 2,
		borderRadius: 20,
		borderColor: '#b33939',
		marginBottom: 10,
		padding: 10,
		color: '#800000'
	},
	buttonContainer: {
		backgroundColor: '#800000',
		paddingVertical: 15,
		borderRadius: 25
	},
	buttonText: {
		color: '#fff',
		textAlign: 'center',
		fontWeight: '700'
	},
	loginButton: {
		backgroundColor: '#800000',
	}

});

export default LoginForm;
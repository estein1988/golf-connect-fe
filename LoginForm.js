import React, {Component} from 'react';
import { TextInput, View, Text, StyleSheet, SafeAreaView, Button } from 'react-native';

export default class Login extends Component {

    state = {
        username: 'admin',
        password: '68qwerty'
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.login(this.state)
    }

    handleChangeUsername = (textValue)=>{
        this.setState({username: textValue})
    }

    handleChangePassword = (textValue)=>{
        this.setState({password: textValue})
    }

    render(){
        return (
            <View style={styles.inputContainer}>  
                <TextInput
                    style={styles.textInput}
                    onChangeText={this.handleChangeUsername}
                    value={this.state.username}
                />
                <TextInput
                    style={styles.textInput}
                    onChangeText={this.handleChangePassword}
                    value={this.state.password}
                />
                <SafeAreaView style={styles.loginContainer}>
                    <Button                         
                        onPress={this.handleSubmit} 
                        style={styles.loginButtonText}
                        title="Login">
                    </Button>
                </SafeAreaView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    inputContainer: {
        paddingTop: 300
    },
    textInput: {
        borderColor: '#CCCCCC',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        height: 50,
        fontSize: 25,
        paddingLeft: 20,
        paddingRight: 20
    },
    loginContainer: {
        borderWidth: 1,
        borderColor: '#007BFF',
        backgroundColor: '#007BFF',
        padding: 15,
        margin: 5,
    },
    loginButtonText: {
        color: '#FFFFFF',
        fontSize: 20,
        textAlign: 'center'
    }
});


import React, {Component} from 'react';
import { TextInput, View, StyleSheet, Button } from 'react-native';

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
                <View style={styles.loginContainer}>
                    <Button                         
                        onPress={this.handleSubmit} 
                        style={styles.loginButtonText}
                        color='#ffffff'
                        title="Login">
                    </Button>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    inputContainer: {
        paddingTop: 10
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
        borderColor: '#007BFF',
        backgroundColor: '#007BFF',
        padding: 1,
        margin: 5,
    }
});


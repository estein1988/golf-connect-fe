import React, {useState} from 'react';
import { TextInput, View, StyleSheet, Button } from 'react-native';

export default function Login({login}) {

    const [username, setUsername] = useState('admin')
    const [password, setPassword] = useState('password123')

    const handleSubmit = (event) => {
        event.preventDefault()
        login({username, password})
    }

    const handleChangeUsername = (textValue)=>{
        setUsername(textValue)
    }

    const handleChangePassword = (textValue)=>{
        setPassword(textValue)
    }

    return (
        <View style={styles.inputContainer}>  
            <TextInput
                style={styles.textInput}
                onChangeText={handleChangeUsername}
                value={username}
            />
            <TextInput
                style={styles.textInput}
                onChangeText={handleChangePassword}
                value={password}
            />
            <View style={styles.loginContainer}>
                <Button                         
                    onPress={handleSubmit}
                    color='#ffffff'
                    title="Login">
                </Button>
            </View>
        </View>
    );
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
        fontSize: 20,
        paddingLeft: 20,
        paddingRight: 20
    },
    loginContainer: {
        borderColor: '#007BFF',
        backgroundColor: '#007BFF',
        padding: 3,
        margin: 3,
    }
});
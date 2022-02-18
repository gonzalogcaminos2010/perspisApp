import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native-web'

const LoginScreen = () => {

    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
  return (
    <KeyboardAvoidingView
    style={styles.container}
    behavior="padding">
        <View style={styles.inputContainer}>
            <TextInput
            placeholder="Username"
            value={email}
            onChangeText={text => setEmail(text)}
            style={styles.input}
            />
            <TextInput
            placeholder="Password"
            value={password}
            onChangeText={text => setPassword(text)}
            style={styles.input}
            secureTextEntry={true}
            />
        </View>

        <View style={styles.buttonContainer}>
            <TouchableOpacity
                onPress={() => {}}
                style={styles.button}>
                <Text style={styles.buttonText}>
                    Login
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => {}}
            style={styles.button}
            >
            <Text style={
                
                styles.button,
                styles.buttonOutlineText}>
                    Register
            </Text>

            
            


            </TouchableOpacity>
             
                    
        </View>
      
    </KeyboardAvoidingView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    inputContainer: {
        width: '80%',
        alignItems: 'center',
    },
    input: {
        backgroundColor:'white',
        paddingHorizontal:15,
        paddingVertical:10,
        borderRadius:10,
        marginTop:5,
    },
    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:40,
    },
    button: {
        backgroundColor:'#0782F9',
        width:'100%',
        padding:15,
        borderRadius:10,
        marginTop:5,
        alignItems: 'center',
    },
    buttonText: {
        color:'white',
        fontWeight:'700',
        fontSize:16,

    },
    buttonOutline:{
        backgroundColor:'white',
        marginTop:5,
        borderColor:'#0782F9',
        borderWidth:2,
    },
    buttonOutlineText: {
        color:'#0782F9',
        fontWeight:'700',
        fontSize:16,
    }
})
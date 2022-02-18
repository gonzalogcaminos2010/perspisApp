import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native-web'

const LoginScreen = () => {
  return (
    <KeyboardAvoidingView
    style={styles.container}
    behavior="padding">
        <View style={styles.inputContainer}>
            <TextInput
            placeholder="Username"
            //value={}
            //onChangeText={text =>}
            style={styles.input}
            />
            <TextInput
            placeholder="Password"
            //value={}
            //onChangeText={text =>}
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
    buttonContainer: {},
    button: {},
    buttonText: {},
    buttonOutline:{},
    buttonOutlineText: {}
})
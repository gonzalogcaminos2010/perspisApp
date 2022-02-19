import { useNavigation } from '@react-navigation/native'
import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native-web'
import { auth } from '../firebase'
import { NavigationContainer } from '@react-navigation/native'

const LoginScreen = () => {

    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const navigation = useNavigation()

    useEffect(() => {
        const unsuscribe = auth.onAuthStateChanged(user => {
            if (user) {
                navigation.navigate("Home")
            } 
        })
        return unsuscribe
    },[])

    const handleSignUp = () => {
        auth
        
        .createUserWithEmailAndPassword(email, password)
        .then(userCredentials=>{
            const user = userCredentials.user;
            console.log('Usuario registrado con',user.email)
        }).catch(error => alert(error.message));
        
    }
    const handleLogin = () => {
        auth
        .signInWithEmailAndPassword(email, password)
        .then(userCredentials=>{
            const user = userCredentials.user;
            console.log(user.email)
        }).catch(error => alert(error.message));
    }
  return (
      
     
    <KeyboardAvoidingView
    style={styles.container}
    behavior="padding">
        <View style={styles.inputContainer}>
        <View><Text>Perspiscal Login</Text>
     </View> 
     
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
                onPress={handleLogin}
                style={styles.button}>
                <Text style={styles.buttonText}>
                    Login
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={handleSignUp}
            style={[styles.button,styles.buttonOutline]}
            >
            <Text style={styles.buttonOutlineText}>Register</Text>

            
            


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
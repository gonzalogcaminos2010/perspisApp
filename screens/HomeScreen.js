/*nfes*/
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-web'
import { auth } from '../firebase'

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      
      <TouchableOpacity
        style={styles.button}

      
      >
          <Text>Sign Out</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor:'#0782F9',
        width:'60%',
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
})
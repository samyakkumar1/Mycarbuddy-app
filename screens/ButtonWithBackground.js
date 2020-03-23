import React from 'react';
import { StyleSheet, Text, View,Button,TouchableOpacity } from 'react-native';

const buttonWithBackground = props=>{
    const content = (
        <View style={[styles.button,{backgroundColor:props.color}]}>
            <Text style={styles.text}>{props.text} </Text>
        </View>



    )
    return<TouchableOpacity onPress={props.onPress}>{content}</TouchableOpacity>
}

const styles = StyleSheet.create({

    button:{
        width: 150,
        height: 150,
        padding:16,
        borderRadius:24,
        textAlign:'center',
        alignItems:'center',
        justifyContent: "center",
        textAlignVertical: 'center'

    },
    text:{
        color:'white',
        fontSize:20,
    

    }

});

export default buttonWithBackground;
import React, { useLayoutEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons'
import { TextInput } from "react-native-paper";
import { Button } from "react-native-paper";

export default function HomeScreen({navigation}){
    const [message, setMessage] = useState('Testing')

    useLayoutEffect(() =>{
    })
    return(
        <View style={styles.container}>
            <Text>Home Screen</Text>
            <TextInput value={message} onChangeText={text => setMessage(text)} />
                <View style={styles.container}>
            
                  <Button mode='elevated' onPress={() => {setMessage("Button pressed")}}>
                    Test button
                  </Button>
                  </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    }
});
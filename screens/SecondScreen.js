import React, { useEffect } from "react";
import { StyleSheet, View, Text, BackHandler } from "react-native";
import { Button } from "react-native-paper";

export default function SecondScreen({route,navigation}){

    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress',close)
        return() => {
            BackHandler.removeEventListener('hardwareBackPress',close)
        }
    }, [])

    close = () => {
        navigation.goBack(null)
        return true
    }

    return(
        <View style={styles.container}>
            <Text>Second screen</Text>
            <Text>{route.params?.message}</Text>
                <View style={styles.container}>
                  <Button mode='elevated'>
                    Button on second page
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
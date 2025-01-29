import React from "react";
import { Appbar } from "react-native-paper";
import Ionicons from '@expo/vector-icons/Ionicons'

export default function MainAppbar({ navigation, route, back,message }) {
    return (
        <Appbar.Header>
            {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
            <Appbar.Content title="Multiple page task" />
            {!back ? (
                <Ionicons
                    visible={true}
                    name="arrow-forward"
                    size={24}
                    onPress={() => navigation.navigate('Second', { message: message })}
                />):(null) }  
                </Appbar.Header>
    )
            
}
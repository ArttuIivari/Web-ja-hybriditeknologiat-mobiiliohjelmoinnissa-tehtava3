import React from "react";
import { Appbar } from "react-native-paper";


export default function MainAppbar(){
    return (
        <Appbar.Header>
            <Appbar.Content title="Multiple page task" />
            <Appbar.Action icon="magnify" onPress={() => {}} />
        </Appbar.Header>
    )
}
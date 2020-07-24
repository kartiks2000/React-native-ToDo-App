import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Items = (props) => {

    return(
        <TouchableOpacity onPress={props.delfn}>
            <View style={st2.litem}>
                <Text>{props.data}</Text>
            </View>
        </TouchableOpacity>    
    );
}

const st2 = StyleSheet.create({
    litem:{
        backgroundColor: "pink",
        borderColor: "grey",
        borderWidth: 4,
        color: 'red',
        padding: 9,
        margin: 10,
        width: '90%',
    }
});

export default Items;
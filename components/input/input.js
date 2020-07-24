import React,{ useState } from 'react';
import { View ,TextInput ,Button , StyleSheet} from 'react-native';

const Input = (props) => {

    const [typed,settyped] = useState("");

    const chnaging = (el) => {
        settyped(el.nativeEvent.text);
    }

    const addit = () => {
        props.add(typed);
        settyped('');
    }

    return(
        <View style={st.inputbox}>
            <TextInput placeholder="Type here..." style={{width: '70%',padding: 6, borderColor: "black", borderWidth: 3, margin: 10}} onChange={(el) => chnaging(el)} value={typed}/>
            <Button title="click" onPress={addit}/>
        </View>
    );
}

const st = StyleSheet.create({
    inputbox:{
        marginTop: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: "center"
    }
});

export default Input;
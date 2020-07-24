import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput ,FlatList,ScrollView } from 'react-native';

import Input from './components/input/input';
import List from './components/output/list';

export default function App() {

  const [list,setlist] = useState([]);

  const adding = (item) => {
    var temp = [...list,{item : item , key : item}];
    setlist(temp);
  }

  const deleting = (id) => {
    var temp = [...list];
    temp.map((i,idx) => {
        if(i.key == id){
          temp.splice(idx,1);
        }
    });
    setlist(temp);
  }

  return (
    <View>
      <View>
        <Input add={(item) => adding(item)}></Input>
      </View> 
      <ScrollView>
        <View>
          {list.map(i => {
            return <List it={i.item} key={i.key} del={(id) => deleting(i.key)}/>
          })}
        </View> 
      </ScrollView> 
    </View>
  );
}



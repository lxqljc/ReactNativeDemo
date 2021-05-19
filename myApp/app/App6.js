import React from 'react';
import {View, Text} from 'react-native';

const obj = {name: '张三'};
const arr = ['猫', '狗', '猪'];

const App = () => (
  <View>
    <Text>开心</Text>
    <Text>{'开心'}</Text>
    <Text>{123}</Text>
    <Text>{'true'}</Text>
    <Text>{obj.name}</Text>
    <Text>{arr}</Text>
    {arr.map(v => (
      <View key={v} style={{backgroundColor:'aqua'}}>
        <Text>===={v}====</Text>
      </View>
    ))}
  </View>
);

export default App;

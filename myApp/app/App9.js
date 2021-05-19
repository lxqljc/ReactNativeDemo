import React from 'react';
import {View, Text} from 'react-native';


const App = () => (
  <View>
    {console.log("调试")}
    <Text>================</Text>
    <Sub color="red"></Sub>
    <Text>================</Text>
  </View>
);

const Sub = props => (
  <View style={{backgroundColor: props.color}}>
    <Text>我是子组件</Text>
  </View>
);

export default App;

import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

const handlePress = () =>{
  alert("弹窗");
}

//touchable
const App = () => (
  <TouchableOpacity activeOpacity={0.5} onPress={handlePress}>
    <Text style={{fontSize:20}}>点击文本</Text>
  </TouchableOpacity>
);

export default App;

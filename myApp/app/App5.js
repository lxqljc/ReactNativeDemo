import React from 'react'
import {TextInput} from 'react-native';

const handleChangeText = (text) =>{
  alert(text);
}

//图片加载
const App = () => (
   <TextInput onChangeText={handleChangeText}/>
);

export default App;

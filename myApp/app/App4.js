import React from 'react';
import {ImageBackground,Text} from 'react-native';

//图片加载
const App = () => (
  <ImageBackground style={{width:'100%',height:'100%'}} source={require('./images/meinv.png')}>
    <Text>背景图片</Text>
  </ImageBackground>
);

export default App;

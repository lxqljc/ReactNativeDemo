import React from 'react';
import {View, Image} from 'react-native';

//图片加载
const App = () => (
  <View>
    <Image
      style={{width: 200, height: 200}}
      source={require('./images/meinv.png')}></Image>
    <Image
      style={{width: 200, height: 200}}
      source={{
        uri: 'https://img0.baidu.com/it/u=376499688,2536898268&fm=26&fmt=auto&gp=0.jpg',
      }}></Image>
    <Image
      style={{width: 200, height: 200}}
      source={require('./images/ceshi.gif')}></Image>
  </View>
);

export default App;

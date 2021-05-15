import React from 'react';
import {View, Text,Dimensions} from 'react-native';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

const App = () => (
  <View style={{backgroundColor: 'red', flex: 1, flexDirection: 'row'}}>
    <Text style={{color: 'blue', fontSize: 20}}>JSX,Hello1</Text>
    <Text>JSX,Hello2</Text>
    <View style={{width:screenWidth/2 , height:screenHeight/2, backgroundColor:'yellow'}}>
      <Text>屏幕的宽高都为一半</Text>
    </View>
  </View>
);

export default App;

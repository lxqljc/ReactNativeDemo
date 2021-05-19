import React, {Component} from 'react';
import {View, Text} from 'react-native';

//类组件
class App extends Component {

  state = {
    num:200
  }

  //组件挂载完毕
  componentDidMount(){
    console.log("组件挂载完毕");
  }

  render() {

    //1s钟修改
    setTimeout(() => {
      this.setState({
        num:1000
      });
    }, 1000);

   return <View><Text>{this.state.num}</Text></View>
  }
}

export default App;

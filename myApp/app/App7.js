import React, {Component} from 'react';
import {View, Text} from 'react-native';

//函数组件
// const App = () => {
//   let num = 200;
//   setInterval(() => {
//     num++;
//   }, 1000);
//   return (
//     <View>
//       <Text>{num}</Text>
//     </View>
//   );
// };

//类组件
class App extends Component {

  state = {
    num:200
  }

  //组件挂载完毕
  componentDidMount(){
    alert("发送异步请求");
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

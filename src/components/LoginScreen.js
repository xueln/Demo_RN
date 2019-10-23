import React from 'react'
import {View,Text,Button,Image,ScrollView,StyleSheet,TouchableOpacity,TextInput} from 'react-native'

export default class LoginScreen extends React.Component{
  constructor(){
    super();
    this.state={
      uname:"",
      upwd:""
    }
  }
  static navigationOptions={
    title:'管理员登录'
  }
  login=()=>{
    console.log(this.props);
    console.log(this.state.uname,this.state.upwd);
    let uname=this.state.uname;
    let upwd=this.state.upwd;
    // 使用fecth发送异步请求
    let url='http://www.codeboy.com/data/user/login.php';
    let body=`uname=${uname}&upwd=${upwd}`;
    let headers={'Content-Type':'application/x-www-form-urlencoded'};
    fetch(url,{
      method:'POST',
      headers,
      body      
    }).then((res)=>res.json()) //得到响应消息的头 等待主体完成 在解析JSON主体
    .then((resJson)=>{ 
        console.log(resJson);
        if(resJson.code==200){
          this.props.navigation.navigate('Main');
        }
    }).catch((err)=>console.log(err));
    
  }
  unameChange=(e)=>{
    this.setState({
      uname:e
    });
  }
  pwdChange=(e)=>{
    this.setState({
      upwd:e
    });
  }
  render(){
    return (
      <View style={ss.container}>
        <TextInput style={ss.input} placeholder='请输入管理员用户名' placeholderTextColor='#333' value={this.state.uname} onChangeText={this.unameChange}></TextInput>
        <TextInput style={ss.input} placeholder='请输入管理员用户名' placeholderTextColor='#333' value={this.state.upwd} onChangeText={this.pwdChange}></TextInput>
        <View style={ss.btnBox} >
          <Button title="登录" onPress={this.login}></Button>
        </View>
          <View style={ss.ViewrRow}>
            <TouchableOpacity onPress={this.jumpToMain}>
            {/* /图片没有事件 */}
            <Image source={require('../assets/logo.png')}/>
            </TouchableOpacity>
            <Text style={ss.font}>后台管理系统</Text>
          </View>
          <Text style={ss.copy}>@ 2017 版权所有, CODYBOY.COM</Text>
        
      </View> 
    )
  }
}
let ss=StyleSheet.create({
  container:{
    padding:30,
    paddingTop:40
  },
  input:{
    borderBottomWidth:0.5,
    borderBottomColor:'#85939d',
    padding:8
  },
  btnBox:{
    paddingTop:25,
    paddingBottom:35
  },
  ViewrRow:{
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
    paddingBottom:40
  },
  font:{
    fontSize:25,
    color:'#85939d'
  },
  copy:{
    textAlign:'center',
    color:'#85939d'
  }
})
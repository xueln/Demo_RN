import React from 'react'
import {View,ActivityIndicator,Image,Dimensions,StyleSheet} from 'react-native'
import MyImage from './MyImage.js'
// 把this.props.html中的html元素转化为RN组件
export default class HTML2RN extends React.Component{
  render(){
    if(this.props.html){
      // console.log(this.props.html);
      //从原始的html片段中截取其中所有的图片路径
      let list=this.props.html.match(/img\/\S+\.jpg/g);
      console.log(list);
      return (
        <View>
          {list.map((e,i,arr)=>{
            return <MyImage key={i} uri={'http://www.codeboy.com/'+e}/> 
          })}
        </View>
      )
    }else{
      return <ActivityIndicator size="large"></ActivityIndicator>
    }
  }
}


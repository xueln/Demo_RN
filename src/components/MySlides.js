import React from 'react'
import {View,Image,Dimensions,StyleSheet} from 'react-native'
export default class MySlides extends React.Component{
  timer = null;  //驱动轮播广告动起来的定时器
  constructor(){
    super();
    this.state={
      currentI:0
    }
  }
  componentWillUnmount(){
    // 清除定时器  防止内存泄露
    clearInterval(this.timer);
  }
  render(){
    // console.log(this.props.picList);
    //异步获取的属性值 第一次渲染时,其值为undefined
    if(this.props.picList){
      console.log(this.props.picList);
      // 当图片获取到时 启动定时器
      if(this.timer==null){
        // 定时器尚未启动 启动一次即可
        this.timer=setInterval(()=>{
          let currentI=this.state.currentI;
          currentI+=1;
          if(currentI>=this.props.picList.length){
            currentI=0;
          }
          this.setState({currentI});
        },2000)
      }
        return (

          <View>
            <Image style={ss.fullWidth} source={{uri:'http://www.codeboy.com/'+this.props.picList[this.state.currentI].md}}></Image>
          </View>
        )
    }else{
      return  (
        <View>
          <Image style={ss.fullWidth} source={require('../assets/loading.jpg')}></Image>
        </View>
      )
    }
  }
}

let ss= StyleSheet.create({
  // 图片的宽高都等于屏幕的宽
  fullWidth:{
    width:Dimensions.get('window').width-20,
    height:Dimensions.get('window').width-20
  }
})
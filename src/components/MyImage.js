import React from 'react';
import {View,Image,Dimensions} from 'react-native';
// 把原本宽高各异的图片 统一为: 
// 宽度为屏幕宽度 高度与原图等比例缩放
// 假设屏幕宽为500
export default class MyImage extends React.Component{
  constructor(){
    super();
    this.state={
      originWidth:0,  //原始宽度
      originHeight:0,  //原始高度
      displayWidth:Dimensions.get('window').width-20,isplayHeight:0
    }
  }
  componentDidMount(){
    Image.getSize(this.props.uri,(w,h)=>{
      let displayHeight=this.state.displayWidth/w*h;
      this.setState({
        originWidth:w,
        originHeight:h,
        displayHeight
      });
      
    },(err)=>{console.log(err)});
  }
  render(){
    return (
      <Image source={{uri:this.props.uri}} style={{width:this.state.displayWidth,height:this.state.displayHeight}}></Image>
    )
  }
}
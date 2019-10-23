
import React from 'react'
import {View,Text,Button,Image,ScrollView,StyleSheet} from 'react-native'
import MySlides from './MySlides.js'
import HTML2RN from './HTML2RN.js'
export default class ProductDetailScreen extends React.Component{
  static navigationOptions=(({navigation})=>{
    return {
      title:'商品详情'
    }
  })
  constructor(){
    super();
    this.state={
      product:{}
    }
  }
  // 组件挂载完成 读取前一个路由组件传递过来的参数
  componentDidMount(){
    let lid=this.props.navigation.state.params.lid;
    console.log(lid);
    // 发送异步请求 获取详情数据
    let url="http://www.codeboy.com/data/product/details.php?lid="+lid;
    fetch(url).then((res)=>res.json()).then(
      (result)=>{
        console.log(result);
        this.setState({product: result.details})
      }
    ).catch(err=>console.log(err))
  }
  render(){
    let p = this.state.product;
    return (
      <View style={ss.container}>
        <ScrollView>
          <Text>产品型号:{p.lname}</Text>
          <View style={ss.hr}></View>
          <MySlides picList={p.picList}></MySlides>
          <Text style={ss.title}>{p.title}</Text>
          <Text>{p.subtitle}</Text>
          <Text>{p.price}</Text>
          <View style={ss.hr}></View>
          {/* HTML片段不可能在RN中被渲染 */}
          <HTML2RN html={p.details}></HTML2RN>
        </ScrollView>
        <Button title="删除商品"></Button>
      </View> 
    )
  }
}

let ss=StyleSheet.create({
  container:{
    padding:10,
    flex:1
  },
  hr:{
    height:0,
    borderWidth:1,
    borderColor:'#ddd',
    marginTop:15,
    marginBottom:10
  },
  title:{
    fontSize:24,
    fontWeight:'bold'
  }
})
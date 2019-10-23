
import React from 'react'
import {View,Text,Button,Image,FlatList,ActivityIndicator,TouchableOpacity,StyleSheet} from 'react-native'

export default class ProductListScreen extends React.Component{
  static navigationOptions={
    title:'产品列表'
  }
  // 无需绑定到视图  故无需声明为state数据
  pno=0;
  constructor(){
    super();
    this.state={
      productList:[],
      hasMore:true
    }
  }
  loadMore(){
    // 如果已经没有更多数据加载了 直接退出
    if(!this.state.hasMore){
      return;
    }
    this.pno+=1;
    var url='http://www.codeboy.com/data/product/list.php?pno='+this.pno;
    fetch(url).then((res)=>res.json()).then((resjson)=>{
      console.log(resjson)
      let productList=this.state.productList;
      productList=productList.concat(resjson.data);
      this.setState({
        productList
      });
      if(this.pno>=resjson.pageCount){
        this.setState({
          hasMore:false
        })
      }
      console.log(this.state.productList);
    }).catch(err=>console.log(err));
  }
  componentDidMount(){
   this.loadMore();
  }
  _renderItem=({item,index})=>{
    let url='http://www.codeboy.com/';
    return (
      <TouchableOpacity style={ss.list}>
        <Image style={ss.leftImg} source={{uri:url+item.pic}}></Image>
        <View style={ss.center}>
          <Text numberOfLines={1} ellipsizeMode="tail">{item.title}</Text>
          <Text>{item.price}</Text>
        </View>
        <Button style={ss.detail} title="查看详情" onPress={()=>{this.jumpToDetail(item.lid)}}></Button>
      </TouchableOpacity>
    )
  }
  _keyExtractor=(item,index)=>{
    return item['lid']
  }
  jumpToDetail(lid){
    console.log(lid);
    this.props.navigation.navigate('ProductDetail',{lid:lid});
  }
  EndReached=()=>{
    this.loadMore();
  }
  ItemSeparator=()=>{
    return (
      <View style={{height:0,borderColor:'#ddd',borderWidth:0.5}}></View>
    )
  }
  listFooter=()=>{
    if(this.state.hasMore){
      return (
        <ActivityIndicator size="large"></ActivityIndicator>      
      )
    }return (
      <Button title='已经没有更多数据了' disabled></Button>  
    )
  }
  render(){
    return (
      <View>
        <FlatList data={this.state.productList} renderItem={this._renderItem} keyExtractor={this._keyExtractor} onEndReached={this.EndReached} onEndReachedThreshold={0.2} ItemSeparatorComponent={this.ItemSeparator} ListFooterComponent={this.listFooter}> 
        </FlatList>
        
      </View> 
    )
  }
}


let ss= StyleSheet.create({
  list:{
    flexDirection:'row',
    alignItems:'center',
    padding:10,
    paddingVertical:20
  },
  leftImg:{
    width:70,
    height:70
  },
  center:{
    flex:1
  },
  detail:{
    width:30,
    height:20,
    fontSize:18
  }
})
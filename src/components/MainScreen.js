import React from 'react'
import {View,Text,Button,Image,ScrollView,StyleSheet,TouchableOpacity} from 'react-native'

export default class MainScreen extends React.Component{
  static navigationOptions=(({navigation})=>{
    return {
      headerTitle:'主菜单',
    headerRight:(
      <TouchableOpacity onPress={()=>{navigation.navigate('Login')}}>
        <Image style={{width:36,height:36,borderRadius:18,marginRight:10}} source={require('../assets/user.png')}></Image>
      </TouchableOpacity>  
    )
    }
  })
  constructor(){
    super();
    this.state={

    }
  }
  jumpto(str){
    this.props.navigation.navigate('ProductList');
  }
  render(){
    return (
      <View>
        <View style={ss.row}>
          <View style={[ss.col,ss.borderR]}>
            <Text style={[ss.textmd,ss.textpri]}>上架总数</Text>
            <Text style={[ss.textlg,ss.textdanger]}>23380</Text>
            <Text style={[ss.textsm,ss.textpri]}>+12.8%较上个月</Text>
          </View>
          <View style={ss.col}>
            <Text style={[ss.textmd,ss.textpri]}>上架总数</Text>
            <Text style={[ss.textlg,ss.textsuc]}>23380</Text>
            <Text style={[ss.textsm,ss.textpri]}>+12.8%较上个月</Text>
          </View>
        </View>
        <View style={ss.row}>
          <View style={[ss.col,ss.borderR]}>
            <Text style={[ss.textmd,ss.textpri]}>上架总数</Text>
            <Text style={[ss.textlg,ss.textsuc]}>23380</Text>
            <Text style={[ss.textsm,ss.textpri]}>+12.8%较上个月</Text>
          </View>
          <View style={ss.col}>
            <Text style={[ss.textmd,ss.textpri]}>上架总数</Text>
            <Text style={[ss.textlg,ss.textdanger]}>23380</Text>
            <Text style={[ss.textsm,ss.textpri]}>+12.8%较上个月</Text>
          </View>
        </View>
        <View style={ss.row}>
          <View style={[ss.col,ss.borderR]}>
            <Text style={[ss.textmd,ss.textpri]}>上架总数</Text>
            <Text style={[ss.textlg,ss.textsuc]}>23380</Text>
            <Text style={[ss.textsm,ss.textpri]}>+12.8%较上个月</Text>
          </View>
          <View style={ss.col}>
            <Text style={[ss.textmd,ss.textpri]}>上架总数</Text>
            <Text style={[ss.textlg,ss.textdanger]}>23380</Text>
            <Text style={[ss.textsm,ss.textpri]}>+12.8%较上个月</Text>
          </View>
        </View>
        <View style={ss.row}>
          <View style={[ss.col,ss.menucol]}>
           <TouchableOpacity onPress={()=>{this.jumpto('ProductList')}}>
            <Image style={ss.menuImg} source={require('../assets/menu_product.jpg')}></Image>
           </TouchableOpacity>
              <Text style={[ss.textmd,ss.textpri]}>商品管理</Text>
          </View>
          <View style={[ss.col,ss.menucol]}>
              <TouchableOpacity onPress={()=>{this.jumpto('ProductList')}}>
                <Image style={ss.menuImg} source={require('../assets/menu_user.jpg')}></Image>
              </TouchableOpacity>
              <Text style={[ss.textmd,ss.textpri]}>用户管理</Text>
          </View>
        </View>
        <View  style={ss.row}>
            <View style={[ss.col,ss.menucol]}>
                <TouchableOpacity onPress={()=>{this.jumpto('ProductList')}}>
                  <Image style={ss.menuImg} source={require('../assets/menu_order.jpg')}></Image>
                </TouchableOpacity>
                <Text style={[ss.textmd,ss.textpri]}>订单管理</Text>
            </View>
            <View style={[ss.col,ss.menucol]}>
                <TouchableOpacity onPress={()=>{this.jumpto('Main')}}>
                  <Image style={ss.menuImg} source={require('../assets/menu_refresh.jpg')}></Image>
                </TouchableOpacity>
                <Text style={[ss.textmd,ss.textpri]}>首页管理</Text>
            </View>
        </View>
      </View> 
    )
  }
}
let ss=StyleSheet.create({
  row:{
    flexDirection:'row',

  },
  col:{
    flex:1,
    justifyContent:'space-evenly',
    alignItems:'center',
    borderBottomWidth:1,
    borderBottomColor:'#666',
    padding:6
  },
  borderR:{
    borderRightWidth:1,
    borderRightColor:'#666'
  },
  textlg:{
    fontSize:22,
    padding:3
  },
  textmd:{
    fontSize:14,
    padding:3
  },
  textsm:{
    fontSize:12
  },
  textpri:{
    color:'#85939d'
  },
  textdanger:{
    color:'#e74c3c'
  },
  textsuc:{
    color:'#1abb9c'
  },
  menucol:{
    borderBottomWidth:0,
    paddingVertical:30
  },
  menuImg:{
    width:50,
    height:50
  }

})


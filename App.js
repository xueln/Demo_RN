import React from 'react-native'
import {createAppContainer,createStackNavigator} from 'react-navigation'
import MainScreen from './src/components/MainScreen';
import LoginScreen from './src/components/LoginScreen';
import ProductListScreen from './src/components/ProductListScreen';
import ProductDetailScreen from './src/components/ProductDetailScreen';
// /路由词典 --'栈式导航器'
const AppNavigator=createStackNavigator({
  ProductList:ProductListScreen,
  Main:MainScreen,
  Login:LoginScreen,
  ProductDetail:ProductDetailScreen
});

// 根组件  用于盛放其他组件 并注册路由词典
export default createAppContainer(AppNavigator)
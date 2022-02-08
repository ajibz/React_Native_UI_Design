import * as React from 'react';
import { Text, View, StyleSheet,Image } from 'react-native';
import {faHome} from 'react-icons/fa'
import Constants from 'expo-constants';
import Page1 from './components/page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import Page4 from './components/Page4';
import login from './components/login';
import dashboard from './components/Dashboard';
import Tab1 from './components/Tab1';
import Tab2 from './components/Tab2';
import Tab3 from './components/Tab3';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// You can import from local files
import AssetExample from './components/AssetExample';
import { Icon } from 'react-native-elements';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';


function TabNav(){
  const Tabs = createBottomTabNavigator()
  return(
    <Tabs.Navigator >
    <Tabs.Screen  name="Dashboard" component={dashboard} options={{headerTitle:"",headerStyle:{backgroundColor:'white'}, tabBarIcon:()=>{return <Icon name="home" style={{width:20,height:20}} source={require('./assets/hand.png')}/>},tabBarLabel:()=>{return null},headerLeft:()=>{return null}}}/>

 <Tabs.Screen name="Tab1" component={Tab1}  options={{headerTitle:"",headerStyle:{backgroundColor:'white'},tabBarIcon:()=>{return <Icon name="wifi" style={{width:20,height:20}} source={require('./assets/hand.png')}/>},tabBarLabel:()=>{return null},headerLeft:()=>{return null}}} />
 
  <Tabs.Screen name="Tab2" component={Tab2} options={{headerTitle:"",headerStyle:{backgroundColor:'white'},tabBarIcon:()=>{return <Icon name="chat" style={{width:20,height:20}} source={require('./assets/hand.png')}/>},tabBarLabel:()=>{return null},headerLeft:()=>{return null}}}/>
   <Tabs.Screen name="Tab3" component={Tab3} options={{headerTitle:"",headerStyle:{backgroundColor:'white'},tabBarIcon:()=>{return <Icon name="contacts" style={{width:20,height:20}}/>},tabBarLabel:()=>{return null},headerLeft:()=>{return null}}}/>
 </Tabs.Navigator>
  )
}
export default function App() {
  const Stack = createStackNavigator()
  return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="Home" component={Page1} options={{headerTitle:""}}/>
    <Stack.Screen name="Page2" component={Page2} options={{headerTitle:"",headerStyle:{backgroundColor:'white'},headerLeft:()=>{return null}}}/>

 <Stack.Screen name="Page3" component={Page3} options={{headerTitle:"",headerStyle:{backgroundColor:'white'},headerLeft:()=>{return null}}}/>  

 <Stack.Screen name="Page4" component={Page4} options={{headerTitle:"",headerStyle:{backgroundColor:'white'},headerLeft:()=>{return null}}}/>  

  <Stack.Screen name="login" component={login} options={{headerTitle:"",headerStyle:{backgroundColor:'white'},headerLeft:()=>{return null}}}/>  

  <Stack.Screen name="Dashboard" component={TabNav} options={{headerTitle:"",headerStyle:{backgroundColor:'white'},headerLeft:()=>{return null}}}/>  

 </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

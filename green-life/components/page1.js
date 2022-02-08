import React from 'react'
import {View,Image,StyleSheet,ImageBackground,Text,TouchableOpacity} from 'react-native'




export default function Page1({navigation}){
  return (
 
    <View style={style.main}>
    
<ImageBackground source={require('../assets/logo.png')} style={style.logoView}/>
<TouchableOpacity onPress={()=>navigation.navigate("Page2")}>
<ImageBackground source={require('../assets/unsplash1.png')} style={{width:320,height:300,marginTop:70,opacity:1,}}>
<View style={{backgroundColor:"green",width:320,height:300,opacity:0.4,borderTopLeftRadius:118,borderTopRightRadius:118,marginTop:5}}>

</View>
</ImageBackground>
</TouchableOpacity>
    </View>

  )
}


const style = StyleSheet.create({
  main:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:'white'
  },
  logoView:{
    //  flex:1,
    // justifyContent:"center",
    // // alignItems:'center',
    // paddingLeft:200,
    width:217,
    height:31,
    marginTop:80,
   
  }
})
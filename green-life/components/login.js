import React from 'react'
import {View,Image,StyleSheet,ImageBackground,Text,TouchableOpacity,TextInput} from 'react-native'




export default function Page1({navigation}){
  return (
 
    <View style={style.main}>
    
<ImageBackground source={require('../assets/logo.png')} style={style.logoView}/>


<ImageBackground source={require('../assets/unsplash2.png')} imageStyle={{borderTopLeftRadius:40,borderTopRightRadius:40}} style={{width:320,height:350,opacity:0.7,marginTop:80}}>
<View  style={{marginTop:0,opacity:0.9,height:350,borderTopLeftRadius:40,borderTopRightRadius:40,backgroundColor:"green"}}>

<Text  style={{textAlign:'center',fontWeight:700,color:"white",fontSize:22,lineHeight:22.5}}>
Welcome Back
</Text>
<Text style={{textAlign:'center',fontWeight:'bold',color:"white",fontSize:10,lineHeight:15}}>
Sign in to continue
</Text>

<View style={{marginTop:50}}>
<Text style={{fontWeight:'bold',color:"white",fontSize:15,lineHeight:15,marginLeft:10}}>
Email
</Text>
<TextInput placeholder="username@yourmail.com" style={{borderStyle:'solid',borderWidth:2,borderColor:"white",width:300,height:30,marginLeft:10,borderRadius:5,marginTop:5}}/>
</View>

<View style={{marginTop:15}}>
<Text style={{fontWeight:'bold',color:"white",fontSize:15,lineHeight:15,marginLeft:10}}>
Password
</Text>
<TextInput placeholder="******************" secureTextEntry={true} style={{borderStyle:'solid',borderWidth:2,borderColor:"white",width:300,height:30,marginLeft:10,borderRadius:5,marginTop:5}}/>
</View>

<Text style={{marginRight:15,marginLeft:'auto',color:'white',fontWeight:"bold"}}>
Forgot Password
</Text>

<TouchableOpacity  style={{width:230,height:35,backgroundColor:"white",borderRadius:15,marginLeft:'auto',marginRight:'auto',marginTop:40}} onPress={()=>navigation.navigate("Dashboard")}>
<Text style={{textAlign:'center',fontSize:20,color:"green",fontWeight:"bold"}}>Next</Text>
</TouchableOpacity>

<Text style={{textAlign:'center',color:"white",marginTop:15}}>
New User? SignUp here
</Text>
</View>

</ImageBackground>


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
    marginTop:25,
   
  }
})
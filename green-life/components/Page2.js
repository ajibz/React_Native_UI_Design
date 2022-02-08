import React from 'react'
import {Image,StyleSheet,View,Text,ImageBackground,CheckBox,TouchableOpacity} from 'react-native'

const Page1 = ({navigation})=>{
return(
  <View style={style.container}>
  <ImageBackground source={require('../assets/shopping.png')} style={{width:200,height:200}}
/>
<Text style={{fontWeight:700,width:144,height:30,textAlign:"center",fontSize:20,lineHeight:30,fontFamily:"poppins"}}>GTPS e-Shops</Text>
<Text style={{fontWeight:400,width:244,fontSize:10,lineHeight:15,fontFamily:"poppins",textAlign:"center"}}>
This provide you access to our Online e-shop platform where you can display/find your Greenlife Products, other goods and services that you have to offer or have been looking for to buy.
</Text>
<View style={{flex:1,flexDirection:'row',justifyContent:"center",alignItems:"center",marginTop:100}}>
<View style={{width:16,height:6,backgroundColor:"green",borderRadius:5}}/>
<View style={{width:8,height:8,borderColor:"green",borderStyle:"solid",borderWidth:1,borderRadius:5,marginLeft:5}}/>
<View style={{width:8,height:8,borderColor:"green",borderStyle:"solid",borderWidth:1,borderRadius:5,marginLeft:5}}/>


</View>
<TouchableOpacity  style={{marginBottom:30,width:200,height:35,backgroundColor:"green",borderRadius:20}} onPress={()=>navigation.navigate("Page3")}>
<Text style={{textAlign:'center',fontSize:20,color:"white",fontWeight:"bold"}}>Next</Text>
</TouchableOpacity>
  </View>
)
}
export default Page1

const style = StyleSheet.create({
  container :{
    backgroundColor:"white",
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  }
})
import React from 'react'
import {Image,StyleSheet,View,Text,ImageBackground,CheckBox,TouchableOpacity} from 'react-native'

const Page4 = ({navigation})=>{
return(
  <View style={style.container}>
  <ImageBackground source={require('../assets/investment.png')} style={{width:200,height:200}}
/>
<Text style={{fontWeight:700,width:144,height:30,textAlign:"center",fontSize:20,lineHeight:30,fontFamily:"poppins"}}>Investment</Text>
<Text style={{fontWeight:400,width:244,fontSize:10,lineHeight:15,fontFamily:"poppins",textAlign:"center"}}>
As a GTPS member, you got the opportunity to invest in our Greenlife Herbal Products, a multinational group of companies distributing herbal medicine & other commodities.
</Text>
<View style={{flex:1,flexDirection:'row',justifyContent:"center",alignItems:"center",marginTop:100}}>
<View style={{width:8,height:8,borderColor:"green",borderStyle:"solid",borderWidth:1,borderRadius:5}}/>
<View style={{width:8,height:8,borderColor:"green",borderStyle:"solid",borderWidth:1,borderRadius:5,marginLeft:5}}/>
<View style={{width:16,height:6,backgroundColor:"green",borderRadius:5,marginLeft:5}}/>


</View>
<TouchableOpacity  style={{marginBottom:30,width:200,height:35,backgroundColor:"green",borderRadius:20}} onPress={()=>navigation.navigate("login")}>
<Text style={{textAlign:'center',fontSize:20,color:"white",fontWeight:"bold"}}>Next</Text>
</TouchableOpacity>
  </View>
)
}
export default Page4

const style = StyleSheet.create({
  container :{
    backgroundColor:"white",
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  }
})
import React from 'react'
import {View,StyleSheet,Text,Image,ImageBackground,TextInput,TouchableOpacity,ScrollView} from 'react-native'
import SearchBox from './search'


const Dashboard = ({navigation})=>{
  return(
    <ScrollView>
    <View style={{flex:1,backgroundColor:'white'}}>

    <View style={{flex:1,flexDirection:'row',alignItems:"center",justifyContent:"flex-start",marginTop:0}}>
    <Text style={{fontSize:20,fontWeight:"bold"}}>
    Hello, Allison,
    </Text>
    <Image style={{ width:15,height:15}} source={require('../assets/hand.png')}/>
     <ImageBackground style={{ width:30,height:30,marginLeft:130}} imageStyle={{borderRadius:50}} source={require('../assets/face3.png')}/>
    </View>
   <View style={{marginBottom:500}}>
    <Text >How are you feeling today?</Text>

    <View style={{marginTop:20}}>
  
    <TextInput placeholder="Search for Therapist" style={{width:300,height:35,marginLeft:10,borderRadius:5,marginTop:5,shadowColor:'gray',shadowOpacity:4,shadowRadius:10}}/>
    </View>


    <View style={{flex:1,justifyContent:"space-evenly",alignItems:"center",flexDirection:"row",marginTop:40}}>

    <View style={{width:100,height:120,backgroundColor:"#0C9344",borderRadius:8,}}>
    <Text style={{textAlign:'center',color:'white',fontWeight:'bold',marginTop:45}}>GTPS</Text>
    </View>

      <View style={{width:100,height:120,backgroundColor:"#0C9344",borderRadius:8,}}>
    <Text style={{textAlign:'center',color:'white',fontWeight:'bold',marginTop:45}}>Treasure Purse</Text>
    </View>

      <View style={{width:100,height:120,backgroundColor:"#0C9344",borderRadius:8,}}>
    <Text style={{textAlign:'center',color:'white',fontWeight:'bold',marginTop:45}}>Referral</Text>
    </View>


    </View>

    <View style={{flex:1,justifyContent:"space-between",alignItems:"center",flexDirection:"row",marginTop:40,padding:10}}>
    <Text style={{fontWeight:"bold"}}>Activities</Text>
    <Text style={{color:"green",fontWeight:"bold"}}>See All</Text>
    </View>


    <View>

    <View style={{width:300,marginLeft:10,borderRadius:5,marginTop:5,shadowColor:'gray',shadowOpacity:4,shadowRadius:10,flex:1,justifyContent:"space-evenly",alignItems:"center",flexDirection:"row",padding:16}}>
        <ImageBackground style={{ width:30,height:30}} imageStyle={{borderRadius:50}} source={require('../assets/face1.png')}/>
    <Text>Kingskey David</Text>
    <TouchableOpacity  style={{width:100,height:20,backgroundColor:"green",borderRadius:20}} onPress={()=>navigation.navigate("Page4")}>
<Text style={{textAlign:'center',fontSize:12,color:"white"}}>View Details</Text>
</TouchableOpacity>
    </View>

        <View style={{width:300,marginLeft:10,borderRadius:5,marginTop:10,shadowColor:'gray',shadowOpacity:4,shadowRadius:10,flex:1,justifyContent:"space-evenly",alignItems:"center",flexDirection:"row",padding:16}}>
        <ImageBackground style={{ width:30,height:30}} imageStyle={{borderRadius:50}} source={require('../assets/face2.png')}/>
    <Text>Kingskey David</Text>
    <TouchableOpacity  style={{width:100,height:20,backgroundColor:"green",borderRadius:20}} onPress={()=>navigation.navigate("Page4")}>
<Text style={{textAlign:'center',fontSize:12,color:"white"}}>View Details</Text>
</TouchableOpacity>
    </View>


    </View>


</View>
  
 


    </View>

    </ScrollView>
  )
}
export default Dashboard
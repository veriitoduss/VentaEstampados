import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, ImageBackground,Image,TouchableOpacity,TextInput } from "react-native";
import { withOrientation } from "react-navigation";

export default class incio extends React.Component {
  render() {
    return (
    <ImageBackground
    source={require("../public/img/fondoinicio.png")}
    style={styles.container}>
    <View style={styles.containeruno}>
        <Text style={styles.textinicio}>DUSS GRAFICS</Text>        
    </View>    
    <View style={styles.containerdos}>
        <View style={styles.containerdosuno}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('mugsadmin',{name:'mugsadmin'})}>
                <Image style={styles.imagenadmin} source={require("../public/img/vaso.jpg")}></Image>
                <Text style={styles.texttb}>       MUGS</Text>
            </TouchableOpacity>             
        </View>
        <View style={styles.containerdosdos}>
        </View>
        <View style={styles.containerdostres}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('camisetasadmin',{name:'camisetasadmin'})}>
                <Image style={styles.imagenadmin} source={require("../public/img/camiseta.jpg")}></Image>
                <Text style={styles.texttb}>CAMISETAS</Text>
            </TouchableOpacity>  
        </View>
    </View>
    <View style={styles.containertres}>
        <View style={styles.containertresuno}>
        </View>
        <View style={styles.containertresdos}>
            <TouchableOpacity>
                <Image style={styles.imagenadmin} source={require("../public/img/gorras.jpg")}></Image>
                <Text style={styles.texttb}>     GORRAS</Text>
            </TouchableOpacity> 
        </View>
        <View style={styles.containertrestres}>
        </View>
    </View>
    <View style={styles.containercuatro}>
        <View style={styles.containercuatrouno}>
            <TouchableOpacity
             onPress={() => this.props.navigation.navigate('almohadaadmin',{name:'almohadaadmin'})}>
                <Image style={styles.almohada} source={require("../public/img/almohada.jpg")}></Image>
                <Text style={styles.texttb}>ALMOHADAS</Text>
            </TouchableOpacity> 
        </View>
        <View style={styles.containercuatrodos}>
        </View>
        <View style={styles.containercuatrotres}>
            <TouchableOpacity>
                <Image style={styles.imagenadmin} source={require("../public/img/tapabocas.jpg")}></Image>
                <Text style={styles.texttb}>TAPABOCAS</Text>
            </TouchableOpacity>
        </View>
    </View>
</ImageBackground>
);
}
}

const styles = StyleSheet.create({
imagenadmin: {
    width: 125,
    height: 125,
},
Input: {
    width: 400,
    height: 30,
    borderWidth: 2,
    textAlign: 'center',
    borderRadius:50,
    fontSize:15,
    backgroundColor:'white'
},
textinicio: {
    flex: 1,
    color:'white',
    fontSize:30,    
    paddingTop:40
},
almohada: {
    width: 125,
    height: 125
},
texttb:{
    color:'white',
    alignContent:'center',
    fontSize:20,
},
navt:{
    fontSize:10
},
navt1:{
    fontSize:10
},
container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
},
containeruno: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 125
},
containerdos: {
    flex: 1,
    flexDirection:"row",
    paddingTop:40,
    width:350
},
containerdosuno: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
},
containerdosdos: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
},
containerdostres: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
},
containertres: {
    flex: 1,
    flexDirection:"row",
    width:350
},
containertresuno: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
},
containertresdos: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
},
containertrestres: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
},
containercuatro: {
    flex: 1,
    flexDirection:"row",
    width:350
},
containercuatrouno: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
},
containercuatrodos: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
},
containercuatrotres: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
},
containercinco: {
    flex: 1,
    flexDirection:'row',
    width:270,
    borderWidth:2,
    borderColor:'black'
},
containercincouno: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
},
containercincodos: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
},
containercincotres: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
},
});

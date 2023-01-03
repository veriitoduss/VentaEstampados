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
            <TextInput style={styles.Input} placeholder="BUSCAR"/>             
        </View>        
    <View style={styles.containerdos}>
            <TouchableOpacity>
                <Image style={styles.imagenadmin}source={require("../public/img/cumpleanos.png")}></Image>
            </TouchableOpacity>             
    </View>
    <View style={styles.containertres}>
            <TouchableOpacity>
                <Image style={styles.imagenadmin}source={require("../public/img/navidad.png")}></Image>
            </TouchableOpacity>             
    </View>
    <View style={styles.containercuatro}>
            <TouchableOpacity>
                <Image style={styles.imagenadmin}source={require("../public/img/diadelamadre.png")}></Image>
            </TouchableOpacity>             
    </View>
    <View style={styles.containercuatro}>
            <TouchableOpacity>
                <Image style={styles.imagenadmin}source={require("../public/img/diadelpadre.png")}></Image>
            </TouchableOpacity>             
    </View>
    <View style={styles.containercinco}>
        <View style={styles.containercincouno}>
            <TouchableOpacity
            onPress={() => this.props.navigation.navigate('usuario',{name:'usuario'})}>
                    <Text>INICIO</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.containercincodos}>
            <TouchableOpacity
            onPress={() => this.props.navigation.navigate('categorias',{name:'categorias'})}>
                <Text>CATEGORIAS</Text>
            </TouchableOpacity> 
        </View>
        <View style={styles.containercincotres}>
            <TouchableOpacity
            onPress={() => this.props.navigation.navigate('contacto',{name:'contacto'})}>
                <Text>CONTACTO</Text>
            </TouchableOpacity>
        </View>
    </View>   
</ImageBackground>
);
}
}

const styles = StyleSheet.create({
imagenadmin: {
    width: 370,
    height: 125,
},
textinicio: {
    flex: 1,
    color:'white',
    fontSize:30,    
    paddingTop:40
},
Input: {
    width: 370,
    height: 30,
    borderWidth: 2,
    textAlign: 'center',
    borderRadius:50,
    fontSize:15,
    backgroundColor:'white'
},
container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop:10,
},
containerdos: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop:10,
},
containertres: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop:10,
},
containercuatro: {
    flex: 1,
    flexDirection:"row",
    paddingTop:10,
},
containeruno: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 125
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

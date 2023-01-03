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
        <View style={styles.containerdosuno}> 
        <Image style={styles.imagenadmin} source={require("../public/img/almohada.jpg")}></Image>       
        </View>
        <View style={styles.containerdosdos}> 
            <View style={styles.containerdosdosuno}> 
            <Text style={styles.textpr}>MEDIDAS</Text>       
            </View>
            <View style={styles.containerdosdosdos}> 
                <View style={styles.containerdosdosdosuno}> 
                <Text style={styles.textpr}>4*4</Text>       
                </View>
                <View style={styles.containerdosdosdosdos}> 
                <Text style={styles.textpr}>12*12</Text>       
                </View>      
            </View>     
        </View>
    </View>
    <View style={styles.containertres}>
        <View style={styles.containertresuno}>
        <Image style={styles.imagenadmin} source={require("../public/img/almohada.jpg")}></Image> 
        <Text>cumpleaños</Text> 
        <Text>$25000</Text> 
        <Text>12*12</Text>       
        </View>
        <View style={styles.containertresdos}>
        <Image style={styles.imagenadmin} source={require("../public/img/almohada.jpg")}></Image> 
        <Text>cumpleaños</Text> 
        <Text>$25000</Text> 
        <Text>12*12</Text>        
        </View>        
    </View>
    <View style={styles.containercuatro}>
        <View style={styles.containercuatrouno}>
        <Image style={styles.imagenadmin} source={require("../public/img/almohada.jpg")}></Image> 
        <Text>cumpleaños</Text> 
        <Text>$25000</Text> 
        <Text>12*12</Text>        
        </View>
        <View style={styles.containercuatrodos}>
        <Image style={styles.imagenadmin} source={require("../public/img/almohada.jpg")}></Image> 
        <Text>cumpleaños</Text> 
        <Text>$25000</Text> 
        <Text>12*12</Text>      
        </View>        
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
    width: 100,
    height: 100,
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
textpr: {
    flex: 1,
    color:'white',
    fontSize:20,    
    paddingTop:40
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
   width:400
},
containerdosuno: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
},
containerdosdos: {
    flex: 1,
    flexDirection:"column"
},
containerdosdosuno: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
},
containerdosdosdos: {
    flex: 1,
    flexDirection:"row"
},
containerdosdosdosuno: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
},
containerdosdosdosdos: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
},
containertres: {
    flex: 1,
    flexDirection:"row",
    width: 400
},
containertresuno: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 200,
},
containertresdos: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 200,
},
containercuatro: {
    flex: 1,
    flexDirection:"row",
    width: 400
},
containercuatrouno: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 200,
},
containercuatrodos: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 200,
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

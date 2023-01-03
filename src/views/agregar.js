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
    <View style={styles.containertres}>   
    <Text style={styles.textinicio}>AGREGAR</Text>        
    </View>
    <View style={styles.containercuatro}> 
    <TextInput style={styles.Input} placeholder="ITEM"/>            
    </View>
    <View style={styles.containercuatro}> 
    <TextInput style={styles.Input} placeholder="COLOR"/>              
    </View>
    <View style={styles.containercuatro}> 
    <TextInput style={styles.Input} placeholder="TIPO"/>              
    </View>
    <View style={styles.containercuatro}> 
    <TextInput style={styles.Input} placeholder="MEDIDA"/>              
    </View>
    <View style={styles.containercuatro}> 
    <TextInput style={styles.Input} placeholder="MOTIVO"/>              
    </View>
    <View style={styles.containercuatro}> 
    <TextInput style={styles.Input} placeholder="IMAGEN"/>              
    </View>
    <View style={styles.containercuatro}> 
    <TextInput style={styles.Input} placeholder="VALOR"/>              
    </View>
    <View style={styles.containercuatro}> 
    <TouchableOpacity>
                <Text style={styles.btn}>ACEPTAR</Text>
        </TouchableOpacity>              
    </View>
    
    
</ImageBackground>
);
}
}

const styles = StyleSheet.create({
    Input: {
        width: 400,
        height: 30,
        borderWidth: 1,
        textAlign: 'center',
        borderRadius:50,
        fontSize:15,
        backgroundColor:'white',
    },
    btn:{
        width: 100,
        height: 30,
        marginTop:20,
        fontSize:20,
        borderWidth:3,
        borderRadius:4,
        borderColor: 'green',
        fontSize:20,
        textAlign: 'center',
        backgroundColor:'green',
    },
    btnmodificar:{
        width: 130,
        height: 30,
        marginTop:20,
        fontSize:20,
        borderWidth:3,
        borderRadius:4,
        borderColor: 'blue',
        fontSize:20,
        textAlign: 'center',
        backgroundColor:'blue',
    },
    btneliminar:{
        width: 100,
        height: 30,
        marginTop:20,
        fontSize:20,
        borderWidth:3,
        borderRadius:4,
        borderColor: 'red',
        fontSize:20,
        textAlign: 'center',
        backgroundColor:'red',
    },
    imagenadmin: {
        width: 100,
        height: 100,
    },
    texttb:{
        color:'white',
        alignContent:'center',
        fontSize:20,
      },
    textinicio: {
        flex: 1,
        color:'white',
        fontSize:30,    
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
    height: 210,
    },
    containertres: {
        flex: 1,
    alignItems: "center",
    justifyContent: "center",
    },
    containercuatro: {
        paddingTop:20,
        flex: 1,
        flexDirection:"row"
    },
    
});

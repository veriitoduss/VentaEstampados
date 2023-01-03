import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, ImageBackground,Image,TouchableOpacity } from "react-native";

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
      <Text style={styles.textcentral}>¡¡Bienvenido donde la creatividad no tiene limites para un detalle!!</Text>
      </View>
      <View style={styles.containertres}>
          <View style={styles.containertresuno}>
          <TouchableOpacity
        onPress={() => this.props.navigation.navigate('admin',{name:'administrador  '})}>
          <Image style={styles.imagenadmin} source={require("../public/img/siete.png")}></Image>
        </TouchableOpacity>
          </View>    
          <View style={styles.containertresdos}>
          </View>
          <View style={styles.containertrestres}>
          <TouchableOpacity
        onPress={() => this.props.navigation.navigate('usuario',{name:'usuario'})}>
          <Text style={styles.texttb}>continuar</Text>  
          <Image style={styles.imagenadmin} source={require("../public/img/nueve.png")}></Image>
        </TouchableOpacity>
          </View>
      </View>
      <StatusBar style="auto" />
    </ImageBackground>
  );
}
}

const styles = StyleSheet.create({
  textinicio: {
    flex: 1,
    color:'white',
    fontSize:50,
    paddingTop:100
  },
  texttb:{
    color:'white',
    alignContent:'center',
    fontSize:20,
  },
  textcentral: {
    color:'white',
    fontSize:20,
    alignContent:'center',
    width:200
  },
  imagenadmin: {
    width: 125,
    height: 125,
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
    
  },
  containerdos: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  containertres: {
    flex: 1,
    flexDirection:"row"
  },
  containertresuno: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width:300
  },
  containertresdos: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  containertrestres: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  
  
});

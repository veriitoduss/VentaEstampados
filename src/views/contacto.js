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
    <Text style={styles.textinicio}>Para mas informacion</Text>              
    </View>
    <View style={styles.containertres}>
        <View style={styles.containertresuno}>
        <Image style={styles.almohada} source={require("../public/img/facebook.png")}></Image>
        </View>
        <View style={styles.containertresdos}>
        <Image style={styles.almohada} source={require("../public/img/whatsapp.png")}></Image>  
        </View>            
    </View>
    
    
    
</ImageBackground>
);
}
}

const styles = StyleSheet.create({
    almohada: {
        width: 120,
        height: 120
    },
imagenadmin: {
    width: 125,
    height: 125,
},
textinicio: {
    flex: 1,
    color:'white',
    fontSize:30,    
    paddingTop:150
},
container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
},
containeruno: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
},
containeruno: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
},
containertres: {
    flex: 1,
    flexDirection:"row",
    width:300
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
});

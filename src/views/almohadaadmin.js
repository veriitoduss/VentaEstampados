import React, {useEffect, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View,ImageBackground, TouchableOpacity, FlatList, Image } from 'react-native';

export default function App() { 
  const [data, setData] = useState([]);

  useEffect(() => {
    function getData(){
      console.log("pruebas");
        fetch ('http://192.168.1.5:3000/api/almohada')
        .then((response) => response.json() )
        .then((responseJson) => {
          console.log(responseJson);
          setData(responseJson.almohada);
        })
        .catch((error) =>{
          console.error(error);
        } );
    }
    getData();
  }, [])


  const renderItem =({item})=>{
    return(
        <View style={styles.productos}>
            <View style={styles.containercuatrouno}>  
        <Image style={styles.imagenadmin} source={require("../public/img/almohada.jpg")}></Image>         
        </View>
        <View style={styles.containercuatrodos}>   
            <View style={styles.containercuatrodosuno}>   
            <Text>tipo: {item.nombretipo}</Text>        
            </View>
            <View style={styles.containercuatrodosdos}>   
            <Text>ocasion: {item.nombreocasion}</Text>        
            </View>
            <View style={styles.containercuatrodostres}>   
            <Text>color: {item.color}</Text>        
            </View>
            <View style={styles.containercuatrodostres}>   
            <Text>valor: {item.valor}</Text>        
            </View>
            
        </View>   
        <View style={styles.containercuatrotres}>  
            <View style={styles.containercuatrotresuno}>  
            <TouchableOpacity>
                <Text style={styles.btnmodificar}>MODIFICAR</Text>
            </TouchableOpacity> 
            </View> 
            <View style={styles.containercuatrotresdos}>  
            <TouchableOpacity>
                <Text style={styles.btneliminar}>ELIMINAR</Text>
            </TouchableOpacity> 
            </View>       
        </View>    
        

        </View>
    )
}

  return (
    <ImageBackground
    source={require("../public/img/fondoinicio.png")}
    style={styles.container}>
        <Text>ALMOHADAS</Text>

        <FlatList
        style={{width: '100%'}}
            data={data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderItem}            
          />
    </ImageBackground>
  );

}


const styles = StyleSheet.create({
    textinicio: {
        flex: 1,
        color:'white',
        fontSize:30,    
        paddingTop:40
    },
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },

  productos : {
    flex : 0.6,
    flexDirection : 'row',
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
},
containerdos: {
    flex: 1,
    flexDirection:"row",
    width:450
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
alignItems: "center",
justifyContent: "center",
},
containercuatro: {
    flex: 1,
    flexDirection:"row",
    width:450
},
containercuatrouno: {
    flex: 1,
alignItems: "center",
justifyContent: "center",
},
containercuatrodos: {
    flex: 1,
    flexDirection:"column"
},
containercuatrodosuno: {
    flex: 1,
alignItems: "center",
justifyContent: "center",
},
containercuatrodosdos: {
    flex: 1,
alignItems: "center",
justifyContent: "center",
},
containercuatrodostres: {
    flex: 1,
alignItems: "center",
justifyContent: "center",
},
containercuatrotres: {
    flex: 1,
    flexDirection:"column"
},
containercuatrotresuno: {
    flex: 1,
alignItems: "center",
justifyContent: "center",
},
containercuatrotresdos: {
    flex: 1,
alignItems: "center",
justifyContent: "center",
},
imagenadmin: {
    width: 100,
    height: 100,
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

});
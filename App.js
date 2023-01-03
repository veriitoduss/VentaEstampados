import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import incio  from './src/views/incio';
import usuario  from './src/views/usuario';
import admin  from './src/views/admin';
import categorias  from './src/views/categorias';
import contacto  from './src/views/contacto';
import almohada  from './src/views/almohada';
import almohadaadmin  from './src/views/almohadaadmin';
import camisetasadmin  from './src/views/camisetasadmin';
import mugsadmin  from './src/views/mugsadmin';
import agregar  from './src/views/agregar';
const proyectoNavigator = createStackNavigator({
   incio:{
      screen:incio
   },
   usuario:
    {
     screen: usuario ,
      navigationOptions: ({navigation}) => ({
       headerTitle: navigation.getParam('name'),
      })
    },
    admin:
    {
     screen: admin ,
      navigationOptions: ({navigation}) => ({
       headerTitle: navigation.getParam('name'),
      })
    },
    categorias:
    {
     screen: categorias ,
      navigationOptions: ({navigation}) => ({
       headerTitle: navigation.getParam('name'),
      })
    },
    contacto:
    {
     screen: contacto ,
      navigationOptions: ({navigation}) => ({
       headerTitle: navigation.getParam('name'),
      })
    },
    almohada:
    {
     screen: almohada ,
      navigationOptions: ({navigation}) => ({
       headerTitle: navigation.getParam('name'),
      })
    },
    almohadaadmin:
    {
     screen: almohadaadmin ,
      navigationOptions: ({navigation}) => ({
       headerTitle: navigation.getParam('name'),
      })
    },
    agregar:
    {
     screen: agregar,
      navigationOptions: ({navigation}) => ({
       headerTitle: navigation.getParam('name'),
      })
    },
    mugsadmin:
    {
     screen: mugsadmin ,
      navigationOptions: ({navigation}) => ({
       headerTitle: navigation.getParam('name'),
      })
    },
    camisetasadmin:
    {
     screen: camisetasadmin ,
      navigationOptions: ({navigation}) => ({
       headerTitle: navigation.getParam('name'),
      })
    },
    
    
})
export default createAppContainer(proyectoNavigator);
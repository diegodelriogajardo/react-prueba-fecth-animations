import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './Home/Home';
import ApiScreen from './Api/api'
import Details from './Details/Details';
import ScrollViewDetails from './ScrollViewDetails/Contenedor';
const Stack = createNativeStackNavigator();
const Contenedor=()=>{
  return (
    <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Api" component={ApiScreen} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="ScrollViewDetails" component={ScrollViewDetails} />
    </Stack.Navigator>
  );
};
export default Contenedor;

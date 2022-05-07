import React ,{useEffect,useState}from 'react';
import { View,Text,ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import VistaDetalleCaracteres from './VistaDetalleCaracteres';
import VistaDetalleEpisodios from './vistaDetalleEpisodios';
const Contenedor = () => {
   const [EpisodioSeleccionado,setEpisodioSeleccionado]=useState(null);
    const navigation=useNavigation();
    const route=useRoute()
    useEffect(() => {
    }, [])
    
    return ( 
        <ScrollView>
           <VistaDetalleEpisodios
           uri={route.params}
           setEpisodioSeleccionado={setEpisodioSeleccionado}
           />
           <VistaDetalleCaracteres
           EpisodioSeleccionado={EpisodioSeleccionado}
           />
        </ScrollView>
     );
}
export default Contenedor;
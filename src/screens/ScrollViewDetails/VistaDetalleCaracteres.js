import React,{useEffect} from 'react';
import { View,Text,ScrollView } from 'react-native';
import useGetDataApiRick from '../../hooks/GetDataApiRick';
import { ActivityIndicator } from 'react-native';
import styles from '../../Styles/Contenedor';
import DetalleEspecificoCharacters from './DetalleEspecificoCharacters';

const VistaDetalleCaracteres = ({EpisodioSeleccionado}) => {
    const {GetDataEspesifica,especifico,loading}=useGetDataApiRick();
    useEffect(() => {
        GetDataEspesifica(EpisodioSeleccionado);
    }, [EpisodioSeleccionado])
    
    return ( loading?<ActivityIndicator/>:
    <View>
    <Text style={styles.title}>Participantes: {especifico.name}</Text>
    <ScrollView
      style={styles.barraEpisodios}
      contentContainerStyle={{alignItems: 'center'}}
      horizontal>
      {especifico?.characters?.map((item, index) => {
        return (
          <View key={index} style={styles.container}>
          <DetalleEspecificoCharacters
          item={item}
          ></DetalleEspecificoCharacters>
          </View>
        );
      })}
    </ScrollView>
  </View>
     );
}
 
export default VistaDetalleCaracteres;
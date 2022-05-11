import React,{useEffect} from 'react';
import { View,Text,ScrollView } from 'react-native';
import useGetDataApiRick from '../../hooks/GetDataApiRick';
import { ActivityIndicator } from 'react-native';
import styles from '../../Styles/Contenedor';
import DetalleEspecificoCharacters from './DetalleEspecificoCharacters';
import { FlatList } from 'react-native-gesture-handler';

const VistaDetalleCaracteres = ({EpisodioSeleccionado}) => {
    const {GetDataEspesifica,especifico,loading}=useGetDataApiRick();
    useEffect(() => {
        GetDataEspesifica(EpisodioSeleccionado);
    }, [EpisodioSeleccionado])
    
    return ( loading?<ActivityIndicator/>:
    <View>
    <Text style={styles.title}>Participantes: {especifico.name}</Text>
    <View
      style={styles.barraEpisodios}
      contentContainerStyle={{alignItems: 'center'}}
      >
        <FlatList
        horizontal
        data={especifico.characters}
        renderItem={({item,index})=>
          <Card
          key={index}
          item={item}
          ></Card>
        }
        ></FlatList>
    </View>
  </View>
     );
}
 const Card=({item})=>{
  return <View  style={styles.container}>
  <DetalleEspecificoCharacters
  item={item}
  ></DetalleEspecificoCharacters>
  </View>
 }
export default VistaDetalleCaracteres;
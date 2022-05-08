import React,{useEffect} from 'react';
import { View,Text,ScrollView } from 'react-native';
import useGetDataApiRick from '../../hooks/GetDataApiRick';
import { ActivityIndicator } from 'react-native';
import styles from '../../Styles/Contenedor';
import ButtonEstilizado from '../../components/ButtonEstilizado';
import DetalleEspecifico from './DetalleEspecificoEpisodios';
import Swiper from 'react-native-swiper';
const VistaDetalleEpisodios = ({uri,setEpisodioSeleccionado}) => {
    const {GetDataEspesifica,especifico,loading}=useGetDataApiRick();
    useEffect(() => {
      GetDataEspesifica(uri);
    }, [])
    
    return ( loading?<ActivityIndicator/>:
    <View>
    <Text style={styles.title}>Episodios</Text>
    {/* <ScrollView
      style={styles.barraEpisodios}
      contentContainerStyle={{alignItems: 'center'}}
      horizontal> */}
        <Swiper showsButtons={true}>
      {especifico?.episode.map((item, index) => {
        return (
          <View key={index} style={styles.SlideContainerView}>
              <ButtonEstilizado
              title={"Seleccionar"} 
              onPress={()=>setEpisodioSeleccionado(item)}
              ></ButtonEstilizado>
           <DetalleEspecifico
           item={item}
           />
          </View>
        );
      })}
      </Swiper>
    {/* </ScrollView> */}
  </View>
     );
}
 
export default VistaDetalleEpisodios;
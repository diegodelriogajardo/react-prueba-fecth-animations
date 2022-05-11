import React,{useEffect} from 'react';
import {Text, View, ActivityIndicator,Image} from 'react-native';
import useGetDataApiRick from '../../hooks/GetDataApiRick';
import styles from '../../Styles/Contenedor';
const DetalleEspecificoCharacters = ({item}) => {
  const {GetDataEspesifica, especifico, loading} = useGetDataApiRick();
useEffect(() => {
GetDataEspesifica(item)
}, [])

  return loading ? <ActivityIndicator /> 
  : <View style={styles.episodeCard}>
      <Text style={styles.title}>{especifico?.name}</Text>
     <Image source={{uri:especifico?.image, width:100,height:100}} style={styles.imagenDetalle}
     ></Image>
  </View>;
};

export default DetalleEspecificoCharacters;
import React,{useEffect} from 'react';
import {Text, View, ActivityIndicator} from 'react-native';
import useGetDataApiRick from '../../hooks/GetDataApiRick';
import styles from '../../Styles/Contenedor';
const DetalleEspecificoEpisodios = ({item}) => {
  const {GetDataEspesifica, especifico, loading} = useGetDataApiRick();
useEffect(() => {
GetDataEspesifica(item)
}, [])

  return loading ? <ActivityIndicator /> 
  : <View style={styles.episodeCard}>
      <Text style={styles.title}>{especifico?.name}</Text>
      <Text style={styles.Textlist}>lanzamiento: {especifico?.air_date}</Text>
      <Text style={styles.Textlist}> episodio: {especifico?.episode}</Text>
  </View>;
};

export default DetalleEspecificoEpisodios;

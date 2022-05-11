import React, {useEffect} from 'react';
import {View, Text, ScrollView} from 'react-native';
import useGetDataApiRick from '../../hooks/GetDataApiRick';
import {ActivityIndicator} from 'react-native';
import styles from '../../Styles/Contenedor';
import ButtonEstilizado from '../../components/ButtonEstilizado';
import DetalleEspecifico from './DetalleEspecificoEpisodios';
const VistaDetalleEpisodios = ({uri, setEpisodioSeleccionado}) => {
  const {GetDataEspesifica, especifico, loading} = useGetDataApiRick();
  useEffect(() => {
    GetDataEspesifica(uri);
  }, []);

  return loading ? (
    <ActivityIndicator />
  ) : (
    <View>
      <Text style={styles.title}>Episodios</Text>
      <ScrollView
       // pagingEnabled
        style={styles.barraEpisodios}
        contentContainerStyle={{alignItems: 'center'}}
        horizontal>
        {especifico?.episode.map((item, index) => {
          return (
            <View key={index} style={styles.container}>
              <ButtonEstilizado
                title={'Seleccionar'}
                onPress={() =>
                  setEpisodioSeleccionado(item)
                }></ButtonEstilizado>
              <DetalleEspecifico item={item} />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default VistaDetalleEpisodios;

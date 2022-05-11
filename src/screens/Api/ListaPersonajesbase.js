import React from 'react';
import {ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from '../../Styles/Contenedor';
import Personaje from './Personaje';
const ListaPersonajesBase = ({characters}) => {
  const navegacion = useNavigation();
  const goDetails = item => {
    navegacion.navigate('Details', item);
  };

  return (
    <ScrollView style={styles.ScrollViewApi}>
      {characters.map((item, index) => {
        return (
        <Personaje
        key={index}
        item={item}
        index={index}
        goDetails={goDetails}
        />
        );
      })}
    </ScrollView>
  );
};

export default ListaPersonajesBase;

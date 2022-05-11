import React from 'react';
import {View,FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from '../../Styles/Contenedor';
import Personaje from './Personaje';
const ListaPersonajesBase = ({characters}) => {
  const navegacion = useNavigation();
  const goDetails = item => {
    navegacion.navigate('Details', item);
  };

  return (
    <View style={styles.ScrollViewApi}>
      <FlatList
      data={characters}
      renderItem={({item,index})=>
        <Personaje
        item={item}
        index={index}
        goDetails={goDetails}
        />
      }
      />
    </View>
  );
};

export default ListaPersonajesBase;

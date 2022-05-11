import React from 'react';
import {View, Text} from 'react-native-animatable';
import {TextInput} from 'react-native-gesture-handler';
import styles from '../../Styles/Contenedor';

const HeaderApi = ({setFiltro,page,maxPage}) => {
  return (
    <View animation={'fadeIn'} duration={500}>
      <View style={styles.containerHeader}>
        <View style={styles.viewHorizontal}>
          <TextInput
            style={styles.TextInput}
            placeholder="Filtrar Lista..."
            onChangeText={text => setFiltro(text)}></TextInput>
        </View>
        <Text style={styles.Textlist}>pagina: {page} de {maxPage}</Text>
        <Text style={styles.title}> Personajes </Text>
      </View>
    </View>
  );
};

export default HeaderApi;

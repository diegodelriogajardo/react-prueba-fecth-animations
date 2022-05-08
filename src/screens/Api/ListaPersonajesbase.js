import React from 'react';
import {View, ScrollView} from 'react-native';
import StyledButton from '../../components/ButtonEstilizado';
import {useNavigation} from '@react-navigation/native';
import styles from '../../Styles/Contenedor';
const ListaPersonajesBase = ({characters}) => {
  const navegacion = useNavigation();
  const goDetails = item => {
    navegacion.navigate('Details', item);
  };

  return (
    <ScrollView style={styles.ScrollViewApi}>
      {characters.map((item, index) => {
        let backgroundColor = index % 2 == 0 ? 'red' : 'green';
        return (
          <View key={index} style={styles.containerButton}>
            <StyledButton
              title={item.name}
              onPress={() => goDetails(item)}
              style={{
                backgroundColor: backgroundColor,
              }}></StyledButton>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default ListaPersonajesBase;

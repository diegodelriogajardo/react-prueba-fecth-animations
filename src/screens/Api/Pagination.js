import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from '../../Styles/Contenedor';
import {TextInput} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
const Pagination = ({nexPage, goPage, page, backPage,maxPage}) => {
  const irA = page => {
    if (!isNaN(page)) {
      goPage(parseInt(page));
    } else {
      alert('favor ingresar numero');
    }
  };
  return (
    <View style={styles.containerPagination}>
      <TouchableOpacity
        onPress={() => backPage()}
        style={styles.ButtonPagintation}
        disabled={page===1}
        >
        <Text style={styles.TextButtonPagination}>{''}<Icon name='arrow-left' size={30} color="white"></Icon></Text>
      </TouchableOpacity>
      <TextInput
        style={styles.TextInputPagination}
        placeholder="ir a la pagina..."
        onChangeText={text => irA(text)}></TextInput>
      <TouchableOpacity
        onPress={() => nexPage()}
        style={styles.ButtonPagintation}
        disabled={page===maxPage}
        >
          
        <Text style={styles.TextButtonPagination}>{''}<Icon name='arrow-right'  size={30} color="white"></Icon></Text>
      </TouchableOpacity>
    </View>
  );
};

export default Pagination;

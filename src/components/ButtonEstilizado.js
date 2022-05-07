import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import estilo from '../Styles/Contenedor';
const ButtonEstilizado = ({title, onPress, style,...restOfProps}) => {
  return (
    <TouchableOpacity  onPress={onPress} style={{...estilo.Button,...style}} {...restOfProps}  >
      <Text style={estilo.TextButton}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonEstilizado;

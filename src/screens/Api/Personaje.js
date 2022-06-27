import React from 'react';
import {View} from 'react-native';
import StyledButton from '../../components/ButtonEstilizado';
import styles from '../../Styles/Contenedor';
import useRevisadosContext from '../../hooks/usecontextPersonajes';
const Personaje = ({item,index,goDetails}) => {
  const {personajesRevisados, addpersonaje}=useRevisadosContext();
  console.log(personajesRevisados.length)
  let backgroundColor="";
  if(personajesRevisados.includes(item.name)){
    backgroundColor='purple'
  }else{
    backgroundColor = index % 2 == 0 ? 'red' : 'green';
  }
    const agregareir=()=>{
      addpersonaje(item.name)
      goDetails(item)
    }
    return ( 
        <View  style={styles.containerButton}>
            <StyledButton
              title={item.name}
              onPress={() => agregareir()}
              style={{
                backgroundColor: backgroundColor,
              }}></StyledButton>
          </View>
     );
}
 
export default Personaje;
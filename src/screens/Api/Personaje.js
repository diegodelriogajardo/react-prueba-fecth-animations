import React from 'react';
import {View} from 'react-native';
import StyledButton from '../../components/ButtonEstilizado';
import styles from '../../Styles/Contenedor';
const Personaje = ({item,index,goDetails}) => {
    const backgroundColor = index % 2 == 0 ? 'red' : 'green';
    return ( 
        <View  style={styles.containerButton}>
            <StyledButton
              title={item.name}
              onPress={() => goDetails(item)}
              style={{
                backgroundColor: backgroundColor,
              }}></StyledButton>
          </View>
     );
}
 
export default Personaje;
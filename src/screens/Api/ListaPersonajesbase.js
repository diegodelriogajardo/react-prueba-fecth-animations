import React from 'react';
import {View,FlatList,ActivityIndicator} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from '../../Styles/Contenedor';
import Personaje from './Personaje';
const ListaPersonajesBase = ({characters,nexPage, loadingScroll}) => {
  const navegacion = useNavigation();
  const goDetails = item => {
    navegacion.navigate('Details', item);
  };
const Loader=()=>{
  return loadingScroll?<ActivityIndicator></ActivityIndicator>:null
}
  return (
    <View style={styles.ScrollViewApi}>
      <FlatList style={styles.FlatListContainer}
      onEndReached={()=>(nexPage())}
      ListFooterComponent={<Loader></Loader>}
      data={characters}
      keyExtractor={item=>{
        console.log(item.id)
        return item.id
      }}
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

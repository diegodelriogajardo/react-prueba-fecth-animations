import React, {useEffect} from 'react';
import {View, ScrollView} from 'react-native';
import useGetData from '../../hooks/GetDataApiRick';
import StyledButton from '../../components/ButtonEstilizado';
import {useNavigation} from '@react-navigation/native';
import styles from '../../Styles/Contenedor';
import Loading from '../../components/Loading';
const Api = () => {
  const {characters, getData, loading} = useGetData();
  const navegacion = useNavigation();
  useEffect(() => {
    const unsuscribe = navegacion.addListener('focus', payload => {
      console.log("entre afocus")
      if(characters.length===0){
        console.log("recargando data")
        getData();
      }
    });
    return unsuscribe;
  }, [navegacion]);
  const goDetails = item => {
    navegacion.navigate('Details', item);
  };
  return loading ? (
    <Loading></Loading>
  ) : (
    <ScrollView>
      {characters.map((item, index) => {
        let backgroundColor = index % 2 == 0 ? 'red' : 'green';
        return (
          <View key={index} style={styles.container}>
            <StyledButton
              title={item.name}
              onPress={() => goDetails(item)}
              style={{
                backgroundColor: backgroundColor
                }}></StyledButton>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default Api;

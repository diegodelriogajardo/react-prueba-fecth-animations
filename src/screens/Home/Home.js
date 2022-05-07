import React, {useRef, useEffect} from 'react';
import * as Animatable from 'react-native-animatable';
import styles from '../../Styles/Contenedor';
import StyledButton from '../../components/ButtonEstilizado';
import {useNavigation} from '@react-navigation/native';
  const HomeScreen = () => {
  const viewRef = useRef();
  const navigation = useNavigation();
  useEffect(() => {
    viewRef.current.bounceIn();
  }, [])
  
  useEffect(() => {
    //para escuchar la navegacion y cuando ingrese a la panalla gatillar cosas
    const unsuscribe = navigation.addListener('focus', payload => {
    //  viewRef.current.bounceIn();
    });
    return unsuscribe;
  }, [navigation]);

  const handleRefFadeOut = () => {
    //  viewRef.current.fadeOut().then(() => goApi());
    goApi();
  };
  const goApi = () => {
    navigation.navigate('Api');
  };
  return (
    <Animatable.View
      ref={viewRef}
      animation={'bounceIn'}
      duration={500}
      style={styles.centrado}>
      <Animatable.Text style={styles.title}>¡React Native!</Animatable.Text>
      <StyledButton
        title={'!vamos¡'}
        onPress={() => handleRefFadeOut()}
        style={{backgroundColor: 'green'}}
        disabled={false}
      />
    </Animatable.View>
  );
};

export default HomeScreen;

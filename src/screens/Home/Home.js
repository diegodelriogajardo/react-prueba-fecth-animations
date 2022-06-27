import React, {useRef, useEffect, Suspense} from 'react';
import * as Animatable from 'react-native-animatable';
import styles from '../../Styles/Contenedor';
import StyledButton from '../../components/ButtonEstilizado';
import {useNavigation} from '@react-navigation/native';
import ReactNativeBiometrics, { BiometryTypes } from 'react-native-biometrics'

const rnBiometrics = new ReactNativeBiometrics()
let  preguntar= false;
rnBiometrics.isSensorAvailable()
  .then((resultObject) => {
    const { available, biometryType } = resultObject

    if (available && biometryType === BiometryTypes.TouchID) {
      console.log('TouchID is supported')
    } else if (available && biometryType === BiometryTypes.FaceID) {
      console.log('FaceID is supported')
    } else if (available && biometryType === BiometryTypes.Biometrics) {
      console.log('Biometrics is supported')
preguntar=true;
    } else {
      console.log('Biometrics not supported')
    }
  })

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

  const handleRefFadeOut = async () => {
    //  viewRef.current.fadeOut().then(() => goApi());
   if(preguntar){

     let answer= await rnBiometrics.simplePrompt({promptMessage:"toque el sensor para ingresar"})
     const { success } = answer
     if(success){
      goApi()
     }else{
      alert("sensor detectado favor autenticar.")
     }
    }else{
      goApi()
    }

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

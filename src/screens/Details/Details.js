import React, {useEffect, useRef} from 'react';
import * as Animatable from 'react-native-animatable';
import {useNavigation} from '@react-navigation/native';
import styles from '../../Styles/Contenedor';
import { useRoute } from '@react-navigation/native';
import StyledButton from '../../components/ButtonEstilizado'
const Details = () => {
  const route=useRoute();
  const {
    name,
    id,
    status,
    species,
    type,
    gender,
    origin,
    location,
    image,
    url,
    created,
  } = route.params;
  const navegacion = useNavigation();
  const viewRef = useRef();
  const ImageRef = useRef();
  useEffect(() => {
    viewRef.current.bounceIn();
    ImageRef.current.fadeInUp();
  }, [])
  
  useEffect(() => {
    const unsuscribe = navegacion.addListener('focus', payload => {
     // viewRef.current.bounceIn();
     // ImageRef.current.fadeInUp();
    });
    return unsuscribe;
  }, [navegacion]);
   const goScrollView=(url)=>{
     navegacion.navigate('ScrollViewDetails',url)
   }
  return (
    <Animatable.View style={styles.centrado} ref={viewRef} duration={2500}>
      <Animatable.Image
        ref={ImageRef}
        source={{uri: image, width: 300, height: 300}}
        duration={2000}
        borderRadius={5}></Animatable.Image>
      <Animatable.Text style={styles.title}>{name}</Animatable.Text>
      <Animatable.Text style={styles.Textlist}>
        status: {status}
      </Animatable.Text>
      <Animatable.Text style={styles.Textlist}>
        species: {species}
      </Animatable.Text>
      <Animatable.Text style={styles.Textlist}>
        Type:{type ? type : 'no type'}
      </Animatable.Text>
      <Animatable.Text style={styles.Textlist}>
        gender: {gender}
      </Animatable.Text>

      <StyledButton title={"Mas detalles"} onPress={()=>{goScrollView(url)}} style={styles.Button}></StyledButton>

    </Animatable.View>
  );
};

export default Details;

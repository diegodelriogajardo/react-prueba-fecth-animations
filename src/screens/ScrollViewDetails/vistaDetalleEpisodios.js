import React,{useEffect} from 'react';
import { View,Text,ScrollView } from 'react-native';
import useGetDataApiRick from '../../hooks/GetDataApiRick';
import { ActivityIndicator } from 'react-native';
import styles from '../../Styles/Contenedor';
import ButtonEstilizado from '../../components/ButtonEstilizado';
import DetalleEspecifico from './DetalleEspecificoEpisodios';
import { FlatList } from 'react-native-gesture-handler';
const VistaDetalleEpisodios = ({uri,setEpisodioSeleccionado}) => {
    const {GetDataEspesifica,especifico,loading}=useGetDataApiRick();
    useEffect(() => {
      GetDataEspesifica(uri);
    }, [])
    
    return ( loading?<ActivityIndicator/>:
    <View>
    <Text style={styles.title}>Episodios</Text>
    <View
      style={styles.barraEpisodios}
      contentContainerStyle={{alignItems: 'center'}}
      >
        <FlatList
        horizontal
        data={especifico.episode}
        renderItem={({item,index})=>
        <Card
        item={item}
        index={index}
        setEpisodioSeleccionado={setEpisodioSeleccionado}
        />
        }
        >
        </FlatList>
    </View>
  </View>
     );
}
 const Card=({item,index,setEpisodioSeleccionado})=>{
 return <View key={index} style={styles.container}>
 <ButtonEstilizado
 title={"Seleccionar"} 
 onPress={()=>setEpisodioSeleccionado(item)}
 ></ButtonEstilizado>
<DetalleEspecifico
item={item}
/>
</View>}
export default VistaDetalleEpisodios;
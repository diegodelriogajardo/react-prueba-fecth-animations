import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#eaeaea',
  },
  title: {
    marginTop: 16,
    padding: 8,
    borderWidth: 4,
    borderColor: '#20232a',
    borderRadius: 6,
    backgroundColor: '#61dafb',
    color: '#20232a',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  centrado: {
    flex: 1,
    alignItems: 'center',
    justifyContent: "space-around",

  },
  Button:{
    marginTop: 10,
    padding: 8,
    borderWidth: 4,
    borderColor: '#20232a',
    borderRadius: 25,
    color: '#20232a',
    backgroundColor:'yellow'
  },
  TextButton:{
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
  },
  Textlist:{
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    padding:3,
  },
  loading:{
    flex: 1,
    alignItems:'center',
    justifyContent: "space-around",
  },
  episodeCard:{
    paddingVertical:10,
    paddingHorizontal:10,
    alignContent: "center",
    alignSelf:'center',
    backgroundColor: '#77DD77',
    borderRadius:25
  },
  barraEpisodios:{
    paddingVertical:10,
    marginHorizontal:5,
    borderColor:'gray'
  },
  imagenDetalle:{
    marginVertical:5,
    alignSelf:'center',
    borderRadius:25
  },
  containerHeader:{
    backgroundColor:'green',
    paddingHorizontal:20,
    marginHorizontal:5,
    marginVertical:5,
    paddingBottom:10,
    borderRadius:20

  },
  TextInput:{
    backgroundColor: 'white',
    marginVertical:10,
    marginHorizontal:4,
    borderWidth:5,
    borderRadius:25,
    textAlign:'center',
    width:'100%'
  },
  viewHorizontal:{
    display:'flex',
    flexDirection:'row',
  },
  ScrollViewApi:{
   // backgroundColor:'Yellow'
  },
  containerButton:{
    flex: 1,
   marginHorizontal:20,
   marginVertical:7,
  },
  containerPagination:{
  flexDirection:"row",
  width:'100%',
  height:'5%',
  alignItems:'center',
  justifyContent:'center'
  },
  ButtonPagintation:{
    backgroundColor:'blue',
    width:'20%',
    height:"100%",
    borderColor:"black",
    borderWidth:1,
    borderRadius:5,
    alignItems:'center',
    justifyContent:'center'
  },
  TextButtonPagination:{
    textAlign:'center',
    color:'white',
  },
  FlatListContainer:{
      maxHeight:'80%'
  }
});

export default styles;

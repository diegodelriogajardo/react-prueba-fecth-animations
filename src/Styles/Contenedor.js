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
    marginTop: 16,
    padding: 8,
    borderWidth: 4,
    borderColor: '#20232a',
    borderRadius: 6,
    color: '#20232a',
    backgroundColor:'yellow'
  },
  TextButton:{
    textAlign: 'center',
    fontSize: 30,
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
    backgroundColor: 'green'
  },
  barraEpisodios:{
    paddingVertical:10,
    marginHorizontal:5,
    borderColor:'gray'
  },
  imagenDetalle:{
    alignSelf:'center'
  }
});
export default styles;

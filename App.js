import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Contenedor from './src/screens/Contenedor';
import contextRevisados from './src/context/contextRevisados';
import { useState } from 'react';

function App() {
  const [personajesRevisados,setPersonajesRevisados]=useState([])
const addpersonaje=(personaje)=>{
setPersonajesRevisados(prevState=>[...prevState,personaje])
}
const removePersonaje=(personaje)=>{
    setPersonajesRevisados(personajesRevisados.filter(x=>x!=personaje))
}
  return (
    <NavigationContainer>
      <contextRevisados.Provider value={{
        personajesRevisados:personajesRevisados,
        addpersonaje:addpersonaje,
        deletePersonaje:removePersonaje
      }}>
        <Contenedor />
      </contextRevisados.Provider>
    </NavigationContainer>
  );
}

export default App;
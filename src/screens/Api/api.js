import React, {useEffect, useState} from 'react';
import Loading from '../../components/Loading';
import ListaPersonajesBase from './ListaPersonajesbase';
import useGetDataApiRick from '../../hooks/GetDataApiRick';
import {useNavigation} from '@react-navigation/native';
import HeaderApi from './HeaderApi';
import Pagination from './Pagination';
const Api = () => {
  const {characters, getData, loading, nexPage, goPage, page, backPage,maxPage,loadingScroll} = useGetDataApiRick();
  const navegacion = useNavigation();
  const [filtro, setFiltro] = useState('');
  useEffect(() => {
    const unsuscribe = navegacion.addListener('focus', payload => {
      if (characters.length === 0) {
        getData();
      }
    });
    return unsuscribe;
  }, [navegacion]);

  const filtrarCharacters = () => {
    let Lista = characters;
    let filtroUp = filtro.toUpperCase();
    Lista = Lista.filter(x => x.name.toUpperCase().includes(filtroUp));

    return Lista;
  };

  return loading ? (
    <Loading></Loading>
  ) : (
    <>
      <HeaderApi setFiltro={setFiltro} 
      />
              {/* <Pagination 
                 nexPage={nexPage}
                 goPage={goPage}
                  page={page}
                   backPage={backPage}
                   maxPage={maxPage}
              /> */}
      <ListaPersonajesBase characters={filtrarCharacters()}  nexPage={nexPage}  loadingScroll={loadingScroll}/>
     
    </>
  );
};

export default Api;

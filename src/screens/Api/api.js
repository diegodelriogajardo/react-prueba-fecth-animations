import React, {useEffect, useState} from 'react';
import Loading from '../../components/Loading';
import ListaPersonajesBase from './ListaPersonajesbase';
import useGetDataApiRick from '../../hooks/GetDataApiRick';
import {useNavigation} from '@react-navigation/native';
import HeaderApi from './HeaderApi';
import Pagination from './Pagination';
const Api = () => {
  const {
    characters,
    getData,
    loading,
    nexPage,
    goPage,
    page,
    backPage,
    maxPage,
  } = useGetDataApiRick();
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
    let Lista = characters?characters:[];
    let filtroUp = filtro.toUpperCase();
    Lista = Lista.filter(x => x.name.toUpperCase().includes(filtroUp));

    return Lista;
  };

  return (
    <>
      <HeaderApi setFiltro={setFiltro}
      page={page}
      maxPage={maxPage} />
      <Pagination
        nexPage={nexPage}
        goPage={goPage}
        page={page}
        backPage={backPage}
        maxPage={maxPage}
      />
      {loading ? (
        <Loading></Loading>
      ) : (
        <ListaPersonajesBase characters={filtrarCharacters()} />
      )}
    </>
  );
};

export default Api;

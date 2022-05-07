import React, {useState} from 'react';
const useGetDataApiRick = () => {
  const [characters, setCharacters] = useState([]);
  const [especifico, setEspecifico] = useState({})
  const [loading,setLoading]=useState(true);
  //acciones del hook

  const getData = async () => {
      setLoading(true);
    try {
      let dataCharacters = await fetch(
        'https://rickandmortyapi.com/api/character',
        {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          // body: JSON.stringify({
          //   firstParam: 'yourValue',
          //   secondParam: 'yourOtherValue'
          // })
        },
      );
      let datacharactersjson = await dataCharacters.json();
      // console.log(datacharactersjson?.results)
      setCharacters(datacharactersjson?.results);
      setLoading(false)
    } catch (error) {
        setLoading(false)
      console.log(error);
    }
  };

  const GetDataEspesifica=async (uri)=>{
    try {
        let dataespecifico = await fetch(
          uri,
          {
            method: 'GET',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            }
          },
        );
        let dataespecificojson = await dataespecifico.json();
        setEspecifico(dataespecificojson);
        setLoading(false)
      } catch (error) {
        setLoading(false)
        console.log(error);
      }
  }

  return {characters, getData, GetDataEspesifica,especifico,loading};
};

export default useGetDataApiRick;

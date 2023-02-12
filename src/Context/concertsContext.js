import React, { createContext, useState, useContext } from 'react';
import {getIndieConcerts} from '../components/functions/AxiosCalls'
import { useEffect } from 'react'
import {createConcert} from '../components/functions/AxiosCalls'

// Se crea el contexto
const PostContext = createContext();

// Función que permite a los componentes hijos acceder al contexto
export const usePostContext = () => {
  const context = useContext(PostContext);
  return context;
}

// Proveedor de contexto
const PostProvider = ({ children }) => {
  // Se inicializa el estado de "concert" como un array vacío
  const [concert, setConcert] = useState([]);

  // Función asíncrona que obtiene los conciertos indie
  const fetchConcerts = async () => { 
    try {
      const res = await getIndieConcerts()
      setConcert(res.data.concerts)
    } catch (error) {
      console.error(error)
    }
  }

  const postConcert = async (newConcert) => {
    const res = await createConcert(newConcert)
    setConcert([...concert, res.data])

}

  // Se ejecuta la función "fetchConcerts" después de que el componente se haya montado
  useEffect(() => {
    fetchConcerts()
  }, [])
  
  // Se devuelve el componente "PostContext.Provider" que proporciona el contexto
  return (
    <PostContext.Provider value={{ concert, setConcert, postConcert }}>
      {children}
    </PostContext.Provider>
  );
};
  
// Se exporta el proveedor de contexto como componente por defecto
export default PostProvider;

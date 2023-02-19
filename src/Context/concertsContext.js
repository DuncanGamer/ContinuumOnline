
import React, { createContext, useState, useContext, useEffect } from 'react';
import { getIndieConcerts, getUserConcerts, createConcert } from '../components/functions/AxiosCalls';

const PostContext = createContext();

export const usePostContext = () => {
  const context = useContext(PostContext);
  return context;
};

const PostProvider = ({ children }) => {
  const [concert, setConcert] = useState([]);
  const [userConcert, setUserConcert] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchConcerts = async () => {
    try {
      const res = await getIndieConcerts();
    
      setConcert(res.data.concerts);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchUserConcerts = async () => {
    try {
      const id = localStorage.getItem('userId');
      
      const res = await getUserConcerts(id);
      console.log(res.data)
      setUserConcert(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const postConcert = async (newConcert) => {
    try {
      setIsLoading(true);

      const { token, userId } = localStorage;
      newConcert.createdBy = userId;

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const res = await createConcert(newConcert, config);
      setConcert([...concert, res.data]);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      await Promise.all([fetchConcerts(), fetchUserConcerts()]);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <PostContext.Provider value={{ concert, setConcert, userConcert, setUserConcert, postConcert,fetchUserConcerts, isLoading }}>
      {children}
    </PostContext.Provider>
  );
};

export default PostProvider;









// import React, { createContext, useState, useContext } from 'react';
// import {getIndieConcerts, getUserConcerts} from '../components/functions/AxiosCalls'
// import { useEffect } from 'react'
// import {createConcert} from '../components/functions/AxiosCalls'
// import axios from 'axios'

// // Se crea el contexto
// const PostContext = createContext();


// // Función que permite a los componentes hijos acceder al contexto
// export const usePostContext = () => {
//   const context = useContext(PostContext);
//   return context;
// }

// // Proveedor de contexto
// const PostProvider = ({ children }) => {
//   // Se inicializa el estado de "concert" como un array vacío
//   const [concert, setConcert] = useState([]);
//   const [userConcert, setUserConcert] = useState([]);
//   // Función asíncrona que obtiene los conciertos indie
//   const fetchConcerts = async () => { 
//     try {
//       const res = await getIndieConcerts()
//       setConcert(res.data.concerts)
//     } catch (error) {
//       console.error(error)
//     }
//   }

//   const fetchUserConcerts = async () => {
//     try {
//       // const token = localStorage.getItem('token');
//       const id = localStorage.getItem('userId');
//       // const config = {
//       //   headers: {
//       //     Authorization: `Bearer ${token}`
//       //   }
//       // };
//       const res = await getUserConcerts(id);
//       setUserConcert(res.data.concerts);
//     } catch (error) {
//       console.log(error);
//     }
//   };




//   const postConcert = async (newConcert) => {
//     try {
//       const token = localStorage.getItem('token');
//       const userId = localStorage.getItem('userId');
      
//       // Agrega el ID del usuario al objeto de concierto
//       newConcert.createdBy = userId;
      
//       const config = {
//         headers: {
//           Authorization: `Bearer ${token}`
//         }
//       };
//       const res = await createConcert(newConcert, config);
//       setConcert([...concert, res.data]);
//     } catch (error) {
//       console.log(error);
//     }
//   };
  

//   useEffect(() => {
//     fetchConcerts(),
//     fetchUserConcerts()

//   }, [])
  
//   // Se devuelve el componente "PostContext.Provider" que proporciona el contexto
//   return (
//     <PostContext.Provider value={{ concert,setConcert,userConcert,setUserConcert,postConcert }}>
//       {children}
//     </PostContext.Provider>
//   );
// };
  
// // Se exporta el proveedor de contexto como componente por defecto
// export default PostProvider;
  
  
  








// Import necessary components from react-router-dom and other parts of the application.
import { useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";  // Custom hook for accessing the global state.
import { CardG, CardGdos } from "../components/Card"
import { useState, useEffect } from "react";

export const Demos = () => {
  // Access the global state and dispatch function using the useGlobalReducer hook.
  const { store, dispatch } = useGlobalReducer()
  const { uid } = useParams()

  useEffect(() => {
    fetch(`https://www.swapi.tech/api/planets/${uid}`)
      .then(res => res.json())
      .then(data => {
        dispatch({
          type: "set_planeta",
          payload: data.result
        })
      })
      .catch(err => console.error(err))

      

  }, [uid])
  if (!store.planeta) return <div>Carregando...</div>

  return (
    <>

      <div className="container">
        <CardGdos
          img={`https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/planets/${store.planeta.uid}.jpg`}
          data={store.planeta}
          name={store.planeta.properties.name}
        />
      </div>
    </>
  );
};

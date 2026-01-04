// Import necessary components from react-router-dom and other parts of the application.
import { useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";  // Custom hook for accessing the global state.
import { CardG } from "../components/Card"
import { useState, useEffect } from "react";

export const Demo = () => {
  // Access the global state and dispatch function using the useGlobalReducer hook.
  const { store, dispatch } = useGlobalReducer()
  const [personaje, setPersonaje] = useState(null)
  console.log(personaje);

  const { uid } = useParams()
  console.log("UID recebido:", uid);

  useEffect(function () {
      fetch(`https://www.swapi.tech/api/people/${uid}`)
        .then(res => res.json())
        .then((responseAPI) => {
          if (!responseAPI.result) return;
          setPersonaje({
            ...responseAPI.result.properties,
            uid: responseAPI.result.uid
          });
        })
        .catch(err => console.error(err));
  }, []);


  return (
    <div className="container">
      {personaje && (
        <CardG
          img={`https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/characters/${uid}.jpg`}
          data={personaje}
        />)}
    </div>
  );
};

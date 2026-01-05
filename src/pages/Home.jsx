import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Navbardos } from "../components/Navbar"
import { CardP } from "../components/Card"
import { useEffect, useState } from "react";


export const Home = () => {

	const { store, dispatch } = useGlobalReducer()
	const getPersonajes = async()=> {
		fetch("https://www.swapi.tech/api/people")
			.then(res => res.json())
			.then(responseAPI => {
				dispatch({
					type:"add_personajes",
					payload: responseAPI.results
				})
				console.log(store.personajes);
			})
			.catch(err => console.error(err));
	} 
	
	useEffect(() => {
		if (store.personajes.length == 0)
		{getPersonajes ()}
	}, []);

	return (
		<div>
			<Navbardos />
			<div className="container d-flex justify-content-center flex-wrap gap-4 mt-4">
				{store.personajes.map(p => (
					<CardP key={p.uid}
						img={`https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/characters/${p.uid}.jpg`}
						data={p}
						name={p.name} />
				))}
			</div>
		</div>
	);
}; 
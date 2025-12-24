import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Navbardos } from "../components/Navbar"
import CardG from "../components/Card"


export const Home = () => {

  const {store, dispatch} = useGlobalReducer()

	return (
		<div>
			<Navbardos />
			<CardG />
		</div>
	);
}; 
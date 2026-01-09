import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Navbar = () => {

	return (
		<nav className="navbar">
			<div>
				<h1>STAR WARS WORLD</h1>
			</div>
		</nav>
	);
};

export const Navbardos = () => {
	const { store, dispatch } = useGlobalReducer();

	return (
		<div>
			<nav className="navbardos">
				<img src="https://www.citypng.com/public/uploads/preview/hd-star-wars-silver-logo-transparent-png-701751694772182tw3krxlzbc.png" alt="Logo" width="30" height="24" />
				<div><li>
					<a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Favoritos</a>
					<ul className="dropdown-menu dropdown-menu-end">

						{store.favoritos.map((fav, index) => (
							<li key={index} className="dropdown-item d-flex justify-content-between">
								<span>
									{fav.type === "personaje"}
									{fav.type === "planeta"}
									{fav.type === "veiculo"}
									{fav.name}
								</span>

								<span
									style={{ cursor: "pointer" }}
									onClick={() =>
										dispatch({
											type: "delete_favoritos", payload: { uid: fav.uid, type: fav.type } }) } >
								❌
							</span>
							</li>
						))}

				</ul>
			</li></div>
			</nav >
		</div >
	)
}
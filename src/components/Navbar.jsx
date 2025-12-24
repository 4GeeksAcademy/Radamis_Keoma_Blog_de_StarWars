import { Link } from "react-router-dom";

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

	return (
		<div>
			<nav className="navbardos">
					<img src="https://www.citypng.com/public/uploads/preview/hd-star-wars-silver-logo-transparent-png-701751694772182tw3krxlzbc.png" alt="Logo" width="30" height="24" />
					<div><li>
						<a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Dropdown</a>
						<ul className="dropdown-menu">
						</ul>
					</li></div>
			</nav>
		</div>
	)
}
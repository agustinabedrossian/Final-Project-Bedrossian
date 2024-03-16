import { GiClothes } from "react-icons/gi";
import CartWidget from "./CartWidget";
import "../style/NavBar.css"
import { Link } from "react-router-dom";


function NavBar() {
	return <div>
		<section className="hero is-info is-small">
			<div className="menu-header">
				<div>
					<Link to="/">
					<h1 className="title menu-title">ModaExpress</h1>
					<h2 className="subtitle">Renova tu vestidor <GiClothes /> </h2>
					</Link>
				</div>
				<Link to="/cart">
					<CartWidget />
				</Link>
			</div>
			<aside className="menu hero-body">
				<ul className="navbar">
					<li className="nav-item active has-text-weight-bold">
						<Link to="/category/mujeres" className="nav-link">Mujer</Link>
					</li>
					<li className="nav-item active has-text-weight-bold">
						<Link to="/category/hombres" className="nav-link">Hombre</Link>
					</li>
					<li className="nav-item active has-text-weight-bold">
						<Link to="/category/ninios" className="nav-link">Niños</Link>
					</li>

				</ul>
			</aside>

		</section>

	</div>
}

export default NavBar;
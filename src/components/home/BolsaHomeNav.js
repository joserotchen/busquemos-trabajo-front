import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import BolsaHome from "./BolsaHome";

const BolsaHomeNav = () => {
	return (
		<section className="bolsa-home">
			<h2>Bolsa de empleo según:</h2>
			<nav className="bolsa-home-nav">
				<button className="nav-bolsa-active">
					<span>
						<FontAwesomeIcon icon={faLocationDot} /> Localización
					</span>
					<div></div>
				</button>
				<button>
					<span>
						<FontAwesomeIcon icon={faBriefcase} /> Cargos profesionales
					</span>
				</button>
			</nav>
			<BolsaHome />
		</section>
	);
};

export default BolsaHomeNav;

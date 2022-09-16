import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import BolsaHome from "./BolsaHome";
import { useState } from "react";

const BolsaHomeNav = () => {
	const [type, setType] = useState("location");

	const changeTypeLocation = () => {
		setType("location");
	};

	const changeTypeJob = () => {
		setType("job");
	};

	return (
		<section className="bolsa-home">
			<h2>Bolsa de empleo según:</h2>
			<nav className="bolsa-home-nav">
				<button className="nav-bolsa-active" onClick={changeTypeLocation}>
					<span>
						<FontAwesomeIcon icon={faLocationDot} /> Localización
					</span>
					{type === "location" ? <div></div> : null}
				</button>
				<button onClick={changeTypeJob}>
					<span>
						<FontAwesomeIcon icon={faBriefcase} /> Cargos profesionales
					</span>
					{type === "job" ? <div></div> : null}
				</button>
			</nav>
			<BolsaHome type={type} />
		</section>
	);
};

export default BolsaHomeNav;

import Image from "next/image";
import heroImage from "../../../public/img/img-hero-home.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faComputerMouse } from "@fortawesome/free-solid-svg-icons";

const HeroHome = () => {
	return (
		<section className="hero-home">
			<div className="hero-home-container">
				<div className="hero-home__main">
					<h3>Encuentra un buen trabajo que te acomoda</h3>
					<h5>Busca tu oportunidad laboral</h5>
					<form autoComplete="on">
						<input type="text" placeholder="Buscar empleo" />
						<div className="separator"></div>
						<input type="text" placeholder="Ubicaciones" />
						<button>
							<FontAwesomeIcon icon={faMagnifyingGlass} />
						</button>
					</form>
					<h4>Palabras Populares</h4>
					<div className="popular-words">
						<button>Fullstack</button>
						<button>Diseñador</button>
						<button>Fullstack</button>
						<button>Senior</button>
						<button>Web</button>
						<button>Senior</button>
						<button>Web</button>
					</div>
				</div>
				<div className="hero-home__img">
					<Image src={heroImage} />
				</div>
			</div>
			<a className="arrow-hero" href="#jobs-home">
				<FontAwesomeIcon icon={faComputerMouse} />
			</a>
		</section>
	);
};

export default HeroHome;

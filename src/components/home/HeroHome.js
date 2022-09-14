import Image from "next/image";
import heroImage from "../../../public/img/img-hero-home.png";
import serachImg from "../../../public/img/search-img.png";

const HeroHome = () => {
	return (
		<section className="hero-home">
			<div className="hero-home__main">
				<h3>Encuentra un buen trabajo que te acomoda</h3>
				<h5>Busca tu oportunidad laboral</h5>
				<form autocomplete="on">
					<input type="text" placeholder="Buscar empleo" />
					<div className="separator"></div>
					<input type="text" placeholder="Ubicaciones" />
					<button>
						<Image src={serachImg} />
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
		</section>
	);
};

export default HeroHome;

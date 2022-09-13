import Image from "next/image";
import heroImage from "../../../public/img/img-hero-home.png";

const HeroHome = () => {
	return (
		<section className="hero-home">
			<div className="hero-home__main">
				<h3>Encuentra un buen trabajo que te acomoda</h3>
				<h5>Busca tu oportunidad laboral</h5>
				<form>
					<input type="text" placeholder="Buscar empleo |  Ubicaciones"></input>

					<button type="submit">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="40"
							height="40"
							fill="currentColor"
							class="bi bi-search"
							viewBox="0 0 16 16"
						>
							<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
						</svg>
					</button>
				</form>
				<h4>Palabras Populares</h4>
				<div className="popular-words">
					<span>Fullstack</span>
					<span>Diseñador</span>
					<span>Fullstack</span>
					<span>Senior</span>
					<span>Web</span>
					<span>Senior</span>
					<span>Web</span>
				</div>
			</div>
			<div className="hero-home__img">
				<Image src={heroImage} />
			</div>
		</section>
	);
};

export default HeroHome;

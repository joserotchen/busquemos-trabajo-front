import Container from "../components/common/Container";
import Image from "next/image";
import wordlImg from "../../public/img/wordl.png";
import peruImg from "../../public/img/peru.png";

const vacantes = () => {
	return (
		<Container>
			<div className="content-container ">
				<section className="vacantes">
					<h1>Trabaja en Google</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
						mattis, dui quis rhoncus fermentum, mauris erat sodales justo,
						aliquet venenatis leo ex a massa.
					</p>
					<div className="vacantes-container">
						<article>
							<h3>Diseñador UX/UI</h3>
							<div className="vacantes-container-type">
								<Image src={wordlImg} />
								<span>Remoto</span>
							</div>
							<button>Postula</button>
						</article>

						<article>
							<h3>Desarrollador Frontend</h3>
							<div className="vacantes-container-type">
								<Image src={peruImg} />
								<span>Lima (híbrido)</span>
							</div>
							<button>Postula</button>
						</article>

						<article>
							<h3>Especialista DevSecOps</h3>
							<div className="vacantes-container-type">
								<Image src={peruImg} />
								<span>Lima (híbrido)</span>
							</div>
							<button>Postula</button>
						</article>

						<article>
							<h3>Creador de Contenidos</h3>
							<div className="vacantes-container-type">
								<Image src={peruImg} />
								<span>Lima (híbrido)</span>
							</div>
							<button>Postula</button>
						</article>
					</div>
				</section>
			</div>
		</Container>
	);
};

export default vacantes;

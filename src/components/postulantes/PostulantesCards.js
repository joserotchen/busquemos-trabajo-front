import Image from "next/image";
import ubiImg from "../../../public/img/ubi-img.png";
import person1Img from "../../../public/img/person-1.png";
import person2Img from "../../../public/img/person-2.png";
import person3Img from "../../../public/img/person-3.png";

const PostulantesCards = () => {
	return (
		<section className="postulantes-cards">
			<div className="postulantes-cards-nav">
				<h3>Ver 22 candidatos</h3>
				<select>
					<option>Reciente</option>
				</select>
			</div>
			<div className="postulantes-cards-cards">
				<article className="card-postulante">
					<Image src={person1Img} />
					<h3>Daniel López</h3>
					<h5>Desarrollador Fullstack</h5>
					<div>
						{" "}
						<Image src={ubiImg} /> <span>Lima, Perú</span>
					</div>
					<button>Ver Perfil</button>
				</article>

				<article className="card-postulante">
					<Image src={person2Img} />
					<h3>Carla Vilches</h3>
					<h5>Diseñadora UX/UI</h5>
					<div>
						{" "}
						<Image src={ubiImg} /> <span>Santiago, Chile</span>
					</div>
					<button>Ver Perfil</button>
				</article>

				<article className="card-postulante">
					<Image src={person3Img} />
					<h3>José Peréz</h3>
					<h5>Creador de Contenidos</h5>
					<div>
						{" "}
						<Image src={ubiImg} /> <span>Lima, Perú</span>
					</div>
					<button>Ver Perfil</button>
				</article>

				<article className="card-postulante">
					<Image src={person1Img} />
					<h3>Daniel López</h3>
					<h5>Desarrollador Fullstack</h5>
					<div>
						{" "}
						<Image src={ubiImg} /> <span>Lima, Perú</span>
					</div>
					<button>Ver Perfil</button>
				</article>

				<article className="card-postulante">
					<Image src={person2Img} />
					<h3>Carla Vilches</h3>
					<h5>Diseñadora UX/UI</h5>
					<div>
						{" "}
						<Image src={ubiImg} /> <span>Santiago, Chile</span>
					</div>
					<button>Ver Perfil</button>
				</article>

				<article className="card-postulante">
					<Image src={person3Img} />
					<h3>José Peréz</h3>
					<h5>Creador de Contenidos</h5>
					<div>
						{" "}
						<Image src={ubiImg} /> <span>Lima, Perú</span>
					</div>
					<button>Ver Perfil</button>
				</article>
			</div>
		</section>
	);
};

export default PostulantesCards;

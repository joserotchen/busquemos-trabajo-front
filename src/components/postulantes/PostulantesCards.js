import Image from "next/image";
import ubiImg from "../../../public/img/ubi-img.png";
import person1Img from "../../../public/img/person-1.png";
import person2Img from "../../../public/img/person-2.png";
import person3Img from "../../../public/img/person-3.png";
import { useState } from "react";

const PostulantesCards = () => {
	const [drop, setDrop] = useState("Recientes");

	const changeDrop = (e) => {
		const value = e.target.textContent;
		setDrop(value);
	};
	return (
		<section className="postulantes-cards">
			<div className="postulantes-cards-nav">
				<h3>Ver 22 candidatos</h3>
				<span class="dropdown">
					<button>{drop} </button>
					<label>
						<input type="checkbox" />
						<ul>
							<li onClick={changeDrop}>Recientes</li>
							<li onClick={changeDrop}>Una opción</li>
							<li onClick={changeDrop}>Otra opción</li>
						</ul>
					</label>
				</span>
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

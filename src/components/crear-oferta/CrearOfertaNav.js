import Image from "next/image";
import arrowImg from "../../../public/img/arrow.png";

const CrearOfertaNav = ({ page }) => {
	return (
		<nav className="crear-oferta-nav">
			<a href="#!">
				<div>1</div>
				<span>Información básica</span>
				<div className="icon">
					<Image src={arrowImg} />
				</div>
			</a>

			<a href="#!">
				<div>2</div>
				<span>Requerimientos</span>
				<div className="icon">
					<Image src={arrowImg} />
				</div>
			</a>

			<a href="#!">
				<div>3</div>
				<span>Beneficios</span>
				<div className="icon">
					<Image src={arrowImg} />
				</div>
			</a>

			<a href="#!">
				<div>4</div>
				<span>Preguntas</span>
				<div className="icon">
					<Image src={arrowImg} />
				</div>
			</a>

			<a href="#!">
				<div>5</div>
				<span>Publicar</span>
				<div className="icon">
					<Image src={arrowImg} />
				</div>
			</a>
		</nav>
	);
};

export default CrearOfertaNav;

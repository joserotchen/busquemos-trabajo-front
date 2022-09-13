import Image from "next/image";
import micvImg from "../../../public/img/micv-img.png";
import alertasImg from "../../../public/img/misalertas-img.png";
import avisosImg from "../../../public/img/guardados-img.png";
import postulacionesImg from "../../../public/img/postulaciones-img.png";
import configImg from "../../../public/img/config-img.png";

const NavCv = ({ page }) => {
	return (
		<nav className="nav-cv">
			<a href="#!" className="a-active">
				<span>
					<Image src={micvImg} /> Mi CV
				</span>
				<div className="nav-active"></div>
			</a>
			<a href="#!">
				<span>
					<Image src={alertasImg} /> Mis Alertas
				</span>
			</a>
			<a href="#!">
				<span>
					<Image src={avisosImg} /> Mis Avisos Guardados
				</span>
			</a>
			<a href="#!">
				<span>
					<Image src={postulacionesImg} /> Mis Postulaciones
				</span>
			</a>
			<a href="#!">
				<span>
					<Image src={configImg} /> Configuración
				</span>
			</a>
		</nav>
	);
};

export default NavCv;

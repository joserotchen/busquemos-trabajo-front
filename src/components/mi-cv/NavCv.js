import Image from "next/image";
import micvImg from "../../../public/img/micv-img.png";
import alertasImg from "../../../public/img/misalertas-img.png";
import avisosImg from "../../../public/img/guardados-img.png";
import postulacionesImg from "../../../public/img/postulaciones-img.png";
import configImg from "../../../public/img/config-img.png";
import Link from "next/link";
import { useEffect } from "react";

const NavCv = ({ page }) => {
	useEffect(() => {
		const miCv = document.getElementById("mi-cv");
		const misAlertas = document.getElementById("mis-alertas");
		const misAvisos = document.getElementById("mis-avisos");
		const misPostulaciones = document.getElementById("mis-postulaciones");
		const configuracion = document.getElementById("configuracion");

		if (page === "mi-cv") {
			miCv.classList.add("a-active");
		} else if (page === "mis-alertas") {
			misAlertas.classList.add("a-active");
		} else if (page === "mis-avisos") {
			misAvisos.classList.add("a-active");
		} else if (page === "mis-postulaciones") {
			misPostulaciones.classList.add("a-active");
		} else if (page === "configuracion") {
			configuracion.classList.add("a-active");
		} else {
			miCv.classList.remove("a-active");
			misAlertas.classList.remove("a-active");
			misAvisos.classList.remove("a-active");
			misPostulaciones.classList.remove("a-active");
			configuracion.classList.remove("a-active");
		}
	}, [page]);

	return (
		<nav className="nav-cv">
			<Link href="/perfil/mi-cv">
				<a id="mi-cv">
					<span>
						<Image src={micvImg} /> Mi CV
					</span>
					{page === "mi-cv" ? <div className="nav-active"></div> : null}
				</a>
			</Link>
			<Link href="/perfil/mis-alertas">
				<a id="mis-alertas">
					<span>
						<Image src={alertasImg} /> Mis Alertas
					</span>
					{page === "mis-alertas" ? <div className="nav-active"></div> : null}
				</a>
			</Link>
			<Link href="/perfil/mis-avisos">
				<a id="mis-avisos">
					<span>
						<Image src={avisosImg} /> Mis Avisos Guardados
					</span>
					{page === "mis-avisos" ? <div className="nav-active"></div> : null}
				</a>
			</Link>
			<Link href="/perfil/mis-postulaciones">
				<a id="mis-postulaciones">
					<span>
						<Image src={postulacionesImg} /> Mis Postulaciones
					</span>
					{page === "mis-postulaciones" ? (
						<div className="nav-active"></div>
					) : null}
				</a>
			</Link>
			<Link href="/perfil/configuracion">
				<a id="configuracion">
					<span>
						<Image src={configImg} /> Configuración
					</span>
					{page === "configuracion" ? <div className="nav-active"></div> : null}
				</a>
			</Link>
		</nav>
	);
};

export default NavCv;

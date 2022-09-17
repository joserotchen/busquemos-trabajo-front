import Image from "next/image";
import arrowImg from "../../../public/img/arrow.png";
import Link from "next/link";
import { useEffect } from "react";

const CrearOfertaNav = ({ page }) => {
	useEffect(() => {
		const informacion = document.getElementById("informacion");
		const requerimientos = document.getElementById("requerimientos");
		const beneficios = document.getElementById("beneficios");
		const preguntas = document.getElementById("preguntas");
		const publicar = document.getElementById("publicar");

		if (page === "informacion") {
			informacion.classList.add("a-active");
		} else if (page === "requerimientos") {
			informacion.classList.add("a-active");
			requerimientos.classList.add("a-active");
		} else if (page === "beneficios") {
			informacion.classList.add("a-active");
			requerimientos.classList.add("a-active");
			beneficios.classList.add("a-active");
		} else if (page === "preguntas") {
			informacion.classList.add("a-active");
			requerimientos.classList.add("a-active");
			beneficios.classList.add("a-active");
			preguntas.classList.add("a-active");
		} else if (page === "publicar") {
			informacion.classList.add("a-active");
			requerimientos.classList.add("a-active");
			beneficios.classList.add("a-active");
			preguntas.classList.add("a-active");
			publicar.classList.add("a-active");
		}
	}, [page]);
	return (
		<nav className="crear-oferta-nav">
			<Link href={"/crear-oferta/informacion"}>
				<a id="informacion">
					<div>1</div>
					<span>Información básica</span>
					<div className="icon">
						<Image src={arrowImg} />
					</div>
				</a>
			</Link>

			<Link href={"/crear-oferta/requerimientos"}>
				<a id="requerimientos">
					<div>2</div>
					<span>Requerimientos</span>
					<div className="icon">
						<Image src={arrowImg} />
					</div>
				</a>
			</Link>

			<Link href={"/crear-oferta/beneficios"}>
				<a id="beneficios">
					<div>3</div>
					<span>Beneficios</span>
					<div className="icon">
						<Image src={arrowImg} />
					</div>
				</a>
			</Link>

			<Link href={"/crear-oferta/preguntas"}>
				<a id="preguntas">
					<div>4</div>
					<span>Preguntas</span>
					<div className="icon">
						<Image src={arrowImg} />
					</div>
				</a>
			</Link>

			<Link href={"/crear-oferta/publicar"}>
				<a id="publicar">
					<div>5</div>
					<span>Publicar</span>
					<div className="icon">
						<Image src={arrowImg} />
					</div>
				</a>
			</Link>
		</nav>
	);
};

export default CrearOfertaNav;

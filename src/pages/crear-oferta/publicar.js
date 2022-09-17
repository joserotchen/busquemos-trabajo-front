import Container from "../../components/common/Container";
import CrearOfertaNav from "../../components/crear-oferta/CrearOfertaNav";
import Image from "next/image";
import imagePublicar from "../../../public/img/image-publicar.png";

const publicar = () => {
	return (
		<Container>
			<div className="content-container">
				<section className="crear-oferta-informacion">
					<h1>Crear nueva oferta</h1>
					<CrearOfertaNav page={"publicar"} />
					<div className="crear-oferta-publicar">
						<h2>¡Casi terminamos!</h2>
						<Image src={imagePublicar} />
						<button>Publicar</button>
					</div>
				</section>
			</div>
		</Container>
	);
};

export default publicar;

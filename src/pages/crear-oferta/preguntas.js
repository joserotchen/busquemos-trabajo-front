import Container from "../../components/common/Container";
import CrearOfertaNav from "../../components/crear-oferta/CrearOfertaNav";

const preguntas = () => {
	return (
		<Container>
			<div className="content-container">
				<section className="crear-oferta-informacion">
					<h1>Crear nueva oferta</h1>
					<CrearOfertaNav page={"informacion"} />
					<div className="crear-oferta-informacion-container">
						<form>
							<h2>Preguntas</h2>
						</form>
					</div>
				</section>
			</div>
		</Container>
	);
};

export default preguntas;

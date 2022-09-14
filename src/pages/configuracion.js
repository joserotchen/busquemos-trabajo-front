import Container from "../components/common/Container";
import NavCv from "../components/mi-cv/NavCv";

const configuracion = () => {
	return (
		<Container>
			<div className="content-container ">
				<NavCv page={"configuracion"} />
				<section className="configuración">
					<h1>Configuración</h1>
				</section>
			</div>
		</Container>
	);
};

export default configuracion;

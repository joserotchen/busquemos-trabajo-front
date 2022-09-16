import Container from "../../components/common/Container";
import CrearOfertaNav from "../../components/crear-oferta/CrearOfertaNav";

const informacion = () => {
	return (
		<Container>
			<div className="content-container">
				<CrearOfertaNav page={"informacion"} />
			</div>
		</Container>
	);
};

export default informacion;

import Container from "../../components/common/Container";
import CrearOfertaNav from "../../components/crear-oferta/CrearOfertaNav";

const beneficios = () => {
	return (
		<Container>
			<div className="content-container">
				<section className="crear-oferta-informacion">
					<h1>Crear nueva oferta</h1>
					<CrearOfertaNav page={"beneficios"} />
					<div className="crear-oferta-beneficios-container">
						<form className="beneficios-form">
							<h2>Beneficios</h2>

							<div className="container-beneficios-form">
								<label className="label-special-input">
									Persona con discapacidad
									<div class="button r" id="button-1">
										<input type="checkbox" class="checkbox" />
										<div class="knobs"></div>
										<div class="layer"></div>
									</div>
								</label>

								<div className="btns-form">
									<button className="cancelar">Cancelar</button>
									<button className="guardar">Guardar y Continuar</button>
								</div>
							</div>
						</form>
					</div>
				</section>
			</div>
		</Container>
	);
};

export default beneficios;

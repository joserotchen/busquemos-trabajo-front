import Container from "../../components/common/Container";
import CrearOfertaNav from "../../components/crear-oferta/CrearOfertaNav";

const preguntas = () => {
	return (
		<Container>
			<div className="content-container">
				<section className="crear-oferta-preguntas">
					<h1>Crear nueva oferta</h1>
					<CrearOfertaNav page={"preguntas"} />
					<div className="crear-oferta-preguntas-container">
						<form>
							<h2>Preguntas</h2>
							<p>
								Añade preguntas de filtrado con el objetivo de obtener
								información más específica sobre el candidato para descartar a
								los candidatos menos adecuados.
							</p>
							<p>
								Puedes publicar hasta 5 preguntas en modo abierto o 5 en modo
								cerrado.
							</p>

							<label className="textarea-preguntas">
								Cuenta con un programa de inclusión laboral, por lo que queremos
								saber si tienes algún tipo de discapacidad para apoyarte en una
								mejor entrevista y proceso de selección (Sí/No).
								<textarea></textarea>
							</label>

							<label className="textarea-preguntas">
								¿Cuáles son tus expectativas de renta líquida? * La expectativa
								de renta debe ser superior o igual a $350.000.
								<textarea></textarea>
							</label>

							<div className="add-pregunta">
								<button>Añadir pregunta</button>
							</div>

							<div className="btns-form">
								<button className="cancelar">Cancelar</button>
								<button className="guardar">Guardar y Continuar</button>
							</div>
						</form>
					</div>
				</section>
			</div>
		</Container>
	);
};

export default preguntas;

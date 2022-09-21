import Container from "../../components/common/Container";
import CrearOfertaNav from "../../components/crear-oferta/CrearOfertaNav";
import Router from "next/router";

const informacion = () => {
	const goNextPage = (e) => {
		e.preventDefault();
		Router.push("/crear-oferta/requerimientos");
	};

	return (
		<Container>
			<div className="content-container">
				<section className="crear-oferta-informacion">
					<h1>Crear nueva oferta</h1>
					<CrearOfertaNav page={"informacion"} />
					<div className="crear-oferta-informacion-container">
						<form>
							<h2>Información básica</h2>

							<div className="doble-input">
								<label>
									Cargo Laboral
									<input type="text" placeholder="Ej: Diseñador" />
								</label>

								<label>
									Complemento
									<input type="text" placeholder="Ej: especialización" />
								</label>
							</div>

							<label>
								Título de aviso
								<select></select>
							</label>

							<div className="doble-input">
								<label>
									Departamento ó Área
									<select>
										<option>Selecciona</option>
									</select>
								</label>

								<label>
									Jornada laboral
									<select>
										<option>Selecciona</option>
									</select>
								</label>
							</div>

							<label>
								Descripción de tareas
								<textarea></textarea>
							</label>

							<div className="doble-input">
								<label>
									País
									<select></select>
								</label>

								<label>
									Ciudad/Distrito
									<select></select>
								</label>
							</div>

							<label>
								Tipo de contrato
								<input type="text" />
							</label>

							<label>
								Salario (mensual)
								<input type="text" />
							</label>

							<label className="no-mostrar-salario">
								<input type="checkbox" />
								No mostrar el salario en el aviso
							</label>

							<label>
								Fecha de contratación
								<input type="date" />
							</label>

							<label>
								Cantidad de vacantes
								<input type="text" />
							</label>

							<div className="btns-form">
								<button className="cancelar">Cancelar</button>
								<button className="guardar" onClick={goNextPage}>
									Guardar y Continuar
								</button>
							</div>
						</form>
					</div>
				</section>
			</div>
		</Container>
	);
};

export default informacion;

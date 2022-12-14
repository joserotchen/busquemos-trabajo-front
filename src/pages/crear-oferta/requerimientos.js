import Container from "../../components/common/Container";
import CrearOfertaNav from "../../components/crear-oferta/CrearOfertaNav";
import Router from "next/router";

const requerimientos = () => {
	const goNextPage = (e) => {
		e.preventDefault();
		Router.push("/crear-oferta/beneficios");
	};

	return (
		<Container>
			<div className="content-container">
				<section className="crear-oferta-requerimientos">
					<h1>Crear nueva oferta</h1>
					<CrearOfertaNav page={"requerimientos"} />
					<div className="crear-oferta-requerimientos-container">
						<form>
							<h2>Requerimientos</h2>

							<label>
								Años de experiencia
								<select></select>
							</label>

							<div className="doble-input-special">
								<label>
									Edad
									<select>
										<option>Edad mínima</option>
									</select>
								</label>

								<label>
									<select>
										<option>Edad máxima</option>
									</select>
								</label>
							</div>

							<label>
								Estudios mínimos
								<select></select>
							</label>

							<div className="doble-input-special">
								<label>
									Idiomas
									<select>
										<option>Selecciona</option>
									</select>
								</label>

								<label>
									<select>
										<option>Nivel de idioma</option>
									</select>
								</label>
							</div>

							<label>
								Conocimientos
								<select></select>
							</label>

							<div className="multiple-checks">
								<label style={{ width: "100%" }}>Licencia de conducir</label>
								<label>
									<input type="checkbox" />
									A-I
								</label>

								<label>
									<input type="checkbox" />
									A-II-A
								</label>

								<label>
									<input type="checkbox" />
									A-II-A
								</label>

								<label>
									<input type="checkbox" />
									A-II-B
								</label>

								<label>
									<input type="checkbox" />
									A-III-A
								</label>

								<label>
									<input type="checkbox" />
									A-III-B
								</label>

								<label>
									<input type="checkbox" />
									Sin permiso
								</label>
							</div>

							<label className="label-special-input">
								Disponibilidad para viajar
								<div class="button r" id="button-1">
									<input type="checkbox" class="checkbox" />
									<div class="knobs"></div>
									<div class="layer"></div>
								</div>
							</label>

							<label className="label-special-input">
								Disponibilidad para cambiar de residencia
								<div class="button r" id="button-1">
									<input type="checkbox" class="checkbox" />
									<div class="knobs"></div>
									<div class="layer"></div>
								</div>
							</label>

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

export default requerimientos;

import { useEffect } from "react";

const ModalEditarExperiencia = () => {
	useEffect(() => {
		document.body.classList.add("scroll-hidden");
		return () => {
			document.body.classList.remove("scroll-hidden");
		};
	});
	return (
		<section className="modal-editar-experiencia">
			<form>
				<div className="container-form">
					<h2>Editar experiencia</h2>
					<label>
						Cargo Laboral
						<input type="text" />
					</label>

					<label>
						Tipo de Empleo
						<input type="text" />
					</label>

					<label>
						Empresa
						<input type="text" />
					</label>

					<label>
						Ubicación
						<input type="text" />
					</label>

					<div className="container-dates">
						<label>
							Fecha de Inicio
							<input type="date" />
						</label>

						<label>
							Fecha de término
							<input type="date" />
						</label>
					</div>

					<label className="container-check">
						<input type="checkbox" />
						Trabajo actualmente
					</label>

					<label>
						Descripción
						<textarea></textarea>
					</label>

					<div className="container-btn">
						<button>Guardar</button>
					</div>
				</div>
			</form>
		</section>
	);
};

export default ModalEditarExperiencia;

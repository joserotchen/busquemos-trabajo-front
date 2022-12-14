import Cards from "../common/Cards";
import { useState } from "react";

const Jobs = () => {
	const [drop, setDrop] = useState("Recientes");

	const changeDrop = (e) => {
		const value = e.target.textContent;
		setDrop(value);
	};

	return (
		<section id="jobs-home" className="jobs">
			<div className="jobs-filter">
				<h5>Tipo de Empleo</h5>

				<div className="jobs-filter-checks">
					<div>
						<label className="container-input">
							<input type="checkbox" />
							<span className="checkmark"></span>
							Contrato
						</label>
					</div>
					<span>1</span>
				</div>

				<div className="jobs-filter-checks">
					<div>
						<label className="container-input">
							<input type="checkbox" />
							<span className="checkmark"></span>
							Tiempo Completo
						</label>
					</div>
					<span>4</span>
				</div>

				<div className="jobs-filter-checks">
					<div>
						<label className="container-input">
							<input type="checkbox" />
							<span className="checkmark"></span>
							Part Time
						</label>
					</div>
					<span>2</span>
				</div>

				<div className="jobs-filter-checks">
					<div>
						<label className="container-input">
							<input type="checkbox" />
							<span className="checkmark"></span>
							Remoto
						</label>
					</div>
					<span>1</span>
				</div>

				<div className="jobs-filter-checks">
					<div>
						<label className="container-input">
							<input type="checkbox" />
							<span className="checkmark"></span>
							Practica
						</label>
					</div>
					<span>0</span>
				</div>

				<h5 className="second-title">Nivel de experiencia</h5>

				<div className="jobs-filter-checks">
					<div>
						<label className="container-input">
							<input type="checkbox" />
							<span className="checkmark"></span>
							Junior
						</label>
					</div>
					<span>4</span>
				</div>

				<div className="jobs-filter-checks">
					<div>
						<label className="container-input">
							<input type="checkbox" />
							<span className="checkmark"></span>
							Semisenior
						</label>
					</div>
					<span>2</span>
				</div>

				<div className="jobs-filter-checks">
					<div>
						<label className="container-input">
							<input type="checkbox" />
							<span className="checkmark"></span>
							Senior
						</label>
					</div>
					<span>1</span>
				</div>

				<div className="jobs-filter-checks">
					<div>
						<label className="container-input">
							<input type="checkbox" />
							<span className="checkmark"></span>
							Sin experiencia
						</label>
					</div>
					<span>1</span>
				</div>

				<div className="jobs-filter-checks">
					<div>
						<label className="container-input">
							<input type="checkbox" />
							<span className="checkmark"></span>
							Ejecutivo
						</label>
					</div>
					<span>0</span>
				</div>
			</div>
			<div className="jobs-results">
				<div className="jobs-results-nav">
					<span>Ver Resultados</span>
					<span class="dropdown">
						<button>{drop} </button>
						<label>
							<input type="checkbox" />
							<ul>
								<li onClick={changeDrop}>Recientes</li>
								<li onClick={changeDrop}>Una opci??n</li>
								<li onClick={changeDrop}>Otra opci??n</li>
							</ul>
						</label>
					</span>
				</div>
				<Cards />
			</div>
		</section>
	);
};

export default Jobs;

import Cards from "../common/Cards";

const Jobs = () => {
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
						<button>Recientes</button>
						<label>
							<input type="checkbox" />
							<ul>
								<li>Recientes</li>
								<li>Una opción</li>
								<li>Otra opción</li>
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

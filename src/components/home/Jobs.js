import Cards from "../common/Cards";

const Jobs = () => {
	return (
		<section className="jobs">
			<div className="jobs-filter">
				<h5>Tipo de Empleo</h5>

				<div className="jobs-filter-checks">
					<div>
						<label class="container-input">
							<input type="checkbox" />
							<span class="checkmark"></span>
							Contrato
						</label>
					</div>
					<span>1</span>
				</div>

				<div className="jobs-filter-checks">
					<div>
						<label class="container-input">
							<input type="checkbox" />
							<span class="checkmark"></span>
							Tiempo Completo
						</label>
					</div>
					<span>4</span>
				</div>

				<div className="jobs-filter-checks">
					<div>
						<label class="container-input">
							<input type="checkbox" />
							<span class="checkmark"></span>
							Part Time
						</label>
					</div>
					<span>2</span>
				</div>

				<div className="jobs-filter-checks">
					<div>
						<label class="container-input">
							<input type="checkbox" />
							<span class="checkmark"></span>
							Remoto
						</label>
					</div>
					<span>1</span>
				</div>

				<div className="jobs-filter-checks">
					<div>
						<label class="container-input">
							<input type="checkbox" />
							<span class="checkmark"></span>
							Practica
						</label>
					</div>
					<span>0</span>
				</div>

				<h5 className="second-title">Nivel de experiencia</h5>

				<div className="jobs-filter-checks">
					<div>
						<label class="container-input">
							<input type="checkbox" />
							<span class="checkmark"></span>
							Junior
						</label>
					</div>
					<span>4</span>
				</div>

				<div className="jobs-filter-checks">
					<div>
						<label class="container-input">
							<input type="checkbox" />
							<span class="checkmark"></span>
							Semisenior
						</label>
					</div>
					<span>2</span>
				</div>

				<div className="jobs-filter-checks">
					<div>
						<label class="container-input">
							<input type="checkbox" />
							<span class="checkmark"></span>
							Senior
						</label>
					</div>
					<span>1</span>
				</div>

				<div className="jobs-filter-checks">
					<div>
						<label class="container-input">
							<input type="checkbox" />
							<span class="checkmark"></span>
							Sin experiencia
						</label>
					</div>
					<span>1</span>
				</div>

				<div className="jobs-filter-checks">
					<div>
						<label class="container-input">
							<input type="checkbox" />
							<span class="checkmark"></span>
							Ejecutivo
						</label>
					</div>
					<span>0</span>
				</div>
			</div>
			<div className="jobs-results">
				<div className="jobs-results-nav">
					<h4>Ver Resultados</h4>
					<select>
						<option value="reciente">Reciente</option>
					</select>
				</div>
				<Cards />
			</div>
		</section>
	);
};

export default Jobs;

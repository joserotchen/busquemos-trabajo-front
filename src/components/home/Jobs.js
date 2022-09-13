import Cards from "../common/Cards";

const Jobs = () => {
	return (
		<section className="jobs">
			<div className="jobs-filter">
				<h5>Tipo de Empleo</h5>
				<div className="jobs-filter-checks">
					<div>
						<input id="t-contrato" type="checkbox" />
						<label for="t-contrato"> Contrato</label>
					</div>
					<span>1</span>
				</div>

				<div className="jobs-filter-checks">
					<div>
						<input id="t-tiempo-completo" type="checkbox" />
						<label for="t-tiempo-completo"> Tiempo Completo</label>
					</div>
					<span>4</span>
				</div>

				<div className="jobs-filter-checks">
					<div>
						<input id="t-part-time" type="checkbox" />
						<label for="t-part-time"> Part Time</label>
					</div>
					<span>2</span>
				</div>

				<div className="jobs-filter-checks">
					<div>
						<input id="t-remoto" type="checkbox" />
						<label for="t-remoto"> Remoto</label>
					</div>
					<span>1</span>
				</div>

				<div className="jobs-filter-checks">
					<div>
						<input id="t-practica" type="checkbox" />
						<label for="t-practica"> Practica</label>
					</div>
					<span>0</span>
				</div>

				<h5>Nivel de experiencia</h5>

				<div className="jobs-filter-checks">
					<div>
						<input id="n-junior" type="checkbox" />
						<label for="n-junior"> Junior</label>
					</div>
					<span>4</span>
				</div>

				<div className="jobs-filter-checks">
					<div>
						<input id="n-semisenior" type="checkbox" />
						<label for="n-semisenior"> Semisenior</label>
					</div>
					<span>2</span>
				</div>

				<div className="jobs-filter-checks">
					<div>
						<input id="n-senior" type="checkbox" />
						<label for="n-senior"> Senior</label>
					</div>
					<span>1</span>
				</div>

				<div className="jobs-filter-checks">
					<div>
						<input id="n-sinexperiencia" type="checkbox" />
						<label for="n-sinexperiencia"> Sin experiencia</label>
					</div>
					<span>1</span>
				</div>

				<div className="jobs-filter-checks">
					<div>
						<input id="n-ejecutivo" type="checkbox" />
						<label for="n-ejecutivo"> Ejecutivo</label>
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

import Container from "../../components/common/Container";
import NavCv from "../../components/mi-cv/NavCv";

const misPostulaciones = () => {
	return (
		<Container>
			<div className="content-container ">
				<NavCv page={"mis-postulaciones"} />
				<section className="mis-postulaciones">
					<h1>Mis Postulaciones</h1>
					<div className="mis-avisos-select">
						<select>
							<option value="reciente">Reciente</option>
						</select>
					</div>
					<article>
						<div className="info">
							<h3>Programador Fullstack</h3>
							<h5>Kibernum</h5>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
								pellentesque diam nec convallis porttitor.
							</p>
						</div>
						<div className="data">
							<h3>Fecha de Postulación</h3>
							<h6>23/09/2022</h6>
							<h5>Estado</h5>
							<span>Enviada</span>
						</div>
					</article>
					<article>
						<div className="info">
							<h3>Desarrollador Web</h3>
							<h5>Google</h5>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
								pellentesque diam nec convallis porttitor.
							</p>
						</div>
						<div className="data">
							<h3>Fecha de Postulación</h3>
							<h6>12/09/2022</h6>
							<h5>Estado</h5>
							<span>Proceso finalizado</span>
						</div>
					</article>
				</section>
			</div>
		</Container>
	);
};

export default misPostulaciones;

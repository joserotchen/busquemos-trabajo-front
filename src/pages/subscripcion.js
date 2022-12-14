import Container from "../components/common/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const subscripcion = () => {
	return (
		<Container>
			<div className="content-container ">
				<section className="subscripcion">
					<h1>Potencia tu reclutamiento con nuestros planes</h1>
					<div className="planes-container">
						<article className="plan">
							<h2>Premium</h2>
							<div className="container-center">
								<h5>Cierra tu posición en tiempo récord</h5>
								<div className="features">
									<div className="feature">
										<div>
											<FontAwesomeIcon icon={faCircleCheck} />
										</div>
										<span>CV's postulados ilimitados</span>
									</div>

									<div className="feature">
										<div>
											<FontAwesomeIcon icon={faCircleCheck} />
										</div>
										<span>Aviso online 2 meses</span>
									</div>

									<div className="feature">
										<div>
											<FontAwesomeIcon icon={faCircleCheck} />
										</div>
										<span>Aviso destacado</span>
									</div>

									<div className="feature">
										<div>
											<FontAwesomeIcon icon={faCircleCheck} />
										</div>
										<span>Actualización automática cada 7 días</span>
									</div>

									<div className="feature">
										<div>
											<FontAwesomeIcon icon={faCircleCheck} />
										</div>
										<span>Aviso urgente</span>
									</div>

									<div className="feature">
										<div>
											<FontAwesomeIcon icon={faCircleCheck} />
										</div>
										<span>Aviso confidencial</span>
									</div>

									<div className="feature">
										<div>
											<FontAwesomeIcon icon={faCircleCheck} />
										</div>
										<span>Acceso a 10 CVs de BBDD</span>
									</div>
								</div>
							</div>

							<div className="container-bottom">
								<h3>20 avisos por $160</h3>

								<button>Comprar</button>
							</div>
						</article>

						<article className="plan">
							<span className="recomendado">Recomendado</span>
							<h2>Avanzado</h2>
							<div className="container-center">
								<h5>Multiplica los candidatos recibidos</h5>
								<div className="features">
									<div className="feature">
										<div>
											<FontAwesomeIcon icon={faCircleCheck} />
										</div>
										<span>CV's postulados ilimitados</span>
									</div>

									<div className="feature">
										<div>
											<FontAwesomeIcon icon={faCircleCheck} />
										</div>
										<span>Aviso online 2 meses</span>
									</div>

									<div className="feature">
										<div>
											<FontAwesomeIcon icon={faCircleCheck} />
										</div>
										<span>Aviso destacado</span>
									</div>

									<div className="feature">
										<div>
											<FontAwesomeIcon icon={faCircleCheck} />
										</div>
										<span>Actualización automática cada 7 días</span>
									</div>
								</div>
							</div>

							<div className="container-bottom">
								<h3>10 avisos por $130</h3>

								<button>Comprar</button>
							</div>
						</article>

						<article className="plan">
							<h2>Estándar</h2>
							<div className="container-center">
								<h5>Plan ilimitado</h5>
								<div className="features">
									<div className="feature">
										<div>
											<FontAwesomeIcon icon={faCircleCheck} />
										</div>
										<span>CV's postulados ilimitados</span>
									</div>

									<div className="feature">
										<div>
											<FontAwesomeIcon icon={faCircleCheck} />
										</div>
										<span>Aviso online 2 meses</span>
									</div>
								</div>
							</div>

							<div className="container-bottom">
								<h3>5 avisos por $50</h3>

								<button>Comprar</button>
							</div>
						</article>
					</div>
				</section>
			</div>
		</Container>
	);
};

export default subscripcion;

import Container from "../components/common/Container";
import { useEffect } from "react";

const preguntasFrecuentes = () => {
	useEffect(() => {
		let acc = document.getElementsByClassName("accordion");
		let i;

		for (i = 0; i < acc.length; i++) {
			acc[i].addEventListener("click", function () {
				this.classList.toggle("active");
				let panel = this.nextElementSibling;
				if (panel.style.display === "block") {
					panel.style.display = "none";
				} else {
					panel.style.display = "block";
				}
			});
		}
	}, []);

	return (
		<Container>
			<div className="content-container ">
				<section className="preguntas-frecuentes">
					<h1>Preguntas Frecuentes</h1>
					<h2>Encuentra respuesta a las preguntas más frecuentes. </h2>
					<div className="faq">
						<h5 class="accordion">¿Cómo se crea un empleo confidencial?</h5>
						<div class="panel">
							<p>
								Si deseas publicar un empleo de manera confidencial solo debes
								seleccionar la opción 'Publicar como confidencial' bajo el
								título de tu empleo.{" "}
							</p>
						</div>

						<h5 class="accordion">
							¿Cómo acelerar tu proceso de reclutamiento?
						</h5>
						<div class="panel">
							<p>
								Si deseas publicar un empleo de manera confidencial solo debes
								seleccionar la opción 'Publicar como confidencial' bajo el
								título de tu empleo.{" "}
							</p>
						</div>

						<h5 class="accordion">¿Cómo cancelar el plan?</h5>
						<div class="panel">
							<p>
								Si deseas publicar un empleo de manera confidencial solo debes
								seleccionar la opción 'Publicar como confidencial' bajo el
								título de tu empleo.{" "}
							</p>
						</div>

						<h5 class="accordion">¿Cómo puedo acceder la cuenta?</h5>
						<div class="panel">
							<p>
								Si deseas publicar un empleo de manera confidencial solo debes
								seleccionar la opción 'Publicar como confidencial' bajo el
								título de tu empleo.{" "}
							</p>
						</div>

						<h5 class="accordion">
							¿Cómo acelerar tu proceso de reclutamiento?
						</h5>
						<div class="panel">
							<p>
								Si deseas publicar un empleo de manera confidencial solo debes
								seleccionar la opción 'Publicar como confidencial' bajo el
								título de tu empleo.{" "}
							</p>
						</div>

						<h5 class="accordion">¿Cómo cancelar el plan?</h5>
						<div class="panel">
							<p>
								Si deseas publicar un empleo de manera confidencial solo debes
								seleccionar la opción 'Publicar como confidencial' bajo el
								título de tu empleo.{" "}
							</p>
						</div>
					</div>
				</section>
			</div>
		</Container>
	);
};

export default preguntasFrecuentes;

import Container from "../components/common/Container";
import NavCv from "../components/mi-cv/NavCv";
import Image from "next/image";
import editImg from "../../public/img/edit-img.png";
import trashImg from "../../public/img/trash-2-img.png";

const misAlertas = () => {
	return (
		<Container>
			<div className="content-container ">
				<NavCv />
				<section className="mis-alertas">
					<h1>Mis Alertas</h1>
					<article>
						<div>
							<h5>Nombre de la alerta</h5>
							<span>Trabajo de programador</span>
						</div>
						<div>
							<h5>Enviar por email</h5>
							<label class="switch">
								<input type="checkbox" />
								<span class="slider round"></span>
							</label>
						</div>
						<div>
							<h5>Período de envío</h5>
							<span>Semanal</span>
						</div>
						<div className="btns">
							<button>
								<Image src={editImg} />{" "}
							</button>
							<button>
								<Image src={trashImg} />
							</button>
						</div>
					</article>

					<article>
						<div>
							<h5>Nombre de la alerta</h5>
							<span>Trabajo de programador</span>
						</div>
						<div>
							<h5>Enviar por email</h5>
							<label class="switch">
								<input type="checkbox" />
								<span class="slider round"></span>
							</label>
						</div>
						<div>
							<h5>Período de envío</h5>
							<span>Semanal</span>
						</div>
						<div className="btns">
							<button>
								<Image src={editImg} />{" "}
							</button>
							<button>
								<Image src={trashImg} />
							</button>
						</div>
					</article>
				</section>
			</div>
		</Container>
	);
};

export default misAlertas;
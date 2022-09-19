import Container from "../../components/common/Container";
import NavCv from "../../components/mi-cv/NavCv";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const misAlertas = () => {
	return (
		<Container>
			<div className="content-container ">
				<NavCv page={"mis-alertas"} />
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
								<FontAwesomeIcon icon={faPen} />{" "}
							</button>
							<button>
								<FontAwesomeIcon icon={faTrashCan} />
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
								<FontAwesomeIcon icon={faPen} />{" "}
							</button>
							<button>
								<FontAwesomeIcon icon={faTrashCan} />
							</button>
						</div>
					</article>
				</section>
			</div>
		</Container>
	);
};

export default misAlertas;

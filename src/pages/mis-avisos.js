import Container from "../components/common/Container";
import NavCv from "../components/mi-cv/NavCv";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const misAvisos = () => {
	return (
		<Container>
			<div className="content-container ">
				<NavCv page={"mis-avisos"} />
				<section className="mis-avisos">
					<h1>Mis Avisos</h1>
					<div className="mis-avisos-select">
						<select>
							<option value="reciente">Reciente</option>
						</select>
					</div>
					<article>
						<div className="info">
							<h3>Programador Fullstack</h3>
							<h5>Mercado Libre</h5>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
								pellentesque diam nec convallis porttitor.
							</p>
						</div>
						<div className="trash">
							<FontAwesomeIcon icon={faTrashCan} />
						</div>
					</article>
					<article>
						<div className="info">
							<h3>Programador React-Redux</h3>
							<h5>Google</h5>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
								pellentesque diam nec convallis porttitor.
							</p>
						</div>
						<div className="trash">
							<FontAwesomeIcon icon={faTrashCan} />
						</div>
					</article>
				</section>
			</div>
		</Container>
	);
};

export default misAvisos;

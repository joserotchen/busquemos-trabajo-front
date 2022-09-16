import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

const ExperienceCv = () => {
	return (
		<section className="experience-cv">
			<div className="experience-cv-experience">
				<h2>Experiencia Laboral</h2>
				<div className="cv-experience-items">
					<article className="experience-item">
						<div className="icon">
							<span>
								<span></span>
							</span>
						</div>
						<div>
							<div className="experience-item-main">
								<div>
									<span>05/2020 - Presente</span>{" "}
								</div>

								<button className="edit-btn">
									<FontAwesomeIcon icon={faPen} /> Editar
								</button>
							</div>
							<div className="experience-item-description">
								<h4>Desarrollador Fullstack</h4>
								<h6>amazon.com</h6>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									Vivamus ut lacus rutrum, mollis lorem
								</p>
							</div>
						</div>
					</article>

					<article className="experience-item">
						<div className="icon">
							<span>
								<span></span>
							</span>
						</div>
						<div>
							<div className="experience-item-main">
								<div>
									<span>04/2019 - 03/2020</span>{" "}
								</div>

								<button className="edit-btn">
									<FontAwesomeIcon icon={faPen} /> Editar
								</button>
							</div>
							<div className="experience-item-description">
								<h4>Desarrollador Fullstack</h4>
								<h6>amazon.com</h6>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									Vivamus ut lacus rutrum, mollis lorem
								</p>
							</div>
						</div>
					</article>

					<article className="experience-item experience-item-last">
						<div className="icon">
							<span>
								<span></span>
							</span>
						</div>
						<div>
							<div className="experience-item-main">
								<div>
									<span>06/2015 - 03/2019</span>{" "}
								</div>

								<button className="edit-btn">
									<FontAwesomeIcon icon={faPen} /> Editar
								</button>
							</div>
							<div className="experience-item-description">
								<h4>Desarrollador Fullstack</h4>
								<h6>amazon.com</h6>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									Vivamus ut lacus rutrum, mollis lorem
								</p>
							</div>
						</div>
					</article>
				</div>
			</div>
			<div className="experience-cv-education">
				<h2>Educación</h2>
				<div className="cv-experience-items">
					<article className="experience-item experience-item-last">
						<div className="icon">
							<span>
								<span></span>
							</span>
						</div>
						<div>
							<div className="experience-item-main">
								<div>
									<span>06/2015 - 03/2019</span>{" "}
								</div>

								<button className="edit-btn">
									<FontAwesomeIcon icon={faPen} /> Editar
								</button>
							</div>
							<div className="experience-item-description">
								<h4>Ingeniero en informática</h4>
								<h6>Universidad de Lima</h6>
							</div>
						</div>
					</article>
				</div>
			</div>
		</section>
	);
};

export default ExperienceCv;

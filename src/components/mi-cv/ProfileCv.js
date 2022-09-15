import Image from "next/image";
import profileImg from "../../../public/img/profile-img.png";
import trashImg from "../../../public/img/trash-img.png";
import editImg from "../../../public/img/edit-img.png";
import tagImg from "../../../public/img/tag-img.png";
import { useEffect } from "react";

const ProfileCv = ({ page }) => {
	useEffect(() => {}, [page]);

	return (
		<section className="profile-cv">
			<div className="profile-cv-info">
				<div className="profile-cv-info-main">
					<article>
						<div className="profile-cv-info-main-photo">
							<Image src={profileImg} />
						</div>
						<div className="profile-cv-info-main-title">
							<h2>Daniel López</h2>
							<h5>Desarrollador Fullstack</h5>
						</div>
					</article>
					<article>
						{page === "perfil-candidato" ? null : (
							<button className="edit-btn">
								<Image src={editImg} /> Editar
							</button>
						)}
					</article>
				</div>
				<div className="profile-cv-info-bio">
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut
						lacus rutrum, mollis lorem convallis, lacinia sem. Praesent sed est
						nulla. Duis dapibus at orci eget tempor. Proin congue placerat
						porttitor. Integer molestie ut lacus eget suscipit. Aliquam congue
						lacus sit amet justo laoreet, vitae varius diam tincidunt.
					</p>
				</div>
				<div className="profile-cv-info-skills">
					<h4>Habilidades</h4>
					<div className="container-skills">
						<div>
							<span>
								React{" "}
								{page === "perfil-candidato" ? (
									<button
										style={{
											backgroundColor: " #406882",
											zIndex: "-1",
										}}
									></button>
								) : (
									<button>
										<Image src={trashImg} />
									</button>
								)}
							</span>
							<span>
								Javascript{" "}
								{page === "perfil-candidato" ? (
									<button
										style={{
											backgroundColor: " #406882",
											zIndex: "-1",
										}}
									></button>
								) : (
									<button>
										<Image src={trashImg} />
									</button>
								)}
							</span>
							<span>
								PHP{" "}
								{page === "perfil-candidato" ? (
									<button
										style={{
											backgroundColor: " #406882",
											zIndex: "-1",
										}}
									></button>
								) : (
									<button>
										<Image src={trashImg} />
									</button>
								)}
							</span>
							<span>
								Cryptro{" "}
								{page === "perfil-candidato" ? (
									<button
										style={{
											backgroundColor: " #406882",
											zIndex: "-1",
										}}
									></button>
								) : (
									<button>
										<Image src={trashImg} />
									</button>
								)}
							</span>
							<span>
								Web{" "}
								{page === "perfil-candidato" ? (
									<button
										style={{
											backgroundColor: " #406882",
											zIndex: "-1",
										}}
									></button>
								) : (
									<button>
										<Image src={trashImg} />
									</button>
								)}
							</span>
							<span>
								Senior{" "}
								{page === "perfil-candidato" ? (
									<button
										style={{
											backgroundColor: " #406882",
											zIndex: "-1",
										}}
									></button>
								) : (
									<button>
										<Image src={trashImg} />
									</button>
								)}
							</span>
							<span>
								Web3{" "}
								{page === "perfil-candidato" ? (
									<button
										style={{
											backgroundColor: " #406882",
											zIndex: "-1",
										}}
									></button>
								) : (
									<button>
										<Image src={trashImg} />
									</button>
								)}
							</span>
						</div>
						{page === "perfil-candidato" ? null : (
							<button className="add-tag-btn">
								<Image src={tagImg} /> agregar tag
							</button>
						)}
					</div>
				</div>
			</div>
			<div className="profile-cv-contact">
				<div className="profile-cv-contact-edit">
					{page === "perfil-candidato" ? null : (
						<button className="edit-btn">
							<Image src={editImg} /> Editar
						</button>
					)}
				</div>
				<div className="profile-cv-contact-info">
					<h4>Correo electrónico:</h4>
					<span>daniel@mail.com</span>
					<h4>Ubicación:</h4>
					<span>Lima, Perú</span>
					<h4>Teléfono:</h4>
					<span>
						(123) 456 **** <button>Ver</button>
					</span>
				</div>
				<div className="profile-cv-contact-download">
					<button>Descargar CV</button>
				</div>
			</div>
		</section>
	);
};

export default ProfileCv;

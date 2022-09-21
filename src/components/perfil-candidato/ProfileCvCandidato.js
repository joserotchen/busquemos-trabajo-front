import Image from "next/image";
import profileImg from "../../../public/img/profile-img.png";
import tagImg from "../../../public/img/tag-img.png";

const ProfileCvCandidato = () => {
	return (
		<section className="profile-cv-candidato">
			<div className="profile-cv-info-candidato">
				<div className="profile-cv-info-main-candidato">
					<article>
						<div className="profile-cv-info-main-photo-candidato">
							<Image width={129} height={129} src={profileImg} />
						</div>
						<div className="profile-cv-info-main-title-candidato">
							<h2>Daniel López</h2>
							<h5>Desarrollador Fullstack</h5>
						</div>
					</article>
					<article></article>
				</div>
				<div className="profile-cv-info-bio-candidato">
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut
						lacus rutrum, mollis lorem convallis, lacinia sem. Praesent sed est
						nulla. Duis dapibus at orci eget tempor. Proin congue placerat
						porttitor. Integer molestie ut lacus eget suscipit. Aliquam congue
						lacus sit amet justo laoreet, vitae varius diam tincidunt.
					</p>
				</div>
				<div className="profile-cv-info-skills-candidato">
					<h4>Habilidades</h4>
					<div className="container-skills-candidato">
						<div>
							<span>React </span>
							<span>Javascript </span>
							<span>PHP </span>
							<span>Cryptro </span>
							<span>Web </span>
							<span>Senior </span>
							<span>Web3 </span>
						</div>
					</div>
				</div>
			</div>
			<div className="profile-cv-contact-candidato">
				<div className="profile-cv-contact-edit-candidato"></div>
				<div className="profile-cv-contact-info-candidato">
					<h4>Correo electrónico:</h4>
					<span>daniel@mail.com</span>
					<h4>Ubicación:</h4>
					<span>Lima, Perú</span>
					<h4>Teléfono:</h4>
					<span>
						(123) 456 **** <button>Ver</button>
					</span>
				</div>
				<div className="profile-cv-contact-download-candidato">
					<button>Descargar CV</button>
				</div>
			</div>
		</section>
	);
};

export default ProfileCvCandidato;

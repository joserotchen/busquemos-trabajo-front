import Container from "../components/common/Container";
import ProfileCv from "../components/mi-cv/ProfileCv";
import ExperienceCv from "../components/mi-cv/ExperienceCv";

const perfilCandidato = () => {
	return (
		<Container>
			<div className="content-container ">
				<ProfileCv page={"perfil-candidato"} />
				<ExperienceCv page={"perfil-candidato"} />
			</div>
		</Container>
	);
};

export default perfilCandidato;

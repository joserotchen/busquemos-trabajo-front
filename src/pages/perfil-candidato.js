import Container from "../components/common/Container";
import ProfileCvCandidato from "../components/perfil-candidato/ProfileCvCandidato";
import ExperienceCvCandidato from "../components/perfil-candidato/ExperienceCvCandidato";

const perfilCandidato = () => {
	return (
		<Container>
			<div className="content-container ">
				<ProfileCvCandidato />
				<ExperienceCvCandidato />
			</div>
		</Container>
	);
};

export default perfilCandidato;

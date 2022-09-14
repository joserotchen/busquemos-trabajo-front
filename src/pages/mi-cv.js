import Container from "../components/common/Container";
import NavCv from "../components/mi-cv/NavCv";
import ProfileCv from "../components/mi-cv/ProfileCv";
import ExperienceCv from "../components/mi-cv/ExperienceCv";

const miCv = () => {
	return (
		<Container>
			<div className="content-container ">
				<NavCv page={"mi-cv"} />
				<ProfileCv />
				<ExperienceCv />
			</div>
		</Container>
	);
};

export default miCv;

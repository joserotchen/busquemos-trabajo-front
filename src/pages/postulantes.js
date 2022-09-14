import Container from "../components/common/Container";
import PostulantesForm from "../components/postulantes/PostulantesForm";
import PostulantesCards from "../components/postulantes/PostulantesCards";

const postulantes = () => {
	return (
		<Container>
			<div className="content-container ">
				<section className="postulantes">
					<h1>Postulantes</h1>
					<PostulantesForm />
					<PostulantesCards />
				</section>
			</div>
		</Container>
	);
};

export default postulantes;

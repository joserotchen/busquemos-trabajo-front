import Container from "../components/common/Container";
import HeroHome from "../components/home/HeroHome";
import Jobs from "../components/home/Jobs";

const Index = () => {
	return (
		<Container>
			<div className="content-container ">
				<HeroHome />
				<Jobs />
			</div>
		</Container>
	);
};

export default Index;

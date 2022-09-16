import Container from "../components/common/Container";
import HeroHome from "../components/home/HeroHome";
import Jobs from "../components/home/Jobs";
import InfoHome from "../components/home/InfoHome";
import BolsaHomeNav from "../components/home/BolsaHomeNav";

const Index = () => {
	return (
		<Container>
			<div className="content-container ">
				<HeroHome />
				<Jobs />
			</div>
			<InfoHome />
			<div className="content-container ">
				<BolsaHomeNav />
			</div>
		</Container>
	);
};

export default Index;

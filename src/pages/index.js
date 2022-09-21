import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import HeroHome from "../components/home/HeroHome";
import Jobs from "../components/home/Jobs";
import InfoHome from "../components/home/InfoHome";
import BolsaHomeNav from "../components/home/BolsaHomeNav";
import Head from "next/head";

const Index = () => {
	return (
		<div className="container-home">
			<Head>
				<title>Busquemos empleo</title>
				{/* GOOGLE FONTS */}
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
				<link
					href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700&display=swap"
					rel="stylesheet"
				></link>
				{/* FONTAWESOME */}
				<script
					src="https://kit.fontawesome.com/e4dbba6dec.js"
					crossorigin="anonymous"
				></script>
			</Head>
			<Header />
			<div className="content-container ">
				<HeroHome />
				<Jobs />
			</div>
			<InfoHome />
			<div className="content-container ">
				<BolsaHomeNav />
			</div>
			<Footer />
		</div>
	);
};

export default Index;

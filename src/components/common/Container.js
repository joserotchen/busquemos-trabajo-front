import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";

const Container = (props) => {
	return (
		<div className="container">
			<Head>
				<title>Busquemos empleo</title>
				{/* GOOGLE FONTS */}
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
				<link
					href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700&display=swap"
					rel="stylesheet"
				></link>
			</Head>
			<Header />
			<div className="container">{props.children}</div>
			<Footer />
		</div>
	);
};

export default Container;

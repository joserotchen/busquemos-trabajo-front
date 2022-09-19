import Container from "../components/common/Container";
import Image from "next/image";
import aboutImg from "../../public/img/about-img.png";

const quienesSomos = () => {
	return (
		<Container>
			<div className="content-container ">
				<section className="quienes-somos">
					<h1>¿Quiénes Somos?</h1>
					<div className="quienes-somos-container">
						<div>
							<Image src={aboutImg} />
						</div>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
							mattis, dui quis rhoncus fermentum, mauris erat sodales justo,
							aliquet venenatis leo ex a massa. Sed interdum aliquam metus in
							tristique. Suspendisse massa nunc, mollis ut convallis a, blandit
							at nisi. In gravida dictum justo eu ultricies. Etiam orci nisi,
							condimentum sit amet velit non
						</p>
					</div>
				</section>
			</div>
		</Container>
	);
};

export default quienesSomos;

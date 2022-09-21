import Image from "next/image";
import imageInfoHome from "../../../public/img/image-info-home.png";

const InfoHome = () => {
	return (
		<section className="info-home">
			<div className="info-home-img">
				<Image src={imageInfoHome} />
			</div>
			<div className="info-home-info">
				<h2>Te ayudamos a encontrar un empleo mejor</h2>
				<h5>
					Haz que tu currículum sea visible para miles de empresas en nuestra
					bolsa de trabajo
				</h5>
				<ul>
					<li>
						<span>Registro gratuito. </span> Encuentra tu próximo trabajo hoy.
					</li>

					<li>
						<span>Ofertas cada día. </span> Empleos que se ajustan a tu perfil.
					</li>

					<li>
						<span>Alertas personalizadas. </span> Tú crea alertas de empleo y
						nosotros te avisaremos.
					</li>

					<li>
						<span>Completa tu perfil. </span> Muéstrate profesional y ganarás
						visibilidad.
					</li>
				</ul>
				<button>Crear cuenta nueva</button>
			</div>
		</section>
	);
};

export default InfoHome;

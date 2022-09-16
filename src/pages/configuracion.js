import Container from "../components/common/Container";
import NavCv from "../components/mi-cv/NavCv";
import ConfiguracionCuenta from "../components/configuracion/ConfiguracionCuenta";
import ConfiguracionNotificaciones from "../components/configuracion/ConfiguracionNotificaciones";
import ConfiguracionSeguridad from "../components/configuracion/ConfiguracionSeguridad";
import { useState } from "react";
import Image from "next/image";
import userImg from "../../public/img/user-img.png";
import bellImg from "../../public/img/bell-img.png";
import securityImg from "../../public/img/security-img.png";

const configuracion = () => {
	return (
		<Container>
			<div className="content-container ">
				<NavCv page={"configuracion"} />
				<section className="configuración">
					<h1>Configuración</h1>
					<div className="configuracion-container">
						<article className="configuracion-nav">
							<button>
								<Image src={userImg} /> Cuenta
							</button>
							<button>
								<Image src={bellImg} /> Notificaciones
							</button>
							<button>
								<Image src={securityImg} /> Seguridad
							</button>
						</article>
						{/* CONFIGURACION NAV */}
						{/* CONFIGURACION CUENTA */}
						{/* CONFIGURACION NOTIFICACIONES */}
						{/* CONFIGURACION SEGURIDAD */}
					</div>
				</section>
			</div>
		</Container>
	);
};

export default configuracion;

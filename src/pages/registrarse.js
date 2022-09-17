import Container from "../components/common/Container";
import Image from "next/image";
import imgSingup from "../../public/img/singup-img.webp";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";
import Head from "next/head";

const registrarse = () => {
	const inputPassword = useRef();
	const showPassword = (e) => {
		e.preventDefault();
		const type = inputPassword.current.getAttribute("type");

		if (type === "text") {
			inputPassword.current.setAttribute("type", "password");
		} else {
			inputPassword.current.setAttribute("type", "text");
		}
	};

	return (
		<section className="singup">
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
			<div className="singup-form">
				<h1>Crear una cuenta nueva</h1>
				<form>
					<div className="singup-inputs">
						<input type="text" placeholder="Nombre" />
						<input type="text" placeholder="Apellido" />
					</div>
					<input type="email" placeholder="Correo electrónico" />
					<div className="show-password">
						<input
							type="password"
							placeholder="Crear nueva contraseña"
							ref={inputPassword}
						/>
						<button onClick={showPassword}>
							<FontAwesomeIcon icon={faEyeSlash} />
						</button>
					</div>
					<input type="submit" value="Registrar" />
				</form>
				<span>
					¿Tienes una cuenta?{" "}
					<Link href="/iniciar-sesion">
						<a>Iniciar sesión</a>
					</Link>
				</span>
			</div>
			<div className="singup-img">
				<Image src={imgSingup} />
			</div>
		</section>
	);
};

export default registrarse;

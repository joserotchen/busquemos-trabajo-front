import Container from "../components/common/Container";
import Image from "next/image";
import imgLogin from "../../public/img/img-login.webp";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";
import Head from "next/head";

const iniciarSesion = () => {
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
		<section className="login">
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
			<div className="login-form">
				<h1>Iniciar sesión</h1>
				<form>
					<input type="text" placeholder="Correo electrónico" />
					<div className="show-password">
						<input
							type="password"
							placeholder="Contraseña"
							ref={inputPassword}
						/>
						<button onClick={showPassword}>
							<FontAwesomeIcon icon={faEyeSlash} />
						</button>
					</div>
					<input type="submit" value="Iniciar" />
				</form>
				<span>
					¿No tienes una cuenta?
					<Link href="/registrarse">
						<a>Regístrate</a>
					</Link>
				</span>
			</div>
			<div className="login-image">
				<Image src={imgLogin} />
			</div>
		</section>
	);
};

export default iniciarSesion;

import Container from "../components/common/Container";
import Image from "next/image";
import imgLogin from "../../public/img/img-login.webp";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";

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
		<div className="container">
			<div className="content-container ">
				<section className="login">
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
								<a> Regístrate</a>
							</Link>
						</span>
					</div>
					<div className="login-image">
						<Image src={imgLogin} />
					</div>
				</section>
			</div>
		</div>
	);
};

export default iniciarSesion;

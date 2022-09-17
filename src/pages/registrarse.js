import Container from "../components/common/Container";
import Image from "next/image";
import imgSingup from "../../public/img/singup-img.webp";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";

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
		<div className="content-container ">
			<section className="singup">
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
		</div>
	);
};

export default registrarse;

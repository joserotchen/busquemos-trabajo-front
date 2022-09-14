import Container from "../components/common/Container";
import Image from "next/image";
import imgPassword from "../../public/img/show-password.webp";
import imgSingup from "../../public/img/singup-img.webp";
import Link from "next/link";

const registrarse = () => {
	return (
		<Container>
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
								<input type="password" placeholder="Crear nueva contraseña" />
								<button>
									<Image src={imgPassword} />
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
		</Container>
	);
};

export default registrarse;

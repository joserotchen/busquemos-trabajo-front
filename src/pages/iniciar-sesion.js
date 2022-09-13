import Container from "../components/common/Container";
import Image from "next/image";
import imgLogin from "../../public/img/img-login.webp";
import imgPassword from "../../public/img/show-password.webp";

const iniciarSesion = () => {
	return (
		<Container>
			<div className="content-container ">
				<section className="login">
					<div className="login-form">
						<h1>Iniciar sesión</h1>
						<form>
							<input type="text" placeholder="Correo electrónico" />
							<div className="show-password">
								<input type="password" placeholder="Contraseña" />
								<button>
									<Image src={imgPassword} />
								</button>
							</div>
							<input type="submit" value="Iniciar" />
						</form>
						<span>
							¿No tienes una cuenta? <a href="#!">Regístrate</a>{" "}
						</span>
					</div>
					<div className="login-image">
						<Image src={imgLogin} />
					</div>
				</section>
			</div>
		</Container>
	);
};

export default iniciarSesion;

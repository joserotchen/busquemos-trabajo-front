import React from "react";
import Link from "next/link";

const Header = () => {
	return (
		<header>
			<div className="content-container">
				<div className="header-container">
					<div class="logo">
						<Link href="/">
							<a style={{ textDecoration: "none" }}>
								<h2>empleo</h2>
							</a>
						</Link>
					</div>
					<nav>
						<a href="#!">Encuentra trabajo</a>
						<Link href="/iniciar-sesion">
							<a>Ingresa tu cuenta</a>
						</Link>
						<Link href="/registrarse">
							<button>Regístrate</button>
						</Link>
					</nav>
				</div>
			</div>
		</header>
	);
};

export default Header;

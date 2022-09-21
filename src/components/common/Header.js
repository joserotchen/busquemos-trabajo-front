import React from "react";
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
	const [scroll, setScroll] = useState(false);

	useEffect(() => {
		if (typeof window !== "undefined") {
			window.addEventListener("scroll", () =>
				setScroll(window.pageYOffset > 100),
			);
		}
	}, []);

	return (
		<header className={scroll ? "header-scroll" : ""}>
			<div className="content-container">
				<div className="header-container">
					<div className="logo">
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

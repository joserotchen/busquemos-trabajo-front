import Image from "next/image";
import searchIcon from "../../../public/img/search-2.png";
import { useState } from "react";

const PostulantesForm = () => {
	const [drop, setDrop] = useState("Recientes");

	const changeDrop = (e) => {
		const value = e.target.textContent;
		setDrop(value);
	};
	return (
		<form className="postulantes-form">
			<div>
				<Image src={searchIcon} />
				<input placeholder="Buscar por nombre" type="text" />
			</div>
			<div className="separator"></div>
			<span class="dropdown">
				<button>Ubicaciones </button>
				<label>
					<input type="checkbox" />
					<ul>
						<li onClick={changeDrop}>Opción 1</li>
						<li onClick={changeDrop}>Opción 2</li>
						<li onClick={changeDrop}>Opción 3</li>
					</ul>
				</label>
			</span>
			<div className="separator"></div>
			<span class="dropdown">
				<button>Área o Rubro </button>
				<label>
					<input type="checkbox" />
					<ul>
						<li onClick={changeDrop}>Opción 1</li>
						<li onClick={changeDrop}>Opción 2</li>
						<li onClick={changeDrop}>Opción 3</li>
					</ul>
				</label>
			</span>
			<button>Encontrar candidatos</button>
		</form>
	);
};

export default PostulantesForm;

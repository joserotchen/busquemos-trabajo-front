import Image from "next/image";
import searchIcon from "../../../public/img/search-2.png";

const PostulantesForm = () => {
	return (
		<form className="postulantes-form">
			<div>
				<Image src={searchIcon} />
				<input placeholder="Buscar por nombre" type="text" />
			</div>
			<div className="separator"></div>
			<select>
				<option>Ubicaciones</option>
			</select>
			<div className="separator"></div>
			<select>
				<option>Área o Rubro</option>
			</select>
			<button>Encontrar candidatos</button>
		</form>
	);
};

export default PostulantesForm;

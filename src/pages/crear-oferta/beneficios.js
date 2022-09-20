import Container from "../../components/common/Container";
import CrearOfertaNav from "../../components/crear-oferta/CrearOfertaNav";
import Image from "next/image";
import transporteImg from "../../../public/img/transporte.png";
import gymImg from "../../../public/img/gym.png";
import giftImg from "../../../public/img/gift.png";
import vacacionesImg from "../../../public/img/vacaciones.png";
import fiestasImg from "../../../public/img/fiestas.png";
import navidadImg from "../../../public/img/navidad.png";
import otrosImg from "../../../public/img/otros.png";
import Router from "next/router";

const beneficios = () => {
	const goNextPage = (e) => {
		e.preventDefault();
		Router.push("/crear-oferta/preguntas");
	};

	return (
		<Container>
			<div className="content-container">
				<section className="crear-oferta-beneficios">
					<h1>Crear nueva oferta</h1>
					<CrearOfertaNav page={"beneficios"} />
					<div className="crear-oferta-beneficios-container">
						<h2>Beneficios</h2>
						<form className="beneficios-form">
							<div className="item">
								<div className="beneficio">
									<Image src={transporteImg} />
									<span>Transporte</span>
								</div>
								<label className="label-special-input-big">
									<div class="button r" id="button-1">
										<input type="checkbox" class="checkbox" />
										<div class="knobs"></div>
										<div class="layer"></div>
									</div>
								</label>
							</div>

							<div className="item">
								<div className="beneficio">
									<Image src={gymImg} />
									<span>Transporte</span>
								</div>
								<label className="label-special-input-big">
									<div class="button r" id="button-1">
										<input type="checkbox" class="checkbox" />
										<div class="knobs"></div>
										<div class="layer"></div>
									</div>
								</label>
							</div>

							<div className="item">
								<div className="beneficio">
									<Image src={giftImg} />
									<span>Transporte</span>
								</div>
								<label className="label-special-input-big">
									<div class="button r" id="button-1">
										<input type="checkbox" class="checkbox" />
										<div class="knobs"></div>
										<div class="layer"></div>
									</div>
								</label>
							</div>

							<div className="item">
								<div className="beneficio">
									<Image src={vacacionesImg} />
									<span>Transporte</span>
								</div>
								<label className="label-special-input-big">
									<div class="button r" id="button-1">
										<input type="checkbox" class="checkbox" />
										<div class="knobs"></div>
										<div class="layer"></div>
									</div>
								</label>
							</div>

							<div className="item">
								<div className="beneficio">
									<Image src={fiestasImg} />
									<span>Transporte</span>
								</div>
								<label className="label-special-input-big">
									<div class="button r" id="button-1">
										<input type="checkbox" class="checkbox" />
										<div class="knobs"></div>
										<div class="layer"></div>
									</div>
								</label>
							</div>

							<div className="item">
								<div className="beneficio">
									<Image src={navidadImg} />
									<span>Transporte</span>
								</div>
								<label className="label-special-input-big">
									<div class="button r" id="button-1">
										<input type="checkbox" class="checkbox" />
										<div class="knobs"></div>
										<div class="layer"></div>
									</div>
								</label>
							</div>

							<div className="item">
								<div className="beneficio">
									<Image src={otrosImg} />
									<span>Transporte</span>
								</div>
								<label className="label-special-input-big">
									<div class="button r" id="button-1">
										<input type="checkbox" class="checkbox" />
										<div class="knobs"></div>
										<div class="layer"></div>
									</div>
								</label>
							</div>

							<div className="btns-form">
								<button className="cancelar">Cancelar</button>
								<button className="guardar" onClick={goNextPage}>
									Guardar y Continuar
								</button>
							</div>
						</form>
					</div>
				</section>
			</div>
		</Container>
	);
};

export default beneficios;

import Image from "next/image";
import imageType from "../../../public/img/6-layers.webp";
import imageLocation from "../../../public/img/2-layers.webp";
import imageExperience from "../../../public/img/3-layers.webp";
import imageDate from "../../../public/img/calendar.webp";

const Card = ({ type, title, location, experience, date, logo }) => {
	return (
		<article className="card">
			<div className="card-info">
				<h5>
					<Image width={15} height={15} src={imageType} /> {type}
				</h5>
				<h3>{title}</h3>
				<div className="more-info">
					<span>
						<Image width={15} height={15} src={imageLocation} /> {location}
					</span>
					<span>
						<Image width={15} height={15} src={imageExperience} /> {experience}{" "}
					</span>
					<span className="info-date">
						<Image width={15} height={15} src={imageDate} /> {date}
					</span>
				</div>
			</div>
			<div className="card-action">
				<button>Ver oferta</button>
				<div>
					{" "}
					<Image src={logo} />
				</div>
			</div>
		</article>
	);
};

export default Card;

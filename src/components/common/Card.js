import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faGauge } from "@fortawesome/free-solid-svg-icons";
import { faLaptop } from "@fortawesome/free-solid-svg-icons";

const Card = ({ type, title, location, experience, date, logo }) => {
	return (
		<article className="card">
			<div className="card-info">
				<h5>
					<FontAwesomeIcon icon={faLaptop} /> {type}
				</h5>
				<h3>{title}</h3>
				<div className="more-info">
					<span>
						<FontAwesomeIcon icon={faLocationDot} /> {location}
					</span>
					<span>
						<FontAwesomeIcon icon={faGauge} /> {experience}{" "}
					</span>
					<span className="info-date">
						<FontAwesomeIcon icon={faCalendarDays} /> {date}
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

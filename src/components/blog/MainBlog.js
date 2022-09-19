import Image from "next/image";
import mainBlogImg from "../../../public/img/main-blog.png";

const MainBlog = () => {
	return (
		<section className="main-blog">
			<h1>Blog</h1>
			<h2>
				Tendencias y opinión sobre reclutamiento, empleabilidad y trabajo
				remoto.
			</h2>
			<a href="#!">
				<article className="blog-big-card">
					<div className="blog-big-card-img">
						<Image src={mainBlogImg} />
					</div>
					<div className="blog-big-card-text">
						<h3>
							Cómo el talento tech latino puede postular a empleos remotos de
							forma fácil, rápida y segura.
						</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
							mattis, dui quis rhoncus fermentum, mauris erat sodales justo,
							aliquet venenatis leo ex a massa.
						</p>
					</div>
				</article>
			</a>
		</section>
	);
};

export default MainBlog;

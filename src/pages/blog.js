import Container from "../components/common/Container";
import MainBlog from "../components/blog/MainBlog";
import CardsBlog from "../components/blog/CardsBlog";

const blog = () => {
	return (
		<Container>
			<div className="content-container ">
				<MainBlog />
				<CardsBlog />
			</div>
		</Container>
	);
};

export default blog;

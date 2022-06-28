import Head from "next/head";
import styles from "../../styles/Slug.module.css";

const fs = require("fs");

export default function ArticleComponent(props) {
	const rawArticle = props.article;
	return (
		<div>
			<Head>
				<title>Article: </title>
				<meta name="description" content="Article" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<h1>The Article</h1>
				<div>{rawArticle}</div>
			</main>
		</div>
	);
}
export async function getStaticProps(context) {
	const request = await fetch(
		"http://127.0.0.1:3000/api/article/" + context.params.slug
	);

	const response = await request.json();
	return {
		props: {
			article: response.content,
		},
	};
}

export async function getStaticPaths() {
	const raw_files = await fs.promises.readdir("articles");
	const paths = raw_files.map((v) => {
		return {
			params: {
				slug: v.split(".")[0],
			},
		};
	});
	return {
		paths: paths,
		fallback: false,
	};
}

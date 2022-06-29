import Head from "next/head";
import styles from "../../styles/Slug.module.css";
import ReactMarkdown from "react-markdown";
import get_file from "../../helpers/get_file";

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

			<main id={styles.main}>
				<h1>The Article</h1>
				<br></br>
				<ReactMarkdown>{rawArticle}</ReactMarkdown>
			</main>
		</div>
	);
}
export async function getStaticProps(context) {
	const response = await get_file(context.params.slug);

	return {
		props: {
			article: response,
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

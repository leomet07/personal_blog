import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
const fs = require("fs");
export default function Home(props) {
	const available_articles = props.articles;
	console.log("available articles: ", available_articles);
	return (
		<div className={styles.container}>
			<Head>
				<title>The Blog</title>
				<meta name="description" content="The Blog" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<h1>The Blog</h1>
				{available_articles.map((v) => (
					<h2 className={styles.blog_link} key={v}>
						<Link href={"/article/" + v}>{v}</Link>
					</h2>
				))}
			</main>
		</div>
	);
}
export async function getStaticProps(context) {
	const raw_articles = await fs.promises.readdir("articles");
	const articles = raw_articles.map((v) => v.split(".")[0]);
	return {
		props: {
			articles: articles,
		},
	};
}

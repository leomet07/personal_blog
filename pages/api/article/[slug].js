const fs = require("fs");
fs.promises.readFile;
export default async function handler(req, res) {
	const { slug } = req.query;
	let path = `articles/${slug}.md`;
	const rawContent = (
		await fs.promises.readFile(path, {
			encoding: "utf-8",
		})
	).toString();
	console.log(rawContent);
	res.json({ content: String(rawContent), message: `Article: ${slug}` });
}

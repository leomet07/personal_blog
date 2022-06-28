const fs = require("fs");
export default async function get_file(slug) {
	let path = `articles/${slug}.md`;
	const rawContent = await fs.promises.readFile(path, {
		encoding: "utf-8",
	});

	const content = rawContent.toString();

	return content;
}

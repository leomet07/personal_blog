import get_file from "../../../helpers/get_file";
export default async function handler(req, res) {
	const { slug } = req.query;
	const content = await get_file(slug);
	res.json({ content: content, message: `Article: ${slug}` });
}

export default async function handler(req, res) {
  if (req.method === "GET") {
    return res.status(200).json({ msg: "Hello! from vercel api route" });
  }
}

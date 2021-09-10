import { apiKey, apiBase } from "../../lib/tmdb";

export default async function handler(req, res) {
    const result = await fetch(`${apiBase}/search/movie?api_key=${apiKey}&language=pt-BR&query=${req.query.q}`);
    const json = await result.json();

    res.status(200).json({
        list: json.results
    });
}

// site.com/api/search?query=titanic
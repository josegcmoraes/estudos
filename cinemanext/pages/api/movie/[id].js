import { apiKey, apiBase } from "../../../lib/tmdb";

export default async function handler(req, res) {
    // console.log('params', req.params);
    // console.log('query', req.query); // id está aqui

    const result = await fetch(`${apiBase}/movie/${req.query.id}?api_key=${apiKey}&language=pt-BR`);
    const json = await result.json();

    res.status(200).json({
        info: json
    })
}
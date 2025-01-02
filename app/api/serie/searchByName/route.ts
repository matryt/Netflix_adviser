import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/app/(common)/db";
import { withApiAuthRequired } from "@auth0/nextjs-auth0";
import {NextResponse} from "next/server";

type TMDBSerie = {
    backdrop_path: string,
    id: number,
    name: string,
    original_name: string,
    overview: string,
    poster_path: string,
    media_type: string,
    adult: boolean,
    original_language: string,
    genre_ids: Array<number>,
    popularity: number,
    first_air_date: string,
    vote_average: number,
    vote_count: number,
    origin_country: Array<string>
}

async function search(req: NextApiRequest) {
    const params = new URLSearchParams(req.url?.split('?')[1]);

    console.log(params);

    if (!params.get('query')) {
        return NextResponse.json({ error: 'Missing query parameter' }, { status: 400 });
    }

    const query = params.get('query') || '';

    // Search in the database
    const series = await prisma.serie.findMany({
        where: {
            nom: {
                contains: query,
                mode: 'insensitive',
            },
        },
    });

    if (series.length > 0) {
        return NextResponse.json(series);
    }

    // Fallback to TMDB
    const tmdbResponse = await fetch(`https://api.themoviedb.org/3/search/tv?query=${query}&include_adult=false&language=fr-FR&page=1`, {
        method: 'GET',
        headers: {
            accept: "application/json",
            Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
        }
    });
    const tmdbData = await tmdbResponse.json();

    const tmdbSeries = tmdbData.results.map((s: TMDBSerie) => ({
        id: s.id,
        title: s.name,
        poster: s.poster_path ? `https://image.tmdb.org/t/p/w500${s.poster_path}` : null,
    }));

    return NextResponse.json(tmdbSeries);
}

export const GET = withApiAuthRequired(search);
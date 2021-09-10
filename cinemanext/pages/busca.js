
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import styles from "../styles/Home.module.css"

export default function Busca() {
    const [searchText, setSearchText] = useState('');
    const [movieList, setMovieList] = useState([]);

    const handleSearch = async () => {
        if (searchText !== '') {
            const result = await fetch(`http://localhost:3000/api/search?q=${searchText}`);
            const json = await result.json();

            setMovieList(json.list);
        }
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Site - Busca</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>Busca</h1>

                <input
                    type="text"
                    value={searchText}
                    onChange={(event) => setSearchText(event.target.value)}
                />

                <button
                    type="submit"
                    onClick={handleSearch}
                >
                    Buscar
                </button>


                <hr />

                <ul>
                    {movieList.map(item => (
                        <li key={item.title}>
                            <Link href={`/movie/${item.id}`}>
                                <a>
                                    <img src={`https://image.tmdb.org/t/p/original${item.poster_path}`} alt={`image ${item.title}`} width="150" />
                                    <br />

                                    {item.title}
                                </a>
                            </Link>
                        </li>
                    ))
                    }
                </ul>
            </main>
        </div>
    )
}
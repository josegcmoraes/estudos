import Head from 'next/head'
import Link from 'next/link';
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home({ author }) {

    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Sobre o sistema <a href="https://nextjs.org">Next.js!</a>
                </h1>
                O sistema foi feito em live para demonstrar os primeiros passos com framework Next.js

                <hr />

                Autor: {author}


            </main>

            <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{' '}
                    <span className={styles.logo}>
                        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                    </span>
                </a>
            </footer>
        </div>
    )
}

export async function getStaticProps() {
    // const res = await fetch('http://localhost:3000/api/hello');

    return (
        {
            props: {
                // name: json.name
                author: 'José'
            }
        }
    );
}
import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from "next/head";

const NotFound = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push("/");
        }, 3000);
    })
    return (
        <>
            <Head>
                <title>Users list | 404</title>
                <meta name="keywords" content="404" />
            </Head>
            <div>
                <h1>All users</h1>
            </div>
            <div className="not-found">
                <h1>Oouuups</h1>
                <h1>La page demandée n'est pas accessible...</h1>
                <p>Revenir à la page d'<Link href="/"><a>accueil</a></Link></p>
            </div>
        </>
    );
}

export default NotFound;
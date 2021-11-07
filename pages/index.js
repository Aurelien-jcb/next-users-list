import Head from 'next/head'
import Footer from '../components/Footer'
import Navbar from '../components/NavBar'
import styles from '../styles/Home.module.css'
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Users list | Home</title>
        <meta name="keywords" content="users" />
      </Head>

      <div>
        <h1 className={styles.title}>home page</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <Link href="/users">
          <a className={styles.btn}>Voir la liste des utilisateur</a>
        </Link>
      </div>
    </>
  )
}

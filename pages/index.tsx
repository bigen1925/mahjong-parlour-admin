import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home(): JSX.Element {
  return (
    <div className={styles.container}>
      <Head>
        <title>雀荘管理システム</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>header</header>
      <main className={styles.main}>
        <div className={styles.title}>雀荘管理アプリです</div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}

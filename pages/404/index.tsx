import Head from "next/head";
import Link from "next/link";
import styles from "./404.module.scss";

export default function NoMatch() {
  return (
    <div className={styles.root}>
      <Head>
        <title>404</title>
      </Head>
      <h1>404 - Page not found</h1>
      <p>
        We couldn't find your page, please <Link href="/">go home</Link> and try
        again
      </p>
    </div>
  );
}

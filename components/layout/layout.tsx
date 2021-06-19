import Head from "next/head";
import styles from "./layout.module.scss";
import Link from "next/link";
import Subheader from "../subHeader/subHeader";
import Header from "../header/header";

type Props = {
  home?: boolean;
  children: any;
};

export const siteTitle = "Newsroom";

export default function Layout({ children, home }: Props) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header></Header>
      <Subheader home={home} />
      <main>{children}</main>
    </div>
  );
}

import Link from "next/link";
import styles from "./subHeader.module.scss";
import Tab from "../tab/tab";

type Props = {
  home?: boolean;
  children?: any;
};

export default function SubHeader({ children, home }: Props) {
  return (
    <div className={styles.root}>
      {home ? (
        <div className={styles.tabContainer}>
          <Tab active onClick={() => alert("change tabs")}>
            <p>Latest</p>
          </Tab>
          <Tab active={false} onClick={() => alert("change tabs")}>
            <p>Topics</p>
          </Tab>
          <Tab active={false} onClick={() => alert("change tabs")}>
            <p>Best Rated</p>
          </Tab>
        </div>
      ) : (
        <Link href="/">
          <a>Back</a>
        </Link>
      )}
      {children}
    </div>
  );
}

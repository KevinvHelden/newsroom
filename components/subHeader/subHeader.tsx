import Link from "next/link";
import styles from "./subHeader.module.scss";
import Tab from "../tab/tab";
import Icon from "../icon/icon";

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
            <Icon type="calendar" />
            <p>Latest</p>
          </Tab>
          <Tab active={false} onClick={() => alert("change tabs")}>
            <Icon type="color-swatch" />
            <p>Topics</p>
          </Tab>
          <Tab active={false} onClick={() => alert("change tabs")}>
            <Icon type="award" />
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

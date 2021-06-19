import styles from "./header.module.scss";
import Tab from "../tab/tab";

type Props = {
  children?: any;
};

export default function Header({ children }: Props) {
  return (
    <div className={styles.root}>
      <div className={styles.inner}>
        <div className={styles.tabContainer}>
          <Tab active onClick={() => alert("change tab")}>
            <p>Discover</p>
          </Tab>
          <Tab active={false} onClick={() => alert("change tab")}>
            <p>Feed</p>
          </Tab>
        </div>
      </div>
    </div>
  );
}

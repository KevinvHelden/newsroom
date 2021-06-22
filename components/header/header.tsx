import styles from "./header.module.scss";
import Tab from "../tab/tab";
import User from "../user/user";
import Button from "../button/button";
import Searchbar from "../searchbar/searchbar";
import Icon from "../icon/icon";

type Props = {
  children?: any;
};

export default function Header({ children }: Props) {
  return (
    <div className={styles.root}>
      <div className={styles.inner}>
        <img src="/images/logo.svg" alt="logo" />
        <div className={styles.tabContainer}>
          <Tab active onClick={() => alert("change tab")}>
            <Icon type="compass" />
            <p>Discover</p>
          </Tab>
          <Tab active={false} onClick={() => alert("change tab")}>
            <Icon type="layout" />
            <p>Feed</p>
          </Tab>
        </div>
        <div className={styles.right}>
          <Searchbar />
          <Button small variant="secondary">
            <Icon type="plus" />
            Write your article
          </Button>
          <User user={{ username: "Jane Doe", profileId: "2" }} hasPicture />
        </div>
      </div>
    </div>
  );
}

import styles from "./searchbar.module.scss";
import Icon from "../icon/icon";

export default function Searchbar() {
  return (
    <div className={styles.root}>
      <input
        className={styles.input}
        placeholder="Ex. article, @user, #topic"
      />
      <Icon type="search" />
    </div>
  );
}

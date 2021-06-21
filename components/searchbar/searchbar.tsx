import styles from "./searchbar.module.scss";

export default function Searchbar() {
  return (
    <input className={styles.root} placeholder="Ex. article, @user, #topic" />
  );
}

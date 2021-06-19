import styles from "./loader.module.scss";

export default function Loader() {
  return (
    <div className={styles.root}>
      <div className={styles.inner} />
    </div>
  );
}

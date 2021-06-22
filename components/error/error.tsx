import styles from "./error.module.scss";
import Link from "next/link";

type Props = {
  faultyProcess: string;
};

export default function Error({ faultyProcess }: Props) {
  return (
    <div className={styles.root}>
      <h4>Something went wrong while {faultyProcess}</h4>
      <p>
        please <Link href="/">click here</Link> to go home or try reloading the
        page.
      </p>
    </div>
  );
}

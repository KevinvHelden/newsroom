import styles from "./tab.module.scss";
import classnames from "classnames";

type Props = {
  onClick: () => void;
  children: any;
  active: boolean;
};

export default function Tab({ onClick, children, active }: Props) {
  return (
    <button
      onClick={onClick}
      className={classnames([styles.root, { [styles.active]: active }])}
    >
      {children}
    </button>
  );
}

import styles from "./button.module.scss";
import classnames from "classnames";

type Props = {
  children: any;
  variant?: "primary" | "secondary" | "ghost" | "success" | "warning" | "error";
  onClick?: () => void;
  small?: boolean;
};

export default function Button({
  children,
  variant = "primary",
  onClick,
  small = false,
}: Props) {
  return (
    <button
      onClick={onClick}
      className={classnames([
        styles.root,
        styles[variant],
        { [styles.small]: small },
      ])}
    >
      {children}
    </button>
  );
}

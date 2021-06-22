import styles from "./icon.module.scss";
import classnames from "classnames";

type Props = {
  colour?: "red" | "white" | "black50" | "black70" | "black80";
  type: Icon;
};

export default function Icon({ type, colour = "white" }: Props) {
  return (
    <img
      className={classnames([styles.root, styles[colour]])}
      src={`images/icons/${type}.svg`}
      alt={type}
    />
  );
}

type Icon =
  | "arrow-right"
  | "plus"
  | "chevron-down"
  | "chevron-up"
  | "chevron-left"
  | "chevron-right"
  | "search"
  | "calendar"
  | "color-swatch"
  | "award"
  | "compass"
  | "layout"
  | "user";

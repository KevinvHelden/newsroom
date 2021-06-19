//Formatting options: https://date-fns.org/v2.16.1/docs/format
import { parseISO, format } from "date-fns";

type Props = {
  dateString: string;
};

export default function Date({ dateString }: Props) {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, "LLLL do, yyyy")}</time>;
}

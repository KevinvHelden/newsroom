import Loader from "../loader/loader";
import Error from "../error/error";

import type { SWRResponse } from "SWR";
import { useMemo } from "react";

type Props = {
  data: (SWRResponse<any, Error> | undefined)[];
  children: any;
};

export default function DataLoader({ data, children }: Props) {
  const hasError = useMemo(() => {
    return data.some((d: any) => d && d.error);
  }, [data]);

  const isFetching = useMemo(() => {
    return data.some((d: any) => d && !d.data);
  }, [data]);

  if (hasError) {
    return <Error faultyProcess="fetching your data" />;
  } else if (isFetching) {
    return <Loader />;
  } else {
    return <>{children}</>;
  }
}

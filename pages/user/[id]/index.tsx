import Layout from "../../../components/layout/layout";
import Loader from "../../../components/loader/loader";
import { useRouter } from "next/router";
import useSWR from "swr";
import { fetcher } from "../../../lib/helper";

export default function Article() {
  const { query } = useRouter();
  const { data, error } = useSWR(`http://localhost:3000/api/user`, fetcher);

  if (error) return <div>{error.message}</div>;
  if (!data) return <Loader />;

  const user = data.users.find((user: any) => user.id === query.id);

  if (user) {
    return (
      <Layout>
        <h1>{user.name}</h1>
      </Layout>
    );
  } else {
    return <h1>Couldn't find this author</h1>;
  }
}

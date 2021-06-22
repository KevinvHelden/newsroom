// Components
import Layout from "../../../components/layout/layout";
import DataLoader from "../../../components/dataLoader/dataLoader";

// Hooks & Helpers
import { useRouter } from "next/router";
import useSWR from "SWR";
import { fetcher } from "../../../lib/helper";

export default function Article() {
  const { query } = useRouter();
  const users = useSWR("user", fetcher);
  const selectedUser = users.data?.users.find(
    (user: any) => user.id === query.id
  );

  return (
    <DataLoader data={[users]}>
      {selectedUser && (
        <Layout>
          <h1>{selectedUser.name}</h1>
        </Layout>
      )}
    </DataLoader>
  );
}

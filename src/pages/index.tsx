import GitHub from "next-auth/providers/github";
import { getSession, signIn, useSession } from "next-auth/react";
import Link from "next/link";
import Layout from "../components/Layout";
import trpc from "../utils/trpc";
const IndexPage = () => {
  //const { data, isLoading } = trpc.useQuery(["hello", { text: "heloo" }]);
  const { data } = useSession();

  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>{JSON.stringify(data)}</h1>
      <p>
        <button onClick={() => signIn()}>sign in</button>
      </p>
    </Layout>
  );
};

export default IndexPage;

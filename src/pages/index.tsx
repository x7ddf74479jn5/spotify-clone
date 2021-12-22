import type { CustomNextPage, GetServerSideProps } from "next";
import type { Session } from "next-auth";
import { getSession } from "next-auth/react";
import { Home } from "src/components/page/index/index";
import { Layout } from "src/components/ui/layout";

const IndexPage: CustomNextPage = () => {
  return <Home />;
};

IndexPage.getLayout = Layout;

type ServerSideProps = {
  session: Session | null;
};

export const getServerSideProps: GetServerSideProps<ServerSideProps> = async (context) => {
  const session = await getSession(context);

  return {
    props: { session },
  };
};

export default IndexPage;

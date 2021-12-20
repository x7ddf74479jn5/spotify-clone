import type { CustomNextPage, GetServerSideProps, InferGetServerSidePropsType } from "next";
import { getProviders } from "next-auth/react";
import { Login } from "src/components/page/Login";
import type { TNextAuthProviders } from "src/types/auth";

type PageProps = InferGetServerSidePropsType<typeof getServerSideProps>;

const LoginPage: CustomNextPage<PageProps> = ({ providers }) => {
  return <Login providers={providers} />;
};

export default LoginPage;

type ServerSideProps = {
  providers: TNextAuthProviders;
};

export const getServerSideProps: GetServerSideProps<ServerSideProps> = async () => {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
};

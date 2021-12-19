import type { CustomNextPage } from "next";
import { About } from "src/components/page/about";
import { Layout } from "src/components/ui/layout";

const AboutPage: CustomNextPage = () => {
  return <About />;
};

AboutPage.getLayout = Layout;

export default AboutPage;

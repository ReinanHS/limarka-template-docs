import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import Home from '../components/Home';

export default function HomePage({ homePageBlogMetadata, recentPosts }) {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout>
      <Home />
    </Layout>
  );
}

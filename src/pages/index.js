import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import HomepageFeatures from "../components/Homepage/Features";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import Link from "@docusaurus/Link";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <section className="relative overflow-hidden bg-gray-100 dark:bg-violet-900 pt-[120px] md:pt-[130px] lg:pt-[160px]">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap items-center -mx-4">
          <div className="w-full px-4">
            <div
              className="hero-content wow fadeInUp mx-auto max-w-[780px] text-center"
              data-wow-delay=".2s"
            >
              <h1 className="mb-6 text-3xl font-bold leading-snug dark:text-white sm:text-4xl sm:leading-snug lg:text-5xl lg:leading-[1.2]">
                {siteConfig.title}
              </h1>
              <p className="mx-auto mb-9 max-w-[600px] text-base font-medium dark:text-white sm:text-lg sm:leading-[1.44]">
                {siteConfig.tagline}
              </p>
              <ul className="flex flex-wrap items-center justify-center gap-5 mb-10 list-none">
                <li>
                  <Link
                    to="docs/"
                    className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                  >
                    <FontAwesomeIcon
                      icon={faGraduationCap}
                      className="fill-current px-2"
                    />
                    Saiba mais
                  </Link>
                </li>
                <li>
                  <a
                    href="https://github.com/ReinanHS/limarka-template-tcc"
                    target="_blank"
                    className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                  >
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="fill-current px-2"
                    />
                    Star on Github
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative mx-auto mt-16 mb-4 max-w-[845px]">
            <div className="bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500 p-[2px] rounded-xl shadow-lg">
              <div className="relative bg-[#0D1117] rounded-xl p-4">
                <img
                  src="https://gitlab.com/reinanhs/repo-slide-presentation/-/raw/main/imagens/tcc/exemplo-de-utilizacao-pela-web.png?ref_type=heads"
                  alt="hero"
                  className="rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home({ homePageBlogMetadata, recentPosts }) {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}

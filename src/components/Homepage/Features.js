import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faCodeBranch,
  faCogs,
  faLayerGroup,
  faPuzzlePiece,
} from "@fortawesome/free-solid-svg-icons";
import Link from "@docusaurus/Link";

export default function FeaturesSection() {
  return (
    <section className="pb-8 pt-20 dark:bg-dark lg:pb-[70px] lg:pt-[120px]">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[485px] text-center lg:mb-[70px]">
              <span className="block mb-2 text-lg font-semibold text-primary">
                Funcionalidades
              </span>
              <h2 className="mb-3 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]">
                Principais recursos do VixeText
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
                O VixeText oferece um conjunto de ferramentas para publicação
                acadêmica em Markdown, com CI/CD automatizado e fluxo de trabalho
                colaborativo, simplificando a escrita e garantindo resultados
                profissionais.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap -mx-4">
          {/* 1. Funcionalidade */}
          <div className="w-full px-4 md:w-1/2 lg:w-1/4">
            <div className="mb-12 wow fadeInUp group" data-wow-delay=".1s">
              <div className="relative z-10 mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-[14px] bg-primary dark:bg-violet-900">
                <span className="absolute left-0 top-0 -z-1 mb-8 flex h-[70px] w-[70px] 
                  rotate-[25deg] items-center justify-center rounded-[14px] 
                  bg-primary/20 dark:bg-violet-900/20 duration-300 group-hover:rotate-45"
                />
                <FontAwesomeIcon
                  icon={faCodeBranch}
                  className="text-white text-2xl"
                />
              </div>
              <h4 className="mb-3 text-xl font-bold text-dark dark:text-white">
                Código Aberto e Gratuito
              </h4>
              <p className="mb-8 text-body-color dark:text-dark-6 lg:mb-9">
                O VixeText é totalmente gratuito e de código aberto, permitindo que
                qualquer pessoa utilize e contribua para seu desenvolvimento.
              </p>
              <Link
                to="docs/"
                className="text-base font-medium text-dark hover:text-primary 
                  dark:text-white dark:hover:text-primary"
              >
                Saiba Mais
              </Link>
            </div>
          </div>

          {/* 2. Funcionalidade */}
          <div className="w-full px-4 md:w-1/2 lg:w-1/4">
            <div className="mb-12 wow fadeInUp group" data-wow-delay=".15s">
              <div className="relative z-10 mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-[14px] bg-primary dark:bg-violet-900">
                <span className="absolute left-0 top-0 -z-1 mb-8 flex h-[70px] w-[70px] 
                  rotate-[25deg] items-center justify-center rounded-[14px] 
                  bg-primary/20 dark:bg-violet-900/20 duration-300 group-hover:rotate-45"
                />
                <FontAwesomeIcon
                  icon={faLayerGroup}
                  className="text-white text-2xl"
                />
              </div>
              <h4 className="mb-3 text-xl font-bold text-dark dark:text-white">
                Modelos Personalizáveis
              </h4>
              <p className="mb-8 text-body-color dark:text-dark-6 lg:mb-9">
                Crie, edite e padronize seus trabalhos acadêmicos com modelos
                flexíveis e personalizáveis para atender diferentes normas e
                formatos.
              </p>
              <Link
                to="category/tipos-de-trabalhos"
                className="text-base font-medium text-dark hover:text-primary 
                  dark:text-white dark:hover:text-primary"
              >
                Saiba Mais
              </Link>
            </div>
          </div>

          {/* 3. Funcionalidade */}
          <div className="w-full px-4 md:w-1/2 lg:w-1/4">
            <div className="mb-12 wow fadeInUp group" data-wow-delay=".2s">
              <div className="relative z-10 mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-[14px] bg-primary dark:bg-violet-900">
                <span className="absolute left-0 top-0 -z-1 mb-8 flex h-[70px] w-[70px] 
                  rotate-[25deg] items-center justify-center rounded-[14px] 
                  bg-primary/20 dark:bg-violet-900/20 duration-300 group-hover:rotate-45"
                />
                <FontAwesomeIcon
                  icon={faCogs}
                  className="text-white text-2xl"
                />
              </div>
              <h4 className="mb-3 text-xl font-bold text-dark dark:text-white">
                Automação de Publicação
              </h4>
              <p className="mb-8 text-body-color dark:text-dark-6 lg:mb-9">
                Gerencie pipelines de integração e entrega contínua para
                publicar e atualizar automaticamente seus trabalhos acadêmicos.
              </p>
              <Link
                to="docs/"
                className="text-base font-medium text-dark hover:text-primary 
                  dark:text-white dark:hover:text-primary"
              >
                Saiba Mais
              </Link>
            </div>
          </div>

          {/* 4. Funcionalidade */}
          <div className="w-full px-4 md:w-1/2 lg:w-1/4">
            <div className="mb-12 wow fadeInUp group" data-wow-delay=".25s">
              <div className="relative z-10 mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-[14px] bg-primary dark:bg-violet-900">
                <span className="absolute left-0 top-0 -z-1 mb-8 flex h-[70px] w-[70px] 
                  rotate-[25deg] items-center justify-center rounded-[14px] 
                  bg-primary/20 dark:bg-violet-900/20 duration-300 group-hover:rotate-45"
                />
                <FontAwesomeIcon
                  icon={faPuzzlePiece}
                  className="text-white text-2xl"
                />
              </div>
              <h4 className="mb-3 text-xl font-bold text-dark dark:text-white">
                Recursos Essenciais
              </h4>
              <p className="mb-8 text-body-color dark:text-dark-6 lg:mb-9">
                Desde citações e referências até colaboração em tempo real, o
                VixeText fornece tudo o que você precisa para produzir trabalhos
                acadêmicos.
              </p>
              <Link
                to="docs/"
                className="text-base font-medium text-dark hover:text-primary 
                  dark:text-white dark:hover:text-primary"
              >
                Saiba Mais
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

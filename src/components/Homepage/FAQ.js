import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle, faFileAlt, faUsers, faPlay, faFilePowerpoint, faPen } from "@fortawesome/free-solid-svg-icons";

export default function FAQSection() {
  return (
    <section className="relative z-20 overflow-hidden pb-8 pt-8 dark:bg-dark">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[520px] text-center">
              <span className="block mb-2 text-lg font-semibold text-primary">
                FAQ
              </span>
              <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
                Tem dúvidas? <br/>Confira nossas respostas
              </h2>
              <p className="mx-auto max-w-[485px] text-base text-body-color dark:text-dark-6">
                Encontre respostas para as principais perguntas sobre o VixeText, a ferramenta que simplifica a criação e a formatação de trabalhos acadêmicos.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4 lg:w-1/2">
            {/* FAQ Item 1 */}
            <div className="mb-12 flex lg:mb-[70px]">
              <div className="mr-4 flex h-[50px] w-full max-w-[50px] items-center justify-center rounded-xl bg-primary dark:bg-violet-900 text-white sm:mr-6 sm:h-[60px] sm:max-w-[60px]">
                <FontAwesomeIcon icon={faQuestionCircle} className="text-2xl" />
              </div>
              <div className="w-full">
                <h3 className="mb-6 text-xl font-semibold text-dark dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                    O VixeText tem suporte às normas da ABNT?
                </h3>
                <p className="text-base text-body-color dark:text-dark-6">
                    Sim! O VixeText oferece suporte às normas da ABNT por meio da integração com a ferramenta Limarka. Durante a conversão de arquivos Markdown para PDF, o VixeText utiliza o <a href="https://github.com/abntex/limarka">Limarka</a> para aplicar automaticamente as formatações exigidas pela ABNT.
                </p>
                <p className="text-base text-body-color dark:text-dark-6">
                    Essa formatação é baseada nas bibliotecas do <a href="https://github.com/abntex/abntex2">AbnTeX2</a>, um conjunto de especificações em LaTeX desenvolvido especificamente para atender às diretrizes da ABNT. Além disso, o VixeText mantém atualizados os componentes do Limarka, do AbnTeX2 e do template LaTeX utilizado, garantindo que você tenha sempre acesso às versões mais recentes e compatíveis com as normas vigentes.
                </p>
              </div>
            </div>
            {/* FAQ Item 2 */}
            <div className="mb-12 flex lg:mb-[70px]">
              <div className="mr-4 flex h-[50px] w-full max-w-[50px] items-center justify-center rounded-xl bg-primary dark:bg-violet-900 text-white sm:mr-6 sm:h-[60px] sm:max-w-[60px]">
                <FontAwesomeIcon icon={faFileAlt} className="text-2xl" />
              </div>
              <div className="w-full">
                <h3 className="mb-6 text-xl font-semibold text-dark dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                    O VixeText tem suporte às normas da SBC?
                </h3>
                <p className="text-base text-body-color dark:text-dark-6">
                    Sim! Se você precisa elaborar um trabalho acadêmico seguindo as normas de publicação da <a href="https://www.sbc.org.br/">Sociedade Brasileira de Computação (SBC)</a>, o VixeText pode te ajudar.
                </p>
                <p className="text-base text-body-color dark:text-dark-6">
                    Com o VixeText, você pode escrever seu documento em Markdown, e a ferramenta se encarrega de convertê-lo automaticamente para o modelo da SBC. Essa conversão utiliza as <a href="https://www.sbc.org.br/documentosinstitucionais/#publicacoes">especificações oficiais</a> disponibilizadas pela SBC, garantindo que seu trabalho esteja formatado corretamente de acordo com os padrões exigidos.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            {/* FAQ Item 3 */}
            <div className="mb-12 flex lg:mb-[70px]">
              <div className="mr-4 flex h-[50px] w-full max-w-[50px] items-center justify-center rounded-xl bg-primary dark:bg-violet-900 text-white sm:mr-6 sm:h-[60px] sm:max-w-[60px]">
                <FontAwesomeIcon icon={faFilePowerpoint} className="text-2xl" />
              </div>
              <div className="w-full">
                <h3 className="mb-6 text-xl font-semibold text-dark dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                    Posso criar uma apresentação com o VixeText?
                </h3>
                <p className="text-base text-body-color dark:text-dark-6">
                    Sim! O VixeText permite que você crie apresentações de forma simples e eficiente utilizando Markdown. 
                    Para facilitar o processo de criação de slides, o VixeText integra um template para o <a href="https://marp.app/">Marp</a>, uma ferramenta que converte arquivos Markdown em apresentações elegantes e bem formatadas.
                </p>
                <p className="text-base text-body-color dark:text-dark-6">
                    Com isso, você pode focar apenas no conteúdo, escrevendo suas informações diretamente no arquivo Markdown, enquanto a ferramenta se encarrega da estilização e formatação dos slides.
                    Além disso, o Marp oferece suporte a diversos recursos, como fórmulas matemáticas em LaTeX.
                </p>
              </div>
            </div>
            {/* FAQ Item 4 */}
            <div className="mb-12 flex lg:mb-[70px]">
              <div className="mr-4 flex h-[50px] w-full max-w-[50px] items-center justify-center rounded-xl bg-primary dark:bg-violet-900 text-white sm:mr-6 sm:h-[60px] sm:max-w-[60px]">
                <FontAwesomeIcon icon={faPen} className="text-2xl" />
              </div>
              <div className="w-full">
                <h3 className="mb-6 text-xl font-semibold text-dark dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                    O VixeText permite a personalização dos documentos?
                </h3>
                <p className="text-base text-body-color dark:text-dark-6">
                    Sim! O VixeText oferece opções de personalização para que você possa ajustar o layout dos seus documentos de acordo com suas necessidades.
                </p>
                <p className="text-base text-body-color dark:text-dark-6">
                    Por padrão, a ferramenta utiliza templates predefinidos que seguem normas acadêmicas e padrões de formatação, como ABNT e SBC. No entanto, se você precisar de um estilo específico, é possível personalizar alguns aspectos, como margens, fontes e espaçamentos, através da configuração do LaTeX.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Elementos decorativos */}
      <div>
        <span className="absolute left-4 top-4 -z-1">
          <svg width="48" height="134" viewBox="0 0 48 134" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="45.6673" cy="132" r="1.66667" transform="rotate(180 45.6673 132)" fill="#13C296"></circle>
            <circle cx="45.6673" cy="117.333" r="1.66667" transform="rotate(180 45.6673 117.333)" fill="#13C296"></circle>
            <circle cx="45.6673" cy="102.667" r="1.66667" transform="rotate(180 45.6673 102.667)" fill="#13C296"></circle>
            <circle cx="45.6673" cy="88.0001" r="1.66667" transform="rotate(180 45.6673 88.0001)" fill="#13C296"></circle>
            <circle cx="45.6673" cy="73.3335" r="1.66667" transform="rotate(180 45.6673 73.3335)" fill="#13C296"></circle>
            <circle cx="45.6673" cy="45.0001" r="1.66667" transform="rotate(180 45.6673 45.0001)" fill="#13C296"></circle>
            <circle cx="45.6673" cy="16.0001" r="1.66667" transform="rotate(180 45.6673 16.0001)" fill="#13C296"></circle>
            <circle cx="45.6673" cy="59.0001" r="1.66667" transform="rotate(180 45.6673 59.0001)" fill="#13C296"></circle>
            <circle cx="45.6673" cy="30.6668" r="1.66667" transform="rotate(180 45.6673 30.6668)" fill="#13C296"></circle>
            <circle cx="45.6673" cy="1.66683" r="1.66667" transform="rotate(180 45.6673 1.66683)" fill="#13C296"></circle>
            <circle cx="31.0013" cy="132" r="1.66667" transform="rotate(180 31.0013 132)" fill="#13C296"></circle>
            <circle cx="31.0013" cy="117.333" r="1.66667" transform="rotate(180 31.0013 117.333)" fill="#13C296"></circle>
            <circle cx="31.0013" cy="102.667" r="1.66667" transform="rotate(180 31.0013 102.667)" fill="#13C296"></circle>
            <circle cx="31.0013" cy="88.0001" r="1.66667" transform="rotate(180 31.0013 88.0001)" fill="#13C296"></circle>
            <circle cx="31.0013" cy="73.3335" r="1.66667" transform="rotate(180 31.0013 73.3335)" fill="#13C296"></circle>
            <circle cx="31.0013" cy="45.0001" r="1.66667" transform="rotate(180 31.0013 45.0001)" fill="#13C296"></circle>
            <circle cx="31.0013" cy="16.0001" r="1.66667" transform="rotate(180 31.0013 16.0001)" fill="#13C296"></circle>
            <circle cx="31.0013" cy="59.0001" r="1.66667" transform="rotate(180 31.0013 59.0001)" fill="#13C296"></circle>
            <circle cx="31.0013" cy="30.6668" r="1.66667" transform="rotate(180 31.0013 30.6668)" fill="#13C296"></circle>
            <circle cx="31.0013" cy="1.66683" r="1.66667" transform="rotate(180 31.0013 1.66683)" fill="#13C296"></circle>
            <circle cx="16.3333" cy="132" r="1.66667" transform="rotate(180 16.3333 132)" fill="#13C296"></circle>
            <circle cx="16.3333" cy="117.333" r="1.66667" transform="rotate(180 16.3333 117.333)" fill="#13C296"></circle>
            <circle cx="16.3333" cy="102.667" r="1.66667" transform="rotate(180 16.3333 102.667)" fill="#13C296"></circle>
            <circle cx="16.3333" cy="88.0001" r="1.66667" transform="rotate(180 16.3333 88.0001)" fill="#13C296"></circle>
            <circle cx="16.3333" cy="73.3335" r="1.66667" transform="rotate(180 16.3333 73.3335)" fill="#13C296"></circle>
            <circle cx="16.3333" cy="45.0001" r="1.66667" transform="rotate(180 16.3333 45.0001)" fill="#13C296"></circle>
            <circle cx="16.3333" cy="16.0001" r="1.66667" transform="rotate(180 16.3333 16.0001)" fill="#13C296"></circle>
            <circle cx="16.3333" cy="59.0001" r="1.66667" transform="rotate(180 16.3333 59.0001)" fill="#13C296"></circle>
            <circle cx="16.3333" cy="30.6668" r="1.66667" transform="rotate(180 16.3333 30.6668)" fill="#13C296"></circle>
            <circle cx="16.3333" cy="1.66683" r="1.66667" transform="rotate(180 16.3333 1.66683)" fill="#13C296"></circle>
            <circle cx="1.66732" cy="132" r="1.66667" transform="rotate(180 1.66732 132)" fill="#13C296"></circle>
            <circle cx="1.66732" cy="117.333" r="1.66667" transform="rotate(180 1.66732 117.333)" fill="#13C296"></circle>
            <circle cx="1.66732" cy="102.667" r="1.66667" transform="rotate(180 1.66732 102.667)" fill="#13C296"></circle>
            <circle cx="1.66732" cy="88.0001" r="1.66667" transform="rotate(180 1.66732 88.0001)" fill="#13C296"></circle>
            <circle cx="1.66732" cy="73.3335" r="1.66667" transform="rotate(180 1.66732 73.3335)" fill="#13C296"></circle>
            <circle cx="1.66732" cy="45.0001" r="1.66667" transform="rotate(180 1.66732 45.0001)" fill="#13C296"></circle>
            <circle cx="1.66732" cy="16.0001" r="1.66667" transform="rotate(180 1.66732 16.0001)" fill="#13C296"></circle>
            <circle cx="1.66732" cy="59.0001" r="1.66667" transform="rotate(180 1.66732 59.0001)" fill="#13C296"></circle>
            <circle cx="1.66732" cy="30.6668" r="1.66667" transform="rotate(180 1.66732 30.6668)" fill="#13C296"></circle>
            <circle cx="1.66732" cy="1.66683" r="1.66667" transform="rotate(180 1.66732 1.66683)" fill="#13C296"></circle>
          </svg>
        </span>
        <span className="absolute bottom-4 right-4 -z-1">
          <svg width="48" height="134" viewBox="0 0 48 134" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="45.6673" cy="132" r="1.66667" transform="rotate(180 45.6673 132)" fill="#3758F9"></circle>
            <circle cx="45.6673" cy="117.333" r="1.66667" transform="rotate(180 45.6673 117.333)" fill="#3758F9"></circle>
            <circle cx="45.6673" cy="102.667" r="1.66667" transform="rotate(180 45.6673 102.667)" fill="#3758F9"></circle>
            <circle cx="45.6673" cy="88.0001" r="1.66667" transform="rotate(180 45.6673 88.0001)" fill="#3758F9"></circle>
            <circle cx="45.6673" cy="73.3333" r="1.66667" transform="rotate(180 45.6673 73.3333)" fill="#3758F9"></circle>
            <circle cx="45.6673" cy="45.0001" r="1.66667" transform="rotate(180 45.6673 45.0001)" fill="#3758F9"></circle>
            <circle cx="45.6673" cy="16.0001" r="1.66667" transform="rotate(180 45.6673 16.0001)" fill="#3758F9"></circle>
            <circle cx="45.6673" cy="59.0001" r="1.66667" transform="rotate(180 45.6673 59.0001)" fill="#3758F9"></circle>
            <circle cx="45.6673" cy="30.6668" r="1.66667" transform="rotate(180 45.6673 30.6668)" fill="#3758F9"></circle>
            <circle cx="45.6673" cy="1.66683" r="1.66667" transform="rotate(180 45.6673 1.66683)" fill="#3758F9"></circle>
            <circle cx="31.0006" cy="132" r="1.66667" transform="rotate(180 31.0006 132)" fill="#3758F9"></circle>
            <circle cx="31.0006" cy="117.333" r="1.66667" transform="rotate(180 31.0006 117.333)" fill="#3758F9"></circle>
            <circle cx="31.0006" cy="102.667" r="1.66667" transform="rotate(180 31.0006 102.667)" fill="#3758F9"></circle>
            <circle cx="31.0006" cy="88.0001" r="1.66667" transform="rotate(180 31.0006 88.0001)" fill="#3758F9"></circle>
            <circle cx="31.0008" cy="73.3333" r="1.66667" transform="rotate(180 31.0008 73.3333)" fill="#3758F9"></circle>
            <circle cx="31.0008" cy="45.0001" r="1.66667" transform="rotate(180 31.0008 45.0001)" fill="#3758F9"></circle>
            <circle cx="31.0008" cy="16.0001" r="1.66667" transform="rotate(180 31.0008 16.0001)" fill="#3758F9"></circle>
            <circle cx="31.0008" cy="59.0001" r="1.66667" transform="rotate(180 31.0008 59.0001)" fill="#3758F9"></circle>
            <circle cx="31.0008" cy="30.6668" r="1.66667" transform="rotate(180 31.0008 30.6668)" fill="#3758F9"></circle>
            <circle cx="31.0008" cy="1.66683" r="1.66667" transform="rotate(180 31.0008 1.66683)" fill="#3758F9"></circle>
            <circle cx="16.3341" cy="132" r="1.66667" transform="rotate(180 16.3341 132)" fill="#3758F9"></circle>
            <circle cx="16.3341" cy="117.333" r="1.66667" transform="rotate(180 16.3341 117.333)" fill="#3758F9"></circle>
            <circle cx="16.3341" cy="102.667" r="1.66667" transform="rotate(180 16.3341 102.667)" fill="#3758F9"></circle>
            <circle cx="16.3341" cy="88.0001" r="1.66667" transform="rotate(180 16.3341 88.0001)" fill="#3758F9"></circle>
            <circle cx="16.3338" cy="73.3333" r="1.66667" transform="rotate(180 16.3338 73.3333)" fill="#3758F9"></circle>
            <circle cx="16.3338" cy="45.0001" r="1.66667" transform="rotate(180 16.3338 45.0001)" fill="#3758F9"></circle>
            <circle cx="16.3338" cy="16.0001" r="1.66667" transform="rotate(180 16.3338 16.0001)" fill="#3758F9"></circle>
            <circle cx="16.3338" cy="59.0001" r="1.66667" transform="rotate(180 16.3338 59.0001)" fill="#3758F9"></circle>
            <circle cx="16.3338" cy="30.6668" r="1.66667" transform="rotate(180 16.3338 30.6668)" fill="#3758F9"></circle>
            <circle cx="16.3338" cy="1.66683" r="1.66667" transform="rotate(180 16.3338 1.66683)" fill="#3758F9"></circle>
            <circle cx="1.66732" cy="132" r="1.66667" transform="rotate(180 1.66732 132)" fill="#3758F9"></circle>
            <circle cx="1.66732" cy="117.333" r="1.66667" transform="rotate(180 1.66732 117.333)" fill="#3758F9"></circle>
            <circle cx="1.66732" cy="102.667" r="1.66667" transform="rotate(180 1.66732 102.667)" fill="#3758F9"></circle>
            <circle cx="1.66732" cy="88.0001" r="1.66667" transform="rotate(180 1.66732 88.0001)" fill="#3758F9"></circle>
            <circle cx="1.66732" cy="73.3333" r="1.66667" transform="rotate(180 1.66732 73.3333)" fill="#3758F9"></circle>
            <circle cx="1.66732" cy="45.0001" r="1.66667" transform="rotate(180 1.66732 45.0001)" fill="#3758F9"></circle>
            <circle cx="1.66732" cy="16.0001" r="1.66667" transform="rotate(180 1.66732 16.0001)" fill="#3758F9"></circle>
            <circle cx="1.66732" cy="59.0001" r="1.66667" transform="rotate(180 1.66732 59.0001)" fill="#3758F9"></circle>
            <circle cx="1.66732" cy="30.6668" r="1.66667" transform="rotate(180 1.66732 30.6668)" fill="#3758F9"></circle>
            <circle cx="1.66732" cy="1.66683" r="1.66667" transform="rotate(180 1.66732 1.66683)" fill="#3758F9"></circle>
          </svg>
        </span>
      </div>
    </section>
  );
}

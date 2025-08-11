// IMPORTANTE: para o dark mode funcionar com o Docusaurus,
// ajuste o tailwind.config.js:
//   module.exports = {
//     darkMode: ['class', '[data-theme="dark"]'],
//     ...
//   }
// O Docusaurus aplica data-theme="dark" no <html>, então
// as classes `dark:` do Tailwind passam a funcionar.

import React from "react";

// Small, reusable UI atoms
const Container = ({ className = "", children }) => (
  <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
);

const PrimaryButton = ({ href = "#", children }) => (
  <a
    href={href}
    className="vt-primary inline-flex items-center justify-center rounded-2xl px-5 py-3 text-base font-semibold shadow-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 bg-amber-600 hover:bg-amber-700 text-white focus-visible:ring-amber-600 focus-visible:ring-offset-neutral-50 dark:focus-visible:ring-offset-slate-900"
  >
    {children}
  </a>
);

const SecondaryButton = ({ href = "#", children }) => (
  <a
    href={href}
    className="vt-secondary inline-flex items-center justify-center rounded-2xl px-5 py-3 text-base font-semibold shadow-sm ring-1 ring-inset ring-amber-600/30 text-slate-800 hover:bg-amber-100/60 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-amber-600 focus-visible:ring-offset-neutral-50 dark:text-slate-200 dark:hover:bg-amber-200/20 dark:focus-visible:ring-offset-slate-900"
  >
    {children}
  </a>
);

const faqs = [
  { q: "O VixeText é gratuito e de código aberto?", a: "Sim. O projeto é 100% gratuito e open source. Você pode usar, estudar e contribuir pelo GitHub." },
  { q: "Preciso instalar algo para começar?", a: "Não necessariamente. Você pode iniciar direto no navegador com GitHub Codespaces. Se preferir local/offline, use Docker para compilar sem instalar LaTeX ou dependências na sua máquina." },
  { q: "Como crio um projeto novo?", a: "Crie um repositório a partir do template oficial. Ele já vem com a estrutura de pastas e arquivos Markdown das seções do trabalho, pronta para você preencher." },
  { q: "O template segue normas ABNT?", a: "Sim. O fluxo aplica automaticamente formatação acadêmica (ABNT) em capas, seções, citações, referências e elementos como figuras e tabelas." },
  { q: "Como faço citações e referências?", a: "Você mantém as referências em um arquivo BibTeX (ex.: referencias.bib) e cita no texto com as chaves. A formatação é gerada automaticamente na compilação." },
  { q: "Quais formatos de saída posso gerar?", a: "PDF do trabalho, slides a partir de Markdown e página web para compartilhar. Outros formatos (como DOCX/HTML) podem ser gerados via conversão." },
  { q: "O que o CI/CD faz no VixeText?", a: "Ao dar push no GitHub, um workflow compila automaticamente seu conteúdo (Markdown + BibTeX) e publica os artefatos (PDF, slides, site) — sem passos manuais." },
  { q: "Consigo usar offline?", a: "Sim. Rodando localmente com Docker você compila mesmo sem internet. No navegador (Codespaces) tudo roda online, sem instalar nada." },
  { q: "Posso personalizar o template?", a: "Pode. Edite os arquivos Markdown, estilos e configurações. Você também pode adaptar temas de slides e ajustar o pipeline conforme suas necessidades." },
  { q: "Como publico e compartilho meu trabalho?", a: "A publicação automática via GitHub Pages disponibiliza seus PDFs e páginas em uma URL pública, ideal para enviar a orientadores e colegas." },
];

export default function Home() {
  return (
    <main className="bg-neutral-50 text-[#2f3e45] selection:bg-amber-200/60 dark:bg-slate-900 dark:text-slate-100">
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-amber-100/80 via-amber-50 to-transparent dark:from-slate-800/60 dark:via-slate-900 dark:to-transparent" />
        <Container className="pt-14 lg:pt-24">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                <span className="block">Escreva com Markdown + ABNT</span>
                <span className="mt-2 block text-slate-700 dark:text-slate-300">Rápido, simples, bonito.</span>
              </h1>
              <p className="mt-5 text-lg text-slate-700/90 dark:text-slate-300/90">
                Escrita acadêmica em Markdown com templates ABNT, citações via BibTeX e exportação para PDF, tudo automatizado com CI/CD para um fluxo rápido, simples e sem complicações.
              </p>
              <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
                <PrimaryButton href="/docs/">Saiba mais</PrimaryButton>
                <SecondaryButton href="https://github.com/vixetext/vixetext-template">Star no GitHub</SecondaryButton>
              </div>
              <p className="mt-3 pt-4 text-sm text-slate-600 dark:text-slate-400">100% gratuito e de código aberto.</p>
            </div>
            {/* Preview mock */}
            <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm dark:border-slate-700 dark:bg-slate-800">
              <div className="aspect-[16/10] w-full overflow-hidden rounded-xl border border-slate-100 dark:border-slate-700">
                <video aria-label="Prévia do editor gerando PDF" className="h-full w-full object-cover" autoPlay loop muted playsInline>
                  <source src="/img/editor-vscode-video.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </Container>
        <div className="mt-12 border-t border-slate-200/70 dark:border-slate-700/70" />
      </section>

      {/* TRUST STRIP */}
      <section className="bg-white/80 dark:bg-slate-800/50">
        <Container className="py-10">
          <p className="text-center text-sm text-slate-600 dark:text-slate-300">Utilizado por alunos e professores para criar e padronizar trabalhos acadêmicos.</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-8 opacity-80">
            <img src="/img/crests/ifs.png" alt="Instituto Federal de Educação, Ciência e Tecnologia de Sergipe" className="h-8" />
            <img src="/img/crests/ufs.png" alt="Universidade Federal de Sergipe" className="h-8" />
            <img src="/img/crests/ifba.png" alt="Instituto Federal de Educação, Ciência e Tecnologia da Bahia" className="h-8" />
            <img src="/img/crests/ufc.png" alt="Universidade Federal do Ceará" className="h-8" />
          </div>
        </Container>
      </section>

      {/* FEATURES */}
      <section>
        <Container className="py-16">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold">Comece rapidamente</h2>
              <p className="mt-3 text-slate-700/90 dark:text-slate-300/90">Templates prontos, compilação automática e citações com BibTeX. Foque no conteúdo, não na formatação.</p>
              <ul className="mt-6 space-y-3 text-slate-800 dark:text-slate-200">
                <li className="flex items-start gap-3"><span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-amber-600"></span> Templates otimizados para ABNT</li>
                <li className="flex items-start gap-3"><span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-amber-600"></span> Compilação para PDF com um clique</li>
                <li className="flex items-start gap-3"><span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-amber-600"></span> Citações e referências via BibTeX</li>
              </ul>
              <div className="mt-8">
                <SecondaryButton href="/docs">Ver documentação</SecondaryButton>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { title: "Fluxo automatizado", desc: "Escreva em Markdown e gere PDF com CI/CD." },
                { title: "ABNT na veia", desc: "Estilos prontos para as normas brasileiras." },
                { title: "PDF instantâneo", desc: "Renderização consistente para submissões." },
                { title: "Git", desc: "Fluxo de versionamento para colaborar." },
              ].map((f, i) => (
                <div key={i} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-800">
                  <h3 className="text-lg font-semibold">{f.title}</h3>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-white/70 dark:bg-slate-800/60">
        <Container className="py-16">
          <h2 className="text-3xl font-bold text-center">Como funciona</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              { step: "1", title: "Inicie com um template", desc: "Crie seu projeto já estruturado para TCC ou artigo, pronto nas normas ABNT." },
              { step: "2", title: "Escreva em Markdown", desc: "Adicione texto, tabelas, imagens e citações via BibTeX com formatação automática." },
              { step: "3", title: "Compile e publique", desc: "O CI/CD gera automaticamente PDF, slides e página web prontos para entrega e compartilhamento." },
            ].map((s) => (
              <div key={s.step} className="relative rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm dark:border-slate-700 dark:bg-slate-800">
                <span className="absolute -top-3 right-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-amber-600 text-white text-sm font-bold shadow">{s.step}</span>
                <h3 className="mt-2 text-lg font-semibold">{s.title}</h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{s.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* TESTIMONIAL */}
      <section>
        <Container className="py-16">
          <div className="rounded-3xl bg-[#f3d7a8] px-6 py-12 sm:px-10 lg:px-16 shadow-lg text-slate-900 dark:bg-[#1d293d] dark:text-white">
            <blockquote className="mx-auto max-w-5xl text-center">
              <p className="text-2xl sm:text-[28px] font-semibold leading-snug">
                “O VixeText acelerou meu TCC: foquei no conteúdo e deixei a formatação ABNT e o PDF por conta da ferramenta. Ganhei tempo e produtividade.”
              </p>
              <img src="https://avatars.githubusercontent.com/u/28494067?v=4" alt="Reinan Souza" className="mx-auto mt-8 h-16 w-16 rounded-full ring-2 ring-white/50 object-cover" />
              <footer className="mt-3">
                <div className="font-semibold">Reinan Souza</div>
                <div className="text-xs sm:text-sm text-slate-800/80 dark:text-white/80">Aluno de Sistemas de Informação — Instituto Federal de Sergipe</div>
              </footer>
            </blockquote>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-white/80 dark:bg-slate-800/60">
        <Container className="py-16">
          <h2 className="text-3xl font-bold text-center">Perguntas frequentes</h2>
          <div className="mx-auto mt-10 max-w-3xl divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white dark:divide-slate-700 dark:border-slate-700 dark:bg-slate-800">
            {faqs.map((item, idx) => (
              <details key={idx} className="group p-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left">
                  <span className="text-base font-semibold text-slate-900 dark:text-slate-100">{item.q}</span>
                  <span className="shrink-0 rounded-full border border-slate-300 p-1 text-xs text-slate-500 transition group-open:rotate-45 dark:border-slate-600 dark:text-slate-400">＋</span>
                </summary>
                <div className="mt-3 text-sm leading-6 text-slate-700 dark:text-slate-300">{item.a}</div>
              </details>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}

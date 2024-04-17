"use strict";(self.webpackChunkdocusaurus_example_poc=self.webpackChunkdocusaurus_example_poc||[]).push([[8594],{4495:(e,a,o)=>{o.r(a),o.d(a,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var t=o(4848),n=o(8453);const i={sidebar_position:2,slug:"geracao-de-sites-estaticos"},r="Gera\xe7\xe3o de sites est\xe1ticos",s={id:"guia-avancado/geracao-de-sites-estaticos",title:"Gera\xe7\xe3o de sites est\xe1ticos",description:"Este segmento da documenta\xe7\xe3o aborda a funcionalidade adicional do projeto, que permite a gera\xe7\xe3o de conte\xfado est\xe1tico para publica\xe7\xe3o online. Atrav\xe9s de um processo automatizado de Integra\xe7\xe3o Cont\xednua e Entrega Cont\xednua (CI/CD), o documento \xe9 compilado e transformado em um site est\xe1tico em HTML, tornando-o acess\xedvel pela internet.",source:"@site/versioned_docs/version-1.2.4/guia-avancado/geracao-de-sites-estaticos.md",sourceDirName:"guia-avancado",slug:"/guia-avancado/geracao-de-sites-estaticos",permalink:"/limarka-template-docs/guia-avancado/geracao-de-sites-estaticos",draft:!1,unlisted:!1,editUrl:"https://github.com/ReinanHS/limarka-template-tcc/tree/v1.2.4/docs/guia-avancado/geracao-de-sites-estaticos.md",tags:[],version:"1.2.4",sidebarPosition:2,frontMatter:{sidebar_position:2,slug:"geracao-de-sites-estaticos"},sidebar:"tutorialSidebar",previous:{title:"Arquitetura do template",permalink:"/limarka-template-docs/guia-avancado/arquitetura-do-template"},next:{title:"Contribuir para o projeto",permalink:"/limarka-template-docs/guia-avancado/contribuir-para-o-projeto"}},d={},c=[{value:"Automa\xe7\xe3o CI/CD com Limarka-Render-HTML",id:"automa\xe7\xe3o-cicd-com-limarka-render-html",level:2},{value:"Configura\xe7\xe3o para gera\xe7\xe3o de conte\xfado est\xe1tico",id:"configura\xe7\xe3o-para-gera\xe7\xe3o-de-conte\xfado-est\xe1tico",level:2},{value:"Configura\xe7\xf5es de implanta\xe7\xe3o",id:"configura\xe7\xf5es-de-implanta\xe7\xe3o",level:2}];function l(e){const a={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h1,{id:"gera\xe7\xe3o-de-sites-est\xe1ticos",children:"Gera\xe7\xe3o de sites est\xe1ticos"}),"\n",(0,t.jsx)(a.p,{children:"Este segmento da documenta\xe7\xe3o aborda a funcionalidade adicional do projeto, que permite a gera\xe7\xe3o de conte\xfado est\xe1tico para publica\xe7\xe3o online. Atrav\xe9s de um processo automatizado de Integra\xe7\xe3o Cont\xednua e Entrega Cont\xednua (CI/CD), o documento \xe9 compilado e transformado em um site est\xe1tico em HTML, tornando-o acess\xedvel pela internet."}),"\n",(0,t.jsx)(a.h2,{id:"automa\xe7\xe3o-cicd-com-limarka-render-html",children:"Automa\xe7\xe3o CI/CD com Limarka-Render-HTML"}),"\n",(0,t.jsxs)(a.p,{children:["O projeto Limarka integra uma automa\xe7\xe3o de CI/CD que compila o projeto automaticamente a cada nova altera\xe7\xe3o submetida \xe0 ramifica\xe7\xe3o principal. Essa automa\xe7\xe3o \xe9 realizada pelo projeto auxiliar ",(0,t.jsx)(a.a,{href:"https://github.com/ReinanHS/limarka-render-html",children:"limarka-render-html"}),"."]}),"\n",(0,t.jsxs)(a.p,{children:["Para quem deseja entender mais profundamente o funcionamento dessa funcionalidade, recomenda-se a consulta ao c\xf3digo-fonte dispon\xedvel na p\xe1gina do GitHub do projeto ",(0,t.jsx)(a.a,{href:"https://github.com/ReinanHS/limarka-render-html",children:"limarka-render-html"}),", acess\xedvel pelo link fornecido na descri\xe7\xe3o."]}),"\n",(0,t.jsx)(a.h2,{id:"configura\xe7\xe3o-para-gera\xe7\xe3o-de-conte\xfado-est\xe1tico",children:"Configura\xe7\xe3o para gera\xe7\xe3o de conte\xfado est\xe1tico"}),"\n",(0,t.jsx)(a.p,{children:"O arquivo de configura\xe7\xe3o destinado \xe0 gera\xe7\xe3o de conte\xfado est\xe1tico est\xe1 localizado na raiz do projeto. Nele, \xe9 poss\xedvel personalizar diversas configura\xe7\xf5es relativas \xe0 renderiza\xe7\xe3o das p\xe1ginas HTML. Abaixo, voc\xea encontra um exemplo dessas configura\xe7\xf5es:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-yaml",children:"# Configura\xe7\xf5es para limarka-render-html\n# Documenta\xe7\xe3o: https://github.com/ReinanHS/limarka-render-html\npage_render:\n  published_time: '2022-06-28T18:26:24-03:00'\n  instituicao_website: 'https://www.ifs.edu.br/'\n  social_networks:\n    facebook: reinangabriel\n    instagram: reinanhs\n    twitter: ReinanGabriel9\n    github: reinanhs\n  pages_render:\n    - resumo.md\n    - agradecimentos.md\n  files_type:\n    - pdf\n    - tex\n    - bib\n  files_map:\n    - \"xxx-trabalho-academico.tex:trabalho-academico.tex\"\n    - \"xxx-referencias.bib:referencias.bib\"\n"})}),"\n",(0,t.jsx)(a.h2,{id:"configura\xe7\xf5es-de-implanta\xe7\xe3o",children:"Configura\xe7\xf5es de implanta\xe7\xe3o"}),"\n",(0,t.jsx)(a.p,{children:"Para aqueles interessados em utilizar essa ferramenta para publica\xe7\xe3o no GitHub Pages, existe um guia espec\xedfico que detalha os passos necess\xe1rios para a configura\xe7\xe3o adequada dentro do reposit\xf3rio. Esse guia fornece instru\xe7\xf5es claras sobre como configurar a ferramenta para funcionar corretamente com seu projeto, garantindo a publica\xe7\xe3o eficiente do conte\xfado est\xe1tico gerado."}),"\n",(0,t.jsxs)(a.p,{children:["A documenta\xe7\xe3o detalhada para configura\xe7\xe3o da implanta\xe7\xe3o pode ser encontrada diretamente na p\xe1gina ",(0,t.jsx)(a.a,{href:"/guia-instalacao",children:"Instala\xe7\xe3o do template"}),", onde os procedimentos s\xe3o explicados com precis\xe3o."]}),"\n",(0,t.jsx)(a.p,{children:"Este guia assegura que os usu\xe1rios possam aproveitar a funcionalidade de gera\xe7\xe3o de sites est\xe1ticos para ampliar a acessibilidade e divulga\xe7\xe3o de seus documentos acad\xeamicos, promovendo uma forma inovadora e eficaz de compartilhamento do conhecimento."})]})}function u(e={}){const{wrapper:a}={...(0,n.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8453:(e,a,o)=>{o.d(a,{R:()=>r,x:()=>s});var t=o(6540);const n={},i=t.createContext(n);function r(e){const a=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function s(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),t.createElement(i.Provider,{value:a},e.children)}}}]);
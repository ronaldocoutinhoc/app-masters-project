# Ferramenta de Análise de Vagas

## Escopo do Projeto

Este projeto visa criar uma ferramenta para ajudar estudantes e desenvolvedores a planejar seu aprendizado com base nas descrições de vagas de emprego. A ferramenta permite que o usuário cole a descrição de uma vaga e receba um detalhamento das tecnologias envolvidas, bem como um roadmap de estudo para melhorar seus conhecimentos.

## Tecnologias Utilizadas

- **Next.js**: Framework React para construção de aplicações web. Utilizei Next.js para criar tanto o frontend quanto o backend do projeto.
- **TypeScript**: Linguagem que adiciona tipagem estática ao JavaScript, ajudando a evitar erros e a melhorar a manutenção do código.
- **Ant Design**: Pacote de UI utilizado para construir a interface do usuário.
- **Groq**: API Generativa usada para processar a descrição da vaga e gerar o roadmap de estudo.
- **i18next**: Biblioteca para internacionalização e tradução da aplicação.

## Estrutura do Projeto

### Frontend

- **Interface do Usuário**:
  - **Páginas**:
    - **Home**: Página inicial do site que explica seu propósito e fornece um botão para navegar para a página de análise de vagas.
    - **Analyze Job**: Página onde o usuário pode colar a descrição da vaga, adicionar informações opcionais sobre nível atual, stacks e tecnologias, e obter o detalhamento das tecnologias e o roadmap de estudo.
  - **Componente `AnalyzeJobPage`**: 
    - **Campos**:
      - **Job Description**: Campo de texto obrigatório onde o usuário cola a descrição da vaga.
      - **Current Level**: Seletor para escolher o nível atual do candidato (Iniciante, Junior, Pleno, Senior).
      - **Stack**: Campo de texto onde o usuário pode adicionar stacks que trabalha.
      - **Technologies**: Campo de texto onde o usuário pode adicionar tecnologias que domina.
    - **Botão de Análise**: Centralizado na página e responsável por enviar a solicitação para a API e exibir o resultado.
    - **Resultado**: Exibição do retorno da API usando `ReactMarkdown` para renderizar o conteúdo em Markdown.
  - **Estilos**:
    - **Tema Escuro**: Implementado usando CSS para alternar entre tema claro e escuro.
    - **Layout**: Centralização do formulário e botão na tela. Estilos aplicados para garantir uma boa usabilidade e aparência.

### Backend

- **API Routes**: Utilizei as **API Routes** do Next.js para criar a lógica do backend. As rotas estão localizadas na pasta `app/api` e são responsáveis por manipular as requisições HTTP e interagir com a API do Groq.
  - **Classe de Serviço (`groqService.ts`)**: Encapsula a lógica de interação com a API do Groq. Faz a chamada para a API e retorna as respostas necessárias.
  - **Rota de Teste (`test-groq`)**: Permite verificar a integração com a API do Groq e realizar testes iniciais.
  - **Rota Principal de Análise (`analyze-job`)**: Recebe a descrição da vaga, cria o prompt, e faz a chamada para a API do Groq. Esta rota processa a descrição da vaga e retorna o detalhamento das tecnologias e o roadmap de estudo.

## Tradução e Internacionalização

- **i18next**: Utilizado para internacionalizar a aplicação, permitindo a tradução dos textos nas páginas. A tradução é aplicada a todas as partes do formulário e mensagens de interface.
- **Arquivo de Tradução**:
  - **`public/locales/en/translation.json`**: Contém as traduções em inglês.
  - **`public/locales/pt/translation.json`**: Contém as traduções em português.

## Aprendizado

Este projeto tem sido uma excelente oportunidade de aprendizado, especialmente considerando que eu não tinha experiência prévia com Next.js, TypeScript, e API Routes. Explorando e entendendo como essas tecnologias funcionam juntas pude criar uma aplicação completa. A configuração do projeto, a utilização do App Router e a integração com a API Generativa são novos desafios durante o desenvolvimento.

## Extras

### Tema escuro

Sempre tive curiosidade em entender o funcionamento básico de um tema escuro. Devido à facilidade proporcionada pelo Ant Design, decidi implementá-lo como um desafio.

### Tradução

Em outro projeto pessoal, surgiu a ideia de traduzir os textos. Como esse projeto possui poucos textos, decidi aprender a fazer isso para, posteriormente, utilizar em meu projeto.

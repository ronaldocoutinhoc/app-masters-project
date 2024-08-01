# Ferramenta de Análise de Vagas

## Escopo do Projeto

Este projeto visa criar uma ferramenta para ajudar estudantes e desenvolvedores a planejar seu aprendizado com base nas descrições de vagas de emprego. A ferramenta permite que o usuário cole a descrição de uma vaga e receba um detalhamento das tecnologias envolvidas, bem como um roadmap de estudo para melhorar seus conhecimentos.

## Tecnologias Utilizadas

- **Next.js**: Framework React para construção de aplicações web. Utilizei Next.js para criar tanto o frontend quanto o backend do projeto.
- **TypeScript**: Linguagem que adiciona tipagem estática ao JavaScript, ajudando a evitar erros e a melhorar a manutenção do código.
- **Pacote de Frontend**: Ant Design: Pacote de UI simples será utilizado para construir a interface do usuário.
- **Groq**: API Generativa usada para processar a descrição da vaga e gerar o roadmap de estudo.

## Estrutura do Projeto

### Frontend

- **Interface do Usuário**: TODO

### Backend

- **API Routes**: Utilizamos as **API Routes** do Next.js para criar a lógica do backend. As rotas estão localizadas na pasta `app/api` e são responsáveis por manipular as requisições HTTP e interagir com a API do Groq.
  - **Classe de Serviço (`groqService.ts`)**: Encapsula a lógica de interação com a API do Groq. Faz a chamada para a API e retorna as respostas necessárias.
  - **Rota de Teste (`test-groq`)**: Permite verificar a integração com a API do Groq e realizar testes iniciais.
  - **Rota Principal de Análise (`analyze-job`)**: Recebe a descrição da vaga, cria o prompt, e faz a chamada para a API do Groq. Esta rota processa a descrição da vaga e retorna o detalhamento das tecnologias e o roadmap de estudo.

## Aprendizado

Este projeto tem sido uma excelente oportunidade de aprendizado, especialmente considerando que eu não tinha experiência prévia com Next.js, TypeScript, e API Routes. Estou explorando e entendendo como essas tecnologias funcionam juntas para criar uma aplicação completa. A configuração do projeto, a utilização do App Router e a integração com a API Generativa são novos desafios durante o desenvolvimento.

## Próximos Passos

Este README será atualizado conforme o projeto avança e novas funcionalidades são adicionadas.

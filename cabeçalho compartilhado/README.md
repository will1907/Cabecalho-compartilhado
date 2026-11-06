# Atividade 1 - App Web com Express

Este projeto é um exemplo simples de aplicação web usando **Node.js + Express** para servir páginas HTML estáticas.

O objetivo é ajudar quem está iniciando a entender:
- como organizar um projeto web em pastas;
- como criar rotas no backend;
- como conectar HTML e CSS;
- como exibir uma página `404` quando a rota não existe.

## Tecnologias usadas
- Node.js
- Express
- Dotenv
- HTML5
- CSS3

## Estrutura do projeto
```txt
app/
|- server.js
|- package.json
|- .env
|- public/
|  |- assets/
|  |  |- css/main.css
|  |  |- img/
|  |- pages/
|     |- index.html
|     |- login.html
|     |- cadastro.html
|     |- 404.html
```

## O que cada parte faz
- `server.js`: inicializa o servidor Express, define as rotas e configura a pasta de arquivos estáticos.
- `public/assets`: arquivos de apoio da interface (CSS e imagens).
- `public/pages`: páginas HTML exibidas nas rotas.
- `.env`: permite definir a porta do servidor (`PORT`).

## Rotas da aplicação
- `/` -> página inicial (`index.html`)
- `/login` -> página de login (`login.html`)
- `/cadastro` -> página de cadastro (`cadastro.html`)
- qualquer outra rota -> página `404.html`

## Como executar o projeto
1. Instale as dependências:
```bash
npm install
```

2. Inicie o servidor:
```bash
npm start
```

3. Abra no navegador:
```txt
http://localhost:3001
```

Se quiser usar outra porta, altere `PORT` no arquivo `.env`.

## Modo desenvolvimento
Para rodar com reinício automático ao salvar arquivos:
```bash
npm run dev
```

## Observações importantes (para estudo)
- As páginas de login e cadastro são **exemplos de interface**. Ainda não há validação real de usuário no backend.
- Os formulários estão prontos visualmente, mas não salvam dados em banco.
- O foco deste exemplo é aprender estrutura, rotas e organização inicial.


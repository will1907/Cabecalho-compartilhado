import express from "express";
import dotenv from "dotenv";
import path from "node:path";
import { readFile } from "node:fs/promises";

dotenv.config({ quiet: true });

const app = express();
const PORT = Number(process.env.PORT) || 3000;

const publicPath = path.join(import.meta.dirname, "..", "public");
const pagesPath = path.join(publicPath, "pages");

app.use('/assets', express.static(path.join(publicPath, 'assets')));

// Inclui o cabeçalho compartilhado antes de enviar cada página HTML.
app.engine("html", async function (filePath, _options, callback) {
    // 1. Lê a página solicitada.
    const pagina = await readFile(filePath, "utf8");

    // 2. Lê o cabeçalho comum a todas as páginas.
    const caminhoCabecalho = path.join(import.meta.dirname, "partials", "header.html");
    const cabecalho = await readFile(caminhoCabecalho, "utf8");

    // 3. Substitui o comentário pelo conteúdo do cabeçalho.
    const paginaCompleta = pagina.replace("<!-- shared-header -->", cabecalho);

    // 4. Entrega o HTML pronto ao Express, sem erro (null).
    callback(null, paginaCompleta);
});
app.set("view engine", "html");
app.set("views", publicPath);

app.get("/", function (_req, res) {
  res.render(path.join(publicPath, "index.html"));
});

app.get("/1dsm", function (_req, res) {
  res.render(path.join(pagesPath, "1dsm.html"));
});

app.get("/2dsm", function (_req, res) {
  res.render(path.join(pagesPath, "2dsm.html"));
});

app.get("/3dsm", function (_req, res) {
  res.render(path.join(pagesPath, "3dsm.html"));
});

app.get("/4dsm", function (_req, res) {
  res.render(path.join(pagesPath, "4dsm.html"));
});

app.get("/5dsm", function (_req, res) {
  res.render(path.join(pagesPath, "5dsm.html"));
});

app.get("/6dsm", function (_req, res) {
  res.render(path.join(pagesPath, "6dsm.html"));
});

app.use(function (_req, res) {
  res.status(404).send("Página não encontrada");
});

app.listen(PORT, function () {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

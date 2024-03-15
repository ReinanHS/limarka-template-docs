const fs = require('fs-extra');
const path = require("path");
const axios = require("axios");
const tar = require('tar');

// Array de tags a serem ignoradas. Substitua os valores conforme necessário.
const IGNORE_TAGS = ["v0.0.1", "v1.0.0", "v1.1.0"];
const REPO_NAME = "ReinanHS/limarka-template-tcc";

// Função para verificar se a tag está na lista de ignorados
function isTagIgnored(tag) {
  return IGNORE_TAGS.includes(tag);
}

// Função de comparação para ordenar versões semânticas
function compareVersions(a, b) {
  const partsA = a.split(".").map(Number);
  const partsB = b.split(".").map(Number);

  for (let i = 0; i < partsA.length; i++) {
    if (partsA[i] > partsB[i]) return 1;
    if (partsA[i] < partsB[i]) return -1;
  }

  return 0;
}

async function fetchAndFilterTags() {
  try {
    const response = await fetch(
      `https://api.github.com/repos/${REPO_NAME}/tags`
    );
    const data = await response.json();
    const tags = data.map((tag) => tag.name.replace(/^v/, ""));
    const filteredTags = tags.filter((tag) => !isTagIgnored(`v${tag}`));
    console.log("Tags:", filteredTags);

    return filteredTags.sort(compareVersions);
  } catch (error) {
    console.error("Erro ao buscar as tags:", error.message);
    return [];
  }
}

async function createDirectoriesAndVersionsFile() {
  try {
    const tags = await fetchAndFilterTags();
    for (const tag of tags) {
      const directoryPath = path.join(
        __dirname,
        `versioned_docs/version-${tag}`
      );
      await fs.mkdir(directoryPath, { recursive: true });
      console.log(`Diretório criado: ${directoryPath}`);
    }

    // Criando ou substituindo o arquivo versions.json
    const versionsFilePath = path.join(__dirname, "versions.json");
    await fs.writeFile(versionsFilePath, JSON.stringify(tags, null, 2));
    console.log(`Arquivo versions.json criado ou atualizado com sucesso.`);

    // Criando o diretório versioned_sidebars
    const directoryPath = path.join(__dirname, `versioned_sidebars`);
    await fs.mkdir(directoryPath, { recursive: true });
    console.log(`Diretório criado: ${directoryPath}`);

    for (const tag of tags) {
      const sidebarsFilePath = path.join(
        __dirname,
        `versioned_sidebars/version-${tag}-sidebars.json`
      );
      await fs.writeFile(
        sidebarsFilePath,
        JSON.stringify(
          {
            tutorialSidebar: [
              {
                type: "autogenerated",
                dirName: ".",
              },
            ],
          },
          null,
          2
        )
      );
      console.log(
        `Arquivo version-${tag}-sidebars.json criado ou atualizado com sucesso.`
      );
    }
  } catch (error) {
    console.error(
      "Erro ao criar diretórios ou arquivo versions.json:",
      error.message
    );
  }
}

createDirectoriesAndVersionsFile();

async function downloadAndExtractDocs(tag) {
    const versionWithoutV = tag.replace(/^v/, '');
    const tempDirPath = path.join(__dirname, `temp_version-${versionWithoutV}`);
    const versionedDirPath = path.join(__dirname, `versioned_docs/version-${versionWithoutV}`);
    await fs.ensureDir(tempDirPath);
  
    const url = `https://github.com/${REPO_NAME}/archive/refs/tags/${tag}.tar.gz`;
  
    // Download e extração
    const response = await axios({
      url,
      method: 'GET',
      responseType: 'stream'
    });
  
    await new Promise((resolve, reject) => {
      response.data
        .pipe(tar.x({
          strip: 1, // Ajuste conforme a estrutura do tarball
          C: tempDirPath // Diretório temporário
        }))
        .on('finish', resolve)
        .on('error', reject);
    });
  
    // Mover apenas a pasta docs para o diretório de destino e limpar o diretório temporário
    const docsSourcePath = path.join(tempDirPath, 'docs');
    if (await fs.pathExists(docsSourcePath)) {
      await fs.move(docsSourcePath, versionedDirPath, { overwrite: true });
      console.log(`Docs para ${tag} movidos para ${versionedDirPath}`);
    } else {
      console.warn(`A pasta docs não foi encontrada para a tag ${tag}`);
    }
  
    // Limpeza do diretório temporário
    await fs.remove(tempDirPath);
}

async function processTags() {
  const tags = await fetchAndFilterTags();
  for (const tag of tags) {
    await downloadAndExtractDocs(`v${tag}`);
  }
}

processTags().catch(console.error);

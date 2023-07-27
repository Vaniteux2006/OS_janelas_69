

//Tela de iniciar
document.addEventListener("DOMContentLoaded", () => {
    // Seleciona a div da splash screen
    const splashScreen = document.getElementById("splash-screen");

    // Seleciona o elemento de áudio
    const startupSound = document.getElementById("startup-sound");

    // Aguarda 5 segundos (5000 milissegundos)
    setTimeout(() => {
      // Remove a splash screen
      splashScreen.style.display = "none";
      
      // Reproduz o som de inicialização
      startupSound.play();

      // Exibe o conteúdo real do site após um pequeno atraso de 200 milissegundos (ou ajuste conforme necessário)
      setTimeout(() => {
        document.getElementById("desktop").style.display = "block";
      }, 200); // 200 milissegundos = 0.2 segundos (ajuste conforme necessário)
    }, 5000); // 5000 milissegundos = 5 segundos
  });

function updateClock() {
    const now = new Date();

    // Atualiza o horário no formato de 12 horas com AM/PM
    let hours = now.getHours();
    const amPm = hours >= 12 ? 'PM' : 'AM';
    hours = (hours % 12) || 12;
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes} ${amPm}`;
    document.getElementById('time').textContent = timeString;

    // Atualiza a data no formato "dd/mm/yyyy"
    const day = now.getDate().toString().padStart(2, '0');
    const month = (now.getMonth() + 1).toString().padStart(2, '0'); // Os meses são baseados em zero (janeiro é 0)
    const year = now.getFullYear();
    const dateString = `${day}/${month}/${year}`;
    document.getElementById('date').textContent = dateString;
}

// Atualiza o relógio e a data a cada minuto (60.000 milissegundos)
setInterval(updateClock, 6);

// Atualiza o relógio e a data imediatamente ao carregar a página
updateClock();

document.getElementById("recycle-bin").addEventListener("click", () => {
    // Adiciona a classe "selected" ao elemento do ícone da lixeira
    this.classList.toggle("selected");
});

document.body.addEventListener("click", (event) => {
    const recycleBin = document.getElementById("recycle-bin");
    // Verifica se o clique não foi dentro do ícone da lixeira
    if (!recycleBin.contains(event.target)) 
    {
        // Remove a classe "selected" do elemento do ícone da lixeira
        recycleBin.classList.remove("selected");
    }
});

const app = (id,link) => {
document.getElementById(id).addEventListener("click", () => {
    window.location.href = link;
});
}

app("google-chrome", "https://www.google.com")
app("games", "https://emupedia.net/beta/emuos/")
app("excel", "https://docs.google.com/spreadsheets/u/0/")
app("shutdown", "./index.html")

// Função para abrir uma nova janela
function openWindow(title, folders, files) {
  // Cria a div da janela
  const windowDiv = document.createElement("div");
  windowDiv.classList.add("window");

  // Cria a barra de título da janela
  const titlebarDiv = document.createElement("div");
  titlebarDiv.classList.add("window-titlebar");

  // Cria o título da janela
  const titleDiv = document.createElement("div");
  titleDiv.classList.add("window-title");
  titleDiv.textContent = title;

  // Cria os botões de minimizar, maximizar e fechar
  const minimizeBtn = document.createElement("button");
  minimizeBtn.classList.add("window-minimize-btn");
  minimizeBtn.textContent = "-";
  const maximizeBtn = document.createElement("button");
  maximizeBtn.classList.add("window-maximize-btn");
  maximizeBtn.textContent = "[]";
  const closeBtn = document.createElement("button");
  closeBtn.classList.add("window-close-btn");
  closeBtn.textContent = "x";

  // Adiciona os elementos de título à barra de título
  titlebarDiv.appendChild(titleDiv);
  titlebarDiv.appendChild(minimizeBtn);
  titlebarDiv.appendChild(maximizeBtn);
  titlebarDiv.appendChild(closeBtn);

  // Cria a barra de opções da janela
  const optionsDiv = document.createElement("div");
  optionsDiv.classList.add("window-options");
  const optionsList = document.createElement("ul");
  const optionsItems = ["Arquivo", "Editar", "Exibir", "Favoritos", "Ferramentas", "Ajuda"];
  for (const option of optionsItems) {
    const optionItem = document.createElement("li");
    optionItem.textContent = option;
    optionsList.appendChild(optionItem);
  }
  optionsDiv.appendChild(optionsList);

  // Cria a área de navegação da janela
  const navigationDiv = document.createElement("div");
  navigationDiv.classList.add("window-navigation");

  // Cria os botões de voltar e avançar
  const backBtn = document.createElement("div");
  backBtn.classList.add("back-btn");
  const backArrow = document.createElement("div");
  backArrow.classList.add("arrow-left");
  backBtn.appendChild(backArrow);
  backBtn.appendChild(document.createTextNode("Voltar"));

  const forwardBtn = document.createElement("div");
  forwardBtn.classList.add("forward-btn");
  const forwardArrow = document.createElement("div");
  forwardArrow.classList.add("arrow-right");
  forwardBtn.appendChild(document.createTextNode("Avançar"));
  forwardBtn.appendChild(forwardArrow);

  // Cria a barra de pesquisa da janela
  const searchDiv = document.createElement("div");
  searchDiv.classList.add("window-search");
  const searchInput = document.createElement("input");
  searchInput.setAttribute("type", "text");
  searchInput.setAttribute("placeholder", "Localização");
  searchDiv.appendChild(searchInput);

  // Cria as áreas de pastas e arquivos da janela
  const foldersArea = document.createElement("div");
  foldersArea.classList.add("folders-area");
  const foldersList = document.createElement("ul");
  for (const folder of folders) {
    const folderItem = document.createElement("li");
    folderItem.textContent = folder;
    foldersList.appendChild(folderItem);
  }
  foldersArea.appendChild(foldersList);

  const filesArea = document.createElement("div");
  filesArea.classList.add("files-area");
  const filesList = document.createElement("ul");
  for (const file of files) {
    const fileItem = document.createElement("li");
    fileItem.textContent = file;
    filesList.appendChild(fileItem);
  }
  filesArea.appendChild(filesList);

  // Adiciona todos os elementos à janela
  navigationDiv.appendChild(backBtn);
  navigationDiv.appendChild(forwardBtn);
  windowDiv.appendChild(titlebarDiv);
  windowDiv.appendChild(optionsDiv);
  windowDiv.appendChild(navigationDiv);
  windowDiv.appendChild(searchDiv);
  windowDiv.appendChild(foldersArea);
  windowDiv.appendChild(filesArea);

  // Adiciona a janela à área de trabalho (desktop)
  const desktop = document.getElementById("desktop");
  desktop.appendChild(windowDiv);
}

let clickCount = 0; // Variável para contar os cliques

document.getElementById("recycle-bin").addEventListener("click", () => {
  clickCount++;

  // Abrir a janela somente após o segundo clique (clickCount igual a 2)
  if (clickCount === 2) {
    const windowDiv = document.querySelector(".window");
    windowDiv.style.display = "block";
    clickCount = 0;
  }
});

let closeClickCount = 0; // Variável para contar os cliques no botão de fechar

document.getElementById("fechar").addEventListener("click", () => {
  closeClickCount++;

  // Fechar a janela somente após o segundo clique (closeClickCount igual a 2)
  if (closeClickCount === 1) {
    const windowDiv = document.querySelector(".window");
    windowDiv.style.display = "none";
    closeClickCount = 0; // Reiniciar o contador de cliques
  }
});
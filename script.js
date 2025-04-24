const content = document.getElementById('main-content');
const homeButton = document.querySelector('.sidebar-button:nth-of-type(1)');
const aboutButton = document.querySelector('.sidebar-button:nth-of-type(2)');
const projectsButton = document.querySelector('.sidebar-button:nth-of-type(3)');

const homepageContent = document.getElementById('homepage-content');
const aboutmeContent = document.getElementById('aboutme-content');
const projectsContent = document.getElementById('projects-content');

function goToHomepage() {
    removeActiveButtons();
    homeButton.classList.add('active');
    showContent(homepageContent);
}

function showAboutMe() {
    removeActiveButtons();
    aboutButton.classList.add('active');
    showContent(aboutmeContent);
}

function showProjects() {
    removeActiveButtons();
    projectsButton.classList.add('active');
    showContent(projectsContent);
}

function removeActiveButtons() {
    const buttons = document.querySelectorAll('.sidebar-button');
    buttons.forEach(button => button.classList.remove('active'));
}

function showContent(contentToShow) {
    // Oculta todos os conteúdos
    homepageContent.classList.add('hidden');
    aboutmeContent.classList.add('hidden');
    projectsContent.classList.add('hidden');

    // Mostra o conteúdo desejado
    contentToShow.classList.remove('hidden');
}

function showProjectDetails(projectName, projectDescriptionHTML) {
    const detailsContainer = document.getElementById('project-details');
    const projectTitle = document.getElementById('project-title');
    const projectDescription = document.getElementById('project-description');

    // Atualiza o título e a descrição do projeto
    projectTitle.textContent = projectName;
    projectDescription.innerHTML = projectDescriptionHTML; // Permite HTML no conteúdo

    // Exibe a área de detalhes
    detailsContainer.classList.remove('hidden');
}

function hideProjectDetails() {
    const detailsContainer = document.getElementById('project-details');
    detailsContainer.classList.add('hidden');
}

function closeModal() {
    const modal = document.getElementById('project-modal');
    modal.classList.remove('show');
}

function toggleDetails(detailsId) {
    // Fechar todas as áreas de detalhes e galerias abertas
    const allDetails = document.querySelectorAll('.project-details, .project-gallery');
    allDetails.forEach(detail => {
        if (detail.id !== detailsId) {
            detail.classList.add('hidden'); // Fecha as outras áreas
        }
    });

    // Alternar a visibilidade da área correspondente
    const detailsElement = document.getElementById(detailsId);
    if (detailsElement) {
        if (detailsElement.classList.contains('hidden')) {
            detailsElement.classList.remove('hidden'); // Abre a nova área
        } else {
            detailsElement.classList.add('hidden'); // Fecha se já estiver aberta
        }
    }
}

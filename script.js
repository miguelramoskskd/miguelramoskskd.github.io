const galleries = {
    'ic-2026': {
        title: 'Pesquisador e Desenvolvedor — INPE',
        images: [
            'images/experience/ic-2026-1.jpg',
            'images/experience/ic-2026-2.jpg',
            'images/experience/ic-2026-3.jpg',
            'images/experience/ic-2026-4.jpg',
            'images/experience/ic-2026-5.jpg',
            'images/experience/ic-2026-6.jpg',
        ],
    },
    'pibic-2025': {
        title: 'Bolsista PIBIC-EM — INPE',
        images: [
            'images/experience/pibic-2025-1.jpg',
            'images/experience/pibic-2025-2.jpg',
            'images/experience/pibic-2025-3.jpg',
            'images/experience/pibic-2025-4.jpg',
            'images/experience/pibic-2025-5.jpg',
            'images/experience/pibic-2025-6.jpg',
        ],
    },
    'fll': {
        title: 'Mentor Voluntário — FIRST LEGO League Challenge',
        images: [
            'images/experience/quark01.jfif',
            'images/experience/quark03.jfif',
            'images/experience/quark02.jfif',
            'images/experience/quark04.jpeg',
            'images/experience/quark05.jpeg',
            'images/experience/quark06.jpeg',
        ],
    },
};

const modal = document.getElementById('image-modal');
const modalGrid = document.getElementById('modal-grid');
const modalTitle = document.getElementById('modal-title');

function openModal(galleryId) {
    const gallery = galleries[galleryId];
    if (!gallery) return;

    modalTitle.textContent = gallery.title;

    modalGrid.innerHTML = gallery.images
        .map((src) => `
            <div class="modal-slot">
                <img src="${src}" alt="${gallery.title}" onerror="this.parentElement.classList.add('empty'); this.remove();">
            </div>
        `)
        .join('');

    modal.classList.add('active');
}

function closeModal() {
    modal.classList.remove('active');
}

document.querySelectorAll('.gallery-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
        openModal(btn.dataset.gallery);
    });
});

document.getElementById('modal-close').addEventListener('click', closeModal);

modal.addEventListener('click', (event) => {
    if (event.target === modal) closeModal();
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeModal();
});


const hamburgerBtn = document.getElementById('hamburger-btn');
const navLinks = document.getElementById('nav-links');

hamburgerBtn.addEventListener('click', () => {
    hamburgerBtn.classList.toggle('active');
    navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach((link) => {
    link.addEventListener('click', () => {
        hamburgerBtn.classList.remove('active');
        navLinks.classList.remove('active');
    });
});
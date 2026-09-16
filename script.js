const modal = document.querySelector('.image-modal');
const modalImage = modal.querySelector('img');
const closeModal = modal.querySelector('.modal-close');
const modalPrevious = modal.querySelector('[data-modal-prev]');
const modalNext = modal.querySelector('[data-modal-next]');
const modalCount = modal.querySelector('[data-modal-count]');
const galleryItems = [...document.querySelectorAll('.gallery-item')];
let activeGalleryIndex = 0;

const showModalImage = (index) => {
  activeGalleryIndex = (index + galleryItems.length) % galleryItems.length;
  const item = galleryItems[activeGalleryIndex];
  const image = item.querySelector('img');
  modalImage.src = item.dataset.image;
  modalImage.alt = image.alt;
  modalCount.textContent = `${String(activeGalleryIndex + 1).padStart(2, '0')} / ${String(galleryItems.length).padStart(2, '0')}`;
};

galleryItems.forEach((item, itemIndex) => {
  item.addEventListener('click', () => {
    showModalImage(itemIndex);
    modal.showModal();
  });
});

closeModal.addEventListener('click', () => modal.close());
modalPrevious.addEventListener('click', () => showModalImage(activeGalleryIndex - 1));
modalNext.addEventListener('click', () => showModalImage(activeGalleryIndex + 1));
modal.addEventListener('click', (event) => {
  if (event.target === modal) modal.close();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && modal.open) modal.close();
  if (event.key === 'ArrowLeft' && modal.open) showModalImage(activeGalleryIndex - 1);
  if (event.key === 'ArrowRight' && modal.open) showModalImage(activeGalleryIndex + 1);
});

const carousel = document.querySelector('.overview-carousel');

if (carousel) {
  const slides = [...carousel.querySelectorAll('[data-carousel-slide]')];
  const counter = carousel.querySelector('[data-carousel-count]');
  const previous = carousel.querySelector('[data-carousel-prev]');
  const next = carousel.querySelector('[data-carousel-next]');
  let currentSlide = 0;
  let intervalId;

  const showSlide = (index) => {
    currentSlide = (index + slides.length) % slides.length;
    slides.forEach((slide, slideIndex) => {
      slide.classList.toggle('is-active', slideIndex === currentSlide);
    });
    counter.textContent = `${String(currentSlide + 1).padStart(2, '0')} / ${String(slides.length).padStart(2, '0')}`;
  };

  const startCarousel = () => {
    window.clearInterval(intervalId);
    intervalId = window.setInterval(() => showSlide(currentSlide + 1), 4500);
  };

  previous.addEventListener('click', () => { showSlide(currentSlide - 1); startCarousel(); });
  next.addEventListener('click', () => { showSlide(currentSlide + 1); startCarousel(); });
  carousel.addEventListener('mouseenter', () => window.clearInterval(intervalId));
  carousel.addEventListener('mouseleave', startCarousel);
  startCarousel();
}

const heroCarousel = document.querySelector('.hero-carousel');

if (heroCarousel) {
  const slides = [...heroCarousel.querySelectorAll('[data-hero-slide]')];
  const counter = document.querySelector('[data-hero-count]');
  const previous = document.querySelector('[data-hero-prev]');
  const next = document.querySelector('[data-hero-next]');
  let currentSlide = 0;
  let intervalId;

  const showSlide = (index) => {
    currentSlide = (index + slides.length) % slides.length;
    slides.forEach((slide, slideIndex) => {
      slide.classList.toggle('is-active', slideIndex === currentSlide);
    });
    counter.textContent = `${String(currentSlide + 1).padStart(2, '0')} / ${String(slides.length).padStart(2, '0')}`;
  };

  const startCarousel = () => {
    window.clearInterval(intervalId);
    intervalId = window.setInterval(() => showSlide(currentSlide + 1), 5000);
  };

  previous.addEventListener('click', () => { showSlide(currentSlide - 1); startCarousel(); });
  next.addEventListener('click', () => { showSlide(currentSlide + 1); startCarousel(); });
  heroCarousel.addEventListener('mouseenter', () => window.clearInterval(intervalId));
  heroCarousel.addEventListener('mouseleave', startCarousel);
  startCarousel();
}

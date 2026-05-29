const body = document.body;
const modal = document.querySelector('.modal');
const modalOverlay = document.querySelector('.modal__overlay');
const openModalButton = document.querySelector('.mail__btn');
const closeModalButton = document.querySelector('.modal__exit');

const openModal = () => {
  body.classList.add('modal--open');
  modal?.setAttribute('aria-hidden', 'false');
};

const closeModal = () => {
  body.classList.remove('modal--open');
  modal?.setAttribute('aria-hidden', 'true');
};

openModalButton?.addEventListener('click', openModal);
closeModalButton?.addEventListener('click', closeModal);
modalOverlay?.addEventListener('click', closeModal);

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeModal();
  }
});

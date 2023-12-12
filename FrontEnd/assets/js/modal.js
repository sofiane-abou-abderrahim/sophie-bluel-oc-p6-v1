/*********Display the modal window when clicking the 'edit' button**********/

const modalTriggers = document.querySelectorAll('.modal-trigger');

// variable to find out which modal is opened
let modal = null;

// function to open modal
const openModal = function (event) {
  event.preventDefault();
  // retrieve the attribute 'href=#modal1'
  const target = document.querySelector(event.target.getAttribute('href'));
  // display modal
  target.style.display = null;
  target.removeAttribute('aria-hidden');
  target.setAttribute('aria-modal', 'true');
  // save the modal box that is currently opened
  modal = target;
  // close modal upon click
  modal.addEventListener('click', closeModal);
  modal.querySelector('.close-modal').addEventListener('click', closeModal);
};

// function to close modal
const closeModal = function (event) {
  // to not do anything if we try to close non existant modal
  if (modal === null) {
    return;
  }
  event.preventDefault();
  // hide modal
  modal.style.display = 'none';
  modal.setAttribute('aria-hidden', 'true');
  modal.removeAttribute('aria-modal');
  // delete event listener
  modal.removeEventListener('click', closeModal);
  // delete event listener to entirely clean modal box
  modal.querySelector('.close-modal').removeEventListener('click', closeModal);
  // set again modal to null as by default
  modal = null;
};

// open modal upon click on the edit link
modalTriggers.forEach(trigger => {
  trigger.addEventListener('click', openModal);
});

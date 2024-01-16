import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const userInput = document.querySelector('.data-select');
const userList = document.querySelector('.gallery-list');
const activeLoader = document.querySelector('.loader');

userInput.addEventListener('submit', e => {
  e.preventDefault();
  const userInputValue = userInput.elements.request.value.trim();
  userList.innerHTML = '';
  activeLoader.classList.toggle('loader-active');
  fetchUsers(userInputValue)
    .then(data => {
      activeLoader.classList.toggle('loader-active');
      renderGallery(data);
    })
    .catch(error => {
      console.log('hello');
      activeLoader.classList.toggle('loader-active');
      iziToast.error({
        message:
          'Sorry, there are no images matching </br> your search query. Please try again!',
        messageColor: '#FAFAFB',
        messageSize: '16',
        messageLineHeight: '20',
        position: 'bottomCenter',
        backgroundColor: '#EF4040',
        icon: 'bi:x-octagon',
        iconColor: '#FAFAFB',
      });
    })
    .finally(() => {
      userInput.reset();
    });
});

const searchParams = new URLSearchParams({
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
});

function fetchUsers(userRequest) {
  return fetch(
    `https://pixabay.com/api/?key=41825347-2a0e6255edbe790f7737a6334&q=${userRequest}&${searchParams}`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

function renderGallery(data) {
  const markup = data.hits
    .map(hit => {
      return `<li class="gallery-item">
          <a class="gallery-link" href="${hit.largeImageURL}">
    	      <img
		          class="gallery-image"
		          src="${hit.webformatURL}"
		          alt="${hit.tags}"
              width="360"
              height="200"
              ;
    	      />
            <ul class="info-list">
              <li class="info-item">
                <h class="item-title">Likes</h>
                <p class="item-content">${hit.likes}</p>
              </li>
              <li class="info-item">
                <h class="item-title">Views</h>
                <p class="item-content">${hit.views}</p>
              </li>
              <li class="info-item">
                <h class="item-title">Comments</h>
                <p class="item-content">${hit.comments}</p>
              </li>
              <li class="info-item">
                <h class="item-title">Downloads</h>
                <p class="item-content">${hit.downloads}</p>
              </li>
            </ul>
  		    </a>
        </li>`;
    })
    .join('');
  userList.insertAdjacentHTML('beforeend', markup);

  const lightbox = new SimpleLightbox('.gallery-list a', {
    captionsData: 'alt',
    captionDelay: 250,
  });
  lightbox.refresh();
}

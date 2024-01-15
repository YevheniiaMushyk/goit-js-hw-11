import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const userInput = document.querySelector('.data-select');
const userList = document.querySelector('.gallery-list');

userInput.addEventListener('submit', e => {
  e.preventDefault();
  const userInputValue = userInput.elements.request.value.trim();

  fetchUsers(userInputValue)
    .then(data => renderGallery(data))
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
    });

  userInput.reset();
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
  if (userList.children.length > 0) {
    userList.children.forEach(item => {
      item.remove();
    });
  }
  if (data.totalHits > 0) {
    const markup = data.hits
      .map(hit => {
        return `<li class="gallery-item">
          <a class="gallery-link" href="${hit.largeImageURL}">
    	      <img
		          class="gallery-image"
		          src="${hit.webformatURL}"
		          alt="${hit.tags}"
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
  }

  const lightbox = new SimpleLightbox('.gallery-list a', {
    captionsData: 'alt',
    captionDelay: 250,
  });
}

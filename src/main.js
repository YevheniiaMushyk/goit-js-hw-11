import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const userInput = document.querySelector('.data-select');
const userList = document.querySelector('.gallery-list');

userInput.addEventListener('submit', e => {
  e.preventDefault();
  const userInputValue = userInput.elements.request.value;
  // clear gallary
  fetchUsers(userInputValue);
  // .then(users => renderUsers(users))
  // .catch(error => {
  //   iziToast.error({
  //     title: 'Error',
  //     message:
  //       'Sorry, there are no images matching your search query. Please try again!',
  //     position: 'topRight',
  //   });
  // });

  userInput.reset();
});

function fetchUsers(userRequest) {
  return fetch(
    `https://pixabay.com/api?key=41825347-2a0e6255edbe790f7737a6334&q=${userRequest}&image_type=photo&orientation=horizontal&safesearch=true`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

// function renderUsers(users) {
//   const markup = users
//     .map(user => {
//       return `<li class="gallery-item">
//       <a class="gallery-link" href="${user.original}">
//     	<img
// 		class="gallery-image"
// 		src="${user.preview}"
// 		alt="${user.description}"
//     	/>
//   		</a>
//         </li>`;
//     })
//     .join('');
//   userList.insertAdjacentHTML('beforeend', markup);

//   const lightbox = new SimpleLightbox('.gallery-list a', {
//     captionsData: 'alt',
//     captionDelay: 250,
//   });
// }

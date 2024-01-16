import{i as u,S as m}from"./assets/vendor-46aac873.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}})();const a=document.querySelector(".data-select"),c=document.querySelector(".gallery-list"),n=document.querySelector(".loader");a.addEventListener("submit",r=>{r.preventDefault();const t=a.elements.request.value.trim();c.innerHTML="",n.classList.toggle("loader-active"),d(t).then(i=>{n.classList.toggle("loader-active"),g(i)}).catch(()=>{console.log("catch in progress"),n.classList.toggle("loader-active"),u.error({message:"Sorry, there are no images matching </br> your search query. Please try again!",messageColor:"#FAFAFB",messageSize:"16",messageLineHeight:"20",position:"bottomCenter",backgroundColor:"#EF4040",icon:"fa-regular",iconColor:"#FAFAFB",maxWidth:"500",transitionIn:"bounceInLeft"})}).finally(()=>a.reset())});const f=new URLSearchParams({image_type:"photo",orientation:"horizontal",safesearch:!0});function d(r){return fetch(`https://pixabay.com/api/?key=41825347-2a0e6255edbe790f7737a6334&q=${r}&${f}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}function g(r){const t=r.hits.map(o=>`<li class="gallery-item">
          <a class="gallery-link" href="${o.largeImageURL}">
    	      <img
		          class="gallery-image"
		          src="${o.webformatURL}"
		          alt="${o.tags}"
              width="360"
              height="200"
              ;
    	      />
            <ul class="info-list">
              <li class="info-item">
                <h class="item-title">Likes</h>
                <p class="item-content">${o.likes}</p>
              </li>
              <li class="info-item">
                <h class="item-title">Views</h>
                <p class="item-content">${o.views}</p>
              </li>
              <li class="info-item">
                <h class="item-title">Comments</h>
                <p class="item-content">${o.comments}</p>
              </li>
              <li class="info-item">
                <h class="item-title">Downloads</h>
                <p class="item-content">${o.downloads}</p>
              </li>
            </ul>
  		    </a>
        </li>`).join("");c.insertAdjacentHTML("beforeend",t),new m(".gallery-list a",{captionsData:"alt",captionDelay:250}).refresh()}
//# sourceMappingURL=commonHelpers.js.map

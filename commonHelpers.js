import{i as c,S as u}from"./assets/vendor-46aac873.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const n=document.querySelector(".data-select"),a=document.querySelector(".gallery-list");n.addEventListener("submit",i=>{i.preventDefault();const t=n.elements.request.value.trim();f(t).then(o=>d(o)).catch(o=>{c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}).finally(()=>n.reset())});const m=new URLSearchParams({image_type:"photo",orientation:"horizontal",safesearch:!0});function f(i){return fetch(`https://pixabay.com/api/?key=41825347-2a0e6255edbe790f7737a6334&q=${i}&${m}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}function d(i){const t=i.hits.map(s=>`<li class="gallery-item">
          <a class="gallery-link" href="${s.largeImageURL}">
    	      <img
		          class="gallery-image"
		          src="${s.webformatURL}"
		          alt="${s.tags}"
    	      />
            <ul class="info-list">
              <li class="info-item">
                <h class="item-title">Likes</h>
                <p class="item-content">${s.likes}</p>
              </li>
              <li class="info-item">
                <h class="item-title">Views</h>
                <p class="item-content">${s.views}</p>
              </li>
              <li class="info-item">
                <h class="item-title">Comments</h>
                <p class="item-content">${s.comments}</p>
              </li>
              <li class="info-item">
                <h class="item-title">Downloads</h>
                <p class="item-content">${s.downloads}</p>
              </li>
            </ul>
  		    </a>
        </li>`).join("");a.innerHTML="",a.insertAdjacentHTML("beforeend",t),new u(".gallery-list a",{captionsData:"alt",captionDelay:250}).refresh()}
//# sourceMappingURL=commonHelpers.js.map

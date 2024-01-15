import{i as c,S as u}from"./assets/vendor-46aac873.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const l=document.querySelector(".data-select"),n=document.querySelector(".gallery-list");l.addEventListener("submit",i=>{i.preventDefault();const t=l.elements.request.value.trim();f(t).then(r=>d(r)).catch(r=>{c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}),l.reset()});const m=new URLSearchParams({image_type:"photo",orientation:"horizontal",safesearch:!0});function f(i){return fetch(`https://pixabay.com/api/?key=41825347-2a0e6255edbe790f7737a6334&q=${i}&${m}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}function d(i){if(n.children.length>0&&n.children.forEach(t=>{t.remove()}),i.totalHits>0){const t=i.hits.map(r=>`<li class="gallery-item">
          <a class="gallery-link" href="${r.largeImageURL}">
    	      <img
		          class="gallery-image"
		          src="${r.webformatURL}"
		          alt="${r.tags}"
    	      />
            <ul class="info-list">
              <li class="info-item">
                <h class="item-title">Likes</h>
                <p class="item-content">${r.likes}</p>
              </li>
              <li class="info-item">
                <h class="item-title">Views</h>
                <p class="item-content">${r.views}</p>
              </li>
              <li class="info-item">
                <h class="item-title">Comments</h>
                <p class="item-content">${r.comments}</p>
              </li>
              <li class="info-item">
                <h class="item-title">Downloads</h>
                <p class="item-content">${r.downloads}</p>
              </li>
            </ul>
  		    </a>
        </li>`).join("");n.insertAdjacentHTML("beforeend",t)}new u(".gallery-list a",{captionsData:"alt",captionDelay:250})}
//# sourceMappingURL=commonHelpers.js.map

import{i as c,S as g}from"./assets/vendor-46aac873.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const m="/goit-js-hw-11/assets/x-octagon-627eaa17.svg",a=document.querySelector(".data-select"),u=document.querySelector(".gallery-list"),l=document.querySelector(".loader");a.addEventListener("submit",i=>{i.preventDefault();const t=a.elements.request.value.trim();u.innerHTML="",l.classList.toggle("loader-active"),d(t).then(r=>{l.classList.toggle("loader-active"),h(r)}).catch(()=>{l.classList.toggle("loader-active"),c.error({message:"Something wrong. Please try again later!",messageColor:"#FAFAFB",messageSize:"16",messageLineHeight:"20",position:"bottomCenter",backgroundColor:"#EF4040",iconUrl:m,icon:"fa-regular",iconColor:"#FAFAFB",maxWidth:"500",transitionIn:"bounceInLeft"})}).finally(()=>a.reset())});const f=new URLSearchParams({image_type:"photo",orientation:"horizontal",safesearch:!0});function d(i){return fetch(`https://pixabay.com/api/?key=41825347-2a0e6255edbe790f7737a6334&q=${i}&${f}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}function h(i){console.log(i.totalHits),i.totalHits<=0&&c.error({message:"Sorry, there are no images matching </br> your search query. Please try again!",messageColor:"#FAFAFB",messageSize:"16",messageLineHeight:"20",position:"bottomCenter",backgroundColor:"#EF4040",iconUrl:m,iconColor:"#FAFAFB",maxWidth:"500",transitionIn:"bounceInLeft"});const t=i.hits.map(s=>`<li class="gallery-item">
          <a class="gallery-link" href="${s.largeImageURL}">
    	      <img
		          class="gallery-image"
		          src="${s.webformatURL}"
		          alt="${s.tags}"
              width="360"
              height="200"
              ;
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
        </li>`).join("");u.insertAdjacentHTML("beforeend",t),new g(".gallery-list a",{captionsData:"alt",captionDelay:250}).refresh()}
//# sourceMappingURL=commonHelpers.js.map

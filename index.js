import{a as x,S,i as d}from"./assets/vendor-BzajH6aU.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();function h(t){return t.map(({webformatURL:s,largeImageURL:r,tags:n,likes:e,views:o,comments:l,downloads:b})=>`
        <li class = "list-foto">
        <div class="container">
        <a class="foto-link" href="${r}">
            <img width="360px" height="200px" class="foto" src="${s}" alt="${n}">
        </a>
        <div class="text-overlay">
        <div class="overlay-list likes"> 
            <h3 class="likes-text">Likes</h3>
            <p class="likes-text">${e}</p>
        </div>
        <div class="overlay-list views"> 
            <h3 class="views-text">Views</h3>
            <p class="views-text">${o}</p>
        </div>
        <div class="overlay-list comments"> 
            <h3 class="comments-text">Comments</h3>
            <p class="comments-text">${l}</p>
        </div>
        <div class="overlay-list downloads"> 
            <h3 class="downloads-text">Downloads</h3>
            <p class="downloads-text">${b}</p>
        </div>
        </div>    
        </div>
        </li>

    `).join("")}const P="47015926-a75abbcadb56cf8cc5bf9ef48";async function m(t="",s=1){return(await x.get("https://pixabay.com/api/",{params:{key:P,q:t,image_type:"photo",orientation:"horizontal",safesearch:"true",page:s,per_page:15}})).data}const p=document.querySelector(".js-search-form"),u=document.querySelector(".gallery"),y=document.querySelector(".loader"),a=document.querySelector(".js-load-more");p.addEventListener("submit",q);a.addEventListener("click",E);let g=new S(".gallery a"),i=1,c="",f=0;function v(t){return new Promise(s=>setTimeout(s,t))}async function q(t){t.preventDefault(),i=1;const{foto:s}=t.currentTarget.elements;if(c=s.value.trim(),!c){d.error({message:"Please enter text to search.",position:"topRight"});return}u.innerHTML="",a.classList.replace("load-more","load-more-hidden"),w(),await v(1e3);try{const r=await m(c,i);if(f=r.totalHits/15,r.hits.length==0){d.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}u.innerHTML=h(r.hits),g.refresh(),i<f&&a.classList.replace("load-more-hidden","load-more")}catch(r){console.log("error",r)}finally{L(),p.reset()}}async function E(){i+=1,a.disabled=!0,a.classList.replace("load-more","load-more-hidden"),w(),await v(1e3);try{const t=await m(c,i);u.insertAdjacentHTML("beforeend",h(t.hits)),g.refresh(),i>=f?(a.style.display="none",d.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):a.classList.replace("load-more-hidden","load-more");const r=document.querySelector(".container").getBoundingClientRect().height;window.scrollBy({left:0,top:r*2,behavior:"smooth"})}catch(t){console.log("error",t)}finally{a.disabled=!1,L()}}function w(){y.style.display="block"}function L(){y.style.display="none"}
//# sourceMappingURL=index.js.map

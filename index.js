import{a as f,i as n,S as h}from"./assets/vendor-BzajH6aU.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function m(o){return o.map(({webformatURL:s,largeImageURL:r,tags:a,likes:e,views:t,comments:i,downloads:u})=>`
        <li class = "list-foto">
        <div class="container">
        <a class="foto-link" href="${r}">
            <img width="360px" height="200px" class="foto" src="${s}" alt="${a}">
        </a>
        <div class="text-overlay">
        <div class="overlay-list likes"> 
            <h3 class="likes-text">Likes</h3>
            <p class="likes-text">${e}</p>
        </div>
        <div class="overlay-list views"> 
            <h3 class="views-text">Views</h3>
            <p class="views-text">${t}</p>
        </div>
        <div class="overlay-list comments"> 
            <h3 class="comments-text">Comments</h3>
            <p class="comments-text">${i}</p>
        </div>
        <div class="overlay-list downloads"> 
            <h3 class="downloads-text">Downloads</h3>
            <p class="downloads-text">${u}</p>
        </div>
        </div>    
        </div>
        </li>

    `).join("")}const p="47015926-a75abbcadb56cf8cc5bf9ef48";async function y(o=""){const s=new URLSearchParams({key:p,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true"});return await f(`https://pixabay.com/api/?${s}`)}const c=document.querySelector(".js-search-form"),l=document.querySelector(".gallery"),d=document.querySelector(".loader");c.addEventListener("submit",v);function g(o){return new Promise(s=>setTimeout(s,o))}async function v(o){o.preventDefault();const{foto:s}=o.currentTarget.elements;if(s.value.trim()==""){n.error({message:"Please enter text to search.",position:"topRight"});return}l.innerHTML="",x(),await g(1e3),y(s.value).then(r=>{r.hits.length==0?n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):(l.innerHTML=m(r.hits),w.refresh())}).catch(r=>{console.log("error",r)}).finally(()=>{L()}),c.reset()}let w=new h(".gallery a");function x(){d.style.display="block"}function L(){d.style.display="none"}
//# sourceMappingURL=index.js.map

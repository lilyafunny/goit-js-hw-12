
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { createMarkup } from './js/render-functions.js'
import { fetchData } from './js/pixabay-api.js'

const formEl = document.querySelector(".js-search-form");
const listEl = document.querySelector(".gallery");
const loadingEl = document.querySelector(".loader");

const loadMore = document.querySelector(".js-load-more");

formEl.addEventListener("submit", handlSearch);
loadMore.addEventListener("click", onLoadMore);

let lightbox = new SimpleLightbox('.gallery a');
let page = 1;
let globalCurrent = "";
let totalPage = 0;


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function handlSearch(event) {
    event.preventDefault();
    page = 1;
    const { foto } = event.currentTarget.elements;
    globalCurrent = foto.value.trim();


    if (!globalCurrent) {
        iziToast.error({
            message: 'Please enter text to search.',
            position: 'topRight'
        });
        return;
    }

    listEl.innerHTML = '';

    loadMore.classList.replace("load-more", "load-more-hidden");

    showLoading();
    await sleep(1000);

    try {

        const data = await fetchData(globalCurrent, page);
        totalPage = data.totalHits / 15;

        if (data.hits.length == 0) {
            iziToast.error({
                message: 'Sorry, there are no images matching your search query. Please try again!',
                position: 'topRight'
            });
            return;
        }

        listEl.innerHTML = createMarkup(data.hits);
        lightbox.refresh();

        if (page < totalPage) {
            loadMore.classList.replace("load-more-hidden", "load-more");
        }

    } catch (error) {
        console.log("error", error);
    } finally {
        hideLoading();
        formEl.reset();
    }


}


async function onLoadMore() {

    page += 1;

    loadMore.disabled = true;
    loadMore.classList.replace("load-more", "load-more-hidden");
    showLoading();
    await sleep(1000);

    try {

        const data = await fetchData(globalCurrent, page);
        listEl.insertAdjacentHTML("beforeend", createMarkup(data.hits));
        lightbox.refresh();


        if (page >= totalPage) {
            loadMore.style.display = "none";
            iziToast.info({
                message: "We're sorry, but you've reached the end of search results.",
                position: 'topRight'
            });
        } else {
            loadMore.classList.replace("load-more-hidden", "load-more");
        }

        const card = document.querySelector(".container");
        const cardHeight = card.getBoundingClientRect().height;

        window.scrollBy({
            left: 0,
            top: cardHeight * 2,
            behavior: "smooth"
        })

    } catch (error) {

        console.log("error", error);

    } finally {
        loadMore.disabled = false;
        hideLoading();
    }

}

function showLoading() {
    loadingEl.style.display = 'block';
}

function hideLoading() {
    loadingEl.style.display = 'none';
}
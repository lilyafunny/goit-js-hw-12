import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { createMarkup } from './js/render-functions.js'
import { fetchData } from './js/pixabay-api.js'

const formEl = document.querySelector(".js-search-form");
const listEl = document.querySelector(".gallery");
const loadingEl = document.querySelector(".loader");

formEl.addEventListener("submit", handlSearch);



function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function handlSearch(event) {
    event.preventDefault();
    const { foto } = event.currentTarget.elements;

    if (foto.value.trim() == "") {
        iziToast.error({
            message: 'Please enter text to search.',
            position: 'topRight'
        });
        return;
    }

    listEl.innerHTML = '';

    showLoading();
    await sleep(1000);

    fetchData(foto.value)
        .then(data => {

            if (data.hits.length == 0) {
                iziToast.error({
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                    position: 'topRight'
                });
            } else {
                listEl.innerHTML = createMarkup(data.hits);
                lightbox.refresh();
            }
        })
        .catch(error => {
            console.log("error", error);
        })
        .finally(() => {
            hideLoading();
        });


    formEl.reset();
}

let lightbox = new SimpleLightbox('.gallery a');

function showLoading() {
    loadingEl.style.display = 'block';
}

function hideLoading() {
    loadingEl.style.display = 'none';
}
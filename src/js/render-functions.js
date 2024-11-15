export function createMarkup(arr) {
    return arr.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) =>
        `
        <li class = "list-foto">
        <div class="container">
        <a class="foto-link" href="${largeImageURL}">
            <img width="360px" height="200px" class="foto" src="${webformatURL}" alt="${tags}">
        </a>
        <div class="text-overlay">
        <div class="overlay-list likes"> 
            <h3 class="likes-text">Likes</h3>
            <p class="likes-text">${likes}</p>
        </div>
        <div class="overlay-list views"> 
            <h3 class="views-text">Views</h3>
            <p class="views-text">${views}</p>
        </div>
        <div class="overlay-list comments"> 
            <h3 class="comments-text">Comments</h3>
            <p class="comments-text">${comments}</p>
        </div>
        <div class="overlay-list downloads"> 
            <h3 class="downloads-text">Downloads</h3>
            <p class="downloads-text">${downloads}</p>
        </div>
        </div>    
        </div>
        </li>

    `
    ).join("");
}
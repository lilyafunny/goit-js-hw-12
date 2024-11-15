import axios from "axios";


const API_KEY = "47015926-a75abbcadb56cf8cc5bf9ef48";


export async function fetchData(foto = "") {

    const params = new URLSearchParams({

        key: API_KEY,
        q: foto,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: "true"

    });

    return await axios(`https://pixabay.com/api/?${params}`)

}
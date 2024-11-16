import axios from "axios";


const API_KEY = "47015926-a75abbcadb56cf8cc5bf9ef48";


export async function fetchData(foto = "", page = 1) {

    const result = await axios.get("https://pixabay.com/api/", {
        params: {

            key: API_KEY,
            q: foto,
            image_type: "photo",
            orientation: "horizontal",
            safesearch: "true",
            page,
            per_page: 15

        }
    });

    return result.data;

}
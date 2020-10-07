import axios from 'axios';


const baseURL = "https://www.omdbapi.com/?apikey=d1e333b9";

export const apiCall = (url, data, headers, method) => axios({
    method,
    url: baseURL + url,
    data,
    headers
});
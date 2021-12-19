import axios from 'axios'

const API_ENDPOINT = process.env.ENDPOINT ? process.env.ENDPOINT : ' https://api.thecatapi.com/v1'
const API_KEY = process.env.API_KEY ? process.env.API_KEY : '0828e5f1-622f-4ea8-95cb-0f00530b900a'
export function apiRequest(){
    const headers = {
        'x-api-key': API_KEY,
        'Content-Type': 'application/json'
    }
    return axios.create({
        baseURL: API_ENDPOINT,
        headers: headers
    });
}
import axios from "axios";

export const apiProds = axios.create({
    baseURL: 'http://localhost:3000'
})

// export const apiAuth = axios.create({
//     baseURL: 'http://localhost:3333'
// })
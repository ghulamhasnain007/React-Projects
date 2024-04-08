import React from 'react'
import axios from "axios"

const Interceptor = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
})

Interceptor.interceptors.request.use(
    (config)=>{
        console.log("CONFIG in");
        config.headers.Authorization = `Barer kadhayasaass`
        return config
    },
    (error)=>{
        console.log("Error", error)
    }
)

export default Interceptor
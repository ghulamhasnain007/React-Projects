import axios from "axios";

const axiosHandler = axios.create({
    baseURL: "https://dummyjson.com/"
})

axiosHandler.interceptors.request.use(
    (config) => {
        const user = JSON.parse(sessionStorage.getItem('users'))

        let headersObject = {
            "Content-Type": 'application/json'
        }

        if(user && user.token) {
            headersObject["Authorization"] = `Bearer ${user.token}`
        }

        return {
            ...config,
            headers : {
                ...headersObject
            }
        }
    },
    (errors)=>{
        throw new Error(errors)
    }
)

export default axiosHandler
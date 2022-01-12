import axios from "axios";


const headers = {
    'Content-Type':'application/json',
    'Authorization':''
}

const baseURL = 'http://127.0.0.1:8000/'

// const token = localStorage.getItem('token')
// if(token) headers['Authorization'] = `Bearer ${token}`


const DefaultAPIInstance = axios.create({
    baseURL: baseURL,
    headers: headers
})



DefaultAPIInstance.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    if(error.response.status == 401){
        localStorage.removeItem('token')
        location.reload()
    }
    return Promise.reject(error);
});

export default DefaultAPIInstance



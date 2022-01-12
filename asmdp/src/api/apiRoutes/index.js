import DefaultAPIInstance from '@/api'

export const authAPi = {
    login(username, password){
        const url = 'api/token/';
        const data = {username, password};
        return DefaultAPIInstance.post(url, data);
    },
    logout(){
        const url = '/logout';
        return DefaultAPIInstance.post(url);
    }
}

export const getDay = {
    getDay(){
        const url = 'api/v1/get/day';
        return DefaultAPIInstance.get(url, {headers:{Authorization:'Bearer '+localStorage.getItem('token')}});
    },
    getPhoto(id){
        const url = `api/v1/get/photo/${id}`;
        return DefaultAPIInstance.get(url, {headers:{Authorization:'Bearer '+localStorage.getItem('token')}});
    }
}

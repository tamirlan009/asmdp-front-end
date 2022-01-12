import {createRouter, createWebHistory} from "vue-router";
import Main from "@/views/Main";
import Authenticate from "@/views/Authenticate";
import UploadFiles from "@/views/UploadFiles";
import Map from "@/views/Map";
import WatchVideo from "@/views/WatchVideo";
import DateSend from "@/views/DateSend";
import EditPage from "../views/EditPage";
import store from "@/store";


const authGuard = function (to, from, next){
    if(store.state.auth.token===null) next({name:'Authenticate'});
    else next()
}


const routes =[
    {
        path: '/',
        name: 'Main',
        component: Main,
        beforeEnter: authGuard
    },
    {
        path: '/login',
        name: 'Authenticate',
        component: Authenticate,
    },
    {
        path: '/upload',
        name: 'Upload',
        component: UploadFiles,
        beforeEnter: authGuard
    },
    {
        path: '/map',
        name: 'Map',
        component: Map,
        beforeEnter: authGuard
    },
    {
        path: '/video/:id',
        name: 'WatchVideo',
        component: WatchVideo,
        beforeEnter: authGuard
    },
    {
        path: '/send/:id',
        name: 'DateSend',
        component: DateSend,
        beforeEnter: authGuard
    },
    {
        path: '/edit/:id',
        name: 'EditPage',
        component: EditPage,
        beforeEnter: authGuard
    }

]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
});

export default router;
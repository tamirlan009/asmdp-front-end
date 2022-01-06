import {createRouter, createWebHistory} from "vue-router";
import Main from "@/views/Main";
import Authenticate from "@/views/Authenticate";
import UploadFiles from "@/views/UploadFiles";
import Map from "@/views/Map";
import WatchVideo from "@/views/WatchVideo";
import DateSend from "@/views/DateSend";

const routes =[
    {
        path: '/',
        component: Main
    },
    {
        path: '/auth',
        component: Authenticate
    },
    {
        path: '/upload',
        component: UploadFiles
    },
    {
        path: '/map',
        component: Map
    },
    {
        path: '/video/:id',
        component: WatchVideo
    },
    {
        path: '/send/:id',
        component: DateSend
    },

]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
});

export default router;
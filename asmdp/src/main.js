import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router";
import components from "@/components/UI";
import VueZoomer from 'vue-zoomer'
import store from "@/store";
import "bootstrap/dist/css/bootstrap.min.css"
import moment from "moment";

const app = createApp(App);

components.forEach(component =>{
    app.component(component.name, component)
})

app.config.globalProperties.$filters = {
    dateTransform(value) {
        if(value){
            return moment(String(value)).format('MM.DD.YYYY hh:mm')
        }
    }
}


app.use(VueZoomer);
app.use(router);
app.use(store);
app.mount('#app');

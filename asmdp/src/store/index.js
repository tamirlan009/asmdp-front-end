import {createStore} from 'vuex'
import {editPage} from "@/store/modules/editPage";
import {auth} from "@/store/modules/auth";
import {mainPage} from "@/store/modules/mainPage";

export default createStore({
    modules:{
        mainPage: mainPage,
        editPage: editPage,
        auth: auth,

    }
})
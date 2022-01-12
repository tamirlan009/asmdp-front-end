import {authAPi} from "@/api/apiRoutes";

export const auth = {
    namespaced: true,
    state: ()=>({
        token: localStorage.getItem('token') || null,
    }),
    mutations:{
        setToken(state, token){
            state.token = token;
            localStorage.setItem('token', token)
        },
        deleteToken(state){
            state.token = null;
            localStorage.removeItem('token');
        },
    },
    actions:{
        // onLogin({commit}, {username, password}) {
        //     commit('deleteToken');
        //
        //     return authAPi.login(username, password)
        // },

        onLogin({commit}, {username, password}){
            commit('deleteToken');
            return authAPi.login(username, password).then(res=>{
                commit('setToken', res.data.access);
            })
        },
        onLogout({commit}){
            commit('deleteToken');
        },
    },
}


import {getDay} from "@/api/apiRoutes";


export const mainPage = {
    namespaced: true,
    state: () => ({
        dayItems:[]
    }),
    mutations:{
        setDayItems(state, value){
            state.dayItems=value
        }
    },
    actions:{

        async requestGetDay({commit}){
            try{
                const response = getDay.getDay();
                commit('setDayItems', (await response).data)

            }catch (e){
                console.log(e)
            }
        }


       // requestGetDay({commit}){
       //     return getDay.getDay().then((res)=>{
       //         commit('setDayItems', res.data)
       //      })
       // }
    }

}

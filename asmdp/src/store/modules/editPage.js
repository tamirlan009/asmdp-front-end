import {getDay} from "@/api/apiRoutes";


export const editPage ={
    namespaced: true,
    state: () => ({
        selIndex: 0,
        urlImageList: [],
        imgList:[],
        dateList:[]
    }),
    mutations:{
        selectImg(state, index){
            state.selIndex = index;
        },
        // getImg(state){
        //     state.imgList.length=0
        //     for(let k in state.urlImageList){
        //         state.imgList.push(state.urlImageList[k].url)
        //     }
        // },
        removeImg(state){
            state.imgList.splice(state.selIndex, 1);
            if(state.selIndex!=0){
                state.selIndex-=1;
            }
        },
        increaseSelectImg(state, count){
            state.selIndex -= count;
        },
        decreaseSelectImg(state, count){
            state.selIndex += count;
        },

        setDateList(state, value){
            state.urlImageList=value

            state.imgList.length=0
            for(let k in state.urlImageList){
                state.imgList.push(state.urlImageList[k].url)
            }

        }

    },
    actions:{

        async getPhoto({commit}, {id}){
            try{
                const response = getDay.getPhoto(id);
                commit('setDateList', (await response).data)
            }catch (e){
                console.log(e)
            }
        }

        //  requestDetailDay({commit},{id}){
        //     return getDay.getPhoto(id).then((res)=>{
        //         commit('setDateList', res.data)
        //     })
        // }

        // async requestGetDay({commit}){
        //     try{
        //         const response = getDay.getDay();
        //         commit('setDayItems', (await response).data)
        //
        //     }catch (e){
        //         console.log(e)
        //     }
        // }
        //
    }


}
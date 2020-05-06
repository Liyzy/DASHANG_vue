import Vue from 'vue'
import Vuex from 'vuex'

import modelCommon from "./model/common";
import modelGoods from "./model/goods";

Vue.use(Vuex);

const store=new Vuex.Store({

    modules:{
        modelCommon,
        modelGoods,
    },

    // state:{
    //     username: '',
    //     usertype: '',
    //     IDNumber: '',
    //     email: '',
    //     telephone: '',
    //     address: ''
    // },
    // // getters:{
    // //     getStateCount:function (state) {
    // //         return state.usertype;
    // //     }
    // // }
    // mutations:{
    //     changeUsertype(state,Vtype){
    //         state.usertype=Vtype;
    //     }
    // },
    // actions:{
    //     changeUsertypeFun(context,Vtype){
    //         context.commit("changeUsertype",Vtype);
    //     }
    // }
})

export default store

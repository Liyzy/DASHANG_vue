import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store=new Vuex.Store({
    state:{
        username: '丨一一一一一一一一丨',
        usertype: '',
        IDNumber: '111102199999999999',
        email: '1235646231@qq.com',
        telephone: '13941893655',
        address: '辽宁省大连市中山区高尔基路48号'
    },
    // getters:{
    //     getStateCount:function (state) {
    //         return state.usertype;
    //     }
    // }
    mutations:{
        changeUsertype(state,Vtype){
            state.usertype=Vtype;
        }
    },
    actions:{
        changeUsertypeFun(context,Vtype){
            context.commit("changeUsertype",Vtype);
        }
    }
})

export default store

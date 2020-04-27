import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store=new Vuex.Store({
    state:{
        userId: '',
        username: '',
        usertype: '',
        IDNumber: '',
        email: '',
        telephone: '',
        address: '',
        pic: ''
    },
    // getters:{
    //     getStateCount:function (state) {
    //         return state.usertype;
    //     }
    // }
    mutations:{
        changeUsertype(state, Vtype) {
            state.usertype = Vtype;
        }
    },

    actions: {
        changeUsertypeFun(context, Vtype) {
            context.commit("changeUsertype", Vtype);
        }
    }
});

export default store

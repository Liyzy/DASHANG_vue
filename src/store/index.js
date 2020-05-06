import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store=new Vuex.Store({
    state:{
        userId: '',
        userName: '请设置昵称',
        username: '',
        usertype: '',
        IDNumber: '请设置身份证号',
        email: '请设置邮件',
        telephone: '请设置电话',
        address: '请设置地址',
        pic: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
    },
    getters:{
        // getLoginInfo:function (state) {
        //     return state.usertype;
        // }
    },
    mutations:{
        changeUserType(state, payload) {
            state.usertype = payload.Vtype;
        },
        loginInfo(state,payload){
            state.username=payload.username;
            state.usertype=payload.usertype;
            state.userId=payload.userId;
        },
        userHomeInfo(state,payload){
            state.userName = payload.userName;
            state.IDNumber = payload.IDNumber;
            state.email = payload.email;
            state.telephone = payload.telephone;
            state.address = payload.address;
            state.pic = payload.pic;
        },
        // setInfo(state,payload){
        //     state.userName = payload.userName;
        //     state.IDNumber = payload.IDNumber;
        //     state.email = payload.email;
        //     state.telephone = payload.telephone;
        //     state.address = payload.address;
        //     state.pic = payload.pic;
        // }

    },

    actions: {
        // changeUserTypeFun(context) {
        //     context.commit("changeUserType");
        // }
    }
});

export default store

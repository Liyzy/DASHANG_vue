const state={
    userId:'',
    username:'',        //用户名
    usertype: '',          //用户类型
    password:'' ,        //密码
    avatarURL:'https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png',      //头像图片地址

    email:'',           //电子邮件
    IDNumber:'',        //身份证号
    telephone:'',       //电话
    address:'',         //地址
}

const getters={

}

const mutations={
    changeUsertype(state,Vtype){
        state.usertype=Vtype;
    }
}

const actions={
    changeUsertypeFun(context,Vtype){
        context.commit("changeUsertype",Vtype);
    }
}

const modelCommon={
    state:state,
    getters:getters,
    mutations:mutations,
    actions:actions
}
export default modelCommon

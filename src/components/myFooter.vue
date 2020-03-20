<template>
    <div class="footer_container">
        <p>{{company}}</p>
        <p>{{message}}</p>
    </div>
</template>

<script>
    export default {
        name: "myfooter",
        data(){
            return{
                company: '大商电器代理服务平台',
                message: '大商集团版权所有 copyright@2003-2020 辽ICP备12138号 ICP证:辽B-2-4-20200319'
            }
        }
    }
</script>

<style scoped>
    .footer_container{
        position: absolute;
        bottom: 0;
        height: 100px;
        width: 100%;
        color: #ecf0f1;
        background-color: #3d4450;
        padding-top: 10px;
    }
    .footer_container p{
        display: flex;
        justify-content: center;
        align-items: center;
    }

</style>
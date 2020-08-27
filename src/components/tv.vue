<template id="tv">
    <h1>{{msg}}</h1>
</template>
<script>
export default {
    data(){
        return{
            msg:''
        }
    },
    mounted(){
        this.$http.get('./data/my.json')
            .then( (response)=>{
                // 请求成功的数据
                this.msg=response.data
                console.log(response.data);
            })
            .catch(function (error) {
                // 请求失败会执行
                console.log(error);
            })
            .then(function () {
                // always executed
            });  
    }
}
</script>
 <template id="vip">
    <h1> <button @click="back()">按钮</button> vip</h1>
</template>
<script>

    export default{
                
                methods:{
                    back(){
                        // this.$router.go(-1)
                        //  打开一个新的页面
                        // this.$router.push('/movie')
                        // 替换页面 
                        this.$router.replace('/movie')
                    }
                }
            }
</script>
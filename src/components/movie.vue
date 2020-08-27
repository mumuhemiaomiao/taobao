 <template id="movie">
    <h1 @click="change()" ref="title">movie{{msg}}{{this.$store.state.count}}</h1>
</template>
<script>
    export default {
        data(){
            return{
                msg:0,
                n:0
            }
        },
        // watch监听数据变化
        // 变量名(){
            // 变量有变化就会执行代码
        // }
        watch:{
            msg(){
                console.log('数据发生变化了')
            },
            n(){
                console.log('n发生了')
            }
        },
        methods:{
            change(){
                // this.$store.state.count++
                // this.$store.commit('increment')
                this.$store.commit('add',100)
                this.msg++
            }
        },
        // 生命周期vue从创建到销毁的过程
        beforeCreate(){
            // 创建之前
            console.log('beforeCreate........................')
           
            console.log(this.msg)
             // vue中获取标签的方式 this.$refs.ref的值
             console.log(this.$refs.title)
        },
        created(){
            // 数据创建完毕
            console.log('created........................');
            console.log(this.msg)
             // vue中获取标签的方式 this.$refs.ref的值
             console.log(this.$refs.title)
        },
        beforeMount(){
            // 挂载之前
             console.log('beforeMount........................');
            console.log(this.msg)
             // vue中获取标签的方式 this.$refs.ref的值
             console.log(this.$refs.title)
        },
        mounted(){
            // 数据已经挂载完毕,一般在该方法内部，进行数据操作
             console.log('mounted........................');
            console.log(this.msg)
             // vue中获取标签的方式 this.$refs.ref的值
             console.log(this.$refs.title)
        },
        beforeUpdate(){
             // 数据更新之前
             console.log('beforeUpdate........................');
            console.log(this.msg)
             // vue中获取标签的方式 this.$refs.ref的值
             console.log(this.$refs.title)
        },
        updated(){
              // 数据更新了
             console.log('updated........................');
            console.log(this.msg)
             // vue中获取标签的方式 this.$refs.ref的值
             console.log(this.$refs.title)
        },
        beforeDestroy(){
            // 销毁组件之前
            // 组件名字.$destroy()销毁组件

        },
        destroyed(){
            // 组件销毁了

        }
    }
</script>
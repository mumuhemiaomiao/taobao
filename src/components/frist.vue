 <template>
    <main>
        <ul>
            <li v-for="(item,index) in list">
                <!-- router-link最终渲染成了a 。但是不能直接书写成a -->
                <router-link :to="item.path">
                    sdfsfds<img src="../assets/logo.png" alt="" class="pic">
                    dsfsfd<img src="../assets/logo.png" alt="" class="active">
                    {{item.con}}
                </router-link>
            </li>
        </ul>
        <router-view></router-view>
    </main>
</template>

<script>
    // export default导出数据
    export default{
         data(){
                    return{
                        list:[
                        {
                            con:'精选推荐',
                            path:'/index'
                        },
                        {
                            con:'电视剧',
                            path:'/tv'
                        },
                        {
                            con:'VIP',
                            path:'/vip'
                        },
                        {
                            con:'电影',
                            path:'/movie'
                        }
                    ]
                    }
                }
    }
</script>
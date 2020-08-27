// 引入包
import VueRouter from 'vue-router'

// import 自己命名 from 路径/如果是文件包，直接书写文件名字
import first from '../../components/frist.vue'
import index from '../../components/index.vue'
import tv from '../../components/tv.vue'
import movie from '../../components/movie.vue'
import details from '../../components/details.vue'
import vip from '../../components/vip.vue'
export default new VueRouter({
    routes:[
        {
            path:'/',
            component:first,
            children:[
                {
                    path:'/index',
                    component:index
                },
                {
                    path:'/tv',
                    component:tv
                },
                {
                    path:'/movie',
                    component:movie
                }
            ],
            redirect:'/index'
        },
        {
            path:'/vip',
            component:vip
        },
        {
            path:'/details/:sh',
            component:details
        },
        {
            path:'/*',
            redirect:'/index'
        }
    ]
})
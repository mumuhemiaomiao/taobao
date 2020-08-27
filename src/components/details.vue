<template >
    <main>
    <h1>这是{{msg}}详情页</h1>
    <video src="https://f.video.weibocdn.com/0032aXIQgx07FLwjzQdx010412048pWs0E020.mp4?label=mp4_1080p&template=1920x1080.25.0&trans_finger=daa7c63436091a9dfe20e4b554312cac&media_id=4539768172642334&tp=8x8A3El:YTkl0eM8&us=0&ori=1&bf=3&ot=h&ps=3lckmu&ab=1493-g0,540-g1,1326-g1,1192-g0,1191-g0,966-g1,1046-g2,1258-g0,878-g0,1887-g2,495-g0&Expires=1597978621&ssig=PfnK2mZFnf&KID=unistore,video"></video>
    </main>
</template>


<script>

    export default{
                
                data(){
                    return {
                        msg:''
                    }
                },
                // mounted进行数据处理
                mounted(){
                    // 接收路由参数
                    console.log(this.$route.params)
                    if(this.$route.params.sh=='game'){
                        // 后台请求数据
                        this.msg='这是穿越火线内容'
                    }else{
                        this.msg='这是三十而已内容'
                    }
                }
            }
</script>
<template >
    <main>
        <h1 @click="add()">精选推荐{{this.$store.state.count}}</h1>
        <ul>
            <li v-for="(item,index) in list">
                <router-link :to="'/details/'+item.id">{{item.con}}</router-link>
            </li>
        </ul>

        <main class="zsh">
            <mt-swipe :auto="4000">
                <mt-swipe-item>
                    <img src="http://img63.ddimg.cn/upload_img/00785/ts0824_0907/1242X366_0820-1597993817.jpg" alt="">
                </mt-swipe-item>
                <mt-swipe-item>
                    <img src="http://img63.ddimg.cn/upload_img/00785/ts0824_0907/1242X366_0820-1597993817.jpg" alt="">
                </mt-swipe-item>
                <mt-swipe-item>
                    <img src="http://img63.ddimg.cn/upload_img/00785/ts0824_0907/1242X366_0820-1597993817.jpg" alt="">
                </mt-swipe-item>
                 <mt-swipe-item>
                    <img src="http://img63.ddimg.cn/upload_img/00785/ts0824_0907/1242X366_0820-1597993817.jpg" alt="">
                </mt-swipe-item>
                 <mt-swipe-item>
                    <img src="http://img63.ddimg.cn/upload_img/00785/ts0824_0907/1242X366_0820-1597993817.jpg" alt="">
                </mt-swipe-item>
                 <mt-swipe-item>
                    <img src="http://img63.ddimg.cn/upload_img/00785/ts0824_0907/1242X366_0820-1597993817.jpg" alt="">
                </mt-swipe-item>

            </mt-swipe>
        </main>

        <mt-range
  v-model="rangeValue"
  :min="10"
  :max="90"
  :step="1"
  :bar-height="5">
   <div slot="start">0</div>
  <div slot="end">100</div>
</mt-range>
{{rangeValue}}

<mt-header title="标题过长会隐藏后面的内容啊哈哈哈哈">
  <router-link to="/" slot="left">
    <mt-button icon="back">返回</mt-button>
  </router-link>
  <mt-button icon="more" slot="right"></mt-button>
</mt-header>

<mt-navbar v-model="selected">
  <mt-tab-item id="1">选项一</mt-tab-item>
  <mt-tab-item id="2">选项二</mt-tab-item>
  <mt-tab-item id="3">选项三</mt-tab-item>
</mt-navbar>
{{selected}}
<!-- tab-container -->
<mt-tab-container v-model="selected">
  <mt-tab-container-item id="1">
    <mt-cell v-for="n in 10" :title="11111" />
  </mt-tab-container-item>
  <mt-tab-container-item id="2">
    <mt-cell v-for="n in 4" :title="'测试 ' + n" />
  </mt-tab-container-item>
  <mt-tab-container-item id="3">
    <mt-cell v-for="n in 6" :title="'选项 ' + n" />
  </mt-tab-container-item>
</mt-tab-container>

<mt-search
  v-model="value"
  cancel-text="取消"
  placeholder="搜索">
</mt-search>

<mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
<mt-field label="邮箱" placeholder="请输入邮箱" type="email" v-model="email"></mt-field>
<mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
<mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>
<mt-field label="网站" placeholder="请输入网址" type="url" v-model="website"></mt-field>
<mt-field label="数字" placeholder="请输入数字" type="number" v-model="number"></mt-field>
<mt-field label="生日" placeholder="请输入生日" type="date" v-model="birthday"></mt-field>
<mt-field label="自我介绍" placeholder="自我介绍" type="textarea" rows="4" v-modal="introduction"></mt-field>
    </main>
</template>

<script>
import { Toast } from 'mint-ui';
    export default{
        methods:{
            add(){
                Toast({
        message: '已经删除了',
        position: 'top',
        duration: 1000
        });
            }
        },
    data(){
        return {
            selected:"1",
            rangeValue:20,
            list:[
                {
                    con:'穿越火线',
                    id:'game'
                },
                {
                    con:'三十而已',
                    id:'tv'
                }
            ]
        }
    }
}
</script>

<style >

    .zsh img{
        width:100%;
    }
    .zsh .mint-swipe-items-wrap{
        /* padding-bottom设置百分比，参照物是父级的宽度 */
        padding-bottom:29.46%;
    }
    .zsh .mint-swipe-indicator{
        background:red;
        opacity: 0.9;
    }
    .zsh .is-active{
        background:blue
    }
</style>

// 1242 366
// 100  29.46%

// 100 100
// 100米 100米
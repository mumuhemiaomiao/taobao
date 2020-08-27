// 使用vuex的时候，必须引入vue
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    // state放置的是数据 类似于之前的data  this.$store.state.数据名字
    // 可以修改数据，但是不建议
  state: {
    count: 0
  },
//   mutations放置的是方法。类似之前的methods this.$store.commit('方法名',k,k)k代表的是参数
  mutations: {
    increment (state) {
      state.count++
    },
    add(state,n){
        state.count=state.count+n;
    }
  }
})
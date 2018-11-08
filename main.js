import Vue from 'vue';      //引入Vue
import App from './App.vue' //引入App.Vue组件

new Vue({
   el:'#app',
   render(h) {
     return h(App)
   }
})

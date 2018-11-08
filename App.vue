<template>
    <div>
        <h1>welcome App.Vue</h1>
        <el-button @click="click">test</el-button>
   </div>
</template>
<style>

@import "//netdna.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";
</style>
<script>
    import Vue from 'vue'
    import ElementUI from 'element-ui'
    import 'element-ui/lib/theme-chalk/index.css';

    import Element from 'element-ui/lib/element-ui.common'
    import locale from 'element-ui/lib/locale/lang/en'
    
    Vue.use(Element, {locale});
  
    export default {
        methods: {
            click() {
                alert('click')
            }
        },
        mounted() {
            
        },
    }
</script>
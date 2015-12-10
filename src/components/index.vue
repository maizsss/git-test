<template>
    <div class="page-content">
        <div class="index-page-wrap">
            这是一个index组件
            数据：{{indexData}}

            <br>
            <a href="#page1" class="external" style="font-size: 20px;" v-on:click="toPage1">to Page1</a>
        </div>
    </div>
</template>

<style>
    .index-page-wrap {
        color: red;
    }
</style>

<script type="text/ecmascript-6">

    module.exports = {

            F7_vue: require('../js/index.js'),
            name: 'index-page',
            replace: true,
            data: function () {
                return {
                    indexData: '我是index'
                }
            },

            methods: {
                toPage1: function (){
                    console.log('click');
                    F7_vue.router('page1');
                }
            }
    };


</script>

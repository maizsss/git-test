<template>
    <div id="page1" data-page="page1" class="page">
        <div class="page-content">
            <div class="page1-wrap">
                这是一个page组件
                数据：{{pageData}}
            </div>
        </div>
    </div>
</template>

<style>
    .page1-wrap {
        color: blue;
    }
</style>

<script type="text/ecmascript-6">
    module.exports = {
        name: 'page1',
        replace: true,
        data: function () {
            return {
                pageData: '我是page1'
            }
        },

        methods: {
        }
    };
</script>

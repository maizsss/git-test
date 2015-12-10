var Vue = require('vue');
var index = require('../components/index.vue');
var page1 = require('../components/page1.vue');


/*var vm = new Vue({
    el: '#app',
    data: {
    },
    components: {
        'index-page': index
    }
});*/
var F7_vue = (function (){


    var F7_vue = function (){
        this.indexPage = null;
    }


    F7_vue.prototype = {

        buildCommonPage: function (pageName){
            return '<div id="'+ pageName +'" data-page="'+ pageName +'" class="page" :is="'+ pageName +'">';
        },

        router: function (pageName){
            var _this = this;

            mainView.router.load({
                content: _this.buildCommonPage(pageName)
            });
            console.log(pageName);

            var tmp = Vue.extend(page1);
            new tmp().$mount('#' + pageName);

            return this;
        },

        buildIndexPage: function (){
            var _this = this;

            _this.indexPage = Vue.extend(index);

            mainView.router.load({
                content: _this.buildCommonPage('index-page'),
                pushState: false,
                animatePages: false
            });

            new _this.indexPage().$mount().$appendTo('#index-page');

            return this;
        },

        watchHash: function (){
            var _this = this;

            $$(window).on('hashchange', function (){

                var hash = window.location.hash.slice(1);
                console.log(hash);

                if ( hash === '' ){
                    _this.buildIndexPage();
                } else {
                    _this.router(hash);
                }
            });

            return this;
        }

    };

    return new F7_vue();
})();

F7_vue.buildIndexPage();

module.exports = F7_vue;



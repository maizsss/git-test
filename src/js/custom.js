// Init App
var myApp = new Framework7({
    tapHold:true, //长按保持
    // Modal Setting
    modalTitle: '提示',
    modalButtonOk: '确定',
    modalButtonCancel: '取消',
    modalPreloaderTitle: '正在载入...',
    //是否开启页面过渡动画
    animatePages: true,
    // notification settting
    notificationCloseOnClick: true, //设置为true之后，点击就可以关闭通知
    notificationTitle: '提示', //所有通知(notifications)的默认标题
    //物理按键回退
    pushState: true, //物理按键回退支持
    swipeBackPage: false, //滑动返回上一页(IOS)
    sortable: false, //排序
    swipeout: false, //滑动删除
    materialPreloaderSvg: '<div class="icon-loading"></div>', //preLoader
    dynamicPageUrl: '{{name}}',
    template7Pages: true,
    template7Data: {}
});

// Add main view
var mainView = myApp.addView('.view-main', {
    domCache: true //内联DOM
});

// Expose Internal DOM library
var $$ = Dom7;

// Show/hide preloader for remote ajax loaded pages
$$(document).on('ajaxStart', function (e) {
    myApp.showIndicator();
});
$$(document).on('ajaxComplete', function (e) {
    myApp.hideIndicator();
});
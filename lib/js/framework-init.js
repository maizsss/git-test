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
    dynamicPageUrl: '{{name}}'
});

// Expose Internal DOM library
var $$ = Dom7;

// Add main view
var mainView = myApp.addView('.view-main', {
    domCache: true //内联DOM
});

// Show/hide preloader for remote ajax loaded pages
$$(document).on('ajaxStart', function (e) {
    myApp.showIndicator();
});
$$(document).on('ajaxComplete', function () {
    myApp.hideIndicator();
});


//modal组件
//分享当前页面
//parameters = {title, description, icon, url}， callback: 分享触发时
myApp.shareCurrentPage = function(parameter, callback){
    //初始化分享弹框按钮模板
    var str = myWebview.checkAppInstalled("Wechat") === "true" ? '<div class="share-button col-25 icon-weixin" data-share-type="WechatMoments">微信朋友圈</div>' : '<div class="col-25"></div>';
    var html = '<div class="content-block">' +
        '<div class="row">' +
        '<div class="share-button col-25 icon-qzone" data-share-type="QZone">QQ空间</div>' +
        str +
        '<div class="col-25"></div>' +
        '<div class="col-25"></div>' +
        '</div>' +
        '</div>';
    //初始化按钮
    var buttons = [
        {
            text: '分享到',
            label: true,
            color: 'green'
        },
        {
            text: html,
            label: true,
        },
        {
            text: '取消',
            color: 'gray'
        },
    ];

    //调用分享弹框
    myApp.actions(buttons);

    //绑定点击分享js-api
    $$('.share-button').on('click', function () {
        //回调
        if(callback) callback();
        //关闭modal
        myApp.closeModal();
        //初始化对象
        var shareInfo = {
            "share_type": $$(this).data("share-type"),
            "title": parameter.title, //标题
            "content": parameter.description, //分享内容
            "imageUrl" : parameter.icon , //icon地址
            "url": parameter.url, //分享页地址
        };
        myWebview.share(JSON.stringify(shareInfo)); //分享API
    });
}
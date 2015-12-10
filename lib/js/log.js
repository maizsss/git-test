//log 日志模板
var logTemplate = {
    "profile":{
        "uid":global.profile.data.uid
    },
    "logs":{
        "error":[]
    }
};

//错误log上报（存储）
function webErrorReport(type, message, uri, line){
    //var errorInfoContainer;
    //var errorKey = 'ttErrorMessage_' + global.project.projectId; //cache key
    //
    ////myApp.alert(message); //debug
    //
    ////是否有缓存，无则创建
    //if(localStorage.getItem(errorKey) != null){
    //    errorInfoContainer = JSON.parse(localStorage.getItem(errorKey));
    //}else{
    //    errorInfoContainer = logTemplate;
    //}
    //
    //var errorInfo = {
    //    "type": type,
    //    "error_message" : message,
    //    "script_uri" : uri,
    //    "line_number" : line,
    //    "date": + new Date()
    //};
    //
    //if(!errorInfoContainer.hasOwnProperty("logs")){
    //    errorInfoContainer = logTemplate;
    //}
    //
    //errorInfoContainer.logs.error.push(errorInfo);
    //localStorage.setItem(errorKey, JSON.stringify(errorInfoContainer)); //加入缓存
    //webErrorReportPost();//上报到服务器

}


function webErrorReportPost(){
    var postUrl = "http://app.52tt.com/p/diagnostic/uploadlogs/" + global.profile.data.uid;
    var errorKey = 'ttErrorMessage_' + global.project.projectId; //cache key
    var errorInfoContainer = getCache(errorKey);
    if(errorInfoContainer != null){
        $$.post(postUrl, errorInfoContainer, function (data) {
            //myApp.alert("错误日志上报成功~");
        });
    }else{
        //myApp.alert("上报失败：没有检测到日志~");
    }
}

/* ===== console error info ===== */
window.onerror = function (errorMessage, scriptURI, lineNumber, columnNumber, errorObj) {
    webErrorReport('webError', errorMessage, scriptURI, lineNumber);
}

/* ===== cache process ===== */
function setCache(key, data) {
    if( typeof data =='object'){
        localStorage.setItem(key, JSON.stringify(data));
    }else {
        localStorage.setItem(key, data);
    }
}

function getCache(key) {
    return localStorage.getItem(key);
}
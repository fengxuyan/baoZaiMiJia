$(function () {
    var current_url = location.href;
    $('.weui-tabbar a').each(function () {
        if(current_url.indexOf($(this).attr('href'))>=0){
            $(this).addClass('weui-bar__item--on');
        }
    })
})
/**
 * Created by HoChine on 2017/1/29.
 */

(function () {
    init();
    function init() {
        fnMui();
    }

    function fnMui() {
        mui.init();


        socialAlert();          // mui弹出框
        socialScroll();
        function socialAlert() {
            $(".social1-list li").on('tap', function() {
                var head = "<header> <img src='../images/SocialAlertHead.png'> </header>";
                var body = '<section>'+
                                '<div class="titile">'+
                                    '<h3>Zaitsev Yaroslav</h3>'+
                                    '<h5>Web Designer. Kazan</h5>'+
                                '</div>'+
                                '<div class="box main">'+
                                    '<div class="box-item">'+
                                        '<h4>2560</h4>'+
                                        '<h5>LINKS</h5>'+
                                    '</div>'+
                                    '<div class="box-item">'+
                                        '<h4>4025</h4>'+
                                        '<h5>FOLLOWERS</h5>'+
                                    '</div>'+
                                    '<div class="box-item">'+
                                        '<h4>1278</h4>'+
                                        '<h5>FOLLOWING</h5>'+
                                    '</div>'+
                                '</div>'+
                            '</section>';
                var btnArray = ['<button class="btn mui-badge-green">CHAT</button>', '<button class="btn">Unfollow</button>'];
                mui.confirm(body, head, btnArray, function(e) {
                    console.log(1);
                })
            });

        }

        function socialScroll() {
            mui('#scroll').scroll({
                indicators: true //是否显示滚动条
            });
            /*mui('.mui-scroll-wrapper').scroll({
                deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
            });*/
        }
    }
















})()
//mui初始化


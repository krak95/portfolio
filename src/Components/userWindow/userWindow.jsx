import $ from "jquery"
function UserWindow(){
    $('.Screenstat').on('click',function(){
        $('.Screenstat').toggleClass('userwindow-open')
        $('.Screenstat ol').toggleClass('screenlist')
        $('.userinfo').toggleClass('userinfo-show')
        $('.pState').toggleClass('pState-show')
    })
    }
    
    export default UserWindow
/**
 * Created by Rick on 16/2/8.
 */
$(function(){

});
 function alert_success(){
         var txt=  "用户添加成功！";
                    window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.success);
       }
        function alert_warning(){
         var txt=  "用户添加失败！";
                    window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.warning);
       }
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function ()
{
    $('#contact-styl-submit').on("click", function(){
            $.ajax({
                url: 'home/process',
                data: $('#contact-styl').serialize(),
                type: "POST",
                success: function (data) {
                    alert(data);
                }
            });
            alert("!!");
            return false;
    });
});
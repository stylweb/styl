/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function ()
{
    manageScroll();
    $('#header-logo').hide();
    
    topWebsite = $('#website').position().top;
    topSupport = $('#support').position().top;
    topDesign = $('#design').position().top;
});

$(window).scroll(function()
{
    /* Website */
    
    if ($(window).scrollTop() >= topWebsite)
    {
            $('#header-logo').fadeIn('slow');
            $('#header-nav > ul> li').removeClass('active');
            $('#header-website').addClass('active');
    }
    else
    {
        $('#header-website').removeClass('active');
    }
    
    /* Design */
    
     if ($(window).scrollTop() >= topDesign)
    {
            $('#header-logo').fadeIn('slow');
            $('#header-nav > ul> li').removeClass('active');
            $('#header-design').addClass('active');
    }
    else
    {
        $('#header-design').removeClass('active');
    }
    
    /* Support */
    
     if ($(window).scrollTop() >= topSupport)
    {
            $('#header-logo').fadeIn('slow');
            $('#header-nav > ul> li').removeClass('active');
            $('#header-support').addClass('active');
    }
    else
    {
        $('#header-support').removeClass('active');
    }
    
    
    if ($(window).scrollTop() < topWebsite)
    {
            $('#header-logo').fadeOut('slow');
    }
});

function manageScroll()
{
    $('#header-website').on('click', function ()
    {
        $("body").animate({scrollTop: $('#website').position().top}, 'slow');
    });

    $('#header-design').on('click', function ()
    {
        $("body").animate({scrollTop: $('#design').position().top}, 'slow');
    });

    $('#header-support').on('click', function ()
    {
        $("body").animate({scrollTop: $('#support').position().top}, 'slow');
    });

    $('#header-website').on('click', function ()
    {
        $("body").animate({scrollTop: $('#website').position().top}, 'slow');
    });
}


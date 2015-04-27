/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function ()
{
    manageScroll();
    manageMobile();
    $('#header-logo').hide();
    
    topWebsite = $('#website').position().top;
    topSupport = $('#support').position().top;
    topDesign = $('#design').position().top;
    topContact = $('#contact').position().top;
    
    $('#header-banner-image').on('click', function(){
        $('#header-banner-image').addClass('color');
        $('#header').addClass('color');
        $('#header-banner').addClass('color');
        $('#header-nav').addClass('color');
        $('#header-logo').addClass('color');
    });
});

$(window).scroll(function()
{
    /* Website */
    
    if ($(window).scrollTop() >= topWebsite - 100)
    {
        headerLogo()
        $('#header-nav > ul> li').removeClass('active');
        $('#header-website').addClass('active');
    }
    else
    {
        $('#header-website').removeClass('active');
    }
    
    /* Design */
    
     if ($(window).scrollTop() >= topDesign - 100)
    {
            headerLogo()
            $('#header-nav > ul> li').removeClass('active');
            $('#header-design').addClass('active');
    }
    else
    {
        $('#header-design').removeClass('active');
    }
    
    /* Support */
    
     if ($(window).scrollTop() >= topSupport - 100)
    {
            headerLogo()
            $('#header-nav > ul> li').removeClass('active');
            $('#header-support').addClass('active');
    }
    else
    {
        $('#header-support').removeClass('active');
    }
    
    /* Contact */
     
     if ($(window).scrollTop() >= topContact - 100)
    {
            headerLogo()
            $('#header-nav > ul> li').removeClass('active');
            $('#header-contact').addClass('active');
    }
    else
    {
        $('#header-contact').removeClass('active');
    }
    
    
    if ($(window).scrollTop() < topWebsite)
    {
            $('#header-logo').fadeOut('slow');
    }
});

function headerLogo()
{
    $('#header-logo').stop(true).fadeIn('slow');
}

function manageScroll()
{
    $('#header-website').on('click', function ()
    {
        $("body, html").animate({scrollTop: $('#website').position().top}, 'slow');
    });

    $('#header-design').on('click', function ()
    {
        $("body, html").animate({scrollTop: $('#design').position().top}, 'slow');
    });

    $('#header-support').on('click', function ()
    {
        $("body, html").animate({scrollTop: $('#support').position().top}, 'slow');
    });

    $('#header-website').on('click', function ()
    {
        $("body, html").animate({scrollTop: $('#website').position().top}, 'slow');
    });
    
    $('#header-contact').on('click', function ()
    {
        $("body, html").animate({scrollTop: $('#contact').position().top}, 'slow');
    });
}

function manageMobile(){
    
    if($(window).width() <= 640)
    {
        $('#header-nav-mobile-button').on('click', function()
        {
           $('#header-nav-mobile-drop').toggleClass('active');
        });        
    }
}
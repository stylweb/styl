/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function ()
{
    manageScroll();
    manageMobile();
    $('#header-logo').removeClass('active');
    
    topWebsite = $('#website').position().top;
    topSupport = $('#support').position().top;
    topDesign = $('#design').position().top;
    topContact = $('#contact').position().top;
    
      /*setTimeout(function () {
        $('#header-banner-image').addClass('color');
        $('#header').addClass('color');
        $('#header-banner').addClass('color');
        $('#header-nav').addClass('color');
        $('#footer').addClass('color');
        $('#header-logo').addClass('color');
    }, 15000);*/
});

$(window).scroll(function()
{
    /* Website */
    
    if ($(window).scrollTop() >= topWebsite )
    {
        $('#header-nav > ul> li').removeClass('active');
        headerLogo();
        $('#header-website').addClass('active');
    }
    else
    {
        $('#header-website').removeClass('active');
    }
    
    /* Design */
    
     if ($(window).scrollTop() >= topDesign)
    {
            $('#header-nav > ul> li').removeClass('active');
            headerLogo();
            $('#header-design').addClass('active');
    }
    else
    {
        $('#header-design').removeClass('active');
    }
    
    /* Support */
    
     if ($(window).scrollTop() >= topSupport)
    {
            $('#header-nav > ul> li').removeClass('active');
            headerLogo();
            $('#header-support').addClass('active');
    }
    else
    {
        $('#header-support').removeClass('active');
    }
    
    /* Contact */
     
     if ($(window).scrollTop() >= topContact - 300)
    {
            $('#header-nav > ul> li').removeClass('active');
            headerLogo();
            $('#header-contact').addClass('active');
    }
    else
    {
        $('#header-contact').removeClass('active');
    }
    
    
    if ($(window).scrollTop() < topWebsite)
    {
            $('#header-logo').removeClass('active');
    }
    
     if($(window).scrollTop() >= 150)
         {
             $('#header-nav-mobile-button-logo').stop(true).fadeIn('slow');
         }
         
         else
         {
             $('#header-nav-mobile-button-logo').stop(true).fadeOut('slow');
         }
});

function headerLogo()
{
    $('#header-logo').addClass("active");
}

function manageScroll()
{
    $('#header-logo').on('click', function ()
    {
        $("body, html").animate({scrollTop: 0}, 'slow');
    });
    
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
    
        $('#header-nav-mobile-button').on('click', function()
        {
           $('#header-nav-mobile-drop').stop(true).toggleClass('active');
        });
        
        $('#header-nav-mobile-website').on('click', function(){
            $("body, html").animate({scrollTop: $('#website').position().top}, 'slow');
            $('#header-nav-mobile-drop').stop(true).toggleClass('active');
        });
        
         $('#header-nav-mobile-design').on('click', function(){
            $("body, html").animate({scrollTop: $('#design').position().top}, 'slow');
            $('#header-nav-mobile-drop').stop(true).toggleClass('active');
        });
        
         $('#header-nav-mobile-support').on('click', function(){
            $("body, html").animate({scrollTop: $('#support').position().top}, 'slow');
            $('#header-nav-mobile-drop').stop(true).toggleClass('active');
        });
        
         $('#header-nav-mobile-contact').on('click', function(){
            $("body, html").animate({scrollTop: $('#contact').position().top}, 'slow');
            $('#header-nav-mobile-drop').stop(true).toggleClass('active');
        });
        
         $('#header-nav-mobile-button-logo').on('click', function(){
            $("body, html").animate({scrollTop: 0}, 'slow');
            $('#header-nav-mobile-drop').stop(true).toggleClass('active');
        });
        
}
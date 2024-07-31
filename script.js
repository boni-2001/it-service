$(document).ready(function(){
    $(".dropdown1").click(function(){
        $(".nav-subpart1").toggleClass("dropdown-menu1");
    })
    $(".dropdown2").click(function(){
        $(".nav-subpart2").toggleClass("dropdown-menu2");
    })
    $(".dropdown3").click(function(){
        $(".nav-subpart3").toggleClass("dropdown-menu3");
    })
   
    $(".hamburger").click(function(){
         $(".navbar-navigation").toggleClass("menu");
     })
  
})
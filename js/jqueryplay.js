$(function() {
    $("#btn1").click(function() {
        $("#panel1").slideUp(1000).delay(1000).slideToggle(1000);
        $("#panel2").slideUp(1000);
        $("#panel3").slideUp(1000);
        $("#panel4").slideUp(1000);

    });


    $("#btn2").dblclick(function () {
        $("#panel2").fadeOut(1000);
    });


    $("#btn3").mouseover(function () {
        $("#panel3").toggleClass("highlighted");

    });
});



// slideUp, slideDown, slideToggle, show, hide, toggle, delay, fadeIn, fadeOut,
//     fadeToggle, addClass, removeClass, toggleClass, on, click, dblclick, mouseover, hover

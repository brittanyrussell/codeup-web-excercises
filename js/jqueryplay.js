$(function() {
    $("#btn1").click(function() {
        $("#panel1").slideUp(1000).delay(1000).slideToggle(1000);
        $("#panel2").slideUp(1000).delay(1000).slideToggle(1000);
        $("#panel3").slideUp(1000).delay(1000).slideToggle(1000);
        $("#panel4").slideUp(1000).delay(1000).slideToggle(1000);

    });


    $("#btn2").dblclick(function () {
        $("#panel1").fadeOut(1000);
        $("#panel2").fadeOut(3000);
        $("#panel3").fadeOut(1000);
        $("#panel4").fadeOut(3000);
        $("#panel1").fadeIn(3000);
        $("#panel2").fadeIn(1000);
        $("#panel3").fadeIn(3000);
        $("#panel4").fadeIn(1000);
    });


    $("#btn3").click(function () {
        $("#panel1").slideUp(3000).fadeIn(3000);
        $("#panel2").slideUp(3000).fadeIn(3000);
        $("#panel3").slideUp(3000).fadeIn(3000);
        $("#panel4").slideUp(3000).fadeIn(3000);
        });


    $("#btn4").click(function () {
        $("#panel1").fadeOut(3000).slideDown(3000);
        $("#panel2").slideUp(3000).fadeIn(3000);
        $("#panel3").fadeOut(3000).slideDown(3000);
        $("#panel4").slideUp(3000).fadeIn(3000);

    })
    $("#panel1").mouseover(function () {
        $("#panel1").toggleClass("highlighted");
    });
    $("#panel2").mouseover(function () {
        $("#panel2").toggleClass("highlighted");
    });
    $("#panel3").mouseover(function () {
        $("#panel3").toggleClass("highlighted");
    });
    $("#panel4").mouseover(function () {
        $("#panel4").toggleClass("highlighted");
    });
});



// slideUp, slideDown, slideToggle, show, hide, toggle, delay, fadeIn, fadeOut,
//     fadeToggle, addClass, removeClass, toggleClass, on, click, dblclick, mouseover, hover

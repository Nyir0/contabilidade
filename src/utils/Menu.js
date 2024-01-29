import $ from 'jquery';

$("#menu-mobile", () => {
    $("#close-menu").on("click", () => {
        $("#menu-mobile").css("left", "-245px");
    });
    $("#open-menu").on("click", () => {
        $("#menu-mobile").css("left", "0");
    })
})
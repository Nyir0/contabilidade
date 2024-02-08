import $ from 'jquery';

$(window).on("load", () => {
    $("#zap-btn1").on("click", () => {
        window.open("https://api.whatsapp.com/send?phone=5511972696636&text=Ol%C3%A1%20Leal%20Contabilidade,%20estou%20entrando%20em%20contato%20pelo%20site%20e%20gostaria%20de%20fazer%20um%20or%C3%A7amento%20!!!");
    })
    $("#zap-btn2").on("click", () => {
        window.open("https://api.whatsapp.com/send?phone=5511972696636&text=Ol%C3%A1%20Leal%20Contabilidade,%20estou%20entrando%20em%20contato%20pelo%20site%20e%20gostaria%20de%20fazer%20um%20or%C3%A7amento%20!!!");
    })
})
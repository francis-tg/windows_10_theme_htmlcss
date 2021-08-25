$("a").attr("href", "#");

$("#show-noty").click(function(e) {
    e.preventDefault();
    if ($(".notify-content").css("width") === "300px") {
        $(".notify-content").css("width", "0");
        $(".notify-content a").css("display", "none");
        $(".notify-content ").css("display", "none");
    } else {
        $(".notify-content").css("width", "300px");
        $(".notify-content a").css("display", "block");
        $(".notify-content").css("display", "block");
    }


});
$("#show-network").click(function(e) {
    e.preventDefault();
    if ($(".network").css("height") === "500px") {
        $(".network").css("height", "0");
        $(".network").css("display", "none");
    } else {
        $(".network").css("height", "500px");
        $(".network").css("display", "block");
    }


});
$("#start").click(function(e) {
    e.preventDefault();
    if ($("#start-pannel").css("height") === "620px") {
        $("#start-pannel").css("height", "0");
        $("#start-pannel").css("display", "none");
    } else {
        $("#start-pannel").css("height", "620px");
        $("#start-pannel").css("display", "block");
    }


});

// $("body").click(function(e) {
//     e.preventDefault();
//     if ($(".notify-content").css("width") === "300px") {
//         $(".notify-content").css("width", "0");
//         $(".notify-content a").css("display", "none");
//     }
//     if ($(".network").css("height") === "500px") {
//         $(".network").css("height", "0");
//         $(".network ").css("display", "none");
//     }
// });

// const getSettinglist = $('.network .settings')

// for (let x = 0; x < getSettinglist.length; x++) {
//     const element = getSettinglist[x];
//     console.log(element.id)

// }
// element.id.click(() => {
//     console.log("ok")
// })


$(document).ready(function () {



    $(document).on("mouseover", ".item .single-team-member", function () {

        $(this).children().eq(1).children().eq(0).addClass("hide-social")
        $(this).children().eq(1).children().eq(1).addClass("background")
        $(this).children().eq(0).css("opacity", "0.5")
    })


    $(document).on("mouseout", ".item .single-team-member", function () {

        $(this).children().eq(1).children().eq(0).removeClass("hide-social")
        $(this).children().eq(1).children().eq(1).removeClass("background")
        $(this).children().eq(0).css("opacity", "1")
    })
})





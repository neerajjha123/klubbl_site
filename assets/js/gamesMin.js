function arrowClick() {
    let e = !1,
        o = window.location.search,
        t = new URLSearchParams(o);
    if (t.has("auto_download") && "true" === t.get("auto_download") && (e = !0), !(e || window.location.href.indexOf("ludo1") > -1 || window.location.href.indexOf("ludo2") > -1)) {
        if ($(".main-gallery").offset()) var s = $(".main-gallery").offset().top - 180;
        $("html, body").stop().animate({
            scrollTop: s
        }, 400), window.ga && ga("send", "event", "click", "scroll-down-click", "Scroll Down Click")
    }
}
let clip = document.querySelectorAll(".vid");
for (let e = 0; e < clip.length; e++) clip[e].addEventListener("mouseenter", (function(o) {
    clip[e].play()
})), clip[e].addEventListener("mouseout", (function(o) {
    clip[e].pause()
}));
$(document).ready((function() {
    $(".onScrollDiv").hide(), $(".footerDownloadDiv").hide(), $(window).scroll((function() {
        $(".nav-container").addClass("header-blur"), $(".mobileMenu").addClass("header-blur"), $(".mobile-header").addClass("header-blur");
        var e = $(window).scrollTop() + $(window).innerHeight(),
            o = $(window).scrollTop();
        if (o < 20 && ($(".mobile-header").removeClass("header-blur"), $(".mobileMenu").removeClass("header-blur"), $(".nav-container").removeClass("header-blur")), $("#smsButton1").length && $("#smsButton2").length) {
            var t = $("#smsButton1").offset().top,
                s = $("#smsButton2").offset().top;
            o > t && e < s ? $(".onScrollDiv").fadeIn() : $(".onScrollDiv").fadeOut()
        }
        if ($("#smsButton1").length && !$("#smsButton2").length) {
            var n = $("#smsButton1").offset().top;
            !(o < n) && e > n ? $(".onScrollDiv").fadeIn() : $(".onScrollDiv").fadeOut()
        }!$("#smsButton1").length && $("#smsButton2").length && (e > (r = $("#smsButton2").offset().top) ? $(".onScrollDiv").fadeOut() : $(".onScrollDiv").fadeIn());
        if ($("#downloadAndBtn").length && $("#downloadAndBtn1").length) {
            if ($("#downloadIosBtn").length && $("#downloadIosBtn1").length) var i = $("#downloadIosBtn").offset().top,
                a = $("#downloadIosBtn1").offset().top;
            var l = $("#downloadAndBtn").offset().top,
                d = $("#downloadAndBtn1").offset().top;
            o > l && e < d || o > i && e < a ? $("#mobileHeaderNew").css("display", "flex").fadeIn() : $("#mobileHeaderNew").fadeOut()
        }
        if ($("#downloadAndBtn1").length && $("#cta-trigger").length) {
            if ("none" == $("#isIos").css("display")) var r = $("#downloadAndBtn1").offset().top;
            else r = $("#downloadIosBtn1").offset().top;
            e > r && o < r ? $("#mobileHeaderNew").fadeOut() : $("#mobileHeaderNew").css("display", "flex").fadeIn()
        }
        $("#buttonGif").length && (o > $("#buttonGif").offset().top ? $(".footerDownloadDiv").fadeIn("fast") : $(".footerDownloadDiv").fadeOut())
    })), $(".phoneNum").keypress((function(e) {
        var o = e.which;
        if ((8 != o || 32 == o) && (o < 48 || o > 57)) return !1;
        $(this).closest("div.phoneNumTextField").next(".errorText").css("display", "none"), $(".errorHome").css("display", "none"), $(this).closest("div.phoneNumTextField").css("border-color", "#FFFFFF"), $(this).closest("div.phoneNumTextField").find("#phoneNum").css("color", "#FFFFFF"), $(this).closest("div.phoneNumTextDivWrapper").next(".errorText").css("display", "none"), $(this).closest("div.phoneNumTextDivWrapper").css("border-color", "#FFFFFF"), $(this).closest("div.phoneNumTextDivWrapper").find("#phoneNum").css("color", "#FFFFFF")
    })), $(".sliding-div").hide(), $(".sliding-div").hide(), $("a.show-hide").click((function(e) {
        $(this).parent().next(".sliding-div").slideToggle("fast");
        var o = "-" == $(this).text() ? "+" : "-";
        $("a.show-hide").css("font-size", "30px"), $(this).hide().text(o).fadeIn("fast"), e.preventDefault()
    })), $(".play-read-more-text").hide();
    $(this).text();
    let e, o;
    $("a.play-read-more").click((function(e) {
        $(this).parent().next(".read-more").slideToggle("fast"), $(".play-read-more-text").show();
        $(this).text();
        window.scrollBy({
            top: 200,
            behavior: "smooth"
        }), e.preventDefault()
    })), $("a.play-read-less").click((function(e) {
        $(this).parent().next(".read-more").slideToggle("fast"), $(".play-read-more-text").hide();
        $(this).text();
        window.scrollBy({
            top: -200,
            behavior: "smooth"
        }), e.preventDefault()
    })), $("a.show-hide-home").click((function(e) {
        $(".sliding-div").hide(), e.preventDefault();
        var o = "";
        if ($(this).find(".arrow-down").length) {
            $(this).next("div.sliding-div").fadeIn("fast");
            o = "<img class='up-arrow' width='20px' height='auto' src='https://rush-web-assets.getrushapp.com/images/home/ArrowUp.png'>"
        } else if ($(this).find(".up-arrow").length) {
            $(this).next("div.sliding-div").hide();
            o = "<img class='arrow-down' width='20px' height='auto' src='https://rush-web-assets.getrushapp.com/images/home/ArrowDown.png'>"
        }
        $("div.text-sm.show-hide").html("<img class='arrow-down' width='20px' height='auto' src='https://rush-web-assets.getrushapp.com/images/home/ArrowDown.png'>"), ($(this).find(".up-arrow") || $(this).find(".arrow-down")) && ($(this).fadeIn("fast"), $(this).find("div.text-sm.show-hide").html(o))
    })), $(".game-options").hide(), $("a.game-type-mob").click((function(e) {
        $(this).parent().next(".game-options").slideToggle("fast"), $(this).parent().css({
            color: "linear-gradient(84.56deg, #FFA370 12.23%, #FFDF6C 94.22%",
            background: "linear-gradient(84.56deg, #FFA370 12.23%, #FFDF6C 94.22%)",
            "-webkit-background-clip": "text",
            "-webkit-text-fill-color": "transparent",
            "background-clip": "text;"
        }), $(this).parent(".menu.all-games").css("color", "#FFFFFF");
        var o = $(this).children().hasClass("minus-icon") ? "<img class='plus-icon' src='/assets/images/games/plus_icon.png'>" : "<img class='minus-icon' src='/assets/images/games/minus_icon.png'>";
        $(this).hide().html(o).fadeIn("fast"), e.preventDefault()
    })), $("a.menu").click((function(e) {
        $(this).parent().next(".game-options").slideToggle("fast");
        var o = $(this).children().hasClass("minus-icon") ? "<img class='plus-icon' src='/assets/images/games/plus_icon.png'>" : "<img class='minus-icon' src='/assets/images/games/minus_icon.png'>";
        $(this).hide().fadeIn("fast"), $(this).children().hasClass("minus-icon") ? $(this).children(".minus-icon").replaceWith(o) : $(this).children(".plus-icon").replaceWith(o), e.preventDefault()
    })), $(".game-options a.game-option").on("click", (function(e) {
        var o = "Home<span style='padding-left: 20px; padding-right: 10px;'><i class='fa fa-angle-right' aria-hidden='true'></i></span>" + $(this).parents(".game-options").prev().text().split(" ").slice(0, 2).join(" ") + "<span style='padding-left: 20px; padding-right: 10px;'><i class='fa fa-angle-right' aria-hidden='true'></i></span>" + $(this).text();
        $(".bread-crumb").html(o)
    })), $(".desktop-menu").hide(), $(".language-menu").hide(), $("a.games-dropdown").position() && (e = $("a.games-dropdown").position().left - 150), $("#language-change-btn").position() && (o = $("#language-change-btn").position().left - 120), $(".desktop-menu").css("margin-left", e), $(".language-menu").css("margin-left", o), $("a.games-dropdown").on("click", (function(e) {
        $(".desktop-menu").slideToggle("fast"), e.preventDefault()
    })), $("#language-change-btn").on("click", (function(e) {
        console.log("opening language menu"), $(".language-menu").slideToggle("fast"), e.preventDefault()
    })), $(document).on("click", (function(e) {
        $(e.target).closest(".desktop-menu").length || $(e.target).closest(".games-dropdown").length || $(e.target).closest(".plus-icon").length || $(e.target).closest(".plus-icon").length || ($(".game-options").is(":hidden") || $(".game-options").slideToggle("fast"), $(".desktop-menu").hide()), $(e.target).closest(".language-menu").length || $(e.target).closest("#language-change-btn").length || $(".language-menu").hide()
    })), $(".menu-list a").on("click", (function(e) {
        $(".hamburger-menu").css("visibility", "visible"), $(".hamburger-menu").children().closest(".game-options").slideToggle("fast"), $(this).closest(".game-options").slideToggle("fast");
        var o = $(document).height();
        $("body").append("<div id='overlay'></div>"), $("#overlay").height(o).css({
            background: "rgba(0, 0, 0, 0.8)",
            "backdrop-filter": "blur(8px)",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            "z-index": 1001
        }), e.preventDefault()
    })), $(".cross-icon-div a").on("click", (function(e) {
        $(".hamburger-menu").css("visibility", "hidden"), $(".hamburger-menu").children().closest(".game-options").slideToggle("fast"), $("#overlay").remove(), e.preventDefault()
    })), $(".downloadCta").on("click", (function(e) {
        var o = $(this).find(".buttonGif");
        o && (o.css("filter", "brightness(60%)"), setTimeout((function() {
            o.css("filter", "brightness(100%)")
        }), 800))
    })), $("a.see-more").on("click", (function(e) {
        e.preventDefault(), $(this).hasClass("see-more") ? ($(".faq-more").css("display", "block"), $(".rafbutton.smsButtonText").text("See Less"), $(this).removeClass("see-more").addClass("see-less")) : ($(".faq-more").css("display", "none"), $(".rafbutton.smsButtonText").text("See More"), $(this).removeClass("see-less").addClass("see-more"), $(".faq")[0].scrollIntoView())
    })), $(".raf-video").on("click", (function(e) {
        $(".popup-video").css("display", "block");
        document.querySelector("#popup-video").getBoundingClientRect();
        videoWidth = $(document).width() / 2 + 200, $(".popup-video span").css("left", videoWidth), $("#popup-video").trigger("play")
    })), $(".popup-video span").on("click", (function(e) {
        $("#popup-video").trigger("pause"), $(".popup-video").css("display", "none")
    })), $(".raf-video-mob").on("click", (function(e) {
        $(".popup-video-mob").css("display", "block"), $("#popup-video-mob").trigger("play"), $(".popup-video").remove()
    })), $(".popup-video-mob span").on("click", (function(e) {
        $("#popup-video-mob").trigger("pause"), $(".popup-video-mob").css("display", "none")
    }))
}));
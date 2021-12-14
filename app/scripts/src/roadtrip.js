// var vehicles = [
// 	{id: 1, name: "truck", title: "Work Truck", src: "images/vehicles/truck", people_src: "images/people/truck.png"},
// 	{id: 2, name: "van", title: "Van", src: "images/vehicles/van", people_src: "images/people/van.png"},
// 	{id: 3, name: "sedan", title: "Family Car", src: "images/vehicles/sedan", people_src: "images/people/sedan.png"},
// 	{id: 4, name: "sport", title: "Sports Car", src: "images/vehicles/sport", people_src: "images/people/sport.png"}
// ];

var vehicles = [
    { id: 1, name: "truck", title: " A" },
    { id: 2, name: "van", title: "B" },
    { id: 3, name: "sedan", title: "C" },
    { id: 4, name: "sport", title: "D" }
];

var answers = [];
var vehicleIndex = -1;
var currentScene = 1;
var prevScene = 0; // to determine when to unanimate
var currentLanguage = undefined;

$(document).ready(function() {
    $("body").keypress(function(event) {
        if (event.which == 56) {
            $(".one-page").moveTo(23);
        }
    });

    ///////////////////
    //  Load the english text file by default and handle spanish/english changes
    ///////////////////
    currentLanguage = ENGLISH;
    $(".language").click(function() {
        if ($(this).hasClass("espanol")) {
            $(this).removeClass("espanol");
            currentLanguage = ENGLISH;
            $("html").attr("lang", "en-US");
            $(this).text("En Español");
            $(".one-page").moveTo(1);
            changeAppLanguage();
        } else {
            $(this).addClass("espanol");
            currentLanguage = ESPANOL;
            $("html").attr("lang", "es-MX");
            $(this).text("In English");
            $(".one-page").moveTo(1);
            changeAppLanguage();
        }
    });

    var changeText = function() {
        // update the text on all the scenes based on the vehicle chosen
        $(".trigger").each(function() {
            var sceneNum = $(this).data("scene");
            var $scene = $("#trigger" + sceneNum);
            var scene_text = currentLanguage["scene" + sceneNum];
            if (scene_text) {
                var vehicle_text = scene_text[vehicles[vehicleIndex].name];
            }

            // the general scene text like progress and button
            if (scene_text) {
                $scene.find(".step_text").text(scene_text.step_text);
                $scene.find(".progress_text").text(scene_text.progress_text);
                $scene.find(".button_text").text(scene_text.button_text);

                // ARIA updates
                $scene.attr("aria-label", scene_text.aria_text);
            }

            // the vehicle specific text on the modals
            if (vehicle_text) {
                $scene.find(".question_text").html(vehicle_text.question_text);
                $scene.find(".option_good").html(vehicle_text.option_good);
                $scene.find(".option_bad").html(vehicle_text.option_bad);
                $scene.find(".good_answer").html(vehicle_text.good_answer);
                $scene.find(".bad_answer").html(vehicle_text.bad_answer);
            }
        });
    };

    var changeAppLanguage = function() {
        // app wide text
        $(".keepItMoving").text(currentLanguage.keepItMoving);
        $(".or").text(currentLanguage.orText);

        // update the slide-out menu
        $(".search").attr("placeholder", currentLanguage.searchWord);
        $(".shareWord").text(currentLanguage.shareWord);
        $(".faqWord").text(currentLanguage.faqWord);
        $(".contactWord").text(currentLanguage.contactWord);
        $(".menu").each(function(i) {
            $(this).text(currentLanguage.menuChoices[i]);
        });

        // update the text on the main page
        $("#trigger1")
            .find(".subtitle")
            .text(currentLanguage.scene1.subtitle);
        $("#trigger1")
            .find(".useArrows")
            .text(currentLanguage.scene1.useArrows);
        $("#trigger1")
            .find(".hitTheRoad")
            .text(currentLanguage.scene1.hitTheRoad);

        // change the text on the last page
        $(".last_sentence").text(currentLanguage.scene23.last_sentence);
        var i = 0;
        _.forEach(currentLanguage.scene23.final_set, function(elem, index) {
            $(".checkpoint")
                .eq(i)
                .find(".desc")
                .text(elem.good);
            i++;
        });
    };

    ///////////////////
    //  General navigation functions
    ///////////////////
    $(".moveDown").click(function($event) {
        closeModal();
        $(".one-page").moveDown();
        prevScene = currentScene;
        currentScene++;
    });

    $(".moveUp").click(function($event) {
        closeModal();
        $(".one-page").moveUp();
        unanimateScene(currentScene);
        currentScene--;
        prevScene = currentScene - 1;
    });

    ///////////////////
    //  General Animation functions
    ///////////////////
    var animateScene = function(sceneNum) {
        $(".scene" + sceneNum)
            .removeClass("right")
            .removeClass("left")
            .addClass("in");

        // lazy load images from the next scene
        lazyLoad(sceneNum + 1);

        // specially treat the first page
        if (sceneNum > 1) {
            $("#trigger" + sceneNum)
                .find(".vehicle")
                .removeClass("left")
                .removeClass("right");
        }
    };

    var unanimateScene = function(sceneNum) {
        $(".scene" + sceneNum).each(function() {
            $(this)
                .addClass($(this).data("origin"))
                .removeClass("in");
        });
        if (sceneNum > 1) {
            var $v = $("#trigger" + sceneNum).find(".vehicle");
            $v.addClass($v.data("origin"));
        }
    };

    /////////////////
    //  Select Vehicle
    //////////////////
    // Vehicle Selection Functions

    $(".right-arrow")
        .click(function() {
            // move the current vehicle to the left
            if (vehicleIndex >= 0) {
                var $past = $("#vehicle-choice").find(
                    "." + vehicles[vehicleIndex].name
                );
                $past.addClass("left");
            }

            vehicleIndex++;

            // move in the new current vehicle
            var $current = $("#vehicle-choice").find(
                "." + vehicles[vehicleIndex].name
            );
            $current.removeClass("right");
            $("#vehicle-name").text(vehicles[vehicleIndex].title);

            // hide/show the right arrow depending on the current vehicle
            $(".left-arrow").show();
            if (vehicleIndex == vehicles.length - 1) {
                $(".right-arrow").hide();
            }

            // change the image used for the vehicle throughout the site
            $(".app-vehicle")
                .attr("src", vehicles[vehicleIndex].src + ".png")
                .removeClass("truck van sedan sport")
                .addClass(vehicles[vehicleIndex].name);
            $(".app-vehicle-trunk").attr(
                "src",
                vehicles[vehicleIndex].src + "_trunk.png"
            );

            // change the image of the people throughout the site
            $(".people").attr("src", vehicles[vehicleIndex].people_src);

            // change the static mobile background throughout the site
            $(".trigger")
                .children("div")
                .each(function() {
                    var $this = $(this);
                    _.forEach(
                        $(this)
                            .attr("class")
                            .split(/\s+/),
                        function(elem) {
                            if (elem.indexOf("mobile-") > -1) {
                                $this.removeClass(elem);
                                $this.addClass(
                                    "mobile-" +
                                        $this.attr("id") +
                                        "-" +
                                        vehicles[vehicleIndex].name
                                );
                            }
                        }
                    );
                });

            // update the text on all the modals based on the vehicle chosen
            changeText();
        })
        .click();

    $(".left-arrow")
        .click(function() {
            // move the current vehicle to the left
            var $past = $("#vehicle-choice").find(
                "." + vehicles[vehicleIndex].name
            );
            $past.addClass("right");

            vehicleIndex--;

            // move in the new current vehicle
            var $current = $("#vehicle-choice").find(
                "." + vehicles[vehicleIndex].name
            );
            $current.removeClass("left");
            $("#vehicle-name").text(vehicles[vehicleIndex].title);

            // hide/show the right arrow depending on the current vehicle
            $(".right-arrow").show();
            if (vehicleIndex == 0) {
                $(".left-arrow").hide();
            }

            // change the image used for the vehicle throughout the site
            $(".app-vehicle")
                .attr("src", vehicles[vehicleIndex].src + ".png")
                .removeClass("truck van sedan sport")
                .addClass(vehicles[vehicleIndex].name);
            $(".app-vehicle-trunk").attr(
                "src",
                vehicles[vehicleIndex].src + "_trunk.png"
            );

            // change the image of the people throughout the site
            $(".people").attr("src", vehicles[vehicleIndex].people_src);

            // change the static mobile background throughout the site
            $(".trigger")
                .children("div")
                .each(function() {
                    var $this = $(this);
                    _.forEach(
                        $(this)
                            .attr("class")
                            .split(/\s+/),
                        function(elem) {
                            if (elem.indexOf("mobile-") > -1) {
                                $this.removeClass(elem);
                                $this.addClass(
                                    "mobile-" +
                                        $this.attr("id") +
                                        "-" +
                                        vehicles[vehicleIndex].name
                                );
                            }
                        }
                    );
                });

            // update the text on all the modals based on the vehicle chosen
            changeText();
        })
        .hide();

    //////////////
    //  Touch events on the first page and for scrolling
    //////////////
    var hammer = new Hammer(document.getElementById("vehicle"), {});
    hammer.on("swipeleft", function() {
        if ($(".right-arrow:visible").length) {
            $(".right-arrow").click();
        }
    });
    hammer.on("swiperight", function() {
        if ($(".left-arrow:visible").length) {
            $(".left-arrow").click();
        }
    });
    $("section").each(function() {
        var hammer = new Hammer($(this)[0], {
            threshold: 40
        });
        hammer.get("swipe").set({ direction: Hammer.DIRECTION_VERTICAL });
        hammer.on("swipeup", function() {
            _.throttle($(".one-page").moveDown(), 500);
        });
        hammer.on("swipedown", function() {
            _.throttle($(".one-page").moveUp(), 500);
        });
    });

    // $(".map-section").click(function(){
    // 	$(".one-page").moveDown();
    // });

    ///////////////
    //  Key press for vehicle rotation
    ///////////////
    // $("body").keypress(function(event){
    // 	// right
    // 	if (event.keyCode == 39){
    // 		if ($(".right-arrow:visible").length){
    // 			$(".right-arrow").click();
    // 		}
    // 	}
    // 	// left
    // 	if (event.keyCode == 37){
    // 		if ($(".left-arrow:visible").length){
    // 			$(".left-arrow").click();
    // 		}
    // 	}
    // });

    //////////////
    //  ONEPAGE & Scene Animation Functions
    //////////////

    $(".one-page").onepage_scroll({
        sectionContainer: "section",
        easing: "ease",
        animationTime: 900,
        pagination: false,
        updateURL: false,
        loop: false,
        beforeMove: function(index) {},
        afterMove: function(index) {
            closeModal();
            animateScene(index);
            prevScene = currentScene;
            currentScene = index;
            if (prevScene > currentScene) {
                unanimateScene(prevScene);
            }
        }
    });

    //////////////////
    //  Lazy Load
    //////////////////
    var lazyLoad = function(scene) {
        $("#trigger" + scene)
            .find(".lazy")
            .each(function() {
                $(this).css(
                    "background-image",
                    "url(" + $(this).data("original") + ")"
                );
                $(this).addClass("fullscreen-bg");
            });
    };

    //////////////////
    //  Hamburger
    //////////////////
    $(".hamburger").click(function() {
        $(".side-menu").toggleClass("open");
    });

    //////////////////
    // Modals
    //////////////////

    var openModal = function(modal, $event) {
        $("#" + modal)
            .next()
            .show();
        $("#" + modal).show();
        $(".modal-icon").attr("src", "images/modal/icon.png");
        $(".answer").hide();
        $(".question").show();
        $(".action.animated").removeClass("animated");
    };

    var closeModal = function() {
        $(".modal_mask").hide();
        $(".modal").hide();
        $(".action").addClass("animated");
    };

    $(".modal_mask").click(function() {
        closeModal();
    });

    $(".open_modal").click(function($event) {
        var modal = $(this).data("modal");
        openModal(modal, $event);
    });

    $(".close_modal").click(function() {
        closeModal();
    });

    //////////////////
    //   Modal choices
    //////////////////
    $(".modal .good").click(function() {
        var checkNum = 0;
        if (currentScene - 2 < 5) {
            checkNum = currentScene - 2;
        } else {
            checkNum = currentScene / 2;
        }
        answers[checkNum] = 1;
        $(".checkpoint")
            .eq(checkNum)
            .find(".icon")
            .removeClass("bad")
            .addClass("good");

        $(".checkpoint")
            .eq(checkNum)
            .find(".desc")
            .text(
                currentLanguage.scene23.final_set["final" + (checkNum + 1)].good
            );

        $(".modal-icon").attr("src", "images/modal/icon-good.png");
        $(".question").hide();
        $(".good-answer").show();
    });

    $(".modal .bad").click(function() {
        var checkNum = 0;
        if (currentScene - 2 < 4) {
            checkNum = currentScene - 2;
        } else {
            checkNum = currentScene / 2;
        }
        answers[checkNum] = 0;
        $(".checkpoint")
            .eq(checkNum)
            .find(".icon")
            .removeClass("good")
            .addClass("bad");
        $(".checkpoint")
            .eq(checkNum)
            .find(".desc")
            .text(
                currentLanguage.scene23.final_set["final" + (checkNum + 1)].bad
            );
        $(".modal-icon").attr("src", "images/modal/icon-bad.png");
        $(".question").hide();
        $(".bad-answer").show();
    });

    // set the initial text
    changeAppLanguage();

    // lazy load scene 2
    lazyLoad(2);

    // hide things on mobile devices
    var iPhone = /iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    var android = /android/i.test(navigator.userAgent.toLowerCase());
    var width = window.screen.width;
    if (iPhone || android || width < 767) {
        $(".app-vehicle").hide();
        $(".app-vehicle-trunk").hide();
        $(".cart").hide();
        $(".air").hide();
        $(".oil").hide();
        $(".bus").hide();
    }

    // scroll to the top, which gets stuck under the browser info on iphone sometimes
    $(window).animate({
        scrollTop: 0
    });
});

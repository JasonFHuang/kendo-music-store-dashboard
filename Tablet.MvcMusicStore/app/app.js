﻿;

"use strict";

(function () {
    var app = $.sammy('#main', function () {

        $(".sales-album, .nav-sales").click(function (e) {
            e.preventDefault();
            e.stopPropagation();
            window.location = "#/sales";

        });

        $(".social-album, .nav-social").click(function (e) {
            e.preventDefault();
            e.stopPropagation();
            window.location = "#/social";

        });

        $(".charts-album, .nav-music").click(function (e) {
            e.preventDefault();
            e.stopPropagation();
            window.location = "#/";

        });

        $("#main-header, .main-header-pennant").click(function (e) {
            e.preventDefault();
            e.stopPropagation();
            window.location = "#/";
            
        });


        this.get('#/', function (context) {
            this.partial('app/views/main.html?v=1', null, function () {

                createMainView();

                $(".main-nav-item-selected").removeClass("main-nav-item-selected");
                $(".main-nav-item-icon-selected").removeClass("main-nav-item-icon-selected");
                $(".nav-music-icon").addClass("main-nav-item-icon-selected");
                $(".nav-music").addClass("main-nav-item-selected");

            });
        });

        this.get('#/social', function (context) {
            this.partial('app/views/social.html?v=1', null, function () {

                createSocialView();

                $(".main-nav-item-selected").removeClass("main-nav-item-selected");
                $(".main-nav-item-icon-selected").removeClass("main-nav-item-icon-selected");
                $(".nav-social-icon").addClass("main-nav-item-icon-selected");
                $(".nav-social").addClass("main-nav-item-selected");

            });
        });

        this.get('#/music', function (context) {
            this.partial('app/views/music.html?v=1', null, function () {

                createMusicView();

                $(".main-nav-item-selected").removeClass("main-nav-item-selected");
                $(".main-nav-item-icon-selected").removeClass("main-nav-item-icon-selected");
                $(".nav-music-icon").addClass("main-nav-item-icon-selected");
                $(".nav-music").addClass("main-nav-item-selected");

            });
        });

        this.get('#/sales', function (context) {

            this.partial('app/views/sales.html?v=1.1', null, function () {

                createSalesView();

                $(".main-nav-item-selected").removeClass("main-nav-item-selected");
                $(".main-nav-item-icon-selected").removeClass("main-nav-item-icon-selected");
                $(".nav-sales-icon").addClass("main-nav-item-icon-selected");
                $(".nav-sales").addClass("main-nav-item-selected");

            });
        });

    });

    $(function () {
        $(document).data("kendoSkin", "uniform");
        app.run('#/');

    });

})()


var jsWidget = (function (window, $, _, jwplayer, jst) {

    var JW_API = '//content.jwplatform.com';
    function _setup(playerdiv, tilediv, titlediv) {

        //start by getting the metadata and sources for the initial item.
        function _init() {
            $.ajax({
                type: "GET",
                url: "https://content.jwplatform.com/feeds/f49AJ8N4.json",
                processData: false,
                dataType: "json",
                success: _setupPlayer,
                error: function (e) {
                    console.log("Error downloading feed");
                },
                fail: function (r) {
                    console.log("Error downloading feed");
                }
            });
        }

        // then, once we have the metadata and sources,
        // set up player and add a listener on playlistitem
        // this will fetch a new feed for each new playlist item when it is loaded
        function _setupPlayer(item) {

            jwplayer(playerdiv).setup(item);

            jwplayer(playerdiv).on('playlistItem', function (evt) {
                $.ajax({
                    type: "GET",
                    url: "https://content.jwplatform.com/feeds/f49AJ8N4.json",
                    processData: false,
                    dataType: "json",
                    success: _updateTiles,
                    error: function (e) {
                        console.log("Error downloading feed");
                    },
                    fail: function (r) {
                        console.log("Error downloading feed");
                    }
                }).done(function () {

                    $("#player").hide();
                    $(".hero-feed").slick({
                        dots: true,
                        infinite: true,
                        centerMode: true,
                        variableWidth: true,
                        slidesToScroll: 1,
                        responsive: [
                            {
                                
                            }
                        ]
                    });

                    $(".jw-feed").slick({
                        dots: false,
                        infinite: false,
                        slidesToShow: 4,
                        slidesToScroll: 4,
                        responsive: [
                            {
                                breakpoint: 1024,
                                settings: {
                                    slidesToShow: 3,
                                    slidesToScroll: 3
                                }
                            },
                            {
                                breakpoint: 768,
                                settings: {
                                    slidesToShow: 2,
                                    slidesToScroll: 2
                                }
                            },
                            {
                                breakpoint: 640,
                                settings: {
                                    slidesToShow: 1,
                                    slidesToScroll: 1
                                }
                            }
                        ]
                    });

                    var timer;
                    $(".jw-option").hover(
                            function () {

                                $(this).addClass("expanded")
                                if ($(this).find(".menu-layer").length <= 0) {
                                    timer = setTimeout(function () {

                                        $('.jw-metadata-container p', ".jw-option.expanded").slideDown('slow');
                                    }, 500);

                                }

                            },
                            function () {
                                clearTimeout(timer);
                                $('.jw-metadata-container p').slideUp('slow');
                                $(".jw-option").removeClass("expanded")

                            }
                    );

                    $(".jw-option .list-menu").click(function () {

                        var parent = $(this).parents('.jw-option');
                        if ($(parent).find(".menu-layer").length > 0) {
                            $(".menu-layer", parent).remove();
                            $('.jw-metadata-container p', parent).slideDown('slow');
                        } else {
                            $(parent).append('<div class="menu-layer"><p>Menu</p></div>');
                            $('.jw-metadata-container p', parent).slideUp('slow');
                        }
                    });
                });
            });
        }
        //time formatting for media duration
        function _tdur(s1) {
            if (s1 === "")
                return s1;
            var h1 = Math.floor(s1 / (60 * 60));
            s1 %= 60 * 60;
            var m1 = Math.floor(s1 / 60);
            s1 %= 60;
            var h2 = h1 ? h1 + ':' : '',
                    m2 = h1 && m1 < 10 ? '0' + m1 : m1,
                    s2 = s1 < 10 ? '0' + s1 : s1;
            return h2 + m2 + ':' + s2;
        }

        //generate the feed url the feed url
//        function _getFeed(media_id) {
//            return [JW_API, "feed.json?" + _parameterize({feed_id: feed_id, related_video: media_id})].join("/");
//        }

        // turn a simple object into a parameter string
        function _parameterize(params) {
            return _.reduce(params, function (memo, key, val) {
                memo.push(val + '=' + encodeURIComponent(key));
                return memo;
            },
                    []
                    ).join('&');
        }

        // when the feed loads, update the page
        function _updateTiles(data) {
            //to use rss feed:
            //var $xml = $(data);
            // use jwplayer rss parser to parse the Media RSS, then set up the player with the item on click
            //data= jwplayer.utils.rssparser.parse($xml[0].children[0]);
            // $("#" + titlediv).html($xml.find('title').first().text());
            //$("#" + titlediv).html(data.title);
//            parent = $("#" + tilediv);
            parent = $(".jw-feed");
            parent.empty();

            hero = $(".hero-feed");
            hero.empty();
            if (_.size(data.playlist) === 0) {
                _addTemplate(jst['templates/error.hbs'], {}, parent);
                _addTemplate(jst['templates/error.hbs'], {}, hero);
            } else {
                _.each(data.playlist, function (item, i) {
                    var id = "item" + i;
                    var templateData = {
                        id: id,
                        title: item.title,
                        desc: item.description,
                        dur: _tdur(item.duration || item.sources[0].duration || ""),
                        image: item.image
                    };
                    _addTemplate(jst['templates/item.hbs'], templateData, parent);
                    _addTemplate(jst['templates/hero-item.hbs'], templateData, hero);
//                    $("#" + id).click(function () {
//                        jwplayer(playerdiv).load(item);
//                    });
                });

            }
        }

        //apply data to a template, then add it to a parent element
        function _addTemplate(itemTemplate, data, parent) {
            var html = itemTemplate(data);
            parent.append(html);
        }

//        _init(media_id);
        _init();
    }

    return {
        setup: _setup
    };

})(window, $, _, window.jwplayer, JST);

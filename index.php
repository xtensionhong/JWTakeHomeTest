<!DOCTYPE html>

<html>
    <head>
        <meta charset="UTF-8">
        <title>Philip Take Home Test</title>
        <link rel="stylesheet" href="./public/build/master.min.css" />
        <!--<link rel="stylesheet" href="./public/css/master.css" />-->
    </head>
    <body>
        <div class="full-width row header">
            <div class="column large-12">
                <a href="#" class="logo"><img src="public/assets/logo.svg" title=""></a>
            </div>
        </div>

        <div class="full-width row hero-slider no-padding">
            <div class="column large-12">
                <div class="hero-feed">
                    
                </div> 
            </div>
        </div>



        <div class="row feed-slider full-width">
            <div class="column large-12">
                <div class="jw-feed-container">
                    <h2 id="feedtitle" class="jw-feed-title">Documentaries</h2>
                    <div id="feed" class="jw-feed"></div>
                </div>
            </div>

        </div>

        <div class="row feed-slider full-width">
            <div class="column large-12">
                <div class="jw-feed-container">
                    <h2 id="feedtitle" class="jw-feed-title">Lives Events</h2>
                    <div id="feed" class="jw-feed"></div>
                </div>
            </div>

        </div>

        <div class="row feed-slider full-width">
            <div class="column large-12">
                <div class="jw-feed-container">
                    <h2 id="feedtitle" class="jw-feed-title">Short Films</h2>
                    <div id="feed" class="jw-feed"></div>
                </div>
            </div>

        </div>


        <div class="full-width  footer">

        </div>
        <!-- player -->
        <div class="player-container" style="">
            <div id="player"></div>

        </div>
        <!-- -->

        <script src="https://content.jwplatform.com/libraries/8sEtLVJc.js"></script>
        <script src="https://code.jquery.com/jquery-2.2.0.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min.js"></script>
        <script  src="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.5/handlebars.min.js"></script>

        
        <script src="dest/templates.js"></script>
        <script src="dest/feeds_harness.js"></script>
        <script src="dest/slick.min.js"></script>
        

        <script>
            var playerDiv = "player",
                    feedDiv = "feed",
                    feedTitleDiv = "feedtitle";
            jsWidget.setup(playerDiv, feedDiv, feedTitleDiv);

            $(document).ready(function () {
                

            });

        </script>
    </body>
</html>

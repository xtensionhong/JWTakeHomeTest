this.JST=this.JST||{},this.JST["templates/error.hbs"]=Handlebars.template({compiler:[7,">= 4.0.0"],main:function(container,depth0,helpers,partials,data){return'<div id="error" class="jw-feed-error">\n  No Recommendations Found\n</div>'},useData:!0}),this.JST["templates/hero-item.hbs"]=Handlebars.template({compiler:[7,">= 4.0.0"],main:function(container,depth0,helpers,partials,data){var helper,alias1=null!=depth0?depth0:{},alias2=helpers.helperMissing,alias4=container.escapeExpression;return"<div id="+alias4((helper=null!=(helper=helpers.id||(null!=depth0?depth0.id:depth0))?helper:alias2,"function"==typeof helper?helper.call(alias1,{name:"id",hash:{},data:data}):helper))+' class="jw-hero-option">\n    <div class="jw-hero-container" style="background-image:url('+alias4((helper=null!=(helper=helpers.image||(null!=depth0?depth0.image:depth0))?helper:alias2,"function"==typeof helper?helper.call(alias1,{name:"image",hash:{},data:data}):helper))+')">\n        <img class="play-btn" src="public/assets/play.svg"/>\n        <div class="jw-hero-metadata-container">\n            <h2 class="jw-media-title">'+alias4((helper=null!=(helper=helpers.title||(null!=depth0?depth0.title:depth0))?helper:alias2,"function"==typeof helper?helper.call(alias1,{name:"title",hash:{},data:data}):helper))+'</h2>\n            <p class="jw-media-description">'+alias4((helper=null!=(helper=helpers.desc||(null!=depth0?depth0.desc:depth0))?helper:alias2,"function"==typeof helper?helper.call(alias1,{name:"desc",hash:{},data:data}):helper))+"</p> \n        </div>\n    </div>\n\t\n</div>"},useData:!0}),this.JST["templates/item.hbs"]=Handlebars.template({compiler:[7,">= 4.0.0"],main:function(container,depth0,helpers,partials,data){var helper,alias1=null!=depth0?depth0:{},alias2=helpers.helperMissing,alias3="function",alias4=container.escapeExpression;return"<div id="+alias4((helper=null!=(helper=helpers.id||(null!=depth0?depth0.id:depth0))?helper:alias2,typeof helper===alias3?helper.call(alias1,{name:"id",hash:{},data:data}):helper))+' class="jw-option">\n\t<div class="jw-thumbnail-container" style="background-image:url('+alias4((helper=null!=(helper=helpers.image||(null!=depth0?depth0.image:depth0))?helper:alias2,typeof helper===alias3?helper.call(alias1,{name:"image",hash:{},data:data}):helper))+')">\n                <span class="list-menu"></span>\n\t\t<!--<img class="jw-thumbnail" src="'+alias4((helper=null!=(helper=helpers.image||(null!=depth0?depth0.image:depth0))?helper:alias2,typeof helper===alias3?helper.call(alias1,{name:"image",hash:{},data:data}):helper))+'"/>-->\n\t</div>\n\t<div class="jw-metadata-container">\n\t\t<h3 class="jw-media-title">'+alias4((helper=null!=(helper=helpers.title||(null!=depth0?depth0.title:depth0))?helper:alias2,typeof helper===alias3?helper.call(alias1,{name:"title",hash:{},data:data}):helper))+'</h3>\n\t\t<p class="jw-media-description">'+alias4((helper=null!=(helper=helpers.desc||(null!=depth0?depth0.desc:depth0))?helper:alias2,typeof helper===alias3?helper.call(alias1,{name:"desc",hash:{},data:data}):helper))+'</p>\n\t\t<!--<time class="jw-media-duration">'+alias4((helper=null!=(helper=helpers.dur||(null!=depth0?depth0.dur:depth0))?helper:alias2,typeof helper===alias3?helper.call(alias1,{name:"dur",hash:{},data:data}):helper))+"</time>-->\n\t</div>\n</div>"},useData:!0});
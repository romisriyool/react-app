
jQuery(function () {

    window.onload = function() {

        var pageTitle = document.title;
        var attentionMessage = '*Come Back!';
        var blinkEvent = null;
      
        document.addEventListener('visibilitychange', function(e) {
          var isPageActive = !document.hidden;
      
          if(!isPageActive){
            blink();
          }else {
            document.title = pageTitle;
            clearInterval(blinkEvent);
          }
        });
      
        function blink(){
          blinkEvent = setInterval(function() {
            if(document.title === attentionMessage){
              document.title = pageTitle;
            }else {
              document.title = attentionMessage;
            }
          }, 100);
        }
      };



    // jQuery('.mobile-header .mobile-menu-open').click(function (event) {
    //     event.preventDefault();
    //     jQuery('.qodef-mobile-side-area').addClass("opened");
    // });


    // jQuery('.mobile-header .mobile-menu-close').click(function (event) {
    //     event.preventDefault();
    //     jQuery('.qodef-mobile-side-area.opened').removeClass("opened");
    // });




    setREVStartSize({ c: 'rev_slider_9_1', rl: [1920, 1720, 1200, 600], el: [900, 645, 600, 720], gw: [1240, 1024, 600, 480], gh: [900, 645, 600, 720], type: 'standard', justify: '', layout: 'fullscreen', offsetContainer: '', offset: '', mh: "0" });
    var revapi9,
        tpj;
    jQuery(function () {
        tpj = jQuery;
        if (tpj("#rev_slider_9_1").revolution == undefined) {
            revslider_showDoubleJqueryError("#rev_slider_9_1");
        } else {
            revapi9 = tpj("#rev_slider_9_1").show().revolution({
                jsFileLocation: "//easymeals.qodeinteractive.com/wp-content/plugins/revslider/public/assets/js/",
                sliderLayout: "fullscreen",
                duration: "5000ms",
                visibilityLevels: "1920,1720,1200,600",
                gridwidth: "1240,1024,600,480",
                gridheight: "900,645,600,720",
                editorheight: "900,645,600,720",
                responsiveLevels: "1920,1720,1200,600",
                disableProgressBar: "on",
                navigation: {
                    onHoverStop: false,
                    bullets: {
                        enable: true,
                        tmp: "",
                        style: "custom_dark",
                        hide_onmobile: true,
                        hide_under: "1024px",
                        h_align: "left",
                        v_align: "center",
                        h_offset: -190,
                        v_offset: -40,
                        direction: "vertical",
                        container: "layergrid"
                    }
                },
                fallbacks: {
                    allowHTML5AutoPlayOnAndroid: true
                },
            });
        }

    });


});











function setREVStartSize(e) {
    try {
        var pw = document.getElementById(e.c).parentNode.offsetWidth,
            newh;
        pw = pw === 0 || isNaN(pw) ? window.innerWidth : pw;
        e.tabw = e.tabw === undefined ? 0 : parseInt(e.tabw);
        e.thumbw = e.thumbw === undefined ? 0 : parseInt(e.thumbw);
        e.tabh = e.tabh === undefined ? 0 : parseInt(e.tabh);
        e.thumbh = e.thumbh === undefined ? 0 : parseInt(e.thumbh);
        e.tabhide = e.tabhide === undefined ? 0 : parseInt(e.tabhide);
        e.thumbhide = e.thumbhide === undefined ? 0 : parseInt(e.thumbhide);
        e.mh = e.mh === undefined || e.mh == "" || e.mh === "auto" ? 0 : parseInt(e.mh, 0);
        if (e.layout === "fullscreen" || e.l === "fullscreen")
            newh = Math.max(e.mh, window.innerHeight);
        else {
            e.gw = Array.isArray(e.gw) ? e.gw : [e.gw];
            for (var i in e.rl) if (e.gw[i] === undefined || e.gw[i] === 0) e.gw[i] = e.gw[i - 1];
            e.gh = e.el === undefined || e.el === "" || (Array.isArray(e.el) && e.el.length == 0) ? e.gh : e.el;
            e.gh = Array.isArray(e.gh) ? e.gh : [e.gh];
            for (var i in e.rl) if (e.gh[i] === undefined || e.gh[i] === 0) e.gh[i] = e.gh[i - 1];

            var nl = new Array(e.rl.length),
                ix = 0,
                sl;
            e.tabw = e.tabhide >= pw ? 0 : e.tabw;
            e.thumbw = e.thumbhide >= pw ? 0 : e.thumbw;
            e.tabh = e.tabhide >= pw ? 0 : e.tabh;
            e.thumbh = e.thumbhide >= pw ? 0 : e.thumbh;
            for (var i in e.rl) nl[i] = e.rl[i] < window.innerWidth ? 0 : e.rl[i];
            sl = nl[0];
            for (var i in nl) if (sl > nl[i] && nl[i] > 0) { sl = nl[i]; ix = i; }
            var m = pw > (e.gw[ix] + e.tabw + e.thumbw) ? 1 : (pw - (e.tabw + e.thumbw)) / (e.gw[ix]);

            newh = (e.type === "carousel" && e.justify === "true" ? e.gh[ix] : (e.gh[ix] * m)) + (e.tabh + e.thumbh);
        }

        if (window.rs_init_css === undefined) window.rs_init_css = document.head.appendChild(document.createElement("style"));
        document.getElementById(e.c).height = newh;
        window.rs_init_css.innerHTML += "#" + e.c + "_wrapper { height: " + newh + "px }";
    } catch (e) {
        console.log("Failure at Presize of Slider:" + e)
    }
};




var htmlDivCss = unescape("%40media%20only%20screen%20and%20%28%20max-width%3A%201440px%20%29%20%7B%0A%20%20.page-id-540%20.tp-bullets.custom_dark.nav-pos-ver-center%20%7B%0A%20%20%20%20left%3A%205%25%20%21important%3B%0A%20%20%7D%0A%7D%0A%0A%40media%20only%20screen%20and%20%28%20max-width%3A%201280px%20%29%20%7B%0A%20%20.page-id-540%20.tp-bullets.custom_dark.nav-pos-ver-center%20%7B%0A%20%20%20%20left%3A%208.5%25%20%21important%3B%0A%20%20%7D%0A%7D");
var htmlDiv = document.getElementById('rs-plugin-settings-inline-css');
if (htmlDiv) {
    htmlDiv.innerHTML = htmlDiv.innerHTML + htmlDivCss;
} else {
    var htmlDiv = document.createElement('div');
    htmlDiv.innerHTML = '<style>' + htmlDivCss + '</style>';
    document.getElementsByTagName('head')[0].appendChild(htmlDiv.childNodes[0]);
}


var htmlDivCss = unescape("%23rev_slider_9_1_wrapper%20.custom_dark.tp-bullets%20%7B%0A%20%20counter-reset%3A%20section%3B%0A%7D%0A%23rev_slider_9_1_wrapper%20.custom_dark%20.tp-bullet%3Abefore%20%7B%0A%20%20counter-increment%3A%20section%3B%0A%20%20content%3A%20%220%22%20counter%28section%29%3B%0A%20%20position%3A%20absolute%3B%0A%20%20color%3A%20%23000%3B%0A%20%20left%3A%20-25px%3B%0A%20%20top%3A%20-3px%3B%0A%20%20line-height%3A%201em%3B%0A%20%20font-size%3A%2014px%3B%0A%20%20font-weight%3A%20600%3B%0A%7D%0A%23rev_slider_9_1_wrapper%20.custom_dark%20.tp-bullet%20%7B%0A%20%20padding%3A%204px%200%3B%0A%20%20position%3A%20relative%3B%0A%20%20cursor%3A%20pointer%3B%0A%20%20box-sizing%3Acontent-box%3B%0A%20%20background-color%3A%20transparent%3B%0A%20%20width%3A%2022px%3B%0A%20%20height%3A%20auto%3B%0A%7D%0A%0A%23rev_slider_9_1_wrapper%20.custom_dark%20.tp-bullet%3Aafter%20%7B%0A%20%20content%3A%20%27%27%3B%0A%20%20position%3A%20absolute%3B%0A%20%20top%3A%2050%25%3B%0A%20%20left%3A%200%3B%0A%20%20transform%3A%20translateY%28-50%25%29%3B%0A%20%20width%3A%2022px%3B%0A%20%20height%3A%201px%3B%0A%20%20background-color%3A%20%23000%3B%0A%20%20transition%3A%20all%20.2s%20ease-in%3B%0A%7D%0A%23rev_slider_9_1_wrapper%20.custom_dark%20.tp-bullet%3Ahover%2C%0A%23rev_slider_9_1_wrapper%20.custom_dark%20.tp-bullet.selected%2C%0A%23rev_slider_9_1_wrapper%20.custom_dark%20.tp-bullet%3Ahover%3Aafter%2C%0A%23rev_slider_9_1_wrapper%20.custom_dark%20.tp-bullet.selected%3Aafter%20%7B%0A%09width%3A%2052px%3B%0A%20%20transition%3A%20all%20.2s%20ease-in%3B%0A%7D%0A");
var htmlDiv = document.getElementById('rs-plugin-settings-inline-css');
if (htmlDiv) {
    htmlDiv.innerHTML = htmlDiv.innerHTML + htmlDivCss;
} else {
    var htmlDiv = document.createElement('div');
    htmlDiv.innerHTML = '<style>' + htmlDivCss + '</style>';
    document.getElementsByTagName('head')[0].appendChild(htmlDiv.childNodes[0]);
}


var htmlDivCss = unescape("%0A%0A%0A");
var htmlDiv = document.getElementById('rs-plugin-settings-inline-css');
if (htmlDiv) {
    htmlDiv.innerHTML = htmlDiv.innerHTML + htmlDivCss;
} else {
    var htmlDiv = document.createElement('div');
    htmlDiv.innerHTML = '<style>' + htmlDivCss + '</style>';
    document.getElementsByTagName('head')[0].appendChild(htmlDiv.childNodes[0]);
}
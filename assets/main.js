 /**
 *
 * Camden Central School District - Avon
 * @link http://iskenya.redesign.finalsite.com
 * Built By: Jim Peterman
 * Project Manager: Shanda Cuscovitch
 * Designer: Juliane Hamilton
 *
 */

window.Modernizr=function(e,t,n){function o(e){g.cssText=e}function r(e,t){return typeof e===t}function i(e,t){return!!~(""+e).indexOf(t)}function a(e,t){for(var o in e){var r=e[o];if(!i(r,"-")&&g[r]!==n)return"pfx"==t?r:!0}return!1}function c(e,t,o){for(var i in e){var a=t[e[i]];if(a!==n)return o===!1?e[i]:r(a,"function")?a.bind(o||t):a}return!1}function s(e,t,n){var o=e.charAt(0).toUpperCase()+e.slice(1),i=(e+" "+E.join(o+" ")+o).split(" ");return r(t,"string")||r(t,"undefined")?a(i,t):(i=(e+" "+x.join(o+" ")+o).split(" "),c(i,t,n))}var l,u,d,p="2.8.3",f={},h=!0,m=t.documentElement,v="modernizr",y=t.createElement(v),g=y.style,b={}.toString,w=" -webkit- -moz- -o- -ms- ".split(" "),C="Webkit Moz O ms",E=C.split(" "),x=C.toLowerCase().split(" "),S={svg:"http://www.w3.org/2000/svg"},T={},N=[],j=N.slice,F=function(e,n,o,r){var i,a,c,s,l=t.createElement("div"),u=t.body,d=u||t.createElement("body");if(parseInt(o,10))for(;o--;)c=t.createElement("div"),c.id=r?r[o]:v+(o+1),l.appendChild(c);return i=["&#173;",'<style id="s',v,'">',e,"</style>"].join(""),l.id=v,(u?l:d).innerHTML+=i,d.appendChild(l),u||(d.style.background="",d.style.overflow="hidden",s=m.style.overflow,m.style.overflow="hidden",m.appendChild(d)),a=n(l,e),u?l.parentNode.removeChild(l):(d.parentNode.removeChild(d),m.style.overflow=s),!!a},P=function(t){var n=e.matchMedia||e.msMatchMedia;if(n)return n(t)&&n(t).matches||!1;var o;return F("@media "+t+" { #"+v+" { position: absolute; } }",function(t){o="absolute"==(e.getComputedStyle?getComputedStyle(t,null):t.currentStyle).position}),o},H={}.hasOwnProperty;d=r(H,"undefined")||r(H.call,"undefined")?function(e,t){return t in e&&r(e.constructor.prototype[t],"undefined")}:function(e,t){return H.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError;var n=j.call(arguments,1),o=function(){if(this instanceof o){var r=function(){};r.prototype=t.prototype;var i=new r,a=t.apply(i,n.concat(j.call(arguments)));return Object(a)===a?a:i}return t.apply(e,n.concat(j.call(arguments)))};return o}),T.flexbox=function(){return s("flexWrap")},T.flexboxlegacy=function(){return s("boxDirection")},T.touch=function(){var n;return"ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch?n=!0:F(["@media (",w.join("touch-enabled),("),v,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(e){n=9===e.offsetTop}),n},T.cssanimations=function(){return s("animationName")},T.csscolumns=function(){return s("columnCount")},T.csstransforms=function(){return!!s("transform")},T.csstransforms3d=function(){var e=!!s("perspective");return e&&"webkitPerspective"in m.style&&F("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(t,n){e=9===t.offsetLeft&&3===t.offsetHeight}),e},T.csstransitions=function(){return s("transition")},T.video=function(){var e=t.createElement("video"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),n.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),n.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(o){}return n},T.audio=function(){var e=t.createElement("audio"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),n.mp3=e.canPlayType("audio/mpeg;").replace(/^no$/,""),n.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),n.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(o){}return n},T.svg=function(){return!!t.createElementNS&&!!t.createElementNS(S.svg,"svg").createSVGRect},T.inlinesvg=function(){var e=t.createElement("div");return e.innerHTML="<svg/>",(e.firstChild&&e.firstChild.namespaceURI)==S.svg},T.svgclippaths=function(){return!!t.createElementNS&&/SVGClipPath/.test(b.call(t.createElementNS(S.svg,"clipPath")))};for(var O in T)d(T,O)&&(u=O.toLowerCase(),f[u]=T[O](),N.push((f[u]?"":"no-")+u));return f.addTest=function(e,t){if("object"==typeof e)for(var o in e)d(e,o)&&f.addTest(o,e[o]);else{if(e=e.toLowerCase(),f[e]!==n)return f;t="function"==typeof t?t():t,"undefined"!=typeof h&&h&&(m.className+=" "+(t?"":"no-")+e),f[e]=t}return f},o(""),y=l=null,function(e,t){function n(e,t){var n=e.createElement("p"),o=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",o.insertBefore(n.lastChild,o.firstChild)}function o(){var e=g.elements;return"string"==typeof e?e.split(" "):e}function r(e){var t=y[e[m]];return t||(t={},v++,e[m]=v,y[v]=t),t}function i(e,n,o){if(n||(n=t),u)return n.createElement(e);o||(o=r(n));var i;return i=o.cache[e]?o.cache[e].cloneNode():h.test(e)?(o.cache[e]=o.createElem(e)).cloneNode():o.createElem(e),!i.canHaveChildren||f.test(e)||i.tagUrn?i:o.frag.appendChild(i)}function a(e,n){if(e||(e=t),u)return e.createDocumentFragment();n=n||r(e);for(var i=n.frag.cloneNode(),a=0,c=o(),s=c.length;s>a;a++)i.createElement(c[a]);return i}function c(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return g.shivMethods?i(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+o().join().replace(/[\w\-]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(g,t.frag)}function s(e){e||(e=t);var o=r(e);return g.shivCSS&&!l&&!o.hasCSS&&(o.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),u||c(e,o),e}var l,u,d="3.7.0",p=e.html5||{},f=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,h=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,m="_html5shiv",v=0,y={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",l="hidden"in e,u=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){l=!0,u=!0}}();var g={elements:p.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:d,shivCSS:p.shivCSS!==!1,supportsUnknownElements:u,shivMethods:p.shivMethods!==!1,type:"default",shivDocument:s,createElement:i,createDocumentFragment:a};e.html5=g,s(t)}(this,t),f._version=p,f._prefixes=w,f._domPrefixes=x,f._cssomPrefixes=E,f.mq=P,f.testProp=function(e){return a([e])},f.testAllProps=s,f.testStyles=F,m.className=m.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(h?" js "+N.join(" "):""),f}(this,this.document),function(e,t,n){function o(e){return"[object Function]"==v.call(e)}function r(e){return"string"==typeof e}function i(){}function a(e){return!e||"loaded"==e||"complete"==e||"uninitialized"==e}function c(){var e=y.shift();g=1,e?e.t?h(function(){("c"==e.t?p.injectCss:p.injectJs)(e.s,0,e.a,e.x,e.e,1)},0):(e(),c()):g=0}function s(e,n,o,r,i,s,l){function u(t){if(!f&&a(d.readyState)&&(b.r=f=1,!g&&c(),d.onload=d.onreadystatechange=null,t)){"img"!=e&&h(function(){C.removeChild(d)},50);for(var o in N[n])N[n].hasOwnProperty(o)&&N[n][o].onload()}}var l=l||p.errorTimeout,d=t.createElement(e),f=0,v=0,b={t:o,s:n,e:i,a:s,x:l};1===N[n]&&(v=1,N[n]=[]),"object"==e?d.data=n:(d.src=n,d.type=e),d.width=d.height="0",d.onerror=d.onload=d.onreadystatechange=function(){u.call(this,v)},y.splice(r,0,b),"img"!=e&&(v||2===N[n]?(C.insertBefore(d,w?null:m),h(u,l)):N[n].push(d))}function l(e,t,n,o,i){return g=0,t=t||"j",r(e)?s("c"==t?x:E,e,t,this.i++,n,o,i):(y.splice(this.i++,0,e),1==y.length&&c()),this}function u(){var e=p;return e.loader={load:l,i:0},e}var d,p,f=t.documentElement,h=e.setTimeout,m=t.getElementsByTagName("script")[0],v={}.toString,y=[],g=0,b="MozAppearance"in f.style,w=b&&!!t.createRange().compareNode,C=w?f:m.parentNode,f=e.opera&&"[object Opera]"==v.call(e.opera),f=!!t.attachEvent&&!f,E=b?"object":f?"script":"img",x=f?"script":E,S=Array.isArray||function(e){return"[object Array]"==v.call(e)},T=[],N={},j={timeout:function(e,t){return t.length&&(e.timeout=t[0]),e}};p=function(e){function t(e){var t,n,o,e=e.split("!"),r=T.length,i=e.pop(),a=e.length,i={url:i,origUrl:i,prefixes:e};for(n=0;a>n;n++)o=e[n].split("="),(t=j[o.shift()])&&(i=t(i,o));for(n=0;r>n;n++)i=T[n](i);return i}function a(e,r,i,a,c){var s=t(e),l=s.autoCallback;s.url.split(".").pop().split("?").shift(),s.bypass||(r&&(r=o(r)?r:r[e]||r[a]||r[e.split("/").pop().split("?")[0]]),s.instead?s.instead(e,r,i,a,c):(N[s.url]?s.noexec=!0:N[s.url]=1,i.load(s.url,s.forceCSS||!s.forceJS&&"css"==s.url.split(".").pop().split("?").shift()?"c":n,s.noexec,s.attrs,s.timeout),(o(r)||o(l))&&i.load(function(){u(),r&&r(s.origUrl,c,a),l&&l(s.origUrl,c,a),N[s.url]=2})))}function c(e,t){function n(e,n){if(e){if(r(e))n||(d=function(){var e=[].slice.call(arguments);p.apply(this,e),f()}),a(e,d,t,0,l);else if(Object(e)===e)for(s in c=function(){var t,n=0;for(t in e)e.hasOwnProperty(t)&&n++;return n}(),e)e.hasOwnProperty(s)&&(!n&&!--c&&(o(d)?d=function(){var e=[].slice.call(arguments);p.apply(this,e),f()}:d[s]=function(e){return function(){var t=[].slice.call(arguments);e&&e.apply(this,t),f()}}(p[s])),a(e[s],d,t,s,l))}else!n&&f()}var c,s,l=!!e.test,u=e.load||e.both,d=e.callback||i,p=d,f=e.complete||i;n(l?e.yep:e.nope,!!u),u&&n(u)}var s,l,d=this.yepnope.loader;if(r(e))a(e,0,d,0);else if(S(e))for(s=0;s<e.length;s++)l=e[s],r(l)?a(l,0,d,0):S(l)?p(l):Object(l)===l&&c(l,d);else Object(e)===e&&c(e,d)},p.addPrefix=function(e,t){j[e]=t},p.addFilter=function(e){T.push(e)},p.errorTimeout=1e4,null==t.readyState&&t.addEventListener&&(t.readyState="loading",t.addEventListener("DOMContentLoaded",d=function(){t.removeEventListener("DOMContentLoaded",d,0),t.readyState="complete"},0)),e.yepnope=u(),e.yepnope.executeStack=c,e.yepnope.injectJs=function(e,n,o,r,s,l){var u,d,f=t.createElement("script"),r=r||p.errorTimeout;f.src=e;for(d in o)f.setAttribute(d,o[d]);n=l?c:n||i,f.onreadystatechange=f.onload=function(){!u&&a(f.readyState)&&(u=1,n(),f.onload=f.onreadystatechange=null)},h(function(){u||(u=1,n(1))},r),s?f.onload():m.parentNode.insertBefore(f,m)},e.yepnope.injectCss=function(e,n,o,r,a,s){var l,r=t.createElement("link"),n=s?c:n||i;r.href=e,r.rel="stylesheet",r.type="text/css";for(l in o)r.setAttribute(l,o[l]);a||(m.parentNode.insertBefore(r,m),h(n,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))},function(e){function t(e,t){""===e.val()?e.data("placeholder").removeClass(t.hideClass):e.data("placeholder").addClass(t.hideClass)}function n(e,t){e.data("placeholder").addClass(t.hideClass)}function o(e,t){var n=t.is("textarea"),o=parseFloat(t.css("padding-top")),r=parseFloat(t.css("padding-left")),i=t.offset();o&&(i.top+=o),r&&(i.left+=r),e.css({width:t.innerWidth()-(n?20:4),height:t.innerHeight()-6,lineHeight:t.css("line-height"),whiteSpace:n?"normal":"nowrap",overflow:"hidden"}).offset(i)}function r(e,t){var o=e.val();!function r(){s=requestAnimationFrame(r),e.val()!==o&&(n(e,t),a(),i(e,t))}()}function i(e,n){!function o(){s=requestAnimationFrame(o),t(e,n)}()}function a(){window.cancelAnimationFrame&&cancelAnimationFrame(s)}function c(e){l&&window.console&&window.console.log&&window.console.log(e)}var s,l=!1;e.fn.placeHolder=function(i){c("init placeHolder");var s=this,l=e(this).length;return this.options=e.extend({className:"placeholder",visibleToScreenreaders:!0,visibleToScreenreadersHideClass:"placeholder-hide-except-screenreader",visibleToNoneHideClass:"placeholder-hide",hideOnFocus:!1,removeLabelClass:"visuallyhidden",hiddenOverrideClass:"visuallyhidden-with-placeholder",forceHiddenOverride:!0,forceApply:!1,autoInit:!0},i),this.options.hideClass=this.options.visibleToScreenreaders?this.options.visibleToScreenreadersHideClass:this.options.visibleToNoneHideClass,e(this).each(function(i){function u(){!s.options.hideOnFocus&&window.requestAnimationFrame?r(m,s.options):n(m,s.options)}var d,p,f,h,m=e(this),v=m.attr("placeholder"),y=m.attr("id");return(""===v||void 0===v)&&(v=m[0].attributes.placeholder.value),d=m.closest("label"),m.removeAttr("placeholder"),d.length||y?(d=d.length?d:e('label[for="'+y+'"]').first(),d.length?(h=e(d).find(".placeholder"),h.length?(o(h,m),h.text(v),m):(d.hasClass(s.options.removeLabelClass)&&d.removeClass(s.options.removeLabelClass).addClass(s.options.hiddenOverrideClass),p=e("<span>").addClass(s.options.className).text(v).appendTo(d),f=p.width()>m.width(),f&&p.attr("title",v),o(p,m),m.data("placeholder",p),p.data("input",m),p.click(function(){e(this).data("input").focus()}),m.focusin(u),m.focusout(function(){t(e(this),s.options),s.options.hideOnFocus||a()}),t(m,s.options),e(document).bind("fontresize resize",function(){o(p,m)}),e.event.special.resize?e("textarea").bind("resize",function(t){e(this).is(":visible")&&o(p,m),t.stopPropagation(),t.preventDefault()}):e("textarea").css("resize","none"),i>=l-1&&void 0!==e.attrHooks&&(e.attrHooks.placeholder={get:function(t){return"input"===t.nodeName.toLowerCase()||"textarea"===t.nodeName.toLowerCase()?e(t).data("placeholder")?e(e(t).data("placeholder")).text():e(t)[0].placeholder:void 0},set:function(t,n){return e(e(t).data("placeholder")).text(n)}}),void(m.is(":focus")&&u()))):void c("the input element with the placeholder needs a label!")):void c("the input element with the placeholder needs an id!")})},e(function(){var t=window.placeHolderConfig||{};return t.autoInit===!1?void c("placeholder:abort because autoInit is off"):("placeholder"in e("<input>")[0]||"placeHolder"in e("<input>")[0])&&!t.forceApply?void c("placeholder:abort because browser has native support"):void e("input[placeholder], textarea[placeholder]").placeHolder(t)})}(jQuery);
//hang some data on the window
window.app = window.app || {};

/**
 Safe Log
 http://paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
 usage:
 log('inside coolFunc',this,arguments);
 **/
window.log = function(){
    log.history = log.history || [];   // store logs to an array for reference
    log.history.push(arguments);
    if(this.console){
        console.log( Array.prototype.slice.call(arguments) );
    }
};

/**
 Debounce
 http://davidwalsh.name/function-debounce
 usage:
 var myEfficientFn = debounce(function() {
     // All the taxing stuff you do
     }, 250);
 **/
window.debounce = function debounce(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) { func.apply(context, args); }
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

/**
 Nano Templates
 https://github.com/trix/nano
 usage:
 nanoTemplate([template string],{data object});
 **/
window.nanoTemplate = function nanoTemplate(template, data) {
    return template.replace(/\{([\w\.]*)\}/g, function(str, key) {
        var keys = key.split("."), v = data[keys.shift()];
        for (var i = 0, l = keys.length; i < l; i++) v = v[keys[i]];
        return (typeof v !== "undefined" && v !== null) ? v : "";
    });
};

/**

 Templates! For use with nanoTemplate utility

 **/

window.app.templates = {};

window.app.templates.generic = {
    'container': [
        '<div class="container {classname}">',
            '<div class="inner"></div>',
        '</div>'
    ].join('\n'),
    'image': [
        '<div class="image" style="background-image: url({src});" ></div>'
    ].join('\n'),
    'inner': [
        '<div class="inner"></div>'
    ].join('\n'),
    'decoration': [
        '<span class="decoration {classname}"></span>'
    ].join('\n')
};

window.app.templates.home = {
    'cluster':[
        '<div class="cluster">',
            '<div class="inner">',
                '<button class="previous"><span>Previous</span></button>',
                '<button class="next"><span>Next</span></button>',
            '</div>',
        '</div>'
    ].join('\n'),
    'masthead': {
        'slide': [
            '<div class="slide">',
                '<div class="inner">',


                    '<div class="image" style="background-image: url({src});" >',
                    '</div>',

                    '<div class="overlay"></div>',
                    '<div class="details">',

                        '<div class="inner">',
                            '<div class="title">{title}</div>',
                            '<div class="copy">{copy}</div>',
                        '</div>',

                    '</div>',

            '</div>',
            '</div>'
        ].join('\n')
    },
    'spotlight': {
        'container': [
            '<div class="spotlight container"  style="background-image: url({src});">',
                '<div class="inner">',
                    '<h2>{heading}</h2>',
                    '<div class="carousel"></div>',
                '</div>',
            '</div>'
        ].join('\n'),
        'slide': [
            '<div class="slide">',
                '<div class="inner">',
                    '<div class="number"><span>{dt}</span></div>',
                    '<div class="label">{dd}</div>',
                '</div>',
            '</div>'
        ].join('\n')
    }
};

window.app.templates.tier = {
    'description': [
        '<div class="description container">',
            '<div class="inner">',
                '<h1>{heading}</h1>',
                '<p>{copy}</p>',
            '</div>',
        '</div>'
    ].join('\n')
};

window.app.templates.overlay = [
    '<div class="overlay"></div>'
].join('\n');

jQuery(function jQueryWrapper($) {

    'use strict';

    /**
     jQuery Tiny Pub/Sub
     https://github.com/cowboy/jquery-tiny-pubsub

     Copyright (c) 2013 "Cowboy" Ben Alman, Licensed under the MIT license.
     **/
    (function() {

        var o = $({});

        $.subscribe = function() {
            o.on.apply(o, arguments);
        };

        $.unsubscribe = function() {
            o.off.apply(o, arguments);
        };

        $.publish = function() {
            o.trigger.apply(o, arguments);
        };

    }());


    /** Variables **/
    //* indicates legacy code

    var app = window.app || {},
        templates = app.templates,

    //Utilities
        getMedia,
        getSectionTitle,
        init,
        noop,
        returnElementAttributes,
        returnWindowDimensions,
        setViewportState,
        splitList,

    //Section Setups
        setupCommonModules,
        setupFooter,
        setupHeader,
        setupHomePage,
        setupOffCanvasNavigation,
        setupTierPage,

    //Discrete Modules
        setupHeader_persistentTierNavigation,
        setupHeader_search,
        setupHomePage_masthead,
        setupHomePage_news,
        setupHomePage_spotlight,
        setupTierPage_subNavigation,
        setupTierPage_tierNavigation,

    //Common Modules
        setupModule_calendarGrid,
        setupModule_extendProductSlideshows,
        setupModule_hierarchy,

    //Handlers
        onWindowResize,
        onWindowScroll,

    //Cached $objects
        $bannerRight = $('#fsBannerRight'),
        $container_poweredby = $('#fsPoweredByFinalsite'),
        $document = $(document),
        $window = $(window),
        $safeDoc = $('html, body'),
        $html = $('html'),
        $body = $('body'),
        $footer = $('#fsFooter'),
        $header = $('#fsHeader'),
        $pageWrapper = $('#fsPageWrapper'),
        $pageBodyWrapper = $('#fsPageBodyWrapper'),
        $pageContent = $('#fsPageContent'),

    //Hoisted $objects
        $header_dropdowns,
        $header_navigation,
        $header_search,
        $offCanvas_navigation,
        $page_search_inputs,
        $subNavigation,

    //Pseudo-constants
        CLASS_ACTIVE = 'active',
        CLASS_MASTHEAD_PRESENT = 'has-masthead',
        CLASS_OPEN = 'open',
        BREAKPOINT_MEDIUM = 600,//"$bp-portrait"
        BREAKPOINT_LARGE = 900,//"$bp-landscape"
        EVENT_INIT_COMPLETE = 'init.custom',
        EVENT_GETMEDIA_SUCCESS = 'get.getmedia-generic.custom',
        EVENT_VIEWPORT_ENTER_MOBILE = 'viewport.enter-small.custom',
        EVENT_VIEWPORT_ENTER_TABLET = 'viewport.enter-medium.custom',
        EVENT_VIEWPORT_ENTER_LANDSCAPE = 'viewport.enter-large.custom',
        EVENT_VIEWPORT_LEAVE_MOBILE = 'viewport.leave-small.custom',
        EVENT_VIEWPORT_LEAVE_TABLET = 'viewport.leave-medium.custom',
        EVENT_VIEWPORT_LEAVE_LANDSCAPE = 'viewport.leave-large.custom',
        EVENT_WINDOW_RESIZE = 'resize.window.custom',
        EVENT_WINDOW_SCROLL = 'scroll.window.custom',
        STRING_SECTION_NAME = 'Section'
        ;


    /** Functions: Alphabetical **/

    /** G **/

    getMedia = function getMedia($element, event){
        //log('getMedia');
        var url = $element.data('playlisturl'),
            _event = (event) ? event : EVENT_GETMEDIA_SUCCESS,
            onGetError = function onGetError(jqxhr, status, error){
                log('getMedia AJAX Error: '+ error);
                noop();

            },
            onGetSuccess = function onGetSuccess(data, status, jqxhr){
                log('getMedia AJAX Success', data);
                $.publish(_event,[data]);
            }
            ;

        $.ajax({
            'url': url,
            'success': onGetSuccess,
            'error': onGetError,
            'method': 'GET'//default
        });

    };

    getSectionTitle = function getSectionTitle() {
        var _STRING_SECTION_NAME;

        _STRING_SECTION_NAME = $header_navigation.find('.fsNavLevel1 .fsNavCurrentPage > a').eq(0).text();

        _STRING_SECTION_NAME = ( _STRING_SECTION_NAME.length ) ? _STRING_SECTION_NAME : $header_navigation.find('.fsNavLevel1 > .fsNavCurrentPageAncestor > a').eq(0).text();// SOOO UGLY.

        return ( _STRING_SECTION_NAME.length ) ? _STRING_SECTION_NAME : false; // Bravo. This is also very ugly.
    };


    /** I **/

    init = function init(){
        //log('init');
        app.page = app.page || {
            'home': $body.hasClass('home')
        };

        //Subscription(s)
        $.subscribe(EVENT_WINDOW_RESIZE, setViewportState);

        $window.on({
            'resize': onWindowResize,
            'scroll': onWindowScroll
        });

        // Section Setup
        setupFooter();
        setupHeader();
        setupCommonModules();
        setupOffCanvasNavigation();

        if(app.page.home){
            // do homepage stuff
            setupHomePage();
        } else {
            // you're on a not-home page
            setupTierPage();
        }



        onWindowResize();
        $.publish(EVENT_INIT_COMPLETE);

    };

    /** N **/

    noop = function noop(){
        return false;
    };

    /** O **/

    onWindowResize = window.debounce( function onWindowResize(){
        //log('onWindowResize');

        $.publish(EVENT_WINDOW_RESIZE, [ returnWindowDimensions() ]);
    }, 75);//note: debouncing the resize calculation by 75ms

    onWindowScroll = window.debounce( function onWindowScroll(){
        //log('onWindowScroll', $window.scrollTop());
        $.publish(EVENT_WINDOW_SCROLL, [ $window.scrollTop() ]);
    }, 10);//note: debouncing the resize calculation by 10ms

    /** R **/

    returnElementAttributes = function returnElementAttributes( element ){
        var _element = element
            ;
        if( element instanceof jQuery ){
            _element = element[0];
        }
        return Array.prototype.slice.call( _element.attributes );
    };

    returnWindowDimensions = function returnWindowDimensions(){
        return {
            'x': parseInt($window.width(), 10),
            'y': parseInt($window.height(), 10)
        };
    };

    /** S **/

    setupCommonModules = function setupCommonModules(){
        setupModule_calendarGrid();
        setupModule_extendProductSlideshows();
    };

    setupFooter = function setupFooter(){
        //log('setupFooter');
        // var _$footer_links,
        //     _$linkList,
        //     _$socialNav
        //     ;

        // _$footer_links = $footer.find( '.footer-links nav' );
        // _$linkList = _$footer_links.find( 'ul' );
        // _$socialNav = $footer.find( '.social nav' );

        // // Make the Social Links wrap after the third link
        // // … because DESIGN!
        // _$socialNav.find( 'ul > li').eq( 2 ).after( '<li class="break"></li>' );

        var CLASSNAME_POWEREDBY = 'powered-by-finalsite'
        ;
         //Move PoweredByFinalsite into the footer
         $footer.find( '.navigation.footer-links' )
             .append( nanoTemplate( templates.generic.container, {
                 'classname': CLASSNAME_POWEREDBY
             }) )
             .find( '.inner' )
             .append( $container_poweredby )
         ;
         $footer.find('.'+CLASSNAME_POWEREDBY);//.insertBefore('.navigation.footer-links');

        /*$container_poweredby
            .prependTo( '.navigation.footer-links' )
        ;*/
    };

    setupHeader = function setupHeader(){
        //log('setupHeader');
        $header_dropdowns = $header.find('.fsNavPageInfo');
        $header_navigation = $header.find('.fsBanner > .navigation.main nav'); //rename to nav class
        $header_search = $header.find('.utility-tools .search-container');
        STRING_SECTION_NAME = getSectionTitle();

        setupHeader_search();

        // Split Mega Nav lists
        $header_dropdowns.each( function ( index, element ){
            var $this = $( element),
                _$list = $this.find( '.fsNavLevel2' )
                ;

            _$list.remove();

            $this.append( splitList( _$list, Math.ceil( _$list.children().length / 2 ) ) );

        } );
    };

    setupHeader_persistentTierNavigation = function setupHeader_persistentTierNavigation(){
        return;
        log('--> setupHeader_persistentTierNavigation', {
            'target': $header.find( '.secondaryNav' )
        });

        var $container,
            $navigation,
            CLASSNAME_PERSISTENT_NAVIGATION = 'persistent-tier-navigation'
        ;

        $navigation = $header.find( '.secondaryNav' );

        $header.after( nanoTemplate( templates.generic.container, {
            'classname': CLASSNAME_PERSISTENT_NAVIGATION
        } ) );

        $container = $( '.' + CLASSNAME_PERSISTENT_NAVIGATION );

        $navigation.addClass( 'navigation persistent tier mobile' ).removeClass( 'secondaryNav' );

        $container.find( '> .inner').append( $navigation );

    };

    setupHeader_search = function setupHeader_search(){
        //log('setupHeader_search', $header);
        var _CLASS_TRIGGER = 'search-trigger',
            onClickTrigger,
            onClickDocument,
            onGoogleSearchRendered,
            isGoogleSearchLoadedAndRendered,
            intervalTimer,
            toggleState,
            _COPY_PLACEHOLDER = 'Keyword Search'
            ;

        onGoogleSearchRendered = function onGoogleSearchRendered(){
            // do stuff once your precious Google Custom Searches are rendered
            $page_search_inputs = $( 'input.gsc-input' );//purposefully casting a wide net, here
            $page_search_inputs.attr( 'placeholder', _COPY_PLACEHOLDER );
        };

        isGoogleSearchLoadedAndRendered = function isGoogleSearchLoadedAndRendered(){
            //careful, this is self-invoking
            //log( 'isGoogleSearchLoadedAndRendered attempt' );
            var boolean = false;

            if( typeof window.google !== 'undefined' ){

                if( typeof window.google.search !== 'undefined' ){

                    if(  $( 'input.gsc-input').length ){

                        boolean = true;

                    }

                }

            }

            if( boolean === true ){
                clearTimeout( intervalTimer );
                onGoogleSearchRendered();
            } else {
                intervalTimer = setTimeout( isGoogleSearchLoadedAndRendered, 50 );
            }
        }();

        onClickTrigger = function onClickTrigger(event){
            //log('onClickTrigger: CLICK!');
            event.preventDefault();
            toggleState();
        };

        onClickDocument = function onClickDocument(event){
            //log('onClickDocument: CLICK!', event.type);
            var $target = $(event.target)
                ;

            if( !$target.closest('.'+_CLASS_TRIGGER + ', section.fsSearch.search').length && $html.hasClass( 'page-search-'+CLASS_OPEN ) ){
                event.preventDefault();
                toggleState();
            }


        };

        // (deferred) bind trigger click
        // $document.on('click touchstart MSPointerDown','.'+_CLASS_TRIGGER, onClickTrigger);
        // $document.on('click touchstart MSPointerDown', onClickDocument);

        toggleState = function toggleState(){
            //log('toggleState');
            var _CLASS_OPEN = 'page-search-'+CLASS_OPEN
                ;

            if($html.hasClass( _CLASS_OPEN )){
                $html.removeClass( _CLASS_OPEN );
            } else {
                $html.addClass( _CLASS_OPEN );
            }

        };

        // define anything that can be…
        $header_search = $header.find( 'section.fsSearch.search' );

        // Manipulate the DOM… move the Header search
        $('.search-trigger-container').append( $header_search );

        // (deferred) bind trigger click
        $document.on('click','.'+_CLASS_TRIGGER, onClickTrigger);
        $document.on('click', onClickDocument);

    };

    setupHomePage = function setupHomePage(){
        //log('setupHomePage');
        // has multiple sections - ['masthead', 'spotlight', 'news']

        /** MASTHEAD **/
        setupHomePage_masthead();

        /** NEWS **/
        setupHomePage_news();

        /** SPOTLIGHT **/
        setupHomePage_spotlight();

    };

    setupHomePage_masthead = function setupHomePage_masthead(){
        //log('setupHomePage_masthead');
        var token = 'masthead',
            EVENT_JSON_READY = 'ready.'+ token +'.json.custom',
            EVENT_CONTENT_READY = 'ready.'+ token +'.content.custom',

            iterativeHandler,
            onContentReady,
            onGetJSON,

            _$section,
            _$carousel,
            _$cluster,
            options
            ;

        _$section = $('.fsDiv > section.fsPlayer.' + token);

        if( !_$section.length ){
            return;
        }

        iterativeHandler = function iterativeHandler(data){
            //log('- --> iterativeHandler data', data);
            var map
                ;

            map = {
                'src': data.display_path,
                'copy': data.object_description
            };

            _$carousel
                .append( nanoTemplate( templates.home.masthead.slide, map ) );

        };

        /** concerning the carousel **/

        onGetJSON = function onGetJSON(event, data){
            //log('setupHomePage_masthead: onGetJSON', _$section, data);

            //build your carousel
            var index
                ;

            _$section.find('.fsElementContent').append( nanoTemplate( templates.generic.container, { 'classname': token } ) );

            _$carousel = _$section.find('.inner');

            for(index = 0; index < data.objects.length; index++){
                iterativeHandler(data.objects[index]);
            }

            //publish carousel ready event
            $.publish(EVENT_CONTENT_READY, [data]);//returning the data just in case
            //cleanup
            $.unsubscribe(EVENT_JSON_READY);
        };

        onContentReady = function onContentReady(event, data){
            //append the 'cluster' controls
            _$carousel.after( templates.home.cluster );
            _$cluster = _$section.find('.cluster');
            _$cluster.find( '.link' ).append( _$section.find( '> footer a' ) );

            // define the new cluster buttons in the carousel options
            options.prevArrow = _$cluster.find( 'button.previous' );
            options.nextArrow = _$cluster.find( 'button.next' );


            _$carousel.on('init', function (){
                $html.addClass( CLASS_MASTHEAD_PRESENT );
            });

            _$carousel.slick(options);

            //cleanup
            $.unsubscribe(EVENT_CONTENT_READY);

        };

        options = {
            'mobileFirst': true,
            'autoplay': true,
            'autoplaySpeed': 5000,
            'slidesToShow': 1,
            'adaptiveHeight': true,
            'fade': true,
            'speed': 750
        };

        // "ready" event naming convention: 'ready.'+ token +'.content.custom'
        $.subscribe(EVENT_CONTENT_READY, onContentReady);
        $.subscribe(EVENT_JSON_READY, onGetJSON);


        getMedia(_$section.find('.fsMediaCustomPlayer'), EVENT_JSON_READY);


    };

    setupHomePage_news = function setupHomePage_news(){
        //log('setupHomePage_news');
        var token = 'fsNews',
            _$section,
            _$carousel,
            _$cluster,
            options
            ;

        _$section = $('.fsDiv > section.' + token);
        _$carousel = _$section.find('> .fsElementContent .fsListItems');

        options = {
            'mobileFirst': true,
            'slidesToShow': 1,
            'adaptiveHeight': true,

            'responsive': [
                {
                    'breakpoint': BREAKPOINT_MEDIUM,
                    'settings': {
                        'slidesToShow': 2
                    }
                },
                {
                    'breakpoint': BREAKPOINT_LARGE,
                    'settings': {
                        'slidesToShow': 3
                    }
                }
            ]
        };

        /** DOM manipulation **/
        //append the 'cluster' controls
        _$carousel.after( templates.home.cluster );
        _$cluster = _$section.find('.cluster');
        _$cluster.find( '.link' ).append( _$section.find( '> footer a' ) );

        // define the new cluster buttons in the carousel options
        options.prevArrow = _$cluster.find( 'button.previous' );
        options.nextArrow = _$cluster.find( 'button.next' );

        _$carousel.on('init', function (){
            $html.addClass( 'home-news-ready' );
        });

        _$carousel.slick(options);

        // _$carousel.find('article').wrap('<div></div>');

        $('.home .fsNews .fsElementContent .fsListItems article').each(function() {
            $(this).prepend('<div class="newsOverlay"></div>');
            var nTitle = $(this).find('.fsTitle');
            var nSum = $(this).find('.fsSummary');
            var nLink = $(this).find('.fsNewsPostLink.fsReadMoreLink');
            $(this).find('.newsOverlay').prepend(nTitle , nSum, nLink);
        });

        $('.home .fsCalendar').prepend('<div class="calOverlay"></div>');
    };

    setupHomePage_spotlight = function setupHomePage_spotlight(){
        //log('setupHomePage_spotlight');
        var token = 'spotlight',
            _$section,
            _$carousel,
            _$cluster,
            data,
            options
            ;

        _$section = $('.fsDiv > section.' + token);

        options = {
            'mobileFirst': true,
            'slidesToShow': 1,
            'adaptiveHeight': true,

            'responsive': [
                {
                    'breakpoint': BREAKPOINT_MEDIUM,
                    'settings': {
                        'slidesToShow': 2
                    }
                },
                {
                    'breakpoint': BREAKPOINT_LARGE,
                    'settings': {
                        'slidesToShow': 3
                    }
                },
                {
                    'breakpoint': 1180,
                    'settings': {
                        'slidesToShow': 4
                    }
                }
            ]
        };

        if( !_$section.length ){ return; }

        data = {
            '$background': _$section.find( '> header .fsElementHeaderContent img' ),
            '$heading': _$section.find( '> header .fsElementTitle' ),
            '$list': _$section.find( '> .fsElementContent dl' ),
            '$anchor': _$section.find( '> footer a' )
        };

        _$section.append( nanoTemplate( templates.home[ token ].container, {
            'heading': data.$heading.text(),
            'src': data.$background.attr( 'src' )
        } ) );

        _$carousel = _$section.find('.' + token + '.container .carousel');

        // append the 'cluster' controls
        _$carousel.after( templates.home.cluster );
        _$cluster = _$section.find('.' + token + '.container .cluster');
        _$cluster.find( '.link' ).append( data.$anchor.clone() );

        // define the new cluster buttons in the carousel options
        options.prevArrow = _$cluster.find( 'button.previous' );
        options.nextArrow = _$cluster.find( 'button.next' );

        //convert the <dl> to JSON… this is a bad idea.
        data.$list.find( 'dt' ).each( function ( index, element ){
            var $this_dt = $(element),
                _$dd = $this_dt.next( 'dd' )//risky?
            ;

            _$carousel.append( nanoTemplate( templates.home[ token ].slide, {
                'dt': $this_dt.text(),
                'dd': _$dd.text()
            } ) );

        } );


        /** DOM manipulation **/

        _$carousel.slick(options);
    };

    setupModule_calendarGrid = function setupModule_calendarGrid(){
        var $eventview,
            $scrollUp,
            $target,
            condition,
            initCalendar,
            onAJAXSuccess,
            onClickGridEvent,
            onClickScrollUp,
            onWindowResize
            ;

        $target = $('.fsCalendar.fsGrid');

        condition = ( $target.length );

        initCalendar = function initCalendar() {

            $eventview = $('<div id="event-view" />').insertAfter('.fsCalendarEventGrid');
            $scrollUp = $('<div class="scroll-up"><span>Back Up To Calendar</span></div>').insertAfter($eventview);

            $scrollUp.on('click', onClickScrollUp);

            $('.fsCalendarDaybox').has('.fsCalendarInfo').addClass('has-info');
            //event-view
            $('.fsCalendarEventGrid').on('click', '.fsCalendarDaybox:not(.fsCalendarWeekendDayBox),.fsCalendarWeekendDayBox>div ', onClickGridEvent);

            //subscribe to resize
            $.subscribe( EVENT_WINDOW_RESIZE, onWindowResize );

        };

        onAJAXSuccess = function onAJAXSuccess(event, xhr, options, data) {
            var isCalendar = $(data).hasClass('fsCalendar fsGrid')
                ;

            if (isCalendar) {

                initCalendar();
            }
        };

        onClickGridEvent = function onClickGridEvent(event) {

            var $this = $(event.target).closest('.fsCalendarDaybox'),
                offsetTop,
                date
                ;

            date = $this.clone();
            offsetTop = $eventview.offset().top - 16;

            $('.fsCalendarEventGrid .fsCalendarDaybox, .fsCalendarWeekendDayBox > div').removeClass('selected');

            $eventview.empty().append(date);

            $this.addClass('selected');

            $safeDoc.animate({scrollTop: offsetTop}, 450);
        };

        onClickScrollUp = function onClickScrollUp() {
            var offsetTop = $('.fsCalendarMonthBrowser').offset().top - 16;
            $safeDoc.animate({scrollTop: offsetTop}, 450);
        };

        onWindowResize = function onWindowResize( event ){
            //todo: Clean this up. Disgraceful.

            $('.fsCalendarRow').each( function ( index, element ){
                var $this = $( element),
                    $cells = $this.find( '.fsCalendarDaybox'),
                    maxHeight = 0
                    ;

                $cells
                    .css( 'height', '' )
                    .each( function ( index, element ){
                        var newHeight = $( element ).height()
                        ;

                        maxHeight = ( newHeight > maxHeight ) ? newHeight : maxHeight;
                    }).each( function ( index, element ){
                        var $cell = $( element )
                        ;
                        $cell.css( 'height', maxHeight );
                    } );

            } );
        };

        if(!condition) { return; }

        $document.ajaxSuccess(onAJAXSuccess);
        initCalendar();
    };

    setupModule_extendProductSlideshows = function setupModule_extendProductSlideshows(){
        //log( 'setupModule_extendProductSlideshows' );

        //looking for .fsCalendar.fsSlideshow .fsElementSlideshow, and .fsNews.fsSlideshow .fsElementSlideshow

        var _$targets,
            options
            ;

        _$targets = $( '.fsCalendar.fsSlideshow, .fsNews.fsSlideshow' );

        options = {
            'arrows': true,
            'mobileFirst': true,
            'slidesToShow': 1,
            'slidesToScroll': 1,
            'adaptiveHeight': true,
            'responsive': [
                {
                    'breakpoint': BREAKPOINT_MEDIUM,
                    'settings': {
                        'slidesToShow': 2,
                        'slidesToScroll': 2
                    }
                },
                {
                    'breakpoint': BREAKPOINT_LARGE,
                    'settings': {
                        'slidesToShow': 3,
                        'slidesToScroll': 3
                    }
                },
                {
                    'breakpoint': 1180,
                    'settings': {
                        'slidesToShow': 4,
                        'slidesToScroll': 4
                    }
                }
            ]
        };

        if( !_$targets.length ){ return; }

        _$targets.each( function ( index, element ){
            var _$carousel = $( element ).find( '.fsElementSlideshow')
                ;

            for (var property in options ) {
                if( options.hasOwnProperty( property ) ) {
                    _$carousel
                        .slick( 'setOption', property, options[property], true );
                }
            }

        } );

    };

    setupModule_hierarchy = function setupModule_hierarchy(){
        //log( 'setupModule_hierarchy' );
        var token = 'hierarchy',
            _$breadcrumbs = $footer.find( '.navigation.hierarchy nav > ul > li'),
            _CLASS_HIERARCHY_PRESENT = 'has-' + token,
            _CLASS_HIERARCHY_ERROR = token + '-error',
            _CLASS_HIERARCHY
            ;

        if( !_$breadcrumbs.length ){
            $html.addClass( _CLASS_HIERARCHY_ERROR );
            return false;
        }

        switch( _$breadcrumbs.length ){
            case 0:
                _CLASS_HIERARCHY = token + '-unknown';
                $html.addClass( _CLASS_HIERARCHY_ERROR );
                break;
            case 1:
                _CLASS_HIERARCHY = token + '-home';
                break;
            default:
                _CLASS_HIERARCHY = token + '-tier-' + ( _$breadcrumbs.length - 1 );
        }

        $html.addClass( _CLASS_HIERARCHY + ' ' + _CLASS_HIERARCHY_PRESENT );
    };

    setupOffCanvasNavigation = function setupOffCanvasNavigation(){
        var _CLASS_TRIGGER = 'off-canvas-trigger',
            onClickTrigger,
            onClickDocument,
            onClickOverlay,
            toggleState
            ;

        $offCanvas_navigation = $('section.off-canvas.fsContainer');

        //move the Off-canvas menu out of the header
        //$body.prepend($offCanvas_navigation);
        $pageWrapper.after( $offCanvas_navigation );

        //put an overlay on the <body>
        //$body.append(templates.overlay);
        $offCanvas_navigation.before( templates.overlay );

        toggleState = function toggleState(){
            //log('toggleState', $html);
            var _CLASS_OPEN = 'off-canvas-menu-'+CLASS_OPEN,
                $overlay = $('.overlay')
                ;

            if($html.hasClass(_CLASS_OPEN)){
                $html.removeClass(_CLASS_OPEN);
                $overlay.removeClass(CLASS_ACTIVE);
                $offCanvas_navigation.css( 'height', '' );
            } else {
                $html.addClass(_CLASS_OPEN);
                $overlay.addClass(CLASS_ACTIVE);
                $offCanvas_navigation.css( 'height', returnWindowDimensions().y );
            }

        };

        onClickOverlay = function onClickOverlay(event){
            //log('CLICK! overlay');
            event.preventDefault();
            toggleState();
        };

        onClickTrigger = function onClickTrigger(event){
            //log('CLICK! off-canvas-trigger');
            event.preventDefault();
            toggleState();
        };

        onClickDocument = function onClickDocument(event){

            var $target = $(event.target)
                ;

            if( !$target.closest('.'+_CLASS_TRIGGER + ', section.off-canvas.fsContainer').length && $html.hasClass( 'off-canvas-menu-'+CLASS_OPEN ) ){
                event.preventDefault();
                toggleState();
            }

        };


        /** Concerning the "Inquire button" **/
        $offCanvas_navigation.find( '.search-mobile').after( $header.find( '.utilities .button.top').clone() );
        //$header.find( '.utilities .button.top').clone().prependTo( $offCanvas_navigation.find( '> .fsElementContent' ) );


        // (deferred) bind trigger click
        $document.on('click','.'+_CLASS_TRIGGER, onClickTrigger);
        $document.on('click', onClickDocument);
    };

    setupTierPage = function setupTierPage(){
        //log('setupTierPage');

        var _$masthead,
            _$description,
            $source,
            _$masthead_container,
            //$tierMenu,
            onClickTierMenu
            ;

        /** Manage the Masthead **/
        _$masthead = $pageContent.find('.masthead');

        if( _$masthead.length ){
            $source = _$masthead.eq(0).find('img');//just in case there are multiple ".masthead'

            // build masthead
            $pageBodyWrapper.before( nanoTemplate( templates.generic.container, { 'classname': 'masthead' } ) );
            _$masthead_container = $('.container.masthead');
            _$masthead_container.find('.inner')
                //    .append( $pageContent.find('.fsPageTitle') )
            ;

            //move the masthead image (if there IS one)
            if($source.length){
                _$masthead_container.find('.inner')
                    .prepend( nanoTemplate( templates.generic.image, {
                        'src': $source.attr('src')
                    } ) );
            }

            $html.addClass( CLASS_MASTHEAD_PRESENT );

        }

        /** Manage the Page Description **/
        _$description = $pageContent.find( '.fsContent.description' );

        if( _$masthead.length && _$description.length ){

            _$masthead_container.find( '.inner').append( nanoTemplate( templates.tier.description, {
                'heading': _$description.find( '.fsElementHeaderContent').text(),
                'copy': _$description.find( '.fsElementContent').text()
            } ) );

            $html.addClass( 'has-description' );
        }


        /** Manage the (header) Tier Nav **/
        setupTierPage_subNavigation();

        /** NEW! Manage the persistent Tier Nav **/
        //setupHeader_persistentTierNavigation();

        /** Manage the (content/banner) Tier Nav **/
        setupTierPage_tierNavigation();

    };

    setupTierPage_subNavigation = function setupTierPage_subNavigation( ){
        log('setupTierPage_subNavigation');

        var token = 'sub-navigation',//careful, this is used as a basis for the selector, too
            _$subNavigation_toggle,
            _CLASS_NAVIGATION_PRESENT = 'has-' + token,
            _CLASS_NAVIGATION_OPEN = token + '-' + CLASS_OPEN,
            onClickTrigger,
            hasChildren
            ;

        $subNavigation = $( '.' + token);

        hasChildren = ( $subNavigation.find( 'nav ul' ).length > 0 );

/*
        // short-circuit if conditions aren't right
        if( !$subNavigation.find( 'nav ul' ).length ){ return false; }
*/

        onClickTrigger = function onClickTrigger( event ){
            //log( 'onClickTrigger' );
            if( hasChildren ){
                $html.toggleClass( _CLASS_NAVIGATION_OPEN );
            } else {
                window.history.back();
            }
        };

        $html.addClass( _CLASS_NAVIGATION_PRESENT );

        // move a clone of the nav element
        $header.after( $subNavigation.clone() );

        // class the original to differentiate it
        $subNavigation.addClass( 'masthead-alternate' );

        //… then move it, too…
        $header.append( $subNavigation );

        // and now, because we have two elements, redefine $subNavigation before binding
        $subNavigation = $( '.' + token);
        _$subNavigation_toggle = $subNavigation.find( '.fsElementHeaderContent');

        if( hasChildren ){

            if( STRING_SECTION_NAME ){
                _$subNavigation_toggle.text( STRING_SECTION_NAME );
            }

        } else {
            _$subNavigation_toggle.addClass( 'button-back' ).text( 'Back' );
        }

        _$subNavigation_toggle.on( 'click', onClickTrigger );

    };

    setupTierPage_tierNavigation = function setupTierPage_tierNavigation( ){
        log('setupTierPage_tierNavigation');
        var token = 'tier-navigation',
            _$tierMenu,
            _$tierMenu_toggle,
            _$tierMenu_mobile,
            _SELECTOR_NAVIGATION = '.navigation.tier',
            _CLASS_NAVIGATION_PRESENT = 'has-' + token,
            onClickTrigger
            ;

        _$tierMenu = $pageBodyWrapper.find( _SELECTOR_NAVIGATION );

        // short-circuit if conditions aren't right
        if( !_$tierMenu.length ){ return false; }
        $html.addClass( _CLASS_NAVIGATION_PRESENT );

/*        if( STRING_SECTION_NAME ){
            _$tierMenu.find( '.fsElementHeaderContent').text( STRING_SECTION_NAME );
        }

        /!** Manage the clone (for Mobile view) **!/
        _$tierMenu_mobile = _$tierMenu.clone();

        _$tierMenu_mobile.addClass( 'mobile' );

        // copy a version for the Mobile pre-footer. Because.
        if( $bannerRight.length ){
            $bannerRight.after( _$tierMenu_mobile );
        } else {
            $pageContent.append( _$tierMenu_mobile );
        }

        _$tierMenu_toggle = $pageBodyWrapper.find( _SELECTOR_NAVIGATION + ' .fsElementHeaderContent' );//re-defining here to catch the clone(s) (above)

        onClickTrigger = function onClickTrigger(event){
            event.stopPropagation();
            $( event.target ).closest( _SELECTOR_NAVIGATION ).toggleClass( CLASS_OPEN );
        };


        _$tierMenu_toggle.on( 'click', onClickTrigger );*/


    };

    setViewportState = function setViewportState(){
        //log('- -- ---> setViewportState');

        var viewportWidth = returnWindowDimensions().x;

        if(viewportWidth < BREAKPOINT_MEDIUM){
            if(app.viewstate !== 'mobile'){
                //log('[] Enter MOBILE');
                app.viewstate = 'mobile';
                $.publish(EVENT_VIEWPORT_ENTER_MOBILE);
                $.publish(EVENT_VIEWPORT_LEAVE_TABLET);
                $.publish(EVENT_VIEWPORT_LEAVE_LANDSCAPE);
            }
        } else if(viewportWidth < BREAKPOINT_LARGE){
            if(app.viewstate !== 'tablet'){
                //log('[<->] Enter TABLET');
                app.viewstate = 'tablet';
                $.publish(EVENT_VIEWPORT_LEAVE_MOBILE);
                $.publish(EVENT_VIEWPORT_ENTER_TABLET);
                $.publish(EVENT_VIEWPORT_LEAVE_LANDSCAPE);
            }
        } else {
            if(app.viewstate !== 'desktop'){
                //log('[<--->] Enter DESKTOP');
                app.viewstate = 'desktop';
                $.publish(EVENT_VIEWPORT_LEAVE_MOBILE);
                $.publish(EVENT_VIEWPORT_LEAVE_TABLET);
                $.publish(EVENT_VIEWPORT_ENTER_LANDSCAPE);
            }
        }

    };

    splitList = function splitList($object, number){
        //https://jsfiddle.net/itopizarro/uf9pd5gj/
        // $object is a jQuery wrapped <ul>
        // number is the maximum number of <li> per list
        //log('splitList', $object, length);
        var _$result = $(),//will hold the collection of resulting sets
            _$children = $object.clone().children(),
            _$wrapper = $object.clone().removeAttr('id').empty(),//preserves the parent element
            _number = Math.round(number),
            numberOfChildren = $object.children().length,
            numberOfColumns = (numberOfChildren > _number) ? Math.ceil( numberOfChildren / _number ) : 1,
            index
            ;

        for(index = 0; index < numberOfColumns; index++){
            _$result = _$result.add(
                _$wrapper.clone().append( _$children.slice(index * _number, (index + 1) * _number) )
            );
        }

        return _$result;
    };

    $('.fsNews .fsDate').each(function(){
        var newsMonth = $(this).find('.fsMonth');
        $(newsMonth).insertBefore($(this).find('.fsDay'));
        $(this).find('.fsYear').remove();
    })

    $('.fsNews.fsList article').each(function(){
        var newsDate = $(this).find('.fsDateTime');
        $(this).find('.fsTitle').insertAfter(newsDate);
    })

    init();

});

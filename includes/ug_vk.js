﻿// ug_vk.js (https://github.com/finalfantasia/ug_vk)
// The MIT License (MIT)
// Copyright (c) 2013, 2014 Abdussalam Abdurrahman (abdusalam.abdurahman@gmail.com)
var UG_VK_OPTS = {
        all:  true,
        blacklist: [
            'password', 'admin_password', 'url', 'pass1', 'pass2',
            'email', 'new_admin_email', 'siteurl', 'home', 'admin_email', 'mailserver_url', 'mailserver_login', 'mailserver_pass',
            'author-email', 'author-url', 'rss-url-1', 'widget-rss[1][url]', 'edit-slug-box', 'trackback_url',
            'metakeyinput', 'post_password', 'slug', 'category_nicename', 'link_url', 'link_image', 'rss_uri', 'menu_order', 'newcomment_author_url', 'pages-exclude', 'user_login', 'user_pass', 'log', 'pwd', 'aim', 'yim', 'jabber', 'gmt_offset', 'ping_sites', 'blog_charset', 'moderation_keys', 'blacklist_keys', 'permalink_structure', 'category_base', 'tag_base', 'upload_path', 'upload_url_path', 'newcontent', 'custom-menu-item-url'
        ]
    };
!function(t){"use strict"
function e(t){return"function"==typeof t}function n(t){return"[object Array]"===Object.prototype.toString.call(t)}function a(t,e){var n
for(n=0;n<t.length;n++)if(t[n]===e)return n
return-1}function r(){L={a:"ھ",b:"ب",c:"غ",D:"ژ",d:"د",e:"ې",F:"ف",f:"ا",G:"گ",g:"ە",H:"خ",h:"ى",i:"ڭ",J:"ج",j:"ق",K:"ۆ",k:"ك",l:"ل",m:"م",n:"ن",o:"و",p:"پ",q:"چ",r:"ر",s:"س",t:"ت",u:"ۇ",v:"ۈ",w:"ۋ",x:"ش",y:"ي",z:"ز","/":"ئ",";":"؛","?":"؟",",":"،",_:"—","(":")",")":"(","[":"]","]":"[","{":"»","}":"«","<":"›",">":"‹"},C=[L.f,L.g,L.e,L.h,L.o,L.u,L.K,L.v],K=L["/"],_=[L[";"],L["?"],L[","]],S={},S.K=i,S.T=o,S.Y=o,A=!0}function i(t){var e,n=t.srcElement||t.target
for(M[n.name]="ug"===M[n.name]?"en":"ug",e=0;e<x.length;e++)x[e]({target:n,keyboardMode:M[n.name]})}function o(t){var e=t.srcElement||t.target
e.dir="ltr"===e.dir?"rtl":"ltr"}function l(t){var e=t.charCodeAt(0)
return e>=H&&D>e&&a(_,t)<0}function c(t){return l(t)&&a(C,t)>=0}function u(t,e){var n,a=e,r=t.selectionStart
return c(e)&&(0===r?a=K+e:(n=t.value[r-1],(!l(n)||c(n))&&(a=K+e))),a}function s(t,e){var n,a,r,i
"selection"in z&&"createRange"in z.selection?z.selection.createRange().text=e:(n=t.selectionStart,"textarea"===t.type&&t.scrollTop&&(r=t.scrollTop,i=t.scrollLeft),T.smartHamza&&(e=u(t,e)),t.value=t.value.slice(0,t.selectionStart)+e+t.value.slice(t.selectionEnd),r&&(t.scrollTop=r,t.scrollLeft=i),a=n+e.length,t.setSelectionRange(a,a))}function d(t,e,n){"addEventListener"in t?(t.removeEventListener(e,n,!1),t.addEventListener(e,n,!1)):(t.detachEvent("on"+e,n),t.attachEvent("on"+e,n))}function h(t,e,n){"removeEventListener"in t?t.removeEventListener(e,n,!1):t.detachEvent("on"+e,n)}function f(t,e){function n(){h(t,"touchmove",a),h(t,"touchend",r),o=null,l=null,c=null,u=null}function a(t){var e
t.touches.length>1?n():(c=t.touches[0].pageX-o,e=t.touches[0].pageY-l,u&&0>u&&c>0||u>0&&0>c||Math.abs(e)>f?n():(u=c,t.preventDefault()))}function r(){var a=Math.abs(c)
n(),a>s&&e({target:t,direction:c>0?"RIGHT":"LEFT"})}function i(e){1===e.touches.length&&(o=e.touches[0].pageX,l=e.touches[0].pageY,d(t,"touchmove",a),d(t,"touchend",r))}var o,l,c,u,s=50,f=15
d(t,"touchstart",i)}function v(t){var e="which"in t?t.which:t.keyCode,n=String.fromCharCode(e).toUpperCase(),a=t.ctrlKey||t.metaKey
a&&n in S&&(S[n](t),"preventDefault"in t?(t.preventDefault(),t.stopPropagation()):(t.returnValue=!1,t.cancelBubble=!0))}function g(t){var e="target"in t?t.target:t.srcElement,n="which"in t?t.which:t.keyCode,a=String.fromCharCode(n),r=/^[A-Za-z]{1}$/.test(a),i=t.ctrlKey||t.metaKey,o=!1
i||"ug"!==M[e.name]||(a in L?("keyCode"in t&&!("which"in t)?t.keyCode=L[a].charCodeAt(0):s(e,L[a]),o=!0):r&&(t.returnValue=!1,o=!0)),o&&("preventDefault"in t?(t.preventDefault(),t.stopPropagation()):t.cancelBubble=!0)}function m(){var t,e,n,a=[]
for(t=z.getElementsByTagName("input"),e=z.getElementsByTagName("textarea"),n=0;n<t.length;n++)"text"===t[n].type.toLowerCase()&&a.push(t[n])
for(n=0;n<e.length;n++)a.push(e[n])
return a}function p(){var t,e,n
if(t=m(),T.all)for(n=0;n<t.length;n++)e=t[n],a(T.blacklist,e.name)<0&&(d(e,"keydown",v),d(e,"keypress",g),f(e,i),M[e.name]="ug")
else for(n=0;n<t.length;n++)e=t[n],a(T.whitelist,e.name)>=0&&(d(e,"keydown",v),d(e,"keypress",g),f(e,i),M[e.name]="ug")}function y(){var t,e,n
for(t=m(),n=0;n<t.length;n++)e=t[n],h(e,"keydown",v),h(e,"keypress",g)}function b(){var e={}
return e.all=!!t.attachAll,e.all?e.blacklist="string"==typeof t.bedit_deny&&t.bedit_deny.length>0?t.bedit_deny.split(":"):[]:e.whitelist="string"==typeof t.bedit_allow&&t.bedit_allow.length>0?t.bedit_allow.split(":"):[],e}function w(t){var e
return t.smartHamza=!("smartHamza"in t&&!t.smartHamza),t.all=!!t.all,t.all?"blacklist"in t?e=n(t.blacklist):(t.blacklist=[],e=!0):e=n(t.whitelist)&&t.whitelist.length>0,e}function E(){var i={}
A||(i="object"==typeof t.UG_VK_OPTS?t.UG_VK_OPTS:b(),w(i)&&(T=i,r(),p()),t.UG_VK={addInputEventListeners:function(t){t&&(T={all:"all"in t?!!t.all:T.all,whitelist:n(t.whitelist)?t.whitelist:T.whitelist,blacklist:n(t.blacklist)?t.blacklist:T.blacklist,smartHamza:"smartHamza"in t?!!t.smartHamza:T.smartHamza}),A||r(),y(),p()},addKeyboardModeChangeListener:function(t){A&&e(t)&&a(x,t)<0&&x.push(t)}})}function k(e){function n(){o||(o=!0,e())}function a(){"removeEventListener"in z&&z.removeEventListener("DOMContentLoaded",a,!1),n()}function r(){if(!o){try{z.body.doScroll("up")}catch(t){return setTimeout(r,50),void 0}n()}}function i(){return"attachEvent"in z||"loading"===z.readyState?(l||(l=!0,"addEventListener"in z?(z.addEventListener("DOMContentLoaded",a,!1),t.addEventListener("load",a,!1)):(z.attachEvent("onload",a),r())),void 0):(n(),void 0)}var o=!1,l=!1
i()}var L,C,_,K,S,T,z=t.document,H=1536,D=1791,M={},x=[],A=!1
k(E);
//alert();
}(window)

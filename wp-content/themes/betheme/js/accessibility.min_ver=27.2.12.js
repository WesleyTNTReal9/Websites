!function(e){"use strict";var s={keysTriggered:{Tab:!1,Enter:!1,ShiftLeft:!1,ShiftRight:!1,Escape:!1,ArrowLeft:!1,ArrowRight:!1,ArrowUp:!1,ArrowDown:!1},utils:{isSimpleHamburgerStack:!(e("body").hasClass("header-simple")&&!e("body").hasClass("mobile-side-slide")),switchExpanded:(s,i)=>e(s).attr("aria-expanded",i),isHeaderBuilderEnabled:e("body").hasClass("mfn-header-template")},menuLinks:[...e("#menu .menu-item a").not(".menu-toggle").toArray(),e("a.mfn-menu-link").toArray()],subheaderLinks:e("#Subheader a").toArray(),wooPopup:e(".mfn-header-login").find("a, input").toArray(),contentLinks:[...e("#Content a").toArray(),...e("#Footer a").toArray()],clickListener(){jQuery(document).on("keydown",'a, *[role="link"], input, button',(e=>{let{originalEvent:s}=e,{code:i}=s;i in this.keysTriggered&&(this.keysTriggered[i]=!0),setTimeout((s=>this.recognizeGesture(e)),1)})),jQuery(document).on("keyup",'a, *[role="link"], input, button',(e=>{let{originalEvent:s}=e,{code:i}=s;i in this.keysTriggered&&(this.keysTriggered[i]=!1),setTimeout((s=>this.recognizeGesture(e)),1)})),jQuery("#skip-links-menu").one("focus","a",(function(){e("#skip-links-menu").css("top","0px")}))},skipLinks(){e(":focus").closest("nav").is("#skip-links-menu")?e("#skip-links-menu").css("top","0px"):e("#skip-links-menu").css("top","-200px")},recognizeGesture(s){let{Tab:i,ShiftLeft:t,ShiftRight:a,ArrowDown:n,ArrowUp:r,ArrowLeft:l,ArrowRight:o,Enter:d,Escape:u}=this.keysTriggered;const c=e(":focus");let g=e("*[aria-expanded=true]:not(#menu):not(.sub-menu)");const m=e("nav#menu").find("*[aria-expanded=true]"),h=e("body").hasClass("side-slide-is-open")?".extras-wrapper ":".top_bar_right ",f=e("body").hasClass("mfn-header-template"),b=()=>{let s=!1;return e("body").hasClass("rtl")&&(s=!0),e("body").hasClass("header-rtl")&&(s=!0),s};if(e(g).length&&!c.closest(g).length){const s=Object.values(g).filter((s=>s.classList&&"Side_slide"!==e(s).attr("id")));if(g=s.length?e(s[0]):g,e(g).hasClass("mfn-header-login")||e(g).hasClass("woocommerce-MyAccount-navigation"))return void e(g).closest(".mfn-header-login[aria-disabled=false]").find("a").first().focus();switch("Side_slide"!==g.attr("id")&&"true"==g.attr("aria-expanded")&&(e(g).siblings(".mfn-close-icon").length?e(g).siblings(".mfn-close-icon").trigger("click"):e(g).find(".mfn-close-icon").trigger("click")),e(g).is(c.siblings(".mfn-menu-item-megamenu"))||e(g).hasClass("mfn-header-tmpl-menu-sidebar")||!f||this.utils.switchExpanded(g,!1),!0){case g.hasClass("mfn-cart-holder"):e(`${h} #header_cart`).trigger("focus");break;case"Side_slide"===g.attr("id"):g.find(".close").trigger("click"),e(".responsive-menu-toggle").trigger("focus")}}if(e(m).length&&this.utils.isSimpleHamburgerStack&&(c.closest(m).length||m.siblings().is(c)||e(m).attr("aria-expanded","false").slideUp()),e(".sub-menu[aria-expanded=true]").each(((s,i)=>{"none"==e(i).css("display")&&this.utils.switchExpanded(i,!1),e(document.activeElement).closest("ul").is(e(i))||e(document.activeElement).siblings("ul").length||e(document.activeElement).closest('ul[aria-expanded="true"]').length||!f||this.utils.switchExpanded(i,!1)})),d)switch(!0){case c.hasClass("close-login-modal"):e("#Wrapper a.toggle-login-modal").trigger("focus").trigger("click"),this.utils.switchExpanded(e(".mfn-header-login[aria-disabled=false]"),!1);break;case c.hasClass("mfn-header-menu-burger")&&f:e(c).trigger("click"),e(c).siblings("div").find("ul a").first().focus();break;case c.hasClass("mfn-header-menu-toggle")&&f:e(c).closest(".mcb-item-header_burger-inner").find("a.mfn-header-menu-burger").trigger("click").focus();break;case c.hasClass("close"):this.utils.switchExpanded(g,!1),e(".responsive-menu-toggle").trigger("focus");break;case c.hasClass("menu-toggle")&&e("body").hasClass("side-slide-is-open"):const s=c.siblings(".sub-menu");"false"===s.attr("aria-expanded")?s.attr("aria-expanded",!0):(s.attr("aria-expanded",!1),s.find(".sub-menu").each(((s,i)=>{e(i).closest("li").removeClass("hover"),e(i).attr("aria-expanded",!1).css("display","none")}))),"block"==s.css("display")&&s.find("a").first().trigger("focus");break;case c.hasClass("menu-toggle")&&!e("body").hasClass("side-slide-is-open"):const i=c.siblings(".sub-menu");if(!this.utils.isSimpleHamburgerStack){if("true"==i.attr("aria-expanded"))this.utils.switchExpanded(i,!1);else{this.utils.switchExpanded(i,!0);let e=i.find("a").first();setTimeout((s=>e.trigger("focus")),100)}break}if("none"!=i.css("display")){this.utils.switchExpanded(i,!1),i.slideUp(0);const e=i.find("*[aria-expanded=true]");e.length&&(this.utils.switchExpanded(e,!1),e.slideUp())}else{this.utils.switchExpanded(i,!0);let e=i.slideDown(0).find("a").first();setTimeout((s=>e.trigger("focus")),100)}break;case c.hasClass("toggle-login-modal"):e(".mfn-header-login[aria-disabled=false]").find("input, a").first().trigger("focus"),e(".mfn-header-login[aria-disabled=false]").attr("aria-expanded","true");break;case"link"===c.attr("role"):c.find(".image_links").length?window.location=c.find("a").attr("href"):c.find(".title").length?c.find(".title").trigger("click"):c.closest(".mfn-woo-list").length&&c.trigger("click");break;case"wpml"===c.attr("data-title"):const t=c.siblings(".wpml-lang-dropdown");"false"==t.attr("aria-expanded")?(t.attr("aria-expanded","true"),t.find("a").first().trigger("focus")):t.attr("aria-expanded","false");break;case c.hasClass("single_add_to_cart_button"):e(".mfn-cart-holder").find("a").first().trigger("focus");break;case c.hasClass("responsive-menu-toggle"):e("body").hasClass("mobile-side-slide")&&(this.menuLinks=[...e("#Side_slide").find("a.close").toArray(),...e(".extras-wrapper").find("a").toArray(),...this.menuLinks,...e("#Side_slide .social").find("a").toArray()],e(this.menuLinks[0]).trigger("focus"),c.trigger("click"),this.utils.switchExpanded(e("#Side_slide"),!0));break;case c.hasClass("overlay-menu-toggle"):"false"==e("#overlay-menu ul").attr("aria-expanded")||void 0===e("#overlay-menu ul").attr("aria-expanded")?(this.utils.switchExpanded(e("#overlay-menu ul"),!0),e("#overlay-menu").find(".menu-item a").first().trigger("focus")):(this.utils.switchExpanded(e("#overlay-menu ul"),!1),c.hasClass("close")&&e(".overlay-menu-toggle").trigger("focus"))}else if(i&&(t||a)){if(e("a.ui-tabs-anchor").attr("tabindex",0),this.skipLinks(),!c.is(".submenu")&&!f&&e("body").hasClass("side-slide-is-open")){const s=c.closest("li").siblings(".hover");s.removeClass("hover"),s.find(".sub-menu").each(((s,i)=>{e(i).closest("li").removeClass("hover")}))}if(c.is(".mfn-menu-link")&&e("body").hasClass("mfn-header-template")&&f){const s=c.siblings(".mfn-submenu").length?"mfn-submenu":"mfn-menu-item-megamenu",i=c.siblings(`.${s}`);if("mfn-submenu"===s&&c.closest("ul").attr("aria-expanded")&&this.utils.switchExpanded(e(c).siblings(".mfn-submenu"),!1),i.length){const i=e(c).siblings(`.${s}`);this.utils.switchExpanded(i,!0)}}c.closest("ul").hasClass("mfn-megamenu-menu")&&c.closest("li").hasClass("menu-item-has-children")&&f&&this.utils.switchExpanded(e(c).siblings(".sub-menu"),!0),c.closest("ul").hasClass("sub-menu")&&c.closest("li").hasClass("menu-item-has-children")&&f&&this.utils.switchExpanded(e(c).siblings(".sub-menu"),!0)}else if(i)switch(e("a.ui-tabs-anchor").attr("tabindex",0),this.skipLinks(),!0){case c.closest("li").hasClass("wc-block-product-categories-list-item"):c.closest(".li-expanded").length||(c.siblings(".cat-expander").trigger("click"),c.siblings("ul").find("a").first().trigger("focus")),c.closest("li").siblings(".li-expanded").each(((s,i)=>e(i).find(".cat-expander").trigger("click")));break;case c.is(".overlay-menu-toggle",".focus")&&"block"===e("#Overlay").css("display"):e(".overlay-menu-toggle").trigger("focus");break;case c.is(e(this.contentLinks[this.contentLinks.length-1]))&&!e("body").hasClass("footer-menu-sticky"):e(".fixed-nav").length?e(".fixed-nav").first().trigger("focus"):e("body a").first().trigger("focus");break;case!c.is(".submenu")&&!f&&e("body").hasClass("side-slide-is-open"):const s=c.closest("li").siblings(".hover");s.removeClass("hover"),s.find(".sub-menu").each(((s,i)=>{e(i).closest("li").removeClass("hover")}));break;case c.is(".mfn-menu-link")&&f:const i=c.siblings(".mfn-submenu").length?"mfn-submenu":"mfn-menu-item-megamenu",t=c.siblings(`.${i}`),a=e(c).closest(".mfn-menu-item-has-megamenu").find("a.mfn-menu-link")[0];if(e(a).trigger("mouseenter").trigger("hover").trigger("mouseover"),"mfn-submenu"===i&&"true"===c.closest("ul").attr("aria-expanded")&&this.utils.switchExpanded(e(c).siblings(".mfn-submenu"),!1),t.length){const s=e(c).siblings(`.${i}`);this.utils.switchExpanded(s,!0)}break;case c.closest("ul").hasClass("mfn-megamenu-menu")&&c.closest("li").hasClass("menu-item-has-children")&&f:case c.closest("ul").hasClass("sub-menu")&&c.closest("li").hasClass("menu-item-has-children")&&f:this.utils.switchExpanded(e(c).siblings(".sub-menu"),!0)}else if(u){var p=Array.from(e(".sub-menu[aria-expanded=true]")),k=e(".woocommerce").find("nav[aria-expanded=true]");if(c.closest("div.mfn-menu-item-megamenu")&&f){let s=c.closest("div.mfn-menu-item-megamenu");this.utils.switchExpanded(e(s),!1),e(s).siblings("a").trigger("focus")}else if(c.closest(".mfn-header-login").length)e("#Wrapper a.toggle-login-modal").trigger("focus"),e("body").removeClass("mfn-show-login-modal"),this.utils.switchExpanded(e(".mfn-header-login[aria-disabled=false]"),!1);else if(e("body").hasClass("side-slide-is-open")&&c.closest("#Side_slide").length)g.find(".close").trigger("click"),e(".responsive-menu-toggle").trigger("focus");else if(p.length&&f)if(e(c).closest(".mfn-header-tmpl-menu-sidebar").length)e(c).closest(".mfn-header-tmpl-menu-sidebar").attr("aria-expanded",!1),e(".mfn-header-menu-toggle").trigger("focus");else{const s=e(c).closest(".mfn-header-mainmenu").find("[aria-expanded=true]").first();e(s).siblings("a").trigger("focus"),this.utils.switchExpanded(s,!1)}else if(p.length&&!f){var x=e("nav").find(".sub-menu[aria-expanded=true]").siblings("a.menu-toggle");p.forEach((s=>{this.utils.switchExpanded(s,!1),e(s).slideUp()})),x.trigger("focus")}else if(!f&&e(".mfn-header-login").find("nav[aria-expanded=true]").length)e(".close-login-modal").trigger("click"),this.utils.switchExpanded(k,!1),e(".myaccount_button").trigger("focus");else{if("true"==e(".mfn-cart-holder").attr("aria-expanded"))return e(".mfn-cart-holder").find(".close-mfn-cart").trigger("click"),this.utils.switchExpanded(e(".mfn-cart-holder"),!1),void e("#header_cart").trigger("focus");e(".responsive-menu-toggle").hasClass("active")?(e(".responsive-menu-toggle").trigger("click"),e(".responsive-menu-toggle").trigger("focus")):e(c).closest("ul").hasClass("mfn-megamenu-menu")&&f?(e(c).closest(".mfn-menu-item-megamenu").attr("aria-expanded",!1),e(c).closest(".mfn-menu-item-megamenu").closest("li").find("a").focus()):e(c).closest(".mfn-header-tmpl-menu-sidebar")&&f&&(e(c).closest(".mfn-header-tmpl-menu-sidebar").attr("aria-expanded",!1),e(".mfn-header-menu-toggle").trigger("focus"))}}else if(b()?l:o){if(c.closest("li").find(".menu-toggle").length){const e=c.siblings(".sub-menu");if("none"==e.css("display")){this.utils.switchExpanded(e,!0);let s=e.slideDown(0).find("a").first();setTimeout((e=>s.trigger("focus")),100)}}}else if((b()?o:l)&&c.closest("ul[aria-expanded=true]").length){const e=c.closest(".sub-menu").find("*[aria-expanded=true]");e.length&&(this.utils.switchExpanded(e,!1),e.slideUp())}},init(){if(e("body").hasClass("keyboard-support")){this.clickListener();const s=e(".sub-menu");s.attr("aria-expanded","false"),e(".menu-toggle, .menu-item a").attr("tabindex","0"),s.siblings("a")&&(this.utils.isHeaderBuilderEnabled?s.siblings("a").each(((s,i)=>{e(i).attr("aria-label",`${mfn.accessibility.translation.toggleSubmenu} ${e(i).find(".menu-label").text()}`)})):s.siblings("a.menu-toggle").each(((s,i)=>{e(i).attr("aria-label",`${mfn.accessibility.translation.toggleSubmenu} ${e(i).siblings("a").text()}`)}))),e("#Content").attr("role","main"),e("#Header_wrapper").attr("role","banner").attr("aria-label",mfn.accessibility.translation.headerContainer),e(".woocommerce-MyAccount-navigation").attr("role","navigation").attr("aria-expanded","false"),e('.mfn-header-login[aria-disabled="true"]').find("a, input, button").each(((s,i)=>e(i).attr("tabindex","-1"))),e("body").is(".header-creative, .header-simple, .header-overlay")||e("#menu").removeAttr("aria-expanded")}}},i={onLinkAlert(){e("a").click((function(s){const i=e(s.currentTarget);"_blank"!==i.attr("target")&&"0"!==i.attr("target")||(confirm("The link will open in a new tab. Do you want to continue? ")||s.preventDefault())}))},init(){e("body").hasClass("warning-links")&&this.onLinkAlert()}};e(window).on("load",(function(){s.init(),i.init()}))}(jQuery);
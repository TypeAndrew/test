!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={};Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")};var o={};function i(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e,t,n){t&&i(e.prototype,t);n&&i(e,n);return e};var r,a={};Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var u="Expected a function",l=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,s=/^0o[0-7]+$/i,d=parseInt,v="object"==typeof t&&t&&t.Object===Object&&t,m="object"==typeof self&&self&&self.Object===Object&&self,g=v||m||Function("return this")(),p=Object.prototype.toString,y=Math.max,b=Math.min,S=function(){return g.Date.now()};function h(e,t,n){var o,i,r,a,l,f,c=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError(u);function m(t){var n=o,r=i;return o=i=void 0,c=t,a=e.apply(r,n)}function g(e){return c=e,l=setTimeout(h,t),s?m(e):a}function p(e){var n=e-f;return void 0===f||n>=t||n<0||d&&e-c>=r}function h(){var e=S();if(p(e))return j(e);l=setTimeout(h,function(e){var n=t-(e-f);return d?b(n,r-(e-c)):n}(e))}function j(e){return l=void 0,v&&o?m(e):(o=i=void 0,a)}function k(){var e=S(),n=p(e);if(o=arguments,i=this,f=e,n){if(void 0===l)return g(f);if(d)return l=setTimeout(h,t),m(f)}return void 0===l&&(l=setTimeout(h,t)),a}return t=O(t)||0,w(n)&&(s=!!n.leading,r=(d="maxWait"in n)?y(O(n.maxWait)||0,t):r,v="trailing"in n?!!n.trailing:v),k.cancel=function(){void 0!==l&&clearTimeout(l),c=0,o=f=i=l=void 0},k.flush=function(){return void 0===l?a:j(S())},k}function w(t){var n=void 0===t?"undefined":e(a)(t);return!!t&&("object"==n||"function"==n)}function O(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(a)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==p.call(t)}(t))return NaN;if(w(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=w(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(l,"");var o=c.test(t);return o||s.test(t)?d(t.slice(2),o?2:8):f.test(t)?NaN:+t}r=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError(u);return w(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),h(e,t,{leading:o,maxWait:t,trailing:i})},(new(function(){"use strict";function t(){e(n)(this,t)}return e(o)(t,[{key:"pushSubmeet",value:function(){var e;(e="button[type=submit]",document.querySelector(e)).addEventListener("click",(function(){var e=localStorage.getItem("feedback-form-state"),t=JSON.parse(e);console.log(t),localStorage.clear()}))}},{key:"CreateState",value:function(e,t){var n=JSON.parse(localStorage.getItem("feedback-form-state"));null===n&&(n={name:"",message:""}),"email"===e&&(n.email=t),"textarea"===e&&(n.message=t),localStorage.setItem("feedback-form-state",JSON.stringify(n)),console.log(n)}},{key:"listenInput",value:function(){var t,n=this;(t=".feedback-form",document.querySelector(t)).addEventListener("input",e(r)((function(){if(void 0!==event){console.log(event.target);var e=event.target.value,t=event.target.type;n.CreateState(t,e)}}),500))}},{key:"getStoreValues",value:function(){console.log("!!!!!!");var e=localStorage.getItem("feedback-form-state"),t=JSON.parse(e),n=function(e){return document.querySelector(e)};void 0!==t.email&&(n("input[name=email]").value=t.email),void 0!==t.message&&(n("textarea[name=message]").value=t.message)}},{key:"listenReload",value:function(){window.addEventListener("load",this.getStoreValues)}},{key:"init",value:function(){this.listenReload(),this.listenInput(),this.pushSubmeet()}}]),t}())).init()}();
//# sourceMappingURL=03-feedback.6bd23d73.js.map
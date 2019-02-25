/*! modernizr 3.3.1 (Custom Build) | MIT *
 * https://modernizr.com/download/?-backgroundsize-bgpositionxy-bgsizecover-borderradius-boxshadow-boxsizing-cssanimations-csstransforms-csstransitions-rgba-svg-setclasses !*/
!function(e,n,t){function o(e,n){return typeof e===n}function r(){var e,n,t,r,s,i,a;for(var d in b)if(b.hasOwnProperty(d)){if(e=[],n=b[d],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(r=o(n.fn,"function")?n.fn():n.fn,s=0;s<e.length;s++)i=e[s],a=i.split("."),1===a.length?Modernizr[a[0]]=r:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=r),y.push((r?"":"no-")+a.join("-"))}}function s(e){var n=w.className,t=Modernizr._config.classPrefix||"";if(C&&(n=n.baseVal),Modernizr._config.enableJSClass){var o=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(o,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),C?w.className.baseVal=n:w.className=n)}function i(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):C?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function a(e,n){return!!~(""+e).indexOf(n)}function d(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function l(e,n){return function(){return e.apply(n,arguments)}}function u(e,n,t){var r;for(var s in e)if(e[s]in n)return t===!1?e[s]:(r=n[e[s]],o(r,"function")?l(r,t||n):r);return!1}function f(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function c(){var e=n.body;return e||(e=i(C?"svg":"body"),e.fake=!0),e}function p(e,t,o,r){var s,a,d,l,u="modernizr",f=i("div"),p=c();if(parseInt(o,10))for(;o--;)d=i("div"),d.id=r?r[o]:u+(o+1),f.appendChild(d);return s=i("style"),s.type="text/css",s.id="s"+u,(p.fake?p:f).appendChild(s),p.appendChild(f),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(n.createTextNode(e)),f.id=u,p.fake&&(p.style.background="",p.style.overflow="hidden",l=w.style.overflow,w.style.overflow="hidden",w.appendChild(p)),a=t(f,e),p.fake?(p.parentNode.removeChild(p),w.style.overflow=l,w.offsetHeight):f.parentNode.removeChild(f),!!a}function m(n,o){var r=n.length;if("CSS"in e&&"supports"in e.CSS){for(;r--;)if(e.CSS.supports(f(n[r]),o))return!0;return!1}if("CSSSupportsRule"in e){for(var s=[];r--;)s.push("("+f(n[r])+":"+o+")");return s=s.join(" or "),p("@supports ("+s+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return t}function g(e,n,r,s){function l(){f&&(delete k.style,delete k.modElem)}if(s=o(s,"undefined")?!1:s,!o(r,"undefined")){var u=m(e,r);if(!o(u,"undefined"))return u}for(var f,c,p,g,v,h=["modernizr","tspan","samp"];!k.style&&h.length;)f=!0,k.modElem=i(h.shift()),k.style=k.modElem.style;for(p=e.length,c=0;p>c;c++)if(g=e[c],v=k.style[g],a(g,"-")&&(g=d(g)),k.style[g]!==t){if(s||o(r,"undefined"))return l(),"pfx"==n?g:!0;try{k.style[g]=r}catch(y){}if(k.style[g]!=v)return l(),"pfx"==n?g:!0}return l(),!1}function v(e,n,t,r,s){var i=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+T.join(i+" ")+i).split(" ");return o(n,"string")||o(n,"undefined")?g(a,n,r,s):(a=(e+" "+_.join(i+" ")+i).split(" "),u(a,n,t))}function h(e,n,o){return v(e,t,t,n,o)}var y=[],b=[],x={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){b.push({name:e,fn:n,options:t})},addAsyncTest:function(e){b.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=x,Modernizr=new Modernizr,Modernizr.addTest("svg",!!n.createElementNS&&!!n.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect);var w=n.documentElement,C="svg"===w.nodeName.toLowerCase();Modernizr.addTest("rgba",function(){var e=i("a").style;return e.cssText="background-color:rgba(150,255,150,.5)",(""+e.backgroundColor).indexOf("rgba")>-1});var S="Moz O ms Webkit",T=x._config.usePrefixes?S.split(" "):[];x._cssomPrefixes=T;var _=x._config.usePrefixes?S.toLowerCase().split(" "):[];x._domPrefixes=_;var z={elem:i("modernizr")};Modernizr._q.push(function(){delete z.elem});var k={style:z.elem.style};Modernizr._q.unshift(function(){delete k.style}),x.testAllProps=v,x.testAllProps=h,Modernizr.addTest("cssanimations",h("animationName","a",!0)),Modernizr.addTest("bgpositionxy",function(){return h("backgroundPositionX","3px",!0)&&h("backgroundPositionY","5px",!0)}),Modernizr.addTest("backgroundsize",h("backgroundSize","100%",!0)),Modernizr.addTest("bgsizecover",h("backgroundSize","cover")),Modernizr.addTest("borderradius",h("borderRadius","0px",!0)),Modernizr.addTest("boxshadow",h("boxShadow","1px 1px",!0)),Modernizr.addTest("boxsizing",h("boxSizing","border-box",!0)&&(n.documentMode===t||n.documentMode>7)),Modernizr.addTest("csstransitions",h("transition","all",!0)),Modernizr.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&h("transform","scale(1)",!0)}),r(),s(y),delete x.addTest,delete x.addAsyncTest;for(var E=0;E<Modernizr._q.length;E++)Modernizr._q[E]();e.Modernizr=Modernizr}(window,document);
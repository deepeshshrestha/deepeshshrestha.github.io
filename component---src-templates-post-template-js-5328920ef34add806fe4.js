(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"A2+M":function(e,t,n){var r=n("X8hv");e.exports={MDXRenderer:r}},J4bc:function(e,t,n){"use strict";n.r(t),n.d(t,"query",(function(){return v}));n("HQhv");var r=n("Wbzz"),o=n("A2+M"),a=n("q1tI"),c=n.n(a),i=n("VXBa"),l=n("vOnD"),p=n("ibEc");function u(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}(["\n    font-size: 2.5rem;\n  "]);return u=function(){return e},e}var f=l.b.div.withConfig({displayName:"post-template__BlogTemplateWrapper",componentId:"cg11yr-0"})([".arrow{border:solid black;border-width:0 3px 3px 0;display:inline-block;padding:3px;}.right{transform:rotate(-45deg);-webkit-transform:rotate(-45deg);}.left{transform:rotate(135deg);-webkit-transform:rotate(135deg);}"]),s=l.b.span.withConfig({displayName:"post-template__BlogTitle",componentId:"cg11yr-1"})(["margin:0;min-width:0;line-height:1.25;font-weight:700;margin-bottom:0.25rem;font-size:3rem;margin-top:0.5rem;",""],p.a.lessThan("small")(u())),m=l.b.div.withConfig({displayName:"post-template__BlogMeta",componentId:"cg11yr-2"})(["font-size:1.25rem;font-weight:300;line-height:28px;text-decoration:none;margin:16px 0 40px;"]),g=l.b.time.withConfig({displayName:"post-template__BlogTime",componentId:"cg11yr-3"})([""]),d=function(e){var t=e.tags;return c.a.createElement(c.a.Fragment,null,t.map((function(e,t){var n=0===t?"":",";return c.a.createElement("span",{key:t},n,c.a.createElement(y,{to:"/tags/"+e}," ",e))})))},y=Object(l.b)(r.a).withConfig({displayName:"post-template__BlogCategoryLink",componentId:"cg11yr-4"})(["text-decoration:none;color:#000;&:hover{color:gray;}"]),b=l.b.span.withConfig({displayName:"post-template__BlogBody",componentId:"cg11yr-5"})(["margin:20px 0px;font-size:1rem;letter-spacing:-0.003em;line-height:1.625;"]),h=l.b.div.withConfig({displayName:"post-template__BlogNavigation",componentId:"cg11yr-6"})(["display:flex;justify-content:space-between;border-top:1px solid #ccc;"]),w=Object(l.b)(r.a).withConfig({displayName:"post-template__BlogLink",componentId:"cg11yr-7"})(["color:#000;text-decoration:none;font-size:20px;font-weight:500;line-height:28px;cursor:pointer;display:flex;align-items:center;&:hover{color:gray;}"]);t.default=function(e){var t=e.data,n=e.pageContext,r=e.location,a=t.mdx,l=a.frontmatter,p=a.body,u=n.previous,y=n.next,v=r&&r.pathname&&r.pathname.split("/")[1];return console.log(t.mdx),c.a.createElement(i.a,{path:v},c.a.createElement(f,null,c.a.createElement(s,null,l.title),c.a.createElement(m,null,c.a.createElement(g,null,l.date),"__",l.tags&&c.a.createElement(d,{tags:l.tags})),c.a.createElement(b,null,c.a.createElement(o.MDXRenderer,null,p)),c.a.createElement(h,null,!1===y?c.a.createElement("div",null):c.a.createElement(c.a.Fragment,null,y?c.a.createElement(w,{to:y.fields.slug},c.a.createElement("i",{className:"arrow left"})," ",c.a.createElement("p",null,y.frontmatter.title)):c.a.createElement("div",null))," ",!1===u?c.a.createElement("div",null):c.a.createElement(c.a.Fragment,null,u?c.a.createElement(w,{to:u.fields.slug},c.a.createElement("p",null,u.frontmatter.title)," ",c.a.createElement("i",{className:"arrow right"})):c.a.createElement("div",null)))))};var v="3945126302"},X8hv:function(e,t,n){function r(e,t,n){return(r=o()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));return n&&a(o,n.prototype),o}).apply(null,arguments)}function o(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n("xtjI"),n("Dq+y"),n("Ggvi"),n("rzGZ"),n("m210"),n("4DPX"),n("YbXK"),n("cFtU"),n("pJf4"),n("q8oJ"),n("8npG"),n("nWfQ"),n("nWfQ"),n("pJf4"),n("q8oJ"),n("YbXK"),n("cFtU"),n("m210"),n("xtjI"),n("4DPX"),n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi");var f=n("q1tI"),s=n("7ljp"),m=s.useMDXComponents,g=s.mdx,d=n("BfwJ").useMDXScope;e.exports=function(e){var t=e.scope,n=e.components,o=e.children,a=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["scope","components","children"]),i=m(n),l=d(t),u=f.useMemo((function(){if(!o)return null;var e=p({React:f,mdx:g},l),t=Object.keys(e),n=t.map((function(t){return e[t]}));return r(Function,["_fn"].concat(c(t),[""+o])).apply(void 0,[{}].concat(c(n)))}),[o,t]);return f.createElement(u,p({components:i},a))}},nWfQ:function(e,t,n){var r=n("P8UN"),o=n("nsRs"),a=n("nONw"),c=n("1a8y"),i=n("BjK0"),l=n("96qb"),p=n("16Xr"),u=(n("emib").Reflect||{}).construct,f=l((function(){function e(){}return!(u((function(){}),[],e)instanceof e)})),s=!l((function(){u((function(){}))}));r(r.S+r.F*(f||s),"Reflect",{construct:function(e,t){a(e),c(t);var n=arguments.length<3?e:a(arguments[2]);if(s&&!f)return u(e,t,n);if(e==n){switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3])}var r=[null];return r.push.apply(r,t),new(p.apply(e,r))}var l=n.prototype,m=o(i(l)?l:Object.prototype),g=Function.apply.call(e,m,t);return i(g)?g:m}})}}]);
//# sourceMappingURL=component---src-templates-post-template-js-5328920ef34add806fe4.js.map
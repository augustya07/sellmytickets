_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[12],{"HaE+":function(e,t,n){"use strict";function r(e,t,n,r,o,a,c){try{var u=e[a](c),i=u.value}catch(l){return void n(l)}u.done?t(i):Promise.resolve(i).then(r,o)}function o(e){return function(){var t=this,n=arguments;return new Promise((function(o,a){var c=e.apply(t,n);function u(e){r(c,o,a,u,i,"next",e)}function i(e){r(c,o,a,u,i,"throw",e)}u(void 0)}))}}n.d(t,"a",(function(){return o}))},RNiq:function(e,t,n){"use strict";n.r(t);var r=n("o0o1"),o=n.n(r),a=n("HaE+"),c=n("q1tI"),u=n.n(c),i=n("YFqc"),l=n.n(i),f=u.a.createElement,s=function(e){e.currentUser;var t=e.tickets.map((function(e){return f("tr",{key:e.id},f("td",null,e.title),f("td",null,e.price),f("td",null,f(l.a,{href:"/tickets/[ticketId]",as:"/tickets/".concat(e.id)},f("a",null,"View"))))}));return f("div",null,f("h1",null,"Tickets"),f("table",{className:"table"},f("thead",null,f("tr",null,f("th",null,"Title"),f("th",null,"Price"),f("th",null,"Link"))),f("tbody",null,t)))};s.getInitialProps=function(){var e=Object(a.a)(o.a.mark((function e(t,n,r){var a,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.get("/api/tickets");case 2:return a=e.sent,c=a.data,e.abrupt("return",{tickets:c});case 5:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),t.default=s},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),o=n("284h");t.__esModule=!0,t.default=void 0;var a,c=o(n("q1tI")),u=n("elyg"),i=n("nOHt"),l=new Map,f=window.IntersectionObserver,s={};var p=function(e,t){var n=a||(f?a=new f((function(e){e.forEach((function(e){if(l.has(e.target)){var t=l.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),l.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),l.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}l.delete(e)}):function(){}};function d(e,t,n,r){(0,u.isLocalURL)(t)&&(e.prefetch(t,n,r).catch((function(e){0})),s[t+"%"+n]=!0)}var v=function(e){var t=!1!==e.prefetch,n=c.default.useState(),o=r(n,2),a=o[0],l=o[1],v=(0,i.useRouter)(),h=v&&v.pathname||"/",w=c.default.useMemo((function(){var t=(0,u.resolveHref)(h,e.href,!0),n=r(t,2),o=n[0],a=n[1];return{href:o,as:e.as?(0,u.resolveHref)(h,e.as):a||o}}),[h,e.href,e.as]),y=w.href,E=w.as;c.default.useEffect((function(){if(t&&f&&a&&a.tagName&&(0,u.isLocalURL)(y)&&!s[y+"%"+E])return p(a,(function(){d(v,y,E)}))}),[t,a,y,E,v]);var g=e.children,k=e.replace,_=e.shallow,b=e.scroll;"string"===typeof g&&(g=c.default.createElement("a",null,g));var m=c.Children.only(g),L={ref:function(e){e&&l(e),m&&"object"===typeof m&&m.ref&&("function"===typeof m.ref?m.ref(e):"object"===typeof m.ref&&(m.ref.current=e))},onClick:function(e){m.props&&"function"===typeof m.props.onClick&&m.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,u.isLocalURL)(n))&&(e.preventDefault(),null==c&&(c=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:a}).then((function(e){e&&c&&(window.scrollTo(0,0),document.body.focus())})))}(e,v,y,E,k,_,b)}};return t&&(L.onMouseEnter=function(e){(0,u.isLocalURL)(y)&&(m.props&&"function"===typeof m.props.onMouseEnter&&m.props.onMouseEnter(e),d(v,y,E,{priority:!0}))}),(e.passHref||"a"===m.type&&!("href"in m.props))&&(L.href=(0,u.addBasePath)((0,u.addLocale)(E,v&&v.locale,v&&v.defaultLocale))),c.default.cloneElement(m,L)};t.default=v},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",0,2,1,3]]]);
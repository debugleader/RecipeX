(this.webpackJsonprecipe=this.webpackJsonprecipe||[]).push([[0],{12:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(4),i=a.n(r),o=(a(12),a(2)),l=a.n(o),s=a(5),m=a(1),u=a(6),p=a.n(u);a(15);function f(e){var t=e.infoKey,a=e.title,r=e.image,i=a.replace(/ /g,"+");Object(c.useEffect)((function(){p.a.init()}),[]);return n.a.createElement("div",{className:"recipe-item","data-aos":function(e){switch(e%4){case 0:return"flip-up";case 1:return"flip-down";case 2:return"flip-left";case 3:return"flip-right"}}(t)},n.a.createElement("h1",null,n.a.createElement("a",{href:"http://www.google.com/search?q=".concat(i),target:"_blank"},a)),n.a.createElement("div",{className:"img-container"},n.a.createElement("a",{href:"http://www.google.com/search?q=".concat(i),target:"_blank"},n.a.createElement("img",{src:r,alt:"Image of ".concat(a)}))))}function h(e){var t=e.title,a=e.image,c=t.replace(/ /g,"+");return n.a.createElement("div",{className:"recipe-item"},n.a.createElement("h1",null,n.a.createElement("a",{href:"http://www.google.com/search?q=".concat(c),target:"_blank"},t)),n.a.createElement("div",{className:"img-container"},n.a.createElement("a",{href:"http://www.google.com/search?q=".concat(c),target:"_blank"},n.a.createElement("img",{src:a,alt:"Image of ".concat(t)}))))}function g(e){var t=e.style;return e.loading?n.a.createElement("div",null,n.a.createElement("h1",{className:"err",style:t},"Loading...")):n.a.createElement("div",null)}a(16);function d(){var e=0,t=Object(c.useState)([]),a=Object(m.a)(t,2),r=a[0],i=a[1],o=Object(c.useState)(""),u=Object(m.a)(o,2),p=u[0],d=u[1],E=Object(c.useState)("banana"),b=Object(m.a)(E,2),w=b[0],v=b[1],y=Object(c.useState)(!1),j=Object(m.a)(y,2),O=j[0],N=j[1],k=Object(c.useState)(!0),S=Object(m.a)(k,2),x=S[0],q=S[1],_=Object(c.useState)({}),I=Object(m.a)(_,2),K=I[0],M=I[1],A="https://api.edamam.com/search?q=".concat(w,"&app_id=").concat("02ed5e12","&app_key=").concat("301f8c58ac9ffd6ee4906f68d1b010c9");Object(c.useEffect)((function(){M(window.matchMedia("(max-width: 800px)"))}),[]),Object(c.useEffect)((function(){W()}),[w]);var B=0,J=function(){return 0==B?(e++,B++):B--,e},W=function(){var e=Object(s.a)(l.a.mark((function e(){var t,a,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(A);case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,c=a.hits,c.forEach((function(e){return e.recipe.calories=Math.round(e.recipe.calories)})),console.log(a.hits),a.hits[0]?a.hits[0].recipe.label&&N(!1):N(!0),i(a.hits),q(!1);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),X=r.map((function(e){return n.a.createElement(f,{key:J(),infoKey:J(),title:e.recipe.label,calories:e.recipe.calories,image:e.recipe.image})})),C=r.map((function(e){return n.a.createElement(h,{key:J(),infoKey:J(),title:e.recipe.label,calories:e.recipe.calories,image:e.recipe.image})}));return n.a.createElement("div",{className:"App"},n.a.createElement("header",{className:"header"},n.a.createElement("h1",{className:"recipeX"},"RecipeX")),n.a.createElement("form",{onSubmit:function(e){e.preventDefault(),v(p),q(!0),d("")},className:"search-form"},n.a.createElement("input",{className:"search-bar",type:"text",value:p,onChange:function(e){d(e.target.value)}}),n.a.createElement("button",{className:"search-button",type:"submit"},"Go!")),n.a.createElement(g,{style:x?{opacity:1}:{opacity:0},loading:x}),n.a.createElement("div",{className:"container"},K.matches?X:C),n.a.createElement("h1",{style:O?{opacity:1}:{opacity:0},className:"err"},"Sorry, your search query did not match any result in our API!"))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,a){e.exports=a(17)}},[[7,1,2]]]);
//# sourceMappingURL=main.6d05e8df.chunk.js.map
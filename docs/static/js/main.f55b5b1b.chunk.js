(this["webpackJsonpgift-react"]=this["webpackJsonpgift-react"]||[]).push([[0],{20:function(e,t,c){},21:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c(9),s=c.n(a),i=c(3),r=c(11),l=(c(8),c(0)),d=function(e){var t=e.setCategories,c=Object(n.useState)(""),a=Object(i.a)(c,2),s=a[0],d=a[1];return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("form",{onSubmit:function(e){e.preventDefault(),s.trim().length>2&&(t((function(e){return[s].concat(Object(r.a)(e))})),d(""))},children:Object(l.jsxs)("div",{className:"input-group mb-3",children:[Object(l.jsx)("input",{type:"text",className:"form-control",placeholder:"Example: Dragon Ball Z","aria-label":"Dragon Ball Z","aria-describedby":"button-addon2",value:s,onChange:function(e){d(e.target.value)}}),Object(l.jsx)("button",{className:"btn btn-outline-secondary text-success",type:"submit",id:"button-addon2",children:"Go!"})]})})})},o=c(12),j=c(7),b=c.n(j),u=c(10),m=function(){var e=Object(u.a)(b.a.mark((function e(t,c){var n,a,s,i,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.giphy.com/v1/gifs/search?limit=".concat(c,"&q=").concat(encodeURI(t),"&api_key=umucPVeT4olRI9Bmf3KbRYWLoVA7vy22"),e.next=3,fetch(n);case 3:return a=e.sent,e.next=6,a.json();case 6:return s=e.sent,i=s.data,r=i.map((function(e){var t,c;return{id:""===e.id?"Not found id":e.id,tittle:""===e.title?"Not found tittle":e.title,url:""===(null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url)?"https://media.tenor.com/images/2d39c2937b6adcf2e9f0b7bd258fb3f8/tenor.gif":null===(c=e.images)||void 0===c?void 0:c.downsized_medium.url}})),0===i.length&&(r=[{id:"N",tittle:"Not found",url:"https://media.tenor.com/images/2d39c2937b6adcf2e9f0b7bd258fb3f8/tenor.gif"}]),e.abrupt("return",r);case 11:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}(),h=function(e){var t=e.tittle,c=e.url;return Object(l.jsxs)("div",{className:"card animate__animated animate__fadeIn animate__delay-1s bg-blues",children:[Object(l.jsx)("img",{className:"imgCard",src:c,alt:t}),Object(l.jsxs)("p",{children:[" ",t]})]})},x=function(e){var t=e.category,c=function(e,t){var c=Object(n.useState)({data:[],loading:!0}),a=Object(i.a)(c,2),s=a[0],r=a[1];return Object(n.useEffect)((function(){m(e,t).then((function(e){r({data:e,loading:!1})}))}),[e,t]),s}(t,e.numImages),a=c.data,s=c.loading;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("h3",{className:"card animate__animated animate__fadeIn mt-2 bg-blues",children:[" ",t]}),s&&Object(l.jsx)("p",{className:"card animate__animated animate__flash text-black",children:" Loading..."}),Object(l.jsx)("div",{className:"card-grid",children:a.map((function(e){return Object(l.jsx)(h,Object(o.a)({},e),e.id)}))})]})},f=c(2),O=function(){return Object(l.jsxs)("div",{className:"site-footer",children:[Object(l.jsxs)("div",{className:"container",children:[Object(l.jsxs)("div",{className:"row",children:[Object(l.jsxs)("div",{className:"col-sm-12 col-md-6",children:[Object(l.jsx)("h6",{children:"About"}),Object(l.jsxs)("p",{className:"text-justify",children:["Junior developer, I started my career in 2020 for loving technology in a virtual Bootcamp. Today, I have experience in developing responsive web applications in full java stack, using: For the frontend I use frameworks like Vue.js , Vue CLI -V 3.x and React.js. For backend I use Java with frameworks like Spring with Maven or Gradle support. Other technologies that I currently use:",Object(l.jsx)("span",{className:"text-danger",children:"HTML CSS 3 JavaScript Jquery Agile Ajax Python Visual Basic SQL"})]})]}),Object(l.jsxs)("div",{className:"col-xs-6 col-md-3",children:[Object(l.jsx)("h6",{children:"Quick Links"}),Object(l.jsxs)("ul",{className:"footer-links",children:[Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"https://github.com/AgustinEstrada13",children:"About Me"})}),Object(l.jsxs)("li",{children:[Object(l.jsx)("button",{type:"button",className:"btn btn-outline-secondary mt-2",onClick:function(){Object(f.$)("html, body").animate({scrollTop:0},"fast")},children:"Go to Top"})," "]})]})]})]}),Object(l.jsx)("hr",{})]}),Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)("div",{className:"col-md-8 col-sm-6 col-xs-12",children:Object(l.jsxs)("p",{className:"copyright-text",children:["Copyright \xa9 2021 - Agust\xedn Estrada -",Object(l.jsx)("a",{href:"https://www.linkedin.com/in/agust%C3%ADn-estrada-9b74a220a/",children:" Profile"}),"."]})}),Object(l.jsx)("div",{className:"col-md-4 col-sm-6 col-xs-12",children:Object(l.jsxs)("ul",{className:"social-icons",children:[Object(l.jsx)("li",{children:Object(l.jsx)("a",{className:"GitHub",href:"https://github.com/AgustinEstrada13",children:Object(l.jsx)("i",{className:"fa fa-github"})})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{className:"linkedin",href:"https://www.linkedin.com/in/agust%C3%ADn-estrada-9b74a220a/",children:Object(l.jsx)("i",{className:"fa fa-linkedin"})})})]})})]})})]})},p=function(){var e=Object(n.useState)(["Dragon Ball"]),t=Object(i.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(15),r=Object(i.a)(s,2),o=r[0],j=r[1];Object(n.useEffect)((function(){u()}),[]);var b=function(e){j(e)},u=function(){Object(f.$)(document).ready((function(){Object(f.$)(".selLabel").click((function(){Object(f.$)(".dropdown").toggleClass("active")})),Object(f.$)(".dropdown-list li").click((function(){Object(f.$)(".selLabel").text(Object(f.$)(this).text()),Object(f.$)(".dropdown").removeClass("active"),Object(f.$)(".selected-item p span").text(Object(f.$)(".selLabel").text())}))}))};return Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{className:"contain d-flex flex-row justify-content-between",children:[Object(l.jsx)("h2",{className:"mt-5 text-center text-danger",children:"Gift Expert App | Find Yours Favorite Gifs "}),Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:"selected-item",children:Object(l.jsxs)("p",{children:["Selected : ",Object(l.jsx)("span",{children:"15"})]})}),Object(l.jsxs)("div",{className:"dropdown",children:[Object(l.jsx)("span",{className:"selLabel",children:"How Many Images?"}),Object(l.jsx)("input",{type:"hidden",name:"cd-dropdown"}),Object(l.jsxs)("ul",{className:"dropdown-list",children:[Object(l.jsx)("li",{onClick:function(e){return b(e.target.offsetParent.id)},id:"15",children:Object(l.jsx)("span",{children:"15 Images"})}),Object(l.jsx)("li",{onClick:function(e){return b(e.target.offsetParent.id)},id:"25",children:Object(l.jsx)("span",{children:"25 Images"})}),Object(l.jsx)("li",{onClick:function(e){return b(e.target.offsetParent.id)},id:"35",children:Object(l.jsx)("span",{children:"35 Images"})}),Object(l.jsx)("li",{onClick:function(e){return b(e.target.offsetParent.id)},id:"50",children:Object(l.jsx)("span",{children:"50 Images"})})]})]})]})]}),Object(l.jsx)(d,{setCategories:a}),Object(l.jsx)("hr",{}),Object(l.jsx)("ol",{children:c.map((function(e){return Object(l.jsx)(x,{category:e,numImages:o},e)}))}),Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(O,{})})]})},g=(c(20),document.querySelector("#app"));s.a.render(Object(l.jsx)(p,{}),g)}},[[21,1,2]]]);
//# sourceMappingURL=main.f55b5b1b.chunk.js.map
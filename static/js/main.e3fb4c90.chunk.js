(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{30:function(e,t,a){e.exports=a(45)},36:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),l=a.n(c),u=(a(35),a(36),a(7)),i=a(50),o=a(53),m=a(51),s=a(28),p=a(23),d=a(24),E=a(52),f=a(47),g=function(e){var t=e.setCategories,a=Object(n.useState)(""),c=Object(u.a)(a,2),l=c[0],i=c[1];return r.a.createElement(E.a,{onSubmit:function(e){e.preventDefault(),l.trim().length>2&&(t((function(e){return[l].concat(Object(s.a)(e))})),i(""))}},r.a.createElement(E.a.Group,null,r.a.createElement(f.a,null,r.a.createElement(E.a.Control,{type:"text",value:l,onChange:function(e){i(e.target.value)}}),r.a.createElement(f.a.Append,null,r.a.createElement(f.a.Text,null,r.a.createElement(p.a,{icon:d.a})))),r.a.createElement(E.a.Text,{className:"text-muted"},"Type something + Enter button")))},h=a(48),b=a(49),v=(a(43),a(54)),x=function(e){var t=e.title,a=e.url;return r.a.createElement(v.a,{className:"animate__animated animate__fadeIn"},r.a.createElement(v.a.Img,{variant:"top",src:a}),r.a.createElement(v.a.Body,null,r.a.createElement(v.a.Title,null,t)))},y=a(19),j=a.n(y),O=a(25),_=function(){var e=Object(O.a)(j.a.mark((function e(t){var a,n,r,c,l;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://api.giphy.com/v1/gifs/search?api_key=qvTmuGaKAiWVAVQ6JGVWpGhV3Bb89TxX&q=".concat(encodeURI(t),"&limit=10"),e.next=3,fetch(a);case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,c=r.data,l=c.map((function(e){return{id:e.id,title:e.title,url:e.images.downsized_medium.url}})),e.abrupt("return",l);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(e){var t=e.category,a=function(e){var t=Object(n.useState)({data:[],loading:!0}),a=Object(u.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)((function(){_(e).then((function(e){c({data:e,loading:!1})}))}),[e]),r}(t),c=a.data,l=a.loading;return r.a.createElement("div",null,r.a.createElement("h3",{className:"animate__animated animate__fadeIn"},t),l&&r.a.createElement(h.a,{animation:"border",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")),r.a.createElement(b.a,null,c.map((function(e){return r.a.createElement(x,Object.assign({key:e.id},e))}))))},G=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],c=t[1];return r.a.createElement(i.a,null,r.a.createElement(o.a,{fixed:"top",bg:"dark",variant:"dark"},r.a.createElement(o.a.Brand,{href:"#home"},"GifExpertApp"),r.a.createElement(o.a.Toggle,null)),r.a.createElement("div",{className:"content"},r.a.createElement(m.a,null,r.a.createElement("h1",null,"GifExpertApp"),r.a.createElement("p",null,"Search all the GIFs and Stickers. ",r.a.createElement("code",null,"Powered by GIPHY")),r.a.createElement(g,{setCategories:c})),a.map((function(e){return r.a.createElement(k,{key:e,category:e})}))))};l.a.render(r.a.createElement(G,null),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.e3fb4c90.chunk.js.map
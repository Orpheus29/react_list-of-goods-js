(this["webpackJsonpreact_list-of-goods-js"]=this["webpackJsonpreact_list-of-goods-js"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var s=n(7),c=n.n(s),r=n(6),i=n(8),o=(n(13),n(14),n(4)),a=n.n(o),l=n(1),u=n(0),b="alphabet",j="length",h=!1,d=!1,g=!1;var p=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],f=function(){var t=Object(l.useState)(""),e=Object(r.a)(t,2),n=e[0],s=e[1],c=Object(l.useState)(""),o=Object(r.a)(c,2),f=o[0],O=o[1],m=function(t,e,n){var s=Object(i.a)(t);return s.sort((function(t,n){switch(e){case b:return h=!0,d=!1,t.localeCompare(n);case j:return d=!0,h=!1,t.length-n.length;default:return 0}})),n&&s.reverse(),s}(p,n,g);return Object(u.jsxs)("div",{className:"section content",children:[Object(u.jsxs)("div",{className:"buttons",children:[Object(u.jsx)("button",{onClick:function(){return s(b)},type:"button",className:a()("button","is-info",{"is-light":!h}),children:"Sort alphabetically"}),Object(u.jsx)("button",{onClick:function(){return s(j)},type:"button",className:a()("button","is-success",{"is-light":!d}),children:"Sort by length"}),Object(u.jsx)("button",{onClick:function(){O((g=!g)?"reversed":"")},type:"button",className:a()("button","is-warning",{"is-light":!g}),children:"Reverse"}),(n||f)&&Object(u.jsx)("button",{onClick:function(){s(""),O(""),h=!1,d=!1,g=!1},type:"button",className:"button is-danger is-light",children:"Reset"})]}),Object(u.jsx)("ul",{children:m.map((function(t){return Object(u.jsx)("li",{"data-cy":"Good",children:t},t)}))})]})};c.a.render(Object(u.jsx)(f,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.6d5930c2.chunk.js.map
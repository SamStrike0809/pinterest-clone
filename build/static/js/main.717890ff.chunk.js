(this.webpackJsonppinterest_clone=this.webpackJsonppinterest_clone||[]).push([[0],{21:function(e,s,c){},42:function(e,s,c){"use strict";c.r(s);var t=c(2),a=c(15),n=c.n(a),r=c(5),i=(c(6),c(0));function j(e){var s=e.post;return console.log("Changes using github"),console.log("changes from phon"),Object(i.jsxs)("div",{children:[Object(i.jsx)("img",{src:s.largeImageURL}),Object(i.jsx)("p",{children:s.user})]})}c(21);function l(e){var s=e.city,c=e.handleChange,t=e.handleClick;return Object(i.jsx)("div",{children:Object(i.jsxs)("div",{class:"pinterest",children:[Object(i.jsxs)("div",{class:"left",children:[Object(i.jsx)("a",{href:"#",class:"logo",children:Object(i.jsx)("i",{class:"fab fa-pinterest"})}),Object(i.jsx)("a",{href:"#",class:"home",children:"Home"})]}),Object(i.jsxs)("div",{class:"search",children:[Object(i.jsx)("i",{class:"fas fa-search"}),Object(i.jsx)("input",{type:"search",onChange:c,placeholder:"Search",value:s})]}),Object(i.jsxs)("div",{class:"right",children:[Object(i.jsx)("a",{href:"#",class:"items",children:Object(i.jsx)("button",{style:{border:0,backgroundColor:"transparent"},onClick:t,children:Object(i.jsx)("i",{class:"fas fa-search"})})}),Object(i.jsx)("a",{href:"#",class:"items",children:Object(i.jsx)("i",{class:"far fa-comment-dots"})}),Object(i.jsx)("a",{href:"#",class:"avatar",children:Object(i.jsx)("div",{class:"img",children:Object(i.jsx)("img",{src:"https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1488&q=80",alt:""})})}),Object(i.jsx)("a",{href:"#",class:"items-down",children:Object(i.jsx)("i",{class:"fas fa-chevron-down"})})]})]})})}var h=c(22);function o(){var e=Object(t.useState)([]),s=Object(r.a)(e,2),c=s[0],a=s[1],n=Object(t.useState)(""),o=Object(r.a)(n,2),b=o[0],d=o[1];return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(l,{city:b,handleChange:function(e){var s=e.target.value;d(s)},handleClick:function(){var e="https://pixabay.com/api/?key=23491658-d599fc05a722eb26590dc0b54&q="+b;h.get(e).then((function(e){var s=e.data.hits;a(s),d("")}))}}),Object(i.jsx)("div",{className:"container",children:c.map((function(e){return Object(i.jsx)(j,{post:e})}))})]})}var b=document.getElementById("root");n.a.render(Object(i.jsx)(t.StrictMode,{children:Object(i.jsx)(o,{})}),b)},6:function(e,s,c){}},[[42,1,2]]]);
//# sourceMappingURL=main.717890ff.chunk.js.map
(this["webpackJsonprobofriends-react-hooks"]=this["webpackJsonprobofriends-react-hooks"]||[]).push([[0],{10:function(e,t,n){},11:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),s=n(4),o=n.n(s),a=(n(10),n(3)),i=function(e){var t=e.searchChange;return Object(c.jsx)("div",{className:"tc",children:Object(c.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t})})},h=function(e){var t=e.id,n=e.name,r=e.email;return Object(c.jsxs)("div",{className:"tc bg-light-green dib br4 pa3 ma2 grow bw2 shadow-5",children:[Object(c.jsx)("img",{alt:"robots",src:"https://robohash.org/".concat(t,"?set=set4&size=200x200")}),Object(c.jsx)("h2",{children:n}),Object(c.jsx)("p",{children:r})]})},b=function(e){var t=e.robots;return Object(c.jsx)("div",{children:t.map((function(e){return Object(c.jsx)(h,{id:e.id,name:e.name,email:e.email},e.id)}))})},j=function(e){return Object(c.jsx)("div",{style:{overflowY:"scroll",height:"75vh"},children:e.children})};n(11);var l=function(){var e=Object(r.useState)([]),t=Object(a.a)(e,2),n=t[0],s=t[1];Object(r.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(e){return s(e)}))}),[]);var o=Object(r.useState)(""),h=Object(a.a)(o,2),l=h[0],u=h[1],d=n.filter((function(e){return e.name.toLowerCase().includes(l.toLowerCase())}));return n.length?Object(c.jsxs)("div",{className:"tc",children:[Object(c.jsx)("h1",{className:"f1",children:"RoboFriends"}),Object(c.jsx)(i,{searchChange:function(e){u(e.target.value)}}),Object(c.jsx)(j,{children:Object(c.jsx)(b,{robots:d})})]}):Object(c.jsx)("h1",{className:"tc",children:"Loading"})},u=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,14)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),s(e),o(e)}))};n(12);o.a.render(Object(c.jsx)(l,{}),document.getElementById("root")),u()}},[[13,1,2]]]);
//# sourceMappingURL=main.b583b71c.chunk.js.map
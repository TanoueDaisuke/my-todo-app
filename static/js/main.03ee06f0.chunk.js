(this["webpackJsonpfirst-app"]=this["webpackJsonpfirst-app"]||[]).push([[0],{63:function(e,n,t){e.exports=t(74)},74:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(7),l=t.n(o),c=t(21),i=t(28),u=t(23),d=t(46),m=t.n(d),s=t(109),f=t(111),g=t(104),p=t(110);function E(e){var n=r.a.useState(""),t=Object(c.a)(n,2),a=t[0],o=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",null,r.a.createElement(p.a,{type:"text",name:"desc",onChange:function(e){return o(e.target.value)},value:a,label:"\u30bf\u30a4\u30c8\u30eb \u203b\u5fc5\u9808",style:{marginRight:"10px"}}),r.a.createElement(g.a,{type:"submit",variant:"contained",color:"primary",style:{verticalAlign:"bottom"},onClick:function(n){return function(n){n.preventDefault(),console.log("\u5b9f\u884c"),a.length>0&&e.addTodo(a,o)}(n)}},"\u8ffd\u52a0")))}var v=t(107),b=t(105),h=t(106),y=t(51),k=t.n(y),D=t(50),T=t.n(D),x=t(108);function j(e){var n=e.id,t=e.isDone,a=e.number,o=e.content,l=e.deleteTodo,i=e.toggleIsDone,u=e.updateTodo,d=r.a.useState(!1),m=Object(c.a)(d,2),s=m[0],f=m[1],E=t?"\u672a\u5b8c\u4e86\u306b\u3059\u308b":"\u5b8c\u4e86\u306b\u3059\u308b";return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{style:{backgroundColor:"white"}},function(){if(s){return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{id:"outlined-basic",label:o,variant:"outlined",style:{width:"65%",marginRight:5}}),r.a.createElement(g.a,{color:"primary",variant:"contained",onClick:function(){var e=document.getElementById("outlined-basic");u(n,e.value),f(!1)}},"\u4fdd\u5b58"))}return r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,{primary:"".concat(a+1,"\uff1a").concat(o)}),r.a.createElement(h.a,{edge:"end","aria-label":"delete",style:{marginRight:5},onClick:function(){return f(!0)}},r.a.createElement(T.a,null)))}(),r.a.createElement(g.a,{variant:"contained",color:t?"secondary":"default",edge:"end",style:{display:s?"none":"block",fontSize:11},onClick:function(){return i(n)}},E),r.a.createElement(h.a,{edge:"end","aria-label":"delete",onClick:function(){return l(n)}},r.a.createElement(k.a,null))),r.a.createElement(x.a,null))}function w(){var e=Object(i.a)(["\n    width: 60%;\n    @media screen and (max-width:480px) {\n      width: 90%;\n    }\n    margin: 15px auto;\n    text-align: center;\n  "]);return w=function(){return e},e}function O(e){var n=e.todos,t=e.deleteTodo,a=e.toggleIsDone,o=e.updateTodo,l=n.map(function(e,n){return r.a.createElement(j,{key:e.id,id:e.id,isDone:e.isDone,number:n,content:e.content,deleteTodo:t,toggleIsDone:a,updateTodo:o})}),c=u.default.ul(w());return r.a.createElement(r.a.Fragment,null,r.a.createElement(c,null,l))}function C(){var e=Object(i.a)(["\n  ","\n"]);return C=function(){return e},e}function F(){var e=Object(i.a)(["\n  text-align: center;\n  width: 100vw;\n  min-height: 100vh;\n  background-color: skyblue;\n  h1 {\n    font-size: 50px;\n    padding: 30px;\n    font-family: 'Bangers', cursive;\n  }\n"]);return F=function(){return e},e}var I=u.default.div(F()),S=Object(u.createGlobalStyle)(C(),m.a);l.a.render(r.a.createElement(function(){var e=Object(a.useState)([]),n=Object(c.a)(e,2),t=n[0],o=n[1],l=r.a.useState(!1),i=Object(c.a)(l,2),u=i[0],d=i[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(S,null),r.a.createElement(I,null,r.a.createElement("h1",null,"My Todo List"),r.a.createElement(E,{addTodo:function(e,n){var a={id:t.length+1,content:e,isDone:!1};o(t.concat(a)),n("")}}),0===t.length?void 0:r.a.createElement(s.a,{control:r.a.createElement(f.a,{checked:u,onChange:function(){return d(!u)},color:"primary"}),label:"\u672a\u5b8c\u4e86\u306e\u307f\u8868\u793a"}),r.a.createElement(O,{todos:u?t.map(function(e){return e.isDone?null:e}).filter(function(e){return e}):t,deleteTodo:function(e){var n=t.filter(function(n){return e!==n.id});o(n)},toggleIsDone:function(e){var n=t.map(function(n){return e===n.id&&(n.isDone=!n.isDone),n});o(n)},updateTodo:function(e,n){var a={id:e,content:n},r=t.map(function(n){return n.id===e?a:n});o(r)}})))},null),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.03ee06f0.chunk.js.map
(this["webpackJsonpreact-masterclass"]=this["webpackJsonpreact-masterclass"]||[]).push([[0],{40:function(e,n,t){"use strict";t.r(n);var r,o=t(9),a=t(0),i=t.n(a),c=t(12),d=t.n(c),b=t(11),l=t(8),s=t(7),p=t(1),j=t(6),u=t(3),g=t(14),x="todos",O=localStorage.getItem(x),f=JSON.parse(O),h=Object(b.b)({key:"toDos",default:null!==O?f:{}}),m=t(21),v=t(4),y=l.c.div(r||(r=Object(o.a)(["\n  padding: 10px;\n  border-radius: 5px;\n  margin-bottom: 5px;\n  background-color: ",";\n  box-shadow: ",";\n"])),(function(e){return e.isDragging?"#AEE1E1":e.theme.cardColor}),(function(e){return e.isDragging?"0px 2px 5px rgba(0,0,0,0.5)":"none"}));function D(e){var n=e.toDoId,t=e.toDoText,r=e.index;return Object(v.jsx)(g.b,{draggableId:n+"",index:r,children:function(e,n){return Object(v.jsx)(y,Object(p.a)(Object(p.a)(Object(p.a)({isDragging:n.isDragging,ref:e.innerRef},e.dragHandleProps),e.draggableProps),{},{children:t}))}})}var I,w,k,S,C,E,q,F=i.a.memo(D),P=l.c.div(I||(I=Object(o.a)(["\n  padding: 10px 0px;\n  background-color: ",";\n  width: 300px;\n  border-radius: 5px;\n  min-height: 300px;\n  display: flex;\n  flex-direction: column;\n  transform: none;\n  flex-grow: 1;\n"])),(function(e){return e.isDragging?"#FCD1D1":e.theme.boardColor})),T=l.c.div(w||(w=Object(o.a)(["\n  text-align: center;\n  font-weight: 600;\n  font-size: 18px;\n"]))),B=l.c.form(k||(k=Object(o.a)(["\n  width: 100%;\n  input {\n    width: 100%;\n  }\n"]))),z=l.c.div(S||(S=Object(o.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 10px;\n  padding: 0px 10px;\n"]))),A=l.c.button(C||(C=Object(o.a)(["\n  border: none;\n  background-color: ",";\n  color: black;\n  padding: 0;\n  font-size: 28px;\n  position: relative;\n  i {\n    border: none;\n    background-color: none;\n    padding: none;\n    &:hover {\n      color: #f783ac;\n    }\n  }\n"])),(function(e){return e.theme.boardColor})),J=l.c.div(E||(E=Object(o.a)(["\n  background-color: ",";\n  flex-grow: 1;\n  transition: background-color 0.3s ease-in-out;\n  padding: 20px;\n"])),(function(e){return e.isDraggingOver?"#FCD1D1":e.draggingFromThisWith?"#D3E0DC":"#ECE2E1"})),N=l.c.input(q||(q=Object(o.a)(["\n  text-align: center;\n"])));function R(e){var n=e.toDos,t=e.boardId,r=e.boardIndex,o=Object(m.a)(),a=o.register,i=o.setValue,c=o.handleSubmit,d=Object(b.d)(h),l=Object(b.e)(h),u=function(e){l((function(e){var n=Object(p.a)({},e);return delete n[t],n}))},O=function(e){var n=e.toDo,r={id:Date.now(),text:n};l((function(e){return Object(p.a)(Object(p.a)({},e),{},Object(s.a)({},t,[r].concat(Object(j.a)(e[t]))))})),i("toDo","")},f=function(e){setTimeout((function(){e.target.blur()}),3e3)};return localStorage.setItem(x,JSON.stringify(d)),Object(v.jsx)(g.b,{draggableId:t,index:r,children:function(e,r){return Object(v.jsxs)(P,Object(p.a)(Object(p.a)({isDragging:r.isDragging,ref:e.innerRef},e.draggableProps),{},{children:[Object(v.jsxs)(z,Object(p.a)(Object(p.a)({},e.dragHandleProps),{},{children:[Object(v.jsx)("div",{}),Object(v.jsx)(T,{children:t}),Object(v.jsx)(A,{onClick:u,children:Object(v.jsx)("i",{className:"fas fa-times-circle",children:"x"})})]})),Object(v.jsx)(B,{onSubmit:c(O),children:Object(v.jsx)(N,Object(p.a)(Object(p.a)({onFocus:f},a("toDo",{required:!0})),{},{placeholder:"Add task a ".concat(t),type:"text"}))}),Object(v.jsx)(g.c,{droppableId:t,children:function(e,t){return Object(v.jsxs)(J,Object(p.a)(Object(p.a)({isDraggingOver:t.isDraggingOver,draggingFromThisWith:Boolean(t.draggingFromThisWith),ref:e.innerRef},e.droppableProps),{},{children:[n.map((function(e,n){return Object(v.jsx)(F,{index:n,toDoId:e.id,toDoText:e.text},e.id)})),e.placeholder]}))}})]}))}})}var H,L,W,M,V=i.a.memo(R),G=l.c.div(H||(H=Object(o.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  max-width: 700px;\n  width: 100%;\n  margin-bottom: 50px;\n"]))),K=l.c.form(L||(L=Object(o.a)(["\n  max-width: 300px;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  background-color: ",";\n  padding: 20px 10px;\n  margin-left: 20px;\n  margin-top: 20px;\n  border-radius: 20px;\n  box-shadow: 2px 5px 5px rgba(0, 0, 0, 0.3);\n  flex-grow: 1;\n"])),(function(e){return e.theme.boardColor})),Q=l.c.input(W||(W=Object(o.a)(["\n  text-align: center;\n"]))),U=l.c.button(M||(M=Object(o.a)([""])));var X,Y,Z=function(){var e=Object(b.c)(h),n=Object(u.a)(e,2),t=n[0],r=n[1],o=Object(m.a)(),a=o.register,i=o.handleSubmit,c=o.setValue;return localStorage.setItem(x,JSON.stringify(t)),Object(v.jsx)(G,{children:Object(v.jsxs)(K,{onSubmit:i((function(e){var n=e.board,t=Object(s.a)({},n,[]);r((function(e){return Object(p.a)(Object(p.a)({},e),t)})),c("board","")})),children:[Object(v.jsx)(Q,Object(p.a)(Object(p.a)({},a("board",{required:!0,maxLength:20})),{},{type:"text",placeholder:"Add a Board",maxLength:20})),Object(v.jsx)(U,{children:"Add Board"})]})})},$=l.c.div(X||(X=Object(o.a)(["\n  display: flex;\n  margin: 0 auto;\n  max-width: 700px;\n  width: 100%;\n  justify-content: center;\n  align-items: flex-start;\n  height: 100vh;\n  flex-wrap: wrap;\n"]))),_=l.c.div(Y||(Y=Object(o.a)(["\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-auto-rows: minmax(250px, 1fr);\n  place-content: center center;\n  gap: 10px;\n  width: 100%;\n"])));var ee,ne=function(){var e=Object(b.c)(h),n=Object(u.a)(e,2),t=n[0],r=n[1];return Object(v.jsx)(g.a,{onDragEnd:function(e){console.log(e);var n=e.type,o=e.destination,a=e.source;if(null===o&&"board"!==n&&r((function(e){var n=Object(j.a)(e[a.droppableId]);return n.splice(a.index,1),Object(p.a)(Object(p.a)({},e),{},Object(s.a)({},a.droppableId,n))})),o)if("board"!==n)(null===o||void 0===o?void 0:o.droppableId)===a.droppableId&&"droppableBoards"!==a.droppableId&&r((function(e){var n=Object(j.a)(e[a.droppableId]),t=n[a.index];return n.splice(a.index,1),n.splice(null===o||void 0===o?void 0:o.index,0,t),Object(p.a)(Object(p.a)({},e),{},Object(s.a)({},a.droppableId,n))})),(null===o||void 0===o?void 0:o.droppableId)!==a.droppableId&&r((function(e){var n,t=Object(j.a)(e[o.droppableId]),r=Object(j.a)(e[a.droppableId]),i=r[a.index];return r.splice(a.index,1),t.splice(o.index,0,i),Object(p.a)(Object(p.a)({},e),{},(n={},Object(s.a)(n,a.droppableId,r),Object(s.a)(n,o.droppableId,t),n))}));else{if(o.index===a.index)return;r((function(e){var n,r,i=Object.keys(t),c={};return i.forEach((function(e,t){t===a.index&&(n=e),t===o.index&&(r=e)})),i.forEach((function(t){t!==n&&(t===r&&a.index>o.index&&(c[n]=Object(j.a)(e[n])),c[t]=Object(j.a)(e[t]),t===r&&a.index<o.index&&(c[n]=Object(j.a)(e[n])))})),c}))}},children:Object(v.jsxs)($,{children:[Object(v.jsx)(Z,{}),Object(v.jsx)(g.c,{droppableId:"droppableBoards",type:"board",direction:"horizontal",children:function(e){return Object(v.jsxs)(_,Object(p.a)(Object(p.a)({ref:e.innerRef},e.droppableProps),{},{children:[Object.keys(t).map((function(e,n){return Object(v.jsx)(V,{boardId:e,toDos:t[e],boardIndex:n},e)})),e.placeholder]}))}})]})})},te=Object(l.b)(ee||(ee=Object(o.a)(["\n@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n*{\n  box-sizing: border-box;\n}\na{\n  text-decoration: none;\n  color:inherit;\n}\n\nbody{\n  font-family: 'Source Sans Pro', sans-serif;\n  background-color: ",";\n  color: black;\n}\n"])),(function(e){return e.theme.bgColor}));d.a.render(Object(v.jsx)(i.a.StrictMode,{children:Object(v.jsx)(b.a,{children:Object(v.jsxs)(l.a,{theme:{bgColor:"#3F8CF2",boardColor:"#DADFE9",cardColor:"white"},children:[Object(v.jsx)(te,{}),Object(v.jsx)(ne,{})]})})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.e2617f51.chunk.js.map
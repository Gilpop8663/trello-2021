(this["webpackJsonpreact-masterclass"]=this["webpackJsonpreact-masterclass"]||[]).push([[0],{40:function(n,e,t){"use strict";t.r(e);var r,o=t(9),a=t(0),i=t.n(a),c=t(12),d=t.n(c),b=t(11),l=t(8),s=t(7),p=t(1),j=t(6),u=t(3),g=t(14),x=Object(b.b)({key:"toDos",default:{}}),O=t(21),f=t(4),h=l.c.div(r||(r=Object(o.a)(["\n  padding: 10px;\n  border-radius: 5px;\n  margin-bottom: 5px;\n  background-color: ",";\n  box-shadow: ",";\n"])),(function(n){return n.isDragging?"#AEE1E1":n.theme.cardColor}),(function(n){return n.isDragging?"0px 2px 5px rgba(0,0,0,0.5)":"none"}));function m(n){var e=n.toDoId,t=n.toDoText,r=n.index;return Object(f.jsx)(g.b,{draggableId:e+"",index:r,children:function(n,e){return Object(f.jsx)(h,Object(p.a)(Object(p.a)(Object(p.a)({isDragging:e.isDragging,ref:n.innerRef},n.dragHandleProps),n.draggableProps),{},{children:t}))}})}var v,y,D,w,k,I,C,E=i.a.memo(m),q=l.c.div(v||(v=Object(o.a)(["\n  padding: 10px 0px;\n  background-color: ",";\n  width: 300px;\n  border-radius: 5px;\n  min-height: 300px;\n  display: flex;\n  flex-direction: column;\n  transform: none;\n  flex-grow: 1;\n"])),(function(n){return n.isDragging?"#FCD1D1":n.theme.boardColor})),F=l.c.div(y||(y=Object(o.a)(["\n  text-align: center;\n  font-weight: 600;\n  font-size: 18px;\n"]))),S=l.c.form(D||(D=Object(o.a)(["\n  width: 100%;\n  input {\n    width: 100%;\n  }\n"]))),P=l.c.div(w||(w=Object(o.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 10px;\n  padding: 0px 10px;\n"]))),T=l.c.button(k||(k=Object(o.a)(["\n  border: none;\n  background-color: ",";\n  color: black;\n  padding: 0;\n  font-size: 28px;\n  position: relative;\n  i {\n    border: none;\n    background-color: none;\n    padding: none;\n    &:hover {\n      color: #f783ac;\n    }\n  }\n"])),(function(n){return n.theme.boardColor})),B=l.c.div(I||(I=Object(o.a)(["\n  background-color: ",";\n  flex-grow: 1;\n  transition: background-color 0.3s ease-in-out;\n  padding: 20px;\n"])),(function(n){return n.isDraggingOver?"#FCD1D1":n.draggingFromThisWith?"#D3E0DC":"#ECE2E1"})),z=l.c.input(C||(C=Object(o.a)(["\n  text-align: center;\n"])));function A(n){var e=n.toDos,t=n.boardId,r=n.boardIndex,o=Object(O.a)(),a=o.register,i=o.setValue,c=o.handleSubmit,d=(Object(b.d)(x),Object(b.e)(x)),l=function(n){d((function(n){var e=Object(p.a)({},n);return delete e[t],e}))},u=function(n){var e=n.toDo,r={id:Date.now(),text:e};d((function(n){return Object(p.a)(Object(p.a)({},n),{},Object(s.a)({},t,[r].concat(Object(j.a)(n[t]))))})),i("toDo","")},h=function(n){setTimeout((function(){n.target.blur()}),3e3)};return Object(f.jsx)(g.b,{draggableId:t,index:r,children:function(n,r){return Object(f.jsxs)(q,Object(p.a)(Object(p.a)({isDragging:r.isDragging,ref:n.innerRef},n.draggableProps),{},{children:[Object(f.jsxs)(P,Object(p.a)(Object(p.a)({},n.dragHandleProps),{},{children:[Object(f.jsx)("div",{}),Object(f.jsx)(F,{children:t}),Object(f.jsx)(T,{onClick:l,children:Object(f.jsx)("i",{className:"fas fa-times-circle",children:"x"})})]})),Object(f.jsx)(S,{onSubmit:c(u),children:Object(f.jsx)(z,Object(p.a)(Object(p.a)({onFocus:h},a("toDo",{required:!0})),{},{placeholder:"Add task a ".concat(t),type:"text"}))}),Object(f.jsx)(g.c,{droppableId:t,children:function(n,t){return Object(f.jsxs)(B,Object(p.a)(Object(p.a)({isDraggingOver:t.isDraggingOver,draggingFromThisWith:Boolean(t.draggingFromThisWith),ref:n.innerRef},n.droppableProps),{},{children:[e.map((function(n,e){return Object(f.jsx)(E,{index:e,toDoId:n.id,toDoText:n.text},n.id)})),n.placeholder]}))}})]}))}})}var R,H,L,W,J=i.a.memo(A),M=l.c.div(R||(R=Object(o.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  max-width: 700px;\n  width: 100%;\n  margin-bottom: 50px;\n"]))),V=l.c.form(H||(H=Object(o.a)(["\n  max-width: 300px;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  background-color: ",";\n  padding: 20px 10px;\n  margin-left: 20px;\n  margin-top: 20px;\n  border-radius: 20px;\n  box-shadow: 2px 5px 5px rgba(0, 0, 0, 0.3);\n  flex-grow: 1;\n"])),(function(n){return n.theme.boardColor})),N=l.c.input(L||(L=Object(o.a)(["\n  text-align: center;\n"]))),G=l.c.button(W||(W=Object(o.a)([""])));var K,Q,U=function(){var n=Object(b.c)(x),e=Object(u.a)(n,2),t=(e[0],e[1]),r=Object(O.a)(),o=r.register,a=r.handleSubmit,i=r.setValue;return Object(f.jsx)(M,{children:Object(f.jsxs)(V,{onSubmit:a((function(n){var e=n.board,r=Object(s.a)({},e,[]);t((function(n){return Object(p.a)(Object(p.a)({},n),r)})),i("board","")})),children:[Object(f.jsx)(N,Object(p.a)(Object(p.a)({},o("board",{required:!0,maxLength:20})),{},{type:"text",placeholder:"Add a Board",maxLength:20})),Object(f.jsx)(G,{children:"Add Board"})]})})},X=l.c.div(K||(K=Object(o.a)(["\n  display: flex;\n  margin: 0 auto;\n  max-width: 700px;\n  width: 100%;\n  justify-content: center;\n  align-items: flex-start;\n  height: 100vh;\n  flex-wrap: wrap;\n"]))),Y=l.c.div(Q||(Q=Object(o.a)(["\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-auto-rows: minmax(250px, 1fr);\n  place-content: center center;\n  gap: 10px;\n  width: 100%;\n"])));var Z,$=function(){var n=Object(b.c)(x),e=Object(u.a)(n,2),t=e[0],r=e[1];return Object(f.jsx)(g.a,{onDragEnd:function(n){console.log(n);var e=n.type,o=n.destination,a=n.source;if(null===o&&"board"!==e&&r((function(n){var e=Object(j.a)(n[a.droppableId]);return e.splice(a.index,1),Object(p.a)(Object(p.a)({},n),{},Object(s.a)({},a.droppableId,e))})),o)if("board"!==e)(null===o||void 0===o?void 0:o.droppableId)===a.droppableId&&"droppableBoards"!==a.droppableId&&r((function(n){var e=Object(j.a)(n[a.droppableId]),t=e[a.index];return e.splice(a.index,1),e.splice(null===o||void 0===o?void 0:o.index,0,t),Object(p.a)(Object(p.a)({},n),{},Object(s.a)({},a.droppableId,e))})),(null===o||void 0===o?void 0:o.droppableId)!==a.droppableId&&r((function(n){var e,t=Object(j.a)(n[o.droppableId]),r=Object(j.a)(n[a.droppableId]),i=r[a.index];return r.splice(a.index,1),t.splice(o.index,0,i),Object(p.a)(Object(p.a)({},n),{},(e={},Object(s.a)(e,a.droppableId,r),Object(s.a)(e,o.droppableId,t),e))}));else{if(o.index===a.index)return;r((function(n){var e,r,i=Object.keys(t),c={};return i.forEach((function(n,t){t===a.index&&(e=n),t===o.index&&(r=n)})),i.forEach((function(t){t!==e&&(t===r&&a.index>o.index&&(c[e]=Object(j.a)(n[e])),c[t]=Object(j.a)(n[t]),t===r&&a.index<o.index&&(c[e]=Object(j.a)(n[e])))})),c}))}},children:Object(f.jsxs)(X,{children:[Object(f.jsx)(U,{}),Object(f.jsx)(g.c,{droppableId:"droppableBoards",type:"board",direction:"horizontal",children:function(n){return Object(f.jsxs)(Y,Object(p.a)(Object(p.a)({ref:n.innerRef},n.droppableProps),{},{children:[Object.keys(t).map((function(n,e){return Object(f.jsx)(J,{boardId:n,toDos:t[n],boardIndex:e},n)})),n.placeholder]}))}})]})})},_=Object(l.b)(Z||(Z=Object(o.a)(["\n@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n*{\n  box-sizing: border-box;\n}\na{\n  text-decoration: none;\n  color:inherit;\n}\n\nbody{\n  font-family: 'Source Sans Pro', sans-serif;\n  background-color: ",";\n  color: black;\n}\n"])),(function(n){return n.theme.bgColor}));d.a.render(Object(f.jsx)(i.a.StrictMode,{children:Object(f.jsx)(b.a,{children:Object(f.jsxs)(l.a,{theme:{bgColor:"#3F8CF2",boardColor:"#DADFE9",cardColor:"white"},children:[Object(f.jsx)(_,{}),Object(f.jsx)($,{})]})})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.532b1491.chunk.js.map
(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{19:function(e,t,a){e.exports=a(39)},24:function(e,t,a){},25:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(15),r=a.n(l),o=(a(24),a(5)),u=a(6),m=(a(25),function(){return c.a.createElement("main",null,c.a.createElement("h1",{className:"home__title"},"Tic Tac Toe"),c.a.createElement("p",{className:"home__text"},"Welcome to my Tic Tac Toe."),c.a.createElement("p",{className:"home__text"},"Let's PLay? (maybe read about first)"),c.a.createElement(o.b,{className:"playButton",to:"/tictactoe"},"Click me to play"))}),i=(a(31),a(18)),s=a(9);a(32);var E=function(e){var t=e.value,a=e.onClick;return c.a.createElement("button",{className:"square",onClick:a},t)},f=(a(33),function(e){var t=e.squares,a=e.onClick;return c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"board__container"},c.a.createElement("h1",{className:"title"},"TIC TAC TOE"),c.a.createElement("div",{className:"board"},t.map((function(e,t){return c.a.createElement(E,{key:t,value:e,onClick:function(){return a(t)}})})))))}),p=(a(34),function(){var e=Object(n.useState)(Array(9).fill(null)),t=Object(s.a)(e,2),a=t[0],l=t[1],r=Object(n.useState)(!0),o=Object(s.a)(r,2),u=o[0],m=o[1],E=function(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],a=0;a<t.length;a++){var n=Object(s.a)(t[a],3),c=n[0],l=n[1],r=n[2];if(e[c]&&e[c]===e[l]&&e[c]===e[r])return e[c]}return e.includes(null)?null:"tie"}(a);return c.a.createElement(n.Fragment,null,c.a.createElement(f,{squares:a,onClick:function(e){var t=Object(i.a)(a);E||t[e]||(t[e]=u?"X":"O",l(t),m(!u))}}),c.a.createElement("div",{className:"boardInfo"},c.a.createElement("p",{className:"turnText"},E&&"tie"!==E?"Winner: ".concat(E):E&&"tie"===E?"It's a tie":a.every((function(e){return null===e}))?"First Player: ".concat(u?"X":"O"):"Next Player: ".concat(u?"X":"O")),a.every((function(e){return null===e}))?null:c.a.createElement("button",{className:"restartGameBtn",onClick:function(){return l(Array(9).fill(null))}},"Restart Game")))}),b=function(){return c.a.createElement("main",{className:"tictactoe__main"},c.a.createElement(p,null))},y=(a(35),function(){return c.a.createElement("main",null,c.a.createElement("h1",{className:"about__title"},"About"),c.a.createElement("p",{className:"about__text"},"This is a project I did for fun and to learn more about react, in this version You can only play against yourself, or a firend next to you using the same computer, I hope you enjoy :)"))}),h=(a(36),function(){return c.a.createElement("main",null,c.a.createElement("h1",null,"contact"),c.a.createElement("form",{onSubmit:function(){alert("you sent your message (jk you didn't)")}},c.a.createElement("input",{type:"text",placeholder:"email"}),c.a.createElement("input",{type:"text",placeholder:"subject"}),c.a.createElement("input",{type:"text",placeholder:"message"}),c.a.createElement("button",null," submit ")))}),d=(a(37),function(){return c.a.createElement("ul",{className:"nav"},c.a.createElement("li",null,c.a.createElement(o.b,{className:"nav_item",to:"/"},"Home")),c.a.createElement("li",null,c.a.createElement(o.b,{className:"nav_item",to:"/about"},"About")),c.a.createElement("li",null,c.a.createElement(o.b,{className:"nav_item",to:"/contact"},"Contact")))}),v=(a(38),function(){return c.a.createElement("footer",null,c.a.createElement("p",{className:"footer_p"},"coded with love by ProBono"))}),N=function(){return c.a.createElement(o.a,null,c.a.createElement(d,null),c.a.createElement(u.c,null,c.a.createElement(u.a,{exact:!0,path:"/",component:m}),c.a.createElement(u.a,{exact:!0,path:"/tictactoe",component:b}),c.a.createElement(u.a,{path:"/about",component:y}),c.a.createElement(u.a,{path:"/contact",component:h})),c.a.createElement(v,null))};r.a.render(c.a.createElement(N,null),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.b7c36f8f.chunk.js.map
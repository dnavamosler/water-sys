(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e){e.exports={Menu:[{id:1,description:"user",options:[{text:"registrar abono",id:1},{text:"registrar cambio",id:2},{text:"registrar remito",id:3},{text:"registrar retiro",id:4}]},{id:2,description:"admin",options:[{text:"Reportes",id:1},{text:"Vendedores",id:2},{text:"Clientes",id:3},{text:"Ajustes de administrador",id:4}]}]}},17:function(e,t,n){e.exports=n(40)},23:function(e,t,n){},25:function(e,t,n){},27:function(e,t,n){},29:function(e,t,n){},33:function(e,t,n){},35:function(e,t,n){},38:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(14),o=n(42);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l=n(43),i=n(44),u=n(5),s=n(6),m=n(8),d=n(7),p=n(9),E=function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.body;return r.a.createElement("div",null,e)}}]),t}(a.Component),h=function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.children;return r.a.createElement("div",{className:"app"},r.a.createElement(E,{body:e}))}}]),t}(a.Component),f=(n(23),function(e){return r.a.createElement("div",{className:"Home"},e.children)}),b=(n(25),function(e){return r.a.createElement("h1",{className:"logo"},"LOGO")}),O=(n(27),function(e){return r.a.createElement("div",{className:"login"},e.children)}),j=function(e){return r.a.createElement("h2",null,"MEMBER LOGIN")},v=function(e){var t=e.type;return r.a.createElement("div",{className:"input"},r.a.createElement("input",{placeholder:e.placeholder,type:t}))},y=(n(29),function(e){var t=e.clase;return r.a.createElement("button",{className:t},e.contenido)}),w=n(41),x=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={user:n.props.currentUser},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(O,null,r.a.createElement(j,null),r.a.createElement("form",null,r.a.createElement(v,{placeholder:"username"}),r.a.createElement(v,{placeholder:"password",type:"password"}),r.a.createElement(w.a,{to:"/home"},r.a.createElement(y,{contenido:"ingresar"}))))}}]),t}(a.Component),g=(n(33),function(e){var t=e.user;return r.a.createElement("div",null,function(e){switch(e){case"user":return r.a.createElement(w.a,{className:"footer",to:"/"},r.a.createElement("h2",null,"  ingresar como usuario "));case"admin":return r.a.createElement(w.a,{className:"footer",to:"/admin"},r.a.createElement("h2",null,"  ingresar como ",t," "))}}(t))}),k=function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(f,null,r.a.createElement(b,null),r.a.createElement(x,{currentUser:"user"}),r.a.createElement(g,{user:"admin"}))}}]),t}(a.Component),N=function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(f,null,r.a.createElement(b,null),r.a.createElement(x,{currentUser:"admin"}),r.a.createElement(g,{user:"user"}))}}]),t}(a.Component),C=(n(35),function(e){return r.a.createElement("div",{className:"panel"},e.children)}),M=n(15),B=function(e){var t=M.Menu[0];return r.a.createElement("ul",null,t.options.map(function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(y,{contenido:e.text}))}),r.a.createElement("li",null,r.a.createElement(w.a,{to:"/"},r.a.createElement(y,{clase:"exit",contenido:"salir"}))))},U=function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(C,null,r.a.createElement(b,null),r.a.createElement(B,null))}}]),t}(a.Component),A=function(){return r.a.createElement(h,null,r.a.createElement(l.a,null,r.a.createElement(i.a,{exact:!0,path:"/",component:k}),r.a.createElement(i.a,{exact:!0,path:"/admin",component:N}),r.a.createElement(i.a,{exact:!0,path:"/home",component:U})))};n(38);Object(c.render)(r.a.createElement(o.a,null,r.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,2,1]]]);
//# sourceMappingURL=main.e7f17541.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{37:function(e,t,n){e.exports=n(75)},42:function(e,t,n){},75:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"fetchRepos",function(){return C}),n.d(a,"changeAuth",function(){return R});var r=n(0),c=n.n(r),o=n(15),u=n.n(o),i=(n(42),n(20)),l=n(9),s=n(10),h=n(8),p=n(34),m=n.n(p),d="change_auth",f="fetch_repos",b=n(13),v=Object(h.c)({repos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"test":var n=t.payload.data.map(function(e){return e.html_url});return[].concat(Object(b.a)(e),Object(b.a)(n));case f:var a=t.payload.data.map(function(e){return e.html_url});return[].concat(Object(b.a)(e),Object(b.a)(a));default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return t.payload;default:return e}}}),E=n(17),O=n(18),g=n(21),j=n(19),y=n(22),w=n(35),k=n.n(w);function C(){var e=k.a.get("https://api.github.com/users/christrees/repos");return{type:f,payload:e}}function R(e){return{type:d,payload:e}}var N=function(e){function t(){return Object(E.a)(this,t),Object(g.a)(this,Object(j.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(O.a)(t,[{key:"renderRepos",value:function(){return this.props.repos.map(function(e){return c.a.createElement("li",{key:e},e)})}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("button",{className:"fetch-repos",onClick:this.props.fetchRepos},"Fetch christrees github repos"),c.a.createElement("h4",null,"Github Repo List - christrees"),c.a.createElement("ul",null,this.renderRepos()))}}]),t}(r.Component);var _=Object(s.b)(function(e){return{repos:e.repos}},a)(N),A=function(e){function t(){return Object(E.a)(this,t),Object(g.a)(this,Object(j.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(O.a)(t,[{key:"renderHeader",value:function(){var e=this;return this.props.auth?c.a.createElement("div",null,"v0.0.4",c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(i.b,{className:"nav-list",to:"/list"},"List")),c.a.createElement("li",null,c.a.createElement("button",{className:"sign-out",onClick:function(){return e.props.changeAuth(!1)}},"Sign Out"))),c.a.createElement(l.a,{path:"/list",exact:!0,component:_})):c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement("button",{className:"sign-in",onClick:function(){return e.props.changeAuth(!0)}},"Sign In")))}},{key:"render",value:function(){return c.a.createElement("div",null,this.renderHeader()," ")}}]),t}(r.Component);var S=Object(s.b)(function(e){return{auth:e.auth}},a)(A);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(c.a.createElement(function(e){var t=e.children,n=e.initialState,a=void 0===n?{}:n,r=Object(h.d)(v,a,Object(h.a)(m.a));return c.a.createElement(s.a,{store:r},t)},null,c.a.createElement(i.a,null,c.a.createElement(l.a,{path:"/",component:S}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[37,1,2]]]);
//# sourceMappingURL=main.1d4f3f13.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{149:function(e,a,t){"use strict";t.r(a);var n=t(9),c=(t(0),t(160)),i=t.n(c),s=t(157),l=function(e){return Object(n.a)("section",{id:"banner",className:"style2"},Object(n.a)("div",{className:"inner"},Object(n.a)("header",{className:"major"},Object(n.a)("h1",null,"Ferienwohnung")),Object(n.a)("div",{className:"content"},Object(n.a)("p",null,"Gerade mal 200 Meter vom Deich entfernt im ruhigen und idyllischem Ferienort Nessmersiel."))))},o=t(158);a.default=function(){return Object(n.a)(s.a,null,Object(n.a)(i.a,null,Object(n.a)("title",null,"Ferienwohnung Nessmersiel - Die Wohnung"),Object(n.a)("meta",{name:"description",content:"Generic Page"})),Object(n.a)(l,null),Object(n.a)("div",{id:"main",className:"alt"},Object(n.a)("section",{id:"one"},Object(n.a)("div",{className:"inner"},Object(n.a)(o.a,{to:"/"}),Object(n.a)("span",{className:"image main"}),Object(n.a)("p",null,"Die Wohnung ist noch nicht bezugsfertig. Wir informieren Sie, wenn dies soweit ist.")))))}},154:function(e,a,t){"use strict";t(9);var n=t(0),c=t.n(n),i=t(4),s=t.n(i),l=t(33),o=t.n(l);t.d(a,"a",function(){return o.a});t(155),c.a.createContext({});s.a.object,s.a.string.isRequired,s.a.func,s.a.func},155:function(e,a,t){var n;e.exports=(n=t(156))&&n.default||n},156:function(e,a,t){"use strict";t.r(a);t(55);var n=t(0),c=t.n(n),i=t(4),s=t.n(i),l=t(56),o=t(2),r=function(e){var a=e.location,t=o.default.getResourcesForPathnameSync(a.pathname);return c.a.createElement(l.a,Object.assign({location:a,pageResources:t},t.json))};r.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},a.default=r},157:function(e,a,t){"use strict";var n=t(34),c=t.n(n),i=t(7),s=t.n(i),l=t(9),o=t(0),r=t.n(o),u=(t(159),t(4)),b=t.n(u),m=function(e){var a=e.onToggleMenu;return Object(l.a)("header",{id:"header",className:"alt"},Object(l.a)("nav",null,Object(l.a)("a",{className:"menu-link",onClick:a,href:"javascript:;"},"Menü")))};m.propTypes={onToggleMenu:b.a.func};var j=m,O=t(154),h=function(e){var a=e.onToggleMenu;return Object(l.a)("nav",{id:"menu"},Object(l.a)("div",{className:"inner"},Object(l.a)("ul",{className:"links"},Object(l.a)("li",null,Object(l.a)(O.a,{onClick:a,to:"/"},"Home")),Object(l.a)("li",null,Object(l.a)(O.a,{onClick:a,to:"/wohnung"},"Die Wohnung")),Object(l.a)("li",null,Object(l.a)(O.a,{onClick:a,to:"/nessmersiel"},"Nessmersiel")),Object(l.a)("li",null,Object(l.a)(O.a,{onClick:a,to:"/tourismus"},"Tourismus"))),Object(l.a)("ul",{className:"actions vertical"},Object(l.a)("li",null,Object(l.a)("a",{onClick:a,href:"#contact",className:"button special fit"},"Kontakt")))),Object(l.a)("a",{className:"close",onClick:a,href:"javascript:;"},"Close"))};h.propTypes={onToggleMenu:b.a.func};var d=h,g=function(e){return Object(l.a)("section",{id:"contact"},Object(l.a)("div",{className:"inner"},Object(l.a)("section",{className:"split"},Object(l.a)("section",null,Object(l.a)("div",{className:"contact-method"},Object(l.a)("span",{className:"icon alt fa-envelope"}),Object(l.a)("h3",null,"Email"),Object(l.a)("a",{href:"mailto:harry.holschuh@web.de"},"harry.holschuh@web.de")),Object(l.a)("div",{className:"contact-method"},Object(l.a)("span",{className:"icon alt fa-phone"}),Object(l.a)("h3",null,"Telefon"),Object(l.a)("span",null,"+49(0)151 22413319")),Object(l.a)("div",{className:"contact-method"},Object(l.a)("span",{className:"icon alt fa-home"}),Object(l.a)("h3",null,"Adresse"),Object(l.a)("span",null,"Harry Holschuh",Object(l.a)("br",null),"Schwalbennest 5",Object(l.a)("br",null),"26553 Nessmersiel"))))))},p=function(e){return Object(l.a)("footer",{id:"footer"},Object(l.a)("div",{className:"inner"},Object(l.a)("ul",{className:"icons"},Object(l.a)("li",null,Object(l.a)("a",{href:"https://github.com/Tarnadas/nessmersiel",target:"_blank",className:"icon alt fa-github"},Object(l.a)("span",{className:"label"},"GitHub")))),Object(l.a)("ul",{className:"copyright"},Object(l.a)("li",null,"© Mario Reder"),Object(l.a)("li",null,"Design:"," ",Object(l.a)("a",{href:"https://html5up.net",target:"_blank"},"HTML5 UP")))))},f=function(e){function a(a){var t;return(t=e.call(this,a)||this).state={isMenuVisible:!1,loading:"is-loading"},t.handleToggleMenu=t.handleToggleMenu.bind(c()(t)),t}s()(a,e);var t=a.prototype;return t.componentDidMount=function(){var e=this;this.timeoutId=setTimeout(function(){e.setState({loading:""})},100)},t.componentWillUnmount=function(){this.timeoutId&&clearTimeout(this.timeoutId)},t.handleToggleMenu=function(){this.setState({isMenuVisible:!this.state.isMenuVisible})},t.render=function(){var e=this.props.children;return Object(l.a)("div",{className:"body "+this.state.loading+" "+(this.state.isMenuVisible?"is-menu-visible":"")},Object(l.a)("div",{id:"wrapper"},Object(l.a)(j,{onToggleMenu:this.handleToggleMenu}),e,Object(l.a)(g,null),Object(l.a)(p,null)),Object(l.a)(d,{onToggleMenu:this.handleToggleMenu}))},a}(r.a.Component);a.a=f},158:function(e,a,t){"use strict";var n=t(9),c=(t(0),t(154));a.a=function(e){var a=e.to;return Object(n.a)("div",{style:{marginTop:"-2em",marginBottom:"2em"}},Object(n.a)(c.a,{className:"button icon fa-backward",to:a},"Zurück"))}}}]);
//# sourceMappingURL=component---src-pages-wohnung-tsx-29426dff42e720524e42.js.map
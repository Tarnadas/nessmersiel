(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{155:function(e,a,t){"use strict";t.r(a);var n=t(9),c=(t(0),t(163)),s=t.n(c),l=t(159),i=function(e){return Object(n.a)("section",{id:"banner",className:"style2"},Object(n.a)("div",{className:"inner"},Object(n.a)("header",{className:"major"},Object(n.a)("h1",null,"Wattenmeer")),Object(n.a)("div",{className:"content"},Object(n.a)("p",null,"Das Weltnaturerbe Wattenmeer lockt jedes Jahr zahlreiche Leute an. Eine Wattwanderung sollte man sich nicht entgehen lassen."))))},o=t(160);a.default=function(){return Object(n.a)(l.a,null,Object(n.a)(s.a,null,Object(n.a)("title",null,"Ferienwohnung Nessmersiel - Das Wattenmeer"),Object(n.a)("meta",{name:"description",content:"Ferienwohnung Nessmersiel - Das Wattenmeer."})),Object(n.a)(i,null),Object(n.a)("div",{id:"main"},Object(n.a)("section",{id:"one"},Object(n.a)("div",{className:"inner"},Object(n.a)(o.a,{to:"/tourismus"}),Object(n.a)("header",{className:"major"},Object(n.a)("h2",null,"Wattenmeer")),Object(n.a)("p",null,"Hier steht noch nichts."))),Object(n.a)("section",{id:"two",className:"spotlights"})))}},156:function(e,a,t){"use strict";t.d(a,"b",function(){return b});var n=t(9),c=t(0),s=t.n(c),l=t(4),i=t.n(l),o=t(34),r=t.n(o);t.d(a,"a",function(){return r.a});t(157);var u=s.a.createContext({}),b=function(e){return Object(n.a)(u.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):Object(n.a)("div",null,"Loading (StaticQuery)")})};b.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},157:function(e,a,t){var n;e.exports=(n=t(158))&&n.default||n},158:function(e,a,t){"use strict";t.r(a);t(56);var n=t(0),c=t.n(n),s=t(4),l=t.n(s),i=t(57),o=t(2),r=function(e){var a=e.location,t=o.default.getResourcesForPathnameSync(a.pathname);return c.a.createElement(i.a,Object.assign({location:a,pageResources:t},t.json))};r.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},a.default=r},159:function(e,a,t){"use strict";var n=t(35),c=t.n(n),s=t(7),l=t.n(s),i=t(9),o=t(0),r=t.n(o),u=(t(162),t(4)),b=t.n(u),j=function(e){var a=e.onToggleMenu;return Object(i.a)("header",{id:"header",className:"alt"},Object(i.a)("nav",null,Object(i.a)("a",{className:"menu-link",onClick:a,href:"javascript:;"},"Menü")))};j.propTypes={onToggleMenu:b.a.func};var m=j,d=t(156),h=function(e){var a=e.onToggleMenu;return Object(i.a)("nav",{id:"menu"},Object(i.a)("div",{className:"inner"},Object(i.a)("ul",{className:"links"},Object(i.a)("li",null,Object(i.a)(d.a,{onClick:a,to:"/"},"Home")),Object(i.a)("li",null,Object(i.a)(d.a,{onClick:a,to:"/wohnung"},"Die Wohnung")),Object(i.a)("li",null,Object(i.a)(d.a,{onClick:a,to:"/nessmersiel"},"Nessmersiel")),Object(i.a)("li",null,Object(i.a)(d.a,{onClick:a,to:"/tourismus"},"Tourismus"))),Object(i.a)("ul",{className:"actions vertical"},Object(i.a)("li",null,Object(i.a)("a",{onClick:a,href:"#contact",className:"button special fit"},"Kontakt")))),Object(i.a)("a",{className:"close",onClick:a,href:"javascript:;"},"Close"))};h.propTypes={onToggleMenu:b.a.func};var O=h,p=function(e){return Object(i.a)("section",{id:"contact"},Object(i.a)("div",{className:"inner"},Object(i.a)("section",{className:"split"},Object(i.a)("section",null,Object(i.a)("div",{className:"contact-method"},Object(i.a)("span",{className:"icon alt fa-envelope"}),Object(i.a)("h3",null,"Email"),Object(i.a)("a",{href:"mailto:harry.holschuh@web.de"},"harry.holschuh@web.de")),Object(i.a)("div",{className:"contact-method"},Object(i.a)("span",{className:"icon alt fa-phone"}),Object(i.a)("h3",null,"Telefon"),Object(i.a)("span",null,"+49(0)151 22413319")),Object(i.a)("div",{className:"contact-method"},Object(i.a)("span",{className:"icon alt fa-home"}),Object(i.a)("h3",null,"Adresse"),Object(i.a)("span",null,"Manuela Holschuh",Object(i.a)("br",null),"Schwalbennest 5",Object(i.a)("br",null),"26553 Nessmersiel"))))))},f=function(e){return Object(i.a)("footer",{id:"footer"},Object(i.a)("div",{className:"inner"},Object(i.a)("ul",{className:"icons"},Object(i.a)("li",null,Object(i.a)("a",{href:"https://github.com/Tarnadas/nessmersiel",target:"_blank",className:"icon alt fa-github"},Object(i.a)("span",{className:"label"},"GitHub")))),Object(i.a)("ul",{className:"copyright"},Object(i.a)("li",null,"© Mario Reder"),Object(i.a)("li",null,"Design:"," ",Object(i.a)("a",{href:"https://html5up.net",target:"_blank"},"HTML5 UP")))))},g=function(e){function a(a){var t;return(t=e.call(this,a)||this).state={isMenuVisible:!1,loading:"is-loading"},t.handleToggleMenu=t.handleToggleMenu.bind(c()(t)),t}l()(a,e);var t=a.prototype;return t.componentDidMount=function(){var e=this;this.timeoutId=setTimeout(function(){e.setState({loading:""})},100)},t.componentWillUnmount=function(){this.timeoutId&&clearTimeout(this.timeoutId)},t.handleToggleMenu=function(){this.setState({isMenuVisible:!this.state.isMenuVisible})},t.render=function(){var e=this.props.children;return Object(i.a)("div",{className:"body "+this.state.loading+" "+(this.state.isMenuVisible?"is-menu-visible":"")},Object(i.a)("div",{id:"wrapper"},Object(i.a)(m,{onToggleMenu:this.handleToggleMenu}),e,Object(i.a)(p,null),Object(i.a)(f,null)),Object(i.a)(O,{onToggleMenu:this.handleToggleMenu}))},a}(r.a.Component);a.a=g},160:function(e,a,t){"use strict";var n=t(9),c=(t(0),t(156));a.a=function(e){var a=e.to;return Object(n.a)("div",{style:{marginTop:"-2em",marginBottom:"2em"}},Object(n.a)(c.a,{className:"button icon fa-backward",to:a},"Zurück"))}}}]);
//# sourceMappingURL=component---src-pages-wattenmeer-tsx-260885b39b6feaf10e2d.js.map
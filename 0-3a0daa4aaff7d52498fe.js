(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{148:function(e,n,t){"use strict";var a=t(7),l=t.n(a),r=t(51),i=t.n(r),c=t(0),o=t.n(c),s=t(4),u=t.n(s),m=(t(158),function(e){return o.a.createElement("header",{id:"header",className:"alt"},o.a.createElement("nav",null,o.a.createElement("a",{className:"menu-link",onClick:e.onToggleMenu,href:"javascript:;"},"Menü")))});m.propTypes={onToggleMenu:u.a.func};var d=m,h=t(149),g=function(e){return o.a.createElement("nav",{id:"menu"},o.a.createElement("div",{className:"inner"},o.a.createElement("ul",{className:"links"},o.a.createElement("li",null,o.a.createElement(h.Link,{onClick:e.onToggleMenu,to:"/"},"Home")),o.a.createElement("li",null,o.a.createElement(h.Link,{onClick:e.onToggleMenu,to:"/wohnung"},"Die Wohnung")),o.a.createElement("li",null,o.a.createElement(h.Link,{onClick:e.onToggleMenu,to:"/nessmersiel"},"Nessmersiel")),o.a.createElement("li",null,o.a.createElement(h.Link,{onClick:e.onToggleMenu,to:"/tourismus"},"Tourismus"))),o.a.createElement("ul",{className:"actions vertical"},o.a.createElement("li",null,o.a.createElement("a",{onClick:e.onToggleMenu,href:"#contact",className:"button special fit"},"Kontakt")))),o.a.createElement("a",{className:"close",onClick:e.onToggleMenu,href:"javascript:;"},"Close"))};g.propTypes={onToggleMenu:u.a.func};var p=g,f=function(e){return o.a.createElement("section",{id:"contact"},o.a.createElement("div",{className:"inner"},o.a.createElement("section",{className:"split"},o.a.createElement("section",null,o.a.createElement("div",{className:"contact-method"},o.a.createElement("span",{className:"icon alt fa-envelope"}),o.a.createElement("h3",null,"Email"),o.a.createElement("a",{href:"#"},"abc@def.de"))),o.a.createElement("section",null,o.a.createElement("div",{className:"contact-method"},o.a.createElement("span",{className:"icon alt fa-phone"}),o.a.createElement("h3",null,"Phone"),o.a.createElement("span",null,"(000) 000-0000 x12387"))),o.a.createElement("section",null,o.a.createElement("div",{className:"contact-method"},o.a.createElement("span",{className:"icon alt fa-home"}),o.a.createElement("h3",null,"Address"),o.a.createElement("span",null,"1234 Somewhere Road #5432",o.a.createElement("br",null),"Nashville, TN 00000",o.a.createElement("br",null),"United States of America"))))))},E=function(e){return o.a.createElement("footer",{id:"footer"},o.a.createElement("div",{className:"inner"},o.a.createElement("ul",{className:"icons"},o.a.createElement("li",null,o.a.createElement("a",{href:"https://github.com/Tarnadas/nessmersiel",target:"_blank",className:"icon alt fa-github"},o.a.createElement("span",{className:"label"},"GitHub")))),o.a.createElement("ul",{className:"copyright"},o.a.createElement("li",null,"© Mario Reder"),o.a.createElement("li",null,"Design: ",o.a.createElement("a",{href:"https://html5up.net",target:"_blank"},"HTML5 UP")))))},v=function(e){function n(n){var t;return(t=e.call(this,n)||this).state={isMenuVisible:!1,loading:"is-loading"},t.handleToggleMenu=t.handleToggleMenu.bind(i()(i()(t))),t}l()(n,e);var t=n.prototype;return t.componentDidMount=function(){var e=this;this.timeoutId=setTimeout(function(){e.setState({loading:""})},100)},t.componentWillUnmount=function(){this.timeoutId&&clearTimeout(this.timeoutId)},t.handleToggleMenu=function(){this.setState({isMenuVisible:!this.state.isMenuVisible})},t.render=function(){var e=this.props.children;return o.a.createElement("div",{className:"body "+this.state.loading+" "+(this.state.isMenuVisible?"is-menu-visible":"")},o.a.createElement("div",{id:"wrapper"},o.a.createElement(d,{onToggleMenu:this.handleToggleMenu}),e,o.a.createElement(f,null),o.a.createElement(E,null)),o.a.createElement(p,{onToggleMenu:this.handleToggleMenu}))},n}(o.a.Component);n.a=v},149:function(e,n,t){"use strict";t.r(n),t.d(n,"graphql",function(){return g}),t.d(n,"StaticQueryContext",function(){return d}),t.d(n,"StaticQuery",function(){return h});var a=t(0),l=t.n(a),r=t(4),i=t.n(r),c=t(147),o=t.n(c);t.d(n,"Link",function(){return o.a}),t.d(n,"withPrefix",function(){return c.withPrefix}),t.d(n,"navigate",function(){return c.navigate}),t.d(n,"push",function(){return c.push}),t.d(n,"replace",function(){return c.replace}),t.d(n,"navigateTo",function(){return c.navigateTo});var s=t(156),u=t.n(s);t.d(n,"PageRenderer",function(){return u.a});var m=t(48);t.d(n,"parsePath",function(){return m.a});var d=l.a.createContext({}),h=function(e){return l.a.createElement(d.Consumer,null,function(n){return e.data||n[e.query]&&n[e.query].data?(e.render||e.children)(e.data?e.data.data:n[e.query].data):l.a.createElement("div",null,"Loading (StaticQuery)")})};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}h.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},156:function(e,n,t){var a;e.exports=(a=t(159))&&a.default||a},158:function(e,n,t){},159:function(e,n,t){"use strict";t.r(n);t(32);var a=t(0),l=t.n(a),r=t(4),i=t.n(r),c=t(68),o=t(2),s=function(e){var n=e.location,t=o.default.getResourcesForPathnameSync(n.pathname);return l.a.createElement(c.a,Object.assign({location:n,pageResources:t},t.json))};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},n.default=s}}]);
//# sourceMappingURL=0-3a0daa4aaff7d52498fe.js.map
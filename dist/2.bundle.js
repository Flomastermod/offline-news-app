(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{59:function(e,t,n){var r=n(60);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(10)(r,o);r.locals&&(e.exports=r.locals)},60:function(e,t,n){(e.exports=n(9)(!1)).push([e.i,"header {\n  background: #21a094;\n  text-align: center;\n  padding: 10px;\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0; }\n  header h1 {\n    font-size: 20px;\n    line-height: 25px; }\n    header h1 a {\n      text-decoration: none;\n      cursor: pointer;\n      color: #fff;\n      text-transform: uppercase; }\n",""])},61:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(1),i=n.n(a),c=n(4),p=n.n(c),s=n(5),u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};function f(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var l=function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)},h=function(e){function t(){var n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,a=Array(o),i=0;i<o;i++)a[i]=arguments[i];return n=r=f(this,e.call.apply(e,[this].concat(a))),r.handleClick=function(e){if(r.props.onClick&&r.props.onClick(e),!e.defaultPrevented&&0===e.button&&!r.props.target&&!l(e)){e.preventDefault();var t=r.context.router.history,n=r.props,o=n.replace,a=n.to;o?t.replace(a):t.push(a)}},f(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e=this.props,t=(e.replace,e.to),n=e.innerRef,r=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["replace","to","innerRef"]);p()(this.context.router,"You should not use <Link> outside a <Router>"),p()(void 0!==t,'You must specify the "to" property');var a=this.context.router.history,i="string"==typeof t?Object(s.b)(t,null,null,a.location):t,c=a.createHref(i);return o.a.createElement("a",u({},r,{onClick:this.handleClick,href:c,ref:n}))},t}(o.a.Component);h.propTypes={onClick:i.a.func,target:i.a.string,replace:i.a.bool,to:i.a.oneOfType([i.a.string,i.a.object]).isRequired,innerRef:i.a.oneOfType([i.a.string,i.a.func])},h.defaultProps={replace:!1},h.contextTypes={router:i.a.shape({history:i.a.shape({push:i.a.func.isRequired,replace:i.a.func.isRequired,createHref:i.a.func.isRequired}).isRequired}).isRequired},t.a=h},78:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(61);n(59);t.default=o.a.memo(function(){return o.a.createElement("header",null,o.a.createElement("h1",null,o.a.createElement(a.a,{to:"/"},"News App")))})}}]);
//# sourceMappingURL=2.bundle.js.map
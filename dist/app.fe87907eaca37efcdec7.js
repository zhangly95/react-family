webpackJsonp([5],{0:function(e,t,r){e.exports=r("lVK7")},"2cW/":function(e,t,r){e.exports=function(e){r.e(3).then(function(t){e(r("0zPt"))}.bind(null,r)).catch(r.oe)}},"3IRH":function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},"6I0C":function(e,t,r){e.exports=function(e){r.e(1).then(function(t){e(r("PfT1"))}.bind(null,r)).catch(r.oe)}},BTlh:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,u=(n=r("U7vG"))&&"object"==typeof n&&"default"in n?n.default:n,o=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},c=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){return u.Children.only(this.props.children)},t}(u.Component);t.AppContainer=c,t.hot=function(){return function(e){return e}},t.areComponentsEqual=function(e,t){return e===t},t.setConfig=function(){}},BVBi:function(e,t,r){"use strict";(function(e){var n;Object.defineProperty(t,"__esModule",{value:!0}),t.getUserInfo=d,(n=r("rGbO").enterModule)&&n(e);var u,o,a=t.GET_USER_INFO_REQUEST="./userInfo/GET_INFO_REQUEST",c=t.GET_USER_INFO_SUCCESS="./userInfo/GET_INFO_SUCCESS",l=t.GET_USER_INFO_FAIL="./userInfo/GET_USER_INFO_FAIL";function i(){return{type:a}}function s(e){return{type:c,userInfo:e}}function f(){return{type:l}}function d(){return function(e){return e(i()),fetch("http://localhost:8080/api/user.json").then(function(e){return e.json()}).then(function(t){e(s(t))}).catch(function(){e(f())})}}u=r("rGbO").default,o=r("rGbO").leaveModule,u&&(u.register(a,"GET_USER_INFO_REQUEST","D:/react-family/src/redux/actions/userInfo.js"),u.register(c,"GET_USER_INFO_SUCCESS","D:/react-family/src/redux/actions/userInfo.js"),u.register(l,"GET_USER_INFO_FAIL","D:/react-family/src/redux/actions/userInfo.js"),u.register(i,"getUserInfoRequest","D:/react-family/src/redux/actions/userInfo.js"),u.register(s,"getUserInfoSuccess","D:/react-family/src/redux/actions/userInfo.js"),u.register(f,"getUserInfoFail","D:/react-family/src/redux/actions/userInfo.js"),u.register(d,"getUserInfo","D:/react-family/src/redux/actions/userInfo.js"),o(e))}).call(t,r("3IRH")(e))},"C+gl":function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=l;var n,u=r("oTjF");(n=r("rGbO").enterModule)&&n(e);var o,a,c={count:0};function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c;switch(arguments[1].type){case u.INCREMENT:return{count:e.count+1};case u.DEREMENT:return{count:e.count-1};case u.RESET:return{count:0};default:return e}}o=r("rGbO").default,a=r("rGbO").leaveModule,o&&(o.register(c,"initState","D:/react-family/src/redux/reducers/counter.js"),o.register(l,"reducer","D:/react-family/src/redux/reducers/counter.js"),a(e))}).call(t,r("3IRH")(e))},JU1R:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n,u=f(r("U7vG")),o=r("F8kA"),a=f(r("gf5I")),c=f(r("gYwO")),l=f(r("PGiq")),i=f(r("2cW/")),s=f(r("6I0C"));function f(e){return e&&e.__esModule?e:{default:e}}(n=r("rGbO").enterModule)&&n(e);var d,p,_=function(){return u.default.createElement("div",null,"Loading...")},E=function(e){return function(t){return u.default.createElement(a.default,{load:e},function(e){return e?u.default.createElement(e,t):u.default.createElement(_,null)})}},y=function(){return u.default.createElement(o.BrowserRouter,null,u.default.createElement("div",null,u.default.createElement("ul",null,u.default.createElement("li",null,u.default.createElement(o.Link,{to:"/"},"首页")),u.default.createElement("li",null,u.default.createElement(o.Link,{to:"/page1"},"Page1")),u.default.createElement("li",null,u.default.createElement(o.Link,{to:"/counter"},"Counter")),u.default.createElement("li",null,u.default.createElement(o.Link,{to:"/userinfo"},"UserInfo"))),u.default.createElement(o.Switch,null,u.default.createElement(o.Route,{exact:!0,path:"/",component:E(c.default)}),u.default.createElement(o.Route,{exact:!0,path:"/page1",component:E(l.default)}),u.default.createElement(o.Route,{exact:!0,path:"/counter",component:E(i.default)}),u.default.createElement(o.Route,{path:"/userinfo",component:E(s.default)}))))},b=y;t.default=b,d=r("rGbO").default,p=r("rGbO").leaveModule,d&&(d.register(_,"Loading","D:/react-family/src/router/router.js"),d.register(E,"createComponent","D:/react-family/src/router/router.js"),d.register(y,"getRouter","D:/react-family/src/router/router.js"),d.register(b,"default","D:/react-family/src/router/router.js"),p(e))}).call(t,r("3IRH")(e))},PDYz:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};t.default=i;var u,o=r("BVBi");(u=r("rGbO").enterModule)&&u(e);var a,c,l={isLoading:!1,userInfo:{},errorMsg:""};function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments[1];switch(t.type){case o.GET_USER_INFO_REQUEST:return n({},e,{isLoading:!0,userInfo:{},errorMsg:""});case o.GET_USER_INFO_SUCCESS:return n({},e,{isLoading:!1,userInfo:t.userInfo,errorMsg:""});case o.GET_USER_INFO_FAIL:return n({},e,{isLoading:!1,userInfo:{},errorMsg:"请求错误"});default:return e}}a=r("rGbO").default,c=r("rGbO").leaveModule,a&&(a.register(l,"initState","D:/react-family/src/redux/reducers/userInfo.js"),a.register(i,"reducer","D:/react-family/src/redux/reducers/userInfo.js"),c(e))}).call(t,r("3IRH")(e))},PGiq:function(e,t,r){e.exports=function(e){r.e(0).then(function(t){e(r("gabG"))}.bind(null,r)).catch(r.oe)}},WqZW:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n,u=r("Ol7m"),o=c(r("qCuJ")),a=c(r("bEzl"));function c(e){return e&&e.__esModule?e:{default:e}}(n=r("rGbO").enterModule)&&n(e);var l,i,s=(0,u.createStore)(o.default,(0,u.applyMiddleware)(a.default)),f=s;t.default=f,l=r("rGbO").default,i=r("rGbO").leaveModule,l&&(l.register(s,"store","D:/react-family/src/redux/store.js"),l.register(f,"default","D:/react-family/src/redux/store.js"),i(e))}).call(t,r("3IRH")(e))},bEzl:function(e,t,r){"use strict";function n(e){return function(t){var r=t.dispatch,n=t.getState;return function(t){return function(u){return"function"==typeof u?u(r,n,e):t(u)}}}}Object.defineProperty(t,"__esModule",{value:!0});var u=n();u.withExtraArgument=n,t.default=u},gYwO:function(e,t,r){e.exports=function(e){r.e(2).then(function(t){e(r("LXg6"))}.bind(null,r)).catch(r.oe)}},gf5I:function(module,exports,__webpack_require__){"use strict";(function(module){Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),_react=__webpack_require__("U7vG"),_react2=_interopRequireDefault(_react),enterModule;function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}enterModule=__webpack_require__("rGbO").enterModule,enterModule&&enterModule(module);var Bundle=function(_Component){function Bundle(){var e,t,r;_classCallCheck(this,Bundle);for(var n=arguments.length,u=Array(n),o=0;o<n;o++)u[o]=arguments[o];return t=r=_possibleConstructorReturn(this,(e=Bundle.__proto__||Object.getPrototypeOf(Bundle)).call.apply(e,[this].concat(u))),r.state={mod:null},_possibleConstructorReturn(r,t)}return _inherits(Bundle,_Component),_createClass(Bundle,[{key:"componentWillMount",value:function(){this.load(this.props)}},{key:"componentWillReceiveProps",value:function(e){e.load!==this.props.load&&this.load(e)}},{key:"load",value:function(e){var t=this;this.setState({mod:null}),e.load(function(e){t.setState({mod:e.default?e.default:e})})}},{key:"render",value:function(){return this.props.children(this.state.mod)}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),Bundle}(_react.Component),_default=Bundle,reactHotLoader,leaveModule;exports.default=_default,reactHotLoader=__webpack_require__("rGbO").default,leaveModule=__webpack_require__("rGbO").leaveModule,reactHotLoader&&(reactHotLoader.register(Bundle,"Bundle","D:/react-family/src/router/Bundle.js"),reactHotLoader.register(_default,"default","D:/react-family/src/router/Bundle.js"),leaveModule(module))}).call(exports,__webpack_require__("3IRH")(module))},lVK7:function(e,t,r){"use strict";(function(e){var t,n,u,o=f(r("U7vG")),a=f(r("O27J")),c=f(r("JU1R")),l=r("rGbO"),i=r("RH2O"),s=f(r("WqZW"));function f(e){return e&&e.__esModule?e:{default:e}}function d(e){a.default.render(o.default.createElement(l.AppContainer,null,o.default.createElement(i.Provider,{store:s.default},e)),document.getElementById("app"))}(t=r("rGbO").enterModule)&&t(e),d((0,c.default)()),n=r("rGbO").default,u=r("rGbO").leaveModule,n&&(n.register(d,"renderWithHotReload","D:/react-family/src/index.js"),u(e))}).call(t,r("3IRH")(e))},oTjF:function(e,t,r){"use strict";(function(e){var n;Object.defineProperty(t,"__esModule",{value:!0}),t.increment=i,t.decrement=s,t.reset=f,(n=r("rGbO").enterModule)&&n(e);var u,o,a=t.INCREMENT="counter/INCREMENT",c=t.DEREMENT="counter/DECREMENT",l=t.RESET="counter/RESET";function i(){return{type:a}}function s(){return{type:c}}function f(){return{type:l}}u=r("rGbO").default,o=r("rGbO").leaveModule,u&&(u.register(a,"INCREMENT","D:/react-family/src/redux/actions/counter.js"),u.register(c,"DEREMENT","D:/react-family/src/redux/actions/counter.js"),u.register(l,"RESET","D:/react-family/src/redux/actions/counter.js"),u.register(i,"increment","D:/react-family/src/redux/actions/counter.js"),u.register(s,"decrement","D:/react-family/src/redux/actions/counter.js"),u.register(f,"reset","D:/react-family/src/redux/actions/counter.js"),o(e))}).call(t,r("3IRH")(e))},qCuJ:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n,u=c(r("C+gl")),o=c(r("PDYz")),a=r("Ol7m");function c(e){return e&&e.__esModule?e:{default:e}}(n=r("rGbO").enterModule)&&n(e);var l,i,s=(0,a.combineReducers)({counter:u.default,userInfo:o.default});t.default=s,l=r("rGbO").default,i=r("rGbO").leaveModule,l&&(l.register(s,"default","D:/react-family/src/redux/reducers.js"),i(e))}).call(t,r("3IRH")(e))},rGbO:function(e,t,r){"use strict";e.exports=r("BTlh")}},[0]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{322:function(e,t,r){__NEXT_REGISTER_PAGE("/login",function(){return e.exports=r(347),{page:e.exports.default}})},347:function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n),a=r(17),i=r(8),u=r.n(i),s=(r(46),r(62)),l=r.n(s),c=r(48),f=r.n(c),p=r(3);function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){w(e,t,r[t])})}return e}function y(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function w(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var v=function(e){function t(){var e,r,n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,n=d(t).call(this),e=!n||"object"!==m(n)&&"function"!=typeof n?g(r):n,w(g(g(e)),"updateFormState",function(t){e.setState({form:b({},e.state.form,t)})}),w(g(g(e)),"updateInputValue",function(t){var r=b({},e.state.form);r[t.target.name].value=t.target.value,e.updateFormState(r)}),w(g(g(e)),"handleSubmit",function(t){t.preventDefault();var r=b({},e.state.form);r.email.hasError=!1,r.email.errorMessage="",r.password.hasError=!1,r.password.errorMessage="",e.updateFormState(r),u.a.auth().signInWithEmailAndPassword(r.email.value,r.password.value).then(function(){l.a.push("/")}).catch(function(t){var n=t.code;"auth/invalid-email"===n?(r.email.hasError=!0,r.email.errorMessage="E-Mail Adresse ist ungültig"):"auth/user-disabled"===n?r.infoMessage="User wurde deaktiviert":"auth/user-not-found"===n?(r.email.hasError=!0,r.email.errorMessage="Kein gültiger User für diese E-Mail Adresse"):"auth/wrong-password"===n?(r.password.hasError=!0,r.password.errorMessage="Passwort ist ungültig"):r.infoMessage=n.infoMessage,e.updateFormState(r)})}),e.state={form:{infoMessage:"",email:{label:"E-Mail",name:"email",type:"email",value:"",required:!0,errorMessage:"",hasError:!1},password:{label:"Password",name:"password",type:"password",value:"",required:!0,errorMessage:"",hasError:!1}}},e}var r,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,n["Component"]),r=t,(a=[{key:"render",value:function(){var e=this.state.form;return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",null,"Login"),o.a.createElement(p.a,{onSubmit:this.handleSubmit},o.a.createElement(p.b,{infoMessage:e.infoMessage}),o.a.createElement(p.c,{label:e.email.label,name:e.email.name,type:e.email.type,required:e.email.required,intitialValue:e.email.value,errorMessage:e.email.errorMessage,onChange:this.updateInputValue,hasError:e.email.hasError}),o.a.createElement(p.c,{label:e.password.label,name:e.password.name,type:e.password.type,required:e.password.required,intitialValue:e.password.value,errorMessage:e.password.errorMessage,onChange:this.updateInputValue,hasError:e.password.hasError}),o.a.createElement(p.d,{value:"Login"})),o.a.createElement(f.a,{href:"/resetpassword"},o.a.createElement("a",null,"Forgot password?")))}}])&&y(r.prototype,a),i&&y(r,i),t}();function E(e){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function O(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function S(e,t){return!t||"object"!==E(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function M(e){return(M=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}r.d(t,"default",function(){return j});var j=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),S(this,M(t).apply(this,arguments))}var r,i,u;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(t,n["Component"]),r=t,(i=[{key:"render",value:function(){return o.a.createElement(a.a,null,o.a.createElement(v,null))}}])&&O(r.prototype,i),u&&O(r,u),t}()},62:function(e,t,r){e.exports=r(42)}},[[322,1,0]]]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{323:function(e,t,n){__NEXT_REGISTER_PAGE("/resetpassword",function(){return e.exports=n(346),{page:e.exports.default}})},346:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(17),i=n(8),u=n.n(i),l=(n(46),n(3));function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){y(e,t,n[t])})}return e}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var h=function(e){function t(){var e,n,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,r=p(t).call(this),e=!r||"object"!==c(r)&&"function"!=typeof r?b(n):r,y(b(b(e)),"updateFormState",function(t){e.setState({form:s({},e.state.form,t)})}),y(b(b(e)),"updateInputValue",function(t){var n=s({},e.state.form);n[t.target.name].value=t.target.value,e.updateFormState(n)}),y(b(b(e)),"handleSubmit",function(t){t.preventDefault();var n=e.state.form.email.value;u.a.auth().sendPasswordResetEmail(n).then(function(){e.setState({passwordResetLinkSent:!0})}).catch(function(t){var n=t.code,r=s({},e.state.form);"auth/invalid-email"===n?(r.email.hasError=!0,r.email.errorMessage="E-Mail Adresse ist ungültig"):"auth/user-not-found"===n?r.infoMessage="Kein User für diese E-Mail Adresse vorhanden":r.email.errorMessage=n.infoMessage,e.updateFormState(r)})}),e.state={passwordResetLinkSent:!1,form:{infoMessage:"",email:{label:"E-Mail",name:"email",type:"email",value:"",required:!0,errorMessage:"",hasError:!1}}},e}var n,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,r["Component"]),n=t,(a=[{key:"render",value:function(){var e=this.state,t=e.form;return e.passwordResetLinkSent?o.a.createElement("p",null,"Wir haben Ihnen ein E-Mail an ",o.a.createElement("strong",null,t.email.value)," gesendet."):o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",null,"Reset password"),o.a.createElement(l.a,{onSubmit:this.handleSubmit},o.a.createElement(l.b,{infoMessage:t.infoMessage}),o.a.createElement(l.c,{label:t.email.label,name:t.email.name,type:t.email.type,required:t.email.required,intitialValue:t.email.value,errorMessage:t.email.errorMessage,onChange:this.updateInputValue,hasError:t.email.hasError}),o.a.createElement(l.d,{value:"Reset password"})))}}])&&f(n.prototype,a),i&&f(n,i),t}();function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function E(e,t){return(E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"default",function(){return O});var O=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),g(this,w(t).apply(this,arguments))}var n,i,u;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}(t,r["Component"]),n=t,(i=[{key:"render",value:function(){return o.a.createElement(a.a,null,o.a.createElement(h,null))}}])&&v(n.prototype,i),u&&v(n,u),t}()}},[[323,1,0]]]);
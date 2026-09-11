"use strict";var d=function(n,r){return function(){try{return r||n((r={exports:{}}).exports,r),r.exports}catch(u){throw (r=0, u)}};};var s=d(function(g,v){
var a=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),m=require('@stdlib/assert-is-iterator-like/dist'),q=require('@stdlib/assert-is-function/dist'),t=require('@stdlib/symbol-iterator/dist'),p=require('@stdlib/stats-incr-minabs/dist'),x=require('@stdlib/error-tools-fmtprodmsg/dist');function o(n){var r,u,i;if(!m(n))throw new TypeError(x('1KR3w',n));return i=p(),r={},a(r,"next",f),a(r,"return",c),t&&q(n[t])&&a(r,t,l),r;function f(){var e;return u?{done:!0}:(e=n.next(),e.done?(u=!0,e):(typeof e.value=="number"?e=i(e.value):e=i(NaN),{value:e,done:!1}))}function c(e){return u=!0,arguments.length?{value:e,done:!0}:{done:!0}}function l(){return o(n[t]())}}v.exports=o
});var y=s();module.exports=y;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

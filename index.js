// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).CompactAdjacencyMatrix=t()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t,e=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,f=n.__defineSetter__,u=n.__lookupGetter__,a=n.__lookupSetter__;t=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,t,e){var c,l,s,h;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((l="value"in e)&&(u.call(r,t)||a.call(r,t)?(c=r.__proto__,r.__proto__=n,delete r[t],r[t]=e.value,r.__proto__=c):r[t]=e.value),s="get"in e,h="set"in e,l&&(s||h))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&i&&i.call(r,t,e.get),h&&f&&f.call(r,t,e.set),r};var c=t;function l(r,t,e){c(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}function s(r){return"number"==typeof r}var h="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function p(){return h&&"symbol"==typeof Symbol.toStringTag}var y=Object.prototype.toString;var v=Object.prototype.hasOwnProperty;function w(r,t){return null!=r&&v.call(r,t)}var d="function"==typeof Symbol?Symbol.toStringTag:"";var b=p()?function(r){var t,e,n;if(null==r)return y.call(r);e=r[d],t=w(r,d);try{r[d]=void 0}catch(t){return y.call(r)}return n=y.call(r),t?r[d]=e:delete r[d],n}:function(r){return y.call(r)},_=Number,g=_.prototype.toString;var E=p();function m(r){return"object"==typeof r&&(r instanceof _||(E?function(r){try{return g.call(r),!0}catch(r){return!1}}(r):"[object Number]"===b(r)))}function T(r){return s(r)||m(r)}l(T,"isPrimitive",s),l(T,"isObject",m);var j=Number.POSITIVE_INFINITY,N=_.NEGATIVE_INFINITY,A=Math.floor;function B(r){return A(r)===r}function I(r){return r<j&&r>N&&B(r)}function x(r){return s(r)&&I(r)}function S(r){return m(r)&&I(r.valueOf())}function V(r){return x(r)||S(r)}function O(r){return x(r)&&r>=0}function R(r){return S(r)&&r.valueOf()>=0}function P(r){return O(r)||R(r)}l(V,"isPrimitive",x),l(V,"isObject",S),l(P,"isPrimitive",O),l(P,"isObject",R);function k(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&B(r.length)&&r.length>=0&&r.length<=4294967295}function M(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&B(r.length)&&r.length>=0&&r.length<=9007199254740991}var L=/./;function C(r){return"boolean"==typeof r}var U=Boolean.prototype.toString;var F=p();function G(r){return"object"==typeof r&&(r instanceof Boolean||(F?function(r){try{return U.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===b(r)))}function Y(r){return C(r)||G(r)}function X(){return new Function("return this;")()}l(Y,"isPrimitive",C),l(Y,"isObject",G);var D="object"==typeof self?self:null,W="object"==typeof window?window:null,Z="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},q="object"==typeof Z?Z:null;var z=function(r){if(arguments.length){if(!C(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return X()}if(D)return D;if(W)return W;if(q)return q;throw new Error("unexpected error. Unable to resolve global object.")}(),H=z.document&&z.document.childNodes,J=Int8Array;function K(){return/^\s*function\s*([^(]*)/i}var Q=/^\s*function\s*([^(]*)/i;l(K,"REGEXP",Q);var $=Array.isArray?Array.isArray:function(r){return"[object Array]"===b(r)};function rr(r){return null!==r&&"object"==typeof r}function tr(r){var t,e,n,o;if(("Object"===(e=b(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=Q.exec(n.toString()))return t[1]}return rr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}l(rr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var e,n;if(!$(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(rr));var er="function"==typeof L||"object"==typeof J||"function"==typeof H?function(r){return tr(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?tr(r).toLowerCase():t};function nr(r){return"function"===er(r)}function or(r){return"object"==typeof r&&null!==r&&!$(r)}function ir(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&w(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator}var fr=ir()?Symbol.iterator:null;function ur(r,t,e){c(r,t,{configurable:!1,enumerable:!1,get:e})}var ar="function"==typeof Int32Array;var cr="function"==typeof Int32Array?Int32Array:null;var lr="function"==typeof Int32Array?Int32Array:void 0;var sr=function(){var r,t,e;if("function"!=typeof cr)return!1;try{t=new cr([1,3.14,-3.14,2147483648]),e=t,r=(ar&&e instanceof Int32Array||"[object Int32Array]"===b(e))&&1===t[0]&&3===t[1]&&-3===t[2]&&-2147483648===t[3]}catch(t){r=!1}return r}()?lr:function(){throw new Error("not implemented")},hr="function"==typeof Int8Array;var pr="function"==typeof Int8Array?Int8Array:null;var yr="function"==typeof Int8Array?Int8Array:void 0;var vr=function(){var r,t,e;if("function"!=typeof pr)return!1;try{t=new pr([1,3.14,-3.14,128]),e=t,r=(hr&&e instanceof Int8Array||"[object Int8Array]"===b(e))&&1===t[0]&&3===t[1]&&-3===t[2]&&-128===t[3]}catch(t){r=!1}return r}()?yr:function(){throw new Error("not implemented")};function wr(){var r,t=arguments,e=t[0],n="https://stdlib.io/e/"+e+"?";for(r=1;r<t.length;r++)n+="&arg[]="+encodeURIComponent(t[r]);return n}var dr=Math.ceil;function br(r,t){return r[t]}function _r(r,t){return r.get(t)}function gr(r,t,e){r[t]=e}function Er(r,t,e){r.set(e,t)}function mr(r){var t=Boolean(r.get&&r.set);return{data:r,accessors:t,getter:t?_r:br,setter:t?Er:gr}}function Tr(r,t,e,n){var o,i,f,u,a,c,l,s;for(o=t.data,i=t.setter,f=t.getter,l=A(r/2),c=(a=n)+(r-1)*e,s=0;s<l;s++)u=f(o,a),i(o,a,f(o,c)),i(o,c,u),a+=e,c-=e;return t}function jr(r,t,e){var n,o,i,f,u,a,c;if(r<=0)return t;if((f=mr(t)).accessors)return Tr(r,f,e,o=e<0?(1-r)*e:0),f.data;if(a=A(r/2),1===e){if(i=r-1,(u=a%3)>0)for(o=0;o<u;o++)n=t[o],t[o]=t[i],t[i]=n,i-=1;if(a<3)return t;for(o=u;o<a;o+=3)n=t[o],t[o]=t[i],t[i]=n,n=t[o+1],t[o+1]=t[i-1],t[i-1]=n,n=t[o+2],t[o+2]=t[i-2],t[i-2]=n,i-=3;return t}for(i=(o=e<0?(1-r)*e:0)+(r-1)*e,c=0;c<a;c++)n=t[o],t[o]=t[i],t[i]=n,o+=e,i-=e;return t}function Nr(r){var t,e,n;for(t=[];;){if(n=(e=r.next()).value){if(!M(n))return new TypeError(wr("0ivBV",n));t.push(n)}if(e.done)break}return t}function Ar(r,t,e){var n,o,i,f;for(n=[],f=-1;;){if(f+=1,i=(o=r.next()).value){if(!M(i=t.call(e,i,f)))return new TypeError(wr("0ivBW",i));n.push(i)}if(o.done)break}return n}function Br(r){var t,e,n;for(t=[];;){if(n=(e=r.next()).value){if(!M(n))return new TypeError(wr("0ivBV",n));t.push(n[0],n[1])}if(e.done)break}return t}function Ir(r,t,e){var n,o,i,f;for(n=[],f=-1;;){if(f+=1,i=(o=r.next()).value){if(!M(i=t.call(e,i,f)))return new TypeError(wr("0ivBW",i));n.push(i[0],i[1])}if(o.done)break}return n}function xr(r,t){return Boolean(r>>t&1)}function Sr(r,t){return r>>t&1}l(jr,"ndarray",(function(r,t,e,n){var o,i,f,u,a,c,l;if(r<=0)return t;if((u=mr(t)).accessors)return Tr(r,u,e,n),u.data;if(c=A(r/2),i=n,1===e){if(f=i+r-1,(a=c%3)>0)for(l=0;l<a;l++)o=t[i],t[i]=t[f],t[f]=o,i+=e,f-=e;if(c<3)return t;for(l=a;l<c;l+=3)o=t[i],t[i]=t[f],t[f]=o,o=t[i+1],t[i+1]=t[f-1],t[f-1]=o,o=t[i+2],t[i+2]=t[f-2],t[f-2]=o,i+=3,f-=3;return t}for(f=i+(r-1)*e,l=0;l<c;l++)o=t[i],t[i]=t[f],t[f]=o,i+=e,f-=e;return t}));var Vr=ir(),Or=8*sr.BYTES_PER_ELEMENT;function Rr(r){if(!(this instanceof Rr))return new Rr(r);if(!O(r))throw new TypeError(wr("0iv2V",r));return this._N=r,this._M=0,this._buffer=new sr(dr(r*r/Or)),this}return l(Rr,"fromAdjacencyList",(function(r){var t,e,n,o,i,f,u,a,c,l;if(!nr(this))throw new TypeError(wr("0iv01"));if(this!==Rr)throw new TypeError(wr("0iv1m"));if((e=arguments.length)>1){if(!nr(o=arguments[1]))throw new TypeError(wr("0iv2S",o));e>2&&(t=arguments[2])}if(k(r)){if(i=new this(a=r.length),o){for(c=0;c<a;c++){if(!M(n=o.call(t,r[c],c)))throw new TypeError(wr("0ivBX",n));for(l=0;l<n.length;l++)i.addEdge(c,n[l])}return i}for(c=0;c<a;c++){if(!M(n=r[c]))throw new TypeError(wr("0ivBY",r));for(l=0;l<n.length;l++)i.addEdge(c,n[l])}return i}if(or(r)&&Vr&&nr(r[fr])){if(!nr((f=r[fr]()).next))throw new TypeError(wr("0iv2U",r));if((f=o?Ar(f,o,t):Nr(f))instanceof Error)throw f;for(i=new this(u=f.length),c=0;c<u;c++)for(n=f[c],l=0;l<n.length;l++)i.addEdge(c,n[l]);return i}throw new TypeError(wr("0iv2U",r))})),l(Rr,"fromEdges",(function(r,t){var e,n,o,i,f,u,a,c;if(!nr(this))throw new TypeError(wr("0iv01"));if(this!==Rr)throw new TypeError(wr("0iv1m"));if((n=arguments.length)>2){if(!nr(o=arguments[2]))throw new TypeError(wr("0iv3Z",o));n>3&&(e=arguments[3])}if(!O(r))throw new TypeError(wr("0iv2p",r));if(k(t)){if(o){for(f=new this(r),c=0;c<t.length;c++){if(!k(i=o.call(e,t[c],c)))throw new TypeError(wr("0ivBX",i));f.addEdge(i[0],i[1])}return f}for(f=new this(r),c=0;c<t.length;c++){if(!k(i=t[c]))throw new TypeError(wr("0ivBZ",i));f.addEdge(i[0],i[1])}return f}if(or(t)&&Vr&&nr(t[fr])){if(!nr((u=t[fr]()).next))throw new TypeError(wr("0iv2U",t));if((u=o?Ir(u,o,e):Br(u))instanceof Error)throw u;for(f=new this((a=u.length)/2),c=0;c<a;c+=2)f.addEdge(u[c],u[c+1]);return f}throw new TypeError(wr("0ivBb",t))})),l(Rr.prototype,"_loc",(function(r,t,e){var n,o,i;return o=(i=r*this._N+t)-(n=A(i/Or))*Or,e[0]=n,e[1]=o,e})),l(Rr.prototype,"addEdge",(function(r,t){var e;if(!O(r))throw new TypeError(wr("0iv2p",r));if(!O(t))throw new TypeError(wr("0iv3k",t));if(r>=this._N)throw new RangeError(wr("0ivBc",r));if(t>=this._N)throw new RangeError(wr("0ivBd",t));return e=this._loc(r,t,[0,0]),!1===xr(this._buffer[e[0]],e[1])&&(this._buffer[e[0]]=function(r,t){return r|1<<t}(this._buffer[e[0]],e[1]),this._M+=1),this})),ur(Rr.prototype,"edges",(function(){var r,t,e,n;for(r=[],t=[0,0],e=0;e<this._N;e++)for(n=0;n<this._N;n++)t=this._loc(e,n,t),xr(this._buffer[t[0]],t[1])&&r.push([e,n]);return r})),l(Rr.prototype,"hasEdge",(function(r,t){var e;if(!O(r))throw new TypeError(wr("0iv2p",r));if(!O(t))throw new TypeError(wr("0iv3k",t));if(r>=this._N)throw new RangeError(wr("0ivBc",r));if(t>=this._N)throw new RangeError(wr("0ivBd",t));return e=this._loc(r,t,[0,0]),xr(this._buffer[e[0]],e[1])})),l(Rr.prototype,"inDegree",(function(r){var t,e,n;if(!O(r))throw new TypeError(wr("0iv2V",r));if(r>=this._N)throw new RangeError(wr("invalid argument. Vertex cannot exceed matrix dimensions. Value: `%u`.",r));for(t=0,e=[0,0],n=0;n<this._N;n++)e=this._loc(n,r,e),t+=Sr(this._buffer[e[0]],e[1]);return t})),l(Rr.prototype,"inEdges",(function(r){var t,e,n;if(!O(r))throw new TypeError(wr("0iv2V",r));if(r>=this._N)throw new RangeError(wr("invalid argument. Vertex cannot exceed matrix dimensions. Value: `%u`.",r));for(t=[],e=[0,0],n=0;n<this._N;n++)e=this._loc(n,r,e),xr(this._buffer[e[0]],e[1])&&t.push(n);return t})),ur(Rr.prototype,"nedges",(function(){return this._M})),ur(Rr.prototype,"nvertices",(function(){return this._N})),l(Rr.prototype,"outDegree",(function(r){var t,e,n;if(!O(r))throw new TypeError(wr("0iv2V",r));if(r>=this._N)throw new RangeError(wr("invalid argument. Vertex cannot exceed matrix dimensions. Value: `%u`.",r));for(t=0,e=[0,0],n=0;n<this._N;n++)e=this._loc(r,n,e),t+=Sr(this._buffer[e[0]],e[1]);return t})),l(Rr.prototype,"outEdges",(function(r){var t,e,n;if(!O(r))throw new TypeError(wr("0iv2V",r));if(r>=this._N)throw new RangeError(wr("invalid argument. Vertex cannot exceed matrix dimensions. Value: `%u`.",r));for(t=[],e=[0,0],n=0;n<this._N;n++)e=this._loc(r,n,e),xr(this._buffer[e[0]],e[1])&&t.push(n);return t})),l(Rr.prototype,"removeEdge",(function(r,t){var e;if(!O(r))throw new TypeError(wr("0iv2p",r));if(!O(t))throw new TypeError(wr("0iv3k",t));if(r>=this._N)throw new RangeError(wr("0ivBc",r));if(t>=this._N)throw new RangeError(wr("0ivBd",t));return e=this._loc(r,t,[0,0]),xr(this._buffer[e[0]],e[1])&&(this._buffer[e[0]]=function(r,t){return r&~(1<<t)}(this._buffer[e[0]],e[1]),this._M-=1),this})),l(Rr.prototype,"toAdjacencyList",(function(){var r,t,e,n,o;for(r=[],t=[0,0],n=0;n<this._N;n++){for(e=[],o=0;o<this._N;o++)t=this._loc(n,o,t),xr(this._buffer[t[0]],t[1])&&e.push(o);r.push(e)}return r})),l(Rr.prototype,"toposort",(function(){var r,t,e,n,o,i,f;if(t=this,o=this._N,e=[],0===this._N)return[e,null];for(r=new vr(o),i=[],n=[0,0],f=0;f<o;f++)if(0===r[f]&&0!==u(f))return i.push(f),[null,i];return jr(e.length,e,1),[e,null];function u(f){var a,c;if(2===r[f])return 0;if(1===r[f])return-1;for(r[f]=1,c=0;c<o;c++)if(n=t._loc(f,c,n),xr(t._buffer[n[0]],n[1])&&0!==(a=u(c)))return i.push(c),a;return r[f]=2,e.push(f),0}})),Rr}));
//# sourceMappingURL=index.js.map

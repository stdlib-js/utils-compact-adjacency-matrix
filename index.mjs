// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-array-like-object@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-object@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-iterator-symbol-support@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/array-int32@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/array-int8@esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ceil@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@esm/index.mjs";import w from"https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-grev@esm/index.mjs";function m(r){var e,i,n;for(e=[];;){if(n=(i=r.next()).value){if(!t(n))return new TypeError(p("0ivBV",n));e.push(n)}if(i.done)break}return e}function c(r,e,i){var n,o,s,f;for(n=[],f=-1;;){if(f+=1,s=(o=r.next()).value){if(s=e.call(i,s,f),!t(s))return new TypeError(p("0ivBW",s));n.push(s)}if(o.done)break}return n}function v(r){var e,i,n;for(e=[];;){if(n=(i=r.next()).value){if(!t(n))return new TypeError(p("0ivBV",n));e.push(n[0],n[1])}if(i.done)break}return e}function g(r,e,i){var n,o,s,f;for(n=[],f=-1;;){if(f+=1,s=(o=r.next()).value){if(s=e.call(i,s,f),!t(s))return new TypeError(p("0ivBW",s));n.push(s[0],s[1])}if(o.done)break}return n}function E(r,e){return Boolean(r>>e&1)}function _(r,e){return r>>e&1}var y=o(),j=8*u.BYTES_PER_ELEMENT;function b(e){if(!(this instanceof b))return new b(e);if(!r(e))throw new TypeError(p("0iv2V",e));return this._N=e,this._M=0,this._buffer=new u(a(e*e/j)),this}f(b,"fromAdjacencyList",(function(r){var o,f,h,u,d,a,l,w,v,g;if(!i(this))throw new TypeError(p("0iv01"));if(this!==b)throw new TypeError(p("0iv1m"));if((f=arguments.length)>1){if(!i(u=arguments[1]))throw new TypeError(p("0iv2S",u));f>2&&(o=arguments[2])}if(e(r)){if(d=new this(w=r.length),u){for(v=0;v<w;v++){if(h=u.call(o,r[v],v),!t(h))throw new TypeError(p("0ivBX",h));for(g=0;g<h.length;g++)d.addEdge(v,h[g])}return d}for(v=0;v<w;v++){if(h=r[v],!t(h))throw new TypeError(p("0ivBY",r));for(g=0;g<h.length;g++)d.addEdge(v,h[g])}return d}if(n(r)&&y&&i(r[s])){if(a=r[s](),!i(a.next))throw new TypeError(p("0iv2U",r));if((a=u?c(a,u,o):m(a))instanceof Error)throw a;for(d=new this(l=a.length),v=0;v<l;v++)for(h=a[v],g=0;g<h.length;g++)d.addEdge(v,h[g]);return d}throw new TypeError(p("0iv2U",r))})),f(b,"fromEdges",(function(t,o){var f,h,u,d,a,l,w,m;if(!i(this))throw new TypeError(p("0iv01"));if(this!==b)throw new TypeError(p("0iv1m"));if((h=arguments.length)>2){if(!i(u=arguments[2]))throw new TypeError(p("0iv3Z",u));h>3&&(f=arguments[3])}if(!r(t))throw new TypeError(p("0iv2p",t));if(e(o)){if(u){for(a=new this(t),m=0;m<o.length;m++){if(d=u.call(f,o[m],m),!e(d))throw new TypeError(p("0ivBX",d));a.addEdge(d[0],d[1])}return a}for(a=new this(t),m=0;m<o.length;m++){if(d=o[m],!e(d))throw new TypeError(p("0ivBZ",d));a.addEdge(d[0],d[1])}return a}if(n(o)&&y&&i(o[s])){if(l=o[s](),!i(l.next))throw new TypeError(p("0iv2U",o));if((l=u?g(l,u,f):v(l))instanceof Error)throw l;for(a=new this((w=l.length)/2),m=0;m<w;m+=2)a.addEdge(l[m],l[m+1]);return a}throw new TypeError(p("0ivBb",o))})),f(b.prototype,"_loc",(function(r,e,t){var i,n,o;return n=(o=r*this._N+e)-(i=l(o/j))*j,t[0]=i,t[1]=n,t})),f(b.prototype,"addEdge",(function(e,t){var i;if(!r(e))throw new TypeError(p("0iv2p",e));if(!r(t))throw new TypeError(p("0iv3k",t));if(e>=this._N)throw new RangeError(p("0ivBc",e));if(t>=this._N)throw new RangeError(p("0ivBd",t));return i=this._loc(e,t,[0,0]),!1===E(this._buffer[i[0]],i[1])&&(this._buffer[i[0]]=function(r,e){return r|1<<e}(this._buffer[i[0]],i[1]),this._M+=1),this})),h(b.prototype,"edges",(function(){var r,e,t,i;for(r=[],e=[0,0],t=0;t<this._N;t++)for(i=0;i<this._N;i++)e=this._loc(t,i,e),E(this._buffer[e[0]],e[1])&&r.push([t,i]);return r})),f(b.prototype,"hasEdge",(function(e,t){var i;if(!r(e))throw new TypeError(p("0iv2p",e));if(!r(t))throw new TypeError(p("0iv3k",t));if(e>=this._N)throw new RangeError(p("0ivBc",e));if(t>=this._N)throw new RangeError(p("0ivBd",t));return i=this._loc(e,t,[0,0]),E(this._buffer[i[0]],i[1])})),f(b.prototype,"inDegree",(function(e){var t,i,n;if(!r(e))throw new TypeError(p("0iv2V",e));if(e>=this._N)throw new RangeError(p("invalid argument. Vertex cannot exceed matrix dimensions. Value: `%u`.",e));for(t=0,i=[0,0],n=0;n<this._N;n++)i=this._loc(n,e,i),t+=_(this._buffer[i[0]],i[1]);return t})),f(b.prototype,"inEdges",(function(e){var t,i,n;if(!r(e))throw new TypeError(p("0iv2V",e));if(e>=this._N)throw new RangeError(p("invalid argument. Vertex cannot exceed matrix dimensions. Value: `%u`.",e));for(t=[],i=[0,0],n=0;n<this._N;n++)i=this._loc(n,e,i),E(this._buffer[i[0]],i[1])&&t.push(n);return t})),h(b.prototype,"nedges",(function(){return this._M})),h(b.prototype,"nvertices",(function(){return this._N})),f(b.prototype,"outDegree",(function(e){var t,i,n;if(!r(e))throw new TypeError(p("0iv2V",e));if(e>=this._N)throw new RangeError(p("invalid argument. Vertex cannot exceed matrix dimensions. Value: `%u`.",e));for(t=0,i=[0,0],n=0;n<this._N;n++)i=this._loc(e,n,i),t+=_(this._buffer[i[0]],i[1]);return t})),f(b.prototype,"outEdges",(function(e){var t,i,n;if(!r(e))throw new TypeError(p("0iv2V",e));if(e>=this._N)throw new RangeError(p("invalid argument. Vertex cannot exceed matrix dimensions. Value: `%u`.",e));for(t=[],i=[0,0],n=0;n<this._N;n++)i=this._loc(e,n,i),E(this._buffer[i[0]],i[1])&&t.push(n);return t})),f(b.prototype,"removeEdge",(function(e,t){var i;if(!r(e))throw new TypeError(p("0iv2p",e));if(!r(t))throw new TypeError(p("0iv3k",t));if(e>=this._N)throw new RangeError(p("0ivBc",e));if(t>=this._N)throw new RangeError(p("0ivBd",t));return i=this._loc(e,t,[0,0]),E(this._buffer[i[0]],i[1])&&(this._buffer[i[0]]=function(r,e){return r&~(1<<e)}(this._buffer[i[0]],i[1]),this._M-=1),this})),f(b.prototype,"toAdjacencyList",(function(){var r,e,t,i,n;for(r=[],e=[0,0],i=0;i<this._N;i++){for(t=[],n=0;n<this._N;n++)e=this._loc(i,n,e),E(this._buffer[e[0]],e[1])&&t.push(n);r.push(t)}return r})),f(b.prototype,"toposort",(function(){var r,e,t,i,n,o,s;if(e=this,n=this._N,t=[],0===this._N)return[t,null];for(r=new d(n),o=[],i=[0,0],s=0;s<n;s++)if(0===r[s]&&0!==f(s))return o.push(s),[null,o];return w(t.length,t,1),[t,null];function f(s){var h,u;if(2===r[s])return 0;if(1===r[s])return-1;for(r[s]=1,u=0;u<n;u++)if(i=e._loc(s,u,i),E(e._buffer[i[0]],i[1])&&0!==(h=f(u)))return o.push(u),h;return r[s]=2,t.push(s),0}}));export{b as default};
//# sourceMappingURL=index.mjs.map
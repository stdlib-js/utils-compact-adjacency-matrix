"use strict";var m=function(a,r){return function(){return r||a((r={exports:{}}).exports,r),r.exports}};var T=m(function(xr,V){
var K=require('@stdlib/assert-is-collection/dist'),Q=require('@stdlib/error-tools-fmtprodmsg/dist');function U(a){var r,t,e;for(r=[];;){if(t=a.next(),e=t.value,e){if(!K(e))return new TypeError(Q('1S9Ao',e));r.push(e)}if(t.done)break}return r}V.exports=U
});var k=m(function(Vr,q){
var W=require('@stdlib/assert-is-collection/dist'),X=require('@stdlib/error-tools-fmtprodmsg/dist');function Z(a,r,t){var e,n,i,u;for(e=[],u=-1;;){if(u+=1,n=a.next(),i=n.value,i){if(i=r.call(t,i,u),!W(i))return new TypeError(X('1S9Ap',i));e.push(i)}if(n.done)break}return e}q.exports=Z
});var A=m(function(Tr,N){
var $=require('@stdlib/assert-is-collection/dist'),rr=require('@stdlib/error-tools-fmtprodmsg/dist');function er(a){var r,t,e;for(r=[];;){if(t=a.next(),e=t.value,e){if(!$(e))return new TypeError(rr('1S9Ao',e));r.push(e[0],e[1])}if(t.done)break}return r}N.exports=er
});var R=m(function(qr,M){
var tr=require('@stdlib/assert-is-collection/dist'),nr=require('@stdlib/error-tools-fmtprodmsg/dist');function ir(a,r,t){var e,n,i,u;for(e=[],u=-1;;){if(u+=1,n=a.next(),i=n.value,i){if(i=r.call(t,i,u),!tr(i))return new TypeError(nr('1S9Ap',i));e.push(i[0],i[1])}if(n.done)break}return e}M.exports=ir
});var I=m(function(kr,S){
function ar(a,r){return a|=1<<r,a}S.exports=ar
});var F=m(function(Nr,j){
function or(a,r){return a&=~(1<<r),a}j.exports=or
});var L=m(function(Ar,C){
var ur=require('@stdlib/boolean-ctor/dist');function sr(a,r){return ur(a>>r&1)}C.exports=sr
});var O=m(function(Mr,B){
function vr(a,r){return a>>r&1}B.exports=vr
});var J=m(function(Rr,G){
var g=require('@stdlib/assert-is-nonnegative-integer/dist').isPrimitive,y=require('@stdlib/assert-is-array-like-object/dist'),z=require('@stdlib/assert-is-collection/dist'),p=require('@stdlib/assert-is-function/dist'),D=require('@stdlib/assert-is-object/dist'),fr=require('@stdlib/assert-has-iterator-symbol-support/dist'),b=require('@stdlib/symbol-iterator/dist'),h=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),x=require('@stdlib/utils-define-nonenumerable-read-only-accessor/dist'),Y=require('@stdlib/array-int32/dist'),lr=require('@stdlib/array-int8/dist'),s=require('@stdlib/error-tools-fmtprodmsg/dist'),cr=require('@stdlib/math-base-special-ceil/dist'),gr=require('@stdlib/math-base-special-floor/dist'),hr=require('@stdlib/blas-ext-base-grev/dist'),dr=T(),mr=k(),pr=A(),wr=R(),Er=I(),yr=F(),w=L(),P=O(),H=fr(),_=Y.BYTES_PER_ELEMENT*8;function l(a){if(!(this instanceof l))return new l(a);if(!g(a))throw new TypeError(s('1S92K',a));return this._N=a,this._M=0,this._buffer=new Y(cr(a*a/_)),this}h(l,"fromAdjacencyList",function(r){var t,e,n,i,u,v,f,d,o,c;if(!p(this))throw new TypeError(s('1S901'));if(this!==l)throw new TypeError(s('1S91c'));if(e=arguments.length,e>1){if(i=arguments[1],!p(i))throw new TypeError(s('1S92H',i));e>2&&(t=arguments[2])}if(y(r)){if(d=r.length,u=new this(d),i){for(o=0;o<d;o++){if(n=i.call(t,r[o],o),!z(n))throw new TypeError(s('1S9Aq',n));for(c=0;c<n.length;c++)u.addEdge(o,n[c])}return u}for(o=0;o<d;o++){if(n=r[o],!z(n))throw new TypeError(s('1S9Ar',r));for(c=0;c<n.length;c++)u.addEdge(o,n[c])}return u}if(D(r)&&H&&p(r[b])){if(v=r[b](),!p(v.next))throw new TypeError(s('1S92J',r));if(i?v=mr(v,i,t):v=dr(v),v instanceof Error)throw v;for(f=v.length,u=new this(f),o=0;o<f;o++)for(n=v[o],c=0;c<n.length;c++)u.addEdge(o,n[c]);return u}throw new TypeError(s('1S92J',r))});h(l,"fromEdges",function(r,t){var e,n,i,u,v,f,d,o;if(!p(this))throw new TypeError(s('1S901'));if(this!==l)throw new TypeError(s('1S91c'));if(n=arguments.length,n>2){if(i=arguments[2],!p(i))throw new TypeError(s('1S93N',i));n>3&&(e=arguments[3])}if(!g(r))throw new TypeError(s('1S92d',r));if(y(t)){if(i){for(v=new this(r),o=0;o<t.length;o++){if(u=i.call(e,t[o],o),!y(u))throw new TypeError(s('1S9Aq',u));v.addEdge(u[0],u[1])}return v}for(v=new this(r),o=0;o<t.length;o++){if(u=t[o],!y(u))throw new TypeError(s('1S9As',u));v.addEdge(u[0],u[1])}return v}if(D(t)&&H&&p(t[b])){if(f=t[b](),!p(f.next))throw new TypeError(s('1S92J',t));if(i?f=wr(f,i,e):f=pr(f),f instanceof Error)throw f;for(d=f.length,v=new this(d/2),o=0;o<d;o+=2)v.addEdge(f[o],f[o+1]);return v}throw new TypeError(s('1S9At',t))});h(l.prototype,"_loc",function(r,t,e){var n,i,u;return u=r*this._N+t,n=gr(u/_),i=u-n*_,e[0]=n,e[1]=i,e});h(l.prototype,"addEdge",function(r,t){var e;if(!g(r))throw new TypeError(s('1S92d',r));if(!g(t))throw new TypeError(s('1S93X',t));if(r>=this._N)throw new RangeError(s('1S9Au',r));if(t>=this._N)throw new RangeError(s('1S9Av',t));return e=this._loc(r,t,[0,0]),w(this._buffer[e[0]],e[1])===!1&&(this._buffer[e[0]]=Er(this._buffer[e[0]],e[1]),this._M+=1),this});x(l.prototype,"edges",function(){var r,t,e,n;for(r=[],t=[0,0],e=0;e<this._N;e++)for(n=0;n<this._N;n++)t=this._loc(e,n,t),w(this._buffer[t[0]],t[1])&&r.push([e,n]);return r});h(l.prototype,"hasEdge",function(r,t){var e;if(!g(r))throw new TypeError(s('1S92d',r));if(!g(t))throw new TypeError(s('1S93X',t));if(r>=this._N)throw new RangeError(s('1S9Au',r));if(t>=this._N)throw new RangeError(s('1S9Av',t));return e=this._loc(r,t,[0,0]),w(this._buffer[e[0]],e[1])});h(l.prototype,"inDegree",function(r){var t,e,n;if(!g(r))throw new TypeError(s('1S92K',r));if(r>=this._N)throw new RangeError(s('1S9Aw',r));for(t=0,e=[0,0],n=0;n<this._N;n++)e=this._loc(n,r,e),t+=P(this._buffer[e[0]],e[1]);return t});h(l.prototype,"inEdges",function(r){var t,e,n;if(!g(r))throw new TypeError(s('1S92K',r));if(r>=this._N)throw new RangeError(s('1S9Aw',r));for(t=[],e=[0,0],n=0;n<this._N;n++)e=this._loc(n,r,e),w(this._buffer[e[0]],e[1])&&t.push(n);return t});x(l.prototype,"nedges",function(){return this._M});x(l.prototype,"nvertices",function(){return this._N});h(l.prototype,"outDegree",function(r){var t,e,n;if(!g(r))throw new TypeError(s('1S92K',r));if(r>=this._N)throw new RangeError(s('1S9Aw',r));for(t=0,e=[0,0],n=0;n<this._N;n++)e=this._loc(r,n,e),t+=P(this._buffer[e[0]],e[1]);return t});h(l.prototype,"outEdges",function(r){var t,e,n;if(!g(r))throw new TypeError(s('1S92K',r));if(r>=this._N)throw new RangeError(s('1S9Aw',r));for(t=[],e=[0,0],n=0;n<this._N;n++)e=this._loc(r,n,e),w(this._buffer[e[0]],e[1])&&t.push(n);return t});h(l.prototype,"removeEdge",function(r,t){var e;if(!g(r))throw new TypeError(s('1S92d',r));if(!g(t))throw new TypeError(s('1S93X',t));if(r>=this._N)throw new RangeError(s('1S9Au',r));if(t>=this._N)throw new RangeError(s('1S9Av',t));return e=this._loc(r,t,[0,0]),w(this._buffer[e[0]],e[1])&&(this._buffer[e[0]]=yr(this._buffer[e[0]],e[1]),this._M-=1),this});h(l.prototype,"toAdjacencyList",function(){var r,t,e,n,i;for(r=[],t=[0,0],n=0;n<this._N;n++){for(e=[],i=0;i<this._N;i++)t=this._loc(n,i,t),w(this._buffer[t[0]],t[1])&&e.push(i);r.push(e)}return r});h(l.prototype,"toposort",function(){var r,t,e,n,i,u,v,f;if(t=this,u=this._N,e=[],this._N===0)return[e,null];for(r=new lr(u),v=[],n=[0,0],f=0;f<u;f++)if(r[f]===0&&(i=d(f),i!==0))return v.push(f),[null,v];return hr(e.length,e,1),[e,null];function d(o){var c,E;if(r[o]===2)return 0;if(r[o]===1)return-1;for(r[o]=1,E=0;E<u;E++)if(n=t._loc(o,E,n),w(t._buffer[n[0]],n[1])&&(c=d(E),c!==0))return v.push(E),c;return r[o]=2,e.push(o),0}});G.exports=l
});var br=J();module.exports=br;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
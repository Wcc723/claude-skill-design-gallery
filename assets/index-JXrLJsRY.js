(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(e){let t=Object.create(null);for(let n of e.split(`,`))t[n]=1;return e=>e in t}var t={},n=[],r=()=>{},i=()=>!1,a=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),o=e=>e.startsWith(`onUpdate:`),s=Object.assign,c=(e,t)=>{let n=e.indexOf(t);n>-1&&e.splice(n,1)},l=Object.prototype.hasOwnProperty,u=(e,t)=>l.call(e,t),d=Array.isArray,f=e=>x(e)===`[object Map]`,p=e=>x(e)===`[object Set]`,m=e=>x(e)===`[object Date]`,h=e=>typeof e==`function`,g=e=>typeof e==`string`,_=e=>typeof e==`symbol`,v=e=>typeof e==`object`&&!!e,y=e=>(v(e)||h(e))&&h(e.then)&&h(e.catch),b=Object.prototype.toString,x=e=>b.call(e),S=e=>x(e).slice(8,-1),C=e=>x(e)===`[object Object]`,w=e=>g(e)&&e!==`NaN`&&e[0]!==`-`&&``+parseInt(e,10)===e,T=e(`,key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted`),ee=e=>{let t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},te=/-\w/g,E=ee(e=>e.replace(te,e=>e.slice(1).toUpperCase())),ne=/\B([A-Z])/g,D=ee(e=>e.replace(ne,`-$1`).toLowerCase()),re=ee(e=>e.charAt(0).toUpperCase()+e.slice(1)),ie=ee(e=>e?`on${re(e)}`:``),O=(e,t)=>!Object.is(e,t),ae=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},k=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},oe=e=>{let t=parseFloat(e);return isNaN(t)?e:t},se=e=>{let t=g(e)?Number(e):NaN;return isNaN(t)?e:t},ce,le=()=>ce||=typeof globalThis<`u`?globalThis:typeof self<`u`?self:typeof window<`u`?window:typeof global<`u`?global:{};function ue(e){if(d(e)){let t={};for(let n=0;n<e.length;n++){let r=e[n],i=g(r)?me(r):ue(r);if(i)for(let e in i)t[e]=i[e]}return t}else if(g(e)||v(e))return e}var de=/;(?![^(]*\))/g,fe=/:([^]+)/,pe=/\/\*[^]*?\*\//g;function me(e){let t={};return e.replace(pe,``).split(de).forEach(e=>{if(e){let n=e.split(fe);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function A(e){let t=``;if(g(e))t=e;else if(d(e))for(let n=0;n<e.length;n++){let r=A(e[n]);r&&(t+=r+` `)}else if(v(e))for(let n in e)e[n]&&(t+=n+` `);return t.trim()}var he=`itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`,ge=e(he);he+``;function _e(e){return!!e||e===``}function ve(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=ye(e[r],t[r]);return n}function ye(e,t){if(e===t)return!0;let n=m(e),r=m(t);if(n||r)return n&&r?e.getTime()===t.getTime():!1;if(n=_(e),r=_(t),n||r)return e===t;if(n=d(e),r=d(t),n||r)return n&&r?ve(e,t):!1;if(n=v(e),r=v(t),n||r){if(!n||!r||Object.keys(e).length!==Object.keys(t).length)return!1;for(let n in e){let r=e.hasOwnProperty(n),i=t.hasOwnProperty(n);if(r&&!i||!r&&i||!ye(e[n],t[n]))return!1}}return String(e)===String(t)}var be=e=>!!(e&&e.__v_isRef===!0),j=e=>g(e)?e:e==null?``:d(e)||v(e)&&(e.toString===b||!h(e.toString))?be(e)?j(e.value):JSON.stringify(e,xe,2):String(e),xe=(e,t)=>be(t)?xe(e,t.value):f(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[t,n],r)=>(e[Se(t,r)+` =>`]=n,e),{})}:p(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>Se(e))}:_(t)?Se(t):v(t)&&!d(t)&&!C(t)?String(t):t,Se=(e,t=``)=>_(e)?`Symbol(${e.description??t})`:e,M,Ce=class{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&M&&(M.active?(this.parent=M,this.index=(M.scopes||=[]).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){let t=M;try{return M=this,e()}finally{M=t}}}on(){++this._on===1&&(this.prevScope=M,M=this)}off(){if(this._on>0&&--this._on===0){if(M===this)M=this.prevScope;else{let e=M;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(this.effects.length=0,t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){let e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0}}};function we(){return M}var N,Te=new WeakSet,Ee=class{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,M&&(M.active?M.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Te.has(this)&&(Te.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Ae(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ue(this),Ne(this);let e=N,t=ze;N=this,ze=!0;try{return this.fn()}finally{Pe(this),N=e,ze=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Le(e);this.deps=this.depsTail=void 0,Ue(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Te.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Fe(this)&&this.run()}get dirty(){return Fe(this)}},De=0,Oe,ke;function Ae(e,t=!1){if(e.flags|=8,t){e.next=ke,ke=e;return}e.next=Oe,Oe=e}function je(){De++}function Me(){if(--De>0)return;if(ke){let e=ke;for(ke=void 0;e;){let t=e.next;e.next=void 0,e.flags&=-9,e=t}}let e;for(;Oe;){let t=Oe;for(Oe=void 0;t;){let n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(t){e||=t}t=n}}if(e)throw e}function Ne(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Pe(e){let t,n=e.depsTail,r=n;for(;r;){let e=r.prevDep;r.version===-1?(r===n&&(n=e),Le(r),Re(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=e}e.deps=t,e.depsTail=n}function Fe(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Ie(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Ie(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===We)||(e.globalVersion=We,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Fe(e))))return;e.flags|=2;let t=e.dep,n=N,r=ze;N=e,ze=!0;try{Ne(e);let n=e.fn(e._value);(t.version===0||O(n,e._value))&&(e.flags|=128,e._value=n,t.version++)}catch(e){throw t.version++,e}finally{N=n,ze=r,Pe(e),e.flags&=-3}}function Le(e,t=!1){let{dep:n,prevSub:r,nextSub:i}=e;if(r&&(r.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let e=n.computed.deps;e;e=e.nextDep)Le(e,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Re(e){let{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}var ze=!0,Be=[];function Ve(){Be.push(ze),ze=!1}function He(){let e=Be.pop();ze=e===void 0?!0:e}function Ue(e){let{cleanup:t}=e;if(e.cleanup=void 0,t){let e=N;N=void 0;try{t()}finally{N=e}}}var We=0,Ge=class{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}},Ke=class{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!N||!ze||N===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==N)t=this.activeLink=new Ge(N,this),N.deps?(t.prevDep=N.depsTail,N.depsTail.nextDep=t,N.depsTail=t):N.deps=N.depsTail=t,qe(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){let e=t.nextDep;e.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=e),t.prevDep=N.depsTail,t.nextDep=void 0,N.depsTail.nextDep=t,N.depsTail=t,N.deps===t&&(N.deps=e)}return t}trigger(e){this.version++,We++,this.notify(e)}notify(e){je();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{Me()}}};function qe(e){if(e.dep.sc++,e.sub.flags&4){let t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let e=t.deps;e;e=e.nextDep)qe(e)}let n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}var Je=new WeakMap,Ye=Symbol(``),Xe=Symbol(``),Ze=Symbol(``);function P(e,t,n){if(ze&&N){let t=Je.get(e);t||Je.set(e,t=new Map);let r=t.get(n);r||(t.set(n,r=new Ke),r.map=t,r.key=n),r.track()}}function Qe(e,t,n,r,i,a){let o=Je.get(e);if(!o){We++;return}let s=e=>{e&&e.trigger()};if(je(),t===`clear`)o.forEach(s);else{let i=d(e),a=i&&w(n);if(i&&n===`length`){let e=Number(r);o.forEach((t,n)=>{(n===`length`||n===Ze||!_(n)&&n>=e)&&s(t)})}else switch((n!==void 0||o.has(void 0))&&s(o.get(n)),a&&s(o.get(Ze)),t){case`add`:i?a&&s(o.get(`length`)):(s(o.get(Ye)),f(e)&&s(o.get(Xe)));break;case`delete`:i||(s(o.get(Ye)),f(e)&&s(o.get(Xe)));break;case`set`:f(e)&&s(o.get(Ye));break}}Me()}function $e(e){let t=I(e);return t===e?t:(P(t,`iterate`,Ze),F(e)?t:t.map(L))}function et(e){return P(e=I(e),`iterate`,Ze),e}function tt(e,t){return Rt(e)?Vt(Lt(e)?L(t):t):L(t)}var nt={__proto__:null,[Symbol.iterator](){return rt(this,Symbol.iterator,e=>tt(this,e))},concat(...e){return $e(this).concat(...e.map(e=>d(e)?$e(e):e))},entries(){return rt(this,`entries`,e=>(e[1]=tt(this,e[1]),e))},every(e,t){return at(this,`every`,e,t,void 0,arguments)},filter(e,t){return at(this,`filter`,e,t,e=>e.map(e=>tt(this,e)),arguments)},find(e,t){return at(this,`find`,e,t,e=>tt(this,e),arguments)},findIndex(e,t){return at(this,`findIndex`,e,t,void 0,arguments)},findLast(e,t){return at(this,`findLast`,e,t,e=>tt(this,e),arguments)},findLastIndex(e,t){return at(this,`findLastIndex`,e,t,void 0,arguments)},forEach(e,t){return at(this,`forEach`,e,t,void 0,arguments)},includes(...e){return st(this,`includes`,e)},indexOf(...e){return st(this,`indexOf`,e)},join(e){return $e(this).join(e)},lastIndexOf(...e){return st(this,`lastIndexOf`,e)},map(e,t){return at(this,`map`,e,t,void 0,arguments)},pop(){return ct(this,`pop`)},push(...e){return ct(this,`push`,e)},reduce(e,...t){return ot(this,`reduce`,e,t)},reduceRight(e,...t){return ot(this,`reduceRight`,e,t)},shift(){return ct(this,`shift`)},some(e,t){return at(this,`some`,e,t,void 0,arguments)},splice(...e){return ct(this,`splice`,e)},toReversed(){return $e(this).toReversed()},toSorted(e){return $e(this).toSorted(e)},toSpliced(...e){return $e(this).toSpliced(...e)},unshift(...e){return ct(this,`unshift`,e)},values(){return rt(this,`values`,e=>tt(this,e))}};function rt(e,t,n){let r=et(e),i=r[t]();return r!==e&&!F(e)&&(i._next=i.next,i.next=()=>{let e=i._next();return e.done||(e.value=n(e.value)),e}),i}var it=Array.prototype;function at(e,t,n,r,i,a){let o=et(e),s=o!==e&&!F(e),c=o[t];if(c!==it[t]){let t=c.apply(e,a);return s?L(t):t}let l=n;o!==e&&(s?l=function(t,r){return n.call(this,tt(e,t),r,e)}:n.length>2&&(l=function(t,r){return n.call(this,t,r,e)}));let u=c.call(o,l,r);return s&&i?i(u):u}function ot(e,t,n,r){let i=et(e),a=i!==e&&!F(e),o=n,s=!1;i!==e&&(a?(s=r.length===0,o=function(t,r,i){return s&&(s=!1,t=tt(e,t)),n.call(this,t,tt(e,r),i,e)}):n.length>3&&(o=function(t,r,i){return n.call(this,t,r,i,e)}));let c=i[t](o,...r);return s?tt(e,c):c}function st(e,t,n){let r=I(e);P(r,`iterate`,Ze);let i=r[t](...n);return(i===-1||i===!1)&&zt(n[0])?(n[0]=I(n[0]),r[t](...n)):i}function ct(e,t,n=[]){Ve(),je();let r=I(e)[t].apply(e,n);return Me(),He(),r}var lt=e(`__proto__,__v_isRef,__isVue`),ut=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!==`arguments`&&e!==`caller`).map(e=>Symbol[e]).filter(_));function dt(e){_(e)||(e=String(e));let t=I(this);return P(t,`has`,e),t.hasOwnProperty(e)}var ft=class{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,n){if(t===`__v_skip`)return e.__v_skip;let r=this._isReadonly,i=this._isShallow;if(t===`__v_isReactive`)return!r;if(t===`__v_isReadonly`)return r;if(t===`__v_isShallow`)return i;if(t===`__v_raw`)return n===(r?i?At:kt:i?Ot:Dt).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;let a=d(e);if(!r){let e;if(a&&(e=nt[t]))return e;if(t===`hasOwnProperty`)return dt}let o=Reflect.get(e,t,R(e)?e:n);if((_(t)?ut.has(t):lt(t))||(r||P(e,`get`,t),i))return o;if(R(o)){let e=a&&w(t)?o:o.value;return r&&v(e)?Ft(e):e}return v(o)?r?Ft(o):Nt(o):o}},pt=class extends ft{constructor(e=!1){super(!1,e)}set(e,t,n,r){let i=e[t],a=d(e)&&w(t);if(!this._isShallow){let e=Rt(i);if(!F(n)&&!Rt(n)&&(i=I(i),n=I(n)),!a&&R(i)&&!R(n))return e||(i.value=n),!0}let o=a?Number(t)<e.length:u(e,t),s=Reflect.set(e,t,n,R(e)?e:r);return e===I(r)&&(o?O(n,i)&&Qe(e,`set`,t,n,i):Qe(e,`add`,t,n)),s}deleteProperty(e,t){let n=u(e,t),r=e[t],i=Reflect.deleteProperty(e,t);return i&&n&&Qe(e,`delete`,t,void 0,r),i}has(e,t){let n=Reflect.has(e,t);return(!_(t)||!ut.has(t))&&P(e,`has`,t),n}ownKeys(e){return P(e,`iterate`,d(e)?`length`:Ye),Reflect.ownKeys(e)}},mt=class extends ft{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}},ht=new pt,gt=new mt,_t=new pt(!0),vt=e=>e,yt=e=>Reflect.getPrototypeOf(e);function bt(e,t,n){return function(...r){let i=this.__v_raw,a=I(i),o=f(a),c=e===`entries`||e===Symbol.iterator&&o,l=e===`keys`&&o,u=i[e](...r),d=n?vt:t?Vt:L;return!t&&P(a,`iterate`,l?Xe:Ye),s(Object.create(u),{next(){let{value:e,done:t}=u.next();return t?{value:e,done:t}:{value:c?[d(e[0]),d(e[1])]:d(e),done:t}}})}}function xt(e){return function(...t){return e===`delete`?!1:e===`clear`?void 0:this}}function St(e,t){let n={get(n){let r=this.__v_raw,i=I(r),a=I(n);e||(O(n,a)&&P(i,`get`,n),P(i,`get`,a));let{has:o}=yt(i),s=t?vt:e?Vt:L;if(o.call(i,n))return s(r.get(n));if(o.call(i,a))return s(r.get(a));r!==i&&r.get(n)},get size(){let t=this.__v_raw;return!e&&P(I(t),`iterate`,Ye),t.size},has(t){let n=this.__v_raw,r=I(n),i=I(t);return e||(O(t,i)&&P(r,`has`,t),P(r,`has`,i)),t===i?n.has(t):n.has(t)||n.has(i)},forEach(n,r){let i=this,a=i.__v_raw,o=I(a),s=t?vt:e?Vt:L;return!e&&P(o,`iterate`,Ye),a.forEach((e,t)=>n.call(r,s(e),s(t),i))}};return s(n,e?{add:xt(`add`),set:xt(`set`),delete:xt(`delete`),clear:xt(`clear`)}:{add(e){let n=I(this),r=yt(n),i=I(e),a=!t&&!F(e)&&!Rt(e)?i:e;return r.has.call(n,a)||O(e,a)&&r.has.call(n,e)||O(i,a)&&r.has.call(n,i)||(n.add(a),Qe(n,`add`,a,a)),this},set(e,n){!t&&!F(n)&&!Rt(n)&&(n=I(n));let r=I(this),{has:i,get:a}=yt(r),o=i.call(r,e);o||=(e=I(e),i.call(r,e));let s=a.call(r,e);return r.set(e,n),o?O(n,s)&&Qe(r,`set`,e,n,s):Qe(r,`add`,e,n),this},delete(e){let t=I(this),{has:n,get:r}=yt(t),i=n.call(t,e);i||=(e=I(e),n.call(t,e));let a=r?r.call(t,e):void 0,o=t.delete(e);return i&&Qe(t,`delete`,e,void 0,a),o},clear(){let e=I(this),t=e.size!==0,n=e.clear();return t&&Qe(e,`clear`,void 0,void 0,void 0),n}}),[`keys`,`values`,`entries`,Symbol.iterator].forEach(r=>{n[r]=bt(r,e,t)}),n}function Ct(e,t){let n=St(e,t);return(t,r,i)=>r===`__v_isReactive`?!e:r===`__v_isReadonly`?e:r===`__v_raw`?t:Reflect.get(u(n,r)&&r in t?n:t,r,i)}var wt={get:Ct(!1,!1)},Tt={get:Ct(!1,!0)},Et={get:Ct(!0,!1)},Dt=new WeakMap,Ot=new WeakMap,kt=new WeakMap,At=new WeakMap;function jt(e){switch(e){case`Object`:case`Array`:return 1;case`Map`:case`Set`:case`WeakMap`:case`WeakSet`:return 2;default:return 0}}function Mt(e){return e.__v_skip||!Object.isExtensible(e)?0:jt(S(e))}function Nt(e){return Rt(e)?e:It(e,!1,ht,wt,Dt)}function Pt(e){return It(e,!1,_t,Tt,Ot)}function Ft(e){return It(e,!0,gt,Et,kt)}function It(e,t,n,r,i){if(!v(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;let a=Mt(e);if(a===0)return e;let o=i.get(e);if(o)return o;let s=new Proxy(e,a===2?r:n);return i.set(e,s),s}function Lt(e){return Rt(e)?Lt(e.__v_raw):!!(e&&e.__v_isReactive)}function Rt(e){return!!(e&&e.__v_isReadonly)}function F(e){return!!(e&&e.__v_isShallow)}function zt(e){return e?!!e.__v_raw:!1}function I(e){let t=e&&e.__v_raw;return t?I(t):e}function Bt(e){return!u(e,`__v_skip`)&&Object.isExtensible(e)&&k(e,`__v_skip`,!0),e}var L=e=>v(e)?Nt(e):e,Vt=e=>v(e)?Ft(e):e;function R(e){return e?e.__v_isRef===!0:!1}function Ht(e){return Wt(e,!1)}function Ut(e){return Wt(e,!0)}function Wt(e,t){return R(e)?e:new Gt(e,t)}var Gt=class{constructor(e,t){this.dep=new Ke,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:I(e),this._value=t?e:L(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){let t=this._rawValue,n=this.__v_isShallow||F(e)||Rt(e);e=n?e:I(e),O(e,t)&&(this._rawValue=e,this._value=n?e:L(e),this.dep.trigger())}};function Kt(e){return R(e)?e.value:e}var qt={get:(e,t,n)=>t===`__v_raw`?e:Kt(Reflect.get(e,t,n)),set:(e,t,n,r)=>{let i=e[t];return R(i)&&!R(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function Jt(e){return Lt(e)?e:new Proxy(e,qt)}var Yt=class{constructor(e,t,n){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Ke(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=We-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&N!==this)return Ae(this,!0),!0}get value(){let e=this.dep.track();return Ie(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}};function Xt(e,t,n=!1){let r,i;return h(e)?r=e:(r=e.get,i=e.set),new Yt(r,i,n)}var Zt={},Qt=new WeakMap,$t=void 0;function en(e,t=!1,n=$t){if(n){let t=Qt.get(n);t||Qt.set(n,t=[]),t.push(e)}}function tn(e,n,i=t){let{immediate:a,deep:o,once:s,scheduler:l,augmentJob:u,call:f}=i,p=e=>o?e:F(e)||o===!1||o===0?nn(e,1):nn(e),m,g,_,v,y=!1,b=!1;if(R(e)?(g=()=>e.value,y=F(e)):Lt(e)?(g=()=>p(e),y=!0):d(e)?(b=!0,y=e.some(e=>Lt(e)||F(e)),g=()=>e.map(e=>{if(R(e))return e.value;if(Lt(e))return p(e);if(h(e))return f?f(e,2):e()})):g=h(e)?n?f?()=>f(e,2):e:()=>{if(_){Ve();try{_()}finally{He()}}let t=$t;$t=m;try{return f?f(e,3,[v]):e(v)}finally{$t=t}}:r,n&&o){let e=g,t=o===!0?1/0:o;g=()=>nn(e(),t)}let x=we(),S=()=>{m.stop(),x&&x.active&&c(x.effects,m)};if(s&&n){let e=n;n=(...t)=>{e(...t),S()}}let C=b?Array(e.length).fill(Zt):Zt,w=e=>{if(!(!(m.flags&1)||!m.dirty&&!e))if(n){let e=m.run();if(o||y||(b?e.some((e,t)=>O(e,C[t])):O(e,C))){_&&_();let t=$t;$t=m;try{let t=[e,C===Zt?void 0:b&&C[0]===Zt?[]:C,v];C=e,f?f(n,3,t):n(...t)}finally{$t=t}}}else m.run()};return u&&u(w),m=new Ee(g),m.scheduler=l?()=>l(w,!1):w,v=e=>en(e,!1,m),_=m.onStop=()=>{let e=Qt.get(m);if(e){if(f)f(e,4);else for(let t of e)t();Qt.delete(m)}},n?a?w(!0):C=m.run():l?l(w.bind(null,!0),!0):m.run(),S.pause=m.pause.bind(m),S.resume=m.resume.bind(m),S.stop=S,S}function nn(e,t=1/0,n){if(t<=0||!v(e)||e.__v_skip||(n||=new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,R(e))nn(e.value,t,n);else if(d(e))for(let r=0;r<e.length;r++)nn(e[r],t,n);else if(p(e)||f(e))e.forEach(e=>{nn(e,t,n)});else if(C(e)){for(let r in e)nn(e[r],t,n);for(let r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&nn(e[r],t,n)}return e}function rn(e,t,n,r){try{return r?e(...r):e()}catch(e){an(e,t,n)}}function z(e,t,n,r){if(h(e)){let i=rn(e,t,n,r);return i&&y(i)&&i.catch(e=>{an(e,t,n)}),i}if(d(e)){let i=[];for(let a=0;a<e.length;a++)i.push(z(e[a],t,n,r));return i}}function an(e,n,r,i=!0){let a=n?n.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:s}=n&&n.appContext.config||t;if(n){let t=n.parent,i=n.proxy,a=`https://vuejs.org/error-reference/#runtime-${r}`;for(;t;){let n=t.ec;if(n){for(let t=0;t<n.length;t++)if(n[t](e,i,a)===!1)return}t=t.parent}if(o){Ve(),rn(o,null,10,[e,i,a]),He();return}}on(e,r,a,i,s)}function on(e,t,n,r=!0,i=!1){if(i)throw e;console.error(e)}var B=[],sn=-1,cn=[],ln=null,un=0,dn=Promise.resolve(),fn=null;function pn(e){let t=fn||dn;return e?t.then(this?e.bind(this):e):t}function mn(e){let t=sn+1,n=B.length;for(;t<n;){let r=t+n>>>1,i=B[r],a=bn(i);a<e||a===e&&i.flags&2?t=r+1:n=r}return t}function hn(e){if(!(e.flags&1)){let t=bn(e),n=B[B.length-1];!n||!(e.flags&2)&&t>=bn(n)?B.push(e):B.splice(mn(t),0,e),e.flags|=1,gn()}}function gn(){fn||=dn.then(xn)}function _n(e){d(e)?cn.push(...e):ln&&e.id===-1?ln.splice(un+1,0,e):e.flags&1||(cn.push(e),e.flags|=1),gn()}function vn(e,t,n=sn+1){for(;n<B.length;n++){let t=B[n];if(t&&t.flags&2){if(e&&t.id!==e.uid)continue;B.splice(n,1),n--,t.flags&4&&(t.flags&=-2),t(),t.flags&4||(t.flags&=-2)}}}function yn(e){if(cn.length){let e=[...new Set(cn)].sort((e,t)=>bn(e)-bn(t));if(cn.length=0,ln){ln.push(...e);return}for(ln=e,un=0;un<ln.length;un++){let e=ln[un];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}ln=null,un=0}}var bn=e=>e.id==null?e.flags&2?-1:1/0:e.id;function xn(e){try{for(sn=0;sn<B.length;sn++){let e=B[sn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),rn(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;sn<B.length;sn++){let e=B[sn];e&&(e.flags&=-2)}sn=-1,B.length=0,yn(e),fn=null,(B.length||cn.length)&&xn(e)}}var Sn=null,Cn=null;function wn(e){let t=Sn;return Sn=e,Cn=e&&e.type.__scopeId||null,t}function Tn(e,t=Sn,n){if(!t||e._n)return e;let r=(...n)=>{r._d&&Bi(-1);let i=wn(t),a;try{a=e(...n)}finally{wn(i),r._d&&Bi(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function En(e,t,n,r){let i=e.dirs,a=t&&t.dirs;for(let o=0;o<i.length;o++){let s=i[o];a&&(s.oldValue=a[o].value);let c=s.dir[r];c&&(Ve(),z(c,n,8,[e.el,s,e,t]),He())}}function Dn(e,t){if(Q){let n=Q.provides,r=Q.parent&&Q.parent.provides;r===n&&(n=Q.provides=Object.create(r)),n[e]=t}}function On(e,t,n=!1){let r=oa();if(r||Kr){let i=Kr?Kr._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(i&&e in i)return i[e];if(arguments.length>1)return n&&h(t)?t.call(r&&r.proxy):t}}var kn=Symbol.for(`v-scx`),An=()=>On(kn);function jn(e,t,n){return Mn(e,t,n)}function Mn(e,n,i=t){let{immediate:a,deep:o,flush:c,once:l}=i,u=s({},i),d=n&&a||!n&&c!==`post`,f;if(fa){if(c===`sync`){let e=An();f=e.__watcherHandles||=[]}else if(!d){let e=()=>{};return e.stop=r,e.resume=r,e.pause=r,e}}let p=Q;u.call=(e,t,n)=>z(e,p,t,n);let m=!1;c===`post`?u.scheduler=e=>{U(e,p&&p.suspense)}:c!==`sync`&&(m=!0,u.scheduler=(e,t)=>{t?e():hn(e)}),u.augmentJob=e=>{n&&(e.flags|=4),m&&(e.flags|=2,p&&(e.id=p.uid,e.i=p))};let h=tn(e,n,u);return fa&&(f?f.push(h):d&&h()),h}function Nn(e,t,n){let r=this.proxy,i=g(e)?e.includes(`.`)?Pn(r,e):()=>r[e]:e.bind(r,r),a;h(t)?a=t:(a=t.handler,n=t);let o=la(this),s=Mn(i,a.bind(r),n);return o(),s}function Pn(e,t){let n=t.split(`.`);return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}var Fn=Symbol(`_vte`),In=e=>e.__isTeleport,Ln=Symbol(`_leaveCb`),Rn=Symbol(`_enterCb`);function zn(){let e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return pr(()=>{e.isMounted=!0}),gr(()=>{e.isUnmounting=!0}),e}var V=[Function,Array],Bn={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:V,onEnter:V,onAfterEnter:V,onEnterCancelled:V,onBeforeLeave:V,onLeave:V,onAfterLeave:V,onLeaveCancelled:V,onBeforeAppear:V,onAppear:V,onAfterAppear:V,onAppearCancelled:V},Vn=e=>{let t=e.subTree;return t.component?Vn(t.component):t},Hn={name:`BaseTransition`,props:Bn,setup(e,{slots:t}){let n=oa(),r=zn();return()=>{let i=t.default&&Xn(t.default(),!0),a=i&&i.length?Un(i):n.subTree?Z():void 0;if(!a)return;let o=I(e),{mode:s}=o;if(r.isLeaving)return qn(a);let c=Jn(a);if(!c)return qn(a);let l=Kn(c,o,r,n,e=>l=e);c.type!==G&&Yn(c,l);let u=n.subTree&&Jn(n.subTree);if(u&&u.type!==G&&!Wi(u,c)&&Vn(n).type!==G){let e=Kn(u,o,r,n);if(Yn(u,e),s===`out-in`&&c.type!==G)return r.isLeaving=!0,e.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete e.afterLeave,u=void 0},qn(a);s===`in-out`&&c.type!==G?e.delayLeave=(e,t,n)=>{let i=Gn(r,u);i[String(u.key)]=u,e[Ln]=()=>{t(),e[Ln]=void 0,delete l.delayedLeave,u=void 0},l.delayedLeave=()=>{n(),delete l.delayedLeave,u=void 0}}:u=void 0}else u&&=void 0;return a}}};function Un(e){let t=e[0];if(e.length>1){for(let n of e)if(n.type!==G){t=n;break}}return t}var Wn=Hn;function Gn(e,t){let{leavingVNodes:n}=e,r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function Kn(e,t,n,r,i){let{appear:a,mode:o,persisted:s=!1,onBeforeEnter:c,onEnter:l,onAfterEnter:u,onEnterCancelled:f,onBeforeLeave:p,onLeave:m,onAfterLeave:h,onLeaveCancelled:g,onBeforeAppear:_,onAppear:v,onAfterAppear:y,onAppearCancelled:b}=t,x=String(e.key),S=Gn(n,e),C=(e,t)=>{e&&z(e,r,9,t)},w=(e,t)=>{let n=t[1];C(e,t),d(e)?e.every(e=>e.length<=1)&&n():e.length<=1&&n()},T={mode:o,persisted:s,beforeEnter(t){let r=c;if(!n.isMounted)if(a)r=_||c;else return;t[Ln]&&t[Ln](!0);let i=S[x];i&&Wi(e,i)&&i.el[Ln]&&i.el[Ln](),C(r,[t])},enter(t){if(S[x]===e)return;let r=l,i=u,o=f;if(!n.isMounted)if(a)r=v||l,i=y||u,o=b||f;else return;let s=!1;t[Rn]=e=>{s||(s=!0,C(e?o:i,[t]),T.delayedLeave&&T.delayedLeave(),t[Rn]=void 0)};let c=t[Rn].bind(null,!1);r?w(r,[t,c]):c()},leave(t,r){let i=String(e.key);if(t[Rn]&&t[Rn](!0),n.isUnmounting)return r();C(p,[t]);let a=!1;t[Ln]=n=>{a||(a=!0,r(),C(n?g:h,[t]),t[Ln]=void 0,S[i]===e&&delete S[i])};let o=t[Ln].bind(null,!1);S[i]=e,m?w(m,[t,o]):o()},clone(e){let a=Kn(e,t,n,r,i);return i&&i(a),a}};return T}function qn(e){if(ar(e))return e=Yi(e),e.children=null,e}function Jn(e){if(!ar(e))return In(e.type)&&e.children?Un(e.children):e;if(e.component)return e.component.subTree;let{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&h(n.default))return n.default()}}function Yn(e,t){e.shapeFlag&6&&e.component?(e.transition=t,Yn(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Xn(e,t=!1,n){let r=[],i=0;for(let a=0;a<e.length;a++){let o=e[a],s=n==null?o.key:String(n)+String(o.key==null?a:o.key);o.type===W?(o.patchFlag&128&&i++,r=r.concat(Xn(o.children,t,s))):(t||o.type!==G)&&r.push(s==null?o:Yi(o,{key:s}))}if(i>1)for(let e=0;e<r.length;e++)r[e].patchFlag=-2;return r}function Zn(e,t){return h(e)?s({name:e.name},t,{setup:e}):e}function Qn(e){e.ids=[e.ids[0]+ e.ids[2]+++`-`,0,0]}function $n(e){let n=oa(),r=Ut(null);if(n){let i=n.refs===t?n.refs={}:n.refs;Object.defineProperty(i,e,{enumerable:!0,get:()=>r.value,set:e=>r.value=e})}return r}function er(e,t){let n;return!!((n=Object.getOwnPropertyDescriptor(e,t))&&!n.configurable)}var tr=new WeakMap;function nr(e,n,r,a,o=!1){if(d(e)){e.forEach((e,t)=>nr(e,n&&(d(n)?n[t]:n),r,a,o));return}if(ir(a)&&!o){a.shapeFlag&512&&a.type.__asyncResolved&&a.component.subTree.component&&nr(e,n,r,a.component.subTree);return}let s=a.shapeFlag&4?xa(a.component):a.el,l=o?null:s,{i:f,r:p}=e,m=n&&n.r,_=f.refs===t?f.refs={}:f.refs,v=f.setupState,y=I(v),b=v===t?i:e=>er(_,e)?!1:u(y,e),x=(e,t)=>!(t&&er(_,t));if(m!=null&&m!==p){if(rr(n),g(m))_[m]=null,b(m)&&(v[m]=null);else if(R(m)){let e=n;x(m,e.k)&&(m.value=null),e.k&&(_[e.k]=null)}}if(h(p))rn(p,f,12,[l,_]);else{let t=g(p),n=R(p);if(t||n){let i=()=>{if(e.f){let n=t?b(p)?v[p]:_[p]:x(p)||!e.k?p.value:_[e.k];if(o)d(n)&&c(n,s);else if(d(n))n.includes(s)||n.push(s);else if(t)_[p]=[s],b(p)&&(v[p]=_[p]);else{let t=[s];x(p,e.k)&&(p.value=t),e.k&&(_[e.k]=t)}}else t?(_[p]=l,b(p)&&(v[p]=l)):n&&(x(p,e.k)&&(p.value=l),e.k&&(_[e.k]=l))};if(l){let t=()=>{i(),tr.delete(e)};t.id=-1,tr.set(e,t),U(t,r)}else rr(e),i()}}}function rr(e){let t=tr.get(e);t&&(t.flags|=8,tr.delete(e))}le().requestIdleCallback,le().cancelIdleCallback;var ir=e=>!!e.type.__asyncLoader,ar=e=>e.type.__isKeepAlive;function or(e,t){cr(e,`a`,t)}function sr(e,t){cr(e,`da`,t)}function cr(e,t,n=Q){let r=e.__wdc||=()=>{let t=n;for(;t;){if(t.isDeactivated)return;t=t.parent}return e()};if(ur(t,r,n),n){let e=n.parent;for(;e&&e.parent;)ar(e.parent.vnode)&&lr(r,t,n,e),e=e.parent}}function lr(e,t,n,r){let i=ur(t,e,r,!0);_r(()=>{c(r[t],i)},n)}function ur(e,t,n=Q,r=!1){if(n){let i=n[e]||(n[e]=[]),a=t.__weh||=(...r)=>{Ve();let i=la(n),a=z(t,n,e,r);return i(),He(),a};return r?i.unshift(a):i.push(a),a}}var dr=e=>(t,n=Q)=>{(!fa||e===`sp`)&&ur(e,(...e)=>t(...e),n)},fr=dr(`bm`),pr=dr(`m`),mr=dr(`bu`),hr=dr(`u`),gr=dr(`bum`),_r=dr(`um`),vr=dr(`sp`),yr=dr(`rtg`),br=dr(`rtc`);function xr(e,t=Q){ur(`ec`,e,t)}var Sr=Symbol.for(`v-ndc`);function Cr(e,t,n,r){let i,a=n&&n[r],o=d(e);if(o||g(e)){let n=o&&Lt(e),r=!1,s=!1;n&&(r=!F(e),s=Rt(e),e=et(e)),i=Array(e.length);for(let n=0,o=e.length;n<o;n++)i[n]=t(r?s?Vt(L(e[n])):L(e[n]):e[n],n,void 0,a&&a[n])}else if(typeof e==`number`){i=Array(e);for(let n=0;n<e;n++)i[n]=t(n+1,n,void 0,a&&a[n])}else if(v(e))if(e[Symbol.iterator])i=Array.from(e,(e,n)=>t(e,n,void 0,a&&a[n]));else{let n=Object.keys(e);i=Array(n.length);for(let r=0,o=n.length;r<o;r++){let o=n[r];i[r]=t(e[o],o,r,a&&a[r])}}else i=[];return n&&(n[r]=i),i}var wr=e=>e?da(e)?xa(e):wr(e.parent):null,Tr=s(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>wr(e.parent),$root:e=>wr(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Pr(e),$forceUpdate:e=>e.f||=()=>{hn(e.update)},$nextTick:e=>e.n||=pn.bind(e.proxy),$watch:e=>Nn.bind(e)}),Er=(e,n)=>e!==t&&!e.__isScriptSetup&&u(e,n),Dr={get({_:e},n){if(n===`__v_skip`)return!0;let{ctx:r,setupState:i,data:a,props:o,accessCache:s,type:c,appContext:l}=e;if(n[0]!==`$`){let e=s[n];if(e!==void 0)switch(e){case 1:return i[n];case 2:return a[n];case 4:return r[n];case 3:return o[n]}else if(Er(i,n))return s[n]=1,i[n];else if(a!==t&&u(a,n))return s[n]=2,a[n];else if(u(o,n))return s[n]=3,o[n];else if(r!==t&&u(r,n))return s[n]=4,r[n];else kr&&(s[n]=0)}let d=Tr[n],f,p;if(d)return n===`$attrs`&&P(e.attrs,`get`,``),d(e);if((f=c.__cssModules)&&(f=f[n]))return f;if(r!==t&&u(r,n))return s[n]=4,r[n];if(p=l.config.globalProperties,u(p,n))return p[n]},set({_:e},n,r){let{data:i,setupState:a,ctx:o}=e;return Er(a,n)?(a[n]=r,!0):i!==t&&u(i,n)?(i[n]=r,!0):u(e.props,n)||n[0]===`$`&&n.slice(1)in e?!1:(o[n]=r,!0)},has({_:{data:e,setupState:n,accessCache:r,ctx:i,appContext:a,props:o,type:s}},c){let l;return!!(r[c]||e!==t&&c[0]!==`$`&&u(e,c)||Er(n,c)||u(o,c)||u(i,c)||u(Tr,c)||u(a.config.globalProperties,c)||(l=s.__cssModules)&&l[c])},defineProperty(e,t,n){return n.get==null?u(n,`value`)&&this.set(e,t,n.value,null):e._.accessCache[t]=0,Reflect.defineProperty(e,t,n)}};function Or(e){return d(e)?e.reduce((e,t)=>(e[t]=null,e),{}):e}var kr=!0;function Ar(e){let t=Pr(e),n=e.proxy,i=e.ctx;kr=!1,t.beforeCreate&&Mr(t.beforeCreate,e,`bc`);let{data:a,computed:o,methods:s,watch:c,provide:l,inject:u,created:f,beforeMount:p,mounted:m,beforeUpdate:g,updated:_,activated:y,deactivated:b,beforeDestroy:x,beforeUnmount:S,destroyed:C,unmounted:w,render:T,renderTracked:ee,renderTriggered:te,errorCaptured:E,serverPrefetch:ne,expose:D,inheritAttrs:re,components:ie,directives:O,filters:ae}=t;if(u&&jr(u,i,null),s)for(let e in s){let t=s[e];h(t)&&(i[e]=t.bind(n))}if(a){let t=a.call(n,n);v(t)&&(e.data=Nt(t))}if(kr=!0,o)for(let e in o){let t=o[e],a=$({get:h(t)?t.bind(n,n):h(t.get)?t.get.bind(n,n):r,set:!h(t)&&h(t.set)?t.set.bind(n):r});Object.defineProperty(i,e,{enumerable:!0,configurable:!0,get:()=>a.value,set:e=>a.value=e})}if(c)for(let e in c)Nr(c[e],i,n,e);if(l){let e=h(l)?l.call(n):l;Reflect.ownKeys(e).forEach(t=>{Dn(t,e[t])})}f&&Mr(f,e,`c`);function k(e,t){d(t)?t.forEach(t=>e(t.bind(n))):t&&e(t.bind(n))}if(k(fr,p),k(pr,m),k(mr,g),k(hr,_),k(or,y),k(sr,b),k(xr,E),k(br,ee),k(yr,te),k(gr,S),k(_r,w),k(vr,ne),d(D))if(D.length){let t=e.exposed||={};D.forEach(e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t,enumerable:!0})})}else e.exposed||={};T&&e.render===r&&(e.render=T),re!=null&&(e.inheritAttrs=re),ie&&(e.components=ie),O&&(e.directives=O),ne&&Qn(e)}function jr(e,t,n=r){d(e)&&(e=zr(e));for(let n in e){let r=e[n],i;i=v(r)?`default`in r?On(r.from||n,r.default,!0):On(r.from||n):On(r),R(i)?Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>i.value,set:e=>i.value=e}):t[n]=i}}function Mr(e,t,n){z(d(e)?e.map(e=>e.bind(t.proxy)):e.bind(t.proxy),t,n)}function Nr(e,t,n,r){let i=r.includes(`.`)?Pn(n,r):()=>n[r];if(g(e)){let n=t[e];h(n)&&jn(i,n)}else if(h(e))jn(i,e.bind(n));else if(v(e))if(d(e))e.forEach(e=>Nr(e,t,n,r));else{let r=h(e.handler)?e.handler.bind(n):t[e.handler];h(r)&&jn(i,r,e)}}function Pr(e){let t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:a,config:{optionMergeStrategies:o}}=e.appContext,s=a.get(t),c;return s?c=s:!i.length&&!n&&!r?c=t:(c={},i.length&&i.forEach(e=>Fr(c,e,o,!0)),Fr(c,t,o)),v(t)&&a.set(t,c),c}function Fr(e,t,n,r=!1){let{mixins:i,extends:a}=t;a&&Fr(e,a,n,!0),i&&i.forEach(t=>Fr(e,t,n,!0));for(let i in t)if(!(r&&i===`expose`)){let r=Ir[i]||n&&n[i];e[i]=r?r(e[i],t[i]):t[i]}return e}var Ir={data:Lr,props:Vr,emits:Vr,methods:Br,computed:Br,beforeCreate:H,created:H,beforeMount:H,mounted:H,beforeUpdate:H,updated:H,beforeDestroy:H,beforeUnmount:H,destroyed:H,unmounted:H,activated:H,deactivated:H,errorCaptured:H,serverPrefetch:H,components:Br,directives:Br,watch:Hr,provide:Lr,inject:Rr};function Lr(e,t){return t?e?function(){return s(h(e)?e.call(this,this):e,h(t)?t.call(this,this):t)}:t:e}function Rr(e,t){return Br(zr(e),zr(t))}function zr(e){if(d(e)){let t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function H(e,t){return e?[...new Set([].concat(e,t))]:t}function Br(e,t){return e?s(Object.create(null),e,t):t}function Vr(e,t){return e?d(e)&&d(t)?[...new Set([...e,...t])]:s(Object.create(null),Or(e),Or(t??{})):t}function Hr(e,t){if(!e)return t;if(!t)return e;let n=s(Object.create(null),e);for(let r in t)n[r]=H(e[r],t[r]);return n}function Ur(){return{app:null,config:{isNativeTag:i,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}var Wr=0;function Gr(e,t){return function(n,r=null){h(n)||(n=s({},n)),r!=null&&!v(r)&&(r=null);let i=Ur(),a=new WeakSet,o=[],c=!1,l=i.app={_uid:Wr++,_component:n,_props:r,_container:null,_context:i,_instance:null,version:wa,get config(){return i.config},set config(e){},use(e,...t){return a.has(e)||(e&&h(e.install)?(a.add(e),e.install(l,...t)):h(e)&&(a.add(e),e(l,...t))),l},mixin(e){return i.mixins.includes(e)||i.mixins.push(e),l},component(e,t){return t?(i.components[e]=t,l):i.components[e]},directive(e,t){return t?(i.directives[e]=t,l):i.directives[e]},mount(a,o,s){if(!c){let u=l._ceVNode||X(n,r);return u.appContext=i,s===!0?s=`svg`:s===!1&&(s=void 0),o&&t?t(u,a):e(u,a,s),c=!0,l._container=a,a.__vue_app__=l,xa(u.component)}},onUnmount(e){o.push(e)},unmount(){c&&(z(o,l._instance,16),e(null,l._container),delete l._container.__vue_app__)},provide(e,t){return i.provides[e]=t,l},runWithContext(e){let t=Kr;Kr=l;try{return e()}finally{Kr=t}}};return l}}var Kr=null,qr=(e,t)=>t===`modelValue`||t===`model-value`?e.modelModifiers:e[`${t}Modifiers`]||e[`${E(t)}Modifiers`]||e[`${D(t)}Modifiers`];function Jr(e,n,...r){if(e.isUnmounted)return;let i=e.vnode.props||t,a=r,o=n.startsWith(`update:`),s=o&&qr(i,n.slice(7));s&&(s.trim&&(a=r.map(e=>g(e)?e.trim():e)),s.number&&(a=r.map(oe)));let c,l=i[c=ie(n)]||i[c=ie(E(n))];!l&&o&&(l=i[c=ie(D(n))]),l&&z(l,e,6,a);let u=i[c+`Once`];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[c])return;e.emitted[c]=!0,z(u,e,6,a)}}var Yr=new WeakMap;function Xr(e,t,n=!1){let r=n?Yr:t.emitsCache,i=r.get(e);if(i!==void 0)return i;let a=e.emits,o={},c=!1;if(!h(e)){let r=e=>{let n=Xr(e,t,!0);n&&(c=!0,s(o,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return!a&&!c?(v(e)&&r.set(e,null),null):(d(a)?a.forEach(e=>o[e]=null):s(o,a),v(e)&&r.set(e,o),o)}function Zr(e,t){return!e||!a(t)?!1:(t=t.slice(2).replace(/Once$/,``),u(e,t[0].toLowerCase()+t.slice(1))||u(e,D(t))||u(e,t))}function Qr(e){let{type:t,vnode:n,proxy:r,withProxy:i,propsOptions:[a],slots:s,attrs:c,emit:l,render:u,renderCache:d,props:f,data:p,setupState:m,ctx:h,inheritAttrs:g}=e,_=wn(e),v,y;try{if(n.shapeFlag&4){let e=i||r,t=e;v=Qi(u.call(t,e,d,f,m,p,h)),y=c}else{let e=t;v=Qi(e.length>1?e(f,{attrs:c,slots:s,emit:l}):e(f,null)),y=t.props?c:$r(c)}}catch(t){Li.length=0,an(t,e,1),v=X(G)}let b=v;if(y&&g!==!1){let e=Object.keys(y),{shapeFlag:t}=b;e.length&&t&7&&(a&&e.some(o)&&(y=ei(y,a)),b=Yi(b,y,!1,!0))}return n.dirs&&(b=Yi(b,null,!1,!0),b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&Yn(b,n.transition),v=b,wn(_),v}var $r=e=>{let t;for(let n in e)(n===`class`||n===`style`||a(n))&&((t||={})[n]=e[n]);return t},ei=(e,t)=>{let n={};for(let r in e)(!o(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function ti(e,t,n){let{props:r,children:i,component:a}=e,{props:o,children:s,patchFlag:c}=t,l=a.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?ni(r,o,l):!!o;if(c&8){let e=t.dynamicProps;for(let t=0;t<e.length;t++){let n=e[t];if(ri(o,r,n)&&!Zr(l,n))return!0}}}else return(i||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?ni(r,o,l):!0:!!o;return!1}function ni(e,t,n){let r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){let a=r[i];if(ri(t,e,a)&&!Zr(n,a))return!0}return!1}function ri(e,t,n){let r=e[n],i=t[n];return n===`style`&&v(r)&&v(i)?!ye(r,i):r!==i}function ii({vnode:e,parent:t,suspense:n},r){for(;t;){let n=t.subTree;if(n.suspense&&n.suspense.activeBranch===e&&(n.suspense.vnode.el=n.el=r,e=n),n===e)(e=t.vnode).el=r,t=t.parent;else break}n&&n.activeBranch===e&&(n.vnode.el=r)}var ai={},oi=()=>Object.create(ai),si=e=>Object.getPrototypeOf(e)===ai;function ci(e,t,n,r=!1){let i={},a=oi();e.propsDefaults=Object.create(null),ui(e,t,i,a);for(let t in e.propsOptions[0])t in i||(i[t]=void 0);n?e.props=r?i:Pt(i):e.type.props?e.props=i:e.props=a,e.attrs=a}function li(e,t,n,r){let{props:i,attrs:a,vnode:{patchFlag:o}}=e,s=I(i),[c]=e.propsOptions,l=!1;if((r||o>0)&&!(o&16)){if(o&8){let n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let o=n[r];if(Zr(e.emitsOptions,o))continue;let d=t[o];if(c)if(u(a,o))d!==a[o]&&(a[o]=d,l=!0);else{let t=E(o);i[t]=di(c,s,t,d,e,!1)}else d!==a[o]&&(a[o]=d,l=!0)}}}else{ui(e,t,i,a)&&(l=!0);let r;for(let a in s)(!t||!u(t,a)&&((r=D(a))===a||!u(t,r)))&&(c?n&&(n[a]!==void 0||n[r]!==void 0)&&(i[a]=di(c,s,a,void 0,e,!0)):delete i[a]);if(a!==s)for(let e in a)(!t||!u(t,e))&&(delete a[e],l=!0)}l&&Qe(e.attrs,`set`,``)}function ui(e,n,r,i){let[a,o]=e.propsOptions,s=!1,c;if(n)for(let t in n){if(T(t))continue;let l=n[t],d;a&&u(a,d=E(t))?!o||!o.includes(d)?r[d]=l:(c||={})[d]=l:Zr(e.emitsOptions,t)||(!(t in i)||l!==i[t])&&(i[t]=l,s=!0)}if(o){let n=I(r),i=c||t;for(let t=0;t<o.length;t++){let s=o[t];r[s]=di(a,n,s,i[s],e,!u(i,s))}}return s}function di(e,t,n,r,i,a){let o=e[n];if(o!=null){let e=u(o,`default`);if(e&&r===void 0){let e=o.default;if(o.type!==Function&&!o.skipFactory&&h(e)){let{propsDefaults:a}=i;if(n in a)r=a[n];else{let o=la(i);r=a[n]=e.call(null,t),o()}}else r=e;i.ce&&i.ce._setProp(n,r)}o[0]&&(a&&!e?r=!1:o[1]&&(r===``||r===D(n))&&(r=!0))}return r}var fi=new WeakMap;function pi(e,r,i=!1){let a=i?fi:r.propsCache,o=a.get(e);if(o)return o;let c=e.props,l={},f=[],p=!1;if(!h(e)){let t=e=>{p=!0;let[t,n]=pi(e,r,!0);s(l,t),n&&f.push(...n)};!i&&r.mixins.length&&r.mixins.forEach(t),e.extends&&t(e.extends),e.mixins&&e.mixins.forEach(t)}if(!c&&!p)return v(e)&&a.set(e,n),n;if(d(c))for(let e=0;e<c.length;e++){let n=E(c[e]);mi(n)&&(l[n]=t)}else if(c)for(let e in c){let t=E(e);if(mi(t)){let n=c[e],r=l[t]=d(n)||h(n)?{type:n}:s({},n),i=r.type,a=!1,o=!0;if(d(i))for(let e=0;e<i.length;++e){let t=i[e],n=h(t)&&t.name;if(n===`Boolean`){a=!0;break}else n===`String`&&(o=!1)}else a=h(i)&&i.name===`Boolean`;r[0]=a,r[1]=o,(a||u(r,`default`))&&f.push(t)}}let m=[l,f];return v(e)&&a.set(e,m),m}function mi(e){return e[0]!==`$`&&!T(e)}var hi=e=>e===`_`||e===`_ctx`||e===`$stable`,gi=e=>d(e)?e.map(Qi):[Qi(e)],_i=(e,t,n)=>{if(t._n)return t;let r=Tn((...e)=>gi(t(...e)),n);return r._c=!1,r},vi=(e,t,n)=>{let r=e._ctx;for(let n in e){if(hi(n))continue;let i=e[n];if(h(i))t[n]=_i(n,i,r);else if(i!=null){let e=gi(i);t[n]=()=>e}}},yi=(e,t)=>{let n=gi(t);e.slots.default=()=>n},bi=(e,t,n)=>{for(let r in t)(n||!hi(r))&&(e[r]=t[r])},xi=(e,t,n)=>{let r=e.slots=oi();if(e.vnode.shapeFlag&32){let e=t._;e?(bi(r,t,n),n&&k(r,`_`,e,!0)):vi(t,r)}else t&&yi(e,t)},Si=(e,n,r)=>{let{vnode:i,slots:a}=e,o=!0,s=t;if(i.shapeFlag&32){let e=n._;e?r&&e===1?o=!1:bi(a,n,r):(o=!n.$stable,vi(n,a)),s=n}else n&&(yi(e,n),s={default:1});if(o)for(let e in a)!hi(e)&&s[e]==null&&delete a[e]},U=Pi;function Ci(e){return wi(e)}function wi(e,i){let a=le();a.__VUE__=!0;let{insert:o,remove:s,patchProp:c,createElement:l,createText:u,createComment:d,setText:f,setElementText:p,parentNode:m,nextSibling:h,setScopeId:g=r,insertStaticContent:_}=e,v=(e,t,n,r=null,i=null,a=null,o=void 0,s=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!Wi(e,t)&&(r=ve(e),me(e,i,a,!0),e=null),t.patchFlag===-2&&(c=!1,t.dynamicChildren=null);let{type:l,ref:u,shapeFlag:d}=t;switch(l){case Fi:y(e,t,n,r);break;case G:b(e,t,n,r);break;case Ii:e??x(t,n,r,o);break;case W:ie(e,t,n,r,i,a,o,s,c);break;default:d&1?w(e,t,n,r,i,a,o,s,c):d&6?O(e,t,n,r,i,a,o,s,c):(d&64||d&128)&&l.process(e,t,n,r,i,a,o,s,c,j)}u!=null&&i?nr(u,e&&e.ref,a,t||e,!t):u==null&&e&&e.ref!=null&&nr(e.ref,null,a,e,!0)},y=(e,t,n,r)=>{if(e==null)o(t.el=u(t.children),n,r);else{let n=t.el=e.el;t.children!==e.children&&f(n,t.children)}},b=(e,t,n,r)=>{e==null?o(t.el=d(t.children||``),n,r):t.el=e.el},x=(e,t,n,r)=>{[e.el,e.anchor]=_(e.children,t,n,r,e.el,e.anchor)},S=({el:e,anchor:t},n,r)=>{let i;for(;e&&e!==t;)i=h(e),o(e,n,r),e=i;o(t,n,r)},C=({el:e,anchor:t})=>{let n;for(;e&&e!==t;)n=h(e),s(e),e=n;s(t)},w=(e,t,n,r,i,a,o,s,c)=>{if(t.type===`svg`?o=`svg`:t.type===`math`&&(o=`mathml`),e==null)ee(t,n,r,i,a,o,s,c);else{let n=e.el&&e.el._isVueCE?e.el:null;try{n&&n._beginPatch(),ne(e,t,i,a,o,s,c)}finally{n&&n._endPatch()}}},ee=(e,t,n,r,i,a,s,u)=>{let d,f,{props:m,shapeFlag:h,transition:g,dirs:_}=e;if(d=e.el=l(e.type,a,m&&m.is,m),h&8?p(d,e.children):h&16&&E(e.children,d,null,r,i,Ti(e,a),s,u),_&&En(e,null,r,`created`),te(d,e,e.scopeId,s,r),m){for(let e in m)e!==`value`&&!T(e)&&c(d,e,null,m[e],a,r);`value`in m&&c(d,`value`,null,m.value,a),(f=m.onVnodeBeforeMount)&&na(f,r,e)}_&&En(e,null,r,`beforeMount`);let v=Di(i,g);v&&g.beforeEnter(d),o(d,t,n),((f=m&&m.onVnodeMounted)||v||_)&&U(()=>{try{f&&na(f,r,e),v&&g.enter(d),_&&En(e,null,r,`mounted`)}finally{}},i)},te=(e,t,n,r,i)=>{if(n&&g(e,n),r)for(let t=0;t<r.length;t++)g(e,r[t]);if(i){let n=i.subTree;if(t===n||Ni(n.type)&&(n.ssContent===t||n.ssFallback===t)){let t=i.vnode;te(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},E=(e,t,n,r,i,a,o,s,c=0)=>{for(let l=c;l<e.length;l++)v(null,e[l]=s?$i(e[l]):Qi(e[l]),t,n,r,i,a,o,s)},ne=(e,n,r,i,a,o,s)=>{let l=n.el=e.el,{patchFlag:u,dynamicChildren:d,dirs:f}=n;u|=e.patchFlag&16;let m=e.props||t,h=n.props||t,g;if(r&&Ei(r,!1),(g=h.onVnodeBeforeUpdate)&&na(g,r,n,e),f&&En(n,e,r,`beforeUpdate`),r&&Ei(r,!0),(m.innerHTML&&h.innerHTML==null||m.textContent&&h.textContent==null)&&p(l,``),d?D(e.dynamicChildren,d,l,r,i,Ti(n,a),o):s||ue(e,n,l,null,r,i,Ti(n,a),o,!1),u>0){if(u&16)re(l,m,h,r,a);else if(u&2&&m.class!==h.class&&c(l,`class`,null,h.class,a),u&4&&c(l,`style`,m.style,h.style,a),u&8){let e=n.dynamicProps;for(let t=0;t<e.length;t++){let n=e[t],i=m[n],o=h[n];(o!==i||n===`value`)&&c(l,n,i,o,a,r)}}u&1&&e.children!==n.children&&p(l,n.children)}else !s&&d==null&&re(l,m,h,r,a);((g=h.onVnodeUpdated)||f)&&U(()=>{g&&na(g,r,n,e),f&&En(n,e,r,`updated`)},i)},D=(e,t,n,r,i,a,o)=>{for(let s=0;s<t.length;s++){let c=e[s],l=t[s];v(c,l,c.el&&(c.type===W||!Wi(c,l)||c.shapeFlag&198)?m(c.el):n,null,r,i,a,o,!0)}},re=(e,n,r,i,a)=>{if(n!==r){if(n!==t)for(let t in n)!T(t)&&!(t in r)&&c(e,t,n[t],null,a,i);for(let t in r){if(T(t))continue;let o=r[t],s=n[t];o!==s&&t!==`value`&&c(e,t,s,o,a,i)}`value`in r&&c(e,`value`,n.value,r.value,a)}},ie=(e,t,n,r,i,a,s,c,l)=>{let d=t.el=e?e.el:u(``),f=t.anchor=e?e.anchor:u(``),{patchFlag:p,dynamicChildren:m,slotScopeIds:h}=t;h&&(c=c?c.concat(h):h),e==null?(o(d,n,r),o(f,n,r),E(t.children||[],n,f,i,a,s,c,l)):p>0&&p&64&&m&&e.dynamicChildren&&e.dynamicChildren.length===m.length?(D(e.dynamicChildren,m,n,i,a,s,c),(t.key!=null||i&&t===i.subTree)&&Oi(e,t,!0)):ue(e,t,n,f,i,a,s,c,l)},O=(e,t,n,r,i,a,o,s,c)=>{t.slotScopeIds=s,e==null?t.shapeFlag&512?i.ctx.activate(t,n,r,o,c):k(t,n,r,i,a,o,c):oe(e,t,c)},k=(e,t,n,r,i,a,o)=>{let s=e.component=aa(e,r,i);if(ar(e)&&(s.ctx.renderer=j),pa(s,!1,o),s.asyncDep){if(i&&i.registerDep(s,se,o),!e.el){let r=s.subTree=X(G);b(null,r,t,n),e.placeholder=r.el}}else se(s,e,t,n,i,a,o)},oe=(e,t,n)=>{let r=t.component=e.component;if(ti(e,t,n))if(r.asyncDep&&!r.asyncResolved){ce(r,t,n);return}else r.next=t,r.update();else t.el=e.el,r.vnode=t},se=(e,t,n,r,i,a,o)=>{let s=()=>{if(e.isMounted){let{next:t,bu:n,u:r,parent:s,vnode:c}=e;{let n=Ai(e);if(n){t&&(t.el=c.el,ce(e,t,o)),n.asyncDep.then(()=>{U(()=>{e.isUnmounted||l()},i)});return}}let u=t,d;Ei(e,!1),t?(t.el=c.el,ce(e,t,o)):t=c,n&&ae(n),(d=t.props&&t.props.onVnodeBeforeUpdate)&&na(d,s,t,c),Ei(e,!0);let f=Qr(e),p=e.subTree;e.subTree=f,v(p,f,m(p.el),ve(p),e,i,a),t.el=f.el,u===null&&ii(e,f.el),r&&U(r,i),(d=t.props&&t.props.onVnodeUpdated)&&U(()=>na(d,s,t,c),i)}else{let o,{el:s,props:c}=t,{bm:l,m:u,parent:d,root:f,type:p}=e,m=ir(t);if(Ei(e,!1),l&&ae(l),!m&&(o=c&&c.onVnodeBeforeMount)&&na(o,d,t),Ei(e,!0),s&&Se){let t=()=>{e.subTree=Qr(e),Se(s,e.subTree,e,i,null)};m&&p.__asyncHydrate?p.__asyncHydrate(s,e,t):t()}else{f.ce&&f.ce._hasShadowRoot()&&f.ce._injectChildStyle(p,e.parent?e.parent.type:void 0);let o=e.subTree=Qr(e);v(null,o,n,r,e,i,a),t.el=o.el}if(u&&U(u,i),!m&&(o=c&&c.onVnodeMounted)){let e=t;U(()=>na(o,d,e),i)}(t.shapeFlag&256||d&&ir(d.vnode)&&d.vnode.shapeFlag&256)&&e.a&&U(e.a,i),e.isMounted=!0,t=n=r=null}};e.scope.on();let c=e.effect=new Ee(s);e.scope.off();let l=e.update=c.run.bind(c),u=e.job=c.runIfDirty.bind(c);u.i=e,u.id=e.uid,c.scheduler=()=>hn(u),Ei(e,!0),l()},ce=(e,t,n)=>{t.component=e;let r=e.vnode.props;e.vnode=t,e.next=null,li(e,t.props,r,n),Si(e,t.children,n),Ve(),vn(e),He()},ue=(e,t,n,r,i,a,o,s,c=!1)=>{let l=e&&e.children,u=e?e.shapeFlag:0,d=t.children,{patchFlag:f,shapeFlag:m}=t;if(f>0){if(f&128){fe(l,d,n,r,i,a,o,s,c);return}else if(f&256){de(l,d,n,r,i,a,o,s,c);return}}m&8?(u&16&&_e(l,i,a),d!==l&&p(n,d)):u&16?m&16?fe(l,d,n,r,i,a,o,s,c):_e(l,i,a,!0):(u&8&&p(n,``),m&16&&E(d,n,r,i,a,o,s,c))},de=(e,t,r,i,a,o,s,c,l)=>{e||=n,t||=n;let u=e.length,d=t.length,f=Math.min(u,d),p;for(p=0;p<f;p++){let n=t[p]=l?$i(t[p]):Qi(t[p]);v(e[p],n,r,null,a,o,s,c,l)}u>d?_e(e,a,o,!0,!1,f):E(t,r,i,a,o,s,c,l,f)},fe=(e,t,r,i,a,o,s,c,l)=>{let u=0,d=t.length,f=e.length-1,p=d-1;for(;u<=f&&u<=p;){let n=e[u],i=t[u]=l?$i(t[u]):Qi(t[u]);if(Wi(n,i))v(n,i,r,null,a,o,s,c,l);else break;u++}for(;u<=f&&u<=p;){let n=e[f],i=t[p]=l?$i(t[p]):Qi(t[p]);if(Wi(n,i))v(n,i,r,null,a,o,s,c,l);else break;f--,p--}if(u>f){if(u<=p){let e=p+1,n=e<d?t[e].el:i;for(;u<=p;)v(null,t[u]=l?$i(t[u]):Qi(t[u]),r,n,a,o,s,c,l),u++}}else if(u>p)for(;u<=f;)me(e[u],a,o,!0),u++;else{let m=u,h=u,g=new Map;for(u=h;u<=p;u++){let e=t[u]=l?$i(t[u]):Qi(t[u]);e.key!=null&&g.set(e.key,u)}let _,y=0,b=p-h+1,x=!1,S=0,C=Array(b);for(u=0;u<b;u++)C[u]=0;for(u=m;u<=f;u++){let n=e[u];if(y>=b){me(n,a,o,!0);continue}let i;if(n.key!=null)i=g.get(n.key);else for(_=h;_<=p;_++)if(C[_-h]===0&&Wi(n,t[_])){i=_;break}i===void 0?me(n,a,o,!0):(C[i-h]=u+1,i>=S?S=i:x=!0,v(n,t[i],r,null,a,o,s,c,l),y++)}let w=x?ki(C):n;for(_=w.length-1,u=b-1;u>=0;u--){let e=h+u,n=t[e],f=t[e+1],p=e+1<d?f.el||Mi(f):i;C[u]===0?v(null,n,r,p,a,o,s,c,l):x&&(_<0||u!==w[_]?pe(n,r,p,2):_--)}}},pe=(e,t,n,r,i=null)=>{let{el:a,type:c,transition:l,children:u,shapeFlag:d}=e;if(d&6){pe(e.component.subTree,t,n,r);return}if(d&128){e.suspense.move(t,n,r);return}if(d&64){c.move(e,t,n,j);return}if(c===W){o(a,t,n);for(let e=0;e<u.length;e++)pe(u[e],t,n,r);o(e.anchor,t,n);return}if(c===Ii){S(e,t,n);return}if(r!==2&&d&1&&l)if(r===0)l.beforeEnter(a),o(a,t,n),U(()=>l.enter(a),i);else{let{leave:r,delayLeave:i,afterLeave:c}=l,u=()=>{e.ctx.isUnmounted?s(a):o(a,t,n)},d=()=>{a._isLeaving&&a[Ln](!0),r(a,()=>{u(),c&&c()})};i?i(a,u,d):d()}else o(a,t,n)},me=(e,t,n,r=!1,i=!1)=>{let{type:a,props:o,ref:s,children:c,dynamicChildren:l,shapeFlag:u,patchFlag:d,dirs:f,cacheIndex:p,memo:m}=e;if(d===-2&&(i=!1),s!=null&&(Ve(),nr(s,null,n,e,!0),He()),p!=null&&(t.renderCache[p]=void 0),u&256){t.ctx.deactivate(e);return}let h=u&1&&f,g=!ir(e),_;if(g&&(_=o&&o.onVnodeBeforeUnmount)&&na(_,t,e),u&6)ge(e.component,n,r);else{if(u&128){e.suspense.unmount(n,r);return}h&&En(e,null,t,`beforeUnmount`),u&64?e.type.remove(e,t,n,j,r):l&&!l.hasOnce&&(a!==W||d>0&&d&64)?_e(l,t,n,!1,!0):(a===W&&d&384||!i&&u&16)&&_e(c,t,n),r&&A(e)}let v=m!=null&&p==null;(g&&(_=o&&o.onVnodeUnmounted)||h||v)&&U(()=>{_&&na(_,t,e),h&&En(e,null,t,`unmounted`),v&&(e.el=null)},n)},A=e=>{let{type:t,el:n,anchor:r,transition:i}=e;if(t===W){he(n,r);return}if(t===Ii){C(e);return}let a=()=>{s(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(e.shapeFlag&1&&i&&!i.persisted){let{leave:t,delayLeave:r}=i,o=()=>t(n,a);r?r(e.el,a,o):o()}else a()},he=(e,t)=>{let n;for(;e!==t;)n=h(e),s(e),e=n;s(t)},ge=(e,t,n)=>{let{bum:r,scope:i,job:a,subTree:o,um:s,m:c,a:l}=e;ji(c),ji(l),r&&ae(r),i.stop(),a&&(a.flags|=8,me(o,e,t,n)),s&&U(s,t),U(()=>{e.isUnmounted=!0},t)},_e=(e,t,n,r=!1,i=!1,a=0)=>{for(let o=a;o<e.length;o++)me(e[o],t,n,r,i)},ve=e=>{if(e.shapeFlag&6)return ve(e.component.subTree);if(e.shapeFlag&128)return e.suspense.next();let t=h(e.anchor||e.el),n=t&&t[Fn];return n?h(n):t},ye=!1,be=(e,t,n)=>{let r;e==null?t._vnode&&(me(t._vnode,null,null,!0),r=t._vnode.component):v(t._vnode||null,e,t,null,null,null,n),t._vnode=e,ye||=(ye=!0,vn(r),yn(),!1)},j={p:v,um:me,m:pe,r:A,mt:k,mc:E,pc:ue,pbc:D,n:ve,o:e},xe,Se;return i&&([xe,Se]=i(j)),{render:be,hydrate:xe,createApp:Gr(be,xe)}}function Ti({type:e,props:t},n){return n===`svg`&&e===`foreignObject`||n===`mathml`&&e===`annotation-xml`&&t&&t.encoding&&t.encoding.includes(`html`)?void 0:n}function Ei({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Di(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Oi(e,t,n=!1){let r=e.children,i=t.children;if(d(r)&&d(i))for(let e=0;e<r.length;e++){let t=r[e],a=i[e];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[e]=$i(i[e]),a.el=t.el),!n&&a.patchFlag!==-2&&Oi(t,a)),a.type===Fi&&(a.patchFlag===-1&&(a=i[e]=$i(a)),a.el=t.el),a.type===G&&!a.el&&(a.el=t.el)}}function ki(e){let t=e.slice(),n=[0],r,i,a,o,s,c=e.length;for(r=0;r<c;r++){let c=e[r];if(c!==0){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}for(a=0,o=n.length-1;a<o;)s=a+o>>1,e[n[s]]<c?a=s+1:o=s;c<e[n[a]]&&(a>0&&(t[r]=n[a-1]),n[a]=r)}}for(a=n.length,o=n[a-1];a-- >0;)n[a]=o,o=t[o];return n}function Ai(e){let t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Ai(t)}function ji(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function Mi(e){if(e.placeholder)return e.placeholder;let t=e.component;return t?Mi(t.subTree):null}var Ni=e=>e.__isSuspense;function Pi(e,t){t&&t.pendingBranch?d(e)?t.effects.push(...e):t.effects.push(e):_n(e)}var W=Symbol.for(`v-fgt`),Fi=Symbol.for(`v-txt`),G=Symbol.for(`v-cmt`),Ii=Symbol.for(`v-stc`),Li=[],K=null;function q(e=!1){Li.push(K=e?null:[])}function Ri(){Li.pop(),K=Li[Li.length-1]||null}var zi=1;function Bi(e,t=!1){zi+=e,e<0&&K&&t&&(K.hasOnce=!0)}function Vi(e){return e.dynamicChildren=zi>0?K||n:null,Ri(),zi>0&&K&&K.push(e),e}function J(e,t,n,r,i,a){return Vi(Y(e,t,n,r,i,a,!0))}function Hi(e,t,n,r,i){return Vi(X(e,t,n,r,i,!0))}function Ui(e){return e?e.__v_isVNode===!0:!1}function Wi(e,t){return e.type===t.type&&e.key===t.key}var Gi=({key:e})=>e??null,Ki=({ref:e,ref_key:t,ref_for:n})=>(typeof e==`number`&&(e=``+e),e==null?null:g(e)||R(e)||h(e)?{i:Sn,r:e,k:t,f:!!n}:e);function Y(e,t=null,n=null,r=0,i=null,a=e===W?0:1,o=!1,s=!1){let c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Gi(t),ref:t&&Ki(t),scopeId:Cn,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Sn};return s?(ea(c,n),a&128&&e.normalize(c)):n&&(c.shapeFlag|=g(n)?8:16),zi>0&&!o&&K&&(c.patchFlag>0||a&6)&&c.patchFlag!==32&&K.push(c),c}var X=qi;function qi(e,t=null,n=null,r=0,i=null,a=!1){if((!e||e===Sr)&&(e=G),Ui(e)){let r=Yi(e,t,!0);return n&&ea(r,n),zi>0&&!a&&K&&(r.shapeFlag&6?K[K.indexOf(e)]=r:K.push(r)),r.patchFlag=-2,r}if(Sa(e)&&(e=e.__vccOpts),t){t=Ji(t);let{class:e,style:n}=t;e&&!g(e)&&(t.class=A(e)),v(n)&&(zt(n)&&!d(n)&&(n=s({},n)),t.style=ue(n))}let o=g(e)?1:Ni(e)?128:In(e)?64:v(e)?4:h(e)?2:0;return Y(e,t,n,r,i,o,a,!0)}function Ji(e){return e?zt(e)||si(e)?s({},e):e:null}function Yi(e,t,n=!1,r=!1){let{props:i,ref:a,patchFlag:o,children:s,transition:c}=e,l=t?ta(i||{},t):i,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&Gi(l),ref:t&&t.ref?n&&a?d(a)?a.concat(Ki(t)):[a,Ki(t)]:Ki(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:s,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==W?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Yi(e.ssContent),ssFallback:e.ssFallback&&Yi(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&r&&Yn(u,c.clone(u)),u}function Xi(e=` `,t=0){return X(Fi,null,e,t)}function Zi(e,t){let n=X(Ii,null,e);return n.staticCount=t,n}function Z(e=``,t=!1){return t?(q(),Hi(G,null,e)):X(G,null,e)}function Qi(e){return e==null||typeof e==`boolean`?X(G):d(e)?X(W,null,e.slice()):Ui(e)?$i(e):X(Fi,null,String(e))}function $i(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Yi(e)}function ea(e,t){let n=0,{shapeFlag:r}=e;if(t==null)t=null;else if(d(t))n=16;else if(typeof t==`object`)if(r&65){let n=t.default;n&&(n._c&&(n._d=!1),ea(e,n()),n._c&&(n._d=!0));return}else{n=32;let r=t._;!r&&!si(t)?t._ctx=Sn:r===3&&Sn&&(Sn.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else h(t)?(t={default:t,_ctx:Sn},n=32):(t=String(t),r&64?(n=16,t=[Xi(t)]):n=8);e.children=t,e.shapeFlag|=n}function ta(...e){let t={};for(let n=0;n<e.length;n++){let r=e[n];for(let e in r)if(e===`class`)t.class!==r.class&&(t.class=A([t.class,r.class]));else if(e===`style`)t.style=ue([t.style,r.style]);else if(a(e)){let n=t[e],i=r[e];i&&n!==i&&!(d(n)&&n.includes(i))?t[e]=n?[].concat(n,i):i:i==null&&n==null&&!o(e)&&(t[e]=i)}else e!==``&&(t[e]=r[e])}return t}function na(e,t,n,r=null){z(e,t,7,[n,r])}var ra=Ur(),ia=0;function aa(e,n,r){let i=e.type,a=(n?n.appContext:e.appContext)||ra,o={uid:ia++,vnode:e,type:i,parent:n,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Ce(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(a.provides),ids:n?n.ids:[``,0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:pi(i,a),emitsOptions:Xr(i,a),emit:null,emitted:null,propsDefaults:t,inheritAttrs:i.inheritAttrs,ctx:t,data:t,props:t,attrs:t,slots:t,refs:t,setupState:t,setupContext:null,suspense:r,suspenseId:r?r.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=n?n.root:o,o.emit=Jr.bind(null,o),e.ce&&e.ce(o),o}var Q=null,oa=()=>Q||Sn,sa,ca;{let e=le(),t=(t,n)=>{let r;return(r=e[t])||(r=e[t]=[]),r.push(n),e=>{r.length>1?r.forEach(t=>t(e)):r[0](e)}};sa=t(`__VUE_INSTANCE_SETTERS__`,e=>Q=e),ca=t(`__VUE_SSR_SETTERS__`,e=>fa=e)}var la=e=>{let t=Q;return sa(e),e.scope.on(),()=>{e.scope.off(),sa(t)}},ua=()=>{Q&&Q.scope.off(),sa(null)};function da(e){return e.vnode.shapeFlag&4}var fa=!1;function pa(e,t=!1,n=!1){t&&ca(t);let{props:r,children:i}=e.vnode,a=da(e);ci(e,r,a,t),xi(e,i,n||t);let o=a?ma(e,t):void 0;return t&&ca(!1),o}function ma(e,t){let n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Dr);let{setup:r}=n;if(r){Ve();let n=e.setupContext=r.length>1?ba(e):null,i=la(e),a=rn(r,e,0,[e.props,n]),o=y(a);if(He(),i(),(o||e.sp)&&!ir(e)&&Qn(e),o){if(a.then(ua,ua),t)return a.then(n=>{ha(e,n,t)}).catch(t=>{an(t,e,0)});e.asyncDep=a}else ha(e,a,t)}else va(e,t)}function ha(e,t,n){h(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:v(t)&&(e.setupState=Jt(t)),va(e,n)}var ga,_a;function va(e,t,n){let i=e.type;if(!e.render){if(!t&&ga&&!i.render){let t=i.template||Pr(e).template;if(t){let{isCustomElement:n,compilerOptions:r}=e.appContext.config,{delimiters:a,compilerOptions:o}=i;i.render=ga(t,s(s({isCustomElement:n,delimiters:a},r),o))}}e.render=i.render||r,_a&&_a(e)}{let t=la(e);Ve();try{Ar(e)}finally{He(),t()}}}var ya={get(e,t){return P(e,`get`,``),e[t]}};function ba(e){return{attrs:new Proxy(e.attrs,ya),slots:e.slots,emit:e.emit,expose:t=>{e.exposed=t||{}}}}function xa(e){return e.exposed?e.exposeProxy||=new Proxy(Jt(Bt(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Tr)return Tr[n](e)},has(e,t){return t in e||t in Tr}}):e.proxy}function Sa(e){return h(e)&&`__vccOpts`in e}var $=(e,t)=>Xt(e,t,fa);function Ca(e,t,n){try{Bi(-1);let r=arguments.length;return r===2?v(t)&&!d(t)?Ui(t)?X(e,null,[t]):X(e,t):X(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Ui(n)&&(n=[n]),X(e,t,n))}finally{Bi(1)}}var wa=`3.5.34`,Ta=void 0,Ea=typeof window<`u`&&window.trustedTypes;if(Ea)try{Ta=Ea.createPolicy(`vue`,{createHTML:e=>e})}catch{}var Da=Ta?e=>Ta.createHTML(e):e=>e,Oa=`http://www.w3.org/2000/svg`,ka=`http://www.w3.org/1998/Math/MathML`,Aa=typeof document<`u`?document:null,ja=Aa&&Aa.createElement(`template`),Ma={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{let t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{let i=t===`svg`?Aa.createElementNS(Oa,e):t===`mathml`?Aa.createElementNS(ka,e):n?Aa.createElement(e,{is:n}):Aa.createElement(e);return e===`select`&&r&&r.multiple!=null&&i.setAttribute(`multiple`,r.multiple),i},createText:e=>Aa.createTextNode(e),createComment:e=>Aa.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Aa.querySelector(e),setScopeId(e,t){e.setAttribute(t,``)},insertStaticContent(e,t,n,r,i,a){let o=n?n.previousSibling:t.lastChild;if(i&&(i===a||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===a||!(i=i.nextSibling)););else{ja.innerHTML=Da(r===`svg`?`<svg>${e}</svg>`:r===`mathml`?`<math>${e}</math>`:e);let i=ja.content;if(r===`svg`||r===`mathml`){let e=i.firstChild;for(;e.firstChild;)i.appendChild(e.firstChild);i.removeChild(e)}t.insertBefore(i,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Na=`transition`,Pa=`animation`,Fa=Symbol(`_vtc`),Ia={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},La=s({},Bn,Ia),Ra=(e=>(e.displayName=`Transition`,e.props=La,e))((e,{slots:t})=>Ca(Wn,Va(e),t)),za=(e,t=[])=>{d(e)?e.forEach(e=>e(...t)):e&&e(...t)},Ba=e=>e?d(e)?e.some(e=>e.length>1):e.length>1:!1;function Va(e){let t={};for(let n in e)n in Ia||(t[n]=e[n]);if(e.css===!1)return t;let{name:n=`v`,type:r,duration:i,enterFromClass:a=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:l=a,appearActiveClass:u=o,appearToClass:d=c,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:m=`${n}-leave-to`}=e,h=Ha(i),g=h&&h[0],_=h&&h[1],{onBeforeEnter:v,onEnter:y,onEnterCancelled:b,onLeave:x,onLeaveCancelled:S,onBeforeAppear:C=v,onAppear:w=y,onAppearCancelled:T=b}=t,ee=(e,t,n,r)=>{e._enterCancelled=r,Ga(e,t?d:c),Ga(e,t?u:o),n&&n()},te=(e,t)=>{e._isLeaving=!1,Ga(e,f),Ga(e,m),Ga(e,p),t&&t()},E=e=>(t,n)=>{let i=e?w:y,o=()=>ee(t,e,n);za(i,[t,o]),Ka(()=>{Ga(t,e?l:a),Wa(t,e?d:c),Ba(i)||Ja(t,r,g,o)})};return s(t,{onBeforeEnter(e){za(v,[e]),Wa(e,a),Wa(e,o)},onBeforeAppear(e){za(C,[e]),Wa(e,l),Wa(e,u)},onEnter:E(!1),onAppear:E(!0),onLeave(e,t){e._isLeaving=!0;let n=()=>te(e,t);Wa(e,f),e._enterCancelled?(Wa(e,p),Qa(e)):(Qa(e),Wa(e,p)),Ka(()=>{e._isLeaving&&(Ga(e,f),Wa(e,m),Ba(x)||Ja(e,r,_,n))}),za(x,[e,n])},onEnterCancelled(e){ee(e,!1,void 0,!0),za(b,[e])},onAppearCancelled(e){ee(e,!0,void 0,!0),za(T,[e])},onLeaveCancelled(e){te(e),za(S,[e])}})}function Ha(e){if(e==null)return null;if(v(e))return[Ua(e.enter),Ua(e.leave)];{let t=Ua(e);return[t,t]}}function Ua(e){return se(e)}function Wa(e,t){t.split(/\s+/).forEach(t=>t&&e.classList.add(t)),(e[Fa]||(e[Fa]=new Set)).add(t)}function Ga(e,t){t.split(/\s+/).forEach(t=>t&&e.classList.remove(t));let n=e[Fa];n&&(n.delete(t),n.size||(e[Fa]=void 0))}function Ka(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}var qa=0;function Ja(e,t,n,r){let i=e._endId=++qa,a=()=>{i===e._endId&&r()};if(n!=null)return setTimeout(a,n);let{type:o,timeout:s,propCount:c}=Ya(e,t);if(!o)return r();let l=o+`end`,u=0,d=()=>{e.removeEventListener(l,f),a()},f=t=>{t.target===e&&++u>=c&&d()};setTimeout(()=>{u<c&&d()},s+1),e.addEventListener(l,f)}function Ya(e,t){let n=window.getComputedStyle(e),r=e=>(n[e]||``).split(`, `),i=r(`${Na}Delay`),a=r(`${Na}Duration`),o=Xa(i,a),s=r(`${Pa}Delay`),c=r(`${Pa}Duration`),l=Xa(s,c),u=null,d=0,f=0;t===Na?o>0&&(u=Na,d=o,f=a.length):t===Pa?l>0&&(u=Pa,d=l,f=c.length):(d=Math.max(o,l),u=d>0?o>l?Na:Pa:null,f=u?u===Na?a.length:c.length:0);let p=u===Na&&/\b(?:transform|all)(?:,|$)/.test(r(`${Na}Property`).toString());return{type:u,timeout:d,propCount:f,hasTransform:p}}function Xa(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((t,n)=>Za(t)+Za(e[n])))}function Za(e){return e===`auto`?0:Number(e.slice(0,-1).replace(`,`,`.`))*1e3}function Qa(e){return(e?e.ownerDocument:document).body.offsetHeight}function $a(e,t,n){let r=e[Fa];r&&(t=(t?[t,...r]:[...r]).join(` `)),t==null?e.removeAttribute(`class`):n?e.setAttribute(`class`,t):e.className=t}var eo=Symbol(`_vod`),to=Symbol(`_vsh`),no=Symbol(``),ro=/(?:^|;)\s*display\s*:/;function io(e,t,n){let r=e.style,i=g(n),a=!1;if(n&&!i){if(t)if(g(t))for(let e of t.split(`;`)){let t=e.slice(0,e.indexOf(`:`)).trim();n[t]??oo(r,t,``)}else for(let e in t)n[e]??oo(r,e,``);for(let i in n){i===`display`&&(a=!0);let o=n[i];o==null?oo(r,i,``):uo(e,i,!g(t)&&t?t[i]:void 0,o)||oo(r,i,o)}}else if(i){if(t!==n){let e=r[no];e&&(n+=`;`+e),r.cssText=n,a=ro.test(n)}}else t&&e.removeAttribute(`style`);eo in e&&(e[eo]=a?r.display:``,e[to]&&(r.display=`none`))}var ao=/\s*!important$/;function oo(e,t,n){if(d(n))n.forEach(n=>oo(e,t,n));else if(n??=``,t.startsWith(`--`))e.setProperty(t,n);else{let r=lo(e,t);ao.test(n)?e.setProperty(D(r),n.replace(ao,``),`important`):e[r]=n}}var so=[`Webkit`,`Moz`,`ms`],co={};function lo(e,t){let n=co[t];if(n)return n;let r=E(t);if(r!==`filter`&&r in e)return co[t]=r;r=re(r);for(let n=0;n<so.length;n++){let i=so[n]+r;if(i in e)return co[t]=i}return t}function uo(e,t,n,r){return e.tagName===`TEXTAREA`&&(t===`width`||t===`height`)&&g(r)&&n===r}var fo=`http://www.w3.org/1999/xlink`;function po(e,t,n,r,i,a=ge(t)){r&&t.startsWith(`xlink:`)?n==null?e.removeAttributeNS(fo,t.slice(6,t.length)):e.setAttributeNS(fo,t,n):n==null||a&&!_e(n)?e.removeAttribute(t):e.setAttribute(t,a?``:_(n)?String(n):n)}function mo(e,t,n,r,i){if(t===`innerHTML`||t===`textContent`){n!=null&&(e[t]=t===`innerHTML`?Da(n):n);return}let a=e.tagName;if(t===`value`&&a!==`PROGRESS`&&!a.includes(`-`)){let r=a===`OPTION`?e.getAttribute(`value`)||``:e.value,i=n==null?e.type===`checkbox`?`on`:``:String(n);(r!==i||!(`_value`in e))&&(e.value=i),n??e.removeAttribute(t),e._value=n;return}let o=!1;if(n===``||n==null){let r=typeof e[t];r===`boolean`?n=_e(n):n==null&&r===`string`?(n=``,o=!0):r===`number`&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(i||t)}function ho(e,t,n,r){e.addEventListener(t,n,r)}function go(e,t,n,r){e.removeEventListener(t,n,r)}var _o=Symbol(`_vei`);function vo(e,t,n,r,i=null){let a=e[_o]||(e[_o]={}),o=a[t];if(r&&o)o.value=r;else{let[n,s]=bo(t);r?ho(e,n,a[t]=wo(r,i),s):o&&(go(e,n,o,s),a[t]=void 0)}}var yo=/(?:Once|Passive|Capture)$/;function bo(e){let t;if(yo.test(e)){t={};let n;for(;n=e.match(yo);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[e[2]===`:`?e.slice(3):D(e.slice(2)),t]}var xo=0,So=Promise.resolve(),Co=()=>xo||=(So.then(()=>xo=0),Date.now());function wo(e,t){let n=e=>{if(!e._vts)e._vts=Date.now();else if(e._vts<=n.attached)return;z(To(e,n.value),t,5,[e])};return n.value=e,n.attached=Co(),n}function To(e,t){if(d(t)){let n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(e=>t=>!t._stopped&&e&&e(t))}else return t}var Eo=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Do=(e,t,n,r,i,s)=>{let c=i===`svg`;t===`class`?$a(e,r,c):t===`style`?io(e,n,r):a(t)?o(t)||vo(e,t,n,r,s):(t[0]===`.`?(t=t.slice(1),!0):t[0]===`^`?(t=t.slice(1),!1):Oo(e,t,r,c))?(mo(e,t,r),!e.tagName.includes(`-`)&&(t===`value`||t===`checked`||t===`selected`)&&po(e,t,r,c,s,t!==`value`)):e._isVueCE&&(ko(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!g(r)))?mo(e,E(t),r,s,t):(t===`true-value`?e._trueValue=r:t===`false-value`&&(e._falseValue=r),po(e,t,r,c))};function Oo(e,t,n,r){if(r)return!!(t===`innerHTML`||t===`textContent`||t in e&&Eo(t)&&h(n));if(t===`spellcheck`||t===`draggable`||t===`translate`||t===`autocorrect`||t===`sandbox`&&e.tagName===`IFRAME`||t===`form`||t===`list`&&e.tagName===`INPUT`||t===`type`&&e.tagName===`TEXTAREA`)return!1;if(t===`width`||t===`height`){let t=e.tagName;if(t===`IMG`||t===`VIDEO`||t===`CANVAS`||t===`SOURCE`)return!1}return Eo(t)&&g(n)?!1:t in e}function ko(e,t){let n=e._def.props;if(!n)return!1;let r=E(t);return Array.isArray(n)?n.some(e=>E(e)===r):Object.keys(n).some(e=>E(e)===r)}var Ao=s({patchProp:Do},Ma),jo;function Mo(){return jo||=Ci(Ao)}var No=((...e)=>{let t=Mo().createApp(...e),{mount:n}=t;return t.mount=e=>{let r=Fo(e);if(!r)return;let i=t._component;!h(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent=``);let a=n(r,!1,Po(r));return r instanceof Element&&(r.removeAttribute(`v-cloak`),r.setAttribute(`data-v-app`,``)),a},t});function Po(e){if(e instanceof SVGElement)return`svg`;if(typeof MathMLElement==`function`&&e instanceof MathMLElement)return`mathml`}function Fo(e){return g(e)?document.querySelector(e):e}var Io={mainstream:`主流 UI`,retro:`復古懷舊`,experimental:`實驗前衛`,cultural:`文化在地`,decorative:`裝飾性`,motion:`動態效果`,"native-ui":`原生平台`,"stylized-mobile":`風格化行動`},Lo={parallax:`視差`,"scroll-driven":`滾動`,reveal:`入場`,loop:`循環`,pointer:`指標`},Ro=[{slug:`design-glassmorphism`,name:{zh:`玻璃擬態`,en:`Glassmorphism`},category:`mainstream`,round:1,tags:[`frosted`,`translucent`,`2020s`],brief:`霧面玻璃、半透層次與微妙光暈，呈現未來感的清涼海邊夜場。`,status:`shipped`},{slug:`design-neumorphism`,name:{zh:`新擬物化`,en:`Neumorphism`},category:`mainstream`,round:1,tags:[`soft-ui`,`shadow`,`tactile`],brief:`柔和陰影與雕塑感介面，把音樂節做成像觸感極佳的精緻按鈕。`,status:`shipped`},{slug:`design-material-3`,name:{zh:`Material You`,en:`Material 3`},category:`mainstream`,round:1,tags:[`google`,`dynamic-color`,`elevation`],brief:`動態色彩、明確層階與圓角元件，是當代產品設計的學院派。`,status:`shipped`},{slug:`design-minimalism`,name:{zh:`極簡主義`,en:`Minimalism`},category:`mainstream`,round:1,tags:[`whitespace`,`mono`,`editorial`],brief:`大量留白、單色字體與精確排版，把音樂節呈現成藝廊邀請函。`,status:`shipped`},{slug:`design-dark-mode`,name:{zh:`沉浸暗黑`,en:`Immersive Dark`},category:`mainstream`,round:1,tags:[`dark`,`low-light`,`cinematic`],brief:`深色背景配低彩度發光，像深夜 livehouse 裡的 stage spotlight。`,status:`shipped`},{slug:`design-vaporwave`,name:{zh:`蒸氣波`,en:`Vaporwave`},category:`retro`,round:1,tags:[`80s`,`pastel`,`aesthetic`],brief:`粉紫漸層、希臘雕像與日文標題的網際網路懷舊美學。`,status:`shipped`},{slug:`design-y2k`,name:{zh:`Y2K 千禧`,en:`Y2K`},category:`retro`,round:1,tags:[`2000s`,`chrome`,`cyber-cute`],brief:`銀色金屬、半透塑膠與星型 sticker，把 1999 的網頁夢搬到 2026 海邊。`,status:`shipped`},{slug:`design-web1`,name:{zh:`90s Web 1.0`,en:`Web 1.0`},category:`retro`,round:1,tags:[`90s`,`tables`,`marquee`],brief:`系統字體、tile 背景與灰色按鈕，致敬 1996 年地理城市網頁。`,status:`shipped`},{slug:`design-american-retro-print`,name:{zh:`美式復古印刷`,en:`American Retro Print`},category:`retro`,round:1,tags:[`vintage`,`print`,`screen-print`],brief:`網點質感、油墨偏色與粗襯線標題，活脫像 1970 年代音樂海報。`,status:`shipped`},{slug:`design-synthwave`,name:{zh:`80s Synthwave`,en:`Synthwave`},category:`retro`,round:1,tags:[`80s`,`neon`,`grid`],brief:`霓虹線條、紫紅落日與賽車透視格線，演奏一場數位夕陽。`,status:`shipped`},{slug:`design-bauhaus`,name:{zh:`包浩斯`,en:`Bauhaus`},category:`retro`,round:1,tags:[`1920s`,`geometric`,`primary`],brief:`紅黃藍三色 + 圓三角方塊的幾何構成，向 100 年前的德國學院致敬。`,status:`shipped`},{slug:`design-brutalism`,name:{zh:`野獸派`,en:`Brutalism`},category:`experimental`,round:1,tags:[`raw`,`monospace`,`anti-design`],brief:`裸露結構、強烈對比與粗暴排版，故意違反所有 UX 學派。`,status:`shipped`},{slug:`design-glitch`,name:{zh:`故障藝術`,en:`Glitch Art`},category:`experimental`,round:1,tags:[`rgb-shift`,`distortion`,`noise`],brief:`RGB 錯位、掃描線與隨機破碎，像訊號被海風干擾的演唱會直播。`,status:`shipped`},{slug:`design-cyberpunk`,name:{zh:`賽博龐克`,en:`Cyberpunk`},category:`experimental`,round:1,tags:[`neon`,`dystopia`,`tech-noir`],brief:`霓虹粉藍配黑色背景、片假名與發光邊框的高科技反烏托邦。`,status:`shipped`},{slug:`design-constructivism`,name:{zh:`構成主義`,en:`Constructivism`},category:`experimental`,round:1,tags:[`russian`,`propaganda`,`diagonal`],brief:`紅黑斜切構圖、宣傳海報語法，把獨立音樂節做成革命口號。`,status:`shipped`},{slug:`design-ascii-terminal`,name:{zh:`ASCII 終端機`,en:`ASCII Terminal`},category:`experimental`,round:1,tags:[`monospace`,`green-phosphor`,`cli`],brief:`綠底螢光字、ASCII art 與 80x24 終端機美學，整個網頁是一台 PDP-11。`,status:`shipped`},{slug:`design-editorial`,name:{zh:`雜誌排版`,en:`Editorial Magazine`},category:`experimental`,round:1,tags:[`print`,`serif`,`grid`],brief:`12 欄網格、粗襯線標題與圖文混排，像翻開《Monocle》音樂特輯。`,status:`shipped`},{slug:`design-wabi-sabi`,name:{zh:`日式禪意`,en:`Wabi-Sabi`},category:`cultural`,round:1,tags:[`japan`,`minimal`,`natural`],brief:`米色紙質、墨色筆觸與留白構成，安靜得像京都茶室裡的音樂節。`,status:`shipped`},{slug:`design-chinoiserie`,name:{zh:`中國風國潮`,en:`Chinoiserie / Guochao`},category:`cultural`,round:1,tags:[`china`,`traditional`,`modern-fusion`],brief:`硃砂紅、墨黑、宋體字配水墨點綴，融合古典與當代潮流。`,status:`shipped`},{slug:`design-scandinavian`,name:{zh:`北歐極簡`,en:`Scandinavian`},category:`cultural`,round:1,tags:[`nordic`,`cozy`,`natural`],brief:`木質暖灰、無襯線清爽字體與北歐插畫，營造森林系音樂節。`,status:`shipped`},{slug:`design-swiss-international`,name:{zh:`瑞士國際風格`,en:`Swiss International`},category:`cultural`,round:1,tags:[`grid`,`helvetica`,`sans-serif`],brief:`左對齊網格、Helvetica 與紅色強調，二戰後最理性的排版革命。`,status:`shipped`},{slug:`design-taiwan-temple`,name:{zh:`台灣廟會`,en:`Taiwan Temple Carnival`},category:`cultural`,round:1,tags:[`taiwan`,`folk`,`festive`],brief:`霓虹招牌、紅黃對比與民俗符號，把音樂節辦成熱鬧的夜市廟口。`,status:`shipped`},{slug:`design-isometric-3d`,name:{zh:`等距 3D`,en:`Isometric 3D`},category:`decorative`,round:1,tags:[`3d`,`illustration`,`colorful`],brief:`30 度斜角的玩具世界、立體舞台與小人物插畫，整個音樂節變成樂高城。`,status:`shipped`},{slug:`design-hand-drawn`,name:{zh:`手繪塗鴉`,en:`Hand-Drawn Sketch`},category:`decorative`,round:1,tags:[`sketch`,`doodle`,`human`],brief:`彩色蠟筆、歪斜手寫字與隨意箭頭，像翻開設計師現場速寫本。`,status:`shipped`},{slug:`design-gradient-mesh`,name:{zh:`漸層 Mesh`,en:`Gradient Mesh`},category:`decorative`,round:1,tags:[`gradient`,`aurora`,`fluid`],brief:`流動曲線漸層、極光色彩與柔光球體，像把音樂節調進液態畫布。`,status:`shipped`},{slug:`motion-parallax-layers`,name:{zh:`多層視差`,en:`Parallax Layers`},category:`motion`,round:2,motionType:`parallax`,tags:[`parallax`,`depth`,`mountain`],brief:`滾動時三層山海以不同速度位移，呈現都蘭灣的縱深感。`,status:`shipped`},{slug:`motion-sticky-stack`,name:{zh:`Sticky 堆疊章節`,en:`Sticky Stack`},category:`motion`,round:2,motionType:`parallax`,tags:[`sticky`,`stack`,`apple-style`],brief:`每個章節先被釘住、再被下一章從底部疊上來，像 Apple AirPods 頁。`,status:`shipped`},{slug:`motion-horizontal-scroll`,name:{zh:`橫向滾動陣容`,en:`Horizontal Scroll`},category:`motion`,round:2,motionType:`parallax`,tags:[`horizontal`,`scroll-translate`,`lineup`],brief:`在 lineup 區段，垂直滾動會被轉換成 12 組樂團的橫向滑動。`,status:`shipped`},{slug:`motion-scroll-snap-acts`,name:{zh:`全屏章節切換`,en:`Scroll Snap Acts`},category:`motion`,round:2,motionType:`scroll-driven`,tags:[`scroll-snap`,`fullscreen`,`cinematic`],brief:`每個區段佔滿整個視窗，scroll-snap 強制吸附，像翻電影章節。`,status:`shipped`},{slug:`motion-scroll-progress`,name:{zh:`滾動進度指示`,en:`Scroll Progress`},category:`motion`,round:2,motionType:`scroll-driven`,tags:[`progress-bar`,`indicator`,`navigation`],brief:`頂部 progress bar + 側邊章節點陣，隨滾動點亮當下位置。`,status:`shipped`},{slug:`motion-marquee-band`,name:{zh:`滾動跑馬燈`,en:`Marquee Band`},category:`motion`,round:2,motionType:`scroll-driven`,tags:[`marquee`,`speed-modulated`,`lineup`],brief:`12 組樂團名巨型橫向跑動、滾動時會反向加速，產生時間感。`,status:`shipped`},{slug:`motion-fade-stagger`,name:{zh:`錯落淡入`,en:`Fade Stagger`},category:`motion`,round:2,motionType:`reveal`,tags:[`intersection-observer`,`stagger`,`wave`],brief:`卡片進入視窗時依序波浪式淡入位移，像被海浪推上岸。`,status:`shipped`},{slug:`motion-typewriter`,name:{zh:`打字機標題`,en:`Typewriter`},category:`motion`,round:2,motionType:`reveal`,tags:[`typewriter`,`cursor-blink`,`hero`],brief:`Hero 標題以打字機節奏一字一字浮現，段落隨之滑入。`,status:`shipped`},{slug:`motion-counter-burst`,name:{zh:`數字爆裂計數`,en:`Counter Burst`},category:`motion`,round:2,motionType:`reveal`,tags:[`counter`,`animate-numeric`,`about`],brief:`About 區的 6 屆 / 12 樂團 / 25,000 人次數字在滾入時從 0 跳動到目標值。`,status:`shipped`},{slug:`motion-aurora-flow`,name:{zh:`極光漸層流動`,en:`Aurora Flow`},category:`motion`,round:2,motionType:`loop`,tags:[`gradient`,`aurora`,`keyframes`],brief:`多色 radial-gradient 球體以 20s loop 緩慢流動，整面像呼吸的極光。`,status:`shipped`},{slug:`motion-floating-orbs`,name:{zh:`漂浮幾何球`,en:`Floating Orbs`},category:`motion`,round:2,motionType:`loop`,tags:[`floating`,`orbs`,`background`],brief:`背景的彩色幾何形體上下漂浮、時快時慢，給靜態頁面呼吸感。`,status:`shipped`},{slug:`motion-noise-grain`,name:{zh:`動態噪點`,en:`Noise Grain`},category:`motion`,round:2,motionType:`loop`,tags:[`noise`,`film-grain`,`hue-rotate`],brief:`電影顆粒感的動態噪點 + 緩慢色相旋轉，整頁像舊膠卷在播放。`,status:`shipped`},{slug:`motion-cursor-spotlight`,name:{zh:`滑鼠光暈`,en:`Cursor Spotlight`},category:`motion`,round:2,motionType:`pointer`,tags:[`cursor`,`spotlight`,`radial-gradient`],brief:`Hero 區暗背景上有顆光暈跟著滑鼠走，像舞台燈追樂手。`,status:`shipped`},{slug:`motion-tilt-cards`,name:{zh:`3D 傾斜卡片`,en:`Tilt Cards`},category:`motion`,round:2,motionType:`pointer`,tags:[`3d-transform`,`mouse-tilt`,`perspective`],brief:`12 張樂團卡會依滑鼠位置 3D 傾斜，像捧在手上的小相片。`,status:`shipped`},{slug:`motion-magnetic-cta`,name:{zh:`磁吸按鈕`,en:`Magnetic CTA`},category:`motion`,round:2,motionType:`pointer`,tags:[`magnetic`,`attraction`,`cta`],brief:`主 CTA 按鈕在滑鼠靠近時被輕輕吸過去，按鍵變成有重力的物件。`,status:`shipped`},{slug:`app-ios-hig`,name:{zh:`iOS 淺色 HIG`,en:`iOS HIG`},category:`native-ui`,round:3,viewport:`mobile`,tags:[`ios`,`hig`,`light`],brief:`蘋果 HIG 淺色：SF 字體、大標題、分組列表與毛玻璃 tab-bar，迴聲 Resona 的標準 iOS 樣貌。`,status:`shipped`},{slug:`app-ios-dark`,name:{zh:`iOS 深色`,en:`iOS Dark`},category:`native-ui`,round:3,viewport:`mobile`,tags:[`ios`,`dark`,`oled`],brief:`iOS 深色模式：純黑 OLED 背景、高對比強調色，夜間聽歌的 Resona。`,status:`shipped`},{slug:`app-material-you`,name:{zh:`Material You`,en:`Material You`},category:`native-ui`,round:3,viewport:`mobile`,tags:[`m3`,`android`,`dynamic-color`],brief:`Android Material 3：動態取色、藥丸導覽列與超大圓角卡片。`,status:`shipped`},{slug:`app-one-ui`,name:{zh:`One UI`,en:`Samsung One UI`},category:`native-ui`,round:3,viewport:`mobile`,tags:[`samsung`,`one-ui`,`reachable`],brief:`三星 One UI：上半大留白把操作元素壓到單手可及區，柔和卡片。`,status:`shipped`},{slug:`app-fluent`,name:{zh:`Fluent`,en:`Microsoft Fluent`},category:`native-ui`,round:3,viewport:`mobile`,tags:[`fluent`,`acrylic`,`microsoft`],brief:`微軟 Fluent：壓克力材質、雲母質感與 Reveal 高光、Segoe 風字。`,status:`shipped`},{slug:`app-harmonyos`,name:{zh:`鴻蒙 HarmonyOS`,en:`HarmonyOS`},category:`native-ui`,round:3,viewport:`mobile`,tags:[`harmonyos`,`huawei`,`grid`],brief:`華為鴻蒙：靈動卡片、柵格化資訊密度與清爽留白。`,status:`shipped`},{slug:`app-ios6-skeuomorphic`,name:{zh:`iOS6 擬物`,en:`iOS6 Skeuomorphic`},category:`native-ui`,round:3,viewport:`mobile`,tags:[`ios6`,`skeuomorphic`,`linen`],brief:`iOS6 擬物：亞麻紋理、皮革縫線與光澤按鈕的舊日 Resona。`,status:`shipped`},{slug:`app-android-holo`,name:{zh:`Holo 復古`,en:`Android Holo`},category:`native-ui`,round:3,viewport:`mobile`,tags:[`holo`,`android-4`,`cyan`],brief:`Android 4 Holo：青藍強調、底線分隔與 Roboto Light 的復古安卓。`,status:`shipped`},{slug:`app-neobrutalism`,name:{zh:`新野獸派`,en:`Neobrutalism`},category:`stylized-mobile`,round:3,viewport:`mobile`,tags:[`neobrutalism`,`hard-shadow`,`bold`],brief:`新野獸派：粗黑邊框、硬陰影與高彩度色塊的叛逆播放器。`,status:`shipped`},{slug:`app-glassmorphism`,name:{zh:`玻璃擬態行動`,en:`Glassmorphism`},category:`stylized-mobile`,round:3,viewport:`mobile`,tags:[`glass`,`blur`,`translucent`],brief:`玻璃擬態：磨砂半透明卡片疊在漸層光暈背景上的清涼 Resona。`,status:`shipped`},{slug:`app-y2k`,name:{zh:`Y2K 手機`,en:`Y2K Phone`},category:`stylized-mobile`,round:3,viewport:`mobile`,tags:[`y2k`,`chrome`,`bubble`],brief:`Y2K：鉻金屬泡泡按鈕、星星貼紙與半透塑膠的千禧手機介面。`,status:`shipped`},{slug:`app-wireframe`,name:{zh:`線框 lo-fi`,en:`Wireframe`},category:`stylized-mobile`,round:3,viewport:`mobile`,tags:[`wireframe`,`lo-fi`,`grayscale`],brief:`線框 lo-fi：灰階方框、佔位斜線與手寫註記的原型稿風格。`,status:`shipped`},{slug:`app-cassette-futurism`,name:{zh:`卡帶未來主義`,en:`Cassette Futurism`},category:`stylized-mobile`,round:3,viewport:`mobile`,tags:[`cassette`,`analog-hifi`,`vu-meter`],brief:`卡帶未來主義：刷紋金屬機殼、轉動的卡帶盤、VU 表與七段 LCD，把 Resona 變成一台類比隨身聽。`,status:`shipped`},{slug:`app-claymorphism`,name:{zh:`黏土擬態`,en:`Claymorphism`},category:`stylized-mobile`,round:3,viewport:`mobile`,tags:[`clay`,`soft-3d`,`pastel`],brief:`黏土擬態：澎潤的軟陶造型、糖果色與雙層內外陰影，可愛又有觸感的播放器。`,status:`shipped`},{slug:`app-pixel-arcade`,name:{zh:`8-bit 像素機`,en:`Pixel Arcade`},category:`stylized-mobile`,round:3,viewport:`mobile`,tags:[`8-bit`,`pixel`,`retro-game`],brief:`8-bit 像素機：點陣邊框、抖色填充與掌機 CRT 螢幕感，把聽歌做成一台 chiptune 掌上遊戲機。`,status:`shipped`},{slug:`app-memphis`,name:{zh:`孟菲斯`,en:`Memphis`},category:`stylized-mobile`,round:3,viewport:`mobile`,tags:[`memphis`,`80s`,`postmodern`],brief:`孟菲斯：撞色幾何、波浪鋸齒與彩屑點點的 80 年代後現代狂歡，最跳的探索式音樂介面。`,status:`shipped`},{slug:`app-riso`,name:{zh:`孔版印刷`,en:`Risograph`},category:`stylized-mobile`,round:3,viewport:`mobile`,tags:[`risograph`,`spot-color`,`halftone`],brief:`孔版印刷：螢光雙色疊印、網點半色調與紙質顆粒、輕微套印錯位，獨立廠牌的手感 zine 風。`,status:`shipped`}];Ro.length;var zo=[`href`,`target`,`rel`,`aria-label`],Bo=[`src`,`alt`],Vo={key:2,class:`placeholder`},Ho={class:`category-chip`},Uo={key:3,class:`motion-chip`},Wo={class:`meta`},Go={class:`title-row`},Ko={class:`title-zh`},qo={class:`title-en`},Jo={class:`brief`},Yo={class:`tags`},Xo={class:`actions`},Zo=[`disabled`],Qo=[`href`,`target`,`rel`,`aria-disabled`],$o=Zn({__name:`WorkCard`,props:{work:{}},emits:[`open-skill`],setup(e){let t=e,n=`/claude-skill-design-gallery/`,r=$(()=>`${n}works/${t.work.slug}/index.html`),i=$(()=>`${n}works/${t.work.slug}/thumb.webp`),a=$(()=>`${n}works/${t.work.slug}/thumb.webm`),o=$(()=>t.work.viewport===`mobile`),s=$n(`video`),c=Ht(!1),l=Ht(!1);function u(){t.work.round!==2||t.work.status!==`shipped`||(c.value=!0,s.value&&!l.value&&(s.value.src=a.value,l.value=!0),l.value&&s.value&&(s.value.currentTime=0,s.value.play().catch(()=>{})))}function d(){t.work.round===2&&(c.value=!1,s.value&&s.value.pause())}return(t,n)=>(q(),J(`article`,{class:A([`card`,{"is-planned":e.work.status===`planned`,"is-motion":e.work.round===2}]),onMouseenter:u,onMouseleave:d},[Y(`a`,{class:`thumb-link`,href:e.work.status===`shipped`?r.value:void 0,target:e.work.status===`shipped`?`_blank`:void 0,rel:e.work.status===`shipped`?`noopener`:void 0,"aria-label":`開啟 ${e.work.name.zh} 作品`},[Y(`div`,{class:A([`thumb`,{"is-mobile":o.value}])},[e.work.status===`shipped`?(q(),J(`img`,{key:0,src:i.value,alt:`${e.work.name.zh} 縮圖`,loading:`lazy`,decoding:`async`,class:A({"is-hidden":c.value&&l.value})},null,10,Bo)):Z(``,!0),e.work.round===2&&e.work.status===`shipped`?(q(),J(`video`,{key:1,ref:`video`,class:A([`thumb-video`,{"is-visible":c.value&&l.value}]),muted:``,loop:``,playsinline:``,preload:`none`},null,2)):Z(``,!0),e.work.status===`planned`?(q(),J(`div`,Vo,[...n[1]||=[Y(`span`,{class:`placeholder-label`},`即將上線`,-1)]])):Z(``,!0),Y(`span`,Ho,j(Kt(Io)[e.work.category]),1),e.work.round===2&&e.work.motionType?(q(),J(`span`,Uo,` ▸ `+j(Kt(Lo)[e.work.motionType]),1)):Z(``,!0)],2)],8,zo),Y(`div`,Wo,[Y(`div`,Go,[Y(`h3`,Ko,j(e.work.name.zh),1),Y(`span`,qo,j(e.work.name.en),1)]),Y(`p`,Jo,j(e.work.brief),1),Y(`ul`,Yo,[(q(!0),J(W,null,Cr(e.work.tags,e=>(q(),J(`li`,{key:e},`#`+j(e),1))),128))]),Y(`div`,Xo,[Y(`button`,{class:`action skill`,disabled:e.work.status!==`shipped`,onClick:n[0]||=n=>t.$emit(`open-skill`,e.work)},[...n[2]||=[Y(`span`,{class:`icon`},`📄`,-1),Y(`span`,null,`查看 Skill`,-1)]],8,Zo),Y(`a`,{class:`action open`,href:e.work.status===`shipped`?r.value:void 0,target:e.work.status===`shipped`?`_blank`:void 0,rel:e.work.status===`shipped`?`noopener`:void 0,"aria-disabled":e.work.status!==`shipped`},[...n[3]||=[Y(`span`,null,`開啟作品`,-1),Y(`span`,{class:`icon`},`↗`,-1)]],8,Qo)])])],34))}}),es=(e,t)=>{let n=e.__vccOpts||e;for(let[e,r]of t)n[e]=r;return n},ts=es($o,[[`__scopeId`,`data-v-04d07387`]]),ns={class:`filter-bar`,"aria-label":`分類篩選`},rs=[`onClick`],is={class:`count`},as=es(Zn({__name:`FilterBar`,props:{active:{},counts:{}},emits:[`change`],setup(e){let t=[`all`,`mainstream`,`retro`,`experimental`,`cultural`,`decorative`,`motion`,`native-ui`,`stylized-mobile`],n=e=>e===`all`?`全部`:Io[e];return(r,i)=>(q(),J(`nav`,ns,[(q(),J(W,null,Cr(t,t=>(q(),J(W,{key:t},[(e.counts[t]??0)>0||t===`all`?(q(),J(`button`,{key:0,class:A([`chip`,{"is-active":e.active===t}]),onClick:e=>r.$emit(`change`,t)},[Y(`span`,null,j(n(t)),1),Y(`span`,is,j(e.counts[t]??0),1)],10,rs)):Z(``,!0)],64))),64))]))}}),[[`__scopeId`,`data-v-166b68a4`]]),os={class:`round-tab`,"aria-label":`輪次切換`},ss={class:`tab-count`},cs={class:`tab-count`},ls={class:`tab-count`},us={class:`tab-count`},ds=es(Zn({__name:`RoundTab`,props:{active:{},totalAll:{},totalR1:{},totalR2:{},totalR3:{}},emits:[`change`],setup(e){return(t,n)=>(q(),J(`nav`,os,[Y(`button`,{class:A([`tab`,{"is-active":e.active===`all`}]),onClick:n[0]||=e=>t.$emit(`change`,`all`)},[n[4]||=Y(`span`,{class:`tab-name`},`全部`,-1),Y(`span`,ss,j(e.totalAll),1)],2),Y(`button`,{class:A([`tab`,{"is-active":e.active===1}]),onClick:n[1]||=e=>t.$emit(`change`,1)},[n[5]||=Y(`span`,{class:`tab-name`},`靜態`,-1),Y(`span`,cs,j(e.totalR1),1)],2),Y(`button`,{class:A([`tab`,{"is-active":e.active===2}]),onClick:n[2]||=e=>t.$emit(`change`,2)},[n[6]||=Y(`span`,{class:`tab-name`},`動態`,-1),Y(`span`,ls,j(e.totalR2),1)],2),Y(`button`,{class:A([`tab`,{"is-active":e.active===3}]),onClick:n[3]||=e=>t.$emit(`change`,3)},[n[7]||=Y(`span`,{class:`tab-name`},`行動`,-1),Y(`span`,us,j(e.totalR3),1)],2)]))}}),[[`__scopeId`,`data-v-c54ccc77`]]),fs=Object.assign({"../../.claude/skills/app-android-holo/SKILL.md":`---
name: app-android-holo
description: Use when generating a single-file mobile App screen demo for the 迴聲 Resona 音樂串流 App in Android Holo Dark (ICS) style. Triggers on Android Holo、Holo Dark、Holo 復古、ICS、Ice Cream Sandwich、Android 4.x、Roboto Light、復古安卓、action bar tab、Holo blue、#33B5E5.
user-invocable: true
---

# Holo 復古 — 迴聲 Resona

## Style Philosophy

Holo 是 Google 在 2011 年 Android 4.0（Ice Cream Sandwich）推出的第一套官方系統設計語言，由 Matias Duarte 主導，主旨是「**從紙感回到玻璃與光（glass & light）**」——純黑底、霓虹般的青藍 accent、極細髮絲線分隔、Roboto 字型。它是 Material Design 之前的安卓美學，方正、低裝飾、資訊密度高，帶有一種 2012 年高階 Android 手機（Galaxy Nexus）的工程冷感與復古科技味。在迴聲 Resona 這支音樂串流 App 中，Holo 風格呈現「**像一台老 Nexus 上跑的播放器**」——黑得徹底、藍得發光、線細到幾乎看不見、列表一行行排得密實。

本次精修的目標：在「正宗 ICS 復古」的前提下，把細膩度推到產品級——action bar 下方的**底線式分頁**要精準、Holo 青藍要克制而發光、加入常駐**迷你播放列**、所有可點元素要有明確的 \`:hover\` / \`:active\` 按下回饋，並徹底鎖死版面（390×844、status-bar 永遠在頂、迷你播放列+tab-bar 永遠在底）。

三個視覺辨識特徵：
1. **純黑 (#000) 背景 + Holo 青藍 #33B5E5 單一 accent**：accent 只用在 active 狀態、進度、強調文字、底線、播放鍵；其餘一律灰階，色彩極度克制。
2. **1px 髮絲線分隔 #222 + 底線式 action bar tab**：頂部 action bar 下方有一條可切換的 tab 列，active tab 由 2px Holo 藍底線標示（不是膠囊、不是填色）。
3. **Roboto Light 細字 + 全大寫 small-caps 標籤 + 高資訊密度**：標題用 Roboto Light（300 weight），區塊標籤用 11px 全大寫加寬字距的灰字，列表行高壓得很緊。

## Design Tokens (CSS variables)

完整 token 系統。**所有間距、字級、圓角、陰影一律取自下列 token，不得寫死任意數值。**

\`\`\`css
:root {
  /* ── 手機外殼尺寸 token ── */
  --screen-w: 390px;
  --screen-h: 844px;
  --statusbar-h: 24px;          /* Holo 狀態列偏矮 */
  --actionbar-h: 48px;          /* action bar 標準高 */
  --tab-h: 40px;                /* action bar 底下的底線式 tab 列 */
  --miniplayer-h: 56px;         /* 常駐迷你播放列高 */
  --tabbar-h: 52px;             /* 底部 4-tab 導覽列 */
  --safe-bottom: env(safe-area-inset-bottom, 0px);
  --screen-radius: 28px;        /* 螢幕圓角 */

  /* ── 8pt 間距尺度（唯一允許的間距值）── */
  --sp-1: 4px;
  --sp-2: 8px;
  --sp-3: 12px;
  --sp-4: 16px;
  --sp-5: 20px;
  --sp-6: 24px;
  --sp-8: 32px;
  --gutter: 16px;               /* 螢幕左右標準邊距，= --sp-4 */

  /* ── Holo Dark 色票 ── */
  --holo-bg: #000000;           /* 純黑背景 */
  --holo-surface: #0a0a0a;      /* 卡片/列表底，幾乎全黑 */
  --holo-surface-2: #141414;    /* pressed / 次層 */
  --holo-surface-3: #1c1c1c;    /* hover / 浮起層 */
  --holo-blue: #33b5e5;         /* Holo 青藍 accent（唯一彩色） */
  --holo-blue-dim: #2a93b8;     /* accent pressed */
  --holo-blue-soft: rgba(51, 181, 229, 0.12); /* active 列淡藍底 */
  --holo-blue-glow: rgba(51, 181, 229, 0.22); /* 微光暈 */

  /* ── 文字灰階（純黑底上的 Roboto）── */
  --holo-text: #e8e8e8;         /* 主文字（非純白，較柔） */
  --holo-text-2: #a0a0a0;       /* 次級文字 */
  --holo-text-3: #6a6a6a;       /* 三級 / 說明 */
  --holo-label: #808080;        /* 區塊標籤（全大寫） */

  /* ── 分隔線 / 邊框 — Holo 標誌性的極細線 ── */
  --holo-line: #222222;         /* 1px 髮絲分隔線 */
  --holo-line-2: #1a1a1a;       /* 更暗的次分隔 */
  --holo-divider-blue: #33b5e5; /* active 底線色 */

  /* ── 圓角 — Holo 偏方正，圓角極小 ── */
  --radius-xs: 2px;
  --radius-sm: 3px;
  --radius-card: 4px;
  --radius-none: 0px;
  --radius-pill: 999px;         /* 僅用於進度把手/迷你封面，仍極少 */

  /* ── 陰影 — Holo 幾乎不用陰影，靠線與光 ── */
  --shadow-bar: 0 1px 0 rgba(0,0,0,0.8), 0 2px 4px rgba(0,0,0,0.5);
  --shadow-mini: 0 -1px 0 rgba(0,0,0,0.9), 0 -2px 6px rgba(0,0,0,0.5);
  --glow-blue: 0 0 8px var(--holo-blue-glow);

  /* ── 字型 — Roboto / Roboto Light 為核心，缺字回落系統 ── */
  --font-base: 'Roboto', 'Noto Sans TC', 'PingFang TC', 'Helvetica Neue', system-ui, sans-serif;
  --font-light: 'Roboto Light', 'Roboto', 'Noto Sans TC', system-ui, sans-serif;
  --weight-light: 300;
  --weight-regular: 400;
  --weight-medium: 500;
  --tracking-caps: 0.12em;      /* 全大寫標籤字距 */
  --tracking-tight: -0.01em;    /* 大標題微縮字距 */

  /* ── 動效（必附 reduced-motion）── */
  --dur-fast: 90ms;
  --dur-base: 140ms;
  --ease-holo: cubic-bezier(0.4, 0.0, 0.2, 1);
}
\`\`\`

## Typography Scale（手機字級，Holo Roboto Light 主導）

| 級距 | 大小 / 行高 / 字重 / 字距 | 用途 |
| --- | --- | --- |
| display | 28px / 1.15 / 300（Light） / \`--tracking-tight\` | 大封面下的曲名、player 主標 |
| title | 22px / 1.2 / 300（Light） / \`--tracking-tight\` | home / detail 頁面大標、action bar 標題 |
| headline | 19px / 1.25 / 400 | 區段標題（如「為你精選歌單」） |
| subhead | 17px / 1.3 / 400 | 列表主要文字（歌單名、歌名行） |
| body | 15px / 1.45 / 400 | 一般說明文字、功能描述 |
| caption | 13px / 1.4 / 400 | 列表次行（藝人、時長、播放數） |
| micro | 12px / 1.3 / 400 | 進度時間、tab 文字、徽章內文 |
| label | 11px / 1.2 / 500 / \`--tracking-caps\` / \`uppercase\` | 區塊標籤（DAILY MIX / ALBUMS / NOW PLAYING），全大寫加寬距，灰色 |

字重規則：標題一律 Roboto Light（300），列表內文 400，唯有全大寫小標籤、active 文字、訂閱卡方案名可用 500。**絕不用 700 粗體**——Holo 的層級靠字級與顏色，不靠加粗。區段標題（headline）右側若有「查看全部」，用 13px Holo 藍。

## Component & Layout

整體外框（device chrome）由上而下固定為四段：**status-bar（24px，永遠頂）→ 當前畫面可捲動內容區（含 action bar + 底線 tab）→ mini-player（56px，常駐）→ 底部 tab-bar（52px，永遠底）**。內容區為 8 屏堆疊，每屏一個 \`<section data-screen>\`。mini-player 顯示於 home/search/library/profile/detail，**player 畫面本身不顯示 mini-player**（因為已是全屏播放）。

### 共用 chrome

- **status-bar**（\`data-screen="status-bar"\`）：高 24px，純黑底。左側 \`9:41\`（11px，Roboto，白），右側依序 訊號格（用 ▮▮▮▯ 或 inline SVG 三角訊號）、Wi-Fi、電量符號 \`■\` 與百分比。整列文字 11px、\`--holo-text\`。Holo 招牌的「極窄頂列」。

- **mini-player（迷你播放列）**：常駐於 tab-bar **上方**、緊貼 tab-bar，高 56px、純黑底、頂部 1px \`--holo-line\` + \`--shadow-mini\`。由左到右：40px 方形小封面縮圖（\`assets/cover-3.webp\`，無圖漸層 fallback）+ 歌名〈晚風練習曲〉（subhead，單行省略號）+ 藝人 \`林知夏\`（caption 灰，單行省略號）+ 右側 Holo 藍 ▶/⏸ 播放鍵（36px 觸控區）。**點擊封面/文字區域語意上展開到 player 畫面**（demo 中以 \`:hover\` 浮起 \`--holo-surface-2\` + cursor:pointer 暗示可點）。中間文字區用 \`min-width:0\` + \`overflow:hidden\` 確保長歌名不撐破。

- **tab-bar**（\`data-screen="tab-bar"\`）：固定底部，高 52px，純黑底、頂部 1px \`--holo-line\`。**4 個 tab**：\`首頁\` / \`搜尋\` / \`音樂庫\` / \`我的\`，各為「上 icon + 下 11px 文字」。**active 態**：icon 與文字轉 \`--holo-blue\`，並在該 tab **頂部加 2px Holo 藍指示線**（Holo 標誌性的 top-indicator）；非 active 為 \`--holo-text-3\` 灰。每 tab \`cursor:pointer\`、\`:active\` 文字轉 \`--holo-blue-dim\`。預設 active 設在「首頁」。

### home（\`data-screen="home"\`）

頂部 action bar 顯示品牌標題「**迴聲 Resona**」（22px Light，左對齊；右側放搜尋 ⚲ 與 overflow ⋮ icon，皆 Holo 藍、各為可點 icon-button）。action bar 下方一條 1px \`--holo-line\`，再下方是**底線式 tab 列**：\`為你\` / \`最新\` / \`電台\` 三分頁，active（「為你」）以 2px Holo 藍底線標示。內容至少 3 區段：

1. **每日迴聲**（DAILY MIX）：頂部推薦橫幅 banner，標籤 \`DAILY MIX\` 全大寫小字 + 大封面（\`assets/cover-1.webp\`，無圖則 CSS 漸層 fallback），上面浮一行標題「每日迴聲」+ 副文字「依你的聆聽口味，每天為你重新編排」+ 右下角 Holo 藍 ▶ 播放鍵。
2. **為你精選歌單**（區段標題 headline + 右側「查看全部」）：列出全部 **7 歌單名**（\`浪潮回聲\`/\`深夜公路\`/\`島嶼晨光\`/\`雨後散步\`/\`城市心跳\`/\`山海之間\`/\`失重時刻\`），用 2 欄方形封面網格（封面輪流套 \`assets/cover-1.webp\`…\`cover-6.webp\`，第 7 張回用 \`cover-1\`），每卡：方形封面 + 下方歌單名（subhead）+ 曲數 caption。
3. **熱門排行**（區段標題 + 「查看全部」）：編號清單，露出至少 4 首歌（\`〈藍色信號〉\`/\`〈霓虹巷弄〉\`/\`〈候鳥地圖〉\`/\`〈晚風練習曲〉\`），每行左大號軌號（Holo 藍）、歌名 + 藝人 caption、右側時長與 ▶ 播放鍵。
4. **功能露出**：以細線分隔的列表行，列出 6 核心功能名中至少「無損音質串流」「歌詞同步」「離線下載」三項。

每張卡片與每個 list-item 皆 \`cursor:pointer\`、\`:hover\` 浮起 \`--holo-surface-3\`、\`:active\` 沉到 \`--holo-surface-2\`。

### search（\`data-screen="search"\`）

頂部 action bar 標題「搜尋」。下方一個 Holo 風搜尋框——**全黑底、底部 2px Holo 藍底線（Holo 招牌的 underline input，不是圓框）**、placeholder 灰字「搜尋歌曲、藝人、歌單」、左側 ⚲ icon。下方放 **4 分類 chip**（\`華語\`/\`獨立\`/\`電子\`/\`放鬆\`，Holo 方正小框）。內容：

- **熱門歌曲**（TRENDING）：編號清單，每行左軌號、歌名（subhead）、藝人 caption、右側時長。露出多首：〈藍色信號〉(03:12)、〈霓虹巷弄〉(02:54)、〈候鳥地圖〉(04:03)、〈靜電〉(03:28)、〈晚風練習曲〉(02:47)。
- **熱門藝人**（ARTISTS）：橫向小列或網格，露出 5 藝人名 \`海平面樂團\`/\`Echo Lab\`/\`夜行列車\`/\`何遠\`/\`林知夏\`，各為圓/方頭像縮圖 + 名字。

### detail（\`data-screen="detail"\`）

主打專輯 \`島嶼晨光\`。頂部含返回鍵（← Holo 藍，可點，語意返回上一畫面）+ overflow ⋮。大封面（\`assets/cover-3.webp\`，無圖以漸層 fallback）。封面下方：

- 專輯名 \`島嶼晨光\`（title 22px Light）+ 藝人 \`林知夏\`（caption 灰）+ 一行 metadata：\`2026\` · \`9 首\` · \`總時長 28:42\`。
- 操作列：「播放全部」（Holo 藍邊框方正鈕，▶ + 文字）+「隨機播放」（次級灰邊框鈕，⤨ + 文字），皆 \`cursor:pointer\` + 按下回饋。
- **完整 9 首曲目清單**，每首一行 \`.song-row\`：左軌號（灰）、中間歌名 + 藝人 caption、右側時長 + 行尾選單 ⋮（或 ▶ 播放鍵），行與行用 1px \`--holo-line\` 分隔，\`:hover\`/\`:active\` 有底色回饋。9 首全列：〈藍色信號〉(03:12)、〈霓虹巷弄〉(02:54)、〈候鳥地圖〉(04:03)、〈靜電〉(03:28)、〈晚風練習曲〉(02:47)、〈無人車站〉(03:55)、〈潮間帶〉(03:01)、〈第七個夏天〉(02:39)、〈月台九又四分之三〉(04:23)。

### player（\`data-screen="player"\`）

全黑沉浸頁，**不顯示 mini-player**。頂部含返回鍵（⌄ 或 ← Holo 藍，可點，語意收合回上一畫面）+ \`NOW PLAYING\` 全大寫標籤 + overflow ⋮。內容置中：

- 大封面（\`assets/cover-3.webp\`，無圖漸層 fallback，方正小圓角）→ 曲名〈晚風練習曲〉（display 28px Light）→ 藝人 \`林知夏\`（caption）→ 專輯 \`島嶼晨光\`（micro 灰）。
- **進度條**：一條 2px 細軌，已播部分 \`--holo-blue\` + \`--glow-blue\`、把手為小方點/小圓點，兩端時間 \`00:47 / 02:47\`（02:47 為總長）。
- **控制列**：⤨ 隨機 → ⏮ 上一首 → ⏯ 中央播放鍵（Holo 藍圓框，▶/⏸ 兩態）→ ⏭ 下一首 → ⟳ 循環，皆 icon-only、\`cursor:pointer\`、按下回饋；active 的隨機/循環轉 Holo 藍。
- **底部資訊列**：左「無損音質串流」徽章（藍邊小框 \`HI-RES\`），右「歌詞同步」標籤。
- **歌詞同步**：3 行歌詞，**中間一行為 active（Holo 藍、較亮）**，上下兩行 \`--holo-text-3\` 灰，示意逐字/逐行高亮。

### library（\`data-screen="library"\`）

頂部 action bar 標題「音樂庫」+ 底線式分頁列 \`歌單\` / \`專輯\` / \`已下載\`（active「歌單」2px 藍底線）。內容：

- **收藏歌單清單**：密實列表，每行左 44px 小封面縮圖、主文字歌單名、右 caption（曲數）。列出數個歌單名 \`浪潮回聲\`(18 首)/\`山海之間\`(24 首)/\`島嶼晨光\`(9 首)/\`失重時刻\`(12 首)，行尾 ⋮ 選單。
- **離線下載**：一行 list-item「離線下載」+ 副文「已下載 3 個歌單 · 約 412 MB」+ 右側下載狀態 icon。
- **共享音樂庫**：一行 list-item「共享音樂庫」+ 副文「與家庭方案成員共用」。

每行 \`cursor:pointer\` + hover/active 回饋。

### profile（\`data-screen="profile"\`）

頂部 action bar 標題「我的」。內容：

- **使用者卡**：頭像方塊 + 暱稱 + \`resona.app\` 帳號 + caption「Plus 會員」。
- **播放偏好**：以細線分隔的設定列，含「跨裝置接續播放」開關（Holo 風 toggle：方正軌 + Holo 藍 active 點）、「無損音質串流」開關、「歌詞同步」開關。
- **3 訂閱方案卡**，Holo 風格為**方正卡、1px 邊框、無填色**，縱排：
  - \`免費\` — \`NT$ 0\` ／月（邊框 \`--holo-line\`，灰，標「目前方案」）
  - \`Plus\` — \`NT$ 149\` ／月（邊框 \`--holo-blue\`、標題藍、為主推方案，標「推薦」）
  - \`Family\` — \`NT$ 249\` ／月（邊框 \`--holo-line\`）
  價格用 \`NT$ 149\` 半形字串（\`NT$\` 與數字一個半形空格）、後綴全形「／月」。三方案名與三價格須同屏出現。每卡含一個方正「選擇方案」/「目前方案」鈕，\`cursor:pointer\` + 按下回饋。

## Do / Don't

| Do | Don't |
| --- | --- |
| 背景一律純黑 \`#000\`，accent 只用單一 Holo 藍 \`#33B5E5\` | 用多種彩色、漸層花俏背景、Material 動態色 |
| 分隔用 1px 髮絲線 \`#222\`，active 用 2px 藍底線 | 用圓角卡 + 大陰影做分隔（那是 Material） |
| 標題用 Roboto Light（300），標籤全大寫加寬字距灰字 | 用 700 粗體堆疊視覺層級 |
| 圓角 ≤ 4px、chip / 按鈕用方正細框 | 用膠囊鈕、28px 大圓角、填色 chip |
| active tab 用「頂部 2px 藍指示線 + 藍字」，分頁用底線 | 用底部膠囊高亮或填滿背景塊 |
| 所有間距取自 8pt token（4/8/12/16/20/24/32） | 寫死 7px / 13px / 18px 之類非尺度值 |
| 列表行高壓緊、資訊密度高、靠線排版 | 大留白、卡片間大間距的鬆散排版 |
| 可點元素 \`cursor:pointer\` + \`:hover\` 浮起 + \`:active\` 按下回饋 | 點了沒任何視覺變化的死板元素 |
| 播放鍵有 ▶/⏸ 兩態、active 隨機/循環轉藍 | 播放鍵永遠同一個 icon 沒狀態 |
| accent 文字確保對黑底達 WCAG AA（#33B5E5 對 #000 約 7:1） | 用 #444 之類低對比灰字寫正文 |

## Motion & Micro-interaction

- 所有可點元素：\`cursor: pointer\`。卡片/列表行 \`:hover\` 提升底色至 \`--holo-surface-3\`、\`:active\` 沉到 \`--holo-surface-2\`（並可 \`transform: scale(0.99)\`）。
- icon-button / 控制鍵 \`:hover\` 提亮、\`:active\` \`transform: scale(0.92)\` 給「按下去」回饋。
- 中央播放鍵 ▶/⏸ 兩態（demo 用 \`:active\`/\`.playing\` class 切換 icon 字符）；隨機 ⤨、循環 ⟳ 的 active 態轉 \`--holo-blue\`。
- 底線式分頁 active 的 2px 藍底線、tab-bar active 的 2px 頂部藍線可加 \`transition\` 過渡。
- 所有 transition 只動 \`transform\` / \`opacity\`（以及顏色 \`color\`/\`background\`），時長用 \`--dur-fast\`/\`--dur-base\`、緩動 \`--ease-holo\`。**任何動畫/transition 必附 \`@media (prefers-reduced-motion: reduce)\` 關閉。**

## Mobile Chrome Spec（鎖死版面、無跑版）

- 設計基準 **390×844**（iPhone 直式）；最外層 \`.device\` 鎖 \`width: var(--screen-w)\`、\`height: var(--screen-h)\`、置中、\`overflow: hidden\`、\`border-radius: var(--screen-radius)\` 模擬圓角螢幕、背景純黑、\`display:flex; flex-direction:column\`。
- **status-bar 永遠在頂**（24px，不捲動），**mini-player + tab-bar 永遠在底**（mini-player 56px 緊貼於 tab-bar 52px 之上，兩者皆不捲動），中間為**單一可捲動內容區**（\`flex:1; overflow-y:auto\`）。
- 內容區底部留 \`padding-bottom: calc(var(--miniplayer-h) + var(--tabbar-h) + var(--safe-bottom) + var(--sp-2))\`，確保最後一行內容**不被 mini-player / tab-bar 遮住**。
- **文字不溢出 / 不被裁切**：所有單行標題用 \`overflow:hidden; text-overflow:ellipsis; white-space:nowrap\` + 父層 \`min-width:0\`；多行說明用正常換行，padding 充足（左右 \`--gutter\`）。
- **player 畫面例外**：player 為全屏沉浸頁，不顯示 mini-player（避免重複播放列），但 status-bar 與 tab-bar 仍在。其餘 7 屏皆顯示 mini-player。
- **action bar 底線 tab / 分頁列**：active 以 2px \`--holo-blue\` 底線標示，是 Holo 的核心識別；純 CSS 呈現即可（不需真切換邏輯）。
- **tab-bar + mini-player** 用 \`position: sticky; bottom: 0\`（或 fixed 於裝置容器內）固定，永遠可見。

## Required Output Contract

遵循 \`.claude/agents/style-page-builder.md\` 的「**App 風格額外要求**」：

- **8 個 \`<section data-screen="<id>">\`**，固定順序：\`status-bar\` → \`home\` → \`search\` → \`detail\` → \`player\` → \`library\` → \`profile\` → \`tab-bar\`，每個 id 各出現恰一次。
- \`<body data-viewport="mobile">\` 必須存在。
- **status-bar 顯示 \`9:41\`**；**tab-bar 四 tab** \`首頁\` / \`搜尋\` / \`音樂庫\` / \`我的\` 齊全。
- **常駐 mini-player**：在 tab-bar 上方、顯示於 home/search/detail/library/profile（player 不顯示），含小封面 + 歌名〈晚風練習曲〉+ 藝人 \`林知夏\` + ▶/⏸ 播放鍵。
- **三層定價精確字串**同屏出現：\`免費\` / \`Plus\` / \`Family\` 配 \`NT$ 0\` / \`NT$ 149\` / \`NT$ 249\`（\`NT$\` 與數字間一個半形空格、後綴全形「／月」）。
- **可互動多畫面導覽**：tab 切換（4 tab）+ 卡片 → detail + 曲目/迷你播放列 → player + detail/player 含返回鍵；可點元素皆 \`cursor:pointer\` + \`:hover\`/\`:active\` 視覺。
- 品牌「迴聲 / Resona」、6 核心功能名、7 歌單名、9 歌名、5 藝人名、4 分類 chip、正在播放（\`林知夏\` —〈\`晚風練習曲\`〉/ 02:47）皆出現在**可見 body 文字**中（不可只塞 \`aria-label\` / \`data-*\`）。
- 單檔 HTML **≤ 200 KB**（不含 \`assets/\` 圖片）。
- **無外部 CDN**：\`<link>\` / \`<script>\` / \`<img>\` 的 src/href 不得以 \`http://\` 或 \`https://\` 開頭；圖片一律相對路徑 \`assets/<filename>.webp\`。
- 不可用 framework CSS（Tailwind 等），全部 CSS 變數驅動。
- 若使用任何動畫（\`@keyframes\` / \`transition\`），必附 \`@media (prefers-reduced-motion: reduce)\` 關閉或簡化，且只動 \`transform\` / \`opacity\`（顏色過渡可保留）。

## Required Images

本風格使用**真實專輯封面圖**。\`assets-manifest.json\` 列 6 張方形專輯封面 \`cover-1.webp\` … \`cover-6.webp\`（各 600×600，抽象、無文字、各具不同氛圍）。使用規則：

- **home** 的「每日迴聲」橫幅用 \`assets/cover-1.webp\`；7 歌單卡牆輪流套用 \`cover-1.webp\`…\`cover-6.webp\`（第 7 張回用 \`cover-1\`）。
- **detail** 的 \`島嶼晨光\` 主打封面、**player** 的大封面、**mini-player** 的小封面皆用 \`assets/cover-3.webp\`。
- **library** 的收藏縮圖、**search** 的藝人頭像可重複套用 6 張封面。
- **Fallback**：每個 \`<img>\` 外層套一個帶 CSS 漸層的容器（深色系，如 \`linear-gradient(135deg, #0d1b24, #1a2b33)\` 等與 Holo 黑藍氛圍相符的暗色漸層），圖檔不存在或載入失敗時（\`onerror\` 隱藏 img 或圖未產出時）以該漸層色塊呈現，仍維持版面與可讀性。

## Reference Snippet

≥ 60 行可直接使用的 Holo CSS（手機殼、狀態列、action bar + 底線分頁、區段標題、chip、underline 搜尋框、卡片、song-row、進度條、訂閱卡、mini-player、tab-bar、reduced-motion）：

\`\`\`css
/* ── 手機外殼 ── */
.device {
  width: var(--screen-w);
  height: var(--screen-h);
  margin: 0 auto;
  background: var(--holo-bg);
  color: var(--holo-text);
  font-family: var(--font-base);
  border-radius: var(--screen-radius);
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
}

/* ── 狀態列：Holo 招牌窄頂列（永遠頂、不捲動）── */
.statusbar {
  height: var(--statusbar-h);
  flex: none;
  display: flex; align-items: center; justify-content: space-between;
  padding: 0 var(--sp-3);
  font-size: 11px; color: var(--holo-text);
  background: var(--holo-bg);
}
.statusbar .right { display: flex; gap: var(--sp-1); align-items: center; letter-spacing: 0.02em; }

/* ── 可捲動內容區（中段，留底部 mini+tab 空間）── */
.content {
  flex: 1; overflow-y: auto;
  padding-bottom: calc(var(--miniplayer-h) + var(--tabbar-h) + var(--safe-bottom) + var(--sp-2));
}

/* ── action bar + Holo 底線式分頁 ── */
.actionbar {
  height: var(--actionbar-h);
  display: flex; align-items: center; justify-content: space-between;
  padding: 0 var(--gutter);
  font-family: var(--font-light); font-weight: var(--weight-light);
  font-size: 22px; letter-spacing: var(--tracking-tight);
  box-shadow: var(--shadow-bar);
}
.actionbar .icons { display: flex; gap: var(--sp-5); color: var(--holo-blue); font-size: 18px; }
.actionbar .icons .ib { cursor: pointer; transition: opacity var(--dur-fast) var(--ease-holo); }
.actionbar .icons .ib:active { opacity: 0.6; transform: scale(0.92); }
.actionbar .back { color: var(--holo-blue); cursor: pointer; }

.tabline { display: flex; height: var(--tab-h); border-bottom: 1px solid var(--holo-line); }
.tabline .tab {
  flex: 1; display: flex; align-items: center; justify-content: center;
  font-size: 11px; letter-spacing: var(--tracking-caps); text-transform: uppercase;
  color: var(--holo-text-3); border-bottom: 2px solid transparent; cursor: pointer;
  transition: color var(--dur-base) var(--ease-holo), border-color var(--dur-base) var(--ease-holo);
}
.tabline .tab:active { color: var(--holo-text-2); }
.tabline .tab.active { color: var(--holo-blue); border-bottom-color: var(--holo-divider-blue); }

/* ── 全大寫區塊標籤 + 區段標題（含「查看全部」）── */
.section-label {
  font-size: 11px; letter-spacing: var(--tracking-caps); text-transform: uppercase;
  color: var(--holo-label); padding: var(--sp-4) var(--gutter) var(--sp-1);
}
.section-head {
  display: flex; align-items: baseline; justify-content: space-between;
  padding: var(--sp-5) var(--gutter) var(--sp-2);
}
.section-head h2 { font-size: 19px; font-weight: var(--weight-regular); }
.section-head .more { font-size: 13px; color: var(--holo-blue); cursor: pointer; }
.section-head .more:active { color: var(--holo-blue-dim); }

/* ── Holo 方正 chip（非膠囊）── */
.chips { display: flex; gap: var(--sp-2); padding: 0 var(--gutter) var(--sp-3); flex-wrap: wrap; }
.chip {
  padding: var(--sp-1) var(--sp-3); font-size: 11px;
  letter-spacing: var(--tracking-caps); text-transform: uppercase;
  color: var(--holo-blue); border: 1px solid var(--holo-blue);
  background: transparent; border-radius: var(--radius-xs); cursor: pointer;
  transition: background var(--dur-fast) var(--ease-holo);
}
.chip:hover { background: var(--holo-blue-soft); }
.chip.active { background: var(--holo-blue); color: var(--holo-bg); }

/* ── Holo underline 搜尋框（底線輸入）── */
.search-field {
  display: flex; align-items: center; gap: var(--sp-2);
  margin: var(--sp-3) var(--gutter);
  padding: var(--sp-2) 2px; color: var(--holo-text-2);
  background: transparent; border: none; border-bottom: 2px solid var(--holo-blue);
}

/* ── 封面 + 漸層 fallback 容器 ── */
.cover {
  aspect-ratio: 1; width: 100%; border-radius: var(--radius-card);
  background: linear-gradient(135deg, #0d1b24, #1a2b33); overflow: hidden;
}
.cover img { width: 100%; height: 100%; object-fit: cover; display: block; }

/* ── 歌單卡（2 欄網格）── */
.grid { display: grid; grid-template-columns: 1fr 1fr; gap: var(--sp-3); padding: 0 var(--gutter) var(--sp-4); }
.pcard { cursor: pointer; transition: transform var(--dur-fast) var(--ease-holo); }
.pcard:hover { transform: translateY(-2px); }
.pcard:active { transform: scale(0.98); }
.pcard .name { font-size: 17px; margin-top: var(--sp-2); }
.pcard .sub { font-size: 13px; color: var(--holo-text-2); }

/* ── 密實列表行 — song-row（1px 髮絲線分隔）── */
.song-row {
  display: flex; align-items: center; gap: var(--sp-3);
  padding: var(--sp-3) var(--gutter);
  border-bottom: 1px solid var(--holo-line); font-size: 15px;
  cursor: pointer; transition: background var(--dur-fast) var(--ease-holo);
}
.song-row:hover { background: var(--holo-surface-3); }
.song-row:active { background: var(--holo-surface-2); }
.song-row .num { width: 22px; color: var(--holo-text-3); font-size: 13px; text-align: right; }
.song-row .body { flex: 1; min-width: 0; }
.song-row .title { color: var(--holo-text); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.song-row .artist { color: var(--holo-text-2); font-size: 13px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.song-row .meta { color: var(--holo-text-2); font-size: 13px; }
.song-row .play { color: var(--holo-blue); cursor: pointer; }

/* ── player now-playing + 進度條 ── */
.now-playing { padding: var(--sp-4); text-align: center; }
.now-playing .art { width: 240px; aspect-ratio: 1; margin: var(--sp-3) auto; border-radius: var(--radius-card); }
.now-playing .track { font-family: var(--font-light); font-weight: 300; font-size: 28px; letter-spacing: var(--tracking-tight); }
.now-playing .artist { color: var(--holo-text-2); font-size: 13px; }
.progress { height: 2px; background: var(--holo-line); margin: var(--sp-4) 0 var(--sp-1); position: relative; }
.progress .fill { height: 100%; background: var(--holo-blue); box-shadow: var(--glow-blue); }
.progress .knob { position: absolute; top: -3px; width: 8px; height: 8px; background: var(--holo-blue); border-radius: var(--radius-pill); }
.times { display: flex; justify-content: space-between; font-size: 12px; color: var(--holo-text-3); }
.controls { display: flex; align-items: center; justify-content: center; gap: var(--sp-6); margin: var(--sp-5) 0; }
.controls .ctl { color: var(--holo-text); cursor: pointer; transition: transform var(--dur-fast) var(--ease-holo); }
.controls .ctl:active { transform: scale(0.9); }
.controls .ctl.on { color: var(--holo-blue); }
.controls .pp {
  width: 56px; height: 56px; display: flex; align-items: center; justify-content: center;
  border: 2px solid var(--holo-blue); border-radius: var(--radius-pill);
  color: var(--holo-blue); cursor: pointer; transition: transform var(--dur-fast) var(--ease-holo);
}
.controls .pp:active { transform: scale(0.92); background: var(--holo-blue-soft); }
.lyrics .line { color: var(--holo-text-3); font-size: 15px; text-align: center; padding: var(--sp-1) 0; }
.lyrics .line.active { color: var(--holo-blue); }
.badge-hires {
  display: inline-block; padding: 3px var(--sp-2); font-size: 10px;
  letter-spacing: var(--tracking-caps); text-transform: uppercase;
  color: var(--holo-blue); border: 1px solid var(--holo-blue); border-radius: var(--radius-xs);
}

/* ── 訂閱方案卡（Holo 方正細框、無填色）── */
.plan { border: 1px solid var(--holo-line); border-radius: var(--radius-card); padding: var(--sp-4); margin: var(--sp-2) var(--gutter); background: var(--holo-surface); }
.plan.featured { border-color: var(--holo-blue); }
.plan.featured .plan-name { color: var(--holo-blue); }
.plan .plan-name { font-size: 17px; font-weight: var(--weight-medium); }
.plan .plan-price { font-family: var(--font-light); font-weight: 300; font-size: 22px; }
.plan .plan-price .per { font-size: 13px; color: var(--holo-text-3); }
.plan .plan-btn {
  margin-top: var(--sp-3); padding: var(--sp-2) var(--sp-4); display: inline-block;
  border: 1px solid var(--holo-line); border-radius: var(--radius-xs); color: var(--holo-text-2);
  cursor: pointer; transition: background var(--dur-fast) var(--ease-holo);
}
.plan.featured .plan-btn { border-color: var(--holo-blue); color: var(--holo-blue); }
.plan .plan-btn:active { background: var(--holo-surface-2); }

/* ── mini-player（常駐，tab-bar 上方）── */
.miniplayer {
  flex: none; height: var(--miniplayer-h);
  display: flex; align-items: center; gap: var(--sp-3);
  padding: 0 var(--sp-3); background: var(--holo-bg);
  border-top: 1px solid var(--holo-line); box-shadow: var(--shadow-mini);
  cursor: pointer; transition: background var(--dur-fast) var(--ease-holo);
}
.miniplayer:hover { background: var(--holo-surface-2); }
.miniplayer .mini-art { width: 40px; height: 40px; flex: none; border-radius: var(--radius-sm); }
.miniplayer .mini-body { flex: 1; min-width: 0; }
.miniplayer .mini-title { font-size: 15px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.miniplayer .mini-artist { font-size: 12px; color: var(--holo-text-2); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.miniplayer .mini-pp {
  flex: none; width: 36px; height: 36px; display: flex; align-items: center; justify-content: center;
  color: var(--holo-blue); cursor: pointer; transition: transform var(--dur-fast) var(--ease-holo);
}
.miniplayer .mini-pp:active { transform: scale(0.9); }

/* ── 底部 tab-bar（4 tab，active 頂部 2px 藍指示線）── */
.tabbar {
  flex: none; height: var(--tabbar-h); display: flex;
  background: var(--holo-bg); border-top: 1px solid var(--holo-line);
  padding-bottom: var(--safe-bottom);
}
.tabbar .tab {
  flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center;
  gap: 2px; font-size: 11px; color: var(--holo-text-3);
  border-top: 2px solid transparent; cursor: pointer;
  transition: color var(--dur-base) var(--ease-holo);
}
.tabbar .tab .ic { font-size: 18px; }
.tabbar .tab:active { color: var(--holo-blue-dim); }
.tabbar .tab.active { color: var(--holo-blue); border-top-color: var(--holo-blue); }

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { transition: none !important; animation: none !important; }
}
\`\`\`
`,"../../.claude/skills/app-cassette-futurism/SKILL.md":`---
name: app-cassette-futurism
description: Use when generating a single-file mobile App screen demo for the 迴聲 Resona 音樂串流 App in Cassette Futurism style. Triggers on Cassette Futurism、卡帶未來主義、卡帶、磁帶、隨身聽、Walkman、卡座、tape deck、reel、捲盤、復古硬體、髮絲紋金屬、brushed metal、LCD、段碼字、seven-segment、旋鈕、knob、VU 表、VU meter、類比音響、analog hardware、塑膠按鍵、physical buttons、retrofuturism、1980s 隨身聽。
user-invocable: true
---

# 卡帶未來主義 — 迴聲 Resona

## Style Philosophy

卡帶未來主義（Cassette Futurism）把整支手機想像成**一台 1980s 隨身聽 × 桌上型卡座的混血硬體**——畫面不是「軟體 UI」，而是一塊**機器面板**。使用者不是在「點選項目」，而是在「操作一台類比音響」：按下凹凸的塑膠按鍵、旋轉刻痕旋鈕、盯著背光 LCD 視窗裡跳動的琥珀段碼字、看著卡帶捲盤緩緩轉動。機身是 gunmetal/charcoal 的金屬殼，表面有細密的髮絲紋（brushed aluminum），四角鎖著十字螺絲，所有資訊都被框在凹陷的 LCD 視窗或印在暖奶油色的紙標籤上。

用在 迴聲 Resona 音樂串流 App，這風格傳達「類比、機械、暖、懷舊未來、可觸控的硬體感」：專輯封面被換成一個**會旋轉的卡帶視窗**，等化器是一排上下跳動的 VU 琥珀燈條，分類 chip 是貼在機身上的彩色標籤貼紙，底部 tab-bar 是機身的一排實體按鍵列（active 鍵亮起琥珀燈）。整個 App 看起來像一台你可以伸手按下去的隨身聽。

本次精修的三條鐵律：

1. **每個可點元素都是「實體零件」，不是扁平色塊**：按鍵必須有 bevel（同時 \`inset\` 頂亮/底暗 + 外 \`drop-shadow\`），**按下時陰影反轉**（外影縮小、inset 變暗）做出「真的被壓下去」的觸感。沒有任何純色無質感的 Material 卡。
2. **所有數字都是 7 段碼 LCD**：時間 9:41、曲目時長、進度 01:12、價格 NT$ 149——一律等寬段碼風（\`tabular-nums\` + 琥珀 \`text-shadow\` 光暈），呈現在深墨綠黑的凹陷 LCD 視窗裡，附 1px 掃描線。標籤文字則用窄體無襯線、**大寫 + 拉開字距**，像機器絲印。
3. **暖琥珀/奶油 on 深機身，WCAG AA 不妥協**：機身深、文字暖。主文字用奶油色 \`#ece6d4\`（on \`#23262b\` 對比 ≈ 10:1）或亮琥珀 \`#ffb12e\`（on LCD 底 \`#14180f\` 對比 ≈ 11:1），全部遠超 AA 4.5:1。teal \`#23d3c4\` 與 REC 紅 \`#ff4438\` 只做點綴強調，不承載長文。

三個視覺辨識特徵：

1. **會旋轉的卡帶視窗**（取代 player 大封面）：一個橫式卡帶外殼，內含**兩個會轉的捲盤**（reel = \`conic-gradient\` 放射輻條 + \`@keyframes spin\`），中央一段磁帶，殼上貼一張**紙標籤**寫專輯名 / 曲名 / A 面。reduced-motion 下捲盤停轉但卡帶構造完整呈現。
2. **VU 表等化器**：player 與 home banner 上放一排上下錯落跳動的琥珀 bar（\`@keyframes\` 各 bar 不同 delay/高度），像真的音量表針在跳。reduced-motion 關閉跳動、定格成靜態柱狀。
3. **髮絲紋金屬機身 + 塑膠實體按鍵 + 凹陷 LCD 視窗 + 旋鈕 + 四角螺絲**：整個 device 是刷紋鋁面板，tab-bar 是底部一排實體按鍵，進度/音量做成實體推桿或旋鈕，到處點綴十字螺絲與絲印標籤。

---

## Design Tokens (CSS variables)

\`\`\`css
:root {
  /* ── 手機殼尺寸（必含、鎖死，無跑版的根本） ── */
  --screen-w: 390px;
  --screen-h: 844px;
  --statusbar-h: 44px;
  --tabbar-h: 64px;             /* 實體按鍵列本體（比一般高，要容得下立體鍵） */
  --miniplayer-h: 58px;         /* 迷你卡座播放列高度 */
  --safe-bottom: 30px;          /* home indicator 安全區 */
  --content-pad: 18px;
  --device-radius: 30px;        /* 機身圓角偏方，硬體感（非 46px 軟圓） */

  /* ── 8pt 間距尺度（所有 margin/padding/gap 只能取這些值） ── */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;

  /* ── 機身金屬色（gunmetal / charcoal） ── */
  --case-1: #23262b;            /* 機身主面 */
  --case-2: #1a1c20;            /* 機身深處 / 凹槽 */
  --case-3: #2c3036;            /* 機身亮面 / 凸起按鍵頂 */
  --case-edge-hi: #3a3f47;      /* 機身斜面高光 */
  --case-edge-lo: #101216;      /* 機身斜面陰影 */

  /* ── 刷紋鋁銀（髮絲紋面板用，pattern） ── */
  --brush-a: #d8dadd;
  --brush-b: #aeb2b7;
  --brush-deep-a: #5b6068;      /* 深色髮絲紋（深機身上的金屬條） */
  --brush-deep-b: #41454c;

  /* ── LCD 凹窗：深墨綠黑底 + 琥珀段碼 ── */
  --lcd-bg: #14180f;            /* 深墨綠黑 */
  --lcd-bg-2: #0d1009;          /* LCD 更深處 */
  --lcd-amber: #ffb12e;         /* 琥珀段碼字（主） */
  --lcd-amber-dim: #7a5418;     /* 熄滅段碼（段碼字底層暗字，營造液晶感） */
  --lcd-scanline: rgba(0, 0, 0, 0.22);  /* 1px 掃描線 */
  --lcd-glow: rgba(255, 177, 46, 0.55);  /* 琥珀光暈 text-shadow */

  /* ── 文字（暖奶油 / 琥珀 on 深機身，WCAG AA） ── */
  --text-1: #ece6d4;            /* 主文字：暖奶油，on case ≈ 10:1 */
  --text-2: #b7b2a2;            /* 次文字：暗奶油，on case ≈ 5.6:1（達 AA） */
  --text-3: #8a8675;           /* 弱文字：僅用於 ≥17px 大字或非關鍵裝飾，on case ≈ 3.4:1 */
  --label-ink: #6f6a5c;        /* 絲印標籤暗刻字（用在亮銀面板上，on 銀 ≈ 4.7:1） */
  --label-ink-strong: #2a2823; /* 紙標籤上手寫/印刷字（on 奶油標籤 ≈ 9:1） */

  /* ── 強調色 ── */
  --teal: #23d3c4;             /* teal 強調：active 燈、進度 fill、play 環 */
  --teal-dim: #14756d;         /* teal 熄滅態 */
  --rec: #ff4438;              /* REC / 錄音 / active 紅點 / 心跳 */
  --cream-label: #ece6d4;      /* 暖奶油紙標籤底色 */
  --sticker-1: #ff7a3d;        /* 標籤貼紙：橘 */
  --sticker-2: #23d3c4;        /* 標籤貼紙：teal */
  --sticker-3: #ffb12e;        /* 標籤貼紙：琥珀 */
  --sticker-4: #c46cff;        /* 標籤貼紙：紫 */

  /* ── 圓角（整體偏方，硬體感） ── */
  --radius-panel: 12px;        /* 面板 / 卡片 */
  --radius-panel-sm: 8px;
  --radius-lcd: 6px;           /* LCD 視窗（很方） */
  --radius-key: 10px;          /* 塑膠按鍵 */
  --radius-knob: 50%;          /* 旋鈕 */
  --radius-sticker: 4px;       /* 標籤貼紙（幾乎直角） */
  --radius-pill: 999px;        /* 推桿軌 */

  /* ── 材質陰影配方（核心） ── */
  /* 塑膠按鍵 bevel：外凸 = 頂亮 inset + 底暗 inset + 外 drop */
  --bevel-up:
    inset 0 1px 0 rgba(255, 255, 255, 0.18),
    inset 0 -2px 3px rgba(0, 0, 0, 0.55),
    0 3px 5px rgba(0, 0, 0, 0.45),
    0 1px 0 rgba(0, 0, 0, 0.6);
  /* 按下時：外影縮小、inset 反轉變凹 */
  --bevel-down:
    inset 0 2px 4px rgba(0, 0, 0, 0.6),
    inset 0 -1px 0 rgba(255, 255, 255, 0.08),
    0 1px 1px rgba(0, 0, 0, 0.4);
  /* 凹陷 LCD 視窗：內凹陰影 */
  --inset-window:
    inset 0 2px 5px rgba(0, 0, 0, 0.85),
    inset 0 -1px 0 rgba(255, 255, 255, 0.05);
  /* 面板凹槽（裝按鍵的機身溝） */
  --inset-trough:
    inset 0 2px 4px rgba(0, 0, 0, 0.55),
    inset 0 -1px 0 rgba(255, 255, 255, 0.06);
  /* 髮絲紋面板細高光 */
  --metal-hi: inset 0 1px 0 rgba(255, 255, 255, 0.25);
  --shadow-float: 0 18px 50px rgba(0, 0, 0, 0.55);

  /* ── 字體 ── */
  /* 標籤：窄體無襯線，絲印感 */
  --font-label: 'Helvetica Neue', 'Arial Narrow', 'PingFang TC', system-ui, sans-serif;
  --font-ui: 'PingFang TC', 'Noto Sans TC', system-ui, -apple-system, sans-serif;
  /* 段碼數字：等寬 */
  --font-lcd: 'DSEG7', 'Courier New', ui-monospace, 'SF Mono', Menlo, monospace;

  /* ── 動效 ── */
  --ease: cubic-bezier(0.34, 0.02, 0.2, 1);   /* 機械頓挫感 */
  --dur-fast: 90ms;
  --dur: 180ms;
  --spin-dur: 4s;              /* 卡帶捲盤一圈 */
}
\`\`\`

---

## Typography Scale

| 級距 | 大小 / 行高 / 字重 / 字距 | 字體 | 顏色 | 用途 |
| --- | --- | --- | --- | --- |
| stencil-cap | 10px / 1.2 / 700 / +1.6px **UPPERCASE** | \`--font-label\` | \`--label-ink\` / \`--text-3\` | 機身絲印小標（如「SIDE A」「DECK」「EQ」）、面板註記 |
| label | 12px / 1.4 / 600 / +0.4px | \`--font-label\` | \`--text-2\` | chip 標籤、卡片副標、藝人名、tab 文字 |
| body | 14px / 1.55 / 400 / 0 | \`--font-ui\` | \`--text-2\` | 段落、方案權益、功能說明 |
| row-title | 16px / 1.35 / 600 / +0.2px | \`--font-ui\` | \`--text-1\` | 歌名、歌單卡標題、列項主文字、迷你播放列歌名 |
| section | 19px / 1.25 / 700 / +0.8px **UPPERCASE 風** | \`--font-label\` | \`--text-1\` | 各屏區塊標題（如「每日迴聲」「我的音樂庫」） |
| display | 26px / 1.1 / 800 / +0.6px | \`--font-label\` | \`--text-1\` | home 品牌大標、紙標籤專輯名 |
| lcd-sm | 13px / 1 / 400 / +1px | \`--font-lcd\` | \`--lcd-amber\` | LCD 內小段碼（時長、進度、播放次數、價格數字） |
| lcd-lg | 22px / 1 / 400 / +2px | \`--font-lcd\` | \`--lcd-amber\` | status-bar 時間 9:41、player 大計時器 |

- **所有數字一律段碼**：時間、時長、進度、價格 NT$、播放次數，全用 \`--font-lcd\` + \`font-variant-numeric: tabular-nums\` + 琥珀 \`text-shadow: 0 0 6px var(--lcd-glow)\`，並放在 LCD 凹窗底（\`--lcd-bg\` + \`--inset-window\` + 1px 掃描線）。
- **所有機身絲印標籤一律大寫 + 拉開字距**（\`text-transform: uppercase; letter-spacing\`），呈現雷射蝕刻 / 絲網印刷感。中文標題用 \`--font-label\`（窄體）配 \`+0.6~0.8px\` 字距，營造機器面板的工業氣質。
- 段碼 LCD 字可選疊一層 \`--lcd-amber-dim\` 的「熄滅段碼」假背景（如 \`888\` 暗影）以加強液晶真實感（裝飾用，不影響可讀）。
- 標題與正文間固定 \`--space-3\` 縱距；區段之間固定 \`--space-6\`。

---

## Component & Layout

整體結構：最外層 \`.device\`（390×844 髮絲紋金屬機身，\`overflow:hidden\`、\`border-radius: --device-radius\`，四角放 \`.screw\` 十字螺絲）→ \`.statusbar\`（固定頂，做成一條深色 LCD 計時條，\`z-index:5\`）→ \`.viewport\`（中間可捲動畫面容器，\`z-index:1\`，依序堆 home/search/detail/player/library/profile 六個 \`data-screen\`，每次只顯示一個）→ \`.miniplayer\`（貼在 tab-bar 上方的常駐迷你卡座播放列，\`z-index:4\`）→ \`.tabbar\`（固定底，做成一排機身實體按鍵，\`z-index:5\`）。最外層 \`body\` 用 \`display:grid; place-items:center; padding:0\`（**不可加會撐破 390×844 的 padding**，否則 device 被往下推、player 底部控制列在 844 視窗外被裁切）。

\`.device\` 本體背景 = 深機身 \`--case-1\` + **髮絲紋 pattern**（\`repeating-linear-gradient(90deg, var(--brush-deep-a), var(--brush-deep-b) 1px, var(--brush-deep-a) 2px)\` 疊極低 opacity）+ 邊緣斜面高光 / 陰影，讓整支手機像一塊金屬殼。亮銀面板（如 player 的卡座框）才用 \`--brush-a/--brush-b\` 的亮髮絲紋。

8 個 \`<section data-screen>\` 順序固定且各恰一次：\`status-bar\` → \`home\` → \`search\` → \`detail\` → \`player\` → \`library\` → \`profile\` → \`tab-bar\`。

### 跨畫面導覽模型（無跑版的骨架）

- 用一個簡單的 class 切換：\`.screen\` 預設 \`display:none\`，**只有** \`.screen.is-active\` 顯示（\`display:flex; flex-direction:column\`）。**嚴禁**任何「畫面專屬 class」無條件設 \`display\`——那會讓畫面永遠疊著。畫面專屬樣式只能設 padding/排版。
- 可導覽元素加 \`data-go="<target>"\`：歌單卡 / 收藏列 / 專輯 \`data-go="detail"\`；曲目列 / 迷你播放列 / 任一播放鍵 \`data-go="player"\`；返回鍵 \`data-go="back"\`。JS 以事件委派處理 click。
- 導覽行為全部接好：tab → 切 home/search/library/profile；home 歌單卡 / detail 曲目 → 開 detail；迷你播放列 / detail 播放鍵 / 任一曲目播放鍵 → 開 player；detail / player 返回鍵 → 回上一畫面。
- **JS 失效時** home 為預設 \`is-active\`，仍可讀完整內容。
- **裝置容器三段式鎖定**：status-bar 永遠在頂、tab-bar（含其上方 miniplayer）永遠在底、中間 \`.viewport\` 為當前畫面唯一可捲動區。\`.viewport\` 高度 = \`calc(--screen-h - --statusbar-h)\`，下緣由 dock（miniplayer+tabbar）佔位；每個 \`.screen\` 內部各自 \`overflow-y:auto\`，底部 padding 預留迷你播放列高度，內容絕不被遮擋、不溢出、不被裁切。

### status-bar（\`data-screen="status-bar"\`）

- 高 \`--statusbar-h\`，做成一條橫貫機身頂部的**深色 LCD 計時條**（\`--lcd-bg\` 底 + \`--inset-window\` 凹陷 + 1px 掃描線）。
- 左側時間 **9:41** 用 \`lcd-lg\` 琥珀段碼（tabular-nums + 琥珀光暈），右側並排訊號格 / Wi-Fi / 電量符號——全部用**琥珀段碼/小燈條**風純 CSS 繪製（訊號 = 遞增高度的小琥珀條、電量 = 一個有刻度的小電池框），不用圖檔。
- 固定於機身頂、不隨內容捲動、永遠在最上層。可在左角點綴一個 \`stencil-cap\` 絲印「RESONA DECK」字樣。

### home（\`data-screen="home"\`）

至少三區段，每區段有 section 標題列（左 \`section\` 大寫風標題 + 右「查看全部」絲印小連結，cursor:pointer + hover）：

1. **頂部問候列**：左側品牌大標「**迴聲 Resona**」（display 絲印風）+ slogan「讓每首歌，回到你身上」；右側一個**旋鈕造型頭像**（\`conic-gradient\` 刻痕 + 中心高光）。下方一個橫排 LCD 小窗顯示日期/問候段碼字（裝飾）。
2. **每日迴聲（個人化每日推薦 banner）**：一張橫幅機身面板（凹槽 \`--inset-trough\`），左一個小卡帶圖示 + LCD 視窗寫「每日迴聲」與「**個人化每日推薦**」文案 + 一排 **VU 表等化器**（琥珀跳動 bar）+ 右側一顆**實體圓形播放鍵**（▶ bevel 凸鍵，teal 環）。露出「**無損音質串流**」絲印徽章。
3. **為你精選歌單**：section 標題「為你精選歌單」+「查看全部」。**7 個歌單卡**兩欄網格（浪潮回聲 / 深夜公路 / 島嶼晨光 / 雨後散步 / 城市心跳 / 山海之間 / 失重時刻），每卡 = 一個**迷你卡帶造型封面**（\`.cassette-mini\`：橫式殼 + 兩個小捲盤孔 + 一張不同色 \`--sticker-*\` 的紙標籤寫歌單名）+ 下方 LCD 小窗寫曲數。
4. **熱門排行**：section 標題「熱門排行」+「查看全部」，編號清單（1–5），每列 = 段碼排名數字（LCD 小窗）+ 小卡帶縮圖 + 歌名 + 藝人 + 段碼時長 + 實體小播放鍵。
5. **4 分類 chip 標籤貼紙橫排**（華語 / 獨立 / 電子 / 放鬆）置於問候列下方，做成**貼在機身上的彩色標籤貼紙**（不同 \`--sticker-*\` 底、\`--radius-sticker\` 近直角、微旋轉 \`rotate(-1deg)\`、\`--label-ink-strong\` 印刷字），首個 active（亮起 + 微抬起陰影）。

### search（\`data-screen="search"\`）

- 頂部**凹陷 LCD 搜尋框**（\`--lcd-bg\` + \`--inset-window\` + 1px 掃描線 + 左側放大鏡符號 + 琥珀 placeholder「搜尋歌曲、藝人、歌單」+ 右側一個閃爍游標豎線）。
- 下方 4 分類 chip（華語 / 獨立 / 電子 / 放鬆）標籤貼紙。
- **熱門歌曲**：section 標題，**編號清單**（含段碼時長）——海平面樂團〈藍色信號〉、林知夏〈晚風練習曲〉、夜行列車〈霓虹巷弄〉、Echo Lab〈靜電〉、何遠〈無人車站〉……每列 = LCD 序號 + 小卡帶縮圖 + 歌名 + 藝人 + 段碼時長 + 實體小播放鍵（點擊 → player）。
- **熱門藝人**：section 標題 + 橫向膠囊（旋鈕造型圓頭像 + 藝人名）：海平面樂團 / 林知夏 / 夜行列車 / Echo Lab / 何遠。

### detail（\`data-screen="detail"\`）

- 左上**實體圓形返回鍵**（‹ bevel 凸鍵，cursor:pointer + hover/active 反轉陰影）。
- **大卡帶封面**：頂部一個大張**卡帶造型封面**（\`.cassette\`：橫式金屬殼 + 兩個捲盤孔 + 一張暖奶油紙標籤印「島嶼晨光」+「SIDE A」絲印 + 角落十字螺絲）。色相用 \`--sticker-*\` 區分。
- 資訊區（紙標籤風）：專輯名 **島嶼晨光** / 藝人 **林知夏** / 年份 LCD **2026** / **9 首** / 總時長 LCD **34:12**。
- 動作列：**播放全部**（teal 大實體凸鍵 ▶）+ **隨機播放**（金屬次鍵 bevel）。
- **完整 9 曲目清單**（藍色信號 / 霓虹巷弄 / 候鳥地圖 / 靜電 / 晚風練習曲 / 無人車站 / 潮間帶 / 第七個夏天 / 月台九又四分之三），每列 \`.song-row\`（機身凹槽分隔）：LCD 曲序 + 歌名 + 藝人（林知夏）+ 段碼時長 + 行尾實體小播放鍵 / 選單（⋯）。點任一曲 → player。

### player（\`data-screen="player"\`）

覆蓋全屏的 now-playing 卡座面板，**進入時隱藏底部 dock（tab-bar + miniplayer）**，整個 player 用 \`height:100%; display:flex; flex-direction:column\`，讓控制列/進度/徽章永遠固定在 844 內可見、不靠捲動、不被遮擋：

- 左上**實體返回鍵**（⌄ 收合 bevel 凸鍵，\`data-go="back"\` 回上一畫面）。頂部一條 \`stencil-cap\` 絲印「NOW PLAYING ／ DECK A」。
- **會旋轉的卡帶視窗**（核心 signature，\`flex:1; min-height:0\` 可壓縮）：置中一個亮銀髮絲紋卡座框，內嵌一個**橫式卡帶**——左右**兩個會轉的捲盤**（reel = \`conic-gradient\` 放射輻條 + 中心齒孔高光 + \`@keyframes spin\`，左盤帶較滿、右盤較空示意進度）+ 中央一段磁帶連接 + 殼上一張暖奶油紙標籤印「島嶼晨光 ／ A 面」。
- 正在播放（紙標籤 / LCD）：**林知夏 —〈晚風練習曲〉**，副字專輯「島嶼晨光」。旁邊一排 **VU 表等化器**琥珀跳動 bar。
- **歌詞同步**：一行逐字高亮示意（高亮字 \`--lcd-amber\`，其餘 \`--text-3\`），呼應「歌詞同步」功能。
- 進度：做成**實體推桿軌**（\`.fader\`：凹槽軌 + teal fill + 一個可見推桿握把），左 LCD **01:12** / 右 LCD **03:24**（段碼 tabular-nums）。
- 控制列：隨機（⤮）/ 上一首（⏮）/ **播放暫停大實體圓鍵（▶ / ⏸ 兩態，teal 環凸鍵）** / 下一首（⏭）/ 循環（⟳），全部 bevel 凸鍵、按下反轉。隨機與循環 active 時亮 teal 燈。
- 底部固定區：**Hi-Res 無損音質**絲印徽章 + **音量旋鈕**（\`.knob\`：conic 刻痕 + 指示點 + 中心高光，純裝飾可旋轉示意）。

### library（\`data-screen="library"\`）

- 「**我的音樂庫**」標題（section 絲印風）。
- 分頁列做成**機身上的三顆實體按鍵**（segmented 風）：**歌單 / 專輯 / 已下載**，首個 active（按下態 + 亮 teal 燈）。
- **收藏歌單清單**：每列 = 迷你卡帶縮圖 + 標題（複用歌單名）+ LCD 曲數 + 行尾箭頭，機身凹槽分隔，點擊 → detail。
- **離線下載**功能列：機身列 + 已下載狀態 LCD 徽章（呼應「離線下載」）。
- **共享音樂庫**功能列：機身列 + **實體撥桿開關 toggle**（\`.switch\`：金屬撥桿在凹槽內，on 亮 teal 燈、off 暗）——呼應「共享音樂庫」。

### profile（\`data-screen="profile"\`）

- **使用者卡**：旋鈕造型頭像 + 暱稱 + 會員狀態行（機身面板 + LCD 小窗顯示帳號狀態）。
- **播放偏好**列表：音質、等化器、**跨裝置接續播放**（實體撥桿開關 toggle，預設 on 亮 teal）——呼應「跨裝置接續播放」。
- **3 訂閱方案卡**（機身面板堆疊）：
  - **免費** — LCD \`NT$ 0\` ／月 — 標「目前方案」（絲印標籤）。權益：含廣告插播、標準音質。
  - **Plus** — LCD \`NT$ 149\` ／月 — 標「推薦」，強調面板（亮銀髮絲紋框 + teal 邊光 + 角落「REC」風紅標）。權益：無廣告、**離線下載**、無損音質。
  - **Family** — LCD \`NT$ 249\` ／月。權益：6 帳號、**共享音樂庫**、家長控制。
  - 每卡含 2–3 條權益小字。價格用 LCD 段碼 + tabular-nums、\`NT$\` 與數字間一個半形空格、後綴全形「／月」。

### mini-player（迷你卡座播放列，常駐）

- 一條貼在 tab-bar **正上方**的迷你卡座機身條（\`--case-3\` 凸面 + \`--metal-hi\`），高 \`--miniplayer-h\`。
- 內容：左一個**會轉的迷你雙捲盤**（小 reel + spin）+ 歌名「晚風練習曲」+ 藝人「林知夏」+ 右側**實體播放/暫停鍵（▶ / ⏸ bevel）**。
- 顯示於 **home / search / library / profile**；**player 畫面隱藏**（\`.is-player .miniplayer { display:none }\`，與 tab-bar 一起構成被隱藏的 dock）。
- 整條 cursor:pointer，點擊（播放鍵以外區域）展開到 player；點播放鍵切換 ▶/⏸ 兩態。
- 底部含一條極細**進度推桿線**（凹軌 + teal fill，與 player 同步示意）。

### tab-bar（\`data-screen="tab-bar"\`）

- 固定底部做成**機身底部一排實體按鍵列**（深機身 \`--case-2\` 底 + 上緣 \`--metal-hi\` 細高光 + \`--inset-trough\` 容鍵凹槽），4 鍵：**首頁 / 搜尋 / 音樂庫 / 我的**，各 = unicode/CSS icon（線稿風）+ \`label\` 絲印文字。
- 每鍵是 bevel 凸塑膠鍵，cursor:pointer + hover 微亮 + active 反轉陰影。**active tab 亮起一顆琥珀/teal 指示燈**（鍵上方一個小發光點）+ icon/文字提亮。
- 預留 \`--safe-bottom\` 安全區。tab-bar 與其上的 miniplayer 一起構成「永遠在底」的固定 dock（player 屏隱藏）。

### 封面繪製規範（重要）

**所有專輯 / 歌單 / 頭像 / 排名封面一律純 CSS**——專輯/歌單用**卡帶造型**（金屬殼 \`linear/repeating-linear-gradient\` 髮絲紋 + 兩個捲盤孔 \`radial-gradient\` + 紙標籤色塊 + 不同 \`--sticker-*\` 區分色相）；頭像用**旋鈕造型**（\`conic-gradient\` 刻痕 + 中心高光）。**不得引用任何 \`assets/*.webp\` 圖檔，不得出現指向圖檔的 \`<img>\`。**

---

## Do / Don't

| Do | Don't |
| --- | --- |
| 按鍵用 bevel（inset 頂亮/底暗 + 外 drop-shadow），按下反轉成凹陷 | 用扁平純色色塊當按鍵（失去硬體感） |
| 機身鋪髮絲紋 \`repeating-linear-gradient\` + 邊緣斜面高光/陰影 | 純色平面機身（看不出金屬刷紋） |
| 所有數字用 LCD 段碼字（\`--font-lcd\` + 琥珀光暈 + 凹窗 + 掃描線） | 用一般比例字寫時間/時長/價格 |
| 封面做成卡帶造型（殼 + 雙捲盤 + 紙標籤），頭像做成旋鈕 | 用方形漸層或圓角矩形當封面 |
| chip 做成貼在機身上的彩色標籤貼紙（近直角 + 微旋轉） | 用一般膠囊 chip |
| 進度/音量做成實體推桿或旋鈕（凹軌 + 握把 / 刻痕） | 用細線進度條無握把 |
| player 用會旋轉的卡帶視窗 + VU 表等化器 | player 用一般大方形封面 |
| 文字用暖奶油/琥珀 on 深機身，確保 ≥ AA | 用低對比深灰文字在深機身上 |
| 四角點綴十字螺絲、機身絲印大寫小標 | 乾淨無細節的純面板 |
| 所有可點元素 cursor:pointer + hover + active 反轉陰影 | 元件無 hover/active 態 |
| 間距只取 8pt 尺度（4/8/12/16/20/24/32） | 隨手寫 7px / 13px / 19px |

**整體禁忌**：扁平 Material 卡、純色無質感、玻璃 / \`backdrop-filter\` 毛玻璃、霓虹發光氾濫、emoji 裝飾。這是**硬體**，不是軟體卡片。

---

## Motion Specification

- **卡帶捲盤旋轉**：player 大卡帶與迷你播放列雙捲盤用 \`@keyframes spin { to { transform: rotate(360deg); } }\`，\`animation: spin var(--spin-dur) linear infinite\`，只動 \`transform: rotate\`。播放時轉、暫停時可由 JS 加 \`paused\` class 暫停（\`animation-play-state: paused\`）。
- **VU 表等化器**：每根 bar 各自 \`@keyframes vu\` 在不同 \`scaleY\` 間跳動（\`transform-origin: bottom\`），各 bar 不同 \`animation-delay\` / \`animation-duration\`（0.5–1.1s）做出錯落跳動，只動 \`transform: scaleY\`。
- **LCD 掃描線**：用靜態 \`repeating-linear-gradient\` 即可（不需動畫）；游標 \`|\` 可選 1s \`@keyframes blink\` 透明度閃爍。
- **microinteractions**：
  - 實體按鍵 \`transition: box-shadow var(--dur-fast), transform var(--dur-fast);\`，\`:active\` 切到 \`--bevel-down\` + \`transform: translateY(1px)\`（壓下去）。
  - 標籤貼紙 chip \`:active\` 微壓；active 態抬起（強化 drop-shadow）。
  - 播放鍵點擊在 ▶ / ⏸ 兩態間切換（JS 改 textContent + class），同時切捲盤 \`animation-play-state\`。
  - 撥桿開關 toggle 切換時握把 \`transform: translateX\` 滑動 + 指示燈亮滅。
- 動畫屬性限定 \`transform\` / \`opacity\`（捲盤 rotate、VU scaleY、按壓 translateY、開關 translateX）；進度/音量 fill 的 \`width\` 屬靜態示意可接受但不放在捲動熱路徑。
- 不使用任何外部動畫庫。

## Accessibility (Reduced Motion)

\`\`\`css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation: none !important;
    transition: none !important;
    scroll-behavior: auto !important;
  }
  /* 捲盤定格、VU 表定格成靜態柱狀、游標停止閃爍——硬體構造仍完整呈現 */
  .reel { transform: none; }
  .vu-bar { transform: scaleY(0.6); }
}
\`\`\`

- 卡帶捲盤旋轉、VU 跳動、LCD 游標閃爍、按壓位移在 reduced motion 下全部停用；卡帶 / VU / LCD 仍以靜態形態完整呈現（看得出捲盤、看得出柱狀表、段碼字清楚）。
- 內容（所有歌名/藝人/價格/功能名）在 JS 失效或 reduced motion 下仍完整可讀。
- 文字維持 WCAG AA：主文字暖奶油 \`--text-1\`（on case ≈ 10:1）、LCD 琥珀（on lcd-bg ≈ 11:1）、次文字 \`--text-2\`（≈ 5.6:1）；\`--text-3\` 只用於 ≥17px 大字或純裝飾。

---

## Required Output Contract

遵循 \`.claude/agents/style-page-builder.md\` 的「**App 風格額外要求**」：

- **8 個 \`<section data-screen="<id>">\`**，固定 id 與順序：\`status-bar\` → \`home\` → \`search\` → \`detail\` → \`player\` → \`library\` → \`profile\` → \`tab-bar\`，各恰一次。常見漏洞：只寫 \`id=\` 漏寫 \`data-screen=\`，務必兩者都加。
- **\`<body data-viewport="mobile">\`** 必須存在（驗證辨識依據）。
- **status-bar 顯示 9:41**（LCD 段碼 + tabular-nums，可見文字）。
- **tab-bar 四 tab**：可見文字「首頁 / 搜尋 / 音樂庫 / 我的」做成實體按鍵列，active 態明確（指示燈 + 提亮）。
- **迷你卡座播放列**常駐於 home/search/library/profile、player 畫面隱藏；點擊展開 player、播放鍵 ▶/⏸ 兩態、雙捲盤旋轉。
- **player 為覆蓋全屏 now-playing**：進入時隱藏底部 dock（tab-bar + miniplayer）；整個 player \`height:100%; display:flex; flex-direction:column\`，卡帶視窗 \`flex:1; min-height:0\`，**控制列 / 進度推桿 / 徽章 / 音量旋鈕永遠固定在 844 內可見、不靠捲動、不被遮擋、不超出**；返回時恢復 dock。
- **三層訂閱方案精確字串**同屏出現於 profile：\`免費\` / \`NT$ 0 ／月\`、\`Plus\` / \`NT$ 149 ／月\`、\`Family\` / \`NT$ 249 ／月\`（\`NT$\` 與數字間一個半形空格、後綴全形「／月」，數字用 LCD 段碼），並標「推薦」與「目前方案」。
- **可互動多畫面導覽**：tab 切換 + 卡片→detail + 曲目/迷你播放列→player + detail/player 返回鍵，全部接好；用 \`data-go\` 委派 click；JS 失效時 home 預設可見。
- **權威字串全在可見 body 文字**（不可只放 \`aria-label\` / \`data-*\`）：品牌「迴聲 / Resona」、6 核心功能（個人化每日推薦 / 無損音質串流 / 離線下載 / 歌詞同步 / 跨裝置接續播放 / 共享音樂庫）、7 歌單（浪潮回聲 / 深夜公路 / 島嶼晨光 / 雨後散步 / 城市心跳 / 山海之間 / 失重時刻）、9 歌名（藍色信號 / 霓虹巷弄 / 候鳥地圖 / 靜電 / 晚風練習曲 / 無人車站 / 潮間帶 / 第七個夏天 / 月台九又四分之三）、5 藝人（海平面樂團 / 林知夏 / 夜行列車 / Echo Lab / 何遠）、4 分類 chip（華語 / 獨立 / 電子 / 放鬆）、正在播放「林知夏 —〈晚風練習曲〉」。
- **畫面切換 CSS 鐵律**：\`.screen { display:none }\`，只有 \`.screen.is-active\` 設 display；嚴禁畫面專屬 class 無條件設 display。
- **無跑版**：機身鎖 390×844、status-bar 永遠在頂、tab-bar（含 miniplayer）永遠在底、中間為當前畫面可捲動區、內容不被遮擋、文字不溢出/不被裁切、padding 充足。
- **單檔 HTML ≤ 200 KB**；**無外部 CDN**（\`<link>\` / \`<script>\` / \`<img>\` 的 src/href 不可 \`http://\` 或 \`https://\`，不得引用 Google Fonts；段碼字體 fallback 到等寬系統字即可）；繁體中文；CSS 變數驅動、不得用 Tailwind 等 framework CSS。inline \`<script>\` ≤ 8 KB。

## Required Images

**此風格不使用任何點陣圖。** \`assets-manifest.json\` 為 \`{ "style": "卡帶未來主義 Cassette Futurism", "images": [] }\`。所有封面（卡帶造型）、頭像（旋鈕造型）、捲盤、VU 表、LCD 視窗、旋鈕、按鍵、螺絲、髮絲紋面板一律純 CSS（\`linear-gradient\` / \`radial-gradient\` / \`conic-gradient\` / \`repeating-linear-gradient\` / box-shadow / 幾何形 / \`@keyframes\`）繪製，**頁面不得引用任何圖檔**、不得出現指向 \`assets/\` 的 \`<img>\`。

---

## Reference Snippet

\`\`\`css
/* ── 手機殼：髮絲紋金屬機身 ── */
.device {
  position: relative;
  width: var(--screen-w);
  height: var(--screen-h);
  margin: 0 auto;
  overflow: hidden;
  border-radius: var(--device-radius);
  font-family: var(--font-ui);
  color: var(--text-1);
  display: flex;
  flex-direction: column;
  background:
    repeating-linear-gradient(90deg,
      var(--brush-deep-a) 0, var(--brush-deep-b) 1px, var(--brush-deep-a) 2px),
    linear-gradient(180deg, var(--case-3), var(--case-1) 12%, var(--case-1) 88%, var(--case-2));
  box-shadow:
    inset 0 1px 0 var(--case-edge-hi),
    inset 0 -2px 0 var(--case-edge-lo),
    inset 1px 0 0 rgba(255,255,255,0.05),
    var(--shadow-float);
}
/* 四角十字螺絲裝飾 */
.screw {
  position: absolute; width: 14px; height: 14px; border-radius: 50%;
  background: radial-gradient(circle at 35% 30%, #4a4f57, #1a1c20 70%);
  box-shadow: inset 0 1px 1px rgba(255,255,255,0.25), 0 1px 1px rgba(0,0,0,0.5);
}
.screw::before, .screw::after { /* 十字槽 */
  content: ""; position: absolute; inset: 0; margin: auto;
  background: rgba(0,0,0,0.55);
}
.screw::before { width: 9px; height: 1.5px; top: 0; bottom: 0; left: 0; right: 0; }
.screw::after  { width: 1.5px; height: 9px; top: 0; bottom: 0; left: 0; right: 0; }
.screw.tl { top: 8px; left: 8px; } .screw.tr { top: 8px; right: 8px; }
.screw.bl { bottom: 8px; left: 8px; } .screw.br { bottom: 8px; right: 8px; }

/* ── 亮銀髮絲紋面板（player 卡座框等） ── */
.metal-panel {
  background:
    repeating-linear-gradient(90deg, var(--brush-a) 0, var(--brush-b) 1px, var(--brush-a) 2px);
  border-radius: var(--radius-panel);
  box-shadow: var(--metal-hi), 0 2px 4px rgba(0,0,0,0.4);
}

/* ── 凹陷 LCD 視窗 + 琥珀段碼 + 掃描線 ── */
.lcd {
  position: relative;
  background:
    repeating-linear-gradient(0deg, transparent 0, transparent 2px, var(--lcd-scanline) 3px),
    linear-gradient(180deg, var(--lcd-bg), var(--lcd-bg-2));
  border-radius: var(--radius-lcd);
  box-shadow: var(--inset-window);
  padding: var(--space-1) var(--space-2);
}
.lcd .digits {
  font-family: var(--font-lcd);
  font-variant-numeric: tabular-nums;
  letter-spacing: 1.5px;
  color: var(--lcd-amber);
  text-shadow: 0 0 6px var(--lcd-glow);
}

/* ── 塑膠實體按鍵（bevel，按下反轉） ── */
.key {
  font-family: var(--font-label);
  text-transform: uppercase; letter-spacing: 0.6px;
  color: var(--text-1);
  background: linear-gradient(180deg, var(--case-3), var(--case-1));
  border: 1px solid var(--case-edge-lo);
  border-radius: var(--radius-key);
  box-shadow: var(--bevel-up);
  cursor: pointer;
  transition: box-shadow var(--dur-fast) var(--ease), transform var(--dur-fast) var(--ease);
}
.key:hover  { background: linear-gradient(180deg, #33373e, var(--case-1)); }
.key:active { box-shadow: var(--bevel-down); transform: translateY(1px); }

/* play 大圓鍵：teal 環凸鍵 */
.play-key {
  width: 60px; height: 60px; border-radius: 50%;
  display: grid; place-items: center; color: var(--teal);
  background: radial-gradient(circle at 38% 32%, var(--case-3), var(--case-1) 75%);
  border: 2px solid var(--teal-dim);
  box-shadow: var(--bevel-up), 0 0 10px rgba(35,211,196,0.25);
}
.play-key:active { box-shadow: var(--bevel-down); transform: translateY(1px); }

/* ── 卡帶造型封面（殼 + 雙捲盤 + 紙標籤） ── */
.cassette {
  position: relative; aspect-ratio: 8 / 5; border-radius: var(--radius-panel);
  background:
    repeating-linear-gradient(90deg, #34373d 0, #2a2d33 1px, #34373d 2px),
    linear-gradient(180deg, #3a3e45, #23262b);
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.12), 0 3px 8px rgba(0,0,0,0.5);
  overflow: hidden;
}
.cassette .label { /* 暖奶油紙標籤 */
  position: absolute; left: 8%; right: 8%; top: 10%; height: 38%;
  background: linear-gradient(180deg, #f3eedd, var(--cream-label));
  border-radius: var(--radius-sticker);
  color: var(--label-ink-strong); font-family: var(--font-label);
  text-transform: uppercase; letter-spacing: 0.6px;
  box-shadow: inset 0 0 0 1px rgba(0,0,0,0.08);
}
.cassette .reel { /* 捲盤：放射輻條 + 齒孔 */
  position: absolute; bottom: 12%; width: 26%; aspect-ratio: 1; border-radius: 50%;
  background:
    radial-gradient(circle at 50% 50%, #14180f 22%, transparent 23%),
    conic-gradient(#5b6068 0 8deg, #2a2d33 8deg 45deg,
                   #5b6068 45deg 53deg, #2a2d33 53deg 90deg,
                   #5b6068 90deg 98deg, #2a2d33 98deg 135deg,
                   #5b6068 135deg 143deg, #2a2d33 143deg 180deg,
                   #5b6068 180deg 188deg, #2a2d33 188deg 225deg,
                   #5b6068 225deg 233deg, #2a2d33 233deg 270deg,
                   #5b6068 270deg 278deg, #2a2d33 278deg 315deg,
                   #5b6068 315deg 323deg, #2a2d33 323deg 360deg);
  box-shadow: inset 0 0 0 2px #1a1c20, inset 0 1px 2px rgba(255,255,255,0.15);
  animation: spin var(--spin-dur) linear infinite;
}
.cassette .reel.left  { left: 14%; }
.cassette .reel.right { right: 14%; }
.is-paused .reel { animation-play-state: paused; }
@keyframes spin { to { transform: rotate(360deg); } }

/* ── VU 表等化器（琥珀跳動 bar） ── */
.vu { display: flex; align-items: flex-end; gap: 2px; height: 22px; }
.vu-bar {
  width: 3px; height: 100%; transform-origin: bottom; border-radius: 1px;
  background: linear-gradient(180deg, var(--rec), var(--lcd-amber) 45%, var(--teal));
  box-shadow: 0 0 4px var(--lcd-glow);
  animation: vu 0.8s ease-in-out infinite alternate;
}
.vu-bar:nth-child(2){ animation-duration: 0.62s; }
.vu-bar:nth-child(3){ animation-duration: 1.05s; }
.vu-bar:nth-child(4){ animation-duration: 0.74s; }
.vu-bar:nth-child(5){ animation-duration: 0.93s; }
@keyframes vu { from { transform: scaleY(0.25); } to { transform: scaleY(1); } }

/* ── 旋鈕（音量 / 頭像，conic 刻痕 + 中心高光） ── */
.knob {
  width: 56px; height: 56px; border-radius: 50%;
  background:
    radial-gradient(circle at 42% 38%, #44484f, #1a1c20 72%),
    conic-gradient(from 0deg, #2a2d33 0 6deg, #4a4f57 6deg 12deg);
  box-shadow: inset 0 1px 1px rgba(255,255,255,0.2), 0 3px 6px rgba(0,0,0,0.5);
  position: relative; cursor: pointer;
}
.knob::after { /* 指示點 */
  content: ""; position: absolute; top: 6px; left: 50%; width: 4px; height: 10px;
  transform: translateX(-50%); border-radius: 2px; background: var(--teal);
  box-shadow: 0 0 5px var(--teal);
}

/* ── 實體推桿（進度 / 音量 fader） ── */
.fader { position: relative; height: 10px; border-radius: var(--radius-pill);
  background: linear-gradient(180deg, var(--lcd-bg-2), #1f2128);
  box-shadow: var(--inset-window); }
.fader > i { display:block; height:100%; width:36%; border-radius: var(--radius-pill);
  background: linear-gradient(180deg, var(--teal), var(--teal-dim)); }
.fader .grip { position:absolute; top:50%; left:36%; width:14px; height:20px;
  transform: translate(-50%,-50%); border-radius: 3px;
  background: linear-gradient(180deg, var(--case-3), var(--case-1));
  box-shadow: var(--bevel-up); }

/* ── 標籤貼紙 chip（貼在機身上，近直角 + 微旋轉） ── */
.chip {
  font-family: var(--font-label); text-transform: uppercase; letter-spacing: 0.4px;
  font-size: 12px; font-weight: 700; color: var(--label-ink-strong);
  padding: var(--space-1) var(--space-3); border-radius: var(--radius-sticker);
  background: var(--sticker-3); transform: rotate(-1.2deg); cursor: pointer;
  box-shadow: 0 1px 2px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.35);
  transition: transform var(--dur-fast) var(--ease), filter var(--dur);
}
.chip:nth-child(2){ background: var(--sticker-2); transform: rotate(0.8deg); }
.chip:nth-child(3){ background: var(--sticker-1); transform: rotate(-0.6deg); }
.chip:nth-child(4){ background: var(--sticker-4); transform: rotate(1deg); }
.chip:active { transform: scale(0.96); }
.chip[aria-selected="true"] { filter: brightness(1.12);
  box-shadow: 0 3px 6px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.45); }

/* ── 實體撥桿開關 toggle ── */
.switch { width: 46px; height: 26px; border-radius: var(--radius-pill);
  background: linear-gradient(180deg, var(--lcd-bg-2), #22252b);
  box-shadow: var(--inset-trough); position: relative; cursor: pointer; }
.switch .grip { position:absolute; top:3px; left:3px; width:20px; height:20px;
  border-radius: 4px; background: linear-gradient(180deg, var(--case-3), var(--case-1));
  box-shadow: var(--bevel-up); transition: transform var(--dur) var(--ease); }
.switch[aria-checked="true"] { box-shadow: var(--inset-trough), inset 0 0 8px rgba(35,211,196,0.4); }
.switch[aria-checked="true"] .grip { transform: translateX(20px); }

/* ── 中間畫面容器：唯一三段式中段，每屏自己捲動 ── */
.viewport { position: relative; z-index: 1; flex: 1 1 auto; min-height: 0; }
.screen { display: none; height: 100%; overflow-y: auto;
  padding: var(--space-4) var(--content-pad)
           calc(var(--miniplayer-h) + var(--tabbar-h) + var(--space-4)); }
.screen.is-active { display: flex; flex-direction: column; }

/* ── player：覆蓋全屏，dock 隱藏，控制列永遠在 844 內 ── */
.is-player .miniplayer, .is-player .tabbar { display: none; }
.screen-player.is-active { padding-bottom: var(--space-4); }
.screen-player .deck { flex: 1; min-height: 0; display: grid; place-items: center; }
.screen-player .controls { flex: 0 0 auto; }   /* 進度/控制/徽章永遠可見 */

/* ── status-bar（LCD 計時條，固定頂） ── */
.statusbar {
  position: relative; z-index: 5; flex: 0 0 auto;
  display: flex; align-items: center; justify-content: space-between;
  height: var(--statusbar-h); padding: 0 18px;
  background:
    repeating-linear-gradient(0deg, transparent 0, transparent 2px, var(--lcd-scanline) 3px),
    linear-gradient(180deg, var(--lcd-bg), var(--lcd-bg-2));
  box-shadow: var(--inset-window);
}
.statusbar .clock { font-family: var(--font-lcd); font-size: 22px; letter-spacing: 2px;
  font-variant-numeric: tabular-nums; color: var(--lcd-amber);
  text-shadow: 0 0 6px var(--lcd-glow); }

/* ── tab-bar（底部實體按鍵列，固定底） ── */
.tabbar {
  position: relative; z-index: 5; flex: 0 0 auto;
  display: flex; justify-content: space-around; align-items: center;
  height: var(--tabbar-h); padding-bottom: var(--safe-bottom);
  background: linear-gradient(180deg, var(--case-1), var(--case-2));
  box-shadow: inset 0 1px 0 var(--case-edge-hi), var(--inset-trough);
}
.tab { display:flex; flex-direction:column; align-items:center; gap:3px;
  font-family: var(--font-label); text-transform: uppercase; letter-spacing: 0.4px;
  font-size: 11px; color: var(--text-3); cursor: pointer;
  padding: var(--space-1) var(--space-3); border-radius: var(--radius-key);
  box-shadow: var(--bevel-up); background: linear-gradient(180deg, var(--case-3), var(--case-1));
  transition: box-shadow var(--dur-fast), color var(--dur); }
.tab:active { box-shadow: var(--bevel-down); transform: translateY(1px); }
.tab[aria-current="page"] { color: var(--lcd-amber); }
.tab[aria-current="page"] .led { background: var(--lcd-amber);
  box-shadow: 0 0 6px var(--lcd-glow); }   /* active 指示燈亮 */
.tab .led { width: 5px; height: 5px; border-radius: 50%; background: #15171b; }

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation: none !important; transition: none !important; }
  .reel { transform: none; }
  .vu-bar { transform: scaleY(0.6); }
}
\`\`\`
`,"../../.claude/skills/app-claymorphism/SKILL.md":`---
name: app-claymorphism
description: Use when generating a single-file mobile App screen demo for the 迴聲 Resona 音樂串流 App in Claymorphism style. Triggers on Claymorphism、黏土擬態、軟陶、軟糖 UI、clay、puffy、膨起、3D inflated、糖果色、超大圓角、果凍按鈕、可愛 UI、軟 UI、play 軟糖球.
user-invocable: true
---

# 黏土擬態 — 迴聲 Resona

## Style Philosophy

黏土擬態（Claymorphism）把整個 App 想像成**一盒用軟陶捏出來、再吹一口氣膨起來的彩色糖果**：每一個元件都圓潤、胖胖、軟軟的，邊角是近乎球體的極大圓角，表面像剛出爐的棉花糖——頂部被光打亮、底部窩進一圈柔影，看起來「按下去會凹、放手會彈回來」。它跟新擬物化（Neumorphism）最大的差別是：**Neumorphism 是單色微浮雕、克制、近乎隱形；Claymorphism 是彩色、更膨、更俏皮、像可以伸手捏的軟糖。**

用在 迴聲 Resona 音樂串流 App，這風格傳達「柔軟、療癒、可愛、果凍感」：專輯封面是一塊塊不同糖果色相、頂部帶高光的澎潤圓角方塊；播放鍵是一顆大軟糖圓球；分類 chip 是捏出來的膠囊軟糖；整個 App 像一台被捏成軟陶的隨身播放器。

本次精修的三條鐵律（**務必寫進 tokens 與 snippet，照做就有辨識度**）：

1. **三層立體配方 = 吹氣膨起（核心鐵律，每個 clay 元件都要）**：每個元件的「澎潤」由三層陰影疊出——① **外部柔和 drop-shadow**（顏色取「該元件色相加深」、blur 大、位移中等偏下）讓它浮在桌面上；② **內部頂亮 inset highlight**（\`inset 0 X 0 rgba(255,255,255,0.7)\`）模擬光從上方打在膨起的表面；③ **內部底暗 inset shadow**（\`inset 0 -X 0 該色相加深半透明\`）讓底緣窩進去。少了任何一層就會塌成扁平卡片或退化成 Neumorphism。
2. **大圓角、近球體**：所有元件 \`border-radius\` 落在 **22–40px**；播放鍵、頭像、FAB 類圓形元素 \`border-radius: 50%\` 直接做成軟糖球；chip/toggle 用 \`border-radius: 999px\` 捏成膠囊。**禁止任何 < 16px 的圓角與任何直角**。
3. **按壓觸覺 = 被捏扁再彈回**：所有可點元件按下時 \`transform: scale(0.94)\` 並把外影縮小、內凹陰影收緊（像被手指壓扁），放開靠 \`transition\` 回彈。這個「捏」的回饋是黏土感的靈魂，每個按鈕、卡片、tab、chip 都要有。

三個視覺辨識特徵：
1. **澎潤糖果色封面**：所有專輯/歌單/頭像封面 = 純 CSS 漸層方塊，用不同糖果色相（薰衣草/蜜桃/薄荷/奶油黃/天藍）區分，**每塊都帶頂部 inset 高光**，看起來像一顆顆軟糖磚。
2. **軟糖圓球播放鍵**：主播放鍵是一顆飽滿的大圓球（珊瑚或葡萄紫底 + 雙層外影 + 頂亮高光 + 底暗 inset），三角形 ▶ 用 CSS 邊框畫；按下整顆球被捏扁。
3. **捏出來的膠囊軟糖 chip / toggle**：分類 chip 與開關是膨起的膠囊；**active 時換成糖果色填充並翻成「內凹（按進去）」感**（外影消失、改用內陰影），未選時是凸起的奶白膠囊——靠「凸 vs 凹」分辨選取態。

---

## Design Tokens (CSS variables)

\`\`\`css
:root {
  /* ── 手機殼尺寸（必含、鎖死，無跑版的根本） ── */
  --screen-w: 390px;
  --screen-h: 844px;
  --statusbar-h: 44px;
  --tabbar-h: 64px;             /* tab-bar 本體（clay 較胖，略高） */
  --miniplayer-h: 62px;         /* 迷你播放列高度 */
  --safe-bottom: 34px;          /* iPhone home indicator 安全區 */
  --content-pad: 20px;
  --device-radius: 46px;

  /* ── 8pt 間距尺度（所有 margin/padding/gap 只能取這些值） ── */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;

  /* ── 底色：暖白 + 極淡粉紫漸層（鋪在裝置最底層） ── */
  --bg-1: #f3ecff;             /* 漸層起：淡薰衣草白 */
  --bg-2: #fef0f4;             /* 漸層收：淡蜜桃白 */
  --surface: #fbf7ff;          /* 元件預設奶白填充（凸起膠囊/卡用） */
  --surface-2: #fffaf6;        /* 次填充（暖白偏奶油） */

  /* ── 糖果色（元件主色，澎潤色塊用） ── */
  --candy-lav: #b9a6ff;        /* 薰衣草 */
  --candy-peach: #ffb59e;      /* 蜜桃 */
  --candy-mint: #9fe6c9;       /* 薄荷 */
  --candy-cream: #ffd98a;      /* 奶油黃 */
  --candy-sky: #9cc9ff;        /* 天藍 */

  /* ── 糖果色「加深版」：給外 drop-shadow 與內底暗 inset 用（同色相更飽和暗） ── */
  --lav-deep: rgba(124, 99, 224, 0.40);
  --peach-deep: rgba(224, 122, 92, 0.40);
  --mint-deep: rgba(74, 184, 142, 0.40);
  --cream-deep: rgba(214, 160, 54, 0.40);
  --sky-deep: rgba(74, 138, 214, 0.40);

  /* ── 文字（深紫灰，對淺底達 WCAG AA） ── */
  --text-1: #4a3f63;           /* 主文字：對 #fbf7ff 約 8.0:1 ✔AA/AAA */
  --text-2: #6b5f86;           /* 次文字：對 #fbf7ff 約 5.0:1 ✔AA */
  --text-3: #8a7fa6;           /* 弱文字：對 #fbf7ff 約 3.3:1 → 僅限 ≥18px 大字/裝飾 */
  --text-on-accent: #ffffff;   /* 珊瑚/葡萄紫鍵上的白字（皆達 AA，見下） */

  /* ── 互動 / 強調 ── */
  --accent: #ff7a8a;           /* 珊瑚：播放球 / active 重點。白字對 #ff7a8a 約 3.0:1 →
                                  白字僅用於 ≥18px 粗體或 icon；小字改用 --text-1 */
  --accent-strong: #8b5cf6;    /* 葡萄紫：主 CTA / active tab。白字對 #8b5cf6 約 4.6:1 ✔AA */
  --accent-soft: #ffe3e7;      /* 珊瑚極淡填充（active chip 內凹底） */
  --accent-strong-soft: #ece2ff; /* 葡萄紫極淡填充 */

  /* ── clay 材質：高光與凹影的原子 ── */
  --hi: rgba(255, 255, 255, 0.70);     /* 頂亮 inset highlight */
  --hi-strong: rgba(255, 255, 255, 0.85);
  --press-veil: rgba(74, 63, 99, 0.06); /* 按下疊加 */

  /* ── 圓角（黏土：大、近球體；最小 16px） ── */
  --radius-lg: 36px;           /* 大卡 / banner / 大封面 */
  --radius-md: 28px;           /* 一般卡 / 列項 / 搜尋框 */
  --radius-sm: 22px;           /* 小封面縮圖 / 小元件 */
  --radius-pill: 999px;        /* chip / toggle / 膠囊 */
  --radius-ball: 50%;          /* 播放球 / 頭像 / 圓 icon 鈕 */

  /* ── clay 三層陰影配方（核心：外柔影 + 頂亮 inset + 底暗 inset） ── */
  /* 預設奶白凸起（中性元件） */
  --clay:
    0 12px 24px rgba(124, 99, 224, 0.18),          /* 外柔影（淡薰衣草） */
    0 4px 8px rgba(124, 99, 224, 0.10),
    inset 0 3px 4px var(--hi),                      /* 頂亮高光 */
    inset 0 -6px 10px rgba(124, 99, 224, 0.16);     /* 底暗內陰影 */
  /* 小元件（縮圖/小鈕）較淺的凸起 */
  --clay-sm:
    0 6px 14px rgba(124, 99, 224, 0.16),
    inset 0 2px 3px var(--hi),
    inset 0 -4px 7px rgba(124, 99, 224, 0.14);
  /* 「按進去」的內凹態（active chip / 凹槽軌 / 按下保持） */
  --clay-inset:
    inset 0 4px 8px rgba(124, 99, 224, 0.24),
    inset 0 -2px 3px var(--hi);
  /* 按下瞬間（外影縮小 + 內凹收緊，配合 scale .94） */
  --clay-press:
    0 4px 8px rgba(124, 99, 224, 0.16),
    inset 0 2px 5px rgba(124, 99, 224, 0.22),
    inset 0 -2px 3px var(--hi);

  /* ── 字體（圓潤無襯線、偏粗、字距略鬆，呼應軟糖感） ── */
  --font: 'Rounded Mplus 1c', 'Hiragino Maru Gothic ProN', 'PingFang TC',
          'Noto Sans TC', system-ui, -apple-system, 'Segoe UI Rounded', sans-serif;
  --tracking: 0.2px;           /* 字距略鬆 */

  /* ── 動效（軟糖回彈） ── */
  --ease: cubic-bezier(0.34, 1.56, 0.64, 1);  /* overshoot 回彈，像彈一下 */
  --ease-soft: cubic-bezier(0.4, 0, 0.2, 1);
  --dur-fast: 130ms;
  --dur: 220ms;
}
\`\`\`

---

## Typography Scale

| 級距 | 大小 / 行高 / 字重 / 字距 | 顏色 | 用途 |
| --- | --- | --- | --- |
| caption | 11px / 1.3 / 600 / +0.2px | \`--text-2\` | tab 標籤、播放次數、徽章副字（弱資訊但仍用 text-2 保 AA） |
| label | 13px / 1.4 / 600 / +0.2px | \`--text-2\` | chip 文字、卡片副標、時長、藝人名 |
| body | 15px / 1.55 / 500 / +0.2px | \`--text-2\` | 段落、方案權益、說明 |
| row-title | 17px / 1.35 / 700 / 0 | \`--text-1\` | 歌名、歌單卡標題、列項主文字、迷你播放列歌名 |
| section | 22px / 1.25 / 800 / -0.2px | \`--text-1\` | 各屏區塊標題（如「每日迴聲」） |
| display | 28px / 1.15 / 800 / -0.4px | \`--text-1\` | home 品牌大標、player 曲名 |

- 全部用 \`--font\`；黏土風格字重整體偏粗（500 起跳，標題 800），字距 \`--tracking\` 略鬆，呼應圓潤軟糖感。
- 數字（時間 9:41、價格、時長、進度）一律 \`font-variant-numeric: tabular-nums\` 對齊。
- \`--text-3\`（弱文字）對比約 3.3:1，**只准用在 ≥18px 大字或純裝飾**；任何 ≤15px 的小字一律 \`--text-2\` 以上以確保 AA。
- 標題與正文間固定 \`--space-3\` 縱距；區段之間固定 \`--space-6\`。

---

## Component & Layout

整體結構：最外層 \`.device\`（390×844 手機殼，\`overflow:hidden\`、\`border-radius: --device-radius\`，底鋪 \`--bg-1 → --bg-2\` 暖白粉紫漸層）→ \`.statusbar\`（固定頂、\`z-index:5\`）→ \`.viewport\`（中間可捲動畫面容器，\`z-index:1\`，依序堆 home/search/detail/player/library/profile 六個 \`data-screen\`，每次只顯示一個）→ \`.miniplayer\`（貼在 tab-bar 上方的常駐迷你播放列、\`z-index:4\`）→ \`.tabbar\`（固定底、\`z-index:5\`）。背景純色暖白，**不放 aurora 光暈、不放任何點陣圖**；層次完全靠 clay 三層陰影堆出，元件之間用充足留白（黏土元件胖、要呼吸感）。

8 個 \`<section data-screen>\` 順序固定且各恰一次：\`status-bar\` → \`home\` → \`search\` → \`detail\` → \`player\` → \`library\` → \`profile\` → \`tab-bar\`。

### 跨畫面導覽模型（無跑版的骨架，對齊契約 B2）

- 用一個簡單的 class 切換：\`.screen\` 預設 \`display:none\`，**只有** \`.screen.is-active { display:flex; flex-direction:column }\` 顯示。**嚴禁任何「畫面專屬 class」無條件設 \`display\`**（會永久疊層）；畫面專屬樣式只能設 padding/排版。JS 點 tab / 卡片 / 迷你播放列 / 返回鍵時切換 active screen 並同步 tab-bar active 態。**JS 失效時** home 為預設 \`is-active\`，仍可讀完整內容。
- 導覽元素一律加結構屬性 \`data-go="<target>"\`：歌單/專輯卡 \`data-go="detail"\`、曲目列/迷你播放列/播放鍵 \`data-go="player"\`、返回鍵 \`data-go="back"\`、tab \`data-go="home|search|library|profile"\`。JS 以事件委派處理 click。
- 導覽行為要全部接好：tab → 切 home/search/library/profile；home 歌單卡 / library 收藏 / search 結果 → 開 detail；迷你播放列 / detail 曲目 / 任一播放鍵 → 開 player；detail / player 左上返回鍵 → 回上一畫面。
- **裝置容器三段式鎖定**：status-bar 永遠在頂、tab-bar（含其上方 miniplayer）永遠在底、中間 \`.viewport\` 為當前畫面的唯一可捲動區。\`.viewport { flex:1; min-height:0 }\`，每個 \`.screen\` 內部 \`overflow-y:auto\`，底部 padding 預留迷你播放列高度，內容絕不被遮擋、不溢出、不被裁切。

### status-bar（\`data-screen="status-bar"\`）

- 高 \`--statusbar-h\`，**不做成胖卡**（保持輕透，融入暖白底）：透明背景、深紫灰字。
- 左側時間 **9:41**（tabular-nums，700），右側並排訊號格 + Wi-Fi + 電量符號（純 CSS / unicode 繪製，不用圖檔；可做成小小的圓潤膠囊電量）。
- 固定於裝置頂、不隨內容捲動、永遠在最上層。

### home（\`data-screen="home"\`）

至少三區段，每區段有 section 標題列（左標題 800 + 右「查看全部」連結，cursor:pointer + hover）：

1. **頂部問候列**：左側品牌大標「**迴聲 Resona**」（display）+ slogan「讓每首歌，回到你身上」；右側頭像 = 糖果漸層**軟糖球**（\`--radius-ball\` + clay 陰影 + 頂亮）。
2. **每日迴聲（個人化每日推薦 banner）**：一張澎潤大卡（\`--radius-lg\` + 完整 \`--clay\`，糖果色填充例如薰衣草），左漸層**軟糖封面** + 「每日迴聲」標題 + 個人化文案 +「個人化每日推薦」字樣 + 一顆**軟糖球播放鍵**（▶）。露出「**無損音質串流**」膨起小徽章。
3. **為你精選歌單**：section 標題「為你精選歌單」+「查看全部」。**7 個歌單卡**兩欄網格（浪潮回聲 / 深夜公路 / 島嶼晨光 / 雨後散步 / 城市心跳 / 山海之間 / 失重時刻），每卡 = 一塊不同糖果色相 \`.cover\`（澎潤 CSS 漸層方塊 + 頂亮 inset）+ 標題 + 曲數副字；整卡是凸起的軟陶卡，hover 微浮、按下被捏扁。
4. **熱門排行（或最近播放）**：section 標題「熱門排行」+「查看全部」，編號清單（1–5），每列 = 大圓潤排名數字 + 小糖果封面 + 歌名 + 藝人 + 時長 + 軟糖球播放鍵。歌名/藝人取自 9 歌名與 5 藝人。
5. **4 分類 chip 橫排**（華語 / 獨立 / 電子 / 放鬆）置於問候列下方：膨起膠囊軟糖，首個 active（active = 糖果色填充 + 內凹 \`--clay-inset\`；未選 = 奶白凸起）。

### search（\`data-screen="search"\`）

- 頂部**膨起搜尋框**（奶白填充 + \`--clay\`，圓潤 input 外觀 + 放大鏡 + placeholder「搜尋歌曲、藝人、歌單」）。
- 下方 4 分類 chip（華語 / 獨立 / 電子 / 放鬆），膠囊軟糖。
- **熱門歌曲**：section 標題，**編號清單**（含時長）——海平面樂團〈藍色信號〉、林知夏〈晚風練習曲〉、夜行列車〈霓虹巷弄〉、Echo Lab〈靜電〉、何遠〈無人車站〉……每列 = 序號 + 小糖果封面 + 歌名 + 藝人 + 時長 + 軟糖球播放鍵（點擊 → player）。
- **熱門藝人**：section 標題 + 橫向膠囊（糖果漸層**軟糖圓頭像** + 藝人名）：海平面樂團 / 林知夏 / 夜行列車 / Echo Lab / 何遠。

### detail（\`data-screen="detail"\`）

- 左上**軟糖圓形返回鍵**（‹，奶白凸起球 + clay，cursor:pointer + hover/active 捏扁）。
- **大封面**：頂部大張澎潤糖果漸層封面（\`--radius-lg\` + 完整 clay + 頂亮高光，色相呼應島嶼晨光，例如薄荷+薰衣草）。
- 資訊區：專輯名 **島嶼晨光** / 藝人 **林知夏** / 年份 **2026** / **9 首** / 總時長 **34:12**。
- 動作列：**播放全部**（葡萄紫 \`--accent-strong\` 膨起大鍵 ▶，白字達 AA）+ **隨機播放**（奶白凸起次鍵）。
- **完整 9 曲目清單**（藍色信號 / 霓虹巷弄 / 候鳥地圖 / 靜電 / 晚風練習曲 / 無人車站 / 潮間帶 / 第七個夏天 / 月台九又四分之三），每列圓潤 \`.song-row\`（奶白凸起膠囊條）：曲序 + 歌名 + 藝人（林知夏）+ 時長 + 行尾軟糖球播放鍵 / 選單（⋯）。點任一曲 → player。

### player（\`data-screen="player"\`）— 覆蓋全屏 now-playing

**進入 player 時隱藏底部 dock（tab-bar + mini-player）**；整個 player 用 \`height:100%; display:flex; flex-direction:column\`，讓控制列永遠固定在 844 內可見、不靠捲動、不被遮擋：

- 左上**軟糖圓形返回鍵**（⌄ 收合，\`data-go="back"\` 回上一畫面）。
- **大封面**：\`flex:1; min-height:0\`（可壓縮，永不把下方控制列擠出視窗）的置中大尺寸澎潤糖果漸層方塊（純 CSS conic/radial + 頂亮高光 + 厚 clay，色相呼應島嶼晨光）。
- 正在播放：**林知夏 —〈晚風練習曲〉**，副字專輯「島嶼晨光」、時間 02:47。
- **歌詞同步**：一行逐字高亮示意（高亮字 \`--text-1\` 700，其餘 \`--text-3\`）；對應功能名「歌詞同步」。
- **進度條 = 凹槽軌 + 凸起圓把手**（黏土招牌）：軌道用 \`--clay-inset\`（按進去的凹槽）+ 珊瑚 fill + 一顆凸起的小軟糖圓 \`.knob\`（\`--radius-ball\` + clay-sm）。左 **01:12** / 右 **02:47**（tabular-nums）。
- 控制列（固定可見）：隨機（⤮）/ 上一首（⏮）/ **軟糖球播放暫停大鍵（▶ / ⏸ 兩態）** / 下一首（⏭）/ 循環（⟳）。播放球用珊瑚或葡萄紫 + 雙層外影 + 頂亮 + 底暗 inset；隨機與循環 active 時填糖果色並翻成內凹。
- 底部固定：**無損音質串流**膨起徽章 + 音量滑桿（同凹槽軌 + 凸把手）。

### library（\`data-screen="library"\`）

- 「**我的音樂庫**」標題（section）。
- 分頁列（**膨起膠囊 segmented**）：**歌單 / 專輯 / 已下載**，首個 active（active 內凹 + 糖果色）。
- **收藏歌單清單**：每列圓潤膠囊條 = 小糖果封面縮圖 + 標題（複用歌單名）+ 曲數副字 + 行尾箭頭，點擊 → detail。
- **離線下載**功能列（圓潤 list-item + 已下載狀態膨起徽章）。
- **共享音樂庫**功能列（圓潤 list-item + 切換開關 \`.toggle\`：膠囊凹槽 + 凸起圓把手；on 態填糖果色把手滑到右）。

### profile（\`data-screen="profile"\`）

- **使用者卡**：糖果軟糖球頭像 + 暱稱 + 會員狀態行（澎潤強調卡）。
- **播放偏好**列表：音質、等化器、**跨裝置接續播放**（\`.toggle\` 開關，預設 on）。
- **3 訂閱方案卡**（澎潤卡並排或堆疊）：
  - **免費** — \`NT$ 0 ／月\` — 標「目前方案」。權益：隨機播放、含廣告插播、標準音質。
  - **Plus** — \`NT$ 149 ／月\` — 標「推薦」，**主推卡**：糖果色（葡萄紫系）填充 + 更厚 clay + 角標，最澎。權益：無廣告、無損音質、離線下載。
  - **Family** — \`NT$ 249 ／月\`。權益：6 帳號、共享音樂庫、家長控制。
  - 每卡含 2–3 條權益小字（可帶出「離線下載」「共享音樂庫」功能名）。價格 tabular-nums、\`NT$\` 與數字間一個半形空格、後綴全形「／月」。

### mini-player（迷你播放列，常駐）

- 一條貼在 tab-bar **正上方**的**膨起膠囊浮條**（奶白/淡薰衣草填充 + \`--clay\`，\`--radius-pill\` 或 \`--radius-md\`），高 \`--miniplayer-h\`，左右留 \`--space-3\` margin 讓它像漂浮的軟糖條。
- 內容：左小糖果封面 + 歌名「晚風練習曲」+ 藝人「林知夏」+ 右側**軟糖球播放/暫停鍵（▶ / ⏸）**。
- 顯示於 **home / search / library / profile**；**player 畫面隱藏**（\`.is-player .miniplayer { display:none }\`，且 \`.is-player .tabbar { display:none }\` 一起隱藏 dock）。
- 整條 cursor:pointer，點擊（播放鍵以外區域）展開到 player（\`data-go="player"\`）；點播放鍵切換 ▶/⏸ 兩態。
- 底部含一條極細**凹槽進度線**（\`--clay-inset\` 凹軌 + 珊瑚 fill，與 player 同步示意）。

### tab-bar（\`data-screen="tab-bar"\`）

- 固定底部**膨起膠囊托盤**（奶白填充 + \`--clay\`，\`--radius-lg\`，左右留 margin 像懸浮的軟糖底座），4 tab：**首頁 / 搜尋 / 音樂庫 / 我的**，各 = unicode/CSS icon + 標籤。
- active tab = 糖果色（葡萄紫）**內凹軟糖膠囊高亮**（\`--clay-inset\` + \`--accent-strong\` 字/底），未選為平的圖示。每 tab cursor:pointer + hover/active 捏扁回饋。
- 預留 \`--safe-bottom\` 安全區。tab-bar 與其上的 miniplayer 一起構成「永遠在底」的固定 dock；進入 player 時整個 dock 隱藏。

### 封面繪製規範（重要）

**所有專輯 / 歌單 / 頭像 / 排名封面一律純 CSS**——用 \`linear-gradient\` / \`radial-gradient\` / \`conic-gradient\` 配不同**糖果色相**（薰衣草/蜜桃/薄荷/奶油黃/天藍）區分，**每塊封面都要加頂部 inset 高光**（\`inset 0 4px 8px var(--hi)\`）讓它像澎潤軟糖磚，可疊一層淺色圓點/波浪幾何當裝飾。**不得引用任何 \`assets/*.webp\` 圖檔，不得出現指向圖檔的 \`<img>\`。**

---

## Do / Don't

| Do | Don't |
| --- | --- |
| 每個元件用三層配方：外柔影（同色加深）+ 頂亮 inset 高光 + 底暗 inset | 只給單層 drop-shadow 或扁平卡（塌掉、失去澎潤） |
| 用彩色糖果色 + 暖白底，俏皮可愛 | 用純灰單色微浮雕（那是 Neumorphism，不是 Claymorphism） |
| 圓角一律 22–40px，播放球/頭像 50%，chip/toggle 999px | 任何直角或 < 16px 的小圓角、銳利邊 |
| 按下 \`scale(0.94)\` + 內凹收緊，放開 \`--ease\` 回彈 | 按下無反應或硬切（失去「捏」的觸覺） |
| chip/toggle/tab 的 active 用「翻成內凹 + 糖果色填充」表示 | active 只換顏色不換凸凹（黏土靠凸/凹分選取） |
| 封面用純 CSS 糖果漸層 + 頂亮高光，不同色相區分 | 引用點陣圖 / \`<img src="assets/...">\` |
| 進度條/滑桿用凹槽軌 + 凸起圓把手 | 用扁平細線進度條（不黏土） |
| 主文字深紫灰 \`--text-1\`（對暖白 ≥AA），白字只放葡萄紫鍵或 ≥18px 珊瑚鍵 | 在淺底用低對比淺紫小字、或珊瑚底放白色小字（< AA） |
| 間距只取 8pt 尺度，元件之間留足白讓胖元件呼吸 | 隨手寫 7px/13px，或元件擠在一起失去軟糖塊感 |
| 字體圓潤、字重偏粗、字距略鬆 | 細字重、緊字距、襯線體（與軟糖感衝突） |

---

## Motion Specification

- **按壓回彈（核心觸覺）**：所有可點元件 \`transition: transform var(--dur-fast) var(--ease), box-shadow var(--dur) var(--ease-soft);\`，\`:active { transform: scale(0.94); box-shadow: var(--clay-press); }\`，放開用 overshoot \`--ease\`（\`cubic-bezier(0.34,1.56,0.64,1)\`）彈回，像捏一下軟糖。
- **卡片 hover**：\`:hover { transform: translateY(-3px); }\` 微微浮起（黏土更胖，浮多一點），外影同步放大。
- **播放鍵兩態**：JS 切 ▶/⏸（改 textContent/class），切換時播放球可做一次極輕的 \`scale\` 回彈。
- **chip / tab / segmented active 切換**：用 \`box-shadow\`（凸→凹）+ \`background\` 的 220ms 過渡，視覺上像被按進去。
- **toggle**：把手用 \`transform: translateX()\` 滑動（不動 left），220ms \`--ease\`。
- **進度條/滑桿**：純 CSS 寬度示意即可，把手位置可用 \`transform\`。
- 只動 \`transform\` / \`opacity\` / \`box-shadow\`（按壓、浮起、把手滑動）；不動 top/left/width/height 觸發 reflow（進度條 width 為靜態示意、不放捲動熱路徑）。
- **不使用任何外部動畫庫**。

## Accessibility (Reduced Motion)

\`\`\`css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation: none !important;
    transition: none !important;
    scroll-behavior: auto !important;
  }
}
\`\`\`

- 按壓回彈、卡片浮起、toggle 滑動在 reduced motion 下全部停用；元件改為瞬間切換 active 凹/凸態，**clay 三層立體陰影仍完整呈現**（靜態也是黏土感）。
- 內容（所有歌名/藝人/價格/功能名）在 JS 失效或 reduced motion 下仍完整可讀。
- 文字維持 WCAG AA：主文字深紫灰 \`--text-1\`（對暖白 ≈8:1）、次文字 \`--text-2\`（≈5:1）；\`--text-3\`（≈3.3:1）只用在 ≥18px。葡萄紫鍵白字達 AA；珊瑚鍵白字僅用於 ≥18px 粗體/icon，珊瑚鍵小字改用 \`--text-1\`。

---

## Required Output Contract

遵循 \`.claude/agents/style-page-builder.md\` 的「**App 風格額外要求**」：

- **8 個 \`<section data-screen="<id>">\`**，固定 id 與順序：\`status-bar\` → \`home\` → \`search\` → \`detail\` → \`player\` → \`library\` → \`profile\` → \`tab-bar\`，各恰一次。常見漏洞：只寫 \`id=\` 漏寫 \`data-screen=\`，務必兩者都加。
- **\`<body data-viewport="mobile">\`** 必須存在（驗證辨識依據）。
- **status-bar 顯示 9:41**（tabular-nums，可見文字）。
- **tab-bar 四 tab**：可見文字「首頁 / 搜尋 / 音樂庫 / 我的」，active 態用內凹糖果膠囊明確標示。
- **迷你播放列**常駐於 home/search/library/profile、player 畫面隱藏（連同 tab-bar 一起隱藏 dock）；點擊展開 player、播放鍵 ▶/⏸ 兩態。
- **player 為覆蓋全屏 now-playing**：進入隱藏 dock；\`height:100%; flex column\`；封面 \`flex:1; min-height:0\`；進度條/控制列/徽章永遠固定在 844 內可見、不靠捲動、不被遮擋。
- **三層訂閱方案精確字串**同屏出現於 profile：\`免費\` / \`NT$ 0 ／月\`、\`Plus\` / \`NT$ 149 ／月\`、\`Family\` / \`NT$ 249 ／月\`（\`NT$\` 與數字間一個半形空格、後綴全形「／月」），並標「推薦」與「目前方案」。
- **可互動多畫面導覽**：tab 切換 + 卡片→detail + 曲目/迷你播放列→player + detail/player 返回鍵，全部接好；\`data-go\` 委派；JS 失效時 home 預設可見。畫面切換嚴守 \`.screen{display:none}\` + \`.screen.is-active{display:flex}\`，無任何畫面專屬 class 無條件設 display。
- **權威字串全在可見 body 文字**（不可只放 \`aria-label\` / \`data-*\`）：品牌「迴聲 / Resona」、6 核心功能（個人化每日推薦 / 無損音質串流 / 離線下載 / 歌詞同步 / 跨裝置接續播放 / 共享音樂庫）、7 歌單（浪潮回聲 / 深夜公路 / 島嶼晨光 / 雨後散步 / 城市心跳 / 山海之間 / 失重時刻）、9 歌名（藍色信號 / 霓虹巷弄 / 候鳥地圖 / 靜電 / 晚風練習曲 / 無人車站 / 潮間帶 / 第七個夏天 / 月台九又四分之三）、5 藝人（海平面樂團 / 林知夏 / 夜行列車 / Echo Lab / 何遠）、4 分類 chip（華語 / 獨立 / 電子 / 放鬆）、正在播放「林知夏 —〈晚風練習曲〉」。
- **無跑版**：裝置容器鎖 390×844、status-bar 永遠在頂、dock 永遠在底、中間為當前畫面可捲動區、內容不被遮擋、文字不溢出/不被裁切、胖元件之間 padding 充足。
- **單檔 HTML ≤ 200 KB**；**無外部 CDN**（\`<link>\` / \`<script>\` / \`<img>\` 的 src/href 不可 \`http://\` 或 \`https://\`）；繁體中文；CSS 變數驅動、不得用 Tailwind 等 framework CSS。inline \`<script>\` 精簡（≤ 8 KB）。

## Required Images

**此風格不使用任何點陣圖。** \`assets-manifest.json\` 為 \`{ "style": "黏土擬態 Claymorphism", "images": [] }\`。所有封面/頭像一律純 CSS（\`linear-gradient\` / \`radial-gradient\` / \`conic-gradient\` 糖果漸層 + \`inset\` 頂亮高光 + clay 陰影）繪製，**頁面不得引用任何圖檔**、不得出現指向 \`assets/\` 的 \`<img>\`。

---

## Reference Snippet

\`\`\`css
/* ── 手機殼：暖白 + 極淡粉紫漸層底 ── */
.device {
  position: relative;
  width: var(--screen-w);
  height: var(--screen-h);
  margin: 0 auto;
  overflow: hidden;
  border-radius: var(--device-radius);
  background: linear-gradient(160deg, var(--bg-1), var(--bg-2));
  font-family: var(--font);
  color: var(--text-1);
  letter-spacing: var(--tracking);
  display: flex;
  flex-direction: column;
}

/* ── clay 通用：吹氣膨起三層配方（外柔影 + 頂亮 inset + 底暗 inset） ── */
.clay {
  background: var(--surface);
  border-radius: var(--radius-md);
  box-shadow: var(--clay);
  transition: transform var(--dur-fast) var(--ease),
              box-shadow var(--dur) var(--ease-soft);
}
.clay.is-tap { cursor: pointer; }
.clay.is-tap:hover  { transform: translateY(-3px); }
.clay.is-tap:active { transform: scale(0.94); box-shadow: var(--clay-press); }  /* 被捏扁 */

/* ── 純 CSS 糖果封面：不同色相 + 頂亮高光，像軟糖磚 ── */
.cover {
  aspect-ratio: 1; border-radius: var(--radius-sm);
  background:
    radial-gradient(80% 70% at 30% 22%, var(--hi-strong), transparent 55%),
    linear-gradient(150deg, var(--candy-mint), var(--candy-lav));
  box-shadow:
    0 8px 18px var(--lav-deep),
    inset 0 4px 8px var(--hi),
    inset 0 -8px 12px var(--lav-deep);
}
.cover.peach { background:
  radial-gradient(80% 70% at 30% 22%, var(--hi-strong), transparent 55%),
  linear-gradient(150deg, var(--candy-peach), var(--candy-cream));
  box-shadow: 0 8px 18px var(--peach-deep), inset 0 4px 8px var(--hi), inset 0 -8px 12px var(--peach-deep); }
.cover.sky   { background:
  radial-gradient(80% 70% at 30% 22%, var(--hi-strong), transparent 55%),
  linear-gradient(150deg, var(--candy-sky), var(--candy-mint));
  box-shadow: 0 8px 18px var(--sky-deep), inset 0 4px 8px var(--hi), inset 0 -8px 12px var(--sky-deep); }

/* ── 軟糖球播放鍵（雙層外影 + 頂亮 + 底暗，按下被捏扁） ── */
.play-ball {
  width: 64px; height: 64px; border-radius: var(--radius-ball);
  border: none; cursor: pointer; position: relative;
  background:
    radial-gradient(70% 60% at 35% 28%, rgba(255,255,255,0.65), transparent 60%),
    var(--accent);                                   /* 珊瑚軟糖 */
  box-shadow:
    0 14px 26px rgba(255,122,138,0.45),              /* 外柔影（珊瑚加深） */
    0 6px 10px rgba(255,122,138,0.30),
    inset 0 4px 6px rgba(255,255,255,0.55),          /* 頂亮 */
    inset 0 -8px 12px rgba(200,60,80,0.35);          /* 底暗 */
  transition: transform var(--dur-fast) var(--ease), box-shadow var(--dur) var(--ease-soft);
}
.play-ball:active { transform: scale(0.92);
  box-shadow: 0 6px 12px rgba(255,122,138,0.35), inset 0 3px 6px rgba(200,60,80,0.40), inset 0 -3px 5px rgba(255,255,255,0.45); }
/* ▶ 用 CSS 三角形（白，置中；達 AA 因 icon 為大色塊） */
.play-ball::after { content:""; position:absolute; top:50%; left:54%;
  transform: translate(-50%,-50%);
  border-style: solid; border-width: 11px 0 11px 18px;
  border-color: transparent transparent transparent #fff; }

/* ── 主 CTA：葡萄紫膨起鍵（白字達 AA） ── */
.btn-cta {
  display:inline-flex; align-items:center; justify-content:center; gap: var(--space-2);
  height: 52px; padding: 0 var(--space-6); border:none; cursor:pointer;
  border-radius: var(--radius-pill); font-size: 17px; font-weight: 700;
  color: var(--text-on-accent);
  background: radial-gradient(80% 60% at 30% 25%, rgba(255,255,255,0.35), transparent 60%), var(--accent-strong);
  box-shadow: 0 12px 22px rgba(139,92,246,0.42), inset 0 3px 5px rgba(255,255,255,0.45), inset 0 -6px 10px rgba(90,50,180,0.40);
  transition: transform var(--dur-fast) var(--ease), box-shadow var(--dur) var(--ease-soft);
}
.btn-cta:active { transform: scale(0.94); box-shadow: var(--clay-press); }

/* ── 膠囊軟糖 chip：凸（未選）↔ 凹+糖果色（active） ── */
.chip {
  padding: var(--space-2) var(--space-5); border-radius: var(--radius-pill);
  background: var(--surface); color: var(--text-2);
  font-size: 13px; font-weight: 600; cursor: pointer; border: none;
  box-shadow: var(--clay-sm);                        /* 凸起 */
  transition: transform var(--dur-fast) var(--ease), box-shadow var(--dur) var(--ease-soft), background var(--dur);
}
.chip:active { transform: scale(0.94); }
.chip[aria-selected="true"] {                        /* 翻成內凹 + 珊瑚色 */
  background: var(--accent-soft); color: var(--text-1);
  box-shadow: var(--clay-inset);
}

/* ── toggle：凹槽 + 凸起圓把手（on 滑到右並翻糖果色） ── */
.toggle { width: 52px; height: 30px; border-radius: var(--radius-pill);
  background: var(--surface); box-shadow: var(--clay-inset); position: relative; cursor: pointer; border:none; }
.toggle .knob { position:absolute; top:3px; left:3px; width:24px; height:24px; border-radius:50%;
  background: var(--surface-2); box-shadow: var(--clay-sm);
  transition: transform var(--dur) var(--ease); }
.toggle[aria-checked="true"] { background: var(--accent-strong-soft); }
.toggle[aria-checked="true"] .knob { transform: translateX(22px); background: var(--accent-strong); }

/* ── 進度條：凹槽軌 + 凸起圓把手（黏土招牌） ── */
.progress { height: 12px; border-radius: var(--radius-pill);
  background: var(--surface); box-shadow: var(--clay-inset); position: relative; }
.progress > i { display:block; height:100%; width:42%; border-radius: var(--radius-pill);
  background: linear-gradient(90deg, var(--candy-peach), var(--accent)); }
.progress .knob { position:absolute; top:50%; left:42%; width:22px; height:22px;
  transform: translate(-50%,-50%); border-radius:50%;
  background: radial-gradient(70% 60% at 35% 30%, #fff, var(--accent));
  box-shadow: var(--clay-sm); }

/* ── 歌曲列：奶白凸起膠囊條 ── */
.song-row {
  display:flex; align-items:center; gap: var(--space-3);
  padding: var(--space-3) var(--space-4); border-radius: var(--radius-md);
  background: var(--surface); box-shadow: var(--clay-sm); cursor: pointer;
  transition: transform var(--dur-fast) var(--ease), box-shadow var(--dur) var(--ease-soft);
}
.song-row:active { transform: scale(0.97); box-shadow: var(--clay-press); }
.song-row .idx   { width:20px; text-align:center; color: var(--text-3); font-variant-numeric: tabular-nums; }
.song-row .title { font-size:17px; font-weight:700; color: var(--text-1); }
.song-row .meta  { font-size:13px; color: var(--text-2); }
.song-row .dur   { margin-left:auto; font-size:13px; color: var(--text-2); font-variant-numeric: tabular-nums; }

/* ── 三段式骨架：中段為唯一可捲動區 ── */
.viewport { position: relative; z-index: 1; flex: 1 1 auto; min-height: 0; }
.screen { display: none; height: 100%; overflow-y: auto;
  padding: var(--space-4) var(--content-pad) calc(var(--miniplayer-h) + var(--space-4)); }
.screen.is-active { display: flex; flex-direction: column; }

/* ── player：覆蓋全屏，封面可壓縮，控制列永遠可見 ── */
.screen-player.is-active { padding-bottom: var(--space-4); }
.np-art { flex: 1 1 auto; min-height: 0; aspect-ratio: 1; align-self: center;
  width: 100%; border-radius: var(--radius-lg);
  background: radial-gradient(75% 65% at 30% 22%, var(--hi-strong), transparent 55%),
    conic-gradient(from 200deg, var(--candy-mint), var(--candy-lav), var(--candy-sky), var(--candy-mint));
  box-shadow: 0 18px 36px var(--lav-deep), inset 0 6px 10px var(--hi), inset 0 -12px 18px var(--lav-deep); }
.is-player .miniplayer, .is-player .tabbar { display: none; }   /* 進 player 隱藏整個 dock */

/* ── tab-bar：懸浮膠囊托盤，active = 內凹糖果膠囊 ── */
.tabbar {
  position: relative; z-index: 5; flex: 0 0 auto;
  display: flex; justify-content: space-around; align-items: center;
  height: var(--tabbar-h); margin: 0 var(--space-3) var(--space-2);
  padding-bottom: var(--safe-bottom);
  border-radius: var(--radius-lg); background: var(--surface); box-shadow: var(--clay);
}
.tab { font-size:11px; font-weight:600; color: var(--text-2); text-align:center; cursor:pointer;
  padding: var(--space-2) var(--space-4); border-radius: var(--radius-pill); border:none; background:transparent;
  transition: transform var(--dur-fast) var(--ease), box-shadow var(--dur) var(--ease-soft); }
.tab:active { transform: scale(0.94); }
.tab[aria-current="page"] { color: var(--accent-strong); box-shadow: var(--clay-inset); background: var(--accent-strong-soft); }

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation: none !important; transition: none !important; }
}
\`\`\`
`,"../../.claude/skills/app-fluent/SKILL.md":`---
name: app-fluent
description: Use when generating a single-file mobile App screen demo for the 迴聲 Resona 音樂串流 App in Microsoft Fluent / WinUI style. Triggers on Fluent、Fluent Design、WinUI、Windows 11、微軟設計、Acrylic、Mica、Reveal highlight、Segoe、accent #0067C0、企業層次質感.
user-invocable: true
---

# Fluent（微軟流暢設計） — 迴聲 Resona

## Style Philosophy

Fluent Design 是微軟自 Windows 10（2017）到 Windows 11 / WinUI 3 一脈相承的設計語言，核心是「**光、深度、動態、材質、縮放**」五大要素。它不靠艷色搶眼，而靠**半透明材質的層次堆疊**與**邊緣的細微高光**製造一種「乾淨、克制、企業級」的秩序感——像把 Resona 做成一個 Windows 11 原生 app。整體調性是中性灰階打底、單一品牌藍 accent 點睛、所有互動都有微妙的深度與光暈回饋。

把這支 demo 想成「Windows 11 媒體播放器搬上 iPhone」：底層是一張 **Mica 淺色雲母桌布**（極淡的暖灰，帶幾乎不可見的色彩漸層），所有 UI 浮層——status-bar、navbar、卡片、tab-bar、mini-player——都是一層層 **Acrylic 亞克力磨砂面**疊在 Mica 上。層次靠「材質透明度差 + Reveal 高光邊 + elevation 陰影」三件事堆出來，**不靠彩色、不靠粗線**。

三個視覺辨識特徵：
1. **Mica 底材質 + Acrylic 浮層的雙層體系**：最底 canvas 是 Mica（較不透明、帶極淡漸層暈染，代表「桌布」）；其上所有可互動面是 Acrylic（\`backdrop-filter: blur()\` + 半透白底 + 飽和度提升 + 噪點微疊，代表「漂浮的材質玻璃」）。兩種材質透明度與模糊度刻意不同，製造可感知的層次深度。
2. **Reveal 邊緣高光**：卡片、列表項、按鈕在 rest 態就有 1px 半透白 inset 邊（材質的「亮邊」）；hover/active 時邊框與表面浮現一圈柔光（外圈 accent-tint glow + 內白邊增強），模擬 Windows Reveal 滑鼠靠近時的光暈。這是 Fluent 最關鍵的「活著」的細節。
3. **單一 accent 藍 \`#0067C0\` + 中性灰階層 + 8px 圓角系統**：色彩極度節制，accent 只用在播放鍵、選中態、進度條、active tab、推薦方案描邊；其餘全是 grey scale；圓角統一 8px（小元件 4px、大封面 12px、圓鍵 999px），陰影用系統化 elevation token（2/4/8/16）。

**本輪精修重點（務必落實）**：status-bar **不可**出現黑色瀏海 pill / Dynamic Island 黑膠囊——那與 Fluent 的淺色雲母調性衝突。status-bar 必須是一條**乾淨的 Fluent 淺色 Acrylic 列**，只放左側 9:41 + 右側訊號 / Wi-Fi / 電量三個灰階符號，整條無彩色、無黑塊。同時強化 Acrylic / Mica 的半透層次差，並讓 Reveal 高光在 rest 與 hover 兩態都清楚可見。

## Design Tokens (CSS variables)

所有數值集中於此。間距走 **8pt 系統**（4 / 8 / 12 / 16 / 20 / 24 / 32），字級、圓角、陰影、材質全部 token 化，元件只引用變數、不寫死數字。

\`\`\`css
:root {
  /* ── 手機外殼專用 ── */
  --screen-w: 390px;
  --screen-h: 844px;
  --statusbar-h: 44px;
  --tabbar-h: 64px;
  --miniplayer-h: 56px;
  --safe-bottom: 24px;
  --screen-radius: 44px;          /* 模擬手機螢幕圓角 */

  /* ── 8pt 間距尺度（唯一允許的間距來源）── */
  --sp-1: 4px;
  --sp-2: 8px;
  --sp-3: 12px;
  --sp-4: 16px;
  --sp-5: 20px;
  --sp-6: 24px;
  --sp-8: 32px;

  /* ── Fluent accent（單一品牌藍，全頁唯一彩色）── */
  --accent: #0067C0;              /* Fluent 標準 accent */
  --accent-light: #2E8FE0;        /* hover / 漸層上緣 */
  --accent-dark: #004C8C;         /* pressed */
  --accent-tint: rgba(0,103,192,0.12);   /* 選中態填充 */
  --accent-tint-strong: rgba(0,103,192,0.20); /* active / 按下加深 */
  --on-accent: #ffffff;

  /* ── 中性灰階層（Fluent neutral palette，淺色主題）── */
  --grey-2:  #faf9f8;            /* 最底 canvas */
  --grey-4:  #f3f2f1;            /* 內容區底 */
  --grey-8:  #edebe9;            /* 分隔 / 次表面 */
  --grey-20: #d2d0ce;            /* border / stroke */
  --grey-40: #a19f9d;           /* 次要圖示 */
  --grey-90: #605e5c;            /* 次要文字 */
  --grey-130: #323130;          /* 主要文字 */
  --grey-160: #201f1e;          /* 最深標題 */

  /* ── Acrylic / Mica 材質（精修：拉開兩者層次差）── */
  /* Mica：桌布底材，較不透明、帶極淡暖灰漸層暈，模糊度低 */
  --mica-bg: rgba(246,245,244,0.92);
  --mica-tint-a: rgba(0,103,192,0.05);   /* Mica 上極淡的左上色暈 */
  --mica-tint-b: rgba(160,159,157,0.06); /* Mica 上極淡的右下灰暈 */
  /* Acrylic：浮層材質，更透、更模糊、飽和度更高（玻璃感更強）*/
  --acrylic-bg: rgba(252,252,252,0.72);
  --acrylic-bg-thin: rgba(252,252,252,0.55);  /* 更薄的 acrylic（搜尋框 / chip）*/
  --acrylic-blur: blur(30px) saturate(135%);
  --acrylic-blur-thin: blur(18px) saturate(125%);
  --noise-opacity: 0.04;                   /* 噪點微疊強度 */

  /* ── 表面與文字（語意 token）── */
  --surface: #ffffff;
  --surface-alt: var(--grey-4);
  --card-bg: rgba(255,255,255,0.80);
  --card-bg-hover: rgba(255,255,255,0.92);
  --fg: var(--grey-160);
  --fg-secondary: var(--grey-90);
  --fg-disabled: var(--grey-40);
  --stroke: var(--grey-20);
  --stroke-soft: rgba(0,0,0,0.06);

  /* ── 圓角（Fluent 統一 8px 系統）── */
  --radius-xs: 4px;             /* chip / 小標籤 */
  --radius: 8px;               /* 標準：卡片 / 按鈕 / 輸入框 */
  --radius-lg: 12px;           /* 大封面 / 浮層 */
  --radius-pill: 999px;        /* 圓形播放鍵 / 進度拖點 */

  /* ── 深度陰影（Fluent elevation，比 Material 更輕薄）── */
  --shadow-2:  0 1px 2px rgba(0,0,0,0.06), 0 0.5px 1px rgba(0,0,0,0.04);
  --shadow-4:  0 1.6px 3.6px rgba(0,0,0,0.08), 0 0.3px 0.9px rgba(0,0,0,0.06);
  --shadow-8:  0 3.2px 7.2px rgba(0,0,0,0.10), 0 0.6px 1.8px rgba(0,0,0,0.07);
  --shadow-16: 0 6.4px 14.4px rgba(0,0,0,0.12), 0 1.2px 3.6px rgba(0,0,0,0.08);
  /* Reveal 邊緣高光：rest 態的 1px inset 半透白；hover 的外圈柔光 */
  --reveal-border: inset 0 0 0 1px rgba(255,255,255,0.65);
  --reveal-border-strong: inset 0 0 0 1px rgba(255,255,255,0.85);
  --reveal-glow: 0 0 0 1px var(--accent-tint), 0 0 16px rgba(0,103,192,0.20);

  /* ── 動態（統一 easing，僅 transform/opacity）── */
  --ease-fluent: cubic-bezier(0.16, 1, 0.3, 1);   /* WinUI 標準減速曲線 */
  --dur-fast: .12s;
  --dur: .18s;

  /* ── 字體（Segoe 風，回退到系統無襯線）── */
  --font: 'Segoe UI Variable', 'Segoe UI', 'PingFang TC', 'Noto Sans TC',
          'Microsoft JhengHei', system-ui, -apple-system, sans-serif;
  --font-display: 'Segoe UI Variable Display', 'Segoe UI Semibold', var(--font);
}
\`\`\`

## Typography Scale

Fluent 的字級偏細、字重靠 Semibold 拉層次（標題用 600，內文 400），字距收緊（標題級 -0.01em，display 級 -0.02em）。完整階梯：

| 級距 | 大小 / 行高 / 字重 / 字距 | 用途 |
| --- | --- | --- |
| caption | 11px / 1.4 / 400 / 0 | status-bar、時長、播放次數、tab 文字、輔助標籤 |
| body-sm | 13px / 1.45 / 400 / 0 | 列表副標、藝人名、chip 文字、mini-player 藝人 |
| body | 15px / 1.5 / 400 / 0 | 段落、歌名、功能說明、song-row 主標 |
| subtitle | 17px / 1.4 / 600 / -0.005em | 卡片標題、區塊小標、tab active 文字、方案名 |
| title | 22px / 1.3 / 600 / -0.01em | navbar 大標題（home「迴聲」、各屏標頭） |
| display | 28px / 1.2 / 600 / -0.02em | player 曲名、profile 頁主標、訂閱價格 |

- 主要文字色 \`--fg\`（#201f1e）對 \`--surface\`（#fff）對比 > 15:1；次要文字 \`--fg-secondary\`（#605e5c）對白底約 5.7:1，皆過 WCAG AA。
- accent 藍 \`#0067C0\` 對白底約 5.0:1，可作為文字（連結、active tab 標籤、價格）使用。
- 即使浮層半透，所有正文都必須坐在「足夠不透明的色塊」上（\`--card-bg\` ≥ 0.80 或實心 \`--surface\`），不可讓文字直接壓在模糊背景導致對比不足。

## Component & Layout

整頁是**一支虛擬 iPhone**：最外層 \`.device\`（390×844、\`--screen-radius\` 圓角、\`overflow:hidden\`、置中、底層 canvas 為 **Mica 淺色雲母**）。版面是固定三明治：**status-bar 永遠釘頂 → 當前畫面的可捲動內容區 → mini-player + tab-bar 永遠釘底**。

### 整體框架（無跑版的硬規範）

- \`.device\` 鎖死 \`width:390px; height:844px\`（不是 min-height）、\`overflow:hidden\`、\`display:flex; flex-direction:column\`，內部三段：\`.statusbar\`（固定高 44px）+ \`.stage\`（\`flex:1; position:relative; overflow:hidden\`）+ \`.dock\`（mini-player + tab-bar，固定高）。
- **多畫面切換**用「同一 \`.stage\` 內疊放多個 \`.screen\`、以 class 控制顯示」：每個畫面（home/search/detail/player/library）是一個絕對定位填滿 \`.stage\` 的 \`.screen\`，各自 \`overflow-y:auto\`，只有 active 的那張 \`display:flex/block\` 可見，其餘 \`display:none\`。切 tab / 點卡 / 點 mini-player 只是換哪張 \`.screen\` 可見。
- **每張可捲動畫面**自己 \`padding: var(--sp-4)\`，底部 \`padding-bottom\` 必須 ≥ \`mini-player + tab-bar\` 高度（用 \`calc(var(--miniplayer-h) + var(--tabbar-h) + var(--safe-bottom) + var(--sp-2))\`），確保內容捲到底也不被 dock 遮住。
- **status-bar 與 dock 永遠在原位**，不隨內容捲動；它們是 \`.device\` 的直接子層或絕對定位於 \`.device\`。
- **文字防溢出**：所有單行標題用 \`overflow:hidden; text-overflow:ellipsis; white-space:nowrap\`；卡片標題最多兩行用 \`-webkit-line-clamp:2\`。封面圖一律 \`aspect-ratio:1; object-fit:cover\` 不變形。

逐屏與元件規範：

### \`status-bar\`（屏 1，data-screen="status-bar"）

- 固定頂部、高 \`--statusbar-h\`（44px）、**Fluent 淺色 Acrylic 列**（\`--acrylic-bg\` + \`--acrylic-blur\` + \`--reveal-border\` 底亮邊）。
- **精修：絕對不放黑色瀏海 / Dynamic Island pill。** 整條乾淨淺色，無黑塊、無彩色。
- 左側時間 **9:41**（caption 級、\`--fg\`、字重 600）。
- 右側依序：訊號格、Wi-Fi、電量符號——用 inline SVG 或 unicode 純字符繪製（如訊號 \`▂▄▆█\`、Wi-Fi 扇形、電量電池框），**全部 \`--fg\` 灰階填色**，彼此間距 \`--sp-2\`。
- 上下置中、左右 padding \`var(--sp-5)\`（20px）。

### \`home\`（屏 2，data-screen="home"）

頂部 navbar（sticky 於本畫面頂）：左大標題 **迴聲**（title 級 Semibold），其下 body-sm 灰字 **Resona**；右上頭像圓鈕（Acrylic 圓 + Reveal）。navbar 下方留 \`--sp-4\`。內容至少三個區段，每段有「區段標題（subtitle）+ 右側『查看全部』連結（body-sm、accent、cursor:pointer）」的 \`.section-head\`：

1. **每日迴聲（每日推薦 banner）**：一張橫幅 Acrylic 大卡（\`.daily-card\`，\`--card-bg\` + blur + \`--shadow-8\` + Reveal 邊框），左側方形封面縮圖（\`assets/cover-1.webp\`，\`--radius\`），右側文案「每日迴聲 · 個人化每日推薦」+ 副標「為你挑選 30 首 · 林知夏、夜行列車…」+ 底部 accent **▶ 播放** 圓鈕。整卡 cursor:pointer，點擊 → 切到 detail。
2. **為你精選歌單（卡牆）**：\`.section-head\` 標「為你精選歌單」+「查看全部」。下方 **7 張歌單卡**，2 欄 grid（\`gap: var(--sp-3)\`），**完整列出 7 個歌單名**：\`浪潮回聲 / 深夜公路 / 島嶼晨光 / 雨後散步 / 城市心跳 / 山海之間 / 失重時刻\`。每卡：頂部方形封面（依序 \`cover-1\`…\`cover-6\`，第 7 張重用 \`cover-1\`，\`--radius\`、\`--shadow-4\`）+ 下方歌單名（subtitle，可省略號）+ 副標 body-sm（如「24 首 · 約 1 小時」）。卡片 hover 升 elevation + Reveal glow，cursor:pointer，點擊 → 切到 detail。
3. **熱門排行（編號清單）**：\`.section-head\` 標「熱門排行」+「查看全部」。下方至少 5 條 \`.song-row\`（左排名數字 accent、中歌名+藝人、右時長），列出歌名與藝人混排（如 \`〈霓虹巷弄〉海平面樂團\`、\`〈候鳥地圖〉夜行列車\`、\`〈靜電〉Echo Lab\`）。點任一列 → 切到 player。
4. **功能徽章列**：把 6 個功能名以小 Acrylic 徽章帶過（\`無損音質串流 / 離線下載 / 跨裝置接續播放 / 歌詞同步 / 共享音樂庫 / 智慧推薦\`，依 brief 為準），確保 6 功能名出現在可見文字。

### \`search\`（屏 3，data-screen="search"）

- 頂部 navbar：title「搜尋」。
- **搜尋框**：薄 Acrylic 輸入框（\`.search-box\`，\`--acrylic-bg-thin\` + \`--acrylic-blur-thin\`、\`--radius\`、\`--stroke\` 邊、左側放大鏡 icon、placeholder「搜尋歌曲、藝人、歌單」），:focus-within 時加 \`--reveal-glow\` + 底部 accent 2px underline，cursor:text。
- **4 分類 chip**：\`華語 / 獨立 / 電子 / 放鬆\`（依 brief 4 分類為準），第一個 active。\`.chip\` 未選為 \`--acrylic-bg-thin\` 薄玻璃 + \`--stroke\` 邊、選中為 \`--accent-tint\` 底 + accent 文字 + accent 邊。cursor:pointer，hover Reveal。
- **熱門歌曲（編號清單）**：\`.section-head\`「熱門歌曲」。至少 6 條 \`.song-row\`（左序號、中歌名+藝人、右**時長**如 \`03:42\`、最右行尾 ⋯ 選單鈕）。列出歌名 \`〈藍色信號〉〈霓虹巷弄〉〈候鳥地圖〉〈靜電〉〈晚風練習曲〉〈無人車站〉\` 與藝人 \`海平面樂團 / 夜行列車 / Echo Lab / 何遠 / 林知夏\`。點列 → player。
- **熱門藝人**：\`.section-head\`「熱門藝人」+ 橫向捲動的圓形頭像 + 藝人名 chip 列（列出 5 藝人）。

### \`detail\`（屏 4，data-screen="detail"）

主打專輯 **島嶼晨光**。

- 頂部返回列：左 chevron-left **返回鈕**（cursor:pointer，→ 回 home）+ 右 ⋯ 選單。
- **大封面**：方形 \`assets/cover-3.webp\`（\`.detail-cover\`，寬約 200px 置中或靠左，\`--radius-lg\`、\`--shadow-16\`）。
- 元資料區：專輯名 **島嶼晨光**（title 級）+ 藝人 **林知夏**（subtitle、accent 可點）+ 一行 body-sm 灰字「2026 · 9 首 · 約 34 分鐘」（年份 / 曲目數 / 總時長）。
- **動作列**：accent filled **▶ 播放全部** 主鈕（\`.btn-primary\`，cursor:pointer → player）+ outline **⤮ 隨機** 次鈕 + ⤓ 下載 + ♡ 收藏（皆 Acrylic outline、Reveal hover）。
- **9 首完整曲目清單**：\`.song-row\`，grid 欄位 \`序號 / (歌名+藝人) / 時長 / ▶或⋯\`。全部列出：\`〈藍色信號〉〈霓虹巷弄〉〈候鳥地圖〉〈靜電〉〈晚風練習曲〉〈無人車站〉〈潮間帶〉〈第七個夏天〉〈月台九又四分之三〉\`，每首歌名下小字藝人、右側時長（如 \`03:18\`）。**當前播放**的 \`晚風練習曲\` 標 \`.is-playing\`（accent 文字 + 🔊 小喇叭符號）。點任一列 → player。

### \`player\`（屏 5，data-screen="player"）

正在播放 **林知夏** —〈**晚風練習曲**〉。**此畫面不顯示 mini-player**（mini-player 是 player 的收合態）。

- 頂部收合列：左 chevron-down **收合鈕**（cursor:pointer → 回上一個畫面 / home）+ 中央小字「正在播放 · 島嶼晨光」+ 右 ⋯。
- **大封面** \`.now-playing\`：方形 \`assets/cover-3.webp\`（\`--radius-lg\`、\`--shadow-16\`，置中、寬約 280px），上下留 \`--sp-6\`。
- 曲名 **晚風練習曲**（display 級）+ 藝人 **林知夏**（body-sm、\`--fg-secondary\`），下方 body-sm「島嶼晨光」（專輯名）。
- **音質徽章**：小 Acrylic pill「無損音質串流」（accent-tint 底 + accent 文字）。
- **進度條** \`.progress\`：灰軌 \`--grey-8\` + accent 已播段（約 38%）+ 圓形 accent 拖點；兩端時間 **02:47** / **04:05**（目前 / 總長，caption 灰字）。
- **控制列**：\`⏮ 上一首\`（圖示鈕）/ **大圓 accent 播放/暫停鍵**（\`.play-fab\`，\`--radius-pill\`、accent 漸層填充、\`--shadow-8\`，預設顯 \`⏸\`、按下切 \`▶\`，cursor:pointer）/ \`⏭ 下一首\`；外側 \`🔀 隨機\`（toggle active 變 accent）/ \`🔁 循環\`（toggle active 變 accent）兩個灰圖示鈕。
- **歌詞同步**：下方 \`.lyrics\` 三行歌詞，**中間當前句逐字高亮**（用 accent 文字 + 左到右 \`background-clip:text\` 漸層或單句 accent），上下句為 \`--fg-disabled\`。例：上句灰「霓虹熄滅以前」/ 當前句 accent「晚風吹過你的側臉」/ 下句灰「我把整座城市調成靜音」。

### \`library\`（屏 6，data-screen="library"）

我的音樂庫。

- 頂部 navbar「音樂庫」title + 右上 ⤓ 下載管理 圓鈕。
- **分頁 tab**（\`.seg\`，三段式 segmented）：\`歌單 / 專輯 / 已下載\`，第一個 active（accent-tint 底 + accent 文字 + Reveal），cursor:pointer。
- **收藏歌單清單**：每列 \`.lib-row\`（左小封面縮圖 \`cover-N\`、中歌單名 + 副標「曲數 · 建立者」如「島嶼晨光 · 9 首」、右 chevron）。至少列 4–5 個歌單（重用 \`浪潮回聲 / 深夜公路 / 島嶼晨光 / 雨後散步\`）。cursor:pointer → detail。
- **離線下載分區**：\`.section-head\`「離線下載」，列出 2–3 個已下載項目 + ⤓ 下載完成圖示 + 容量小字。
- **共享音樂庫卡**：Acrylic 卡，標「共享音樂庫 · Family 方案最多 6 人共建」+ 重疊頭像群 + accent「邀請成員」鈕。

### \`profile\`（屏 7，data-screen="profile"）

- 頂部**使用者卡**：大頭像 + 暱稱「夜行的人」+ email 樣示 \`listener@resona.app\` + accent「編輯個人檔案」小鈕。
- **播放偏好**區（\`.pref-list\`，Fluent 設定列樣式）：每列左 icon + 中標題 + 右控制。至少含：「無損音質串流」（toggle on）、「**跨裝置接續播放**」（toggle on，副標「手機 · 平板 · 車機 無縫接續」）、「離線下載品質」（右值「無損」）、「歌詞同步」（toggle on）。toggle 用 Fluent 開關（軌 + 圓鈕，on 態 accent 軌）。
- **3 訂閱方案卡**（縱列，價格一字不差，後綴「／月」全形斜線）：
  - **免費** — **NT$ 0** ／月：隨機播放、含廣告、標準音質。outline Acrylic 卡，標「目前方案」徽章。
  - **Plus** — **NT$ 149** ／月：無廣告、無損音質串流、離線下載。**推薦卡**：accent 1.5px 描邊 + \`--accent-tint\` 表面 + \`--reveal-glow\`，右上「推薦」accent 徽章。
  - **Family** — **NT$ 249** ／月：6 帳號、共享音樂庫、家長控制。outline Acrylic 卡。
  - 每卡：頂部方案名（subtitle）+ 大價格（display + accent）+「／月」+ 下方權益小列表（每條前置 ✓ accent 勾）+ 底部「選擇方案」鈕（推薦卡為 filled accent，其餘為 outline）。

### mini-player（迷你播放列，常駐於 home/search/library/profile，及 detail）

- 一條**常駐迷你播放列** \`.miniplayer\`，**緊貼在 tab-bar 正上方**（dock 內、tab-bar 之上），高 \`--miniplayer-h\`（56px），Acrylic 材質 + 頂緣 Reveal 亮邊 + \`--shadow-8\`（彷彿浮在 tab-bar 上）。
- 內容：左 36px 方形封面縮圖（\`cover-3\`，\`--radius-xs\`）+ 中「**晚風練習曲**」（body，省略號）/「林知夏」（body-sm 灰，省略號）+ 右側 **▶/⏸ 播放/暫停**圓鈕（accent，cursor:pointer，點擊只切播放態、不換畫面）。
- 底部有一條 1px accent 細進度線（約 38%），表示當前播放進度。
- **點擊封面或文字區 → 展開到 player 畫面**（cursor:pointer）。
- **顯示規則**：在 home / search / library / profile / detail 顯示；在 **player 畫面隱藏**（player 是它的展開全屏態）。可用：當 player 為 active screen 時，給 \`.dock\` 加 class 把 \`.miniplayer\` \`display:none\`。

### \`tab-bar\`（屏 8，data-screen="tab-bar"）

- 底部固定、Acrylic 材質（\`--acrylic-bg\` + blur + 頂緣 1px \`--stroke-soft\`），高 \`--tabbar-h\` + \`--safe-bottom\` 安全區。
- 4 個 tab：**首頁 / 搜尋 / 音樂庫 / 我的**，每 tab 上 icon 下 caption 文字。
- **active 態**（預設首頁）：icon 與文字轉 \`--accent\`、上方 2px accent 指示條 + 淡 \`--accent-tint\` 膠囊底；其餘 tab \`--grey-40\`。tab hover Reveal、cursor:pointer。
- 點 tab → 切換對應 \`.screen\` 並更新 active 樣式（首頁→home、搜尋→search、音樂庫→library、我的→profile）。

## Do / Don't

| Do | Don't |
| --- | --- |
| status-bar 是乾淨的淺色 Fluent Acrylic 列，只放 9:41 + 訊號 + 電量 | **在 status-bar 放黑色瀏海 / Dynamic Island 黑膠囊**（與淺色雲母衝突） |
| Mica（底）與 Acrylic（浮層）刻意拉開透明度 / 模糊度，做出雙層材質深度 | 底與浮層用同一種半透明，層次糊成一片 |
| 卡片 / 列表 rest 態就有 1px Reveal 白邊，hover 再疊 accent-tint glow | hover 才有邊、rest 態死板無材質感 |
| 全頁僅用單一 accent \`#0067C0\` 點睛，其餘走中性灰階 | 同屏出現多種搶眼彩色破壞企業克制感 |
| 間距只用 \`--sp-*\` 8pt 尺度、圓角只用 \`--radius-*\`、陰影只用 \`--shadow-*\` | 隨手寫 7px / 13px / 不一致圓角與濃黑陰影 |
| 可點元素全部 cursor:pointer + :hover/:active 回饋，播放鍵 ▶/⏸ 兩態 | 卡片 / 按鈕點下去毫無回饋 |
| 字重靠 Semibold（600）拉層次、字距收緊 | 全頁同一字重、靠放大字級硬撐標題 |
| 文字坐在 ≥0.80 不透明色塊上確保 AA 對比 | 文字直接壓在模糊背景上導致對比不足 |
| 單行標題 ellipsis、封面 object-fit:cover，內容絕不溢出 / 被 dock 遮住 | 長歌名撐爆卡片、捲到底被 mini-player 蓋住 |

## Motion Specification

- 所有過場只動 \`transform\` / \`opacity\`，用 \`--ease-fluent\`（WinUI 減速曲線）+ \`--dur\`（0.18s）/ \`--dur-fast\`（0.12s）。
- Reveal hover：\`box-shadow\` 過渡（白邊 → 白邊+glow）+ 微 \`transform: translateY(-1px)\`；active 按下 \`translateY(1px) scale(0.99)\`。
- 畫面切換：新 \`.screen\` \`opacity 0→1\` + \`translateY(8px)→0\` 淡入；不做位移會 reflow 的動畫。
- mini-player ▶/⏸ 切換：圖示 opacity 交替，無位移。

## Accessibility (Reduced Motion)

\`\`\`css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    transition: none !important;
    animation: none !important;
    scroll-behavior: auto !important;
  }
}
\`\`\`

- reduced motion 下：所有 hover/active/畫面切換**只保留最終狀態**（顏色 / Reveal 邊照常顯示，只是無過渡）。內容不依賴動畫即完整可讀。
- 互動可達性：可點元素用 \`<button>\` / \`role="button"\` + \`tabindex\`，焦點態給 \`--reveal-glow\` 作 focus ring；圖示鈕補 \`aria-label\`。

## Required Output Contract

遵循 \`.claude/agents/style-page-builder.md\` 的「**App 風格額外要求**」：

- \`<body data-viewport="mobile">\` 必須存在。
- 8 個 \`<section data-screen="<id>">\`，固定順序：\`status-bar → home → search → detail → player → library → profile → tab-bar\`，每個 id 各出現恰一次（mini-player 屬於 dock 區、不額外占一個 data-screen，但須實作）。
- status-bar 顯示 **9:41**，且**不含黑色瀏海 / Dynamic Island 黑膠囊**——乾淨淺色 Acrylic 列。
- tab-bar 四 tab：**首頁 / 搜尋 / 音樂庫 / 我的**。
- 所有「必抄」字串（品牌 迴聲/Resona、6 功能名、7 歌單、9 歌名、5 藝人、4 分類 chip、正在播放 林知夏—〈晚風練習曲〉）出現在**可見 body 文字**中（不可只放 \`aria-label\` / \`data-*\`）。
- 三層定價精確字串於同一畫面（profile）：**免費 NT$ 0**、**Plus NT$ 149**、**Family NT$ 249**（後綴「／月」全形斜線）；標示「目前方案」與「推薦」。
- **可互動多畫面導覽**（純 vanilla JS）：tab 切換（4 tab → home/search/library/profile）+ 卡片 → detail（每日迴聲卡 / 歌單卡 / library 列）+ 曲目列 → player + mini-player 點擊 → player + detail/player 返回鍵 → 回上一畫面；mini-player ▶/⏸ 兩態切換；player 大播放鍵 ▶/⏸ 兩態切換。
- mini-player 常駐於 home/search/library/profile/detail，**player 畫面隱藏**。
- \`<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\`。
- 單檔 ≤ 200 KB（不含 assets）、無外部 CDN（\`<link>/<script>/<img>\` 不可 \`http(s)://\`）、CSS 變數驅動、無 framework CSS、繁體中文、無 LLM 自白。
- 任何動畫必附 \`@media (prefers-reduced-motion: reduce)\` 且只動 \`transform\` / \`opacity\`。

## Required Images

使用**真實風格專輯封面圖**，共 6 張方形封面：\`assets/cover-1.webp\` … \`assets/cover-6.webp\`（各 600×600，抽象、無文字、無 logo，各具不同氛圍）。用法：

- **home** 每日迴聲 banner 縮圖：\`cover-1\`；歌單卡牆 7 張卡封面：依序 \`cover-1\`…\`cover-6\`，第 7 張重用 \`cover-1\`。
- **detail** 主打專輯 \`島嶼晨光\` 大封面：\`assets/cover-3.webp\`。
- **player** 大封面 \`.now-playing\`：同 \`assets/cover-3.webp\`。
- **mini-player** 縮圖：\`cover-3\`（與正在播放一致）。
- **library** 小封面縮圖：沿用對應歌單的 cover-N。
- **Fallback**：若圖檔不存在，以 CSS 漸層色塊替代——\`linear-gradient(135deg, var(--accent-light), var(--grey-20))\` 填滿同尺寸 \`--radius\` 圓角方塊，維持版面不破。封面元素一律 \`aspect-ratio:1; background-size:cover\`。

\`\`\`json
{ "style": "Microsoft Fluent / WinUI", "images": [ … 見 assets-manifest.json，共 6 張 ] }
\`\`\`

## Reference Snippet

可直接套用的 Fluent 核心 CSS（手機殼 / Mica 雲母 / Acrylic / 噪點 / Reveal / 乾淨 statusbar / section / song-row / 卡片 / now-playing / 進度條 / mini-player / tab-bar / 訂閱卡 / reduced-motion），≥ 60 行：

\`\`\`css
/* ── 手機外殼：固定三明治 ── */
.device {
  position: relative;
  width: var(--screen-w);
  height: var(--screen-h);
  margin: 0 auto;
  border-radius: var(--screen-radius);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: var(--shadow-16);
  /* Mica 雲母底：淺色 + 極淡雙色暈染（桌布感）*/
  background:
    radial-gradient(120% 90% at 0% 0%, var(--mica-tint-a), transparent 55%),
    radial-gradient(120% 90% at 100% 100%, var(--mica-tint-b), transparent 55%),
    var(--mica-bg);
}
/* 全域噪點微疊（材質顆粒感，覆蓋 Mica 與 Acrylic） */
.device::after {
  content: ""; position: absolute; inset: 0; z-index: 50;
  pointer-events: none; opacity: var(--noise-opacity);
  background-image: url("data:image/svg+xml;utf8,\\
<svg xmlns='http://www.w3.org/2000/svg' width='80' height='80'>\\
<filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2'/></filter>\\
<rect width='100%25' height='100%25' filter='url(%23n)'/></svg>");
}

/* ── Acrylic 浮層材質（比 Mica 更透更模糊，玻璃感更強）── */
.acrylic {
  background: var(--acrylic-bg);
  backdrop-filter: var(--acrylic-blur);
  -webkit-backdrop-filter: var(--acrylic-blur);
  box-shadow: var(--reveal-border);   /* rest 態 1px Reveal 內白邊 */
}

/* ── 乾淨的 Fluent 淺色狀態列（無黑色瀏海）── */
.statusbar {
  flex: 0 0 var(--statusbar-h); z-index: 40;
  display: flex; align-items: center; justify-content: space-between;
  padding: 0 var(--sp-5);
  font: 600 11px/1 var(--font); color: var(--fg);
  background: var(--acrylic-bg);
  backdrop-filter: var(--acrylic-blur);
  -webkit-backdrop-filter: var(--acrylic-blur);
  box-shadow: var(--reveal-border);
}
.statusbar .sys { display: flex; align-items: center; gap: var(--sp-2); color: var(--fg); }

/* ── 中央舞台 + 可切換畫面 ── */
.stage { position: relative; flex: 1; overflow: hidden; }
.screen {
  position: absolute; inset: 0; display: none;
  overflow-y: auto; padding: var(--sp-4);
  padding-bottom: calc(var(--miniplayer-h) + var(--tabbar-h) + var(--safe-bottom) + var(--sp-2));
}
.screen.is-active { display: block; animation: scrnIn var(--dur) var(--ease-fluent); }
@keyframes scrnIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }

/* ── 區段標頭 + 查看全部 ── */
.section-head {
  display: flex; align-items: baseline; justify-content: space-between;
  margin: var(--sp-5) 0 var(--sp-3);
}
.section-head h2 { font: 600 17px/1.4 var(--font); letter-spacing: -.005em; color: var(--fg); }
.section-head a { font: 400 13px/1 var(--font); color: var(--accent); cursor: pointer; }

/* ── Fluent 卡片 + Reveal hover ── */
.card {
  background: var(--card-bg);
  backdrop-filter: var(--acrylic-blur); -webkit-backdrop-filter: var(--acrylic-blur);
  border-radius: var(--radius);
  box-shadow: var(--shadow-4), var(--reveal-border);
  padding: var(--sp-3); cursor: pointer;
  transition: box-shadow var(--dur) var(--ease-fluent), transform var(--dur) var(--ease-fluent);
}
.card:hover { background: var(--card-bg-hover); box-shadow: var(--shadow-8), var(--reveal-glow), var(--reveal-border-strong); transform: translateY(-1px); }
.card:active { transform: translateY(1px) scale(.99); }
.card .cover { aspect-ratio: 1; border-radius: var(--radius); object-fit: cover; box-shadow: var(--shadow-2);
  background: linear-gradient(135deg, var(--accent-light), var(--grey-20)); }
.card .name { font: 600 17px/1.4 var(--font); color: var(--fg); margin-top: var(--sp-2);
  overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }

/* ── 分類 chip（薄 Acrylic）── */
.chip {
  display: inline-flex; align-items: center; padding: 6px var(--sp-3);
  margin: 0 var(--sp-2) var(--sp-2) 0; border-radius: var(--radius-xs);
  font: 400 13px/1 var(--font); color: var(--fg-secondary); cursor: pointer;
  background: var(--acrylic-bg-thin); backdrop-filter: var(--acrylic-blur-thin);
  border: 1px solid var(--stroke); transition: box-shadow var(--dur-fast) var(--ease-fluent);
}
.chip:hover { box-shadow: var(--reveal-glow); }
.chip[aria-selected="true"], .chip.is-active {
  background: var(--accent-tint); color: var(--accent); border-color: var(--accent);
}

/* ── 歌曲 / 列表項 ── */
.song-row {
  display: grid; grid-template-columns: 28px 1fr auto 32px; align-items: center; gap: var(--sp-3);
  padding: var(--sp-2) var(--sp-2); border-radius: var(--radius); color: var(--fg); cursor: pointer;
  transition: background var(--dur-fast) var(--ease-fluent), box-shadow var(--dur-fast) var(--ease-fluent);
}
.song-row:hover { background: var(--card-bg); box-shadow: var(--reveal-border), var(--reveal-glow); }
.song-row:active { transform: translateY(1px); }
.song-row .idx { color: var(--fg-secondary); font: 400 13px/1 var(--font); text-align: center; }
.song-row .title { font: 400 15px/1.4 var(--font); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.song-row .artist { font: 400 13px/1.4 var(--font); color: var(--fg-secondary); }
.song-row .dur { font: 400 11px/1 var(--font); color: var(--fg-secondary); }
.song-row.is-playing .title, .song-row.is-playing .idx { color: var(--accent); font-weight: 600; }

/* ── 播放器大封面 + fallback 漸層 ── */
.now-playing {
  width: 280px; max-width: 76%; aspect-ratio: 1; margin: var(--sp-6) auto;
  border-radius: var(--radius-lg); box-shadow: var(--shadow-16), var(--reveal-border);
  background: url("assets/cover-3.webp") center/cover no-repeat,
              linear-gradient(135deg, var(--accent-light), var(--grey-20));
}

/* ── 進度條 ── */
.progress { height: 4px; border-radius: var(--radius-pill); background: var(--grey-8); position: relative; }
.progress > .bar { height: 100%; width: 38%; border-radius: inherit; background: var(--accent); }
.progress > .knob { position: absolute; left: 38%; top: 50%; width: 12px; height: 12px;
  transform: translate(-50%, -50%); border-radius: var(--radius-pill);
  background: var(--accent); box-shadow: var(--shadow-4); }
.progress-row { display: flex; justify-content: space-between; font: 400 11px/1 var(--font); color: var(--fg-secondary); margin-top: var(--sp-2); }

/* ── 大圓 accent 播放鍵（▶/⏸ 兩態）── */
.play-fab {
  width: 64px; height: 64px; border: none; border-radius: var(--radius-pill); cursor: pointer;
  display: grid; place-items: center; color: var(--on-accent); font-size: 24px;
  background: linear-gradient(180deg, var(--accent-light), var(--accent));
  box-shadow: var(--shadow-8), var(--reveal-border);
  transition: transform var(--dur-fast) var(--ease-fluent);
}
.play-fab:hover { transform: scale(1.04); box-shadow: var(--shadow-16), var(--reveal-glow); }
.play-fab:active { transform: scale(.96); }

/* ── 迷你播放列（dock，tab-bar 之上）── */
.dock { flex: 0 0 auto; z-index: 40; }
.miniplayer {
  height: var(--miniplayer-h); display: grid; grid-template-columns: 36px 1fr 40px;
  align-items: center; gap: var(--sp-3); padding: 0 var(--sp-4); cursor: pointer;
  background: var(--acrylic-bg); backdrop-filter: var(--acrylic-blur); -webkit-backdrop-filter: var(--acrylic-blur);
  box-shadow: var(--shadow-8), var(--reveal-border); position: relative;
}
.miniplayer .mp-cover { width: 36px; height: 36px; border-radius: var(--radius-xs); object-fit: cover;
  background: linear-gradient(135deg, var(--accent-light), var(--grey-20)); }
.miniplayer .mp-title { font: 400 15px/1.2 var(--font); color: var(--fg); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.miniplayer .mp-artist { font: 400 13px/1.2 var(--font); color: var(--fg-secondary); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.miniplayer .mp-play { width: 40px; height: 40px; border: none; border-radius: var(--radius-pill); cursor: pointer;
  background: var(--accent-tint); color: var(--accent); display: grid; place-items: center; font-size: 16px; }
.miniplayer::after { content: ""; position: absolute; left: 0; bottom: 0; height: 1.5px; width: 38%; background: var(--accent); }
.dock.player-active .miniplayer { display: none; }   /* player 畫面隱藏 mini-player */

/* ── 訂閱卡：Plus 推薦態 ── */
.plan { padding: var(--sp-4); border-radius: var(--radius); margin-bottom: var(--sp-3);
  background: var(--card-bg); box-shadow: var(--shadow-4), var(--reveal-border); }
.plan.is-recommended { border: 1.5px solid var(--accent); background: var(--accent-tint);
  box-shadow: var(--shadow-8), var(--reveal-glow); }
.plan .pname { font: 600 17px/1.4 var(--font); color: var(--fg); }
.plan .price { font: 600 28px/1.1 var(--font-display); letter-spacing: -.02em; color: var(--accent); }

/* ── 底部 tab-bar ── */
.tabbar {
  display: grid; grid-template-columns: repeat(4, 1fr);
  height: calc(var(--tabbar-h) + var(--safe-bottom)); padding-bottom: var(--safe-bottom);
  background: var(--acrylic-bg); backdrop-filter: var(--acrylic-blur); -webkit-backdrop-filter: var(--acrylic-blur);
  border-top: 1px solid var(--stroke-soft);
}
.tab { position: relative; display: flex; flex-direction: column; align-items: center; justify-content: center;
  gap: 3px; color: var(--grey-40); font: 400 11px/1 var(--font); cursor: pointer;
  transition: color var(--dur-fast) var(--ease-fluent); }
.tab:hover { color: var(--accent-light); }
.tab.is-active { color: var(--accent); }
.tab.is-active::before { content: ""; position: absolute; top: 0; width: 28px; height: 2px;
  border-radius: var(--radius-pill); background: var(--accent); }

/* ── Reduced motion ── */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { transition: none !important; animation: none !important; scroll-behavior: auto !important; }
}
\`\`\`
`,"../../.claude/skills/app-glassmorphism/SKILL.md":`---
name: app-glassmorphism
description: Use when generating a single-file mobile App screen demo for the 迴聲 Resona 音樂串流 App in Glassmorphism style. Triggers on Glassmorphism、玻璃擬態、frosted glass、磨砂玻璃、backdrop-filter blur、aurora 漸層、半透明卡片、frosted UI、glass card、毛玻璃.
user-invocable: true
---

# 玻璃擬態行動 — 迴聲 Resona

## Style Philosophy

玻璃擬態（Glassmorphism）把整個 App 想像成**疊在一塊會流動的彩色光暈上的多層磨砂玻璃**：最底層是一片緩緩流動的 aurora 漸層光霧（洋紅 / 靛藍 / 青綠 / 紫互相滲透），前景每一片元件都是一塊半透明霜玻璃——你能隱約看見它後面的光色透出來，邊緣有一圈被光打亮的白色高光，玻璃內部還有極淡的頂部內發光（inset highlight）。深度不靠投影堆，而靠「**透明度 × 模糊度 × 光暈疊加**」三件事疊出空氣感，讓畫面像一疊漂在霧氣裡的玻璃板。

用在 迴聲 Resona 音樂串流 App，這風格傳達「清涼、輕盈、沉浸、未來感」：專輯與歌單封面是一塊塊不同色相的漸層玻璃磚，迷你播放列是一條半透明的浮條，整個 App 像漂在極光裡的播放器。

本次精修的三條鐵律：

1. **多層磨砂、不要單層**：背景 aurora、卡片玻璃、bar 玻璃要用**三個不同的 blur / opacity 等級**（內容卡 18px、bar 30px、迷你播放列 24px），重疊時才會分出前後層次而不是糊成一片。
2. **aurora 要有流動感**：背景光暈用極慢（30s+）的 \`transform: translate/scale\` 緩動漂移，幅度小（≤ 6%），永遠附 \`prefers-reduced-motion\` 關閉。
3. **高對比可讀優先於透明度**：玻璃再美，文字一定要在 aurora 上達 WCAG AA。主文字純白、次文字 80% 白，弱文字只准用在 ≥17px 大字。透明度為美學服務，可讀性不可妥協。

三個視覺辨識特徵：
1. **彩色 aurora 漸層背景**：裝置殼底層鋪 4 個大尺寸 \`radial-gradient\` 光暈，極慢漂移，所有玻璃元件漂在它之上。
2. **磨砂半透明玻璃卡**：每張卡 \`rgba(255,255,255,0.10~0.16)\` + \`backdrop-filter: blur() saturate()\` + \`1px\` 白邊 + 頂部 \`inset\` 內光高光。
3. **白色高對比文字 + 漸層色塊封面**：正文純白/半透白、無任何點陣圖；所有封面一律純 CSS 漸層方塊（不同色相區分）；tab-bar 與迷你播放列是更厚的半透玻璃條。

---

## Design Tokens (CSS variables)

\`\`\`css
:root {
  /* ── 手機殼尺寸（必含、鎖死，無跑版的根本） ── */
  --screen-w: 390px;
  --screen-h: 844px;
  --statusbar-h: 44px;
  --tabbar-h: 60px;             /* tab-bar 本體 */
  --miniplayer-h: 60px;         /* 迷你播放列高度 */
  --safe-bottom: 34px;          /* iPhone home indicator 安全區 */
  --content-pad: 20px;
  --device-radius: 46px;

  /* ── 8pt 間距尺度（所有 margin/padding/gap 只能取這些值） ── */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;

  /* ── Aurora 背景光暈色（鋪在裝置最底層） ── */
  --aurora-1: #ff4d9d;          /* 洋紅 */
  --aurora-2: #6a5cff;          /* 靛藍 */
  --aurora-3: #2fe2c8;          /* 青綠 */
  --aurora-4: #b14dff;          /* 紫 */
  --aurora-base: #0e0a2a;       /* 深底，避免漸層之間露白 */

  /* ── 玻璃材質：三層 blur 等級製造層次 ── */
  --glass-fill: rgba(255, 255, 255, 0.10);          /* 內容卡 */
  --glass-fill-strong: rgba(255, 255, 255, 0.16);   /* 強調卡 / now-playing / 推薦方案 */
  --glass-fill-bar: rgba(255, 255, 255, 0.07);      /* status-bar / tab-bar 底 */
  --glass-fill-mini: rgba(255, 255, 255, 0.13);     /* 迷你播放列（介於兩者） */
  --glass-stroke: rgba(255, 255, 255, 0.28);        /* 1px 白邊 */
  --glass-stroke-soft: rgba(255, 255, 255, 0.16);   /* 內分隔線 */
  --glass-inner: inset 0 1px 0 rgba(255, 255, 255, 0.35);  /* 頂部內光高光 */
  --glass-blur: blur(18px) saturate(140%);          /* 內容卡 */
  --glass-blur-mini: blur(24px) saturate(150%);     /* 迷你播放列 */
  --glass-blur-bar: blur(30px) saturate(160%);      /* status-bar / tab-bar 最厚 */

  /* ── 文字（白色高對比，WCAG AA on aurora） ── */
  --text-1: rgba(255, 255, 255, 0.98);   /* 主文字 */
  --text-2: rgba(255, 255, 255, 0.80);   /* 次文字（≥AA on aurora） */
  --text-3: rgba(255, 255, 255, 0.62);   /* 弱文字：僅用於 ≥17px 大字或非關鍵裝飾 */
  --text-on-chip: rgba(255, 255, 255, 0.95);

  /* ── 互動 / 強調 ── */
  --accent: #ff4d9d;            /* 播放鍵 / active tab / 進度 fill / 推薦方案邊 */
  --accent-2: #6a5cff;          /* 次強調（隨機/循環 active、徽章） */
  --accent-soft: rgba(255, 77, 157, 0.22);
  --chip-fill: rgba(255, 255, 255, 0.12);
  --chip-active: rgba(255, 255, 255, 0.26);
  --hover-veil: rgba(255, 255, 255, 0.08);   /* hover 疊加 */
  --press-veil: rgba(0, 0, 0, 0.10);         /* active 按下疊加 */

  /* ── 圓角 ── */
  --radius-card: 24px;
  --radius-card-sm: 16px;
  --radius-cover: 18px;
  --radius-cover-sm: 12px;
  --radius-chip: 999px;
  --radius-bar: 26px;

  /* ── 陰影（玻璃靠光暈，不靠重陰影；僅極淡懸浮影） ── */
  --shadow-float: 0 8px 32px rgba(10, 6, 40, 0.35);
  --shadow-float-sm: 0 4px 16px rgba(10, 6, 40, 0.28);
  --shadow-bar: 0 -6px 24px rgba(10, 6, 40, 0.30);

  /* ── 字體 ── */
  --font: 'PingFang TC', 'Noto Sans TC', system-ui, -apple-system, 'Helvetica Neue', sans-serif;

  /* ── 動效 ── */
  --ease: cubic-bezier(0.4, 0, 0.2, 1);
  --dur-fast: 120ms;
  --dur: 200ms;
}
\`\`\`

---

## Typography Scale

| 級距 | 大小 / 行高 / 字重 / 字距 | 顏色 | 用途 |
| --- | --- | --- | --- |
| caption | 11px / 1.3 / 500 / +0.2px | \`--text-3\` | tab 標籤、播放次數、徽章副字 |
| label | 13px / 1.4 / 500 / 0 | \`--text-2\` | chip 文字、卡片副標、曲目時長、藝人名 |
| body | 15px / 1.5 / 400 / 0 | \`--text-2\` | 段落、方案權益、說明 |
| row-title | 17px / 1.35 / 600 / 0 | \`--text-1\` | 歌名、歌單卡標題、列項主文字、迷你播放列歌名 |
| section | 22px / 1.25 / 700 / -0.2px | \`--text-1\` | 各屏區塊標題（如「每日迴聲」） |
| display | 28px / 1.15 / 800 / -0.4px | \`--text-1\` | home 品牌大標、player 曲名 |

- 全部用 \`--font\`。
- 數字（時間 9:41、價格、時長、進度）一律 \`font-variant-numeric: tabular-nums\` 對齊。
- 11px 弱文字只准搭 \`--text-2\` 以上以確保 AA；\`--text-3\` 只准用在 ≥17px 大字或純裝飾元件。
- 標題與正文間固定 \`--space-3\` 縱距；區段之間固定 \`--space-6\`。

---

## Component & Layout

整體結構：最外層 \`.device\`（390×844 玻璃手機殼，\`overflow:hidden\`、\`border-radius: --device-radius\`）→ 底層 \`.aurora\`（絕對定位鋪滿、放 aurora 流動光暈，\`z-index:0\`）→ \`.statusbar\`（固定頂、\`z-index:5\`）→ \`.viewport\`（中間可捲動畫面容器，\`z-index:1\`，依序堆 home/search/detail/player/library/profile 六個 \`data-screen\`，每次只顯示一個）→ \`.miniplayer\`（貼在 tab-bar 上方的常駐迷你播放列、\`z-index:4\`）→ \`.tabbar\`（固定底、\`z-index:5\`）。

8 個 \`<section data-screen>\` 順序固定且各恰一次：\`status-bar\` → \`home\` → \`search\` → \`detail\` → \`player\` → \`library\` → \`profile\` → \`tab-bar\`。

### 跨畫面導覽模型（無跑版的骨架）

- 用一個簡單的 class 切換：\`.screen\` 預設 \`display:none\`，\`.screen.is-active\` 顯示。JS 點 tab / 卡片 / 迷你播放列 / 返回鍵時切換 active screen 並同步 tab-bar active 態。**JS 失效時**請讓 home 為預設 \`is-active\`，仍可讀完整內容。
- 導覽行為要全部接好：tab → 切 home/search/library/profile；home 歌單卡 / detail 任一曲目列 → 開 detail；迷你播放列 / detail 播放鍵 / 任一曲目播放鍵 → 開 player；detail / player 左上返回鍵 → 回上一畫面。
- **裝置容器三段式鎖定**：status-bar 永遠在頂、tab-bar（含其上方 miniplayer）永遠在底、中間 \`.viewport\` 為當前畫面的唯一可捲動區。\`.viewport\` 高度 = \`calc(--screen-h - --statusbar-h - --tabbar-h - --safe-bottom)\`，每個 \`.screen\` 內部各自 \`overflow-y:auto\`，底部 padding 預留迷你播放列高度，內容絕不被遮擋、不溢出、不被裁切。

### status-bar（\`data-screen="status-bar"\`）

- 高 \`--statusbar-h\`，最厚玻璃條（\`--glass-blur-bar\` + \`--glass-fill-bar\`）。
- 左側時間 **9:41**（tabular-nums），右側並排訊號格 + Wi-Fi + 電量符號（純 CSS / unicode 繪製，不用圖檔）。
- 固定於裝置頂、不隨內容捲動、永遠在最上層。

### home（\`data-screen="home"\`）

至少三區段，每區段有 section 標題列（左標題 + 右「查看全部」連結，cursor:pointer + hover）：

1. **頂部問候列**：左側品牌大標「**迴聲 Resona**」（display）+ slogan；右側頭像漸層圓。
2. **每日迴聲（每日推薦 banner）**：一張橫幅玻璃強調卡（\`--glass-fill-strong\`），左漸層封面 + 「每日迴聲」標題 + 個人化文案 + 大播放鍵（▶）。露出「**無損音質串流**」徽章。
3. **為你精選歌單**：section 標題「為你精選歌單」+「查看全部」。**7 個歌單卡**兩欄玻璃網格（浪潮回聲 / 深夜公路 / 島嶼晨光 / 雨後散步 / 城市心跳 / 山海之間 / 失重時刻），每卡 = 一塊不同色相 \`.cover\`（純 CSS 漸層方塊）+ 玻璃標題列 + 曲數副字。
4. **熱門排行（或最近播放）**：section 標題「熱門排行」+「查看全部」，編號清單（1–5），每列 = 排名數字 + 小漸層封面 + 歌名 + 藝人 + 時長 + 播放鍵。
5. 4 分類 chip 橫排（華語 / 獨立 / 電子 / 放鬆）置於問候列下方，膠囊玻璃 chip，首個 active。

### search（\`data-screen="search"\`）

- 頂部玻璃搜尋框（半透 input 外觀 + 放大鏡 + placeholder「搜尋歌曲、藝人、歌單」）。
- 下方 4 分類 chip（華語 / 獨立 / 電子 / 放鬆）。
- **熱門歌曲**：section 標題，**編號清單**（含時長）——海平面樂團〈藍色信號〉、林知夏〈晚風練習曲〉、夜行列車〈霓虹巷弄〉、Echo Lab〈靜電〉、何遠〈無人車站〉……每列 = 序號 + 小漸層封面 + 歌名 + 藝人 + 時長 + 播放鍵（點擊 → player）。
- **熱門藝人**：section 標題 + 橫向玻璃膠囊（漸層圓頭像 + 藝人名）：海平面樂團 / 林知夏 / 夜行列車 / Echo Lab / 何遠。

### detail（\`data-screen="detail"\`）

- 左上玻璃圓形**返回鍵**（‹，cursor:pointer + hover/active）。
- **大封面**：頂部大張漸層封面（純 CSS 大色塊，色相呼應島嶼晨光）。
- 資訊區：專輯名 **島嶼晨光** / 藝人 **林知夏** / 年份 **2026** / **9 首** / 總時長 **34:12**。
- 動作列：**播放全部**（accent 大鍵 ▶）+ **隨機播放**（玻璃次鍵）。
- **完整 9 曲目清單**（藍色信號 / 霓虹巷弄 / 候鳥地圖 / 靜電 / 晚風練習曲 / 無人車站 / 潮間帶 / 第七個夏天 / 月台九又四分之三），每列玻璃 \`.song-row\`：曲序 + 歌名 + 藝人（林知夏）+ 時長 + 行尾播放鍵 / 選單（⋯）。點任一曲 → player。

### player（\`data-screen="player"\`）

沉浸玻璃面板，**本畫面不顯示迷你播放列**（迷你播放列只在 home/search/library/profile 出現）：

- 左上玻璃圓形**返回鍵**（⌄ 收合，回上一畫面）。
- **大封面**：置中大尺寸漸層方塊（純 CSS，conic/radial，色相呼應島嶼晨光）。
- 正在播放：**林知夏 —〈晚風練習曲〉**，副字專輯「島嶼晨光」。
- **歌詞同步**：一行逐字高亮示意（高亮字 \`--text-1\`，其餘 \`--text-3\`）。
- 進度條 \`.progress\`（玻璃軌 + \`--accent\` fill），左 **01:12** / 右 **03:24**（tabular-nums）。
- 控制列：隨機（⤮）/ 上一首（⏮）/ **播放暫停大圓鍵（▶ / ⏸ 兩態）** / 下一首（⏭）/ 循環（⟳）。隨機與循環 active 時上 \`--accent-2\`。
- 底部：**Hi-Res 無損音質**徽章 + 音量滑桿（玻璃軌）。

### library（\`data-screen="library"\`）

- 「**我的音樂庫**」標題（section）。
- 分頁列（玻璃 segmented）：**歌單 / 專輯 / 已下載**，首個 active。
- **收藏歌單清單**：每列 = 封面縮圖（小漸層方塊）+ 標題（複用歌單名）+ 曲數副字 + 行尾箭頭，點擊 → detail。
- **離線下載**功能列（玻璃 list-item + 已下載狀態徽章）。
- **共享音樂庫**功能列（玻璃 list-item + 切換開關 toggle）。

### profile（\`data-screen="profile"\`）

- **使用者卡**：頭像漸層圓 + 暱稱 + 會員狀態行（玻璃強調卡）。
- **播放偏好**列表：音質、等化器、**跨裝置接續播放**（玻璃 toggle 開關，預設開）。
- **3 訂閱方案卡**（玻璃卡堆疊或並排）：
  - **免費** — \`NT$ 0 ／月\` — 標「目前方案」。
  - **Plus** — \`NT$ 149 ／月\` — 標「推薦」，強調卡（\`--glass-fill-strong\` + \`--accent\` 邊 + 角標）。
  - **Family** — \`NT$ 249 ／月\`。
  - 每卡含 2–3 條權益小字。價格 tabular-nums、\`NT$\` 與數字間一個半形空格、後綴全形「／月」。

### mini-player（迷你播放列，常駐）

- 一條貼在 tab-bar **正上方**的半透明玻璃浮條（\`--glass-fill-mini\` + \`--glass-blur-mini\`），高 \`--miniplayer-h\`。
- 內容：左小漸層封面 + 歌名「晚風練習曲」+ 藝人「林知夏」+ 右側**播放/暫停鍵（▶ / ⏸）**。
- 顯示於 **home / search / library / profile**；**player 畫面隱藏**（\`.is-player .miniplayer { display:none }\`）。
- 整條 cursor:pointer，點擊（播放鍵以外區域）展開到 player；點播放鍵切換 ▶/⏸ 兩態。
- 底部含一條極細進度線（玻璃軌 + accent，與 player 同步示意）。

### tab-bar（\`data-screen="tab-bar"\`）

- 固定底部最厚玻璃條（\`--glass-blur-bar\` + \`--glass-fill-bar\` + \`--shadow-bar\`），4 tab：**首頁 / 搜尋 / 音樂庫 / 我的**，各 = unicode/CSS icon + 標籤。
- active tab 用 \`--accent\` 上色 + 淡 \`--accent-soft\` 玻璃高亮膠囊。每 tab cursor:pointer + hover/active 回饋。
- 預留 \`--safe-bottom\` 安全區。tab-bar 與其上的 miniplayer 一起構成「永遠在底」的固定區。

### 封面繪製規範（重要）

**所有專輯 / 歌單 / 頭像 / 排名封面一律純 CSS**——用 \`linear-gradient\` / \`radial-gradient\` / \`conic-gradient\` 配不同色相區分，可疊幾何形狀或細線框佔位。**不得引用任何 \`assets/*.webp\` 圖檔，不得出現指向圖檔的 \`<img>\`。**

---

## Do / Don't

| Do | Don't |
| --- | --- |
| 玻璃卡用 \`rgba\` 半透白 + \`backdrop-filter: blur()\` + 1px 白邊 + inset 內光 | 用不透明實色卡（失去玻璃感） |
| 內容卡 / bar / 迷你播放列用三個不同 blur 等級，重疊才分層 | 所有玻璃同一 blur/opacity（畫面糊成一片） |
| 背景鋪多個 \`radial-gradient\` aurora，極慢小幅漂移流動 | 純色背景或大幅快速動畫（玻璃看不出透色、暈眩） |
| 封面用純 CSS 漸層色塊，不同色相區分 | 引用點陣圖 / \`<img src="assets/...">\` |
| 文字用白與半透白，確保對 aurora 對比 ≥ AA | 用深灰或低對比文字（在亮光暈上讀不到） |
| 所有可點元素 cursor:pointer + :hover veil + :active 縮放回饋 | 元件無 hover/active 態（不像真實產品） |
| 播放鍵 ▶/⏸ 兩態、tab/chip/分頁有 active 視覺 | 播放鍵單態、active 態無區別 |
| \`backdrop-filter\` 一律附 \`-webkit-\` 前綴 | 漏前綴導致 Safari 不模糊 |
| 間距只取 8pt 尺度（4/8/12/16/20/24/32） | 隨手寫 7px / 13px / 19px 破壞節奏 |
| 進度/曲長/價格用 tabular-nums | 比例字寬數字導致跳動 |

---

## Motion Specification

- **aurora 漂移**：背景光暈用 \`@keyframes auroraFloat\` 做 30–40s 無限緩動，只動 \`transform: translate3d() scale()\`，幅度 ≤ 6%，\`ease-in-out\`，永久循環。製造「光霧緩緩流動」感而非閃爍。
- **microinteractions**：
  - 可點元素 \`transition: transform var(--dur-fast), background var(--dur);\`，\`:hover\` 疊 \`--hover-veil\`，\`:active { transform: scale(0.97); }\`。
  - 卡片 \`:hover\` 微浮（\`transform: translateY(-2px)\`）+ 強化邊光。
  - 播放鍵點擊在 ▶ / ⏸ 兩態間切換（JS 改 textContent + class）。
  - chip / tab / 分頁 active 切換用 background + color 的 200ms 過渡。
- **進度條**：純 CSS 寬度示意即可，可選 \`transition: width\` 動進度。
- 只動 \`transform\` / \`opacity\`（aurora、按壓、卡片浮起）；進度條動 \`width\` 屬靜態示意可接受但不放在捲動熱路徑。
- 不使用任何外部動畫庫。

## Accessibility (Reduced Motion)

\`\`\`css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation: none !important;
    transition: none !important;
    scroll-behavior: auto !important;
  }
}
\`\`\`

- aurora 漂移、卡片浮起、按壓縮放在 reduced motion 下全部停用；aurora 改為靜態漸層仍呈現完整玻璃層次。
- 內容（所有歌名/藝人/價格/功能名）在 JS 失效或 reduced motion 下仍完整可讀。
- 玻璃文字維持 WCAG AA：主文字純白、次文字 80% 白；弱文字（62%）只用在 ≥17px。

---

## Required Output Contract

遵循 \`.claude/agents/style-page-builder.md\` 的「**App 風格額外要求**」：

- **8 個 \`<section data-screen="<id>">\`**，固定 id 與順序：\`status-bar\` → \`home\` → \`search\` → \`detail\` → \`player\` → \`library\` → \`profile\` → \`tab-bar\`，各恰一次。常見漏洞：只寫 \`id=\` 漏寫 \`data-screen=\`，務必兩者都加。
- **\`<body data-viewport="mobile">\`** 必須存在（驗證辨識依據）。
- **status-bar 顯示 9:41**（tabular-nums，可見文字）。
- **tab-bar 四 tab**：可見文字「首頁 / 搜尋 / 音樂庫 / 我的」，active 態明確。
- **迷你播放列**常駐於 home/search/library/profile、player 畫面隱藏；點擊展開 player、播放鍵 ▶/⏸ 兩態。
- **三層訂閱方案精確字串**同屏出現於 profile：\`免費\` / \`NT$ 0 ／月\`、\`Plus\` / \`NT$ 149 ／月\`、\`Family\` / \`NT$ 249 ／月\`（\`NT$\` 與數字間一個半形空格、後綴全形「／月」），並標「推薦」與「目前方案」。
- **可互動多畫面導覽**：tab 切換 + 卡片→detail + 曲目/迷你播放列→player + detail/player 返回鍵，全部接好；JS 失效時 home 預設可見。
- **權威字串全在可見 body 文字**（不可只放 \`aria-label\` / \`data-*\`）：品牌「迴聲 / Resona」、6 核心功能（無損音質串流 / 離線下載 / 共享音樂庫 / 跨裝置接續播放 / 歌詞同步 / 個人化每日推薦）、7 歌單（浪潮回聲 / 深夜公路 / 島嶼晨光 / 雨後散步 / 城市心跳 / 山海之間 / 失重時刻）、9 歌名（藍色信號 / 霓虹巷弄 / 候鳥地圖 / 靜電 / 晚風練習曲 / 無人車站 / 潮間帶 / 第七個夏天 / 月台九又四分之三）、5 藝人（海平面樂團 / 林知夏 / 夜行列車 / Echo Lab / 何遠）、4 分類 chip（華語 / 獨立 / 電子 / 放鬆）、正在播放「林知夏 —〈晚風練習曲〉」。
- **無跑版**：裝置容器鎖 390×844、status-bar 永遠在頂、tab-bar（含 miniplayer）永遠在底、中間為當前畫面可捲動區、內容不被遮擋、文字不溢出/不被裁切、padding 充足。
- **單檔 HTML ≤ 200 KB**；**無外部 CDN**（\`<link>\` / \`<script>\` / \`<img>\` 的 src/href 不可 \`http://\` 或 \`https://\`）；繁體中文；CSS 變數驅動、不得用 Tailwind 等 framework CSS。inline \`<script>\` 精簡。

## Required Images

**此風格不使用任何點陣圖。** \`assets-manifest.json\` 為 \`{ "style": "玻璃擬態行動 Glassmorphism", "images": [] }\`。所有封面一律純 CSS（\`linear-gradient\` / \`radial-gradient\` / \`conic-gradient\` / 幾何色塊 / 線框佔位）繪製，**頁面不得引用任何圖檔**、不得出現指向 \`assets/\` 的 \`<img>\`。

---

## Reference Snippet

\`\`\`css
/* ── 手機殼 ── */
.device {
  position: relative;
  width: var(--screen-w);
  height: var(--screen-h);
  margin: 0 auto;
  overflow: hidden;
  border-radius: var(--device-radius);
  background: var(--aurora-base);
  font-family: var(--font);
  color: var(--text-1);
  box-shadow: var(--shadow-float);
  display: flex;
  flex-direction: column;
}

/* ── aurora 流動光暈背景 ── */
.aurora {
  position: absolute; inset: -8%;
  z-index: 0;
  background:
    radial-gradient(60% 50% at 18% 12%, var(--aurora-1) 0%, transparent 60%),
    radial-gradient(55% 45% at 88% 22%, var(--aurora-2) 0%, transparent 58%),
    radial-gradient(70% 55% at 30% 85%, var(--aurora-3) 0%, transparent 62%),
    radial-gradient(60% 50% at 92% 92%, var(--aurora-4) 0%, transparent 60%);
  filter: saturate(125%);
  animation: auroraFloat 36s ease-in-out infinite;
}
@keyframes auroraFloat {
  0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
  50%      { transform: translate3d(2%, -3%, 0) scale(1.06); }
}

/* ── 通用玻璃卡 ── */
.glass {
  background: var(--glass-fill);
  -webkit-backdrop-filter: var(--glass-blur);
  backdrop-filter: var(--glass-blur);
  border: 1px solid var(--glass-stroke);
  border-radius: var(--radius-card);
  box-shadow: var(--glass-inner), var(--shadow-float-sm);
  transition: transform var(--dur-fast) var(--ease), box-shadow var(--dur) var(--ease);
}
.glass.is-tap { cursor: pointer; }
.glass.is-tap:hover  { transform: translateY(-2px); box-shadow: var(--glass-inner), var(--shadow-float); }
.glass.is-tap:active { transform: scale(0.98); }

/* ── status-bar（最厚玻璃，固定頂） ── */
.statusbar {
  position: relative; z-index: 5; flex: 0 0 auto;
  display: flex; align-items: center; justify-content: space-between;
  height: var(--statusbar-h); padding: 0 22px;
  font-size: 15px; font-weight: 600; font-variant-numeric: tabular-nums;
  color: var(--text-1);
  -webkit-backdrop-filter: var(--glass-blur-bar);
  backdrop-filter: var(--glass-blur-bar);
  background: var(--glass-fill-bar);
}

/* ── 中間畫面容器：唯一三段式中段，每屏自己捲動 ── */
.viewport { position: relative; z-index: 1; flex: 1 1 auto; min-height: 0; }
.screen { display: none; height: 100%; overflow-y: auto;
  padding: var(--space-4) var(--content-pad)
           calc(var(--miniplayer-h) + var(--space-4)); }
.screen.is-active { display: block; }
.screen.screen-player { padding-bottom: var(--space-4); }  /* player 無迷你播放列 */

/* ── 區段標題列 ── */
.section-head { display:flex; align-items:baseline; justify-content:space-between;
  margin: var(--space-6) 0 var(--space-3); }
.section-head h2 { font-size:22px; font-weight:700; letter-spacing:-0.2px; }
.section-head a { font-size:13px; color:var(--text-2); cursor:pointer; }
.section-head a:hover { color: var(--text-1); }

/* ── 純 CSS 漸層封面（靠不同色相區分） ── */
.cover {
  aspect-ratio: 1; border-radius: var(--radius-cover);
  border: 1px solid var(--glass-stroke);
  background:
    linear-gradient(135deg, var(--aurora-2), var(--aurora-3)),
    radial-gradient(80% 80% at 30% 20%, rgba(255,255,255,0.35), transparent 60%);
  box-shadow: var(--glass-inner);
}

/* ── 歌曲列 ── */
.song-row {
  display: flex; align-items: center; gap: var(--space-3);
  padding: var(--space-3); border-radius: var(--radius-card-sm);
  background: var(--glass-fill);
  -webkit-backdrop-filter: var(--glass-blur); backdrop-filter: var(--glass-blur);
  border: 1px solid var(--glass-stroke-soft);
  cursor: pointer; transition: background var(--dur) var(--ease);
}
.song-row:hover  { background: var(--glass-fill-strong); }
.song-row:active { background: var(--press-veil); }
.song-row .idx   { width: 20px; text-align:center; color: var(--text-3);
  font-variant-numeric: tabular-nums; }
.song-row .title { font-size: 17px; font-weight: 600; color: var(--text-1); }
.song-row .meta  { font-size: 13px; color: var(--text-2); }
.song-row .dur   { margin-left:auto; font-size:13px; color:var(--text-2);
  font-variant-numeric: tabular-nums; }

/* ── 分類 chip ── */
.chip {
  padding: var(--space-2) var(--space-4); border-radius: var(--radius-chip);
  background: var(--chip-fill); border: 1px solid var(--glass-stroke);
  color: var(--text-on-chip); font-size: 13px; font-weight: 500;
  cursor: pointer; transition: background var(--dur) var(--ease);
}
.chip:hover { background: var(--chip-active); }
.chip[aria-selected="true"] { background: var(--chip-active); color: var(--text-1); }

/* ── player：大封面 + 進度 + 控制 ── */
.now-playing .art {
  width: 100%; aspect-ratio: 1; border-radius: 22px;
  background: conic-gradient(from 200deg, var(--aurora-1), var(--aurora-4), var(--aurora-2), var(--aurora-1));
  border: 1px solid var(--glass-stroke); box-shadow: var(--glass-inner);
}
.lyric { text-align:center; font-size:17px; color:var(--text-3); }
.lyric .now { color: var(--text-1); font-weight:600; }
.progress { height: 6px; border-radius: 999px; background: rgba(255,255,255,0.18); overflow:hidden; }
.progress > i { display:block; height:100%; width:35%; background: var(--accent); border-radius:999px; }
.ctrl-row { display:flex; align-items:center; justify-content:space-between; }
.ctrl { cursor:pointer; color:var(--text-1); transition: transform var(--dur-fast); }
.ctrl:active { transform: scale(0.9); }
.ctrl.is-on { color: var(--accent-2); }
.play-btn {
  width: 64px; height: 64px; border-radius: 50%;
  background: var(--accent); color:#fff; border:none; cursor:pointer;
  box-shadow: 0 8px 24px var(--accent-soft);
  transition: transform var(--dur-fast) var(--ease);
}
.play-btn:active { transform: scale(0.92); }

/* ── 迷你播放列（常駐，貼 tab-bar 上方） ── */
.miniplayer {
  position: relative; z-index: 4; flex: 0 0 auto;
  display: flex; align-items: center; gap: var(--space-3);
  height: var(--miniplayer-h); margin: 0 var(--space-3) var(--space-1);
  padding: 0 var(--space-3); border-radius: var(--radius-card-sm);
  background: var(--glass-fill-mini);
  -webkit-backdrop-filter: var(--glass-blur-mini); backdrop-filter: var(--glass-blur-mini);
  border: 1px solid var(--glass-stroke); box-shadow: var(--glass-inner), var(--shadow-float-sm);
  cursor: pointer;
}
.miniplayer:active { transform: scale(0.99); }
.miniplayer .mp-cover { width:40px; height:40px; border-radius:10px; }
.miniplayer .mp-title { font-size:15px; font-weight:600; color:var(--text-1); }
.miniplayer .mp-artist{ font-size:12px; color:var(--text-2); }
.miniplayer .mp-play  { margin-left:auto; cursor:pointer; color:var(--text-1); }
.is-player .miniplayer { display:none; }   /* player 畫面隱藏迷你播放列 */

/* ── tab-bar（最厚玻璃，固定底） ── */
.tabbar {
  position: relative; z-index: 5; flex: 0 0 auto;
  display: flex; justify-content: space-around; align-items: center;
  height: var(--tabbar-h); padding-bottom: var(--safe-bottom);
  border-radius: var(--radius-bar) var(--radius-bar) 0 0;
  background: var(--glass-fill-bar);
  -webkit-backdrop-filter: var(--glass-blur-bar); backdrop-filter: var(--glass-blur-bar);
  border-top: 1px solid var(--glass-stroke); box-shadow: var(--shadow-bar);
}
.tab { font-size: 11px; color: var(--text-3); text-align:center; cursor:pointer;
  padding: var(--space-1) var(--space-3); border-radius: var(--radius-chip);
  transition: color var(--dur), background var(--dur); }
.tab:hover { color: var(--text-2); }
.tab[aria-current="page"] { color: var(--accent); background: var(--accent-soft); }

/* ── 訂閱方案：Plus 推薦卡 ── */
.plan { padding: var(--space-4); border-radius: 20px; background: var(--glass-fill);
  border: 1px solid var(--glass-stroke-soft); }
.plan.is-featured { background: var(--glass-fill-strong); border: 1px solid var(--accent); }
.plan .price { font-size: 22px; font-weight: 700; font-variant-numeric: tabular-nums; color: var(--text-1); }
.plan .badge { font-size:11px; color:var(--accent); }

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation: none !important; transition: none !important; }
}
\`\`\`
`,"../../.claude/skills/app-harmonyos/SKILL.md":`---
name: app-harmonyos
description: Use when generating a single-file mobile App screen demo for the 迴聲 Resona 音樂串流 App in HarmonyOS (鴻蒙) style. Triggers on HarmonyOS、鴻蒙、Harmony、華為、Huawei、HarmonyOS Sans、靈動卡片、柵格化、card grid、#007DFF、通透留白、清爽資訊密度.
user-invocable: true
---

# 鴻蒙 HarmonyOS — 迴聲 Resona

## Style Philosophy

HarmonyOS 是華為的跨裝置作業系統設計語言，核心是「**一生萬物、生生不息**」的通透哲學：介面像被光線穿透的清玻璃，元素以**靈動卡片**自由重組、以**柵格化**排布，資訊密度高卻不擁擠。它不追求 iOS 的精緻擬真，也不像 Material 那樣強調陰影層階；而是用**大面積純淨留白**讓內容浮在表面，配上單一鮮明的科技藍 \`#007DFF\` 作為唯一強調色。整體氣質是「**冷靜、通透、有秩序的呼吸感**」——像把音樂串流做成一台精密儀器的儀表板，但每個模組都圓潤友善、可被點擊喚醒。

把這份精修目標記在心裡：**要更細膩、更像真實上架 App、零跑版**。差別不在於加更多色彩，而在於——間距用同一套 8pt 尺度、字級各有明確行高字重、圓角陰影都來自 token、每個可點元素都有 hover/active 回饋、迷你播放列常駐、內容密度恰到好處但留白依舊通透。

三個視覺辨識特徵：
1. **靈動卡片 + 柵格化資訊密度**：所有內容裝進 16–24px 圓角卡片，2 欄／不對稱柵格自由排布，卡片之間以留白分隔而非分隔線；同一畫面可同時有「主卡 + 卡牆 + 清單」三種密度層次。
2. **單一科技藍 accent**：\`#007DFF\` 是整頁唯一彩色，用於 active 態、進度、強調數字、主按鈕、迷你播放列播放鍵；其餘一律中性灰階。
3. **柔和淺陰影 + 高留白**：陰影極淺（接近無，只有 4–6% 黑），靠 surface 微差與 generous padding（16–24px）營造層次，不靠重陰影。hover 時陰影才微微抬升，傳達「卡片被喚醒」的靈動感。

---

## Design Tokens (CSS variables)

完整 token，數值寫死於此，SubAgent 不得自由發明新數值——間距只能取 \`--sp-*\` 階、字級只能取 Typography Scale、圓角陰影只能取以下 token。

\`\`\`css
:root {
  /* ── 手機外殼（裝置鎖定，禁止改動）── */
  --screen-w: 390px;
  --screen-h: 844px;
  --statusbar-h: 44px;
  --tabbar-h: 60px;            /* tab 本體高（不含 mini-player、不含 safe-bottom） */
  --miniplayer-h: 56px;        /* 迷你播放列高 */
  --safe-bottom: 34px;         /* Home indicator 安全區 */
  --screen-radius: 44px;       /* 模擬裝置螢幕圓角 */

  /* ── HarmonyOS 色彩：單一科技藍 + 中性灰階 ── */
  --hm-accent: #007DFF;        /* 唯一強調色 */
  --hm-accent-press: #0066D6;  /* 按壓態（:active） */
  --hm-accent-hover: #1A8BFF;  /* hover 態，略亮 */
  --hm-accent-soft: #E5F1FF;   /* 藍色填底（chip active / badge / 推薦卡底） */
  --hm-accent-tint: rgba(0,125,255,0.08);

  --hm-bg: #F1F3F5;            /* App 底層淺灰，襯出白卡 */
  --hm-surface: #FFFFFF;       /* 卡片表面 */
  --hm-surface-2: #F7F8FA;     /* 次級 surface（輸入框 / chip 預設 / 內嵌列） */
  --hm-surface-press: #EDEFF2; /* 列／卡按壓底色 */
  --hm-line: #ECEEF1;          /* 極淡分隔線（少用） */

  --hm-text: #0D0D0D;          /* 主文字，對白卡 ≈ 19:1 */
  --hm-text-2: #5A6066;        /* 次文字，對白卡 ≈ 6.4:1 通過 AA */
  --hm-text-3: #9AA0A6;        /* 第三級（時長 / 計數），僅用於大字或非關鍵 */
  --hm-on-accent: #FFFFFF;     /* 藍底白字 ≈ 4.6:1 通過 AA */

  /* ── 圓角（HarmonyOS 偏好 16–24，膠囊用 999）── */
  --radius-card: 20px;
  --radius-card-lg: 24px;      /* 主卡 / 大封面 */
  --radius-chip: 999px;
  --radius-cover: 16px;        /* 列縮圖 / 中型封面 */
  --radius-thumb: 10px;        /* 小縮圖（song-row / mini-player） */
  --radius-control: 14px;      /* 按鈕 / 搜尋框 */

  /* ── 陰影：極淺、靠留白分層；hover 才抬升 ── */
  --shadow-card: 0 2px 8px rgba(17,24,39,0.04), 0 1px 2px rgba(17,24,39,0.04);
  --shadow-card-hover: 0 8px 20px rgba(17,24,39,0.08), 0 2px 6px rgba(17,24,39,0.05);
  --shadow-float: 0 8px 24px rgba(0,125,255,0.22);  /* 僅主 CTA / 播放圓鈕 / FAB */
  --shadow-bar: 0 -1px 0 rgba(17,24,39,0.04);       /* tab-bar 頂部極淡描邊 */

  /* ── 字體：HarmonyOS Sans 感（缺字退回系統無襯線）── */
  --font-ui: 'HarmonyOS Sans', 'HarmonyOS Sans SC', 'PingFang TC',
             'Noto Sans TC', 'Source Han Sans TC', system-ui, sans-serif;

  /* ── 8pt 間距系統：所有 margin/padding/gap 只能取這幾階 ── */
  --sp-1: 4px;
  --sp-2: 8px;
  --sp-3: 12px;
  --sp-4: 16px;
  --sp-5: 20px;
  --sp-6: 24px;
  --sp-8: 32px;

  /* 語意化別名（便於閱讀，值來自上方階梯） */
  --pad-screen: 20px;   /* = --sp-5，內容區左右留白 */
  --pad-card: 16px;     /* = --sp-4，卡片內距 */
  --gap-card: 12px;     /* = --sp-3，卡片間 / 卡牆 gap */
  --gap-section: 24px;  /* = --sp-6，區段之間 */

  /* ── 動效（全部只動 transform / opacity）── */
  --ease: cubic-bezier(0.2, 0, 0, 1);
  --dur: 180ms;
}
\`\`\`

### 間距使用規則（無跑版關鍵）

- 區段（section block）之間留 \`--gap-section\`(24px)；區段標題列與其內容之間留 \`--sp-3\`(12px)。
- 卡牆 grid gap 一律 \`--gap-card\`(12px)；卡內 padding 一律 \`--pad-card\`(16px)。
- song-row 上下 padding 用 \`--sp-2\`(8px)~\`--sp-3\`(12px)，左右靠 content 的 \`--pad-screen\` 不另加。
- 任何「貼邊」都禁止：內容區左右恆 \`--pad-screen\`(20px)，文字不可碰到裝置邊。

---

## Typography Scale（手機字級，含行高／字重／字距）

| 級距 | size / line-height / weight / letter-spacing | 用途 |
| --- | --- | --- |
| display | 28px / 34px / 700 / -0.02em | home 品牌「迴聲」、player 曲名 |
| title | 22px / 28px / 600 / -0.01em | 區塊主標、detail 專輯名、訂閱卡價格 |
| headline | 17px / 24px / 600 / 0 | 卡片標題、歌單名、tab active、區段標題 |
| body | 15px / 22px / 400 / 0 | 內文、曲目名、說明 |
| label | 13px / 18px / 500 / 0 | 次要標籤、藝人名、chip 文字、副標 |
| caption | 11px / 15px / 400 / +0.01em | 時長、播放次數、status-bar、tab 文字 |

- 字重只用 400 / 500 / 600 / 700；HarmonyOS Sans 的氣質是「方正中帶圓潤」。
- 數字（進度時間、播放次數、價格、曲序）一律 \`font-variant-numeric: tabular-nums\` 對齊。
- 所有單行文字（歌單名、曲名、藝人名）必須 \`overflow: hidden; text-overflow: ellipsis; white-space: nowrap\`，**禁止溢出裝置或被裁字**；副標可換 2 行用 \`-webkit-line-clamp: 2\`。

---

## Component & Layout（逐屏細則）

整頁是一個 390×844 裝置殼，由上而下三層**永遠固定**：頂部 \`status-bar\`(44px) → 中間「**單一可捲動內容區** \`.content\`」(8 屏依序堆疊) → 底部「**迷你播放列 + tab-bar**」固定堆疊。內容區左右恆留 \`--pad-screen\`(20px)，底部以 \`padding-bottom\` 預留 \`mini-player + tab-bar + safe-bottom\` 的高度，**內容絕不被遮擋**。

> 導覽心智模型：tab-bar 4 顆切換 home/search/library/profile；卡片 → detail；曲目列 / 迷你播放列 → player；detail 與 player 各有左上返回鍵回到上一屏。實作以 \`:target\` 或 class 切換顯示（純 CSS/JS，無框架）。

### status-bar（\`data-screen="status-bar"\`）
固定頂部 44px，透明貼齊背景。左側時間 **9:41**（caption、600 字重、tabular-nums）；右側依序訊號格、Wi-Fi 弧、電量符號（inline SVG 或 unicode，配 \`--hm-text\`）。每頁固定不可省。

### home（\`data-screen="home"\`）— 至少三大區段，密度豐富但留白通透
1. **品牌列**：左 display 級「迴聲 / Resona」+ 一行 label slogan「讓每首歌，回到你身上」；右側圓形頭像（44px）。
2. **分類 chip 橫排**：\`華語 / 獨立 / 電子 / 放鬆\`，預設 \`--hm-surface-2\` 灰膠囊，第一顆 active（\`--hm-accent-soft\` 底 + \`--hm-accent\` 字）。可橫向捲動。
3. **「每日迴聲」每日推薦 banner**：大圓角 24px 主卡，藍色漸層底（\`linear-gradient(135deg,#0A66E8,#007DFF)\`），白字。含小標「每日迴聲」+ 一行「個人化每日推薦」功能露出 + 封面 \`assets/cover-1.webp\`（右側方塊）+ 一顆白底藍字「立即播放 ▶」按鈕。
4. **「為你精選歌單」卡牆**：區段標題列（headline「為你精選歌單」+ 右側「查看全部 ›」連結，cursor:pointer）。下方 \`grid-2\` **柵格化 2 欄卡片，列全部 7 個歌單**（封面 cover-2..cover-6 循環，第 7 張重用 cover-1）：
   - \`浪潮回聲\`（副標：海平面樂團）
   - \`深夜公路\`（副標：夜行列車）
   - \`島嶼晨光\`（副標：林知夏）
   - **\`雨後散步\`（副標：何遠）** ← 注意：本歌單藝人為「何遠」，不可寫 Echo Lab
   - \`城市心跳\`（副標：Echo Lab）
   - \`山海之間\`（副標：海平面樂團）
   - \`失重時刻\`（副標：夜行列車）
   每卡 = 方形封面 + 歌單名(headline) + 藝人副標(label, \`--hm-text-2\`)；整卡可點 → detail。
5. **「最近播放」清單**：區段標題 headline「最近播放」+「查看全部 ›」。3–4 列 \`.song-row\`（縮圖 + 歌名 + 藝人 + 右側時長），點列 → player。露出歌名如〈藍色信號〉〈霓虹巷弄〉〈候鳥地圖〉與藝人。
6. 底部露出 1–2 張**核心功能小卡**（「無損音質串流」「個人化每日推薦」），label 級徽章。

### search（\`data-screen="search"\`）
1. **搜尋框**：\`--hm-surface-2\` 底、\`--radius-control\`、左放大鏡 icon、placeholder「搜尋歌曲、藝人、歌單」、:focus 時邊框轉 \`--hm-accent\`。
2. **4 分類 chip**：\`華語 / 獨立 / 電子 / 放鬆\`。
3. **熱門歌曲**：區段標題 headline「熱門歌曲」。**編號清單**（\`.song-row\` 帶左側 1–7 序號，\`--hm-text-3\`、tabular-nums）混排歌名與藝人，含時長：露出多首歌名（〈藍色信號〉〈霓虹巷弄〉〈候鳥地圖〉〈靜電〉…）與藝人（\`海平面樂團 / 林知夏 / 夜行列車 / Echo Lab / 何遠\`），右側時長 caption。點列 → player。
4. **熱門藝人**：區段標題 headline「熱門藝人」+ 橫向圓形頭像列，名字 label：\`海平面樂團 / 林知夏 / 夜行列車 / Echo Lab / 何遠\`。

### detail（\`data-screen="detail"\`）— 主打專輯 \`島嶼晨光\`
1. 左上**返回鍵 ‹**（回 home，44×44 命中區）。
2. **大封面**（\`assets/cover-3.webp\`，置中、寬約 200px、\`--radius-card-lg\`、\`--shadow-card\`，無圖以 \`.cover\` 漸層 fallback）。
3. **專輯資訊**：title 級「島嶼晨光」+ label「林知夏」+ 一行 meta（caption）「2026 · 9 首 · 38 分鐘」。
4. **動作列**：藍色主按鈕「播放全部 ▶」(\`.btn-primary\`) + 次按鈕「隨機播放 ⤮」(\`--hm-surface-2\` 底)。
5. **完整 9 曲目清單**（\`.song-row\` ×9，全部列出，禁刪）：每列 = 曲序(caption, tabular-nums) + 曲名(body) + 藝人(label) + 右側時長(caption) + 行尾「⋯」選單鍵（hover 才顯著）。曲目與建議時長：
   1. 〈藍色信號〉 04:12
   2. 〈霓虹巷弄〉 03:48
   3. 〈候鳥地圖〉 04:30
   4. 〈靜電〉 03:05
   5. 〈晚風練習曲〉 02:47（← player 正在播放此首，可加藍色「正在播放」小點）
   6. 〈無人車站〉 05:01
   7. 〈潮間帶〉 03:52
   8. 〈第七個夏天〉 04:20
   9. 〈月台九又四分之三〉 06:15
   藝人主要為「林知夏」，可穿插一兩首 feat. 其他藝人。點任一曲 → player。

### player（\`data-screen="player"\`）— 通透全屏播放器（此屏不顯示 mini-player）
1. 左上**返回鍵 ⌄**（回上一屏）+ 中央 caption「正在播放 · 島嶼晨光」+ 右上「⋯」。
2. **大封面**（\`assets/cover-4.webp\`，置中、寬約 280px / max 80%、\`--radius-card-lg\`、\`--shadow-card\`）。
3. **曲目資訊**：曲名 display「晚風練習曲」+ 藝人 label「林知夏」+ 專輯 caption「島嶼晨光」。
4. **歌詞同步**：一行逐字高亮歌詞（當前行 \`--hm-accent\`、前後行 \`--hm-text-3\`），標示「歌詞同步」。
5. **進度條** \`.player-progress\`：藍色已播段 + 灰軌道 + 圓點滑塊；左 \`02:47\` 右 \`-00:00\`（或左當前右總長），caption tabular-nums。
6. **控制列**：隨機 ⤮ / 上一首 ⏮ / **播放圓鈕（藍色 64px，含 ▶/⏸ 兩態）** / 下一首 ⏭ / 循環 ⟲。
7. **底列**：左「無損音質串流」Hi-Res 徽章（\`--hm-accent-soft\` 藥丸）、右音量 icon。

### library（\`data-screen="library"\`）
1. 標題 title「我的音樂庫」。
2. **分頁列**（segmented，3 段）：\`歌單 / 專輯 / 已下載\`，active 段 \`--hm-accent-soft\` 底 + \`--hm-accent\` 字。
3. **收藏歌單清單**：再次列出數個歌單，每列 = 封面縮圖 + 歌單名(headline) + 曲數(caption「· 12 首」)：\`雨後散步 / 城市心跳 / 山海之間 / 失重時刻\`（並補足其餘以涵蓋 7 歌單其它名於 home 已現）。點列 → detail。
4. **功能卡**：兩張並列卡「離線下載」（icon + 名 + 「3 個歌單已下載」）、「共享音樂庫」（icon + 名 + 「Family 方案」），露出功能名。

### profile（\`data-screen="profile"\`）
1. **使用者卡**：頭像 + 暱稱 + 「迴聲 Resona 會員」label。
2. **播放偏好**：列出開關列，含「**跨裝置接續播放**」（右側藍色 toggle，active 態）、「無損音質串流」、「歌詞同步」。
3. **三訂閱方案卡**（並列／堆疊，必含一字不差價格）：
   - \`免費\`：\`NT$ 0 ／月\` — 含廣告插播、標準音質。標「目前方案」。
   - \`Plus\`：\`NT$ 149 ／月\` — 無廣告、無損音質、離線下載。**推薦態**（\`--hm-accent\` 邊框 + 「推薦」藍 badge + \`--hm-accent-soft\` 微底）。
   - \`Family\`：\`NT$ 249 ／月\` — 6 帳號、共享音樂庫、家長控制。
   \`NT$\` 與數字間一個半形空格，「／月」全形斜線。

### mini-player（迷你播放列）— 常駐於 tab-bar 上方
- 顯示於 **home / search / library / profile**；**player 屏本身不顯示**（避免重複）。
- 結構：左小縮圖(40px, \`--radius-thumb\`) + 歌名(body, 截斷)「晚風練習曲」+ 藝人(caption)「林知夏」+ 右側「播放/暫停鍵（▶/⏸ 兩態）」。
- 整條 \`--hm-surface\` 底 + 頂部 \`--hm-line\` 描邊 + 底部一條 \`--hm-accent\` 細進度（2px，寬約 60%）暗示播放進度。
- **點整條（除播放鍵外）→ 展開到 player 畫面**；播放鍵就地切 ▶/⏸ 不導頁。
- 位置：\`tab-bar\` 容器內、4 tab 之上；高 \`--miniplayer-h\`(56px)，不擠壓 tab 本體。

### tab-bar（\`data-screen="tab-bar"\`）
固定底部容器，**內含 mini-player(上) + 4 tab(下)**。tab 高 \`--tabbar-h\`(60px) + \`--safe-bottom\`，白底 + 頂部 \`--shadow-bar\` 極淡描邊。4 tab：**首頁 / 搜尋 / 音樂庫 / 我的**，每個含 icon(22px) + 文字(caption)。active tab（首頁）icon 與文字皆 \`--hm-accent\`，其餘 \`--hm-text-3\`。

封面圖一律相對路徑 \`assets/cover-N.webp\`；若圖檔不存在，以 \`.cover\` CSS 漸層色塊 fallback，畫面仍完整可讀。

---

## 微互動（所有可點元素都要做到）

- 所有可點元素 \`cursor: pointer\`，並有明確 \`:hover\` / \`:active\`：
  - 卡片：\`:hover\` 抬升 \`--shadow-card-hover\` + \`transform: translateY(-2px)\`；\`:active\` 壓回並 \`background: --hm-surface-press\`。
  - song-row：\`:hover\`/\`:active\` 整列 \`background: --hm-surface-press\` + \`border-radius: --radius-thumb\`。
  - chip：\`:hover\` 略深；\`.active\` 為藍底藍字。tab：\`.active\` 為藍色 icon+字。
  - 主按鈕：\`:hover\` → \`--hm-accent-hover\`；\`:active\` → \`--hm-accent-press\`。
- **播放鍵兩態**：player 主圓鈕與 mini-player 播放鍵都用 ▶/⏸ 切換（toggle class 或 \`:checked\`），按下有縮放回饋 \`transform: scale(0.94)\`。
- segmented 分頁、tab、卡片都要有 active 視覺；切換時只動 \`transform\`/\`opacity\`。
- 任何 transition 必附 \`@media (prefers-reduced-motion: reduce)\` 關閉，且**只動 transform / opacity**（禁動 top/left/width/height/box-shadow 觸發 reflow，shadow 改用 opacity 疊層或直接無 transition）。

---

## Do / Don't

| Do | Don't |
| --- | --- |
| 全頁只用一個彩色 \`--hm-accent\` (#007DFF)，其餘中性灰階 | 撒多種彩色、彩虹漸層 |
| 間距只取 \`--sp-*\` 8pt 階；字級只取 Typography Scale | 隨手寫 13px/17px/21px 等非階梯數值 |
| 圓角 16–24px，內容裝進靈動卡片；陰影只用 token | 用方角卡、<12px 小圓角、自創 box-shadow |
| 陰影極淺，hover 才抬升，靠留白與 surface 微差分層 | 用重陰影 / 深 Material elevation 製造立體 |
| 柵格化 2 欄歌單卡牆 + 區段標題「查看全部」呈現密度 | 全部單欄長列表、沒有區段層次 |
| mini-player 常駐 4 屏、player 屏不重複顯示 | 每屏都塞 mini-player、或完全沒有 mini-player |
| 雨後散步 副標寫「何遠」 | 雨後散步 副標誤寫「Echo Lab」 |
| 每個可點元素都有 cursor + hover + active 兩態 | 卡片/列點下去毫無回饋 |
| 單行文字一律 ellipsis 截斷、不溢出裝置 | 文字撐破卡片、被裁切、貼邊 |
| 次文字用 \`--hm-text-2\` 確保對白卡 ≥ 4.5:1 | 用 \`--hm-text-3\` 當關鍵正文（對比不足） |

---

## Mobile Chrome Spec（無跑版鐵律）

- **390×844 直式**：最外層 \`.device\` 寬鎖 \`--screen-w\`、高鎖 \`--screen-h\`、置中、\`overflow: hidden\`、\`border-radius: --screen-radius\`、\`position: relative\`、\`display: flex; flex-direction: column\`。
- **三段式 flex 佈局**：\`.statusbar\`(固定高，flex:none) → \`.content\`(flex:1, \`overflow-y:auto\`) → \`.dock\`(固定高，flex:none，內含 mini-player + tab-bar)。status-bar 永遠在頂、dock 永遠在底、中間捲動。
- **status-bar 9:41**：固定 44px，左時間右訊號／Wi-Fi／電量，每頁固定不可省。
- **內容不被遮擋**：\`.content\` 底部 \`padding-bottom: --sp-4\`，dock 為獨立 flex 子項，內容捲到底仍露出最後一張卡；單屏切換時其餘屏 \`display:none\`，當前屏佔 \`.content\`。
- **文字不溢出/不裁切**：所有單行截斷、卡內 padding 充足(\`--pad-card\`)、左右恆 \`--pad-screen\`。
- **圓角螢幕**：\`.device\` 的 \`--screen-radius\` 裁切內容；dock 底部圓角與裝置一致。
- 8 屏共用同一 \`.device\` 外框與同一 \`.dock\`，只切換 \`.content\` 內當前屏。

---

## Required Output Contract

遵循 \`.claude/agents/style-page-builder.md\` 的「**App 風格額外要求**」：

- 8 個 \`<section data-screen="<id>">\`，固定 id 與順序：\`status-bar → home → search → detail → player → library → profile → tab-bar\`，各出現恰一次（mini-player 屬於 tab-bar section 之內，不另計 data-screen）。
- \`<body data-viewport="mobile">\` 必須存在。
- \`<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\`。
- status-bar 顯示 \`9:41\`；tab-bar 含 4 tab 可見文字 \`首頁 / 搜尋 / 音樂庫 / 我的\`。
- 三層定價精確字串於同一畫面（profile）：\`免費 NT$ 0\`、\`Plus NT$ 149\`、\`Family NT$ 249\`（後綴「／月」），\`NT$\` 與數字間一個半形空格。
- 所有 app-brief「必抄」字串出現在**可見 body 文字**（非僅屬性）：品牌 迴聲 / Resona；6 功能 個人化每日推薦 / 無損音質串流 / 離線下載 / 歌詞同步 / 跨裝置接續播放 / 共享音樂庫；7 歌單 浪潮回聲 / 深夜公路 / 島嶼晨光 / 雨後散步 / 城市心跳 / 山海之間 / 失重時刻；9 歌名 藍色信號 / 霓虹巷弄 / 候鳥地圖 / 靜電 / 晚風練習曲 / 無人車站 / 潮間帶 / 第七個夏天 / 月台九又四分之三；5 藝人 海平面樂團 / 林知夏 / 夜行列車 / Echo Lab / 何遠；4 分類 chip 華語 / 獨立 / 電子 / 放鬆。
- **正在播放組合**（player 同屏）：\`林知夏\` —〈\`晚風練習曲\`〉，專輯 \`島嶼晨光\`，進度 \`02:47\`。
- **雨後散步** 歌單副標的藝人為 \`何遠\`（不可寫 Echo Lab）。
- **可互動多畫面導覽**：tab 切換 4 主屏 + 卡片→detail + 曲目列/迷你播放列→player + detail/player 返回鍵回上一屏。
- mini-player 常駐 home/search/library/profile、player 屏不顯示；含 ▶/⏸ 兩態播放鍵。
- 單檔 ≤ 200 KB（不含 assets 圖）、無外部 CDN（src/href 不得以 http:// 或 https:// 開頭）、CSS 變數驅動、不可用 framework CSS。
- 任何動畫必附 \`@media (prefers-reduced-motion: reduce)\`，且只動 \`transform\` / \`opacity\`。

---

## Required Images

本風格使用**真實感方形專輯封面圖**（非純 CSS 圖案）。共 6 張，相對路徑 \`assets/cover-1.webp\` .. \`assets/cover-6.webp\`，每張 600×600，抽象、無文字、無 logo、各具不同氛圍，適合音樂串流 App。

用法：
- \`home\` 的「每日迴聲」主 banner 用 \`cover-1.webp\`；歌單牆各卡循環 \`cover-2\`..\`cover-6\`（第 7 張重用 \`cover-1\`）。
- \`detail\` 主打專輯 \`島嶼晨光\` 封面用 \`cover-3.webp\`。
- \`player\` 大封面用 \`cover-4.webp\`。
- song-row / mini-player / 最近播放縮圖循環取用任一 cover。
- **若任一 cover 圖檔不存在**：以 \`.cover\` 的漸層 fallback 呈現完整可讀畫面，不依賴圖片。

詳見同目錄 \`assets-manifest.json\`。

---

## Reference Snippet

可直接套用的 HarmonyOS 風格 CSS（≥ 60 行：device 殼 / statusbar / 區段 / song-row / 卡片 / mini-player / tabbar / 進度條 / 訂閱卡 + prefers-reduced-motion）。

\`\`\`css
/* ── 裝置外殼：三段式 flex ── */
.device {
  width: var(--screen-w); height: var(--screen-h);
  margin: 0 auto; position: relative;
  display: flex; flex-direction: column;
  background: var(--hm-bg);
  border-radius: var(--screen-radius);
  overflow: hidden;
  font-family: var(--font-ui);
  color: var(--hm-text);
  -webkit-font-smoothing: antialiased;
}

/* ── 狀態列（固定頂）── */
.statusbar {
  flex: none; height: var(--statusbar-h);
  display: flex; align-items: center; justify-content: space-between;
  padding: 0 22px;
  font-size: 13px; font-weight: 600;
  font-variant-numeric: tabular-nums;
}
.statusbar .signals { display: flex; gap: 6px; align-items: center; }

/* ── 單一可捲動內容區（中間）── */
.content {
  flex: 1; overflow-y: auto;
  padding: 0 var(--pad-screen) var(--sp-4);
  -webkit-overflow-scrolling: touch;
}
.screen { display: none; }
.screen.active { display: block; }

/* ── 區段標題列（含「查看全部」）── */
.section { margin-top: var(--gap-section); }
.section-head {
  display: flex; align-items: center; justify-content: space-between;
  margin-bottom: var(--sp-3);
}
.section-head h2 { font-size: 17px; line-height: 24px; font-weight: 600; margin: 0; }
.section-head .more {
  font-size: 13px; color: var(--hm-accent); font-weight: 500;
  cursor: pointer;
}

/* ── 靈動卡片（hover 抬升）── */
.card {
  background: var(--hm-surface);
  border-radius: var(--radius-card);
  box-shadow: var(--shadow-card);
  padding: var(--pad-card);
  cursor: pointer;
  transition: transform var(--dur) var(--ease), box-shadow var(--dur) var(--ease);
}
.card:hover { transform: translateY(-2px); box-shadow: var(--shadow-card-hover); }
.card:active { transform: translateY(0) scale(0.99); background: var(--hm-surface-press); }
.card-lg { border-radius: var(--radius-card-lg); padding: var(--sp-5); }

/* ── 柵格化卡牆 ── */
.grid-2 { display: grid; grid-template-columns: repeat(2, 1fr); gap: var(--gap-card); }

/* 封面（圖不存在時漸層 fallback） */
.cover {
  aspect-ratio: 1; width: 100%;
  border-radius: var(--radius-cover);
  background: linear-gradient(135deg, #DCEBFF 0%, #8FBEFF 55%, #007DFF 100%);
  background-size: cover; background-position: center;
}

/* ── 每日迴聲主 banner ── */
.daily {
  display: flex; gap: var(--sp-4); align-items: center;
  padding: var(--sp-5);
  border-radius: var(--radius-card-lg);
  background: linear-gradient(135deg, #0A66E8 0%, #007DFF 100%);
  color: var(--hm-on-accent); cursor: pointer;
}
.daily .cover { width: 88px; flex: none; border-radius: var(--radius-cover); }

/* ── 分類 chip ── */
.chip {
  display: inline-flex; align-items: center; padding: var(--sp-2) var(--sp-4);
  border-radius: var(--radius-chip);
  background: var(--hm-surface-2); color: var(--hm-text-2);
  font-size: 13px; font-weight: 500; white-space: nowrap;
  cursor: pointer; transition: background var(--dur) var(--ease);
}
.chip:hover { background: var(--hm-surface-press); }
.chip.active { background: var(--hm-accent-soft); color: var(--hm-accent); }

/* ── 歌曲列（編號 / 縮圖 / 時長 / ⋯）── */
.song-row {
  display: flex; align-items: center; gap: var(--sp-3);
  padding: var(--sp-2) var(--sp-1);
  border-radius: var(--radius-thumb);
  cursor: pointer; transition: background var(--dur) var(--ease);
}
.song-row:hover, .song-row:active { background: var(--hm-surface-press); }
.song-row .idx { width: 20px; text-align: center; font-size: 13px;
  color: var(--hm-text-3); font-variant-numeric: tabular-nums; flex: none; }
.song-row .thumb { width: 48px; height: 48px; border-radius: var(--radius-thumb);
  flex: none; background: linear-gradient(135deg, #DCEBFF, #007DFF); }
.song-row .meta { min-width: 0; flex: 1; }
.song-row .title { font-size: 15px; font-weight: 500; color: var(--hm-text);
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.song-row .sub { font-size: 13px; color: var(--hm-text-2);
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.song-row .dur { font-size: 11px; color: var(--hm-text-3);
  font-variant-numeric: tabular-nums; flex: none; }
.song-row .more-ic { color: var(--hm-text-3); opacity: 0; flex: none; }
.song-row:hover .more-ic { opacity: 1; }

/* ── 主按鈕 / 播放圓鈕 ── */
.btn-primary {
  display: inline-flex; align-items: center; gap: 6px;
  background: var(--hm-accent); color: var(--hm-on-accent); border: none;
  border-radius: var(--radius-control); padding: 13px var(--sp-6);
  font-size: 15px; font-weight: 600; cursor: pointer;
  box-shadow: var(--shadow-float);
  transition: transform var(--dur) var(--ease), background var(--dur) var(--ease);
}
.btn-primary:hover { background: var(--hm-accent-hover); }
.btn-primary:active { background: var(--hm-accent-press); transform: scale(0.96); }
.play-fab {
  width: 64px; height: 64px; border-radius: 50%;
  background: var(--hm-accent); color: var(--hm-on-accent); border: none;
  display: grid; place-items: center; cursor: pointer;
  box-shadow: var(--shadow-float);
  transition: transform var(--dur) var(--ease);
}
.play-fab:active { transform: scale(0.94); }

/* ── 播放器：大封面 + 進度 ── */
.now-art { width: 280px; max-width: 80%; aspect-ratio: 1; margin: var(--sp-6) auto;
  border-radius: var(--radius-card-lg); box-shadow: var(--shadow-card); }
.player-progress { height: 4px; border-radius: 999px; background: var(--hm-line);
  position: relative; margin: var(--sp-4) 0 var(--sp-1); }
.player-progress .played { position: absolute; inset: 0 40% 0 0;
  background: var(--hm-accent); border-radius: 999px; }
.player-progress .knob { position: absolute; top: 50%; left: 60%;
  width: 12px; height: 12px; border-radius: 50%; background: var(--hm-accent);
  transform: translate(-50%, -50%); box-shadow: var(--shadow-float); }
.player-times { display: flex; justify-content: space-between;
  font-size: 11px; color: var(--hm-text-3); font-variant-numeric: tabular-nums; }
.lyric-line { text-align: center; font-size: 17px; color: var(--hm-text-3); }
.lyric-line .hl { color: var(--hm-accent); font-weight: 600; }

/* ── Hi-Res 徽章 ── */
.badge { display: inline-flex; align-items: center; gap: 4px;
  padding: 4px 10px; border-radius: 999px;
  background: var(--hm-accent-soft); color: var(--hm-accent);
  font-size: 11px; font-weight: 600; }

/* ── 底部 dock：mini-player + tab-bar ── */
.dock { flex: none; background: var(--hm-surface); box-shadow: var(--shadow-bar); }
.miniplayer {
  height: var(--miniplayer-h);
  display: flex; align-items: center; gap: var(--sp-3);
  padding: 0 var(--sp-4); border-bottom: 1px solid var(--hm-line);
  cursor: pointer; position: relative;
}
.miniplayer .thumb { width: 40px; height: 40px; border-radius: var(--radius-thumb);
  flex: none; background: linear-gradient(135deg, #DCEBFF, #007DFF); }
.miniplayer .meta { min-width: 0; flex: 1; }
.miniplayer .title { font-size: 15px; color: var(--hm-text);
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.miniplayer .sub { font-size: 11px; color: var(--hm-text-2); }
.miniplayer .mp-play { width: 36px; height: 36px; border-radius: 50%; border: none;
  background: var(--hm-accent-soft); color: var(--hm-accent); cursor: pointer;
  display: grid; place-items: center; flex: none;
  transition: transform var(--dur) var(--ease); }
.miniplayer .mp-play:active { transform: scale(0.9); }
.miniplayer .mp-bar { position: absolute; left: 0; bottom: 0; height: 2px;
  width: 60%; background: var(--hm-accent); }
/* player 屏不顯示 mini-player */
.device[data-current="player"] .miniplayer { display: none; }

.tabbar {
  height: calc(var(--tabbar-h) + var(--safe-bottom));
  padding-bottom: var(--safe-bottom);
  display: flex;
}
.tabbar .tab {
  flex: 1; display: flex; flex-direction: column;
  align-items: center; justify-content: center; gap: 3px;
  font-size: 11px; color: var(--hm-text-3); cursor: pointer;
  transition: color var(--dur) var(--ease);
}
.tabbar .tab.active, .tabbar .tab.active .ic { color: var(--hm-accent); }

/* ── 訂閱方案卡（推薦態）── */
.plan { background: var(--hm-surface); border: 1.5px solid var(--hm-line);
  border-radius: var(--radius-card); padding: 18px; }
.plan.recommend { border-color: var(--hm-accent); background: var(--hm-accent-soft); }
.plan .price { font-size: 22px; line-height: 28px; font-weight: 700;
  color: var(--hm-text); font-variant-numeric: tabular-nums; }
.plan .rec-badge { display: inline-block; padding: 2px 8px; border-radius: 999px;
  background: var(--hm-accent); color: var(--hm-on-accent);
  font-size: 11px; font-weight: 600; }

/* ── Segmented 分頁（library）── */
.segmented { display: flex; background: var(--hm-surface-2);
  border-radius: var(--radius-control); padding: 3px; }
.segmented .seg { flex: 1; text-align: center; padding: 7px 0;
  font-size: 13px; font-weight: 500; color: var(--hm-text-2);
  border-radius: 11px; cursor: pointer; }
.segmented .seg.active { background: var(--hm-surface); color: var(--hm-accent);
  box-shadow: var(--shadow-card); }

/* ── Reduced motion：關閉所有動效，只動 transform/opacity 的原則下保險全關 ── */
@media (prefers-reduced-motion: reduce) {
  * { transition: none !important; animation: none !important; }
}
\`\`\`
`,"../../.claude/skills/app-ios-dark/SKILL.md":`---
name: app-ios-dark
description: Use when generating a single-file mobile App screen demo for the 迴聲 Resona 音樂串流 App in iOS Dark style. Triggers on iOS Dark、iOS 深色、深色模式、Dark Mode、OLED、Apple HIG dark、純黑背景、system blue、vibrancy、SF Pro、iPhone 深色。
user-invocable: true
---

# iOS 深色 — 迴聲 Resona

## Style Philosophy

iOS 深色模式（Dark Mode，依 Apple Human Interface Guidelines）把整個 App 沉進 OLED 純黑，讓內容自己發光。它不是「把白底反相」這麼簡單——iOS 深色有一套嚴謹的**抬升表面層階（elevated surfaces）**：在 \`#000\` 純黑上，越靠近使用者、越互動的元件用越亮的灰（\`#1C1C1E\` → \`#2C2C2E\` → \`#3A3A3C\`）。系統 accent 用 iOS system blue \`#0A84FF\` 與 system green \`#30D158\`；半透 vibrancy 材質（\`rgba\` 半透 + \`backdrop-filter: blur\`）讓 navigation bar、tab bar、mini-player 像毛玻璃浮在內容之上，底下的封面色彩會微微透出。對音樂串流 App 而言，純黑背景是最強的舞台——專輯封面在暗背景上對比拉滿，彩色封面像在黑色畫廊裡發光，這正是 Apple Music 夜間情境的視覺語言。省電（OLED 純黑像素不發光）是附帶紅利。

本次精修目標：在「無跑版、品質佳」的基礎上把**細膩度**拉到產品級——強化 OLED 深色的階梯式層次、加入常駐 **mini-player（迷你播放列）**、把半透 vibrancy 材質做足、為每個可點元素加明確的 \`:hover\` / \`:active\` 微互動回饋。

三個視覺辨識特徵：
1. **OLED 純黑 \`#000\` 底 + 階梯式抬升灰表面**：背景純黑，卡片/列表用 \`#1C1C1E\`，浮起的 sheet/已選態再升到 \`#2C2C2E\`，pressed/最上層控制元件用 \`#3A3A3C\`，用「亮度」而非邊框表達層級。深度由「表面亮度差 + 極弱陰影」共同建立，不靠粗線、不靠強陰影。
2. **系統藍 accent + 半透 vibrancy 材質**：互動色一律 system blue \`#0A84FF\`；navbar / tab-bar / mini-player 用 \`rgba\` 半透 + \`backdrop-filter: saturate(180%) blur(20px)\` 製造毛玻璃；分隔線是極細 \`rgba(255,255,255,0.08)\` hairline，不用實心粗線。
3. **iOS 分組表格 + 大封面對比**：profile / library / detail 用 iOS「分組插入式表格（inset grouped）」圓角卡列表（左右各留 16px 邊距）；封面在純黑上以飽和色塊或圖像突出，是全頁唯一的高彩度來源。

---

## Design Tokens (CSS variables)

> 所有數值（間距、字級、圓角、陰影）一律走以下 token；樣式中不得硬編色碼或 magic number。間距採 **8pt 系統**（4 / 8 / 12 / 16 / 20 / 24 / 32）。

\`\`\`css
:root {
  /* ── 手機外殼尺寸 ── */
  --screen-w: 390px;
  --screen-h: 844px;
  --statusbar-h: 47px;       /* iPhone notch 狀態列高 */
  --tabbar-h: 83px;          /* tab bar(49) + home indicator 安全區(34) */
  --miniplayer-h: 56px;      /* 常駐迷你播放列高（疊在 tab-bar 之上） */
  --navbar-h: 44px;          /* 標準 iOS navigation bar */
  --safe-bottom: 34px;       /* home indicator 安全區 */
  --safe-top: 0px;
  --screen-radius: 44px;     /* iPhone 圓角螢幕 */

  /* ── 8pt 間距尺度（唯一允許的間距值）── */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;           /* iOS 標準頁面左右邊距 = --inset */
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
  --inset: 16px;             /* 頁面與 inset-group 的左右邊距 */

  /* ── 抬升表面層階（iOS Dark elevated surfaces，靠亮度分層）── */
  --bg-base: #000000;        /* OLED 純黑底（最底層 / scroll 背景）*/
  --surface-1: #1C1C1E;      /* 卡片 / 列表列 / 搜尋結果列 */
  --surface-2: #2C2C2E;      /* 浮起 sheet / 已選態 / 巢狀卡 / chip active */
  --surface-3: #3A3A3C;      /* 最上層控制元件 / :active pressed 態 */
  --fill-quaternary: rgba(118,118,128,0.18); /* 搜尋框 / 未選 chip 填色 */
  --fill-pressed: rgba(255,255,255,0.08);    /* 列表列 :active 高亮 */

  /* ── 半透 vibrancy 材質（navbar / tabbar / mini-player）── */
  --material-bar: rgba(20,20,22,0.72);
  --material-mini: rgba(28,28,30,0.82);      /* mini-player 稍實一點，讀得清楚 */
  --material-blur: saturate(180%) blur(20px);

  /* ── 文字（iOS label 階層，純黑底仍 ≥ WCAG AA）── */
  --label-primary: #FFFFFF;                  /* 主要文字 */
  --label-secondary: rgba(235,235,245,0.60); /* 次要：藝人 / 副標 / 時長 */
  --label-tertiary: rgba(235,235,245,0.30);  /* 佔位 / 曲序 / 非當前歌詞 */
  --label-quaternary: rgba(235,235,245,0.18);

  /* ── 系統 accent ── */
  --accent-blue: #0A84FF;    /* iOS dark system blue（互動主色）*/
  --accent-green: #30D158;   /* system green（無損 / 下載完成）*/
  --accent-red: #FF453A;     /* destructive */
  --accent-pink: #FF375F;    /* 強調 / 喜歡 */
  --on-accent: #FFFFFF;

  /* ── 分隔線 hairline ── */
  --separator: rgba(255,255,255,0.08);
  --separator-opaque: #38383A;

  /* ── 圓角 token（一致）── */
  --radius-card: 16px;       /* inset grouped 卡片 / 訂閱卡 */
  --radius-tile: 8px;        /* 專輯封面縮圖 / mini-player 縮圖 */
  --radius-cover: 12px;      /* player 大封面 / detail 大封面 */
  --radius-control: 10px;    /* 搜尋框 / 方形按鈕 */
  --radius-pill: 999px;      /* 膠囊 chip / filled 按鈕 */

  /* ── 陰影 token（深色下陰影極弱，主要靠表面亮度差）── */
  --shadow-none: none;
  --shadow-card: 0 1px 0 rgba(255,255,255,0.03);   /* 卡頂極細高光 */
  --shadow-sheet: 0 -1px 0 rgba(255,255,255,0.04), 0 8px 30px rgba(0,0,0,0.6);
  --shadow-cover: 0 16px 40px rgba(0,0,0,0.7);     /* 大封面落影 */
  --shadow-bar: 0 -0.5px 0 rgba(255,255,255,0.10); /* bar 頂 hairline 高光 */

  /* ── 字體（SF Pro 為主，中文回退；不外連字型）── */
  --font-text: -apple-system, 'SF Pro Text', 'PingFang TC', 'Noto Sans TC', system-ui, sans-serif;
  --font-display: -apple-system, 'SF Pro Display', 'PingFang TC', 'Noto Sans TC', system-ui, sans-serif;

  /* ── 過場時間（微互動）── */
  --dur-fast: 120ms;
  --dur-base: 220ms;
  --ease-ios: cubic-bezier(0.32, 0.72, 0, 1);   /* iOS 標準 spring-like */
}
\`\`\`

---

## Typography Scale（手機字級，對應 iOS Dynamic Type）

| 級距 | 大小 / 行高 / 字重 / 字距 | 用途 |
| --- | --- | --- |
| large-title | 28px / 1.18 / 700 / 0.01em | home / library / profile 頁的大標題（「迴聲 Resona」「音樂庫」「我的」）|
| title-2 | 22px / 1.25 / 700 / 0 | detail 專輯名、player 曲名、訂閱方案價格 |
| section | 20px / 1.3 / 700 / 0.01em | 區段標題（「為你精選歌單」「熱門排行」「最近播放」）|
| headline | 17px / 1.3 / 600 / -0.01em | 列表列主文字（歌名 / 歌單名 / 方案名 / mini-player 歌名）|
| body | 15px / 1.4 / 400 / -0.01em | 一般內文、搜尋結果次行、按鈕文字 |
| subhead | 13px / 1.35 / 400 / 0 | 藝人名、副標、列表 secondary、「查看全部」、mini-player 藝人 |
| caption | 11px / 1.3 / 500 / 0.02em | tab-bar 標籤、徽章、時長、播放次數、曲序 |

- 字色用 label 階層：主文字 \`--label-primary\`、次要資訊 \`--label-secondary\`、佔位/裝飾 \`--label-tertiary\`。
- large-title / title-2 / section 用 \`--font-display\`；其餘用 \`--font-text\`。
- **不溢出**：歌名 / 歌單名 / 藝人名一律 \`overflow: hidden; text-overflow: ellipsis; white-space: nowrap\`（或 2 行 \`-webkit-line-clamp\`），避免長字串撐破列寬。
- 即使純黑底，所有文字對比都需 ≥ WCAG AA：白字 \`#FFF\` 對 \`#000\` 為 21:1，\`--label-secondary\`（60% 白）對 \`#1C1C1E\` ≈ 8:1，皆合格。\`--label-tertiary\` 僅用於非關鍵裝飾文字（曲序、佔位），不承載必抄字串的唯一可讀來源。

---

## Component & Layout（逐屏內容密度規範）

整頁是單一固定 iPhone 外框（390×844、圓角 \`--screen-radius\`、底色 \`--bg-base\` 純黑）：

\`\`\`
.device（純黑殼，鎖 390×844，overflow:hidden）
├── .statusbar      ← position:absolute top:0，永遠在頂，z 高
├── .screens        ← 中間唯一可捲動區（flex:1, overflow-y:auto）；同時只顯示一個 .screen
│     home / search / detail / player / library / profile（class toggle 切換）
├── .miniplayer     ← 疊在 tab-bar 正上方，常駐於 home/search/library/profile；player 屏隱藏
└── .tabbar         ← position:absolute bottom:0，永遠在底，z 高
\`\`\`

**版面鐵律（無跑版）**：
- \`.device\` 鎖 \`width:390px; height:844px; overflow:hidden\`，內容被裁成 iPhone 圓角。
- \`.statusbar\` 永遠在頂、\`.tabbar\`（含其上的 \`.miniplayer\`）永遠在底，皆 \`position:absolute\` 釘在裝置殼上、\`z-index\` 高於內容。
- 中間 \`.screens\` 是唯一垂直捲動容器，\`padding-top\` 預留 \`--statusbar-h\`、\`padding-bottom\` 預留 \`calc(--tabbar-h + --miniplayer-h + --space-2)\`，確保**內容永不被 status-bar / tab-bar / mini-player 遮住**。
- 任何文字加 ellipsis 防溢出；任何列高足夠（song-row ≥ 56px）；左右邊距至少 \`--inset\`（16px），不貼齊螢幕邊。

### status-bar（固定頂部，每屏共用）
高 \`--statusbar-h\`。左：時間 \`9:41\`（17px / 600，白字，**在可見文字**）。右：訊號格 + Wi-Fi + 電量符號（inline SVG 或 unicode 小圖示，純白）。背景透明（疊在純黑/內容上）；\`padding: 0 26px 6px\`，底對齊。

### home（首頁，3+ 區段）
- **navbar 區**：large-title「迴聲 Resona」（左對齊），右側圓形頭像（\`--surface-2\` 圓 + 首字）。
- **分類 chip 列**：4 個 chip \`華語 / 獨立 / 電子 / 放鬆\`（橫向，\`--fill-quaternary\` 膠囊；點擊切 active 態變 \`--surface-2\`）。
- **區段 1 —「每日迴聲」每日推薦 banner**：寬幅卡（封面 \`assets/cover-1.webp\` + 漸層遮罩 + 標題「每日迴聲」+ 副標「個人化每日推薦・每天 06:00 更新」+ 角落播放圓鈕）。露出核心功能名「個人化每日推薦」。
- **區段 2 —「為你精選歌單」橫向卡牆**：section 標題 + 右側「查看全部 ›」。橫向滑動 7 張歌單卡，**全部列出** \`浪潮回聲 / 深夜公路 / 島嶼晨光 / 雨後散步 / 城市心跳 / 山海之間 / 失重時刻\`——每卡 = 方形封面 \`assets/cover-N.webp\`（N 循環 1–6，圓角 \`--radius-tile\`）+ 歌單名（headline，ellipsis）+ 副標（subhead，如曲數）。
- **區段 3 —「熱門排行」/「最近播放」清單**：section 標題 + 「查看全部 ›」。inset-group 編號清單（5–6 列），左縮圖 + 中歌名（從 9 歌名取）+ 藝人（從 5 藝人取）+ 右時長。再露出小功能卡「無損音質串流」「跨裝置接續播放」。
- 每張卡 / 每列 → 點擊切到 \`detail\`。

### search（搜尋）
- **搜尋框**：\`--fill-quaternary\` 填色、圓角 \`--radius-control\`、內含放大鏡 + placeholder「藝人、歌曲或歌單」。
- **4 分類 chip**：\`華語 / 獨立 / 電子 / 放鬆\`（膠囊）。
- **熱門歌曲**：section 標題「熱門歌曲」+ 編號清單（inset-group），每列：左**編號**（caption，\`--label-tertiary\`）+ 中歌名（headline）+ 藝人（subhead）+ 右**時長**（caption，如 03:12 / 02:47 / 04:05）。露出多首歌名〈藍色信號〉〈霓虹巷弄〉〈候鳥地圖〉〈靜電〉與藝人 \`海平面樂團\`、\`Echo Lab\`、\`何遠\`、\`夜行列車\`。
- **熱門藝人**：section 標題「熱門藝人」+ 橫向圓形頭像卡（藝人名於下，\`海平面樂團 / 林知夏 / 夜行列車 / Echo Lab / 何遠\`）。
- 歌曲列 → 點擊切到 \`player\`；藝人卡 → 切到 \`detail\`。

### detail（專輯詳情）
- **返回鍵**（navbar 左，\`‹\` + system blue），右側「⋯」更多。
- **大封面** \`assets/cover-3.webp\`（置中，寬約 220px，圓角 \`--radius-cover\` + \`--shadow-cover\`）。
- **專輯資訊**：專輯名 \`島嶼晨光\`（title-2）、藝人 \`林知夏\`（subhead，\`--accent-blue\`）、**年份・曲目數・總時長** 一行（\`2026・9 首・31 分鐘\`，caption / secondary）。
- **動作列**：\`▶ 播放全部\`（filled system blue pill）+ \`⤮ 隨機\`（次按鈕，\`--surface-2\` pill）。
- **9 首曲目清單**（inset-group，\`島嶼晨光\` 曲目，全部 9 首）：〈藍色信號〉〈霓虹巷弄〉〈候鳥地圖〉〈靜電〉〈晚風練習曲〉〈無人車站〉〈潮間帶〉〈第七個夏天〉〈月台九又四分之三〉。每列：左**曲序**（caption tertiary）+ 中歌名（headline）+ 藝人（subhead，如 \`林知夏\`）+ 右**時長**（caption）+ 行尾「⋯」選單鍵 / hover 顯示 ▶。
- 任一曲目列 → 切到 \`player\`。

### player（正在播放，純黑全屏；**不顯示 mini-player**）
- **返回鍵**（navbar 左，\`⌄\` 收合）+ 中央「正在播放・島嶼晨光」+ 右「⋯」。
- **大正方形封面** \`assets/cover-3.webp\`（近滿寬，圓角 \`--radius-cover\` + \`--shadow-cover\`）。
- **曲目資訊**：曲名〈晚風練習曲〉（title-2）+ 藝人 \`林知夏\`（subhead）+ 專輯 \`島嶼晨光\`（subhead tertiary）+ 右側 ♡ 喜歡鍵（\`--accent-pink\` active）。
- **進度條**：細長 track（\`--surface-2\`）+ 已播 fill（白）+ 拖曳圓點；兩端時長 \`00:42\`（目前）/ \`02:47\`（總長）。
- **控制列**：上一首 \`⏮\` + **播放/暫停**大圓鈕（白填，內含 ▶/⏸ 兩態，點擊切換）+ 下一首 \`⏭\`，左右各一 \`⤮ 隨機\` / \`🔁 循環\`（active 態 system blue）。
- **次列**：音質徽章「無損音質串流」（\`--accent-green\` 圓角小標）+ 音量列（喇叭 icon + track）。
- **歌詞同步**：3–4 行歌詞，**當前行白色高亮（headline）**、其餘 \`--label-tertiary\`；露出功能名「歌詞同步」。

### library（音樂庫）
- large-title「音樂庫」。
- **分頁 chip**：\`歌單 / 專輯 / 已下載\`（segmented，active 態 \`--surface-2\`）。
- **收藏歌單清單**（inset-group）：列出數個歌單（\`浪潮回聲 / 雨後散步 / 城市心跳 / 失重時刻\`），每列 = 封面縮圖 + 標題（headline）+ **曲數**（subhead，如「24 首」）+ chevron \`›\`。
- **功能列**（inset-group）：\`離線下載\`（leading icon + headline + 右「已下載 12 首」+ ›）、\`共享音樂庫\`（icon + headline + 「Family・6 人」+ ›）。露出功能名「離線下載」「共享音樂庫」。
- 歌單列 → 切到 \`detail\`。

### profile（我的）
- **使用者卡**（inset-group）：頭像 + 名稱 + \`@resona\` 帳號 + 「Plus 會員」徽章。
- **播放偏好**（inset-group）：\`跨裝置接續播放\`（headline + 右 iOS toggle 開關，預設開）、\`無損音質串流\`（headline + toggle）、\`歌詞同步\`（headline + toggle）。露出 3 個功能名。
- **3 訂閱方案卡**（inset grouped，同屏）：
  - \`免費\`＝\`NT$ 0 ／月\`（標「目前方案」）
  - \`Plus\`＝\`NT$ 149 ／月\`（標「推薦」，卡用 \`--accent-blue\` 邊框強調）
  - \`Family\`＝\`NT$ 249 ／月\`
  三方案名與三價格須**一字不差同屏**；推薦/目前方案以邊框或徽章強調。

### mini-player（迷你播放列，常駐）
- 疊在 tab-bar 正上方，高 \`--miniplayer-h\`，半透 vibrancy 材質（\`--material-mini\` + blur），頂端 hairline。
- 內容：左封面縮圖（\`assets/cover-3.webp\`，\`--radius-tile\`）+ 歌名〈晚風練習曲〉（headline，ellipsis）+ 藝人 \`林知夏\`（subhead）+ 右**播放/暫停鍵**（▶/⏸ 兩態）。
- 顯示於 **home / search / library / profile**；**player 屏隱藏**（\`.screen-player.active\` 時 \`.miniplayer { display:none }\`）。
- **點擊本體（非播放鍵）→ 展開到 \`player\`**；點播放鍵只切 ▶/⏸ 不換屏。

### tab-bar（固定底部，每屏共用）
高 \`--tabbar-h\`、半透 vibrancy（\`--material-bar\` + blur）、頂端 hairline。4 tab：**首頁 / 搜尋 / 音樂庫 / 我的**，每 tab = SF Symbol 風格 inline SVG icon + caption。active tab icon 與標籤用 \`--accent-blue\`，非 active 用 \`--label-secondary\`。底部留 \`--safe-bottom\` home indicator 安全區。

---

## Micro-interactions（微互動，產品級回饋）

- **所有可點元素** \`cursor: pointer\`，且有明確 \`:hover\` 與 \`:active\`。
- **列表列 / 卡片** \`:active\` → 背景升到 \`--fill-pressed\` 或 \`--surface-2\`（按下回饋），\`transition: background var(--dur-fast)\`。
- **filled 按鈕**（播放全部 / pill）\`:active\` → \`transform: scale(0.96); opacity: 0.85\`。
- **播放鍵** 有 ▶ / ⏸ 兩態，由 JS toggle class 切換圖示。
- **tab / 分頁 chip / 分類 chip** 有 active 視覺：active tab 文字+icon 變 \`--accent-blue\`；active chip 背景 \`--surface-2\`。
- **mini-player** 整列 \`:active\` 微微提亮（\`--surface-3\`）。
- 凡用 \`transition\` 一律只動 \`transform\` / \`opacity\` / \`background-color\`，且**必附 \`@media (prefers-reduced-motion: reduce)\`** 關閉。

---

## Do / Don't

| Do | Don't |
| --- | --- |
| 背景用 OLED 純黑 \`#000\`，卡片/列表用 \`#1C1C1E\` 抬升灰，pressed 升到 \`#3A3A3C\` | 用深灰 \`#121212\` 當底（那是 Material 不是 iOS dark）|
| 用「表面亮度差 + 極弱高光陰影」表達層級（surface-1/2/3） | 在深色下加強烈 box-shadow 或粗邊框分層 |
| 互動色一律 system blue \`#0A84FF\`；無損/完成用 green \`#30D158\` | 撿不屬於 iOS 系統色盤的飽和紫 / 橘當主 accent |
| navbar / tab-bar / mini-player 用半透 \`rgba\` + \`backdrop-filter: blur\` | 把 bar 做成不透明實心黑（失去 vibrancy 質感）|
| mini-player 常駐於 4 屏、player 屏隱藏，點擊展開到 player | 在 player 屏也疊一條 mini-player（重複、跑版）|
| 分隔線用 \`rgba(255,255,255,0.08)\` 1px hairline | 用 \`#444\` 的粗實線當分隔 |
| 列表用 inset grouped 圓角卡（左右留 16px 邊距）| 列表貼齊螢幕兩側無邊距、無圓角 |
| 每個可點元素加 \`:hover\`/\`:active\` 與 \`cursor:pointer\` | 卡片/列「看似可點卻沒回饋」|
| 專輯封面是全頁唯一高彩度焦點，保持飽和 | 給封面套灰濛濛 overlay 削弱對比 |
| 文字用 label 階層 + ellipsis 防溢出 | 用同一個灰色不分主次、長字串撐破列寬 |

---

## Required Output Contract

遵循 \`.claude/agents/style-page-builder.md\` 的「**App 風格額外要求**」：

- **8 個 \`<section data-screen="...">\`**，唯一 id、固定順序、各出現恰一次：\`status-bar → home → search → detail → player → library → profile → tab-bar\`（\`data-screen\` 屬性是驗證辨識依據，務必每屏都加，勿只給 \`id\`）。
- **\`<body data-viewport="mobile">\`** 必須存在。
- **status-bar 顯示 \`9:41\`**；**tab-bar 四 tab**：\`首頁 / 搜尋 / 音樂庫 / 我的\`（active 態高亮）。
- 三層訂閱方案與**精確價格字串**須同屏出現（profile）：\`免費\`＝\`NT$ 0 ／月\`、\`Plus\`＝\`NT$ 149 ／月\`、\`Family\`＝\`NT$ 249 ／月\`（\`NT$\` 與數字間一個半形空格、後綴全形「／月」）。
- 品牌「迴聲 / Resona」、6 核心功能名（個人化每日推薦 / 無損音質串流 / 離線下載 / 歌詞同步 / 跨裝置接續播放 / 共享音樂庫）、7 歌單名、9 歌名、5 藝人名、4 分類 chip 皆須出現在**可見 body 文字**（不可只放在 \`aria-label\` / \`data-*\`）。
- **可互動多畫面導覽**（vanilla inline JS，inline \`<script>\` ≤ 8 KB）：
  1. status-bar + tab-bar + mini-player 為持久外框；6 個內容畫面同時只顯示一個，**預設 \`home\`**。
  2. tab 切換 home / search / library / profile（同步 active 態）。
  3. 卡片 / 歌單列 → \`detail\`；曲目列 / mini-player 本體 → \`player\`；mini-player 播放鍵只切 ▶/⏸。
  4. \`detail\` 與 \`player\` 頂部有**返回鍵**回上一畫面。
  5. player 屏隱藏 mini-player；其餘屏顯示。
  6. 所有看似可點的元素都有真實 click handler + \`cursor:pointer\` + \`:hover\`/\`:active\`。
- 單檔 HTML **≤ 200 KB**（不含 \`assets/\` 圖片）；**無外部 CDN**（\`<link>\`/\`<script>\`/\`<img>\` 的 src/href 不可 \`http://\` 或 \`https://\`）；圖片一律相對路徑 \`assets/<filename>.webp\`。
- 繁體中文；不可使用任何 framework CSS（Tailwind 等），全以本檔 CSS 變數驅動；WCAG AA 對比。
- 若使用任何 \`@keyframes\` / \`transition\`，須附 \`@media (prefers-reduced-motion: reduce)\` 區塊關閉動畫，且只動 \`transform\` / \`opacity\`。
- JS 失敗或 reduced-motion 模式下內容仍完整可讀（預設可見即 home）。

---

## Required Images

使用**真實風格的方形專輯封面圖** 6 張，放在 \`assets/\`：\`cover-1.webp\` … \`cover-6.webp\`（各 600×600，抽象、無文字、無 logo，適合在純黑深色 UI 上發光的飽和氛圍，見 \`assets-manifest.json\`）。

用法：
- **home 每日迴聲 banner**：\`assets/cover-1.webp\`（加底部漸層遮罩）。
- **home 歌單卡牆**：7 張歌單卡的封面循環使用 \`cover-1\`…\`cover-6\`（第 7 張回到 \`cover-1\`）。
- **detail 主打專輯 \`島嶼晨光\`** 與 **player 大封面** 與 **mini-player 縮圖**：固定用 \`assets/cover-3.webp\`（呼應「正在播放即此專輯」）。
- **search / library** 縮圖：循環取用 6 張任一。
- **Fallback**：若圖檔不存在，封面以 CSS 漸層色塊替代（深色系飽和漸層，如 \`linear-gradient(135deg, #0A84FF, #FF375F)\`），維持封面在純黑上的高彩度突出感；可用 \`background: var(--cover-fallback), url('assets/cover-N.webp')\` 疊放，圖載入時自然覆蓋漸層。

---

## Reference Snippet

可直接套用的 CSS（≥ 60 行；體現 iOS 深色：純黑底 + 階梯抬升表面 + 半透 vibrancy bar/mini-player + inset 列表 + 大封面 + 進度條 + 訂閱卡 + 微互動 + reduced-motion）：

\`\`\`css
/* 手機外殼：純黑、圓角螢幕、固定寬置中、釘住三層外框 */
.device {
  position: relative;
  width: var(--screen-w);
  height: var(--screen-h);
  margin: 0 auto;
  background: var(--bg-base);                 /* OLED 純黑 */
  border-radius: var(--screen-radius);
  overflow: hidden;
  color: var(--label-primary);
  font-family: var(--font-text);
}

/* 狀態列：絕對釘頂、疊在內容上、左時間右符號 */
.statusbar {
  position: absolute; inset: 0 0 auto 0; z-index: 40;
  height: var(--statusbar-h);
  display: flex; align-items: flex-end; justify-content: space-between;
  padding: 0 26px 6px;
  font-size: 17px; font-weight: 600;
  background: transparent; pointer-events: none;
}
.statusbar .indicators { display: flex; gap: 6px; align-items: center; }

/* 唯一可捲動內容區：上下預留 status-bar / tab-bar+mini-player */
.screens {
  position: absolute; inset: 0;
  overflow-y: auto; -webkit-overflow-scrolling: touch; scrollbar-width: none;
  padding-top: var(--statusbar-h);
  padding-bottom: calc(var(--tabbar-h) + var(--miniplayer-h) + var(--space-2));
}
.screens::-webkit-scrollbar { display: none; }
.screen { display: none; padding: 0 var(--inset); }
.screen.active { display: block; }
.screen-player.active { padding: 0 var(--inset); }   /* player 時隱藏 mini-player */
.device:has(.screen-player.active) .miniplayer { display: none; }

/* 區段標題 + 查看全部 */
.section-head {
  display: flex; align-items: baseline; justify-content: space-between;
  margin: var(--space-6) 0 var(--space-3);
}
.section-head h2 { font: 700 20px/1.3 var(--font-display); }
.section-head a { font-size: 13px; color: var(--accent-blue); cursor: pointer; }

/* iOS 分組插入式表格 + 列（微互動：按下提亮）*/
.inset-group {
  margin: var(--space-2) 0 var(--space-6);
  background: var(--surface-1);
  border-radius: var(--radius-card);
  overflow: hidden;
  box-shadow: var(--shadow-card);
}
.song-row {
  display: flex; align-items: center; gap: var(--space-3);
  min-height: 56px; padding: var(--space-3) var(--space-4);
  border-bottom: 1px solid var(--separator);
  cursor: pointer;
  transition: background-color var(--dur-fast) var(--ease-ios);
}
.song-row:last-child { border-bottom: none; }
.song-row:active { background: var(--fill-pressed); }
.song-row .idx { color: var(--label-tertiary); font-size: 11px; min-width: 18px; text-align: center; }
.song-row .meta { min-width: 0; flex: 1; }
.song-row .title {
  font-size: 17px; font-weight: 600; color: var(--label-primary);
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
}
.song-row .artist {
  font-size: 13px; color: var(--label-secondary);
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
}
.song-row .dur { margin-left: auto; font-size: 11px; color: var(--label-tertiary); }

/* 橫向歌單卡牆 */
.card-rail { display: flex; gap: var(--space-3); overflow-x: auto; scrollbar-width: none; }
.card-rail::-webkit-scrollbar { display: none; }
.playlist-card { flex: 0 0 150px; cursor: pointer; }
.playlist-card:active { transform: scale(0.97); }
.cover-tile {
  width: 100%; aspect-ratio: 1; border-radius: var(--radius-tile); object-fit: cover;
  background: linear-gradient(135deg, var(--accent-blue), var(--accent-pink)); /* fallback */
}
.playlist-card .name {
  margin-top: var(--space-2); font-size: 17px; font-weight: 600;
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
}
.playlist-card .sub { font-size: 13px; color: var(--label-secondary); }

/* 分類 chip（quaternary fill 膠囊，active 態升表面）*/
.chip {
  display: inline-flex; align-items: center; padding: var(--space-2) var(--space-4);
  border-radius: var(--radius-pill); background: var(--fill-quaternary);
  color: var(--label-primary); font-size: 13px; font-weight: 500;
  cursor: pointer; transition: background-color var(--dur-fast);
}
.chip.active { background: var(--surface-2); }
.chip:active { background: var(--surface-3); }

/* player 大封面 + 進度條 + 控制 */
.now-playing .cover-art {
  width: 100%; aspect-ratio: 1; border-radius: var(--radius-cover);
  object-fit: cover; box-shadow: var(--shadow-cover);
  background: linear-gradient(135deg, var(--accent-blue), var(--accent-pink));
}
.progress { height: 4px; border-radius: 2px; background: var(--surface-2); overflow: hidden; }
.progress > i { display: block; height: 100%; width: 25%; background: var(--label-primary); }
.play-btn {
  width: 64px; height: 64px; border-radius: var(--radius-pill);
  background: var(--label-primary); color: #000; border: none;
  display: grid; place-items: center; font-size: 26px; cursor: pointer;
  transition: transform var(--dur-fast) var(--ease-ios);
}
.play-btn:active { transform: scale(0.94); }
.lossless-badge {
  display: inline-flex; align-items: center; gap: var(--space-1);
  padding: 3px var(--space-2); border-radius: var(--radius-pill);
  background: rgba(48,209,88,0.16); color: var(--accent-green);
  font-size: 11px; font-weight: 600;
}
.lyric-line { color: var(--label-tertiary); font-size: 15px; line-height: 1.8; }
.lyric-line.current { color: var(--label-primary); font-size: 17px; font-weight: 600; }

/* 常駐 mini-player：半透 vibrancy，疊在 tab-bar 正上方 */
.miniplayer {
  position: absolute; left: 0; right: 0;
  bottom: var(--tabbar-h); z-index: 35;
  height: var(--miniplayer-h);
  display: flex; align-items: center; gap: var(--space-3);
  padding: 0 var(--space-3);
  background: var(--material-mini);
  -webkit-backdrop-filter: var(--material-blur); backdrop-filter: var(--material-blur);
  box-shadow: var(--shadow-bar);
  cursor: pointer; transition: background-color var(--dur-fast);
}
.miniplayer:active { background: var(--surface-3); }
.miniplayer img { width: 40px; height: 40px; border-radius: var(--radius-tile); object-fit: cover; }
.miniplayer .mp-meta { min-width: 0; flex: 1; }
.miniplayer .mp-title { font-size: 15px; font-weight: 600; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.miniplayer .mp-artist { font-size: 13px; color: var(--label-secondary); }
.miniplayer .mp-play { margin-left: auto; width: 36px; height: 36px; display: grid; place-items: center; color: var(--label-primary); cursor: pointer; }

/* 半透 vibrancy tab-bar（釘底）*/
.tabbar {
  position: absolute; inset: auto 0 0 0; z-index: 40;
  height: var(--tabbar-h); padding-bottom: var(--safe-bottom);
  display: flex;
  background: var(--material-bar);
  -webkit-backdrop-filter: var(--material-blur); backdrop-filter: var(--material-blur);
  box-shadow: var(--shadow-bar);
}
.tabbar .tab {
  flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center;
  gap: 3px; font-size: 11px; font-weight: 500; color: var(--label-secondary);
  cursor: pointer; transition: color var(--dur-fast);
}
.tabbar .tab.active { color: var(--accent-blue); }

/* system blue 主要按鈕 + 次按鈕 */
.btn-blue {
  background: var(--accent-blue); color: var(--on-accent); border: none;
  border-radius: var(--radius-pill); padding: 12px 22px;
  font-size: 15px; font-weight: 600; cursor: pointer;
  transition: transform var(--dur-fast) var(--ease-ios), opacity var(--dur-fast);
}
.btn-blue:active { transform: scale(0.96); opacity: 0.85; }
.btn-secondary { background: var(--surface-2); color: var(--label-primary); border: none;
  border-radius: var(--radius-pill); padding: 12px 22px; font-size: 15px; font-weight: 600; cursor: pointer; }
.btn-secondary:active { background: var(--surface-3); }

/* 訂閱方案卡（推薦 = blue 邊框強調）*/
.plan-card {
  background: var(--surface-1); border: 1px solid var(--separator);
  border-radius: var(--radius-card); padding: var(--space-4);
  margin-bottom: var(--space-3);
}
.plan-card.featured { border-color: var(--accent-blue); }
.plan-card .price { font: 700 22px/1.25 var(--font-display); }
.plan-card .tag {
  font-size: 11px; font-weight: 600; color: var(--accent-blue);
  padding: 2px var(--space-2); border-radius: var(--radius-pill);
  background: rgba(10,132,255,0.16);
}

/* iOS toggle（播放偏好）開關 active 態 */
.ios-toggle { width: 51px; height: 31px; border-radius: var(--radius-pill); background: var(--surface-3); position: relative; cursor: pointer; }
.ios-toggle.on { background: var(--accent-green); }
.ios-toggle i { position: absolute; top: 2px; left: 2px; width: 27px; height: 27px; border-radius: 50%; background: #fff; transition: transform var(--dur-base) var(--ease-ios); }
.ios-toggle.on i { transform: translateX(20px); }

@media (prefers-reduced-motion: reduce) {
  * { animation: none !important; transition: none !important; }
}
\`\`\`
`,"../../.claude/skills/app-ios-hig/SKILL.md":`---
name: app-ios-hig
description: Use when generating a single-file mobile App screen demo for the 迴聲 Resona 音樂串流 App in iOS HIG light style. Triggers on iOS HIG、Apple HIG、iOS 17、SF Pro、大標題 large title、分組表格 inset grouped、segmented control、毛玻璃 tab-bar、系統藍、Cupertino、產品級 iOS UI.
user-invocable: true
---

# iOS 淺色 HIG — 迴聲 Resona

## Style Philosophy

Apple 的 Human Interface Guidelines（iOS 17）淺色模式，是「**克制、清晰、可預期**」的產品級系統。它不靠裝飾搶眼，而靠**層次、留白與一致的系統元件**讓內容自己說話。介面像一張乾淨的紙：背景是中性淺灰 \`#F2F2F7\`，內容浮在純白卡片上；唯一的強調色是系統藍 \`#007AFF\`，用得很省——只標互動與選取。字體交給 SF Pro system stack，靠字級與字重（regular / medium / semibold / bold）建立階層，而非靠顏色或框線。在「迴聲 Resona」音樂串流 App 中，這風格呈現出「**像 Apple Music 與設定 App 混血的官方感**」——熟悉、安心、零學習成本。

本次精修的目標：把這個已是標竿的頁面再推到 **Apple Music 級的細膩度**——精修 SF 字級階梯（含行高 / 字重 / 字距）、補上常駐 **mini-player（迷你播放列）**、補「最近播放」「熱門排行」等更豐富的內容區段、為每個可點元素加上 \`:hover\` / \`:active\` 微互動，並把「無跑版」的版面契約寫死。整體保持極度克制：**不增加任何裝飾性陰影或第二強調色**。

三個視覺辨識特徵：

1. **大標題收合**：每屏頂部 34px bold 大標題（large title），向上捲動時收合成 17px semibold 的 navbar 居中標題，配一條 hairline 分隔線。
2. **分組 inset 圓角表格**：清單一律是白卡圓角 10px、左側留 16px inset 的群組，列與列之間是 0.5px \`#C6C6C8\` 淺灰分隔線（不通到最左）。
3. **底部毛玻璃半透 tab-bar + mini-player**：\`backdrop-filter: blur(28px)\` 的半透明白色 bar，上緣一條 hairline；mini-player 常駐 tab-bar 上方，4 個 SF Symbols 風格 icon，active tab 染系統藍。

---

## Design Tokens (CSS variables)

\`\`\`css
:root {
  /* ── 手機外殼專用 token ── */
  --screen-w: 390px;            /* iPhone 直式設計寬（鎖定） */
  --screen-h: 844px;            /* 設計高（鎖定） */
  --statusbar-h: 47px;          /* iOS 狀態列高（含瀏海安全區） */
  --navbar-h: 44px;             /* 收合後 navbar 高 */
  --tabbar-h: 49px;             /* 標準 tab-bar 內容高 */
  --miniplayer-h: 56px;         /* 迷你播放列高 */
  --safe-bottom: 34px;          /* Home Indicator 安全區 */
  --device-radius: 44px;        /* 螢幕外框圓角（iPhone 14 級） */
  --content-pad: 16px;          /* 系統標準左右邊距 */
  --inset-pad: 16px;            /* 分組表格 inset 左右留白 */

  /* ── 8pt 間距尺度（所有 padding/gap/margin 只用這些值）── */
  --sp-1: 4px;
  --sp-2: 8px;
  --sp-3: 12px;
  --sp-4: 16px;
  --sp-5: 20px;
  --sp-6: 24px;
  --sp-8: 32px;

  /* ── 色彩（iOS system colors, light）── */
  --ios-blue: #007AFF;          /* systemBlue accent，唯一強調色 */
  --ios-blue-press: #0063D1;    /* 按下態 */
  --ios-blue-tint: rgba(0,122,255,0.10);  /* 推薦卡 / hover 淺藍底 */
  --ios-green: #34C759;         /* 偶用：無損徽章 */
  --ios-red: #FF3B30;           /* 偶用：刪除 / 喜歡 */
  --ios-orange: #FF9500;        /* 偶用：排行榜名次 */

  --bg-grouped: #F2F2F7;        /* systemGroupedBackground，屏底 */
  --bg-card: #FFFFFF;           /* secondarySystemGroupedBackground，白卡 */
  --bg-bar: rgba(249,249,249,0.80); /* navbar / tab-bar / mini 毛玻璃底 */
  --bg-chip: #FFFFFF;           /* segmented / chip 軌道 */
  --track-segment: #E3E3E8;     /* segmented control 軌道灰 */
  --fill-press: rgba(60,60,67,0.10);  /* 列 / 卡片按下態高亮 */

  --label: #000000;             /* label 主文字 */
  --label-secondary: rgba(60,60,67,0.60);  /* secondaryLabel 灰 */
  --label-tertiary: rgba(60,60,67,0.30);   /* tertiaryLabel，更淡 */
  --separator: rgba(60,60,67,0.29);        /* opaque hairline ≈ #C6C6C8 */
  --fill-quaternary: rgba(116,116,128,0.08); /* 搜尋框 / 次要填色 */

  /* ── 圓角 ── */
  --radius-card: 10px;          /* 分組表格 / 卡片標準圓角 */
  --radius-tile: 12px;          /* 歌單卡牆方塊圓角 */
  --radius-cover: 14px;         /* 專輯封面圓角 */
  --radius-cover-lg: 18px;      /* player 大封面圓角 */
  --radius-mini: 8px;           /* mini-player 縮圖圓角 */
  --radius-pill: 999px;         /* segmented thumb / 膠囊 chip */
  --radius-button: 12px;        /* filled 按鈕 */

  /* ── 陰影（克制，幾乎不用大陰影）── */
  --shadow-bar: 0 -0.5px 0 var(--separator);    /* bar 上緣 hairline */
  --shadow-thumb: 0 3px 8px rgba(0,0,0,0.12), 0 1px 1px rgba(0,0,0,0.04); /* segmented 拇指 / slider 旋鈕 */
  --shadow-tile: 0 1px 3px rgba(0,0,0,0.08);    /* 歌單方塊微浮 */
  --shadow-cover: 0 12px 32px rgba(0,0,0,0.16); /* player 大封面 */

  /* ── 動效（克制；只動 transform / opacity）── */
  --ease-ios: cubic-bezier(0.32, 0.72, 0, 1);   /* iOS spring 感緩動 */
  --dur-press: 120ms;

  /* ── 字體：SF Pro system stack（不可載外部字體）── */
  --font-system: -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'SF Pro Display',
                 'PingFang TC', 'Noto Sans TC', 'Helvetica Neue', system-ui, sans-serif;
}
\`\`\`

> **色彩鎖定**：accent 永遠是 \`--ios-blue\` \`#007AFF\`；屏底永遠 \`--bg-grouped\` \`#F2F2F7\`；卡片永遠純白 \`--bg-card\`。不要引入第二強調色（綠 / 橘 / 紅僅作徽章與名次，面積極小）。

---

## Typography Scale（精修：SF Pro 對應 iOS HIG，手機字級）

完整字級階梯，**每一級都鎖定大小 / 行高 / 字重 / 字距**。SF Pro 在小字用 Text 光學尺寸、大字（≥20px）用 Display；字距（letter-spacing / tracking）依 Apple 規格在大字收緊、小字放鬆。

| 名稱 | 大小 / 行高 / 字重 / 字距 | 用途 |
| --- | --- | --- |
| large-title | 34px / 41px / 700 bold / +0.011em | 每屏頂部大標題（home/search/library/profile）|
| title-1 | 28px / 34px / 700 bold / +0.007em | profile 區塊大標、detail 專輯名（大）|
| title-2 | 22px / 28px / 700 bold / +0.005em | 區塊大標、player 曲名（大）|
| title-3 | 20px / 25px / 600 semibold / +0.004em | 區段標題「為你精選歌單」等 |
| navbar-title | 17px / 22px / 600 semibold / 0 | 收合後 navbar 居中標題 |
| headline | 17px / 22px / 600 semibold / −0.004em | 列主文字、卡片標題、player 曲名 |
| body | 17px / 22px / 400 regular / −0.004em | 段落、主要內容 |
| callout | 16px / 21px / 400 regular / −0.003em | 列副文字、藝人名 |
| subhead | 15px / 20px / 400 regular / −0.002em | 次層說明、mini-player 藝人 |
| subhead-emph | 15px / 20px / 600 semibold / −0.002em | 「查看全部」連結、強調小標 |
| footnote | 13px / 18px / 400 regular / 0 | 時長、播放次數、年份 |
| caption-1 | 12px / 16px / 400 regular / 0 | group header（含 +0.06em uppercase 時）、輔助標 |
| caption-2 | 11px / 13px / 500 medium / +0.005em | tab-bar 標籤、排行名次小字 |

- **group header**（分組表格上方小標）：13px / \`--label-secondary\` / \`text-transform: uppercase\` / \`letter-spacing: 0.06em\` / 400。
- **數字對齊**：所有時間、時長、價格、名次、進度時間用 \`font-variant-numeric: tabular-nums\` 等寬對齊。
- **行尾省略**：歌名 / 藝人 / 歌單名一律 \`overflow: hidden; text-overflow: ellipsis; white-space: nowrap\`，避免長字串溢出撐破列（無跑版關鍵）。

---

## Component & Layout

逐屏規範，**內容密度精修版**。所有屏共用：屏底 \`--bg-grouped\`、左右 \`--content-pad\` 16px、清單用分組 inset 表格。專輯封面一律 \`assets/cover-N.webp\`（相對路徑），**圖檔不存在時以 CSS 線性漸層色塊 fallback**（見 Reference Snippet \`.cover\` / \`.cover[data-fallback]\`）。可捲動內容區底部 padding 必須預留 \`tab-bar + mini-player + safe-bottom\` 高度，內容絕不被遮擋。

### 0. 共用：mini-player（迷你播放列，常駐）

- **常駐於 tab-bar 正上方**，顯示於 **home / search / library / profile** 四屏；**player 畫面本身不顯示 mini-player**（避免重複，符合 Apple Music 行為）。
- 構成：左 = \`--radius-mini\` 8px 小封面縮圖（44×44）；中 = headline 17px 曲名「晚風練習曲」+ subhead 15px 藝人「林知夏」（兩行，皆單行省略）；右 = 播放 / 暫停鍵（▶ / ⏸ 兩態切換）+（可選）下一首鍵。
- **毛玻璃底**：與 tab-bar 同一塊 \`--bg-bar\` + \`blur(28px)\`，mini 與 tabbar 之間一條 hairline 分隔。
- **整條可點**：點封面 / 文字區 → 展開到 \`player\` 畫面；點播放鍵僅切換 ▶ / ⏸ 兩態（不導頁）。
- 微互動：整條 \`:active\` 時加 \`--fill-press\` 淺灰高亮；播放鍵 \`:hover\` 微放大 \`scale(1.06)\`、\`:active\` \`scale(0.92)\`。

### 1. \`status-bar\`（固定頂部，每屏共用，不可省）

- 高 \`--statusbar-h\`，置於裝置殼最上、永遠在頂，左側時間 **9:41**（semibold 15px、置中於左 1/3）、右側依序 **訊號格（信號）+ Wi-Fi + 電量符號**（用 inline SVG 或 unicode 方塊條繪製，純黑 \`--label\`）。
- 淺色：文字黑、無底色（透明，浮在內容上方）。

### 2. \`home\`（首頁）

頂部 **large-title 34px bold「迴聲 Resona」** 品牌大標題 + 副標 slogan 文案。以下至少 **3 個區段**，每段含 title-3 區段標題 + 右側「查看全部 ›」（subhead-emph，系統藍）：

- **「每日迴聲」每日推薦 banner**：大圓角白卡（橫幅），左封面縮圖（72×72）+ 右側 headline 標題 + footnote「每天 06:00 更新」+ 系統藍小播放鍵。整卡 \`:active\` 加按下態。
- **4 分類 chip**（華語 / 獨立 / 電子 / 放鬆）：橫向可捲動膠囊，未選白底灰字、選中系統藍底白字（\`.chip.active\`）。
- **「為你精選歌單」卡牆**：2 欄網格列出全部 7 個歌單名（浪潮回聲 / 深夜公路 / 島嶼晨光 / 雨後散步 / 城市心跳 / 山海之間 / 失重時刻），每卡 = \`assets/cover-N.webp\` 方形封面（\`--radius-tile\`）+ headline 歌單名 + footnote 副標。卡片 \`:hover\` 微浮、\`:active\` \`scale(0.97)\`，點擊→ \`detail\`。
- **「最近播放」清單**（分組 inset 表格）：列出近期播放的多首歌名（〈藍色信號〉〈霓虹巷弄〉〈候鳥地圖〉…）與藝人，每列左 cover 縮圖 + headline 歌名 + callout 藝人 + 右 footnote 時長。整列點擊→ \`player\`。
- 底部「熱門排行」或核心功能小卡，露出「無損音質串流」「歌詞同步」等核心功能名。

### 3. \`search\`（搜尋）

- 頂部 large-title「搜尋」。
- **iOS 搜尋框**：\`--fill-quaternary\` 填色、圓角 10px、左側放大鏡 icon、placeholder「藝人、歌曲、歌單」、灰字。\`:focus\`／\`:active\` 可微亮。
- **4 分類 chip** 再次出現（華語 / 獨立 / 電子 / 放鬆）。
- **「熱門歌曲」編號清單**（分組 inset 表格）：左側名次序號（1–N，tertiary 灰、tabular-nums）+ cover 縮圖 + headline 歌名 + callout 藝人名 + 右 footnote 時長。露出多首歌名（〈藍色信號〉〈霓虹巷弄〉〈候鳥地圖〉〈靜電〉…）與多個藝人名（海平面樂團 / 林知夏 / 夜行列車 / Echo Lab / 何遠）。整列點擊→ \`detail\` 或 \`player\`。
- **「熱門藝人」**：橫向圓形頭像列（圓形 cover fallback）+ callout 藝人名，露出 5 位藝人名。

### 4. \`detail\`（專輯詳情）

- 頂部 navbar 含 **返回鍵 \`‹ 音樂庫\`**（系統藍，點擊→上一屏）。
- **大專輯封面**：\`assets/cover-N.webp\`，置中、圓角 \`--radius-cover\`、寬約 200px，\`--shadow-tile\` 克制陰影。
- title-1 / title-2 專輯名 **島嶼晨光** + callout 藝人 **林知夏** + footnote（**2026** 年份 · **9** 首 · 總時長 · 無損音質串流徽章）。
- **播放全部**（filled 系統藍膠囊鈕，含 ▶ icon）+ **隨機播放**（outline / tinted 鈕，含 ⤮ icon）。兩鈕點擊→ \`player\`。
- **曲目分組 inset 表格**：列出全部 **9 首曲目**（〈藍色信號〉〈霓虹巷弄〉〈候鳥地圖〉〈靜電〉〈晚風練習曲〉〈無人車站〉〈潮間帶〉〈第七個夏天〉〈月台九又四分之三〉），每列左側曲序（1–9，tertiary 灰、tabular-nums）、headline 歌名、callout 藝人、右側 footnote 時長 + 行尾選單鍵 \`⋯\`（或 hover 顯示播放鍵）。整列點擊→ \`player\`。

### 5. \`player\`（播放器，正在播放）

- 頂部 navbar 含 **收合鍵 \`⌄\`**（chevron-down，點擊→返回上一屏 / 收回 mini）+ 居中「正在播放」navbar-title。
- 背景可用同封面的模糊放大色暈（仍須 WCAG AA 可讀，文字罩白／黑保證對比）。
- **大圓角封面**：\`assets/cover-N.webp\`，正方、圓角 \`--radius-cover-lg\`、\`--shadow-cover\` 浮起。
- 曲名 title-2 **晚風練習曲** + callout 藝人 **林知夏** + subhead 專輯 **島嶼晨光**。
- **系統 slider 進度條**：細軌（已播段系統藍、未播灰），左端目前時間、右端總長 **02:47**（footnote、tabular-nums）；拇指為小白圓 + \`--shadow-thumb\`。
- **控制列**：隨機 ⤮ / 上一首 ⏮ / 播放暫停（大圓系統藍，▶ / ⏸ 兩態）/ 下一首 ⏭ / 循環 ⟳。SF Symbols 風格細線 icon。
- **歌詞同步**：露出 2–3 行歌詞，**當前一行逐字高亮**（高亮行 \`--label\` 全黑 + 微大，其餘 \`--label-tertiary\` 淡灰）。
- 底列：音量 / **無損音質串流**徽章（綠或藍小膠囊）+ 歌詞入口。
- **player 不顯示 mini-player**。

### 6. \`library\`（音樂庫）

- large-title「音樂庫」。
- **segmented control**（歌單 / 專輯 / 已下載）切換軌，active 段白底浮起。
- **收藏歌單清單**（分組 inset 表格）：列出收藏歌單（從 7 歌單取數筆），每列左 cover 縮圖 + headline 歌單名 + callout 副標（曲數，如「18 首」）+ 右 chevron \`›\`，點擊→ \`detail\`。
- **「離線下載」列**（含已下載 footnote「12 首 · 已下載」）+ **「共享音樂庫」列**（Family 權益）。各列左 SF Symbols icon + headline 名 + callout 副標 + 右 chevron。

### 7. \`profile\`（我的）

- large-title「我的」+ **帳號身份卡**（頭像圓 + 暱稱 headline + email footnote + 右 chevron）。
- **播放偏好** 分組表格：「無損音質串流」開關列 + 「歌詞同步」開關列 + **「跨裝置接續播放」開關列**（含 iOS 風格 toggle，開啟態系統綠 \`--ios-green\`）。
- **3 訂閱方案卡**（同屏）：免費 / Plus / Family。
  - 卡片堆疊或並列，每卡 = 方案名 headline + 價格 title-2 + 權益 footnote。
  - 價格一字不差：**\`NT$ 0\` ／月**、**\`NT$ 149\` ／月**、**\`NT$ 249\` ／月**（NT$ 與數字一個半形空格，後綴全形「／月」）。
  - Plus 卡為**推薦態**：\`--ios-blue\` 邊框 + \`--ios-blue-tint\` 淺藍底 tonal + 右上「推薦」膠囊；免費卡標「目前方案」。「升級 Plus」filled 系統藍鈕。

### 8. \`tab-bar\`（底部 4 tab）

- 固定裝置殼底部、永遠在底、毛玻璃半透 \`--bg-bar\` + \`backdrop-filter: blur(28px)\`、上緣 hairline、下方預留 \`--safe-bottom\`。
- 4 tab 可見文字：**首頁 / 搜尋 / 音樂庫 / 我的**，各 = SF Symbols 風格 icon（上）+ caption-2 標籤（下）。
- **active 態**：當前 tab（建議「首頁」）icon 與標籤染 \`--ios-blue\`；其餘 \`--label-secondary\` 灰。tab \`:active\` 微縮 \`scale(0.94)\`。
- tab-bar 與其上方 mini-player 共組一塊底部毛玻璃容器（mini 在上、tabs 在下）。

---

## Do / Don't

| Do | Don't |
| --- | --- |
| accent 全程只用系統藍 \`#007AFF\` | 引入第二、第三強調色亂用 |
| 所有間距只取 8pt 尺度（4/8/12/16/20/24/32） | 用 7px / 13px / 18px 等隨意數值 |
| 清單一律分組 inset 圓角 10px + 0.5px hairline 分隔線 | 用全寬無圓角列或粗黑框線 |
| 靠字級／字重（regular / medium / semibold / bold）建立階層 | 靠顏色、底色塊區分文字層次 |
| mini-player 常駐於 4 屏、player 內不再出現 | 每屏都放或 player 內重複放 mini-player |
| 可點元素全部 \`cursor:pointer\` + \`:hover\`/\`:active\` 回饋 | 列與卡片點下去毫無視覺變化 |
| 播放鍵嚴格 ▶ / ⏸ 兩態切換 | 播放鍵永遠同一個 icon |
| 文字一律單行省略（ellipsis），不溢出撐破列 | 長歌名換行或溢出蓋到時長 |
| tab-bar / navbar / mini 用 \`backdrop-filter: blur\` 毛玻璃半透 | bar 用不透明純色或加重陰影 |
| 大標題 34px bold，捲動收合成 17px navbar 標題 | 每屏只有小標題、缺大標題層次 |
| 陰影極克制（僅 player 封面、segmented 拇指、tile 微浮） | 卡片到處加 Material 式大陰影 |
| 圖示用 SF Symbols 風格細線 icon（inline SVG / unicode） | 用粗重、彩色、卡通化 icon |
| 分隔線 hairline 0.5px，不通到最左（留 16px inset） | 分隔線全寬通到螢幕邊 |
| WCAG AA：灰字至少達 \`secondaryLabel\` 對比 | 用過淡灰字導致看不清 |

---

## Mobile Chrome Spec（無跑版鐵律）

- **390×844 直式鎖定**：最外層 \`.device\` 寬鎖 \`--screen-w\`（390px）、高鎖 \`--screen-h\`（844px）、置中、\`overflow: hidden\`、\`border-radius: --device-radius\`（44px）模擬 iPhone 圓角螢幕。\`.device\` 用 \`display: flex; flex-direction: column\` 三段式佈局。
- **三段式版面**：\`.device\` 由上到下＝ ① \`status-bar\`（\`flex: 0 0 auto\`，永遠在頂）→ ② \`.screen\` 當前畫面可捲動區（\`flex: 1 1 auto; overflow-y: auto\`）→ ③ 底部毛玻璃容器（mini-player + tab-bar，\`flex: 0 0 auto\`，永遠在底）。
- **status-bar 固定頂部**：高 \`--statusbar-h\`，左 **9:41** + 右訊號 / Wi-Fi / 電量；浮在內容上，淺色文字黑、透明底；任何畫面捲動都不動。
- **內容不被遮擋**：可捲動區底部 \`padding-bottom: calc(var(--tabbar-h) + var(--miniplayer-h) + var(--safe-bottom) + 8px)\`，確保最後一列內容不被 mini-player / tab-bar 蓋住；\`player\` 屏無 mini-player，padding 改 \`calc(var(--tabbar-h) + var(--safe-bottom) + 8px)\`。
- **文字不溢出 / 不被裁切**：所有歌名 / 藝人 / 歌單名單行省略；列高足夠（≥ 48px 觸控區），padding 充足（列 11–12px 縱向、16px 橫向）。
- **多畫面切換**：每個 \`data-screen\` 以 \`.screen\` 為一個畫面，預設只顯示一屏（\`hidden\` 或 \`display:none\` 切換），切 tab / 點卡 / 點返回時切換顯示——確保任何時刻只有一屏佔據可捲動區，不會多屏堆疊跑版。
- **底部毛玻璃容器**：mini-player 在上、tab-bar 在下，整塊半透 + 上緣 hairline + \`--safe-bottom\` 預留 Home Indicator。
- **圓角螢幕**：\`.device\` 圓角；底部置中放一條 Home Indicator 小橫條（深灰 134×5 圓角）。
- 全頁外層置中於中性背景（\`#d9d9de\` 深灰）襯出裝置殼。

---

## Required Output Contract

遵循 \`.claude/agents/style-page-builder.md\` 的「**App 風格額外要求**」（App 模式，取代 festival 第 3、4 條）：

- **8 個 \`<section data-screen="...">\`**，唯一 id、各恰一次、固定順序：
  \`status-bar\` → \`home\` → \`search\` → \`detail\` → \`player\` → \`library\` → \`profile\` → \`tab-bar\`（最高頻錯誤是只給 \`id=\` 漏 \`data-screen=\`，務必兩者都有）。
- **\`<body data-viewport="mobile">\` 必須存在**。
- \`status-bar\` 必含 **9:41** + 訊號 + 電量；\`tab-bar\` 必含 **首頁 / 搜尋 / 音樂庫 / 我的** 四 tab 且標 active 態。
- **mini-player 常駐**：在 tab-bar 上方、顯示於 home/search/library/profile，含封面縮圖 + 歌名 + 藝人 + 播放/暫停鍵；點擊展開到 \`player\`；\`player\` 畫面不顯示 mini-player。
- **可互動多畫面導覽**（必須真的可點切換）：
  - tab-bar 四 tab → 切換 home / search / library / profile；
  - home 歌單卡 / library 歌單列 → 進 \`detail\`；
  - detail 曲目列 / 播放鍵、search 歌曲列、mini-player → 進 \`player\`；
  - detail / player 含**返回鍵**回上一屏。
  - 以純 CSS（\`:target\` / radio-hack / \`hidden\` toggle）或 ≤ 8KB inline JS 實作；若用 JS，失敗時內容仍須完整可讀。
- **三層定價精確字串**（同屏 profile 訂閱卡）：**\`NT$ 0\`**、**\`NT$ 149\`**、**\`NT$ 249\`**（NT$ 與數字間一個半形空格 + 全形「／月」）。
- 照抄 brief 全部權威字串於**可見文字**（非僅 \`aria-label\` / \`data-*\`）：品牌迴聲 / Resona、6 核心功能、3 方案、7 歌單、9 歌名、5 藝人、4 分類 chip、正在播放（林知夏 —〈晚風練習曲〉/ 島嶼晨光 / 02:47）。
- **單檔 HTML ≤ 200 KB**（不含 \`assets/\`）、**無外部 CDN**（\`<link>\`/\`<script>\`/\`<img>\` 不可 \`http(s)://\` 開頭）、圖片相對路徑 \`assets/cover-N.webp\`。
- **無 framework CSS**（不用 Tailwind 等），純 CSS 變數驅動；繁體中文；WCAG AA 對比。
- **所有可點元素** \`cursor: pointer\` + 明確 \`:hover\` / \`:active\`；若使用任何動畫（segmented 切換 / 按壓態 transition / 畫面切換），須附 \`@media (prefers-reduced-motion: reduce)\` 並只動 \`transform\` / \`opacity\`。

---

## Required Images

使用**真實專輯封面圖**策略。\`assets-manifest.json\` 列 6 張方形專輯封面 \`cover-1.webp\` … \`cover-6.webp\`（每張 600×600、抽象、無文字無 logo、各具不同氛圍）。

- 用途：\`home\` 每日推薦 / 歌單卡牆 / 最近播放、\`search\` 列縮圖與藝人頭像、\`detail\` 大封面、\`player\` 大封面、\`library\` 列縮圖、\`mini-player\` 縮圖。
- **路徑一律相對**：\`assets/cover-N.webp\`。
- **Fallback 必備**：圖檔不存在時，封面元素以 CSS 線性／徑向漸層色塊呈現（不可破圖、不可顯示 alt 字串擋版）。實作見 Reference Snippet 的 \`.cover\` 與 \`.cover[data-fallback]\`。

---

## Reference Snippet

可直接套用的 CSS（≥ 60 行，體現 iOS HIG 淺色 + mini-player + 微互動 + 無跑版三段式佈局）：

\`\`\`css
* { box-sizing: border-box; margin: 0; padding: 0; }
body {
  font-family: var(--font-system);
  background: #d9d9de;                 /* 襯托裝置殼的中性深灰 */
  color: var(--label);
  display: flex; justify-content: center; align-items: center;
  min-height: 100vh;
  -webkit-font-smoothing: antialiased;
}

/* 手機外殼：三段式 flex 佈局（status / screen / bottom-bar） */
.device {
  position: relative;
  width: var(--screen-w); height: var(--screen-h);
  background: var(--bg-grouped);
  border-radius: var(--device-radius);
  overflow: hidden;
  display: flex; flex-direction: column;
}

/* 狀態列 9:41（永遠在頂） */
.statusbar {
  flex: 0 0 var(--statusbar-h);
  display: flex; align-items: center; justify-content: space-between;
  padding: 0 24px; z-index: 30;
  font-size: 15px; font-weight: 600; color: var(--label);
  background: transparent;
}
.statusbar .clock { font-variant-numeric: tabular-nums; }
.statusbar .glyphs { display: flex; gap: 5px; align-items: center; }

/* 可捲動內容區（佔滿中段，不被底 bar 遮住） */
.screen {
  flex: 1 1 auto; overflow-y: auto; -webkit-overflow-scrolling: touch;
  padding: var(--sp-2) var(--content-pad)
           calc(var(--tabbar-h) + var(--miniplayer-h) + var(--safe-bottom) + var(--sp-2));
}
.screen.player-screen {                  /* player 無 mini，padding 較小 */
  padding-bottom: calc(var(--tabbar-h) + var(--safe-bottom) + var(--sp-2));
}

/* 區段標題 + 查看全部 */
.large-title { font-size: 34px; line-height: 41px; font-weight: 700; letter-spacing: 0.011em; margin: var(--sp-1) 0 var(--sp-3); }
.section-head { display: flex; align-items: baseline; justify-content: space-between; margin: var(--sp-5) 0 var(--sp-3); }
.section-head .t { font-size: 20px; line-height: 25px; font-weight: 600; letter-spacing: 0.004em; }
.section-head .all { font-size: 15px; font-weight: 600; color: var(--ios-blue); cursor: pointer; }
.section-head .all:active { opacity: 0.5; }

/* 分組 inset 圓角表格 */
.group { background: var(--bg-card); border-radius: var(--radius-card); overflow: hidden; }
.group-header {
  font-size: 13px; color: var(--label-secondary);
  text-transform: uppercase; letter-spacing: 0.06em;
  padding: 14px var(--inset-pad) 6px;
}
.song-row {
  display: flex; align-items: center; gap: var(--sp-3);
  padding: 11px var(--inset-pad); position: relative;
  cursor: pointer; transition: background var(--dur-press) var(--ease-ios);
  min-height: 48px;
}
.song-row:active { background: var(--fill-press); }
.song-row + .song-row::before {           /* 0.5px hairline，留 16px inset */
  content: ""; position: absolute; top: 0; left: var(--inset-pad); right: 0;
  height: 0.5px; background: var(--separator); transform: scaleY(0.5);
}
.song-row .idx   { width: 22px; text-align: center; font-size: 15px; color: var(--label-tertiary); font-variant-numeric: tabular-nums; }
.song-row .title { font-size: 17px; font-weight: 600; letter-spacing: -0.004em; color: var(--label);
                   overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.song-row .sub   { font-size: 15px; color: var(--label-secondary);
                   overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.song-row .meta  { margin-left: auto; font-size: 13px; color: var(--label-secondary); font-variant-numeric: tabular-nums; }
.song-row .chev  { margin-left: auto; color: var(--label-tertiary); font-size: 17px; }

/* 歌單卡牆（2 欄網格） */
.tile-wall { display: grid; grid-template-columns: 1fr 1fr; gap: var(--sp-3); }
.tile { cursor: pointer; transition: transform var(--dur-press) var(--ease-ios); }
.tile:hover { transform: translateY(-2px); }
.tile:active { transform: scale(0.97); }
.tile .name { font-size: 17px; font-weight: 600; margin-top: var(--sp-2);
              overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.tile .desc { font-size: 13px; color: var(--label-secondary); }

/* 專輯封面（有圖用圖，無圖漸層 fallback） */
.cover {
  aspect-ratio: 1; border-radius: var(--radius-tile);
  background-size: cover; background-position: center;
  box-shadow: var(--shadow-tile);
}
.cover[data-fallback] {                    /* 圖檔缺失時的 CSS 色塊 */
  background-image: linear-gradient(135deg, #8ab6ff 0%, #c9a8ff 50%, #ffd0b0 100%);
}

/* segmented control */
.segmented { display: flex; padding: 2px; gap: 2px; background: var(--track-segment); border-radius: 9px; }
.segmented .seg { flex: 1; text-align: center; font-size: 13px; font-weight: 500;
  padding: 6px 0; border-radius: 7px; color: var(--label); cursor: pointer; }
.segmented .seg.active { background: var(--bg-card); box-shadow: var(--shadow-thumb); }

/* 分類 chip */
.chip { display: inline-flex; align-items: center; padding: 6px 14px; border-radius: var(--radius-pill);
  font-size: 14px; font-weight: 500; background: var(--bg-card); color: var(--label);
  border: 0.5px solid var(--separator); cursor: pointer;
  transition: background var(--dur-press) var(--ease-ios); }
.chip:active { background: var(--fill-press); }
.chip.active { background: var(--ios-blue); color: #fff; border-color: var(--ios-blue); }

/* filled 系統藍按鈕 */
.btn-filled { display: inline-flex; justify-content: center; align-items: center; gap: 6px;
  background: var(--ios-blue); color: #fff; border: none;
  padding: 11px 20px; border-radius: var(--radius-button);
  font-size: 17px; font-weight: 600; cursor: pointer;
  transition: transform var(--dur-press) var(--ease-ios), background var(--dur-press); }
.btn-filled:hover { background: #0a84ff; }
.btn-filled:active { background: var(--ios-blue-press); transform: scale(0.97); }

/* player 大封面 + 系統 slider + 控制列 */
.now-playing .cover-lg { width: 78%; margin: var(--sp-2) auto var(--sp-5); aspect-ratio: 1;
  border-radius: var(--radius-cover-lg); box-shadow: var(--shadow-cover); }
.slider { height: 4px; border-radius: 2px; background: var(--track-segment); position: relative; }
.slider .fill { position: absolute; inset: 0 auto 0 0; width: 58%; background: var(--ios-blue); border-radius: 2px; }
.slider .knob { position: absolute; top: 50%; left: 58%; width: 12px; height: 12px; border-radius: 50%;
  background: #fff; transform: translate(-50%, -50%); box-shadow: var(--shadow-thumb); }
.lyric-line { font-size: 17px; color: var(--label-tertiary); text-align: center; transition: color var(--dur-press); }
.lyric-line.now { color: var(--label); font-weight: 600; }
.play-btn { width: 64px; height: 64px; border-radius: 50%; background: var(--ios-blue); color: #fff;
  display: grid; place-items: center; cursor: pointer;
  transition: transform var(--dur-press) var(--ease-ios); }
.play-btn:active { transform: scale(0.92); }

/* 訂閱卡（Plus 推薦態） */
.plan { background: var(--bg-card); border-radius: var(--radius-card); padding: var(--sp-4);
  border: 1px solid var(--separator); }
.plan.featured { border-color: var(--ios-blue); background: var(--ios-blue-tint); }
.plan .price { font-size: 22px; font-weight: 700; letter-spacing: 0.005em; font-variant-numeric: tabular-nums; }

/* 底部毛玻璃容器：mini-player + tab-bar（永遠在底） */
.bottom-bar { flex: 0 0 auto; z-index: 30;
  background: var(--bg-bar);
  -webkit-backdrop-filter: blur(28px) saturate(1.6);
  backdrop-filter: blur(28px) saturate(1.6);
  box-shadow: var(--shadow-bar); }

/* mini-player */
.mini { display: flex; align-items: center; gap: var(--sp-3);
  height: var(--miniplayer-h); padding: 0 var(--sp-3); cursor: pointer;
  position: relative; transition: background var(--dur-press) var(--ease-ios); }
.mini:active { background: var(--fill-press); }
.mini::after { content: ""; position: absolute; left: 0; right: 0; bottom: 0; height: 0.5px;
  background: var(--separator); transform: scaleY(0.5); }
.mini .mc { width: 44px; height: 44px; border-radius: var(--radius-mini); flex: 0 0 auto;
  background-size: cover; background-position: center; }
.mini .info { min-width: 0; }
.mini .info .ttl { font-size: 17px; font-weight: 600; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.mini .info .art { font-size: 15px; color: var(--label-secondary); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.mini .mp { margin-left: auto; width: 36px; height: 36px; display: grid; place-items: center;
  cursor: pointer; transition: transform var(--dur-press) var(--ease-ios); }
.mini .mp:hover { transform: scale(1.06); }
.mini .mp:active { transform: scale(0.92); }

/* tab-bar */
.tabbar { display: flex; height: var(--tabbar-h); padding-bottom: var(--safe-bottom); }
.tabbar .tab { flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center;
  gap: 2px; font-size: 11px; font-weight: 500; color: var(--label-secondary); cursor: pointer;
  transition: transform var(--dur-press) var(--ease-ios); }
.tabbar .tab:active { transform: scale(0.94); }
.tabbar .tab.active { color: var(--ios-blue); }

/* Home Indicator */
.home-indicator { position: absolute; bottom: 8px; left: 50%; transform: translateX(-50%);
  width: 134px; height: 5px; border-radius: 3px; background: rgba(0,0,0,0.32); z-index: 31; }

/* 畫面切換：一次只顯示一屏（無跑版） */
.screen { display: none; }
.screen.is-active { display: block; }

@media (prefers-reduced-motion: reduce) {
  * { transition: none !important; animation: none !important; }
}
\`\`\`
`,"../../.claude/skills/app-ios6-skeuomorphic/SKILL.md":`---
name: app-ios6-skeuomorphic
description: Use when generating a single-file mobile App screen demo for the 迴聲 Resona 音樂串流 App in iOS6 Skeuomorphic style. Triggers on iOS6 擬物、skeuomorphic、擬物化、linen、亞麻織紋、皮革材質、letterpress、玻璃光澤、浮雕按鈕、拉絲金屬、縫線邊框、舊版 iPod Music app、Forstall era、pre-iOS7。
user-invocable: true
---

# iOS6 擬物 — 迴聲 Resona

## Style Philosophy

iOS6 擬物（skeuomorphic）是 2007–2012 年 Scott Forstall 時代 iOS 的設計語言：介面盡力「假裝成真實世界的物件」。Music app 是一台磨砂金屬與玻璃面板的隨身聽，Notes 是黃色橫線記事本，Game Center 是賭場綠氈桌。設計師用**多層 inset/outset 陰影 + 線性漸層**疊出「按得下去」的浮雕感，用**亞麻織紋（linen）背景**填滿系統層，用 **letterpress 內凹文字**把標題壓進金屬裡。質感是這個風格的全部——每個像素都在模仿一種真實材質。

在 迴聲 Resona 音樂 App 中，這風格表現出「**一台 2012 年的精緻隨身聽**」：拉絲金屬 navbar、皮革質感歌單列、玻璃光澤的播放鈕、縫線收邊的卡片。懷舊但工整，每個元件都看得出重量。要做到「像真的」，秘訣在**克制與一致**：所有受光面從上方來、所有縫線同一道金黃、所有刻字同一組 letterpress 陰影、所有圓角偏小且密集——讓畫面像一塊精心打磨的硬體面板，而非一堆濾鏡。

三個視覺辨識特徵：
1. **亞麻織紋系統背景（linen）**：全頁底層用 \`repeating-linear-gradient\` 兩向交織出細密布紋，深灰偏暖；卡片浮在布紋之上，永遠看得到布。
2. **浮雕斜角元件（emboss/bevel）**：按鈕與 navbar 是「上亮下暗」的線性漸層 + 一道內側白色高光（\`inset 0 1px 0 rgba(255,255,255,.5)\`）+ 外側深色投影，看起來凸出可按；按下（\`:active\`）翻成內凹 \`--press-in\`。
3. **Letterpress 內凹文字 + 縫線邊框**：標題文字用 \`text-shadow: 0 1px 0 rgba(255,255,255,.6)\`（淺底）或 \`0 -1px 0 rgba(0,0,0,.5)\`（深底）壓出刻字感；皮革卡片邊緣用 \`dashed\` 假縫線，金黃線一致。

### 本次精修重點（修正首頁跑版 + 全頁擬物質感）

> **🔴 首頁跑版修正（最高優先）**：先前版本 home 變成「一整面巨大專輯封面牆」，狀態列(9:41)、拉絲金屬標題列、亞麻底紋、清單列全被吃掉。**本版強制 home 必須有完整擬物 chrome**：
> 1. home **不是**滿版封面牆。封面只能以**卡片內的小縮圖**出現（歌單卡 ≤ 半屏寬 2 欄網格的方形縮圖；清單列縮圖 44–52px）。**禁止**任何 \`width:100vw\` / \`height:100%\` 的滿版封面背景。
> 2. home 第一眼必看到：頂部 **status-bar(9:41)** → **拉絲金屬標題列(navbar)** → **亞麻織紋背景** → **玻璃光澤卡片與清單列**，由上而下層次分明。
> 3. 全頁加強擬物質感：**皮革**（每日迴聲橫幅）、**縫線 stitch**（金黃 dashed）、**letterpress 內凹字**、**浮雕 emboss 按鈕**、**玻璃反光**（卡片/封面頂部白色弧形高光），每一屏都要看得出材質與重量。

## Design Tokens (CSS variables)

所有數值寫死於此，SubAgent 不得自創魔術數字。間距一律走 8pt 尺度，圓角/陰影/字級皆為 token。

\`\`\`css
:root {
  /* ── 手機殼專用 token（所有 app-* 共用基準）── */
  --screen-w: 390px;
  --screen-h: 844px;
  --statusbar-h: 44px;
  --tabbar-h: 56px;
  --miniplayer-h: 56px;          /* 迷你播放列高度（疊在 tab-bar 上方） */
  --safe-bottom: env(safe-area-inset-bottom, 0px);
  --screen-radius: 44px;         /* 模擬螢幕圓角 */
  --navbar-h: 52px;              /* 拉絲金屬標題列高度 */

  /* ── 8pt 間距尺度（唯一允許的間距值）── */
  --sp-1: 4px;
  --sp-2: 8px;
  --sp-3: 12px;
  --sp-4: 16px;
  --sp-5: 20px;
  --sp-6: 24px;
  --sp-8: 32px;
  --content-pad: var(--sp-4);    /* 內容區左右內距 = 16px */
  --section-gap: var(--sp-6);    /* 區段之間 = 24px */

  /* ── 材質底色（亞麻 / 皮革 / 拉絲金屬）── */
  --linen-base: #5b5650;         /* 亞麻織紋主色（暖灰） */
  --linen-dark: #4a463f;         /* 織紋暗線 */
  --linen-light: #6a655d;        /* 織紋亮線 */
  --leather: #3a2c22;            /* 深棕皮革 */
  --leather-top: #4a382c;        /* 皮革受光上緣 */
  --leather-stitch: #c9a06a;     /* 皮革縫線金黃 */
  --leather-ink: #f4e8d8;        /* 皮革上的米白字 */
  --felt: #1f5135;               /* 賭桌綠氈（player 點綴） */
  --felt-top: #2a6845;

  /* 拉絲金屬 navbar / tab-bar / status-bar */
  --metal-top: #c7ccd2;
  --metal-mid: #9aa2ab;
  --metal-bot: #767e89;
  --metal-line: #5d646e;         /* 金屬下緣硬線 */

  /* ── 卡片紙面 ── */
  --card-top: #fbf8f2;           /* 卡片上緣（受光） */
  --card-bot: #e7e1d6;           /* 卡片下緣（陰影） */
  --card-edge: #b7ad9c;          /* 卡片硬邊 */
  --row-top: #fcfaf5;            /* 清單列受光上緣 */
  --row-bot: #efe9dd;            /* 清單列下緣 */

  /* ── 文字（WCAG AA：金屬上深字、紙上墨字）── */
  --ink: #2b2a27;                /* 主墨色，紙底對比 > 9:1 */
  --ink-soft: #5a5750;           /* 次要文字，對比 > 4.5:1 */
  --ink-on-metal: #2c3038;       /* 金屬列上的字 */
  --letterpress-up: rgba(255,255,255,.6);   /* 淺底刻字高光 */
  --letterpress-dn: rgba(0,0,0,.45);        /* 深底刻字陰影 */

  /* ── 強調色（玻璃藍鈕，沿用 iOS6 #007aff 系）── */
  --glass-blue-top: #59a6ff;
  --glass-blue-bot: #0a64e0;
  --glass-blue-edge: #0a4aa8;
  --glass-blue-ink: #0a4aa8;     /* active tab / 連結文字 */
  --accent-red: #c0392b;         /* 紅色刪除/喜歡點綴 */
  --accent-green-top: #7bd06a;   /* 「目前方案」徽章 */
  --accent-green-bot: #3f9c2e;
  --on-glass: #ffffff;

  /* ── 圓角（擬物時代偏小）── */
  --radius-card: 12px;
  --radius-btn: 9px;
  --radius-row: 8px;
  --radius-cover: 8px;
  --radius-pill: 999px;

  /* ── 陰影 / 浮雕 token ── */
  --bevel-up: inset 0 1px 0 rgba(255,255,255,.55);   /* 元件內側上高光 */
  --bevel-dn: inset 0 -1px 0 rgba(0,0,0,.35);        /* 元件內側下陰影 */
  --drop: 0 1px 2px rgba(0,0,0,.45);                 /* 元件外投影 */
  --drop-lg: 0 3px 8px rgba(0,0,0,.45);              /* 大元件落影（封面/方案卡） */
  --card-shadow: 0 1px 0 rgba(255,255,255,.5),       /* 卡片頂高光 */
                 0 2px 5px rgba(0,0,0,.4);           /* 卡片落影 */
  --press-in: inset 0 2px 5px rgba(0,0,0,.5);        /* 按下/凹槽 */
  --gloss: linear-gradient(180deg, rgba(255,255,255,.45), rgba(255,255,255,0) 48%); /* 玻璃反光 */

  /* ── 字體（擬物時代慣用無襯線 + 細節用窄體）── */
  --font-ui: 'Helvetica Neue', 'PingFang TC', 'Heiti TC', system-ui, sans-serif;
  --font-num: 'Helvetica Neue', 'Arial Narrow', sans-serif;  /* 時間/時長等數字 */
}
\`\`\`

## Typography Scale（手機字級，含行高/字重/字距）

| 級距 | 大小 / 行高 / 字重 / 字距 | 用途 |
| --- | --- | --- |
| caption | 11px / 1.30 / 400 / +0.2px | 播放次數、時長、tab 標籤、徽章文字 |
| meta | 13px / 1.35 / 400 / 0 | 副標、藝人名、分類說明、方案權益 |
| body | 15px / 1.40 / 400 / 0 | 歌名、列表主文字、段落 |
| label | 13px / 1.20 / 600 / +0.3px | 「查看全部」連結、chip 文字、按鈕小字 |
| row-title | 17px / 1.30 / 600 / 0 | 歌單卡標題、清單列主項（letterpress） |
| section | 20px / 1.25 / 700 / +0.2px | 屏內區段大標、navbar 標題（letterpress） |
| display | 26px / 1.20 / 700 / +0.3px | home 品牌「迴聲 Resona」、player 曲名 |

排版規則：
- 金屬 navbar 標題與紙底卡片標題一律加 letterpress \`text-shadow\`（淺底向上 \`--letterpress-up\`、皮革/深底向下 \`--letterpress-dn\`）。
- 數字（9:41 時間、02:47 時長、播放次數）一律 \`--font-num\` 窄體，營造儀錶板感。
- 行尾不溢出：歌名/歌單名用 \`overflow:hidden; text-overflow:ellipsis; white-space:nowrap\`，藝人名同理；多行文案用 \`-webkit-line-clamp\` 截 2 行。

## Component & Layout（逐屏與元件規範）

整頁是一台直立隨身聽。**版面骨架（鎖死，不可跑版）**：

\`\`\`
.device  (390×844, --screen-radius 圓角, overflow:hidden, display:flex column)
 ├─ .statusbar  (固定頂, 44px, 拉絲金屬, 永遠在最上)
 ├─ .content    (flex:1, 唯一可捲動區, 底鋪 linen, padding-bottom 預留 mini-player+tab-bar)
 │    └─ 當前 data-screen 的內容（切換顯示）
 ├─ .miniplayer (常駐, 56px, 疊在 tab-bar 上方; home/search/library/profile 顯示, player 隱藏)
 └─ .tabbar     (固定底, 56px + safe-bottom, 拉絲金屬, 4 tab, 永遠在最下)
\`\`\`

- \`.content\` 的 \`padding-bottom\` 必須 = \`calc(var(--miniplayer-h) + var(--tabbar-h) + var(--safe-bottom) + var(--sp-2))\`，確保最後一列不被迷你播放列或 tab-bar 遮住。
- player 畫面顯示時隱藏 mini-player（\`.device[data-active="player"] .miniplayer { display:none }\`），此時 \`.content\` 的底距改只預留 tab-bar 高度（或 player 自身為全屏不捲）。
- 每屏 \`<section data-screen="<id>">\`，固定順序，未顯示者 \`display:none\`；切 tab / 開 detail / 開 player 透過 \`:target\` 或極小 inline JS 切換 \`data-active\`。

逐屏規範：

### 1. \`status-bar\`（固定頂部，44px，拉絲金屬）
- 左：時間 \`9:41\`（\`--font-num\`，letterpress 深字）。
- 右：訊號格（5 條由矮到高的 CSS 小長條）＋ Wi-Fi 弧形＋電量符號（電池外框 + 內填 + 正極小凸）。
- 金屬下緣 \`--metal-line\` 1px 硬線 + 內側上高光。永遠在最上，任何畫面都看得到。

### 2. \`home\`（修正跑版重點屏）
頂到底**三段式 + chrome 完整**：

- **navbar（拉絲金屬標題列，52px）**：左側大標「**迴聲 Resona**」（display 級、letterpress），右側可放小齒輪/通知浮雕圓鈕。金屬上緣高光 + 下緣硬線。
- **區段 A — 「每日迴聲」每日推薦 banner（皮革材質）**：整條 \`.card--stitched\` 皮革橫幅（\`--leather\` 漸層 + 金黃 dashed 縫線），左側 **小方形封面縮圖**（≤ 88px，玻璃高光 + 縫線框）、右側米白 letterpress 文字「每日迴聲」+ 一句推薦詞 + 浮雕「立即播放」玻璃藍小鈕。**此封面是縮圖，非滿版。**
- **區段 B — 「為你精選歌單」卡牆**：區段標題列（section 級 letterpress「為你精選歌單」+ 右側「查看全部 ›」label 連結）。下方 **2 欄網格**，**7 個歌單卡全列**，每卡：方形封面縮圖（卡內，套 \`--gloss\` 玻璃高光 + 縫線框）+ 卡下 letterpress 歌單名 + caption（如曲數）。7 歌單名：**晨間通勤、深夜電台、海邊散步、專注編碼、雨天咖啡館、健身節拍、週末派對**。卡片浮在 linen 上，網格 gap = \`--sp-3\`。
- **區段 C — 「最近播放」清單**：區段標題「最近播放」+「查看全部 ›」。下方 \`.song-row\` 清單列（玻璃光澤紙面），列出數首歌：左 44–52px 封面縮圖、中歌名 + 藝人（meta）、右時長（\`--font-num\`）+ 浮雕播放鍵 ▶。露出歌名與藝人：〈藍色信號〉海平面樂團、〈霓虹巷弄〉林知夏、〈候鳥地圖〉夜行列車、〈靜電〉Echo Lab、〈晚風練習曲〉何遠。
- **區段 D — 核心功能小卡（2 張）**：浮雕紙卡橫排，露出 **無損音質串流**、**歌詞同步** 兩功能名 + 小說明。

> ✅ home 第一屏由上而下：status-bar(9:41) → 金屬 navbar「迴聲 Resona」→ linen 背景 → 皮革「每日迴聲」橫幅 → 歌單卡牆 → 清單。封面全為縮圖，無滿版牆。

### 3. \`search\`
- navbar「搜尋」。
- **凹槽搜尋框**：\`--press-in\` 內陰影 + 放大鏡 icon + placeholder「搜尋歌曲、藝人、專輯」，看起來像壓進金屬的搜尋槽（cursor:text）。
- **4 分類 chip**（浮雕膠囊橫排）：**華語 / 獨立 / 電子 / 放鬆**，首個 active 凹槽態。
- **「熱門歌曲」編號清單**：\`.song-row\` 帶左側大序號（1–6，\`--font-num\`，letterpress），中歌名 + 藝人，右時長。露出多歌名與 5 藝人：海平面樂團 / 林知夏 / 夜行列車 / Echo Lab / 何遠。
- **「熱門藝人」**：橫向小卡或圓形頭像列，露出上述藝人名（letterpress）。

### 4. \`detail\`
- navbar 左側**返回鍵 ‹**（浮雕玻璃鈕，回 home，cursor:pointer）+ 標題「專輯」。
- **大方形封面**（\`assets/cover-1.webp\`，套 \`--gloss\` 玻璃高光 + 金屬縫線框，置中，寬約 60% 屏寬，**非滿版**）。
- **專輯資訊**：專輯名 **島嶼晨光**（section letterpress）＋ 藝人 **林知夏**（meta）＋ **2024 · 9 首 · 38 分鐘**（年份/曲目數/總時長，\`--font-num\`）。
- **動作列**：**播放全部**（玻璃藍浮雕主鈕，含 ▶）＋ **隨機播放**（次要浮雕鈕，含 🔀）。
- **完整 9 曲目清單** \`.track-list\`，逐列：左序號（1–9）、中歌名、藝人小字、右時長（\`--font-num\`）+ 行尾浮雕播放鍵 ▶（點擊 → player）。9 歌名全列：**藍色信號 / 霓虹巷弄 / 候鳥地圖 / 靜電 / 晚風練習曲 / 無人車站 / 潮間帶 / 第七個夏天 / 月台九又四分之三**。列間 1px 內凹刻線分隔。

### 5. \`player\`（全屏，不顯示 mini-player）
- 深皮革或綠氈底（\`--leather\`/\`--felt\`）營造「翻面控制台」。
- navbar 左側**收合鍵 ⌄**（回上一屏）+ 中央「正在播放」+ 右側選單。
- **大方形封面**（\`assets/cover-1.webp\`，玻璃光澤 + 金屬縫線框，置中偏上）。
- **曲目資訊**：歌名〈**晚風練習曲**〉（display letterpress，皮革向下刻字）＋ 藝人 **林知夏** ＋ 專輯 **島嶼晨光**（meta）。
- **進度條**：金屬凹槽 \`--press-in\` 軌 + 已播放段玻璃藍填色 + 玻璃圓鈕滑塊（knob）；左 \`01:12\`（目前）右 \`02:47\`（總長），皆 \`--font-num\`。
- **歌詞同步**：3–4 行歌詞，**當前行逐字高亮**（高亮行玻璃藍 + 較亮，其餘 \`--ink-soft\`/皮革灰）。
- **控制列**：隨機 🔀 / 上一首 ⏮ /（大玻璃藍圓鈕）**播放暫停 ▶⏸**（兩態）/ 下一首 ⏭ / 循環 🔁，皆浮雕斜角鈕，按下翻 \`--press-in\`。
- **底列徽章**：**無損音質**（Hi-Res 金屬徽章）＋ 音量小滑桿（金屬凹槽）。

### 6. \`library\`
- navbar「音樂庫」。
- **分頁列**（3 分頁浮雕 segmented）：**歌單 / 專輯 / 已下載**，首個 active 凹槽態。
- **收藏歌單清單** \`.song-row\`：左封面縮圖（44–52px，玻璃高光）、中 letterpress 歌單名 + 曲數 caption、右 chevron ›。列出 home 7 歌單名中數筆（如 晨間通勤 / 深夜電台 / 海邊散步 / 專注編碼 / 雨天咖啡館）。
- **功能列**：**離線下載**（下載 icon + 「已下載 12 首」徽章）、**共享音樂庫**（Family 共建提示，皮革小卡）。

### 7. \`profile\`
- navbar「我的」。
- **使用者卡（皮革名片 + 金黃縫線）**：圓形頭像（玻璃高光）+ 名稱 + 會員狀態。
- **播放偏好卡（浮雕紙卡）**：列出開關列，含 **跨裝置接續播放**（浮雕滑動開關 toggle，cursor:pointer）+ 無損串流開關 + 通知開關。
- **3 訂閱方案卡**（浮雕紙卡，堆疊）：
  - **免費 NT$ 0**／月（基礎權益）— 標「目前方案」徽章（綠）。
  - **Plus NT$ 149**／月（無損 + 離線）— 玻璃藍邊高亮，標「推薦」徽章。
  - **Family NT$ 249**／月（6 人共享）。
  - 每張列權益 + 浮雕「升級 / 選擇」玻璃鈕。**三價格字串同屏**。

### 8. \`tab-bar\`（固定底部，56px）
- 拉絲金屬底 + 上緣 \`--metal-line\` 硬線。
- 4 tab 可見文字「**首頁 / 搜尋 / 音樂庫 / 我的**」，各配浮雕小 icon。
- **active 態**（隨當前畫面）：icon 與文字轉玻璃藍 \`--glass-blue-ink\` + \`--press-in\` 凹槽感（正按住）。cursor:pointer。

### mini-player（迷你播放列，常駐於 tab-bar 上方）
- 一條 56px 的浮雕橫條（金屬或深皮革底 + 上緣高光 + 落影），疊在 tab-bar 正上方。
- 內容：左 40px 封面縮圖（玻璃高光）+ 中歌名〈晚風練習曲〉+ 藝人 林知夏（單行省略）+ 右 **播放/暫停浮雕鈕 ▶⏸**（兩態）。
- **顯示於 home / search / library / profile**；**player 畫面隱藏**（避免重複控制）。
- 點擊整條（除播放鈕外）→ 展開到 \`player\` 畫面（cursor:pointer + :active 微下沉）。

封面 fallback：若 \`assets/cover-N.webp\` 不存在，封面元素以 CSS 線性漸層色塊替代（不同歌單給不同漸層），仍套 \`--gloss\` 玻璃光澤與縫線框，畫面不破。

## Do / Don't

| Do | Don't |
| --- | --- |
| home 用完整 chrome：status-bar→金屬 navbar→linen→卡片清單，封面只當縮圖 | ❌ home 做成滿版專輯封面牆，吃掉狀態列/標題列/底紋 |
| 系統層用 linen 織紋（雙向 \`repeating-linear-gradient\`），卡片永遠浮其上 | 用純色平面背景（失去擬物質感） |
| 按鈕用「上亮下暗線性漸層 + 內側白高光 + 外投影」浮雕，按下翻 \`--press-in\` | 用扁平單色填滿（那是 iOS7 之後） |
| 間距只用 4/8/12/16/20/24/32 token | 隨手寫 7px/13px/19px 魔術數字 |
| 標題用 letterpress（淺底向上、皮革深底向下） | 文字無陰影直接貼底 |
| navbar / tab-bar / status-bar 用拉絲金屬漸層 + 1px 下緣硬線 | 用半透明毛玻璃（那是後 iOS） |
| 皮革卡用 dashed 金黃假縫線；紙卡用硬邊收口 | 用大圓角 + 大留白的現代卡片 |
| 強調鈕用玻璃藍 \`#007aff\` 系漸層 + 頂部高光弧 | 用霓虹色或粉彩漸層 |
| 圓角偏小（8–12px），元件密集有重量 | 圓角 ≥ 20px 的輕盈現代感 |
| 所有材質貼圖用 CSS 生成，封面用相對路徑或 fallback 漸層 | 引入外部材質圖/字體 URL（違反無 CDN） |
| 文字 overflow 截斷、padding 充足、不溢出不裁切 | 長歌名撐破列、貼邊無內距 |

## Motion Specification

- 僅用於微互動，不做敘事動畫。允許：按鈕 \`:active\` 下沉、tab/卡片切換淡入、進度滑塊 transform、歌詞高亮行切換、mini-player 展開。
- **只動 \`transform\` / \`opacity\`**，不動 top/left/width/height（避免 reflow）。
- transition 時長 ≤ 180ms，ease-out。
- 任何 \`:hover\`/\`:active\`/active 態都要有明確視覺回饋（見 Micro-interaction）。

## Micro-interaction（微互動，全體必做）

- 所有可點元素 \`cursor: pointer\`（搜尋框 \`cursor: text\`）。
- \`:hover\` → 卡片/列輕微提亮（\`filter: brightness(1.03)\` 或頂高光加強）；\`:active\` → 浮雕翻 \`--press-in\` + \`transform: translateY(1px)\`（按下回饋）。
- **播放鍵兩態**：未播 ▶、播放中 ⏸；mini-player 與 player 大鈕皆兩態，按下有凹陷感。
- **tab / 分頁 / chip active**：玻璃藍著色 + \`--press-in\` 凹槽，明顯「被按住」。
- **訂閱卡**：推薦卡（Plus）玻璃藍邊高亮 + 徽章；目前方案（免費）綠徽章。
- 進度滑塊 knob 玻璃反光圓鈕，hover 微放大（transform scale）。

## Accessibility (Reduced Motion)

- 必含 \`@media (prefers-reduced-motion: reduce)\`：關閉所有 \`transition\`/\`animation\`，保留靜態浮雕外觀；歌詞高亮以靜態色差呈現，進度條以靜態填色呈現。
- 文字對比走 token（紙底墨字 > 9:1、次字 > 4.5:1、金屬上深字達 AA）。
- 所有 tab/鈕/列可鍵盤聚焦，保留可見 \`:focus-visible\` 外框（玻璃藍 2px）。

## Mobile Chrome Spec（無跑版鐵律）

- 設計基準 **390×844**；最外層 \`.device\` 鎖寬 \`var(--screen-w)\`、最小高 \`var(--screen-h)\`、置中、\`overflow: hidden\`、\`border-radius: var(--screen-radius)\`。
- \`<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\` 必含。
- \`<body data-viewport="mobile">\` 必含。
- **status-bar 永遠在頂**（44px，拉絲金屬，含 9:41 + 訊號 + 電量）。
- **tab-bar + mini-player 永遠在底**：mini-player 疊於 tab-bar 上方；tab-bar 56px + \`var(--safe-bottom)\`。
- 中間為**單一可捲動內容區** \`.content\`，\`padding-bottom: calc(var(--miniplayer-h) + var(--tabbar-h) + var(--safe-bottom) + var(--sp-2))\`，**內容不被遮擋**。
- **文字不溢出/不被裁切**：所有單行文字 ellipsis、多行 line-clamp；元件 padding 充足（列內 ≥ \`--sp-2\`、卡內 ≥ \`--sp-3\`）。
- **封面禁滿版**：任何 \`.cover\` 縮圖最大寬度受卡片/列限制，home 封面為 2 欄網格縮圖或列縮圖，detail/player 大封面 ≤ 60% 屏寬置中。
- 圓角螢幕：\`.device\` 套 \`--screen-radius\`；status-bar / tab-bar 貼齊邊緣不另加圓角。

## Required Output Contract

遵循 \`.claude/agents/style-page-builder.md\` 的「**App 風格額外要求**」：

- **8 個 \`<section data-screen="<id>">\`**，固定 id 與順序：\`status-bar → home → search → detail → player → library → profile → tab-bar\`，各恰一次。
- **\`<body data-viewport="mobile">\`** 必含。
- **status-bar 顯示 \`9:41\`**；**tab-bar 四 tab**「首頁 / 搜尋 / 音樂庫 / 我的」。
- **mini-player 常駐**於 home/search/library/profile（player 隱藏），含封面縮圖 + 歌名 + 藝人 + 播放/暫停鍵。
- 所有「必抄」字串出現在**可見 body 文字**（不可只放 \`aria-label\`/\`data-*\`）：迴聲 / Resona、功能名（無損音質串流、歌詞同步、離線下載、共享音樂庫、跨裝置接續播放）、7 歌單（晨間通勤 / 深夜電台 / 海邊散步 / 專注編碼 / 雨天咖啡館 / 健身節拍 / 週末派對）、9 歌名、5 藝人（海平面樂團 / 林知夏 / 夜行列車 / Echo Lab / 何遠）、4 分類 chip（華語 / 獨立 / 電子 / 放鬆）、正在播放組合（林知夏 — 晚風練習曲 — 島嶼晨光）。
- **三層定價精確字串**同屏（profile）：\`免費 NT$ 0\`、\`Plus NT$ 149\`、\`Family NT$ 249\`（\`NT$\` 與數字間一個半形空格、後綴全形「／月」）。
- **可互動多畫面導覽**：tab 切換（4 tab）+ home 卡片/曲目列 → detail + 曲目列/mini-player → player + detail/player 返回鍵回上一屏。用 \`:target\` 或 ≤ 數行 inline JS 切換 \`data-active\`。
- 單檔 HTML **≤ 200 KB**（不含 \`assets/\` 圖）；**無外部 CDN**（src/href 不可 \`http://\`/\`https://\`，封面用 \`assets/cover-N.webp\`）。
- 任何 \`@keyframes\`/\`transition\` 須附 \`@media (prefers-reduced-motion: reduce)\`，且只動 \`transform\`/\`opacity\`。
- 結尾回傳單行 JSON \`{"ok":true, ...}\`，\`sections_found\` 回報 8 個 \`data-screen\`。

## Required Images

真實感方形專輯封面圖，共 6 張：\`cover-1.webp\` … \`cover-6.webp\`（600×600，抽象、無文字、無 logo），各具不同氛圍，prompt 見 \`assets-manifest.json\`。

- **用途**：\`detail\` 主打專輯 \`島嶼晨光\` 與 \`player\` 大封面用 \`cover-1.webp\`；\`home\` 7 歌單卡牆與 \`library\` 收藏列依序套 \`cover-1\`…\`cover-6\`（第 7 張可重用或 CSS 漸層）；mini-player 縮圖用 \`cover-1.webp\`。
- **套圖方式**：封面外一律加「\`--gloss\` 玻璃高光（頂部白色弧形漸層）＋ 金屬縫線框」。
- **封面禁滿版**：僅作卡內/列內縮圖或 detail/player 大封面（≤ 60% 屏寬），不可作頁面背景滿版牆。
- **Fallback**：缺圖時以 CSS 線性漸層色塊替代（不同卡給不同漸層），仍套玻璃光澤與縫線框。

## Reference Snippet

可直接套用的 CSS（≥ 60 行）：device 殼 / statusbar / navbar / 區段 / song-row / 卡片 / 封面 / mini-player / tabbar / 進度條 / 訂閱卡 + prefers-reduced-motion。

\`\`\`css
/* ── 手機殼 + 螢幕圓角 ── */
.device {
  position: relative;
  width: var(--screen-w); min-height: var(--screen-h);
  margin: 0 auto; overflow: hidden;
  border-radius: var(--screen-radius);
  background: var(--linen-base);
  box-shadow: 0 8px 40px rgba(0,0,0,.55);
  display: flex; flex-direction: column;
  font-family: var(--font-ui);
}

/* ── 亞麻織紋系統背景（雙向 repeating-linear-gradient）── */
.content {
  flex: 1; overflow-y: auto;
  padding: var(--content-pad);
  padding-bottom: calc(var(--miniplayer-h) + var(--tabbar-h) + var(--safe-bottom) + var(--sp-2));
  color: var(--ink);
  background:
    repeating-linear-gradient(45deg, var(--linen-dark) 0 1px, transparent 1px 3px),
    repeating-linear-gradient(-45deg, var(--linen-light) 0 1px, transparent 1px 3px),
    var(--linen-base);
}
.device[data-active="player"] .content {
  padding-bottom: calc(var(--tabbar-h) + var(--safe-bottom) + var(--sp-2));
}

/* ── 拉絲金屬列（status-bar / navbar / tab-bar 共用）── */
.statusbar, .navbar, .tabbar, .miniplayer.metal {
  background: linear-gradient(180deg, var(--metal-top) 0%, var(--metal-mid) 55%, var(--metal-bot) 100%);
  box-shadow: inset 0 1px 0 rgba(255,255,255,.6), var(--drop);
  color: var(--ink-on-metal);
}
.statusbar {
  height: var(--statusbar-h); flex: 0 0 auto;
  display: flex; align-items: center; justify-content: space-between;
  padding: 0 var(--sp-4); border-bottom: 1px solid var(--metal-line);
  font-family: var(--font-num); text-shadow: 0 1px 0 var(--letterpress-up);
}
.navbar {
  height: var(--navbar-h); flex: 0 0 auto;
  display: flex; align-items: center; gap: var(--sp-3);
  padding: 0 var(--sp-4); border-bottom: 1px solid var(--metal-line);
}
.navbar .title { font: 700 20px/1.25 var(--font-ui); letter-spacing: .2px; text-shadow: 0 1px 0 var(--letterpress-up); }
.navbar .brand { font: 700 26px/1.2 var(--font-ui); text-shadow: 0 1px 0 var(--letterpress-up); }

/* ── 區段標題 + 查看全部 ── */
.section-head {
  display: flex; align-items: baseline; justify-content: space-between;
  margin: var(--sp-5) 0 var(--sp-3);
}
.section-head h2 { font: 700 20px/1.25 var(--font-ui); color: var(--ink); text-shadow: 0 1px 0 var(--letterpress-up); }
.section-head a { font: 600 13px/1.2 var(--font-ui); color: var(--glass-blue-ink); cursor: pointer; }

/* ── 浮雕紙卡 + 縫線皮革卡 ── */
.card {
  background: linear-gradient(180deg, var(--card-top), var(--card-bot));
  border: 1px solid var(--card-edge); border-radius: var(--radius-card);
  box-shadow: var(--card-shadow); padding: var(--sp-3);
}
.card--stitched {
  background: linear-gradient(180deg, var(--leather-top), var(--leather));
  border: 2px dashed var(--leather-stitch); border-radius: var(--radius-card);
  color: var(--leather-ink); padding: var(--sp-3);
  text-shadow: 0 -1px 0 var(--letterpress-dn);
  box-shadow: var(--drop-lg), inset 0 1px 0 rgba(255,255,255,.12);
}

/* ── letterpress 內凹文字 ── */
.letterpress { color: var(--ink); text-shadow: 0 1px 0 var(--letterpress-up); }

/* ── 歌單卡牆（2 欄網格，封面為縮圖非滿版）── */
.grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: var(--sp-3); }
.playlist-card { cursor: pointer; transition: transform 140ms ease-out, filter 140ms ease-out; }
.playlist-card:hover { filter: brightness(1.03); }
.playlist-card:active { transform: translateY(1px); }
.playlist-card .name { margin-top: var(--sp-2); font: 600 15px/1.3 var(--font-ui);
  color: var(--ink); text-shadow: 0 1px 0 var(--letterpress-up);
  overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }

/* ── 方形封面 + 玻璃高光 + 縫線框（含 fallback 漸層）── */
.cover {
  aspect-ratio: 1; width: 100%; border-radius: var(--radius-cover);
  border: 1px solid var(--card-edge); box-shadow: var(--card-shadow);
  background: var(--gloss), linear-gradient(135deg, #6b88a8, #2c3e50);
  background-size: cover; position: relative; overflow: hidden;
}
.cover.thumb { width: 48px; height: 48px; flex: 0 0 48px; }
.cover.has-img {
  background-image: var(--gloss), url('assets/cover-1.webp'); background-size: cover;
}

/* ── 歌曲列 / 曲目列 ── */
.song-row {
  display: flex; align-items: center; gap: var(--sp-3);
  padding: var(--sp-2) var(--sp-3);
  background: linear-gradient(180deg, var(--row-top), var(--row-bot));
  border-bottom: 1px solid var(--card-edge);
  box-shadow: inset 0 1px 0 rgba(255,255,255,.45);
  cursor: pointer; transition: filter 140ms ease-out;
}
.song-row:hover { filter: brightness(1.03); }
.song-row:active { box-shadow: var(--press-in); }
.song-row .idx { width: 20px; text-align: center; font-family: var(--font-num); color: var(--ink-soft); }
.song-row .meta { flex: 1; min-width: 0; }
.song-row .title { font: 400 15px/1.4 var(--font-ui); color: var(--ink);
  overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.song-row .artist { font: 400 13px/1.35 var(--font-ui); color: var(--ink-soft);
  overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.song-row .dur { font-family: var(--font-num); font-size: 11px; color: var(--ink-soft); }

/* ── 浮雕膠囊分類 chip + active 凹槽 ── */
.chip {
  display: inline-block; padding: 6px 14px; margin: var(--sp-1);
  border-radius: var(--radius-pill);
  background: linear-gradient(180deg, #f3eee4, #d9d1c2);
  border: 1px solid var(--card-edge);
  box-shadow: var(--bevel-up), var(--drop);
  font: 600 13px/1.2 var(--font-ui); color: var(--ink);
  text-shadow: 0 1px 0 var(--letterpress-up); cursor: pointer;
}
.chip.active { color: var(--glass-blue-ink); box-shadow: var(--press-in); }

/* ── 玻璃光澤浮雕鈕（播放 / CTA / 播放暫停）── */
.btn-glass {
  background: linear-gradient(180deg, var(--glass-blue-top), var(--glass-blue-bot));
  border: 1px solid var(--glass-blue-edge); border-radius: var(--radius-btn);
  color: var(--on-glass); font: 600 15px/1.2 var(--font-ui);
  padding: 11px 18px; box-shadow: var(--bevel-up), var(--bevel-dn), var(--drop);
  position: relative; cursor: pointer; transition: transform 120ms ease-out;
}
.btn-glass::before {
  content: ""; position: absolute; inset: 1px 1px 50% 1px;
  border-radius: 8px 8px 50% 50% / 8px 8px 12px 12px;
  background: var(--gloss); pointer-events: none;
}
.btn-glass:active { box-shadow: var(--press-in); transform: translateY(1px); }
.btn-glass.round { width: 64px; height: 64px; border-radius: 50%; padding: 0; font-size: 24px; }

/* ── mini-player（疊在 tab-bar 上方，player 隱藏）── */
.miniplayer {
  flex: 0 0 auto; height: var(--miniplayer-h);
  display: flex; align-items: center; gap: var(--sp-3);
  padding: 0 var(--sp-3);
  background: linear-gradient(180deg, var(--leather-top), var(--leather));
  border-top: 1px solid #1c130c;
  box-shadow: 0 -2px 6px rgba(0,0,0,.5), inset 0 1px 0 rgba(255,255,255,.12);
  color: var(--leather-ink); cursor: pointer;
}
.miniplayer .cover.thumb { width: 40px; height: 40px; flex: 0 0 40px; }
.miniplayer .mp-meta { flex: 1; min-width: 0; }
.miniplayer .mp-title { font: 600 14px/1.2 var(--font-ui);
  overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.miniplayer .mp-artist { font: 400 12px/1.2 var(--font-ui); opacity: .8;
  overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.device[data-active="player"] .miniplayer { display: none; }

/* ── tab-bar + active 凹槽 ── */
.tabbar {
  flex: 0 0 auto; height: calc(var(--tabbar-h) + var(--safe-bottom));
  padding-bottom: var(--safe-bottom); border-top: 1px solid var(--metal-line); display: flex;
}
.tab {
  flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 2px;
  font: 400 11px/1.3 var(--font-ui); color: var(--ink-on-metal);
  text-shadow: 0 1px 0 var(--letterpress-up); cursor: pointer;
}
.tab.active { color: var(--glass-blue-ink); box-shadow: var(--press-in); border-radius: 6px; }

/* ── 進度條（金屬凹槽 + 玻璃滑塊）── */
.scrubber {
  height: 8px; border-radius: 999px;
  background: linear-gradient(180deg, #2a2a2a, #444);
  box-shadow: var(--press-in); position: relative;
}
.scrubber .fill { position: absolute; inset: 0 40% 0 0; border-radius: 999px;
  background: linear-gradient(180deg, var(--glass-blue-top), var(--glass-blue-bot)); }
.scrubber .knob {
  position: absolute; top: 50%; left: 60%; width: 18px; height: 18px; border-radius: 50%;
  transform: translate(-50%, -50%);
  background: radial-gradient(circle at 35% 30%, #fff, #cfd6dd 60%, #9aa2ab);
  box-shadow: 0 1px 2px rgba(0,0,0,.6); transition: transform 120ms ease-out;
}
.scrubber .knob:hover { transform: translate(-50%, -50%) scale(1.12); }

/* ── 訂閱方案卡（推薦高亮 + 徽章）── */
.plan { margin-bottom: var(--sp-3); }
.plan.recommended { border: 2px solid var(--glass-blue-edge); box-shadow: var(--drop-lg); }
.plan .badge { display: inline-block; padding: 2px 10px; border-radius: 999px;
  font: 600 11px/1.3 var(--font-ui); color: #fff;
  background: linear-gradient(180deg, var(--glass-blue-top), var(--glass-blue-bot)); }
.plan .badge.current { background: linear-gradient(180deg, var(--accent-green-top), var(--accent-green-bot)); }
.plan .price { font: 700 22px/1.2 var(--font-num); color: var(--ink); text-shadow: 0 1px 0 var(--letterpress-up); }

/* ── 歌詞同步高亮行 ── */
.lyric { color: var(--ink-soft); transition: color 160ms ease-out, opacity 160ms ease-out; opacity: .65; }
.lyric.active { color: var(--glass-blue-ink); opacity: 1; font-weight: 600; }

/* ── reduced motion ── */
@media (prefers-reduced-motion: reduce) {
  * { transition: none !important; animation: none !important; }
}
\`\`\`
`,"../../.claude/skills/app-material-you/SKILL.md":`---
name: app-material-you
description: Use when generating a single-file mobile App screen demo for the 迴聲 Resona 音樂串流 App in Material You / Material 3 style. Triggers on Material You、Material 3、M3、Android design、dynamic color、tonal palette、Roboto、FAB、藥丸導覽列、動態色彩、Android 質感.
user-invocable: true
---

# Material You — 迴聲 Resona

## Style Philosophy

Material You（Material Design 3）是 Google 自 Android 12 起的設計語言，核心是「**動態 tonal palette**」——從一顆 seed 色推導出整套 10/40/80/90 階色票，再以 surface / surface-tint 疊出柔和層階。它的視覺主張是「**親民、有秩序、產品級**」：超大圓角、filled tonal 按鈕、藥丸狀的 active indicator、漂浮的 FAB，搭配 Roboto / Noto 的工整字面，讓整個音樂串流 App 看起來像 Google 自家 app 的延伸。

本風格把這套語言搬進 390×844 的手機殼裡：狀態列極簡、底部導覽列用 M3 的藥丸 active pill，內容卡片一律 28px 大圓角，互動回饋靠 state layer（半透明同色覆蓋）而非整塊換色。整個 App 要有「真實產品」的內容密度——home 不是一張卡就結束，而是多區段堆疊；每個可點元件都有 hover / active 回饋；底部 tab-bar 上方常駐一條迷你播放列。

三個視覺辨識特徵：
1. **動態 tonal palette（紫＋青 seed）**：primary 紫色與 tertiary 青色各推 10/40/80/90 四階，surface 帶極淡 primary tint。卡片底用 \`--m3-surface-3\`，不可用純白。
2. **超大圓角 28px + filled tonal 按鈕 + FAB**：所有卡片 ≥ 28px 圓角；主要動作用 filled tonal（primary-90 底 + primary-10 字）；player 屏右下漂浮一顆 FAB。
3. **M3 底部導覽列藥丸 active indicator**：active tab 的 icon 外包一顆 64×32 的藥丸（secondary-container 色），文字在藥丸下方；state layer hover 8% / pressed 12%。

> **本版精修重點（務必落實）**：上一版 review 發現「首頁推薦卡的藝人副標在左緣被裁切」（夜行列車→飞行列車、何遠→可遠、Echo Lab→cho Lab）。根因是卡內文字缺左右 padding、或父層 \`overflow:hidden\` 把超出的字硬切掉、或誤用負 margin。**修法見「無跑版鐵則」第 6 條與 Reference Snippet 的 \`.media-card__sub\`**：卡內文字一律左右 padding ≥ 12px、禁負 margin、單行省略用 \`text-overflow: ellipsis\` 而非裸 \`overflow:hidden\` 硬切、副標永遠完整露出首字。

## Design Tokens (CSS variables)

\`\`\`css
:root {
  /* ── 手機殼專用 token ── */
  --screen-w: 390px;
  --screen-h: 844px;
  --statusbar-h: 44px;
  --tabbar-h: 80px;             /* M3 navigation bar 標準高 */
  --miniplayer-h: 64px;        /* 迷你播放列高度 */
  --safe-bottom: 24px;        /* 底部安全區 */
  --device-radius: 44px;      /* 圓角螢幕外框 */

  /* ── Primary tonal palette（seed: 紫 #6750A4）── */
  --m3-primary-10: #21005d;
  --m3-primary-40: #6750a4;
  --m3-primary-80: #d0bcff;
  --m3-primary-90: #eaddff;
  --m3-on-primary: #ffffff;

  /* ── Secondary（柔紫，用於 tab 藥丸 container）── */
  --m3-secondary-40: #625b71;
  --m3-secondary-90: #e8def8;   /* secondary-container */
  --m3-on-secondary-10: #1d192b;

  /* ── Tertiary tonal palette（seed: 青 #006a6a）── */
  --m3-tertiary-10: #002020;
  --m3-tertiary-40: #006a6a;
  --m3-tertiary-80: #4fd8d8;
  --m3-tertiary-90: #6ff7f7;

  /* ── Neutral surfaces（帶 primary tint）── */
  --m3-bg: #fef7ff;             /* surface，極淡紫 tint */
  --m3-surface-1: #f7f2fa;     /* elevation 1：+5% tint */
  --m3-surface-2: #f3edf7;     /* elevation 2 */
  --m3-surface-3: #eee8f4;     /* elevation 3：卡片 */
  --m3-surface-variant: #e7e0ec;
  --m3-on-surface: #1d1b20;
  --m3-on-surface-variant: #49454f;
  --m3-outline: #79747e;
  --m3-outline-variant: #cac4d0;

  /* ── 8pt 間距尺度（唯一來源，禁臨時湊數值）── */
  --sp-1: 4px;
  --sp-2: 8px;
  --sp-3: 12px;
  --sp-4: 16px;
  --sp-5: 20px;
  --sp-6: 24px;
  --sp-8: 32px;
  --screen-pad: 16px;          /* 各屏左右安全內距，文字不貼邊 */

  /* ── 圓角 ── */
  --r-xs: 8px;
  --r-sm: 12px;
  --r-md: 16px;
  --r-lg: 28px;                /* M3 large，卡片預設 */
  --r-xl: 28px;
  --r-pill: 999px;

  /* ── elevation（M3 tonal + shadow）── */
  --elev-1: 0 1px 2px rgba(0,0,0,.30), 0 1px 3px 1px rgba(0,0,0,.15);
  --elev-2: 0 1px 2px rgba(0,0,0,.30), 0 2px 6px 2px rgba(0,0,0,.15);
  --elev-3: 0 4px 8px 3px rgba(0,0,0,.15), 0 1px 3px rgba(0,0,0,.30);

  /* ── state layer 不透明度 ── */
  --state-hover: 0.08;
  --state-press: 0.12;

  /* ── 字體 ── */
  --font-display: 'Google Sans', 'Roboto', 'Noto Sans TC', 'PingFang TC', system-ui, sans-serif;
  --font-body: 'Roboto', 'Noto Sans TC', 'PingFang TC', system-ui, sans-serif;
}
\`\`\`

> 動態色彩說明：紫（primary）與青（tertiary）為兩顆 seed；卡片底色用 \`--m3-surface-3\`（surface + primary tint），不要用純白。所有強調色從 tonal 階梯取（10/40/80/90），不可臨時撿色。**所有間距一律取 \`--sp-*\` token**，不可寫 5px / 10px / 15px / 18px 這類非尺度數值。

## Typography Scale

M3 type scale，對應手機字級（px / line-height / weight / letter-spacing）：

| M3 角色 | size / line-height | weight | letter-spacing | 用途 |
| --- | --- | --- | --- | --- |
| display-small | 28px / 36px | 400 | 0 | player 大標題、home 品牌字 |
| headline-small | 22px / 28px | 400 | 0 | 各屏大標題（每日迴聲 / 搜尋 / 專輯名） |
| title-large | 17px / 22px | 500 | 0 | 卡片標題、歌單名、區段標題 |
| title-medium | 15px / 20px | 500 | 0.01em | list-item 主文、訂閱方案名 |
| body-large | 15px / 22px | 400 | 0 | 段落、歌名 |
| body-medium | 13px / 19px | 400 | 0.015em | 副標、藝人名、說明 |
| label-large | 13px / 18px | 500 | 0.01em | 按鈕文字 |
| label-medium | 11px / 16px | 500 | 0.05em | tab 文字、chip 標籤、徽章、查看全部 |

字距：label 類加 \`letter-spacing: 0.05em\`；標題類 0。一律 Roboto / Noto，不襯線。**副標（藝人名）固定 body-medium，color 用 \`--m3-on-surface-variant\`，且永遠完整顯示首字**（見無跑版鐵則）。

## Component & Layout

整體外框：固定 390×844 裝置殼（\`.device\`），圓角 \`--device-radius\`，\`overflow:hidden\`。垂直三段：

\`\`\`
┌─────────────────────────┐
│ status-bar（固定頂，9:41）│  ← 永遠在頂，高 --statusbar-h
├─────────────────────────┤
│                         │
│   .screens 可捲動內容區   │  ← 當前畫面，唯一捲動區
│   (home/search/detail/   │     底部 padding 避開 mini-player+tabbar
│    player/library/profile)│
│                         │
├─────────────────────────┤
│ mini-player（迷你播放列） │  ← 常駐於 tab-bar 上方，player 屏隱藏
├─────────────────────────┤
│ tab-bar（固定底，4 tab）  │  ← 永遠在底，高 --tabbar-h
└─────────────────────────┘
\`\`\`

\`.screens\` 底部 padding = \`calc(var(--tabbar-h) + var(--miniplayer-h) + var(--safe-bottom))\`，確保最後一塊內容不被迷你播放列與 tab-bar 遮住。每屏左右用 \`--screen-pad\`（16px）內距，文字不貼螢幕邊。

逐屏與元件規範：

### status-bar（固定，永不省略）
高 \`--statusbar-h\`，padding 左右 \`--sp-6\`。左側時間 \`9:41\`（title-medium 字重 500）；右側依序訊號條、Wi-Fi、電量符號（unicode 或 inline SVG）。底色 = \`--m3-bg\`，貼齊內容無分隔線。

### home（內容密度：3 區段以上）
1. **頂部 app-bar**：品牌「迴聲 Resona」（headline-small 或 display-small）＋右側 40px 圓形頭像（可點，state layer）。padding \`--sp-4\`。
2. **區段一「每日迴聲」**：個人化每日推薦 banner，做成一張 filled tonal 大卡（primary-90 底，圓角 --r-lg）。卡內：小標籤「每日迴聲」（label-medium）＋主打曲名（title-large）＋藝人副標（body-medium）＋一顆 filled tonal「立即播放」藥丸按鈕。**banner 內文字一律左右 padding ≥ \`--sp-4\`，副標首字完整。**
3. **區段二「為你精選歌單」**：區段標題列（title-large 標題 + 右側「查看全部」label-medium，可點）。下方 7 張歌單卡——可橫向捲動的 media-card 卡牆或 2 欄網格，每卡：封面（\`assets/cover-N.webp\`，N 循環 1–6，第 7 張回 cover-1）+ 歌單名（title-medium，單行 ellipsis）+ 藝人/描述副標（body-medium，single line，**左右 padding，首字完整**）。7 個歌單名一字不差列出。
4. **區段三「最近播放」或「熱門排行」**：區段標題 + 編號清單（list-item：leading 小縮圖 / 歌名 body-large / 藝人 body-medium / trailing 更多 icon）。點任一列 → 跳 player。
5. 在區段間或底部，露出至少一條核心功能介紹（如「無損音質串流」），維持 6 功能名出現。

home 上方一排可橫向捲動的 4 分類 chip（華語 / 獨立 / 電子 / 放鬆，outlined chip）置於區段二之上或 app-bar 下方皆可。

### search（搜尋框 + chip + 編號熱門 + 藝人）
1. **M3 search bar**：藥丸 pill、surface-variant 底、leading search icon、≥ 56px 高、placeholder「搜尋歌曲、藝人、歌單」。padding \`--sp-4\`。
2. **4 分類 chip**：華語 / 獨立 / 電子 / 放鬆，橫向捲動 outlined chip 列。
3. **「熱門歌曲」編號清單**：區段標題 + ≥ 5 列 song-row（編號 / 歌名 body-large / 藝人 body-medium / 時長），歌名取自 9 歌名，含時長（如 03:42）。點列 → player。
4. **「熱門藝人」**：區段標題 + 橫向圓形頭像列或 list，列出 5 藝人名。

### detail（大封面 + 完整 metadata + 9 曲目）
1. **頂部返回鍵**（leading arrow，可點回上一屏，state layer）。
2. **大封面**：主打專輯 \`島嶼晨光\` 正方封面（cover-1.webp，圓角 --r-lg）。
3. **metadata 區**：專輯名 \`島嶼晨光\`（headline-small）＋藝人 \`林知夏\`（body-medium）＋一行「2026 · 9 首 · 38 分鐘」（年份/曲目數/總時長，body-medium，on-surface-variant）。
4. **動作列**：filled tonal「播放全部」藥丸 + outlined「隨機播放」藥丸（皆 ▶ icon）。
5. **9 首曲目清單**：每列 \`.song-row\`——曲序（24px）/ 歌名（body-large，9 首歌名全列）/ 藝人（body-medium，可省略同藝人）/ 時長 + trailing 播放鍵或更多 icon。**全部 9 首歌名一字不差。** 點列 → player。

### player（大封面 + 完整控制 + 歌詞 + mini-player 隱藏）
1. **頂部列**：返回/收合鍵（向下箭頭，回上一屏）+ 居中「正在播放」+ trailing 更多 icon。
2. **滿版大封面**：cover-1.webp 正方 --r-lg。
3. **now-playing 資訊**：歌名〈\`晚風練習曲\`〉（display-small / headline）＋藝人 \`林知夏\`＋專輯 \`島嶼晨光\`（body-medium）。
4. **進度條**：M3 slider（細軌 + 圓 thumb），左 \`00:00\` 右 \`02:47\`（目前/總長）。
5. **控制列**：隨機 / 上一首 / **大圓播放暫停鈕（filled primary，▶/⏸ 兩態）** / 下一首 / 循環。
6. **底部列**：音量或「無損音質」徽章（tertiary-container 藥丸）+ 歌詞同步入口。
7. **歌詞同步**：一行逐字高亮歌詞（當前行用 primary 色加粗，其餘 on-surface-variant）。
8. **FAB**：右下漂浮一顆（加入歌單 / 更多），不被 tab-bar 遮。
9. **player 屏本身不顯示 mini-player**（它就是展開後的全屏）。

### library（分頁 + 歌單清單 + 下載 + 共享）
1. 標題「我的音樂庫」（headline-small）。
2. **分頁 tab**（藥丸 segmented 或 M3 tabs）：歌單 / 專輯 / 已下載。
3. **收藏歌單清單**：取自 7 歌單名，每列 leading cover 縮圖 + 歌單名（title-medium）+ 曲數副標（body-medium，如「12 首」，**左右 padding，首字完整**）。
4. **功能入口**：「離線下載」與「共享音樂庫」兩個 list-item（leading icon + 文字 + trailing arrow）。

### profile（使用者卡 + 偏好 + 三訂閱方案）
1. **使用者身份卡**：頭像 + 暱稱 + 等級/狀態副標，filled tonal 或 surface-3 卡。
2. **播放偏好**：list，含「跨裝置接續播放」開關（M3 switch 樣式，on 態 primary）、「無損音質串流」等。
3. **三訂閱方案卡**（堆疊）：免費（NT$ 0 ／月）/ Plus（NT$ 149 ／月）/ Family（NT$ 249 ／月）。Plus 為主推，用 filled tonal card（primary-90 底）+「推薦」徽章；免費標「目前方案」徽章；Family outlined card。三方案名與三價格必在同屏。

### mini-player（迷你播放列，常駐）
- 位於 tab-bar **上方**，高 \`--miniplayer-h\`，貼齊 tab-bar，背景 surface-2 + state layer。
- 內容：leading 40px 封面縮圖 + 歌名（title-medium，單行 ellipsis）+ 藝人（body-medium，單行 ellipsis，**左右 padding，首字完整**）+ trailing 播放暫停鍵（▶/⏸ 兩態）。
- **顯示於 home / search / library / profile**；點整條（封面/文字）展開到 player 畫面。
- **player 與 detail 屏隱藏 mini-player**（player 是展開態；detail 可顯示亦可隱藏，建議隱藏避免與曲目列衝突）。

### tab-bar（固定底，4 tab）
高 \`--tabbar-h\`。4 tab 等寬：首頁 / 搜尋 / 音樂庫 / 我的，各「icon + label-medium 文字」直排。active tab 的 icon 外包 64×32 secondary-container 藥丸（M3 active indicator），label 用 on-surface；非 active 用 on-surface-variant。預設「首頁」active。每 tab cursor:pointer + state layer。

互動回饋一律用 **state layer**：可點元件 \`:hover\` 疊 8% 同色半透層、\`:active\` 疊 12%，不可整塊換背景色。所有可點元件 \`cursor:pointer\`。

## Micro-interactions（微互動）

- **可點即有回饋**：每個可點元件（卡片 / chip / song-row / list-item / tab / mini-player / 按鈕 / FAB）皆 \`cursor:pointer\`，並有明確 \`:hover\`（state layer 8%）與 \`:active\`（state layer 12% 或輕微 \`transform: scale(.98)\`）。
- **播放鍵兩態**：所有播放鍵（player 主鈕、mini-player、song-row、banner）用 ▶ / ⏸ 兩態切換，按下有壓感。
- **active 視覺**：tab 有藥丸 indicator；library 分頁 tab、search chip 的選中態用 secondary-container 底 + on-surface 字。
- **transition 守則**：若用 transition / @keyframes，只動 \`transform\` / \`opacity\`，並一律附 \`@media (prefers-reduced-motion: reduce)\` 關閉。

## 無跑版鐵則（必須全部滿足）

1. **裝置容器鎖 390×844**：\`.device\` 固定 \`--screen-w\` × \`--screen-h\`，置中、\`--device-radius\` 圓角、\`overflow:hidden\`。
2. **status-bar 永遠在頂**、**tab-bar（含其上方 mini-player）永遠在底**，兩者不隨內容捲動。
3. **中間 \`.screens\` 為唯一可捲動區**（\`overflow-y:auto\`），當前畫面在此渲染；底部 padding 避開 mini-player + tab-bar，內容不被遮擋。
4. **每屏左右 \`--screen-pad\`（16px）內距**，padding 充足，文字不貼螢幕邊。
5. **文字不溢出 / 不被裁切**：標題與副標需單行省略時用 \`overflow:hidden; text-overflow:ellipsis; white-space:nowrap;\` 三件套，並設 \`min-width:0\`（grid/flex 子項溢出剋星）。
6. **【本次重點】卡片內文字（尤其藝人副標）首字不可被裁切**：
   - 卡內文字容器一律左右 padding ≥ \`--sp-3\`（12px）；
   - **禁任何負 margin**（\`margin-left:-…\` 是首字被吃掉的元兇）；
   - 不在文字父層裸用 \`overflow:hidden\` 把超出字硬切——要省略就用 \`text-overflow:ellipsis\`（省略號在**尾端**，首字永遠完整）；
   - flex/grid 文字子項加 \`min-width:0\`，否則內容把欄撐爆反被裁；
   - 封面圖若疊在文字上方需 \`overflow:hidden\`，**只裁圖、不裁文字**——圖與文字分開容器。
7. **mini-player 與 tab-bar 不重疊不互遮**：mini-player 在 tab-bar 之上獨立一條，兩者高度相加即 \`.screens\` 底 padding 的一部分。

## Do / Don't

| Do | Don't |
| --- | --- |
| 卡片圓角一律 ≥ 28px（--r-lg），按鈕用藥丸 999px | 用方角或 < 12px 小圓角 |
| 間距一律取 \`--sp-*\` 8pt 尺度 | 寫 5px / 10px / 15px / 18px 非尺度數值 |
| 強調色從 tonal 階梯（10/40/80/90）取 | 臨時撿不在階梯上的顏色 |
| 主動作用 filled tonal（primary-90 底 + primary-10 字） | 用純色高飽和 raised button |
| tab active 用 secondary-container 藥丸 indicator | 只變色不加藥丸，或用底線 |
| state layer：hover 8% / press 12% 同色覆蓋 | 整塊換背景色做 hover |
| surface 帶極淡 primary tint，用 --m3-surface-* | 用純白 #fff 當卡片底 |
| FAB 漂浮於內容右下、不被 tab-bar 遮 | FAB 貼齊邊緣或壓到 tab-bar |
| 卡內文字左右 padding、首字完整、尾端 ellipsis | 負 margin / 裸 overflow:hidden 切掉首字 |
| mini-player 常駐於 tab-bar 上方，player 屏隱藏 | 漏掉 mini-player，或 player 屏也放 |
| 播放鍵 ▶/⏸ 兩態 + cursor:pointer + active 壓感 | 靜態圖示、無 hover/active 回饋 |

## Mobile Chrome Spec

- 設計基準 **390×844**（iPhone 直式邏輯尺寸，套用於 Android 視覺）；外層 \`.device\` 鎖 \`--screen-w\` 寬、\`--screen-h\` 高、置中、\`--device-radius\` 圓角螢幕、\`overflow:hidden\`。
- **status-bar** 固定頂部，必含 \`9:41\` + 訊號 + 電量；高 \`--statusbar-h\`。
- **安全區**：\`.screens\` 底部預留 \`calc(var(--tabbar-h) + var(--miniplayer-h) + var(--safe-bottom))\`，可用 \`env(safe-area-inset-bottom)\` 兜底，內容不被 mini-player / tab-bar 遮。
- **mini-player + tab-bar** 固定於裝置容器底部（堆在 \`.device\` 內底部，非 \`.screens\` 內），mini-player 在上、tab-bar 在下。
- 中間為**單一可捲動內容區 \`.screens\`**，6 個內容屏（home→profile）擇一顯示或縱向排列於此區。
- 任何 transition / @keyframes 必附 \`@media (prefers-reduced-motion: reduce)\` 關閉；只動 transform / opacity。

## Required Output Contract

遵循 \`.claude/agents/style-page-builder.md\` 的「**App 風格額外要求**」：

- 8 個 \`<section data-screen="<id>">\`，固定 id 與順序：\`status-bar → home → search → detail → player → library → profile → tab-bar\`，各唯一出現一次。
- \`<body data-viewport="mobile">\` 必須存在。
- **status-bar 顯示 \`9:41\`**；**tab-bar 四 tab**（首頁 / 搜尋 / 音樂庫 / 我的）。
- **mini-player** 常駐於 tab-bar 上方，顯示於 home/search/library/profile，player 屏隱藏。
- 三層定價字串精確一致：\`NT$ 0\`、\`NT$ 149\`、\`NT$ 249\`（\`NT$\` 與數字間一個半形空格），後綴「／月」全形斜線；三方案名（免費 / Plus / Family）與三價格須在同屏（profile）。
- 品牌、6 功能名、7 歌單、9 歌名、5 藝人、4 分類 chip、正在播放組合等權威字串一字不差填入對應屏的**可見 body 文字**（不可只放 data-* / aria-*）。
- **可互動多畫面導覽**：tab 切換（4 tab）+ 卡片 → detail + 曲目/迷你播放列 → player + detail/player 返回鍵回上一屏。建議用 \`:target\` 或 radio/checkbox + label 純 CSS，或極小 inline JS（仍須 reduced-motion 安全）。
- 單檔 HTML ≤ 200 KB（不含 assets 圖）；無外部 CDN（src/href 不可 http:// 或 https:// 開頭）；圖片用相對路徑 \`assets/<filename>.webp\`。

## Required Images

使用真實風格的方形專輯封面圖，共 6 張 \`cover-1.webp\`..\`cover-6.webp\`（600×600，抽象無文字、適合音樂 App、各具不同氛圍），見 \`assets-manifest.json\`。

用法：
- **detail** 主打專輯 \`島嶼晨光\` 封面 → \`assets/cover-1.webp\`。
- **player** 大封面 → \`assets/cover-1.webp\`（與 detail 同專輯）。
- **mini-player** 縮圖 → \`assets/cover-1.webp\`。
- **home** 7 個歌單卡封面 → 依序 \`assets/cover-1.webp\` … \`cover-6.webp\`，第 7 張循環回 \`cover-1.webp\`。
- **search / library** 列表 leading 縮圖可取任一 cover。
- **Fallback**：若圖檔不存在，以 CSS tonal 漸層色塊替代（例如 \`linear-gradient(135deg, var(--m3-primary-80), var(--m3-tertiary-80))\`），維持版面不破。

## Reference Snippet

\`\`\`css
/* ── 手機殼：鎖 390×844、三段佈局 ── */
.device {
  width: var(--screen-w);
  height: var(--screen-h);
  margin: 0 auto;
  position: relative;
  background: var(--m3-bg);
  border-radius: var(--device-radius);
  overflow: hidden;
  box-shadow: var(--elev-3);
  font-family: var(--font-body);
  color: var(--m3-on-surface);
  display: flex;
  flex-direction: column;
}

/* ── 狀態列：永遠在頂 ── */
.statusbar {
  height: var(--statusbar-h);
  flex: 0 0 var(--statusbar-h);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 var(--sp-6);
  font: 500 15px/20px var(--font-display);
  background: var(--m3-bg);
}

/* ── 可捲動內容區：唯一捲動，底部避開 mini-player + tabbar ── */
.screens {
  flex: 1;
  overflow-y: auto;
  padding: 0 var(--screen-pad);
  padding-bottom: calc(var(--tabbar-h) + var(--miniplayer-h) + var(--safe-bottom));
}

/* ── 區段標題列 + 查看全部 ── */
.section-head {
  display: flex; align-items: baseline; justify-content: space-between;
  margin: var(--sp-6) 0 var(--sp-3);
}
.section-head h2 { font: 500 17px/22px var(--font-display); margin: 0; }
.section-head .more {
  font: 500 11px/16px var(--font-body); letter-spacing: .05em;
  color: var(--m3-primary-40); cursor: pointer;
}

/* ── M3 elevated 卡 + state layer ── */
.card {
  background: var(--m3-surface-3);
  border-radius: var(--r-lg);
  box-shadow: var(--elev-1);
  padding: var(--sp-4);
  position: relative;
  overflow: hidden;
  cursor: pointer;
}
.card::after {
  content: ""; position: absolute; inset: 0;
  background: var(--m3-primary-40); opacity: 0;
  transition: opacity .15s ease; pointer-events: none;
}
.card:hover::after  { opacity: var(--state-hover); }
.card:active::after { opacity: var(--state-press); }

/* ── 歌單 media-card：封面與文字分開容器，文字首字不被裁 ── */
.media-card { width: 150px; cursor: pointer; }
.media-card__cover {
  width: 100%; aspect-ratio: 1; border-radius: var(--r-lg);
  overflow: hidden;            /* 只裁圖 */
  background:
    image-set(url('assets/cover-1.webp')) center / cover no-repeat,
    linear-gradient(135deg, var(--m3-primary-80), var(--m3-tertiary-80));
}
.media-card__body {
  padding: var(--sp-2) var(--sp-3);   /* 文字左右 padding，禁負 margin */
}
.media-card__title {
  font: 500 15px/20px var(--font-body);
  margin: 0;
  min-width: 0;                       /* flex/grid 子項溢出剋星 */
  overflow: hidden; text-overflow: ellipsis; white-space: nowrap; /* 尾端省略 */
}
.media-card__sub {                    /* ← 藝人副標：本次修的跑版主角 */
  font: 400 13px/19px var(--font-body);
  color: var(--m3-on-surface-variant);
  margin: 2px 0 0;
  padding: 0;                         /* 不需負值；繼承父層左右 padding */
  min-width: 0;
  overflow: hidden; text-overflow: ellipsis; white-space: nowrap; /* 首字完整，省略在尾端 */
}

/* ── filled tonal 按鈕 ── */
.btn-tonal {
  display: inline-flex; align-items: center; gap: var(--sp-2);
  background: var(--m3-primary-90);
  color: var(--m3-primary-10);
  border: none;
  padding: 10px var(--sp-6);
  border-radius: var(--r-pill);
  font: 500 13px/18px var(--font-body); letter-spacing: .01em;
  cursor: pointer; position: relative; overflow: hidden;
}
.btn-tonal:active { transform: scale(.98); }

/* ── 分類 chip（outlined，可選中）── */
.chip {
  display: inline-flex; align-items: center; gap: 6px;
  padding: var(--sp-2) var(--sp-4);
  border-radius: var(--r-pill);
  border: 1px solid var(--m3-outline-variant);
  background: transparent;
  color: var(--m3-on-surface-variant);
  font: 500 13px/18px var(--font-body);
  cursor: pointer; white-space: nowrap;
}
.chip[aria-selected="true"] {
  background: var(--m3-secondary-90);
  color: var(--m3-on-secondary-10);
  border-color: transparent;
}

/* ── 曲目列 / list-item ── */
.song-row {
  display: grid;
  grid-template-columns: 24px 1fr auto;
  align-items: center;
  gap: var(--sp-3);
  padding: var(--sp-3) var(--sp-4);
  border-radius: var(--r-md);
  cursor: pointer;
}
.song-row:hover  { background: var(--m3-surface-2); }
.song-row:active { background: var(--m3-surface-3); }
.song-row .meta  { min-width: 0; }    /* 讓歌名能省略而非撐爆 */
.song-row .title { font: 400 15px/22px var(--font-body); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.song-row .sub   { font: 400 13px/19px var(--font-body); color: var(--m3-on-surface-variant); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.song-row .dur   { font: 400 13px/16px var(--font-body); color: var(--m3-on-surface-variant); }

/* ── player 大封面 + now-playing ── */
.cover-lg {
  width: 100%; aspect-ratio: 1; border-radius: var(--r-lg);
  overflow: hidden;
  background:
    image-set(url('assets/cover-1.webp')) center / cover no-repeat,
    linear-gradient(135deg, var(--m3-primary-80), var(--m3-tertiary-80));
}
.now-playing { text-align: center; padding: var(--sp-4); }
.now-playing .track  { font: 400 22px/28px var(--font-display); margin-top: var(--sp-4); }
.now-playing .artist { font: 400 13px/19px var(--font-body); color: var(--m3-on-surface-variant); }

/* ── 進度條（M3 slider）── */
.progress { display: grid; grid-template-columns: auto 1fr auto; gap: var(--sp-3); align-items: center; padding: 0 var(--sp-4); }
.progress .track-line { height: 4px; border-radius: var(--r-pill); background: var(--m3-surface-variant); position: relative; }
.progress .track-line > i { position: absolute; left: 0; top: 0; bottom: 0; width: 38%; background: var(--m3-primary-40); border-radius: var(--r-pill); }
.progress .time { font: 400 11px/16px var(--font-body); color: var(--m3-on-surface-variant); }

/* ── 播放鍵 ▶/⏸ 兩態 ── */
.play-btn { cursor: pointer; }
.play-btn .icon-pause { display: none; }
.play-btn[aria-pressed="true"] .icon-play  { display: none; }
.play-btn[aria-pressed="true"] .icon-pause { display: inline; }

/* ── 無損音質徽章 ── */
.badge-hires {
  display: inline-block; padding: var(--sp-1) var(--sp-3);
  border-radius: var(--r-pill);
  background: var(--m3-tertiary-90); color: var(--m3-tertiary-10);
  font: 500 11px/16px var(--font-body); letter-spacing: .05em;
}

/* ── FAB ── */
.fab {
  position: absolute; right: var(--sp-4);
  bottom: calc(var(--tabbar-h) + var(--sp-4));
  width: 56px; height: 56px; border-radius: var(--r-md);
  background: var(--m3-primary-90); color: var(--m3-primary-10);
  border: none; box-shadow: var(--elev-3);
  display: grid; place-items: center; cursor: pointer;
}

/* ── mini-player：常駐於 tab-bar 上方，文字首字不裁 ── */
.miniplayer {
  height: var(--miniplayer-h);
  flex: 0 0 var(--miniplayer-h);
  display: grid; grid-template-columns: 40px 1fr 40px;
  align-items: center; gap: var(--sp-3);
  padding: 0 var(--sp-4);
  background: var(--m3-surface-2);
  cursor: pointer;
  border-top: 1px solid var(--m3-outline-variant);
}
.miniplayer__cover { width: 40px; height: 40px; border-radius: var(--r-sm); overflow: hidden; background: linear-gradient(135deg, var(--m3-primary-80), var(--m3-tertiary-80)); }
.miniplayer__meta  { min-width: 0; }
.miniplayer__title { font: 500 13px/18px var(--font-body); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.miniplayer__sub   { font: 400 11px/16px var(--font-body); color: var(--m3-on-surface-variant); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }

/* ── M3 底部導覽列 + 藥丸 active indicator ── */
.tabbar {
  height: var(--tabbar-h);
  flex: 0 0 var(--tabbar-h);
  background: var(--m3-surface-2);
  display: flex; align-items: flex-start;
  padding-top: var(--sp-3);
}
.tab {
  flex: 1; display: flex; flex-direction: column;
  align-items: center; gap: var(--sp-1);
  color: var(--m3-on-surface-variant);
  font: 500 11px/16px var(--font-body); letter-spacing: .05em;
  cursor: pointer;
}
.tab .pill {
  width: 64px; height: 32px; border-radius: var(--r-pill);
  display: grid; place-items: center; background: transparent;
  transition: background .15s ease;
}
.tab:hover .pill { background: rgba(103,80,164,.08); }
.tab[aria-current="page"] { color: var(--m3-on-surface); }
.tab[aria-current="page"] .pill { background: var(--m3-secondary-90); }

/* ── 訂閱方案卡 ── */
.plan { border-radius: var(--r-lg); padding: var(--sp-5); margin-bottom: var(--sp-3); position: relative; }
.plan--free   { background: var(--m3-surface-3); }
.plan--plus   { background: var(--m3-primary-90); color: var(--m3-primary-10); }  /* 主推 filled tonal */
.plan--family { background: transparent; border: 1px solid var(--m3-outline-variant); }
.plan__name  { font: 500 17px/22px var(--font-display); margin: 0; }
.plan__price { font: 400 22px/28px var(--font-display); margin: var(--sp-1) 0 0; }
.plan__tag   { position: absolute; top: var(--sp-4); right: var(--sp-4); font: 500 11px/16px var(--font-body); letter-spacing: .05em; padding: var(--sp-1) var(--sp-3); border-radius: var(--r-pill); background: var(--m3-secondary-90); color: var(--m3-on-secondary-10); }

/* ── reduced motion ── */
@media (prefers-reduced-motion: reduce) {
  * { animation: none !important; transition: none !important; }
}
\`\`\`
`,"../../.claude/skills/app-memphis/SKILL.md":`---
name: app-memphis
description: Use when generating a single-file mobile App screen demo for the 迴聲 Resona 音樂串流 App in Memphis style. Triggers on Memphis、孟菲斯、Memphis Group、後現代設計、postmodern、撞色、波浪線、鋸齒 zigzag、terrazzo 噴點、彩屑點點、散落圓點、傾斜貼紙、80s MTV、Ettore Sottsass、奶油白撞色。
user-invocable: true
---

# 孟菲斯 — 迴聲 Resona

## Style Philosophy

孟菲斯（Memphis）源自 1980 年代義大利 Memphis Group 與後現代設計運動：把現代主義「少即是多」的克制徹底反過來——**多即是多、亂中有序、刻意不協調的協調**。整個 App 像一張貼滿貼紙的派對海報：奶油白底（#fdf6e9）上，熱粉、亮青、檸檬黃、薄荷、葡萄紫的平塗色塊直接相撞，全部用墨黑粗描邊框住；波浪線、鋸齒、棋盤、散落圓點、三角碎屑、terrazzo 噴點這些「圖樣母題」鋪在背景與卡片上；每張卡片、每個 chip 都像貼紙一樣輕微傾斜（rotate ±2–4deg），元素疊放像拼貼。氛圍是 80s MTV、後現代、派對、俏皮、歡樂。

用在 迴聲 Resona 音樂串流 App，這風格傳達「玩味、躍動、年輕、不正經的歡樂」：專輯與歌單封面是一塊塊撞色幾何拼貼（不同母題：波浪/圓點/三角），播放鍵是一顆粗黑邊的撞色大圓，tab-bar 是彩色塊拼成的方格——整個 App 像一場視覺派對。

本次精修的三條鐵律：

1. **母題圖樣 + 撞色 + 黑描邊，三者缺一不可**：Memphis 的辨識度不靠單一顏色，而靠「波浪/鋸齒/圓點/terrazzo 母題鋪面 × 高飽和撞色平塗 × 2–3px 墨黑描邊把每塊色框住」。任何主要色塊都該有黑邊；背景與封面都該鋪至少一種 CSS 母題圖樣。光換色、沒母題、沒黑邊 = 失敗。
2. **刻意傾斜與拼貼，但不犧牲可讀與不跑版**：卡片/chip/裝飾形狀輕微 rotate(±2–4deg) 製造「貼上去」的隨意感；散落的 zigzag、波浪、彩色圓點、小三角點綴每屏角落。但**文字本體不傾斜、行高足、留白夠**；裝飾用 \`pointer-events:none\` 不擋點擊；外框仍鎖 390×844 不跑版。亂是視覺的，結構是嚴謹的。
3. **撞色僅作色塊與大字，正文一律墨黑 on 淺色達 AA**：熱粉/亮青/檸檬黃/葡萄紫飽和度高，當小字會讀不清。**主文字一律墨黑 #1a1a1a（on 奶油白 #fdf6e9 對比 14:1）**；亮色只用於大色塊、徽章、≥20px 的大標題裝飾字（且需自行確認該色 on 其背景 ≥ AA）。可讀性不可向花俏妥協。

三個視覺辨識特徵（signature，必做、要看得出是 Memphis 不是別的）：

1. **撞色幾何拼貼封面（純 CSS 母題）**：每個專輯/歌單/頭像封面 = 一塊奶油底 + 黑邊 + 內部用 \`conic/linear/radial-gradient\` 拼出的撞色幾何（半圓波浪 / 散落圓點 / 三角斜切 / terrazzo 噴點），不同封面用不同母題與配色區分。**絕無點陣圖**。
2. **散落裝飾碎形點綴每屏角落**：每屏角落以絕對定位（\`pointer-events:none\`）撒幾個 Memphis 小元件——一段 zigzag 折線、一條波浪線、3–5 顆彩色圓點、一個傾斜小三角。它們是「貼紙」，輕微傾斜、不對齊網格、不擋互動。
3. **傾斜彩色貼紙 chip + 粗黑邊撞色播放大圓 + 方塊黑邊 tab-bar**：chip 是傾斜（rotate ±3deg）的撞色標籤貼紙（黑邊 + 撞色底 + 墨黑字）；播放鍵是粗黑邊（3px）的撞色大圓 + 黑色 ▶ 字符；tab-bar 是四格彩色塊拼成、塊間黑邊分隔，active tab 換成亮色塊 + 微微頂起。

**與 neobrutalism 嚴格區別**：neobrutalism = 邊框 + 硬位移陰影（hard offset shadow）+ 少色克制、嚴肅對齊；Memphis = **多色母題圖樣 + 傾斜拼貼 + 散落裝飾碎形**，更花、更俏皮、更歡樂，陰影是輔助不是主角，網格刻意被打破。若做出來像 Gumroad 那種「白底黑框幾色硬陰影」就是錯方向。

---

## Design Tokens (CSS variables)

\`\`\`css
:root {
  /* ── 手機殼尺寸（必含、鎖死，無跑版的根本） ── */
  --screen-w: 390px;
  --screen-h: 844px;
  --statusbar-h: 44px;
  --tabbar-h: 64px;             /* tab-bar 本體（方塊較高，含黑邊） */
  --miniplayer-h: 60px;         /* 迷你播放列高度 */
  --safe-bottom: 34px;          /* iPhone home indicator 安全區 */
  --content-pad: 18px;
  --device-radius: 44px;

  /* ── 8pt 間距尺度（所有 margin/padding/gap 只能取這些值） ── */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;

  /* ── 色彩：奶油白底 + Memphis 撞色盤 ── */
  --cream: #fdf6e9;            /* 奶油白底（全 App 主背景） */
  --cream-2: #fbedd3;          /* 次底色（卡片內襯、區段分隔） */
  --ink: #1a1a1a;             /* 墨黑（描邊 + 所有正文，on cream 對比 ~14:1 AA） */
  --pink: #ff4d8d;            /* 熱粉 */
  --cyan: #19c3d6;            /* 亮青 */
  --yellow: #ffd23f;          /* 檸檬黃 */
  --mint: #4fd6a3;            /* 薄荷 */
  --grape: #7b5cff;           /* 葡萄紫 */

  /* ── 文字（正文一律墨黑 on 淺色達 AA；亮色僅作大字 / 色塊） ── */
  --text-1: #1a1a1a;          /* 主文字（墨黑 on cream ~14:1） */
  --text-2: #4a4338;          /* 次文字（暖灰墨 on cream ~7:1 AA） */
  --text-3: #6f6657;          /* 弱文字（≥4.5:1 on cream，僅 ≥13px） */
  --text-on-pink: #1a1a1a;    /* 熱粉色塊上：墨黑（#1a1a1a on #ff4d8d ~5.3:1 AA） */
  --text-on-cyan: #1a1a1a;    /* 亮青色塊上：墨黑（on #19c3d6 ~6.5:1 AA） */
  --text-on-yellow: #1a1a1a;  /* 檸檬黃色塊上：墨黑（on #ffd23f ~13:1 AAA） */
  --text-on-mint: #1a1a1a;    /* 薄荷色塊上：墨黑（on #4fd6a3 ~7.8:1 AA） */
  --text-on-grape: #fdf6e9;   /* 葡萄紫色塊上：奶油白（#fdf6e9 on #7b5cff ~4.6:1 AA） */

  /* ── 描邊（Memphis 靈魂：墨黑粗描邊） ── */
  --stroke: 3px;              /* 主描邊（卡片 / 播放鍵 / 大色塊外框） */
  --stroke-2: 2px;            /* 次描邊（chip / 小封面 / 列項） */
  --stroke-hair: 1.5px;       /* 細描邊（內分隔線、母題線） */
  --border-ink: var(--stroke) solid var(--ink);
  --border-ink-2: var(--stroke-2) solid var(--ink);

  /* ── 陰影（Memphis 的影是輔助、軟短，不是 neobrutalism 的硬位移主角） ── */
  --shadow-soft: 0 4px 0 rgba(26, 26, 26, 0.12);     /* 卡片微落地（短、軟、墨色） */
  --shadow-pop: 3px 4px 0 var(--ink);                /* 互動元素點綴用硬影（小幅、僅按鈕/chip 強調） */
  --shadow-press: 1px 1px 0 var(--ink);              /* 按下後收影 */

  /* ── 圓角（Memphis 圓角混用：色塊偏方、貼紙偏圓，製造節奏） ── */
  --radius-card: 18px;
  --radius-card-sm: 12px;
  --radius-cover: 14px;
  --radius-cover-sm: 10px;
  --radius-chip: 999px;        /* chip 用全圓膠囊 */
  --radius-blob: 50% 50% 48% 52% / 52% 48% 52% 48%;  /* 有機 blob 形（頭像/裝飾） */

  /* ── 傾斜角（貼紙感；裝飾與部分卡片用，文字本體不轉） ── */
  --tilt-a: -3deg;
  --tilt-b: 2.5deg;
  --tilt-c: -2deg;
  --tilt-d: 4deg;

  /* ── 字體（粗體大寫標題 + 字級對比大製造躍動） ── */
  --font: 'PingFang TC', 'Noto Sans TC', system-ui, -apple-system, 'Helvetica Neue', sans-serif;
  --font-display: 'Arial Black', 'PingFang TC', system-ui, sans-serif;  /* 西文大標更粗黑 */

  /* ── 動效 ── */
  --ease: cubic-bezier(0.34, 1.56, 0.64, 1);   /* 帶回彈，俏皮 */
  --ease-soft: cubic-bezier(0.4, 0, 0.2, 1);
  --dur-fast: 120ms;
  --dur: 220ms;
}
\`\`\`

---

## Typography Scale

| 級距 | 大小 / 行高 / 字重 / 字距 | 顏色 | 用途 |
| --- | --- | --- | --- |
| caption | 11px / 1.4 / 700 / +0.4px / 大寫 | \`--text-2\` | tab 標籤、播放次數、徽章副字、序號 |
| label | 13px / 1.45 / 600 / +0.2px | \`--text-2\` | chip 文字、卡片副標、時長、藝人名 |
| body | 15px / 1.55 / 500 / 0 | \`--text-1\` | 段落、方案權益、說明 |
| row-title | 17px / 1.35 / 800 / 0 | \`--text-1\` | 歌名、歌單卡標題、列項主文字、迷你播放列歌名 |
| section | 23px / 1.2 / 900 / -0.3px / 大寫 | \`--text-1\` | 各屏區塊標題（如「每日迴聲」） |
| display | 34px / 1.05 / 900 / -0.8px / 大寫 | \`--text-1\` | home 品牌大標、player 曲名 |

- 標題級（section / display）用 \`--font-display\`、\`font-weight:900\`、\`text-transform:uppercase\`（中文不影響、英文/數字會變大寫）製造「粗體大寫標題」的躍動感。
- **字級對比要大**：display 34px 與 body 15px 並置，刻意拉開層級反差是 Memphis 的活潑來源；可在同一標題混兩種字重（如品牌「迴聲」900 + 「Resona」700 斜放）。
- 數字（時間 9:41、價格、時長、進度、序號）一律 \`font-variant-numeric: tabular-nums\` 對齊。
- **正文一律墨黑 \`--text-1\`**；亮色不用於 <20px 的文字。弱文字 \`--text-3\` 僅用於 ≥13px 且非關鍵的副字。
- 標題與正文間固定 \`--space-3\` 縱距；區段之間固定 \`--space-6\`。標題本體不傾斜（裝飾性大字若要傾斜，需確保仍可讀且不溢出）。

---

## Component & Layout

整體結構：最外層 \`.device\`（390×844 手機殼，奶油白底 \`--cream\`，\`overflow:hidden\`、\`border-radius:--device-radius\`、外框 \`--border-ink\`）→ 底層 \`.deco-bg\`（絕對定位鋪滿、\`z-index:0\`、\`pointer-events:none\`，放滿屏淡 Memphis 母題圖樣＝散落圓點 + 細波浪）→ \`.statusbar\`（固定頂、\`z-index:5\`）→ \`.viewport\`（中間可捲動畫面容器，\`z-index:1\`，依序堆 home/search/detail/player/library/profile 六個 \`data-screen\`，每次只顯示一個；各屏角落另撒 \`.deco-corner\` 裝飾碎形）→ \`.miniplayer\`（貼在 tab-bar 上方的常駐迷你播放列、\`z-index:4\`）→ \`.tabbar\`（固定底、\`z-index:5\`）。

8 個 \`<section data-screen>\` 順序固定且各恰一次：\`status-bar\` → \`home\` → \`search\` → \`detail\` → \`player\` → \`library\` → \`profile\` → \`tab-bar\`。

### 跨畫面導覽模型（無跑版的骨架，對齊契約 B2）

- \`<body data-viewport="mobile">\` 必須在。基礎規則 \`.screen { display:none }\`，**只有** \`.screen.is-active { display:flex }\`（縱向 flex）。**嚴禁**任何「畫面專屬 class」無條件設 \`display\`（會造成永久疊層 bug）；畫面專屬樣式只設 padding/排版。**預設 \`home\` 為 \`is-active\`**，JS 失效時 home 仍完整可讀。
- 用一個簡單的 class 切換 + \`data-go\` 委派：可導覽元素加 \`data-go="<target>"\`（歌單/專輯卡 \`data-go="detail"\`、曲目列/迷你播放列 \`data-go="player"\`、返回鍵 \`data-go="back"\`），JS 以事件委派切換 active screen 並同步 tab-bar active 態。
- 導覽行為全部接好：tab → 切 home/search/library/profile；home 歌單卡 / library 收藏列 / detail 任一曲目列 → 開 detail；迷你播放列 / detail 播放鍵 / 任一曲目播放鍵 / search 熱門歌曲列 → 開 player；detail / player 左上返回鍵 → 回上一畫面。**所有「看起來可點的都要能點」**：tab / 卡片 / 歌曲列 / chip / 按鈕 / 播放控制都要有真實 click handler、\`cursor:pointer\`、明確 \`:hover\` / \`:active\` 回饋。
- **裝置容器三段式鎖定**：status-bar 永遠在頂、tab-bar（含其上方 miniplayer）永遠在底、中間 \`.viewport\` 為當前畫面的唯一可捲動區。\`.viewport\` 高度 = \`calc(--screen-h - --statusbar-h - --tabbar-h - --safe-bottom)\`，每個 \`.screen\` 內部各自 \`overflow-y:auto\`，底部 padding 預留迷你播放列高度，內容絕不被遮擋、不溢出、不被裁切。

### status-bar（\`data-screen="status-bar"\`）

- 高 \`--statusbar-h\`，奶油白底，底緣一條 \`--stroke-2\` 墨黑線收住（像貼紙頂邊）。
- 左側時間 **9:41**（tabular-nums、900 字重），右側並排訊號格 + Wi-Fi + 電量符號（純 CSS / unicode 繪製，不用圖檔），符號用墨黑。
- 固定於裝置頂、不隨內容捲動、永遠在最上層。

### home（\`data-screen="home"\`）

至少三區段，每區段有 section 標題列（左大寫粗黑標題 + 右「查看全部」傾斜小貼紙連結，cursor:pointer + hover）：

1. **頂部問候列**：左側品牌大標「**迴聲 Resona**」（display，「迴聲」墨黑 900 + 「Resona」可微傾上色）+ slogan「讓每首歌，回到你身上」；右側 blob 形漸層頭像（\`--radius-blob\` + 黑邊）。問候列下方撒一段 zigzag 折線裝飾。
2. **每日迴聲（個人化每日推薦 banner）**：一張橫幅撞色強調卡（葡萄紫或熱粉平塗 + 黑邊 + 微傾 \`--tilt-c\`），左側撞色幾何封面（波浪母題）+ 「每日迴聲」標題 + 個人化文案 + 粗黑邊撞色大播放鍵（▶）。露出「**無損音質串流**」傾斜徽章貼紙。
3. **為你精選歌單**：section 標題「為你精選歌單」+「查看全部」。**7 個歌單卡**兩欄網格（浪潮回聲 / 深夜公路 / 島嶼晨光 / 雨後散步 / 城市心跳 / 山海之間 / 失重時刻），每卡 = 一塊不同母題 + 不同撞色配色的 \`.cover\`（純 CSS 幾何拼貼）+ 黑邊 + 墨黑標題 + 曲數副字，卡片交錯微傾（奇數 \`--tilt-a\`、偶數 \`--tilt-b\`）製造拼貼節奏。
4. **熱門排行**：section 標題「熱門排行」+「查看全部」，編號清單（1–5），每列 = 大寫粗黑排名數字（撞色描邊圓底）+ 小幾何封面 + 歌名 + 藝人 + 時長 + 播放鍵。
5. 4 分類 chip 橫排（華語 / 獨立 / 電子 / 放鬆）置於問候列下方，傾斜撞色貼紙 chip（四種不同撞色底 + 黑邊 + 墨黑字），首個 active（換亮色 + 微頂起）。
6. 露出其他核心功能名（如「個人化每日推薦」「歌詞同步」）於 banner 文案或功能小貼紙。

### search（\`data-screen="search"\`）

- 頂部搜尋框（奶油白 input 外觀 + 粗黑邊 + 放大鏡 + placeholder「搜尋歌曲、藝人、歌單」），右上撒一個傾斜小三角裝飾。
- 下方 4 分類 chip（華語 / 獨立 / 電子 / 放鬆）傾斜撞色貼紙。
- **熱門歌曲**：section 標題，**編號清單**（含時長）——混排歌名與藝人：海平面樂團〈藍色信號〉、林知夏〈晚風練習曲〉、夜行列車〈霓虹巷弄〉、Echo Lab〈靜電〉、何遠〈無人車站〉……每列 = 撞色描邊序號 + 小幾何封面 + 歌名 + 藝人 + 時長 + 播放鍵（點擊 → player）。
- **熱門藝人**：section 標題 + 橫向膠囊（blob 漸層頭像 + 黑邊 + 藝人名）：海平面樂團 / 林知夏 / 夜行列車 / Echo Lab / 何遠，膠囊交錯微傾。

### detail（\`data-screen="detail"\`）

- 左上**返回鍵**（‹，奶油白圓 + 粗黑邊 + 墨黑字，cursor:pointer + hover/active，\`data-go="back"\`）。
- **大封面**：頂部大張撞色幾何拼貼封面（純 CSS，島嶼晨光配色：薄荷 + 亮青 + 檸檬黃，波浪 + 散落圓點母題 + 黑邊），輕微傾斜並露出底層裝飾。
- 資訊區：專輯名 **島嶼晨光** / 藝人 **林知夏** / 年份 **2026** / **9 首** / 總時長 **34:12**。
- 動作列：**播放全部**（撞色大鍵 ▶ + 黑邊 + 墨黑/撞色字）+ **隨機播放**（奶油白次鍵 + 黑邊）。
- **完整 9 曲目清單**（藍色信號 / 霓虹巷弄 / 候鳥地圖 / 靜電 / 晚風練習曲 / 無人車站 / 潮間帶 / 第七個夏天 / 月台九又四分之三），每列 \`.song-row\`：撞色序號 + 歌名 + 藝人（林知夏）+ 時長 + 行尾播放鍵 / 選單（⋯），列間以細虛線分隔。點任一曲 → player（\`data-go="player"\`）。

### player（\`data-screen="player"\`）

**覆蓋全屏的 now-playing 面板，進入時隱藏底部 dock（tab-bar + mini-player）**。整個 player 用 \`height:100%; display:flex; flex-direction:column\`，讓進度條、控制列、徽章永遠固定在 844 內可見、不靠捲動、不被遮擋：

- 左上**返回鍵**（⌄ 收合，奶油白圓 + 黑邊，\`data-go="back"\`）。
- **大封面**：置中大尺寸撞色幾何拼貼（\`flex:1; min-height:0\` 可壓縮，純 CSS conic/radial 撞色 + 母題 + 黑邊，色相呼應島嶼晨光），可包一條波浪或圓點裝飾。封面是唯一可壓縮區，其餘列固定。
- 正在播放：**林知夏 —〈晚風練習曲〉**（display 級曲名），副字專輯「島嶼晨光」/ 02:47。
- **歌詞同步**：一行逐字高亮示意（高亮字撞色描底貼紙效果，其餘 \`--text-3\`）。
- 進度條 \`.progress\`（奶油白軌 + 黑邊 + 撞色 fill），左 **01:12** / 右 **02:47**（tabular-nums）。
- 控制列：隨機（⤮）/ 上一首（⏮）/ **播放暫停大圓鍵（▶ / ⏸ 兩態，粗黑邊撞色大圓）** / 下一首（⏭）/ 循環（⟳）。隨機與循環 active 時換撞色。
- 底部：**Hi-Res 無損音質**傾斜徽章貼紙 + 音量滑桿（奶油白軌 + 黑邊 + 撞色把手）。**這四列（曲名/歌詞/進度/控制+徽章）全部固定可見，不滑動。**

### library（\`data-screen="library"\`）

- 「**我的音樂庫**」標題（section 大寫粗黑）。
- 分頁列（segmented 撞色方塊 + 黑邊）：**歌單 / 專輯 / 已下載**，首個 active（亮色塊 + 微頂起）。
- **收藏歌單清單**：每列 = 小幾何封面 + 標題（複用歌單名）+ 曲數副字 + 行尾箭頭，點擊 → detail（\`data-go="detail"\`），列交錯微傾。
- **離線下載**功能列（list-item + 已下載狀態傾斜徽章）。
- **共享音樂庫**功能列（list-item + 切換開關 toggle，toggle 軌與把手皆黑邊撞色）。

### profile（\`data-screen="profile"\`）

- **使用者卡**：blob 頭像 + 暱稱 + 會員狀態行（撞色強調卡 + 黑邊 + 微傾）。
- **播放偏好**列表：音質、等化器、**跨裝置接續播放**（toggle 開關 + 黑邊撞色，預設開）。
- **3 訂閱方案卡**（堆疊，各自不同撞色底 + 黑邊 + 交錯微傾）：
  - **免費** — \`NT$ 0 ／月\` — 標「目前方案」傾斜徽章。
  - **Plus** — \`NT$ 149 ／月\` — 標「推薦」，強調卡（最飽和撞色 + \`--stroke\` 粗邊 + \`--shadow-pop\` 硬影 + 角標貼紙）。
  - **Family** — \`NT$ 249 ／月\`。
  - 每卡含 2–3 條權益小字（涵蓋 6 功能名相關描述，如離線下載 / 共享音樂庫 / 跨裝置接續播放）。價格 tabular-nums、\`NT$\` 與數字間一個半形空格、後綴全形「／月」。

### mini-player（迷你播放列，常駐）

- 一條貼在 tab-bar **正上方**的撞色浮條（撞色平塗 + 黑邊 + 微傾 \`--tilt-c\`），高 \`--miniplayer-h\`。
- 內容：左小幾何封面 + 歌名「晚風練習曲」+ 藝人「林知夏」+ 右側**播放/暫停鍵（▶ / ⏸，黑邊圓鍵）**。文字用該撞色底對應的 AA 文字色。
- 顯示於 **home / search / library / profile**；**player 畫面隱藏**（\`.is-player .miniplayer { display:none }\`）。
- 整條 cursor:pointer（\`data-go="player"\`），點擊（播放鍵以外區域）展開到 player；點播放鍵切換 ▶/⏸ 兩態。
- 底部含一條極細進度線（奶油白軌 + 撞色 fill，與 player 同步示意）。

### tab-bar（\`data-screen="tab-bar"\`）

- 固定底部，**四格彩色塊拼成的方格**（每 tab 一塊撞色底 + 塊間 \`--stroke-2\` 黑邊分隔 + 整條頂緣 \`--stroke\` 黑邊），高 \`--tabbar-h\`，4 tab：**首頁 / 搜尋 / 音樂庫 / 我的**，各 = unicode/CSS icon + 大寫粗黑標籤。
- active tab 換成**亮色塊**（如檸檬黃）+ 微微頂起（\`transform: translateY(-2px)\`）+ 該 tab 文字加粗，視覺上像被「按亮」的派對燈。每 tab cursor:pointer + hover/active 回饋。
- 預留 \`--safe-bottom\` 安全區。tab-bar 與其上的 miniplayer 一起構成「永遠在底」的固定區。

### 封面繪製規範（重要）＝純 CSS 撞色幾何拼貼

**所有專輯 / 歌單 / 頭像 / 排名封面一律純 CSS**——用 \`linear-gradient\` / \`radial-gradient\` / \`conic-gradient\` 拼出 Memphis 母題並配不同撞色：
- **波浪母題**：用 \`radial-gradient\` 排成半圓鱗片，或 \`repeating-linear\` 斜紋。
- **散落圓點**：\`radial-gradient(circle, color 30%, transparent 31%)\` + \`background-size\` 製造圓點陣。
- **三角斜切**：\`linear-gradient(45deg, A 50%, B 50%)\` 拼對角撞色三角。
- **terrazzo 噴點**：多個小 \`radial-gradient\` 不規則散佈在底色上。
- **棋盤**：\`conic-gradient\` 或雙向 \`repeating-linear\`。
每個封面外加 \`--border-ink\` 黑邊。不同封面用不同母題 + 不同撞色組合區分。**不得引用任何 \`assets/*.webp\` 圖檔，不得出現指向圖檔的 \`<img>\`。**

### 散落裝飾碎形規範（signature 2）

每屏與背景以絕對定位（\`position:absolute\` + \`pointer-events:none\` + 低 z-index）撒 Memphis 碎形：
- **zigzag 折線**：\`linear-gradient\` 45/-45 拼接的鋸齒帶（見 Reference Snippet）。
- **波浪線**：\`radial-gradient\` 排半圓 + \`background-size\`。
- **彩色圓點群**：3–5 顆不同撞色小圓（黑邊或無邊）散落。
- **小三角**：\`clip-path: polygon(...)\` 或 CSS border 三角，傾斜。
裝飾須 \`pointer-events:none\` 不擋互動、不溢出裝置殼（\`overflow:hidden\` 由 \`.device\` 兜底）、reduced-motion 下保持靜態。

---

## Do / Don't

| Do | Don't |
| --- | --- |
| 每個主要色塊都用 \`--border-ink\`（2–3px 墨黑）框住 | 撞色平塗不描邊（失去 Memphis 框界感、糊在一起） |
| 背景與封面鋪 Memphis 母題（波浪/圓點/三角/terrazzo/棋盤）純 CSS | 純色背景、純色封面（變成普通 App 只是換色） |
| 卡片/chip/裝飾輕微 rotate(±2–4deg) 製造貼紙拼貼感 | 全部嚴格對齊網格、零傾斜（變嚴肅、不是 Memphis） |
| 每屏角落撒 zigzag / 波浪 / 圓點 / 小三角碎形，\`pointer-events:none\` | 沒有任何散落裝飾（少了招牌俏皮碎形） |
| 正文一律墨黑 \`--text-1\` on 奶油/淺色，撞色只作大字/色塊 | 用熱粉/亮青當小字正文（高飽和讀不清、破 AA） |
| 撞色直接相撞（粉旁邊放青、黃旁邊放紫）製造活潑反差 | 同色系漸層收斂（變柔和，失去撞色衝突的歡樂） |
| 標題大寫 900 字重、字級對比大（display 34 vs body 15） | 標題正文字級接近、字重平板（缺躍動感） |
| 播放鍵 = 粗黑邊撞色大圓 + ▶/⏸ 兩態；tab active 換亮色塊頂起 | 播放鍵單態無邊、tab active 無區別 |
| 陰影用軟短墨色點綴（輔助），互動偶用小幅硬影強調 | 全靠 neobrutalism 式大硬位移陰影（那是別的風格） |
| 間距只取 8pt 尺度（4/8/12/16/20/24/32） | 隨手寫 7px / 13px / 19px 破壞節奏 |
| 進度/曲長/價格/序號用 tabular-nums | 比例字寬數字導致跳動 |

---

## Motion Specification

App 頁預設靜態即可；本風格的「亂」是構成而非動畫。若加動效，限定 \`transform\` / \`opacity\` 並必附 \`prefers-reduced-motion\`：

- **microinteractions（俏皮回彈）**：
  - 可點元素 \`transition: transform var(--dur-fast) var(--ease);\`（\`--ease\` 帶 1.56 overshoot 回彈），\`:active { transform: scale(0.95) rotate(0deg); }\`（按下時順手「擺正」傾斜，鬆開回到原傾角，強化貼紙感）。
  - 卡片 \`:hover\` 微抬 + 強化硬影（\`transform: translateY(-2px)\`、\`box-shadow: var(--shadow-pop)\`）。
  - 播放鍵點擊在 ▶ / ⏸ 兩態間切換（JS 改 textContent + class），按下 \`scale(0.92)\` 回彈。
  - chip / tab / 分頁 active 切換用 background + transform 的 220ms 過渡（active 微頂起）。
- **可選裝飾動畫**：散落圓點 / 小三角可做極緩慢（20s+）的 \`transform: rotate\` 或 \`translate\` 漂浮（幅度 ≤ 4%），純裝飾；player 大封面母題可緩慢 \`rotate\` 的 conic-gradient。一律 \`prefers-reduced-motion\` 下停用。
- **進度條**：純 CSS 寬度示意即可（width 屬靜態示意，不放捲動熱路徑）。
- 只動 \`transform\` / \`opacity\`（按壓、卡片抬起、裝飾漂浮）。不使用任何外部動畫庫（禁 GSAP / Lottie / anime.js / framer-motion）。

## Accessibility (Reduced Motion)

\`\`\`css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation: none !important;
    transition: none !important;
    scroll-behavior: auto !important;
  }
}
\`\`\`

- 裝飾碎形漂浮、卡片抬起、按壓回彈、conic 封面旋轉在 reduced motion 下全部停用；所有母題圖樣與傾斜為靜態 CSS，靜止下仍完整呈現 Memphis 視覺。
- 內容（所有歌名/藝人/價格/功能名）在 JS 失效或 reduced motion 下仍完整可讀（home 預設可見）。
- **WCAG AA 底線**：所有正文墨黑 \`--text-1\` on 奶油白/淺色（≥7:1）；撞色色塊上文字一律用 token 標好的對應 AA 文字色（粉/青/薄荷上墨黑、紫上奶油白）；亮色字僅用於 ≥20px 大字且自驗對比。傾斜不可造成文字溢出或被裁切。

---

## Required Output Contract

遵循 \`.claude/agents/style-page-builder.md\` 的「**App 風格額外要求**」：

- **8 個 \`<section data-screen="<id>">\`**，固定 id 與順序：\`status-bar\` → \`home\` → \`search\` → \`detail\` → \`player\` → \`library\` → \`profile\` → \`tab-bar\`，各恰一次。常見漏洞：只寫 \`id=\` 漏寫 \`data-screen=\`，務必兩者都加。
- **\`<body data-viewport="mobile">\`** 必須存在（驗證辨識依據）。
- **status-bar 顯示 9:41**（tabular-nums，可見文字）。
- **tab-bar 四 tab**：可見文字「首頁 / 搜尋 / 音樂庫 / 我的」，active 態明確（亮色塊頂起）。
- **player 為覆蓋全屏 now-playing**：進入時隱藏 dock（tab-bar + mini-player）；\`height:100%; display:flex; flex-direction:column\`；封面 \`flex:1; min-height:0\`；進度/控制/徽章永遠固定在 844 內可見、不靠捲動、不被遮擋；返回時恢復 dock。
- **迷你播放列**常駐於 home/search/library/profile、player 畫面隱藏；點擊展開 player、播放鍵 ▶/⏸ 兩態。
- **三層訂閱方案精確字串**同屏出現於 profile：\`免費\` / \`NT$ 0 ／月\`、\`Plus\` / \`NT$ 149 ／月\`、\`Family\` / \`NT$ 249 ／月\`（\`NT$\` 與數字間一個半形空格、後綴全形「／月」），並標「推薦」與「目前方案」。
- **可互動多畫面導覽**：用 \`data-go\` 委派——tab 切換 + 卡片→detail + 曲目/迷你播放列→player + detail/player 返回鍵，全部接好；JS 失效時 home 預設可見。畫面切換遵守 \`.screen{display:none}\` / \`.screen.is-active{display:flex}\`，嚴禁畫面專屬 class 無條件設 display。
- **權威字串全在可見 body 文字**（不可只放 \`aria-label\` / \`data-*\`）：品牌「迴聲 / Resona」、6 核心功能（個人化每日推薦 / 無損音質串流 / 離線下載 / 歌詞同步 / 跨裝置接續播放 / 共享音樂庫）、7 歌單（浪潮回聲 / 深夜公路 / 島嶼晨光 / 雨後散步 / 城市心跳 / 山海之間 / 失重時刻）、9 歌名（藍色信號 / 霓虹巷弄 / 候鳥地圖 / 靜電 / 晚風練習曲 / 無人車站 / 潮間帶 / 第七個夏天 / 月台九又四分之三）、5 藝人（海平面樂團 / 林知夏 / 夜行列車 / Echo Lab / 何遠）、4 分類 chip（華語 / 獨立 / 電子 / 放鬆）、正在播放「林知夏 —〈晚風練習曲〉」。
- **無跑版**：裝置容器鎖 390×844、status-bar 永遠在頂、tab-bar（含 miniplayer）永遠在底、中間為當前畫面可捲動區、傾斜與裝飾不溢出、文字不被裁切、padding 充足。
- **單檔 HTML ≤ 200 KB**；**無外部 CDN**（\`<link>\` / \`<script>\` / \`<img>\` 的 src/href 不可 \`http://\` 或 \`https://\`）；繁體中文；CSS 變數驅動、不得用 Tailwind 等 framework CSS。inline \`<script>\` ≤ 8 KB。

## Required Images

**此風格不使用任何點陣圖。** \`assets-manifest.json\` 為 \`{ "style": "孟菲斯 Memphis", "images": [] }\`。所有封面、頭像、裝飾母題（波浪 / 鋸齒 / 散落圓點 / 三角碎屑 / terrazzo 噴點 / 棋盤）一律純 CSS（\`linear-gradient\` / \`radial-gradient\` / \`conic-gradient\` / \`clip-path\` / \`background-size\` 鋪面）繪製，**頁面不得引用任何圖檔**、不得出現指向 \`assets/\` 的 \`<img>\`。

---

## Reference Snippet

\`\`\`css
/* ── 手機殼（奶油白 + 粗黑外框） ── */
.device {
  position: relative;
  width: var(--screen-w);
  height: var(--screen-h);
  margin: 0 auto;
  overflow: hidden;
  border-radius: var(--device-radius);
  border: var(--border-ink);
  background: var(--cream);
  font-family: var(--font);
  color: var(--text-1);
  display: flex;
  flex-direction: column;
}

/* ── 滿屏淡 Memphis 母題背景（散落圓點 + 細波浪，z-index:0、不擋點） ── */
.deco-bg {
  position: absolute; inset: 0; z-index: 0; pointer-events: none;
  background:
    radial-gradient(circle at 12px 12px, rgba(123,92,255,0.10) 2.5px, transparent 3px) 0 0 / 36px 36px,
    radial-gradient(circle at 8px 8px, rgba(25,195,214,0.08) 2px, transparent 2.5px) 18px 18px / 44px 44px;
}

/* ── Memphis 母題 mixin（封面用：撞色 + 母題拼貼 + 黑邊） ── */
.cover {
  aspect-ratio: 1; border-radius: var(--radius-cover);
  border: var(--border-ink-2);
  background:
    /* 散落圓點母題 */
    radial-gradient(circle at 26% 30%, var(--yellow) 0 9px, transparent 10px),
    radial-gradient(circle at 74% 22%, var(--pink) 0 7px, transparent 8px),
    /* 三角斜切母題 */
    linear-gradient(135deg, var(--cyan) 0 50%, var(--mint) 50% 100%);
  box-shadow: var(--shadow-soft);
}
.cover.v2 {  /* 波浪母題變體（不同撞色） */
  background:
    radial-gradient(circle at 50% 120%, var(--grape) 0 40%, transparent 41%) 0 0 / 40px 40px,
    linear-gradient(0deg, var(--pink), var(--yellow));
}

/* ── 散落裝飾碎形：zigzag 鋸齒帶（45/-45 拼接） ── */
.deco-zigzag {
  position: absolute; pointer-events: none; z-index: 0;
  width: 80px; height: 14px; transform: rotate(var(--tilt-a));
  background:
    linear-gradient(135deg, var(--pink) 25%, transparent 25%) -10px 0,
    linear-gradient(225deg, var(--pink) 25%, transparent 25%) -10px 0;
  background-size: 14px 14px;
}
/* 彩色圓點群 + 小三角，傾斜散落（用 ::before/::after 補形） */
.deco-dots { position:absolute; pointer-events:none; z-index:0;
  width:60px; height:18px;
  background:
    radial-gradient(circle, var(--cyan) 4px, transparent 5px) 0 0/20px 18px repeat-x; }
.deco-tri { position:absolute; pointer-events:none; z-index:0;
  width:0; height:0; transform: rotate(var(--tilt-d));
  border-left:12px solid transparent; border-right:12px solid transparent;
  border-bottom:20px solid var(--grape); }

/* ── 通用 Memphis 卡（撞色 + 黑邊 + 微傾貼紙感） ── */
.card {
  background: var(--cream-2);
  border: var(--border-ink);
  border-radius: var(--radius-card);
  box-shadow: var(--shadow-soft);
  transition: transform var(--dur-fast) var(--ease), box-shadow var(--dur) var(--ease);
}
.card.tilt-a { transform: rotate(var(--tilt-a)); }
.card.tilt-b { transform: rotate(var(--tilt-b)); }
.card.is-tap { cursor: pointer; }
.card.is-tap:hover  { transform: translateY(-2px) rotate(0deg); box-shadow: var(--shadow-pop); }
.card.is-tap:active { transform: scale(0.95) rotate(0deg); box-shadow: var(--shadow-press); }

/* ── 傾斜彩色貼紙 chip（黑邊 + 撞色底 + 墨黑字） ── */
.chip {
  display:inline-block; padding: var(--space-2) var(--space-4);
  border-radius: var(--radius-chip); border: var(--border-ink-2);
  background: var(--cream); color: var(--text-1);
  font-size: 13px; font-weight: 700; letter-spacing: .2px;
  cursor: pointer; transform: rotate(var(--tilt-c));
  transition: transform var(--dur-fast) var(--ease), background var(--dur);
}
.chip:nth-child(2){ background: var(--cyan); }
.chip:nth-child(3){ background: var(--yellow); }
.chip:nth-child(4){ background: var(--mint); }
.chip:hover { transform: rotate(0deg) translateY(-1px); }
.chip[aria-selected="true"] {
  background: var(--pink); color: var(--text-on-pink);
  transform: rotate(0deg) translateY(-2px); box-shadow: var(--shadow-pop);
}

/* ── 粗黑邊撞色播放大圓 ── */
.play-btn {
  width: 64px; height: 64px; border-radius: 50%;
  background: var(--pink); color: var(--ink);
  border: var(--border-ink); cursor: pointer;
  display:grid; place-items:center; font-size: 24px;
  box-shadow: var(--shadow-pop);
  transition: transform var(--dur-fast) var(--ease);
}
.play-btn:active { transform: scale(0.92); box-shadow: var(--shadow-press); }

/* ── 歌曲列（虛線分隔 + 撞色序號） ── */
.song-row {
  display:flex; align-items:center; gap: var(--space-3);
  padding: var(--space-3) var(--space-2);
  border-bottom: var(--stroke-hair) dashed var(--ink);
  cursor:pointer; transition: background var(--dur);
}
.song-row:hover  { background: var(--cream-2); }
.song-row:active { background: rgba(26,26,26,0.06); }
.song-row .idx   { width:26px; height:26px; display:grid; place-items:center;
  border: var(--border-ink-2); border-radius:50%; background: var(--yellow);
  font-weight:900; font-variant-numeric: tabular-nums; }
.song-row .title { font-size:17px; font-weight:800; color:var(--text-1); }
.song-row .meta  { font-size:13px; color:var(--text-2); }
.song-row .dur   { margin-left:auto; font-size:13px; color:var(--text-2);
  font-variant-numeric: tabular-nums; }

/* ── 中間畫面容器：三段式中段，每屏自己捲動 ── */
.viewport { position: relative; z-index: 1; flex: 1 1 auto; min-height: 0; }
.screen { display: none; height: 100%; overflow-y: auto;
  padding: var(--space-4) var(--content-pad)
           calc(var(--miniplayer-h) + var(--space-4)); }
.screen.is-active { display: flex; flex-direction: column; }
.screen.screen-player { padding-bottom: var(--space-4); }

/* ── player：覆蓋全屏，封面可壓縮、控制永遠可見 ── */
.now-playing { height:100%; display:flex; flex-direction:column; gap: var(--space-4); }
.now-playing .art {
  flex: 1 1 auto; min-height: 0; border-radius: 18px;
  border: var(--border-ink);
  background:
    conic-gradient(from 30deg, var(--mint), var(--cyan), var(--yellow), var(--pink), var(--mint)),
    radial-gradient(circle at 30% 24%, var(--cream) 8px, transparent 9px);
}
.progress { height: 10px; border-radius:999px; background: var(--cream);
  border: var(--border-ink-2); overflow:hidden; }
.progress > i { display:block; height:100%; width:40%; background: var(--pink); }
.ctrl-row { display:flex; align-items:center; justify-content:space-between; }
.ctrl { cursor:pointer; color:var(--ink); transition: transform var(--dur-fast); }
.ctrl:active { transform: scale(0.9); }
.ctrl.is-on { color: var(--grape); }
.is-player .miniplayer, .is-player .tabbar { display:none; }  /* player 隱藏 dock */

/* ── tab-bar：四格撞色塊 + 黑邊分隔，active 換亮色頂起 ── */
.tabbar {
  position: relative; z-index: 5; flex: 0 0 auto;
  display:flex; height: var(--tabbar-h);
  padding-bottom: var(--safe-bottom);
  border-top: var(--border-ink); background: var(--cream);
}
.tab { flex:1; display:flex; flex-direction:column; align-items:center; justify-content:center;
  gap:2px; font-size:11px; font-weight:700; letter-spacing:.4px; color:var(--text-2);
  cursor:pointer; border-right: var(--stroke-2) solid var(--ink);
  background: var(--cream); transition: transform var(--dur) var(--ease), background var(--dur); }
.tab:last-child { border-right: none; }
.tab:hover { background: var(--cream-2); }
.tab[aria-current="page"] {
  background: var(--yellow); color: var(--text-on-yellow);
  font-weight:900; transform: translateY(-2px); }

/* ── 迷你播放列（撞色浮條 + 黑邊 + 微傾，貼 tab-bar 上方） ── */
.miniplayer {
  position: relative; z-index: 4; flex: 0 0 auto;
  display:flex; align-items:center; gap: var(--space-3);
  height: var(--miniplayer-h); margin: 0 var(--space-3) var(--space-1);
  padding: 0 var(--space-3); border-radius: var(--radius-card-sm);
  border: var(--border-ink); background: var(--grape); color: var(--text-on-grape);
  transform: rotate(var(--tilt-c)); cursor:pointer; box-shadow: var(--shadow-pop);
}
.miniplayer:active { transform: rotate(0deg) scale(0.99); }

/* ── 訂閱方案：Plus 推薦卡（撞色 + 粗邊 + 硬影 + 微傾） ── */
.plan { padding: var(--space-4); border-radius: var(--radius-card);
  border: var(--border-ink-2); background: var(--cream-2); transform: rotate(var(--tilt-b)); }
.plan.is-featured { background: var(--pink); color: var(--text-on-pink);
  border: var(--border-ink); box-shadow: var(--shadow-pop); transform: rotate(var(--tilt-a)); }
.plan .price { font-size:23px; font-weight:900; font-variant-numeric: tabular-nums; }
.plan .badge { display:inline-block; font-size:11px; font-weight:900; padding:2px 8px;
  border: var(--border-ink-2); border-radius:999px; background: var(--yellow);
  color: var(--ink); transform: rotate(var(--tilt-d)); }

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation: none !important; transition: none !important; }
}
\`\`\`
`,"../../.claude/skills/app-neobrutalism/SKILL.md":`---
name: app-neobrutalism
description: Use when generating a single-file mobile App screen demo for the 迴聲 Resona 音樂串流 App in 新野獸派 Neobrutalism style. Triggers on Neobrutalism、新野獸派、neobrutalist、粗黑邊框、硬位移陰影、hard shadow、撞色色塊、Gumroad style、brutalist UI、high-contrast blocks.
user-invocable: true
---

# 新野獸派 — 迴聲 Resona

## Style Philosophy

新野獸派（Neobrutalism）把 90 年代瀏覽器原生控件的「粗、硬、直白」重新時尚化：粗黑邊框、毫無模糊的硬位移陰影、飽和度拉滿的撞色色塊、幾乎為零的圓角、粗壯到接近黑體極限的字重，以及刻意「對齊偏移」的叛逆排版。它不討好、不柔化，反而用最直接的視覺重量宣告層級——一個按鈕看起來就「真的可以按下去」（陰影位移到底）。放進 **迴聲 Resona** 音樂串流 App，這種風格讓每張歌單卡、每個方案卡都像貼在牆上的 DIY 海報，叛逆、年輕、辨識度極高，卻仍保有產品級 App 該有的清晰資訊階層與舒適間距。

**精修目標**：在保留「粗框硬陰影撞色」DNA 的前提下，把它做成「看起來真的能用、能按、能切換」的產品。重點在於——間距系統精準、內容密度豐富、迷你播放列常駐、每個可點元素都有「按下位移」回饋、絕不跑版。

三個視覺辨識特徵（精修後三層次）：

1. **粗黑邊框 3px + 多層硬位移陰影（無模糊）**：所有卡片、按鈕、chip、封面一律包黑框；陰影是純黑、無 blur、有明確偏移量，並建立**三階陰影層次**——\`2px\`（chip / 小元件）→ \`4px\`（標準卡 / 按鈕）→ \`6px\`（主封面 / 主推方案卡 / player 大封面）。按下時陰影收回到 \`1px\` 並把元件 \`translate(3px,3px)\` 位移到陰影處（「壓下去」的物理感）。
2. **高彩度撞色色塊輪替**：亮黃 \`#FFE600\`／桃粉 \`#FF6B9D\`／天藍 \`#4DA6FF\` 三主色輪番當底與封面，背景則用近白紙 \`#FBF7EF\`，色塊之間直接硬碰硬、不做漸變過渡。每個區段以不同撞色當「分區記號」，色塊之間留近白紙喘息，避免整頁刺眼。
3. **粗壯字體 + 對齊偏移的叛逆排版**：標題用 800/900 字重、可加 \`text-shadow\` 模擬「貼紙厚度」；分區標籤刻意旋轉 -2°～3°、區塊標題偏左或偏右錯位，破壞「乖巧的網格」——但**主要內文、列表、價格永遠水平正擺、不旋轉**，確保可讀。

---

## Design Tokens (CSS variables)

> 全部數值寫死於 token，元件只引用 token、不撿色不撿尺寸。間距採 **8pt 系統**（4 / 8 / 12 / 16 / 20 / 24 / 32）。

\`\`\`css
:root {
  /* ===== 手機外殼 ===== */
  --screen-w: 390px;
  --screen-h: 844px;
  --statusbar-h: 44px;
  --tabbar-h: 64px;
  --miniplayer-h: 60px;         /* 迷你播放列高度（疊在 tab-bar 上方） */
  --safe-bottom: 20px;          /* 模擬 home indicator 安全區 */

  /* ===== 8pt 間距尺度（唯一允許的間距值） ===== */
  --sp-1: 4px;
  --sp-2: 8px;
  --sp-3: 12px;
  --sp-4: 16px;                 /* 內容區左右標準 padding */
  --sp-5: 20px;
  --sp-6: 24px;                 /* 區段之間的標準縱向間距 */
  --sp-8: 32px;                 /* 大區段 / 屏首間距 */
  --content-pad: var(--sp-4);

  /* ===== 撞色主色 ===== */
  --nb-yellow: #FFE600;         /* 亮黃 */
  --nb-pink: #FF6B9D;           /* 桃粉 */
  --nb-blue: #4DA6FF;           /* 天藍 */
  --nb-black: #000000;          /* 邊框 / 陰影 / 主文字 */
  --nb-paper: #FBF7EF;          /* 近白紙背景 */
  --nb-paper-2: #FFFFFF;        /* 卡片白底 */
  --nb-ink-soft: #2B2B2B;       /* 次要文字（仍 ≥ 4.5:1） */
  --nb-mint: #7CE0C3;           /* 第四點綴（徽章/下載狀態，克制使用） */

  /* 角色化色彩 token（元件引用這層） */
  --color-bg: var(--nb-paper);
  --color-surface: var(--nb-paper-2);
  --color-fg: var(--nb-black);
  --color-fg-soft: var(--nb-ink-soft);
  --color-accent: var(--nb-yellow);     /* 主強調 = 亮黃 */
  --color-accent-2: var(--nb-pink);     /* 次強調 = 桃粉 */
  --color-accent-3: var(--nb-blue);     /* 第三強調 = 天藍 */
  --color-accent-4: var(--nb-mint);     /* 第四點綴 = 薄荷 */
  --color-on-accent: var(--nb-black);   /* 撞色塊上的文字一律黑（保 AA） */

  /* ===== 邊框（粗黑） ===== */
  --border-w: 3px;
  --border: var(--border-w) solid var(--nb-black);
  --border-thin: 2px solid var(--nb-black);

  /* ===== 硬位移陰影（無模糊，這是靈魂，三階層次） ===== */
  --shadow-sm: 2px 2px 0 var(--nb-black);        /* chip / 小元件 / icon 框 */
  --shadow: 4px 4px 0 var(--nb-black);           /* 標準卡片 / 按鈕 / song-row */
  --shadow-lg: 6px 6px 0 var(--nb-black);        /* 主封面 / 主推方案卡 / player 大封面 */
  --shadow-pressed: 1px 1px 0 var(--nb-black);   /* 按下態 */

  /* ===== 圓角（幾乎為零） ===== */
  --radius: 0px;                /* 預設直角 */
  --radius-xs: 4px;             /* 極少數需要時的最大圓角 */
  --radius-pill: 6px;           /* chip 也只給一點點，不做藥丸 */
  --radius-screen: 28px;        /* 僅裝置外殼螢幕圓角 */

  /* ===== 字體（粗壯為主） ===== */
  --font-display: 'Arial Black', 'PingFang TC', 'Noto Sans TC', system-ui, sans-serif;
  --font-body: 'PingFang TC', 'Noto Sans TC', 'Helvetica Neue', system-ui, sans-serif;
  --fw-black: 900;
  --fw-bold: 800;
  --fw-mid: 600;
  --fw-reg: 500;

  /* ===== 叛逆排版用的微旋轉（只給標籤/裝飾，不給內文） ===== */
  --tilt-a: -2deg;
  --tilt-b: 2.5deg;
  --tilt-c: -1.5deg;

  /* ===== 動畫 ===== */
  --press: transform .04s ease, box-shadow .04s ease;
  --z-statusbar: 30;
  --z-mini: 25;
  --z-tabbar: 26;
}
\`\`\`

---

## Typography Scale（手機字級・含行高/字重/字距）

| 級距 | 大小 / 行高 / 字重 / 字距 | 用途 |
| --- | --- | --- |
| display | 28px / 1.05 / 900 / -0.01em | App 品牌「迴聲 Resona」、player 大封面下曲名 |
| h1 | 22px / 1.10 / 900 / -0.01em | 各屏大標題（歌單牆標題、專輯名、方案區標、我的音樂庫） |
| h2 | 17px / 1.20 / 800 / 0 | 卡片標題、歌名、區段標題、方案名 |
| h3 | 15px / 1.25 / 800 / 0 | song-row 歌名、方案價格、區段「查看全部」 |
| body | 15px / 1.45 / 600 / 0 | 主要內文、曲目藝人、方案權益 |
| caption | 13px / 1.35 / 600 / 0 | 副標、播放次數、時長、tab 標籤、區段副標 |
| micro | 11px / 1.30 / 700 / 0.02em | status-bar 數字、chip 文字、徽章、序號、年份 |

排版規則：
- 標題（display/h1/h2）字重 900/800；display 與 h1 可加 \`text-shadow: 2px 2px 0 var(--nb-black)\`（要白底或亮色塊上才用，避免糊）。
- 中文不做斜體；叛逆傾斜一律用 \`transform: rotate()\`，**只給分區標籤 / chip / 裝飾印記，不給內文與價格**。
- 區段標題與「查看全部」同一行（\`display:flex; justify-content:space-between; align-items:baseline\`）。
- 數字（時長、價格、進度）用 \`font-variant-numeric: tabular-nums\` 對齊。

---

## Component & Layout（逐屏明細）

整體結構：單一 390×844 裝置外殼，**三層持久外框 + 單一活躍畫面**——
- 頂：\`status-bar\`（釘最上，永遠可見）。
- 中：6 個內容畫面**同時只顯示一個**（其餘 \`hidden\`），各自獨立可垂直捲動，預設顯示 \`home\`。
- 底：\`mini-player\`（迷你播放列）疊在 \`tab-bar\` 正上方 →\`tab-bar\`（4 tab，釘最下）。

純 CSS 專輯封面策略：**所有封面/縮圖/大頭貼一律純 CSS 繪製，不引用任何圖檔**。手法 = 撞色色塊（\`linear-gradient\` 硬切 / \`conic-gradient\` 幾何扇形 / 多層 \`background\` 疊方塊與條紋）+ 3px 黑框 + 硬陰影 + 一個旋轉小方塊或粗線當「裝飾印記」。**用 \`:nth-child\` 或 modifier class 讓每張封面套不同幾何變體與主色（黃/粉/藍/薄荷輪替）**，避免封面千篇一律。建議至少 4 種幾何 variant：對角硬切 / 三扇形 conic / 三橫條 / 同心方塊。

### 屏 1・status-bar（持久頂部）
- 高 \`--statusbar-h\`，黃底 \`--nb-yellow\`，底部 3px 黑線。
- 左：時間 **9:41**（micro、900、tabular-nums）。
- 右：訊號（4 條漸高黑直條 div）、Wi-Fi（CSS 扇形/三角）、電量符號（黑框小電池 div + 內部填色 + 正極凸點）。

### 屏 2・home（預設可見、≥ 3 區段）
頂部品牌列：「**迴聲 Resona**」（display，可 \`rotate(var(--tilt-a))\`）+ slogan「讓每首歌，回到你身上」。右上一顆「個人化每日推薦」入口小徽章。
1. **「每日迴聲」每日推薦 banner**（區段標題「每日迴聲」+ 副標「個人化每日推薦・每天 06:00 更新」）：一張桃粉底、粗框、6px 陰影的橫幅卡，內含一個 CSS 封面印記 + 文案 + 一顆黑底白三角「播放」鍵（點擊 → player）。
2. **4 分類 chip 橫排**：\`華語\`、\`獨立\`、\`電子\`、\`放鬆\`（撞色輪替 + 微旋轉 + 2px 陰影）。
3. **「為你精選歌單」卡牆**（區段標題 + 右側「查看全部」）：2 欄網格列出**全部 7 歌單**（\`浪潮回聲\`、\`深夜公路\`、\`島嶼晨光\`、\`雨後散步\`、\`城市心跳\`、\`山海之間\`、\`失重時刻\`），每張卡 = 純 CSS 撞色封面（4 種幾何 variant 輪替）+ 黑框 + 4px 陰影 + 歌單名（h2）+ caption 副標（如「24 首・你的深夜配方」）。點卡 → detail。
4. **「熱門排行」清單**（區段標題 + 「查看全部」）：編號 song-row（黑底白字序號 + CSS 縮圖 + 歌名 + 藝人 + 時長），列 3～4 首（如〈藍色信號〉/\`海平面樂團\`、〈霓虹巷弄〉/\`Echo Lab\`、〈候鳥地圖〉/\`何遠\`）。點列 → player。
5. 底部露出核心功能徽章列：「無損音質串流」「跨裝置接續播放」兩個藍/薄荷底粗框小卡。

### 屏 3・search
1. **粗框搜尋框**：白底、3px 黑框、4px 陰影、左側 CSS 放大鏡 icon、placeholder「搜尋歌曲、藝人、歌單」。
2. **4 分類 chip**：\`華語\`/\`獨立\`/\`電子\`/\`放鬆\`（撞色輪替）。
3. **「熱門歌曲」編號清單**：song-row 列多首歌名 + 藝人 + 時長，序號 1～5（〈藍色信號〉〈霓虹巷弄〉〈候鳥地圖〉〈靜電〉〈無人車站〉）。點列 → player。
4. **「熱門藝人」**：橫向卡列，CSS 圓/方頭貼 + 藝人名，列出**全部 5 藝人**：\`海平面樂團\`、\`林知夏\`、\`夜行列車\`、\`Echo Lab\`、\`何遠\`。

### 屏 4・detail
頂部返回鍵（黑框方鍵 + ‹）回 home。
1. **大封面**：純 CSS 撞色幾何（黃/粉/藍拼貼 + conic 扇形 + 旋轉印記）+ 粗黑框 + **6px 陰影**，方形約 200px。
2. **專輯資訊**：專輯名 \`島嶼晨光\`（h1）+ 藝人 \`林知夏\`（h2）+ meta 列「2026・9 首・31 分鐘」（micro，tabular-nums）。
3. **動作列**：桃粉「播放全部」粗框按鈕（黑底白三角 + 文字）→ player；藍框「隨機播放」按鈕。
4. **完整 9 曲目清單**（song-row）：序號 1–9 + 歌名 + 藝人（皆 \`林知夏\`）+ 時長 + 行尾「⋮」選單鍵或播放鍵。全部 9 首：〈藍色信號〉〈霓虹巷弄〉〈候鳥地圖〉〈靜電〉〈晚風練習曲〉〈無人車站〉〈潮間帶〉〈第七個夏天〉〈月台九又四分之三〉。點任一列 → player。

### 屏 5・player（不顯示 mini-player）
頂部返回鍵（▾ 或 ‹）回上一畫面。
1. **大封面**：純 CSS conic 三扇形撞色 + 旋轉印記，約 280px 方形、**6px 陰影**。
2. **曲目資訊**：曲名〈\`晚風練習曲\`〉（display）+ 藝人 \`林知夏\`（h2）+ 專輯 \`島嶼晨光\`（caption）。
3. **歌詞同步**：一行逐字高亮示意（當前行黃底黑字色塊、前後行灰字），如「晚風吹過月台　帶走未說的話」。
4. **進度條**：粗黑框軌道 + 黃色已播段 + 黑色方形拖把；左 \`00:00\`、右 \`02:47\`（tabular-nums）。
5. **播放控制列**：隨機（黑框）／上一首／**播放暫停大方鍵**（黑底白三角，▶⇄⏸ 兩態切換）／下一首／循環（黑框），五鍵等距，主播放鍵最大。
6. **底列徽章**：「無損音質串流」藍底徽章（音質）+ 音量條（粗框 + 黃填段）。

### 屏 6・library
頂部 h1「我的音樂庫」。
1. **分頁 tab**：\`歌單\`／\`專輯\`／\`已下載\` 三個粗框分頁鍵（active 黃底，其餘白底，純 class toggle 切換即可）。
2. **收藏歌單清單**：song-row 變體（CSS 縮圖封面 + 歌單名 + 曲數 caption），重複列出部分歌單（\`浪潮回聲\`、\`城市心跳\`、\`山海之間\`、\`失重時刻\`）。點 → detail。
3. **「離線下載」卡**：薄荷/藍底粗框卡，CSS 下載圖示 + 「已下載 24 首・約 360 MB」（呼應功能名「離線下載」）。
4. **「共享音樂庫」卡**：桃粉底粗框卡，「Family 方案・最多 6 人共建一座音樂庫」（呼應功能名「共享音樂庫」）。

### 屏 7・profile
1. **使用者身份卡**：CSS 大頭貼撞色方塊 + 暱稱「島上聽歌的人」+ 副標「v3.2.0・resona.app」。
2. **播放偏好卡**：列幾個開關 row，含 **「跨裝置接續播放」開關**（粗框方形 toggle，黃色 = 開；手機/平板/車機接力說明）、「無損音質串流」開關。
3. **三訂閱方案卡**（同屏、一字不差）：
   - \`免費　NT$ 0　／月\`（黃底）— 隨機播放／含廣告／標準音質。
   - \`Plus　NT$ 149　／月\`（桃粉底 + **6px 陰影 + 「推薦」貼紙標籤旋轉 -2°**）— 無廣告／無損／離線下載／指定單曲。
   - \`Family　NT$ 249　／月\`（藍底）— 6 帳號／共享音樂庫／家長控制／涵蓋全部 Plus 權益。
   - 其一標「目前方案」貼紙（如免費）。

### 屏 8・tab-bar（持久底部）
- 高 \`--tabbar-h\` + \`--safe-bottom\` padding，頂部 3px 黑線。
- 4 tab 等寬：**首頁／搜尋／音樂庫／我的**，每 tab = 上方 CSS 線框 icon + 下方文字（caption）。
- **active 態**：該 tab 黃色色塊底 + 黑框 + 文字 900；其餘透明底純黑線框。tab 之間 2px 黑分隔線。

### mini-player（迷你播放列・常駐於 tab-bar 上方）
- 一條高 \`--miniplayer-h\` 的粗框 bar，**疊在 tab-bar 正上方**（底部 = \`tabbar-h + safe-bottom\`，z-index 介於內容與 tab-bar 之間）。
- 內容：左側 CSS 縮圖封面（40px）+ 中間〈\`晚風練習曲\`〉/\`林知夏\`（兩行：h3 + caption）+ 右側「播放/暫停」黑底白三角方鍵（▶⇄⏸ 兩態）。
- 上方一條 2px 細進度條（黃填段）做「正在播放」暗示。
- **顯示於 home / search / library / profile**；**player 與 detail 進入 player 後不顯示**（player 畫面本身不顯示 mini-player）。點擊 mini-player 主體（非播放鍵）→ 展開到 player；點播放鍵 → 僅切換 ▶/⏸ 不切畫面。
- 各內容畫面底部 padding 需預留 \`calc(tabbar-h + safe-bottom + miniplayer-h + sp-2)\`，避免最後一列被遮住。

---

## 微互動（Micro-interactions）

- **所有可點元素**：\`cursor: pointer\` + 明確 \`:hover\`（陰影加深一階或邊框加粗暗示）+ \`:active\`（陰影收回 \`--shadow-pressed\` + \`translate(3px,3px)\` 壓下去）。沒有「看似可點卻沒反應」的死元素。
- **播放鍵兩態**：▶（播放）/ ⏸（暫停）兩態切換——用 JS toggle class 換 \`::before\` 內容或顯示/隱藏兩個 CSS 三角/雙豎條。mini-player、home banner、player 主鍵、detail 播放鍵皆有兩態。
- **tab / 分頁 / chip active 視覺**：active 黃底色塊 + 文字加粗；非 active 白/透明底。切換用 class toggle。
- **卡片 active**：song-row / 歌單卡 hover 陰影加深、active 壓下位移。
- **toggle 開關**：方形 thumb，開 = 黃底 + thumb 右；關 = 白底 + thumb 左；點擊瞬間切換（建議 transform 移動 thumb）。
- 所有 transition 只動 \`transform\` / \`opacity\` / \`box-shadow\`，並包進 \`@media (prefers-reduced-motion: reduce)\` 關閉。

---

## Do / Don't

| Do | Don't |
| --- | --- |
| 邊框一律 3px 純黑（\`--border\`），陰影一律無模糊硬位移，並用 sm/標準/lg **三階層次** | 用柔和 \`box-shadow: 0 4px 12px rgba(...)\` 擬真陰影、或全部同一階陰影沒層次 |
| 間距只用 8pt 尺度 token（4/8/12/16/20/24/32），區段間距一致 \`--sp-6\` | 隨手寫 7px、13px、19px 等非尺度值，間距忽大忽小 |
| 圓角預設 0，最多 4px（外殼螢幕 28px 例外） | 用 16px+ 大圓角或藥丸按鈕 |
| 撞色塊上文字一律黑色（\`--color-on-accent\`），確保 ≥ 4.5:1 | 在亮黃/桃粉上放白字（對比不足、糊掉） |
| 標題 900 + \`text-shadow\` 厚度感、標籤微旋轉錯位 | 內文、價格、列表也跟著旋轉，導致難讀 |
| 按下態：陰影縮成 \`--shadow-pressed\` + \`translate(3px,3px)\` 壓到陰影處 | 按下無回饋、或用 opacity 變淡假裝按下 |
| 封面用純 CSS 撞色幾何，且多種 variant 輪替避免重複 | 引用任何 \`.webp/.png/.jpg\` 圖檔或外部 CDN 圖、或所有封面長一樣 |
| mini-player 常駐 home/search/library/profile，player 內不顯示 | 在 player 畫面也疊一條 mini-player（重複） |
| 內容畫面底部留足 padding，最後一列不被 mini-player/tab-bar 蓋住 | 內容被底部 bar 裁切、文字溢出容器 |

---

## Mobile Chrome / 無跑版規範

- **裝置容器鎖 390×844**：最外層 \`.device\` 寬 \`--screen-w\`、最小高 \`--screen-h\`、置中、\`overflow: hidden\`、3px 黑框、\`border-radius: var(--radius-screen)\`（內容仍直角）。\`position: relative\` 作為底部固定列的定位脈絡。
- **status-bar 永遠在頂**：\`position: sticky; top: 0; z-index: var(--z-statusbar)\`，黃底 + 底部 3px 黑線；高度固定 \`--statusbar-h\`。
- **tab-bar（含其上的 mini-player）永遠在底**：固定於裝置容器底部（\`position: absolute; bottom: 0\` 於 \`.device\` 內，或 sticky）；mini-player 緊貼 tab-bar 上緣。
- **中間為當前畫面的可捲動區**：每個內容畫面 \`overflow-y: auto\`，\`padding-bottom\` 預留 \`calc(var(--tabbar-h) + var(--safe-bottom) + var(--miniplayer-h) + var(--sp-2))\`，避免被底部 bar 蓋住；頂部 padding 從 status-bar 下緣起算。
- **文字不溢出 / 不被裁切**：長標題用 \`overflow: hidden; text-overflow: ellipsis; white-space: nowrap\`（單行）或 \`-webkit-line-clamp\`（多行）；卡片內 \`min-width: 0\` 讓 flex 子元素可縮。
- **padding 充足**：列表 row 內距 ≥ \`--sp-3\`、卡片內距 ≥ \`--sp-4\`、區段左右 \`--content-pad\`、區段之間 \`--sp-6\`。
- **安全區**：底部用 \`--safe-bottom\`（或 \`env(safe-area-inset-bottom)\`）預留 home indicator。
- **微旋轉不破版**：旋轉只給陰影外的標籤/chip，且容器要有足夠 margin，旋轉後不溢出裁切。

---

## Required Output Contract

遵循 \`.claude/agents/style-page-builder.md\` 的「**App 風格額外要求**」：

- **8 個 \`data-screen\`**（固定順序、各恰一次）：\`status-bar\` → \`home\` → \`search\` → \`detail\` → \`player\` → \`library\` → \`profile\` → \`tab-bar\`，每屏用 \`<section data-screen="<id>">\` 包起來。
- **\`<body data-viewport="mobile">\` 必須存在**；\`<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\`。
- 所有「必抄」字串出現在**可見 body 文字**（不可只放 \`aria-label\` / \`data-*\`）：品牌 迴聲 / Resona、6 功能名（個人化每日推薦 / 無損音質串流 / 離線下載 / 歌詞同步 / 跨裝置接續播放 / 共享音樂庫）、7 歌單、9 歌名、5 藝人、4 分類 chip（華語 / 獨立 / 電子 / 放鬆）、正在播放 \`林知夏\` —〈\`晚風練習曲\`〉（專輯 \`島嶼晨光\`）。
- **三層定價精確字串同屏出現**（profile）：\`免費　NT$ 0　／月\`、\`Plus　NT$ 149　／月\`、\`Family　NT$ 249　／月\`（\`NT$\` 與數字間一個半形空格，後綴全形「／月」）。
- status-bar 必含 **9:41** + 訊號 + 電量符號；tab-bar 四字「首頁／搜尋／音樂庫／我的」（active 高亮）。
- **可互動多畫面導覽**（vanilla inline JS，禁外部庫，\`<script>\` ≤ 8 KB）：
  - 預設只顯示 \`home\`，其餘內容畫面 \`hidden\`；status-bar / mini-player / tab-bar 持久。
  - tab-bar 4 tab 切換 home / search / library / profile，同步 active 態。
  - home / library / search 的歌單或專輯卡 → \`detail\`。
  - detail 曲目列、mini-player 主體、各處播放列 / 播放鍵 → \`player\`。
  - detail 與 player 頂部有**返回鍵**回上一畫面。
  - mini-player 顯示於 home/search/library/profile，**player 畫面隱藏 mini-player**。
  - 播放鍵 ▶/⏸ 兩態切換；所有可點元素 \`cursor:pointer\` + \`:active\` 按下回饋。
- 單檔 ≤ 200 KB、**無外部 CDN**（\`src\`/\`href\` 不得以 \`http://\`／\`https://\` 開頭）、繁體中文、CSS 變數驅動、不用 framework CSS、不留 LLM 自白。
- JS 失敗時 \`home\` 內容仍完整可讀（預設可見即 home）。
- 任何 \`@keyframes\`／\`transition\` 必附 \`@media (prefers-reduced-motion: reduce)\`，且只動 \`transform\` / \`opacity\`。

---

## Required Images

**此風格不使用任何點陣圖。** \`assets-manifest.json\` 的 \`images\` 為空陣列 \`[]\`。

所有專輯封面、歌單縮圖、player 大封面、mini-player 縮圖、profile 大頭貼一律以**純 CSS 撞色色塊／幾何／線框佔位**繪製（\`linear-gradient\` 硬切、\`conic-gradient\` 扇形、多層 \`background\` 疊方塊與條紋、\`transform: rotate\` 裝飾印記），搭配 3px 黑框 + 硬位移陰影，並以多種幾何 variant 輪替。**不引用任何 \`assets/\` 圖檔、不外連任何圖片 URL。**

---

## Reference Snippet

可直接套用的 CSS（體現新野獸派・含外殼/statusbar/區段/song-row/卡片/mini-player/tabbar/進度條/訂閱卡 + reduced-motion；≥ 60 行）：

\`\`\`css
/* ===== 手機外殼 ===== */
.device {
  width: var(--screen-w);
  min-height: var(--screen-h);
  height: var(--screen-h);
  margin: 0 auto;
  background: var(--color-bg);
  border: var(--border);
  border-radius: var(--radius-screen);
  overflow: hidden;
  position: relative;            /* 底部固定列定位脈絡 */
  font-family: var(--font-body);
  color: var(--color-fg);
}

/* ===== 持久頂部狀態列 ===== */
.statusbar {
  position: sticky; top: 0; z-index: var(--z-statusbar);
  height: var(--statusbar-h);
  display: flex; align-items: center; justify-content: space-between;
  padding: 0 var(--sp-4);
  background: var(--nb-yellow);
  border-bottom: var(--border);
  font: 700 13px/1 var(--font-body);
  font-variant-numeric: tabular-nums;
}
.statusbar .battery { width: 22px; height: 11px; border: var(--border-thin); position: relative; }
.statusbar .battery::after { content: ""; position: absolute; right: -4px; top: 3px; width: 2px; height: 5px; background: var(--nb-black); }
.statusbar .battery > i { display: block; height: 100%; width: 70%; background: var(--nb-black); }

/* ===== 內容畫面：單一活躍 + 可捲動 + 底部預留 ===== */
.screen {
  position: absolute; inset: var(--statusbar-h) 0 0 0;
  overflow-y: auto;
  padding: var(--sp-5) var(--content-pad)
           calc(var(--tabbar-h) + var(--safe-bottom) + var(--miniplayer-h) + var(--sp-2));
  background: var(--color-bg);
}
.screen[hidden] { display: none; }
.screen--player { padding-bottom: calc(var(--tabbar-h) + var(--safe-bottom) + var(--sp-2)); } /* 不留 mini-player 空間 */

/* ===== 區段標題（含查看全部）+ 微旋轉標籤 ===== */
.section { margin-bottom: var(--sp-6); }
.section__head { display: flex; align-items: baseline; justify-content: space-between; margin-bottom: var(--sp-3); }
.section__title { font: 900 22px/1.1 var(--font-display); letter-spacing: -0.01em; }
.section__more { font: 800 13px/1 var(--font-body); cursor: pointer; }
.tag { display: inline-block; padding: 2px 8px; background: var(--nb-black); color: #fff;
  font: 700 11px/1.3 var(--font-body); transform: rotate(var(--tilt-a)); }

/* ===== 通用卡片 / 按鈕：粗框 + 硬位移陰影 + 按下回饋 ===== */
.card, .btn {
  background: var(--color-surface); border: var(--border);
  border-radius: var(--radius); box-shadow: var(--shadow);
}
.btn {
  display: inline-flex; align-items: center; justify-content: center; gap: var(--sp-2);
  padding: 12px 18px; background: var(--color-accent-2); color: var(--color-on-accent);
  font: 800 15px/1 var(--font-body); cursor: pointer; transition: var(--press);
}
.btn:hover  { box-shadow: var(--shadow-lg); }
.btn:active { transform: translate(3px, 3px); box-shadow: var(--shadow-pressed); }
.btn--play::before { content: "▶"; }      /* ▶/⏸ 兩態：JS toggle .is-playing */
.btn--play.is-playing::before { content: "⏸"; }

/* ===== 分類 chip：小框 + 撞色輪替 + 微旋轉 ===== */
.chip {
  display: inline-block; padding: 6px 12px; border: var(--border-thin);
  border-radius: var(--radius-pill); box-shadow: var(--shadow-sm);
  background: var(--nb-blue); color: var(--color-on-accent);
  font: 700 11px/1 var(--font-body); cursor: pointer; transform: rotate(var(--tilt-a));
  transition: var(--press);
}
.chip:nth-child(2n) { background: var(--nb-pink);   transform: rotate(var(--tilt-b)); }
.chip:nth-child(3n) { background: var(--nb-yellow); transform: rotate(var(--tilt-c)); }
.chip:active        { transform: translate(2px,2px); box-shadow: var(--shadow-pressed); }
.chip.is-active     { background: var(--nb-yellow); font-weight: 900; }

/* ===== 純 CSS 封面（多 variant 輪替） ===== */
.cover { border: var(--border-thin); position: relative; aspect-ratio: 1; }
.cover--a { background: linear-gradient(135deg, var(--nb-yellow) 0 50%, var(--nb-pink) 50% 100%); }
.cover--b { background: conic-gradient(from 20deg, var(--nb-blue) 0 33%, var(--nb-yellow) 33% 66%, var(--nb-pink) 66%); }
.cover--c { background: repeating-linear-gradient(180deg, var(--nb-pink) 0 16px, var(--nb-paper) 16px 32px); }
.cover--d { background: var(--nb-blue); }
.cover--d::after { content: ""; position: absolute; inset: 22% 22%; background: var(--nb-yellow); border: var(--border-thin); transform: rotate(12deg); }

/* ===== 歌曲列：序號 + 縮圖 + 名稱 + 時長 ===== */
.song-row {
  display: flex; align-items: center; gap: var(--sp-3);
  padding: var(--sp-3); background: var(--color-surface);
  border: var(--border-thin); box-shadow: var(--shadow-sm);
  margin-bottom: var(--sp-2); cursor: pointer; transition: var(--press);
}
.song-row:hover  { box-shadow: var(--shadow); }
.song-row:active { transform: translate(2px,2px); box-shadow: var(--shadow-pressed); }
.song-row .num { width: 22px; height: 22px; flex: 0 0 auto; display: grid; place-items: center;
  background: var(--nb-black); color: #fff; font: 700 11px/1 var(--font-body); }
.song-row .cover { flex: 0 0 auto; width: 48px; height: 48px; }
.song-row .meta { min-width: 0; }      /* 讓文字可省略不溢出 */
.song-row .title { font: 800 15px/1.25 var(--font-body); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.song-row .artist { font: 600 13px/1.3 var(--font-body); color: var(--color-fg-soft);
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.song-row .time { margin-left: auto; font: 700 13px/1 var(--font-body);
  color: var(--color-fg-soft); font-variant-numeric: tabular-nums; }

/* ===== 歌單卡牆（2 欄） ===== */
.grid { display: grid; grid-template-columns: 1fr 1fr; gap: var(--sp-3); }
.tile { background: var(--color-surface); border: var(--border); box-shadow: var(--shadow);
  cursor: pointer; transition: var(--press); }
.tile:active { transform: translate(3px,3px); box-shadow: var(--shadow-pressed); }
.tile .cover { width: 100%; }
.tile .name { padding: var(--sp-2) var(--sp-3); font: 800 15px/1.2 var(--font-body); }

/* ===== player 大封面 + 進度條 ===== */
.now-playing .art { width: 100%; max-width: 280px; aspect-ratio: 1; margin: 0 auto;
  border: var(--border); box-shadow: var(--shadow-lg); position: relative;
  background: conic-gradient(from 20deg, var(--nb-blue) 0 33%, var(--nb-yellow) 33% 66%, var(--nb-pink) 66%); }
.now-playing .art::after { content: ""; position: absolute; left: 24px; bottom: 24px;
  width: 40px; height: 40px; background: var(--nb-paper); border: var(--border); transform: rotate(12deg); }
.lyric { padding: var(--sp-2) var(--sp-3); background: var(--nb-yellow); border: var(--border-thin);
  font: 800 15px/1.4 var(--font-body); text-align: center; }
.progress { height: 14px; border: var(--border-thin); background: var(--nb-paper-2); position: relative; margin: var(--sp-3) 0 var(--sp-1); }
.progress > .fill { height: 100%; width: 38%; background: var(--nb-yellow); }
.progress > .thumb { position: absolute; top: -3px; left: 38%; width: 16px; height: 18px; background: var(--nb-black); }
.progress-time { display: flex; justify-content: space-between; font: 700 11px/1 var(--font-body); font-variant-numeric: tabular-nums; }
.transport { display: flex; align-items: center; justify-content: space-between; gap: var(--sp-3); margin-top: var(--sp-4); }
.transport .ctrl { width: 48px; height: 48px; display: grid; place-items: center; border: var(--border-thin);
  background: var(--color-surface); box-shadow: var(--shadow-sm); cursor: pointer; transition: var(--press); }
.transport .ctrl--main { width: 64px; height: 64px; background: var(--nb-black); color: #fff; box-shadow: var(--shadow); }
.transport .ctrl:active { transform: translate(2px,2px); box-shadow: var(--shadow-pressed); }

/* ===== mini-player（疊在 tab-bar 上方） ===== */
.miniplayer {
  position: absolute; left: 0; right: 0; z-index: var(--z-mini);
  bottom: calc(var(--tabbar-h) + var(--safe-bottom));
  height: var(--miniplayer-h);
  display: flex; align-items: center; gap: var(--sp-3); padding: 0 var(--sp-3);
  background: var(--color-surface); border-top: var(--border); border-bottom: var(--border); cursor: pointer;
}
.miniplayer::before { content: ""; position: absolute; top: 0; left: 0; width: 42%; height: 3px; background: var(--nb-yellow); }
.miniplayer .cover { width: 40px; height: 40px; flex: 0 0 auto; }
.miniplayer .meta { min-width: 0; flex: 1; }
.miniplayer .title { font: 800 15px/1.2 var(--font-body); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.miniplayer .artist { font: 600 13px/1.2 var(--font-body); color: var(--color-fg-soft); }
.miniplayer .play { width: 40px; height: 40px; flex: 0 0 auto; display: grid; place-items: center;
  background: var(--nb-black); color: #fff; border: var(--border-thin); box-shadow: var(--shadow-sm);
  cursor: pointer; transition: var(--press); }
.miniplayer .play:active { transform: translate(2px,2px); box-shadow: var(--shadow-pressed); }
.screen--player ~ .miniplayer, body.is-player .miniplayer { display: none; } /* player 不顯示 mini-player */

/* ===== 底部 tab-bar：固定底 + active 黃高亮 ===== */
.tabbar {
  position: absolute; left: 0; right: 0; bottom: 0; z-index: var(--z-tabbar);
  display: flex; height: calc(var(--tabbar-h) + var(--safe-bottom));
  padding-bottom: var(--safe-bottom);
  background: var(--color-surface); border-top: var(--border);
}
.tabbar .tab { flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center;
  gap: var(--sp-1); font: 600 11px/1 var(--font-body); border-right: var(--border-thin); cursor: pointer; }
.tabbar .tab:last-child { border-right: none; }
.tabbar .tab .ico { width: 20px; height: 20px; border: var(--border-thin); }
.tabbar .tab.is-active { background: var(--nb-yellow); font-weight: 900; }

/* ===== 訂閱方案卡 ===== */
.plan { padding: var(--sp-4); border: var(--border); box-shadow: var(--shadow); margin-bottom: var(--sp-3); position: relative; }
.plan--free   { background: var(--nb-yellow); }
.plan--plus   { background: var(--nb-pink); box-shadow: var(--shadow-lg); }
.plan--family { background: var(--nb-blue); }
.plan__head { display: flex; align-items: baseline; justify-content: space-between; }
.plan__name { font: 900 17px/1.1 var(--font-body); }
.plan__price { font: 900 17px/1.1 var(--font-body); font-variant-numeric: tabular-nums; }
.plan__sticker { position: absolute; top: -10px; right: 12px; padding: 2px 8px; background: var(--nb-black);
  color: #fff; font: 700 11px/1.3 var(--font-body); transform: rotate(var(--tilt-a)); }

/* ===== toggle 開關 ===== */
.toggle { width: 48px; height: 26px; border: var(--border-thin); background: var(--color-surface); position: relative; cursor: pointer; }
.toggle > i { position: absolute; top: 2px; left: 2px; width: 18px; height: 18px; background: var(--nb-black);
  transition: transform .12s ease; }
.toggle.is-on { background: var(--nb-yellow); }
.toggle.is-on > i { transform: translateX(22px); }

/* ===== reduced motion ===== */
@media (prefers-reduced-motion: reduce) {
  .btn, .chip, .song-row, .tile, .transport .ctrl, .miniplayer .play, .toggle > i { transition: none; }
}
\`\`\`
`,"../../.claude/skills/app-one-ui/SKILL.md":`---
name: app-one-ui
description: Use when generating a single-file mobile App screen demo for the 迴聲 Resona 音樂串流 App in Samsung One UI style. Triggers on One UI、One UI 6、Samsung、三星介面、單手友善、單手可達、bottom-heavy、上半留白、大粗標題、柔和大圓角、藍 accent。
user-invocable: true
---

# One UI — 迴聲 Resona

## Style Philosophy

Samsung One UI（特別是 One UI 6）的核心命題是「**把大螢幕手機交還給單手**」。它的招牌做法是：**畫面頂部留一塊「適度」的留白標題區（viewing area）**，放一個超大、超粗的標題；把搜尋框、卡片、按鈕、列表往拇指自然弧線可達的下半（interaction area）安排。整體調性柔和、安靜、舒適——淺灰白底、寬鬆呼吸間距、柔和大圓角白卡、極淺陰影，唯一鮮明色彩是品牌藍 accent，只在 active / 主按鈕 / 選取態 / 進度條出現。

在「迴聲 Resona」音樂串流 App 中，這風格要表現「**從容、好按、不吵**」——巨大歡迎標題佔住頂部一小段，歌單卡牆與曲目列在其下舒展，配色克制，唯有正在播放的進度條與底部 active tab 透出那一抹藍。

三個視覺辨識特徵：
1. **頂部適度留白 + 超大粗標題**：每屏頂部一塊 large-title 區，**高度只佔可視內容區的 18–26%（約 130–180px），絕不佔滿整個 viewport**。標題字級 28px、字重 700、行高緊湊，標題下方緊接內容。
2. **柔和大圓角白卡 + 淺灰白底**：背景 \`#F2F4F7\`、卡片純白 \`#FFFFFF\`、圓角 20–28px、陰影極淺（靠底色對比分層），元件間 12–24px 間距。
3. **單一藍 accent \`#0F62FE\`**：只在主 CTA、active tab、進度條已播段、選取 chip、開關打開態、迷你播放鍵出現；其餘一律中性灰。

### 致命跑版警告（必讀，本風格最容易壞在這）

> 本風格過去出現「**6 個內容屏全部空白，只剩頂部標題與底部 tab bar**」的嚴重跑版。根因是把「上半留白」做過頭，導致：
> (A) large-title 區把整個 viewport 佔滿，內容被擠到 844px 視窗以外；
> (B) 內容顏色太接近白色、低對比，看起來像空白；
> (C) \`.screen-scroll\` 沒給高度 / 沒能捲動，下方內容看不到。

**必守三條鐵律修法：**
1. **large-title 區高度上限 = 180px**（用 \`max-height\`/固定高），**禁止 \`height: 100%\` / \`flex: 1\` / \`min-height: 60vh\` 之類把它撐滿**。留白只是「標題上方多一點 padding-top」，不是「整屏空白」。
2. **每個 \`data-screen\` 內容屏，large-title 之下必須有實際、可見、對比充足的內容**（卡片、清單、按鈕），且這些內容在 390×844 視窗內第一眼就看得到一部分。
3. **正文、標題用 \`--text\`（近黑）或 \`--text-2\`（中灰），絕不用 \`--text-3\` 或接近白色的淺灰當主要內容文字**。卡片底是白 \`#FFFFFF\`、頁底是灰白 \`#F2F4F7\`，兩者有可辨識對比。

## Design Tokens (CSS variables)

\`\`\`css
:root {
  /* ===== 裝置殼尺寸（鎖死，不可變）===== */
  --screen-w: 390px;
  --screen-h: 844px;
  --statusbar-h: 44px;
  --tabbar-h: 60px;
  --miniplayer-h: 56px;         /* tab-bar 上方常駐迷你播放列 */
  --safe-bottom: 20px;          /* home indicator 安全區 */
  --device-radius: 46px;        /* 圓角螢幕 */

  /* ===== One UI 頂部留白標題區（高度受控，禁止撐滿）===== */
  --largetitle-h: 148px;        /* 頂部 large-title 區高度，約佔可視 18–22% */
  --largetitle-max: 180px;      /* 絕對上限，超過即視為跑版 */
  --pad: 20px;                  /* 全頁左右內距，內容統一對齊此值 */

  /* ===== 色彩（對比已驗，主內容文字一律深色）===== */
  --bg: #F2F4F7;                /* 灰白頁底 */
  --surface: #FFFFFF;          /* 白卡 / 列表底 */
  --surface-2: #FAFBFC;        /* 次層卡（略偏白）*/
  --sunken: #E9ECF1;           /* 搜尋框、chip 未選底、進度條軌 */
  --accent: #0F62FE;           /* 品牌藍，唯一鮮色 */
  --accent-soft: #E3EDFF;      /* 藍柔色：選取 chip 底、active tab 膠囊底 */
  --accent-pressed: #0A4FCC;   /* 按下態 */
  --text: #16181D;             /* 主文字 / 大標題（對白底 > 15:1）*/
  --text-2: #535963;           /* 次要文字（對白底 > 6:1）*/
  --text-3: #8A909B;           /* 第三層：時長、caption（對白底 > 3.5:1，僅次要）*/
  --on-accent: #FFFFFF;        /* 藍底上的字 */
  --divider: #E4E7EC;          /* 分隔線 */

  /* ===== 圓角 ===== */
  --r-card: 26px;              /* 大卡片 */
  --r-sm: 18px;               /* 歌單封面卡 / 小卡 */
  --r-field: 20px;            /* 搜尋框 / 按鈕（柔和半圓）*/
  --r-pill: 999px;            /* chip / tab 膠囊 / 圓鈕 */

  /* ===== 陰影（極淺，One UI 幾乎只靠底色分層）===== */
  --shadow-card: 0 1px 4px rgba(20,22,26,.05);
  --shadow-raised: 0 6px 18px rgba(20,22,26,.10);   /* 迷你播放列 / 大圓鈕 */

  /* ===== 8pt 間距尺度（4/8/12/16/20/24/32）===== */
  --s-1: 4px;
  --s-2: 8px;
  --s-3: 12px;
  --s-4: 16px;
  --s-5: 20px;
  --s-6: 24px;
  --s-8: 32px;

  --font: 'SamsungOne', 'PingFang TC', 'Noto Sans TC', 'Roboto', system-ui, sans-serif;
}
\`\`\`

## Typography Scale（行高 / 字重 / 字距完整）

| 級距 | 大小 / 行高 / 字重 / 字距 | 用途 |
| --- | --- | --- |
| large-title | 28px / 1.2 / 700 / -0.01em | 頂部 large-title 區的超大粗標題 |
| title | 22px / 1.25 / 700 / -0.005em | 區段大標、player 曲名、detail 專輯名 |
| section | 18px / 1.3 / 700 / 0 | 「為你精選歌單」「熱門排行」等區段標題 |
| headline | 16px / 1.35 / 600 / 0 | 卡片標題、歌單名、列表主標 |
| body | 15px / 1.5 / 400 / 0 | 一般內文、藝人名 |
| label | 13px / 1.4 / 500 / 0 | chip、按鈕、tab 標籤、次要說明 |
| caption | 11px / 1.35 / 500 / 0.01em | 時長、播放次數、徽章、status-bar 細節 |

字距：large-title / title 大字微收緊；其餘 0。**禁止把主標題或正文設成 \`--text-3\` 等淺灰，避免低對比看似空白。**

## Layout Rules（嚴格鎖版，這是防跑版的關鍵）

裝置三層固定結構，**高度分配寫死**：

\`\`\`
.device (390 × 844, overflow:hidden, display:flex, flex-direction:column)
├── .statusbar      高 44px，固定頂，flex:0 0 auto，永遠在最上
├── .screen-scroll  flex:1 1 auto, min-height:0, overflow-y:auto   ← 唯一可捲動內容區
│     每個 .screen（home/search/detail/player/library/profile）：
│       .largetitle  高 ≤180px（受 --largetitle-h 控制）
│       下方內容卡 / 清單 / 按鈕（實際內容，對比充足）
└── .dock           固定底，flex:0 0 auto，永遠在最下
      ├── .miniplayer 高 56px（home/search/library/profile 顯示；player/detail 可隱）
      └── .tabbar     高 60px + safe-bottom，4 tab
\`\`\`

**鎖版鐵律（逐條檢查，違反即跑版）：**
1. \`.device\` 鎖 \`width:390px; height:844px; overflow:hidden\`，內部一律相對它定位，不可超出。
2. \`.screen-scroll\` 必須 \`flex:1 1 auto; min-height:0; overflow-y:auto\`——**\`min-height:0\` 不可漏**，否則 flex 子項撐高導致無法捲動 / 內容被推走。
3. \`.largetitle\` 用 \`min-height:var(--largetitle-h); max-height:var(--largetitle-max)\`，**禁止 \`flex:1\`、\`height:100%\`、\`min-height:50vh\`**。它只是「標題 + 上方 padding」，不是整屏空白。
4. \`.screen-scroll\` 底部 \`padding-bottom: calc(var(--miniplayer-h) + var(--tabbar-h) + var(--safe-bottom) + var(--s-4))\`，確保最後一列不被 dock 遮住。
5. 所有文字容器 \`min-width:0\`，長文字 \`overflow:hidden; text-overflow:ellipsis; white-space:nowrap\`（單行）或正常換行（多行），**不得溢出卡片或被裁切**。
6. 卡片、清單列左右內距至少 \`--s-4\`（16px）以上，內容不貼邊。
7. 每個內容屏 large-title 之下**至少要有一塊在 844px 視窗內可見的內容**（第一眼非空白）。

## Component & Layout（逐屏內容，密度要夠）

> 通則：每屏頂部 \`.largetitle\`（高 ≤180px，標題壓底）→ 其下緊接內容。所有內容左右對齊 \`--pad\`（20px）。**禁止整屏空白。**

### status-bar（\`data-screen="status-bar"\`）
頂部固定列，高 44px。左 **9:41**；右側依序訊號格、Wi‑Fi、電量（unicode 或 inline SVG）。背景與頁底融合，文字 \`--text\`，字重 600。每頁固定，不可省。

### home（\`data-screen="home"\`）
- **large-title**：「迴聲 Resona」+ 一行副標 slogan（如「為你而聲，島嶼的迴響」），副標用 \`--text-2\`。
- **分類 chip 橫排**：\`華語 / 獨立 / 電子 / 放鬆\`，當前 active 為藍膠囊（\`--accent-soft\` 底 + \`--accent\` 字）。
- **區段 1「每日迴聲」**：區段標題（section）+「查看全部 ›」。一張大圓角白卡 banner：左方形封面（\`assets/cover-1.webp\`）+ 右側「每日迴聲」標題、一句推薦文案、藍色「立即播放」小按鈕。
- **區段 2「為你精選歌單」**：區段標題 +「查看全部 ›」。2 欄 grid 歌單卡牆，列出全部 7 個歌單名：\`浪潮回聲 / 深夜公路 / 島嶼晨光 / 雨後散步 / 城市心跳 / 山海之間 / 失重時刻\`。每張 \`.album-card\`：封面（\`assets/cover-N.webp\`，N=1..6 循環，第 7 張重用）+ 封面下歌單名（headline）+ 一行 caption（如「24 首・1 小時 38 分」）。
- **區段 3「熱門排行」**：區段標題 +「查看全部 ›」。編號清單 \`.song-row\`，列 5–6 首：左排名數字、中歌名(headline)+藝人(label)、右時長(caption)+播放鍵。歌名取自 9 歌名集合，藝人取自 5 藝人集合。
- **功能露出**：在某張卡或 caption 帶出 6 核心功能名（無損音質串流 / 離線下載 / 跨裝置接續播放 / 歌詞同步 / 共享音樂庫 / 智慧每日推薦）。

### search（\`data-screen="search"\`）
- **large-title**：「搜尋」。
- **searchbar**：\`--sunken\` 底、\`--r-field\`、左放大鏡 icon、placeholder「搜尋歌曲、藝人、歌單」。
- **4 分類 chip**：\`華語 / 獨立 / 電子 / 放鬆\`。
- **區段「熱門歌曲」**：編號 \`.song-row\` 清單（含時長），列多首歌名（〈藍色信號〉〈霓虹巷弄〉〈候鳥地圖〉〈靜電〉〈晚風練習曲〉…），每列序號 + 歌名 + 藝人 + 時長 + 播放鍵。
- **區段「熱門藝人」**：橫向圓形頭像列或 2 欄列，列出 5 藝人名：\`海平面樂團 / 林知夏 / 夜行列車 / Echo Lab / 何遠\`，每位帶一行 caption（如「月聽眾 12.4 萬」）。

### detail（\`data-screen="detail"\`）
- **large-title**：專輯名「島嶼晨光」+ 藝人「林知夏」（藝人用 \`--text-2\`）。
- **專輯資訊區**：大正方形封面（\`assets/cover-3.webp\`，\`--r-card\`）+ 旁邊或下方 meta：專輯名・林知夏・2026・9 首・38 分鐘。
- **動作列**：藍底膠囊「播放全部」\`.btn-primary\` + 圈框「隨機播放」按鈕（含 🔀）。
- **9 首曲目列**：\`.song-row\` 逐列列出全部 9 首：\`藍色信號 / 霓虹巷弄 / 候鳥地圖 / 靜電 / 晚風練習曲 / 無人車站 / 潮間帶 / 第七個夏天 / 月台九又四分之三\`。每列：左曲序、中歌名(headline)+藝人(label)、右時長(caption)+行尾選單 ⋯ 或播放 ▶。
- **返回鍵**：large-title 區左上一個返回箭頭（‹），點擊回上一屏。

### player（\`data-screen="player"\`，**本屏不顯示迷你播放列**）
- **large-title**：「正在播放」+ 左上返回鍵（▾ 收合）。
- **大正方形專輯封面**：\`assets/cover-3.webp\`，\`--r-card\`，置中、佔較大空間（但不可把下方控制推出視窗，封面寬約 = 內容寬，高 aspect-ratio:1 但整屏可捲）。
- **曲目資訊**：曲名〈晚風練習曲〉(title) + 藝人「林知夏」(body) + 專輯「島嶼晨光」(label)。
- **歌詞同步**：一行逐字高亮歌詞示意（active 字上藍 \`--accent\`，其餘 \`--text-3\`），下一行 \`--text-2\`。
- **進度條** \`.progress\`：軌 \`--sunken\`、已播段 \`--accent\`、圓 thumb；左 \`01:02\` / 右 \`02:47\`。
- **控制列**：隨機 🔀 / 上一首 ⏮ / 播放暫停大藍圓鈕（▶ ⇄ ⏸ 兩態）/ 下一首 ⏭ / 循環 🔁。
- **底部列**：音量或「無損 Hi-Res」音質徽章（藍邊膠囊）+ 歌詞 / 佇列 icon。

### library（\`data-screen="library"\`）
- **large-title**：「音樂庫」。
- **分頁 chip**：\`歌單 / 專輯 / 已下載\`（當前 active 藍膠囊）。
- **收藏歌單清單**：\`.song-row\` 樣式，左封面縮圖 + 歌單名（再次列出「浪潮回聲」「失重時刻」「島嶼晨光」「深夜公路」等）+ caption「N 首・建立者」。
- **離線下載入口列**：下載 icon + 「離線下載」+ caption「已下載 18 首・142 MB」。
- **共享音樂庫入口列**：人群 icon + 「共享音樂庫」+ 徽章「Family 方案」。

### profile（\`data-screen="profile"\`）
- **large-title**：「我的」。
- **使用者卡**：圓頭像 + 暱稱（如「島嶼旅人」）+ 「迴聲 Resona・Plus 會員」+ 編輯箭頭。
- **播放偏好設定列**：「無損音質」開關、「**跨裝置接續播放**」開關（打開態藍 \`--accent\`）。
- **3 張訂閱方案卡**（縱排）：\`免費 NT$ 0 ／月\`、\`Plus NT$ 149 ／月\`、\`Family NT$ 249 ／月\`。每卡：方案名 + 價格(title) + 2–3 條權益列 + 按鈕。**推薦方案 Plus** 用 \`--accent\` 藍邊框 + 「推薦」徽章；**目前方案** 標「目前方案」灰徽章。價格字串嚴格用 \`NT$ 0\` / \`NT$ 149\` / \`NT$ 249\`（\`NT$\` 與數字一個半形空格）+ 全形「／月」。

### tab-bar（\`data-screen="tab-bar"\`，在 \`.dock\` 內，迷你播放列下方）
固定底部，4 tab：可見文字「**首頁 / 搜尋 / 音樂庫 / 我的**」，icon + label 直排。active（預設首頁）\`--accent\` 著色 + \`--accent-soft\` 膠囊底；非 active \`--text-3\`。上方一道 1px \`--divider\`，無重陰影。

### mini-player（迷你播放列，常駐於 tab-bar 上方）
- 一條高 56px 的常駐列，**顯示於 home / search / library / profile**；**player 屏隱藏**（player 已是展開態）。
- 內容：左小封面縮圖（\`assets/cover-3.webp\`）+ 中歌名〈晚風練習曲〉(label) + 藝人「林知夏」(caption) + 右播放/暫停鍵（▶/⏸ 兩態）+ 下一首鍵。
- 點整條（封面/文字）→ 展開到 player 屏；右側播放鍵切換 ▶/⏸ 不展開。
- 視覺：白底 \`--surface\` + 頂部 1px \`--divider\` + 極淺 \`--shadow-raised\`，與 tab-bar 連成一塊 dock。

## Do / Don't

| Do | Don't |
| --- | --- |
| large-title 區高度 ≤180px，只是「標題 + 上方留白」 | 讓 large-title 用 \`flex:1\` / \`100%\` / \`50vh\` 撐滿整屏 |
| large-title 之下緊接實際內容，第一眼可見 | 內容被推到 844px 視窗以外、首屏空白 |
| 主標題 / 正文用 \`--text\` / \`--text-2\` 深色 | 用 \`--text-3\` 或近白淺灰當主要內容，低對比看似空白 |
| \`.screen-scroll\` 設 \`flex:1; min-height:0; overflow-y:auto\` | 漏 \`min-height:0\` 導致無法捲動 |
| 卡片圓角 18–28px、按鈕/搜尋框 20px 柔半圓 | 用方角或銳利小圓角 |
| 陰影極淺，靠頁底灰白與白卡對比分層 | 用深重 box-shadow 堆立體感 |
| 藍 accent 只給 CTA / active / 進度 / 選取 | 整頁灑藍、多處彩色搶眼 |
| 間距走 8pt（12–24px），有呼吸感 | 元件擠成密集列、間距 < 8px 或溢出卡片 |
| dock（迷你播放列 + tab-bar）永遠固定在底 | 讓迷你播放列隨內容捲走 / 遮住內容 |

## Motion Specification（微互動）

- 所有可點元素 \`cursor:pointer\`，並有明確 \`:hover\`（背景微亮 / 底色加深）與 \`:active\`（\`transform: scale(.97)\` 按下回饋）。
- 播放鍵兩態：\`▶\`（暫停中）/\`⏸\`（播放中）；切換時只換字元 + 微 scale。
- tab / 分頁 chip 有 active 視覺（藍膠囊底 + 藍字）。
- 卡片 \`:active\` 微縮 scale(.98)；歌單卡 \`:hover\` 抬升 \`--shadow-raised\`。
- 進度條 thumb 可顯示，已播段寬度由 inline width 控制（如 38%）。
- 一律只動 \`transform\` / \`opacity\`，附 \`@media (prefers-reduced-motion: reduce)\` 全關。

## Accessibility / 防跑版自檢

- 對比：主內容文字（標題、歌名、藝人主標）對其底色 ≥ 4.5:1；caption/時長 ≥ 3:1。
- 鍵盤可達：可點元素用 \`<button>\` 或加 \`tabindex\`，焦點環可見。
- reduced motion：關閉所有 transition / animation。
- **跑版自檢**：開頁第一眼，home 屏在 390×844 內必須看到 large-title + 至少「每日迴聲」卡或歌單卡牆的一部分（非空白）；切到其他 5 屏也都各有可見內容。

## Required Output Contract

遵循 \`.claude/agents/style-page-builder.md\` 的「**App 風格額外要求**」：

- 8 個 \`<section data-screen="<id>">\`，固定 id 與順序：\`status-bar → home → search → detail → player → library → profile → tab-bar\`，每個唯一、各出現恰一次。
- \`<body data-viewport="mobile">\` 必須存在。
- status-bar 顯示 **9:41**。
- tab-bar 四 tab 可見文字「首頁 / 搜尋 / 音樂庫 / 我的」。
- 三層定價精確字串同屏出現：\`免費 NT$ 0 ／月\`、\`Plus NT$ 149 ／月\`、\`Family NT$ 249 ／月\`（\`NT$\` 與數字間一個半形空格、後綴全形「／月」）。
- **常駐迷你播放列**：在 home/search/library/profile 上方（tab-bar 之上）顯示，player 屏隱藏。
- **可互動多畫面導覽**：tab 切換 4 屏 + 歌單卡/排行列 → detail + 曲目列/迷你播放列 → player + detail/player 有返回鍵回上一屏。用純 CSS（\`:target\` / radio + label / \`:checked\`）或 ≤8KB inline JS 實作切換。
- 品牌「迴聲 / Resona」、6 核心功能名、7 歌單名、9 歌名、5 藝人名、4 分類 chip、底部 4 tab 文字皆需出現在**可見 body 文字**中（不可只放 \`aria-label\` / \`data-*\`）。
- 單檔 HTML ≤ 200 KB（不含 \`assets/\` 圖片）、**無外部 CDN**（\`<link>\`/\`<script>\`/\`<img>\` 不可 \`http(s)://\` 開頭）、圖片用相對路徑 \`assets/<filename>.webp\`。
- 若用任何 \`@keyframes\` / \`transition\`，必附 \`@media (prefers-reduced-motion: reduce)\` 關閉，且只動 \`transform\` / \`opacity\`。

## Required Images

使用方形專輯封面圖（見 \`assets-manifest.json\`，共 6 張 \`cover-1.webp\`..\`cover-6.webp\`，size 600×600）：

- **home**「每日迴聲」banner：\`assets/cover-1.webp\`；歌單卡牆 7 張依序 \`cover-1..cover-6\`，第 7 張重用任一。
- **detail** 專輯「島嶼晨光」大封面：\`assets/cover-3.webp\`。
- **player** 大封面 + **mini-player** 縮圖：同 \`assets/cover-3.webp\`（正在播放屬該專輯）。
- **library** 歌單縮圖：循環使用 \`cover-1..cover-6\`。
- 全部相對路徑 \`assets/cover-N.webp\` 引用。
- **Fallback**：圖檔不存在時，封面以 CSS 漸層色塊呈現（\`--sunken\` → \`--accent-soft\` 柔和 135deg 漸層），版面不破。**漸層色塊不可全白**，確保與頁底有對比。

## Reference Snippet（≥60 行，可直接用）

\`\`\`css
* { box-sizing: border-box; }
body { margin: 0; background: #DDE1E7; display: grid; place-items: center; min-height: 100vh; }

/* ===== 裝置殼：鎖死 390×844、三層 flex column ===== */
.device {
  width: var(--screen-w); height: var(--screen-h);
  background: var(--bg); border-radius: var(--device-radius);
  overflow: hidden; position: relative;
  display: flex; flex-direction: column;
  font-family: var(--font); color: var(--text);
}

/* status-bar：永遠在頂，不縮 */
.statusbar {
  flex: 0 0 var(--statusbar-h); height: var(--statusbar-h);
  display: flex; align-items: center; justify-content: space-between;
  padding: 0 var(--pad); font-size: 13px; font-weight: 600;
  background: var(--bg);
}

/* 唯一可捲動內容區：min-height:0 不可漏！ */
.screen-scroll {
  flex: 1 1 auto; min-height: 0; overflow-y: auto;
  padding-bottom: calc(var(--miniplayer-h) + var(--tabbar-h) + var(--safe-bottom) + var(--s-4));
}

/* One UI 招牌：頂部適度留白 + 大粗標題（高度受控，禁止撐滿）*/
.largetitle {
  min-height: var(--largetitle-h); max-height: var(--largetitle-max);
  display: flex; flex-direction: column; justify-content: flex-end;
  padding: var(--s-8) var(--pad) var(--s-4);
}
.largetitle h1 { margin: 0; font-size: 28px; font-weight: 700; line-height: 1.2; letter-spacing: -.01em; }
.largetitle .sub { margin-top: var(--s-1); font-size: 15px; color: var(--text-2); }

/* 區段標題 + 查看全部 */
.section-head {
  display: flex; align-items: baseline; justify-content: space-between;
  padding: var(--s-5) var(--pad) var(--s-3);
}
.section-head .t { font-size: 18px; font-weight: 700; }
.section-head .more { font-size: 13px; color: var(--accent); cursor: pointer; }

/* 柔和大圓角白卡 */
.card {
  background: var(--surface); border-radius: var(--r-card);
  box-shadow: var(--shadow-card); padding: var(--s-5);
  margin: 0 var(--pad) var(--s-4);
}

/* chip 列（選取才上藍）*/
.chips { display: flex; gap: var(--s-2); padding: 0 var(--pad) var(--s-2); flex-wrap: wrap; }
.chip {
  display: inline-flex; align-items: center; padding: 8px 16px;
  border-radius: var(--r-pill); background: var(--sunken);
  color: var(--text-2); font-size: 13px; font-weight: 500; cursor: pointer;
}
.chip:active { transform: scale(.97); }
.chip[aria-selected="true"], .chip.is-active { background: var(--accent-soft); color: var(--accent); }

/* 歌單卡牆（2 欄）*/
.album-grid { display: grid; grid-template-columns: 1fr 1fr; gap: var(--s-4); padding: 0 var(--pad) var(--s-4); }
.album-card { background: var(--surface); border-radius: var(--r-sm); overflow: hidden; box-shadow: var(--shadow-card); cursor: pointer; }
.album-card:active { transform: scale(.98); }
.album-card .cover {
  aspect-ratio: 1; background: linear-gradient(135deg, var(--sunken), var(--accent-soft));
  background-size: cover; background-position: center;
}
.album-card .name { font-size: 16px; font-weight: 600; padding: var(--s-3) var(--s-3) 2px; }
.album-card .meta { font-size: 11px; color: var(--text-3); padding: 0 var(--s-3) var(--s-3); }

/* 搜尋框 */
.searchbar {
  display: flex; align-items: center; gap: var(--s-3); height: 48px;
  margin: 0 var(--pad) var(--s-4); padding: 0 var(--s-4);
  background: var(--sunken); border-radius: var(--r-field);
  color: var(--text-2); font-size: 15px; cursor: text;
}

/* 曲目 / 清單列 */
.song-row {
  display: flex; align-items: center; gap: var(--s-4);
  padding: var(--s-3) var(--pad);
  border-bottom: 1px solid var(--divider); cursor: pointer;
}
.song-row:hover { background: var(--surface-2); }
.song-row:active { transform: scale(.99); }
.song-row .idx { width: 22px; color: var(--text-3); font-size: 13px; text-align: center; }
.song-row .thumb { width: 44px; height: 44px; border-radius: 12px; flex: 0 0 auto;
  background: linear-gradient(135deg, var(--sunken), var(--accent-soft)); background-size: cover; }
.song-row .meta { flex: 1 1 auto; min-width: 0; }
.song-row .title { font-size: 16px; font-weight: 600; color: var(--text);
  overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.song-row .artist { font-size: 13px; color: var(--text-2);
  overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.song-row .dur { color: var(--text-3); font-size: 11px; flex: 0 0 auto; }
.song-row .play { flex: 0 0 auto; color: var(--text-2); cursor: pointer; }

/* 主要 CTA */
.btn-primary {
  background: var(--accent); color: var(--on-accent); border: none;
  padding: 14px 24px; border-radius: var(--r-field);
  font-weight: 600; font-size: 15px; cursor: pointer;
}
.btn-primary:hover { background: var(--accent-pressed); }
.btn-primary:active { transform: scale(.97); }
.btn-ghost {
  background: var(--surface); color: var(--text); border: 1.5px solid var(--divider);
  padding: 14px 24px; border-radius: var(--r-field); font-weight: 600; font-size: 15px; cursor: pointer;
}

/* player：大封面 + 進度 + 控制 */
.now-art {
  aspect-ratio: 1; border-radius: var(--r-card); margin: 0 var(--pad) var(--s-5);
  background: linear-gradient(135deg, var(--sunken), var(--accent-soft));
  background-size: cover; background-position: center;
}
.lyric-line { padding: 0 var(--pad) var(--s-4); font-size: 16px; color: var(--text-3); }
.lyric-line b { color: var(--accent); font-weight: 600; }
.progress { height: 4px; border-radius: var(--r-pill); background: var(--sunken); margin: 0 var(--pad); overflow: hidden; }
.progress > .played { height: 100%; width: 38%; background: var(--accent); }
.time-row { display: flex; justify-content: space-between; padding: var(--s-2) var(--pad) var(--s-5); font-size: 11px; color: var(--text-3); }
.controls { display: flex; align-items: center; justify-content: center; gap: var(--s-6); padding: 0 var(--pad) var(--s-5); }
.controls .ico { font-size: 24px; color: var(--text); cursor: pointer; }
.play-btn {
  width: 64px; height: 64px; border-radius: var(--r-pill);
  background: var(--accent); color: var(--on-accent); border: none;
  box-shadow: var(--shadow-raised); font-size: 24px; cursor: pointer;
}
.play-btn:active { transform: scale(.95); }
.badge { display: inline-flex; padding: 6px 12px; border-radius: var(--r-pill);
  border: 1.5px solid var(--accent); color: var(--accent); font-size: 11px; font-weight: 600; }

/* 訂閱方案：推薦卡上藍邊 */
.plan-card { background: var(--surface); border-radius: var(--r-card); padding: var(--s-5);
  margin: 0 var(--pad) var(--s-4); box-shadow: var(--shadow-card); border: 1.5px solid transparent; }
.plan-card.is-recommended { border-color: var(--accent); }
.plan-card .pname { font-size: 16px; font-weight: 700; }
.plan-card .price { font-size: 22px; font-weight: 700; }
.plan-tag { font-size: 11px; font-weight: 600; padding: 3px 10px; border-radius: var(--r-pill); background: var(--accent-soft); color: var(--accent); }

/* ===== dock：迷你播放列 + tab-bar，永遠固定在底 ===== */
.dock { flex: 0 0 auto; background: var(--surface); border-top: 1px solid var(--divider); box-shadow: var(--shadow-raised); }
.miniplayer {
  height: var(--miniplayer-h); display: flex; align-items: center; gap: var(--s-3);
  padding: 0 var(--s-4); border-bottom: 1px solid var(--divider); cursor: pointer;
}
.miniplayer .mp-cover { width: 40px; height: 40px; border-radius: 10px; flex: 0 0 auto;
  background: linear-gradient(135deg, var(--sunken), var(--accent-soft)); background-size: cover; }
.miniplayer .mp-meta { flex: 1 1 auto; min-width: 0; }
.miniplayer .mp-title { font-size: 13px; font-weight: 600; color: var(--text);
  overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.miniplayer .mp-artist { font-size: 11px; color: var(--text-2);
  overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.miniplayer .mp-btn { width: 36px; height: 36px; border-radius: var(--r-pill); border: none;
  background: var(--accent); color: var(--on-accent); font-size: 16px; cursor: pointer; flex: 0 0 auto; }
.miniplayer .mp-btn:active { transform: scale(.94); }

.tabbar {
  height: calc(var(--tabbar-h) + var(--safe-bottom)); display: flex;
  padding-bottom: var(--safe-bottom);
}
.tabbar .tab {
  flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center;
  gap: 3px; color: var(--text-3); font-size: 11px; font-weight: 500; cursor: pointer;
}
.tabbar .tab .ti { font-size: 20px; }
.tabbar .tab[aria-current="page"], .tabbar .tab.is-active {
  color: var(--accent);
}
.tabbar .tab[aria-current="page"] .ti { background: var(--accent-soft); border-radius: var(--r-pill); padding: 2px 14px; }

@media (prefers-reduced-motion: reduce) {
  * { animation: none !important; transition: none !important; }
}
\`\`\`
`,"../../.claude/skills/app-pixel-arcade/SKILL.md":'---\nname: app-pixel-arcade\ndescription: Use when generating a single-file mobile App screen demo for the 迴聲 Resona 音樂串流 App in Pixel Arcade style. Triggers on 8-bit、像素、Pixel Arcade、pixel art、掌機、掌上遊戲機、chiptune、NES、Game Boy、復古遊戲、點陣螢幕、CRT 掃描線、dithering 抖色、PRESS START、retro game UI、限定調色盤、像素描邊.\nuser-invocable: true\n---\n\n# 8-bit 像素機 — 迴聲 Resona\n\n## Style Philosophy\n\n8-bit 像素機（Pixel Arcade）把整個 迴聲 Resona 想像成**一台被裝進手機殼裡的復古掌上遊戲機 / chiptune 播放器**：螢幕是低解析點陣面板，覆著一層 CRT 掃描線與螢幕暗角；UI 全是**無圓角、硬邊、階梯狀像素描邊**的視窗，像 NES 對話框那種粗黑外框＋亮色內框的 9-slice 感；專輯封面不是照片，而是**像素 sprite 色塊**（粗網格 + 抖色 dithering）；進度條不是滑桿，而是一格一格亮起的「XP / 血條」格子；底部 tab-bar 是遊戲機的選單列，被游標 `▶` 選中的那一格高亮反白。聽一首歌＝玩一台掌機：到處都是 `PRESS START` 的能量。\n\n關鍵限制：**像素感全部靠純 CSS 達成，絕不外連任何點陣字型或圖檔（無 CDN）**。字體用 `ui-monospace,\'Courier New\',monospace` 放大 + 全大寫 + 寬字距，數字像記分板；像素描邊用「無圓角 + 多層階梯狀 `box-shadow`」模擬 2–3px 描邊；抖色與網格用 `repeating` 棋盤 / 條紋 background；CRT 掃描線用 `repeating-linear-gradient` 半透明橫線 overlay + radial 暗角。\n\n用在音樂串流 App，這風格傳達「復古遊戲、chiptune、digital crunch、限定調色盤的硬核懷舊」：深夜靛藍底配高彩度像素亮色（青 / 洋紅 / 檸檬 / 亮綠 / 骨白），整個 App 像一台正在跑 chiptune mixtape 的掌機。\n\n本次精修的三條鐵律：\n\n1. **零圓角、像素硬邊**：全站 `border-radius: 0`。所有視窗 / 卡片 / 按鈕的「邊框」一律用**多層階梯狀 `box-shadow`**（外層深底描邊 + 內層亮色描邊，例如 `box-shadow: 0 0 0 3px var(--ink), 0 0 0 6px var(--cyan)`）而非 `border`，做出 2–3px 像素描邊 + 立體階梯感。`border-image` 與漸層柔光一律禁止。\n2. **限定調色盤、抖色不柔光**：只用調色盤裡這 6–7 個色，**不准用平滑漸層做柔光**。需要層次時用**抖色（dithering）**——`repeating` 棋盤 / 點陣 background 模擬中間調，或 `image-rendering: pixelated` 的純 CSS 圖案。封面用 2–3 個調色盤色硬切的色塊 + 棋盤抖色，不同主色區分不同專輯。\n3. **像素 mono 全大寫 + 記分板數字 + AA 可讀**：所有文字 `ui-monospace` 等寬、`text-transform: uppercase`（中文無大小寫但英數字一律大寫）、寬字距，標題加像素描邊陰影（多層硬 `text-shadow`）。數字（9:41、時長、價格、進度）`font-variant-numeric: tabular-nums` 像記分板。亮色 on 深底務必達 WCAG AA（主文字對背景 ≥ 4.5:1）。\n\n三個視覺辨識特徵：\n\n1. **像素 sprite 封面（棋盤抖色色塊）**：每張專輯 / 歌單 / 頭像封面 = 純 CSS `conic`/`linear` 硬切色塊 + `repeating` 棋盤抖色覆層 + 像素描邊外框，不同主色（青 / 洋紅 / 檸檬 / 亮綠）區分。**絕無任何圖檔。**\n2. **格子化 XP / 血條進度條**：進度條 = 一排分段像素格（用 `repeating-linear-gradient` 切格），已播放的格亮 accent、未播放的格暗，像遊戲血條 / XP 條一格一格亮起；等化器 = 一排高低跳動的像素柱。\n3. **遊戲機選單 tab-bar + CRT 掃描線**：tab-bar 是掌機選單列，active 格被閃爍 `▶` 游標選中 + 反白高亮；整台螢幕覆一層 CRT 掃描線（半透明橫線）+ 螢幕暗角，所有可點元件按下時有「像素位移」回饋。\n\n---\n\n## Design Tokens (CSS variables)\n\n```css\n:root {\n  /* ── 手機殼尺寸（必含、鎖死，無跑版的根本） ── */\n  --screen-w: 390px;\n  --screen-h: 844px;\n  --statusbar-h: 44px;\n  --tabbar-h: 64px;             /* tab-bar 本體（含選單列高度） */\n  --miniplayer-h: 58px;        /* 迷你播放列（卡帶條）高度 */\n  --safe-bottom: 30px;         /* home indicator 安全區 */\n  --content-pad: 16px;\n  --device-radius: 0px;        /* 像素機：零圓角硬邊 */\n\n  /* ── 8pt 間距尺度（所有 margin/padding/gap 只能取這些值） ── */\n  --space-1: 4px;\n  --space-2: 8px;\n  --space-3: 12px;\n  --space-4: 16px;\n  --space-5: 20px;\n  --space-6: 24px;\n  --space-8: 32px;\n\n  /* ── 限定調色盤（深夜靛藍底 + 像素亮色，皆 on 深底達 AA） ── */\n  --bg:      #14132b;          /* 主背景：深夜靛藍 */\n  --ink:     #0d0c1d;          /* 最深：描邊外層 / 暗角 / 螢幕縫隙 */\n  --panel:   #1d1c3d;          /* 視窗 / 卡片填色（比 bg 略亮一階） */\n  --panel-2: #262450;         /* 次階填色 / hover / 選中底 */\n  --cyan:    #38e8d0;          /* 青：主 accent（播放鍵 / 進度 fill / 描邊亮層） */\n  --magenta: #ff5ca8;         /* 洋紅：次強調（active tab 游標 / 徽章 / 隨機循環 on） */\n  --lemon:   #ffe24a;         /* 檸檬：高亮 / 警示 / 推薦角標 / 等化器頂 */\n  --lime:    #6bff8e;         /* 亮綠：成功 / 已下載 / toggle on */\n  --bone:    #f4f0e4;         /* 骨白：主文字（on --bg ≥ 12:1，遠超 AA） */\n\n  /* ── 文字（皆 on --bg / --panel 達 WCAG AA） ── */\n  --text-1: #f4f0e4;          /* 主文字：骨白（on bg ≈ 13:1） */\n  --text-2: #b9b7d6;          /* 次文字：淡靛白（on bg ≈ 7.2:1，達 AA） */\n  --text-3: #8a88b4;          /* 弱文字：僅用於 ≥17px 大字或裝飾（on bg ≈ 4.6:1） */\n  --text-on-cyan:    #0d0c1d; /* 青底上的深字（對 cyan ≈ 9:1） */\n  --text-on-magenta: #1a0a14; /* 洋紅底上的深字（對 magenta ≈ 6.8:1） */\n  --text-on-lemon:   #14132b; /* 檸檬底上的深字（對 lemon ≈ 12:1） */\n\n  /* ── 材質：像素描邊（多層階梯 box-shadow，取代 border） ── */\n  --edge-cyan:    0 0 0 3px var(--ink), 0 0 0 6px var(--cyan);\n  --edge-magenta: 0 0 0 3px var(--ink), 0 0 0 6px var(--magenta);\n  --edge-lemon:   0 0 0 3px var(--ink), 0 0 0 6px var(--lemon);\n  --edge-bone:    0 0 0 3px var(--ink), 0 0 0 6px var(--bone);\n  --edge-soft:    0 0 0 2px var(--ink), 0 0 0 4px var(--panel-2);  /* 內分隔 / 次卡 */\n  --pixel-shadow: 4px 4px 0 0 var(--ink);   /* 硬位移像素投影（無模糊） */\n  --pixel-shadow-sm: 3px 3px 0 0 var(--ink);\n\n  /* ── 材質：抖色 / 網格 / 掃描線 pattern ── */\n  --dither: repeating-conic-gradient(            /* 2px 棋盤抖色 */\n      rgba(255,255,255,0.06) 0% 25%, transparent 0% 50%) 0 0 / 4px 4px;\n  --grid: repeating-linear-gradient(0deg, rgba(255,255,255,0.04) 0 1px, transparent 1px 8px),\n          repeating-linear-gradient(90deg, rgba(255,255,255,0.04) 0 1px, transparent 1px 8px);\n  --scanlines: repeating-linear-gradient(0deg,\n      rgba(13,12,29,0.00) 0 2px, rgba(13,12,29,0.22) 2px 3px);  /* CRT 掃描線 */\n  --vignette: radial-gradient(120% 90% at 50% 45%, transparent 55%, rgba(13,12,29,0.55) 100%);\n\n  /* ── 互動 / 強調 ── */\n  --accent: var(--cyan);\n  --accent-2: var(--magenta);\n  --hover-veil: rgba(255,255,255,0.07);\n  --press-shift: 2px;          /* 按下時像素位移量 */\n\n  /* ── 圓角：像素機一律 0 ── */\n  --radius: 0;\n\n  /* ── 字體（純系統 mono，無外連點陣字型） ── */\n  --font: ui-monospace, \'SFMono-Regular\', \'Cascadia Mono\', \'Courier New\', monospace;\n\n  /* ── 動效（step timing 製造格放感） ── */\n  --ease-step: steps(4, end);\n  --ease-step-2: steps(2, end);\n  --dur-fast: 90ms;\n  --dur: 160ms;\n}\n```\n\n---\n\n## Typography Scale\n\n| 級距 | 大小 / 行高 / 字重 / 字距 / 變換 | 顏色 | 用途 |\n| --- | --- | --- | --- |\n| caption | 10px / 1.3 / 700 / +1.5px / uppercase | `--text-3` | tab 標籤、播放次數、徽章副字、格子說明 |\n| label | 12px / 1.4 / 700 / +0.8px / uppercase | `--text-2` | chip 文字、卡片副標、時長、藝人名 |\n| body | 13px / 1.6 / 500 / +0.3px | `--text-2` | 段落、方案權益、說明文字 |\n| row-title | 15px / 1.35 / 700 / +0.5px / uppercase | `--text-1` | 歌名、歌單卡標題、列項主文字、迷你播放列歌名 |\n| section | 17px / 1.2 / 800 / +1px / uppercase | `--text-1` | 區塊標題（如「每日迴聲 DAILY ECHO」） |\n| display | 24px / 1.1 / 800 / +1.5px / uppercase | `--text-1` | home 品牌大標、player 曲名（加像素描邊陰影） |\n| hud | 11px / 1 / 700 / +2px / uppercase | `--lemon` | 記分板小字（PRESS START / SCORE / LV 等 HUD 點綴） |\n\n- 全部用 `--font`（等寬 mono），**所有英數字 `text-transform: uppercase` + 寬字距**製造像素機標籤感；中文維持原樣但同樣套寬字距。\n- 數字（時間 9:41、價格、時長、進度、等化器數值）一律 `font-variant-numeric: tabular-nums`，對齊得像記分板。\n- 標題（section / display）加**多層硬 `text-shadow`** 模擬像素描邊：`text-shadow: 2px 2px 0 var(--ink), 3px 3px 0 var(--accent-2);`（無 blur）。\n- `--text-3` 弱文字只准用在 ≥17px 大字或純裝飾 HUD；正文與小字一律 `--text-2` 以上確保 AA。\n- 標題與正文間固定 `--space-3` 縱距；區段之間固定 `--space-6`。**禁用任何襯線字體**（與像素衝突）。\n\n---\n\n## Component & Layout\n\n整體結構：最外層 `.device`（390×844 掌機螢幕，`overflow:hidden`、`border-radius:0`、深靛底 + `--grid` 網格底）→ 螢幕覆層 `.crt`（絕對定位鋪滿、`--scanlines` + `--vignette`、`pointer-events:none`、`z-index:9`，CRT 掃描線與暗角）→ `.statusbar`（固定頂、像素 HUD、`z-index:5`）→ `.viewport`（中間可捲動畫面容器、`z-index:1`，依序堆 home/search/detail/player/library/profile 六個 `data-screen`，每次只顯示一個）→ `.dock`（底部固定區，含 `.miniplayer`（卡帶條）+ `.tabbar`（選單列）、`z-index:5`）。\n\n8 個 `<section data-screen>` 順序固定且各恰一次：`status-bar` → `home` → `search` → `detail` → `player` → `library` → `profile` → `tab-bar`。\n\n### 跨畫面導覽模型（依 B2，無跑版的骨架）\n\n- 用 class 切換：`.screen { display:none }`，**只有** `.screen.is-active { display:flex; flex-direction:column }` 顯示（**嚴禁**任何畫面專屬 class 無條件設 `display`，否則永久疊層）。JS 點 tab / 卡片 / 曲目列 / 卡帶條 / 返回鍵時切換 active screen 並同步 tab-bar active 態。**JS 失效時** `home` 為預設 `is-active`，仍可讀完整內容。\n- 導覽行為全部接好（用 `data-go` 委派 click）：tab → 切 home/search/library/profile；home/library/search 歌單或專輯卡（`data-go="detail"`）→ 開 detail；detail 任一曲目 / 卡帶條 / 任一播放鍵（`data-go="player"`）→ 開 player；detail / player 左上返回鍵（`data-go="back"`）→ 回上一畫面。\n- **裝置容器三段式鎖定**：status-bar 永遠在頂、`.dock`（miniplayer + tab-bar）永遠在底、中間 `.viewport` 為當前畫面唯一可捲動區。`.viewport` 高 = `calc(--screen-h - --statusbar-h - --tabbar-h - --safe-bottom)`，每個 `.screen` 內部各自 `overflow-y:auto`，底部 padding 預留卡帶條高度，內容絕不被遮擋、不溢出、不被裁切。\n- **進入 player 時隱藏整個 dock**（見 player 段），返回時恢復。\n\n### status-bar（`data-screen="status-bar"`）\n\n- 高 `--statusbar-h`，深 `--ink` 底 + 底緣一條 `--cyan` 像素描邊線。像素機 HUD 風：左側時間 **9:41**（tabular-nums，骨白 + 像素描邊陰影）；右側並排訊號格（█▌▍ 階梯方塊純 CSS 繪製）、Wi-Fi（▲ / 階梯方塊）、電量符號（█ 格子電池）。可加一處小 `--lemon` HUD 點綴如 `LV 8`。\n- 固定於螢幕頂、不隨內容捲動、永遠在最上層（但在 `.crt` 掃描線之下）。\n\n### home（`data-screen="home"`）\n\n至少三區段，每區段有 section 標題列（左標題雙語如「每日迴聲 DAILY ECHO」+ 右「ALL ▸」連結，cursor:pointer + hover）：\n\n1. **頂部 HUD 列**：左側品牌大標「**迴聲 Resona**」（display，加像素描邊陰影）+ slogan「讓每首歌，回到你身上」；右側頭像（像素 sprite 方塊）。下方一行 HUD 點綴：`PRESS START ▸` 閃爍字。\n2. **4 分類 chip 橫排**：華語 / 獨立 / 電子 / 放鬆，膠囊改為**方形像素 chip**（零圓角 + 像素描邊），首個 active（反白 + `--cyan` 描邊 + 前綴 `▶`）。\n3. **每日迴聲（個人化每日推薦 banner）**：一張橫幅像素視窗（`--panel` + `--edge-cyan` 描邊 + `--pixel-shadow` 硬投影），左像素 sprite 封面 + 「每日迴聲」標題 + 個人化文案（露出「**個人化每日推薦**」功能名）+ 大像素播放鍵（CSS 階梯三角 ▶）。露出「**無損音質串流**」徽章（lemon 方標）。\n4. **為你精選歌單**：section 標題「為你精選歌單 PLAYLISTS」+「ALL ▸」。**7 個歌單卡**兩欄像素網格（浪潮回聲 / 深夜公路 / 島嶼晨光 / 雨後散步 / 城市心跳 / 山海之間 / 失重時刻），每卡 = 像素 sprite 封面（不同主色 + 棋盤抖色）+ 像素標題列 + 曲數副字。卡 `data-go="detail"`。\n5. **熱門排行（記分板榜）**：section 標題「熱門排行 TOP CHART」+「ALL ▸」，編號清單（1–5，記分板數字 + `--lemon`），每列 = 排名數字 + 小 sprite 封面 + 歌名 + 藝人 + 時長 + 像素播放鍵。`data-go="player"`。\n\n### search（`data-screen="search"`）\n\n- 頂部**像素搜尋框**（零圓角 `--panel` + `--edge-soft` 描邊 + 放大鏡 ⌕ + placeholder「搜尋歌曲、藝人、歌單 SEARCH」+ 末端閃爍 `_` 游標）。\n- 下方 4 分類 chip（華語 / 獨立 / 電子 / 放鬆，方形像素 chip）。\n- **熱門歌曲（記分板清單）**：section 標題「熱門歌曲 HOT TRACKS」，**編號清單**（含時長）——海平面樂團〈藍色信號〉、林知夏〈晚風練習曲〉、夜行列車〈霓虹巷弄〉、Echo Lab〈靜電〉、何遠〈無人車站〉……每列 = 序號（記分板）+ 小 sprite 封面 + 歌名 + 藝人 + 時長 + 像素播放鍵（`data-go="player"`）。\n- **熱門藝人**：section 標題「熱門藝人 ARTISTS」+ 橫向像素膠囊（sprite 頭像方塊 + 藝人名）：海平面樂團 / 林知夏 / 夜行列車 / Echo Lab / 何遠。\n\n### detail（`data-screen="detail"`）\n\n- 左上**像素圓形返回鍵**（方形零圓角 + `‹` + `--edge-soft`，`data-go="back"`，cursor:pointer + hover/active）。\n- **大 sprite 封面**：頂部大張像素封面（純 CSS 硬切色塊 + 棋盤抖色 + `--edge-cyan` 描邊，主色呼應島嶼晨光）。\n- 資訊區：專輯名 **島嶼晨光** / 藝人 **林知夏** / 年份 **2026** / **9 首** / 總時長 **34:12**（全大寫 + tabular-nums）。\n- 動作列：**播放全部 PLAY**（`--cyan` 大像素鍵 + 階梯 ▶ + `--text-on-cyan` 深字 + `--pixel-shadow`）+ **隨機播放 SHUFFLE**（`--panel` 次像素鍵）。\n- **完整 9 曲目清單**（藍色信號 / 霓虹巷弄 / 候鳥地圖 / 靜電 / 晚風練習曲 / 無人車站 / 潮間帶 / 第七個夏天 / 月台九又四分之三），每列像素 `.song-row`（`--edge-soft`）：曲序（記分板）+ 歌名 + 藝人（林知夏）+ 時長 + 行尾像素播放鍵 / 選單（⋯）。每列 `data-go="player"`。\n\n### player（`data-screen="player"`）\n\n沉浸像素 now-playing 面板，**進入時隱藏整個 `.dock`**（卡帶條 + tab-bar），整個 player `height:100%; display:flex; flex-direction:column`，**所有控制永遠固定在 844 內、不靠捲動、不被遮擋**：\n\n- 頂列：左上**像素返回鍵**（`⌄` 收合，`data-go="back"`）+ 中央 HUD「NOW PLAYING」+ 右側選單（⋯）。\n- **大 sprite 封面**：`flex:1; min-height:0`（可壓縮）的置中像素方塊（純 CSS 硬切色塊 + 棋盤抖色 + `--edge-cyan` 描邊，主色呼應島嶼晨光），上方可疊一排跳動**等化器像素柱**。\n- 正在播放：**林知夏 —〈晚風練習曲〉**（display + 像素描邊陰影），副字專輯「島嶼晨光」。\n- **歌詞同步**：一行逐字高亮示意（高亮字 `--lemon`，其餘 `--text-3`），露出「**歌詞同步**」功能名。\n- **格子化進度條** `.progress`（XP / 血條格子：`repeating-linear-gradient` 切格，已播放格亮 `--cyan`、未播暗），左 **01:12** / 右 **02:47**（tabular-nums，記分板）。\n- 控制列：隨機（⤮）/ 上一首（⏮）/ **播放暫停大像素圓鍵（階梯 ▶ / ⏸ 兩態）** / 下一首（⏭）/ 循環（⟳）。隨機與循環 active 上 `--magenta`。\n- 底部固定：**Hi-Res 無損音質**徽章（lemon 方標）+ 音量像素格子滑桿。**以上控制 / 進度 / 徽章必須恆在可視區、不溢出 844。**\n\n### library（`data-screen="library"`）\n\n- 「**我的音樂庫 LIBRARY**」標題（section）。\n- 分頁列（像素 segmented：零圓角方格 + `--edge-soft`，active 反白 + `--cyan`）：**歌單 / 專輯 / 已下載**，首個 active。\n- **收藏歌單清單**：每列 = 像素 sprite 縮圖 + 標題（複用歌單名）+ 曲數副字 + 行尾箭頭（▸），`data-go="detail"`。\n- **離線下載**功能列（像素 list-item + 「已下載」`--lime` 方狀態徽章），露出「**離線下載**」功能名。\n- **共享音樂庫**功能列（像素 list-item + **方形像素 toggle 開關**：on 為 `--lime` 反白滑塊），露出「**共享音樂庫**」功能名。\n\n### profile（`data-screen="profile"`）\n\n- **使用者卡**：sprite 頭像方塊 + 暱稱 + 會員狀態行（像素強調卡 + `--edge-cyan`）。可加 HUD 點綴 `LV 8 / SCORE 1042`。\n- **播放偏好**列表：音質、等化器、**跨裝置接續播放**（方形像素 toggle，預設 on＝`--lime`），露出「**跨裝置接續播放**」功能名。\n- **3 訂閱方案卡**（像素卡堆疊）：\n  - **免費** — `NT$ 0 ／月` — 標「目前方案」（`--panel` 卡 + `--edge-soft`）。\n  - **Plus** — `NT$ 149 ／月` — 標「推薦」，強調卡（`--edge-lemon` + `--pixel-shadow` + 右上 `--lemon` 角標 ★）。\n  - **Family** — `NT$ 249 ／月`（`--edge-soft`）。\n  - 每卡含 2–3 條權益小字。價格 tabular-nums、`NT$` 與數字間一個半形空格、後綴全形「／月」。\n\n### mini-player（卡帶條，常駐）\n\n- 一條貼在 tab-bar **正上方**的像素「卡帶條」（`--panel` + 頂緣 `--cyan` 像素描邊線），高 `--miniplayer-h`。\n- 內容：左小 sprite 封面 + 歌名「晚風練習曲」+ 藝人「林知夏」+ 右側**像素播放/暫停鍵（階梯 ▶ / ⏸）**。\n- 顯示於 **home / search / library / profile**；**player 畫面隱藏**（`.is-player .dock { display:none }`，整個 dock 一起藏）。\n- 整條 cursor:pointer，`data-go="player"`，點擊（播放鍵以外區域）展開到 player；點播放鍵切換 ▶/⏸ 兩態。\n- 底部含一條**格子化進度線**（XP 格子，與 player 同步示意）。\n\n### tab-bar（`data-screen="tab-bar"`）\n\n- 固定底部**遊戲機選單列**：`--ink` 底 + 頂緣 `--cyan` 像素描邊線 + `--pixel-shadow`，4 tab：**首頁 / 搜尋 / 音樂庫 / 我的**，各 = 像素 icon（CSS 方塊繪製）+ 全大寫標籤。\n- active tab = **被游標選中的高亮反白格**：填 `--cyan`、`--text-on-cyan` 深字、前綴閃爍 `▶` 游標。每 tab cursor:pointer + hover/active 回饋（hover 疊 `--hover-veil`，active 像素位移）。\n- 預留 `--safe-bottom` 安全區。tab-bar 與其上卡帶條一起構成「永遠在底」的 `.dock`。\n\n### 封面繪製規範（重要）\n\n**所有專輯 / 歌單 / 頭像 / 排名 sprite 封面一律純 CSS**——用 `linear-gradient` / `conic-gradient` 做**硬切**色塊（調色盤色，禁柔光漸層）+ `repeating-conic-gradient` 棋盤抖色覆層（`--dither`）+ 像素描邊外框，可疊簡單像素圖形（方塊 / 階梯三角）。不同封面用不同主色（青 / 洋紅 / 檸檬 / 亮綠）區分。**不得引用任何 `assets/*.webp` 圖檔，不得出現 `<img>`。**\n\n---\n\n## Do / Don\'t\n\n| Do | Don\'t |\n| --- | --- |\n| 全站 `border-radius: 0`，邊框用多層階梯 `box-shadow` 做像素描邊 | 用圓角 / `border-radius` / `border-image`（破壞像素硬邊） |\n| 層次用抖色（棋盤 / 點陣 `repeating` pattern）製造中間調 | 用平滑漸層柔光、`blur()`、玻璃模糊（與像素衝突） |\n| 封面用調色盤色硬切色塊 + 棋盤抖色，不同主色區分 | 引用點陣圖 / `<img src="assets/...">` / 寫實照片 |\n| 文字 mono 等寬 + 全大寫英數 + 寬字距，標題加硬 text-shadow 描邊 | 用襯線 / 比例字體 / 柔陰影模糊 |\n| 進度條做成一格一格的 XP / 血條格子；等化器做像素柱 | 用平滑滑桿 / 連續漸層進度 |\n| tab-bar active 格反白高亮 + `▶` 游標選中感 | active 態無區別 / 只變淡 |\n| 數字（時間 / 時長 / 價格 / 進度）tabular-nums 記分板對齊 | 比例字寬數字導致跳動 |\n| 按下時用像素位移（translate `--press-shift`）+ 投影縮回回饋 | 元件無 hover/active 態 / 用 scale 平滑縮放柔化 |\n| 只用調色盤 6–7 色，亮色 on 深底達 WCAG AA | 隨手加調色盤外的色 / 低對比文字 |\n| 間距只取 8pt 尺度（4/8/12/16/20/24/32） | 隨手寫 7px / 13px / 19px 破壞節奏 |\n| 動畫用 `steps()` timing 製造格放感 | 用平滑 `ease`/`cubic-bezier` 緩動（不像 8-bit） |\n\n---\n\n## Motion Specification\n\n- **格放感優先**：所有動畫的 `animation-timing-function` / `transition-timing-function` 盡量用 `steps()`（如 `--ease-step` = `steps(4,end)`），讓動態「一格一格跳」而非平滑緩動，符合 8-bit 幀感。\n- **CRT 掃描線**：`.crt` overlay 為靜態（或極緩 1–2px 掃描線微移 `@keyframes scan`），`pointer-events:none`，不影響操作；reduced motion 下完全靜態。\n- **HUD 閃爍**：`PRESS START` / tab `▶` 游標 / 搜尋框 `_` 用 `@keyframes blink`（`steps(1)` 兩態 opacity 切換，1s 循環）製造光標閃爍。\n- **等化器像素柱**：player 封面上一排像素柱用 `@keyframes eq`（不同 `animation-delay` + `transform: scaleY()`，`steps()` timing）跳動；只動 `transform`。\n- **microinteractions**：\n  - 可點元素 `transition: transform var(--dur-fast) var(--ease-step), background var(--dur);`，`:hover` 疊 `--hover-veil`，`:active { transform: translate(var(--press-shift), var(--press-shift)); }`（像素位移）+ 投影縮為 `--pixel-shadow-sm`，做出「按鍵被壓下」實體感。\n  - 播放鍵點擊在階梯 ▶ / ⏸ 兩態間切換（JS 改 class + textContent）。\n  - chip / tab / 分頁 active 切換用 background + color 即時或 `steps(2)` 過渡。\n- **進度條 / 等化器**：純 CSS 格子示意即可；進度可選用 `steps()` 過渡讓格子「一格一格亮起」。\n- 動畫屬性只動 `transform` / `opacity`（掃描線微移、按壓位移、等化器、閃爍）；進度寬度屬靜態示意，不放捲動熱路徑。\n- **不使用任何外部動畫庫 / 外部點陣字型。**\n\n## Accessibility (Reduced Motion)\n\n```css\n@media (prefers-reduced-motion: reduce) {\n  *, *::before, *::after {\n    animation: none !important;\n    transition: none !important;\n    scroll-behavior: auto !important;\n  }\n  .crt { /* 掃描線改靜態，仍保留視覺但不動 */ animation: none !important; }\n}\n```\n\n- CRT 掃描線微移、等化器跳動、HUD 閃爍、按壓位移在 reduced motion 下全部停用；掃描線 / 等化器改為靜態幀仍呈現完整像素質感。\n- 內容（所有歌名 / 藝人 / 價格 / 功能名 / 品牌）在 JS 失效或 reduced motion 下仍完整可讀（`home` 預設可見）。\n- 像素文字維持 WCAG AA：主文字骨白 `#f4f0e4`（on `--bg` ≈ 13:1）、次文字 `#b9b7d6`（≈ 7.2:1）；弱文字 `#8a88b4`（≈ 4.6:1）只用在 ≥17px 大字。亮色按鍵上的深字（`--text-on-cyan` / `--text-on-lemon`）皆 ≥ 4.5:1。\n\n---\n\n## Required Output Contract\n\n遵循 `.claude/agents/style-page-builder.md` 的「**App 風格額外要求**」：\n\n- **8 個 `<section data-screen="<id>">`**，固定 id 與順序：`status-bar` → `home` → `search` → `detail` → `player` → `library` → `profile` → `tab-bar`，各恰一次。常見漏洞：只寫 `id=` 漏寫 `data-screen=`，務必兩者都加。\n- **`<body data-viewport="mobile">`** 必須存在（驗證辨識依據）。\n- **status-bar 顯示 9:41**（tabular-nums，可見文字）+ 訊號 / 電量像素符號。\n- **tab-bar 四 tab**：可見文字「首頁 / 搜尋 / 音樂庫 / 我的」，active 態為反白 + `▶` 游標選中格。\n- **卡帶條（迷你播放列）**常駐於 home/search/library/profile、player 畫面隱藏（整個 dock 一起藏）；點擊展開 player、播放鍵 ▶/⏸ 兩態。\n- **player 在 390×844 內完整顯示**：進入隱藏整個 dock，`height:100%; flex column`，封面 `flex:1; min-height:0`，控制 / 進度 / 徽章恆在可視區、不靠捲動、不被遮擋、不溢出。\n- **三層訂閱方案精確字串**同屏出現於 profile：`免費` / `NT$ 0 ／月`、`Plus` / `NT$ 149 ／月`、`Family` / `NT$ 249 ／月`（`NT$` 與數字間一個半形空格、後綴全形「／月」），並標「推薦」與「目前方案」。\n- **可互動多畫面導覽**（`data-go` 委派）：tab 切換 + 卡片→detail + 曲目/卡帶條→player + detail/player 返回鍵，全部接好；JS 失效時 `home` 預設可見。**畫面切換 CSS 規則**：`.screen{display:none}`、僅 `.screen.is-active{display:flex}`，嚴禁畫面專屬 class 無條件設 display。\n- **權威字串全在可見 body 文字**（不可只放 `aria-label` / `data-*`）：品牌「迴聲 / Resona」、6 核心功能（無損音質串流 / 離線下載 / 共享音樂庫 / 跨裝置接續播放 / 歌詞同步 / 個人化每日推薦）、7 歌單（浪潮回聲 / 深夜公路 / 島嶼晨光 / 雨後散步 / 城市心跳 / 山海之間 / 失重時刻）、9 歌名（藍色信號 / 霓虹巷弄 / 候鳥地圖 / 靜電 / 晚風練習曲 / 無人車站 / 潮間帶 / 第七個夏天 / 月台九又四分之三）、5 藝人（海平面樂團 / 林知夏 / 夜行列車 / Echo Lab / 何遠）、4 分類 chip（華語 / 獨立 / 電子 / 放鬆）、正在播放「林知夏 —〈晚風練習曲〉」。\n- **無跑版**：裝置容器鎖 390×844、status-bar 永遠在頂、dock（卡帶條 + tab-bar）永遠在底、中間為當前畫面可捲動區、內容不被遮擋、文字不溢出/不被裁切、padding 充足。\n- **單檔 HTML ≤ 200 KB**；**無外部 CDN**（`<link>` / `<script>` / `<img>` 的 src/href 不可 `http://` 或 `https://`，含禁止外連任何點陣字型）；繁體中文；CSS 變數驅動、不得用 Tailwind 等 framework CSS。inline `<script>` ≤ 8 KB。\n- **動畫政策**：使用任何 `@keyframes` / `transition` 必附 `@media (prefers-reduced-motion: reduce)`，只動 `transform` / `opacity`。\n\n## Required Images\n\n**此風格不使用任何點陣圖。** `assets-manifest.json` 為 `{ "style": "8-bit 像素機 Pixel Arcade", "images": [] }`。所有封面 / sprite / 圖示 / 抖色 / 掃描線一律純 CSS（`linear-gradient` / `conic-gradient` 硬切色塊 + `repeating-conic-gradient` 棋盤抖色 + 多層 `box-shadow` 像素描邊 + CSS 方塊 / 階梯三角繪製），**頁面不得引用任何圖檔、不得外連任何點陣字型**、不得出現指向 `assets/` 的 `<img>`。像素感是 CSS 技法，不是素材。\n\n---\n\n## Reference Snippet\n\n```css\n/* ── 掌機螢幕殼（零圓角、網格底） ── */\n.device {\n  position: relative;\n  width: var(--screen-w);\n  height: var(--screen-h);\n  margin: 0 auto;\n  overflow: hidden;\n  border-radius: var(--radius);          /* 0：像素硬邊 */\n  background: var(--bg);\n  background-image: var(--grid);\n  font-family: var(--font);\n  color: var(--text-1);\n  box-shadow: 0 0 0 4px var(--ink), 0 0 0 8px #2b2960;  /* 機殼像素描邊 */\n  display: flex;\n  flex-direction: column;\n}\n\n/* ── CRT 掃描線 + 螢幕暗角覆層（不擋操作） ── */\n.crt {\n  position: absolute; inset: 0; z-index: 9; pointer-events: none;\n  background: var(--scanlines), var(--vignette);\n  mix-blend-mode: multiply;\n  animation: scan 8s steps(2, end) infinite;\n}\n@keyframes scan { 0% { background-position: 0 0; } 100% { background-position: 0 3px; } }\n\n/* ── 通用像素視窗（NES 對話框感：多層階梯描邊 + 硬投影） ── */\n.win {\n  background: var(--panel);\n  background-image: var(--dither);       /* 棋盤抖色覆層 */\n  box-shadow: var(--edge-cyan), var(--pixel-shadow);\n  border-radius: 0;\n  transition: transform var(--dur-fast) var(--ease-step),\n              box-shadow var(--dur) var(--ease-step);\n}\n.win.is-tap { cursor: pointer; }\n.win.is-tap:hover  { background-color: var(--panel-2); }\n.win.is-tap:active { transform: translate(var(--press-shift), var(--press-shift));\n                     box-shadow: var(--edge-cyan), var(--pixel-shadow-sm); }\n\n/* ── status-bar（HUD，固定頂） ── */\n.statusbar {\n  position: relative; z-index: 5; flex: 0 0 auto;\n  display: flex; align-items: center; justify-content: space-between;\n  height: var(--statusbar-h); padding: 0 var(--space-4);\n  background: var(--ink); box-shadow: inset 0 -3px 0 var(--cyan);\n  font-size: 12px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase;\n  font-variant-numeric: tabular-nums; color: var(--text-1);\n}\n.statusbar .clock { text-shadow: 2px 2px 0 var(--ink); }\n\n/* ── 中段：唯一可捲動畫面容器 ── */\n.viewport { position: relative; z-index: 1; flex: 1 1 auto; min-height: 0; }\n.screen { display: none; height: 100%; overflow-y: auto;\n  padding: var(--space-4) var(--content-pad) calc(var(--miniplayer-h) + var(--space-4)); }\n.screen.is-active { display: flex; flex-direction: column; }   /* 唯一啟用 display 的規則 */\n\n/* ── 區段標題（雙語 + 像素描邊陰影） ── */\n.section-head { display:flex; align-items:baseline; justify-content:space-between;\n  margin: var(--space-6) 0 var(--space-3); }\n.section-head h2 { font-size:17px; font-weight:800; letter-spacing:1px;\n  text-transform:uppercase; text-shadow: 2px 2px 0 var(--ink), 3px 3px 0 var(--magenta); }\n.section-head a { font-size:10px; font-weight:700; letter-spacing:1.5px;\n  text-transform:uppercase; color:var(--text-2); cursor:pointer; }\n.section-head a:hover { color: var(--lemon); }\n\n/* ── 像素 sprite 封面（硬切色塊 + 棋盤抖色 + 描邊；不同主色換變數） ── */\n.cover {\n  aspect-ratio: 1; border-radius: 0;\n  background:\n    var(--dither),\n    linear-gradient(135deg, var(--cyan) 0 50%, var(--magenta) 50% 100%);\n  box-shadow: var(--edge-cyan);\n  image-rendering: pixelated;\n}\n.cover.c-lemon { background: var(--dither),\n  linear-gradient(135deg, var(--lemon) 0 50%, var(--lime) 50% 100%);\n  box-shadow: var(--edge-lemon); }\n\n/* ── 階梯像素播放三角 ▶（純 CSS，無圓角） ── */\n.play-btn {\n  width: 56px; height: 56px; border-radius: 0; border: none; cursor: pointer;\n  background: var(--cyan); color: var(--text-on-cyan);\n  box-shadow: var(--edge-bone), var(--pixel-shadow);\n  display: grid; place-items: center; font-size: 18px;\n  transition: transform var(--dur-fast) var(--ease-step);\n}\n.play-btn:active { transform: translate(var(--press-shift), var(--press-shift));\n  box-shadow: var(--edge-bone), var(--pixel-shadow-sm); }\n.play-btn .tri {                /* 階梯像素三角，靠 clip-path 多點折線 */\n  width: 0; height: 0; border-left: 14px solid currentColor;\n  border-top: 9px solid transparent; border-bottom: 9px solid transparent; }\n\n/* ── 格子化 XP / 血條進度條（一格一格） ── */\n.progress {\n  height: 14px; border-radius: 0; box-shadow: var(--edge-soft);\n  background:\n    linear-gradient(90deg, var(--cyan) 0 var(--p,42%), var(--panel) var(--p,42%) 100%),\n    repeating-linear-gradient(90deg, transparent 0 10px, var(--ink) 10px 12px); /* 切格縫 */\n  background-blend-mode: normal;\n}\n\n/* ── 等化器像素柱（player 封面上跳動） ── */\n.eq { display:flex; align-items:flex-end; gap:3px; height:24px; }\n.eq i { width:5px; background: var(--lemon); transform-origin:bottom;\n  animation: eq 600ms steps(4,end) infinite alternate; }\n.eq i:nth-child(2){ animation-delay:120ms } .eq i:nth-child(3){ animation-delay:240ms }\n.eq i:nth-child(4){ animation-delay:80ms }  .eq i:nth-child(5){ animation-delay:300ms }\n@keyframes eq { from { transform: scaleY(.25);} to { transform: scaleY(1);} }\n\n/* ── 方形像素 chip ── */\n.chip {\n  padding: var(--space-2) var(--space-3); border-radius: 0;\n  background: var(--panel); box-shadow: var(--edge-soft);\n  color: var(--text-2); font-size: 12px; font-weight: 700; letter-spacing:.8px;\n  text-transform: uppercase; cursor: pointer;\n  transition: background var(--dur), color var(--dur); }\n.chip:hover { color: var(--lemon); }\n.chip[aria-selected="true"] { background: var(--cyan); color: var(--text-on-cyan);\n  box-shadow: var(--edge-bone); }\n.chip[aria-selected="true"]::before { content:"▶ "; }\n\n/* ── 卡帶條（迷你播放列，常駐 dock 內、player 隱藏） ── */\n.miniplayer {\n  display: flex; align-items: center; gap: var(--space-3);\n  height: var(--miniplayer-h); margin: 0; padding: 0 var(--space-3);\n  background: var(--panel); box-shadow: inset 0 3px 0 var(--cyan); cursor: pointer; }\n.miniplayer .mp-cover { width:40px; height:40px; box-shadow: var(--edge-soft); }\n.miniplayer .mp-title { font-size:13px; font-weight:700; letter-spacing:.5px;\n  text-transform:uppercase; color:var(--text-1); }\n.miniplayer .mp-play  { margin-left:auto; cursor:pointer; color:var(--cyan); }\n\n/* ── dock（卡帶條 + tab-bar），player 整個藏 ── */\n.dock { position: relative; z-index: 5; flex: 0 0 auto; }\n.is-player .dock { display: none; }\n\n/* ── tab-bar（遊戲機選單列，固定底） ── */\n.tabbar {\n  display: flex; justify-content: space-around; align-items: center;\n  height: var(--tabbar-h); padding-bottom: var(--safe-bottom);\n  background: var(--ink); box-shadow: inset 0 3px 0 var(--cyan), var(--pixel-shadow);\n  border-radius: 0; }\n.tab { font-size: 10px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase;\n  color: var(--text-3); text-align:center; cursor:pointer; padding: var(--space-1) var(--space-2);\n  transition: color var(--dur), background var(--dur); }\n.tab:hover { color: var(--text-2); background: var(--hover-veil); }\n.tab[aria-current="page"] {                       /* 被游標選中的反白格 */\n  background: var(--cyan); color: var(--text-on-cyan); }\n.tab[aria-current="page"] .cur { animation: blink 1s steps(1) infinite; }  /* ▶ 游標閃爍 */\n\n/* ── HUD 閃爍（PRESS START / 游標 / 搜尋 _ ） ── */\n.blink { animation: blink 1s steps(1) infinite; color: var(--lemon); }\n@keyframes blink { 0%,49% { opacity:1 } 50%,100% { opacity:0 } }\n\n/* ── 訂閱方案：Plus 推薦卡 ── */\n.plan { padding: var(--space-4); background: var(--panel); box-shadow: var(--edge-soft);\n  border-radius: 0; }\n.plan.is-featured { box-shadow: var(--edge-lemon), var(--pixel-shadow); }\n.plan .price { font-size: 17px; font-weight: 800; letter-spacing:.5px;\n  font-variant-numeric: tabular-nums; color: var(--lemon); }\n.plan .badge { font-size:10px; font-weight:700; letter-spacing:1px;\n  text-transform:uppercase; color:var(--text-on-lemon); background:var(--lemon);\n  padding:2px 6px; }\n\n@media (prefers-reduced-motion: reduce) {\n  *, *::before, *::after { animation: none !important; transition: none !important; }\n}\n```\n',"../../.claude/skills/app-riso/SKILL.md":`---
name: app-riso
description: Use when generating a single-file mobile App screen demo for the 迴聲 Resona 音樂串流 App in Risograph style. Triggers on Risograph、孔版印刷、孔版、絲網印刷、screen print、riso、riso print、半色調、halftone、網點、套印錯位、misregistration、疊印、overprint、油墨顆粒、ink grain、zine、獨立廠牌印刷、螢光粉、寶藍、紙色奶油。
user-invocable: true
---

# 孔版印刷 — 迴聲 Resona

## Style Philosophy

孔版印刷（Risograph）是一種介於影印與絲網印刷之間的孔版印刷工藝：每一個專色油墨各製一張版、分次滾印在暖色再生紙上。它的美學來自**製程的不完美**——油墨是半透明的，疊印時會 multiply 混出第三色；每一版滾印時對位不可能完全精準，所以邊緣總帶著 1–2px 的**套印錯位（misregistration）**重影；色塊不是平塗，而是由一顆顆網點（halftone）構成的**半色調**；整張紙還鋪著一層細微的**油墨顆粒與紙質紋理**。它看起來像獨立音樂廠牌親手印的 zine、像唱片行牆上貼的限量演出海報——粗糙、溫暖、有手感、絕不數位光滑。

用在 迴聲 Resona 音樂串流 App，這風格傳達「手作、獨立、實體唱片、印刷工坊」的氣質：每張專輯封面是一塊雙色半色調網點漸層、每個區塊標題是粉藍重影的粗體套印字、每個分類 chip 像蓋下去的橡皮圖章。整個 App 像是一本被掃描進手機的音樂 zine。

本風格嚴格只用 **2–3 個專色油墨 + 1 個紙色**，這是 Risograph 的根本限制，也是它辨識度的來源——**任何柔光漸層、玻璃模糊、霓虹發光、第四個顏色都會立刻破壞它**。

本次精修的三條鐵律：

1. **只有 3 專色 + 紙色，絕不多**：螢光粉 \`#ff48a0\`、寶藍 \`#2b50d6\`、墨黑 \`#1d1a17\`，印在奶油紙 \`#f3ecda\` 上。疊印區（粉×藍 \`multiply\`）自然混成紫，**那是「印」出來的第四色、不是另調一個色**。禁止任何此清單外的色碼出現在可見元件上。
2. **質感靠四件套，缺一不可**：(1) 網點半色調（radial-gradient 圓點 repeating）做封面與色塊填充；(2) 套印錯位（同一字/形複製粉、藍各位移 1–2px，外層 \`mix-blend-mode: multiply\`）；(3) 紙顆粒（一層極淡 repeating 細點 overlay 鋪滿全頁）；(4) 形狀偏扁平、邊緣 1px 粗描帶手感。沒有這四件，它就只是一個換色的普通 App。
3. **可讀性靠墨黑、不靠專色**：主文與所有小字一律**墨黑 \`#1d1a17\` 印在紙色 \`#f3ecda\` 上**（對比 ≈ 13:1，遠超 WCAG AA）。螢光粉與寶藍只准做**色塊、強調、圖章、icon 實底**，不做小字主文（紙上的螢光粉對比不足）。透明度與顆粒為美學服務，文字清晰度不可妥協。

三個視覺辨識特徵（signature）：

1. **雙色半色調網點封面**：所有專輯 / 歌單 / 頭像封面 = 純 CSS \`repeating radial-gradient\` 圓點，疊兩層（粉一層、藍一層），\`background-size\` 控制網點疏密，靠紙色露白做半色調漸變，不同色相區分不同封面。
2. **套印錯位粗標題**：每個區塊大標用粗無襯線體，**複製一層螢光粉、一層寶藍各位移 1.5px，外層 \`mix-blend-mode: multiply\`**，疊出帶重影、印歪了一格的手感粗標。
3. **橡皮圖章 chip / 徽章 / icon**：分類膠囊、徽章、播放鍵、tab icon = 螢光粉或寶藍**實底色塊 + 墨字 + 網點填充 + 1px 墨黑粗描**，像一個個蓋上去的印章。整頁覆一層極淡紙顆粒。

---

## Design Tokens (CSS variables)

\`\`\`css
:root {
  /* ── 手機殼尺寸（必含、鎖死，無跑版的根本） ── */
  --screen-w: 390px;
  --screen-h: 844px;
  --statusbar-h: 44px;
  --tabbar-h: 60px;             /* tab-bar 本體 */
  --miniplayer-h: 60px;         /* 迷你播放列高度 */
  --safe-bottom: 34px;          /* iPhone home indicator 安全區 */
  --content-pad: 20px;
  --device-radius: 44px;

  /* ── 8pt 間距尺度（所有 margin/padding/gap 只能取這些值） ── */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;

  /* ── 專色油墨：嚴格 3 色 + 紙色，禁止任何此清單外的顏色 ── */
  --ink-pink: #ff48a0;          /* riso 螢光粉（FLUORESCENT PINK 對應色） */
  --ink-blue: #2b50d6;          /* riso 寶藍（FEDERAL BLUE 對應色） */
  --ink-black: #1d1a17;         /* 墨黑（主文字色） */
  --paper: #f3ecda;             /* 紙色奶油（背景／露白做半色調） */
  --paper-deep: #ece2c9;        /* 紙色微深（卡面與背景區分，仍屬紙系） */
  /* 疊印混色（粉×藍 multiply 的結果，僅供需要實色紫時取用，勿濫用） */
  --ink-overprint: #6a2fa0;     /* 印出來的「第四色」紫，等同粉藍疊印 */

  /* ── 半透專色（做網點與淡色塊用；專色本身半透才有油墨感） ── */
  --pink-ink: rgba(255, 72, 160, 0.92);
  --blue-ink: rgba(43, 80, 214, 0.90);
  --pink-soft: rgba(255, 72, 160, 0.16);   /* 淡粉底（仍須墨字在上維持對比） */
  --blue-soft: rgba(43, 80, 214, 0.14);    /* 淡藍底 */

  /* ── 文字（一律墨黑 on 紙色 ≈ 13:1，遠超 AA；反白只用在實底色塊上的大字） ── */
  --text-1: #1d1a17;            /* 主文字：墨黑 */
  --text-2: rgba(29, 26, 23, 0.74);  /* 次文字：墨黑降透明（on 紙仍 ≥ AA） */
  --text-3: rgba(29, 26, 23, 0.56);  /* 弱文字：僅 ≥ 15px 或裝飾用 */
  --text-on-pink: #f7f1e6;      /* 反白字 on 螢光粉實底（≥ AA，僅 ≥ 13px 粗體） */
  --text-on-blue: #f7f1e6;      /* 反白字 on 寶藍實底（≥ AA） */

  /* ── 材質配方：網點 / 顆粒 / 套印錯位（核心，務必照用） ── */
  --halftone-size: 6px;         /* 網點基準間距，越小越密 */
  --halftone-dot: 2.2px;        /* 單顆網點半徑控制（配 radial-gradient 停止點） */
  /* 粉色網點層（用於封面與色塊；靠 background-size 改密度做漸變） */
  --halftone-pink:
    radial-gradient(var(--halftone-dot) at 50% 50%, var(--ink-pink) 0 60%, transparent 62%);
  /* 藍色網點層 */
  --halftone-blue:
    radial-gradient(var(--halftone-dot) at 50% 50%, var(--ink-blue) 0 60%, transparent 62%);
  /* 紙顆粒（極淡墨點 overlay，鋪滿全頁，低透明度，pointer-events:none） */
  --paper-grain:
    radial-gradient(0.6px at 50% 50%, rgba(29,26,23,0.10) 0 50%, transparent 52%);
  --grain-size: 3px;            /* 紙顆粒密度 */
  --misreg: 1.5px;              /* 套印錯位位移量（粉 +1.5 / 藍 −1.5） */

  /* ── 互動 / 強調 ── */
  --accent: var(--ink-pink);    /* 播放鍵 / active tab / 進度 fill */
  --accent-2: var(--ink-blue);  /* 次強調（隨機 / 循環 / 徽章邊） */
  --chip-fill: var(--paper-deep);
  --press-veil: rgba(29, 26, 23, 0.08);   /* active 按下疊加 */

  /* ── 邊框：1px 墨黑粗描，是手感來源（不是陰影） ── */
  --stroke: 1px solid var(--ink-black);
  --stroke-2: 2px solid var(--ink-black);

  /* ── 圓角：偏扁平、略帶手感，不要大圓角玻璃感 ── */
  --radius-card: 6px;
  --radius-card-sm: 4px;
  --radius-cover: 4px;
  --radius-chip: 2px;           /* 圖章感：幾乎方角 */
  --radius-stamp: 50%;          /* 圓形圖章（頭像 / 播放鍵） */

  /* ── 陰影：孔版幾乎不用柔影；只用「硬位移實影」模擬印刷層疊（墨黑、無模糊） ── */
  --shadow-hard: 3px 3px 0 var(--ink-black);
  --shadow-hard-sm: 2px 2px 0 var(--ink-black);
  --shadow-press: 1px 1px 0 var(--ink-black);

  /* ── 字體：粗無襯線 / 工業感，墨色 ── */
  --font: 'Arial Black', 'Helvetica Neue', 'PingFang TC', 'Noto Sans TC', system-ui, sans-serif;
  --font-body: 'PingFang TC', 'Noto Sans TC', system-ui, -apple-system, sans-serif;

  /* ── 動效（孔版幾乎全靜態，僅圖章按壓回饋） ── */
  --ease: steps(1, end);        /* 印刷感：偏好瞬間切換而非柔順緩動 */
  --ease-soft: cubic-bezier(0.4, 0, 0.2, 1);
  --dur-fast: 90ms;
  --dur: 140ms;
}
\`\`\`

---

## Typography Scale

| 級距 | 大小 / 行高 / 字重 / 字距 | 顏色 | 用途 |
| --- | --- | --- | --- |
| caption | 11px / 1.3 / 600 / +0.3px | \`--text-2\` | tab 標籤、播放次數、徽章副字、時長 |
| label | 13px / 1.4 / 600 / +0.2px | \`--text-2\` | chip 文字、卡片副標、藝人名、列項副字 |
| body | 15px / 1.55 / 500 / 0 | \`--text-1\` | 段落、方案權益、說明文案 |
| row-title | 16px / 1.3 / 700 / 0 | \`--text-1\` | 歌名、歌單卡標題、列項主文字、迷你播放列歌名 |
| section | 22px / 1.1 / 900 / -0.3px | \`--text-1\` | 各屏區塊標題（**套印錯位重影**） |
| display | 30px / 1.0 / 900 / -0.6px | \`--text-1\` | home 品牌大標、player 曲名（**套印錯位重影**） |

- 標題（section / display）一律 \`--font\`（粗黑無襯線）並做**套印錯位**：複製粉、藍兩層各位移 \`--misreg\`，\`text-transform: uppercase\` 對英文、中文則靠字重撐出粗黑印刷感。
- 內文與小字用 \`--font-body\`，字重偏粗（500–700），呼應印刷的厚實墨色。
- 數字（時間 9:41、價格、時長、進度）一律 \`font-variant-numeric: tabular-nums\`。
- 11px 弱字一律 \`--text-2\` 以上（墨黑系，對紙色仍 ≥ AA）；\`--text-3\` 只准用在 ≥ 15px 或純裝飾。
- 標題與正文間固定 \`--space-3\` 縱距；區段之間固定 \`--space-6\`。

---

## Component & Layout

整體結構：最外層 \`.device\`（390×844 手機殼，紙色底 \`--paper\`、\`overflow:hidden\`、\`border-radius: --device-radius\`、四周 \`--stroke-2\` 墨黑粗描）→ 底層 \`.grain\`（絕對定位鋪滿、\`--paper-grain\` 紙顆粒 overlay、\`pointer-events:none\`、\`z-index:9\` 蓋在最上但不擋點）→ \`.statusbar\`（固定頂、\`z-index:5\`）→ \`.viewport\`（中間可捲動畫面容器，\`z-index:1\`，依序堆 home/search/detail/player/library/profile 六個 \`data-screen\`，每次只顯示一個）→ \`.dock\`（底部固定區：\`.miniplayer\` 迷你播放列 + \`.tabbar\`，\`z-index:5\`）。

8 個 \`<section data-screen>\` 順序固定且各恰一次：\`status-bar\` → \`home\` → \`search\` → \`detail\` → \`player\` → \`library\` → \`profile\` → \`tab-bar\`。

### 跨畫面導覽模型（B2，無跑版的骨架）

- 用簡單 class 切換：\`.screen\` 預設 \`display:none\`，**只有** \`.screen.is-active { display:flex; flex-direction:column }\` 顯示。**嚴禁任何畫面專屬 class 無條件設 \`display\`**（會造成永久疊層 bug）；畫面專屬樣式只設 padding / 排版。預設 \`home\` 為 \`is-active\`，**JS 失效時 home 仍完整可讀**。
- 導覽元素一律加 \`data-go="<target>"\`，JS 用事件委派處理 click：tab → 切 \`home\` / \`search\` / \`library\` / \`profile\` 並同步 tab active 態；home / library / search 的歌單或專輯卡 \`data-go="detail"\`；detail 任一曲目列 / 迷你播放列 / 任一播放鍵 \`data-go="player"\`；detail / player 左上返回鍵 \`data-go="back"\`。
- **裝置容器三段式鎖定**：status-bar 永遠在頂、\`.dock\`（miniplayer + tab-bar）永遠在底、中間 \`.viewport\` 為當前畫面唯一可捲動區。\`.viewport\` 高度 = \`calc(--screen-h - --statusbar-h - 一層 dock 高)\`，每個 \`.screen\` 內部 \`overflow-y:auto\`，底部 padding 預留迷你播放列高度，內容絕不被遮擋 / 溢出 / 裁切。

### 封面繪製規範（純 CSS，重要）

**所有專輯 / 歌單 / 頭像 / 排名 / 縮圖封面一律純 CSS，零點陣圖。** 用**雙色半色調網點**繪製：

\`\`\`css
.cover {
  aspect-ratio: 1; border-radius: var(--radius-cover);
  border: var(--stroke); background-color: var(--paper);
  background-image: var(--halftone-pink), var(--halftone-blue);
  /* 兩層網點不同 size + 不同 position offset，做出套印與半色調漸變 */
  background-size: 7px 7px, 9px 9px;
  background-position: 0 0, 2px 3px;
}
\`\`\`

- 不同封面靠**改 \`background-size\`（網點疏密 → 明暗）+ \`background-position\`（錯位量）+ 哪一色為主**來區分色相，例如某封面偏粉（粉網點密、藍網點疏）、某封面偏紫（兩色等密疊印）。
- 可在 cover 上疊一個 \`mix-blend-mode: multiply\` 的單色幾何形（圓 / 三角 / 斜帶）做封面圖案。**不得引用任何 \`assets/*.webp\`，不得出現指向圖檔的 \`<img>\`。**

### status-bar（\`data-screen="status-bar"\`）

- 高 \`--statusbar-h\`，紙色底、底緣 \`--stroke\` 墨線分隔。
- 左側時間 **9:41**（tabular-nums、墨黑粗體），右側並排訊號格 + Wi-Fi + 電量符號（純 CSS / unicode 墨黑繪製，不用圖檔）。
- 固定於裝置頂、不隨內容捲動、永遠在最上層（紙顆粒 \`.grain\` 仍覆蓋於其上）。

### home（\`data-screen="home"\`）

至少三區段，每區段有 section 標題列（左**套印錯位粗標** + 右「查看全部」墨字連結，cursor:pointer + hover）：

1. **頂部問候列**：左側品牌大標「**迴聲 Resona**」（display、套印錯位重影）+ slogan「讓每首歌，回到你身上」；右側頭像 = 圓形圖章（網點填充 + 墨描）。
2. **每日迴聲 banner**：一張橫幅卡（粉色實底色塊 + 網點 + 墨描），左半色調封面 + 「每日迴聲」標題 + 個人化每日推薦文案 + 大播放鍵（▶ 圓形圖章）。露出「**無損音質串流**」徽章（藍實底圖章）。
3. **為你精選歌單**：section 標題「為你精選歌單」+「查看全部」。**7 個歌單卡**兩欄網格（浪潮回聲 / 深夜公路 / 島嶼晨光 / 雨後散步 / 城市心跳 / 山海之間 / 失重時刻），每卡 = 一塊半色調網點 \`.cover\`（各封面色相 / 網點密度不同）+ 紙色標題列（墨字）+ 曲數副字。
4. **熱門排行**：section 標題「熱門排行」+「查看全部」，編號清單（1–5），每列 = 大號排名數字（套印錯位）+ 小網點封面 + 歌名 + 藝人 + 時長 + 播放鍵圖章。
5. 4 分類 chip 橫排（華語 / 獨立 / 電子 / 放鬆）置於問候列下方，**橡皮圖章 chip**（粉或藍實底 + 反白墨字 + 網點 + 墨描），首個 active。

### search（\`data-screen="search"\`）

- 頂部搜尋框：紙色 input 外觀 + \`--stroke\` 墨描 + 放大鏡（墨黑）+ placeholder「搜尋歌曲、藝人、歌單」。
- 下方 4 分類 chip（華語 / 獨立 / 電子 / 放鬆，圖章 chip）。
- **熱門歌曲**：section 標題，**編號清單**（含時長）——歌名與藝人混排，露出多首歌名（藍色信號 / 霓虹巷弄 / 晚風練習曲 / 靜電 / 無人車站…）與多個藝人（海平面樂團 / 林知夏 / 夜行列車 / Echo Lab / 何遠）。每列 = 序號 + 小網點封面 + 歌名 + 藝人 + 時長 + 播放鍵（\`data-go="player"\`）。
- **熱門藝人**：section 標題 + 橫向圖章膠囊（圓形網點頭像 + 藝人名）：海平面樂團 / 林知夏 / 夜行列車 / Echo Lab / 何遠。

### detail（\`data-screen="detail"\`）

- 左上**返回鍵**圓形圖章（‹，\`data-go="back"\`，cursor:pointer + hover/active）。
- **大封面**：頂部大張半色調網點封面（純 CSS，色相呼應島嶼晨光，可疊 multiply 幾何形）。
- 資訊區：專輯名 **島嶼晨光** / 藝人 **林知夏** / 年份 **2026** / **9 首** / 總時長 **34:12**。
- 動作列：**播放全部**（粉實底大圖章 ▶）+ **隨機播放**（紙色描邊次鍵）。
- **完整 9 曲目清單**（藍色信號 / 霓虹巷弄 / 候鳥地圖 / 靜電 / 晚風練習曲 / 無人車站 / 潮間帶 / 第七個夏天 / 月台九又四分之三），每列 \`.song-row\`（紙色 + 底緣墨線分隔）：曲序 + 歌名 + 藝人（林知夏）+ 時長 + 行尾播放鍵圖章 / 選單（⋯）。點任一曲 \`data-go="player"\`。

### player（\`data-screen="player"\`）

沉浸全屏 now-playing，**進入時隱藏底部 dock（tab-bar + miniplayer）**，整個 player \`height:100%; display:flex; flex-direction:column\`：

- 左上**返回鍵**圓形圖章（⌄ 收合，\`data-go="back"\`）。
- **大封面**：\`flex:1; min-height:0\`（可壓縮）的半色調網點大方塊（純 CSS，色相呼應島嶼晨光，疊 multiply 幾何）。封面可壓縮以保證下方控制永遠在 844 內。
- 正在播放：**林知夏 —〈晚風練習曲〉**，副字專輯「島嶼晨光」/ 02:47。
- **歌詞同步**：一行逐字高亮示意（高亮字墨黑粗體，其餘 \`--text-3\`）。
- 進度條 \`.progress\`（紙色軌 + 墨描 + \`--accent\` 粉色 fill），左 **01:12** / 右 **02:47**（tabular-nums）。
- 控制列（flex 固定不靠捲動）：隨機（⤮）/ 上一首（⏮）/ **播放暫停大圓圖章（▶ / ⏸ 兩態）** / 下一首（⏭）/ 循環（⟳）。隨機與循環 active 時上 \`--accent-2\` 藍。
- 底部：**Hi-Res 無損音質**徽章（藍圖章）+ 音量滑桿（紙色軌 + 墨描）。**進度 / 控制 / 徽章永遠固定在可視區內、不依賴捲動、不超出 844、不被遮擋。**

### library（\`data-screen="library"\`）

- 「**我的音樂庫**」標題（section、套印錯位）。
- 分頁列（圖章 segmented）：**歌單 / 專輯 / 已下載**，首個 active。
- **收藏歌單清單**：每列 = 小網點封面 + 標題（複用歌單名）+ 曲數副字 + 行尾箭頭，點擊 \`data-go="detail"\`。
- **離線下載**功能列（紙色 list-item + 墨描 + 已下載狀態徽章圖章）。
- **共享音樂庫**功能列（紙色 list-item + 切換開關 toggle，圖章樣式）。

### profile（\`data-screen="profile"\`）

- **使用者卡**：圓形網點頭像 + 暱稱 + 會員狀態行（紙色卡 + 墨描 + 硬位移影）。
- **播放偏好**列表：音質、等化器、**跨裝置接續播放**（圖章 toggle 開關，預設開）。
- **3 訂閱方案卡**：
  - **免費** — \`NT$ 0 ／月\` — 標「目前方案」。
  - **Plus** — \`NT$ 149 ／月\` — 標「推薦」，強調卡（粉色描邊 + 角標圖章 + 硬位移影加厚）。
  - **Family** — \`NT$ 249 ／月\`。
  - 每卡含 2–3 條權益小字。價格 tabular-nums、\`NT$\` 與數字間一個半形空格、後綴全形「／月」。

### mini-player（迷你播放列，常駐）

- 一條貼在 tab-bar **正上方**的紙色浮條（\`--paper-deep\` + \`--stroke\` 墨描 + \`--shadow-hard-sm\` 硬位移影），高 \`--miniplayer-h\`。
- 內容：左小網點封面 + 歌名「晚風練習曲」+ 藝人「林知夏」+ 右側**播放/暫停鍵圖章（▶ / ⏸）**。
- 顯示於 **home / search / library / profile**；**player 畫面隱藏**（\`.is-player .dock .miniplayer { display:none }\`，且 player 時整個 dock 隱藏）。
- 整條 cursor:pointer，點擊（播放鍵以外區域）展開到 player（\`data-go="player"\`）；點播放鍵切換 ▶/⏸ 兩態。
- 底部含一條極細進度線（紙色軌 + 粉 fill，與 player 同步示意）。

### tab-bar（\`data-screen="tab-bar"\`）

- 固定底部紙色條（\`--paper\` + 頂緣 \`--stroke-2\` 粗墨線），4 tab：**首頁 / 搜尋 / 音樂庫 / 我的**，各 = unicode/CSS 墨黑 icon + 標籤。
- active tab 用粉色圖章高亮（粉實底 + 反白字 + 墨描的小膠囊背景）。每 tab cursor:pointer + hover/active 回饋。
- 預留 \`--safe-bottom\` 安全區。tab-bar 與其上 miniplayer 一起構成「永遠在底」的固定 \`.dock\`；**player 屏整個 dock 隱藏**。

---

## Do / Don't

| Do | Don't |
| --- | --- |
| 嚴格只用螢光粉 / 寶藍 / 墨黑 + 奶油紙 4 色 | 出現第 5 個顏色、用柔和過渡色或灰階 |
| 色塊用網點半色調（\`repeating radial-gradient\`）填充 | 用平塗實色或數位漸層柔光 |
| 標題做粉藍雙層套印錯位（\`mix-blend-mode: multiply\`） | 標題用單層平直字（失去印刷重影） |
| 疊印區讓粉×藍 multiply 自然混出紫 | 另外調一個「紫色」當第四專色 |
| 全頁鋪一層極淡紙顆粒 overlay（\`pointer-events:none\`） | 用 backdrop-filter blur / 玻璃模糊 / 發光 |
| 邊緣用 1px 墨黑粗描帶手感 | 用無邊柔影卡片（沒有印刷實體感） |
| 主文與小字一律墨黑 on 紙（≈ 13:1） | 用螢光粉 / 寶藍做小字主文（紙上對比不足） |
| 陰影只用墨黑硬位移實影（無模糊） | 用大範圍模糊柔影（不是孔版語彙） |
| chip / icon / 播放鍵做成蓋印章（實底 + 墨字 + 網點 + 墨描） | chip 做成圓潤漸層膠囊 |
| 圓角偏小（2–6px）、形狀扁平 | 大圓角玻璃感 / 重 3D 立體 |
| 間距只取 8pt 尺度（4/8/12/16/20/24/32） | 隨手寫 7px / 13px / 19px 破壞節奏 |
| 進度 / 曲長 / 價格用 tabular-nums | 比例字寬數字導致跳動 |

---

## Motion Specification

孔版印刷是**靜態印刷品**，本風格**預設幾乎全靜態**——層次靠網點、套印、顆粒、硬位移影，不靠動畫。僅允許以下極克制的互動回饋：

- **圖章按壓**：可點元素（chip / 播放鍵 / tab / 卡片 / 列項）\`:active\` 時做「壓進去」效果——\`transform: translate(2px, 2px)\` 同時 \`box-shadow\` 由 \`--shadow-hard\` 變 \`--shadow-press\`（影子變短），模擬印章蓋下、紙被壓低。\`transition\` 用 \`--dur-fast\`。
- **hover**：可點元素 \`:hover\` 疊極淡 \`--press-veil\` 或微抬（\`transform: translate(-1px,-1px)\`、影子變長），回饋「可蓋章」。
- **active 切換**：chip / tab / 分頁 active 用 background + color 瞬間切換（\`--ease\` = \`steps\`），呼應印刷的離散感而非柔順緩動。
- **播放鍵點擊**：在 ▶ / ⏸ 兩態間切換（JS 改 textContent + class）。
- **進度條**：純 CSS 寬度示意即可。
- 只動 \`transform\` / \`opacity\` / \`box-shadow\`；不做位移漂浮 loop、不做柔光呼吸、不做任何抖動。
- 不使用任何外部動畫庫。
- **可選的「印刷錯位微抖」**：若要更有手感，可讓套印錯位的粉藍層在 hover 時各多位移 0.5px（純 transform）。此抖動**必須在 reduced motion 下完全停用**。

## Accessibility (Reduced Motion)

\`\`\`css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation: none !important;
    transition: none !important;
    scroll-behavior: auto !important;
  }
  /* 套印錯位是「靜態視覺」可保留；但任何 hover 微抖 / 位移回饋停用 */
  .is-tap:hover, .is-tap:active { transform: none !important; }
}
\`\`\`

- 圖章按壓、hover 微抖、任何位移回饋在 reduced motion 下全部停用；**套印錯位重影、網點、顆粒屬靜態印刷視覺，保留不變**，畫面仍呈現完整孔版質感。
- 內容（所有歌名 / 藝人 / 價格 / 功能名）在 JS 失效或 reduced motion 下仍完整可讀。
- 文字維持 WCAG AA 以上：主文與小字一律墨黑 on 紙（≈ 13:1）；反白字只用在螢光粉 / 寶藍實底上的 ≥ 13px 粗體（\`--text-on-pink\` / \`--text-on-blue\` ≥ AA）。

---

## Required Output Contract

遵循 \`.claude/agents/style-page-builder.md\` 的「**App 風格額外要求**」：

- **8 個 \`<section data-screen="<id>">\`**，固定 id 與順序：\`status-bar\` → \`home\` → \`search\` → \`detail\` → \`player\` → \`library\` → \`profile\` → \`tab-bar\`，各恰一次。常見漏洞：只寫 \`id=\` 漏寫 \`data-screen=\`，務必兩者都加。
- **\`<body data-viewport="mobile">\`** 必須存在（驗證辨識依據）。
- **status-bar 顯示 9:41**（tabular-nums，可見文字）。
- **tab-bar 四 tab**：可見文字「首頁 / 搜尋 / 音樂庫 / 我的」，active 態明確（粉色圖章高亮）。
- **迷你播放列**常駐於 home/search/library/profile、**player 畫面整個 dock 隱藏**；點擊展開 player、播放鍵 ▶/⏸ 兩態。
- **三層訂閱方案精確字串**同屏出現於 profile：\`免費\` / \`NT$ 0 ／月\`、\`Plus\` / \`NT$ 149 ／月\`、\`Family\` / \`NT$ 249 ／月\`（\`NT$\` 與數字間一個半形空格、後綴全形「／月」），並標「推薦」與「目前方案」。
- **player 必須在 390×844 內完整顯示**：進入時隱藏底部 dock；\`height:100%; display:flex; flex-direction:column\`；封面 \`flex:1; min-height:0\`；進度 / 控制 / 徽章永遠固定可見、不靠捲動、不被遮擋、不超出 844。
- **可互動多畫面導覽**：tab 切換 + 卡片 \`data-go="detail"\` + 曲目/迷你播放列 \`data-go="player"\` + detail/player 返回鍵 \`data-go="back"\`，全部接好；**JS 失效時 home 預設可見**。畫面切換 CSS 遵守「只有 \`.is-active\` 設 display」鐵律，禁止畫面專屬 class 無條件設 display。
- **權威字串全在可見 body 文字**（不可只放 \`aria-label\` / \`data-*\`）：品牌「迴聲 / Resona」、6 核心功能（個人化每日推薦 / 無損音質串流 / 離線下載 / 歌詞同步 / 跨裝置接續播放 / 共享音樂庫）、7 歌單（浪潮回聲 / 深夜公路 / 島嶼晨光 / 雨後散步 / 城市心跳 / 山海之間 / 失重時刻）、9 歌名（藍色信號 / 霓虹巷弄 / 候鳥地圖 / 靜電 / 晚風練習曲 / 無人車站 / 潮間帶 / 第七個夏天 / 月台九又四分之三）、5 藝人（海平面樂團 / 林知夏 / 夜行列車 / Echo Lab / 何遠）、4 分類 chip（華語 / 獨立 / 電子 / 放鬆）、正在播放「林知夏 —〈晚風練習曲〉」。
- **無跑版**：裝置容器鎖 390×844、status-bar 永遠在頂、dock（miniplayer + tab-bar）永遠在底（player 時隱藏）、中間為當前畫面可捲動區、內容不被遮擋、文字不溢出/不被裁切、padding 充足。
- **單檔 HTML ≤ 200 KB**；**無外部 CDN**（\`<link>\` / \`<script>\` / \`<img>\` 的 src/href 不可 \`http://\` 或 \`https://\`）；繁體中文；CSS 變數驅動、不得用 Tailwind 等 framework CSS。inline \`<script>\` ≤ 8 KB。
- **若使用任何裝飾動畫**（圖章按壓 / hover 微抖），必附 \`@media (prefers-reduced-motion: reduce)\`，且只動 \`transform\` / \`opacity\` / \`box-shadow\`。

## Required Images

**此風格不使用任何點陣圖。** \`assets-manifest.json\` 為 \`{ "style": "孔版印刷 Risograph", "images": [] }\`。所有封面 / 頭像 / 圖案一律純 CSS 繪製——**半色調網點靠 \`repeating radial-gradient\` + \`background-size\`**、套印靠雙層位移 + \`mix-blend-mode: multiply\`、顆粒靠細點 overlay、圖案靠幾何形 + multiply 疊色。**頁面不得引用任何圖檔**、不得出現指向 \`assets/\` 的 \`<img>\`。

---

## Reference Snippet

\`\`\`css
/* ── 手機殼：紙色底 + 墨黑粗描 ── */
.device {
  position: relative;
  width: var(--screen-w);
  height: var(--screen-h);
  margin: 0 auto;
  overflow: hidden;
  border-radius: var(--device-radius);
  background: var(--paper);
  border: var(--stroke-2);
  font-family: var(--font-body);
  color: var(--text-1);
  display: flex;
  flex-direction: column;
}

/* ── 紙顆粒 overlay：鋪滿全頁、極淡、不擋點、永遠在最上 ── */
.grain {
  position: absolute; inset: 0; z-index: 9; pointer-events: none;
  background-image: var(--paper-grain);
  background-size: var(--grain-size) var(--grain-size);
  mix-blend-mode: multiply;
  opacity: 0.7;
}

/* ── 套印錯位粗標題：粉 / 藍兩層位移 + multiply 疊印 ── */
.misreg {
  position: relative; display: inline-block;
  font-family: var(--font); font-weight: 900; letter-spacing: -0.3px;
  color: var(--ink-black);                 /* 主層墨黑（清晰、AA） */
  isolation: isolate;
}
.misreg::before, .misreg::after {
  content: attr(data-text);
  position: absolute; inset: 0; z-index: -1;
  mix-blend-mode: multiply;                /* 疊印混色 */
  pointer-events: none;
}
.misreg::before { color: var(--ink-pink); transform: translate(calc(-1 * var(--misreg)), var(--misreg)); }
.misreg::after  { color: var(--ink-blue); transform: translate(var(--misreg), calc(-1 * var(--misreg))); }
/* 用法：<span class="misreg" data-text="為你精選歌單">為你精選歌單</span> */

/* ── 半色調網點封面（雙色，靠 size/position 改色相與明暗） ── */
.cover {
  aspect-ratio: 1; border-radius: var(--radius-cover);
  border: var(--stroke); background-color: var(--paper);
  background-image: var(--halftone-pink), var(--halftone-blue);
  background-size: 7px 7px, 9px 9px;
  background-position: 0 0, 2px 3px;
}
.cover.is-blue   { background-size: 10px 10px, 6px 6px; }   /* 偏藍 */
.cover.is-violet { background-size: 7px 7px, 7px 7px; background-position: 0 0, 0 0; } /* 等密疊印 → 紫 */

/* ── 圖章 chip：實底 + 反白字 + 網點 + 墨描 ── */
.chip {
  padding: var(--space-2) var(--space-4); border-radius: var(--radius-chip);
  border: var(--stroke); background: var(--paper-deep);
  color: var(--text-1); font-size: 13px; font-weight: 700; letter-spacing: .2px;
  cursor: pointer; box-shadow: var(--shadow-hard-sm);
  transition: transform var(--dur-fast) var(--ease-soft), box-shadow var(--dur-fast) var(--ease-soft);
}
.chip:hover  { transform: translate(-1px, -1px); box-shadow: var(--shadow-hard); }
.chip:active { transform: translate(2px, 2px);   box-shadow: var(--shadow-press); }
.chip[aria-selected="true"] {
  background: var(--ink-pink); color: var(--text-on-pink);
  background-image: var(--halftone-pink); background-size: 5px 5px;
}

/* ── 通用可點圖章按壓 ── */
.is-tap { cursor: pointer; transition: transform var(--dur-fast) var(--ease-soft),
                                        box-shadow var(--dur-fast) var(--ease-soft); }
.is-tap:active { transform: translate(2px, 2px); box-shadow: var(--shadow-press); }

/* ── status-bar（紙色，底緣墨線，固定頂） ── */
.statusbar {
  position: relative; z-index: 5; flex: 0 0 auto;
  display: flex; align-items: center; justify-content: space-between;
  height: var(--statusbar-h); padding: 0 22px;
  font-size: 15px; font-weight: 700; font-variant-numeric: tabular-nums;
  color: var(--ink-black); background: var(--paper);
  border-bottom: var(--stroke);
}

/* ── 中間畫面容器：唯一可捲動中段，每屏自己捲動 ── */
.viewport { position: relative; z-index: 1; flex: 1 1 auto; min-height: 0; }
.screen { display: none; height: 100%; overflow-y: auto;
  padding: var(--space-4) var(--content-pad) calc(var(--miniplayer-h) + var(--space-4)); }
.screen.is-active { display: flex; flex-direction: column; }  /* 只有 active 設 display */

/* ── 歌曲列（紙色 + 底緣墨線分隔） ── */
.song-row {
  display: flex; align-items: center; gap: var(--space-3);
  padding: var(--space-3) var(--space-2); border-bottom: var(--stroke);
  cursor: pointer; transition: background var(--dur-fast) var(--ease-soft);
}
.song-row:hover  { background: var(--press-veil); }
.song-row:active { background: var(--blue-soft); }
.song-row .idx   { width: 22px; text-align: center; color: var(--text-3);
  font-family: var(--font); font-weight: 900; font-variant-numeric: tabular-nums; }
.song-row .title { font-size: 16px; font-weight: 700; color: var(--text-1); }
.song-row .meta  { font-size: 13px; color: var(--text-2); }
.song-row .dur   { margin-left: auto; font-size: 13px; color: var(--text-2);
  font-variant-numeric: tabular-nums; }

/* ── 圓形播放鍵圖章（粉實底 + 網點 + 墨描） ── */
.play-btn {
  width: 56px; height: 56px; border-radius: var(--radius-stamp);
  background-color: var(--ink-pink); background-image: var(--halftone-pink);
  background-size: 5px 5px; color: var(--text-on-pink);
  border: var(--stroke-2); cursor: pointer; box-shadow: var(--shadow-hard);
  display: grid; place-items: center; font-size: 22px;
  transition: transform var(--dur-fast) var(--ease-soft), box-shadow var(--dur-fast) var(--ease-soft);
}
.play-btn:active { transform: translate(3px, 3px); box-shadow: var(--shadow-press); }

/* ── player：封面可壓縮、控制永遠在 844 內 ── */
.screen-player.is-active { display: flex; flex-direction: column;
  height: 100%; padding-bottom: var(--space-4); }   /* player 無 miniplayer 預留 */
.now-playing { display: flex; flex-direction: column; height: 100%; gap: var(--space-4); }
.now-playing .art {
  flex: 1 1 auto; min-height: 0;                      /* 可壓縮，保證控制可見 */
  border-radius: var(--radius-cover); border: var(--stroke-2);
  background-color: var(--paper);
  background-image: var(--halftone-pink), var(--halftone-blue);
  background-size: 9px 9px, 11px 11px; background-position: 0 0, 3px 4px;
}
.now-playing .ctrl-row { flex: 0 0 auto; display: flex; align-items: center;
  justify-content: space-between; }
.progress { height: 8px; border-radius: 2px; border: var(--stroke);
  background: var(--paper); overflow: hidden; }
.progress > i { display: block; height: 100%; width: 42%;
  background-color: var(--ink-pink); background-image: var(--halftone-pink);
  background-size: 4px 4px; }
.lyric { text-align: center; font-size: 16px; color: var(--text-3); }
.lyric .now { color: var(--ink-black); font-weight: 800; }

/* ── dock：miniplayer + tab-bar，永遠在底；player 時整個隱藏 ── */
.dock { position: relative; z-index: 5; flex: 0 0 auto; }
.is-player .dock { display: none; }

.miniplayer {
  display: flex; align-items: center; gap: var(--space-3);
  height: var(--miniplayer-h); margin: 0 var(--space-3) var(--space-2);
  padding: 0 var(--space-3); border-radius: var(--radius-card-sm);
  background: var(--paper-deep); border: var(--stroke); box-shadow: var(--shadow-hard-sm);
  cursor: pointer;
}
.miniplayer .mp-cover { width: 40px; height: 40px; border-radius: var(--radius-card-sm);
  border: var(--stroke); }
.miniplayer .mp-title { font-size: 15px; font-weight: 700; color: var(--text-1); }
.miniplayer .mp-artist{ font-size: 12px; color: var(--text-2); }
.miniplayer .mp-play  { margin-left: auto; cursor: pointer; }

/* ── tab-bar（紙色，頂緣粗墨線，固定底） ── */
.tabbar {
  display: flex; justify-content: space-around; align-items: center;
  height: var(--tabbar-h); padding-bottom: var(--safe-bottom);
  background: var(--paper); border-top: var(--stroke-2);
}
.tab { font-size: 11px; font-weight: 600; color: var(--text-2); text-align: center;
  cursor: pointer; padding: var(--space-1) var(--space-3); border-radius: var(--radius-chip);
  transition: color var(--dur-fast) var(--ease); }
.tab:hover { color: var(--ink-black); }
.tab[aria-current="page"] {
  color: var(--text-on-pink); background: var(--ink-pink);
  border: var(--stroke); box-shadow: var(--shadow-press);
}

/* ── 訂閱方案：Plus 推薦卡（粉描邊 + 角標 + 硬位移影加厚） ── */
.plan { padding: var(--space-4); border-radius: var(--radius-card); border: var(--stroke);
  background: var(--paper); box-shadow: var(--shadow-hard-sm); }
.plan.is-featured { border: var(--stroke-2); box-shadow: 4px 4px 0 var(--ink-pink); }
.plan .price { font-family: var(--font); font-size: 22px; font-weight: 900;
  font-variant-numeric: tabular-nums; color: var(--ink-black); }
.plan .badge { display: inline-block; font-size: 11px; font-weight: 700;
  color: var(--text-on-pink); background: var(--ink-pink);
  border: var(--stroke); padding: 2px 8px; border-radius: var(--radius-chip); }

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation: none !important; transition: none !important; }
  .is-tap:hover, .is-tap:active, .chip:hover, .chip:active { transform: none !important; }
}
\`\`\`
`,"../../.claude/skills/app-wireframe/SKILL.md":'---\nname: app-wireframe\ndescription: Use when generating a single-file mobile App screen demo for the 迴聲 Resona 音樂串流 App in Wireframe / lo-fi 線框原型 style. Triggers on wireframe、lo-fi、低保真、線框稿、原型稿、灰階線稿、mockup、prototype、骨架圖、placeholder box、手繪註記、greybox、blueprint UI.\nuser-invocable: true\n---\n\n# 線框 lo-fi — 迴聲 Resona\n\n## Style Philosophy\n\n線框 lo-fi 是「設計流程最前端」的視覺語言——刻意停在**低保真原型稿（greybox）**階段，把焦點放在資訊結構、版面骨架、互動意圖，而**不是視覺細節**。它故意「未完成」：純灰階、細線條、佔位方框、對角斜線交叉，讓觀者一眼讀懂「這裡是封面」「這裡是曲目列」「這是一顆按鈕」，而不被顏色與裝飾分心。在音樂串流 App 中，這風格表現出「**這是還沒上色的設計稿，但結構已經完整可用、可點、可導覽**」——像把 Figma / Balsamiq 的灰模 mockup 直接做成一台可捲動、可互動的手機 demo。\n\n精修核心原則：**「低保真」不等於「低密度」**。本次精修要把每個畫面的資訊量做滿（多區段、多卡片、完整曲目、迷你播放列），但所有新增內容**仍維持 greybox 語彙**——圖像永遠是「方框 + 對角交叉 X」，強調永遠靠「加粗線 + 加深灰」，註記永遠用手寫便利貼字體，**絕不引入任何 hue 或實際照片**。密度提高，保真度不變。\n\n三個視覺辨識特徵（不可妥協）：\n\n1. **純灰階線稿**：只有 `#111` 線條 / `#fff` 底 / `#f0f0f0`–`#e4e4e4` 佔位灰；零彩色、零照片、零漸層裝飾色。強調 (accent) 只用「比較粗 / 比較深的灰線」表達，不用任何 hue。連 active 狀態、推薦徽章、進度條已播段，全部只是「更深的灰 + 更粗的線」。\n2. **方框 + 對角斜線交叉佔位**：所有圖像位置（專輯封面、頭像、Banner、歌單縮圖、迷你播放列縮圖）一律是**一個邊框方框，內含兩條對角線交叉成 X**——原型稿宇宙通用的「此處有圖」符號。純 CSS 線性漸層繪製，不引用任何圖檔、不留 `<img>`。\n3. **細實線 / 虛線邊框 + 手寫便利貼註記**：元件用 1px 實線、分隔用 1px 虛線（`dashed`）勾勒；穿插 monospace / 標楷體的「便利貼批註」（如 `// 拖曳排序`、`〔自動更新〕`、`[ 封面 ]`），營造設計師在稿子上手寫批註的草稿氛圍。註記是「氛圍」，**絕不蓋掉或取代任何權威內容字串**。\n\n---\n\n## Design Tokens (CSS variables)\n\n精修重點：間距全面收斂到 **8pt 尺度**（4 / 8 / 12 / 16 / 20 / 24 / 32），字級階梯補滿行高 / 字重 / 字距，圓角與陰影 token 全部集中宣告，數值即真理。\n\n```css\n:root {\n  /* ===== 裝置外殼基準 ===== */\n  --screen-w: 390px;            /* iPhone 直式邏輯寬，鎖死不變 */\n  --screen-h: 844px;            /* iPhone 直式邏輯高 */\n  --statusbar-h: 44px;          /* 狀態列固定高 */\n  --tabbar-h: 56px;             /* tab-bar 本體高（不含安全區） */\n  --miniplayer-h: 56px;         /* 迷你播放列高 */\n  --safe-bottom: 34px;          /* iPhone home indicator 安全區 */\n  --device-radius: 44px;        /* 圓角螢幕半徑 */\n  --content-pad: 16px;          /* 內容區左右留白 */\n\n  /* ===== 灰階調色（唯一允許的顏色家族）===== */\n  --ink: #111111;               /* 主線條 / 主文字 */\n  --ink-2: #555555;             /* 次要文字 */\n  --ink-3: #999999;             /* 註記 / 弱化文字 / 時長 */\n  --line: #cccccc;              /* 一般邊框線 */\n  --line-2: #dddddd;            /* 更淺分隔線 */\n  --line-strong: #111111;       /* 強調邊框（active / 主按鈕）*/\n  --paper: #ffffff;             /* 底色 */\n  --fill: #f0f0f0;              /* 佔位灰 / 區塊填充 */\n  --fill-2: #e4e4e4;            /* 次階佔位灰（hover / 選取 / 已播軌）*/\n  --fill-3: #d8d8d8;            /* :active 按下回饋灰 */\n  --note: #888888;              /* 手寫便利貼註記墨色 */\n\n  /* ===== 線條樣式 token ===== */\n  --bw: 1px;                    /* 標準線寬 */\n  --bw-strong: 2px;            /* 強調線寬（主按鈕 / active）*/\n  --border: var(--bw) solid var(--line);\n  --border-strong: var(--bw-strong) solid var(--line-strong);\n  --border-dash: var(--bw) dashed var(--line);\n  --border-dash-2: var(--bw) dashed var(--line-2);\n\n  /* ===== 圓角（原型稿偏方正，圓角極小）===== */\n  --radius-xs: 2px;\n  --radius-sm: 4px;\n  --radius-md: 6px;\n  --radius-pill: 999px;         /* 僅 chip / tab / toggle 用 */\n\n  /* ===== 陰影：原型稿無柔光陰影；最多一條離線位移虛邊 ===== */\n  --shadow-flat: none;\n  --shadow-lift: 2px 2px 0 var(--line);   /* 紙張錯位「貼紙感」，非柔光陰影 */\n  --shadow-lift-strong: 3px 3px 0 var(--ink); /* 推薦方案卡硬位移 */\n\n  /* ===== 間距系統（8pt 尺度，4 為半階）===== */\n  --sp-1: 4px;    /* 半階：icon 與文字微距 */\n  --sp-2: 8px;    /* 基本單位 */\n  --sp-3: 12px;   /* 列內間距 */\n  --sp-4: 16px;   /* 區塊內 padding / 卡片間距 */\n  --sp-5: 20px;   /* 區段內上下節奏 */\n  --sp-6: 24px;   /* 區段間距 */\n  --sp-8: 32px;   /* 大區段分隔 / 畫面頂留白 */\n\n  /* ===== 字體：草稿手感，正文無襯線、註記用 mono/標楷 ===== */\n  --font-ui: \'PingFang TC\', \'Noto Sans TC\', system-ui, -apple-system, sans-serif;\n  --font-note: \'DFKai-SB\', \'BiauKai\', \'標楷體\', ui-monospace,\n               \'SFMono-Regular\', \'Courier New\', monospace;\n\n  /* ===== 對角交叉佔位圖（核心識別）===== */\n  /* 兩條 linear-gradient 畫出 X，配合 --fill 底色 + --line 邊框 */\n  --x-placeholder:\n    linear-gradient(to top right,\n      transparent calc(50% - 0.5px), var(--line) 50%, transparent calc(50% + 0.5px)),\n    linear-gradient(to top left,\n      transparent calc(50% - 0.5px), var(--line) 50%, transparent calc(50% + 0.5px));\n\n  /* ===== 動效時長（如用 transition）===== */\n  --dur-fast: 120ms;\n  --ease: cubic-bezier(0.2, 0, 0.2, 1);\n}\n```\n\n### 間距使用規則（8pt 一致性）\n\n| 場景 | token | 數值 |\n| --- | --- | --- |\n| icon 與文字、徽章內距微縫 | `--sp-1` | 4px |\n| 列表列內元素間 gap、chip 內上下 padding | `--sp-2` | 8px |\n| song-row 上下 padding、卡片內元素間 | `--sp-3` | 12px |\n| 卡片 padding、左右安全留白、卡片間距 | `--sp-4` | 16px |\n| 區段標題與內容、控制列上下 | `--sp-5` | 20px |\n| 區段與區段之間 | `--sp-6` | 24px |\n| 畫面頂部留白、大封面上下 | `--sp-8` | 32px |\n\n**所有 margin / padding / gap 只能取上述 7 個值**，禁止出現 `13px`、`18px`、`7px` 之類離散數字，確保節奏一致、不跑版。\n\n---\n\n## Typography Scale（手機字級階梯，含行高 / 字重 / 字距）\n\n| 級距 | font-size | line-height | font-weight | letter-spacing | 用途 |\n| --- | --- | --- | --- | --- | --- |\n| display | 28px | 34px (1.2) | 600 | -0.01em | home 大標「迴聲 Resona」、player 曲名 |\n| title | 22px | 28px (1.27) | 600 | -0.01em | 各屏屏名標題、專輯名 |\n| section | 18px | 24px (1.33) | 600 | 0 | 區段標題「每日迴聲 / 為你精選歌單 / 熱門排行」 |\n| heading | 16px | 22px (1.375) | 600 | 0 | 卡片標題、歌單名、方案名 |\n| body | 15px | 22px (1.47) | 400 | 0 | 列表主文字、藝人名、說明 |\n| label | 13px | 18px (1.38) | 500 | 0 | chip、tab 文字、按鈕、次資訊 |\n| caption | 12px | 16px (1.33) | 400 | 0 | 時長、曲目數、價格後綴 |\n| note | 11px | 16px (1.45) | 400 (常斜體) | 0.01em | 手寫便利貼註記、佔位標籤 `[ 封面 ]`（`--font-note`） |\n\n- 原型稿避免多字重炫技：**標題 600、正文 400、label/heading 之間的 500** 三檔為主。\n- 「查看全部」連結用 label 級 + `--ink-2` + 右側 `›` 線框箭頭。\n- 佔位文字（lorem 感）可用實心灰塊 `.text-skeleton`（`--fill` 條，高 8–12px、圓角 2px）替代——但**所有 brief 權威字串（品牌 / 功能 / 方案 / 價格 / 歌單名 / 歌名 / 藝人 / chip / tab）必須是真實可見文字，絕不可用灰塊取代**。\n- 文字一律 `overflow: hidden; text-overflow: ellipsis;` 防溢出；多行用 `-webkit-line-clamp` 限行，杜絕跑版。\n\n---\n\n## Component & Layout（逐屏寫滿，密度提高但維持 greybox）\n\n### 整體三層外殼\n\n最外層 `.device`（390×844、`--device-radius` 圓角、`overflow: hidden`、置中、底色 `--paper`、外圈一條 `--border` 模擬裝置邊框）。內部結構：\n\n```\n.device\n ├─ .statusbar        (固定頂部，flex:0 0 auto)\n ├─ .viewport         (中間單一可捲動區，flex:1 1 auto，overflow-y:auto)\n │    └─ 6 個 <section data-screen> 垂直堆疊，屏間用 --border-dash + 屏名註記分隔\n └─ .dock             (固定底部，flex:0 0 auto)\n      ├─ .miniplayer  (迷你播放列，常駐於 home/search/library/profile，player 屏隱藏)\n      └─ .tabbar      (4 tab)\n```\n\n屏與屏之間用一條 `--border-dash` 分隔線 + 一行 `--font-note` 屏名註記（如 `// ───── SCREEN: search ─────`），凸顯「這是一份標注過的線框稿」。\n\n互動導覽（用 `:target` + `<a href="#screen">` 或無 JS 的純錨點，或極簡 inline JS）：tab 切換、卡片 → detail、曲目列 / 迷你播放列 → player、detail/player 返回鍵。所有導覽元素 `cursor: pointer` + `:hover` / `:active` 回饋。\n\n---\n\n### 1. `status-bar`（固定頂部，每頁不可省）\n\n- 高 `--statusbar-h`，底邊一條 `--border`，左右 padding `--content-pad`。\n- 左：`9:41`（`--font-note`，等寬）。\n- 右：訊號 / Wi-Fi / 電量——用**線框符號**表達：\n  - 訊號＝4 條由矮到高的細實線豎條（純 CSS，`--ink` 邊框 + 部分填 `--fill`）；\n  - Wi-Fi＝同心弧線（可用 CSS border-radius 弧或 `▸))` 線框）；\n  - 電量＝一個圓角矩形外框 + 內部填滿約 70% 的 `--ink` 色塊 + 右側小凸點。\n- 全部灰階線稿，不上色。\n\n---\n\n### 2. `home`（多區段卡牆，至少 3 區段）\n\n頂部標題列：大標 `迴聲 Resona`（display 級）+ slogan 副標（body, `--ink-2`），旁附 `--font-note` 註記 `〔v3.2.0 草稿〕`。\n\n**區段 A — 每日迴聲（推薦 Banner）**\n- 區段標題列：`每日迴聲`（section 級）+ 右側 `查看全部 ›`。\n- 一個寬 placeholder（對角交叉 X）Banner 佔位框（約 358×140），左上角標籤 `[ Banner ]`，框內手寫註記 `// 個人化每日推薦 · 每天 06:00 更新`。\n- Banner 下方一行：推薦歌單名 + 一顆線框 `▶ 立即播放` 小按鈕（`cursor:pointer`，點擊 → player）。\n\n**區段 B — 為你精選歌單（7 歌單卡牆）**\n- 區段標題列：`為你精選歌單`（section 級）+ `查看全部 ›`。\n- 4 分類 chip 橫排：`華語`、`獨立`、`電子`、`放鬆`——`.chip`（`--border` 線框膠囊），第一顆為 active（`--border-strong` 粗線框 + `--ink`）。chip 可橫向捲動，`cursor:pointer`。\n- 2 欄網格 `.playlist-card`，每張 = 上方正方 X 佔位封面（`cover-grid`）+ 下方歌單名（heading）+ 副標（caption, `--ink-3`，如 `28 首 · 1 小時 52 分`）。**7 張全部列出歌單名**：`浪潮回聲`、`深夜公路`、`島嶼晨光`、`雨後散步`、`城市心跳`、`山海之間`、`失重時刻`。整張卡 `cursor:pointer`，點擊 → detail。\n\n**區段 C — 熱門排行（編號清單）**\n- 區段標題列：`熱門排行`（section 級）+ `查看全部 ›`。\n- 編號清單 `.rank-list`，至少 5 列 `.song-row` = 左方大號排名 `01`–`05`（`--font-note`, `--ink-3`）+ 小 X 佔位縮圖 + 中間兩行（歌名 body / 藝人 caption `--ink-3`）+ 右方時長 + 線框 `▷` 播放鍵（`cursor:pointer` → player）。歌名取自 9 歌名清單，藝人取自 5 藝人清單。\n\n**功能露出條**（區段底）：用 `--font-note` 列核心功能名作為「待設計」標注，需含全部 6 核心功能名為可見文字（如 `無損音質串流`、`歌詞同步` 等照 brief）。\n\n---\n\n### 3. `search`（搜尋框 + chip + 熱門歌曲 + 熱門藝人）\n\n- 屏名標題 `搜尋`（title）。\n- 搜尋框 `.search-box`：`--border` 線框圓角矩形 + 左側放大鏡線框 icon（CSS 畫圓 + 一條斜線把手）+ placeholder 文字 `搜尋歌曲、藝人、歌單`（`--ink-3`）。`cursor:text`。\n- 4 分類 chip 再現一次（`華語 / 獨立 / 電子 / 放鬆`），第一顆 active。\n- **熱門歌曲**（區段標題 `熱門歌曲` + `查看全部 ›`）：編號清單 `.song-row`，每列 = 編號（`01`–`05`，`--font-note`）+ 小 X 佔位縮圖 + 中間兩行（歌名 / 藝人）+ **右方時長**（caption, `--ink-3`，如 `3:42`）+ 線框 `▷`。歌名 / 藝人取自權威清單，列間 `--border-dash`。`cursor:pointer` → player。\n- **熱門藝人**（區段標題 `熱門藝人`）：橫向捲動列，每個 = 圓形 X 佔位頭像（`avatar-sm`）+ 下方藝人名（caption）。露出 5 位藝人：`海平面樂團`、`夜行列車`、`Echo Lab`、`何遠`、`林知夏`（照 brief，需與 brief 5 藝人一字不差）。\n\n---\n\n### 4. `detail`（大封面 + 完整資訊 + 9 曲目）\n\n- 頂部導覽列：左方線框返回鍵 `‹`（`cursor:pointer` → home）+ 右方線框 `⋯` 選單。\n- **大正方對角交叉 X 佔位封面**（`cover-md`，約 160×160，置中或左對齊），左上角標籤 `[ 專輯封面 ]`。\n- 專輯資訊區：\n  - 專輯名 `島嶼晨光`（title）。\n  - 一行 meta：藝人 `林知夏` · 年份 `2026` · `9 首` · 總時長 `34 分鐘`（body / caption, `--ink-2`），用 `·` 分隔。\n- 操作列：`.btn-primary`（`--border-strong` 粗線框，文字 `▶ 播放全部`，`cursor:pointer` → player）+ `.btn-ghost`（線框 `⤮ 隨機播放`）並排，gap `--sp-3`。\n- **9 首完整曲目清單** `.track-list`：每列 `.song-row` = 左方曲序號（`01`–`09`，`--font-note`, `--ink-3`，寬 22px）+ 中間兩行（歌名 / 藝人 caption）+ 右方時長 + 行尾線框選單鍵 `⋮`（或 `▷` 播放鍵，`cursor:pointer` → player）。**9 首全列**（照 brief 9 歌名一字不差）：〈藍色信號〉〈霓虹巷弄〉〈候鳥地圖〉〈靜電〉〈晚風練習曲〉〈無人車站〉〈潮間帶〉〈第七個夏天〉〈月台九又四分之三〉。列間用 `--border-dash` 分隔。\n\n---\n\n### 5. `player`（大封面 + 進度 + 完整控制 + 歌詞同步）\n\n> player 屏顯示時，底部 `.miniplayer` 隱藏（已展開為全屏播放）；`.tabbar` 仍在。\n\n- 頂部導覽列：左方線框 `⌄`（收合 → home）+ 中間 `正在播放`（label, `--ink-3`）+ 右方 `⋯`。\n- 置中**大方形對角交叉 X 佔位封面**（`cover-lg`，約 280×280），左上角標籤 `[ 正在播放封面 ]`。\n- 曲目資訊：曲名 `晚風練習曲`（display）+ 藝人 `林知夏`（body, `--ink-2`）+ 專輯 `島嶼晨光`（caption, `--ink-3`）。三行置中或左對齊。\n- **歌詞同步**：一塊歌詞區，3 行其中**中間一行高亮**（`--ink` 粗、`--bw-strong` 下底線或 `--fill-2` 底）表示「正在唱的這一行」，上下行用 `--ink-3` 弱化，旁附 `--font-note` 註記 `// 逐字高亮 · 滾動同步`。\n- **進度條** `.progress`：一條 `--line` 細軌 + 一段填滿的 `--ink` 已播軌（`--fill-2` 為未播）+ 一個圓形線框拖鈕（`knob`，`cursor:grab`）；兩端時間 `02:47`（目前）/ `04:12`（總長）（caption, `--ink-3`）。\n- **控制列**：隨機 `⤮` / 上一首 `◁◁` / **播放暫停**（中央 `--border-strong` 圓形粗框，內含 ▶/⏸ 兩態）/ 下一首 `▷▷` / 循環 `↻`，五顆等距排列。中央播放鍵直徑大、`:active` 縮放回饋。\n- 底列徽章 + 音量：左方 `Hi-Res 無損` 線框小膠囊徽章（音質）+ 右方音量線框滑桿（細軌 + 圓鈕）。旁附 `--font-note` 註記 `// 音質徽章 + 音量`。\n\n---\n\n### 6. `library`（分頁 + 收藏清單 + 離線 + 共享）\n\n- 屏名標題 `音樂庫`（title）。\n- **分頁列** `.lib-tabs`：3 個線框分頁 `歌單` / `專輯` / `已下載`，第一個 active（`--border-strong` 下底線 + `--ink`，其餘 `--ink-3`），`cursor:pointer`。\n- **收藏歌單清單**（列表式，非卡牆）`.lib-row`：每列 = 左小 X 佔位縮圖（`cover-sm`）+ 中間兩行（歌單名 heading / 副標 caption「歌單 · 28 首」）+ 右側拖曳把手線框（三條短橫線 `≡`）+ `--font-note` 註記 `// 拖曳排序`。再次列出收藏歌單名（至少 `浪潮回聲`、`深夜公路`、`島嶼晨光`，照 brief）。`cursor:pointer` → detail。\n- **離線下載**區段：標題 `離線下載`（section）+ 線框 ↓ icon + 一行說明（caption `--ink-3`，如 `已下載 12 首 · 約 86 MB`）+ 一條線框進度 bar 示意。\n- **共享音樂庫**區段：標題 `共享音樂庫`（section）+ 線框雙人 icon + 一行說明 + 線框開關 toggle（`cursor:pointer`）。\n\n---\n\n### 7. `profile`（使用者卡 + 播放偏好 + 三方案）\n\n- 屏名標題 `我的`（title）。\n- **使用者卡** `.user-card`：左方圓形 X 佔位頭像（`avatar`）+ 右方暱稱（heading）+ `迴聲 Resona Plus 會員`字樣（caption, `--ink-3`）+ 線框 `編輯 ›`。`--border` 框 + `--shadow-lift`。\n- **播放偏好**區段（標題 `播放偏好`）：設定列 `.setting-row` 數列，每列 = 標籤 + 右側線框 toggle 或值。必含 `跨裝置接續播放`（toggle 開＝圓鈕在右、pill 內側填 `--fill-2`）、`無損音質串流`、`歌詞同步` 等列。`cursor:pointer`。\n- **三訂閱方案卡** `.plan-card` 直向堆疊，全部 `--border` 線框（**推薦方案 Plus 用 `--border-strong` 粗框 + `--shadow-lift-strong` 硬位移貼紙感 + 右上角線框 `推薦` 角標**；**目前方案標 `目前方案`**）：\n  - `免費` — `NT$ 0`／月（隨機播放、含廣告、標準音質）\n  - `Plus` — `NT$ 149`／月（無廣告、無損音質、離線下載）— **推薦**\n  - `Family` — `NT$ 249`／月（6 帳號、共享音樂庫、家長控制）\n  - 每卡：方案名（heading）+ 價格（`.price`，22px 600）+ 後綴「／月」（caption）+ 權益要點清單（body，每點前線框 `–` 或 `✓` 框）+ 底部線框 `選擇方案` / `目前方案` 按鈕。\n  - 價格字串嚴格照 brief：`NT$ 0`、`NT$ 149`、`NT$ 249`（`NT$` 與數字間一個半形空格，後綴全形「／月」）。\n\n---\n\n### 8. mini-player（迷你播放列，常駐 tab-bar 上方）\n\n- `.miniplayer` 緊貼 `.tabbar` 上方，是 `.dock` 的一部分，固定於 `.device` 底部。\n- 高 `--miniplayer-h`，頂邊一條 `--border`，底邊與 tabbar 相連。\n- 結構：左方小 X 佔位縮圖（`cover-sm`，約 40×40）+ 中間兩行（歌名 `晚風練習曲` body / 藝人 `林知夏` caption `--ink-3`，皆 ellipsis 防溢出）+ 右方一顆線框播放/暫停鍵（▶/⏸ 兩態，`cursor:pointer`）。\n- 整條 `cursor:pointer`，點擊 → 展開到 `player` 畫面。\n- **顯示規則**：顯示於 home / search / library / profile；在 player 畫面**隱藏**（用 `:target` 或 body class 控制：`.device[data-screen="player"] .miniplayer { display:none; }`，或對應錨點選擇器）。\n\n---\n\n### 9. `tab-bar`（底部 4 tab，固定）\n\n- 高 `--tabbar-h` + `--safe-bottom` 安全區，頂邊一條 `--border`（若上方有 miniplayer 則由 miniplayer 提供分隔），固定於 `.device` 底部。\n- 4 tab 等寬：`首頁` / `搜尋` / `音樂庫` / `我的`，每個 = 上方線框 icon（純 CSS 幾何：屋形 / 放大鏡 / 方塊堆 / 圓圈）+ 下方 label（caption），`cursor:pointer`。\n- **active 態**：當前頁 icon 與文字改 `--ink` 粗線（`--bw-strong`），其餘 tab 用 `--ink-3` 細線，視覺上明顯區隔。\n- `:active` 按下回饋：背景閃 `--fill`。\n\n---\n\n## Micro-interactions（微互動）\n\n- 所有可點元素 `cursor: pointer`（搜尋框用 `cursor: text`，拖鈕用 `cursor: grab`）。\n- **`:hover`**（桌面預覽）：卡片 / 列 / 按鈕背景轉 `--fill`、邊框轉 `--line-strong`；chip / tab 文字轉 `--ink`。\n- **`:active`**（按下回饋）：背景轉 `--fill-3`、`transform: translateY(1px)` 或 `scale(0.98)`，模擬實體按下。\n- 播放鍵 **▶/⏸ 兩態**：用 `:checked`（hidden checkbox）或 class 切換顯示三角 / 雙豎線（純 CSS 幾何或字符）。\n- tab / 卡片 / 分頁有明確 **active 視覺**（加粗線 + 加深灰）。\n- 若用 `transition`：只動 `transform` / `opacity`，時長 `--dur-fast`，並**必附 `@media (prefers-reduced-motion: reduce)` 關閉**。\n\n---\n\n## 無跑版規範（Layout Integrity）\n\n- 裝置容器 `.device` **鎖死 390×844**，`overflow: hidden`，置中；不做 RWD 斷點變形。\n- `status-bar` 永遠在頂（`flex: 0 0 auto`）；`.dock`（miniplayer + tab-bar）永遠在底（`flex: 0 0 auto`）。\n- 中間 `.viewport` 為當前畫面的**單一可捲動區**（`flex: 1 1 auto; overflow-y: auto`），`padding-bottom` 預留 `calc(var(--miniplayer-h) + var(--tabbar-h) + var(--safe-bottom) + var(--sp-4))`，確保內容**不被 dock 遮擋**；頂部預留 status-bar 高。\n- 文字一律設 `min-width: 0` + `overflow: hidden; text-overflow: ellipsis`（單行）或 `-webkit-line-clamp`（多行），**不溢出、不被裁切**。\n- 列 / 卡 / 按鈕內 padding 充足（至少 `--sp-3`），元素間 gap 取 8pt 尺度值。\n- 所有 flex 子項加 `min-width: 0` 防止內容撐爆容器。\n- 網格用 `grid-template-columns: repeat(2, 1fr)` + `gap: var(--sp-4)`，自動均分不溢出。\n\n---\n\n## Do / Don\'t\n\n| Do | Don\'t |\n| --- | --- |\n| 只用 `#111 / #555 / #999 / #ccc / #ddd / #e4e4e4 / #f0f0f0 / #fff` 灰階家族 | 出現任何彩色 hue（藍、綠、品牌色） |\n| 圖像位置一律「方框 + 對角交叉 X」純 CSS 佔位（含 mini-player 縮圖） | 引用任何 `.webp` / `.png` / 真實照片 / 漸層裝飾色 |\n| 邊框用 1px 實線 / 1px 虛線勾勒元件 | 用柔光 box-shadow、毛玻璃、立體擬物 |\n| 圓角極小（2–6px），保持方正草稿感 | 大圓角、藥丸卡片（chip / tab / toggle 除外）|\n| 間距只取 8pt 尺度（4/8/12/16/20/24/32） | 出現 7px / 13px / 18px 等離散數字 |\n| 穿插 `--font-note` 手寫便利貼註記（`// …`、`[ … ]`、`〔…〕`） | 把註記寫成正式 UI 文案、或蓋掉真實內容字串 |\n| 密度提高（多區段 / 完整曲目 / mini-player） | 為了密度引入彩色或照片破壞 greybox 語彙 |\n| brief 權威字串都是真實可見文字 | 用 `.text-skeleton` 灰塊取代任何權威字串 |\n| active / 推薦 / 已播 靠「加粗線 + 加深灰」表達 | 用填色 / 彩色高亮表達選取 |\n| 所有可點元素 `cursor:pointer` + `:hover`/`:active` 回饋 | 靜態無回饋的「死」介面 |\n\n---\n\n## Required Output Contract\n\n遵循 `.claude/agents/style-page-builder.md` 的「**App 風格額外要求**」：\n\n- `<body data-viewport="mobile">` 必須存在（驗證辨識依據）。\n- 8 個 `<section data-screen="<id>">`，固定 id 與順序、各出現恰一次：`status-bar` → `home` → `search` → `detail` → `player` → `library` → `profile` → `tab-bar`。**最高頻錯誤是只寫 `id=` 漏寫 `data-screen=`，務必兩者都有。** mini-player 不是獨立 `data-screen`，併入 `tab-bar` 上方的 `.dock`。\n- status-bar 顯示 `9:41`（可見文字）。\n- tab-bar 四 tab「首頁 / 搜尋 / 音樂庫 / 我的」皆為可見 body 文字。\n- 三層定價精確字串（同屏，profile 訂閱卡）：`NT$ 0`、`NT$ 149`、`NT$ 249`（`NT$` 與數字間一個半形空格、後綴全形「／月」）。\n- 可互動多畫面導覽：**tab 切換**（4 tab）+ **卡片 → detail** + **曲目 / 迷你播放列 → player** + **detail / player 返回鍵**。用純錨點 `:target` 或 ≤8KB inline JS 切換 `.viewport` 顯示的屏。\n- mini-player 顯示於 home / search / library / profile，player 屏隱藏；點擊展開到 player。\n- 品牌 `迴聲` / `Resona`、6 核心功能名、7 歌單名、9 歌名、5 藝人名、4 分類 chip、`9:41`、底部 4 tab 皆為**可見 body 文字**，一字不差照 brief。\n- 單檔 HTML ≤ 200 KB；**無外部 CDN**（`<link>`/`<script>`/`<img>` 的 src/href 不可 `http://` 或 `https://`）。\n- 不使用任何 framework CSS（Tailwind 等）；全靠本檔 CSS 變數驅動。WCAG AA 對比（`--ink #111` on `--paper #fff` 遠超 AA；`--ink-3 #999` 僅用於次要註記 / 時長 / 弱化文字）。\n- 本風格**無點陣圖**：所有封面 / 縮圖 / Banner / 頭像 / mini-player 縮圖皆用純 CSS（`--x-placeholder` 對角交叉 + `--fill` 灰底 + 線框）繪製，不引用 `assets/` 任何圖檔、不留 `<img>` 標籤。\n- 若使用任何 `@keyframes` / `transition`，必須附 `@media (prefers-reduced-motion: reduce)` 關閉或簡化，且只動 `transform` / `opacity`。\n\n---\n\n## Required Images\n\n**無**。線框 lo-fi 為純 CSS 風格，不使用點陣圖。`assets-manifest.json` 為 `{ "style": "Wireframe lo-fi", "images": [] }`。所有圖像位置（專輯封面、歌單縮圖、player 大封面、Banner、頭像、mini-player 縮圖）一律以「邊框方框 + 對角交叉 X」的純 CSS `--x-placeholder` 佔位繪製，**不引用任何圖檔、不留 `<img>` 標籤**。\n\n---\n\n## Reference Snippet\n\n可直接套用的 CSS（≥ 60 行，體現灰階線稿、對角交叉佔位、8pt 間距、區段、song-row、卡片、mini-player、tab-bar、進度條、訂閱卡、手寫註記 + prefers-reduced-motion）：\n\n```css\n/* ===== 手機外殼（三層：statusbar / viewport / dock）===== */\n.device {\n  width: var(--screen-w); height: var(--screen-h);\n  margin: 0 auto; background: var(--paper); color: var(--ink);\n  border: var(--border); border-radius: var(--device-radius);\n  overflow: hidden; display: flex; flex-direction: column;\n  font-family: var(--font-ui); position: relative;\n}\n\n/* ===== 狀態列 9:41 + 線框符號 ===== */\n.statusbar {\n  height: var(--statusbar-h); flex: 0 0 auto;\n  display: flex; align-items: center; justify-content: space-between;\n  padding: 0 var(--content-pad); border-bottom: var(--border);\n  font: 13px/1 var(--font-note); color: var(--ink);\n}\n.statusbar .battery {            /* 線框電量：外框 + 70% 填充 + 凸點 */\n  width: 22px; height: 11px; border: var(--border);\n  border-radius: var(--radius-xs); position: relative;\n  background: linear-gradient(to right, var(--ink) 0 70%, transparent 70%);\n}\n.statusbar .battery::after {\n  content: ""; position: absolute; right: -3px; top: 3px;\n  width: 2px; height: 5px; background: var(--ink); border-radius: 0 1px 1px 0;\n}\n\n/* ===== 可捲動內容區（留底部 dock 高度）===== */\n.viewport {\n  flex: 1 1 auto; overflow-y: auto;\n  padding: var(--sp-5) var(--content-pad)\n    calc(var(--miniplayer-h) + var(--tabbar-h) + var(--safe-bottom) + var(--sp-4));\n}\n\n/* ===== 區段標題列（含「查看全部」）===== */\n.section-head {\n  display: flex; align-items: baseline; justify-content: space-between;\n  margin: var(--sp-6) 0 var(--sp-3);\n}\n.section-head h2 { font: 600 18px/1.33 var(--font-ui); margin: 0; }\n.section-head .more { font: 500 13px/1 var(--font-ui); color: var(--ink-2); cursor: pointer; }\n\n/* ===== 對角交叉「此處有圖」佔位框（封面 / 縮圖 / banner / 頭像共用）===== */\n.ph {\n  background-color: var(--fill); background-image: var(--x-placeholder);\n  border: var(--border); border-radius: var(--radius-sm); position: relative;\n}\n.ph[data-label]::before {        /* [ 封面 ] 角落標籤 */\n  content: attr(data-label); position: absolute; top: 4px; left: 6px;\n  font: 11px/1.2 var(--font-note); color: var(--ink-3);\n}\n.cover-lg { width: 280px; height: 280px; margin: 0 auto; }   /* player 大封面 */\n.cover-md { width: 160px; height: 160px; }                   /* detail 封面 */\n.cover-grid { width: 100%; aspect-ratio: 1; }               /* home 卡牆封面 */\n.cover-sm { width: 48px; height: 48px; border-radius: var(--radius-xs); }\n.cover-xs { width: 40px; height: 40px; border-radius: var(--radius-xs); } /* mini-player */\n.avatar { width: 56px; height: 56px; border-radius: 50%; }\n\n/* ===== 手寫便利貼註記 ===== */\n.note { font: italic 11px/1.45 var(--font-note); color: var(--note); letter-spacing: .01em; }\n\n/* ===== 分類 chip（線框膠囊，active 加粗）===== */\n.chip {\n  display: inline-flex; align-items: center; padding: 8px 12px;\n  border: var(--border); border-radius: var(--radius-pill);\n  font: 500 13px/1 var(--font-ui); color: var(--ink-2);\n  background: var(--paper); cursor: pointer;\n}\n.chip:hover { border-color: var(--line-strong); color: var(--ink); }\n.chip:active { background: var(--fill-3); }\n.chip[aria-selected="true"] { border: var(--border-strong); color: var(--ink); }\n\n/* ===== 歌單卡（2 欄網格）===== */\n.grid-2 { display: grid; grid-template-columns: repeat(2, 1fr); gap: var(--sp-4); }\n.playlist-card { cursor: pointer; min-width: 0; }\n.playlist-card .name {\n  font: 600 16px/1.375 var(--font-ui); margin-top: var(--sp-2);\n  overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\n}\n.playlist-card .sub { font: 400 12px/1.33 var(--font-ui); color: var(--ink-3); }\n.playlist-card:active { transform: scale(.98); }\n\n/* ===== 歌曲 / 曲目列 ===== */\n.song-row {\n  display: flex; align-items: center; gap: var(--sp-3);\n  padding: var(--sp-3) 0; border-bottom: var(--border-dash); cursor: pointer;\n}\n.song-row:hover { background: var(--fill); }\n.song-row:active { background: var(--fill-3); }\n.song-row .idx { font: 13px/1 var(--font-note); color: var(--ink-3); width: 22px; flex: 0 0 auto; }\n.song-row .meta { flex: 1 1 auto; min-width: 0; }\n.song-row .title {\n  font: 600 15px/1.3 var(--font-ui); color: var(--ink);\n  overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\n}\n.song-row .artist { font: 400 12px/1.4 var(--font-ui); color: var(--ink-3); }\n.song-row .time { font: 11px/1 var(--font-note); color: var(--ink-3); flex: 0 0 auto; }\n\n/* ===== 主 / 次按鈕（線框，無填色，含按下回饋）===== */\n.btn-primary, .btn-ghost {\n  display: inline-flex; align-items: center; gap: var(--sp-1);\n  padding: 10px 20px; border-radius: var(--radius-pill);\n  background: var(--paper); color: var(--ink);\n  font: 600 15px/1 var(--font-ui); cursor: pointer;\n}\n.btn-primary { border: var(--border-strong); }\n.btn-ghost { border: var(--border); }\n.btn-primary:active, .btn-ghost:active { background: var(--fill-3); transform: translateY(1px); }\n\n/* ===== 進度條 ===== */\n.progress { position: relative; height: 3px; background: var(--fill-2); margin: var(--sp-4) 0; border-radius: var(--radius-pill); }\n.progress .played { position: absolute; inset: 0 45% 0 0; background: var(--ink); border-radius: var(--radius-pill); }\n.progress .knob {\n  position: absolute; left: 55%; top: 50%; width: 12px; height: 12px;\n  transform: translate(-50%, -50%); border: var(--border-strong);\n  border-radius: 50%; background: var(--paper); cursor: grab;\n}\n.progress-time { display: flex; justify-content: space-between; font: 11px/1 var(--font-note); color: var(--ink-3); }\n\n/* ===== 歌詞同步（中間行高亮）===== */\n.lyrics .line { font: 400 15px/1.6 var(--font-ui); color: var(--ink-3); text-align: center; }\n.lyrics .line.active { color: var(--ink); font-weight: 600; }\n\n/* ===== 訂閱方案卡（Plus 推薦 = 粗框 + 硬位移貼紙感）===== */\n.plan-card {\n  border: var(--border); border-radius: var(--radius-md);\n  padding: var(--sp-4); margin-bottom: var(--sp-4); background: var(--paper); position: relative;\n}\n.plan-card[data-recommend] { border: var(--border-strong); box-shadow: var(--shadow-lift-strong); }\n.plan-card[data-recommend]::after {\n  content: "推薦"; position: absolute; top: var(--sp-3); right: var(--sp-3);\n  font: 11px/1 var(--font-note); color: var(--ink); border: var(--border-strong);\n  border-radius: var(--radius-xs); padding: 3px 6px;\n}\n.plan-card .price { font: 600 22px/1.2 var(--font-ui); color: var(--ink); }\n.plan-card .unit { font: 400 12px/1.33 var(--font-ui); color: var(--ink-3); }\n\n/* ===== mini-player（常駐 dock 上方；player 屏隱藏）===== */\n.dock { flex: 0 0 auto; }\n.miniplayer {\n  display: flex; align-items: center; gap: var(--sp-3);\n  height: var(--miniplayer-h); padding: 0 var(--content-pad);\n  border-top: var(--border); cursor: pointer;\n}\n.miniplayer .meta { flex: 1 1 auto; min-width: 0; }\n.miniplayer .title { font: 600 13px/1.3 var(--font-ui); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }\n.miniplayer .artist { font: 400 11px/1.3 var(--font-ui); color: var(--ink-3); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }\n.miniplayer .play { width: 32px; height: 32px; border: var(--border); border-radius: 50%; display: grid; place-items: center; cursor: pointer; }\n.miniplayer .play:active { background: var(--fill-3); }\n.device[data-screen="player"] .miniplayer { display: none; }   /* player 屏隱藏 */\n\n/* ===== 底部 tab-bar（active 加粗加深）===== */\n.tabbar {\n  display: flex; height: calc(var(--tabbar-h) + var(--safe-bottom));\n  padding-bottom: var(--safe-bottom); border-top: var(--border); background: var(--paper);\n}\n.tabbar .tab {\n  flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center;\n  gap: var(--sp-1); font: 500 11px/1 var(--font-ui); color: var(--ink-3); cursor: pointer;\n}\n.tabbar .tab:active { background: var(--fill); }\n.tabbar .tab[aria-current="page"] { color: var(--ink); font-weight: 600; }\n.tabbar .tab[aria-current="page"] .ic { border-width: var(--bw-strong); }\n\n/* ===== Reduced motion ===== */\n@media (prefers-reduced-motion: reduce) {\n  * { animation: none !important; transition: none !important; }\n  .btn-primary:active, .btn-ghost:active, .playlist-card:active { transform: none; }\n}\n```\n',"../../.claude/skills/app-y2k/SKILL.md":`---
name: app-y2k
description: Use when generating a single-file mobile App screen demo for the 迴聲 Resona 音樂串流 App in Y2K (千禧年鉻金屬果凍泡泡) style. Triggers on Y2K、千禧、Y2K Phone、Frutiger Aero、chrome、鉻金屬、果凍按鈕、jelly bubble、半透塑膠、translucent plastic、星星貼紙、藍銀、cyber-cute、Lisa Frank、2000s UI.
user-invocable: true
---

# Y2K 手機 — 迴聲 Resona

## Style Philosophy

Y2K（千禧年）視覺把「2000 年前後對未來的樂觀想像」凝結成介面語言：液態鉻金屬、半透明塑膠、果凍質感的圓潤按鈕、星星閃光與漸層光暈。它的精神是「**科技但可愛、未來但溫暖**」（cyber-cute / Frutiger Aero 的近親），把冷冰冰的金屬科技包進糖果般的圓角與高光裡。在 迴聲 Resona 的音樂串流畫面中，這風格讓播放器與歌單像一台 2003 年的透明 MP3 隨身聽——藍銀為主、螢光點綴，每個元件都像被一層水亮塑膠包覆，有捏得下去的果凍感。

設計這份手機原型時，核心目標是「**像一台 2003 年真的會出貨的透明電子產品**」：每個按鈕都有可按壓的果凍回饋、每張卡片都像被真空封進塑膠殼、鉻金屬永遠有明確的「弧面反光」而非平塗灰。細膩度的關鍵在於**高光的紀律**——鉻金屬的白高光只在一條窄帶、果凍的 specular 只在上半、星星只在邊角點綴，整體仍維持藍銀的冷靜底，不讓螢光與星星淹沒結構。

三個視覺辨識特徵：
1. **鉻金屬漸層（liquid chrome）**：銀藍多段 \`linear-gradient\`（深藍灰→亮銀→白高光→淺藍→深），白高光收窄成一條 8–14% 的窄帶製造「金屬弧面」錯覺，用於 navbar、播放控制環、專輯封面外框、tab-bar、進度軌。
2. **果凍泡泡按鈕（jelly bubble）**：高圓角（22px+ 或全圓 pill），表面「上半亮、下半暗」雙層漸層 + 一顆 \`::before\` 橢圓 specular 高光點，\`:active\` 時整顆下沉 + 高光縮小，按下去像會 Q 彈。
3. **半透塑膠卡片 + 星星貼紙**：卡片用 \`rgba\` 半透白 + \`backdrop-filter\` 微霧 + 內描邊高光（雙層 inset），邊角散落 ✦ ✧ 星星與 sparkle，藍銀底配螢光點綴（螢光藍 / 螢光粉 / 螢光綠），像 2000 年代貼在筆電上的雷射貼紙。

---

## Design Tokens (CSS variables)

所有數值集中於此；逐屏與 snippet 一律引用變數，禁止散落 magic number。

\`\`\`css
:root {
  /* ── 手機框架（所有 app-* 共用基準，數值固定，禁改） ───────────── */
  --screen-w: 390px;
  --screen-h: 844px;
  --statusbar-h: 44px;
  --tabbar-h: 84px;            /* tab-bar 本體（不含 mini-player） */
  --miniplayer-h: 58px;       /* mini-player 常駐高度 */
  --safe-bottom: 34px;        /* iPhone home indicator 安全區 */
  --device-radius: 56px;      /* 圓角螢幕外框半徑 */

  /* ── 8pt 間距尺度（唯一允許的間距值） ──────────────────────────── */
  --sp-1: 4px;
  --sp-2: 8px;
  --sp-3: 12px;
  --sp-4: 16px;
  --sp-5: 20px;
  --sp-6: 24px;
  --sp-8: 32px;
  --content-pad: 18px;        /* 內容區左右安全內距（Y2K 微寬於 16） */

  /* ── Y2K 藍銀色票 ───────────────────────────────────────────── */
  --y2k-ink: #15233f;         /* 主文字：深藍墨 */
  --y2k-ink-soft: #41577e;    /* 次文字：藍灰 */
  --y2k-sky: #cfe6ff;         /* 淺天藍 */
  --y2k-sky-2: #e7f3ff;       /* 更淺天藍背景 */
  --y2k-silver: #dfe7f2;      /* 銀 */
  --y2k-silver-d: #9fb2cc;    /* 暗銀（描邊 / 陰影） */
  --y2k-blue: #2f6fff;        /* 主藍（active / CTA） */
  --y2k-blue-d: #1b3ea8;      /* 深藍 */

  /* ── 螢光點綴（active 態 / 徽章 / 星星，僅作點綴） ───────────────── */
  --y2k-neon-blue: #38e0ff;   /* 螢光藍 */
  --y2k-neon-pink: #ff7ad9;   /* 螢光粉 */
  --y2k-neon-green: #8dff5a;  /* 螢光綠 */

  /* ── 鉻金屬漸層（核心招牌：暗→亮銀→窄白高光→淺藍→深） ──────────── */
  --chrome: linear-gradient(180deg,
    #6b86b4 0%, #c9d8ec 12%, #ffffff 26%, #ffffff 34%,
    #aebfe0 50%, #5d7bb0 70%, #9fb6dc 88%, #e9f1ff 100%);
  --chrome-blue: linear-gradient(180deg,
    #1b3ea8 0%, #3f7bff 26%, #bfe0ff 48%, #ffffff 52%, #2f6fff 74%, #173b9a 100%);
  --chrome-soft: linear-gradient(180deg, #f4f9ff 0%, #d6e6fb 48%, #aac6ef 100%);

  /* ── 果凍泡泡漸層（按鈕 / chip） ────────────────────────────────── */
  --jelly-blue: linear-gradient(180deg, #7db8ff 0%, #2f6fff 52%, #1c46c4 100%);
  --jelly-pink: linear-gradient(180deg, #ffc1ec 0%, #ff7ad9 52%, #d23ba6 100%);
  --jelly-green: linear-gradient(180deg, #c6ff9e 0%, #8dff5a 50%, #4fce2e 100%);
  --jelly-glass: linear-gradient(180deg,
    rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.35) 46%,
    rgba(180,205,245,0.25) 54%, rgba(120,160,230,0.30) 100%);

  /* ── 半透塑膠卡片 ───────────────────────────────────────────── */
  --plastic-fill: rgba(255,255,255,0.62);
  --plastic-fill-2: rgba(255,255,255,0.48);  /* 列項較淡填充 */
  --plastic-stroke: rgba(255,255,255,0.85);
  --plastic-stroke-d: rgba(110,140,190,0.55);

  /* ── 圓角尺度 ───────────────────────────────────────────────── */
  --r-sm: 12px;               /* 小縮圖 / chip 內元素 */
  --r-bubble: 22px;           /* 卡片 / 按鈕果凍圓角 */
  --r-pill: 999px;            /* 膠囊 chip / 控制鈕 / 進度軌 */
  --r-cover: 26px;            /* 專輯封面圓角 */

  /* ── 陰影 / 高光 token ─────────────────────────────────────────── */
  --sh-card: 0 8px 22px rgba(40,80,160,0.18), inset 0 1px 0 rgba(255,255,255,0.9);
  --sh-card-lift: 0 14px 30px rgba(40,80,160,0.28), inset 0 1px 0 rgba(255,255,255,0.95); /* hover 抬升 */
  --sh-jelly: 0 6px 14px rgba(30,70,200,0.35), inset 0 2px 3px rgba(255,255,255,0.85), inset 0 -4px 8px rgba(20,50,140,0.45);
  --sh-jelly-press: 0 2px 6px rgba(30,70,200,0.4), inset 0 1px 2px rgba(255,255,255,0.6), inset 0 -2px 6px rgba(20,50,140,0.55); /* :active 下沉 */
  --sh-inset: inset 0 2px 6px rgba(20,40,120,0.28);  /* 搜尋框 / 進度軌內凹 */
  --glow-neon: 0 0 12px rgba(56,224,255,0.7);
  --glow-pink: 0 0 12px rgba(255,122,217,0.65);

  /* ── 動效時長（統一節奏） ───────────────────────────────────────── */
  --dur-fast: 0.12s;          /* 按壓回饋 */
  --dur-base: 0.22s;          /* hover / tab 切換 */
  --ease-jelly: cubic-bezier(0.34, 1.56, 0.64, 1);  /* Q 彈 overshoot */

  /* ── 字體 ───────────────────────────────────────────────────── */
  --font-ui: 'PingFang TC', 'Noto Sans TC', 'Arial Rounded MT Bold', 'Verdana', system-ui, sans-serif;
  --font-num: 'Verdana', 'Tahoma', 'PingFang TC', system-ui, sans-serif;  /* 千禧網頁感數字 */
}
\`\`\`

---

## Typography Scale（手機字級階梯）

| 級距 | 大小 / 行高 / 字重 / 字距 | 用途 |
| --- | --- | --- |
| display | 28px / 1.15 / 800 / -0.01em | 播放器曲名、home 大標「迴聲 Resona」 |
| title | 22px / 1.20 / 700 / 0 | 屏標題（搜尋 / 音樂庫 / 我的）、專輯名 |
| section | 17px / 1.30 / 700 / 0 | 區段標題、卡片主標、歌單名 |
| body | 15px / 1.45 / 500 / 0 | 一般內文、曲目主文字 |
| label | 13px / 1.30 / 600 / 0.02em | 藝人名、chip、tab 文字、徽章 |
| caption | 11px / 1.20 / 600 / 0.01em | 時長、播放次數、status-bar、附註 |

- 字體一律圓潤無襯線；數字（時長 02:47、價格、進度、播放數）用 \`--font-num\` 帶千禧網頁感。
- 字距：標題類保持 0；label/caption 加 0.02em 讓銀底小字更清楚。
- **對比紀律（WCAG AA）**：深藍墨 \`--y2k-ink\` 永遠落在淺底（sky / silver / 白塑膠）；亮藍 / 螢光 CTA 上的文字一律純白並加 \`text-shadow: 0 1px 2px rgba(20,40,120,.7)\` 深藍描影確保可讀；**禁止**亮銀字壓亮銀底。
- 區段標題列固定樣式：左 \`section\` 級標題 + 右側「查看全部 ›」\`label\` 級藍字連結（cursor:pointer）。

---

## Component & Layout（逐屏與元件規範）

### 整體外框

\`.device\` 鎖 390×844、置中、圓角螢幕 \`--device-radius\`、\`overflow:hidden\`，內部三層垂直結構（CSS：\`.device\` 為 flex column）：

1. **\`.statusbar\`**（\`data-screen="status-bar"\`）— \`position:sticky; top:0\`，永遠在頂，高 \`--statusbar-h\`。
2. **\`.viewport\`**（可捲動內容區）— \`flex:1; overflow-y:auto\`，當前畫面顯示於此；status-bar 與底部欄不隨之捲動。
3. **底部固定群**（永遠在底，\`position:sticky; bottom:0\`）= **mini-player（\`--miniplayer-h\`）疊在 tab-bar（\`--tabbar-h\`）上方**，合成一塊鉻金屬底座。player 畫面時 mini-player 隱藏。

\`.viewport\` 底部須留 \`padding-bottom: calc(var(--miniplayer-h) + var(--tabbar-h))\`，確保最後一段內容**不被 mini-player / tab-bar 遮擋**。

背景：\`.device\` 用 \`--chrome-soft\` 淺藍銀漸層；右上、左下各放一顆模糊光暈圓（\`radial-gradient\` 螢光藍 / 螢光粉，\`opacity:.35\`，\`filter:blur\`），再點綴數顆 ✦ ✧ 星星貼紙（純 CSS，\`position:absolute\`、\`pointer-events:none\`、可旋轉），製造透明殼底紋。

8 屏皆包在同一 \`.device\` 內，依 \`data-screen\` 順序排列；同一時間只顯示一屏（其餘 \`display:none\` 或 \`hidden\`），透過 tab / 卡片 / 返回鍵切換。**可互動導覽以純 CSS（\`:target\` / radio + label）或 ≤8KB inline JS 實作皆可**，但所有畫面與權威字串必須存在於 DOM、可被驗證搜尋到。

### status-bar（屏 1）

固定頂部，高 \`--statusbar-h\`，半透銀底 + \`backdrop-filter\` 微霧。左側時間 **9:41**（\`--font-num\` 700）；右側依序：訊號格（4 條漸高小柱，純 CSS 方塊）、Wi-Fi 弧、電量符號（圓角電池外殼 + 內填螢光綠）。整條底部一道銀色高光線分隔。

### home（屏 2）— 至少三區段

頂部 **navbar 大標題**：鉻金屬橫條（\`--chrome\`），左 App 標題「**迴聲 Resona**」白字 + 深藍描影 + 一顆 ✦ 星，右側齒輪 / 鈴鐺果凍小圓鈕（cursor:pointer、:active 下沉）。下接淺藍內容區，內容自上而下：

1. **「每日迴聲」每日推薦 banner**（區段標題「每日迴聲 · 為你準備的每日推薦」）：一張寬鉻金屬框橫幅卡，左側純 CSS 鉻框小封面、右側標題「今日精選 · 島嶼晨光」+ 副標 + 果凍「播放」鈕，邊角 ✦✧ 星星。
2. **「為你精選歌單」卡牆**（區段標題列：左標題 + 右「查看全部 ›」）：4 顆**分類 chip**（華語 / 獨立 / 電子 / 放鬆）果凍膠囊水平排列，active 一顆填螢光藍；其下 **7 個歌單卡（2 欄網格）**，列全部歌單名：浪潮回聲 / 深夜公路 / 島嶼晨光 / 雨後散步 / 城市心跳 / 山海之間 / 失重時刻。每張 = 半透塑膠卡 + 純 CSS 鉻框封面 + 歌單名（section）+ 副標（caption）。卡片 cursor:pointer、hover 抬升（\`--sh-card-lift\`）、:active 微縮；**點任一卡 → detail 畫面**。
3. **「熱門排行」清單**（區段標題「熱門排行 · 本週」+「查看全部 ›」）：編號清單列出多首歌名（藍色信號 / 霓虹巷弄 / 候鳥地圖…），每列：排名圓徽 + 歌名（body）+ 藝人（label）+ 時長（caption）+ 右側果凍播放鈕。**點任一列 → player 畫面**。

穿插露出核心功能標語徽章（如「無損音質串流」「離線下載」「跨裝置接續播放」「共享音樂庫」小卡 / 膠囊）。

### search（屏 3）

頂部果凍**搜尋框**（半透塑膠 + \`--sh-inset\` 內凹 + 放大鏡 icon + placeholder「搜尋歌曲、藝人、歌單」）。其下重複 4 分類 chip（華語 / 獨立 / 電子 / 放鬆）。

- **「熱門歌曲」編號清單**（含時長）：列出多首歌名（霓虹巷弄 / 候鳥地圖 / 潮間帶…），每列左側鉻框小縮圖 + 編號 + 歌名（body）+ 藝人（label）+ 時長（caption，\`--font-num\`）+ 右側果凍播放鈕。點列 → player。
- **「熱門藝人」**：橫向膠囊 / 圓鉻框頭像列，列出多位藝人：海平面樂團 / 林知夏 / 夜行列車 / Echo Lab / 何遠（label 名稱可見）。

### detail（屏 4）— 專輯詳情

頂部左上**返回鍵 ‹**（果凍小圓鈕，cursor:pointer，回 home）。下方大張**純 CSS 鉻框專輯封面**。資訊區：
- 專輯名 **島嶼晨光**（title）、藝人 **林知夏**（label）、後設一行「2003 · 9 首 · 38 分鐘」（年份 / 曲目數 / 總時長，caption）。
- 兩顆主 CTA：**播放全部**（鉻藍果凍 pill）+ **隨機播放**（半透塑膠 pill + 隨機 icon）。
- **完整 9 曲目 \`.song-row\` 清單**（全部 9 歌名）：藍色信號 / 霓虹巷弄 / 候鳥地圖 / 靜電 / 晚風練習曲 / 無人車站 / 潮間帶 / 第七個夏天 / 月台九又四分之三。每列：序號圓徽（曲序）+ 歌名（body）+ 藝人（label，林知夏）+ 時長（caption）+ 行尾選單 ⋯ 或果凍播放鍵。**點任一列 → player**。

### player（屏 5）— 不顯示 mini-player

頂部左上**返回鍵 ‹**（回 detail）。中央**特大純 CSS 鉻框專輯封面**（島嶼晨光，加緩慢旋轉光暈與星星）。其下：
- 曲名「**晚風練習曲**」(display) + 藝人「**林知夏**」(label) + 專輯「島嶼晨光」(caption)。
- **音質徽章**：螢光綠果凍膠囊「無損音質串流 · Hi-Res」（音量 / 音質徽章需求）。
- **進度條**：鉻金屬軌 + 螢光藍填充 + 圓珠 thumb；左 \`00:00\`（目前）右 \`02:47\`（總長），\`--font-num\`。
- **控制列**：上一首 ⏮ / **大果凍播放鈕（鉻藍 + specular 高光，▶/⏸ 兩態，cursor:pointer，:active 下沉）** / 下一首 ⏭，兩側放隨機 🔀 與循環 🔁 小鈕（active 態填螢光）。
- **歌詞同步面板**：逐行歌詞，**當前行逐字高亮一行**（螢光藍底 + 粗體），上下行淡化。

### library（屏 6）— 分頁

屏標題「**音樂庫**」。其下**分頁列（歌單 / 專輯 / 已下載）**果凍 tab，active 一顆填螢光藍。
- **收藏歌單清單**（重複歌單名於列表）：每列 = 鉻框縮圖 + 歌單名（section）+ 曲數（caption），cursor:pointer。
- **「離線下載」**區塊：果凍下載鈕 + 「已下載 · 12 首」徽章。
- **「共享音樂庫」**區塊：多顆重疊頭像泡泡（圓鉻框）+ 說明文字。

### profile（屏 7）— 訂閱方案

頂部**使用者卡**（圓鉻框頭像 + 暱稱 + 副標「Resona 會員」）。
- **「播放偏好」**卡：含**跨裝置接續播放**開關（果凍 toggle，手機 / 平板 / 車機小圖示）、音質偏好、自動下載等列項。
- **3 張訂閱方案卡**（果凍泡泡 + 鉻框，垂直堆疊）：
  - **免費** — \`NT$ 0 ／月\`（隨機播放、含廣告、標準音質）— 標「目前方案」徽章。
  - **Plus** — \`NT$ 149 ／月\`（無廣告、無損音質、離線下載）— **主打**：鉻藍填充 + 螢光描邊 + 「推薦」星星徽章。
  - **Family** — \`NT$ 249 ／月\`（6 帳號、共享音樂庫、家長控制）。

  價格字串一字不差：\`NT$\` 與數字間半形空格、後綴全形「／月」。

### mini-player（迷你播放列，常駐）

位於 tab-bar **上方**，疊在底座頂部，高 \`--miniplayer-h\`。內容：左側鉻框小封面縮圖 + 中間「晚風練習曲」(label 700) + 「林知夏」(caption) + 右側**播放/暫停果凍鍵**（▶/⏸ 兩態）。整條一道細螢光藍進度線在底緣。
- 顯示於 **home / search / library / profile**；**player 畫面隱藏**（player 本身就是全屏播放器）。
- **點 mini-player 主體 → 展開到 player 畫面**；點播放鍵切換 ▶/⏸（不導頁）。
- cursor:pointer，hover 高光增強，:active 微縮。

### tab-bar（屏 8）

固定底部，高 \`--tabbar-h\`（含 \`--safe-bottom\`），鉻金屬橫條 + 半透塑膠，與 mini-player 合成底座。4 顆果凍 tab，可見文字 **首頁 / 搜尋 / 音樂庫 / 我的**，各帶圓潤 icon。active tab 填螢光藍果凍 + 上方 \`--glow-neon\` 光暈 + 文字加深（\`--y2k-blue-d\`）；非 active 為銀灰。**點 tab → 切換對應畫面**（home/search/library/profile）。

### 純 CSS 鉻框專輯封面（全風格通用，禁圖檔）

外層 \`--chrome\` 或 \`--chrome-blue\` 厚框（5px padding）+ \`--r-cover\` 圓角；內層 \`.art\` 用 \`conic-gradient\` / \`linear-gradient\` / 重疊半透色塊 + 一兩個幾何形（圓、斜帶、星）構成抽象封面，每張可換主色相（藍 / 粉 / 綠 / 紫）做出區別；右上一顆 ✦ 高光星。不引用任何 \`assets/\` 圖檔。

---

## Do / Don't

| Do | Don't |
| --- | --- |
| 鉻金屬一律多段 \`linear-gradient\`，白高光收成 8–14% 窄帶做弧面反光 | 用單色灰當金屬、無高光、白佔半屏 |
| 果凍按鈕加 \`::before\` 橢圓 specular 高光 + 雙層內陰影，\`:active\` 換 \`--sh-jelly-press\` 下沉 | 做成扁平 Material 純色按鈕、無按壓回饋 |
| 所有可點元素 \`cursor:pointer\` + 明確 \`:hover\` / \`:active\` | 可點卻無 hover/active 視覺，像死圖 |
| 卡片半透 \`rgba\` + 雙層內描邊高光 + 微 \`backdrop-filter\` | 不透明實心白卡，失去塑膠真空感 |
| 星星 / sparkle 用純 CSS（\`clip-path\` / 文字 ✦✧ / box-shadow 點），邊角點綴 | 引用外部 emoji 圖檔或 CDN icon、星星滿屏 |
| 螢光色只作點綴（active / 徽章 / 進度 / 星），主體仍藍銀 | 整屏螢光，刺眼又破壞千禧質感 |
| 間距只用 \`--sp-*\` 8pt 尺度；圓角只用 \`--r-*\` token | 散落 13px/17px 等隨意間距 / 小直角圓角 |
| 對比達 AA：深藍墨字於淺底、純白字於藍 CTA 並加描影 | 亮銀字壓亮銀底，糊成一片 |
| 內容 padding 充足、文字 \`overflow\` 收斂（ellipsis / 換行），絕不裁切 | 文字溢出殼外、被 mini-player/tab-bar 遮住 |

---

## Motion Specification

- 統一節奏：按壓回饋 \`--dur-fast\`、hover / tab 切換 \`--dur-base\`；果凍按壓用 \`--ease-jelly\` overshoot。
- **僅動 \`transform\` / \`opacity\`**（按鈕 \`scale\` 下沉、卡片 \`translateY\` 抬升、tab 高光 \`opacity\`、封面光暈 \`rotate\`、星星 \`opacity\` 閃爍）。**禁動** \`top/left/width/height\`。
- 微互動清單：
  - 果凍鈕 \`:active { transform: scale(.96); box-shadow: var(--sh-jelly-press); }\`
  - 卡片 \`:hover { transform: translateY(-3px); box-shadow: var(--sh-card-lift); }\`、\`:active { transform: translateY(-1px) scale(.99); }\`
  - tab / 分頁 active：\`opacity\` 高光淡入 + 文字色變。
  - 播放鍵 ▶/⏸ 兩態切換（class 或 \`:checked\`），暫停 ↔ 播放 icon 互換。
  - 封面光暈緩慢 \`rotate\`（loop，≤ 20s）、星星 \`opacity\` 呼吸閃爍。
- 內容在 JS 失敗或 reduced-motion 下仍完整可讀，動效只是錦上添花。

## Accessibility (Reduced Motion)

\`\`\`css
@media (prefers-reduced-motion: reduce) {
  * { animation: none !important; transition: none !important; }
  .cover .halo, .star { animation: none !important; }
}
\`\`\`

- reduced-motion 下移除所有旋轉 / 閃爍 / 過渡，保留 \`:active\` 的靜態最終態即可。
- 焦點可見：可點元素 \`:focus-visible\` 給 2px 螢光藍外框，不可只靠顏色。
- 觸控目標 ≥ 44×44（果凍小鈕用 padding 撐足，視覺可較小）。

---

## Required Output Contract

遵循 \`.claude/agents/style-page-builder.md\` 的「App 風格額外要求」：

1. \`<body data-viewport="mobile">\` 必須存在。
2. **8 個 \`<section data-screen="...">\`**，id 與順序固定：\`status-bar → home → search → detail → player → library → profile → tab-bar\`，各恰一次。
3. 全頁單一固定外框：**status-bar 永遠在頂、tab-bar(含其上方 mini-player) 永遠在底、中間為當前畫面可垂直捲動區**；內容不被遮擋、文字不溢出殼外 / 不被裁切、padding 充足。
4. **mini-player 常駐**於 home/search/library/profile（封面縮圖 + 歌名 + 藝人 + 播放/暫停鍵），player 畫面不顯示 mini-player；點 mini-player 展開到 player。
5. **可互動多畫面導覽**：tab 切換（首頁/搜尋/音樂庫/我的）+ 卡片 → detail + 曲目列/mini-player → player + detail/player 有返回鍵。可用純 CSS（\`:target\` / radio）或 ≤8KB inline JS。
6. 三層定價精確字串一字不差：\`NT$ 0\`、\`NT$ 149\`、\`NT$ 249\`，搭配方案名 \`免費 / Plus / Family\`，同屏（profile）出現，含「推薦 / 目前方案」標示。
7. 品牌「迴聲 / Resona」、6 核心功能名、7 歌單名、9 歌名、5 藝人名、4 分類 chip、底部 4 tab 文字（首頁 / 搜尋 / 音樂庫 / 我的）皆出現在**可見 body 文字**中（不可只放 \`aria-label\` / \`data-*\`）。
8. 狀態列 **9:41** 必含（可見文字）。
9. 所有可點元素具 \`cursor:pointer\` + \`:hover\` / \`:active\` 回饋；播放鍵 ▶/⏸ 兩態；tab / 卡片有 active 視覺。
10. 任何 \`transition\` / \`animation\` 只動 \`transform\` / \`opacity\`，並附 \`@media (prefers-reduced-motion: reduce)\`。
11. 單檔 HTML ≤ 200 KB；**無外部 CDN**（\`<link>\` \`<script>\` \`<img>\` 的 src/href 不可 \`http://\` / \`https://\`）。
12. 不使用任何 framework CSS（Tailwind 等），純 CSS 變數驅動；專輯封面全為純 CSS、不引用圖檔。

## Required Images

此風格為**純 CSS 風格，不使用任何點陣圖**。\`assets-manifest.json\` 為 \`{ "style": "Y2K 手機", "images": [] }\`。所有專輯封面、頭像、icon、星星裝飾一律以純 CSS（鉻金屬漸層框 + \`conic-gradient\` / \`linear-gradient\` / 幾何色塊 / \`clip-path\` 線框 / 文字 ✦✧）繪製，不引用任何 \`assets/\` 圖檔或外部圖片。

---

## Reference Snippet

\`\`\`css
/* ── 手機殼（三層 flex column） ─────────────────────────────────── */
.device {
  position: relative;
  width: var(--screen-w);
  height: var(--screen-h);
  margin: 0 auto;
  display: flex; flex-direction: column;
  border-radius: var(--device-radius);
  overflow: hidden;
  background: var(--chrome-soft);
  box-shadow: 0 24px 60px rgba(30,60,140,0.35), inset 0 0 0 2px rgba(255,255,255,0.6);
  font-family: var(--font-ui);
  color: var(--y2k-ink);
}
/* 透明殼底紋光暈 + 星星貼紙 */
.device::before {
  content: ""; position: absolute; inset: 0; pointer-events: none; z-index: 0;
  background:
    radial-gradient(220px 220px at 88% 8%, rgba(56,224,255,0.35), transparent 70%),
    radial-gradient(220px 220px at 6% 92%, rgba(255,122,217,0.30), transparent 70%);
  filter: blur(2px);
}
.star { position: absolute; color: #fff; pointer-events: none; z-index: 1;
  text-shadow: 0 0 8px rgba(56,224,255,0.9); animation: twinkle 2.6s ease-in-out infinite; }
@keyframes twinkle { 0%,100%{opacity:.5} 50%{opacity:1} }

/* 可捲動內容區：底部留出 mini-player + tab-bar，內容不被遮擋 */
.viewport {
  position: relative; z-index: 2;
  flex: 1; overflow-y: auto;
  padding: var(--sp-4) var(--content-pad)
           calc(var(--miniplayer-h) + var(--tabbar-h)) var(--content-pad);
  display: flex; flex-direction: column; gap: var(--sp-5);
}

/* ── 狀態列 9:41 ─────────────────────────────────────────────── */
.statusbar {
  position: sticky; top: 0; z-index: 30; flex: 0 0 var(--statusbar-h);
  display: flex; align-items: center; justify-content: space-between;
  padding: 0 var(--sp-5);
  font: 700 14px/1 var(--font-num); color: var(--y2k-ink);
  background: linear-gradient(180deg, rgba(255,255,255,0.85), rgba(214,230,251,0.7));
  border-bottom: 1px solid rgba(255,255,255,0.7);
  backdrop-filter: blur(6px);
}
.statusbar .battery {
  width: 24px; height: 12px; border-radius: 3px;
  border: 1.5px solid var(--y2k-ink);
  background: var(--jelly-green);
  box-shadow: 0 0 6px rgba(141,255,90,0.6);
}

/* ── 區段標題列（標題 + 查看全部） ───────────────────────────────── */
.sec-head { display: flex; align-items: baseline; justify-content: space-between; margin-bottom: var(--sp-3); }
.sec-head h2 { font: 700 17px/1.3 var(--font-ui); margin: 0; }
.sec-head a { font: 600 13px/1.3 var(--font-ui); color: var(--y2k-blue); cursor: pointer; text-decoration: none; }
.sec-head a:hover { text-decoration: underline; }

/* ── 鉻金屬 navbar ───────────────────────────────────────────── */
.navbar {
  display: flex; align-items: center; justify-content: space-between;
  background: var(--chrome); padding: var(--sp-3) var(--content-pad);
  color: #fff; text-shadow: 0 1px 2px rgba(20,40,90,0.8);
  font: 800 22px/1.1 var(--font-ui);
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.9), 0 4px 10px rgba(40,80,160,0.25);
}

/* ── 半透塑膠卡片（hover 抬升） ─────────────────────────────────── */
.plastic-card {
  position: relative;
  background: var(--plastic-fill);
  border-radius: var(--r-bubble);
  border: 1px solid var(--plastic-stroke);
  box-shadow: var(--sh-card);
  backdrop-filter: blur(8px);
  padding: var(--sp-4);
  transition: transform var(--dur-base) var(--ease-jelly), box-shadow var(--dur-base) ease;
}
.plastic-card[role="button"], a.plastic-card { cursor: pointer; }
.plastic-card[role="button"]:hover, a.plastic-card:hover { transform: translateY(-3px); box-shadow: var(--sh-card-lift); }
.plastic-card[role="button"]:active, a.plastic-card:active { transform: translateY(-1px) scale(.99); }

/* ── 果凍泡泡按鈕（specular 高光 + 按壓下沉） ───────────────────── */
.jelly-btn {
  position: relative; border: none; cursor: pointer;
  border-radius: var(--r-pill); padding: 12px 22px;
  background: var(--jelly-blue); color: #fff;
  font: 700 15px/1 var(--font-ui); text-shadow: 0 1px 2px rgba(20,40,120,0.7);
  box-shadow: var(--sh-jelly); overflow: hidden;
  transition: transform var(--dur-fast) var(--ease-jelly), box-shadow var(--dur-fast) ease;
}
.jelly-btn::before {
  content: ""; position: absolute; inset: 3px 6px auto 6px; height: 42%;
  border-radius: var(--r-pill); background: var(--jelly-glass); pointer-events: none;
  transition: opacity var(--dur-fast) ease;
}
.jelly-btn:hover { box-shadow: var(--sh-jelly), 0 0 14px rgba(47,111,255,0.5); }
.jelly-btn:active { transform: scale(.96); box-shadow: var(--sh-jelly-press); }
.jelly-btn:active::before { opacity: .6; }
.jelly-btn:focus-visible { outline: 2px solid var(--y2k-neon-blue); outline-offset: 2px; }
.jelly-btn--green { background: var(--jelly-green); color: var(--y2k-ink); text-shadow: none; }

/* ── 分類 chip（果凍膠囊，active 螢光） ─────────────────────────── */
.chip {
  display: inline-flex; align-items: center; gap: var(--sp-1); cursor: pointer;
  padding: 7px 14px; border-radius: var(--r-pill);
  background: rgba(255,255,255,0.7); border: 1px solid var(--plastic-stroke-d);
  color: var(--y2k-ink-soft); font: 600 13px/1 var(--font-ui);
  transition: transform var(--dur-fast) var(--ease-jelly), box-shadow var(--dur-base) ease;
}
.chip:hover { transform: translateY(-1px); }
.chip:active { transform: scale(.95); }
.chip[aria-selected="true"] {
  background: var(--jelly-blue); color: #fff;
  border-color: var(--y2k-neon-blue); box-shadow: var(--glow-neon);
}

/* ── 純 CSS 鉻框專輯封面（禁圖檔） ───────────────────────────────── */
.cover {
  position: relative; aspect-ratio: 1; border-radius: var(--r-cover);
  padding: 5px; background: var(--chrome); box-shadow: var(--sh-card);
}
.cover > .art {
  width: 100%; height: 100%; border-radius: 20px;
  background:
    conic-gradient(from 200deg at 30% 30%, var(--y2k-neon-pink), var(--y2k-blue), var(--y2k-neon-blue), var(--y2k-neon-pink)),
    linear-gradient(135deg, rgba(255,255,255,0.5), rgba(255,255,255,0));
  box-shadow: inset 0 2px 6px rgba(255,255,255,0.8), inset 0 -8px 16px rgba(20,40,120,0.45);
}
.cover .halo { position: absolute; inset: -8px; border-radius: 50%;
  background: radial-gradient(circle, rgba(56,224,255,0.35), transparent 70%);
  animation: spin 18s linear infinite; pointer-events: none; }
@keyframes spin { to { transform: rotate(360deg); } }
.cover::after { content: "✦"; position: absolute; top: 8px; right: 10px;
  color: #fff; font-size: 16px; text-shadow: 0 0 8px rgba(56,224,255,0.9); }

/* ── 曲目列 / 清單列 ─────────────────────────────────────────── */
.song-row {
  display: flex; align-items: center; gap: var(--sp-3); cursor: pointer;
  padding: 11px 12px; border-radius: var(--r-bubble);
  background: var(--plastic-fill-2); border: 1px solid rgba(255,255,255,0.8);
  transition: transform var(--dur-fast) var(--ease-jelly), background var(--dur-base) ease;
}
.song-row:hover { transform: translateX(2px); background: rgba(255,255,255,0.72); }
.song-row:active { transform: scale(.99); }
.song-row .idx {
  flex: 0 0 26px; height: 26px; border-radius: 50%; display: grid; place-items: center;
  background: var(--chrome-blue); color: #fff; font: 700 12px/1 var(--font-num);
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.7);
}
.song-row .meta { min-width: 0; }
.song-row .meta .title { font: 500 15px/1.3 var(--font-ui); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.song-row .meta .artist { font: 600 13px/1.2 var(--font-ui); color: var(--y2k-ink-soft); }
.song-row .time { margin-left: auto; font: 600 11px/1 var(--font-num); color: var(--y2k-ink-soft); }

/* ── 搜尋框（內凹果凍） ──────────────────────────────────────── */
.search-box {
  display: flex; align-items: center; gap: var(--sp-2);
  padding: 10px 14px; border-radius: var(--r-pill);
  background: rgba(255,255,255,0.7); box-shadow: var(--sh-inset);
  color: var(--y2k-ink-soft); font: 500 15px/1 var(--font-ui);
}

/* ── 播放器 now-playing ─────────────────────────────────────── */
.now-playing .play-main {
  width: 76px; height: 76px; border-radius: 50%; cursor: pointer; border: none;
  background: var(--jelly-blue); color: #fff;
  box-shadow: var(--sh-jelly), 0 0 20px rgba(47,111,255,0.5);
  transition: transform var(--dur-fast) var(--ease-jelly);
}
.now-playing .play-main:active { transform: scale(.94); }
.now-playing .progress {
  height: 8px; border-radius: var(--r-pill);
  background: var(--chrome); box-shadow: var(--sh-inset);
}
.now-playing .progress > i {
  display: block; height: 100%; width: 56%; border-radius: var(--r-pill);
  background: linear-gradient(90deg, var(--y2k-neon-blue), var(--y2k-blue));
  box-shadow: var(--glow-neon);
}
.now-playing .badge {
  display: inline-flex; padding: 5px 12px; border-radius: var(--r-pill);
  background: var(--jelly-green); color: var(--y2k-ink);
  font: 600 11px/1 var(--font-ui); box-shadow: var(--sh-jelly);
}
/* 歌詞同步：當前行高亮 */
.lyrics .line { color: var(--y2k-ink-soft); opacity: .55; font: 500 15px/1.6 var(--font-ui); transition: opacity var(--dur-base) ease; }
.lyrics .line.active { opacity: 1; font-weight: 800; color: var(--y2k-blue-d);
  background: linear-gradient(90deg, rgba(56,224,255,0.25), transparent); border-radius: var(--r-sm); padding: 0 6px; }

/* ── 訂閱卡（主打態） ────────────────────────────────────────── */
.plan { padding: var(--sp-4); border-radius: var(--r-bubble);
  background: var(--plastic-fill); border: 1px solid var(--plastic-stroke); box-shadow: var(--sh-card); }
.plan .price { font: 800 22px/1.1 var(--font-num); color: var(--y2k-ink); }
.plan--featured { background: var(--chrome-blue); color: #fff; border: 2px solid var(--y2k-neon-blue); box-shadow: var(--glow-neon), var(--sh-card); }
.plan--featured .price { color: #fff; text-shadow: 0 1px 2px rgba(20,40,120,.7); }
.plan .tag { display: inline-flex; padding: 3px 10px; border-radius: var(--r-pill);
  background: var(--jelly-pink); color: #fff; font: 700 11px/1 var(--font-ui); box-shadow: var(--glow-pink); }

/* ── 底座：mini-player 疊在 tab-bar 上方，永遠在底 ───────────────── */
.dock { position: sticky; bottom: 0; z-index: 30; flex: 0 0 auto; }

.mini-player {
  display: flex; align-items: center; gap: var(--sp-3); cursor: pointer;
  height: var(--miniplayer-h); padding: 0 var(--content-pad);
  background: linear-gradient(180deg, rgba(255,255,255,0.85), rgba(214,230,251,0.72));
  border-top: 1px solid rgba(255,255,255,0.8);
  backdrop-filter: blur(8px);
  box-shadow: 0 -2px 10px rgba(40,80,160,0.18);
  transition: background var(--dur-base) ease;
}
.mini-player:hover { background: linear-gradient(180deg, rgba(255,255,255,0.95), rgba(214,230,251,0.85)); }
.mini-player:active { transform: scale(.995); }
.mini-player .thumb { flex: 0 0 40px; height: 40px; border-radius: 10px; background: var(--chrome); padding: 3px; }
.mini-player .mp-title { font: 700 13px/1.2 var(--font-ui); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.mini-player .mp-artist { font: 600 11px/1.1 var(--font-ui); color: var(--y2k-ink-soft); }
.mini-player .mp-play { flex: 0 0 34px; height: 34px; margin-left: auto; border: none; cursor: pointer;
  border-radius: 50%; background: var(--jelly-blue); color: #fff; box-shadow: var(--sh-jelly); }
.mini-player .mp-play:active { transform: scale(.92); box-shadow: var(--sh-jelly-press); }
/* player 畫面時隱藏 mini-player */
.screen-player ~ .dock .mini-player,
[data-active-screen="player"] .mini-player { display: none; }

/* ── 底部 tab-bar ────────────────────────────────────────────── */
.tabbar {
  height: var(--tabbar-h); padding-bottom: var(--safe-bottom);
  display: flex; justify-content: space-around; align-items: center;
  background: var(--chrome);
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.9), 0 -4px 14px rgba(40,80,160,0.25);
}
.tabbar .tab { display: flex; flex-direction: column; align-items: center; gap: 3px; cursor: pointer;
  font: 600 11px/1.3 var(--font-ui); color: var(--y2k-ink-soft); text-align: center;
  transition: transform var(--dur-fast) var(--ease-jelly), color var(--dur-base) ease; }
.tabbar .tab:hover { transform: translateY(-1px); }
.tabbar .tab:active { transform: scale(.94); }
.tabbar .tab[aria-current="page"] { color: var(--y2k-blue-d); filter: drop-shadow(var(--glow-neon)); }
.tabbar .tab[aria-current="page"] .ic { background: var(--jelly-blue); box-shadow: var(--glow-neon); }

/* ── Reduced motion ─────────────────────────────────────────── */
@media (prefers-reduced-motion: reduce) {
  * { animation: none !important; transition: none !important; }
}
\`\`\`
`,"../../.claude/skills/design-american-retro-print/SKILL.md":`---
name: design-american-retro-print
description: Use when generating a single-file HTML page for the 「島嶼共鳴 2026」music festival in American Retro Print / Mid-century screen-print style. Triggers on 美式復古印刷、screen print、woodstock poster、70s rock poster、retro印刷、Saul Bass、Aaron Draplin.
user-invocable: true
---

# 美式復古印刷 American Retro Print — 島嶼共鳴 2026

## Style Philosophy

借鑑 1950–1970 年代美國印刷年代——Saul Bass 的電影海報、Woodstock 1969 的搖滾海報、Hatch Show Print 的木刻活字、現代設計師 Aaron Draplin 的 logo 哲學。核心是 **限定 4-5 色印刷 + 粗體 slab-serif + 網點質感**，所有設計痕跡來自「機械印刷的不完美」：油墨偏色、套色錯位、紙張紋理。在音樂節網頁裡，這風格把獨立音樂節打扮成 **1971 年某個夏天舉辦的傳奇戶外搖滾節**——粗獷、紙質、世代感。

三個視覺辨識特徵：
1. **限制調色盤**（4-5 色）：奶油白、油墨黑、磚紅、芥末黃、海軍藍
2. **粗體 slab-serif 標題、letterpress 凸感、scratchy texture**
3. **網點 halftone、套色偏移、紙質背景**（用 SVG noise filter / CSS gradient）

## Design Tokens

\`\`\`css
:root {
  --rp-paper: #f4e9d3;          /* cream paper */
  --rp-ink: #232020;            /* off-black ink */
  --rp-red: #c83a30;            /* brick red */
  --rp-mustard: #e3a82e;        /* mustard yellow */
  --rp-navy: #1e3a5f;           /* deep navy */
  --rp-teal: #2e7d7d;

  --color-bg: var(--rp-paper);
  --color-fg: var(--rp-ink);
  --color-accent: var(--rp-red);

  --radius-none: 0;
  --radius-sm: 2px;

  --shadow-print: 2px 2px 0 var(--rp-red);
  --shadow-misprint: 3px 3px 0 var(--rp-mustard);

  --font-display: 'Georgia', 'Bodoni MT', 'PingFang TC', 'Noto Sans TC', serif;
  --font-display-bold: 'Georgia', 'Times New Roman', 'PingFang TC', serif;
  --font-body: 'Georgia', 'PingFang TC', 'Noto Sans TC', serif;
  --font-condensed: 'Impact', 'PingFang TC', sans-serif;
}
\`\`\`

## Typography Scale

| 級距 | 大小 | 用途 |
| --- | --- | --- |
| display | clamp(56px, 9vw, 120px) / 0.9 / 900 / -0.02em / uppercase | Hero |
| h1 | clamp(36px, 5vw, 56px) / 1.0 / 800 / uppercase | 區塊大標 |
| h2 | 22px / 1.25 / 700 / uppercase / 0.04em | 子標 |
| body | 16px / 1.65 / 400 / Georgia | 段落 |
| caption | 11px / 1.3 / 700 / 0.2em / uppercase | label |

## Layout Rules

- 背景：奶油紙底 + 細微 noise texture（用 SVG filter 或 CSS gradient）
- 容器寬度：max-width 1100px
- 區塊邊框：常見粗黑橫線（border-top 6-8px）作為區塊分隔
- 印刷風格 typography：頂端套色印字、letterpress 字體做 deep shadow

各區塊構圖：
- **hero**：仿 Woodstock 海報，巨大粗體 condensed 大字「島嶼共鳴」放上方、中央放音樂家剪影插圖、下方手繪風日期 + 場地、最下方紅色橫條 CTA
- **about**：粗體年代序章「EST. 2021 · VOL. VI」+ 段落，網點紋理底
- **lineup**：12 樂團名以 condensed 大字列表式呈現（像 Hatch Show Print 海報），headliner 用大號 + red color
- **schedule**：3 個 day 海報並排，每個 day 仿單張小傳單樣式
- **venues**：3 段，每段配復古鋼筆插畫風格圖示
- **tickets**：仿復古票根（perforated edge + ticket number + 紅色 admit one stamp）
- **travel**：圖文混排，左邊 vintage 圖示、右邊 Georgia 段落
- **sponsors**：仿賽事節目本贊助名單頁，title 用 60pt slab 字、其他依規模遞減
- **footer-faq**：FAQ 用 Q. A. 印刷格式排版、邊角加 Print mark

## Do / Don't

| Do | Don't |
| --- | --- |
| 顏色嚴守 4-5 色調色盤 | 用 8 色以上全光譜 |
| 粗體 slab-serif 標題、letterpress 風格 | 用 thin 字重或現代 sans-serif |
| 加 noise texture 模擬紙質 | 用平滑漸層 |
| 套色偏移效果（shadow-print） | 用模糊陰影 |
| 用全大寫拼寫英文，中文用方正粗黑或粗 Georgia | 全用 lowercase 風格 |

## Required Output Contract

通用契約。鼓勵用 SVG noise filter 製作紙質背景。

## Required Images

依 \`assets-manifest.json\`，建議插畫風格圖（不要相片）。

## Reference Snippet

紙質紋理背景：
\`\`\`css
body {
  background-color: var(--rp-paper);
  background-image:
    radial-gradient(circle at 15% 20%, rgba(35,32,32,0.04) 0 1px, transparent 1px),
    radial-gradient(circle at 70% 50%, rgba(35,32,32,0.03) 0 1px, transparent 1px),
    radial-gradient(circle at 35% 85%, rgba(35,32,32,0.04) 0 1px, transparent 1px);
  background-size: 200px 200px;
}
\`\`\`

套色偏移標題：
\`\`\`css
.misprint-title {
  font-family: var(--font-display);
  font-weight: 900;
  text-transform: uppercase;
  color: var(--rp-ink);
  text-shadow: 3px 3px 0 var(--rp-red), 5px 5px 0 var(--rp-mustard);
  letter-spacing: -0.02em;
}
\`\`\`

復古票根：
\`\`\`css
.ticket-stub {
  background: var(--rp-paper);
  border: 2px solid var(--rp-ink);
  padding: 24px;
  position: relative;
  font-family: var(--font-body);
}
.ticket-stub::before,
.ticket-stub::after {
  content: '';
  position: absolute;
  top: 50%; transform: translateY(-50%);
  width: 24px; height: 24px;
  border-radius: 50%;
  background: var(--rp-paper);
  border: 2px solid var(--rp-ink);
}
.ticket-stub::before { left: -14px; }
.ticket-stub::after  { right: -14px; }
.ticket-stub .stamp {
  display: inline-block;
  border: 2px solid var(--rp-red);
  color: var(--rp-red);
  padding: 4px 12px;
  font-weight: 900;
  letter-spacing: 0.1em;
  transform: rotate(-6deg);
}
\`\`\`

Section divider（粗黑橫線 + 標籤）：
\`\`\`css
.print-divider {
  border-top: 8px solid var(--rp-ink);
  padding-top: 32px;
  margin-top: 80px;
}
.print-label {
  display: inline-block;
  background: var(--rp-ink);
  color: var(--rp-paper);
  padding: 4px 14px;
  font-family: var(--font-condensed);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 24px;
}
\`\`\`
`,"../../.claude/skills/design-ascii-terminal/SKILL.md":`---
name: design-ascii-terminal
description: Use when generating a single-file HTML page for the 「島嶼共鳴 2026」music festival in ASCII Terminal / CLI / Green Phosphor aesthetic. Triggers on ASCII、Terminal、CLI、80x24、green phosphor、retro computing、Curses TUI、boxdraw、Lynx.
user-invocable: true
---

# ASCII 終端機 ASCII Terminal — 島嶼共鳴 2026

## Style Philosophy

ASCII 終端機美學致敬 1970-1980 年代 VT100 / PDP-11 終端機時代——綠底螢光磷光屏、80×24 文字格、box-drawing 字元 \`┌─┐│└┘\` 構成 UI 邊框、ANSI 顏色、\`█▓▒░\` 不同密度方塊組成「像素」。在音樂節網頁中，這風格讓「島嶼共鳴」變成 **登入 BBS 後看到的活動公告**——純文字、嚴格網格、極快、可被 Lynx 等文字瀏覽器良好閱讀。

三個視覺辨識特徵：
1. **monospace 字體**、嚴格網格、80 字寬限制感
2. **box-drawing 字元** 構成所有 UI 邊框與分隔
3. **限定色票**：黑底配磷綠 / 琥珀色 / 白；少量 ANSI 紅藍黃

## Design Tokens

\`\`\`css
:root {
  --term-bg: #0a0e0a;            /* CRT 黑底（不純黑） */
  --term-bg-2: #0f160f;
  --term-green: #33ff66;         /* phosphor green */
  --term-green-dim: #22aa44;
  --term-amber: #ffaa00;
  --term-cyan: #66ddff;
  --term-magenta: #ff66cc;
  --term-white: #e8f0e8;
  --term-grey: #88a088;

  --color-bg: var(--term-bg);
  --color-fg: var(--term-green);
  --color-accent: var(--term-amber);

  --radius-none: 0;

  --font-display: 'IBM Plex Mono', 'JetBrains Mono', 'Cascadia Code', 'Consolas', 'Menlo', 'Courier New', monospace;
  --font-body: 'IBM Plex Mono', 'Cascadia Code', 'Consolas', 'Menlo', 'Courier New', monospace;
  --font-mono: var(--font-body);
}

* { font-family: var(--font-mono); }
\`\`\`

## Typography Scale

| 級距 | 大小 | 用途 |
| --- | --- | --- |
| display | clamp(24px, 4.5vw, 56px) / 1.0 / 700 / 0.04em / monospace | Hero ASCII art 標題 |
| h1 | 22px / 1.1 / 700 / monospace | 區塊標題 |
| h2 | 18px / 1.3 / 700 / monospace | 子標 |
| body | 14px / 1.6 / 400 / monospace | 段落 |
| caption | 12px / 1.4 / 400 / monospace | label |

中文也用 monospace（系統 monospace fallback 到 PingFang TC）。

## Layout Rules

- 背景：CRT 綠底（深綠黑）+ 微 scanline overlay（CSS gradient repeating）
- 容器寬度：固定 monospace 字寬（80ch / 100ch）、置中顯示
- 排版：所有元素用 box-drawing 字元構成邊框（\`┌─┐│└─┘\`）；不用 CSS border
- 中文字 1ch ≈ 2 個西文字寬，要注意對齊與排版

各區塊構圖：
- **hero**：80×24 BBS 風格的啟動畫面，ASCII art logo（用 figlet 字體風格的「ISLAND RESONANCE」） + 對話框 + 啟動提示 \`> press [B]uy ticket...\`
- **about**：仿 \`man\` 手冊頁：左 NAME / SYNOPSIS / DESCRIPTION 欄、右段落
- **lineup**：仿 \`ls -la\` 輸出：列表式 \`2026-08-21  20:30  鯨向海 [HEADLINER]  共鳴山主舞台\`
- **schedule**：仿 cron table，3 日 box-drawing 表格
- **venues**：仿 ASCII 地圖，每個舞台用 \`[A]\` \`[B]\` \`[C]\` 標記
- **tickets**：仿 dialog 視窗 box，3 個方框並排，VIP 中間配 \`*\` 角飾
- **travel**：仿 \`cat README.md\` 輸出，序號 1. 2. 3.
- **sponsors**：仿 BBS welcome banner，title 用 figlet 大字 ASCII
- **footer-faq**：仿 \`--help\` 輸出，Q. / A. 縮排

## Do / Don't

| Do | Don't |
| --- | --- |
| 所有 UI 邊框用 \`┌─┐│└┘├┤┬┴┼\` box-draw 字元 | 用 CSS border 或 background |
| 整頁 monospace 字體、嚴格網格 | 混用 proportional 字體 |
| 加掃描線、螢光發光效果 | 純色平面顯示 |
| 顯示 prompt \`>\` 、command \`$\` 提示符 | 隱藏終端機隱喻 |
| 對比度：magnet green (#33ff66) on (#0a0e0a) > 8:1 | 用低彩度暗綠 — 不夠 phosphor |

## Required Output Contract

通用契約。

## Required Images

依 \`assets-manifest.json\` — 通常 1-2 張 ASCII art-like 圖即可（或完全 CSS-only）。

## Reference Snippet

CRT 掃描線：
\`\`\`css
body::before {
  content: '';
  position: fixed;
  inset: 0;
  pointer-events: none;
  background: repeating-linear-gradient(
    0deg,
    rgba(0,0,0,0.05) 0 1px,
    transparent 1px 2px
  );
  z-index: 9999;
}
body::after {
  content: '';
  position: fixed;
  inset: 0;
  pointer-events: none;
  background: radial-gradient(ellipse at center, transparent 60%, rgba(0,0,0,0.4) 100%);
  z-index: 9998;
}
\`\`\`

Box-drawing 容器：
\`\`\`css
.term-box {
  padding: 8px 12px 12px;
  position: relative;
  color: var(--term-green);
  background: var(--term-bg);
}
.term-box::before {
  content: '┌─ ' attr(data-title) ' ' attr(data-fill) '┐';
  display: block;
  white-space: pre;
  letter-spacing: 0;
  margin-bottom: 8px;
}
/* 或用 .term-box 內手寫 ASCII：
   ┌──── LINEUP ────────────┐
   │ ...content...           │
   └─────────────────────────┘
*/
\`\`\`

ASCII art logo（hero）：
\`\`\`html
<pre class="ascii-logo">
██ ███████ ██       █████  ███    ██ ██████
██ ██      ██      ██   ██ ████   ██ ██   ██
██ ███████ ██      ███████ ██ ██  ██ ██   ██
██      ██ ██      ██   ██ ██  ██ ██ ██   ██
██ ███████ ███████ ██   ██ ██   ████ ██████

█████   ████  ██████  ██ ███    ██   ████  ███    ██  ████  ███████
██  ██ ██     ██   ██ ██ ████   ██  ██  ██ ████   ██ ██     ██
██████  ████  ██████  ██ ██ ██  ██ ██    ██ ██ ██  ██ ██     ██████
██  ██     ██ ██   ██ ██ ██  ██ ██ ████████ ██  ██ ██ ██     ██
██  ██  ████  ██   ██ ██ ██   ████ ██    ██ ██   ████  ████  ███████
</pre>
\`\`\`

\`\`\`css
.ascii-logo {
  font-family: var(--font-mono);
  color: var(--term-green);
  font-size: 10px;
  line-height: 1.0;
  white-space: pre;
  text-shadow: 0 0 4px var(--term-green);
}
\`\`\`

Prompt 提示：
\`\`\`css
.prompt::before {
  content: '$ ';
  color: var(--term-amber);
}
.cursor::after {
  content: '█';
  color: var(--term-green);
  animation: blink 1s steps(2) infinite;
}
@keyframes blink { 50% { opacity: 0; } }
\`\`\`

Dialog 視窗：
\`\`\`html
<div class="term-dialog">
  <pre>
┌─────────── 票券資訊 ──────────────┐
│  單日票      NT$  2,200           │
│  三日通票    NT$  5,400  [推薦]   │
│  VIP 三日    NT$ 12,800           │
│                                   │
│  [ B ] 立即購票    [ Q ] 取消    │
└───────────────────────────────────┘
  </pre>
</div>
\`\`\`
`,"../../.claude/skills/design-bauhaus/SKILL.md":`---
name: design-bauhaus
description: Use when generating a single-file HTML page for the 「島嶼共鳴 2026」music festival in Bauhaus (包浩斯) style. Triggers on Bauhaus、包浩斯、Herbert Bayer、Kandinsky、幾何構成、primary colors red blue yellow、circle square triangle.
user-invocable: true
---

# 包浩斯 Bauhaus — 島嶼共鳴 2026

## Style Philosophy

包浩斯（1919–1933）是德國工藝美術學院運動的縮影：**形隨機能**、**幾何即美**、**三原色與基本形狀就足夠表達一切**。康定斯基把三原色與三幾何（圓圓圓對應紅黃藍 / 三角方圓）固定下來，這套美學至今仍是現代設計的母語。在音樂節網頁中，包浩斯讓「島嶼共鳴」回到 100 年前的德國設計學院——一切都是大圓、大三角、大方塊與粗體 sans-serif，紅藍黃的對位構成。

三個視覺辨識特徵：
1. **三原色（紅 / 黃 / 藍）+ 黑白**為絕對主色
2. **大尺寸幾何形狀**（圓、三角、方）作為構圖元素而非裝飾
3. **粗體 grotesque sans-serif、極大字體、緊密 leading**

## Design Tokens

\`\`\`css
:root {
  --bh-white: #f7f3ea;          /* 米白紙 */
  --bh-black: #111111;
  --bh-red: #d33023;            /* Bauhaus red */
  --bh-blue: #2253a8;           /* Bauhaus blue */
  --bh-yellow: #f4c027;         /* Bauhaus yellow */

  --color-bg: var(--bh-white);
  --color-fg: var(--bh-black);
  --color-accent: var(--bh-red);

  --radius-none: 0;
  --radius-circle: 50%;

  --font-display: 'Futura', 'PingFang TC', 'Noto Sans TC', 'Helvetica Neue', sans-serif;
  --font-body: 'Futura', 'PingFang TC', 'Noto Sans TC', 'Helvetica Neue', sans-serif;
  --font-condensed: 'Impact', sans-serif;
}
\`\`\`

## Typography Scale

| 級距 | 大小 | 用途 |
| --- | --- | --- |
| display | clamp(72px, 12vw, 180px) / 0.85 / 900 / -0.02em | Hero / 大型標題 |
| h1 | clamp(40px, 6vw, 72px) / 0.95 / 800 / -0.01em | 區塊大標 |
| h2 | 22px / 1.1 / 700 / 0.02em | 子標 |
| body | 15px / 1.55 / 400 | 段落 |
| caption | 11px / 1.3 / 700 / 0.18em / uppercase | label / kicker |

包浩斯字體偏好：geometric sans-serif（Futura / Avenir / Geometric Sans），中文用粗黑體。

## Layout Rules

- 背景：米白色 + 巨大幾何形狀（一個紅圓、一個藍三角、一個黃方塊）固定於頁面背景
- 容器寬度：max-width 1200px
- 幾何形狀互相疊壓、形成構成主義式的張力（部分穿越文字、用 mix-blend-mode）
- 排版常採大膽不對稱布局（左下角小、右上角超大）

各區塊構圖：
- **hero**：左下角小 caption + 中央一個巨大紅圓 + 巨大標題壓在圓上 + 右上角黃方塊內 CTA
- **about**：左藍三角 + 右文字 + 4 個圓形數字（紅 / 黃 / 藍 / 黑各一）
- **lineup**：12 個方格構成 grid、每格是樂團卡，背景輪換紅 / 藍 / 黃 / 白；headliner 卡用實心紅 / 藍底白字
- **schedule**：3 個 day 用三角 / 方 / 圓圖示標誌，時段表格用 hairline 黑線
- **venues**：3 個大幾何圖示（圓三角方）對應 3 舞台、各佔 1/3 + 文字
- **tickets**：3 張票卡分別配紅 / 黃 / 藍背景、白字大價格
- **travel**：3 步驟，序號 01 02 03 設計成紅 / 黃 / 藍粗體大字
- **sponsors**：純文字三組，title 用粗體 60px、配紅圓 icon
- **footer-faq**：每條 FAQ 為 hairline 黑分隔，問題用粗體

## Do / Don't

| Do | Don't |
| --- | --- |
| 顏色嚴守三原色 + 黑白 | 用粉色 / 紫色 / 漸層 |
| 大尺寸幾何形狀作為主要構圖元素 | 用裝飾性小圖案 |
| 粗體 sans-serif、緊密 leading | 用襯線字體或細字 |
| 非對稱、緊張的布局 | 完全置中對稱 |
| 形狀直接觸碰甚至壓到文字 | 形狀與文字完全分離 |

## Required Output Contract

通用契約。

## Required Images

依 \`assets-manifest.json\`。包浩斯本身就是「幾何即圖案」，圖片可以少用，多用 CSS 純色幾何。

## Reference Snippet

幾何背景：
\`\`\`css
.shape-circle {
  position: absolute;
  width: 400px; height: 400px;
  background: var(--bh-red);
  border-radius: 50%;
}
.shape-triangle {
  position: absolute;
  width: 0; height: 0;
  border-left: 200px solid transparent;
  border-right: 200px solid transparent;
  border-bottom: 360px solid var(--bh-blue);
}
.shape-square {
  position: absolute;
  width: 320px; height: 320px;
  background: var(--bh-yellow);
}
\`\`\`

數字大字：
\`\`\`css
.numeral {
  font-family: var(--font-display);
  font-size: clamp(80px, 12vw, 200px);
  font-weight: 900;
  line-height: 0.85;
  color: var(--bh-black);
  letter-spacing: -0.04em;
}
.numeral.red { color: var(--bh-red); }
.numeral.blue { color: var(--bh-blue); }
.numeral.yellow { color: var(--bh-yellow); }
\`\`\`

色塊卡：
\`\`\`css
.bauhaus-card {
  background: var(--bh-red);
  color: var(--bh-white);
  padding: 32px 28px;
  font-family: var(--font-display);
  position: relative;
}
.bauhaus-card.blue { background: var(--bh-blue); }
.bauhaus-card.yellow { background: var(--bh-yellow); color: var(--bh-black); }
.bauhaus-card.white {
  background: var(--bh-white);
  color: var(--bh-black);
  border: 2px solid var(--bh-black);
}
\`\`\`

包浩斯式 hero composition：
\`\`\`css
.bauhaus-hero {
  position: relative;
  height: 80vh;
  background: var(--bh-white);
  overflow: hidden;
}
.bauhaus-hero .shape-circle {
  top: 50%; left: 30%;
  transform: translate(-50%, -50%);
}
.bauhaus-hero .shape-triangle {
  right: 5%; top: 60%;
}
.bauhaus-hero .title {
  position: absolute;
  bottom: 20%;
  left: 8%;
  font-family: var(--font-display);
  font-weight: 900;
  font-size: clamp(72px, 12vw, 180px);
  line-height: 0.85;
  color: var(--bh-black);
  mix-blend-mode: multiply;
  z-index: 2;
}
\`\`\`
`,"../../.claude/skills/design-brutalism/SKILL.md":`---
name: design-brutalism
description: Use when generating a single-file HTML page for the 「島嶼共鳴 2026」music festival in Brutalism (野獸派 / Brutalist Web) style. Triggers on 野獸派、Brutalism、Brutalist web、raw HTML、anti-design、monospace、harsh contrast、Balenciaga website.
user-invocable: true
---

# 野獸派 Brutalism — 島嶼共鳴 2026

## Style Philosophy

Brutalism 原指 1950 年代清水混凝土建築運動，2010 年代 web design 借用此詞——意味著「**故意違反 UX 規範**」：粗糙、裸露、邊框醜、字體大到沒道理、按鈕長得像 90 年代教學網。但它不是「無腦亂排」，而是**有意識地拒絕舒適感**，呼籲設計回到內容本身。在音樂節網頁，這風格讓「島嶼共鳴」看起來像 **某個獨立廠牌剛印出來的傳單，還沒來得及設計過**——粗糙、急迫、誠實。

三個視覺辨識特徵：
1. **粗黑邊框、極端對比**（純黑白偶爾螢光色）
2. **monospace 或粗 grotesque 字體**、巨大粗體標題、無修飾段落
3. **故意「醜」的元素**：偏移容器、超大箭頭、未對齊按鈕、純色 alert 標籤

## Design Tokens

\`\`\`css
:root {
  --bru-bg: #f0eeea;            /* 工地白 / 紙板色 */
  --bru-paper: #ffffff;
  --bru-fg: #000000;
  --bru-fg-mute: #444444;
  --bru-border: #000000;
  --bru-shock-yellow: #fff200;
  --bru-shock-pink: #ff007f;
  --bru-shock-blue: #00f;
  --bru-shock-red: #ff0000;

  --color-bg: var(--bru-bg);
  --color-fg: var(--bru-fg);
  --color-accent: var(--bru-shock-yellow);

  --radius-none: 0;
  --radius-sm: 0;

  --border-thick: 3px solid var(--bru-border);
  --border-extra: 6px solid var(--bru-border);

  --font-display: 'Helvetica Neue', 'Arial Narrow', 'PingFang TC', 'Noto Sans TC', sans-serif;
  --font-body: 'Courier New', 'Menlo', 'PingFang TC', monospace;
  --font-mono: 'Courier New', 'Menlo', monospace;
}
\`\`\`

## Typography Scale

| 級距 | 大小 | 用途 |
| --- | --- | --- |
| display | clamp(80px, 14vw, 200px) / 0.85 / 900 / -0.04em | Hero — 故意太大 |
| h1 | clamp(40px, 6vw, 64px) / 0.95 / 900 / -0.02em | 區塊 |
| h2 | 20px / 1.1 / 700 / mono | 子標 |
| body | 14px / 1.5 / 400 / mono | 段落 |
| caption | 11px / 1.3 / 700 / mono / uppercase | label |

## Layout Rules

- 背景：純白或紙板灰
- 容器寬度：故意不一致——有些區塊全寬、有些 600px、有些靠左
- 元素邊框：黑色粗框 3-6px，沒有圓角
- 排版常有偏移：標題向左壓邊、文字段超出容器、按鈕方角貼緊邊
- 衝擊色塊（pink / yellow / red / blue）用於警示與強調

各區塊構圖：
- **hero**：上方一條 alert 黃色橫條 + 巨型黑字標題 + 標題下方一段超長 monospace 段落（描述）+ 醜陋粗黑邊框 CTA 按鈕（hover 反白）
- **about**：左 1/3 純黑底白字段落 + 右 2/3 大字數字（4 行極大數字）
- **lineup**：12 樂團用列表方式呈現，每一列為粗黑橫線分隔；headliner 用衝擊粉色純底白字
- **schedule**：仿時刻表，monospace 字體、緊密 leading、用 ASCII 風 box drawing 字元（\`+----+\`）模擬表格
- **venues**：3 段，圖片用粗黑邊框框住、文字緊貼圖片下方
- **tickets**：3 個粗黑邊框方塊、各塊背景輪換衝擊色（pink / white / blue）
- **travel**：3 個 numbered block，01 02 03 字超大塞入
- **sponsors**：列表呈現、Title sponsor 用衝擊紅色純底白字
- **footer-faq**：每條 Q 用黑底白字 + A 用 mono 縮進，極粗暴

## Do / Don't

| Do | Don't |
| --- | --- |
| 粗黑邊框、無圓角、無漸層 | 用柔和設計元素 |
| 字體故意超大、超粗 | 用「優雅」字體 |
| 偏移、未對齊的排版 | 完美 grid 對齊 |
| 衝擊色塊用於警示 / headliner / title sponsor | 全頁同一色調 |
| 對比度必須 ≥ 7:1（純黑白沒問題） | 用低對比配色 — 即使野獸派也不能不可讀 |

## Required Output Contract

通用契約。對比度為**硬底線**：純黑白 ≥ 7:1 必然達標；衝擊色塊上的文字必須是純白或純黑。

## Required Images

依 \`assets-manifest.json\`。

## Reference Snippet

野獸派標題：
\`\`\`css
.brutal-title {
  font-family: var(--font-display);
  font-weight: 900;
  font-size: clamp(80px, 14vw, 200px);
  line-height: 0.85;
  letter-spacing: -0.04em;
  color: var(--bru-fg);
  text-transform: uppercase;
}
\`\`\`

粗框 CTA：
\`\`\`css
.btn-brutal {
  display: inline-block;
  background: var(--bru-fg);
  color: var(--bru-paper);
  padding: 16px 32px;
  border: var(--border-extra);
  font-family: var(--font-mono);
  font-weight: 700;
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  cursor: pointer;
}
.btn-brutal:hover {
  background: var(--bru-shock-yellow);
  color: var(--bru-fg);
}
\`\`\`

Alert 橫條：
\`\`\`css
.alert-bar {
  background: var(--bru-shock-yellow);
  color: var(--bru-fg);
  border-top: var(--border-thick);
  border-bottom: var(--border-thick);
  padding: 12px 24px;
  font-family: var(--font-mono);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}
\`\`\`

ASCII 表格：
\`\`\`css
.ascii-table {
  font-family: var(--font-mono);
  white-space: pre;
  font-size: 14px;
  line-height: 1.4;
  color: var(--bru-fg);
}
\`\`\`

野獸卡：
\`\`\`css
.brutal-card {
  background: var(--bru-paper);
  border: var(--border-extra);
  padding: 28px;
  font-family: var(--font-mono);
}
.brutal-card.shock-pink {
  background: var(--bru-shock-pink);
  color: var(--bru-paper);
  border-color: var(--bru-paper);
}
.brutal-card.shock-yellow {
  background: var(--bru-shock-yellow);
  color: var(--bru-fg);
}
\`\`\`
`,"../../.claude/skills/design-chinoiserie/SKILL.md":`---
name: design-chinoiserie
description: Use when generating a single-file HTML page for the 「島嶼共鳴 2026」music festival in Chinese Chinoiserie / Guochao (中國風國潮) style. Triggers on 中國風、國潮、Chinoiserie、Guochao、東方美學、水墨、宋體、傳統與現代融合、紅黑金、傳統花紋.
user-invocable: true
---

# 中國風國潮 Chinoiserie / Guochao — 島嶼共鳴 2026

## Style Philosophy

「國潮」是 2010 年代後中國新興的視覺潮流——把傳統文化（宋體字、水墨、傳統紋樣、紅黑金配色）以**當代設計語言重新組裝**。不是復古博物館，而是潮牌 T-shirt 上的故宮 ——年輕、自信、自帶圖騰。在音樂節網頁中，這風格讓「島嶼共鳴」變成**一場將獨立音樂節置於傳統文化容器中的潮流活動**：朱砂紅與墨黑為主色、宋體標題與現代無襯線並排、傳統雲紋飄帶為點綴。

三個視覺辨識特徵：
1. **朱砂紅 + 墨黑 + 金（鎏金、燙金）** 三色為主
2. **粗體宋體字 + 現代無襯線**對位、用毛筆筆觸點綴
3. **傳統花紋 / 雲紋 / 印章** 作為裝飾元素

## Design Tokens

\`\`\`css
:root {
  --cn-paper: #f5ecd9;          /* 宣紙米 */
  --cn-paper-2: #ece1c5;
  --cn-ink: #1a1714;            /* 墨黑 */
  --cn-red: #c92a2a;            /* 朱砂紅 */
  --cn-red-dark: #8a0e0e;
  --cn-gold: #c89860;           /* 鎏金 */
  --cn-gold-dark: #8a6638;
  --cn-jade: #2c6048;           /* 翠玉 */

  --color-bg: var(--cn-paper);
  --color-fg: var(--cn-ink);
  --color-accent: var(--cn-red);

  --radius-none: 0;
  --radius-sm: 4px;

  --font-display: 'PingFang TC', 'Noto Serif TC', 'STKaiti', 'Songti TC', serif;
  --font-display-song: 'STSong', 'Songti TC', 'Noto Serif TC', serif;
  --font-body: 'PingFang TC', 'Noto Sans TC', 'STKaiti', sans-serif;
  --font-numeric: 'Noto Serif TC', 'STSong', serif;
}
\`\`\`

## Typography Scale

| 級距 | 大小 | 用途 |
| --- | --- | --- |
| display | clamp(56px, 9vw, 120px) / 1.05 / 800 / 宋體 / 0.04em | Hero |
| h1 | clamp(32px, 5vw, 56px) / 1.15 / 700 / 宋體 | 區塊 |
| h2 | 22px / 1.3 / 600 / 宋體 | 子標 |
| body | 15px / 1.85 / 400 / 黑體 | 段落 |
| caption | 11px / 1.5 / 500 / 0.18em | label |
| number | clamp(72px, 12vw, 160px) / 0.9 / 700 / 宋體 | 大字數字 |

中文配色以墨黑為主、紅金為強調。

## Layout Rules

- 背景：宣紙米色 + 細微 noise + 邊角小金色雲紋 SVG
- 容器寬度：max-width 1180px
- 排版兼有古典直書（小段引言）與現代橫書（主要內容）
- 段落間用「卷軸」分隔（粗紅色長線 + 兩端小裝飾）
- 章節編號用大圈紅印（中文一二三四五六）

各區塊構圖：
- **hero**：左偏右大字「島嶼共鳴」宋體大字 + 右上角朱印 + 左下方副標 + 中央/底部一道金色雲紋 + 紅色 CTA 按鈕
- **about**：左 1/3 直書引文 + 右 2/3 段落，配 4 個中文數字（六/三/十二/二萬五千）大字
- **lineup**：12 樂團名以**對聯感**呈現，每行樂團名宋體大字 + 國別 + 曲風 + 上場資訊；headliner 配朱印「首演」
- **schedule**：3 day 用「卷軸」表呈現，時段用宋體大字
- **venues**：3 段，配傳統園林意象，標題 prefix 一二三 + 卷軸線分隔
- **tickets**：3 張票卡仿「拜帖」樣式，外圍金色細邊、內含宋體大字票價
- **travel**：3 步驟，序號用毛筆書法風大字
- **sponsors**：純文字三組分級，title 配朱紅大圓「壹」
- **footer-faq**：仿「典籍問答」，Q 配「問」紅圓字、A 配「答」墨字

## Do / Don't

| Do | Don't |
| --- | --- |
| 朱砂紅 + 墨黑 + 金為核心 | 用粉色 / 螢光色 |
| 宋體標題 + 現代無襯線內文對位 | 全用黑體 |
| 加金色雲紋 / 朱印 / 對聯感裝飾 | 完全無傳統元素 |
| 章節用一二三 / 壹貳參 編號 | 用阿拉伯數字 |
| 直書引文至少 1 處 | 全橫書、失去東方語感 |

## Required Output Contract

通用契約。

## Required Images

依 \`assets-manifest.json\`。鼓勵 ink wash + 傳統紋樣風。

## Reference Snippet

朱印：
\`\`\`css
.seal {
  display: inline-block;
  width: 64px; height: 64px;
  background: var(--cn-red);
  color: var(--cn-paper);
  text-align: center;
  line-height: 64px;
  font-family: var(--font-display-song);
  font-size: 22px;
  font-weight: 700;
  letter-spacing: 0;
  border: 3px solid var(--cn-red-dark);
  transform: rotate(-4deg);
  position: relative;
}
\`\`\`

雲紋卷軸線分隔：
\`\`\`css
.scroll-divider {
  height: 36px;
  background:
    linear-gradient(90deg,
      transparent 0, transparent 8%,
      var(--cn-red) 8%, var(--cn-red) 92%,
      transparent 92%, transparent 100%);
  background-size: 100% 2px;
  background-repeat: no-repeat;
  background-position: 0 50%;
  position: relative;
}
.scroll-divider::before,
.scroll-divider::after {
  content: '';
  position: absolute;
  top: 50%;
  width: 18px; height: 18px;
  background: var(--cn-gold);
  border-radius: 50%;
  transform: translateY(-50%);
  border: 2px solid var(--cn-red);
}
.scroll-divider::before { left: 6%; }
.scroll-divider::after  { right: 6%; }
\`\`\`

大字數字：
\`\`\`css
.song-numeral {
  font-family: var(--font-display-song);
  font-size: clamp(72px, 12vw, 160px);
  font-weight: 700;
  line-height: 0.9;
  color: var(--cn-red);
  letter-spacing: -0.02em;
}
\`\`\`

CTA：
\`\`\`css
.btn-cn {
  display: inline-block;
  background: var(--cn-red);
  color: var(--cn-paper);
  font-family: var(--font-display);
  font-size: 16px;
  font-weight: 700;
  padding: 14px 36px;
  border: 2px solid var(--cn-gold);
  letter-spacing: 0.12em;
  position: relative;
}
.btn-cn::before,
.btn-cn::after {
  content: '';
  position: absolute;
  top: 50%;
  width: 10px; height: 10px;
  background: var(--cn-gold);
  transform: translateY(-50%) rotate(45deg);
}
.btn-cn::before { left: -5px; }
.btn-cn::after  { right: -5px; }
\`\`\`

直書引文：
\`\`\`css
.tategaki-quote {
  writing-mode: vertical-rl;
  font-family: var(--font-display-song);
  font-size: 18px;
  letter-spacing: 0.25em;
  color: var(--cn-ink);
  line-height: 2.2;
  border-right: 2px solid var(--cn-red);
  padding: 0 16px 0 0;
}
\`\`\`
`,"../../.claude/skills/design-constructivism/SKILL.md":`---
name: design-constructivism
description: Use when generating a single-file HTML page for the 「島嶼共鳴 2026」music festival in Russian Constructivism (構成主義) style. Triggers on Constructivism、構成主義、Rodchenko、El Lissitzky、革命海報、紅黑斜切、propaganda poster.
user-invocable: true
---

# 構成主義 Constructivism — 島嶼共鳴 2026

## Style Philosophy

俄羅斯構成主義（Constructivism, 1915–1934）由 Alexander Rodchenko、El Lissitzky、Varvara Stepanova 等人發起，是革命年代的視覺主張：**設計是工具，不是裝飾**。視覺語彙：紅與黑為主、強烈斜切構圖、粗條 sans-serif、攝影蒙太奇、幾何方塊、戲劇性的對角線。在音樂節網頁中，這風格把「島嶼共鳴」變成 **1925 年莫斯科獨立音樂工人聯盟的宣傳海報**——熱血、直白、行動主義。

三個視覺辨識特徵：
1. **紅黑（+ 米白）** 三色主導
2. **30°-45° 斜切構圖、強對角線**作為敘事節奏
3. **粗體 condensed sans、攝影蒙太奇**（黑白照片切剪疊壓）

## Design Tokens

\`\`\`css
:root {
  --co-paper: #f3ecdf;          /* 革命傳單米色 */
  --co-paper-2: #ece1cb;
  --co-red: #c41e3a;            /* 革命紅 */
  --co-red-dark: #8b0000;
  --co-black: #0d0d0d;
  --co-grey: #45413a;

  --color-bg: var(--co-paper);
  --color-fg: var(--co-black);
  --color-accent: var(--co-red);

  --radius-none: 0;

  --shadow-print: 4px 4px 0 var(--co-red);

  --font-display: 'Impact', 'Arial Narrow Bold', 'PingFang TC', 'Noto Sans TC', sans-serif;
  --font-display-cond: 'Impact', 'Arial Narrow Bold', sans-serif;
  --font-body: 'PingFang TC', 'Noto Sans TC', 'Helvetica Neue', sans-serif;
  --font-mono: 'Courier New', monospace;
}
\`\`\`

## Typography Scale

| 級距 | 大小 | 用途 |
| --- | --- | --- |
| display | clamp(64px, 11vw, 168px) / 0.85 / 900 / -0.04em / uppercase | Hero |
| h1 | clamp(40px, 6vw, 64px) / 0.92 / 800 / -0.02em / uppercase | 區塊 |
| h2 | 22px / 1.15 / 700 / 0.04em / uppercase | 子標 |
| body | 15px / 1.55 / 400 | 段落 |
| caption | 11px / 1.3 / 700 / 0.2em / uppercase | label |

## Layout Rules

- 背景：米白紙色 + 革命紅色梯形 / 三角作為頁面結構分區
- 容器寬度：max-width 1200px
- 大量使用 \`transform: rotate(-12deg)\` 之類的傾斜
- 攝影蒙太奇感：黑白圖片 + 紅色色塊 + 白色印字
- 斜切色塊穿越頁面（用 clip-path 或 transform）

各區塊構圖：
- **hero**：左側斜切紅塊 + 右側巨大粗體黑字標題傾斜 -8° + 下方黑色色塊 CTA
- **about**：1/3 紅色斜切色塊 + 2/3 黑字段落 + 4 個方塊數字、邊角覆蓋紅色三角
- **lineup**：12 樂團名以斜切排版、編號為大紅斜體；headliner 樂團名最大、覆蓋紅色斜塊
- **schedule**：3 個 day 用 \`<table>\` 樣式、表頭為紅底白字斜切
- **venues**：3 個矩形圖片（黑白濾鏡）+ 紅色斜邊配文字
- **tickets**：3 張票卡，方角實心邊框、VIP 為紅底白字、其餘為紙底黑字
- **travel**：3 步驟，序號用巨大粗紅字斜放
- **sponsors**：純文字三組、Title 用斜切紅色色塊背景
- **footer-faq**：純黑字 + Q 為紅色斜線開頭、A 為段落

## Do / Don't

| Do | Don't |
| --- | --- |
| 紅黑米三色配色嚴守 | 用多種色彩 |
| 斜切構圖、強對角線 | 水平垂直整齊排版 |
| 粗體 condensed sans / Impact 風 | 用 thin / serif 字體 |
| 攝影黑白濾鏡 + 紅色色塊 | 用彩色寫實照片 |
| 文字常用 uppercase 與緊密 letter-spacing | 全用 lowercase |

## Required Output Contract

通用契約。

## Required Images

依 \`assets-manifest.json\`。**所有照片應以黑白風格生成**，網頁端可再加 CSS filter。

## Reference Snippet

斜切色塊：
\`\`\`css
.diagonal-block {
  background: var(--co-red);
  clip-path: polygon(0 0, 100% 0, 80% 100%, 0 100%);
  padding: 40px 60px 60px 40px;
  color: var(--co-paper);
}
\`\`\`

斜放標題：
\`\`\`css
.tilted-title {
  font-family: var(--font-display);
  font-weight: 900;
  font-size: clamp(64px, 11vw, 168px);
  line-height: 0.85;
  letter-spacing: -0.04em;
  color: var(--co-black);
  transform: rotate(-6deg);
  transform-origin: left bottom;
  text-transform: uppercase;
}
.tilted-title em {
  font-style: normal;
  color: var(--co-red);
}
\`\`\`

攝影蒙太奇：
\`\`\`css
.photo-montage {
  position: relative;
}
.photo-montage img {
  filter: grayscale(1) contrast(1.1);
  display: block;
  width: 100%;
}
.photo-montage::before {
  content: '';
  position: absolute;
  top: 10%; left: 60%;
  width: 40%; height: 60%;
  background: var(--co-red);
  mix-blend-mode: multiply;
  clip-path: polygon(20% 0, 100% 0, 80% 100%, 0 100%);
}
\`\`\`

CTA：
\`\`\`css
.btn-revolution {
  display: inline-block;
  background: var(--co-black);
  color: var(--co-paper);
  padding: 14px 32px;
  font-family: var(--font-display);
  font-weight: 900;
  font-size: 16px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  transform: skewX(-8deg);
}
.btn-revolution span { display: inline-block; transform: skewX(8deg); }
.btn-revolution.red { background: var(--co-red); }
\`\`\`

斜切色塊區隔：
\`\`\`css
.diagonal-divider {
  background: var(--co-red);
  height: 24px;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 5% 100%);
  margin: 0;
}
\`\`\`
`,"../../.claude/skills/design-cyberpunk/SKILL.md":`---
name: design-cyberpunk
description: Use when generating a single-file HTML page for the 「島嶼共鳴 2026」music festival in Cyberpunk (賽博龐克) style. Triggers on Cyberpunk、賽博龐克、tech-noir、Blade Runner、Akira、neon Tokyo、夜城、katakana neon signs.
user-invocable: true
---

# 賽博龐克 Cyberpunk — 島嶼共鳴 2026

## Style Philosophy

賽博龐克視覺源於 1980 年代的 Blade Runner、Akira、Neuromancer——**高科技 + 低生活**的反烏托邦：在夜城下，霓虹招牌密集排列、滂沱大雨打在污水上、片假名與英文並列、企業 logo 主宰天際線。在音樂節網頁中，賽博龐克讓「島嶼共鳴」變成 **2087 年某個地下音樂組織舉辦的非法演出**——終端機介面、警示色塊、霓虹粉藍綠的污染光。

三個視覺辨識特徵：
1. **黑底配霓虹粉 / 青 / 黃 / 綠** 的高飽和度發光色
2. **片假名 + 英文 + 中文三語混排**、終端機 UI 元素（HUD 圓圈、警示框）
3. **企業 logo 風的硬邊角、bracket [ ] < > 符號裝飾、grid 細線網**

## Design Tokens

\`\`\`css
:root {
  --cp-bg: #050111;             /* 深紫黑 */
  --cp-bg-2: #0c0822;
  --cp-bg-3: #1a1140;
  --cp-fg: #e0e0ff;
  --cp-fg-soft: #9090b0;
  --cp-fg-mute: #5a5a78;
  --cp-pink: #ff2a87;
  --cp-cyan: #00fff5;
  --cp-yellow: #ffeb00;
  --cp-green: #00ff85;
  --cp-red: #ff003c;
  --cp-grid: rgba(0, 255, 245, 0.12);

  --color-bg: var(--cp-bg);
  --color-fg: var(--cp-fg);
  --color-accent: var(--cp-pink);

  --radius-none: 0;
  --radius-sm: 2px;

  --shadow-neon-pink: 0 0 12px var(--cp-pink), 0 0 24px rgba(255, 42, 135, 0.5);
  --shadow-neon-cyan: 0 0 12px var(--cp-cyan), 0 0 24px rgba(0, 255, 245, 0.5);
  --shadow-neon-yellow: 0 0 8px var(--cp-yellow), 0 0 18px rgba(255, 235, 0, 0.4);

  --font-display: 'Impact', 'Arial Black', 'PingFang TC', 'Noto Sans TC', sans-serif;
  --font-body: 'PingFang TC', 'Noto Sans TC', sans-serif;
  --font-mono: 'Courier New', 'Menlo', monospace;
}
\`\`\`

## Typography Scale

| 級距 | 大小 | 用途 |
| --- | --- | --- |
| display | clamp(48px, 8vw, 100px) / 0.95 / 900 / 0.04em / uppercase | Hero |
| h1 | clamp(28px, 4vw, 48px) / 1.1 / 800 / 0.04em / uppercase | 區塊 |
| h2 | 20px / 1.2 / 700 / 0.08em / uppercase | 子標 |
| body | 14px / 1.65 / 400 | 段落 |
| caption | 11px / 1.3 / 700 / 0.2em / mono / uppercase | label |
| katakana | 14px / 1.4 / 500 / 0.08em | 片假名輔助 |

## Layout Rules

- 背景：深紫黑 + cyan 細網格（CSS gradient repeating）+ 角落霓虹光暈
- 容器寬度：max-width 1280px
- 元素邊框：1-2px 霓虹色銳邊；常用 \`clip-path\` 切角（如右下角缺口）
- HUD 風格：每個 section 上方一行 [ MODULE_03 / LINEUP ] 之類的系統標籤

各區塊構圖：
- **hero**：滿版背景含 cyan 網格 + 中央 chrome / 霓虹大字標題 + 片假名副標 + 圓形 HUD CTA 按鈕（hover 旋轉發光）
- **about**：左 4 個 HUD 風格圓形數字 + 右系統說明文字（mono 風）
- **lineup**：12 張 hex / clip-path 切角卡，每張卡有國別代碼 [TW] [JP] [HK]；headliner 卡用 cyan 粗邊 + glow
- **schedule**：3 day 並列，每 day 配霓虹邊框、時段表用 mono 字 + dot leader
- **venues**：3 張卡，每張卡角落貼 [ZONE_A] [ZONE_B] [ZONE_C] 標籤、有 HUD 環裝飾
- **tickets**：3 個切角卡，VIP 中央卡用粉色霓虹大邊
- **travel**：3 步驟 with HUD 數字 + 終端機 prompt style 文字
- **sponsors**：暗網格 + 霓虹小框、title 用最強霓虹粉、其他粉 / cyan / yellow 變化
- **footer-faq**：每條 FAQ 用 mono terminal 風格、行首有 \`>\` prompt

## Do / Don't

| Do | Don't |
| --- | --- |
| 至少 3 種霓虹色搭配（pink / cyan / yellow） | 用柔和粉嫩色 |
| 大量使用 [ ] < > // 等 ASCII 符號裝飾 | 完全乾淨無符號 |
| 添加片假名輔助文字（如「アイランド」） | 完全只用英中文 |
| 銳利切角、HUD 圓形元素 | 用大圓角 |
| 文字必須 ≥ 4.5:1 對比 | 用霓虹色當主要 body 文字 — 太刺眼 |

## Required Output Contract

通用契約。

## Required Images

依 \`assets-manifest.json\`。

## Reference Snippet

切角卡（clip-path）：
\`\`\`css
.cp-card {
  background: var(--cp-bg-2);
  border: 1px solid var(--cp-cyan);
  padding: 24px;
  color: var(--cp-fg);
  clip-path: polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px));
}
.cp-card.headliner {
  border-color: var(--cp-pink);
  box-shadow: var(--shadow-neon-pink);
}
\`\`\`

HUD 標籤：
\`\`\`css
.hud-tag {
  display: inline-block;
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--cp-cyan);
  border: 1px solid var(--cp-cyan);
  padding: 3px 10px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  position: relative;
}
.hud-tag::before { content: '['; margin-right: 6px; color: var(--cp-cyan); }
.hud-tag::after  { content: ']'; margin-left: 6px;  color: var(--cp-cyan); }
\`\`\`

霓虹發光標題：
\`\`\`css
.cp-title {
  font-family: var(--font-display);
  font-weight: 900;
  color: var(--cp-fg);
  text-transform: uppercase;
  letter-spacing: 0.04em;
  text-shadow:
    0 0 6px var(--cp-pink),
    0 0 18px rgba(255, 42, 135, 0.4),
    0 0 32px rgba(0, 255, 245, 0.2);
}
\`\`\`

網格背景：
\`\`\`css
body::before {
  content: '';
  position: fixed;
  inset: 0;
  pointer-events: none;
  background:
    radial-gradient(ellipse at 20% 20%, rgba(255, 42, 135, 0.15) 0%, transparent 40%),
    radial-gradient(ellipse at 80% 80%, rgba(0, 255, 245, 0.12) 0%, transparent 40%),
    repeating-linear-gradient(0deg, var(--cp-grid) 0 1px, transparent 1px 80px),
    repeating-linear-gradient(90deg, var(--cp-grid) 0 1px, transparent 1px 80px);
  z-index: 0;
}
\`\`\`

CTA：
\`\`\`css
.btn-cp {
  background: transparent;
  border: 2px solid var(--cp-pink);
  color: var(--cp-pink);
  padding: 14px 32px;
  font-family: var(--font-mono);
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  font-size: 14px;
  cursor: pointer;
  position: relative;
  clip-path: polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px));
  box-shadow: var(--shadow-neon-pink);
  transition: background 0.2s ease;
}
.btn-cp:hover { background: var(--cp-pink); color: var(--cp-bg); }
\`\`\`
`,"../../.claude/skills/design-dark-mode/SKILL.md":`---
name: design-dark-mode
description: Use when generating a single-file HTML page for the 「島嶼共鳴 2026」music festival in an Immersive Dark / cinematic low-light style. Triggers on 暗黑、Dark Mode、低光、cinematic dark、Netflix-like dark UI、 OLED dark.
user-invocable: true
---

# 沉浸暗黑 Immersive Dark — 島嶼共鳴 2026

## Style Philosophy

不是「把白色 UI 反色」，而是「**為深夜閱讀與電影感觀看而設計**」。優秀的暗黑模式來自 Netflix、Spotify、Linear 這類產品：背景不是純黑而是接近黑的中性灰、文字不是純白而是 85-92% 灰、強調色是高飽和度的單色發光。在音樂節網頁裡，這風格讓你**像在開幕前的後台漫遊**——燈光熄了一半、預告片在螢幕上滾動、stage lighting 只在重點處綻放。

三個視覺辨識特徵：
1. **多層次的深色背景**（#0b0b0f / #15151b / #1f1f27），絕不純黑
2. **單一發光 accent**（霓虹品紅或電光綠），用作 spotlight
3. **電影感的圖片處理**：低彩度、高對比、邊緣 vignette

## Design Tokens

\`\`\`css
:root {
  --color-bg-0: #0a0a0f;        /* 最深底色 */
  --color-bg-1: #15151c;        /* 中層卡片 */
  --color-bg-2: #1f1f29;        /* 高層 elevated */
  --color-bg-3: #2a2a36;        /* 互動 hover */

  --color-fg: #f5f5f7;          /* 92% 白，不是純白 */
  --color-fg-soft: #b8b8c2;     /* 73% 白 */
  --color-fg-mute: #6e6e7a;
  --color-border: rgba(255, 255, 255, 0.08);
  --color-border-strong: rgba(255, 255, 255, 0.16);

  --color-accent: #ff2e88;      /* 霓虹品紅 */
  --color-accent-glow: rgba(255, 46, 136, 0.45);
  --color-accent-2: #06d6a0;    /* 電光綠 — 副 accent */

  --radius-sm: 6px;
  --radius-md: 12px;
  --radius-lg: 20px;
  --radius-pill: 999px;

  --shadow-glow: 0 0 32px var(--color-accent-glow);
  --shadow-card: 0 16px 48px rgba(0, 0, 0, 0.5);

  --font-display: 'PingFang TC', 'Noto Sans TC', 'Inter', system-ui, -apple-system, sans-serif;
  --font-body: 'PingFang TC', 'Noto Sans TC', 'Inter', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', 'SF Mono', 'Menlo', monospace;
}
\`\`\`

## Typography Scale

| 級距 | 大小 | 用途 |
| --- | --- | --- |
| display | clamp(48px, 8vw, 88px) / 1.05 / 700 / -0.03em | Hero |
| h1 | clamp(28px, 4vw, 40px) / 1.2 / 600 | 區塊標題 |
| h2 | 20px / 1.35 / 600 | 子標 |
| body | 15px / 1.7 / 400 | 段落 |
| caption | 12px / 1.5 / 500 / 0.1em / uppercase | label |
| mono | 13px / 1.5 / 500 | 時段、數字 |

## Layout Rules

- 多層背景：底層 \`--color-bg-0\`，卡片 \`--color-bg-1\`，elevated 卡 \`--color-bg-2\`
- 容器寬度：max-width 1200px、section padding 80-120px
- 邊框輕薄但可見（\`--color-border\`），不要無邊框

各區塊構圖：
- **hero**：全幅暗色背景 + 上方 SVG / 圖片 hero 圖（70% opacity + vignette mask），主標題置於下半部，accent 色發光底線
- **about**：左文右 4 個數字 tile（暗卡 + 發光數字）
- **lineup**：12 張暗卡 grid，headliner 卡用 \`--color-accent\` 細邊 + 卡角發光
- **schedule**：3 個 day 縱列，timeline 樣式（左側時段 mono + 右側樂團名），用 \`--color-accent\` 標 headliner
- **venues**：3 張卡橫排，每張卡上方 image + 下方文字、image 有 dark gradient overlay
- **tickets**：3 張票卡，VIP 卡 accent 邊框 + glow shadow
- **travel**：3 段，圖示用 accent 色發光小圓點
- **sponsors**：暗灰背景配淺色 logo 字、title sponsor 大、其餘小
- **footer-faq**：每條 FAQ 用 \`<details>\` 展開、border-bottom 細線

## Do / Don't

| Do | Don't |
| --- | --- |
| 多層背景色製造深度（至少 3 層） | 整頁同一個黑底 — 平淡無聊 |
| 文字最多用 92% 白（#f5f5f7） | 用純白（#fff），會在暗背景上太刺眼 |
| accent 色節制使用（每個區塊不超過 3 處） | 整頁 neon 滿天飛 — 干擾資訊層次 |
| 圖片上加 dark overlay 確保文字可讀 | 直接把文字壓在亮圖上 |
| 邊框極輕但可見，靠 rgba 白 0.08-0.16 | 用實心暗灰邊框 |

## Required Output Contract

- 對比度：92% 白 (#f5f5f7) 在 #15151c 上 ≈ 13.5:1，遠超 AA
- 9 section 齊全、12 樂團、3 票價、9 贊助商
- 不外連 CDN，相對路徑圖片
- 響應式三斷點

## Required Images

依 \`assets-manifest.json\`，所有圖片建議拍攝風格為「低光夜景、高對比、單色光源」。

## Reference Snippet

暗卡基底：
\`\`\`css
.card {
  background: var(--color-bg-1);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: 24px;
}
.card-elevated {
  background: var(--color-bg-2);
  box-shadow: var(--shadow-card);
}
.card-headliner {
  border-color: var(--color-accent);
  box-shadow: 0 0 0 1px var(--color-accent),
              0 0 32px var(--color-accent-glow);
}
\`\`\`

Accent 發光文字（Hero 副標）：
\`\`\`css
.glow-text {
  color: var(--color-accent);
  text-shadow:
    0 0 12px var(--color-accent-glow),
    0 0 32px var(--color-accent-glow);
}
\`\`\`

Hero image overlay：
\`\`\`css
.hero {
  position: relative;
  overflow: hidden;
}
.hero img {
  position: absolute;
  inset: 0;
  width: 100%; height: 100%;
  object-fit: cover;
  opacity: 0.55;
  filter: saturate(0.85) contrast(1.05);
}
.hero::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 0%, var(--color-bg-0) 75%);
}
\`\`\`

CTA：
\`\`\`css
.btn-primary {
  background: var(--color-accent);
  color: var(--color-bg-0);
  border: none;
  padding: 14px 28px;
  border-radius: var(--radius-pill);
  font-weight: 600;
  letter-spacing: 0.04em;
  box-shadow: 0 0 0 1px var(--color-accent), 0 0 24px var(--color-accent-glow);
}
\`\`\`
`,"../../.claude/skills/design-editorial/SKILL.md":`---
name: design-editorial
description: Use when generating a single-file HTML page for the 「島嶼共鳴 2026」music festival in Editorial Magazine layout style. Triggers on 雜誌排版、editorial、Monocle、Wallpaper、Kinfolk、12-column grid、serif、長文閱讀、long-form layout、印刷雜誌.
user-invocable: true
---

# 雜誌排版 Editorial Magazine — 島嶼共鳴 2026

## Style Philosophy

借鑑 Monocle、Wallpaper*、Kinfolk、紐約客 New Yorker 等高品質印刷雜誌的版面語言：**12 欄 grid、明確 baseline、襯線標題與無襯線內文的對位、長文與 figure 的圖文互動、頁首頁尾的頁碼節律**。在音樂節網頁中，這風格把「島嶼共鳴」做成一份**特刊雜誌**：第一篇是節慶導讀、第二篇是樂團專訪導覽、第三篇是場地探祕——讀者翻頁瀏覽。

三個視覺辨識特徵：
1. **12-column 嚴格 grid + 對齊 baseline**
2. **粗體襯線標題 + 細無襯線內文**雙字體對位
3. **頁首頁碼導引、章節編號、引言大字 pull-quote、figure caption**

## Design Tokens

\`\`\`css
:root {
  --ed-paper: #f7f5f1;          /* 雜誌米紙 */
  --ed-fg: #1a1a1a;             /* 黑色油墨 */
  --ed-fg-soft: #555555;
  --ed-fg-mute: #888888;
  --ed-line: #d4cdc0;
  --ed-accent: #b8473a;          /* 朱紅，封面紙印章色 */
  --ed-highlight: #f1e7d4;       /* 米黃 box */

  --color-bg: var(--ed-paper);
  --color-fg: var(--ed-fg);
  --color-accent: var(--ed-accent);

  --radius-none: 0;

  --grid-cols: 12;
  --grid-gutter: 24px;

  --font-display: 'Georgia', 'Times New Roman', 'PingFang TC', 'Noto Serif TC', serif;
  --font-body: 'PingFang TC', 'Noto Sans TC', 'Helvetica Neue', 'Arial', sans-serif;
  --font-numeric: 'Georgia', 'Times', serif;
  --font-mono: 'Menlo', 'Courier New', monospace;
}
\`\`\`

## Typography Scale

| 級距 | 大小 | 用途 |
| --- | --- | --- |
| display | clamp(56px, 8vw, 96px) / 1.05 / 700 / Georgia / -0.02em | 封面大標 |
| h1 | clamp(36px, 5vw, 56px) / 1.15 / 700 / Georgia | 特輯標題 |
| h2 | 24px / 1.3 / 700 / Georgia | 子標 |
| pull-quote | 36px / 1.4 / 500 / Georgia italic | 引言 |
| body | 16px / 1.7 / 400 / sans-serif | 段落 |
| caption | 12px / 1.5 / 500 / sans-serif / 0.04em | figure caption |
| number | clamp(64px, 10vw, 144px) / 0.9 / 700 / Georgia | 數字大字 |

## Layout Rules

- 容器寬度：max-width 1280px，padding 32-48px
- 12-column grid + 24px gutter；可細到 11/12、8/12、6/6、3/3/3/3 等多種比例
- 段間距嚴格：title-h1 80px、h2-body 32px、body line 1.7
- 圖片配 figure caption 樣式（中文小字 + 編號 fig. 1）
- 頁首小字：\`SECTION TITLE  ·  ISSUE 06  ·  PAGE NN\`

各區塊構圖：
- **hero**：封面感。左 8/12 大字封面標題 + 右 4/12 小卡描述。下方頁碼導引。
- **about**：特輯導讀體。左 4/12 編者小字 + 右 8/12 長文。4 個數字以 large drop-cap 排列。
- **lineup**：分兩列排版。每組樂團如雜誌人物特寫——左圖右文，圖+caption+段落介紹。headliner 用全寬 spread（12/12 圖 + 標題覆蓋下方）。
- **schedule**：仿 listing magazine 的條列式：粗體時段 + 樂團名 + 舞台 + 場地（hairline 分隔）。
- **venues**：3 個全寬 figure + 3 段長文，左圖右文交替。
- **tickets**：仿 price table，邊框極輕 hairline。
- **travel**：圖文混排，左圖右指南清單。
- **sponsors**：仿節目本末頁的贊助名單頁，分級排版。
- **footer-faq**：FAQ 用 Q. A. 印刷標準格式。

## Do / Don't

| Do | Don't |
| --- | --- |
| 嚴格 12-column grid 與對齊 | 用 flexbox 失去網格對齊 |
| 標題用 Georgia 粗襯線 + 內文用 sans-serif | 全文同一字體 |
| 大段落 ≥ 80 字、配 drop-cap 與引言 | 短條列代替長文 |
| 圖片必須有 caption（fig. n + 描述） | 無 caption 圖片 |
| 朱紅 accent 用於章節標籤、引號、page indicator | 全頁無 accent，太單調 |

## Required Output Contract

通用契約，**鼓勵長文段落**（每個 section 至少 80 字段落 ≥ 2 段）。

## Required Images

依 \`assets-manifest.json\`。鼓勵高品質編輯攝影風格（雜誌可用實景照片）。

## Reference Snippet

12-column grid：
\`\`\`css
.grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 24px;
}
.col-8 { grid-column: span 8; }
.col-4 { grid-column: span 4; }
.col-6 { grid-column: span 6; }
.col-12 { grid-column: span 12; }
@media (max-width: 720px) {
  .col-8, .col-6, .col-4 { grid-column: 1 / -1; }
}
\`\`\`

Pull-quote：
\`\`\`css
.pullquote {
  font-family: var(--font-display);
  font-size: 36px;
  line-height: 1.35;
  font-style: italic;
  font-weight: 500;
  color: var(--ed-fg);
  padding: 32px 0;
  border-top: 1px solid var(--ed-fg);
  border-bottom: 1px solid var(--ed-fg);
  margin: 48px 0;
}
.pullquote::before { content: '＂'; color: var(--ed-accent); margin-right: 8px; }
\`\`\`

Figure + caption：
\`\`\`html
<figure>
  <img src="assets/hero.webp" alt="">
  <figcaption>
    <span class="fig-no">fig. 01</span>
    <span class="fig-desc">都蘭灣黃昏。攝影：浪打文化</span>
  </figcaption>
</figure>
\`\`\`
\`\`\`css
figure { margin: 0; }
figure img { width: 100%; display: block; }
figcaption {
  font-family: var(--font-body);
  font-size: 12px;
  color: var(--ed-fg-soft);
  letter-spacing: 0.03em;
  margin-top: 8px;
  display: flex;
  gap: 12px;
}
.fig-no {
  font-family: var(--font-display);
  font-style: italic;
  color: var(--ed-accent);
}
\`\`\`

Section header：
\`\`\`html
<header class="section-head">
  <span class="kicker">SECTION 03 · LINEUP</span>
  <h2>來自島嶼與海的 12 組樂團</h2>
</header>
\`\`\`
\`\`\`css
.section-head .kicker {
  font-family: var(--font-mono);
  font-size: 12px;
  letter-spacing: 0.18em;
  color: var(--ed-accent);
  text-transform: uppercase;
  display: block;
  margin-bottom: 12px;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--ed-fg);
}
.section-head h2 {
  font-family: var(--font-display);
  font-size: clamp(36px, 5vw, 56px);
  line-height: 1.15;
  font-weight: 700;
  margin: 0;
}
\`\`\`

Drop-cap：
\`\`\`css
.dropcap p:first-of-type::first-letter {
  font-family: var(--font-display);
  font-size: 80px;
  line-height: 0.85;
  font-weight: 700;
  float: left;
  margin: 4px 12px 0 0;
  color: var(--ed-accent);
}
\`\`\`
`,"../../.claude/skills/design-glassmorphism/SKILL.md":`---
name: design-glassmorphism
description: Use when generating a single-file HTML page for the 「島嶼共鳴 2026」music festival in the Glassmorphism (玻璃擬態) visual style. Triggers on terms like 玻璃擬態、Glassmorphism、磨砂玻璃、frosted glass UI.
user-invocable: true
---

# 玻璃擬態 Glassmorphism — 島嶼共鳴 2026

## Style Philosophy

玻璃擬態誕生於 2020 年 macOS Big Sur 與 Windows 11 Mica 的同步演化，核心是「**透明感層次**」——元素彷彿是漂浮在背景上的霧面玻璃片。它讓資訊有了「深度」，又不至於像扁平風格那樣冷感。在這份音樂節網頁裡，玻璃擬態要呼應**夜晚海邊舞台**的氛圍：燈光透過水霧、半透氣息、漸層光暈穿過層層介面。

三個視覺辨識特徵：
1. **backdrop-filter: blur()** 配半透明白底，讓背景發光色穿透
2. **彩色漸層底圖**（紫藍粉橘），玻璃片之間的縫隙必須露出色彩
3. **白色細邊框與微光陰影**，給玻璃片明確的物理邊界

## Design Tokens

\`\`\`css
:root {
  /* 色彩系統：底圖必須有強烈漸層才能襯托玻璃感 */
  --color-bg-grad-1: #1e1b4b;       /* indigo-950 */
  --color-bg-grad-2: #7e22ce;       /* purple-700 */
  --color-bg-grad-3: #f97316;       /* orange-500 */
  --color-bg-grad-4: #db2777;       /* pink-600 */

  --color-glass-bg: rgba(255, 255, 255, 0.12);
  --color-glass-bg-strong: rgba(255, 255, 255, 0.18);
  --color-glass-border: rgba(255, 255, 255, 0.28);
  --color-glass-border-strong: rgba(255, 255, 255, 0.42);

  --color-fg: #f8fafc;              /* slate-50 — 確保 AA */
  --color-fg-soft: rgba(248, 250, 252, 0.78);
  --color-fg-mute: rgba(248, 250, 252, 0.58);
  --color-accent: #fbbf24;          /* amber-400 — CTA */
  --color-accent-fg: #1e1b4b;

  --blur-glass: 18px;
  --blur-glass-strong: 32px;

  --radius-sm: 10px;
  --radius-md: 18px;
  --radius-lg: 28px;
  --radius-pill: 999px;

  --shadow-glass: 0 8px 32px rgba(15, 23, 42, 0.18), inset 0 1px 0 rgba(255, 255, 255, 0.25);
  --shadow-lift: 0 20px 60px rgba(15, 23, 42, 0.35);

  --font-display: 'PingFang TC', 'Noto Sans TC', system-ui, -apple-system, sans-serif;
  --font-body: 'PingFang TC', 'Noto Sans TC', system-ui, sans-serif;
}
\`\`\`

## Typography Scale

| 級距 | 大小 | 用途 |
| --- | --- | --- |
| display | clamp(48px, 8vw, 96px) / 1.05 / 700 / -0.03em | Hero 主標 |
| h1 | clamp(32px, 4.5vw, 48px) / 1.2 / 700 / -0.02em | 區塊標題 |
| h2 | 24px / 1.3 / 600 / -0.01em | 子標 |
| body | 16px / 1.7 / 400 / 0.01em | 段落 |
| caption | 12px / 1.5 / 500 / 0.08em / uppercase | 標籤、kicker |

文字色一律用 \`--color-fg\`（接近白）以保證對比；輔助說明用 \`--color-fg-soft\`，避免低於 4.5:1。

## Layout Rules

- 全頁背景：固定 \`position: fixed\` 的 4 角漸層球（hero 區另外覆蓋一張 hero.webp 70% 透明度）
- 容器寬度：max-width 1180px，padding 28-40px
- 區塊節奏：每個 \`<section>\` 用一張大玻璃卡承載，section 之間留 96-120px 間距
- 玻璃卡：\`backdrop-filter: blur(var(--blur-glass))\`、\`background: var(--color-glass-bg)\`、\`border: 1px solid var(--color-glass-border)\`、\`border-radius: var(--radius-lg)\`

各區塊構圖：
- **hero**：60vh 以上、置中、display 標題下方放 chip 群（日期、地點、人次）、再下方 CTA 按鈕
- **about**：左文右數（grid 2 欄），4 個數字大字玻璃卡
- **lineup**：12 張樂團卡 grid（桌機 3 欄、平板 2 欄、手機 1 欄）；前 3 張用 \`--color-glass-bg-strong\` 與較強邊框標示 headliner
- **schedule**：3 個 day 縱列、每列為一張長玻璃卡、內含小時段卡片
- **venues**：3 張等寬玻璃卡橫排
- **tickets**：3 張票卡 grid、VIP 中央卡用 \`--color-accent\` 邊框加強
- **travel**：左文右玻璃步驟卡
- **sponsors**：4 + 5 兩欄排版，title sponsor 單卡放大
- **footer-faq**：accordion 樣式的 FAQ 玻璃條目

## Do / Don't

| Do | Don't |
| --- | --- |
| 玻璃卡背後必須有彩色漸層或圖片，否則「玻璃」失去意義 | 把玻璃卡放在純色背景上 — 失去半透意義 |
| 邊框使用淺色細邊（rgba 白 0.25-0.4） | 用實心邊框或暗色邊框 |
| 文字保持白色或近白色以維持對比 | 用半透明文字導致對比度低於 4.5:1 |
| 至少留 1px inset white shadow 強化「光從上方來」的物理感 | 亂用陰影方向造成燈光錯亂 |
| backdrop-filter 用 12-20px 範圍 | blur 過大（>40px）會讓底層完全模糊、玻璃感消失 |

## Required Output Contract

- 單檔 \`index.html\`，inline CSS、inline JS，檔案大小 ≤ 200 KB
- 9 個 \`<section data-block="...">\` 必須齊全：\`hero / about / lineup / schedule / venues / tickets / travel / sponsors / footer-faq\`
- 12 組樂團名一字不差、3 種票價（NT$ 2,200 / NT$ 5,400 / NT$ 12,800）齊備、9 個贊助商名出現
- 不引用任何外部 CDN（包含 Google Fonts、Tailwind CDN、icon library 等）
- 圖片用相對路徑 \`assets/<filename>.webp\`
- WCAG AA 對比度：所有玻璃卡上的主要文字必須 ≥ 4.5:1
- 響應式：1180 / 768 / 420 三斷點

## Required Images

依 \`assets-manifest.json\` 產出。引用範例：
\`\`\`html
<img src="assets/hero-bg.webp" alt="夜晚都蘭灣海邊舞台燈光" />
\`\`\`

## Reference Snippet

玻璃卡關鍵 CSS：
\`\`\`css
.glass {
  background: var(--color-glass-bg);
  backdrop-filter: blur(var(--blur-glass)) saturate(160%);
  -webkit-backdrop-filter: blur(var(--blur-glass)) saturate(160%);
  border: 1px solid var(--color-glass-border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-glass);
}
\`\`\`

全域漸層底圖：
\`\`\`css
body::before {
  content: '';
  position: fixed;
  inset: 0;
  background:
    radial-gradient(circle at 15% 20%, var(--color-bg-grad-2) 0%, transparent 45%),
    radial-gradient(circle at 85% 30%, var(--color-bg-grad-3) 0%, transparent 50%),
    radial-gradient(circle at 50% 90%, var(--color-bg-grad-4) 0%, transparent 55%),
    var(--color-bg-grad-1);
  z-index: -1;
}
\`\`\`

CTA 按鈕：
\`\`\`css
.cta {
  background: var(--color-accent);
  color: var(--color-accent-fg);
  border: none;
  padding: 16px 28px;
  border-radius: var(--radius-pill);
  font-weight: 600;
  letter-spacing: 0.05em;
  box-shadow: 0 8px 24px rgba(251, 191, 36, 0.35);
}
\`\`\`
`,"../../.claude/skills/design-glitch/SKILL.md":`---
name: design-glitch
description: Use when generating a single-file HTML page for the 「島嶼共鳴 2026」music festival in Glitch Art (故障藝術) style. Triggers on Glitch、故障藝術、databending、CRT、scanlines、RGB shift、VHS noise、distortion aesthetic.
user-invocable: true
---

# 故障藝術 Glitch Art — 島嶼共鳴 2026

## Style Philosophy

Glitch art 把「故障」當作藝術手法——讓 RGB 色道偏移、像素被擾動、掃描線出現在影像上。它的哲學是「**完美是工業的，故障才是人性的**」。在音樂節網頁，這風格讓「島嶼共鳴」像 **被颱風干擾的衛星直播畫面**——資訊還在、但訊號破碎、每個瞬間都不穩定。

三個視覺辨識特徵：
1. **RGB chromatic aberration**（紅藍綠分色錯位）
2. **CRT 掃描線、VHS 雜訊、隨機長條色塊**
3. **跳動 / 抖動文字效果、隨機字符替換**

## Design Tokens

\`\`\`css
:root {
  --gl-bg: #050208;             /* 接近黑、偏紫 */
  --gl-bg-2: #0d0512;
  --gl-fg: #e8e8f0;
  --gl-fg-soft: #b4b4c8;
  --gl-r: #ff003c;              /* red channel */
  --gl-g: #00ff90;              /* green channel */
  --gl-b: #00d9ff;              /* blue channel */
  --gl-accent: #ff003c;

  --color-bg: var(--gl-bg);
  --color-fg: var(--gl-fg);
  --color-accent: var(--gl-accent);

  --radius-none: 0;
  --radius-sm: 2px;

  --font-display: 'Helvetica Neue', 'Arial', 'PingFang TC', 'Noto Sans TC', sans-serif;
  --font-body: 'PingFang TC', 'Noto Sans TC', 'Verdana', sans-serif;
  --font-mono: 'Courier New', 'Menlo', monospace;
}
\`\`\`

## Typography Scale

| 級距 | 大小 | 用途 |
| --- | --- | --- |
| display | clamp(56px, 9vw, 120px) / 0.95 / 900 / -0.02em / uppercase | Hero |
| h1 | clamp(28px, 4vw, 48px) / 1.05 / 800 / uppercase | 區塊大標 |
| h2 | 20px / 1.2 / 700 / 0.04em / uppercase | 子標 |
| body | 14px / 1.6 / 400 | 段落 |
| caption | 11px / 1.3 / 700 / 0.18em / mono / uppercase | label |

## Layout Rules

- 背景：純黑配 CRT 掃描線（CSS gradient repeating-linear），偶爾出現長條色塊
- 容器寬度：max-width 1180px
- 元素邊框極細（1px）或無；用 RGB 錯位代替 border
- 全頁有 subtle 抖動感（CSS animation 微小 translate / hue-rotate）

各區塊構圖：
- **hero**：滿版掃描線背景 + 主標題用 RGB 錯位效果 + 副標 mono 字 + 故障 CTA（hover 抖動）
- **about**：左側雜訊小方塊 + 右側段落、數字配 glitch 效果
- **lineup**：12 張黑色卡，每張卡標題有 RGB 偏移；headliner 卡邊框紅綠錯位
- **schedule**：3 個 day 表格、時段用 mono、headliner 列加 RGB 抖動
- **venues**：3 張卡、圖片應用 CSS filter（hue-rotate / saturate / drop-shadow 紅藍）
- **tickets**：3 張票卡，VIP 中央卡邊框 RGB 抖動 + 內部小掃描線
- **travel**：步驟卡，圖示用故障符號（▓ ░ ▀）
- **sponsors**：純文字、title 加紅藍錯位
- **footer-faq**：每條 FAQ 用 mono 字、Q 加閃爍效果

## Do / Don't

| Do | Don't |
| --- | --- |
| RGB chromatic aberration 是核心、用 text-shadow 製造 | 完全乾淨無錯位 |
| 掃描線背景必須有、可低 opacity | 純色平面背景 |
| 動畫節制：抖動幅度小、循環長 | 全頁狂閃 — 易閃光癲癇 |
| 對比度仍維持 ≥ 4.5:1 | 用低對比 RGB 文字使視覺殘像不可讀 |
| 用 ▓ ░ ▒ ▀ ▄ █ unicode block 製造像素感 | 用花俏 emoji |

## Required Output Contract

通用契約。光敏 / 閃爍動畫不能高頻（< 3Hz）以避免癲癇風險。

## Required Images

依 \`assets-manifest.json\`。

## Reference Snippet

CRT 掃描線背景：
\`\`\`css
body::before {
  content: '';
  position: fixed;
  inset: 0;
  pointer-events: none;
  background: repeating-linear-gradient(
    0deg,
    rgba(255,255,255,0.04) 0 1px,
    transparent 1px 3px
  );
  mix-blend-mode: overlay;
  z-index: 100;
}
\`\`\`

RGB 錯位標題：
\`\`\`css
.glitch-title {
  font-family: var(--font-display);
  font-weight: 900;
  text-transform: uppercase;
  color: var(--gl-fg);
  position: relative;
  text-shadow:
    -3px 0 var(--gl-r),
    3px 0 var(--gl-b);
  animation: glitch-shift 4s steps(1) infinite;
}
@keyframes glitch-shift {
  0%, 95% { text-shadow: -3px 0 var(--gl-r), 3px 0 var(--gl-b); }
  96%, 97% { text-shadow: 5px 0 var(--gl-r), -5px 0 var(--gl-b), 0 2px var(--gl-g); transform: translate(2px, -1px); }
  98%, 100% { text-shadow: -3px 0 var(--gl-r), 3px 0 var(--gl-b); transform: translate(0,0); }
}
\`\`\`

故障卡：
\`\`\`css
.glitch-card {
  background: var(--gl-bg-2);
  border: 1px solid rgba(255,255,255,0.1);
  padding: 24px;
  position: relative;
  color: var(--gl-fg);
}
.glitch-card.headliner::before,
.glitch-card.headliner::after {
  content: '';
  position: absolute;
  inset: 0;
  border: 1px solid var(--gl-r);
  transform: translate(-2px, 0);
  pointer-events: none;
}
.glitch-card.headliner::after {
  border-color: var(--gl-b);
  transform: translate(2px, 0);
}
\`\`\`

Glitch button：
\`\`\`css
.btn-glitch {
  background: transparent;
  border: 1px solid var(--gl-fg);
  color: var(--gl-fg);
  padding: 12px 28px;
  font-family: var(--font-mono);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  cursor: pointer;
  position: relative;
}
.btn-glitch:hover {
  color: var(--gl-r);
  border-color: var(--gl-r);
  animation: jitter 0.15s steps(2) infinite;
}
@keyframes jitter {
  0% { transform: translate(0,0); }
  25% { transform: translate(-1px,1px); }
  50% { transform: translate(1px,-1px); }
  75% { transform: translate(-1px,-1px); }
  100% { transform: translate(0,0); }
}
\`\`\`
`,"../../.claude/skills/design-gradient-mesh/SKILL.md":`---
name: design-gradient-mesh
description: Use when generating a single-file HTML page for the 「島嶼共鳴 2026」music festival in Gradient Mesh / Aurora (漸層 Mesh / 極光) style. Triggers on gradient mesh、aurora、漸層美學、流動色彩、stripe gradient、Linear-style backgrounds、blob.
user-invocable: true
---

# 漸層 Mesh Gradient Aurora — 島嶼共鳴 2026

## Style Philosophy

漸層 mesh 是 2020 年代的主流網頁視覺語彙——以多色 radial-gradient 組合製造「**液態色彩流動**」的背景，靈感來自極光、油彩擴散、CCD 感光鏡頭。Linear、Vercel、Stripe、Apple 大量使用。它的核心精神是：**色彩本身就是訊息**，網頁不需要更多裝飾。在音樂節網頁中，這風格讓「島嶼共鳴」變成 **一場色彩會呼吸的演唱會**：每滾動一段，背景的色塊就微微移動，像極光在天空中漂浮。

三個視覺辨識特徵：
1. **多色 radial-gradient blob** 組合成流動 mesh 背景
2. **半透明白霧 / 玻璃元素** 浮在彩色背景上
3. **無襯線 + 大字體 + 極簡內容元件**

## Design Tokens

\`\`\`css
:root {
  --gr-blob-1: #ff6ec7;            /* pink */
  --gr-blob-2: #6d76ff;            /* periwinkle */
  --gr-blob-3: #00d9c0;            /* mint */
  --gr-blob-4: #ffb84a;            /* peach */
  --gr-blob-5: #b372ff;            /* lavender */
  --gr-base: #0d0b22;              /* 深紫底 */
  --gr-base-2: #1a1638;

  --gr-fg: #ffffff;
  --gr-fg-soft: rgba(255, 255, 255, 0.78);
  --gr-fg-mute: rgba(255, 255, 255, 0.58);
  --gr-card-bg: rgba(255, 255, 255, 0.08);
  --gr-card-bg-strong: rgba(255, 255, 255, 0.14);
  --gr-border: rgba(255, 255, 255, 0.18);
  --gr-accent: #fff48a;             /* 暖光黃 */
  --gr-accent-fg: #1a1638;

  --color-bg: var(--gr-base);
  --color-fg: var(--gr-fg);
  --color-accent: var(--gr-accent);

  --radius-md: 18px;
  --radius-lg: 28px;
  --radius-pill: 999px;
  --radius-blob: 50% 40% 60% 35% / 45% 55% 35% 65%;

  --shadow-glass: 0 8px 32px rgba(0, 0, 0, 0.25);
  --blur-glass: 24px;

  --font-display: 'PingFang TC', 'Noto Sans TC', 'Inter', system-ui, sans-serif;
  --font-body: 'PingFang TC', 'Noto Sans TC', 'Inter', system-ui, sans-serif;
}
\`\`\`

## Typography Scale

| 級距 | 大小 | 用途 |
| --- | --- | --- |
| display | clamp(56px, 9vw, 120px) / 1.0 / 700 / -0.03em | Hero |
| h1 | clamp(32px, 5vw, 56px) / 1.15 / 600 | 區塊 |
| h2 | 22px / 1.3 / 600 | 子標 |
| body | 16px / 1.7 / 400 | 段落 |
| caption | 11px / 1.4 / 500 / 0.12em / uppercase | label |

## Layout Rules

- 全頁背景：深紫底 + 4-5 個大 radial-gradient blob（不同位置、size）+ 微 noise 紋理
- 容器寬度：max-width 1200px
- 卡片：半透明白底 + backdrop-filter blur + 細邊框（類似 glassmorphism 但 mesh 背景更流動）
- 元素圓角偏大（18-28px），偶爾用 blob 形狀

各區塊構圖：
- **hero**：滿版 mesh 背景 + 中央 / 偏左大字標題 + 副標 + chip 群（日期 / 場地）+ 暖黃 CTA pill
- **about**：左 blob 形狀圖片 + 右玻璃卡段落 + 4 個發光小球（每球漸層不同）
- **lineup**：12 玻璃卡 grid；headliner 卡用更大、邊框更亮、卡內有 mini blob 裝飾
- **schedule**：3 day 縱列玻璃卡，內部時段為輕透小條
- **venues**：3 張玻璃卡，圖片用 blob 形狀 mask
- **tickets**：3 張玻璃卡，VIP 中央用「會發光的」漸層邊框 + 黃 accent
- **travel**：3 步驟，編號為漸層發光球
- **sponsors**：純文字加少量發光裝飾；title 用漸層字
- **footer-faq**：玻璃面板 with \`<details>\` 展開

## Do / Don't

| Do | Don't |
| --- | --- |
| 多色 radial-gradient blob 是視覺主角 | 用單色或 linear gradient |
| 玻璃卡背後必須有彩色背景才有意義 | 玻璃卡放純色 |
| 文字保持高對比白色 | 用半透明文字導致對比差 |
| blob 形狀至少 1-2 處 | 全部方形矩形 |
| 漸層柔和、無 hard edge | 用 90% color stop 做硬邊 |

## Required Output Contract

通用契約。

## Required Images

依 \`assets-manifest.json\`。

## Reference Snippet

Mesh 背景：
\`\`\`css
body {
  background: var(--gr-base);
  position: relative;
  overflow-x: hidden;
}
body::before {
  content: '';
  position: fixed;
  inset: 0;
  background:
    radial-gradient(800px circle at 12% 18%, var(--gr-blob-1) 0%, transparent 55%),
    radial-gradient(900px circle at 88% 25%, var(--gr-blob-2) 0%, transparent 55%),
    radial-gradient(700px circle at 25% 78%, var(--gr-blob-3) 0%, transparent 55%),
    radial-gradient(800px circle at 78% 85%, var(--gr-blob-4) 0%, transparent 55%),
    radial-gradient(600px circle at 50% 50%, var(--gr-blob-5) 0%, transparent 45%);
  filter: blur(60px);
  opacity: 0.85;
  z-index: -1;
  pointer-events: none;
}
\`\`\`

玻璃卡：
\`\`\`css
.mesh-card {
  background: var(--gr-card-bg);
  backdrop-filter: blur(var(--blur-glass)) saturate(140%);
  -webkit-backdrop-filter: blur(var(--blur-glass)) saturate(140%);
  border: 1px solid var(--gr-border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-glass);
  color: var(--gr-fg);
  padding: 24px;
}
.mesh-card.headliner {
  background: var(--gr-card-bg-strong);
  border: 1px solid rgba(255, 255, 255, 0.4);
  position: relative;
  overflow: hidden;
}
.mesh-card.headliner::before {
  content: '';
  position: absolute;
  inset: -40%;
  background: radial-gradient(circle, var(--gr-blob-1) 0%, transparent 60%);
  filter: blur(40px);
  opacity: 0.5;
  z-index: -1;
}
\`\`\`

漸層發光球：
\`\`\`css
.glow-orb {
  width: 90px; height: 90px;
  border-radius: 50%;
  background: radial-gradient(circle at 30% 25%, white 0%, var(--gr-blob-1) 50%, #c12c89 100%);
  box-shadow: 0 0 40px var(--gr-blob-1), 0 4px 16px rgba(0,0,0,0.3);
}
.glow-orb.mint { background: radial-gradient(circle at 30% 25%, white 0%, var(--gr-blob-3) 50%, #00867a 100%); box-shadow: 0 0 40px var(--gr-blob-3); }
.glow-orb.peri { background: radial-gradient(circle at 30% 25%, white 0%, var(--gr-blob-2) 50%, #353cb5 100%); box-shadow: 0 0 40px var(--gr-blob-2); }
.glow-orb.peach { background: radial-gradient(circle at 30% 25%, white 0%, var(--gr-blob-4) 50%, #b87014 100%); box-shadow: 0 0 40px var(--gr-blob-4); }
\`\`\`

漸層大字標題：
\`\`\`css
.mesh-title {
  font-family: var(--font-display);
  font-size: clamp(56px, 9vw, 120px);
  font-weight: 700;
  line-height: 1.0;
  letter-spacing: -0.03em;
  background: linear-gradient(135deg, #ffffff 0%, #ffeac6 35%, #ffafd6 70%, #b8b5ff 100%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}
\`\`\`

CTA pill：
\`\`\`css
.btn-mesh {
  background: var(--gr-accent);
  color: var(--gr-accent-fg);
  border: none;
  padding: 16px 32px;
  border-radius: var(--radius-pill);
  font-weight: 600;
  letter-spacing: 0.04em;
  box-shadow: 0 12px 32px rgba(255, 244, 138, 0.35), 0 0 0 1px rgba(255, 255, 255, 0.18);
}
\`\`\`

Blob 形狀（圖片 mask）：
\`\`\`css
.blob-mask {
  border-radius: var(--radius-blob);
  overflow: hidden;
}
\`\`\`
`,"../../.claude/skills/design-hand-drawn/SKILL.md":`---
name: design-hand-drawn
description: Use when generating a single-file HTML page for the 「島嶼共鳴 2026」music festival in Hand-Drawn Sketch (手繪塗鴉) style. Triggers on 手繪、塗鴉、Sketch、wobbly lines、felt-tip、crayon、children drawing、indie zine、illustrated.
user-invocable: true
---

# 手繪塗鴉 Hand-Drawn — 島嶼共鳴 2026

## Style Philosophy

手繪塗鴉風格在 2020 年代被 indie 品牌、教育產品、Notion app、Discord 早期介面廣泛使用——它的核心是「**不完美的人味**」：線條歪斜、邊界手抖、底色是塗鴉本而非螢幕。在音樂節網頁中，這風格把「島嶼共鳴」做成 **設計師個人速寫本中的活動策劃**——粉蠟筆塗色、原子筆描邊、便利貼註解、咖啡漬印——溫暖、誠懇、私人。

三個視覺辨識特徵：
1. **歪斜手繪線條**（CSS \`border-style\` 不可，須用 SVG 或 box-shadow 模擬）+ 不規則填色
2. **手寫字 mock**（用 Comic Sans / Patrick Hand / 自然衍生字體；中文用粗黑體 + 微旋轉）
3. **便利貼、咖啡漬、箭頭塗鴉、波浪線下劃** 等紙上元素

## Design Tokens

\`\`\`css
:root {
  --hd-paper: #fbf6ee;           /* 米色草稿紙 */
  --hd-paper-grid: rgba(45, 42, 38, 0.06); /* 方格紋紙 */
  --hd-ink: #2d2a26;             /* 鋼筆藍黑 */
  --hd-pencil: #5a564d;
  --hd-red: #e84a3a;             /* 紅蠟筆 */
  --hd-yellow: #f7c84b;          /* 黃蠟筆 */
  --hd-blue: #4a86e0;            /* 藍蠟筆 */
  --hd-green: #4fb585;           /* 綠蠟筆 */
  --hd-pink: #e8779e;            /* 粉蠟筆 */
  --hd-highlighter: rgba(247, 200, 75, 0.5);  /* 螢光筆 */

  --color-bg: var(--hd-paper);
  --color-fg: var(--hd-ink);
  --color-accent: var(--hd-red);

  --radius-rough: 24px 18px 22px 16px / 16px 22px 18px 24px;
  --radius-circle: 50%;

  --font-display: 'Comic Sans MS', 'Marker Felt', 'PingFang TC', 'Noto Sans TC', sans-serif;
  --font-body: 'PingFang TC', 'Noto Sans TC', 'Patrick Hand', system-ui, sans-serif;
  --font-script: 'Marker Felt', 'PingFang TC', cursive;
}
\`\`\`

## Typography Scale

| 級距 | 大小 | 用途 |
| --- | --- | --- |
| display | clamp(48px, 8vw, 100px) / 1.05 / 800 / Comic Sans 或粗黑體 / -0.02em | Hero |
| h1 | clamp(28px, 4vw, 44px) / 1.15 / 700 | 區塊 |
| h2 | 22px / 1.3 / 700 | 子標 |
| body | 16px / 1.7 / 400 | 段落 |
| caption | 13px / 1.4 / 500 / italic | 註解 |

中文常配輕微旋轉 (\`rotate(-1deg)\` ~ \`rotate(2deg)\`) 製造手寫感。

## Layout Rules

- 背景：米色草稿紙 + 細格紋（CSS gradient 5mm 方格）+ 偶爾一處咖啡漬（radial-gradient 半透棕）
- 容器寬度：max-width 1180px
- 卡片用「不規則圓角」（border-radius 多值 / 變形）+ 手繪邊框（SVG dasharray 或 hand-drawn-border-image）
- 元素小幅旋轉（-2° ~ 2°）製造手繪不對齊感
- 添加塗鴉裝飾：手繪箭頭 ↗、波浪線下劃、便利貼、星星 ✦

各區塊構圖：
- **hero**：左大字（用 Marker Felt / Comic Sans）+ 中央咖啡漬 + 右邊一張便利貼上寫日期 + 紅蠟筆 CTA 「立即購票！」配手繪箭頭
- **about**：左插畫 hero 圖（手繪風） + 右段落 + 4 個圓圈手繪數字（每個配波浪下劃線強調）
- **lineup**：12 張便利貼卡（不同顏色：黃 / 粉 / 綠 / 藍輪換）旋轉 -2°~2°；headliner 加紅蠟筆圈起 + 星星裝飾
- **schedule**：3 day 為手繪行事曆頁，時段用粉藍綠標色
- **venues**：3 段，配手繪 SVG 場地小圖（純 CSS 或 SVG）
- **tickets**：3 張票卡仿手繪票根，VIP 中央用紅蠟筆塗滿
- **travel**：3 步驟，用手繪箭頭 ↗↘ 連接
- **sponsors**：仿筆記本標籤，title 用螢光筆 highlight
- **footer-faq**：每條 FAQ 為便利貼疊放，Q 用紅筆 A 用鉛筆

## Do / Don't

| Do | Don't |
| --- | --- |
| 不規則圓角、輕微元素旋轉、手寫字風 | 完美對齊與圓角 |
| 紙質背景（細格紋 / 米色 / 咖啡漬） | 純色 flat 背景 |
| 蠟筆色塊塗色（不要 100% 飽和） | 螢光純色 |
| 添加塗鴉裝飾：箭頭、波浪線、星星 | 完全無裝飾 |
| 文字保持高對比（深藍黑配米紙 ≈ 11:1） | 用淺灰文字 |

## Required Output Contract

通用契約。**鼓勵手繪 SVG 圖示**。

## Required Images

依 \`assets-manifest.json\`。鼓勵插畫風格。

## Reference Snippet

紙紋背景：
\`\`\`css
body {
  background-color: var(--hd-paper);
  background-image:
    linear-gradient(var(--hd-paper-grid) 1px, transparent 1px),
    linear-gradient(90deg, var(--hd-paper-grid) 1px, transparent 1px);
  background-size: 20px 20px;
}
body::before {
  content: '';
  position: fixed;
  width: 280px; height: 220px;
  top: 30%; right: 5%;
  background: radial-gradient(ellipse, rgba(120, 80, 50, 0.08) 0%, transparent 70%);
  pointer-events: none;
  z-index: 0;
}
\`\`\`

便利貼卡：
\`\`\`css
.sticky-note {
  background: var(--hd-yellow);
  padding: 20px 22px 24px;
  border-radius: var(--radius-rough);
  box-shadow:
    0 6px 12px rgba(45, 42, 38, 0.12),
    0 1px 1px rgba(45, 42, 38, 0.08);
  transform: rotate(-1.5deg);
  font-family: var(--font-display);
  color: var(--hd-ink);
  position: relative;
}
.sticky-note.pink   { background: var(--hd-pink); transform: rotate(1.2deg); }
.sticky-note.blue   { background: var(--hd-blue); transform: rotate(-0.8deg); color: white; }
.sticky-note.green  { background: var(--hd-green); transform: rotate(1.5deg); color: white; }
.sticky-note.tape::before {
  content: '';
  position: absolute;
  top: -10px; left: 50%;
  transform: translateX(-50%) rotate(-4deg);
  width: 60px; height: 18px;
  background: rgba(255, 255, 255, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.6);
}
\`\`\`

蠟筆圈塗鴉：
\`\`\`css
.crayon-circle {
  position: relative;
  display: inline-block;
}
.crayon-circle::after {
  content: '';
  position: absolute;
  inset: -8px -14px;
  border: 3px solid var(--hd-red);
  border-radius: 50% 60% 40% 55% / 50% 45% 55% 50%;
  transform: rotate(-3deg);
  opacity: 0.7;
}
\`\`\`

螢光筆 highlight：
\`\`\`css
.highlight {
  background: linear-gradient(180deg, transparent 50%, var(--hd-highlighter) 50%);
  padding: 0 4px;
}
\`\`\`

手繪 CTA：
\`\`\`css
.btn-hand {
  background: var(--hd-red);
  color: var(--hd-paper);
  border: none;
  padding: 14px 28px;
  border-radius: var(--radius-rough);
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 18px;
  transform: rotate(-1deg);
  box-shadow: 4px 4px 0 var(--hd-ink);
  cursor: pointer;
  position: relative;
}
.btn-hand:hover { transform: rotate(-2deg) translateY(-2px); box-shadow: 6px 6px 0 var(--hd-ink); }
\`\`\`

手繪箭頭（SVG inline）：
\`\`\`html
<svg viewBox="0 0 80 30" class="hand-arrow">
  <path d="M5 15 Q 25 8 40 18 T 70 12" stroke="var(--hd-ink)" stroke-width="2.5" fill="none" stroke-linecap="round" />
  <path d="M62 6 L 75 12 L 68 22" stroke="var(--hd-ink)" stroke-width="2.5" fill="none" stroke-linecap="round" />
</svg>
\`\`\`
`,"../../.claude/skills/design-isometric-3d/SKILL.md":`---
name: design-isometric-3d
description: Use when generating a single-file HTML page for the 「島嶼共鳴 2026」music festival in Isometric 3D (等距 3D) illustration style. Triggers on Isometric、等距視角、isometric illustration、3D illustration、玩具感、30 度斜角、Cuberto、Pixel Truedimensions.
user-invocable: true
---

# 等距 3D Isometric 3D — 島嶼共鳴 2026

## Style Philosophy

Isometric 是一種**沒有透視收斂的 3D 視角**——所有 x/y/z 軸成 30°/30°/90° 等距投影，物件不會因距離縮小。這視角源於工程繪圖，1980 年代電玩（《Q\\*bert》《SimCity 2000》）將其推上主流，21 世紀則成為產品插畫的「萬用語言」（Stripe、Notion、Slack 早期插畫風格）。在音樂節網頁中，這風格讓「島嶼共鳴」變成 **一座可被觀察的微型玩具世界**：山在這裡、海在那裡、舞台在中央、小人物在跑步——資訊與觀察並存。

三個視覺辨識特徵：
1. **30°/30° 等距投影、明顯三組平面**（頂、前、側）
2. **明亮飽和的色彩、扁平著色 + 投影陰影**
3. **小人物、小場景、堆疊物件**等「玩具感」插畫

## Design Tokens

\`\`\`css
:root {
  --iso-bg: #f0e6d2;             /* 米沙色背景 */
  --iso-bg-2: #f7efe1;
  --iso-sky: #b9e2ff;            /* 等距天空 */
  --iso-fg: #2d2a26;
  --iso-fg-soft: #6b6760;
  --iso-orange: #ff8a3c;          /* 暖橘 */
  --iso-pink: #ff6f9b;
  --iso-mint: #5fd0b3;
  --iso-lavender: #b6a2ff;
  --iso-yellow: #ffd166;
  --iso-blue: #4c8df6;
  --iso-shadow: #d3c5a8;

  --color-bg: var(--iso-bg);
  --color-fg: var(--iso-fg);
  --color-accent: var(--iso-orange);

  --radius-sm: 8px;
  --radius-md: 16px;
  --radius-lg: 24px;
  --radius-pill: 999px;

  --shadow-soft: 0 4px 12px rgba(45, 42, 38, 0.08), 0 12px 24px rgba(45, 42, 38, 0.08);
  --shadow-deep: 0 12px 36px rgba(45, 42, 38, 0.14);

  --font-display: 'PingFang TC', 'Noto Sans TC', 'Inter', 'Avenir', system-ui, sans-serif;
  --font-body: 'PingFang TC', 'Noto Sans TC', 'Inter', system-ui, sans-serif;
}
\`\`\`

## Typography Scale

| 級距 | 大小 | 用途 |
| --- | --- | --- |
| display | clamp(44px, 7vw, 84px) / 1.05 / 800 / -0.02em | Hero |
| h1 | clamp(28px, 4vw, 44px) / 1.2 / 700 | 區塊 |
| h2 | 22px / 1.3 / 700 | 子標 |
| body | 15px / 1.7 / 400 | 段落 |
| caption | 11px / 1.4 / 700 / 0.12em / uppercase | label |

字重偏粗、字距負（玩具感字標）。

## Layout Rules

- 背景：米沙色 + 等距格線 SVG（淺色）+ 偶爾飄一個小雲朵
- 容器寬度：max-width 1200px
- 卡片用圓角 + 軟陰影，模擬「漂浮」立體感
- 用 CSS \`transform: matrix(...)\` 或預先生成的 SVG 模擬等距形狀

各區塊構圖：
- **hero**：左大字 + 右等距場景圖（hero.webp 是核心圖、整個音樂節微縮成等距插畫）+ 圓 CTA 按鈕（橘色 + 投影）
- **about**：左等距插畫小場景 + 右段落 + 4 個圓形 3D 數字（每個搭配一個等距小物件）
- **lineup**：12 張圓角卡，每張卡上方放等距樂團小插畫、下方資訊
- **schedule**：3 day 用 timetable 卡，配立體小時鐘 icon
- **venues**：3 張卡用等距舞台插畫、下方文字
- **tickets**：3 張票卡，VIP 中央卡放大、配等距小皇冠插畫
- **travel**：3 步驟，每步配等距小交通工具 SVG（巴士、火車、帳篷）
- **sponsors**：title 配等距禮物盒圖示、gold/silver 配小徽章
- **footer-faq**：圓角卡 with \`<details>\`，配等距問號裝飾

## Do / Don't

| Do | Don't |
| --- | --- |
| 30° 等距角、不要近大遠小 | 用一點透視 |
| 飽和但不刺眼的暖色調 | 用單色或黑白 |
| 卡片用軟陰影製造漂浮感 | 用扁平無陰影 |
| 每個區塊配 1-2 個等距小元素 | 完全純文字 |
| 圓角中等（16-24px），玩具感不過度 | 用尖角或極大圓角 |

## Required Output Contract

通用契約。

## Required Images

依 \`assets-manifest.json\`。**強烈依賴 AI 生圖**，等距插畫風格。

## Reference Snippet

等距格線背景：
\`\`\`css
body {
  background-color: var(--iso-bg);
  background-image:
    linear-gradient(30deg, transparent 50%, rgba(45, 42, 38, 0.04) 50%),
    linear-gradient(150deg, transparent 50%, rgba(45, 42, 38, 0.04) 50%);
  background-size: 60px 35px;
}
\`\`\`

漂浮卡：
\`\`\`css
.iso-card {
  background: #ffffff;
  border-radius: var(--radius-md);
  padding: 24px;
  box-shadow: var(--shadow-soft);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}
.iso-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-deep);
}
\`\`\`

立體圓形數字：
\`\`\`css
.iso-num {
  width: 140px; height: 140px;
  border-radius: 50%;
  background: var(--iso-orange);
  color: white;
  display: grid;
  place-items: center;
  font-size: 48px;
  font-weight: 800;
  box-shadow: 0 0 0 8px rgba(255, 138, 60, 0.15), 0 12px 24px rgba(255, 138, 60, 0.35);
}
.iso-num.mint { background: var(--iso-mint); box-shadow: 0 0 0 8px rgba(95, 208, 179, 0.15), 0 12px 24px rgba(95, 208, 179, 0.35); }
.iso-num.lavender { background: var(--iso-lavender); }
.iso-num.yellow { background: var(--iso-yellow); color: var(--iso-fg); }
\`\`\`

CTA：
\`\`\`css
.btn-iso {
  background: var(--iso-orange);
  color: white;
  border: none;
  padding: 16px 32px;
  border-radius: var(--radius-pill);
  font-weight: 700;
  font-size: 16px;
  letter-spacing: 0.04em;
  box-shadow: 0 8px 16px rgba(255, 138, 60, 0.35);
  cursor: pointer;
  transition: transform 0.2s ease;
}
.btn-iso:hover { transform: translateY(-2px); }
\`\`\`

純 CSS 等距方塊（小裝飾用）：
\`\`\`css
.iso-block {
  width: 60px; height: 60px;
  background: var(--iso-orange);
  position: relative;
  transform: rotate(45deg) skew(15deg, 15deg);
}
.iso-block::before, .iso-block::after {
  content: '';
  position: absolute;
}
.iso-block::before {
  inset: 0;
  background: rgba(0,0,0,0.15);
  transform: translateY(-100%) skewX(-30deg);
  transform-origin: bottom;
}
\`\`\`
`,"../../.claude/skills/design-material-3/SKILL.md":`---
name: design-material-3
description: Use when generating a single-file HTML page for the 「島嶼共鳴 2026」music festival in the Material You / Material Design 3 style. Triggers on Material 3、Material You、Google Material、Android design.
user-invocable: true
---

# Material You / Material 3 — 島嶼共鳴 2026

## Style Philosophy

Material You 是 Google 在 2021 年 Android 12 發表的設計系統，繼承 2014 年 Material Design 的「擬紙、有層階」哲學，再加上「**動態色彩**」——從一張關鍵圖片提取 5 色 tonal palette 並套用全頁面。Material 3 強調 **expressive shape**（極大圓角、有機形狀）、**elevation tokens**（系統化陰影）、**state layers**（互動時的半透色覆蓋）。在音樂節網頁中，這風格表現出「**親民、易讀、產品級**」——像把音樂節做進 Google 自家 app 裡。

三個視覺辨識特徵：
1. **動態 tonal color palette**：從 hero 圖提取主色 → primary / secondary / tertiary 5 階
2. **系統化的 elevation 0-5**，每階對應特定 shadow + tint
3. **超大圓角 28px+**、藥丸按鈕、icon-text 並列的 chip

## Design Tokens

\`\`\`css
:root {
  /* Primary palette — 主色從海邊夕陽提取 */
  --md-primary-0: #000000;
  --md-primary-10: #2e1500;
  --md-primary-30: #6b3e00;
  --md-primary-40: #8a5400;
  --md-primary-50: #ad6c00;
  --md-primary-80: #ffb86f;
  --md-primary-90: #ffddb9;
  --md-primary-95: #ffeede;

  /* Secondary — 海洋藍 */
  --md-secondary-40: #4a6160;
  --md-secondary-90: #cce8e7;

  /* Tertiary — 紫紅夕陽 */
  --md-tertiary-40: #7a5167;
  --md-tertiary-90: #ffd8ec;

  /* Neutral */
  --md-bg: #fffbf6;             /* 偏暖白 surface */
  --md-surface: #fffbf6;
  --md-surface-variant: #f4ded3;
  --md-on-surface: #1f1b16;
  --md-on-surface-variant: #4f4539;
  --md-outline: #82756a;

  /* 兼容 token */
  --color-bg: var(--md-bg);
  --color-fg: var(--md-on-surface);
  --color-fg-soft: var(--md-on-surface-variant);
  --color-accent: var(--md-primary-40);
  --color-on-accent: #ffffff;

  --radius-xs: 8px;
  --radius-sm: 16px;
  --radius-md: 28px;
  --radius-lg: 36px;
  --radius-pill: 999px;
  --radius-extra: 50% 50% 50% 50% / 60% 60% 40% 40%;  /* organic shape */

  --elevation-1: 0 1px 2px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.06);
  --elevation-2: 0 1px 2px rgba(0,0,0,0.08), 0 3px 8px rgba(0,0,0,0.10);
  --elevation-3: 0 4px 8px rgba(0,0,0,0.10), 0 8px 24px rgba(0,0,0,0.12);

  --font-display: 'PingFang TC', 'Noto Sans TC', 'Google Sans', 'Roboto', system-ui, sans-serif;
  --font-body: 'PingFang TC', 'Noto Sans TC', 'Roboto', system-ui, sans-serif;
}
\`\`\`

## Typography Scale（Material 3 type scale 簡化版）

| 級距 | 大小 | 用途 |
| --- | --- | --- |
| display-large | clamp(40px, 6vw, 57px) / 1.12 / 400 | Hero 主標 |
| display-small | 36px / 1.22 / 400 | 區塊大標 |
| headline-large | 28px / 1.25 / 600 | 子區塊標題 |
| title-large | 20px / 1.27 / 500 | 卡片標題 |
| body-large | 16px / 1.5 / 400 | 段落 |
| label-large | 14px / 1.43 / 500 / 0.04em | 按鈕、標籤 |

## Layout Rules

- 容器寬度：max-width 1200px
- 卡片元件全部用 \`--radius-md\`（28px）或更大
- 元件間距用 8px 倍數系統（8 / 16 / 24 / 32 / 48 / 64）
- 採用 surface-tint：卡片背景為 \`--md-surface\`，elevated 卡 + 微妙 primary tint

各區塊構圖：
- **hero**：左對齊大字、右側放半徑 50% 的有機形狀 hero 圖、下方 FAB（懸浮按鈕）+ extended FAB
- **about**：4 個 elevated card 並排，每張含 icon + 數字 + 標籤
- **lineup**：12 張 list-style card；headliner 卡較大、放在最上；用 chip 標示曲風
- **schedule**：3 個 segmented button day-tab（純 CSS 切換），下方 timeline list with leading time
- **venues**：3 張大圓角圖文卡（image 在頂、文字在下）
- **tickets**：3 張票價卡，VIP 為 filled tonal card（背景 primary-90），其餘為 elevated white card
- **travel**：3 個 list-item with leading icon（用 unicode 或 inline SVG）
- **sponsors**：title 用 large filled card、gold 用 elevated card、silver 用 outlined card 構成 elevation 層次
- **footer-faq**：expand/collapse list（CSS only \`<details>\`）

## Do / Don't

| Do | Don't |
| --- | --- |
| 使用系統化 elevation tokens、不要隨便寫 box-shadow | 自創不規則陰影 |
| 圓角 ≥ 16px、藥丸按鈕一律 999px | 用方角或小圓角 |
| 動態色彩有 tonal 階梯關係（10 / 40 / 80 / 90 等） | 隨意撿色 |
| state layer：hover 用 8%、pressed 用 12% 同色覆蓋 | 用整個改變背景色的方式做 hover |
| icon 與文字並列時用 chip / button 的標準 padding（horizontal 16px） | icon 太小或太遠 |

## Required Output Contract

（與通用契約相同）

## Reference Snippet

Elevated card：
\`\`\`css
.card {
  background: var(--md-surface);
  border-radius: var(--radius-md);
  box-shadow: var(--elevation-1);
  padding: 24px;
  transition: box-shadow 0.2s ease;
}
.card:hover { box-shadow: var(--elevation-2); }
\`\`\`

Filled tonal card（用在 VIP 票）：
\`\`\`css
.card-tonal {
  background: var(--md-primary-90);
  color: var(--md-primary-10);
  border-radius: var(--radius-md);
  padding: 24px;
}
\`\`\`

Filled button（CTA）：
\`\`\`css
.btn-filled {
  background: var(--md-primary-40);
  color: #ffffff;
  border: none;
  padding: 14px 24px;
  border-radius: var(--radius-pill);
  font-weight: 500;
  letter-spacing: 0.04em;
  box-shadow: var(--elevation-1);
}
.btn-tonal {
  background: var(--md-primary-90);
  color: var(--md-primary-10);
}
\`\`\`

Chip：
\`\`\`css
.chip {
  display: inline-flex;
  gap: 6px;
  padding: 6px 12px;
  border-radius: var(--radius-pill);
  background: var(--md-surface-variant);
  color: var(--md-on-surface-variant);
  font-size: 13px;
  border: 1px solid var(--md-outline);
}
\`\`\`

有機形狀 hero 圖：
\`\`\`css
.hero-blob {
  width: 100%; aspect-ratio: 1;
  background-image: url('assets/hero.webp');
  background-size: cover;
  border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
}
\`\`\`
`,"../../.claude/skills/design-minimalism/SKILL.md":`---
name: design-minimalism
description: Use when generating a single-file HTML page for the 「島嶼共鳴 2026」music festival in a strict Minimalism / editorial whitespace style. Triggers on 極簡、極簡主義、Minimalism、白底黑字、ample whitespace, Dieter Rams, Jony Ive aesthetic.
user-invocable: true
---

# 極簡主義 Minimalism — 島嶼共鳴 2026

## Style Philosophy

極簡主義不是「東西很少」，而是「只保留必要的」。源於 1960s 的極簡藝術運動、1980s 的 Dieter Rams 設計十誡，再到 21 世紀蘋果 + 日系雜誌的當代詮釋。核心精神是：**讓內容說話、讓留白呼吸、讓字體做工**。在音樂節網頁中，這風格不會用大圖、不會用色彩斑斕——它把這場海邊音樂節呈現得像一張高品質印刷的藝廊邀請函或瑞士唱片內頁。

三個視覺辨識特徵：
1. **白底黑字**（或近黑近白），單色為主，僅一個 accent
2. **超大留白**：section 之間 160px+，元素之間慷慨間距
3. **精準的字體層次**：靠尺寸、字重、間距分階，不靠顏色或裝飾

## Design Tokens

\`\`\`css
:root {
  --color-bg: #ffffff;
  --color-bg-soft: #f7f7f7;
  --color-fg: #0a0a0a;           /* 近黑 */
  --color-fg-soft: #555555;
  --color-fg-mute: #999999;
  --color-line: #e5e5e5;
  --color-accent: #d4391c;       /* 一抹朱紅，整頁僅出現於極關鍵點 */
  --color-accent-fg: #ffffff;

  --space-xs: 8px;
  --space-sm: 16px;
  --space-md: 32px;
  --space-lg: 64px;
  --space-xl: 120px;
  --space-2xl: 200px;

  --radius-none: 0;
  --radius-sm: 2px;

  --font-display: 'PingFang TC', 'Noto Sans TC', 'Helvetica Neue', 'Arial', sans-serif;
  --font-body: 'PingFang TC', 'Noto Sans TC', 'Helvetica Neue', sans-serif;
  --font-mono: 'SF Mono', 'Menlo', 'Consolas', monospace;
}
\`\`\`

## Typography Scale

| 級距 | 大小 | 用途 |
| --- | --- | --- |
| display | clamp(56px, 9vw, 120px) / 1.0 / 700 / -0.04em | Hero 主標 |
| h1 | clamp(36px, 5vw, 56px) / 1.1 / 500 / -0.02em | 區塊大標 |
| h2 | 22px / 1.3 / 500 | 小標 |
| body | 15px / 1.75 / 400 / 0.005em | 段落 |
| caption | 11px / 1.5 / 500 / 0.18em / uppercase | kicker / 序號 |
| mono | 12px / 1.4 / 400 / 0.04em / mono-font | 票價、時段 |

注意：**字體寬度的對比**是極簡的核心武器——title 用粗、body 用 regular、time / number 用 mono。

## Layout Rules

- 容器寬度：max-width 1080px、左右大量留白（padding 32px+）
- section 之間最少 \`--space-xl\`（120px）
- 元素一律左對齊（hero 也左對齊，禁用置中）
- 沒有卡片、沒有 box-shadow、沒有 background-color（除了 accent 區）
- 區隔靠 hairline（1px var(--color-line)）與留白

各區塊構圖：
- **hero**：左對齊大字、上方一個三位數編號（"01" 暗示 issue number）、下方一行細節（日期 · 場地 · slogan）、最下一行 CTA link with underline
- **about**：兩欄 1:2，左 caption "ABOUT"、右段文字 + 4 行數字 list（無 icon）
- **lineup**：純文字 list（編號 · 樂團名 · 曲風 · 上場日 · 舞台 · 時段），無圖、無框；headliner 用粗體 + 朱紅短橫線標註
- **schedule**：表格樣式（hairline 分隔），時段用 mono 字體
- **venues**：三段純文字並排（grid 3 欄），用 hairline 分隔
- **tickets**：3 欄純文字、票價用 display 級距大字、無框、無漸層
- **travel**：序號 list（01 / 02 / 03）
- **sponsors**：純文字 list 分三組（title / gold / silver），不放 logo 圖
- **footer-faq**：純文字 Q/A、Q 粗 A 細、之間 hairline

## Do / Don't

| Do | Don't |
| --- | --- |
| 大量留白，section margin 120px+ | 把元素塞滿、無呼吸感 |
| 字體階層完全靠 size、weight、letter-spacing | 用顏色或框線製造階層 |
| accent 色（朱紅）整頁出現次數不超過 6 次 | 用色塊裝飾每個區塊 |
| hairline 線寬恆為 1px、顏色淺 | 用粗框線、深色框 |
| 字級對比要明顯（display ≥ 5x body） | 字級接近、無視覺節奏 |

## Required Output Contract

- 9 section 齊全；不要因「極簡」而省略任何區塊
- 12 樂團、3 票價、9 贊助商名一字不差
- 不用圖片也可以（hero 可以純文字）但若用圖片，需單色或低彩度
- 對比度 ≥ 7:1（接近黑白）
- 響應式三斷點，手機留白可降到 24px 但 section margin 仍需 80px+

## Required Images

依 \`assets-manifest.json\`。圖片可以選擇性使用（極簡風格本身就傾向少圖）。

## Reference Snippet

Hero：
\`\`\`css
.hero {
  padding: 200px 32px 160px;
  max-width: 1080px;
  margin: 0 auto;
}
.hero-issue {
  font-family: var(--font-mono);
  font-size: 12px;
  letter-spacing: 0.2em;
  color: var(--color-fg-soft);
  margin-bottom: 80px;
}
.hero-title {
  font-size: clamp(56px, 9vw, 120px);
  font-weight: 700;
  line-height: 1.0;
  letter-spacing: -0.04em;
  color: var(--color-fg);
  max-width: 14ch;
}
.hero-meta {
  margin-top: 40px;
  font-size: 14px;
  color: var(--color-fg-soft);
  display: flex;
  gap: 32px;
}
\`\`\`

Lineup list item：
\`\`\`css
.lineup-row {
  display: grid;
  grid-template-columns: 48px 1fr 1fr 1fr 1fr;
  padding: 28px 0;
  border-top: 1px solid var(--color-line);
  font-size: 15px;
  align-items: baseline;
}
.lineup-row.headliner .name {
  font-weight: 700;
}
.lineup-row.headliner .badge {
  color: var(--color-accent);
  font-family: var(--font-mono);
}
\`\`\`

Accent link：
\`\`\`css
.link-accent {
  color: var(--color-accent);
  text-decoration: none;
  border-bottom: 1px solid currentColor;
  padding-bottom: 2px;
  font-weight: 500;
}
\`\`\`
`,"../../.claude/skills/design-neumorphism/SKILL.md":`---
name: design-neumorphism
description: Use when generating a single-file HTML page for the 「島嶼共鳴 2026」music festival in the Neumorphism (新擬物化 / Soft UI) visual style. Triggers on terms like 新擬物化、Neumorphism、Soft UI、雕塑感介面、Claymorphism (mild variant).
user-invocable: true
---

# 新擬物化 Neumorphism — 島嶼共鳴 2026

## Style Philosophy

新擬物化是「**從背景中浮起或凹陷**」的雕塑哲學，2019 年由 Alexander Plyuto 發表後成為短暫席捲的 UI 風潮。核心是：所有元件與背景幾乎同色，但靠**雙向陰影**（左上偏白光、右下偏深陰影）製造立體感。在音樂節網頁脈絡，這風格讓界面**像一塊柔軟的米色橡膠**，極富觸感、暗示「按下去會回彈」。要呼應的不是激情，而是清晨陽光照在毯子上的安靜。

三個視覺辨識特徵：
1. **背景與元件同色**（淡灰、米色或暖白），透過陰影區分層次
2. **雙向陰影**：左上 \`inset\` 或外凸柔光、右下 \`inset\` 或外凸深影
3. **大圓角 + 厚重感**，不用實心邊框

## Design Tokens

\`\`\`css
:root {
  --color-bg: #e6e7ee;             /* 系統底色：所有元件同此色 */
  --color-bg-tinted: #ecedf3;
  --color-shadow-dark: #b5b9c5;    /* 陰影色（要比 bg 深 12-18%） */
  --color-shadow-light: #ffffff;   /* 高光色 */

  --color-fg: #2d3142;             /* 深藍灰，與 bg 對比 ≥ 7:1 */
  --color-fg-soft: #4f5470;
  --color-fg-mute: #6b7280;
  --color-accent: #d97706;         /* 暖橙色 — 唯一彩色 */
  --color-accent-fg: #ffffff;
  --color-headliner: #b91c1c;      /* 紅磚色，僅用於 headliner 標示 */

  --radius-sm: 12px;
  --radius-md: 20px;
  --radius-lg: 32px;
  --radius-pill: 999px;

  --shadow-out: 9px 9px 18px var(--color-shadow-dark), -9px -9px 18px var(--color-shadow-light);
  --shadow-out-lg: 14px 14px 30px var(--color-shadow-dark), -14px -14px 30px var(--color-shadow-light);
  --shadow-in: inset 6px 6px 12px var(--color-shadow-dark), inset -6px -6px 12px var(--color-shadow-light);
  --shadow-in-sm: inset 4px 4px 8px var(--color-shadow-dark), inset -4px -4px 8px var(--color-shadow-light);

  --font-display: 'PingFang TC', 'Noto Sans TC', system-ui, -apple-system, sans-serif;
  --font-body: 'PingFang TC', 'Noto Sans TC', system-ui, sans-serif;
}
\`\`\`

## Typography Scale

| 級距 | 大小 | 用途 |
| --- | --- | --- |
| display | clamp(40px, 6vw, 72px) / 1.1 / 700 / -0.02em | Hero 主標 |
| h1 | clamp(28px, 4vw, 40px) / 1.25 / 600 | 區塊標題 |
| h2 | 22px / 1.35 / 600 | 子標 |
| body | 16px / 1.7 / 400 | 段落 |
| caption | 11px / 1.5 / 500 / 0.1em / uppercase | 標籤 |

字色用 \`--color-fg\`（深藍灰），對比度 ≥ 7:1。

## Layout Rules

- 全頁背景：\`var(--color-bg)\`，**單一色彩**，不可漸層
- 容器寬度：max-width 1080px，section padding 80-100px
- 元件節奏：每個區塊主體用 \`--shadow-out\` 凸起、內部小區塊用 \`--shadow-in\` 凹陷
- 兩種狀態構成節奏感：**凸起卡片**承載資訊、**凹陷區塊**強調分隔或輸入區

各區塊構圖：
- **hero**：主標題下用大圓角凸起 chip 標示日期，CTA 是凸起 pill button
- **about**：4 個圓形凸起數字卡橫排
- **lineup**：12 張凸起樂團卡（圓角 32px），headliner 在卡片內額外用「凹陷徽章」標示
- **schedule**：每天一張大凸起卡、內部時段為凹陷小條
- **venues**：3 個大圓角卡片，3D 感雕塑
- **tickets**：3 張票卡、VIP 中央放大、加上 accent 橙色凸起 ribbon
- **travel**：3 步驟，每步驟為凸起圓圖示 + 文字
- **sponsors**：圓形凸起 logo 框，title 最大、gold 中、silver 小
- **footer-faq**：每條 FAQ 為凸起手風琴面板

## Do / Don't

| Do | Don't |
| --- | --- |
| 所有元件與背景**同色** | 給卡片不同的底色 — 立刻失去新擬物化精神 |
| 用雙向陰影製造立體感 | 只用單向陰影 — 變成扁平卡片 |
| 大圓角（≥ 16px），暗示「軟」 | 用尖角或小圓角 |
| 主要文字必須足夠深以維持對比 | 用淺灰色文字 — 對比度災難 |
| 凸起與凹陷交替使用、製造節奏 | 全頁都凸起，失去層次 |

## Required Output Contract

- 單檔 \`index.html\`，inline CSS / JS、≤ 200 KB
- 9 個 section data-block 齊全
- 12 樂團、3 票價、9 贊助商名一字不差
- 不可外連 CDN
- 圖片相對路徑 \`assets/<filename>.webp\`
- WCAG AA：所有文字 ≥ 4.5:1（搭配 \`--color-fg\` 與 \`--color-bg\` 可達 ~10:1）
- 響應式三斷點

## Required Images

依 \`assets-manifest.json\`。

## Reference Snippet

凸起元件：
\`\`\`css
.raised {
  background: var(--color-bg);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-out);
}
.raised-lg {
  box-shadow: var(--shadow-out-lg);
}
\`\`\`

凹陷區塊：
\`\`\`css
.inset {
  background: var(--color-bg);
  border-radius: var(--radius-sm);
  box-shadow: var(--shadow-in);
}
\`\`\`

凸起 CTA：
\`\`\`css
.btn {
  background: var(--color-bg);
  color: var(--color-fg);
  border: none;
  padding: 16px 32px;
  border-radius: var(--radius-pill);
  box-shadow: var(--shadow-out);
  font-weight: 600;
  letter-spacing: 0.04em;
  cursor: pointer;
  transition: box-shadow 0.2s ease;
}
.btn:hover { box-shadow: var(--shadow-out-lg); }
.btn:active { box-shadow: var(--shadow-in); }
.btn-accent {
  background: var(--color-accent);
  color: var(--color-accent-fg);
}
\`\`\`

數字大字：
\`\`\`css
.stat-bubble {
  width: 140px; height: 140px;
  border-radius: 50%;
  background: var(--color-bg);
  box-shadow: var(--shadow-out-lg);
  display: grid;
  place-items: center;
  font-size: 36px;
  font-weight: 700;
  color: var(--color-fg);
}
\`\`\`
`,"../../.claude/skills/design-scandinavian/SKILL.md":`---
name: design-scandinavian
ating-description: Use when generating a single-file HTML page for the 「島嶼共鳴 2026」music festival in Scandinavian / Nordic Minimalism style. Triggers on Scandinavian、北歐、Nordic、Hygge、Finn Juhl、Aalto、Kinfolk、自然木質、極簡溫暖、淺色木紋.
user-invocable: true
---

# 北歐極簡 Scandinavian — 島嶼共鳴 2026

## Style Philosophy

北歐設計哲學以「**機能 + 自然 + 溫暖**」為核心——20 世紀芬蘭 Alvar Aalto、丹麥 Finn Juhl 等家具設計師創立的傳統，加上當代 Hygge 生活哲學。視覺上：**淺木色、白色、灰色、軍綠色 / 深藍**為基調，少量強調色，自然素材（木紋、亞麻、植栽）為紋理，幾何但溫暖。在音樂節網頁中，這風格把「島嶼共鳴」呈現得像 **斯堪地納維亞夏日的森林音樂會**：寬鬆、舒適、人本。

三個視覺辨識特徵：
1. **米白 + 淺木 + 軍綠 / 深藍** 配色，飽和度低、明度高
2. **無襯線細字 + 大量留白 + 適中圓角（8-12px）**
3. **手繪自然元素**（葉子、枝條、波浪）作為點綴

## Design Tokens

\`\`\`css
:root {
  --sc-cream: #f5f0e6;          /* 亞麻米 */
  --sc-cream-2: #ece5d4;
  --sc-wood: #c89e69;           /* 淺木 */
  --sc-wood-dark: #9c764a;
  --sc-fg: #2c2a26;             /* 暖深棕 */
  --sc-fg-soft: #5a564d;
  --sc-fg-mute: #8a8478;
  --sc-stone: #cfc8b9;
  --sc-forest: #3e574b;         /* 森林綠 */
  --sc-deep: #1f3b4d;           /* 深海藍 */
  --sc-accent: #c44e3c;         /* 磚紅，少量 */

  --color-bg: var(--sc-cream);
  --color-fg: var(--sc-fg);
  --color-accent: var(--sc-forest);

  --radius-sm: 8px;
  --radius-md: 16px;
  --radius-lg: 28px;
  --radius-pill: 999px;

  --shadow-soft: 0 2px 8px rgba(44, 42, 38, 0.05), 0 8px 32px rgba(44, 42, 38, 0.06);

  --font-display: 'PingFang TC', 'Noto Sans TC', 'Inter', 'Helvetica Neue', system-ui, sans-serif;
  --font-body: 'PingFang TC', 'Noto Sans TC', 'Inter', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', 'SF Mono', monospace;
}
\`\`\`

## Typography Scale

| 級距 | 大小 | 用途 |
| --- | --- | --- |
| display | clamp(44px, 7vw, 84px) / 1.1 / 500 / -0.015em | Hero |
| h1 | clamp(28px, 4vw, 44px) / 1.2 / 500 | 區塊 |
| h2 | 20px / 1.35 / 500 | 子標 |
| body | 16px / 1.75 / 400 | 段落 |
| caption | 11px / 1.5 / 500 / 0.16em / uppercase | label |

字重偏輕至中（400-500），不用 700+ 粗體。

## Layout Rules

- 背景：米白 + 偶爾的「木紋」CSS gradient 條紋紋理
- 容器寬度：max-width 1160px，section padding 80-100px
- 卡片用淺色背景 + 軟陰影，圓角 8-16px
- 大量留白、寬鬆 line-height、適中字距

各區塊構圖：
- **hero**：左大字標題 + 右 hero 圖（圓角 28px）+ 下方 chip 標示日期 / 場地 / slogan + 軍綠 pill CTA
- **about**：左插畫圖（葉片 / 森林意象 / 木質）+ 右段落 + 4 個圓形大數字（淺木背景）
- **lineup**：12 張米白卡 + 軟陰影；headliner 卡背景換深森林綠白字
- **schedule**：3 day 各為一張長卡，時段以淺木分隔線
- **venues**：3 張卡（圖在頂、文在下），圓角 16px
- **tickets**：3 張卡，VIP 中央背景深海藍白字、其他米白配軍綠細邊
- **travel**：3 步驟，序號圈為淺木色
- **sponsors**：title 米白卡大 + gold 米白卡中 + silver 純文字
- **footer-faq**：每條 FAQ 為米白圓角卡 with \`<details>\` expand

## Do / Don't

| Do | Don't |
| --- | --- |
| 飽和度低、明度高的自然色 | 高飽和螢光色 |
| 細到中等字重、寬鬆 line-height | 厚實粗體 |
| 適中圓角（8-16px） | 直角或極大圓角 |
| 配葉片 / 樹枝 / 波浪等自然元素裝飾 | 用機械幾何裝飾 |
| 大量留白、不擁擠 | 元素密集排版 |

## Required Output Contract

通用契約。

## Required Images

依 \`assets-manifest.json\`。鼓勵自然光、靜物、戶外景觀。

## Reference Snippet

軟陰影卡：
\`\`\`css
.nordic-card {
  background: #fdfbf5;
  border: 1px solid rgba(44, 42, 38, 0.06);
  border-radius: var(--radius-md);
  padding: 24px;
  box-shadow: var(--shadow-soft);
}
.nordic-card.forest {
  background: var(--sc-forest);
  color: var(--sc-cream);
}
.nordic-card.deep {
  background: var(--sc-deep);
  color: var(--sc-cream);
}
\`\`\`

葉片裝飾（SVG inline）：
\`\`\`html
<svg viewBox="0 0 40 40" class="leaf">
  <path d="M20 4 C 28 8, 32 16, 30 28 C 24 26, 16 22, 12 14 C 14 8, 18 4, 20 4 Z"
        fill="var(--sc-forest)" opacity="0.4"/>
  <path d="M20 4 L 20 32" stroke="var(--sc-forest)" stroke-width="0.8" opacity="0.6"/>
</svg>
\`\`\`

\`\`\`css
.leaf {
  width: 32px; height: 32px;
  display: inline-block;
}
\`\`\`

Pill CTA：
\`\`\`css
.btn-nordic {
  background: var(--sc-forest);
  color: var(--sc-cream);
  border: none;
  padding: 14px 28px;
  border-radius: var(--radius-pill);
  font-weight: 500;
  letter-spacing: 0.04em;
  font-size: 15px;
  box-shadow: var(--shadow-soft);
  cursor: pointer;
}
.btn-nordic.outline {
  background: transparent;
  color: var(--sc-forest);
  border: 1px solid var(--sc-forest);
}
\`\`\`

數字大字：
\`\`\`css
.nordic-stat {
  width: 120px; height: 120px;
  border-radius: 50%;
  background: var(--sc-cream-2);
  display: grid;
  place-items: center;
  font-size: 36px;
  font-weight: 500;
  color: var(--sc-forest);
}
\`\`\`
`,"../../.claude/skills/design-swiss-international/SKILL.md":`---
name: design-swiss-international
description: Use when generating a single-file HTML page for the 「島嶼共鳴 2026」music festival in Swiss International Typographic Style (瑞士國際風格). Triggers on Swiss、International Style、瑞士風格、Helvetica、Akzidenz Grotesk、Müller-Brockmann、grid system、左對齊網格、二戰後排版革命.
user-invocable: true
---

# 瑞士國際風格 Swiss International — 島嶼共鳴 2026

## Style Philosophy

瑞士國際排版風格（International Typographic Style）由 Josef Müller-Brockmann、Armin Hofmann 等 1950 年代瑞士設計師建立，是 20 世紀**設計理性主義的高峰**——嚴格的網格系統、無襯線字體（Helvetica / Akzidenz Grotesk）、左對齊、客觀傳達訊息。在音樂節網頁中，這風格把「島嶼共鳴」做成**蘇黎世火車站的活動公告**：精準、安靜、毫無花俏，但每個元素都各得其所。

三個視覺辨識特徵：
1. **嚴格 grid + 全部左對齊（or 嚴格對齊）**
2. **Helvetica / sans-serif、緊密 line-height、明確字級層次**
3. **白底黑字 + 單一鮮明強調色**（多為紅或藍）

## Design Tokens

\`\`\`css
:root {
  --sw-white: #ffffff;
  --sw-black: #1d1d1b;
  --sw-fg-soft: #555555;
  --sw-grey-1: #e6e6e3;
  --sw-grey-2: #b8b8b4;
  --sw-red: #d4361a;             /* Swiss red */
  --sw-blue: #003a99;            /* Swiss blue alternative */

  --color-bg: var(--sw-white);
  --color-fg: var(--sw-black);
  --color-accent: var(--sw-red);

  --radius-none: 0;

  --grid-cols: 12;
  --grid-gutter: 24px;

  --font-display: 'Helvetica Neue', 'Helvetica', 'PingFang TC', 'Noto Sans TC', 'Arial', sans-serif;
  --font-body: 'Helvetica Neue', 'Helvetica', 'PingFang TC', 'Noto Sans TC', 'Arial', sans-serif;
}
\`\`\`

## Typography Scale

| 級距 | 大小 | 用途 |
| --- | --- | --- |
| display | clamp(64px, 10vw, 144px) / 0.95 / 700 / -0.02em | Hero |
| h1 | clamp(36px, 5vw, 56px) / 1.05 / 600 | 區塊 |
| h2 | 22px / 1.2 / 600 | 子標 |
| body | 15px / 1.5 / 400 | 段落 — 緊密 leading 是瑞士風格特徵 |
| caption | 11px / 1.3 / 500 / 0.06em / uppercase | label |
| mono | 13px / 1.4 / 400 | 時段（用 Helvetica，無 monospace） |

## Layout Rules

- 容器寬度：max-width 1280px、padding 40-60px
- 12-column grid + 24px gutter（嚴格遵守）
- 所有元素左對齊（或統一右對齊作為對比）
- baseline grid：所有文字都對齊到 8px baseline
- 不用陰影、不用漸層、不用裝飾——只用 hairline 或實色塊

各區塊構圖：
- **hero**：左上 8/12 大字標題，標題下 4/12 一段資訊段；右側 4/12 紅色實心方塊或極簡海報式排版
- **about**：左 4/12 caption + 右 8/12 段落 + 4 個數字（hairline 分隔）
- **lineup**：12 樂團以純文字 list、嚴格欄位對齊；headliner 用紅色短橫線標記
- **schedule**：3 個 day 為 12-column grid 內 4-column blocks，時段表用 hairline
- **venues**：3 段對齊到 4-4-4 grid，每段為 caption + name + capacity + 1 段文字
- **tickets**：3 個 4-column blocks，價格用 display 大字、純文字
- **travel**：3 個 4-column blocks
- **sponsors**：純文字三組
- **footer-faq**：6/6 grid，Q 與 A 對齊到不同 column

## Do / Don't

| Do | Don't |
| --- | --- |
| 嚴格 12-column grid 對齊 | 隨意 flexbox |
| 全部 Helvetica / sans-serif | 用襯線或裝飾字體 |
| accent 色僅用紅或藍其中之一，極少用 | 用多種強調色 |
| hairline / 實色塊 / 字級對比為主要視覺工具 | 用陰影 / 漸層 / 圓角 |
| 所有文字左對齊 | 中央對齊 / 右對齊混用 |

## Required Output Contract

通用契約。

## Required Images

依 \`assets-manifest.json\`。瑞士風格可幾乎全文字 + 偶爾 1 張關鍵圖。

## Reference Snippet

12-col grid：
\`\`\`css
.grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 24px;
}
.col-2 { grid-column: span 2; }
.col-4 { grid-column: span 4; }
.col-6 { grid-column: span 6; }
.col-8 { grid-column: span 8; }
.col-12 { grid-column: span 12; }
\`\`\`

Display 標題：
\`\`\`css
.swiss-title {
  font-family: var(--font-display);
  font-size: clamp(64px, 10vw, 144px);
  font-weight: 700;
  line-height: 0.95;
  letter-spacing: -0.025em;
  color: var(--sw-black);
}
.swiss-title em {
  font-style: normal;
  color: var(--sw-red);
}
\`\`\`

Hairline 分隔：
\`\`\`css
.swiss-hairline {
  border: none;
  border-top: 1px solid var(--sw-black);
  margin: 32px 0;
}
\`\`\`

紅色實色塊（可作為 hero 視覺重點）：
\`\`\`css
.swiss-block {
  background: var(--sw-red);
  color: var(--sw-white);
  padding: 40px;
  font-family: var(--font-display);
  font-weight: 600;
}
\`\`\`

Caption：
\`\`\`css
.swiss-kicker {
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--sw-fg-soft);
  margin-bottom: 16px;
}
\`\`\`
`,"../../.claude/skills/design-synthwave/SKILL.md":`---
name: design-synthwave
description: Use when generating a single-file HTML page for the 「島嶼共鳴 2026」music festival in 80s Synthwave / Outrun aesthetic. Triggers on Synthwave、Outrun、80s、retrowave、neon grid sun、Drive movie、Stranger Things title style、霓虹網格夕陽.
user-invocable: true
---

# 80s Synthwave — 島嶼共鳴 2026

## Style Philosophy

Synthwave 是對 1980 年代電影、電玩、賽車海報的當代懷舊重塑——靈感來自 Tron、Miami Vice、Blade Runner、Drive。視覺核心：**深紫黑天空 + 巨大霓虹粉紅落日 + 透視網格地板 + 鉻金屬發光標題**。差異於 vaporwave 的反諷與廢墟感，synthwave 更燦爛、奔馳、英雄主義。在音樂節網頁中，這風格讓「島嶼共鳴」像 1985 年某部不存在的科幻電影的主視覺。

三個視覺辨識特徵：
1. **巨大霓虹太陽 / 月亮**漸層在水平線上（粉紅 → 橙 → 紫）
2. **透視網格地板**延伸至地平線
3. **發光鉻金屬標題字 + 銳利霓虹邊框**

## Design Tokens

\`\`\`css
:root {
  --sw-sky-1: #0c0124;
  --sw-sky-2: #2c0c5a;
  --sw-sun-1: #ff2e88;
  --sw-sun-2: #ff8b00;
  --sw-sun-3: #ffe35c;
  --sw-grid: #ff2e88;
  --sw-cyan: #00f0ff;
  --sw-purple: #b026ff;

  --sw-fg: #ffffff;
  --sw-fg-soft: #d8c5ff;
  --sw-fg-mute: rgba(255, 255, 255, 0.6);

  --color-bg: var(--sw-sky-1);
  --color-fg: var(--sw-fg);
  --color-accent: var(--sw-sun-1);

  --radius-sm: 2px;
  --radius-md: 6px;
  --radius-none: 0;

  --shadow-neon-pink: 0 0 8px var(--sw-sun-1), 0 0 24px rgba(255, 46, 136, 0.6);
  --shadow-neon-cyan: 0 0 8px var(--sw-cyan), 0 0 24px rgba(0, 240, 255, 0.6);
  --shadow-neon-purple: 0 0 8px var(--sw-purple), 0 0 24px rgba(176, 38, 255, 0.6);

  --font-display: 'Impact', 'Arial Black', 'PingFang TC', 'Noto Sans TC', sans-serif;
  --font-body: 'PingFang TC', 'Noto Sans TC', 'Verdana', sans-serif;
  --font-mono: 'Courier New', monospace;
}
\`\`\`

## Typography Scale

| 級距 | 大小 | 用途 |
| --- | --- | --- |
| display | clamp(56px, 9vw, 120px) / 0.95 / 900 / 0.05em / uppercase | Hero |
| h1 | clamp(36px, 5vw, 56px) / 1.1 / 800 / uppercase | 區塊大標 |
| h2 | 22px / 1.25 / 700 / 0.05em / uppercase | 子標 |
| body | 15px / 1.65 / 400 | 段落 |
| caption | 12px / 1.4 / 700 / 0.18em / uppercase | label |
| mono | 14px / 1.5 / 500 / Courier | 時段、票價 |

## Layout Rules

- 全頁背景：紫黑漸層上方（天空）+ 透視網格地板下半部 + 中央放置巨大霓虹落日（CSS radial gradient + horizontal stripes 切割）
- 容器寬度：max-width 1180px
- 卡片：黑底配霓虹邊框（pink 或 cyan）、極輕內距、銳利角

各區塊構圖：
- **hero**：滿版背景配霓虹落日 + 中央鉻金屬發光大字標題 + 副標片假名或英文 + CTA 為粉紅霓虹邊框按鈕
- **about**：4 個霓虹邊框數字 tile（每個交替使用 pink / cyan 邊框）
- **lineup**：12 張卡，每張卡為黑底 + neon 邊框；headliner 卡用 pink 大邊 + 內外發光
- **schedule**：3 day 並列、每 day 用 cyan / pink / purple 邊框區分；時段表為 mono 字體
- **venues**：3 張卡寬排，圖片用 neon 邊框包圍
- **tickets**：3 張票卡，VIP 中央用粉紅發光厚邊
- **travel**：3 步驟，配紫色霓虹圖示
- **sponsors**：黑底 grid，title 用粉紅 + cyan 雙色文字漸層
- **footer-faq**：每條 FAQ 為霓虹邊框小框，標題粉色

## Do / Don't

| Do | Don't |
| --- | --- |
| 巨大落日 + 透視網格作為頁面背景 | 用平面色塊背景 |
| 標題字加 chrome 漸層 + glow shadow | 用 flat 顏色標題 |
| 邊框用 1-2px sharp neon border | 用厚實邊框 |
| 文字配色控制在 pink / cyan / purple / 白 | 用過多顏色變花 |
| 銳利角、不要圓角（最多 6px） | 用大圓角 — 失去 80s 感 |

## Required Output Contract

通用契約。

## Required Images

依 \`assets-manifest.json\`。

## Reference Snippet

霓虹落日（純 CSS）：
\`\`\`css
.sun {
  position: relative;
  width: 80%; max-width: 600px;
  aspect-ratio: 1;
  margin: 0 auto;
  background:
    linear-gradient(180deg,
      var(--sw-sun-3) 0%, var(--sw-sun-3) 60%,
      transparent 60%, transparent 65%,
      var(--sw-sun-2) 65%, var(--sw-sun-2) 70%,
      transparent 70%, transparent 75%,
      var(--sw-sun-1) 75%, var(--sw-sun-1) 82%,
      transparent 82%, transparent 87%,
      var(--sw-sun-1) 87%, var(--sw-sun-1) 100%);
  border-radius: 50%;
  filter: drop-shadow(0 0 60px rgba(255, 46, 136, 0.6));
}
\`\`\`

透視網格地板：
\`\`\`css
.grid-floor {
  position: fixed;
  bottom: 0; left: 0; width: 100%; height: 40vh;
  background:
    linear-gradient(180deg, transparent 0%, var(--sw-sky-1) 90%),
    repeating-linear-gradient(0deg, var(--sw-grid) 0 1px, transparent 1px 50px),
    repeating-linear-gradient(90deg, var(--sw-grid) 0 1px, transparent 1px 50px);
  transform: perspective(400px) rotateX(60deg);
  transform-origin: top;
  z-index: -1;
}
\`\`\`

Chrome 漸層標題：
\`\`\`css
.chrome-title {
  font-family: var(--font-display);
  font-weight: 900;
  background: linear-gradient(180deg,
    var(--sw-sun-3) 0%,
    var(--sw-sun-2) 50%,
    var(--sw-sun-1) 100%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  text-shadow:
    0 4px 12px rgba(255, 46, 136, 0.6);
  letter-spacing: 0.05em;
}
\`\`\`

霓虹卡片：
\`\`\`css
.neon-card {
  background: rgba(12, 1, 36, 0.7);
  border: 2px solid var(--sw-sun-1);
  border-radius: var(--radius-md);
  padding: 24px;
  box-shadow: var(--shadow-neon-pink), inset 0 0 16px rgba(255, 46, 136, 0.2);
  color: var(--sw-fg);
}
.neon-card.cyan { border-color: var(--sw-cyan); box-shadow: var(--shadow-neon-cyan); }
.neon-card.purple { border-color: var(--sw-purple); box-shadow: var(--shadow-neon-purple); }
\`\`\`

CTA：
\`\`\`css
.btn-neon {
  background: transparent;
  border: 2px solid var(--sw-sun-1);
  color: var(--sw-sun-1);
  padding: 14px 32px;
  font-family: var(--font-display);
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  box-shadow: var(--shadow-neon-pink);
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease;
}
.btn-neon:hover { background: var(--sw-sun-1); color: var(--sw-sky-1); }
\`\`\`
`,"../../.claude/skills/design-taiwan-temple/SKILL.md":`---
name: design-taiwan-temple
description: Use when generating a single-file HTML page for the 「島嶼共鳴 2026」music festival in Taiwan Temple Carnival (台灣廟會 / 夜市) style. Triggers on 台灣廟會、夜市、酬神、北港、霓虹招牌、農民曆、流水席、辦桌、紅黃對比、舞台車.
user-invocable: true
---

# 台灣廟會 Taiwan Temple Carnival — 島嶼共鳴 2026

## Style Philosophy

台灣廟會是這座島嶼最濃烈的視覺文化載體——**霓虹招牌、紅黃強對比、廟柱對聯、辦桌粉紅塑膠桌布、流水席圓桌、舞台車金邊邊框、農民曆排版**。它毫不收斂、不講究品味、但飽含生命力。在音樂節網頁中，這風格把「島嶼共鳴」做成 **酬神音樂會 + 流水席 + 走唱舞台車的綜合體**：紅金主色、霓虹發光招牌、滿版圖騰、龍鳳元素混搭電子琴花車。

三個視覺辨識特徵：
1. **大紅大金 + 螢光黃綠藍輔助色**，俗艷飽和
2. **粗黑體標題 + 楷書 / 圓體輔助、霓虹發光招牌排版**
3. **金邊框、龍紋、鞭炮、香爐、燈籠** 等廟會符號

## Design Tokens

\`\`\`css
:root {
  --tw-red: #d92e2e;             /* 廟會紅 */
  --tw-red-dark: #a01b1b;
  --tw-gold: #e9b73d;            /* 金 */
  --tw-gold-dark: #b48823;
  --tw-yellow: #ffd941;          /* 黃 */
  --tw-cream: #fff6e1;
  --tw-black: #1c1a16;
  --tw-neon-green: #2dff7e;      /* 招牌綠 */
  --tw-neon-blue: #1ebbff;       /* 招牌藍 */
  --tw-pink: #ff8aa3;            /* 辦桌粉 */

  --color-bg: var(--tw-red);
  --color-fg: var(--tw-cream);
  --color-accent: var(--tw-gold);

  --radius-sm: 6px;
  --radius-md: 14px;
  --radius-circle: 50%;

  --shadow-neon-yellow: 0 0 8px var(--tw-yellow), 0 0 24px rgba(255, 217, 65, 0.6);
  --shadow-neon-blue: 0 0 8px var(--tw-neon-blue), 0 0 18px rgba(30, 187, 255, 0.5);
  --shadow-neon-green: 0 0 8px var(--tw-neon-green), 0 0 18px rgba(45, 255, 126, 0.5);

  --font-display: 'PingFang TC', 'Noto Sans TC', 'STHeiti', 'Arial Black', sans-serif;
  --font-body: 'PingFang TC', 'Noto Sans TC', 'STHeiti', sans-serif;
  --font-kai: 'STKaiti', 'KaiTi', 'PingFang TC', serif;
  --font-numeric: 'STKaiti', 'PingFang TC', sans-serif;
}
\`\`\`

## Typography Scale

| 級距 | 大小 | 用途 |
| --- | --- | --- |
| display | clamp(56px, 9vw, 120px) / 0.95 / 900 / 0.06em | Hero 大字 |
| h1 | clamp(36px, 5vw, 60px) / 1.05 / 800 | 區塊大標 |
| h2 | 22px / 1.25 / 700 | 子標 |
| body | 15px / 1.7 / 400 | 段落 |
| caption | 11px / 1.4 / 700 / 0.16em | label |
| kai | 18px / 1.5 / 500 / 楷書 | 對聯 / 古意感 |

## Layout Rules

- 背景：紅色為主 + 金邊框 + 局部黃色發光區塊
- 容器寬度：max-width 1240px
- 元素邊框：粗金邊（4-6px solid gold），常見圓角 + 雙層邊框
- 廟會符號裝飾：對聯、燈籠、鞭炮（用 unicode 符號 / 純 CSS）

各區塊構圖：
- **hero**：滿版紅底 + 中央大金字「島嶼共鳴 2026」+ 上下對聯式副標（紅紙金字）+ 中央發光霓虹「立即購票」招牌按鈕
- **about**：金邊紅底卡 + 4 個圓形「香爐」風格數字（金邊圓 + 紅內 + 黃數字）
- **lineup**：12 個「演員牌」金邊框卡，背景輪換紅黃；headliner 配「壓軸」紅色印章
- **schedule**：3 day 像「農民曆」風格表格、紅底白字、宜忌欄位風格
- **venues**：3 張「舞台車」式金邊卡，仿廟口戲台
- **tickets**：3 張「香油錢」式券卡，VIP 中央配發光黃霓虹招牌
- **travel**：3 段，配紅色燈籠 SVG / unicode 符號
- **sponsors**：仿酬神匾額排版，title 用金底紅字大區塊「壹級贊助」
- **footer-faq**：仿「香條」對聯排版，Q 紅 A 金

## Do / Don't

| Do | Don't |
| --- | --- |
| 大紅大金 + 輔助螢光色 | 用低彩度配色 |
| 金邊框、雙層邊框、霓虹發光招牌 | 完全無邊框 |
| 加入廟會符號（燈籠 🏮、鞭炮、對聯） | 完全去除文化符號 |
| 文字保持高對比（金字紅底 / 紅字金底 / 白字紅底） | 紅字粉底等低對比災難 |
| 至少 1 處「對聯」式上下並列文字 | 完全西式排版 |

## Required Output Contract

通用契約。

## Required Images

依 \`assets-manifest.json\`。

## Reference Snippet

對聯（上下並列直書）：
\`\`\`html
<div class="couplet">
  <div class="couplet-left">島嶼之聲共此夜</div>
  <div class="couplet-right">山海回響映三朝</div>
</div>
\`\`\`
\`\`\`css
.couplet {
  display: flex;
  justify-content: space-between;
  font-family: var(--font-kai);
  font-size: 20px;
  color: var(--tw-gold);
  letter-spacing: 0.18em;
}
.couplet-left, .couplet-right {
  writing-mode: vertical-rl;
  background: linear-gradient(180deg, var(--tw-red-dark), var(--tw-red));
  border: 2px solid var(--tw-gold);
  padding: 16px 10px;
  line-height: 1.8;
}
\`\`\`

霓虹招牌按鈕：
\`\`\`css
.btn-neon-shop {
  background: var(--tw-red);
  color: var(--tw-yellow);
  border: 4px solid var(--tw-yellow);
  padding: 16px 36px;
  font-family: var(--font-display);
  font-size: 22px;
  font-weight: 900;
  letter-spacing: 0.18em;
  box-shadow: var(--shadow-neon-yellow), inset 0 0 24px rgba(255,217,65,0.25);
  text-shadow: 0 0 6px var(--tw-yellow);
}
\`\`\`

金邊框卡：
\`\`\`css
.gold-frame {
  background: var(--tw-cream);
  color: var(--tw-black);
  border: 4px solid var(--tw-gold);
  outline: 2px solid var(--tw-red);
  outline-offset: 4px;
  padding: 20px;
}
\`\`\`

香爐式圓形數字：
\`\`\`css
.incense-num {
  width: 130px; height: 130px;
  background: var(--tw-red);
  border-radius: 50%;
  border: 4px solid var(--tw-gold);
  display: grid;
  place-items: center;
  font-family: var(--font-display);
  font-size: 42px;
  font-weight: 900;
  color: var(--tw-yellow);
  text-shadow: 0 0 8px rgba(255,217,65,0.5);
}
\`\`\`

廟會印章：
\`\`\`css
.stamp-zh {
  display: inline-block;
  width: 80px; height: 80px;
  background: var(--tw-red);
  color: var(--tw-cream);
  border: 3px solid var(--tw-cream);
  outline: 3px solid var(--tw-red);
  text-align: center;
  font-family: var(--font-kai);
  font-size: 28px;
  font-weight: 700;
  line-height: 74px;
  transform: rotate(-6deg);
}
\`\`\`
`,"../../.claude/skills/design-vaporwave/SKILL.md":`---
name: design-vaporwave
description: Use when generating a single-file HTML page for the 「島嶼共鳴 2026」music festival in Vaporwave (蒸氣波) aesthetic. Triggers on Vaporwave、蒸氣波、A E S T H E T I C、80s/90s internet retro、希臘雕像 + 日文 katakana、pastel pink purple aesthetic.
user-invocable: true
---

# 蒸氣波 Vaporwave — 島嶼共鳴 2026

## Style Philosophy

蒸氣波誕生於 2010 年代初的 tumblr，是一種**回憶 90 年代資本主義美學的反烏托邦電子藝術**。視覺核心：希臘羅馬雕像、棕櫚樹、Windows 95 視窗、片假名（カタカナ）、磁帶 VHS 故障、夕陽落日、粉紅紫漸層。在音樂節網頁裡，這風格把獨立音樂節打扮成 **1995 年從未存在的賽博渡假村廣告**——既懷舊又超現實，帶著淡淡的諷刺與大量寬鬆字距的英文標題。

三個視覺辨識特徵：
1. **粉紅 + 紫 + 青色漸層**，常見天空、棋盤格地板
2. **粗體寬鬆字距英文標題**（"A E S T H E T I C" 風格），混搭片假名
3. **古典雕像、棕櫚樹、CRT 掃描線、復古 windows 視窗** 元素

## Design Tokens

\`\`\`css
:root {
  --vw-bg-1: #2a0a4a;          /* deep purple */
  --vw-bg-2: #ff6ec7;          /* bright pink */
  --vw-bg-3: #00f0ff;          /* cyan */
  --vw-bg-4: #ffafcc;          /* pastel pink */
  --vw-bg-grid: #ff2e88;       /* grid lines */

  --vw-fg: #ffffff;
  --vw-fg-soft: #ffd6ec;
  --vw-fg-mute: #c89cff;
  --vw-accent: #fffd54;        /* electric yellow — sparingly */
  --vw-accent-fg: #2a0a4a;
  --vw-cyan: #00f0ff;
  --vw-pink: #ff6ec7;

  --color-bg: var(--vw-bg-1);
  --color-fg: var(--vw-fg);
  --color-accent: var(--vw-accent);

  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-none: 0;

  --shadow-glow-pink: 0 0 24px var(--vw-pink), 0 0 48px rgba(255, 110, 199, 0.4);
  --shadow-glow-cyan: 0 0 24px var(--vw-cyan), 0 0 48px rgba(0, 240, 255, 0.4);
  --shadow-window: 4px 4px 0 #000, 6px 6px 16px rgba(0, 0, 0, 0.3);

  --font-display: 'Impact', 'PingFang TC', 'Noto Sans TC', sans-serif;
  --font-body: 'PingFang TC', 'Noto Sans TC', 'Verdana', sans-serif;
  --font-mono: 'Courier New', 'Courier', monospace;
}
\`\`\`

## Typography Scale

| 級距 | 大小 | 用途 |
| --- | --- | --- |
| display | clamp(64px, 10vw, 144px) / 0.95 / 900 / 0.15em / uppercase | "A E S T H E T I C" 大標 |
| h1 | clamp(40px, 6vw, 64px) / 1.1 / 700 / 0.1em / uppercase | 區塊標題 |
| h2 | 24px / 1.3 / 700 / 0.06em / uppercase | 子標 |
| body | 14px / 1.65 / 400 | 段落 |
| caption | 11px / 1.4 / 500 / 0.2em / uppercase | label |
| katakana | 18px / 1.4 / 500 / 0.08em | 片假名輔助標題 |

## Layout Rules

- 主要背景：紫粉漸層 + 棋盤格透視地板（CSS \`transform: perspective + rotateX\`）+ 棕櫚樹剪影
- 區塊容器：max-width 1100px，section 之間放大量留白與分隔線（霓虹色 hr）
- 模擬古 windows 95 視窗風格的卡片：標題列 + 三個圓鈕（紅黃綠）+ 內容區
- 文字常用「W I D E  S P A C I N G」效果（letter-spacing 0.15-0.2em）

各區塊構圖：
- **hero**：滿版漸層背景 + 中央希臘雕像或圖案 + 上方大字「島嶼 共鳴」與英文「I S L A N D  R E S O N A N C E」+ 片假名副標「アイランド・レゾナンス」+ 下方 CTA 復古按鈕
- **about**：仿 Windows 95 視窗的 about box；4 個閃光球體數字
- **lineup**：12 張卡片仿 VHS cassette 標籤；headliner 卡較大、附 hot pink 邊框
- **schedule**：3 day 並列，每 day 用網格時間表配霓虹線
- **venues**：3 張小視窗，視窗內為舞台插畫 + 名稱（中英雙語 + 片假名）
- **tickets**：3 個 cassette 風格票卡，VIP 中央配電光黃描邊
- **travel**：跑馬燈跑過頂部 + 3 步驟配 80 年代圖示
- **sponsors**：仿銀色金屬名單列、title 用閃爍效果
- **footer-faq**：每條 FAQ 為 windows 視窗詳情展開

## Do / Don't

| Do | Don't |
| --- | --- |
| 大量使用片假名、粗體寬距英文標題 | 完全捨棄日英輔助文字 |
| 棋盤格透視地板、漸層天空 | 用純色背景 |
| 視窗 / VHS / 卡帶 等元素至少 3 處 | 完全現代風格、無懷舊符號 |
| 文字保持白色或淺粉以維持對比 | 紫底配紫字 — 不可讀 |
| 用 css 製作棕櫚樹剪影或仿 SVG | 用真實照片（風格不合） |

## Required Output Contract

（通用契約：9 section、12 樂團、3 票價、9 贊助商、200KB、無 CDN、相對路徑圖）

## Required Images

依 \`assets-manifest.json\`。

## Reference Snippet

棋盤格透視地板：
\`\`\`css
.grid-floor {
  position: fixed;
  bottom: 0; left: 0;
  width: 100%; height: 50vh;
  background:
    linear-gradient(transparent 0%, rgba(255, 46, 136, 0.4) 100%),
    repeating-linear-gradient(0deg, var(--vw-bg-grid) 0 1px, transparent 1px 60px),
    repeating-linear-gradient(90deg, var(--vw-bg-grid) 0 1px, transparent 1px 60px);
  transform: perspective(500px) rotateX(60deg);
  transform-origin: bottom;
  pointer-events: none;
  z-index: 0;
}
\`\`\`

Windows 95 視窗：
\`\`\`css
.win95 {
  background: #c0c0c0;
  border: 2px solid #fff;
  border-right-color: #404040;
  border-bottom-color: #404040;
  box-shadow: var(--shadow-window);
  color: #000;
}
.win95-bar {
  background: linear-gradient(90deg, var(--vw-bg-1) 0%, var(--vw-pink) 100%);
  color: white;
  padding: 4px 8px;
  font-size: 12px;
  letter-spacing: 0.08em;
  display: flex;
  justify-content: space-between;
}
\`\`\`

Aesthetic title：
\`\`\`css
.aesthetic-title {
  font-family: var(--font-display);
  font-size: clamp(64px, 10vw, 144px);
  font-weight: 900;
  letter-spacing: 0.15em;
  color: var(--vw-fg);
  text-shadow:
    4px 4px 0 var(--vw-pink),
    8px 8px 0 var(--vw-cyan);
  text-transform: uppercase;
}
\`\`\`

跑馬燈：
\`\`\`css
.marquee {
  overflow: hidden;
  background: var(--vw-pink);
  color: #fff;
  padding: 8px 0;
}
.marquee-inner {
  display: inline-block;
  white-space: nowrap;
  animation: marquee 20s linear infinite;
}
@keyframes marquee {
  from { transform: translateX(100%); }
  to { transform: translateX(-100%); }
}
\`\`\`
`,"../../.claude/skills/design-wabi-sabi/SKILL.md":`---
name: design-wabi-sabi
description: Use when generating a single-file HTML page for the 「島嶼共鳴 2026」music festival in Japanese Wabi-Sabi (日式禪意 / 侘寂) style. Triggers on wabi-sabi、侘寂、日式禪意、和風、Zen、ink wash、sumi-e、tea ceremony minimalism、紙質感、Muji aesthetic.
user-invocable: true
---

# 日式禪意 Wabi-Sabi — 島嶼共鳴 2026

## Style Philosophy

侘寂（wabi-sabi）是日本美學的核心：**接受不完美、無常、不完整**。它與西方的「完美無瑕」是對立的——一只破碎再用金繼修補的茶碗、一片掉了角的和紙、苔蘚從石縫中長出。視覺核心是 **米色紙質、墨色筆觸、大量留白、自然瑕疵**。在音樂節網頁中，這風格把「島嶼共鳴」做成**京都茶室裡的一場靜默音樂會**——沒有喧鬧，只有對自然與當下的尊敬。

三個視覺辨識特徵：
1. **米色紙質背景**（slight grain texture）+ **墨黑文字** + **單一暖灰 accent**
2. **明朝體標題 + 細楷書體（中文用粗黑體 fallback）+ 細直書元素**
3. **大量留白、極少裝飾、自然不對稱、墨色筆觸圓圈點綴**

## Design Tokens

\`\`\`css
:root {
  --wb-paper: #f0ead7;          /* 和紙米色 */
  --wb-paper-2: #e8e0c8;
  --wb-ink: #1c1815;            /* 墨黑 */
  --wb-ink-soft: #4a443d;
  --wb-ink-mute: #8c8475;
  --wb-stone: #6b6358;          /* 石灰 */
  --wb-stamp: #b8362f;          /* 朱印 */
  --wb-tea: #a47e3b;            /* 茶色 */

  --color-bg: var(--wb-paper);
  --color-fg: var(--wb-ink);
  --color-accent: var(--wb-stamp);

  --radius-none: 0;
  --radius-sm: 2px;
  --radius-circle: 50%;

  --font-display: 'Hiragino Mincho ProN', 'YuMincho', 'PingFang TC', 'Noto Serif TC', serif;
  --font-body: 'PingFang TC', 'Noto Sans TC', 'Hiragino Sans', 'Yu Gothic', sans-serif;
  --font-numeric: 'Hiragino Mincho ProN', 'Times', serif;
}
\`\`\`

## Typography Scale

| 級距 | 大小 | 用途 |
| --- | --- | --- |
| display | clamp(40px, 6vw, 80px) / 1.15 / 400 / Mincho / 0.04em | Hero |
| h1 | clamp(28px, 4vw, 44px) / 1.25 / 500 / Mincho | 區塊 |
| h2 | 20px / 1.45 / 500 | 子標 |
| body | 15px / 1.95 / 400 | 段落 — leading 極寬 |
| caption | 11px / 1.5 / 400 / 0.18em | label |
| vertical | direct vertical writing 直書 | 章節序號 / 引文 |

中文字符要**寬鬆**：letter-spacing 0.03-0.06em。

## Layout Rules

- 背景：和紙米色 + 微 noise + 偶爾出現的「墨點」（小黑圓圈裝飾）
- 容器寬度：**窄**（max-width 880px），讓留白極多
- section 間距：120-180px
- **不對稱**：標題與內容不必置中、可偏左偏右
- 直書元素：用 CSS \`writing-mode: vertical-rl\` 製作章節編號或引言

各區塊構圖：
- **hero**：右側直書日期 + 場地、中央偏左明朝大字「島嶼共鳴」、左下小段落、底部朱印
- **about**：左 1/3 一段直書引文 + 右 2/3 段落、4 個極簡數字配漢字單位
- **lineup**：12 樂團名以**直書 / 橫書並列**呈現，hairline 細線分隔；headliner 配朱印 \`頭\`
- **schedule**：3 day 像茶室桌牌一樣垂直排列、時段表簡素
- **venues**：3 段配水墨小圈（純 CSS）為標記
- **tickets**：3 段純文字，價格用明朝大字
- **travel**：直書編號 + 橫書文案
- **sponsors**：純文字列表、title 配朱印圈
- **footer-faq**：問答用 hairline 分隔、 Q 配朱色圓點、A 縮排

## Do / Don't

| Do | Don't |
| --- | --- |
| 米色紙底 + 墨黑文字 + 朱紅小印 | 用鮮豔多彩配色 |
| 大量留白、不對稱、自然瑕疵感 | 整齊對稱、塞滿 |
| 明朝 / 楷書字體 | 用無襯線粗黑體 |
| 直書元素至少 1 處 | 全橫書、失去日式氛圍 |
| 配少量水墨圓點 / 線條（純 CSS） | 用 emoji 或鮮明圖示 |

## Required Output Contract

通用契約。寬鬆 line-height、大量留白為核心。

## Required Images

依 \`assets-manifest.json\`。鼓勵水墨風格圖片（黑白、抽象、墨韻）。

## Reference Snippet

和紙紋理：
\`\`\`css
body {
  background:
    radial-gradient(circle at 20% 15%, rgba(28,24,21,0.025) 0 1px, transparent 1px),
    radial-gradient(circle at 70% 60%, rgba(28,24,21,0.02) 0 1px, transparent 1px),
    var(--wb-paper);
  background-size: 280px 280px;
}
\`\`\`

直書元素：
\`\`\`css
.tategaki {
  writing-mode: vertical-rl;
  font-family: var(--font-display);
  font-size: 14px;
  letter-spacing: 0.18em;
  color: var(--wb-ink-soft);
  line-height: 2;
  white-space: nowrap;
}
\`\`\`

朱印：
\`\`\`css
.stamp {
  display: inline-block;
  width: 56px; height: 56px;
  border: 2px solid var(--wb-stamp);
  color: var(--wb-stamp);
  font-family: var(--font-display);
  font-size: 22px;
  font-weight: 500;
  text-align: center;
  line-height: 52px;
  transform: rotate(-4deg);
  letter-spacing: 0;
}
\`\`\`

水墨圓點裝飾：
\`\`\`css
.ink-dot {
  width: 14px; height: 14px;
  border-radius: 50%;
  background:
    radial-gradient(circle at 30% 30%,
      var(--wb-ink) 0%,
      var(--wb-ink) 60%,
      rgba(28,24,21,0.4) 80%,
      transparent 100%);
  display: inline-block;
  margin-right: 12px;
  filter: blur(0.4px);
}
\`\`\`

明朝大標：
\`\`\`css
.mincho-title {
  font-family: var(--font-display);
  font-size: clamp(40px, 6vw, 80px);
  font-weight: 400;
  line-height: 1.15;
  letter-spacing: 0.04em;
  color: var(--wb-ink);
}
\`\`\`

Hairline 區隔：
\`\`\`css
.zen-divider {
  border: none;
  border-top: 1px solid var(--wb-ink-mute);
  margin: 0;
  opacity: 0.45;
}
\`\`\`
`,"../../.claude/skills/design-web1/SKILL.md":`---
name: design-web1
description: Use when generating a single-file HTML page for the 「島嶼共鳴 2026」music festival in 90s Web 1.0 style. Triggers on Web 1.0、Geocities、90s web、復古網頁、html table layout、blink、marquee、under construction GIF.
user-invocable: true
---

# 90s Web 1.0 — 島嶼共鳴 2026

## Style Philosophy

Web 1.0 是 1996–2000 年大眾建站的混亂青春期。沒有 CSS3、沒有 flexbox、沒有 design system——只有 \`<table>\` 排版、\`<font color="red">\` 標籤、tile 背景圖、blink 文字、marquee 跑馬燈、under construction GIF。在音樂節網頁中，這風格故意「失去設計感」：像 1998 年一位熱愛獨立音樂的大學生用 Frontpage 寫出來的個人首頁——粗糙、誠懇、滿是嫩芽級的網路熱情。

三個視覺辨識特徵：
1. **系統字體（Times、Courier、Verdana）+ 純色背景或 tile 圖**
2. **Table-based 排版視覺**（不需真的用 table 但要有那感覺）+ 內嵌彩色 \`<font>\` 字
3. **訪客數計數器、blink 文字、跑馬燈、星空 GIF、Best viewed with NS3.0**

## Design Tokens

\`\`\`css
:root {
  --w1-bg: #008080;            /* Windows 98 teal */
  --w1-bg-alt: #c0c0c0;        /* silver */
  --w1-bg-tile: #e8d8b8;       /* paper tile-ish */
  --w1-text: #000000;
  --w1-link: #0000ff;
  --w1-link-visited: #800080;
  --w1-link-hover: #ff0000;
  --w1-accent-red: #ff0000;
  --w1-accent-green: #00ff00;
  --w1-accent-blue: #0000ff;
  --w1-yellow: #ffff00;

  --color-bg: var(--w1-bg);
  --color-fg: var(--w1-text);
  --color-accent: var(--w1-accent-red);

  --radius-none: 0;

  --font-display: 'Comic Sans MS', 'Times New Roman', serif;
  --font-body: 'Times New Roman', 'PingFang TC', 'Noto Sans TC', serif;
  --font-mono: 'Courier New', monospace;
}
\`\`\`

## Typography Scale

| 級距 | 大小 | 用途 |
| --- | --- | --- |
| display | 36px / 1.1 / 700 / Comic Sans 或 Times Bold | Hero |
| h1 | 24px / 1.2 / 700 | 區塊大標 |
| h2 | 18px / 1.3 / 700 | 子標 |
| body | 14px / 1.5 / 400 / Times | 段落 |
| caption | 12px / 1.3 / 400 / Courier | 小字 |

**故意混搭 Times + Comic Sans + Courier**，視覺品味故意「土味」。

## Layout Rules

- 背景：teal 純色 + 內框白底（仿 frame 排版）；或內框直接放 tile pattern
- 容器寬度：max-width 800px（仿 1996 800x600 時代）置中
- **不用 flexbox / grid**：靠 \`<table>\`-like 排版（用 CSS 模擬：\`display: table\`）
- 大量 \`<hr>\` 分隔線（彩色或粗體）
- 區塊不留太多 padding，緊湊感

各區塊構圖：
- **hero**：上方居中大字 \`*** 島嶼共鳴 2026 ***\`，閃爍效果，下面三行 \`<font>\` 不同顏色說明、紅色「★ 立即購票 ★」連結
- **about**：左側星空 GIF/動畫 + 右側段落、底部 \`Last updated:\` 2026 年 5 月 1 日
- **lineup**：用 table 顯示 12 樂團，每列彩色背景條紋（白/灰交替）；headliner 用 \`<blink>\` + 紅字
- **schedule**：3 個 table、每天一個、藍黃綠各為一日標題色
- **venues**：3 個獨立 frame，垂直堆疊；每個 frame 內含舞台 GIF + Times 段落
- **tickets**：粗框 table、每張票一列 + 紅色「按這裡訂購」連結
- **travel**：以列點 list（\`<ul>\`），項目前用紅色三角符號
- **sponsors**：純文字三段、用 \`<hr>\` 分割，title 用 24px 紅字
- **footer-faq**：FAQ 用 \`<dl>\` 樣式 + 訪客計數器 + best viewed banner

## Do / Don't

| Do | Don't |
| --- | --- |
| 用系統字體、彩色文字、底線連結 | 用現代字體系列 |
| 模擬 table 排版、星空背景 | 用現代 flexbox 整齊 grid |
| 在 hero 加 \`<marquee>\` 樣式跑馬燈 | 完全沒有動態元素 |
| 連結藍底紅 hover 紫 visited | 用扁平風格按鈕 |
| 用 emoji-like 符號（★ ✦ ▶）裝飾 | 完全簡潔現代 |

注意對比度：黑字白底完全沒問題，但避免黃底白字、紅底藍字這類災難。

## Required Output Contract

通用契約，特別強調**檔案大小可低於 100KB**（這個風格本來就極輕）。

## Required Images

依 \`assets-manifest.json\`，鼓勵用模擬「90s gif」風格的圖。

## Reference Snippet

仿 table 排版：
\`\`\`css
.tbl {
  display: table;
  border-collapse: separate;
  border-spacing: 2px;
  width: 100%;
  background: #c0c0c0;
  border: 2px outset #c0c0c0;
}
.tbl-row { display: table-row; }
.tbl-cell {
  display: table-cell;
  padding: 4px 8px;
  background: #ffffff;
  vertical-align: top;
  font-family: var(--font-body);
  border: 1px inset #c0c0c0;
}
\`\`\`

Blink 文字（用 CSS animation 替代）：
\`\`\`css
.blink {
  animation: blink 1s step-end infinite;
  color: var(--w1-accent-red);
  font-weight: bold;
}
@keyframes blink {
  50% { visibility: hidden; }
}
\`\`\`

跑馬燈：
\`\`\`css
.marquee {
  overflow: hidden;
  white-space: nowrap;
  background: var(--w1-yellow);
  color: black;
  padding: 4px 0;
  font-family: var(--font-mono);
}
.marquee span {
  display: inline-block;
  animation: scroll 15s linear infinite;
}
@keyframes scroll {
  from { transform: translateX(100%); }
  to   { transform: translateX(-100%); }
}
\`\`\`

訪客計數器：
\`\`\`css
.counter {
  display: inline-block;
  background: #000;
  color: var(--w1-accent-green);
  font-family: 'Courier New', monospace;
  padding: 2px 8px;
  border: 1px solid var(--w1-text);
  letter-spacing: 0.1em;
}
\`\`\`
`,"../../.claude/skills/design-y2k/SKILL.md":`---
name: design-y2k
description: Use when generating a single-file HTML page for the 「島嶼共鳴 2026」music festival in Y2K (千禧年) aesthetic. Triggers on Y2K、千禧、2000s、cyber-cute、chrome、frutiger aero、半透塑膠、Lisa Frank.
user-invocable: true
---

# Y2K 千禧 — 島嶼共鳴 2026

## Style Philosophy

Y2K 是 1999–2003 年那場關於「電腦會不會把世界搞壞」的集體焦慮，孕育出的視覺則完全相反——**樂觀、塑膠感、未來感**。代表元素：銀色金屬、藍色玻璃、星形閃光、3D 球體、低多邊形怪物、Internet Explorer 6 的小圖示。在音樂節網頁中，這風格讓「島嶼共鳴」變成 **2002 年某個少女雜誌的青春期幻想**：又閃又閃又閃，每個按鈕都能 hover 變大。

三個視覺辨識特徵：
1. **金屬銀漸層 + 電光藍** 為主色
2. **3D 球體、星型 sticker、Lens flare 高光、心型 / 蝴蝶結 icon**
3. **過度可愛的小圖示 + 中世紀體 / pixel 字混搭**

## Design Tokens

\`\`\`css
:root {
  --y2k-bg-1: #cfe9ff;          /* baby blue */
  --y2k-bg-2: #ffd9f0;          /* baby pink */
  --y2k-bg-3: #e0f7ff;          /* ice blue */
  --y2k-silver-1: #f0f4f8;
  --y2k-silver-2: #c4d1de;
  --y2k-silver-3: #8da4bd;
  --y2k-chrome: linear-gradient(180deg, #f8fbff 0%, #c4d8ee 35%, #6f92b7 60%, #c4d8ee 75%, #f8fbff 100%);

  --y2k-fg: #1a1a3e;            /* deep navy */
  --y2k-fg-soft: #4a4a7a;
  --y2k-pink: #ff4f99;
  --y2k-blue: #4fa3ff;
  --y2k-accent: #ff4f99;
  --y2k-yellow: #ffe55c;

  --color-bg: var(--y2k-bg-1);
  --color-fg: var(--y2k-fg);
  --color-accent: var(--y2k-accent);

  --radius-sm: 8px;
  --radius-md: 14px;
  --radius-lg: 24px;
  --radius-pill: 999px;

  --shadow-button: inset 0 1px 0 rgba(255,255,255,0.7), 0 4px 8px rgba(31, 65, 110, 0.25);
  --shadow-card: 0 6px 16px rgba(64, 109, 175, 0.18);
  --shadow-glow: 0 0 12px var(--y2k-pink);

  --font-display: 'Trebuchet MS', 'PingFang TC', 'Noto Sans TC', sans-serif;
  --font-body: 'Verdana', 'PingFang TC', 'Noto Sans TC', sans-serif;
  --font-pixel: 'Courier New', monospace;
}
\`\`\`

## Typography Scale

| 級距 | 大小 | 用途 |
| --- | --- | --- |
| display | clamp(48px, 7vw, 88px) / 1.05 / 800 / -0.01em | Hero |
| h1 | clamp(28px, 4vw, 42px) / 1.2 / 700 | 區塊大標 |
| h2 | 20px / 1.3 / 700 | 子標 |
| body | 14px / 1.65 / 400 | 段落 |
| caption | 11px / 1.4 / 700 / 0.06em / uppercase | label |

文字常用 navy（#1a1a3e）配粉色 / 藍色高亮，營造卡通對話框感。

## Layout Rules

- 主背景：淡藍 + 淡粉漸層 + 散布閃光星星 SVG / pseudo-element
- 容器寬度：max-width 1100px
- 卡片：銀色金屬漸層邊框 + 圓角 + 高光 inset shadow
- 元素互動：按鈕、卡片邊角常見 ⋆ 星型小裝飾

各區塊構圖：
- **hero**：3D 銀色徽章中央 + 大標 + 副標 + 蝴蝶結圖示 + 「立即購票 ✦」按鈕
- **about**：4 個圓形閃亮 sticker（每個一個數字，邊框金屬感）
- **lineup**：12 張卡，每張卡上方 3D 唱片圖示、下方資訊；headliner 卡用 hot pink 邊框 + 心型角標
- **schedule**：3 日時間表為「IM messenger 對話框」風格
- **venues**：3 張卡，金屬邊框圓角，內含 stage 圖
- **tickets**：3 張票卡，VIP 票用 chrome silver 漸層卡 + 星型角標
- **travel**：步驟卡像 iPod 列表
- **sponsors**：銀色徽章列、title sponsor 用最大徽章
- **footer-faq**：用 Microsoft Messenger 風格氣泡 + 點擊展開

## Do / Don't

| Do | Don't |
| --- | --- |
| 大量使用銀色金屬漸層 + 高光 | 用純色 flat 背景 |
| 添加星型、愛心、蝴蝶結等小裝飾 | 完全冷感無裝飾 |
| 按鈕一律 pill 樣式 + chrome 漸層 + inset highlight | 用純色方按鈕 |
| 文字保持深色（navy）以確保對比 | 深底配淺字 — y2k 是淺底深字風格 |
| 卡片角落可加 ✦ ✧ 等 unicode 符號 | 把元素放得太擁擠到失序 |

## Required Output Contract

通用契約。

## Required Images

依 \`assets-manifest.json\`。

## Reference Snippet

Chrome 按鈕：
\`\`\`css
.chrome-btn {
  background: var(--y2k-chrome);
  color: var(--y2k-fg);
  border: 1px solid #6f92b7;
  border-radius: var(--radius-pill);
  padding: 12px 28px;
  font-weight: 700;
  font-family: var(--font-display);
  letter-spacing: 0.04em;
  box-shadow: var(--shadow-button);
  cursor: pointer;
  transition: transform 0.15s ease;
}
.chrome-btn:hover { transform: translateY(-1px) scale(1.02); }
\`\`\`

3D 球體（用 radial-gradient）：
\`\`\`css
.orb {
  width: 80px; height: 80px;
  border-radius: 50%;
  background:
    radial-gradient(circle at 30% 20%, #ffffff 0%, var(--y2k-pink) 40%, #b21f64 100%);
  box-shadow: 0 8px 18px rgba(178, 31, 100, 0.4), inset 0 -8px 16px rgba(0,0,0,0.2);
}
\`\`\`

閃光星型 background：
\`\`\`css
body::before {
  content: '';
  position: fixed;
  inset: 0;
  pointer-events: none;
  background-image:
    radial-gradient(circle at 20% 10%, rgba(255,255,255,0.8) 0 1px, transparent 2px),
    radial-gradient(circle at 80% 30%, rgba(255,255,255,0.6) 0 1px, transparent 2px),
    radial-gradient(circle at 50% 70%, rgba(255,255,255,0.7) 0 1px, transparent 2px),
    radial-gradient(circle at 30% 90%, rgba(255,255,255,0.5) 0 1px, transparent 2px);
  background-size: 600px 600px, 800px 800px, 400px 400px, 700px 700px;
  opacity: 0.6;
}
\`\`\`

Sticker card：
\`\`\`css
.sticker-card {
  background: white;
  border: 3px solid var(--y2k-silver-2);
  border-image: linear-gradient(135deg, #f8fbff, #6f92b7, #f8fbff) 1;
  border-radius: var(--radius-lg);
  padding: 20px;
  box-shadow: var(--shadow-card);
  position: relative;
}
.sticker-card::after {
  content: '✦';
  position: absolute;
  top: -10px; right: -10px;
  color: var(--y2k-pink);
  font-size: 24px;
  text-shadow: var(--shadow-glow);
}
\`\`\`
`,"../../.claude/skills/motion-aurora-flow/SKILL.md":`---
name: motion-aurora-flow
description: Use when generating a single-file HTML page for the 「島嶼共鳴 2026」music festival with continuously flowing aurora gradient background. Triggers on aurora gradient、極光流動、looping gradient、ambient color flow.
user-invocable: true
---

# 極光漸層流動 Aurora Flow — 島嶼共鳴 2026

## Style Philosophy

延續第一輪 gradient-mesh 的視覺語彙，但**讓背景持續流動**——多層 radial-gradient blob 以 \`@keyframes\` 緩慢移動位置與 size，像極光在夜空裡漂浮。沒有滾動或互動觸發，是純 CSS keyframes 循環。整個頁面像呼吸的液態。

三個視覺辨識特徵：
1. **多層 radial-gradient blob 持續循環動畫**
2. **玻璃半透卡片**漂浮在流動背景之上
3. **柔光發亮文字** + 暖色 accent

## Design Tokens

\`\`\`css
:root {
  --au-base: #0a0a1f;
  --au-base-2: #1a1238;
  --au-blob-1: #ff6ec7;
  --au-blob-2: #6d76ff;
  --au-blob-3: #00d9c0;
  --au-blob-4: #ffb84a;
  --au-blob-5: #b372ff;

  --au-fg: #ffffff;
  --au-fg-soft: rgba(255, 255, 255, 0.78);
  --au-fg-mute: rgba(255, 255, 255, 0.58);
  --au-card: rgba(255, 255, 255, 0.08);
  --au-card-strong: rgba(255, 255, 255, 0.14);
  --au-border: rgba(255, 255, 255, 0.18);
  --au-accent: #fff48a;

  --color-bg: var(--au-base);
  --color-fg: var(--au-fg);
  --color-accent: var(--au-accent);

  --radius-md: 18px;
  --radius-lg: 28px;
  --radius-pill: 999px;

  --blur-glass: 24px;
  --shadow-glass: 0 8px 32px rgba(0, 0, 0, 0.25);

  --font-display: 'PingFang TC', 'Noto Sans TC', 'Inter', system-ui, sans-serif;
  --font-body: 'PingFang TC', 'Noto Sans TC', 'Inter', system-ui, sans-serif;
}
\`\`\`

## Typography Scale

| 級距 | 大小 | 用途 |
| --- | --- | --- |
| display | clamp(56px, 9vw, 120px) / 1.0 / 700 / -0.03em | Hero |
| h1 | clamp(28px, 4vw, 48px) / 1.2 / 600 | 區塊 |
| h2 | 20px / 1.3 / 600 | 子標 |
| body | 16px / 1.7 / 400 | 段落 |
| caption | 11px / 1.4 / 600 / 0.12em / uppercase | label |

## Layout Rules

- \`<body>\` 包一層 \`body::before\` 含 5 個 radial-gradient blob + 60px filter blur，整個 fixed inset 0
- 每個 blob 用獨立 @keyframes \`aurora-blob-N\` 跑 25-40s 不同 timing，translate + scale 變化
- 卡片用 backdrop-filter blur + 半透白底
- 整頁可被 reduced motion 關掉動畫（變靜態 mesh）

各區塊構圖：
- 同 gradient-mesh 第一輪設計：hero 大字 + glass cards 排版
- 每個 section 用半透 glass card 承載
- 區塊間距 80-120px

## Motion Specification

- **動態效果類別**：loop
- **觸發機制**：CSS \`@keyframes\`（不依賴 JS）
- **性能要求**：transform + filter blur GPU 加速；用 \`will-change: transform\`
- **觸發頻率**：純 CSS 30-60fps 自動

## Accessibility (Reduced Motion)

- reduced 模式：\`@keyframes\` 動畫設 \`animation: none !important\`，保留靜態 mesh 視覺
- 確保 mesh 背景與卡片在無動畫下仍美觀（背景固定一個 frame 即可）

## Required Output Contract

通用契約 + 8 條動態要求。\`<body data-motion-type="loop">\`。極簡 inline \`<script>\`（可只有空檢查或完全省略 JS，純 CSS 動畫即可，但仍需有 IntersectionObserver 或 keyframes 等動態存在 — 此處用 \`@keyframes\` 已滿足）。

## Required Images

無圖，純 CSS 漸層。

## Reference Snippet

\`\`\`css
body {
  background: var(--au-base);
  position: relative;
  overflow-x: hidden;
}
body::before {
  content: '';
  position: fixed;
  inset: -10%;
  z-index: -1;
  pointer-events: none;
  background:
    radial-gradient(700px circle at 12% 20%, var(--au-blob-1) 0%, transparent 55%),
    radial-gradient(800px circle at 88% 25%, var(--au-blob-2) 0%, transparent 55%),
    radial-gradient(600px circle at 25% 78%, var(--au-blob-3) 0%, transparent 55%),
    radial-gradient(700px circle at 78% 85%, var(--au-blob-4) 0%, transparent 55%),
    radial-gradient(550px circle at 50% 50%, var(--au-blob-5) 0%, transparent 45%);
  filter: blur(60px);
  opacity: 0.85;
  animation: aurora-flow 28s ease-in-out infinite alternate;
  will-change: transform, background-position;
}
@keyframes aurora-flow {
  0%   { transform: translate3d(0, 0, 0) scale(1); filter: blur(60px) hue-rotate(0deg); }
  50%  { transform: translate3d(40px, -30px, 0) scale(1.1); filter: blur(70px) hue-rotate(15deg); }
  100% { transform: translate3d(-30px, 40px, 0) scale(1.05); filter: blur(65px) hue-rotate(-10deg); }
}
@media (prefers-reduced-motion: reduce) {
  body::before { animation: none !important; }
}
\`\`\`

玻璃卡片：
\`\`\`css
.glass {
  background: var(--au-card);
  backdrop-filter: blur(var(--blur-glass)) saturate(140%);
  -webkit-backdrop-filter: blur(var(--blur-glass)) saturate(140%);
  border: 1px solid var(--au-border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-glass);
  color: var(--au-fg);
}
\`\`\`
`,"../../.claude/skills/motion-counter-burst/SKILL.md":`---
name: motion-counter-burst
description: Use when generating a single-file HTML page for the 「島嶼共鳴 2026」music festival with animated number counters that count up from 0 to target value when entering viewport. Triggers on counter animation、數字計數、count up、odometer effect.
user-invocable: true
---

# 數字爆裂計數 Counter Burst — 島嶼共鳴 2026

## Style Philosophy

把所有關鍵數字——屆數、樂團組數、人次、票價——都變成**進入視窗時的動畫展示**：從 0 跳動到目標值，伴隨輕微 scale 與 colour shift，給網頁一種「資訊在你眼前生成」的能量感。靈感來自 Stripe、Linear、Vercel 統計頁、Apple 規格頁。視覺風格：明亮乾淨 + 巨型數字 + 大量留白。

三個視覺辨識特徵：
1. **巨型數字字體**（80-200px）作為主要視覺
2. **進入視窗時 0 → target 計數動畫**（requestAnimationFrame easing）
3. **數字旁的小單位字 / 描述**用對比小字

## Design Tokens

\`\`\`css
:root {
  --c-bg: #fdfcfb;
  --c-bg-card: #ffffff;
  --c-fg: #18181b;
  --c-fg-soft: #52525b;
  --c-fg-mute: #a1a1aa;
  --c-accent: #dc2626;        /* 鮮紅 — 計數高亮 */
  --c-accent-2: #2563eb;       /* 藍 — 副計數 */
  --c-success: #059669;        /* 綠 — 完成色 */
  --c-line: #e4e4e7;

  --color-bg: var(--c-bg);
  --color-fg: var(--c-fg);
  --color-accent: var(--c-accent);

  --radius-sm: 8px;
  --radius-md: 16px;
  --radius-lg: 24px;
  --radius-pill: 999px;

  --font-display: 'Inter', 'PingFang TC', 'Noto Sans TC', 'Helvetica Neue', system-ui, sans-serif;
  --font-body: 'PingFang TC', 'Noto Sans TC', 'Inter', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', 'SF Mono', monospace;
}
\`\`\`

## Typography Scale

| 級距 | 大小 | 用途 |
| --- | --- | --- |
| numeral | clamp(80px, 14vw, 200px) / 0.95 / 800 / -0.04em / tabular-nums | 巨型數字 |
| display | clamp(40px, 6vw, 72px) / 1.1 / 700 | Hero |
| h1 | clamp(28px, 4vw, 44px) / 1.25 / 600 | 區塊 |
| h2 | 20px / 1.35 / 600 | 子標 |
| body | 16px / 1.7 / 400 | 段落 |
| caption | 11px / 1.4 / 600 / 0.14em / uppercase | 單位描述 |

## Layout Rules

- 容器 max-width 1180px
- 數字用 \`<span class="counter" data-to="25000">0</span>\`
- 大量留白，每個數字塊獨立行
- \`font-variant-numeric: tabular-nums\` 保證寬度穩定不跳動

各區塊構圖：
- **hero**：display 大字標題 + 4 個 inline counter chip（屆數 6 / 三日 / 12 樂團 / 25000 人次）
- **about**：4 個巨型數字 grid（每個獨立卡 + counter 動畫 + 描述）
- **lineup**：12 樂團列表，每組旁顯示 hover 觸發的「演出時間」counter
- **schedule**：3 day timetable，時段以 mono 數字呈現（不計數）
- **venues**：3 舞台，容量（8000 / 3000 / 800）用大 counter
- **tickets**：3 票價巨型 counter（2200 / 5400 / 12800）+ 早鳥優惠 9 折
- **travel**：3 步驟，每步驟前有計數編號（不計數）
- **sponsors**：分級 list
- **footer-faq**：FAQ + counter「7 條 FAQ」「12 樂團」總結

## Motion Specification

- **動態效果類別**：reveal
- **觸發機制**：IntersectionObserver + requestAnimationFrame 計數動畫
- **性能要求**：用 \`textContent\` 寫入，避免 reflow；數字保持 tabular-nums 避免位移
- **觸發頻率**：每次計數動畫 ~1200ms，只觸發一次

## Accessibility (Reduced Motion)

- reduced 模式：直接顯示最終數字、不動畫
- 用 aria-label 標明完整數字以利螢幕閱讀器

## Required Output Contract

通用契約 + 8 條動態要求。\`<body data-motion-type="reveal">\`。

## Required Images

無圖，純文字動畫。

## Reference Snippet

\`\`\`html
<div class="stat">
  <span class="counter" data-to="25000" aria-label="25000 人次">0</span>
  <span class="unit">人次</span>
</div>
\`\`\`

\`\`\`css
.counter {
  font-family: var(--font-display);
  font-size: clamp(80px, 14vw, 200px);
  font-weight: 800;
  font-variant-numeric: tabular-nums;
  color: var(--c-accent);
  line-height: 0.95;
  letter-spacing: -0.04em;
  display: inline-block;
}
.counter.done {
  animation: pop 0.5s ease-out;
}
@keyframes pop {
  0% { transform: scale(1); }
  40% { transform: scale(1.06); }
  100% { transform: scale(1); }
}
.stat .unit {
  font-size: 14px;
  letter-spacing: 0.12em;
  color: var(--c-fg-mute);
  text-transform: uppercase;
  margin-left: 8px;
}
@media (prefers-reduced-motion: reduce) {
  .counter.done { animation: none; }
}
\`\`\`

\`\`\`javascript
(function () {
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const counters = document.querySelectorAll('.counter[data-to]');
  if (reducedMotion) {
    counters.forEach((el) => {
      el.textContent = Number(el.dataset.to).toLocaleString('en');
    });
    return;
  }
  function animateOne(el) {
    const to = Number(el.dataset.to);
    const duration = Number(el.dataset.duration || 1400);
    let start = null;
    function step(ts) {
      if (!start) start = ts;
      const p = Math.min(1, (ts - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(to * eased).toLocaleString('en');
      if (p < 1) requestAnimationFrame(step);
      else el.classList.add('done');
    }
    requestAnimationFrame(step);
  }
  const io = new IntersectionObserver((entries) => entries.forEach((e) => {
    if (e.isIntersecting) { animateOne(e.target); io.unobserve(e.target); }
  }), { threshold: 0.4 });
  counters.forEach((el) => io.observe(el));
})();
\`\`\`
`,"../../.claude/skills/motion-cursor-spotlight/SKILL.md":`---
name: motion-cursor-spotlight
description: Use when generating a single-file HTML page for the 「島嶼共鳴 2026」music festival with a radial spotlight that follows the cursor on hero and key sections. Triggers on cursor follow、spotlight、滑鼠光暈、mouse-tracking radial gradient.
user-invocable: true
---

# 滑鼠光暈 Cursor Spotlight — 島嶼共鳴 2026

## Style Philosophy

整個 hero 是深色背景，**有一束光跟著滑鼠走**——像演唱會的 followspot 追著樂手移動。技術上是 radial-gradient 中心點隨 mousemove 更新 CSS 變數。視覺風格電影感、暗黑、戲劇化。每個 section 進入時 spotlight 會掃過該區段一次。

三個視覺辨識特徵：
1. **滑鼠位置驅動 radial-gradient 中心點**（\`--mx, --my\` CSS 變數）
2. **暗背景** + 亮色文字（白字 / 米色）+ accent 強光顏色
3. **CTA 按鈕也有 spotlight hover 效果**（按鈕內部的 radial）

## Design Tokens

\`\`\`css
:root {
  --sp-bg: #0a0a0a;
  --sp-bg-2: #18181b;
  --sp-bg-3: #27272a;
  --sp-fg: #fafafa;
  --sp-fg-soft: #d4d4d8;
  --sp-fg-mute: #71717a;
  --sp-light: rgba(251, 191, 36, 0.35);   /* spotlight 顏色 */
  --sp-light-edge: rgba(251, 191, 36, 0.05);
  --sp-accent: #fbbf24;
  --sp-line: rgba(255, 255, 255, 0.08);

  --color-bg: var(--sp-bg);
  --color-fg: var(--sp-fg);
  --color-accent: var(--sp-accent);

  --radius-md: 12px;
  --radius-lg: 20px;
  --radius-pill: 999px;

  --font-display: 'PingFang TC', 'Noto Sans TC', 'Inter', 'Helvetica Neue', system-ui, sans-serif;
  --font-body: 'PingFang TC', 'Noto Sans TC', 'Inter', system-ui, sans-serif;
}

body {
  background: var(--sp-bg);
  color: var(--sp-fg);
}

.spotlight {
  position: relative;
  isolation: isolate;
}
.spotlight::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(
    600px circle at var(--mx, 50%) var(--my, 50%),
    var(--sp-light) 0%,
    var(--sp-light-edge) 40%,
    transparent 70%
  );
  pointer-events: none;
  z-index: 0;
  transition: background 0.06s linear;
}
\`\`\`

## Typography Scale

| 級距 | 大小 | 用途 |
| --- | --- | --- |
| display | clamp(56px, 9vw, 112px) / 1.05 / 800 / -0.025em | Hero |
| h1 | clamp(28px, 4vw, 44px) / 1.25 / 700 | 區塊 |
| h2 | 20px / 1.35 / 600 | 子標 |
| body | 16px / 1.7 / 400 | 段落 |
| caption | 11px / 1.4 / 600 / 0.14em / uppercase | label |

## Layout Rules

- \`<body>\` 套 \`.spotlight\` class，整頁 spotlight 跟著滑鼠
- 內容用 \`position: relative; z-index: 1\` 放在 spotlight 之上
- 每個 CTA 按鈕內部也有獨立 spotlight effect

各區塊構圖：
- **hero**：暗背景 + spotlight 跟滑鼠 + 中央 display 標題 + 副標 + 兩個 spotlight 按鈕
- 其他區段標準排版，配深色卡片 + amber accent

## Motion Specification

- **動態效果類別**：pointer
- **觸發機制**：mousemove + rAF 節流，更新 \`--mx\`、\`--my\` CSS 變數
- **性能要求**：CSS 變數變更觸發 background re-paint，極輕量
- **觸發頻率**：rAF 節流

## Accessibility (Reduced Motion)

- reduced 模式：spotlight 固定在中心、不跟滑鼠走（CSS 變數預設值）
- 對 keyboard 使用者：CTA 按鈕的 spotlight 也可在 :focus-visible 觸發

## Required Output Contract

通用契約 + 8 條動態要求。\`<body data-motion-type="pointer">\`。

## Required Images

無圖。

## Reference Snippet

\`\`\`html
<body class="spotlight" data-motion-type="pointer">
  ...
</body>
\`\`\`

\`\`\`javascript
(function () {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  let mx = 0.5, my = 0.5, ticking = false;
  function update() {
    document.body.style.setProperty('--mx', (mx * 100) + '%');
    document.body.style.setProperty('--my', (my * 100) + '%');
    ticking = false;
  }
  window.addEventListener('mousemove', (e) => {
    mx = e.clientX / window.innerWidth;
    my = e.clientY / window.innerHeight;
    if (!ticking) { requestAnimationFrame(update); ticking = true; }
  }, { passive: true });
})();
\`\`\`

按鈕 spotlight：
\`\`\`css
.btn-spot {
  position: relative;
  overflow: hidden;
  background: var(--sp-bg-2);
  border: 1px solid var(--sp-accent);
  color: var(--sp-fg);
  padding: 14px 28px;
  border-radius: var(--radius-pill);
}
.btn-spot::before {
  content: '';
  position: absolute; inset: 0;
  background: radial-gradient(
    200px circle at var(--bx, 50%) var(--by, 50%),
    rgba(251, 191, 36, 0.4) 0%,
    transparent 70%
  );
  opacity: 0;
  transition: opacity 0.2s;
}
.btn-spot:hover::before, .btn-spot:focus-visible::before { opacity: 1; }
\`\`\`
`,"../../.claude/skills/motion-fade-stagger/SKILL.md":`---
name: motion-fade-stagger
description: Use when generating a single-file HTML page for the 「島嶼共鳴 2026」music festival with stagger fade-in reveal animations triggered by IntersectionObserver. Triggers on stagger animation、wave reveal、入場錯落、scroll trigger fade.
user-invocable: true
---

# 錯落淡入 Fade Stagger — 島嶼共鳴 2026

## Style Philosophy

當區段進入視窗時，內部的卡片、列表項、數字、文字會**依序以毫秒級錯落 fade + slide-up** 出現。這個風格的特徵是「波浪」感——每個元素之間有 60-100ms 的延遲，整體像一陣海風吹過。視覺風格採用淺色背景、寬鬆 grid、優雅 sans-serif，焦點完全在動畫節奏。

三個視覺辨識特徵：
1. **每個 reveal target 從 \`opacity:0 + translateY(24px)\` 進入到 \`opacity:1 + translateY(0)\`**
2. **stagger delay**：用 \`transition-delay: calc(var(--i, 0) * 80ms)\` 達成波浪
3. **IntersectionObserver** 觸發 \`.in\` class 切換

## Design Tokens

\`\`\`css
:root {
  --f-bg: #f5f5f4;
  --f-card: #ffffff;
  --f-fg: #292524;
  --f-fg-soft: #57534e;
  --f-fg-mute: #a8a29e;
  --f-accent: #0891b2;       /* 海洋藍 */
  --f-accent-soft: rgba(8, 145, 178, 0.1);
  --f-line: #e7e5e4;

  --color-bg: var(--f-bg);
  --color-fg: var(--f-fg);
  --color-accent: var(--f-accent);

  --radius-sm: 8px;
  --radius-md: 16px;
  --radius-lg: 28px;
  --radius-pill: 999px;

  --font-display: 'PingFang TC', 'Noto Sans TC', 'Inter', 'Helvetica Neue', system-ui, sans-serif;
  --font-body: 'PingFang TC', 'Noto Sans TC', 'Inter', system-ui, sans-serif;
}
\`\`\`

## Typography Scale

| 級距 | 大小 | 用途 |
| --- | --- | --- |
| display | clamp(48px, 7vw, 88px) / 1.1 / 700 / -0.02em | Hero |
| h1 | clamp(28px, 4vw, 44px) / 1.25 / 600 | 區塊 |
| h2 | 20px / 1.35 / 600 | 子標 |
| body | 16px / 1.7 / 400 | 段落 |
| caption | 11px / 1.4 / 600 / 0.14em / uppercase | label |

## Layout Rules

- 主背景米白、卡片白底、海洋藍 accent
- 每個區塊容器 max-width 1180px
- 卡片有微妙陰影，hover 微微抬起
- 每個 reveal 元素加 inline \`style="--i: <index>"\` 控制延遲

各區塊構圖：
- **hero**：display 標題 + 副標 + chips + 2 CTA，整組 stagger 入場
- **about**：4 stat tiles，依序 0-3 stagger
- **lineup**：12 樂團卡片 grid，依 row-major 順序 stagger
- **schedule**：3 day timetable，每 day 內時段 stagger
- **venues**：3 卡 stagger
- **tickets**：3 卡 stagger
- **travel**：3 步驟 stagger
- **sponsors**：分級 + stagger
- **footer-faq**：FAQ accordion，每條 stagger 0-6

## Motion Specification

- **動態效果類別**：reveal
- **觸發機制**：IntersectionObserver（threshold 0.15）+ CSS transition
- **性能要求**：只用 transform + opacity
- **觸發頻率**：IntersectionObserver 自然節流；observe 多個 target

## Accessibility (Reduced Motion)

- reduced 模式：所有 \`.reveal\` 預設 opacity 1, transform none；transition duration 0
- 確保即使 IntersectionObserver 失敗，內容仍可見（CSS fallback：未加 \`.js-on\` class 時保持可見狀態）

## Required Output Contract

通用契約 + 8 條動態要求。\`<body data-motion-type="reveal">\`。

## Required Images

可選少量；以動畫為主。

## Reference Snippet

Stagger 機制：
\`\`\`css
.reveal {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1) calc(var(--i, 0) * 80ms),
              transform 0.7s cubic-bezier(0.22, 1, 0.36, 1) calc(var(--i, 0) * 80ms);
}
.js-on .reveal:not(.in) {
  opacity: 0;
  transform: translateY(24px);
}
@media (prefers-reduced-motion: reduce) {
  .reveal, .reveal:not(.in) {
    opacity: 1 !important;
    transform: none !important;
    transition: none;
  }
}
\`\`\`

\`\`\`html
<div class="grid">
  <article class="reveal" style="--i:0">...</article>
  <article class="reveal" style="--i:1">...</article>
  <article class="reveal" style="--i:2">...</article>
</div>
\`\`\`

\`\`\`javascript
(function () {
  document.documentElement.classList.add('js-on');
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const io = new IntersectionObserver(
    (entries) => entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);  // 只觸發一次
      }
    }),
    { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
  );
  document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
})();
\`\`\`
`,"../../.claude/skills/motion-floating-orbs/SKILL.md":`---
name: motion-floating-orbs
description: Use when generating a single-file HTML page for the 「島嶼共鳴 2026」music festival with continuously floating geometric orbs in background. Triggers on floating orbs、漂浮幾何、ambient shapes、loop animation.
user-invocable: true
---

# 漂浮幾何球 Floating Orbs — 島嶼共鳴 2026

## Style Philosophy

背景上有 8-12 個彩色幾何體（圓、菱、三角、星）以**緩慢上下漂浮**循環，每個球有獨立節奏、不同延遲，整面像漂浮在液體中的玩具。視覺風格俏皮、輕盈，適合年輕族群。前景內容使用清爽 sans-serif、白底卡片，保持讀感。

三個視覺辨識特徵：
1. **8-12 個絕對定位幾何球**散布全頁，各自獨立 CSS keyframes
2. **柔和淺粉、薄荷、薰衣草、奶油色**幾何體（取自 isometric-3d 配色）
3. **白底 + 大量留白**，前景清爽不干擾

## Design Tokens

\`\`\`css
:root {
  --o-bg: #fefaf6;
  --o-card: #ffffff;
  --o-fg: #2d2a26;
  --o-fg-soft: #6b6760;
  --o-fg-mute: #a89c8e;
  --o-orb-1: #ffafd2;       /* 淺粉 */
  --o-orb-2: #a8e6cf;       /* 薄荷 */
  --o-orb-3: #c8b6ff;       /* 薰衣草 */
  --o-orb-4: #ffd6a5;       /* 奶油 */
  --o-orb-5: #b4e7ff;       /* 天藍 */
  --o-orb-6: #ffaaa5;       /* 珊瑚 */
  --o-accent: #ff5e87;
  --o-line: #f0e8d8;

  --color-bg: var(--o-bg);
  --color-fg: var(--o-fg);
  --color-accent: var(--o-accent);

  --radius-md: 16px;
  --radius-lg: 28px;
  --radius-pill: 999px;

  --font-display: 'PingFang TC', 'Noto Sans TC', 'Inter', 'Helvetica Neue', system-ui, sans-serif;
  --font-body: 'PingFang TC', 'Noto Sans TC', 'Inter', system-ui, sans-serif;
}
\`\`\`

## Typography Scale

| 級距 | 大小 | 用途 |
| --- | --- | --- |
| display | clamp(48px, 7vw, 88px) / 1.1 / 700 / -0.02em | Hero |
| h1 | clamp(28px, 4vw, 44px) / 1.25 / 600 | 區塊 |
| h2 | 20px / 1.35 / 600 | 子標 |
| body | 16px / 1.7 / 400 | 段落 |
| caption | 11px / 1.4 / 600 / 0.14em / uppercase | label |

## Layout Rules

- \`<body>\` 直接放 8-12 個 \`.orb\` 元素（絕對定位、不同位置與大小）
- 每個 orb 用獨立 \`@keyframes orb-float-N\` 隨機 timing（8-22s）translateY + rotate
- 內容卡片放上層、z-index 2，避免被 orb 蓋住
- orb 透明度 0.5-0.7，柔和不搶戲

各區塊構圖：
- **hero**：白底 + 漂浮 orb 圍繞、display 標題置中、CTA pill
- **about**：白卡 + 4 stat tile
- **lineup**：白底 12 卡 grid
- 其餘區段用標準淺色卡片
- 整頁中始終可見部分 orb 漂浮

## Motion Specification

- **動態效果類別**：loop
- **觸發機制**：CSS \`@keyframes\`
- **性能要求**：用 transform + opacity，避免動 position
- **觸發頻率**：純 CSS

## Accessibility (Reduced Motion)

- reduced 模式：orb keyframes 取消，但 orb 仍以靜態位置顯示作為裝飾

## Required Output Contract

通用契約 + 8 條動態要求。\`<body data-motion-type="loop">\`。

## Required Images

無圖。

## Reference Snippet

漂浮球：
\`\`\`html
<div class="orbs" aria-hidden="true">
  <span class="orb o1"></span>
  <span class="orb o2"></span>
  ...
</div>
\`\`\`

\`\`\`css
.orbs {
  position: fixed; inset: 0; pointer-events: none; z-index: 0;
}
.orb {
  position: absolute;
  border-radius: 50%;
  opacity: 0.55;
  will-change: transform;
  filter: blur(2px);
}
.orb.o1 { top: 8%;  left: 12%; width: 160px; height: 160px; background: var(--o-orb-1); animation: orb-float 12s ease-in-out infinite; }
.orb.o2 { top: 20%; right: 8%; width: 220px; height: 220px; background: var(--o-orb-2); animation: orb-float 16s ease-in-out infinite reverse; }
.orb.o3 { top: 60%; left: 5%; width: 180px; height: 180px; background: var(--o-orb-3); animation: orb-float 14s ease-in-out infinite -3s; }
.orb.o4 { top: 75%; right: 15%; width: 140px; height: 140px; background: var(--o-orb-4); animation: orb-float 18s ease-in-out infinite -6s; }
.orb.o5 { top: 40%; left: 50%; width: 200px; height: 200px; background: var(--o-orb-5); animation: orb-float 20s ease-in-out infinite; }
.orb.o6 { top: 30%; left: 30%; width: 120px; height: 120px; background: var(--o-orb-6); animation: orb-float 11s ease-in-out infinite -2s; }
@keyframes orb-float {
  0%, 100% { transform: translate3d(0, 0, 0); }
  50% { transform: translate3d(15px, -30px, 0) rotate(8deg); }
}
@media (prefers-reduced-motion: reduce) {
  .orb { animation: none !important; }
}
\`\`\`

內容置上層：
\`\`\`css
section { position: relative; z-index: 2; }
\`\`\`
`,"../../.claude/skills/motion-horizontal-scroll/SKILL.md":`---
name: motion-horizontal-scroll
description: Use when generating a single-file HTML page for the 「島嶼共鳴 2026」music festival where vertical scrolling converts into horizontal pan in the lineup / schedule sections. Triggers on horizontal scroll、橫向滾動、scroll translate、vertical to horizontal.
user-invocable: true
---

# 橫向滾動陣容 Horizontal Scroll — 島嶼共鳴 2026

## Style Philosophy

把「垂直滾動」轉換成「橫向位移」是 Awwwards 級展示常見手法——常用在作品集走廊、產品 lineup、時間軸。它打破網頁慣常的垂直閱讀，給訪客一種「滑進另一個世界」的儀式感。在音樂節網頁中，**lineup 區段**作為主橫向走廊，12 組樂團一字排開、用滾輪 / 觸控板拖動瀏覽。schedule 則用次要橫向滾動展示三日時程。

三個視覺辨識特徵：
1. **lineup 區設 \`position: sticky\` + 容器內部 \`transform: translateX\`** 隨滾動位移
2. **明確視覺提示橫向滾動**（左右箭頭、進度條、滑動光標）
3. **暗色高對比**配色（黑底 / 米黃強調），讓走廊感更電影化

## Design Tokens

\`\`\`css
:root {
  --h-bg: #0a0a0f;
  --h-bg-card: #14141c;
  --h-fg: #f5f5dc;
  --h-fg-soft: #b8b8a8;
  --h-accent: #fbbf24;          /* 暖琥珀 */
  --h-accent-2: #ec4899;        /* 粉紅副 */
  --h-border: rgba(255,255,255,0.1);

  --color-bg: var(--h-bg);
  --color-fg: var(--h-fg);
  --color-accent: var(--h-accent);

  --radius-md: 12px;
  --radius-lg: 24px;
  --radius-pill: 999px;

  --font-display: 'PingFang TC', 'Noto Sans TC', 'Inter', 'Helvetica Neue', system-ui, sans-serif;
  --font-body: 'PingFang TC', 'Noto Sans TC', 'Inter', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', 'SF Mono', 'Menlo', monospace;
}
\`\`\`

## Typography Scale

| 級距 | 大小 | 用途 |
| --- | --- | --- |
| display | clamp(56px, 9vw, 112px) / 1.0 / 800 / -0.025em | Hero |
| h1 | clamp(36px, 5vw, 64px) / 1.1 / 700 | 區塊 |
| h2 | 22px / 1.3 / 600 | 子標 |
| body | 16px / 1.7 / 400 | 段落 |
| caption | 11px / 1.4 / 600 / 0.16em / mono / uppercase | 編號 |

## Layout Rules

- 大部分區塊垂直流；**lineup** 與 **schedule** 是橫向走廊
- 橫向走廊技巧：包外層 \`position: sticky\` + \`height: 100vh\`，內層 \`display: flex; width: <12 * card-width>\`，配合 scrollY 算 translateX
- 給每個橫向走廊一個明確「外層高度 = 內層寬度 - 視窗寬度」公式
- 走廊頂部加左右箭頭與滑動進度 bar

各區塊構圖：
- **hero**：垂直全屏，大字標題置中，下方有「↓ 滾動開始旅程」提示
- **about**：4 個 stat tile 橫排
- **lineup**：橫向走廊 — 12 張樂團卡 1100px 寬一張、headliner 卡 1300px、卡片之間 32px 間距
- **schedule**：橫向走廊 — 3 day timetable
- **venues**：垂直、3 大區塊
- **tickets**：3 張票卡橫排（非滾動驅動）
- **travel**：垂直 list
- **sponsors**：垂直分級
- **footer-faq**：垂直 \`<details>\`

## Motion Specification

- **動態效果類別**：parallax / scroll-driven
- **觸發機制**：scroll event + IntersectionObserver（控制走廊區段是否啟用）+ rAF
- **性能要求**：僅動 \`transform: translateX()\` 在內層 flex 容器，避免 reflow
- **觸發頻率**：scroll handler passive + rAF 節流

公式：
\`\`\`
inner_translateX = -(scrollY - section_start) * (inner_width - viewport_width) / (section_height - viewport_height)
\`\`\`
其中 \`section_height\` 通常設為 \`(card_count * card_width)\`，使走廊滾完整段才結束。

## Accessibility (Reduced Motion)

- reduced 模式：取消橫向走廊邏輯、改用普通垂直 grid 顯示 12 樂團；CSS class 加 \`.no-motion\` 切換 layout
- 走廊外層高度在 reduced 模式設 \`auto\`、內層 \`flex-wrap: wrap\`

## Required Output Contract

通用契約 + 8 條動態要求。\`<body data-motion-type="parallax">\`。

## Required Images

可選 1 張 hero 圖。樂團卡用 CSS 純色 + 大字即可。

## Reference Snippet

橫向走廊基礎：
\`\`\`html
<section data-block="lineup" class="h-rail" data-rail>
  <div class="h-rail-outer" style="height: 800vh;"> <!-- 算出來的高度 -->
    <div class="h-rail-sticky">
      <div class="h-rail-inner">
        <!-- 12 個樂團卡 -->
      </div>
    </div>
  </div>
</section>
\`\`\`

\`\`\`css
.h-rail-outer { position: relative; }
.h-rail-sticky {
  position: sticky;
  top: 0;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
}
.h-rail-inner {
  display: flex;
  gap: 32px;
  padding: 0 80px;
  will-change: transform;
}
.h-rail-inner > .band-card {
  flex: 0 0 1100px;
  height: 70vh;
}
@media (prefers-reduced-motion: reduce) {
  .h-rail-outer { height: auto !important; }
  .h-rail-sticky { position: static; height: auto; }
  .h-rail-inner { flex-wrap: wrap; transform: none !important; }
  .h-rail-inner > .band-card { flex: 1 1 360px; }
}
\`\`\`

\`\`\`javascript
(function () {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const rails = document.querySelectorAll('[data-rail]');
  rails.forEach((rail) => {
    const inner = rail.querySelector('.h-rail-inner');
    if (!inner) return;
    const outer = rail.querySelector('.h-rail-outer');
    let ticking = false;
    function update() {
      const rect = outer.getBoundingClientRect();
      const progress = Math.max(0, Math.min(1, -rect.top / (rect.height - window.innerHeight)));
      const maxX = inner.scrollWidth - window.innerWidth;
      inner.style.transform = \`translate3d(\${-maxX * progress}px, 0, 0)\`;
      ticking = false;
    }
    window.addEventListener('scroll', () => {
      if (!ticking) { requestAnimationFrame(update); ticking = true; }
    }, { passive: true });
    update();
  });
})();
\`\`\`
`,"../../.claude/skills/motion-magnetic-cta/SKILL.md":`---
name: motion-magnetic-cta
description: Use when generating a single-file HTML page for the 「島嶼共鳴 2026」music festival where CTA buttons magnetically pull towards the cursor. Triggers on magnetic button、磁吸按鈕、cursor attraction、Awwwards-style CTA.
user-invocable: true
---

# 磁吸按鈕 Magnetic CTA — 島嶼共鳴 2026

## Style Philosophy

主要 CTA 按鈕（立即購票、查看陣容、訂閱通知）在滑鼠靠近時**被輕輕吸過去**——按鈕成了有重力的物件，給互動加入物理感。靈感來自 Awwwards、Stripe Sigma 頁、Apple 產品頁。視覺風格清爽、極簡，唯一裝飾的就是這些大型 pill 按鈕。

三個視覺辨識特徵：
1. **CTA 按鈕在滑鼠 ~100px 範圍內被磁吸位移**
2. **按鈕內部文字也微微跟著動**（更強的物理感）
3. **整頁極簡** + 大型彩色 pill CTA（主軸視覺）

## Design Tokens

\`\`\`css
:root {
  --m-bg: #fafafa;
  --m-card: #ffffff;
  --m-fg: #0f172a;
  --m-fg-soft: #475569;
  --m-fg-mute: #94a3b8;
  --m-accent: #2563eb;        /* 主磁吸藍 */
  --m-accent-2: #7c3aed;       /* 副紫 */
  --m-accent-3: #ec4899;       /* 三粉 */
  --m-line: #e2e8f0;

  --color-bg: var(--m-bg);
  --color-fg: var(--m-fg);
  --color-accent: var(--m-accent);

  --radius-md: 16px;
  --radius-lg: 24px;
  --radius-pill: 999px;

  --font-display: 'PingFang TC', 'Noto Sans TC', 'Inter', 'Helvetica Neue', system-ui, sans-serif;
  --font-body: 'PingFang TC', 'Noto Sans TC', 'Inter', system-ui, sans-serif;
}
\`\`\`

## Typography Scale

| 級距 | 大小 | 用途 |
| --- | --- | --- |
| display | clamp(48px, 8vw, 96px) / 1.05 / 700 / -0.025em | Hero |
| h1 | clamp(28px, 4vw, 44px) / 1.25 / 600 | 區塊 |
| h2 | 20px / 1.35 / 600 | 子標 |
| body | 16px / 1.7 / 400 | 段落 |
| caption | 11px / 1.4 / 600 / 0.14em / uppercase | label |
| cta | clamp(18px, 2.5vw, 22px) / 1.2 / 600 | 大型 pill |

## Layout Rules

- 白底深色文字、大量留白
- 至少 3-4 個 \`.magnetic\` CTA 散布全頁（hero、tickets 區、訂閱、聯絡）
- CTA 按鈕**最少 64px 高**，足夠的磁吸視覺
- 磁吸位移最大 ±12px、按鈕內 span 跟著位移 ±6px

各區塊構圖：
- **hero**：display 標題 + 2 個大磁吸 CTA
- **about**：標準
- **lineup**：12 卡（不磁吸，僅 hover 高亮）
- **schedule**：標準
- **venues**：3 卡，每卡有「了解更多」磁吸 CTA
- **tickets**：3 票價卡，每卡有「立即購票」磁吸 CTA（VIP 中央卡用更大尺寸）
- **travel**：3 步驟
- **sponsors**：分級 list
- **footer-faq**：FAQ + 訂閱通知磁吸 CTA

## Motion Specification

- **動態效果類別**：pointer
- **觸發機制**：mousemove on each \`.magnetic\` element + rAF
- **性能要求**：transform 3D
- **觸發頻率**：rAF 節流；計算 cursor 與按鈕中心距離決定吸力

## Accessibility (Reduced Motion)

- reduced 模式：磁吸效果關閉，按鈕仍可正常 hover / focus

## Required Output Contract

通用契約 + 8 條動態要求。\`<body data-motion-type="pointer">\`。

## Required Images

無圖。

## Reference Snippet

\`\`\`html
<button class="magnetic" data-magnetic>
  <span class="magnetic-inner">立即購票</span>
</button>
\`\`\`

\`\`\`css
.magnetic {
  background: var(--m-accent);
  color: white;
  border: none;
  padding: 20px 36px;
  border-radius: var(--radius-pill);
  font-size: clamp(18px, 2.5vw, 22px);
  font-weight: 600;
  letter-spacing: 0.04em;
  cursor: pointer;
  transition: transform 0.15s ease-out, background 0.2s;
  will-change: transform;
}
.magnetic-inner {
  display: inline-block;
  transition: transform 0.15s ease-out;
  will-change: transform;
}
.magnetic:hover { background: var(--m-accent-2); }
@media (prefers-reduced-motion: reduce) {
  .magnetic, .magnetic-inner { transform: none !important; }
}
\`\`\`

\`\`\`javascript
(function () {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const btns = document.querySelectorAll('[data-magnetic]');
  const STRENGTH = 0.3;   // 0-1
  const RADIUS = 100;     // px
  btns.forEach((btn) => {
    const inner = btn.querySelector('.magnetic-inner');
    function handle(e) {
      const rect = btn.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.hypot(dx, dy);
      if (dist > RADIUS) {
        btn.style.transform = '';
        if (inner) inner.style.transform = '';
        return;
      }
      const f = (1 - dist / RADIUS) * STRENGTH;
      const tx = dx * f * 2;
      const ty = dy * f * 2;
      btn.style.transform = \`translate3d(\${tx}px, \${ty}px, 0)\`;
      if (inner) inner.style.transform = \`translate3d(\${tx * 0.5}px, \${ty * 0.5}px, 0)\`;
    }
    window.addEventListener('mousemove', handle, { passive: true });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = '';
      if (inner) inner.style.transform = '';
    });
  });
})();
\`\`\`
`,"../../.claude/skills/motion-marquee-band/SKILL.md":`---
name: motion-marquee-band
description: Use when generating a single-file HTML page for the 「島嶼共鳴 2026」music festival with horizontal scrolling marquee text whose speed responds to scroll velocity. Triggers on marquee、跑馬燈、scroll-velocity、horizontal text loop.
user-invocable: true
---

# 滾動跑馬燈 Marquee Band — 島嶼共鳴 2026

## Style Philosophy

跑馬燈是一個老元素，但加上「**滾動會反向加速**」就變成當代 awwwards 級互動：用戶滾動時跑馬燈會「逆風」加速、停下時恢復常速。這個風格用大量重複的樂團名／slogan 構成水平大字帶，貫穿整個網頁。視覺極大、極粗、極黑白對比。

三個視覺辨識特徵：
1. **多條跑馬燈大字帶**穿插各區塊（樂團名、slogan、贊助商）
2. **滾動速度影響跑馬燈速率**（用 scroll velocity 計算）
3. **大量留白 + 巨型字**極簡風

## Design Tokens

\`\`\`css
:root {
  --m-bg: #ffffff;
  --m-bg-dark: #0f0f0f;
  --m-fg: #0f0f0f;
  --m-fg-soft: #555555;
  --m-fg-inverse: #ffffff;
  --m-accent: #f43f5e;       /* 粉紅紅 */
  --m-line: #e5e5e5;

  --color-bg: var(--m-bg);
  --color-fg: var(--m-fg);
  --color-accent: var(--m-accent);

  --radius-none: 0;
  --radius-sm: 4px;
  --radius-pill: 999px;

  --font-display: 'Inter', 'Helvetica Neue', 'PingFang TC', 'Noto Sans TC', sans-serif;
  --font-body: 'PingFang TC', 'Noto Sans TC', 'Inter', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
}
\`\`\`

## Typography Scale

| 級距 | 大小 | 用途 |
| --- | --- | --- |
| marquee | clamp(80px, 14vw, 200px) / 0.95 / 900 / -0.04em / uppercase | 跑馬燈大字 |
| display | clamp(56px, 9vw, 112px) / 1.0 / 800 | Hero |
| h1 | clamp(28px, 4vw, 48px) / 1.2 / 700 | 區塊 |
| h2 | 22px / 1.3 / 600 | 子標 |
| body | 16px / 1.7 / 400 | 段落 |
| caption | 11px / 1.4 / 600 / 0.18em / mono / uppercase | label |

## Layout Rules

- 每個 section 之間插入一條跑馬燈帶（高度 \`clamp(80px, 14vw, 200px)\`、黑白交替）
- 跑馬燈技術：兩個相同內容的 \`<div>\` 並排在 flex 容器中，總寬度 200%，整個容器 \`animation: marquee-loop 30s linear infinite\`
- 滾動時改 CSS 變數 \`--marquee-speed-multiplier\`，影響 animation-duration

各區塊構圖：
- **hero**：白底 + 巨大 display 標題 + 跑馬燈條（slogan 重複）
- **marquee 1 (between hero and about)**：黑底白字「ISLAND RESONANCE · 2026.08.21–23 · TAITUNG · DULAN BAY」重複
- **about**：白底，4 stat 巨型數字
- **marquee 2**：白底黑字 12 樂團名重複
- **lineup**：12 樂團卡片（black bordered）
- **schedule**：3 day 時程
- **marquee 3**：黑底白字「TICKETS NOW ON SALE · TICKETS NOW ON SALE」
- **venues**：3 舞台
- **tickets**：3 票卡
- **travel**：3 步驟
- **marquee 4**：黑底紅字贊助商名
- **sponsors**：贊助商
- **footer-faq**：FAQ

## Motion Specification

- **動態效果類別**：scroll-driven / loop
- **觸發機制**：CSS @keyframes（基礎 loop）+ scroll event 更新 \`--marquee-speed-multiplier\` CSS 變數
- **性能要求**：所有 marquee 用 \`transform: translateX()\`；用 \`will-change: transform\`
- **觸發頻率**：scroll handler rAF 節流；計算 velocity 用上一幀差分

## Accessibility (Reduced Motion)

- reduced 模式：取消 marquee 動畫；將跑馬燈內容轉為靜態切割行（用 overflow: hidden + 短文字）
- 確保跑馬燈不會干擾正常閱讀（每條 marquee 區段標 \`aria-hidden="true"\`）

## Required Output Contract

通用契約 + 8 條動態要求。\`<body data-motion-type="scroll-driven">\`。

## Required Images

無圖。

## Reference Snippet

Marquee 條：
\`\`\`html
<div class="marquee" aria-hidden="true">
  <div class="marquee-track">
    <span class="marquee-item">ISLAND RESONANCE 2026 · 在島嶼盡頭聽見彼此的迴聲 ·</span>
    <span class="marquee-item">ISLAND RESONANCE 2026 · 在島嶼盡頭聽見彼此的迴聲 ·</span>
  </div>
</div>
\`\`\`

\`\`\`css
.marquee {
  overflow: hidden;
  background: var(--m-bg-dark);
  color: var(--m-fg-inverse);
  padding: clamp(20px, 3vw, 36px) 0;
  border-block: 2px solid var(--m-fg);
}
.marquee-track {
  display: flex;
  gap: 40px;
  white-space: nowrap;
  width: max-content;
  animation: marquee-loop calc(30s / var(--marquee-speed-multiplier, 1)) linear infinite;
  will-change: transform;
}
.marquee-item {
  font-family: var(--font-display);
  font-size: clamp(80px, 14vw, 200px);
  font-weight: 900;
  letter-spacing: -0.04em;
  text-transform: uppercase;
  line-height: 0.95;
}
@keyframes marquee-loop {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}
@media (prefers-reduced-motion: reduce) {
  .marquee-track { animation: none; transform: translateX(-25%); }
}
\`\`\`

\`\`\`javascript
(function () {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  let lastY = window.scrollY;
  let velocity = 0;
  let ticking = false;
  function tick() {
    const dy = window.scrollY - lastY;
    velocity = velocity * 0.85 + dy * 0.15;
    lastY = window.scrollY;
    const speed = 1 + Math.min(3, Math.abs(velocity) * 0.04);
    document.documentElement.style.setProperty('--marquee-speed-multiplier', speed.toFixed(2));
    ticking = false;
  }
  window.addEventListener('scroll', () => {
    if (!ticking) { requestAnimationFrame(tick); ticking = true; }
  }, { passive: true });
  // 衰減：滾動停止時逐漸回到 1x
  setInterval(() => {
    velocity *= 0.9;
  }, 100);
})();
\`\`\`
`,"../../.claude/skills/motion-noise-grain/SKILL.md":`---
name: motion-noise-grain
description: Use when generating a single-file HTML page for the 「島嶼共鳴 2026」music festival with animated film grain noise and slow hue rotation. Triggers on noise grain、film grain、雜訊、hue rotate、analog texture.
user-invocable: true
---

# 動態噪點 Noise Grain — 島嶼共鳴 2026

## Style Philosophy

電影膠卷的顆粒感是觀眾不會意識到、卻提供「真實感」的關鍵。把這個質感搬到網頁——**頂層覆一層動態 SVG noise**（用 turbulence filter），同時整頁背景做緩慢 \`hue-rotate\`，讓整體有「老膠片在投影機裡持續轉動」的呼吸感。視覺風格偏電影 / 攝影集 / 暗房美學。

三個視覺辨識特徵：
1. **頂層覆蓋層 SVG noise**（用 base64 inline turbulence），mix-blend-mode overlay
2. **整頁背景 hue-rotate 緩動**（@keyframes 30s+）
3. **沉穩暗色 + 一個明亮 accent**

## Design Tokens

\`\`\`css
:root {
  --n-bg: #1a1410;
  --n-bg-2: #2c2218;
  --n-fg: #f5f0e8;
  --n-fg-soft: #c8bfb0;
  --n-fg-mute: #87807a;
  --n-accent: #fbbf24;
  --n-accent-2: #f43f5e;
  --n-line: rgba(245, 240, 232, 0.1);

  --color-bg: var(--n-bg);
  --color-fg: var(--n-fg);
  --color-accent: var(--n-accent);

  --radius-sm: 6px;
  --radius-md: 12px;
  --radius-lg: 20px;
  --radius-pill: 999px;

  --font-display: 'PingFang TC', 'Noto Serif TC', 'Georgia', 'Times New Roman', serif;
  --font-body: 'PingFang TC', 'Noto Sans TC', 'Inter', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
}
\`\`\`

## Typography Scale

| 級距 | 大小 | 用途 |
| --- | --- | --- |
| display | clamp(56px, 9vw, 112px) / 1.05 / 700 / -0.025em / serif | Hero |
| h1 | clamp(28px, 4vw, 44px) / 1.25 / 600 / serif | 區塊 |
| h2 | 20px / 1.35 / 600 | 子標 |
| body | 16px / 1.75 / 400 | 段落 |
| caption | 11px / 1.4 / 600 / 0.14em / uppercase | label |

## Layout Rules

- \`<body>\` 加 fixed 全屏 \`.noise-overlay\` 覆蓋層
- noise 用 SVG filter 寫 inline data URI
- 容器 max-width 1180px
- 暗背景配米白文字，accent 用琥珀黃

各區塊構圖：
- 標準布局（hero / about / lineup / schedule / venues / tickets / travel / sponsors / footer-faq），加入暗膠卷氛圍
- hero 大字標題 + 副標
- 每個 section 加微妙底色變化，襯托 noise 質感

## Motion Specification

- **動態效果類別**：loop
- **觸發機制**：CSS \`@keyframes\` （noise animate + hue rotate）
- **性能要求**：noise overlay 用 background-position 動，不重繪
- **觸發頻率**：純 CSS

## Accessibility (Reduced Motion)

- reduced 模式：取消 noise 動畫（仍保留靜態 noise 紋理）；hue-rotate 動畫關閉

## Required Output Contract

通用契約 + 8 條動態要求。\`<body data-motion-type="loop">\`。

## Required Images

無圖。SVG noise filter inline。

## Reference Snippet

SVG noise inline 覆蓋層：
\`\`\`html
<div class="noise-overlay" aria-hidden="true"></div>
\`\`\`

\`\`\`css
.noise-overlay {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 1000;
  opacity: 0.12;
  mix-blend-mode: overlay;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' seed='5'/></filter><rect width='240' height='240' filter='url(%23n)'/></svg>");
  animation: noise-shift 1.5s steps(8) infinite;
}
@keyframes noise-shift {
  0%   { background-position: 0 0; }
  20%  { background-position: -20px 10px; }
  40%  { background-position: 30px -15px; }
  60%  { background-position: -10px 25px; }
  80%  { background-position: 20px -20px; }
  100% { background-position: 0 0; }
}

body {
  background: var(--n-bg);
  color: var(--n-fg);
  animation: hue-shift 45s linear infinite;
}
@keyframes hue-shift {
  0%   { filter: hue-rotate(0deg); }
  50%  { filter: hue-rotate(8deg); }
  100% { filter: hue-rotate(0deg); }
}

@media (prefers-reduced-motion: reduce) {
  .noise-overlay { animation: none; }
  body { animation: none; }
}
\`\`\`
`,"../../.claude/skills/motion-parallax-layers/SKILL.md":`---
name: motion-parallax-layers
description: Use when generating a single-file HTML page for the 「島嶼共鳴 2026」music festival with multi-layer parallax scrolling. Triggers on 視差捲動、parallax scroll、multi-layer depth、滾動深度位移、scrolling with depth.
user-invocable: true
---

# 多層視差 Parallax Layers — 島嶼共鳴 2026

## Style Philosophy

視差滾動（parallax）模擬人眼的雙眼立體視覺：前景動得快、遠景動得慢，造成「深度錯覺」。這個風格的核心是**把都蘭灣的山、海、雲、人**拆成 4-5 個重疊圖層，滾動時每層的 translateY 乘以不同係數，產生身臨其境的縱深感。視覺風格採用扁平插畫風（受 Sebastian Lester / Owen Davey 影響）：純色塊 + 簡單形狀。

三個視覺辨識特徵：
1. **多層重疊 SVG 山海雲**作為 hero 背景，每層獨立 z-index 與 transform speed
2. **scroll 事件 + rAF 節流**驅動 transform translateY 變化
3. **扁平插畫**：限定 5 色調色盤、純色塊、無漸層

## Design Tokens

\`\`\`css
:root {
  --p-sky-1: #fcd34d;          /* 夕陽黃 */
  --p-sky-2: #f97316;          /* 橘紅 */
  --p-sky-3: #d97706;          /* 深橘 */
  --p-mountain-far: #92400e;   /* 遠山 */
  --p-mountain-mid: #7c2d12;   /* 中山 */
  --p-mountain-near: #451a03;  /* 近山 */
  --p-sea-1: #0c4a6e;
  --p-sea-2: #075985;
  --p-text: #fafaf9;
  --p-text-dark: #1c1917;
  --p-accent: #fef3c7;
  --p-cta: #f97316;

  --color-bg: var(--p-sky-2);
  --color-fg: var(--p-text);
  --color-accent: var(--p-cta);

  --radius-sm: 8px;
  --radius-md: 16px;
  --radius-pill: 999px;

  --font-display: 'PingFang TC', 'Noto Sans TC', 'Inter', system-ui, sans-serif;
  --font-body: 'PingFang TC', 'Noto Sans TC', 'Inter', system-ui, sans-serif;
}
\`\`\`

## Typography Scale

| 級距 | 大小 | 用途 |
| --- | --- | --- |
| display | clamp(48px, 8vw, 96px) / 1.05 / 800 / -0.025em | Hero |
| h1 | clamp(28px, 4vw, 44px) / 1.2 / 700 | 區塊 |
| h2 | 22px / 1.3 / 600 | 子標 |
| body | 16px / 1.7 / 400 | 段落 |
| caption | 11px / 1.4 / 600 / 0.12em / uppercase | label |

## Layout Rules

- Hero 區設為 \`min-height: 100vh\`、\`overflow: hidden\`，內含 5 個絕對定位的 SVG 圖層
- 後續區塊保持白底深色文字（避免一直視差感太重）
- 每兩個內容區段之間插一個 80px 的「半固定圖層」過場（用 sticky）

各區塊構圖：
- **hero**：全螢幕視差 — 天空（speed 0.1）→ 遠山（0.3）→ 中山（0.5）→ 近山（0.7）→ 海浪（0.9），中央覆蓋大字「島嶼共鳴」
- **about**：白底深色，4 個 stat 數字附小視差插畫
- **lineup**：12 樂團卡片網格，每張卡 hover 時內部插畫上下浮動（CSS keyframes）
- **schedule**：3 day timetable，每 day 配一條淺色山形 SVG 作為視差背景
- **venues**：3 段，每段配視差山海插畫
- **tickets**：3 張票卡，VIP 中央配漸層紙質背景
- **travel**：步驟 list，背景有飄動雲層 SVG
- **sponsors**：純文字 list，分級
- **footer-faq**：簡單 \`<details>\` accordion

## Motion Specification

- **動態效果類別**：parallax
- **觸發機制**：window scroll event（passive: true）+ requestAnimationFrame
- **性能要求**：所有 layer 用 \`transform: translate3d(0, ?px, 0)\` 啟用 GPU 加速；不可動 top / margin
- **觸發頻率**：scroll handler 設 \`passive: true\` 與 rAF batching，最多 60fps
- **layer speed 配對**：
  - 天空：0（不動）
  - 雲：0.15
  - 遠山：0.3
  - 中山：0.5
  - 近山：0.7
  - 海浪：0.85（接近 scroll 速度）

## Accessibility (Reduced Motion)

- 必含 \`@media (prefers-reduced-motion: reduce)\` 區塊
- reduced 模式：所有 \`.parallax-layer\` 設 \`transform: none !important\`、JS rAF loop 直接 return
- 視差層仍可看見、只是不再隨滾動位移
- 內容對比度：白字（#fafaf9）on 橘紅天空（#f97316）約 4.7:1，邊界值，可加 1px text-shadow 加強

## Required Output Contract

通用契約 + 8 條動態額外要求。**\`<body data-motion-type="parallax">\`**。

## Required Images

依 \`assets-manifest.json\`。視差圖建議用內嵌 SVG（純色塊山海雲），減少請求。可選 1-2 張寫實圖加強氛圍。

## Reference Snippet

視差 hero：
\`\`\`html
<section class="hero">
  <svg class="layer" data-speed="0" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
    <rect width="1440" height="900" fill="var(--p-sky-2)"/>
  </svg>
  <svg class="layer" data-speed="0.3" viewBox="0 0 1440 900">
    <polygon points="0,600 400,400 800,500 1200,350 1440,420 1440,900 0,900" fill="var(--p-mountain-far)"/>
  </svg>
  <svg class="layer" data-speed="0.5" viewBox="0 0 1440 900">
    <polygon points="0,700 200,520 500,600 900,480 1440,580 1440,900 0,900" fill="var(--p-mountain-mid)"/>
  </svg>
  <svg class="layer" data-speed="0.7" viewBox="0 0 1440 900">
    <polygon points="0,780 300,650 700,720 1100,640 1440,700 1440,900 0,900" fill="var(--p-mountain-near)"/>
  </svg>
  <div class="hero-content">
    <h1>島嶼共鳴 2026</h1>
  </div>
</section>
\`\`\`

\`\`\`css
.hero { position: relative; min-height: 100vh; overflow: hidden; }
.layer { position: absolute; inset: 0; width: 100%; height: 100%; will-change: transform; }
.hero-content {
  position: relative; z-index: 10;
  display: grid; place-items: center; min-height: 100vh;
  color: var(--p-text);
}
@media (prefers-reduced-motion: reduce) {
  .layer { transform: none !important; }
}
\`\`\`

\`\`\`javascript
// 視差 JS — 寫進 inline <script>
(function () {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const layers = document.querySelectorAll('.layer[data-speed]');
  let ticking = false;
  function update() {
    const y = window.scrollY;
    layers.forEach((l) => {
      const speed = parseFloat(l.dataset.speed) || 0;
      l.style.transform = 'translate3d(0,' + (y * speed) + 'px,0)';
    });
    ticking = false;
  }
  window.addEventListener('scroll', () => {
    if (!ticking) { requestAnimationFrame(update); ticking = true; }
  }, { passive: true });
})();
\`\`\`
`,"../../.claude/skills/motion-scroll-progress/SKILL.md":`---
name: motion-scroll-progress
description: Use when generating a single-file HTML page for the 「島嶼共鳴 2026」music festival with a top scroll progress bar and side chapter indicator. Triggers on scroll progress、進度條、reading progress、chapter indicator.
user-invocable: true
---

# 滾動進度 Scroll Progress — 島嶼共鳴 2026

## Style Philosophy

長文／長頁面的閱讀器標配——**頂部 progress bar** 隨滾動填滿、**側邊章節指示器**標示目前位置與全部章節。這個風格的視覺核心是**清晰、輕量、不干擾內容**，靈感來自 Medium、紐約客、Notion 文檔。文字優先、淡色節點。

三個視覺辨識特徵：
1. **頂端 1-2px progress bar**，從左到右隨滾動填滿，accent 色
2. **側邊垂直 mini map**，9 個章節點 + 當前章節高亮 + 章節名 hover 顯示
3. **內容偏文章感**：寬鬆 line-height、適中 max-width、淺色背景

## Design Tokens

\`\`\`css
:root {
  --sp-bg: #fafafa;
  --sp-card: #ffffff;
  --sp-fg: #1a1a1a;
  --sp-fg-soft: #555555;
  --sp-fg-mute: #999999;
  --sp-line: #e5e5e5;
  --sp-accent: #ea580c;       /* 進度橙 */
  --sp-accent-soft: rgba(234, 88, 12, 0.15);

  --color-bg: var(--sp-bg);
  --color-fg: var(--sp-fg);
  --color-accent: var(--sp-accent);

  --radius-sm: 6px;
  --radius-md: 12px;
  --radius-lg: 20px;
  --radius-pill: 999px;

  --font-display: 'PingFang TC', 'Noto Sans TC', 'Inter', 'Helvetica Neue', system-ui, sans-serif;
  --font-body: 'PingFang TC', 'Noto Sans TC', 'Inter', system-ui, sans-serif;
}
\`\`\`

## Typography Scale

| 級距 | 大小 | 用途 |
| --- | --- | --- |
| display | clamp(48px, 7vw, 88px) / 1.1 / 700 / -0.02em | Hero |
| h1 | clamp(28px, 4vw, 44px) / 1.25 / 600 | 區塊 |
| h2 | 20px / 1.35 / 600 | 子標 |
| body | 17px / 1.75 / 400 | 段落 |
| caption | 11px / 1.4 / 600 / 0.14em / uppercase | 章節編號 |

## Layout Rules

- 主容器 max-width 880px 置中（文章感）
- 頂部 progress bar 用 \`position: fixed; top: 0; left: 0; height: 3px;\` 配合 \`transform: scaleX(progress)\`
- 側邊章節 mini map \`position: fixed; left: 24px; top: 50%\`，9 個直線連節點
- 每章節進入視窗時，mini map 對應節點亮起

各區塊構圖：
- **hero**：滿版淺色 + 大字 + 副標 + 兩個 CTA（橙色 pill）
- **about**：兩欄圖文 + 4 stat 數字（小尺寸但極粗）
- **lineup**：12 樂團淺色卡 3 欄、headliner 用橙色細邊
- **schedule**：時刻表式 3 day list
- **venues**：3 段落 + 容量數字
- **tickets**：3 張票價卡，VIP 中央橙底白字
- **travel**：3 步驟編號 list
- **sponsors**：分級列
- **footer-faq**：\`<details>\` accordion

## Motion Specification

- **動態效果類別**：scroll-driven
- **觸發機制**：scroll event + rAF，更新 \`--scroll-progress\` CSS 變數
- **性能要求**：只動 \`transform: scaleX()\`、不重排
- **觸發頻率**：rAF 節流

## Accessibility (Reduced Motion)

- reduced 模式：progress bar 仍可正常顯示位置（無動畫意涵）；hover 章節名 tooltip 取消 fade，改瞬間出現
- mini map 章節點仍 functional（點擊跳轉）

## Required Output Contract

通用契約 + 8 條動態要求。\`<body data-motion-type="scroll-driven">\`。

## Required Images

少量或無圖；以文字為主。

## Reference Snippet

Progress bar：
\`\`\`html
<div class="progress-bar" aria-hidden="true"><span class="fill"></span></div>
\`\`\`

\`\`\`css
.progress-bar {
  position: fixed; top: 0; left: 0; right: 0; height: 3px;
  background: var(--sp-line);
  z-index: 1000;
}
.progress-bar .fill {
  display: block; height: 100%;
  background: var(--sp-accent);
  transform-origin: left center;
  transform: scaleX(var(--scroll-progress, 0));
  transition: transform 0.05s linear;
}
\`\`\`

\`\`\`javascript
(function () {
  const fill = document.querySelector('.progress-bar .fill');
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  let ticking = false;
  function update() {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const p = max > 0 ? window.scrollY / max : 0;
    document.documentElement.style.setProperty('--scroll-progress', p);
    ticking = false;
  }
  window.addEventListener('scroll', () => {
    if (!ticking) { requestAnimationFrame(update); ticking = true; }
  }, { passive: true });
  update();
})();
\`\`\`

側邊 mini map：
\`\`\`html
<nav class="mini-map" aria-label="章節導覽">
  <a href="#hero"><span class="dot"></span><span class="label">活動首頁</span></a>
  ...
</nav>
\`\`\`

\`\`\`css
.mini-map {
  position: fixed; left: 24px; top: 50%; transform: translateY(-50%);
  display: flex; flex-direction: column; gap: 12px; z-index: 100;
}
.mini-map a {
  display: flex; align-items: center; gap: 10px;
  color: var(--sp-fg-mute); text-decoration: none;
  font-size: 12px; letter-spacing: 0.08em;
}
.mini-map .dot { width: 8px; height: 8px; border-radius: 50%; background: var(--sp-fg-mute); transition: all 0.2s; }
.mini-map .label { opacity: 0; transform: translateX(-4px); transition: opacity 0.2s, transform 0.2s; }
.mini-map a:hover .label { opacity: 1; transform: translateX(0); }
.mini-map a.active .dot { background: var(--sp-accent); transform: scale(1.6); }
.mini-map a.active { color: var(--sp-fg); }
\`\`\`
`,"../../.claude/skills/motion-scroll-snap-acts/SKILL.md":`---
name: motion-scroll-snap-acts
description: Use when generating a single-file HTML page for the 「島嶼共鳴 2026」music festival with CSS scroll-snap fullscreen acts (每章 100vh + 強制吸附切換). Triggers on scroll snap、全屏切換、fullscreen acts、cinematic scroll、chapter-by-chapter.
user-invocable: true
---

# 全屏章節 Scroll Snap Acts — 島嶼共鳴 2026

## Style Philosophy

把整個網頁切成 9 個「幕」，每幕佔滿一整個視窗，透過 CSS \`scroll-snap-type\` 強制吸附——滑鼠滾一下就跳到下一幕，像看 keynote 或電影章節。每幕擁有完全不同的氛圍與大字標題，配合 IntersectionObserver 觸發進場動畫。視覺風格偏電影感：深色背景 + 大字 + 強烈對比配色，每幕一個焦點視覺。

三個視覺辨識特徵：
1. **CSS \`scroll-snap-type: y mandatory\`** 強制吸附式切換
2. **每章獨立 100vh 全屏**，無滾動阻礙
3. **進場大字 + 章節編號（01-09）** 戲劇感引導

## Design Tokens

\`\`\`css
:root {
  --a-bg-base: #0f1729;
  --a-bg-1: #0f1729;   /* 深夜藍 */
  --a-bg-2: #4c1d95;   /* 紫 */
  --a-bg-3: #be123c;   /* 玫瑰紅 */
  --a-bg-4: #047857;   /* 翠綠 */
  --a-bg-5: #ea580c;   /* 火橘 */
  --a-bg-6: #0e7490;   /* 青藍 */
  --a-bg-7: #a16207;   /* 琥珀棕 */
  --a-bg-8: #1e293b;   /* 石板 */
  --a-bg-9: #18181b;   /* 純黑近 */

  --a-fg: #fafafa;
  --a-fg-soft: #d4d4d8;
  --a-accent: #fbbf24;

  --color-bg: var(--a-bg-base);
  --color-fg: var(--a-fg);
  --color-accent: var(--a-accent);

  --radius-md: 12px;
  --radius-lg: 24px;
  --radius-pill: 999px;

  --font-display: 'PingFang TC', 'Noto Sans TC', 'Inter', 'Helvetica Neue', system-ui, sans-serif;
  --font-body: 'PingFang TC', 'Noto Sans TC', 'Inter', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', 'SF Mono', monospace;
}
\`\`\`

## Typography Scale

| 級距 | 大小 | 用途 |
| --- | --- | --- |
| display | clamp(64px, 10vw, 144px) / 1.0 / 800 / -0.03em | 每章大標 |
| h1 | clamp(28px, 4vw, 44px) / 1.2 / 700 | 子標 |
| h2 | 20px / 1.3 / 600 | 卡標 |
| body | 17px / 1.7 / 400 | 段落（大字便於遠看） |
| caption | 12px / 1.4 / 700 / 0.18em / mono / uppercase | 章節編號 ACT 01 |

## Layout Rules

- \`<html>\` 設 \`scroll-snap-type: y mandatory; scroll-behavior: smooth; height: 100vh; overflow-y: scroll;\`
- 每個 section 設 \`scroll-snap-align: start; min-height: 100vh; display: grid; place-items: center;\`
- 每章內容置中、極大字、極寬鬆 leading
- 章節間切換時內部元素 transform 由 \`translateY(40px), opacity 0\` → \`0, 1\`
- 右側固定一個垂直章節指示器（9 個圓點，目前所在章節點亮）

各區塊（依序）：
- **hero (ACT 01 / 深夜藍)**：大字「島嶼共鳴 2026」+ slogan
- **about (ACT 02 / 紫)**：浪打文化簡介 + 4 stat 數字
- **lineup (ACT 03 / 玫瑰紅)**：12 樂團 grid
- **schedule (ACT 04 / 翠綠)**：三日時程
- **venues (ACT 05 / 火橘)**：三舞台
- **tickets (ACT 06 / 青藍)**：三票價
- **travel (ACT 07 / 琥珀棕)**：三步驟
- **sponsors (ACT 08 / 石板)**：贊助商
- **footer-faq (ACT 09 / 黑)**：FAQ + footer

## Motion Specification

- **動態效果類別**：scroll-driven
- **觸發機制**：CSS \`scroll-snap\` + IntersectionObserver（threshold 0.5 觸發進場動畫）+ scroll event 更新右側 dot indicator
- **性能要求**：snap 由 CSS 處理（GPU friendly），進場動畫只動 transform + opacity
- **觸發頻率**：IntersectionObserver 自然節流；可加 rAF 處理 dot indicator

## Accessibility (Reduced Motion)

- reduced 模式：保留 scroll-snap（無傷可用性），但取消進場動畫（直接 opacity 1）；smooth scroll 也改 auto
- 確保每章內容預設可見（opacity 1 fallback）

## Required Output Contract

通用契約 + 8 條動態要求。\`<body data-motion-type="scroll-driven">\`。

## Required Images

可選 1-2 張 hero 圖。建議純色 + 大字即可達到電影感。

## Reference Snippet

Scroll-snap 基礎：
\`\`\`css
html {
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  height: 100vh;
  overflow-y: scroll;
}
body { margin: 0; }
section {
  scroll-snap-align: start;
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 80px 40px;
  position: relative;
  color: var(--a-fg);
}
@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; scroll-snap-type: none; }
}
\`\`\`

章節指示器：
\`\`\`html
<nav class="dot-indicator" aria-label="章節導覽">
  <a href="#act-01"><span></span></a>
  ...
</nav>
\`\`\`

\`\`\`css
.dot-indicator {
  position: fixed; right: 24px; top: 50%; transform: translateY(-50%);
  display: flex; flex-direction: column; gap: 14px; z-index: 100;
}
.dot-indicator a {
  width: 12px; height: 12px; border-radius: 50%;
  background: rgba(255,255,255,0.25); transition: all 0.3s;
}
.dot-indicator a.active { background: var(--a-accent); transform: scale(1.4); }
\`\`\`

進場動畫：
\`\`\`css
.reveal { opacity: 1; transform: translateY(0); }
.js-on .reveal:not(.in) { opacity: 0; transform: translateY(40px); }
.reveal { transition: opacity 0.6s, transform 0.6s cubic-bezier(0.22,1,0.36,1); }
\`\`\`

\`\`\`javascript
(function () {
  document.documentElement.classList.add('js-on');
  const dots = [...document.querySelectorAll('.dot-indicator a')];
  const sections = [...document.querySelectorAll('section[data-block]')];
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reducedMotion) {
    const io = new IntersectionObserver((entries) => entries.forEach((e) => {
      if (e.isIntersecting) e.target.querySelectorAll('.reveal').forEach((el) => el.classList.add('in'));
    }), { threshold: 0.3 });
    sections.forEach((s) => io.observe(s));
  } else {
    document.querySelectorAll('.reveal').forEach((el) => el.classList.add('in'));
  }
  // dot indicator
  const navIo = new IntersectionObserver((entries) => entries.forEach((e) => {
    if (e.isIntersecting) {
      const i = sections.indexOf(e.target);
      dots.forEach((d, idx) => d.classList.toggle('active', idx === i));
    }
  }), { threshold: 0.5 });
  sections.forEach((s) => navIo.observe(s));
})();
\`\`\`
`,"../../.claude/skills/motion-sticky-stack/SKILL.md":`---
name: motion-sticky-stack
description: Use when generating a single-file HTML page for the 「島嶼共鳴 2026」music festival with sticky-pinned stacking sections, in the style of Apple AirPods Pro / Stripe product pages. Triggers on sticky stack、釘住堆疊、Apple-style scrolling、章節疊上、scroll stack.
user-invocable: true
---

# Sticky 堆疊章節 Sticky Stack — 島嶼共鳴 2026

## Style Philosophy

致敬 2020 年代 Apple、Stripe、Linear 等產品頁的「章節釘住、後章疊上」滾動敘事：每個區塊用 \`position: sticky\` 釘住整個視窗，下一個區塊從底部滑上來疊住前章。這給人「層層展開的故事卡」感受。視覺以**對比強烈的章節輪換配色**為核心（深藍、暖橘、米白、墨綠交替），每章內部用「居中對齊大字 + 1-2 個焦點視覺」突顯。

三個視覺辨識特徵：
1. **整段 \`position: sticky\` + \`height: 100vh\`** 章節
2. **每章獨立大色塊背景**，章節切換時整面變色
3. **章節進入時內部元素 scale/translate 動畫**（IntersectionObserver）

## Design Tokens

\`\`\`css
:root {
  --s-bg-a: #0c1233;            /* 深藍夜 */
  --s-bg-b: #f4a261;            /* 暖橘 */
  --s-bg-c: #f8f1e4;            /* 米白 */
  --s-bg-d: #1f4d3a;            /* 墨綠 */
  --s-bg-e: #e76f51;            /* 磚紅 */

  --s-fg-light: #f8f1e4;
  --s-fg-dark: #0c1233;
  --s-accent: #fbbf24;

  --color-bg: var(--s-bg-a);
  --color-fg: var(--s-fg-light);
  --color-accent: var(--s-accent);

  --radius-md: 16px;
  --radius-lg: 28px;
  --radius-pill: 999px;

  --font-display: 'PingFang TC', 'Noto Sans TC', 'Inter', 'Helvetica Neue', system-ui, sans-serif;
  --font-body: 'PingFang TC', 'Noto Sans TC', 'Inter', system-ui, sans-serif;
}
\`\`\`

## Typography Scale

| 級距 | 大小 | 用途 |
| --- | --- | --- |
| display | clamp(64px, 10vw, 128px) / 1.0 / 800 / -0.03em | 各章節大標 |
| h1 | clamp(28px, 4vw, 48px) / 1.2 / 700 | 子標 |
| h2 | 22px / 1.3 / 600 | 卡標 |
| body | 18px / 1.7 / 400 | 段落（特意大字） |
| caption | 12px / 1.4 / 600 / 0.12em / uppercase | 章節編號 |

## Layout Rules

- 每個 \`<section>\` 設 \`position: sticky; top: 0; min-height: 100vh; z-index: <逐章遞增>\` 形成堆疊
- 章節主體置中：用 \`display: grid; place-items: center\`
- 章節進入視窗時內部元素 transform 由 \`translateY(30px) scale(0.95)\` 變為 \`translateY(0) scale(1)\`、opacity 0 → 1
- 第 9 章（footer-faq）不 sticky，作為堆疊結尾

各區塊構圖（依序疊上）：
- **hero**：z-index 1，深藍夜底，大字「島嶼共鳴 2026」+ 副標 + 兩個 CTA
- **about**：z-index 2，米白底深字，4 個 stat tiles 在中央
- **lineup**：z-index 3，深藍底，12 樂團兩欄 list（headliner 較大）
- **schedule**：z-index 4，磚紅底，3 day 時程橫排
- **venues**：z-index 5，墨綠底，3 個舞台垂直 list
- **tickets**：z-index 6，暖橘底，3 張票卡橫排
- **travel**：z-index 7，米白底，3 步驟 list
- **sponsors**：z-index 8，深藍底，title 大、其他小
- **footer-faq**：z-index 9（不 sticky），結束堆疊

## Motion Specification

- **動態效果類別**：parallax（sticky 堆疊屬視差變體）
- **觸發機制**：CSS \`position: sticky\` + IntersectionObserver（觸發進入動畫）
- **性能要求**：sticky 本身 GPU friendly；進入動畫只動 transform + opacity
- **觸發頻率**：IntersectionObserver threshold 0.4，避免太敏感頻繁切換

## Accessibility (Reduced Motion)

- reduced 模式：保留 sticky 堆疊效果（不影響閱讀），但取消進入動畫（即所有元素直接 opacity:1 + 不 translate）
- 內容預設 opacity 1（fallback）；JS 進入後才設 0 → 1 的轉場

## Required Output Contract

通用契約 + 8 條動態要求。\`<body data-motion-type="parallax">\`。

## Required Images

\`assets-manifest.json\` 中 0-3 張可選圖（多用純色塊 + 大字即可）。

## Reference Snippet

Sticky 堆疊基礎：
\`\`\`css
body { background: var(--s-bg-a); }
section {
  position: sticky;
  top: 0;
  min-height: 100vh;
  display: grid;
  place-items: center;
  color: var(--s-fg-light);
  padding: 80px 40px;
  isolation: isolate;
}
section[data-block="about"] { background: var(--s-bg-c); color: var(--s-fg-dark); z-index: 2; }
section[data-block="lineup"] { background: var(--s-bg-a); z-index: 3; }
section[data-block="schedule"] { background: var(--s-bg-e); z-index: 4; }
section[data-block="venues"] { background: var(--s-bg-d); z-index: 5; }
section[data-block="tickets"] { background: var(--s-bg-b); color: var(--s-fg-dark); z-index: 6; }
section[data-block="travel"] { background: var(--s-bg-c); color: var(--s-fg-dark); z-index: 7; }
section[data-block="sponsors"] { background: var(--s-bg-a); z-index: 8; }
section[data-block="footer-faq"] {
  position: relative; /* 不 sticky 結束堆疊 */
  background: var(--s-bg-d);
  z-index: 9;
}
\`\`\`

進入動畫：
\`\`\`css
.reveal {
  opacity: 1;
  transform: translateY(0) scale(1);
  transition: opacity 0.7s ease, transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
}
.reveal.in {
  opacity: 1;
}
.js-on .reveal:not(.in) {
  opacity: 0;
  transform: translateY(30px) scale(0.97);
}
@media (prefers-reduced-motion: reduce) {
  .reveal, .reveal.in { opacity: 1 !important; transform: none !important; }
}
\`\`\`

\`\`\`javascript
(function () {
  document.documentElement.classList.add('js-on');
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const targets = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver(
    (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('in')),
    { threshold: 0.4 }
  );
  targets.forEach((t) => io.observe(t));
})();
\`\`\`
`,"../../.claude/skills/motion-tilt-cards/SKILL.md":`---
name: motion-tilt-cards
description: Use when generating a single-file HTML page for the 「島嶼共鳴 2026」music festival where lineup cards 3D-tilt following mouse position. Triggers on tilt cards、3D tilt、滑鼠傾斜、card perspective、tilt.js style.
user-invocable: true
---

# 3D 傾斜卡片 Tilt Cards — 島嶼共鳴 2026

## Style Philosophy

12 張樂團卡的卡片**依滑鼠在卡內位置 3D 傾斜**——像捧著一張會反光的相片。技術上用 \`mousemove\` 計算滑鼠相對卡片中心的位移、轉成 \`rotateX\` \`rotateY\`。視覺風格偏精緻 / 質感：深色背景、卡片有微妙 spec gloss（漸層 + box-shadow）。其他區塊用標準排版。

三個視覺辨識特徵：
1. **卡片 3D 傾斜**（perspective + rotateX/Y）跟滑鼠
2. **卡片 hover 時內部 highlight**（漸層光斑跟滑鼠）
3. **暗背景 + 質感卡片**（細邊框 + 微妙陰影）

## Design Tokens

\`\`\`css
:root {
  --t-bg: #18181b;
  --t-bg-2: #27272a;
  --t-card: #1f1f23;
  --t-card-edge: rgba(255, 255, 255, 0.12);
  --t-fg: #fafafa;
  --t-fg-soft: #d4d4d8;
  --t-fg-mute: #a1a1aa;
  --t-accent: #f97316;
  --t-accent-soft: rgba(249, 115, 22, 0.2);

  --color-bg: var(--t-bg);
  --color-fg: var(--t-fg);
  --color-accent: var(--t-accent);

  --radius-md: 16px;
  --radius-lg: 24px;
  --radius-pill: 999px;

  --font-display: 'PingFang TC', 'Noto Sans TC', 'Inter', 'Helvetica Neue', system-ui, sans-serif;
  --font-body: 'PingFang TC', 'Noto Sans TC', 'Inter', system-ui, sans-serif;
}
\`\`\`

## Typography Scale

| 級距 | 大小 | 用途 |
| --- | --- | --- |
| display | clamp(48px, 8vw, 96px) / 1.05 / 800 / -0.025em | Hero |
| h1 | clamp(28px, 4vw, 44px) / 1.25 / 700 | 區塊 |
| h2 | 20px / 1.35 / 600 | 子標 |
| body | 16px / 1.7 / 400 | 段落 |
| caption | 11px / 1.4 / 600 / 0.14em / uppercase | label |

## Layout Rules

- \`<body>\` 暗背景
- 卡片用 \`transform-style: preserve-3d; transform: perspective(800px) rotateX(?) rotateY(?)\`
- 容器（卡片包外層）設 \`perspective: 1000px\` 讓 3D 更明顯
- mousemove 計算卡內相對位置，更新卡片 CSS transform

各區塊構圖：
- 大部分區段標準排版
- **lineup**：12 卡片 grid（headliner 較大），每卡可 tilt
- **tickets**：3 票價卡也可 tilt
- **venues**：3 舞台卡也可 tilt
- 其他區段卡片不 tilt（避免過度）

## Motion Specification

- **動態效果類別**：pointer
- **觸發機制**：mousemove on each card + rAF
- **性能要求**：transform 3D GPU 加速；用 \`will-change: transform\`
- **觸發頻率**：rAF 節流

## Accessibility (Reduced Motion)

- reduced 模式：卡片不 tilt（CSS transform 不變）；hover 仍有 outline 變化

## Required Output Contract

通用契約 + 8 條動態要求。\`<body data-motion-type="pointer">\`。

## Required Images

無圖。

## Reference Snippet

\`\`\`css
.tilt {
  perspective: 1000px;
}
.tilt-card {
  transform-style: preserve-3d;
  transition: transform 0.1s linear;
  will-change: transform;
  position: relative;
}
.tilt-card::before {
  content: '';
  position: absolute; inset: 0;
  background: radial-gradient(
    300px circle at var(--cx, 50%) var(--cy, 50%),
    rgba(255, 255, 255, 0.12) 0%,
    transparent 60%
  );
  border-radius: inherit;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.2s;
}
.tilt-card:hover::before { opacity: 1; }
@media (prefers-reduced-motion: reduce) {
  .tilt-card { transform: none !important; }
}
\`\`\`

\`\`\`javascript
(function () {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const cards = document.querySelectorAll('.tilt-card');
  const MAX_DEG = 8;
  cards.forEach((card) => {
    let raf = 0;
    function update(e) {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;  // 0-1
      const y = (e.clientY - rect.top) / rect.height;
      const rx = (0.5 - y) * MAX_DEG;
      const ry = (x - 0.5) * MAX_DEG;
      card.style.transform = \`perspective(800px) rotateX(\${rx}deg) rotateY(\${ry}deg) translateZ(0)\`;
      card.style.setProperty('--cx', (x * 100) + '%');
      card.style.setProperty('--cy', (y * 100) + '%');
    }
    card.addEventListener('mousemove', (e) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => update(e));
    }, { passive: true });
    card.addEventListener('mouseleave', () => {
      cancelAnimationFrame(raf);
      card.style.transform = '';
    });
  });
})();
\`\`\`
`,"../../.claude/skills/motion-typewriter/SKILL.md":`---
name: motion-typewriter
description: Use when generating a single-file HTML page for the 「島嶼共鳴 2026」music festival with typewriter effect on hero and paragraph reveal. Triggers on typewriter、打字機效果、char-by-char reveal、cursor blink.
user-invocable: true
---

# 打字機 Typewriter — 島嶼共鳴 2026

## Style Philosophy

Hero 標題以**打字機的節奏一字一字浮現**，下方副標、CTA、後續區段段落依序「打出來」。這個風格的靈感來自老式打字機、終端機、Stripe 早期 hero、Vercel 部落格頁。視覺風格偏文學感：明朝體標題、深色背景（讓 cursor 閃爍更明顯）、適度間距。

三個視覺辨識特徵：
1. **字元逐個出現 + 閃爍 cursor**（CSS animation：\`steps()\` 製造打字節奏）
2. **段落 reveal**（每段在進入視窗時開始打字）
3. **暗色背景 + 高對比文字**（讓 cursor 閃爍更銳利）

## Design Tokens

\`\`\`css
:root {
  --t-bg: #0a0a0a;
  --t-bg-2: #18181b;
  --t-fg: #fafaf9;
  --t-fg-soft: #d4d4d8;
  --t-fg-mute: #71717a;
  --t-accent: #facc15;          /* 打字機機械黃 */
  --t-cursor: #facc15;
  --t-line: rgba(255, 255, 255, 0.1);

  --color-bg: var(--t-bg);
  --color-fg: var(--t-fg);
  --color-accent: var(--t-accent);

  --radius-sm: 6px;
  --radius-md: 12px;
  --radius-lg: 20px;
  --radius-pill: 999px;

  --font-display: 'PingFang TC', 'Noto Serif TC', 'Georgia', 'Times New Roman', serif;
  --font-body: 'PingFang TC', 'Noto Sans TC', 'Inter', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', 'SF Mono', 'Menlo', monospace;
}
\`\`\`

## Typography Scale

| 級距 | 大小 | 用途 |
| --- | --- | --- |
| display | clamp(48px, 8vw, 96px) / 1.1 / 700 / -0.02em / serif | Hero |
| h1 | clamp(28px, 4vw, 44px) / 1.25 / 600 / serif | 區塊 |
| h2 | 20px / 1.35 / 600 | 子標 |
| body | 16px / 1.75 / 400 | 段落 |
| caption | 11px / 1.4 / 600 / 0.14em / mono / uppercase | label |

## Layout Rules

- 暗色背景、寬鬆 max-width 1080px
- 每個 reveal 文字節點包 \`<span class="typewriter" data-text="...">\` 由 JS 處理
- cursor 用 \`::after\` 偽元素 + CSS keyframes 閃爍
- 段落出現的速率：~30-50 字／秒（每字 20-30ms）

各區塊構圖：
- **hero**：display 標題一字一字打出來，cursor 閃爍；下方副標延遲後打字
- **about**：左 4 stat 數字（打字節奏 0→target）+ 右段落「打字機體驗」
- **lineup**：12 樂團名以連續打字方式列出（headliner 用黃色強調 + 慢速打字）
- **schedule**：3 day 時程表，每個時段一行 mono 風格打字
- **venues**：3 段，每段段落打字
- **tickets**：3 張票卡，價格數字遞增打出
- **travel**：3 步驟段落
- **sponsors**：list 列名
- **footer-faq**：問題段落打字

## Motion Specification

- **動態效果類別**：reveal
- **觸發機制**：IntersectionObserver + setInterval / requestAnimationFrame 逐字 append
- **性能要求**：用 \`textContent +=\` 而非 innerHTML；元素已渲染好、JS 只控制可見字數
- **觸發頻率**：每字 20-30ms

## Accessibility (Reduced Motion)

- reduced 模式：直接顯示完整文字、cursor 不閃爍
- 對螢幕閱讀器：data-text 完整內容應在 DOM（aria-label）即使 JS 動態 typing

## Required Output Contract

通用契約 + 8 條動態要求。\`<body data-motion-type="reveal">\`。

## Required Images

可選 1 張 hero 配圖；以文字節奏為主。

## Reference Snippet

打字機 cursor：
\`\`\`css
.typewriter {
  display: inline-block;
  white-space: pre-wrap;
}
.typewriter::after {
  content: '▎';
  color: var(--t-cursor);
  animation: blink 1s steps(2) infinite;
  margin-left: 2px;
}
.typewriter.done::after { animation-delay: 0s; opacity: 0; }
@keyframes blink { 50% { opacity: 0; } }
@media (prefers-reduced-motion: reduce) {
  .typewriter::after { animation: none; opacity: 0.5; }
}
\`\`\`

\`\`\`javascript
(function () {
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const targets = document.querySelectorAll('.typewriter[data-text]');
  if (reducedMotion) {
    targets.forEach((el) => { el.textContent = el.dataset.text; el.classList.add('done'); });
    return;
  }
  // 設 aria-label 給 screen reader
  targets.forEach((el) => {
    el.setAttribute('aria-label', el.dataset.text);
    el.textContent = '';
  });
  const speed = 28; // ms per char
  function typeOne(el) {
    const text = el.dataset.text;
    let i = 0;
    const id = setInterval(() => {
      el.textContent = text.slice(0, ++i);
      if (i >= text.length) { clearInterval(id); el.classList.add('done'); }
    }, speed);
  }
  const io = new IntersectionObserver((entries) => entries.forEach((e) => {
    if (e.isIntersecting) { typeOne(e.target); io.unobserve(e.target); }
  }), { threshold: 0.4 });
  targets.forEach((el) => io.observe(el));
})();
\`\`\`

數字計數版（用在 about）：
\`\`\`javascript
function countUp(el, to, duration = 1200) {
  let start = null;
  function step(ts) {
    if (!start) start = ts;
    const p = Math.min(1, (ts - start) / duration);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(to * eased).toLocaleString('en');
    if (p < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}
\`\`\`
`}),ps={};for(let[e,t]of Object.entries(fs)){let n=e.match(/\.claude\/skills\/([^/]+)\/SKILL\.md$/);n&&n[1]&&(ps[n[1]]=t)}var ms=[`aria-label`],hs=[`src`],gs={key:1,class:`screen placeholder`},_s=es(Zn({__name:`PhonePreview`,props:{work:{},active:{type:Boolean}},setup(e){let t=e,n=$(()=>`/claude-skill-design-gallery/works/${t.work.slug}/index.html`),r=$(()=>t.active&&t.work.status===`shipped`?n.value:``);return(t,n)=>(q(),J(`div`,{class:`phone`,role:`img`,"aria-label":`${e.work.name.zh} 行動 App 即時預覽`},[n[1]||=Y(`div`,{class:`notch`},null,-1),r.value?(q(),J(`iframe`,{key:0,src:r.value,class:`screen`,title:`App 即時預覽`,loading:`lazy`,sandbox:`allow-scripts allow-same-origin`,referrerpolicy:`no-referrer`},null,8,hs)):(q(),J(`div`,gs,[...n[0]||=[Y(`span`,null,`即將上線`,-1)]])),n[2]||=Y(`div`,{class:`home-indicator`},null,-1)],8,ms))}}),[[`__scopeId`,`data-v-3fd8a833`]]),vs=[`aria-label`],ys={key:0,class:`preview-pane`},bs={class:`phone-scale`},xs={class:`phone-inner`},Ss={class:`main-pane`},Cs={class:`panel-head`},ws={class:`panel-title`},Ts={class:`kicker`},Es={class:`en`},Ds={class:`install`},Os={class:`code-block`},ks={class:`code-head`},As={class:`filename`},js=es(Zn({__name:`SkillDrawer`,props:{work:{}},emits:[`close`],setup(e,{emit:t}){let n=e,r=t,i=Ht(!1),a=$(()=>n.work&&ps[n.work.slug]||``),o=$(()=>n.work?.round===3),s=$(()=>n.work?`.claude/skills/${n.work.slug}/SKILL.md`:``);jn(()=>n.work,()=>{i.value=!1});async function c(){if(a.value)try{await navigator.clipboard.writeText(a.value),i.value=!0,setTimeout(()=>i.value=!1,2200)}catch{let e=document.createElement(`textarea`);e.value=a.value,document.body.appendChild(e),e.select(),document.execCommand(`copy`),document.body.removeChild(e),i.value=!0,setTimeout(()=>i.value=!1,2200)}}function l(e){e.target===e.currentTarget&&r(`close`)}function u(e){e.key===`Escape`&&r(`close`)}return jn(()=>n.work,e=>{e?(document.addEventListener(`keydown`,u),document.body.style.overflow=`hidden`):(document.removeEventListener(`keydown`,u),document.body.style.overflow=``)}),(t,n)=>(q(),Hi(Ra,{name:`drawer`},{default:Tn(()=>[e.work?(q(),J(`div`,{key:0,class:`backdrop`,onClick:l,role:`dialog`,"aria-modal":`true`},[Y(`aside`,{class:A([`panel`,{"has-preview":o.value}]),"aria-label":`${e.work.name.zh} Skill 內容`},[o.value?(q(),J(`div`,ys,[Y(`div`,bs,[Y(`div`,xs,[X(_s,{work:e.work,active:!!e.work},null,8,[`work`,`active`])])])])):Z(``,!0),Y(`div`,Ss,[Y(`header`,Cs,[Y(`div`,ws,[Y(`span`,Ts,`SKILL · `+j(e.work.slug),1),Y(`h2`,null,[Xi(j(e.work.name.zh)+` `,1),Y(`span`,Es,j(e.work.name.en),1)])]),Y(`button`,{class:`close`,onClick:n[0]||=e=>r(`close`),"aria-label":`關閉`},`✕`)]),Y(`section`,Ds,[n[5]||=Y(`h3`,null,`使用方式`,-1),Y(`ol`,null,[Y(`li`,null,[n[1]||=Xi(` 在你的 Claude Code 專案中建立 `,-1),Y(`code`,null,j(s.value),1)]),n[4]||=Y(`li`,null,` 點下方「複製 SKILL.md」按鈕，把整段內容貼進該檔案 `,-1),Y(`li`,null,[n[2]||=Xi(` 在 Claude Code 中召喚 `,-1),Y(`code`,null,j(e.work.slug),1),n[3]||=Xi(`，即可重現這個風格的網頁 `,-1)])])]),Y(`section`,Os,[Y(`header`,ks,[Y(`span`,As,j(s.value),1),Y(`button`,{class:A([`copy-btn`,{done:i.value}]),onClick:c},j(i.value?`✓ 已複製`:`複製 SKILL.md`),3)]),Y(`pre`,null,[Y(`code`,null,j(a.value),1)])])])],10,vs)])):Z(``,!0)]),_:1}))}}),[[`__scopeId`,`data-v-01f1dd17`]]),Ms=!1;function Ns(){return!0}function Ps(){if(Ms)return;Ms=!0;let e=document.createElement(`script`);e.async=!0,e.crossOrigin=`anonymous`,e.src=`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8296684122088055`,document.head.appendChild(e)}var Fs=[`data-ad-client`,`data-ad-slot`,`data-ad-format`,`data-ad-layout`],Is=es(Zn({__name:`AdSlot`,props:{adSlot:{},format:{default:`auto`},layout:{default:``}},setup(e){let t=e,n=Ns()&&!!t.adSlot;return pr(()=>{if(n)try{(window.adsbygoogle=window.adsbygoogle||[]).push({})}catch{}}),(t,r)=>Kt(n)?(q(),J(`ins`,{key:0,class:`adsbygoogle ad-slot`,style:{display:`block`},"data-ad-client":Kt(`ca-pub-8296684122088055`),"data-ad-slot":e.adSlot,"data-ad-format":e.format,"data-ad-layout":e.layout||void 0,"data-full-width-responsive":`true`},null,8,Fs)):Z(``,!0)}}),[[`__scopeId`,`data-v-ad981801`]]),Ls={class:`page`},Rs={class:`hero`},zs={class:`hero-inner`},Bs={class:`hero-title`},Vs={class:`emph`},Hs={class:`hero-stats`},Us={class:`content`},Ws={class:`round-section`,"aria-label":`輪次切換`},Gs={class:`filter-section`,"aria-label":`分類篩選`},Ks={class:`grid`,"aria-label":`作品列表`},qs={key:0,class:`empty-state`},Js={key:1,class:`footer-ad`,"aria-label":`贊助`},Ys=8;No(es(Zn({__name:`App`,setup(e){let t=Ht(`all`),n=Ht(`all`),r=Ht(null),i=$(()=>Ro.filter(e=>e.round===1)),a=$(()=>Ro.filter(e=>e.round===2)),o=$(()=>Ro.filter(e=>e.round===3)),s=$(()=>t.value===`all`?Ro:Ro.filter(e=>e.round===t.value)),c=$(()=>{let e={all:s.value.length,mainstream:0,retro:0,experimental:0,cultural:0,decorative:0,motion:0,"native-ui":0,"stylized-mobile":0};for(let t of s.value)e[t.category]+=1;return e}),l=$(()=>Ro.filter(e=>e.status===`shipped`).length),u=$(()=>i.value.filter(e=>e.status===`shipped`).length),d=$(()=>a.value.filter(e=>e.status===`shipped`).length),f=$(()=>o.value.filter(e=>e.status===`shipped`).length),p=$(()=>n.value===`all`?s.value:s.value.filter(e=>e.category===n.value));function m(e){t.value=e,n.value=`all`}return(e,s)=>(q(),J(`div`,Ls,[Y(`header`,Rs,[Y(`div`,zs,[s[10]||=Y(`p`,{class:`kicker`},`Claude Code Skill 設計風格圖鑑`,-1),Y(`h1`,Bs,[s[3]||=Xi(` 一個音樂節，`,-1),s[4]||=Y(`br`,null,null,-1),Y(`span`,Vs,j(Kt(Ro).length),1),s[5]||=Xi(` 種設計語言。 `,-1)]),s[11]||=Y(`p`,{class:`hero-sub`},[Xi(` 以虛構獨立音樂節「`),Y(`strong`,null,`島嶼共鳴 2026`),Xi(`」與虛構音樂串流 App「`),Y(`strong`,null,`迴聲 Resona`),Xi(`」為共同主題， 每一份作品都先由 Claude Code 撰寫成一個可下載的 Skill，再交給 SubAgent 透過該 Skill 完成單檔網頁。 涵蓋 25 種靜態設計語言、視差／滾動／入場／循環／指標 5 類共 15 種動態效果，以及 iOS HIG、Material You 到卡帶未來主義等 17 種行動 App 介面風格。 `)],-1),Y(`ul`,Hs,[Y(`li`,null,[Y(`strong`,null,j(Kt(Ro).length),1),s[6]||=Y(`span`,null,`設計風格`,-1)]),Y(`li`,null,[Y(`strong`,null,j(l.value),1),s[7]||=Y(`span`,null,`已完成作品`,-1)]),Y(`li`,null,[Y(`strong`,null,j(u.value)+` / `+j(d.value)+` / `+j(f.value),1),s[8]||=Y(`span`,null,`靜態 / 動態 / 行動`,-1)]),s[9]||=Y(`li`,null,[Y(`strong`,null,`8–9`),Y(`span`,null,`共用標準區塊`)],-1)])])]),Y(`main`,Us,[Y(`section`,Ws,[X(ds,{active:t.value,"total-all":Kt(Ro).length,"total-r1":i.value.length,"total-r2":a.value.length,"total-r3":o.value.length,onChange:m},null,8,[`active`,`total-all`,`total-r1`,`total-r2`,`total-r3`])]),Y(`section`,Gs,[X(as,{active:n.value,counts:c.value,onChange:s[0]||=e=>n.value=e},null,8,[`active`,`counts`])]),Y(`section`,Ks,[(q(!0),J(W,null,Cr(p.value,(e,t)=>(q(),J(W,{key:e.slug},[X(ts,{work:e,onOpenSkill:s[1]||=e=>r.value=e},null,8,[`work`]),(t+1)%Ys===0&&t+1<p.value.length?(q(),Hi(Is,{key:0,class:`grid-ad`,"ad-slot":Kt(`8769565283`),format:`fluid`,layout:`in-article`},null,8,[`ad-slot`])):Z(``,!0)],64))),128))]),p.value.length===0?(q(),J(`p`,qs,` 這個分類目前沒有作品。試試切換到「全部」。 `)):Z(``,!0),(q(),J(`section`,Js,[X(Is,{"ad-slot":Kt(`8450544523`),format:`auto`},null,8,[`ad-slot`])]))]),s[12]||=Zi(`<footer class="footer" data-v-f5732b54><div class="footer-inner" data-v-f5732b54><div data-v-f5732b54><h2 data-v-f5732b54>關於這個專案</h2><p data-v-f5732b54> 這是一個示範專案，展示「主執行緒寫 Skill → SubAgent 透過 Skill 產出網頁」的規模化工作流。 所有 Skill 都隨專案進 Git，可被自由下載、修改、套用至其他專案。 </p></div><div data-v-f5732b54><h2 data-v-f5732b54>下載 Skill</h2><p data-v-f5732b54> 點任一張卡片右下角的「查看 Skill」即可開啟 drawer 一鍵複製。 或把 <code data-v-f5732b54>.claude/skills/&lt;slug&gt;/</code> 整個目錄複製到任意 Claude Code 專案。 </p></div><div class="footer-meta" data-v-f5732b54><p data-v-f5732b54>島嶼共鳴 2026 · 由浪打文化（虛構）主辦</p><p data-v-f5732b54>Built with Vue 3 · Vite · Claude Code Skills</p></div></div></footer>`,1),X(js,{work:r.value,onClose:s[2]||=e=>r.value=null},null,8,[`work`])]))}}),[[`__scopeId`,`data-v-f5732b54`]])).mount(`#app`),Ps();
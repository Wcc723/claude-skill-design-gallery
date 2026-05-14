(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(e){let t=Object.create(null);for(let n of e.split(`,`))t[n]=1;return e=>e in t}var t={},n=[],r=()=>{},i=()=>!1,a=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),o=e=>e.startsWith(`onUpdate:`),s=Object.assign,c=(e,t)=>{let n=e.indexOf(t);n>-1&&e.splice(n,1)},l=Object.prototype.hasOwnProperty,u=(e,t)=>l.call(e,t),d=Array.isArray,f=e=>x(e)===`[object Map]`,p=e=>x(e)===`[object Set]`,m=e=>x(e)===`[object Date]`,h=e=>typeof e==`function`,g=e=>typeof e==`string`,_=e=>typeof e==`symbol`,v=e=>typeof e==`object`&&!!e,y=e=>(v(e)||h(e))&&h(e.then)&&h(e.catch),b=Object.prototype.toString,x=e=>b.call(e),S=e=>x(e).slice(8,-1),C=e=>x(e)===`[object Object]`,w=e=>g(e)&&e!==`NaN`&&e[0]!==`-`&&``+parseInt(e,10)===e,T=e(`,key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted`),ee=e=>{let t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},te=/-\w/g,E=ee(e=>e.replace(te,e=>e.slice(1).toUpperCase())),ne=/\B([A-Z])/g,D=ee(e=>e.replace(ne,`-$1`).toLowerCase()),re=ee(e=>e.charAt(0).toUpperCase()+e.slice(1)),ie=ee(e=>e?`on${re(e)}`:``),O=(e,t)=>!Object.is(e,t),ae=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},k=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},oe=e=>{let t=parseFloat(e);return isNaN(t)?e:t},se=e=>{let t=g(e)?Number(e):NaN;return isNaN(t)?e:t},ce,le=()=>ce||=typeof globalThis<`u`?globalThis:typeof self<`u`?self:typeof window<`u`?window:typeof global<`u`?global:{};function ue(e){if(d(e)){let t={};for(let n=0;n<e.length;n++){let r=e[n],i=g(r)?me(r):ue(r);if(i)for(let e in i)t[e]=i[e]}return t}else if(g(e)||v(e))return e}var de=/;(?![^(]*\))/g,fe=/:([^]+)/,pe=/\/\*[^]*?\*\//g;function me(e){let t={};return e.replace(pe,``).split(de).forEach(e=>{if(e){let n=e.split(fe);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function A(e){let t=``;if(g(e))t=e;else if(d(e))for(let n=0;n<e.length;n++){let r=A(e[n]);r&&(t+=r+` `)}else if(v(e))for(let n in e)e[n]&&(t+=n+` `);return t.trim()}var he=`itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`,ge=e(he);he+``;function _e(e){return!!e||e===``}function ve(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=ye(e[r],t[r]);return n}function ye(e,t){if(e===t)return!0;let n=m(e),r=m(t);if(n||r)return n&&r?e.getTime()===t.getTime():!1;if(n=_(e),r=_(t),n||r)return e===t;if(n=d(e),r=d(t),n||r)return n&&r?ve(e,t):!1;if(n=v(e),r=v(t),n||r){if(!n||!r||Object.keys(e).length!==Object.keys(t).length)return!1;for(let n in e){let r=e.hasOwnProperty(n),i=t.hasOwnProperty(n);if(r&&!i||!r&&i||!ye(e[n],t[n]))return!1}}return String(e)===String(t)}var be=e=>!!(e&&e.__v_isRef===!0),j=e=>g(e)?e:e==null?``:d(e)||v(e)&&(e.toString===b||!h(e.toString))?be(e)?j(e.value):JSON.stringify(e,xe,2):String(e),xe=(e,t)=>be(t)?xe(e,t.value):f(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[t,n],r)=>(e[Se(t,r)+` =>`]=n,e),{})}:p(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>Se(e))}:_(t)?Se(t):v(t)&&!d(t)&&!C(t)?String(t):t,Se=(e,t=``)=>_(e)?`Symbol(${e.description??t})`:e,M,Ce=class{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&M&&(M.active?(this.parent=M,this.index=(M.scopes||=[]).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){let t=M;try{return M=this,e()}finally{M=t}}}on(){++this._on===1&&(this.prevScope=M,M=this)}off(){if(this._on>0&&--this._on===0){if(M===this)M=this.prevScope;else{let e=M;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(this.effects.length=0,t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){let e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0}}};function we(){return M}var N,Te=new WeakSet,Ee=class{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,M&&(M.active?M.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Te.has(this)&&(Te.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Ae(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,He(this),Ne(this);let e=N,t=P;N=this,P=!0;try{return this.fn()}finally{Pe(this),N=e,P=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Le(e);this.deps=this.depsTail=void 0,He(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Te.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Fe(this)&&this.run()}get dirty(){return Fe(this)}},De=0,Oe,ke;function Ae(e,t=!1){if(e.flags|=8,t){e.next=ke,ke=e;return}e.next=Oe,Oe=e}function je(){De++}function Me(){if(--De>0)return;if(ke){let e=ke;for(ke=void 0;e;){let t=e.next;e.next=void 0,e.flags&=-9,e=t}}let e;for(;Oe;){let t=Oe;for(Oe=void 0;t;){let n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(t){e||=t}t=n}}if(e)throw e}function Ne(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Pe(e){let t,n=e.depsTail,r=n;for(;r;){let e=r.prevDep;r.version===-1?(r===n&&(n=e),Le(r),Re(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=e}e.deps=t,e.depsTail=n}function Fe(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Ie(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Ie(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Ue)||(e.globalVersion=Ue,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Fe(e))))return;e.flags|=2;let t=e.dep,n=N,r=P;N=e,P=!0;try{Ne(e);let n=e.fn(e._value);(t.version===0||O(n,e._value))&&(e.flags|=128,e._value=n,t.version++)}catch(e){throw t.version++,e}finally{N=n,P=r,Pe(e),e.flags&=-3}}function Le(e,t=!1){let{dep:n,prevSub:r,nextSub:i}=e;if(r&&(r.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let e=n.computed.deps;e;e=e.nextDep)Le(e,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Re(e){let{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}var P=!0,ze=[];function Be(){ze.push(P),P=!1}function Ve(){let e=ze.pop();P=e===void 0?!0:e}function He(e){let{cleanup:t}=e;if(e.cleanup=void 0,t){let e=N;N=void 0;try{t()}finally{N=e}}}var Ue=0,We=class{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}},Ge=class{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!N||!P||N===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==N)t=this.activeLink=new We(N,this),N.deps?(t.prevDep=N.depsTail,N.depsTail.nextDep=t,N.depsTail=t):N.deps=N.depsTail=t,Ke(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){let e=t.nextDep;e.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=e),t.prevDep=N.depsTail,t.nextDep=void 0,N.depsTail.nextDep=t,N.depsTail=t,N.deps===t&&(N.deps=e)}return t}trigger(e){this.version++,Ue++,this.notify(e)}notify(e){je();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{Me()}}};function Ke(e){if(e.dep.sc++,e.sub.flags&4){let t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let e=t.deps;e;e=e.nextDep)Ke(e)}let n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}var qe=new WeakMap,Je=Symbol(``),Ye=Symbol(``),Xe=Symbol(``);function F(e,t,n){if(P&&N){let t=qe.get(e);t||qe.set(e,t=new Map);let r=t.get(n);r||(t.set(n,r=new Ge),r.map=t,r.key=n),r.track()}}function Ze(e,t,n,r,i,a){let o=qe.get(e);if(!o){Ue++;return}let s=e=>{e&&e.trigger()};if(je(),t===`clear`)o.forEach(s);else{let i=d(e),a=i&&w(n);if(i&&n===`length`){let e=Number(r);o.forEach((t,n)=>{(n===`length`||n===Xe||!_(n)&&n>=e)&&s(t)})}else switch((n!==void 0||o.has(void 0))&&s(o.get(n)),a&&s(o.get(Xe)),t){case`add`:i?a&&s(o.get(`length`)):(s(o.get(Je)),f(e)&&s(o.get(Ye)));break;case`delete`:i||(s(o.get(Je)),f(e)&&s(o.get(Ye)));break;case`set`:f(e)&&s(o.get(Je));break}}Me()}function Qe(e){let t=L(e);return t===e?t:(F(t,`iterate`,Xe),I(e)?t:t.map(R))}function $e(e){return F(e=L(e),`iterate`,Xe),e}function et(e,t){return Lt(e)?Bt(It(e)?R(t):t):R(t)}var tt={__proto__:null,[Symbol.iterator](){return nt(this,Symbol.iterator,e=>et(this,e))},concat(...e){return Qe(this).concat(...e.map(e=>d(e)?Qe(e):e))},entries(){return nt(this,`entries`,e=>(e[1]=et(this,e[1]),e))},every(e,t){return it(this,`every`,e,t,void 0,arguments)},filter(e,t){return it(this,`filter`,e,t,e=>e.map(e=>et(this,e)),arguments)},find(e,t){return it(this,`find`,e,t,e=>et(this,e),arguments)},findIndex(e,t){return it(this,`findIndex`,e,t,void 0,arguments)},findLast(e,t){return it(this,`findLast`,e,t,e=>et(this,e),arguments)},findLastIndex(e,t){return it(this,`findLastIndex`,e,t,void 0,arguments)},forEach(e,t){return it(this,`forEach`,e,t,void 0,arguments)},includes(...e){return ot(this,`includes`,e)},indexOf(...e){return ot(this,`indexOf`,e)},join(e){return Qe(this).join(e)},lastIndexOf(...e){return ot(this,`lastIndexOf`,e)},map(e,t){return it(this,`map`,e,t,void 0,arguments)},pop(){return st(this,`pop`)},push(...e){return st(this,`push`,e)},reduce(e,...t){return at(this,`reduce`,e,t)},reduceRight(e,...t){return at(this,`reduceRight`,e,t)},shift(){return st(this,`shift`)},some(e,t){return it(this,`some`,e,t,void 0,arguments)},splice(...e){return st(this,`splice`,e)},toReversed(){return Qe(this).toReversed()},toSorted(e){return Qe(this).toSorted(e)},toSpliced(...e){return Qe(this).toSpliced(...e)},unshift(...e){return st(this,`unshift`,e)},values(){return nt(this,`values`,e=>et(this,e))}};function nt(e,t,n){let r=$e(e),i=r[t]();return r!==e&&!I(e)&&(i._next=i.next,i.next=()=>{let e=i._next();return e.done||(e.value=n(e.value)),e}),i}var rt=Array.prototype;function it(e,t,n,r,i,a){let o=$e(e),s=o!==e&&!I(e),c=o[t];if(c!==rt[t]){let t=c.apply(e,a);return s?R(t):t}let l=n;o!==e&&(s?l=function(t,r){return n.call(this,et(e,t),r,e)}:n.length>2&&(l=function(t,r){return n.call(this,t,r,e)}));let u=c.call(o,l,r);return s&&i?i(u):u}function at(e,t,n,r){let i=$e(e),a=i!==e&&!I(e),o=n,s=!1;i!==e&&(a?(s=r.length===0,o=function(t,r,i){return s&&(s=!1,t=et(e,t)),n.call(this,t,et(e,r),i,e)}):n.length>3&&(o=function(t,r,i){return n.call(this,t,r,i,e)}));let c=i[t](o,...r);return s?et(e,c):c}function ot(e,t,n){let r=L(e);F(r,`iterate`,Xe);let i=r[t](...n);return(i===-1||i===!1)&&Rt(n[0])?(n[0]=L(n[0]),r[t](...n)):i}function st(e,t,n=[]){Be(),je();let r=L(e)[t].apply(e,n);return Me(),Ve(),r}var ct=e(`__proto__,__v_isRef,__isVue`),lt=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!==`arguments`&&e!==`caller`).map(e=>Symbol[e]).filter(_));function ut(e){_(e)||(e=String(e));let t=L(this);return F(t,`has`,e),t.hasOwnProperty(e)}var dt=class{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,n){if(t===`__v_skip`)return e.__v_skip;let r=this._isReadonly,i=this._isShallow;if(t===`__v_isReactive`)return!r;if(t===`__v_isReadonly`)return r;if(t===`__v_isShallow`)return i;if(t===`__v_raw`)return n===(r?i?kt:Ot:i?Dt:Et).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;let a=d(e);if(!r){let e;if(a&&(e=tt[t]))return e;if(t===`hasOwnProperty`)return ut}let o=Reflect.get(e,t,z(e)?e:n);if((_(t)?lt.has(t):ct(t))||(r||F(e,`get`,t),i))return o;if(z(o)){let e=a&&w(t)?o:o.value;return r&&v(e)?Pt(e):e}return v(o)?r?Pt(o):Mt(o):o}},ft=class extends dt{constructor(e=!1){super(!1,e)}set(e,t,n,r){let i=e[t],a=d(e)&&w(t);if(!this._isShallow){let e=Lt(i);if(!I(n)&&!Lt(n)&&(i=L(i),n=L(n)),!a&&z(i)&&!z(n))return e||(i.value=n),!0}let o=a?Number(t)<e.length:u(e,t),s=Reflect.set(e,t,n,z(e)?e:r);return e===L(r)&&(o?O(n,i)&&Ze(e,`set`,t,n,i):Ze(e,`add`,t,n)),s}deleteProperty(e,t){let n=u(e,t),r=e[t],i=Reflect.deleteProperty(e,t);return i&&n&&Ze(e,`delete`,t,void 0,r),i}has(e,t){let n=Reflect.has(e,t);return(!_(t)||!lt.has(t))&&F(e,`has`,t),n}ownKeys(e){return F(e,`iterate`,d(e)?`length`:Je),Reflect.ownKeys(e)}},pt=class extends dt{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}},mt=new ft,ht=new pt,gt=new ft(!0),_t=e=>e,vt=e=>Reflect.getPrototypeOf(e);function yt(e,t,n){return function(...r){let i=this.__v_raw,a=L(i),o=f(a),c=e===`entries`||e===Symbol.iterator&&o,l=e===`keys`&&o,u=i[e](...r),d=n?_t:t?Bt:R;return!t&&F(a,`iterate`,l?Ye:Je),s(Object.create(u),{next(){let{value:e,done:t}=u.next();return t?{value:e,done:t}:{value:c?[d(e[0]),d(e[1])]:d(e),done:t}}})}}function bt(e){return function(...t){return e===`delete`?!1:e===`clear`?void 0:this}}function xt(e,t){let n={get(n){let r=this.__v_raw,i=L(r),a=L(n);e||(O(n,a)&&F(i,`get`,n),F(i,`get`,a));let{has:o}=vt(i),s=t?_t:e?Bt:R;if(o.call(i,n))return s(r.get(n));if(o.call(i,a))return s(r.get(a));r!==i&&r.get(n)},get size(){let t=this.__v_raw;return!e&&F(L(t),`iterate`,Je),t.size},has(t){let n=this.__v_raw,r=L(n),i=L(t);return e||(O(t,i)&&F(r,`has`,t),F(r,`has`,i)),t===i?n.has(t):n.has(t)||n.has(i)},forEach(n,r){let i=this,a=i.__v_raw,o=L(a),s=t?_t:e?Bt:R;return!e&&F(o,`iterate`,Je),a.forEach((e,t)=>n.call(r,s(e),s(t),i))}};return s(n,e?{add:bt(`add`),set:bt(`set`),delete:bt(`delete`),clear:bt(`clear`)}:{add(e){let n=L(this),r=vt(n),i=L(e),a=!t&&!I(e)&&!Lt(e)?i:e;return r.has.call(n,a)||O(e,a)&&r.has.call(n,e)||O(i,a)&&r.has.call(n,i)||(n.add(a),Ze(n,`add`,a,a)),this},set(e,n){!t&&!I(n)&&!Lt(n)&&(n=L(n));let r=L(this),{has:i,get:a}=vt(r),o=i.call(r,e);o||=(e=L(e),i.call(r,e));let s=a.call(r,e);return r.set(e,n),o?O(n,s)&&Ze(r,`set`,e,n,s):Ze(r,`add`,e,n),this},delete(e){let t=L(this),{has:n,get:r}=vt(t),i=n.call(t,e);i||=(e=L(e),n.call(t,e));let a=r?r.call(t,e):void 0,o=t.delete(e);return i&&Ze(t,`delete`,e,void 0,a),o},clear(){let e=L(this),t=e.size!==0,n=e.clear();return t&&Ze(e,`clear`,void 0,void 0,void 0),n}}),[`keys`,`values`,`entries`,Symbol.iterator].forEach(r=>{n[r]=yt(r,e,t)}),n}function St(e,t){let n=xt(e,t);return(t,r,i)=>r===`__v_isReactive`?!e:r===`__v_isReadonly`?e:r===`__v_raw`?t:Reflect.get(u(n,r)&&r in t?n:t,r,i)}var Ct={get:St(!1,!1)},wt={get:St(!1,!0)},Tt={get:St(!0,!1)},Et=new WeakMap,Dt=new WeakMap,Ot=new WeakMap,kt=new WeakMap;function At(e){switch(e){case`Object`:case`Array`:return 1;case`Map`:case`Set`:case`WeakMap`:case`WeakSet`:return 2;default:return 0}}function jt(e){return e.__v_skip||!Object.isExtensible(e)?0:At(S(e))}function Mt(e){return Lt(e)?e:Ft(e,!1,mt,Ct,Et)}function Nt(e){return Ft(e,!1,gt,wt,Dt)}function Pt(e){return Ft(e,!0,ht,Tt,Ot)}function Ft(e,t,n,r,i){if(!v(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;let a=jt(e);if(a===0)return e;let o=i.get(e);if(o)return o;let s=new Proxy(e,a===2?r:n);return i.set(e,s),s}function It(e){return Lt(e)?It(e.__v_raw):!!(e&&e.__v_isReactive)}function Lt(e){return!!(e&&e.__v_isReadonly)}function I(e){return!!(e&&e.__v_isShallow)}function Rt(e){return e?!!e.__v_raw:!1}function L(e){let t=e&&e.__v_raw;return t?L(t):e}function zt(e){return!u(e,`__v_skip`)&&Object.isExtensible(e)&&k(e,`__v_skip`,!0),e}var R=e=>v(e)?Mt(e):e,Bt=e=>v(e)?Pt(e):e;function z(e){return e?e.__v_isRef===!0:!1}function Vt(e){return Ut(e,!1)}function Ht(e){return Ut(e,!0)}function Ut(e,t){return z(e)?e:new Wt(e,t)}var Wt=class{constructor(e,t){this.dep=new Ge,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:L(e),this._value=t?e:R(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){let t=this._rawValue,n=this.__v_isShallow||I(e)||Lt(e);e=n?e:L(e),O(e,t)&&(this._rawValue=e,this._value=n?e:R(e),this.dep.trigger())}};function Gt(e){return z(e)?e.value:e}var Kt={get:(e,t,n)=>t===`__v_raw`?e:Gt(Reflect.get(e,t,n)),set:(e,t,n,r)=>{let i=e[t];return z(i)&&!z(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function qt(e){return It(e)?e:new Proxy(e,Kt)}var Jt=class{constructor(e,t,n){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Ge(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ue-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&N!==this)return Ae(this,!0),!0}get value(){let e=this.dep.track();return Ie(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}};function Yt(e,t,n=!1){let r,i;return h(e)?r=e:(r=e.get,i=e.set),new Jt(r,i,n)}var Xt={},Zt=new WeakMap,Qt=void 0;function $t(e,t=!1,n=Qt){if(n){let t=Zt.get(n);t||Zt.set(n,t=[]),t.push(e)}}function en(e,n,i=t){let{immediate:a,deep:o,once:s,scheduler:l,augmentJob:u,call:f}=i,p=e=>o?e:I(e)||o===!1||o===0?tn(e,1):tn(e),m,g,_,v,y=!1,b=!1;if(z(e)?(g=()=>e.value,y=I(e)):It(e)?(g=()=>p(e),y=!0):d(e)?(b=!0,y=e.some(e=>It(e)||I(e)),g=()=>e.map(e=>{if(z(e))return e.value;if(It(e))return p(e);if(h(e))return f?f(e,2):e()})):g=h(e)?n?f?()=>f(e,2):e:()=>{if(_){Be();try{_()}finally{Ve()}}let t=Qt;Qt=m;try{return f?f(e,3,[v]):e(v)}finally{Qt=t}}:r,n&&o){let e=g,t=o===!0?1/0:o;g=()=>tn(e(),t)}let x=we(),S=()=>{m.stop(),x&&x.active&&c(x.effects,m)};if(s&&n){let e=n;n=(...t)=>{e(...t),S()}}let C=b?Array(e.length).fill(Xt):Xt,w=e=>{if(!(!(m.flags&1)||!m.dirty&&!e))if(n){let e=m.run();if(o||y||(b?e.some((e,t)=>O(e,C[t])):O(e,C))){_&&_();let t=Qt;Qt=m;try{let t=[e,C===Xt?void 0:b&&C[0]===Xt?[]:C,v];C=e,f?f(n,3,t):n(...t)}finally{Qt=t}}}else m.run()};return u&&u(w),m=new Ee(g),m.scheduler=l?()=>l(w,!1):w,v=e=>$t(e,!1,m),_=m.onStop=()=>{let e=Zt.get(m);if(e){if(f)f(e,4);else for(let t of e)t();Zt.delete(m)}},n?a?w(!0):C=m.run():l?l(w.bind(null,!0),!0):m.run(),S.pause=m.pause.bind(m),S.resume=m.resume.bind(m),S.stop=S,S}function tn(e,t=1/0,n){if(t<=0||!v(e)||e.__v_skip||(n||=new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,z(e))tn(e.value,t,n);else if(d(e))for(let r=0;r<e.length;r++)tn(e[r],t,n);else if(p(e)||f(e))e.forEach(e=>{tn(e,t,n)});else if(C(e)){for(let r in e)tn(e[r],t,n);for(let r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&tn(e[r],t,n)}return e}function nn(e,t,n,r){try{return r?e(...r):e()}catch(e){rn(e,t,n)}}function B(e,t,n,r){if(h(e)){let i=nn(e,t,n,r);return i&&y(i)&&i.catch(e=>{rn(e,t,n)}),i}if(d(e)){let i=[];for(let a=0;a<e.length;a++)i.push(B(e[a],t,n,r));return i}}function rn(e,n,r,i=!0){let a=n?n.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:s}=n&&n.appContext.config||t;if(n){let t=n.parent,i=n.proxy,a=`https://vuejs.org/error-reference/#runtime-${r}`;for(;t;){let n=t.ec;if(n){for(let t=0;t<n.length;t++)if(n[t](e,i,a)===!1)return}t=t.parent}if(o){Be(),nn(o,null,10,[e,i,a]),Ve();return}}an(e,r,a,i,s)}function an(e,t,n,r=!0,i=!1){if(i)throw e;console.error(e)}var V=[],on=-1,sn=[],cn=null,ln=0,un=Promise.resolve(),dn=null;function fn(e){let t=dn||un;return e?t.then(this?e.bind(this):e):t}function pn(e){let t=on+1,n=V.length;for(;t<n;){let r=t+n>>>1,i=V[r],a=yn(i);a<e||a===e&&i.flags&2?t=r+1:n=r}return t}function mn(e){if(!(e.flags&1)){let t=yn(e),n=V[V.length-1];!n||!(e.flags&2)&&t>=yn(n)?V.push(e):V.splice(pn(t),0,e),e.flags|=1,hn()}}function hn(){dn||=un.then(bn)}function gn(e){d(e)?sn.push(...e):cn&&e.id===-1?cn.splice(ln+1,0,e):e.flags&1||(sn.push(e),e.flags|=1),hn()}function _n(e,t,n=on+1){for(;n<V.length;n++){let t=V[n];if(t&&t.flags&2){if(e&&t.id!==e.uid)continue;V.splice(n,1),n--,t.flags&4&&(t.flags&=-2),t(),t.flags&4||(t.flags&=-2)}}}function vn(e){if(sn.length){let e=[...new Set(sn)].sort((e,t)=>yn(e)-yn(t));if(sn.length=0,cn){cn.push(...e);return}for(cn=e,ln=0;ln<cn.length;ln++){let e=cn[ln];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}cn=null,ln=0}}var yn=e=>e.id==null?e.flags&2?-1:1/0:e.id;function bn(e){try{for(on=0;on<V.length;on++){let e=V[on];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),nn(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;on<V.length;on++){let e=V[on];e&&(e.flags&=-2)}on=-1,V.length=0,vn(e),dn=null,(V.length||sn.length)&&bn(e)}}var xn=null,Sn=null;function Cn(e){let t=xn;return xn=e,Sn=e&&e.type.__scopeId||null,t}function wn(e,t=xn,n){if(!t||e._n)return e;let r=(...n)=>{r._d&&zi(-1);let i=Cn(t),a;try{a=e(...n)}finally{Cn(i),r._d&&zi(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function Tn(e,t,n,r){let i=e.dirs,a=t&&t.dirs;for(let o=0;o<i.length;o++){let s=i[o];a&&(s.oldValue=a[o].value);let c=s.dir[r];c&&(Be(),B(c,n,8,[e.el,s,e,t]),Ve())}}function En(e,t){if(Q){let n=Q.provides,r=Q.parent&&Q.parent.provides;r===n&&(n=Q.provides=Object.create(r)),n[e]=t}}function Dn(e,t,n=!1){let r=oa();if(r||Gr){let i=Gr?Gr._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(i&&e in i)return i[e];if(arguments.length>1)return n&&h(t)?t.call(r&&r.proxy):t}}var On=Symbol.for(`v-scx`),kn=()=>Dn(On);function An(e,t,n){return jn(e,t,n)}function jn(e,n,i=t){let{immediate:a,deep:o,flush:c,once:l}=i,u=s({},i),d=n&&a||!n&&c!==`post`,f;if(fa){if(c===`sync`){let e=kn();f=e.__watcherHandles||=[]}else if(!d){let e=()=>{};return e.stop=r,e.resume=r,e.pause=r,e}}let p=Q;u.call=(e,t,n)=>B(e,p,t,n);let m=!1;c===`post`?u.scheduler=e=>{W(e,p&&p.suspense)}:c!==`sync`&&(m=!0,u.scheduler=(e,t)=>{t?e():mn(e)}),u.augmentJob=e=>{n&&(e.flags|=4),m&&(e.flags|=2,p&&(e.id=p.uid,e.i=p))};let h=en(e,n,u);return fa&&(f?f.push(h):d&&h()),h}function Mn(e,t,n){let r=this.proxy,i=g(e)?e.includes(`.`)?Nn(r,e):()=>r[e]:e.bind(r,r),a;h(t)?a=t:(a=t.handler,n=t);let o=la(this),s=jn(i,a.bind(r),n);return o(),s}function Nn(e,t){let n=t.split(`.`);return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}var Pn=Symbol(`_vte`),Fn=e=>e.__isTeleport,In=Symbol(`_leaveCb`),Ln=Symbol(`_enterCb`);function Rn(){let e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return fr(()=>{e.isMounted=!0}),hr(()=>{e.isUnmounting=!0}),e}var H=[Function,Array],zn={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:H,onEnter:H,onAfterEnter:H,onEnterCancelled:H,onBeforeLeave:H,onLeave:H,onAfterLeave:H,onLeaveCancelled:H,onBeforeAppear:H,onAppear:H,onAfterAppear:H,onAppearCancelled:H},Bn=e=>{let t=e.subTree;return t.component?Bn(t.component):t},Vn={name:`BaseTransition`,props:zn,setup(e,{slots:t}){let n=oa(),r=Rn();return()=>{let i=t.default&&Yn(t.default(),!0),a=i&&i.length?Hn(i):n.subTree?Zi():void 0;if(!a)return;let o=L(e),{mode:s}=o;if(r.isLeaving)return Kn(a);let c=qn(a);if(!c)return Kn(a);let l=Gn(c,o,r,n,e=>l=e);c.type!==K&&Jn(c,l);let u=n.subTree&&qn(n.subTree);if(u&&u.type!==K&&!Ui(u,c)&&Bn(n).type!==K){let e=Gn(u,o,r,n);if(Jn(u,e),s===`out-in`&&c.type!==K)return r.isLeaving=!0,e.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete e.afterLeave,u=void 0},Kn(a);s===`in-out`&&c.type!==K?e.delayLeave=(e,t,n)=>{let i=Wn(r,u);i[String(u.key)]=u,e[In]=()=>{t(),e[In]=void 0,delete l.delayedLeave,u=void 0},l.delayedLeave=()=>{n(),delete l.delayedLeave,u=void 0}}:u=void 0}else u&&=void 0;return a}}};function Hn(e){let t=e[0];if(e.length>1){for(let n of e)if(n.type!==K){t=n;break}}return t}var Un=Vn;function Wn(e,t){let{leavingVNodes:n}=e,r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function Gn(e,t,n,r,i){let{appear:a,mode:o,persisted:s=!1,onBeforeEnter:c,onEnter:l,onAfterEnter:u,onEnterCancelled:f,onBeforeLeave:p,onLeave:m,onAfterLeave:h,onLeaveCancelled:g,onBeforeAppear:_,onAppear:v,onAfterAppear:y,onAppearCancelled:b}=t,x=String(e.key),S=Wn(n,e),C=(e,t)=>{e&&B(e,r,9,t)},w=(e,t)=>{let n=t[1];C(e,t),d(e)?e.every(e=>e.length<=1)&&n():e.length<=1&&n()},T={mode:o,persisted:s,beforeEnter(t){let r=c;if(!n.isMounted)if(a)r=_||c;else return;t[In]&&t[In](!0);let i=S[x];i&&Ui(e,i)&&i.el[In]&&i.el[In](),C(r,[t])},enter(t){if(S[x]===e)return;let r=l,i=u,o=f;if(!n.isMounted)if(a)r=v||l,i=y||u,o=b||f;else return;let s=!1;t[Ln]=e=>{s||(s=!0,C(e?o:i,[t]),T.delayedLeave&&T.delayedLeave(),t[Ln]=void 0)};let c=t[Ln].bind(null,!1);r?w(r,[t,c]):c()},leave(t,r){let i=String(e.key);if(t[Ln]&&t[Ln](!0),n.isUnmounting)return r();C(p,[t]);let a=!1;t[In]=n=>{a||(a=!0,r(),C(n?g:h,[t]),t[In]=void 0,S[i]===e&&delete S[i])};let o=t[In].bind(null,!1);S[i]=e,m?w(m,[t,o]):o()},clone(e){let a=Gn(e,t,n,r,i);return i&&i(a),a}};return T}function Kn(e){if(ir(e))return e=Ji(e),e.children=null,e}function qn(e){if(!ir(e))return Fn(e.type)&&e.children?Hn(e.children):e;if(e.component)return e.component.subTree;let{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&h(n.default))return n.default()}}function Jn(e,t){e.shapeFlag&6&&e.component?(e.transition=t,Jn(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Yn(e,t=!1,n){let r=[],i=0;for(let a=0;a<e.length;a++){let o=e[a],s=n==null?o.key:String(n)+String(o.key==null?a:o.key);o.type===G?(o.patchFlag&128&&i++,r=r.concat(Yn(o.children,t,s))):(t||o.type!==K)&&r.push(s==null?o:Ji(o,{key:s}))}if(i>1)for(let e=0;e<r.length;e++)r[e].patchFlag=-2;return r}function Xn(e,t){return h(e)?s({name:e.name},t,{setup:e}):e}function Zn(e){e.ids=[e.ids[0]+ e.ids[2]+++`-`,0,0]}function Qn(e){let n=oa(),r=Ht(null);if(n){let i=n.refs===t?n.refs={}:n.refs;Object.defineProperty(i,e,{enumerable:!0,get:()=>r.value,set:e=>r.value=e})}return r}function $n(e,t){let n;return!!((n=Object.getOwnPropertyDescriptor(e,t))&&!n.configurable)}var er=new WeakMap;function tr(e,n,r,a,o=!1){if(d(e)){e.forEach((e,t)=>tr(e,n&&(d(n)?n[t]:n),r,a,o));return}if(rr(a)&&!o){a.shapeFlag&512&&a.type.__asyncResolved&&a.component.subTree.component&&tr(e,n,r,a.component.subTree);return}let s=a.shapeFlag&4?xa(a.component):a.el,l=o?null:s,{i:f,r:p}=e,m=n&&n.r,_=f.refs===t?f.refs={}:f.refs,v=f.setupState,y=L(v),b=v===t?i:e=>$n(_,e)?!1:u(y,e),x=(e,t)=>!(t&&$n(_,t));if(m!=null&&m!==p){if(nr(n),g(m))_[m]=null,b(m)&&(v[m]=null);else if(z(m)){let e=n;x(m,e.k)&&(m.value=null),e.k&&(_[e.k]=null)}}if(h(p))nn(p,f,12,[l,_]);else{let t=g(p),n=z(p);if(t||n){let i=()=>{if(e.f){let n=t?b(p)?v[p]:_[p]:x(p)||!e.k?p.value:_[e.k];if(o)d(n)&&c(n,s);else if(d(n))n.includes(s)||n.push(s);else if(t)_[p]=[s],b(p)&&(v[p]=_[p]);else{let t=[s];x(p,e.k)&&(p.value=t),e.k&&(_[e.k]=t)}}else t?(_[p]=l,b(p)&&(v[p]=l)):n&&(x(p,e.k)&&(p.value=l),e.k&&(_[e.k]=l))};if(l){let t=()=>{i(),er.delete(e)};t.id=-1,er.set(e,t),W(t,r)}else nr(e),i()}}}function nr(e){let t=er.get(e);t&&(t.flags|=8,er.delete(e))}le().requestIdleCallback,le().cancelIdleCallback;var rr=e=>!!e.type.__asyncLoader,ir=e=>e.type.__isKeepAlive;function ar(e,t){sr(e,`a`,t)}function or(e,t){sr(e,`da`,t)}function sr(e,t,n=Q){let r=e.__wdc||=()=>{let t=n;for(;t;){if(t.isDeactivated)return;t=t.parent}return e()};if(lr(t,r,n),n){let e=n.parent;for(;e&&e.parent;)ir(e.parent.vnode)&&cr(r,t,n,e),e=e.parent}}function cr(e,t,n,r){let i=lr(t,e,r,!0);gr(()=>{c(r[t],i)},n)}function lr(e,t,n=Q,r=!1){if(n){let i=n[e]||(n[e]=[]),a=t.__weh||=(...r)=>{Be();let i=la(n),a=B(t,n,e,r);return i(),Ve(),a};return r?i.unshift(a):i.push(a),a}}var ur=e=>(t,n=Q)=>{(!fa||e===`sp`)&&lr(e,(...e)=>t(...e),n)},dr=ur(`bm`),fr=ur(`m`),pr=ur(`bu`),mr=ur(`u`),hr=ur(`bum`),gr=ur(`um`),_r=ur(`sp`),vr=ur(`rtg`),yr=ur(`rtc`);function br(e,t=Q){lr(`ec`,e,t)}var xr=Symbol.for(`v-ndc`);function Sr(e,t,n,r){let i,a=n&&n[r],o=d(e);if(o||g(e)){let n=o&&It(e),r=!1,s=!1;n&&(r=!I(e),s=Lt(e),e=$e(e)),i=Array(e.length);for(let n=0,o=e.length;n<o;n++)i[n]=t(r?s?Bt(R(e[n])):R(e[n]):e[n],n,void 0,a&&a[n])}else if(typeof e==`number`){i=Array(e);for(let n=0;n<e;n++)i[n]=t(n+1,n,void 0,a&&a[n])}else if(v(e))if(e[Symbol.iterator])i=Array.from(e,(e,n)=>t(e,n,void 0,a&&a[n]));else{let n=Object.keys(e);i=Array(n.length);for(let r=0,o=n.length;r<o;r++){let o=n[r];i[r]=t(e[o],o,r,a&&a[r])}}else i=[];return n&&(n[r]=i),i}var Cr=e=>e?da(e)?xa(e):Cr(e.parent):null,wr=s(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Cr(e.parent),$root:e=>Cr(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Nr(e),$forceUpdate:e=>e.f||=()=>{mn(e.update)},$nextTick:e=>e.n||=fn.bind(e.proxy),$watch:e=>Mn.bind(e)}),Tr=(e,n)=>e!==t&&!e.__isScriptSetup&&u(e,n),Er={get({_:e},n){if(n===`__v_skip`)return!0;let{ctx:r,setupState:i,data:a,props:o,accessCache:s,type:c,appContext:l}=e;if(n[0]!==`$`){let e=s[n];if(e!==void 0)switch(e){case 1:return i[n];case 2:return a[n];case 4:return r[n];case 3:return o[n]}else if(Tr(i,n))return s[n]=1,i[n];else if(a!==t&&u(a,n))return s[n]=2,a[n];else if(u(o,n))return s[n]=3,o[n];else if(r!==t&&u(r,n))return s[n]=4,r[n];else Or&&(s[n]=0)}let d=wr[n],f,p;if(d)return n===`$attrs`&&F(e.attrs,`get`,``),d(e);if((f=c.__cssModules)&&(f=f[n]))return f;if(r!==t&&u(r,n))return s[n]=4,r[n];if(p=l.config.globalProperties,u(p,n))return p[n]},set({_:e},n,r){let{data:i,setupState:a,ctx:o}=e;return Tr(a,n)?(a[n]=r,!0):i!==t&&u(i,n)?(i[n]=r,!0):u(e.props,n)||n[0]===`$`&&n.slice(1)in e?!1:(o[n]=r,!0)},has({_:{data:e,setupState:n,accessCache:r,ctx:i,appContext:a,props:o,type:s}},c){let l;return!!(r[c]||e!==t&&c[0]!==`$`&&u(e,c)||Tr(n,c)||u(o,c)||u(i,c)||u(wr,c)||u(a.config.globalProperties,c)||(l=s.__cssModules)&&l[c])},defineProperty(e,t,n){return n.get==null?u(n,`value`)&&this.set(e,t,n.value,null):e._.accessCache[t]=0,Reflect.defineProperty(e,t,n)}};function Dr(e){return d(e)?e.reduce((e,t)=>(e[t]=null,e),{}):e}var Or=!0;function kr(e){let t=Nr(e),n=e.proxy,i=e.ctx;Or=!1,t.beforeCreate&&jr(t.beforeCreate,e,`bc`);let{data:a,computed:o,methods:s,watch:c,provide:l,inject:u,created:f,beforeMount:p,mounted:m,beforeUpdate:g,updated:_,activated:y,deactivated:b,beforeDestroy:x,beforeUnmount:S,destroyed:C,unmounted:w,render:T,renderTracked:ee,renderTriggered:te,errorCaptured:E,serverPrefetch:ne,expose:D,inheritAttrs:re,components:ie,directives:O,filters:ae}=t;if(u&&Ar(u,i,null),s)for(let e in s){let t=s[e];h(t)&&(i[e]=t.bind(n))}if(a){let t=a.call(n,n);v(t)&&(e.data=Mt(t))}if(Or=!0,o)for(let e in o){let t=o[e],a=$({get:h(t)?t.bind(n,n):h(t.get)?t.get.bind(n,n):r,set:!h(t)&&h(t.set)?t.set.bind(n):r});Object.defineProperty(i,e,{enumerable:!0,configurable:!0,get:()=>a.value,set:e=>a.value=e})}if(c)for(let e in c)Mr(c[e],i,n,e);if(l){let e=h(l)?l.call(n):l;Reflect.ownKeys(e).forEach(t=>{En(t,e[t])})}f&&jr(f,e,`c`);function k(e,t){d(t)?t.forEach(t=>e(t.bind(n))):t&&e(t.bind(n))}if(k(dr,p),k(fr,m),k(pr,g),k(mr,_),k(ar,y),k(or,b),k(br,E),k(yr,ee),k(vr,te),k(hr,S),k(gr,w),k(_r,ne),d(D))if(D.length){let t=e.exposed||={};D.forEach(e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t,enumerable:!0})})}else e.exposed||={};T&&e.render===r&&(e.render=T),re!=null&&(e.inheritAttrs=re),ie&&(e.components=ie),O&&(e.directives=O),ne&&Zn(e)}function Ar(e,t,n=r){d(e)&&(e=Rr(e));for(let n in e){let r=e[n],i;i=v(r)?`default`in r?Dn(r.from||n,r.default,!0):Dn(r.from||n):Dn(r),z(i)?Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>i.value,set:e=>i.value=e}):t[n]=i}}function jr(e,t,n){B(d(e)?e.map(e=>e.bind(t.proxy)):e.bind(t.proxy),t,n)}function Mr(e,t,n,r){let i=r.includes(`.`)?Nn(n,r):()=>n[r];if(g(e)){let n=t[e];h(n)&&An(i,n)}else if(h(e))An(i,e.bind(n));else if(v(e))if(d(e))e.forEach(e=>Mr(e,t,n,r));else{let r=h(e.handler)?e.handler.bind(n):t[e.handler];h(r)&&An(i,r,e)}}function Nr(e){let t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:a,config:{optionMergeStrategies:o}}=e.appContext,s=a.get(t),c;return s?c=s:!i.length&&!n&&!r?c=t:(c={},i.length&&i.forEach(e=>Pr(c,e,o,!0)),Pr(c,t,o)),v(t)&&a.set(t,c),c}function Pr(e,t,n,r=!1){let{mixins:i,extends:a}=t;a&&Pr(e,a,n,!0),i&&i.forEach(t=>Pr(e,t,n,!0));for(let i in t)if(!(r&&i===`expose`)){let r=Fr[i]||n&&n[i];e[i]=r?r(e[i],t[i]):t[i]}return e}var Fr={data:Ir,props:Br,emits:Br,methods:zr,computed:zr,beforeCreate:U,created:U,beforeMount:U,mounted:U,beforeUpdate:U,updated:U,beforeDestroy:U,beforeUnmount:U,destroyed:U,unmounted:U,activated:U,deactivated:U,errorCaptured:U,serverPrefetch:U,components:zr,directives:zr,watch:Vr,provide:Ir,inject:Lr};function Ir(e,t){return t?e?function(){return s(h(e)?e.call(this,this):e,h(t)?t.call(this,this):t)}:t:e}function Lr(e,t){return zr(Rr(e),Rr(t))}function Rr(e){if(d(e)){let t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function U(e,t){return e?[...new Set([].concat(e,t))]:t}function zr(e,t){return e?s(Object.create(null),e,t):t}function Br(e,t){return e?d(e)&&d(t)?[...new Set([...e,...t])]:s(Object.create(null),Dr(e),Dr(t??{})):t}function Vr(e,t){if(!e)return t;if(!t)return e;let n=s(Object.create(null),e);for(let r in t)n[r]=U(e[r],t[r]);return n}function Hr(){return{app:null,config:{isNativeTag:i,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}var Ur=0;function Wr(e,t){return function(n,r=null){h(n)||(n=s({},n)),r!=null&&!v(r)&&(r=null);let i=Hr(),a=new WeakSet,o=[],c=!1,l=i.app={_uid:Ur++,_component:n,_props:r,_container:null,_context:i,_instance:null,version:wa,get config(){return i.config},set config(e){},use(e,...t){return a.has(e)||(e&&h(e.install)?(a.add(e),e.install(l,...t)):h(e)&&(a.add(e),e(l,...t))),l},mixin(e){return i.mixins.includes(e)||i.mixins.push(e),l},component(e,t){return t?(i.components[e]=t,l):i.components[e]},directive(e,t){return t?(i.directives[e]=t,l):i.directives[e]},mount(a,o,s){if(!c){let u=l._ceVNode||Z(n,r);return u.appContext=i,s===!0?s=`svg`:s===!1&&(s=void 0),o&&t?t(u,a):e(u,a,s),c=!0,l._container=a,a.__vue_app__=l,xa(u.component)}},onUnmount(e){o.push(e)},unmount(){c&&(B(o,l._instance,16),e(null,l._container),delete l._container.__vue_app__)},provide(e,t){return i.provides[e]=t,l},runWithContext(e){let t=Gr;Gr=l;try{return e()}finally{Gr=t}}};return l}}var Gr=null,Kr=(e,t)=>t===`modelValue`||t===`model-value`?e.modelModifiers:e[`${t}Modifiers`]||e[`${E(t)}Modifiers`]||e[`${D(t)}Modifiers`];function qr(e,n,...r){if(e.isUnmounted)return;let i=e.vnode.props||t,a=r,o=n.startsWith(`update:`),s=o&&Kr(i,n.slice(7));s&&(s.trim&&(a=r.map(e=>g(e)?e.trim():e)),s.number&&(a=r.map(oe)));let c,l=i[c=ie(n)]||i[c=ie(E(n))];!l&&o&&(l=i[c=ie(D(n))]),l&&B(l,e,6,a);let u=i[c+`Once`];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[c])return;e.emitted[c]=!0,B(u,e,6,a)}}var Jr=new WeakMap;function Yr(e,t,n=!1){let r=n?Jr:t.emitsCache,i=r.get(e);if(i!==void 0)return i;let a=e.emits,o={},c=!1;if(!h(e)){let r=e=>{let n=Yr(e,t,!0);n&&(c=!0,s(o,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return!a&&!c?(v(e)&&r.set(e,null),null):(d(a)?a.forEach(e=>o[e]=null):s(o,a),v(e)&&r.set(e,o),o)}function Xr(e,t){return!e||!a(t)?!1:(t=t.slice(2).replace(/Once$/,``),u(e,t[0].toLowerCase()+t.slice(1))||u(e,D(t))||u(e,t))}function Zr(e){let{type:t,vnode:n,proxy:r,withProxy:i,propsOptions:[a],slots:s,attrs:c,emit:l,render:u,renderCache:d,props:f,data:p,setupState:m,ctx:h,inheritAttrs:g}=e,_=Cn(e),v,y;try{if(n.shapeFlag&4){let e=i||r,t=e;v=Qi(u.call(t,e,d,f,m,p,h)),y=c}else{let e=t;v=Qi(e.length>1?e(f,{attrs:c,slots:s,emit:l}):e(f,null)),y=t.props?c:Qr(c)}}catch(t){Ii.length=0,rn(t,e,1),v=Z(K)}let b=v;if(y&&g!==!1){let e=Object.keys(y),{shapeFlag:t}=b;e.length&&t&7&&(a&&e.some(o)&&(y=$r(y,a)),b=Ji(b,y,!1,!0))}return n.dirs&&(b=Ji(b,null,!1,!0),b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&Jn(b,n.transition),v=b,Cn(_),v}var Qr=e=>{let t;for(let n in e)(n===`class`||n===`style`||a(n))&&((t||={})[n]=e[n]);return t},$r=(e,t)=>{let n={};for(let r in e)(!o(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function ei(e,t,n){let{props:r,children:i,component:a}=e,{props:o,children:s,patchFlag:c}=t,l=a.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?ti(r,o,l):!!o;if(c&8){let e=t.dynamicProps;for(let t=0;t<e.length;t++){let n=e[t];if(ni(o,r,n)&&!Xr(l,n))return!0}}}else return(i||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?ti(r,o,l):!0:!!o;return!1}function ti(e,t,n){let r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){let a=r[i];if(ni(t,e,a)&&!Xr(n,a))return!0}return!1}function ni(e,t,n){let r=e[n],i=t[n];return n===`style`&&v(r)&&v(i)?!ye(r,i):r!==i}function ri({vnode:e,parent:t,suspense:n},r){for(;t;){let n=t.subTree;if(n.suspense&&n.suspense.activeBranch===e&&(n.suspense.vnode.el=n.el=r,e=n),n===e)(e=t.vnode).el=r,t=t.parent;else break}n&&n.activeBranch===e&&(n.vnode.el=r)}var ii={},ai=()=>Object.create(ii),oi=e=>Object.getPrototypeOf(e)===ii;function si(e,t,n,r=!1){let i={},a=ai();e.propsDefaults=Object.create(null),li(e,t,i,a);for(let t in e.propsOptions[0])t in i||(i[t]=void 0);n?e.props=r?i:Nt(i):e.type.props?e.props=i:e.props=a,e.attrs=a}function ci(e,t,n,r){let{props:i,attrs:a,vnode:{patchFlag:o}}=e,s=L(i),[c]=e.propsOptions,l=!1;if((r||o>0)&&!(o&16)){if(o&8){let n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let o=n[r];if(Xr(e.emitsOptions,o))continue;let d=t[o];if(c)if(u(a,o))d!==a[o]&&(a[o]=d,l=!0);else{let t=E(o);i[t]=ui(c,s,t,d,e,!1)}else d!==a[o]&&(a[o]=d,l=!0)}}}else{li(e,t,i,a)&&(l=!0);let r;for(let a in s)(!t||!u(t,a)&&((r=D(a))===a||!u(t,r)))&&(c?n&&(n[a]!==void 0||n[r]!==void 0)&&(i[a]=ui(c,s,a,void 0,e,!0)):delete i[a]);if(a!==s)for(let e in a)(!t||!u(t,e))&&(delete a[e],l=!0)}l&&Ze(e.attrs,`set`,``)}function li(e,n,r,i){let[a,o]=e.propsOptions,s=!1,c;if(n)for(let t in n){if(T(t))continue;let l=n[t],d;a&&u(a,d=E(t))?!o||!o.includes(d)?r[d]=l:(c||={})[d]=l:Xr(e.emitsOptions,t)||(!(t in i)||l!==i[t])&&(i[t]=l,s=!0)}if(o){let n=L(r),i=c||t;for(let t=0;t<o.length;t++){let s=o[t];r[s]=ui(a,n,s,i[s],e,!u(i,s))}}return s}function ui(e,t,n,r,i,a){let o=e[n];if(o!=null){let e=u(o,`default`);if(e&&r===void 0){let e=o.default;if(o.type!==Function&&!o.skipFactory&&h(e)){let{propsDefaults:a}=i;if(n in a)r=a[n];else{let o=la(i);r=a[n]=e.call(null,t),o()}}else r=e;i.ce&&i.ce._setProp(n,r)}o[0]&&(a&&!e?r=!1:o[1]&&(r===``||r===D(n))&&(r=!0))}return r}var di=new WeakMap;function fi(e,r,i=!1){let a=i?di:r.propsCache,o=a.get(e);if(o)return o;let c=e.props,l={},f=[],p=!1;if(!h(e)){let t=e=>{p=!0;let[t,n]=fi(e,r,!0);s(l,t),n&&f.push(...n)};!i&&r.mixins.length&&r.mixins.forEach(t),e.extends&&t(e.extends),e.mixins&&e.mixins.forEach(t)}if(!c&&!p)return v(e)&&a.set(e,n),n;if(d(c))for(let e=0;e<c.length;e++){let n=E(c[e]);pi(n)&&(l[n]=t)}else if(c)for(let e in c){let t=E(e);if(pi(t)){let n=c[e],r=l[t]=d(n)||h(n)?{type:n}:s({},n),i=r.type,a=!1,o=!0;if(d(i))for(let e=0;e<i.length;++e){let t=i[e],n=h(t)&&t.name;if(n===`Boolean`){a=!0;break}else n===`String`&&(o=!1)}else a=h(i)&&i.name===`Boolean`;r[0]=a,r[1]=o,(a||u(r,`default`))&&f.push(t)}}let m=[l,f];return v(e)&&a.set(e,m),m}function pi(e){return e[0]!==`$`&&!T(e)}var mi=e=>e===`_`||e===`_ctx`||e===`$stable`,hi=e=>d(e)?e.map(Qi):[Qi(e)],gi=(e,t,n)=>{if(t._n)return t;let r=wn((...e)=>hi(t(...e)),n);return r._c=!1,r},_i=(e,t,n)=>{let r=e._ctx;for(let n in e){if(mi(n))continue;let i=e[n];if(h(i))t[n]=gi(n,i,r);else if(i!=null){let e=hi(i);t[n]=()=>e}}},vi=(e,t)=>{let n=hi(t);e.slots.default=()=>n},yi=(e,t,n)=>{for(let r in t)(n||!mi(r))&&(e[r]=t[r])},bi=(e,t,n)=>{let r=e.slots=ai();if(e.vnode.shapeFlag&32){let e=t._;e?(yi(r,t,n),n&&k(r,`_`,e,!0)):_i(t,r)}else t&&vi(e,t)},xi=(e,n,r)=>{let{vnode:i,slots:a}=e,o=!0,s=t;if(i.shapeFlag&32){let e=n._;e?r&&e===1?o=!1:yi(a,n,r):(o=!n.$stable,_i(n,a)),s=n}else n&&(vi(e,n),s={default:1});if(o)for(let e in a)!mi(e)&&s[e]==null&&delete a[e]},W=Ni;function Si(e){return Ci(e)}function Ci(e,i){let a=le();a.__VUE__=!0;let{insert:o,remove:s,patchProp:c,createElement:l,createText:u,createComment:d,setText:f,setElementText:p,parentNode:m,nextSibling:h,setScopeId:g=r,insertStaticContent:_}=e,v=(e,t,n,r=null,i=null,a=null,o=void 0,s=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!Ui(e,t)&&(r=ve(e),me(e,i,a,!0),e=null),t.patchFlag===-2&&(c=!1,t.dynamicChildren=null);let{type:l,ref:u,shapeFlag:d}=t;switch(l){case Pi:y(e,t,n,r);break;case K:b(e,t,n,r);break;case Fi:e??x(t,n,r,o);break;case G:ie(e,t,n,r,i,a,o,s,c);break;default:d&1?w(e,t,n,r,i,a,o,s,c):d&6?O(e,t,n,r,i,a,o,s,c):(d&64||d&128)&&l.process(e,t,n,r,i,a,o,s,c,j)}u!=null&&i?tr(u,e&&e.ref,a,t||e,!t):u==null&&e&&e.ref!=null&&tr(e.ref,null,a,e,!0)},y=(e,t,n,r)=>{if(e==null)o(t.el=u(t.children),n,r);else{let n=t.el=e.el;t.children!==e.children&&f(n,t.children)}},b=(e,t,n,r)=>{e==null?o(t.el=d(t.children||``),n,r):t.el=e.el},x=(e,t,n,r)=>{[e.el,e.anchor]=_(e.children,t,n,r,e.el,e.anchor)},S=({el:e,anchor:t},n,r)=>{let i;for(;e&&e!==t;)i=h(e),o(e,n,r),e=i;o(t,n,r)},C=({el:e,anchor:t})=>{let n;for(;e&&e!==t;)n=h(e),s(e),e=n;s(t)},w=(e,t,n,r,i,a,o,s,c)=>{if(t.type===`svg`?o=`svg`:t.type===`math`&&(o=`mathml`),e==null)ee(t,n,r,i,a,o,s,c);else{let n=e.el&&e.el._isVueCE?e.el:null;try{n&&n._beginPatch(),ne(e,t,i,a,o,s,c)}finally{n&&n._endPatch()}}},ee=(e,t,n,r,i,a,s,u)=>{let d,f,{props:m,shapeFlag:h,transition:g,dirs:_}=e;if(d=e.el=l(e.type,a,m&&m.is,m),h&8?p(d,e.children):h&16&&E(e.children,d,null,r,i,wi(e,a),s,u),_&&Tn(e,null,r,`created`),te(d,e,e.scopeId,s,r),m){for(let e in m)e!==`value`&&!T(e)&&c(d,e,null,m[e],a,r);`value`in m&&c(d,`value`,null,m.value,a),(f=m.onVnodeBeforeMount)&&na(f,r,e)}_&&Tn(e,null,r,`beforeMount`);let v=Ei(i,g);v&&g.beforeEnter(d),o(d,t,n),((f=m&&m.onVnodeMounted)||v||_)&&W(()=>{try{f&&na(f,r,e),v&&g.enter(d),_&&Tn(e,null,r,`mounted`)}finally{}},i)},te=(e,t,n,r,i)=>{if(n&&g(e,n),r)for(let t=0;t<r.length;t++)g(e,r[t]);if(i){let n=i.subTree;if(t===n||Mi(n.type)&&(n.ssContent===t||n.ssFallback===t)){let t=i.vnode;te(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},E=(e,t,n,r,i,a,o,s,c=0)=>{for(let l=c;l<e.length;l++)v(null,e[l]=s?$i(e[l]):Qi(e[l]),t,n,r,i,a,o,s)},ne=(e,n,r,i,a,o,s)=>{let l=n.el=e.el,{patchFlag:u,dynamicChildren:d,dirs:f}=n;u|=e.patchFlag&16;let m=e.props||t,h=n.props||t,g;if(r&&Ti(r,!1),(g=h.onVnodeBeforeUpdate)&&na(g,r,n,e),f&&Tn(n,e,r,`beforeUpdate`),r&&Ti(r,!0),(m.innerHTML&&h.innerHTML==null||m.textContent&&h.textContent==null)&&p(l,``),d?D(e.dynamicChildren,d,l,r,i,wi(n,a),o):s||ue(e,n,l,null,r,i,wi(n,a),o,!1),u>0){if(u&16)re(l,m,h,r,a);else if(u&2&&m.class!==h.class&&c(l,`class`,null,h.class,a),u&4&&c(l,`style`,m.style,h.style,a),u&8){let e=n.dynamicProps;for(let t=0;t<e.length;t++){let n=e[t],i=m[n],o=h[n];(o!==i||n===`value`)&&c(l,n,i,o,a,r)}}u&1&&e.children!==n.children&&p(l,n.children)}else !s&&d==null&&re(l,m,h,r,a);((g=h.onVnodeUpdated)||f)&&W(()=>{g&&na(g,r,n,e),f&&Tn(n,e,r,`updated`)},i)},D=(e,t,n,r,i,a,o)=>{for(let s=0;s<t.length;s++){let c=e[s],l=t[s];v(c,l,c.el&&(c.type===G||!Ui(c,l)||c.shapeFlag&198)?m(c.el):n,null,r,i,a,o,!0)}},re=(e,n,r,i,a)=>{if(n!==r){if(n!==t)for(let t in n)!T(t)&&!(t in r)&&c(e,t,n[t],null,a,i);for(let t in r){if(T(t))continue;let o=r[t],s=n[t];o!==s&&t!==`value`&&c(e,t,s,o,a,i)}`value`in r&&c(e,`value`,n.value,r.value,a)}},ie=(e,t,n,r,i,a,s,c,l)=>{let d=t.el=e?e.el:u(``),f=t.anchor=e?e.anchor:u(``),{patchFlag:p,dynamicChildren:m,slotScopeIds:h}=t;h&&(c=c?c.concat(h):h),e==null?(o(d,n,r),o(f,n,r),E(t.children||[],n,f,i,a,s,c,l)):p>0&&p&64&&m&&e.dynamicChildren&&e.dynamicChildren.length===m.length?(D(e.dynamicChildren,m,n,i,a,s,c),(t.key!=null||i&&t===i.subTree)&&Di(e,t,!0)):ue(e,t,n,f,i,a,s,c,l)},O=(e,t,n,r,i,a,o,s,c)=>{t.slotScopeIds=s,e==null?t.shapeFlag&512?i.ctx.activate(t,n,r,o,c):k(t,n,r,i,a,o,c):oe(e,t,c)},k=(e,t,n,r,i,a,o)=>{let s=e.component=aa(e,r,i);if(ir(e)&&(s.ctx.renderer=j),pa(s,!1,o),s.asyncDep){if(i&&i.registerDep(s,se,o),!e.el){let r=s.subTree=Z(K);b(null,r,t,n),e.placeholder=r.el}}else se(s,e,t,n,i,a,o)},oe=(e,t,n)=>{let r=t.component=e.component;if(ei(e,t,n))if(r.asyncDep&&!r.asyncResolved){ce(r,t,n);return}else r.next=t,r.update();else t.el=e.el,r.vnode=t},se=(e,t,n,r,i,a,o)=>{let s=()=>{if(e.isMounted){let{next:t,bu:n,u:r,parent:s,vnode:c}=e;{let n=ki(e);if(n){t&&(t.el=c.el,ce(e,t,o)),n.asyncDep.then(()=>{W(()=>{e.isUnmounted||l()},i)});return}}let u=t,d;Ti(e,!1),t?(t.el=c.el,ce(e,t,o)):t=c,n&&ae(n),(d=t.props&&t.props.onVnodeBeforeUpdate)&&na(d,s,t,c),Ti(e,!0);let f=Zr(e),p=e.subTree;e.subTree=f,v(p,f,m(p.el),ve(p),e,i,a),t.el=f.el,u===null&&ri(e,f.el),r&&W(r,i),(d=t.props&&t.props.onVnodeUpdated)&&W(()=>na(d,s,t,c),i)}else{let o,{el:s,props:c}=t,{bm:l,m:u,parent:d,root:f,type:p}=e,m=rr(t);if(Ti(e,!1),l&&ae(l),!m&&(o=c&&c.onVnodeBeforeMount)&&na(o,d,t),Ti(e,!0),s&&Se){let t=()=>{e.subTree=Zr(e),Se(s,e.subTree,e,i,null)};m&&p.__asyncHydrate?p.__asyncHydrate(s,e,t):t()}else{f.ce&&f.ce._hasShadowRoot()&&f.ce._injectChildStyle(p,e.parent?e.parent.type:void 0);let o=e.subTree=Zr(e);v(null,o,n,r,e,i,a),t.el=o.el}if(u&&W(u,i),!m&&(o=c&&c.onVnodeMounted)){let e=t;W(()=>na(o,d,e),i)}(t.shapeFlag&256||d&&rr(d.vnode)&&d.vnode.shapeFlag&256)&&e.a&&W(e.a,i),e.isMounted=!0,t=n=r=null}};e.scope.on();let c=e.effect=new Ee(s);e.scope.off();let l=e.update=c.run.bind(c),u=e.job=c.runIfDirty.bind(c);u.i=e,u.id=e.uid,c.scheduler=()=>mn(u),Ti(e,!0),l()},ce=(e,t,n)=>{t.component=e;let r=e.vnode.props;e.vnode=t,e.next=null,ci(e,t.props,r,n),xi(e,t.children,n),Be(),_n(e),Ve()},ue=(e,t,n,r,i,a,o,s,c=!1)=>{let l=e&&e.children,u=e?e.shapeFlag:0,d=t.children,{patchFlag:f,shapeFlag:m}=t;if(f>0){if(f&128){fe(l,d,n,r,i,a,o,s,c);return}else if(f&256){de(l,d,n,r,i,a,o,s,c);return}}m&8?(u&16&&_e(l,i,a),d!==l&&p(n,d)):u&16?m&16?fe(l,d,n,r,i,a,o,s,c):_e(l,i,a,!0):(u&8&&p(n,``),m&16&&E(d,n,r,i,a,o,s,c))},de=(e,t,r,i,a,o,s,c,l)=>{e||=n,t||=n;let u=e.length,d=t.length,f=Math.min(u,d),p;for(p=0;p<f;p++){let n=t[p]=l?$i(t[p]):Qi(t[p]);v(e[p],n,r,null,a,o,s,c,l)}u>d?_e(e,a,o,!0,!1,f):E(t,r,i,a,o,s,c,l,f)},fe=(e,t,r,i,a,o,s,c,l)=>{let u=0,d=t.length,f=e.length-1,p=d-1;for(;u<=f&&u<=p;){let n=e[u],i=t[u]=l?$i(t[u]):Qi(t[u]);if(Ui(n,i))v(n,i,r,null,a,o,s,c,l);else break;u++}for(;u<=f&&u<=p;){let n=e[f],i=t[p]=l?$i(t[p]):Qi(t[p]);if(Ui(n,i))v(n,i,r,null,a,o,s,c,l);else break;f--,p--}if(u>f){if(u<=p){let e=p+1,n=e<d?t[e].el:i;for(;u<=p;)v(null,t[u]=l?$i(t[u]):Qi(t[u]),r,n,a,o,s,c,l),u++}}else if(u>p)for(;u<=f;)me(e[u],a,o,!0),u++;else{let m=u,h=u,g=new Map;for(u=h;u<=p;u++){let e=t[u]=l?$i(t[u]):Qi(t[u]);e.key!=null&&g.set(e.key,u)}let _,y=0,b=p-h+1,x=!1,S=0,C=Array(b);for(u=0;u<b;u++)C[u]=0;for(u=m;u<=f;u++){let n=e[u];if(y>=b){me(n,a,o,!0);continue}let i;if(n.key!=null)i=g.get(n.key);else for(_=h;_<=p;_++)if(C[_-h]===0&&Ui(n,t[_])){i=_;break}i===void 0?me(n,a,o,!0):(C[i-h]=u+1,i>=S?S=i:x=!0,v(n,t[i],r,null,a,o,s,c,l),y++)}let w=x?Oi(C):n;for(_=w.length-1,u=b-1;u>=0;u--){let e=h+u,n=t[e],f=t[e+1],p=e+1<d?f.el||ji(f):i;C[u]===0?v(null,n,r,p,a,o,s,c,l):x&&(_<0||u!==w[_]?pe(n,r,p,2):_--)}}},pe=(e,t,n,r,i=null)=>{let{el:a,type:c,transition:l,children:u,shapeFlag:d}=e;if(d&6){pe(e.component.subTree,t,n,r);return}if(d&128){e.suspense.move(t,n,r);return}if(d&64){c.move(e,t,n,j);return}if(c===G){o(a,t,n);for(let e=0;e<u.length;e++)pe(u[e],t,n,r);o(e.anchor,t,n);return}if(c===Fi){S(e,t,n);return}if(r!==2&&d&1&&l)if(r===0)l.beforeEnter(a),o(a,t,n),W(()=>l.enter(a),i);else{let{leave:r,delayLeave:i,afterLeave:c}=l,u=()=>{e.ctx.isUnmounted?s(a):o(a,t,n)},d=()=>{a._isLeaving&&a[In](!0),r(a,()=>{u(),c&&c()})};i?i(a,u,d):d()}else o(a,t,n)},me=(e,t,n,r=!1,i=!1)=>{let{type:a,props:o,ref:s,children:c,dynamicChildren:l,shapeFlag:u,patchFlag:d,dirs:f,cacheIndex:p,memo:m}=e;if(d===-2&&(i=!1),s!=null&&(Be(),tr(s,null,n,e,!0),Ve()),p!=null&&(t.renderCache[p]=void 0),u&256){t.ctx.deactivate(e);return}let h=u&1&&f,g=!rr(e),_;if(g&&(_=o&&o.onVnodeBeforeUnmount)&&na(_,t,e),u&6)ge(e.component,n,r);else{if(u&128){e.suspense.unmount(n,r);return}h&&Tn(e,null,t,`beforeUnmount`),u&64?e.type.remove(e,t,n,j,r):l&&!l.hasOnce&&(a!==G||d>0&&d&64)?_e(l,t,n,!1,!0):(a===G&&d&384||!i&&u&16)&&_e(c,t,n),r&&A(e)}let v=m!=null&&p==null;(g&&(_=o&&o.onVnodeUnmounted)||h||v)&&W(()=>{_&&na(_,t,e),h&&Tn(e,null,t,`unmounted`),v&&(e.el=null)},n)},A=e=>{let{type:t,el:n,anchor:r,transition:i}=e;if(t===G){he(n,r);return}if(t===Fi){C(e);return}let a=()=>{s(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(e.shapeFlag&1&&i&&!i.persisted){let{leave:t,delayLeave:r}=i,o=()=>t(n,a);r?r(e.el,a,o):o()}else a()},he=(e,t)=>{let n;for(;e!==t;)n=h(e),s(e),e=n;s(t)},ge=(e,t,n)=>{let{bum:r,scope:i,job:a,subTree:o,um:s,m:c,a:l}=e;Ai(c),Ai(l),r&&ae(r),i.stop(),a&&(a.flags|=8,me(o,e,t,n)),s&&W(s,t),W(()=>{e.isUnmounted=!0},t)},_e=(e,t,n,r=!1,i=!1,a=0)=>{for(let o=a;o<e.length;o++)me(e[o],t,n,r,i)},ve=e=>{if(e.shapeFlag&6)return ve(e.component.subTree);if(e.shapeFlag&128)return e.suspense.next();let t=h(e.anchor||e.el),n=t&&t[Pn];return n?h(n):t},ye=!1,be=(e,t,n)=>{let r;e==null?t._vnode&&(me(t._vnode,null,null,!0),r=t._vnode.component):v(t._vnode||null,e,t,null,null,null,n),t._vnode=e,ye||=(ye=!0,_n(r),vn(),!1)},j={p:v,um:me,m:pe,r:A,mt:k,mc:E,pc:ue,pbc:D,n:ve,o:e},xe,Se;return i&&([xe,Se]=i(j)),{render:be,hydrate:xe,createApp:Wr(be,xe)}}function wi({type:e,props:t},n){return n===`svg`&&e===`foreignObject`||n===`mathml`&&e===`annotation-xml`&&t&&t.encoding&&t.encoding.includes(`html`)?void 0:n}function Ti({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Ei(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Di(e,t,n=!1){let r=e.children,i=t.children;if(d(r)&&d(i))for(let e=0;e<r.length;e++){let t=r[e],a=i[e];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[e]=$i(i[e]),a.el=t.el),!n&&a.patchFlag!==-2&&Di(t,a)),a.type===Pi&&(a.patchFlag===-1&&(a=i[e]=$i(a)),a.el=t.el),a.type===K&&!a.el&&(a.el=t.el)}}function Oi(e){let t=e.slice(),n=[0],r,i,a,o,s,c=e.length;for(r=0;r<c;r++){let c=e[r];if(c!==0){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}for(a=0,o=n.length-1;a<o;)s=a+o>>1,e[n[s]]<c?a=s+1:o=s;c<e[n[a]]&&(a>0&&(t[r]=n[a-1]),n[a]=r)}}for(a=n.length,o=n[a-1];a-- >0;)n[a]=o,o=t[o];return n}function ki(e){let t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:ki(t)}function Ai(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function ji(e){if(e.placeholder)return e.placeholder;let t=e.component;return t?ji(t.subTree):null}var Mi=e=>e.__isSuspense;function Ni(e,t){t&&t.pendingBranch?d(e)?t.effects.push(...e):t.effects.push(e):gn(e)}var G=Symbol.for(`v-fgt`),Pi=Symbol.for(`v-txt`),K=Symbol.for(`v-cmt`),Fi=Symbol.for(`v-stc`),Ii=[],q=null;function J(e=!1){Ii.push(q=e?null:[])}function Li(){Ii.pop(),q=Ii[Ii.length-1]||null}var Ri=1;function zi(e,t=!1){Ri+=e,e<0&&q&&t&&(q.hasOnce=!0)}function Bi(e){return e.dynamicChildren=Ri>0?q||n:null,Li(),Ri>0&&q&&q.push(e),e}function Y(e,t,n,r,i,a){return Bi(X(e,t,n,r,i,a,!0))}function Vi(e,t,n,r,i){return Bi(Z(e,t,n,r,i,!0))}function Hi(e){return e?e.__v_isVNode===!0:!1}function Ui(e,t){return e.type===t.type&&e.key===t.key}var Wi=({key:e})=>e??null,Gi=({ref:e,ref_key:t,ref_for:n})=>(typeof e==`number`&&(e=``+e),e==null?null:g(e)||z(e)||h(e)?{i:xn,r:e,k:t,f:!!n}:e);function X(e,t=null,n=null,r=0,i=null,a=e===G?0:1,o=!1,s=!1){let c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Wi(t),ref:t&&Gi(t),scopeId:Sn,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:xn};return s?(ea(c,n),a&128&&e.normalize(c)):n&&(c.shapeFlag|=g(n)?8:16),Ri>0&&!o&&q&&(c.patchFlag>0||a&6)&&c.patchFlag!==32&&q.push(c),c}var Z=Ki;function Ki(e,t=null,n=null,r=0,i=null,a=!1){if((!e||e===xr)&&(e=K),Hi(e)){let r=Ji(e,t,!0);return n&&ea(r,n),Ri>0&&!a&&q&&(r.shapeFlag&6?q[q.indexOf(e)]=r:q.push(r)),r.patchFlag=-2,r}if(Sa(e)&&(e=e.__vccOpts),t){t=qi(t);let{class:e,style:n}=t;e&&!g(e)&&(t.class=A(e)),v(n)&&(Rt(n)&&!d(n)&&(n=s({},n)),t.style=ue(n))}let o=g(e)?1:Mi(e)?128:Fn(e)?64:v(e)?4:h(e)?2:0;return X(e,t,n,r,i,o,a,!0)}function qi(e){return e?Rt(e)||oi(e)?s({},e):e:null}function Ji(e,t,n=!1,r=!1){let{props:i,ref:a,patchFlag:o,children:s,transition:c}=e,l=t?ta(i||{},t):i,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&Wi(l),ref:t&&t.ref?n&&a?d(a)?a.concat(Gi(t)):[a,Gi(t)]:Gi(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:s,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==G?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Ji(e.ssContent),ssFallback:e.ssFallback&&Ji(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&r&&Jn(u,c.clone(u)),u}function Yi(e=` `,t=0){return Z(Pi,null,e,t)}function Xi(e,t){let n=Z(Fi,null,e);return n.staticCount=t,n}function Zi(e=``,t=!1){return t?(J(),Vi(K,null,e)):Z(K,null,e)}function Qi(e){return e==null||typeof e==`boolean`?Z(K):d(e)?Z(G,null,e.slice()):Hi(e)?$i(e):Z(Pi,null,String(e))}function $i(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Ji(e)}function ea(e,t){let n=0,{shapeFlag:r}=e;if(t==null)t=null;else if(d(t))n=16;else if(typeof t==`object`)if(r&65){let n=t.default;n&&(n._c&&(n._d=!1),ea(e,n()),n._c&&(n._d=!0));return}else{n=32;let r=t._;!r&&!oi(t)?t._ctx=xn:r===3&&xn&&(xn.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else h(t)?(t={default:t,_ctx:xn},n=32):(t=String(t),r&64?(n=16,t=[Yi(t)]):n=8);e.children=t,e.shapeFlag|=n}function ta(...e){let t={};for(let n=0;n<e.length;n++){let r=e[n];for(let e in r)if(e===`class`)t.class!==r.class&&(t.class=A([t.class,r.class]));else if(e===`style`)t.style=ue([t.style,r.style]);else if(a(e)){let n=t[e],i=r[e];i&&n!==i&&!(d(n)&&n.includes(i))?t[e]=n?[].concat(n,i):i:i==null&&n==null&&!o(e)&&(t[e]=i)}else e!==``&&(t[e]=r[e])}return t}function na(e,t,n,r=null){B(e,t,7,[n,r])}var ra=Hr(),ia=0;function aa(e,n,r){let i=e.type,a=(n?n.appContext:e.appContext)||ra,o={uid:ia++,vnode:e,type:i,parent:n,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Ce(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(a.provides),ids:n?n.ids:[``,0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:fi(i,a),emitsOptions:Yr(i,a),emit:null,emitted:null,propsDefaults:t,inheritAttrs:i.inheritAttrs,ctx:t,data:t,props:t,attrs:t,slots:t,refs:t,setupState:t,setupContext:null,suspense:r,suspenseId:r?r.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=n?n.root:o,o.emit=qr.bind(null,o),e.ce&&e.ce(o),o}var Q=null,oa=()=>Q||xn,sa,ca;{let e=le(),t=(t,n)=>{let r;return(r=e[t])||(r=e[t]=[]),r.push(n),e=>{r.length>1?r.forEach(t=>t(e)):r[0](e)}};sa=t(`__VUE_INSTANCE_SETTERS__`,e=>Q=e),ca=t(`__VUE_SSR_SETTERS__`,e=>fa=e)}var la=e=>{let t=Q;return sa(e),e.scope.on(),()=>{e.scope.off(),sa(t)}},ua=()=>{Q&&Q.scope.off(),sa(null)};function da(e){return e.vnode.shapeFlag&4}var fa=!1;function pa(e,t=!1,n=!1){t&&ca(t);let{props:r,children:i}=e.vnode,a=da(e);si(e,r,a,t),bi(e,i,n||t);let o=a?ma(e,t):void 0;return t&&ca(!1),o}function ma(e,t){let n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Er);let{setup:r}=n;if(r){Be();let n=e.setupContext=r.length>1?ba(e):null,i=la(e),a=nn(r,e,0,[e.props,n]),o=y(a);if(Ve(),i(),(o||e.sp)&&!rr(e)&&Zn(e),o){if(a.then(ua,ua),t)return a.then(n=>{ha(e,n,t)}).catch(t=>{rn(t,e,0)});e.asyncDep=a}else ha(e,a,t)}else va(e,t)}function ha(e,t,n){h(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:v(t)&&(e.setupState=qt(t)),va(e,n)}var ga,_a;function va(e,t,n){let i=e.type;if(!e.render){if(!t&&ga&&!i.render){let t=i.template||Nr(e).template;if(t){let{isCustomElement:n,compilerOptions:r}=e.appContext.config,{delimiters:a,compilerOptions:o}=i;i.render=ga(t,s(s({isCustomElement:n,delimiters:a},r),o))}}e.render=i.render||r,_a&&_a(e)}{let t=la(e);Be();try{kr(e)}finally{Ve(),t()}}}var ya={get(e,t){return F(e,`get`,``),e[t]}};function ba(e){return{attrs:new Proxy(e.attrs,ya),slots:e.slots,emit:e.emit,expose:t=>{e.exposed=t||{}}}}function xa(e){return e.exposed?e.exposeProxy||=new Proxy(qt(zt(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in wr)return wr[n](e)},has(e,t){return t in e||t in wr}}):e.proxy}function Sa(e){return h(e)&&`__vccOpts`in e}var $=(e,t)=>Yt(e,t,fa);function Ca(e,t,n){try{zi(-1);let r=arguments.length;return r===2?v(t)&&!d(t)?Hi(t)?Z(e,null,[t]):Z(e,t):Z(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Hi(n)&&(n=[n]),Z(e,t,n))}finally{zi(1)}}var wa=`3.5.34`,Ta=void 0,Ea=typeof window<`u`&&window.trustedTypes;if(Ea)try{Ta=Ea.createPolicy(`vue`,{createHTML:e=>e})}catch{}var Da=Ta?e=>Ta.createHTML(e):e=>e,Oa=`http://www.w3.org/2000/svg`,ka=`http://www.w3.org/1998/Math/MathML`,Aa=typeof document<`u`?document:null,ja=Aa&&Aa.createElement(`template`),Ma={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{let t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{let i=t===`svg`?Aa.createElementNS(Oa,e):t===`mathml`?Aa.createElementNS(ka,e):n?Aa.createElement(e,{is:n}):Aa.createElement(e);return e===`select`&&r&&r.multiple!=null&&i.setAttribute(`multiple`,r.multiple),i},createText:e=>Aa.createTextNode(e),createComment:e=>Aa.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Aa.querySelector(e),setScopeId(e,t){e.setAttribute(t,``)},insertStaticContent(e,t,n,r,i,a){let o=n?n.previousSibling:t.lastChild;if(i&&(i===a||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===a||!(i=i.nextSibling)););else{ja.innerHTML=Da(r===`svg`?`<svg>${e}</svg>`:r===`mathml`?`<math>${e}</math>`:e);let i=ja.content;if(r===`svg`||r===`mathml`){let e=i.firstChild;for(;e.firstChild;)i.appendChild(e.firstChild);i.removeChild(e)}t.insertBefore(i,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Na=`transition`,Pa=`animation`,Fa=Symbol(`_vtc`),Ia={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},La=s({},zn,Ia),Ra=(e=>(e.displayName=`Transition`,e.props=La,e))((e,{slots:t})=>Ca(Un,Va(e),t)),za=(e,t=[])=>{d(e)?e.forEach(e=>e(...t)):e&&e(...t)},Ba=e=>e?d(e)?e.some(e=>e.length>1):e.length>1:!1;function Va(e){let t={};for(let n in e)n in Ia||(t[n]=e[n]);if(e.css===!1)return t;let{name:n=`v`,type:r,duration:i,enterFromClass:a=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:l=a,appearActiveClass:u=o,appearToClass:d=c,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:m=`${n}-leave-to`}=e,h=Ha(i),g=h&&h[0],_=h&&h[1],{onBeforeEnter:v,onEnter:y,onEnterCancelled:b,onLeave:x,onLeaveCancelled:S,onBeforeAppear:C=v,onAppear:w=y,onAppearCancelled:T=b}=t,ee=(e,t,n,r)=>{e._enterCancelled=r,Ga(e,t?d:c),Ga(e,t?u:o),n&&n()},te=(e,t)=>{e._isLeaving=!1,Ga(e,f),Ga(e,m),Ga(e,p),t&&t()},E=e=>(t,n)=>{let i=e?w:y,o=()=>ee(t,e,n);za(i,[t,o]),Ka(()=>{Ga(t,e?l:a),Wa(t,e?d:c),Ba(i)||Ja(t,r,g,o)})};return s(t,{onBeforeEnter(e){za(v,[e]),Wa(e,a),Wa(e,o)},onBeforeAppear(e){za(C,[e]),Wa(e,l),Wa(e,u)},onEnter:E(!1),onAppear:E(!0),onLeave(e,t){e._isLeaving=!0;let n=()=>te(e,t);Wa(e,f),e._enterCancelled?(Wa(e,p),Qa(e)):(Qa(e),Wa(e,p)),Ka(()=>{e._isLeaving&&(Ga(e,f),Wa(e,m),Ba(x)||Ja(e,r,_,n))}),za(x,[e,n])},onEnterCancelled(e){ee(e,!1,void 0,!0),za(b,[e])},onAppearCancelled(e){ee(e,!0,void 0,!0),za(T,[e])},onLeaveCancelled(e){te(e),za(S,[e])}})}function Ha(e){if(e==null)return null;if(v(e))return[Ua(e.enter),Ua(e.leave)];{let t=Ua(e);return[t,t]}}function Ua(e){return se(e)}function Wa(e,t){t.split(/\s+/).forEach(t=>t&&e.classList.add(t)),(e[Fa]||(e[Fa]=new Set)).add(t)}function Ga(e,t){t.split(/\s+/).forEach(t=>t&&e.classList.remove(t));let n=e[Fa];n&&(n.delete(t),n.size||(e[Fa]=void 0))}function Ka(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}var qa=0;function Ja(e,t,n,r){let i=e._endId=++qa,a=()=>{i===e._endId&&r()};if(n!=null)return setTimeout(a,n);let{type:o,timeout:s,propCount:c}=Ya(e,t);if(!o)return r();let l=o+`end`,u=0,d=()=>{e.removeEventListener(l,f),a()},f=t=>{t.target===e&&++u>=c&&d()};setTimeout(()=>{u<c&&d()},s+1),e.addEventListener(l,f)}function Ya(e,t){let n=window.getComputedStyle(e),r=e=>(n[e]||``).split(`, `),i=r(`${Na}Delay`),a=r(`${Na}Duration`),o=Xa(i,a),s=r(`${Pa}Delay`),c=r(`${Pa}Duration`),l=Xa(s,c),u=null,d=0,f=0;t===Na?o>0&&(u=Na,d=o,f=a.length):t===Pa?l>0&&(u=Pa,d=l,f=c.length):(d=Math.max(o,l),u=d>0?o>l?Na:Pa:null,f=u?u===Na?a.length:c.length:0);let p=u===Na&&/\b(?:transform|all)(?:,|$)/.test(r(`${Na}Property`).toString());return{type:u,timeout:d,propCount:f,hasTransform:p}}function Xa(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((t,n)=>Za(t)+Za(e[n])))}function Za(e){return e===`auto`?0:Number(e.slice(0,-1).replace(`,`,`.`))*1e3}function Qa(e){return(e?e.ownerDocument:document).body.offsetHeight}function $a(e,t,n){let r=e[Fa];r&&(t=(t?[t,...r]:[...r]).join(` `)),t==null?e.removeAttribute(`class`):n?e.setAttribute(`class`,t):e.className=t}var eo=Symbol(`_vod`),to=Symbol(`_vsh`),no=Symbol(``),ro=/(?:^|;)\s*display\s*:/;function io(e,t,n){let r=e.style,i=g(n),a=!1;if(n&&!i){if(t)if(g(t))for(let e of t.split(`;`)){let t=e.slice(0,e.indexOf(`:`)).trim();n[t]??oo(r,t,``)}else for(let e in t)n[e]??oo(r,e,``);for(let i in n){i===`display`&&(a=!0);let o=n[i];o==null?oo(r,i,``):uo(e,i,!g(t)&&t?t[i]:void 0,o)||oo(r,i,o)}}else if(i){if(t!==n){let e=r[no];e&&(n+=`;`+e),r.cssText=n,a=ro.test(n)}}else t&&e.removeAttribute(`style`);eo in e&&(e[eo]=a?r.display:``,e[to]&&(r.display=`none`))}var ao=/\s*!important$/;function oo(e,t,n){if(d(n))n.forEach(n=>oo(e,t,n));else if(n??=``,t.startsWith(`--`))e.setProperty(t,n);else{let r=lo(e,t);ao.test(n)?e.setProperty(D(r),n.replace(ao,``),`important`):e[r]=n}}var so=[`Webkit`,`Moz`,`ms`],co={};function lo(e,t){let n=co[t];if(n)return n;let r=E(t);if(r!==`filter`&&r in e)return co[t]=r;r=re(r);for(let n=0;n<so.length;n++){let i=so[n]+r;if(i in e)return co[t]=i}return t}function uo(e,t,n,r){return e.tagName===`TEXTAREA`&&(t===`width`||t===`height`)&&g(r)&&n===r}var fo=`http://www.w3.org/1999/xlink`;function po(e,t,n,r,i,a=ge(t)){r&&t.startsWith(`xlink:`)?n==null?e.removeAttributeNS(fo,t.slice(6,t.length)):e.setAttributeNS(fo,t,n):n==null||a&&!_e(n)?e.removeAttribute(t):e.setAttribute(t,a?``:_(n)?String(n):n)}function mo(e,t,n,r,i){if(t===`innerHTML`||t===`textContent`){n!=null&&(e[t]=t===`innerHTML`?Da(n):n);return}let a=e.tagName;if(t===`value`&&a!==`PROGRESS`&&!a.includes(`-`)){let r=a===`OPTION`?e.getAttribute(`value`)||``:e.value,i=n==null?e.type===`checkbox`?`on`:``:String(n);(r!==i||!(`_value`in e))&&(e.value=i),n??e.removeAttribute(t),e._value=n;return}let o=!1;if(n===``||n==null){let r=typeof e[t];r===`boolean`?n=_e(n):n==null&&r===`string`?(n=``,o=!0):r===`number`&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(i||t)}function ho(e,t,n,r){e.addEventListener(t,n,r)}function go(e,t,n,r){e.removeEventListener(t,n,r)}var _o=Symbol(`_vei`);function vo(e,t,n,r,i=null){let a=e[_o]||(e[_o]={}),o=a[t];if(r&&o)o.value=r;else{let[n,s]=bo(t);r?ho(e,n,a[t]=wo(r,i),s):o&&(go(e,n,o,s),a[t]=void 0)}}var yo=/(?:Once|Passive|Capture)$/;function bo(e){let t;if(yo.test(e)){t={};let n;for(;n=e.match(yo);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[e[2]===`:`?e.slice(3):D(e.slice(2)),t]}var xo=0,So=Promise.resolve(),Co=()=>xo||=(So.then(()=>xo=0),Date.now());function wo(e,t){let n=e=>{if(!e._vts)e._vts=Date.now();else if(e._vts<=n.attached)return;B(To(e,n.value),t,5,[e])};return n.value=e,n.attached=Co(),n}function To(e,t){if(d(t)){let n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(e=>t=>!t._stopped&&e&&e(t))}else return t}var Eo=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Do=(e,t,n,r,i,s)=>{let c=i===`svg`;t===`class`?$a(e,r,c):t===`style`?io(e,n,r):a(t)?o(t)||vo(e,t,n,r,s):(t[0]===`.`?(t=t.slice(1),!0):t[0]===`^`?(t=t.slice(1),!1):Oo(e,t,r,c))?(mo(e,t,r),!e.tagName.includes(`-`)&&(t===`value`||t===`checked`||t===`selected`)&&po(e,t,r,c,s,t!==`value`)):e._isVueCE&&(ko(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!g(r)))?mo(e,E(t),r,s,t):(t===`true-value`?e._trueValue=r:t===`false-value`&&(e._falseValue=r),po(e,t,r,c))};function Oo(e,t,n,r){if(r)return!!(t===`innerHTML`||t===`textContent`||t in e&&Eo(t)&&h(n));if(t===`spellcheck`||t===`draggable`||t===`translate`||t===`autocorrect`||t===`sandbox`&&e.tagName===`IFRAME`||t===`form`||t===`list`&&e.tagName===`INPUT`||t===`type`&&e.tagName===`TEXTAREA`)return!1;if(t===`width`||t===`height`){let t=e.tagName;if(t===`IMG`||t===`VIDEO`||t===`CANVAS`||t===`SOURCE`)return!1}return Eo(t)&&g(n)?!1:t in e}function ko(e,t){let n=e._def.props;if(!n)return!1;let r=E(t);return Array.isArray(n)?n.some(e=>E(e)===r):Object.keys(n).some(e=>E(e)===r)}var Ao=s({patchProp:Do},Ma),jo;function Mo(){return jo||=Si(Ao)}var No=((...e)=>{let t=Mo().createApp(...e),{mount:n}=t;return t.mount=e=>{let r=Fo(e);if(!r)return;let i=t._component;!h(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent=``);let a=n(r,!1,Po(r));return r instanceof Element&&(r.removeAttribute(`v-cloak`),r.setAttribute(`data-v-app`,``)),a},t});function Po(e){if(e instanceof SVGElement)return`svg`;if(typeof MathMLElement==`function`&&e instanceof MathMLElement)return`mathml`}function Fo(e){return g(e)?document.querySelector(e):e}var Io={mainstream:`主流 UI`,retro:`復古懷舊`,experimental:`實驗前衛`,cultural:`文化在地`,decorative:`裝飾性`,motion:`動態效果`},Lo={parallax:`視差`,"scroll-driven":`滾動`,reveal:`入場`,loop:`循環`,pointer:`指標`},Ro=[{slug:`design-glassmorphism`,name:{zh:`玻璃擬態`,en:`Glassmorphism`},category:`mainstream`,round:1,tags:[`frosted`,`translucent`,`2020s`],brief:`霧面玻璃、半透層次與微妙光暈，呈現未來感的清涼海邊夜場。`,status:`shipped`},{slug:`design-neumorphism`,name:{zh:`新擬物化`,en:`Neumorphism`},category:`mainstream`,round:1,tags:[`soft-ui`,`shadow`,`tactile`],brief:`柔和陰影與雕塑感介面，把音樂節做成像觸感極佳的精緻按鈕。`,status:`shipped`},{slug:`design-material-3`,name:{zh:`Material You`,en:`Material 3`},category:`mainstream`,round:1,tags:[`google`,`dynamic-color`,`elevation`],brief:`動態色彩、明確層階與圓角元件，是當代產品設計的學院派。`,status:`shipped`},{slug:`design-minimalism`,name:{zh:`極簡主義`,en:`Minimalism`},category:`mainstream`,round:1,tags:[`whitespace`,`mono`,`editorial`],brief:`大量留白、單色字體與精確排版，把音樂節呈現成藝廊邀請函。`,status:`shipped`},{slug:`design-dark-mode`,name:{zh:`沉浸暗黑`,en:`Immersive Dark`},category:`mainstream`,round:1,tags:[`dark`,`low-light`,`cinematic`],brief:`深色背景配低彩度發光，像深夜 livehouse 裡的 stage spotlight。`,status:`shipped`},{slug:`design-vaporwave`,name:{zh:`蒸氣波`,en:`Vaporwave`},category:`retro`,round:1,tags:[`80s`,`pastel`,`aesthetic`],brief:`粉紫漸層、希臘雕像與日文標題的網際網路懷舊美學。`,status:`shipped`},{slug:`design-y2k`,name:{zh:`Y2K 千禧`,en:`Y2K`},category:`retro`,round:1,tags:[`2000s`,`chrome`,`cyber-cute`],brief:`銀色金屬、半透塑膠與星型 sticker，把 1999 的網頁夢搬到 2026 海邊。`,status:`shipped`},{slug:`design-web1`,name:{zh:`90s Web 1.0`,en:`Web 1.0`},category:`retro`,round:1,tags:[`90s`,`tables`,`marquee`],brief:`系統字體、tile 背景與灰色按鈕，致敬 1996 年地理城市網頁。`,status:`shipped`},{slug:`design-american-retro-print`,name:{zh:`美式復古印刷`,en:`American Retro Print`},category:`retro`,round:1,tags:[`vintage`,`print`,`screen-print`],brief:`網點質感、油墨偏色與粗襯線標題，活脫像 1970 年代音樂海報。`,status:`shipped`},{slug:`design-synthwave`,name:{zh:`80s Synthwave`,en:`Synthwave`},category:`retro`,round:1,tags:[`80s`,`neon`,`grid`],brief:`霓虹線條、紫紅落日與賽車透視格線，演奏一場數位夕陽。`,status:`shipped`},{slug:`design-bauhaus`,name:{zh:`包浩斯`,en:`Bauhaus`},category:`retro`,round:1,tags:[`1920s`,`geometric`,`primary`],brief:`紅黃藍三色 + 圓三角方塊的幾何構成，向 100 年前的德國學院致敬。`,status:`shipped`},{slug:`design-brutalism`,name:{zh:`野獸派`,en:`Brutalism`},category:`experimental`,round:1,tags:[`raw`,`monospace`,`anti-design`],brief:`裸露結構、強烈對比與粗暴排版，故意違反所有 UX 學派。`,status:`shipped`},{slug:`design-glitch`,name:{zh:`故障藝術`,en:`Glitch Art`},category:`experimental`,round:1,tags:[`rgb-shift`,`distortion`,`noise`],brief:`RGB 錯位、掃描線與隨機破碎，像訊號被海風干擾的演唱會直播。`,status:`shipped`},{slug:`design-cyberpunk`,name:{zh:`賽博龐克`,en:`Cyberpunk`},category:`experimental`,round:1,tags:[`neon`,`dystopia`,`tech-noir`],brief:`霓虹粉藍配黑色背景、片假名與發光邊框的高科技反烏托邦。`,status:`shipped`},{slug:`design-constructivism`,name:{zh:`構成主義`,en:`Constructivism`},category:`experimental`,round:1,tags:[`russian`,`propaganda`,`diagonal`],brief:`紅黑斜切構圖、宣傳海報語法，把獨立音樂節做成革命口號。`,status:`shipped`},{slug:`design-ascii-terminal`,name:{zh:`ASCII 終端機`,en:`ASCII Terminal`},category:`experimental`,round:1,tags:[`monospace`,`green-phosphor`,`cli`],brief:`綠底螢光字、ASCII art 與 80x24 終端機美學，整個網頁是一台 PDP-11。`,status:`shipped`},{slug:`design-editorial`,name:{zh:`雜誌排版`,en:`Editorial Magazine`},category:`experimental`,round:1,tags:[`print`,`serif`,`grid`],brief:`12 欄網格、粗襯線標題與圖文混排，像翻開《Monocle》音樂特輯。`,status:`shipped`},{slug:`design-wabi-sabi`,name:{zh:`日式禪意`,en:`Wabi-Sabi`},category:`cultural`,round:1,tags:[`japan`,`minimal`,`natural`],brief:`米色紙質、墨色筆觸與留白構成，安靜得像京都茶室裡的音樂節。`,status:`shipped`},{slug:`design-chinoiserie`,name:{zh:`中國風國潮`,en:`Chinoiserie / Guochao`},category:`cultural`,round:1,tags:[`china`,`traditional`,`modern-fusion`],brief:`硃砂紅、墨黑、宋體字配水墨點綴，融合古典與當代潮流。`,status:`shipped`},{slug:`design-scandinavian`,name:{zh:`北歐極簡`,en:`Scandinavian`},category:`cultural`,round:1,tags:[`nordic`,`cozy`,`natural`],brief:`木質暖灰、無襯線清爽字體與北歐插畫，營造森林系音樂節。`,status:`shipped`},{slug:`design-swiss-international`,name:{zh:`瑞士國際風格`,en:`Swiss International`},category:`cultural`,round:1,tags:[`grid`,`helvetica`,`sans-serif`],brief:`左對齊網格、Helvetica 與紅色強調，二戰後最理性的排版革命。`,status:`shipped`},{slug:`design-taiwan-temple`,name:{zh:`台灣廟會`,en:`Taiwan Temple Carnival`},category:`cultural`,round:1,tags:[`taiwan`,`folk`,`festive`],brief:`霓虹招牌、紅黃對比與民俗符號，把音樂節辦成熱鬧的夜市廟口。`,status:`shipped`},{slug:`design-isometric-3d`,name:{zh:`等距 3D`,en:`Isometric 3D`},category:`decorative`,round:1,tags:[`3d`,`illustration`,`colorful`],brief:`30 度斜角的玩具世界、立體舞台與小人物插畫，整個音樂節變成樂高城。`,status:`shipped`},{slug:`design-hand-drawn`,name:{zh:`手繪塗鴉`,en:`Hand-Drawn Sketch`},category:`decorative`,round:1,tags:[`sketch`,`doodle`,`human`],brief:`彩色蠟筆、歪斜手寫字與隨意箭頭，像翻開設計師現場速寫本。`,status:`shipped`},{slug:`design-gradient-mesh`,name:{zh:`漸層 Mesh`,en:`Gradient Mesh`},category:`decorative`,round:1,tags:[`gradient`,`aurora`,`fluid`],brief:`流動曲線漸層、極光色彩與柔光球體，像把音樂節調進液態畫布。`,status:`shipped`},{slug:`motion-parallax-layers`,name:{zh:`多層視差`,en:`Parallax Layers`},category:`motion`,round:2,motionType:`parallax`,tags:[`parallax`,`depth`,`mountain`],brief:`滾動時三層山海以不同速度位移，呈現都蘭灣的縱深感。`,status:`shipped`},{slug:`motion-sticky-stack`,name:{zh:`Sticky 堆疊章節`,en:`Sticky Stack`},category:`motion`,round:2,motionType:`parallax`,tags:[`sticky`,`stack`,`apple-style`],brief:`每個章節先被釘住、再被下一章從底部疊上來，像 Apple AirPods 頁。`,status:`shipped`},{slug:`motion-horizontal-scroll`,name:{zh:`橫向滾動陣容`,en:`Horizontal Scroll`},category:`motion`,round:2,motionType:`parallax`,tags:[`horizontal`,`scroll-translate`,`lineup`],brief:`在 lineup 區段，垂直滾動會被轉換成 12 組樂團的橫向滑動。`,status:`shipped`},{slug:`motion-scroll-snap-acts`,name:{zh:`全屏章節切換`,en:`Scroll Snap Acts`},category:`motion`,round:2,motionType:`scroll-driven`,tags:[`scroll-snap`,`fullscreen`,`cinematic`],brief:`每個區段佔滿整個視窗，scroll-snap 強制吸附，像翻電影章節。`,status:`shipped`},{slug:`motion-scroll-progress`,name:{zh:`滾動進度指示`,en:`Scroll Progress`},category:`motion`,round:2,motionType:`scroll-driven`,tags:[`progress-bar`,`indicator`,`navigation`],brief:`頂部 progress bar + 側邊章節點陣，隨滾動點亮當下位置。`,status:`shipped`},{slug:`motion-marquee-band`,name:{zh:`滾動跑馬燈`,en:`Marquee Band`},category:`motion`,round:2,motionType:`scroll-driven`,tags:[`marquee`,`speed-modulated`,`lineup`],brief:`12 組樂團名巨型橫向跑動、滾動時會反向加速，產生時間感。`,status:`shipped`},{slug:`motion-fade-stagger`,name:{zh:`錯落淡入`,en:`Fade Stagger`},category:`motion`,round:2,motionType:`reveal`,tags:[`intersection-observer`,`stagger`,`wave`],brief:`卡片進入視窗時依序波浪式淡入位移，像被海浪推上岸。`,status:`shipped`},{slug:`motion-typewriter`,name:{zh:`打字機標題`,en:`Typewriter`},category:`motion`,round:2,motionType:`reveal`,tags:[`typewriter`,`cursor-blink`,`hero`],brief:`Hero 標題以打字機節奏一字一字浮現，段落隨之滑入。`,status:`shipped`},{slug:`motion-counter-burst`,name:{zh:`數字爆裂計數`,en:`Counter Burst`},category:`motion`,round:2,motionType:`reveal`,tags:[`counter`,`animate-numeric`,`about`],brief:`About 區的 6 屆 / 12 樂團 / 25,000 人次數字在滾入時從 0 跳動到目標值。`,status:`shipped`},{slug:`motion-aurora-flow`,name:{zh:`極光漸層流動`,en:`Aurora Flow`},category:`motion`,round:2,motionType:`loop`,tags:[`gradient`,`aurora`,`keyframes`],brief:`多色 radial-gradient 球體以 20s loop 緩慢流動，整面像呼吸的極光。`,status:`shipped`},{slug:`motion-floating-orbs`,name:{zh:`漂浮幾何球`,en:`Floating Orbs`},category:`motion`,round:2,motionType:`loop`,tags:[`floating`,`orbs`,`background`],brief:`背景的彩色幾何形體上下漂浮、時快時慢，給靜態頁面呼吸感。`,status:`shipped`},{slug:`motion-noise-grain`,name:{zh:`動態噪點`,en:`Noise Grain`},category:`motion`,round:2,motionType:`loop`,tags:[`noise`,`film-grain`,`hue-rotate`],brief:`電影顆粒感的動態噪點 + 緩慢色相旋轉，整頁像舊膠卷在播放。`,status:`shipped`},{slug:`motion-cursor-spotlight`,name:{zh:`滑鼠光暈`,en:`Cursor Spotlight`},category:`motion`,round:2,motionType:`pointer`,tags:[`cursor`,`spotlight`,`radial-gradient`],brief:`Hero 區暗背景上有顆光暈跟著滑鼠走，像舞台燈追樂手。`,status:`shipped`},{slug:`motion-tilt-cards`,name:{zh:`3D 傾斜卡片`,en:`Tilt Cards`},category:`motion`,round:2,motionType:`pointer`,tags:[`3d-transform`,`mouse-tilt`,`perspective`],brief:`12 張樂團卡會依滑鼠位置 3D 傾斜，像捧在手上的小相片。`,status:`shipped`},{slug:`motion-magnetic-cta`,name:{zh:`磁吸按鈕`,en:`Magnetic CTA`},category:`motion`,round:2,motionType:`pointer`,tags:[`magnetic`,`attraction`,`cta`],brief:`主 CTA 按鈕在滑鼠靠近時被輕輕吸過去，按鍵變成有重力的物件。`,status:`shipped`}];Ro.length;var zo=[`href`,`target`,`rel`,`aria-label`],Bo={class:`thumb`},Vo=[`src`,`alt`],Ho={key:2,class:`placeholder`},Uo={class:`category-chip`},Wo={key:3,class:`motion-chip`},Go={class:`meta`},Ko={class:`title-row`},qo={class:`title-zh`},Jo={class:`title-en`},Yo={class:`brief`},Xo={class:`tags`},Zo={class:`actions`},Qo=[`disabled`],$o=[`href`,`target`,`rel`,`aria-disabled`],es=Xn({__name:`WorkCard`,props:{work:{}},emits:[`open-skill`],setup(e){let t=e,n=`/claude-skill-design-gallery/`,r=$(()=>`${n}works/${t.work.slug}/index.html`),i=$(()=>`${n}works/${t.work.slug}/thumb.webp`),a=$(()=>`${n}works/${t.work.slug}/thumb.webm`),o=Qn(`video`),s=Vt(!1),c=Vt(!1);function l(){t.work.round!==2||t.work.status!==`shipped`||(s.value=!0,o.value&&!c.value&&(o.value.src=a.value,c.value=!0),c.value&&o.value&&(o.value.currentTime=0,o.value.play().catch(()=>{})))}function u(){t.work.round===2&&(s.value=!1,o.value&&o.value.pause())}return(t,n)=>(J(),Y(`article`,{class:A([`card`,{"is-planned":e.work.status===`planned`,"is-motion":e.work.round===2}]),onMouseenter:l,onMouseleave:u},[X(`a`,{class:`thumb-link`,href:e.work.status===`shipped`?r.value:void 0,target:e.work.status===`shipped`?`_blank`:void 0,rel:e.work.status===`shipped`?`noopener`:void 0,"aria-label":`開啟 ${e.work.name.zh} 作品`},[X(`div`,Bo,[e.work.status===`shipped`?(J(),Y(`img`,{key:0,src:i.value,alt:`${e.work.name.zh} 縮圖`,loading:`lazy`,decoding:`async`,class:A({"is-hidden":s.value&&c.value})},null,10,Vo)):Zi(``,!0),e.work.round===2&&e.work.status===`shipped`?(J(),Y(`video`,{key:1,ref:`video`,class:A([`thumb-video`,{"is-visible":s.value&&c.value}]),muted:``,loop:``,playsinline:``,preload:`none`},null,2)):Zi(``,!0),e.work.status===`planned`?(J(),Y(`div`,Ho,[...n[1]||=[X(`span`,{class:`placeholder-label`},`即將上線`,-1)]])):Zi(``,!0),X(`span`,Uo,j(Gt(Io)[e.work.category]),1),e.work.round===2&&e.work.motionType?(J(),Y(`span`,Wo,` ▸ `+j(Gt(Lo)[e.work.motionType]),1)):Zi(``,!0)])],8,zo),X(`div`,Go,[X(`div`,Ko,[X(`h3`,qo,j(e.work.name.zh),1),X(`span`,Jo,j(e.work.name.en),1)]),X(`p`,Yo,j(e.work.brief),1),X(`ul`,Xo,[(J(!0),Y(G,null,Sr(e.work.tags,e=>(J(),Y(`li`,{key:e},`#`+j(e),1))),128))]),X(`div`,Zo,[X(`button`,{class:`action skill`,disabled:e.work.status!==`shipped`,onClick:n[0]||=n=>t.$emit(`open-skill`,e.work)},[...n[2]||=[X(`span`,{class:`icon`},`📄`,-1),X(`span`,null,`查看 Skill`,-1)]],8,Qo),X(`a`,{class:`action open`,href:e.work.status===`shipped`?r.value:void 0,target:e.work.status===`shipped`?`_blank`:void 0,rel:e.work.status===`shipped`?`noopener`:void 0,"aria-disabled":e.work.status!==`shipped`},[...n[3]||=[X(`span`,null,`開啟作品`,-1),X(`span`,{class:`icon`},`↗`,-1)]],8,$o)])])],34))}}),ts=(e,t)=>{let n=e.__vccOpts||e;for(let[e,r]of t)n[e]=r;return n},ns=ts(es,[[`__scopeId`,`data-v-c55bd88f`]]),rs={class:`filter-bar`,"aria-label":`分類篩選`},is=[`onClick`],as={class:`count`},os=ts(Xn({__name:`FilterBar`,props:{active:{},counts:{}},emits:[`change`],setup(e){let t=[`all`,`mainstream`,`retro`,`experimental`,`cultural`,`decorative`,`motion`],n=e=>e===`all`?`全部`:Io[e];return(r,i)=>(J(),Y(`nav`,rs,[(J(),Y(G,null,Sr(t,t=>(J(),Y(G,{key:t},[(e.counts[t]??0)>0||t===`all`?(J(),Y(`button`,{key:0,class:A([`chip`,{"is-active":e.active===t}]),onClick:e=>r.$emit(`change`,t)},[X(`span`,null,j(n(t)),1),X(`span`,as,j(e.counts[t]??0),1)],10,is)):Zi(``,!0)],64))),64))]))}}),[[`__scopeId`,`data-v-00c88564`]]),ss={class:`round-tab`,"aria-label":`輪次切換`},cs={class:`tab-count`},ls={class:`tab-count`},us={class:`tab-count`},ds=ts(Xn({__name:`RoundTab`,props:{active:{},totalAll:{},totalR1:{},totalR2:{}},emits:[`change`],setup(e){return(t,n)=>(J(),Y(`nav`,ss,[X(`button`,{class:A([`tab`,{"is-active":e.active===`all`}]),onClick:n[0]||=e=>t.$emit(`change`,`all`)},[n[3]||=X(`span`,{class:`tab-name`},`全部`,-1),X(`span`,cs,j(e.totalAll),1)],2),X(`button`,{class:A([`tab`,{"is-active":e.active===1}]),onClick:n[1]||=e=>t.$emit(`change`,1)},[n[4]||=X(`span`,{class:`tab-name`},`靜態`,-1),n[5]||=X(`span`,{class:`tab-tag`},`第一輪`,-1),X(`span`,ls,j(e.totalR1),1)],2),X(`button`,{class:A([`tab`,{"is-active":e.active===2}]),onClick:n[2]||=e=>t.$emit(`change`,2)},[n[6]||=X(`span`,{class:`tab-name`},`動態`,-1),n[7]||=X(`span`,{class:`tab-tag`},`第二輪`,-1),X(`span`,us,j(e.totalR2),1)],2)]))}}),[[`__scopeId`,`data-v-b6fa8b92`]]),fs=Object.assign({"../../.claude/skills/design-american-retro-print/SKILL.md":`---
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
`}),ps={};for(let[e,t]of Object.entries(fs)){let n=e.match(/\.claude\/skills\/([^/]+)\/SKILL\.md$/);n&&n[1]&&(ps[n[1]]=t)}var ms=[`aria-label`],hs={class:`panel-head`},gs={class:`panel-title`},_s={class:`kicker`},vs={class:`en`},ys={class:`install`},bs={class:`code-block`},xs={class:`code-head`},Ss={class:`filename`},Cs=ts(Xn({__name:`SkillDrawer`,props:{work:{}},emits:[`close`],setup(e,{emit:t}){let n=e,r=t,i=Vt(!1),a=$(()=>n.work&&ps[n.work.slug]||``),o=$(()=>n.work?`.claude/skills/${n.work.slug}/SKILL.md`:``);An(()=>n.work,()=>{i.value=!1});async function s(){if(a.value)try{await navigator.clipboard.writeText(a.value),i.value=!0,setTimeout(()=>i.value=!1,2200)}catch{let e=document.createElement(`textarea`);e.value=a.value,document.body.appendChild(e),e.select(),document.execCommand(`copy`),document.body.removeChild(e),i.value=!0,setTimeout(()=>i.value=!1,2200)}}function c(e){e.target===e.currentTarget&&r(`close`)}function l(e){e.key===`Escape`&&r(`close`)}return An(()=>n.work,e=>{e?(document.addEventListener(`keydown`,l),document.body.style.overflow=`hidden`):(document.removeEventListener(`keydown`,l),document.body.style.overflow=``)}),(t,n)=>(J(),Vi(Ra,{name:`drawer`},{default:wn(()=>[e.work?(J(),Y(`div`,{key:0,class:`backdrop`,onClick:c,role:`dialog`,"aria-modal":`true`},[X(`aside`,{class:`panel`,"aria-label":`${e.work.name.zh} Skill 內容`},[X(`header`,hs,[X(`div`,gs,[X(`span`,_s,`SKILL · `+j(e.work.slug),1),X(`h2`,null,[Yi(j(e.work.name.zh)+` `,1),X(`span`,vs,j(e.work.name.en),1)])]),X(`button`,{class:`close`,onClick:n[0]||=e=>r(`close`),"aria-label":`關閉`},`✕`)]),X(`section`,ys,[n[5]||=X(`h3`,null,`使用方式`,-1),X(`ol`,null,[X(`li`,null,[n[1]||=Yi(` 在你的 Claude Code 專案中建立 `,-1),X(`code`,null,j(o.value),1)]),n[4]||=X(`li`,null,` 點下方「複製 SKILL.md」按鈕，把整段內容貼進該檔案 `,-1),X(`li`,null,[n[2]||=Yi(` 在 Claude Code 中召喚 `,-1),X(`code`,null,j(e.work.slug),1),n[3]||=Yi(`，即可重現這個風格的網頁 `,-1)])])]),X(`section`,bs,[X(`header`,xs,[X(`span`,Ss,j(o.value),1),X(`button`,{class:A([`copy-btn`,{done:i.value}]),onClick:s},j(i.value?`✓ 已複製`:`複製 SKILL.md`),3)]),X(`pre`,null,[X(`code`,null,j(a.value),1)])])],8,ms)])):Zi(``,!0)]),_:1}))}}),[[`__scopeId`,`data-v-c70ff6ff`]]),ws={class:`page`},Ts={class:`hero`},Es={class:`hero-inner`},Ds={class:`hero-title`},Os={class:`emph`},ks={class:`hero-stats`},As={class:`content`},js={class:`round-section`,"aria-label":`輪次切換`},Ms={class:`filter-section`,"aria-label":`分類篩選`},Ns={class:`grid`,"aria-label":`作品列表`},Ps={key:0,class:`empty-state`};No(ts(Xn({__name:`App`,setup(e){let t=Vt(`all`),n=Vt(`all`),r=Vt(null),i=$(()=>Ro.filter(e=>e.round===1)),a=$(()=>Ro.filter(e=>e.round===2)),o=$(()=>t.value===`all`?Ro:Ro.filter(e=>e.round===t.value)),s=$(()=>{let e={all:o.value.length,mainstream:0,retro:0,experimental:0,cultural:0,decorative:0,motion:0};for(let t of o.value)e[t.category]+=1;return e}),c=$(()=>Ro.filter(e=>e.status===`shipped`).length),l=$(()=>i.value.filter(e=>e.status===`shipped`).length),u=$(()=>a.value.filter(e=>e.status===`shipped`).length),d=$(()=>n.value===`all`?o.value:o.value.filter(e=>e.category===n.value));function f(e){t.value=e,n.value=`all`}return(e,o)=>(J(),Y(`div`,ws,[X(`header`,Ts,[X(`div`,Es,[o[10]||=X(`p`,{class:`kicker`},`Claude Code Skill 設計風格圖鑑`,-1),X(`h1`,Ds,[o[3]||=Yi(` 一個音樂節，`,-1),o[4]||=X(`br`,null,null,-1),X(`span`,Os,j(Gt(Ro).length),1),o[5]||=Yi(` 種設計語言。 `,-1)]),o[11]||=X(`p`,{class:`hero-sub`},[Yi(` 以虛構獨立音樂節「`),X(`strong`,null,`島嶼共鳴 2026`),Yi(`」為共同主題， 每一份作品都先由 Claude Code 撰寫成一個可下載的 Skill，再交給 SubAgent 透過該 Skill 完成單檔網頁。 第一輪是 25 種靜態設計語言，第二輪則加入視差、滾動、入場、循環、指標 5 類動態效果共 15 種。 `)],-1),X(`ul`,ks,[X(`li`,null,[X(`strong`,null,j(Gt(Ro).length),1),o[6]||=X(`span`,null,`設計風格`,-1)]),X(`li`,null,[X(`strong`,null,j(c.value),1),o[7]||=X(`span`,null,`已完成作品`,-1)]),X(`li`,null,[X(`strong`,null,j(l.value)+` / `+j(u.value),1),o[8]||=X(`span`,null,`靜態 / 動態`,-1)]),o[9]||=X(`li`,null,[X(`strong`,null,`9`),X(`span`,null,`共用標準區塊`)],-1)])])]),X(`main`,As,[X(`section`,js,[Z(ds,{active:t.value,"total-all":Gt(Ro).length,"total-r1":i.value.length,"total-r2":a.value.length,onChange:f},null,8,[`active`,`total-all`,`total-r1`,`total-r2`])]),X(`section`,Ms,[Z(os,{active:n.value,counts:s.value,onChange:o[0]||=e=>n.value=e},null,8,[`active`,`counts`])]),X(`section`,Ns,[(J(!0),Y(G,null,Sr(d.value,e=>(J(),Vi(ns,{key:e.slug,work:e,onOpenSkill:o[1]||=e=>r.value=e},null,8,[`work`]))),128))]),d.value.length===0?(J(),Y(`p`,Ps,` 這個分類目前沒有作品。試試切換到「全部」。 `)):Zi(``,!0)]),o[12]||=Xi(`<footer class="footer" data-v-253d0db0><div class="footer-inner" data-v-253d0db0><div data-v-253d0db0><h2 data-v-253d0db0>關於這個專案</h2><p data-v-253d0db0> 這是一個示範專案，展示「主執行緒寫 Skill → SubAgent 透過 Skill 產出網頁」的規模化工作流。 所有 Skill 都隨專案進 Git，可被自由下載、修改、套用至其他專案。 </p></div><div data-v-253d0db0><h2 data-v-253d0db0>下載 Skill</h2><p data-v-253d0db0> 點任一張卡片右下角的「查看 Skill」即可開啟 drawer 一鍵複製。 或把 <code data-v-253d0db0>.claude/skills/&lt;slug&gt;/</code> 整個目錄複製到任意 Claude Code 專案。 </p></div><div class="footer-meta" data-v-253d0db0><p data-v-253d0db0>島嶼共鳴 2026 · 由浪打文化（虛構）主辦</p><p data-v-253d0db0>Built with Vue 3 · Vite · Claude Code Skills</p></div></div></footer>`,1),Z(Cs,{work:r.value,onClose:o[2]||=e=>r.value=null},null,8,[`work`])]))}}),[[`__scopeId`,`data-v-253d0db0`]])).mount(`#app`);
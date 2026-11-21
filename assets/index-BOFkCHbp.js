var Hg=Object.defineProperty;var Vg=(i,e,t)=>e in i?Hg(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var We=(i,e,t)=>Vg(i,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function nr(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function Kp(i,e){i.prototype=Object.create(e.prototype),i.prototype.constructor=i,i.__proto__=e}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var si={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},_a={duration:.5,overwrite:!1,delay:0},Qh,wn,zt,pi=1e8,Lt=1/pi,Du=Math.PI*2,Gg=Du/4,Wg=0,Jp=Math.sqrt,Xg=Math.cos,Yg=Math.sin,gn=function(e){return typeof e=="string"},Xt=function(e){return typeof e=="function"},ur=function(e){return typeof e=="number"},ef=function(e){return typeof e>"u"},Vi=function(e){return typeof e=="object"},Wn=function(e){return e!==!1},tf=function(){return typeof window<"u"},$o=function(e){return Xt(e)||gn(e)},jp=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Tn=Array.isArray,Iu=/(?:-?\.?\d|\.)+/gi,Qp=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,na=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Uc=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,em=/[+-]=-?[.\d]+/,tm=/[^,'"\[\]\s]+/gi,qg=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ht,Ii,Uu,nf,ai={},Kl={},nm,im=function(e){return(Kl=xs(e,ai))&&$n},rf=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},wo=function(e,t){return!t&&console.warn(e)},rm=function(e,t){return e&&(ai[e]=t)&&Kl&&(Kl[e]=t)||ai},To=function(){return 0},$g={suppressEvents:!0,isStart:!0,kill:!1},Nl={suppressEvents:!0,kill:!1},Zg={suppressEvents:!0},sf={},Ir=[],Nu={},sm,ti={},Nc={},ed=30,Ol=[],af="",of=function(e){var t=e[0],n,r;if(Vi(t)||Xt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(r=Ol.length;r--&&!Ol[r].targetTest(t););n=Ol[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new Rm(e[r],n)))||e.splice(r,1);return e},fs=function(e){return e._gsap||of(mi(e))[0]._gsap},am=function(e,t,n){return(n=e[t])&&Xt(n)?e[t]():ef(n)&&e.getAttribute&&e.getAttribute(t)||n},Xn=function(e,t){return(e=e.split(",")).forEach(t)||e},$t=function(e){return Math.round(e*1e5)/1e5||0},fn=function(e){return Math.round(e*1e7)/1e7||0},oa=function(e,t){var n=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+r:n==="-"?e-r:n==="*"?e*r:e/r},Kg=function(e,t){for(var n=t.length,r=0;e.indexOf(t[r])<0&&++r<n;);return r<n},Jl=function(){var e=Ir.length,t=Ir.slice(0),n,r;for(Nu={},Ir.length=0,n=0;n<e;n++)r=t[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},om=function(e,t,n,r){Ir.length&&!wn&&Jl(),e.render(t,n,wn&&t<0&&(e._initted||e._startAt)),Ir.length&&!wn&&Jl()},lm=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(tm).length<2?t:gn(e)?e.trim():e},cm=function(e){return e},vi=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Jg=function(e){return function(t,n){for(var r in n)r in t||r==="duration"&&e||r==="ease"||(t[r]=n[r])}},xs=function(e,t){for(var n in t)e[n]=t[n];return e},td=function i(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Vi(t[n])?i(e[n]||(e[n]={}),t[n]):t[n]);return e},jl=function(e,t){var n={},r;for(r in e)r in t||(n[r]=e[r]);return n},ao=function(e){var t=e.parent||Ht,n=e.keyframes?Jg(Tn(e.keyframes)):vi;if(Wn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},jg=function(e,t){for(var n=e.length,r=n===t.length;r&&n--&&e[n]===t[n];);return n<0},um=function(e,t,n,r,s){var a=e[r],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[r]=t,t._prev=a,t.parent=t._dp=e,t},mc=function(e,t,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var s=t._prev,a=t._next;s?s._next=a:e[n]===t&&(e[n]=a),a?a._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},zr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},ds=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Qg=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Ou=function(e,t,n,r){return e._startAt&&(wn?e._startAt.revert(Nl):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},e_=function i(e){return!e||e._ts&&i(e.parent)},nd=function(e){return e._repeat?va(e._tTime,e=e.duration()+e._rDelay)*e:0},va=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},Ql=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},gc=function(e){return e._end=fn(e._start+(e._tDur/Math.abs(e._ts||e._rts||Lt)||0))},_c=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=fn(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),gc(e),n._dirty||ds(n,e)),e},hm=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Ql(e.rawTime(),t),(!t._dur||Vo(0,t.totalDuration(),n)-t._tTime>Lt)&&t.render(n,!0)),ds(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Lt}},Oi=function(e,t,n,r){return t.parent&&zr(t),t._start=fn((ur(n)?n:n||e!==Ht?ui(e,n,t):e._time)+t._delay),t._end=fn(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),um(e,t,"_first","_last",e._sort?"_start":0),Fu(t)||(e._recent=t),r||hm(e,t),e._ts<0&&_c(e,e._tTime),e},fm=function(e,t){return(ai.ScrollTrigger||rf("scrollTrigger",t))&&ai.ScrollTrigger.create(t,e)},dm=function(e,t,n,r,s){if(cf(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!wn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&sm!==ni.frame)return Ir.push(e),e._lazy=[s,r],1},t_=function i(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||i(t))},Fu=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},n_=function(e,t,n,r){var s=e.ratio,a=t<0||!t&&(!e._start&&t_(e)&&!(!e._initted&&Fu(e))||(e._ts<0||e._dp._ts<0)&&!Fu(e))?0:1,o=e._rDelay,l=0,c,u,h;if(o&&e._repeat&&(l=Vo(0,e._tDur,t),u=va(l,o),e._yoyo&&u&1&&(a=1-a),u!==va(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||wn||r||e._zTime===Lt||!t&&e._zTime){if(!e._initted&&dm(e,t,r,n,l))return;for(h=e._zTime,e._zTime=t||(n?Lt:0),n||(n=t&&!h),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&Ou(e,t,n,!0),e._onUpdate&&!n&&ri(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&ri(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&zr(e,1),!n&&!wn&&(ri(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},i_=function(e,t,n){var r;if(n>t)for(r=e._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},xa=function(e,t,n,r){var s=e._repeat,a=fn(t)||0,o=e._tTime/e._tDur;return o&&!r&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:fn(a*(s+1)+e._rDelay*s):a,o>0&&!r&&_c(e,e._tTime=e._tDur*o),e.parent&&gc(e),n||ds(e.parent,e),e},id=function(e){return e instanceof On?ds(e):xa(e,e._dur)},r_={_start:0,endTime:To,totalDuration:To},ui=function i(e,t,n){var r=e.labels,s=e._recent||r_,a=e.duration()>=pi?s.endTime(!1):e._dur,o,l,c;return gn(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(t in r||(r[t]=a),r[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(Tn(n)?n[0]:n).totalDuration()),o>1?i(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},oo=function(e,t,n){var r=ur(t[1]),s=(r?2:1)+(e<2?0:1),a=t[s],o,l;if(r&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Wn(l.vars.inherit)&&l.parent;a.immediateRender=Wn(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new tn(t[0],a,t[s+1])},Wr=function(e,t){return e||e===0?t(e):t},Vo=function(e,t,n){return n<e?e:n>t?t:n},bn=function(e,t){return!gn(e)||!(t=qg.exec(e))?"":t[1]},s_=function(e,t,n){return Wr(n,function(r){return Vo(e,t,r)})},ku=[].slice,pm=function(e,t){return e&&Vi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Vi(e[0]))&&!e.nodeType&&e!==Ii},a_=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(r){var s;return gn(r)&&!t||pm(r,1)?(s=n).push.apply(s,mi(r)):n.push(r)})||n},mi=function(e,t,n){return zt&&!t&&zt.selector?zt.selector(e):gn(e)&&!n&&(Uu||!ya())?ku.call((t||nf).querySelectorAll(e),0):Tn(e)?a_(e,n):pm(e)?ku.call(e,0):e?[e]:[]},zu=function(e){return e=mi(e)[0]||wo("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return mi(t,n.querySelectorAll?n:n===e?wo("Invalid scope")||nf.createElement("div"):e)}},mm=function(e){return e.sort(function(){return .5-Math.random()})},gm=function(e){if(Xt(e))return e;var t=Vi(e)?e:{each:e},n=ps(t.ease),r=t.from||0,s=parseFloat(t.base)||0,a={},o=r>0&&r<1,l=isNaN(r)||o,c=t.axis,u=r,h=r;return gn(r)?u=h={center:.5,edges:.5,end:1}[r]||0:!o&&l&&(u=r[0],h=r[1]),function(d,f,g){var _=(g||t).length,m=a[_],p,y,x,v,A,w,E,C,S;if(!m){if(S=t.grid==="auto"?0:(t.grid||[1,pi])[1],!S){for(E=-pi;E<(E=g[S++].getBoundingClientRect().left)&&S<_;);S<_&&S--}for(m=a[_]=[],p=l?Math.min(S,_)*u-.5:r%S,y=S===pi?0:l?_*h/S-.5:r/S|0,E=0,C=pi,w=0;w<_;w++)x=w%S-p,v=y-(w/S|0),m[w]=A=c?Math.abs(c==="y"?v:x):Jp(x*x+v*v),A>E&&(E=A),A<C&&(C=A);r==="random"&&mm(m),m.max=E-C,m.min=C,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(S>_?_-1:c?c==="y"?_/S:S:Math.max(S,_/S))||0)*(r==="edges"?-1:1),m.b=_<0?s-_:s,m.u=bn(t.amount||t.each)||0,n=n&&_<0?Tm(n):n}return _=(m[d]-m.min)/m.max||0,fn(m.b+(n?n(_):_)*m.v)+m.u}},Bu=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var r=fn(Math.round(parseFloat(n)/e)*e*t);return(r-r%1)/t+(ur(n)?0:bn(n))}},_m=function(e,t){var n=Tn(e),r,s;return!n&&Vi(e)&&(r=n=e.radius||pi,e.values?(e=mi(e.values),(s=!ur(e[0]))&&(r*=r)):e=Bu(e.increment)),Wr(t,n?Xt(e)?function(a){return s=e(a),Math.abs(s-a)<=r?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=pi,u=0,h=e.length,d,f;h--;)s?(d=e[h].x-o,f=e[h].y-l,d=d*d+f*f):d=Math.abs(e[h]-o),d<c&&(c=d,u=h);return u=!r||c<=r?e[u]:a,s||u===a||ur(a)?u:u+bn(a)}:Bu(e))},vm=function(e,t,n,r){return Wr(Tn(e)?!t:n===!0?!!(n=0):!r,function(){return Tn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*r)/r})},o_=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduce(function(s,a){return a(s)},r)}},l_=function(e,t){return function(n){return e(parseFloat(n))+(t||bn(n))}},c_=function(e,t,n){return ym(e,t,0,1,n)},xm=function(e,t,n){return Wr(n,function(r){return e[~~t(r)]})},u_=function i(e,t,n){var r=t-e;return Tn(e)?xm(e,i(0,e.length),t):Wr(n,function(s){return(r+(s-e)%r)%r+e})},h_=function i(e,t,n){var r=t-e,s=r*2;return Tn(e)?xm(e,i(0,e.length-1),t):Wr(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>r?s-a:a)})},Ao=function(e){for(var t=0,n="",r,s,a,o;~(r=e.indexOf("random(",t));)a=e.indexOf(")",r),o=e.charAt(r+7)==="[",s=e.substr(r+7,a-r-7).match(o?tm:Iu),n+=e.substr(t,r-t)+vm(o?s:+s[0],o?0:+s[1],+s[2]||1e-5),t=a+1;return n+e.substr(t,e.length-t)},ym=function(e,t,n,r,s){var a=t-e,o=r-n;return Wr(s,function(l){return n+((l-e)/a*o||0)})},f_=function i(e,t,n,r){var s=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!s){var a=gn(e),o={},l,c,u,h,d;if(n===!0&&(r=1)&&(n=null),a)e={p:e},t={p:t};else if(Tn(e)&&!Tn(t)){for(u=[],h=e.length,d=h-2,c=1;c<h;c++)u.push(i(e[c-1],e[c]));h--,s=function(g){g*=h;var _=Math.min(d,~~g);return u[_](g-_)},n=t}else r||(e=xs(Tn(e)?[]:{},e));if(!u){for(l in t)lf.call(o,e,l,"get",t[l]);s=function(g){return ff(g,o)||(a?e.p:e)}}}return Wr(n,s)},rd=function(e,t,n){var r=e.labels,s=pi,a,o,l;for(a in r)o=r[a]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},ri=function(e,t,n){var r=e.vars,s=r[t],a=zt,o=e._ctx,l,c,u;if(s)return l=r[t+"Params"],c=r.callbackScope||e,n&&Ir.length&&Jl(),o&&(zt=o),u=l?s.apply(c,l):s.call(c),zt=a,u},Ja=function(e){return zr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!wn),e.progress()<1&&ri(e,"onInterrupt"),e},ia,Mm=[],Sm=function(e){if(e)if(e=!e.name&&e.default||e,tf()||e.headless){var t=e.name,n=Xt(e),r=t&&!n&&e.init?function(){this._props=[]}:e,s={init:To,render:ff,add:lf,kill:C_,modifier:A_,rawVars:0},a={targetTest:0,get:0,getSetter:hf,aliases:{},register:0};if(ya(),e!==r){if(ti[t])return;vi(r,vi(jl(e,s),a)),xs(r.prototype,xs(s,jl(e,a))),ti[r.prop=t]=r,e.targetTest&&(Ol.push(r),sf[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}rm(t,r),e.register&&e.register($n,r,Yn)}else Mm.push(e)},Rt=255,ja={aqua:[0,Rt,Rt],lime:[0,Rt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Rt],navy:[0,0,128],white:[Rt,Rt,Rt],olive:[128,128,0],yellow:[Rt,Rt,0],orange:[Rt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Rt,0,0],pink:[Rt,192,203],cyan:[0,Rt,Rt],transparent:[Rt,Rt,Rt,0]},Oc=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Rt+.5|0},bm=function(e,t,n){var r=e?ur(e)?[e>>16,e>>8&Rt,e&Rt]:0:ja.black,s,a,o,l,c,u,h,d,f,g;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),ja[e])r=ja[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&Rt,r&Rt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&Rt,e&Rt]}else if(e.substr(0,3)==="hsl"){if(r=g=e.match(Iu),!t)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,r.length>3&&(r[3]*=1),r[0]=Oc(l+1/3,s,a),r[1]=Oc(l,s,a),r[2]=Oc(l-1/3,s,a);else if(~e.indexOf("="))return r=e.match(Qp),n&&r.length<4&&(r[3]=1),r}else r=e.match(Iu)||ja.transparent;r=r.map(Number)}return t&&!g&&(s=r[0]/Rt,a=r[1]/Rt,o=r[2]/Rt,h=Math.max(s,a,o),d=Math.min(s,a,o),u=(h+d)/2,h===d?l=c=0:(f=h-d,c=u>.5?f/(2-h-d):f/(h+d),l=h===s?(a-o)/f+(a<o?6:0):h===a?(o-s)/f+2:(s-a)/f+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),n&&r.length<4&&(r[3]=1),r},Em=function(e){var t=[],n=[],r=-1;return e.split(Ur).forEach(function(s){var a=s.match(na)||[];t.push.apply(t,a),n.push(r+=a.length+1)}),t.c=n,t},sd=function(e,t,n){var r="",s=(e+r).match(Ur),a=t?"hsla(":"rgba(",o=0,l,c,u,h;if(!s)return e;if(s=s.map(function(d){return(d=bm(d,t,1))&&a+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(u=Em(e),l=n.c,l.join(r)!==u.c.join(r)))for(c=e.replace(Ur,"1").split(na),h=c.length-1;o<h;o++)r+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(Ur),h=c.length-1;o<h;o++)r+=c[o]+s[o];return r+c[h]},Ur=function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in ja)i+="|"+e+"\\b";return new RegExp(i+")","gi")}(),d_=/hsl[a]?\(/,wm=function(e){var t=e.join(" "),n;if(Ur.lastIndex=0,Ur.test(t))return n=d_.test(t),e[1]=sd(e[1],n),e[0]=sd(e[0],n,Em(e[1])),!0},Co,ni=function(){var i=Date.now,e=500,t=33,n=i(),r=n,s=1e3/240,a=s,o=[],l,c,u,h,d,f,g=function _(m){var p=i()-r,y=m===!0,x,v,A,w;if((p>e||p<0)&&(n+=p-t),r+=p,A=r-n,x=A-a,(x>0||y)&&(w=++h.frame,d=A-h.time*1e3,h.time=A=A/1e3,a+=x+(x>=s?4:s-x),v=1),y||(l=c(_)),v)for(f=0;f<o.length;f++)o[f](A,d,w,m)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){nm&&(!Uu&&tf()&&(Ii=Uu=window,nf=Ii.document||{},ai.gsap=$n,(Ii.gsapVersions||(Ii.gsapVersions=[])).push($n.version),im(Kl||Ii.GreenSockGlobals||!Ii.gsap&&Ii||{}),Mm.forEach(Sm)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(m){return setTimeout(m,a-h.time*1e3+1|0)},Co=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Co=0,c=To},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){s=1e3/(m||240),a=h.time*1e3+s},add:function(m,p,y){var x=p?function(v,A,w,E){m(v,A,w,E),h.remove(x)}:m;return h.remove(m),o[y?"unshift":"push"](x),ya(),x},remove:function(m,p){~(p=o.indexOf(m))&&o.splice(p,1)&&f>=p&&f--},_listeners:o},h}(),ya=function(){return!Co&&ni.wake()},dt={},p_=/^[\d.\-M][\d.\-,\s]/,m_=/["']/g,g_=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),r=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[r]=isNaN(c)?c.replace(m_,"").trim():+c,r=l.substr(o+1).trim();return t},__=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<n?e.indexOf(")",n+1):n)},v_=function(e){var t=(e+"").split("("),n=dt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[g_(t[1])]:__(e).split(",").map(lm)):dt._CE&&p_.test(e)?dt._CE("",e):n},Tm=function(e){return function(t){return 1-e(1-t)}},Am=function i(e,t){for(var n=e._first,r;n;)n instanceof On?i(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?i(n.timeline,t):(r=n._ease,n._ease=n._yEase,n._yEase=r,n._yoyo=t)),n=n._next},ps=function(e,t){return e&&(Xt(e)?e:dt[e]||v_(e))||t},Ps=function(e,t,n,r){n===void 0&&(n=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:r},a;return Xn(e,function(o){dt[o]=ai[o]=s,dt[a=o.toLowerCase()]=n;for(var l in s)dt[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=dt[o+"."+l]=s[l]}),s},Cm=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Fc=function i(e,t,n){var r=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),a=s/Du*(Math.asin(1/r)||0),o=function(u){return u===1?1:r*Math.pow(2,-10*u)*Yg((u-a)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:Cm(o);return s=Du/s,l.config=function(c,u){return i(e,c,u)},l},kc=function i(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},r=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:Cm(n);return r.config=function(s){return i(e,s)},r};Xn("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,e){var t=e<5?e+1:e;Ps(i+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});dt.Linear.easeNone=dt.none=dt.Linear.easeIn;Ps("Elastic",Fc("in"),Fc("out"),Fc());(function(i,e){var t=1/e,n=2*t,r=2.5*t,s=function(o){return o<t?i*o*o:o<n?i*Math.pow(o-1.5/e,2)+.75:o<r?i*(o-=2.25/e)*o+.9375:i*Math.pow(o-2.625/e,2)+.984375};Ps("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);Ps("Expo",function(i){return i?Math.pow(2,10*(i-1)):0});Ps("Circ",function(i){return-(Jp(1-i*i)-1)});Ps("Sine",function(i){return i===1?1:-Xg(i*Gg)+1});Ps("Back",kc("in"),kc("out"),kc());dt.SteppedEase=dt.steps=ai.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,r=e+(t?0:1),s=t?1:0,a=1-Lt;return function(o){return((r*Vo(0,a,o)|0)+s)*n}}};_a.ease=dt["quad.out"];Xn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return af+=i+","+i+"Params,"});var Rm=function(e,t){this.id=Wg++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:am,this.set=t?t.getSetter:hf},Ro=function(){function i(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,xa(this,+t.duration,1,1),this.data=t.data,zt&&(this._ctx=zt,zt.data.push(this)),Co||ni.wake()}var e=i.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,xa(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,r){if(ya(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(_c(this,n),!s._dp||s.parent||hm(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Oi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===Lt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),om(this,n,r)),this},e.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+nd(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},e.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},e.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+nd(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,r):this._repeat?va(this._tTime,s)+1:1},e.timeScale=function(n,r){if(!arguments.length)return this._rts===-Lt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Ql(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Lt?0:this._rts,this.totalTime(Vo(-Math.abs(this._delay),this._tDur,s),r!==!1),gc(this),Qg(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ya(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Lt&&(this._tTime-=Lt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Oi(r,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Wn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ql(r.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=Zg);var r=wn;return wn=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),wn=r,this},e.globalTime=function(n){for(var r=this,s=arguments.length?n:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,id(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,id(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,r){return this.totalTime(ui(this,n),Wn(r))},e.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,Wn(r))},e.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},e.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Lt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Lt,this},e.isActive=function(){var n=this.parent||this._dp,r=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=r&&s<this.endTime(!0)-Lt)},e.eventCallback=function(n,r,s){var a=this.vars;return arguments.length>1?(r?(a[n]=r,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=r)):delete a[n],this):a[n]},e.then=function(n){var r=this;return new Promise(function(s){var a=Xt(n)?n:cm,o=function(){var c=r.then;r.then=null,Xt(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=c),s(a),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?o():r._prom=o})},e.kill=function(){Ja(this)},i}();vi(Ro.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Lt,_prom:0,_ps:!1,_rts:1});var On=function(i){Kp(e,i);function e(n,r){var s;return n===void 0&&(n={}),s=i.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Wn(n.sortChildren),Ht&&Oi(n.parent||Ht,nr(s),r),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&fm(nr(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,a){return oo(0,arguments,this),this},t.from=function(r,s,a){return oo(1,arguments,this),this},t.fromTo=function(r,s,a,o){return oo(2,arguments,this),this},t.set=function(r,s,a){return s.duration=0,s.parent=this,ao(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new tn(r,s,ui(this,a),1),this},t.call=function(r,s,a){return Oi(this,tn.delayedCall(0,r,s),a)},t.staggerTo=function(r,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new tn(r,a,ui(this,l)),this},t.staggerFrom=function(r,s,a,o,l,c,u){return a.runBackwards=1,ao(a).immediateRender=Wn(a.immediateRender),this.staggerTo(r,s,a,o,l,c,u)},t.staggerFromTo=function(r,s,a,o,l,c,u,h){return o.startAt=a,ao(o).immediateRender=Wn(o.immediateRender),this.staggerTo(r,s,o,l,c,u,h)},t.render=function(r,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:fn(r),h=this._zTime<0!=r<0&&(this._initted||!c),d,f,g,_,m,p,y,x,v,A,w,E;if(this!==Ht&&u>l&&r>=0&&(u=l),u!==this._tTime||a||h){if(o!==this._time&&c&&(u+=this._time-o,r+=this._time-o),d=u,v=this._start,x=this._ts,p=!x,h&&(c||(o=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(w=this._yoyo,m=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,a);if(d=fn(u%m),u===l?(_=this._repeat,d=c):(_=~~(u/m),_&&_===u/m&&(d=c,_--),d>c&&(d=c)),A=va(this._tTime,m),!o&&this._tTime&&A!==_&&this._tTime-A*m-this._dur<=0&&(A=_),w&&_&1&&(d=c-d,E=1),_!==A&&!this._lock){var C=w&&A&1,S=C===(w&&_&1);if(_<A&&(C=!C),o=C?0:u%c?c:u,this._lock=1,this.render(o||(E?0:fn(_*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&ri(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1),o&&o!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,S&&(this._lock=2,o=C?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;Am(this,E)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=i_(this,fn(o),fn(d)),y&&(u-=d-(d=y._start))),this._tTime=u,this._time=d,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,o=0),!o&&d&&!s&&!_&&(ri(this,"onStart"),this._tTime!==u))return this;if(d>=o&&r>=0)for(f=this._first;f;){if(g=f._next,(f._act||d>=f._start)&&f._ts&&y!==f){if(f.parent!==this)return this.render(r,s,a);if(f.render(f._ts>0?(d-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(d-f._start)*f._ts,s,a),d!==this._time||!this._ts&&!p){y=0,g&&(u+=this._zTime=-Lt);break}}f=g}else{f=this._last;for(var M=r<0?r:d;f;){if(g=f._prev,(f._act||M<=f._end)&&f._ts&&y!==f){if(f.parent!==this)return this.render(r,s,a);if(f.render(f._ts>0?(M-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(M-f._start)*f._ts,s,a||wn&&(f._initted||f._startAt)),d!==this._time||!this._ts&&!p){y=0,g&&(u+=this._zTime=M?-Lt:Lt);break}}f=g}}if(y&&!s&&(this.pause(),y.render(d>=o?0:-Lt)._zTime=d>=o?1:-1,this._ts))return this._start=v,gc(this),this.render(r,s,a);this._onUpdate&&!s&&ri(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(v===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&zr(this,1),!s&&!(r<0&&!o)&&(u||o||!l)&&(ri(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var a=this;if(ur(s)||(s=ui(this,s,r)),!(r instanceof Ro)){if(Tn(r))return r.forEach(function(o){return a.add(o,s)}),this;if(gn(r))return this.addLabel(r,s);if(Xt(r))r=tn.delayedCall(0,r);else return this}return this!==r?Oi(this,r,s):this},t.getChildren=function(r,s,a,o){r===void 0&&(r=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-pi);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof tn?s&&l.push(c):(a&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===r)return s[a]},t.remove=function(r){return gn(r)?this.removeLabel(r):Xt(r)?this.killTweensOf(r):(mc(this,r),r===this._recent&&(this._recent=this._last),ds(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=fn(ni.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),i.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=ui(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,a){var o=tn.delayedCall(0,s||To,a);return o.data="isPause",this._hasPause=1,Oi(this,o,ui(this,r))},t.removePause=function(r){var s=this._first;for(r=ui(this,r);s;)s._start===r&&s.data==="isPause"&&zr(s),s=s._next},t.killTweensOf=function(r,s,a){for(var o=this.getTweensOf(r,a),l=o.length;l--;)Ar!==o[l]&&o[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var a=[],o=mi(r),l=this._first,c=ur(s),u;l;)l instanceof tn?Kg(l._targets,o)&&(c?(!Ar||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(r,s){s=s||{};var a=this,o=ui(a,r),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,d=l.immediateRender,f,g=tn.to(a,vi({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||Lt,onStart:function(){if(a.pause(),!f){var m=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());g._dur!==m&&xa(g,m,0,1).render(g._time,!0,!0),f=1}u&&u.apply(g,h||[])}},s));return d?g.render(0):g},t.tweenFromTo=function(r,s,a){return this.tweenTo(s,vi({startAt:{time:ui(this,r)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),rd(this,ui(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),rd(this,ui(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+Lt)},t.shiftChildren=function(r,s,a){a===void 0&&(a=0);for(var o=this._first,l=this.labels,c;o;)o._start>=a&&(o._start+=r,o._end+=r),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=r);return ds(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return i.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),ds(this)},t.totalDuration=function(r){var s=0,a=this,o=a._last,l=pi,c,u,h;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-r:r));if(a._dirty){for(h=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Oi(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!h&&!a._dp||h&&h.smoothChildTiming)&&(a._start+=u/a._ts,a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;xa(a,a===Ht&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(r){if(Ht._ts&&(om(Ht,Ql(r,Ht)),sm=ni.frame),ni.frame>=ed){ed+=si.autoSleep||120;var s=Ht._first;if((!s||!s._ts)&&si.autoSleep&&ni._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||ni.sleep()}}},e}(Ro);vi(On.prototype,{_lock:0,_hasPause:0,_forcing:0});var x_=function(e,t,n,r,s,a,o){var l=new Yn(this._pt,e,t,0,1,Nm,null,s),c=0,u=0,h,d,f,g,_,m,p,y;for(l.b=n,l.e=r,n+="",r+="",(p=~r.indexOf("random("))&&(r=Ao(r)),a&&(y=[n,r],a(y,e,t),n=y[0],r=y[1]),d=n.match(Uc)||[];h=Uc.exec(r);)g=h[0],_=r.substring(c,h.index),f?f=(f+1)%5:_.substr(-5)==="rgba("&&(f=1),g!==d[u++]&&(m=parseFloat(d[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:m,c:g.charAt(1)==="="?oa(m,g)-m:parseFloat(g)-m,m:f&&f<4?Math.round:0},c=Uc.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=o,(em.test(r)||p)&&(l.e=0),this._pt=l,l},lf=function(e,t,n,r,s,a,o,l,c,u){Xt(r)&&(r=r(s||0,e,a));var h=e[t],d=n!=="get"?n:Xt(h)?c?e[t.indexOf("set")||!Xt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,f=Xt(h)?c?E_:Im:uf,g;if(gn(r)&&(~r.indexOf("random(")&&(r=Ao(r)),r.charAt(1)==="="&&(g=oa(d,r)+(bn(d)||0),(g||g===0)&&(r=g))),!u||d!==r||Hu)return!isNaN(d*r)&&r!==""?(g=new Yn(this._pt,e,t,+d||0,r-(d||0),typeof h=="boolean"?T_:Um,0,f),c&&(g.fp=c),o&&g.modifier(o,this,e),this._pt=g):(!h&&!(t in e)&&rf(t,r),x_.call(this,e,t,d,r,f,l||si.stringFilter,c))},y_=function(e,t,n,r,s){if(Xt(e)&&(e=lo(e,s,t,n,r)),!Vi(e)||e.style&&e.nodeType||Tn(e)||jp(e))return gn(e)?lo(e,s,t,n,r):e;var a={},o;for(o in e)a[o]=lo(e[o],s,t,n,r);return a},Pm=function(e,t,n,r,s,a){var o,l,c,u;if(ti[e]&&(o=new ti[e]).init(s,o.rawVars?t[e]:y_(t[e],r,s,a,n),n,r,a)!==!1&&(n._pt=l=new Yn(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==ia))for(c=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},Ar,Hu,cf=function i(e,t,n){var r=e.vars,s=r.ease,a=r.startAt,o=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.runBackwards,h=r.yoyoEase,d=r.keyframes,f=r.autoRevert,g=e._dur,_=e._startAt,m=e._targets,p=e.parent,y=p&&p.data==="nested"?p.vars.targets:m,x=e._overwrite==="auto"&&!Qh,v=e.timeline,A,w,E,C,S,M,L,N,z,B,q,H,Y;if(v&&(!d||!s)&&(s="none"),e._ease=ps(s,_a.ease),e._yEase=h?Tm(ps(h===!0?s:h,_a.ease)):0,h&&e._yoyo&&!e._repeat&&(h=e._yEase,e._yEase=e._ease,e._ease=h),e._from=!v&&!!r.runBackwards,!v||d&&!r.stagger){if(N=m[0]?fs(m[0]).harness:0,H=N&&r[N.prop],A=jl(r,sf),_&&(_._zTime<0&&_.progress(1),t<0&&u&&o&&!f?_.render(-1,!0):_.revert(u&&g?Nl:$g),_._lazy=0),a){if(zr(e._startAt=tn.set(m,vi({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&Wn(l),startAt:null,delay:0,onUpdate:c&&function(){return ri(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(wn||!o&&!f)&&e._startAt.revert(Nl),o&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&g&&!_){if(t&&(o=!1),E=vi({overwrite:!1,data:"isFromStart",lazy:o&&!_&&Wn(l),immediateRender:o,stagger:0,parent:p},A),H&&(E[N.prop]=H),zr(e._startAt=tn.set(m,E)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(wn?e._startAt.revert(Nl):e._startAt.render(-1,!0)),e._zTime=t,!o)i(e._startAt,Lt,Lt);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&Wn(l)||l&&!g,w=0;w<m.length;w++){if(S=m[w],L=S._gsap||of(m)[w]._gsap,e._ptLookup[w]=B={},Nu[L.id]&&Ir.length&&Jl(),q=y===m?w:y.indexOf(S),N&&(z=new N).init(S,H||A,e,q,y)!==!1&&(e._pt=C=new Yn(e._pt,S,z.name,0,1,z.render,z,0,z.priority),z._props.forEach(function(G){B[G]=C}),z.priority&&(M=1)),!N||H)for(E in A)ti[E]&&(z=Pm(E,A,e,q,S,y))?z.priority&&(M=1):B[E]=C=lf.call(e,S,E,"get",A[E],q,y,0,r.stringFilter);e._op&&e._op[w]&&e.kill(S,e._op[w]),x&&e._pt&&(Ar=e,Ht.killTweensOf(S,B,e.globalTime(t)),Y=!e.parent,Ar=0),e._pt&&l&&(Nu[L.id]=1)}M&&Om(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!Y,d&&t<=0&&v.render(pi,!0,!0)},M_=function(e,t,n,r,s,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,d,f;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,f=e._targets.length;f--;){if(u=d[f][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Hu=1,e.vars[t]="+=0",cf(e,o),Hu=0,l?wo(t+" not eligible for reset"):1;c.push(u)}for(f=c.length;f--;)h=c[f],u=h._pt||h,u.s=(r||r===0)&&!s?r:u.s+(r||0)+a*u.c,u.c=n-u.s,h.e&&(h.e=$t(n)+bn(h.e)),h.b&&(h.b=u.s+bn(h.b))},S_=function(e,t){var n=e[0]?fs(e[0]).harness:0,r=n&&n.aliases,s,a,o,l;if(!r)return t;s=xs({},t);for(a in r)if(a in s)for(l=r[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},b_=function(e,t,n,r){var s=t.ease||r||"power1.inOut",a,o;if(Tn(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:s})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},lo=function(e,t,n,r,s){return Xt(e)?e.call(t,n,r,s):gn(e)&&~e.indexOf("random(")?Ao(e):e},Lm=af+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Dm={};Xn(Lm+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return Dm[i]=1});var tn=function(i){Kp(e,i);function e(n,r,s,a){var o;typeof r=="number"&&(s.duration=r,r=s,s=null),o=i.call(this,a?r:ao(r))||this;var l=o.vars,c=l.duration,u=l.delay,h=l.immediateRender,d=l.stagger,f=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,y=r.parent||Ht,x=(Tn(n)||jp(n)?ur(n[0]):"length"in r)?[n]:mi(n),v,A,w,E,C,S,M,L;if(o._targets=x.length?of(x):wo("GSAP target "+n+" not found. https://gsap.com",!si.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=f,g||d||$o(c)||$o(u)){if(r=o.vars,v=o.timeline=new On({data:"nested",defaults:_||{},targets:y&&y.data==="nested"?y.vars.targets:x}),v.kill(),v.parent=v._dp=nr(o),v._start=0,d||$o(c)||$o(u)){if(E=x.length,M=d&&gm(d),Vi(d))for(C in d)~Lm.indexOf(C)&&(L||(L={}),L[C]=d[C]);for(A=0;A<E;A++)w=jl(r,Dm),w.stagger=0,p&&(w.yoyoEase=p),L&&xs(w,L),S=x[A],w.duration=+lo(c,nr(o),A,S,x),w.delay=(+lo(u,nr(o),A,S,x)||0)-o._delay,!d&&E===1&&w.delay&&(o._delay=u=w.delay,o._start+=u,w.delay=0),v.to(S,w,M?M(A,S,x):0),v._ease=dt.none;v.duration()?c=u=0:o.timeline=0}else if(g){ao(vi(v.vars.defaults,{ease:"none"})),v._ease=ps(g.ease||r.ease||"none");var N=0,z,B,q;if(Tn(g))g.forEach(function(H){return v.to(x,H,">")}),v.duration();else{w={};for(C in g)C==="ease"||C==="easeEach"||b_(C,g[C],w,g.easeEach);for(C in w)for(z=w[C].sort(function(H,Y){return H.t-Y.t}),N=0,A=0;A<z.length;A++)B=z[A],q={ease:B.e,duration:(B.t-(A?z[A-1].t:0))/100*c},q[C]=B.v,v.to(x,q,N),N+=q.duration;v.duration()<c&&v.to({},{duration:c-v.duration()})}}c||o.duration(c=v.duration())}else o.timeline=0;return f===!0&&!Qh&&(Ar=nr(o),Ht.killTweensOf(x),Ar=0),Oi(y,nr(o),s),r.reversed&&o.reverse(),r.paused&&o.paused(!0),(h||!c&&!g&&o._start===fn(y._time)&&Wn(h)&&e_(nr(o))&&y.data!=="nested")&&(o._tTime=-Lt,o.render(Math.max(0,-u)||0)),m&&fm(nr(o),m),o}var t=e.prototype;return t.render=function(r,s,a){var o=this._time,l=this._tDur,c=this._dur,u=r<0,h=r>l-Lt&&!u?l:r<Lt?0:r,d,f,g,_,m,p,y,x,v;if(!c)n_(this,r,s,a);else if(h!==this._tTime||!r||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(d=h,x=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+r,s,a);if(d=fn(h%_),h===l?(g=this._repeat,d=c):(g=~~(h/_),g&&g===fn(h/_)&&(d=c,g--),d>c&&(d=c)),p=this._yoyo&&g&1,p&&(v=this._yEase,d=c-d),m=va(this._tTime,_),d===o&&!a&&this._initted&&g===m)return this._tTime=h,this;g!==m&&(x&&this._yEase&&Am(x,p),this.vars.repeatRefresh&&!p&&!this._lock&&this._time!==_&&this._initted&&(this._lock=a=1,this.render(fn(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(dm(this,u?r:d,a,s,h))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&g!==m))return this;if(c!==this._dur)return this.render(r,s,a)}if(this._tTime=h,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=y=(v||this._ease)(d/c),this._from&&(this.ratio=y=1-y),d&&!o&&!s&&!g&&(ri(this,"onStart"),this._tTime!==h))return this;for(f=this._pt;f;)f.r(y,f.d),f=f._next;x&&x.render(r<0?r:x._dur*x._ease(d/this._dur),s,a)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&Ou(this,r,s,a),ri(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&ri(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&Ou(this,r,!0,!0),(r||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&zr(this,1),!s&&!(u&&!o)&&(h||o||p)&&(ri(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),i.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,a,o,l){Co||ni.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||cf(this,c),u=this._ease(c/this._dur),M_(this,r,s,a,o,u,c,l)?this.resetTo(r,s,a,o,1):(_c(this,0),this.parent||um(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Ja(this):this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,Ar&&Ar.vars.overwrite!==!0)._first||Ja(this),this.parent&&a!==this.timeline.totalDuration()&&xa(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=r?mi(r):o,c=this._ptLookup,u=this._pt,h,d,f,g,_,m,p;if((!s||s==="all")&&jg(o,l))return s==="all"&&(this._pt=0),Ja(this);for(h=this._op=this._op||[],s!=="all"&&(gn(s)&&(_={},Xn(s,function(y){return _[y]=1}),s=_),s=S_(o,s)),p=o.length;p--;)if(~l.indexOf(o[p])){d=c[p],s==="all"?(h[p]=s,g=d,f={}):(f=h[p]=h[p]||{},g=s);for(_ in g)m=d&&d[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&mc(this,m,"_pt"),delete d[_]),f!=="all"&&(f[_]=1)}return this._initted&&!this._pt&&u&&Ja(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return oo(1,arguments)},e.delayedCall=function(r,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(r,s,a){return oo(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,a){return Ht.killTweensOf(r,s,a)},e}(Ro);vi(tn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Xn("staggerTo,staggerFrom,staggerFromTo",function(i){tn[i]=function(){var e=new On,t=ku.call(arguments,0);return t.splice(i==="staggerFromTo"?5:4,0,0),e[i].apply(e,t)}});var uf=function(e,t,n){return e[t]=n},Im=function(e,t,n){return e[t](n)},E_=function(e,t,n,r){return e[t](r.fp,n)},w_=function(e,t,n){return e.setAttribute(t,n)},hf=function(e,t){return Xt(e[t])?Im:ef(e[t])&&e.setAttribute?w_:uf},Um=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},T_=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Nm=function(e,t){var n=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=t.c}t.set(t.t,t.p,r,t)},ff=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},A_=function(e,t,n,r){for(var s=this._pt,a;s;)a=s._next,s.p===r&&s.modifier(e,t,n),s=a},C_=function(e){for(var t=this._pt,n,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?mc(this,t,"_pt"):t.dep||(n=1),t=r;return!n},R_=function(e,t,n,r){r.mSet(e,t,r.m.call(r.tween,n,r.mt),r)},Om=function(e){for(var t=e._pt,n,r,s,a;t;){for(n=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:a)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:a=t,t=n}e._pt=s},Yn=function(){function i(t,n,r,s,a,o,l,c,u){this.t=n,this.s=s,this.c=a,this.p=r,this.r=o||Um,this.d=l||this,this.set=c||uf,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=i.prototype;return e.modifier=function(n,r,s){this.mSet=this.mSet||this.set,this.set=R_,this.m=n,this.mt=s,this.tween=r},i}();Xn(af+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(i){return sf[i]=1});ai.TweenMax=ai.TweenLite=tn;ai.TimelineLite=ai.TimelineMax=On;Ht=new On({sortChildren:!1,defaults:_a,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});si.stringFilter=wm;var ms=[],Fl={},P_=[],ad=0,L_=0,zc=function(e){return(Fl[e]||P_).map(function(t){return t()})},Vu=function(){var e=Date.now(),t=[];e-ad>2&&(zc("matchMediaInit"),ms.forEach(function(n){var r=n.queries,s=n.conditions,a,o,l,c;for(o in r)a=Ii.matchMedia(r[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),zc("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(r){return n.add(null,r)})}),ad=e,zc("matchMedia"))},Fm=function(){function i(t,n){this.selector=n&&zu(n),this.data=[],this._r=[],this.isReverted=!1,this.id=L_++,t&&this.add(t)}var e=i.prototype;return e.add=function(n,r,s){Xt(n)&&(s=r,r=n,n=Xt);var a=this,o=function(){var c=zt,u=a.selector,h;return c&&c!==a&&c.data.push(a),s&&(a.selector=zu(s)),zt=a,h=r.apply(a,arguments),Xt(h)&&a._r.push(h),zt=c,a.selector=u,a.isReverted=!1,h};return a.last=o,n===Xt?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},e.ignore=function(n){var r=zt;zt=null,n(this),zt=r},e.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof i?n.push.apply(n,r.getTweens()):r instanceof tn&&!(r.parent&&r.parent.data==="nested")&&n.push(r)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,r){var s=this;if(n?function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof On?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof tn)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),r)for(var a=ms.length;a--;)ms[a].id===this.id&&ms.splice(a,1)},e.revert=function(n){this.kill(n||{})},i}(),D_=function(){function i(t){this.contexts=[],this.scope=t,zt&&zt.data.push(this)}var e=i.prototype;return e.add=function(n,r,s){Vi(n)||(n={matches:n});var a=new Fm(0,s||this.scope),o=a.conditions={},l,c,u;zt&&!a.selector&&(a.selector=zt.selector),this.contexts.push(a),r=a.add("onMatch",r),a.queries=n;for(c in n)c==="all"?u=1:(l=Ii.matchMedia(n[c]),l&&(ms.indexOf(a)<0&&ms.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(Vu):l.addEventListener("change",Vu)));return u&&r(a,function(h){return a.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},i}(),ec={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(r){return Sm(r)})},timeline:function(e){return new On(e)},getTweensOf:function(e,t){return Ht.getTweensOf(e,t)},getProperty:function(e,t,n,r){gn(e)&&(e=mi(e)[0]);var s=fs(e||{}).get,a=n?cm:lm;return n==="native"&&(n=""),e&&(t?a((ti[t]&&ti[t].get||s)(e,t,n,r)):function(o,l,c){return a((ti[o]&&ti[o].get||s)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=mi(e),e.length>1){var r=e.map(function(u){return $n.quickSetter(u,t,n)}),s=r.length;return function(u){for(var h=s;h--;)r[h](u)}}e=e[0]||{};var a=ti[t],o=fs(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(u){var h=new a;ia._pt=0,h.init(e,n?u+n:u,ia,0,[e]),h.render(1,h),ia._pt&&ff(1,ia)}:o.set(e,l);return a?c:function(u){return c(e,l,n?u+n:u,o,1)}},quickTo:function(e,t,n){var r,s=$n.to(e,xs((r={},r[t]="+=0.1",r.paused=!0,r),n||{})),a=function(l,c,u){return s.resetTo(t,l,c,u)};return a.tween=s,a},isTweening:function(e){return Ht.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=ps(e.ease,_a.ease)),td(_a,e||{})},config:function(e){return td(si,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,r=e.plugins,s=e.defaults,a=e.extendTimeline;(r||"").split(",").forEach(function(o){return o&&!ti[o]&&!ai[o]&&wo(t+" effect requires "+o+" plugin.")}),Nc[t]=function(o,l,c){return n(mi(o),vi(l||{},s),c)},a&&(On.prototype[t]=function(o,l,c){return this.add(Nc[t](o,Vi(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){dt[e]=ps(t)},parseEase:function(e,t){return arguments.length?ps(e,t):dt},getById:function(e){return Ht.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new On(e),r,s;for(n.smoothChildTiming=Wn(e.smoothChildTiming),Ht.remove(n),n._dp=0,n._time=n._tTime=Ht._time,r=Ht._first;r;)s=r._next,(t||!(!r._dur&&r instanceof tn&&r.vars.onComplete===r._targets[0]))&&Oi(n,r,r._start-r._delay),r=s;return Oi(Ht,n,0),n},context:function(e,t){return e?new Fm(e,t):zt},matchMedia:function(e){return new D_(e)},matchMediaRefresh:function(){return ms.forEach(function(e){var t=e.conditions,n,r;for(r in t)t[r]&&(t[r]=!1,n=1);n&&e.revert()})||Vu()},addEventListener:function(e,t){var n=Fl[e]||(Fl[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Fl[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},utils:{wrap:u_,wrapYoyo:h_,distribute:gm,random:vm,snap:_m,normalize:c_,getUnit:bn,clamp:s_,splitColor:bm,toArray:mi,selector:zu,mapRange:ym,pipe:o_,unitize:l_,interpolate:f_,shuffle:mm},install:im,effects:Nc,ticker:ni,updateRoot:On.updateRoot,plugins:ti,globalTimeline:Ht,core:{PropTween:Yn,globals:rm,Tween:tn,Timeline:On,Animation:Ro,getCache:fs,_removeLinkedListItem:mc,reverting:function(){return wn},context:function(e){return e&&zt&&(zt.data.push(e),e._ctx=zt),zt},suppressOverwrites:function(e){return Qh=e}}};Xn("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return ec[i]=tn[i]});ni.add(On.updateRoot);ia=ec.to({},{duration:0});var I_=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},U_=function(e,t){var n=e._targets,r,s,a;for(r in t)for(s=n.length;s--;)a=e._ptLookup[s][r],a&&(a=a.d)&&(a._pt&&(a=I_(a,r)),a&&a.modifier&&a.modifier(t[r],e,n[s],r))},Bc=function(e,t){return{name:e,rawVars:1,init:function(r,s,a){a._onInit=function(o){var l,c;if(gn(s)&&(l={},Xn(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}U_(o,s)}}}},$n=ec.registerPlugin({name:"attr",init:function(e,t,n,r,s){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],r,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)wn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Bc("roundProps",Bu),Bc("modifiers"),Bc("snap",_m))||ec;tn.version=On.version=$n.version="3.12.5";nm=1;tf()&&ya();dt.Power0;dt.Power1;dt.Power2;dt.Power3;dt.Power4;dt.Linear;dt.Quad;dt.Cubic;dt.Quart;dt.Quint;dt.Strong;dt.Elastic;dt.Back;dt.SteppedEase;dt.Bounce;dt.Sine;dt.Expo;dt.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var od,Cr,la,df,os,ld,pf,N_=function(){return typeof window<"u"},hr={},Qr=180/Math.PI,ca=Math.PI/180,Us=Math.atan2,cd=1e8,mf=/([A-Z])/g,O_=/(left|right|width|margin|padding|x)/i,F_=/[\s,\(]\S/,Fi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Gu=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},k_=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},z_=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},B_=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},km=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},zm=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},H_=function(e,t,n){return e.style[t]=n},V_=function(e,t,n){return e.style.setProperty(t,n)},G_=function(e,t,n){return e._gsap[t]=n},W_=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},X_=function(e,t,n,r,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},Y_=function(e,t,n,r,s){var a=e._gsap;a[t]=n,a.renderTransform(s,a)},Vt="transform",qn=Vt+"Origin",q_=function i(e,t){var n=this,r=this.target,s=r.style,a=r._gsap;if(e in hr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Fi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=ir(r,o)}):this.tfm[e]=a.x?a[e]:ir(r,e),e===qn&&(this.tfm.zOrigin=a.zOrigin);else return Fi.transform.split(",").forEach(function(o){return i.call(n,o,t)});if(this.props.indexOf(Vt)>=0)return;a.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(qn,t,"")),e=Vt}(s||t)&&this.props.push(e,t,s[e])},Bm=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},$_=function(){var e=this.props,t=this.target,n=t.style,r=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(mf,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)r[a]=this.tfm[a];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=pf(),(!s||!s.isStart)&&!n[Vt]&&(Bm(n),r.zOrigin&&n[qn]&&(n[qn]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},Hm=function(e,t){var n={target:e,props:[],revert:$_,save:q_};return e._gsap||$n.core.getCache(e),t&&t.split(",").forEach(function(r){return n.save(r)}),n},Vm,Wu=function(e,t){var n=Cr.createElementNS?Cr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Cr.createElement(e);return n&&n.style?n:Cr.createElement(e)},Bi=function i(e,t,n){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(mf,"-$1").toLowerCase())||r.getPropertyValue(t)||!n&&i(e,Ma(t)||t,1)||""},ud="O,Moz,ms,Ms,Webkit".split(","),Ma=function(e,t,n){var r=t||os,s=r.style,a=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(ud[a]+e in s););return a<0?null:(a===3?"ms":a>=0?ud[a]:"")+e},Xu=function(){N_()&&window.document&&(od=window,Cr=od.document,la=Cr.documentElement,os=Wu("div")||{style:{}},Wu("div"),Vt=Ma(Vt),qn=Vt+"Origin",os.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Vm=!!Ma("perspective"),pf=$n.core.reverting,df=1)},Hc=function i(e){var t=Wu("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,r=this.nextSibling,s=this.style.cssText,a;if(la.appendChild(t),t.appendChild(this),this.style.display="block",e)try{a=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=i}catch{}else this._gsapBBox&&(a=this._gsapBBox());return n&&(r?n.insertBefore(this,r):n.appendChild(this)),la.removeChild(t),this.style.cssText=s,a},hd=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Gm=function(e){var t;try{t=e.getBBox()}catch{t=Hc.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===Hc||(t=Hc.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+hd(e,["x","cx","x1"])||0,y:+hd(e,["y","cy","y1"])||0,width:0,height:0}:t},Wm=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Gm(e))},ys=function(e,t){if(t){var n=e.style,r;t in hr&&t!==qn&&(t=Vt),n.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(r==="--"?t:t.replace(mf,"-$1").toLowerCase())):n.removeAttribute(t)}},Rr=function(e,t,n,r,s,a){var o=new Yn(e._pt,t,n,0,1,a?zm:km);return e._pt=o,o.b=r,o.e=s,e._props.push(n),o},fd={deg:1,rad:1,turn:1},Z_={grid:1,flex:1},Br=function i(e,t,n,r){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=os.style,l=O_.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,d=r==="px",f=r==="%",g,_,m,p;if(r===a||!s||fd[r]||fd[a])return s;if(a!=="px"&&!d&&(s=i(e,t,n,"px")),p=e.getCTM&&Wm(e),(f||a==="%")&&(hr[t]||~t.indexOf("adius")))return g=p?e.getBBox()[l?"width":"height"]:e[u],$t(f?s/g*h:s/100*g);if(o[l?"width":"height"]=h+(d?a:r),_=~t.indexOf("adius")||r==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===Cr||!_.appendChild)&&(_=Cr.body),m=_._gsap,m&&f&&m.width&&l&&m.time===ni.time&&!m.uncache)return $t(s/m.width*h);if(f&&(t==="height"||t==="width")){var y=e.style[t];e.style[t]=h+r,g=e[u],y?e.style[t]=y:ys(e,t)}else(f||a==="%")&&!Z_[Bi(_,"display")]&&(o.position=Bi(e,"position")),_===e&&(o.position="static"),_.appendChild(os),g=os[u],_.removeChild(os),o.position="absolute";return l&&f&&(m=fs(_),m.time=ni.time,m.width=_[u]),$t(d?g*s/h:g&&s?h/g*s:0)},ir=function(e,t,n,r){var s;return df||Xu(),t in Fi&&t!=="transform"&&(t=Fi[t],~t.indexOf(",")&&(t=t.split(",")[0])),hr[t]&&t!=="transform"?(s=Lo(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:nc(Bi(e,qn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=tc[t]&&tc[t](e,t,n)||Bi(e,t)||am(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Br(e,t,s,n)+n:s},K_=function(e,t,n,r){if(!n||n==="none"){var s=Ma(t,e,1),a=s&&Bi(e,s,1);a&&a!==n?(t=s,n=a):t==="borderColor"&&(n=Bi(e,"borderTopColor"))}var o=new Yn(this._pt,e.style,t,0,1,Nm),l=0,c=0,u,h,d,f,g,_,m,p,y,x,v,A;if(o.b=n,o.e=r,n+="",r+="",r==="auto"&&(_=e.style[t],e.style[t]=r,r=Bi(e,t)||r,_?e.style[t]=_:ys(e,t)),u=[n,r],wm(u),n=u[0],r=u[1],d=n.match(na)||[],A=r.match(na)||[],A.length){for(;h=na.exec(r);)m=h[0],y=r.substring(l,h.index),g?g=(g+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(g=1),m!==(_=d[c++]||"")&&(f=parseFloat(_)||0,v=_.substr((f+"").length),m.charAt(1)==="="&&(m=oa(f,m)+v),p=parseFloat(m),x=m.substr((p+"").length),l=na.lastIndex-x.length,x||(x=x||si.units[t]||v,l===r.length&&(r+=x,o.e+=x)),v!==x&&(f=Br(e,t,_,x)||0),o._pt={_next:o._pt,p:y||c===1?y:",",s:f,c:p-f,m:g&&g<4||t==="zIndex"?Math.round:0});o.c=l<r.length?r.substring(l,r.length):""}else o.r=t==="display"&&r==="none"?zm:km;return em.test(r)&&(o.e=0),this._pt=o,o},dd={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},J_=function(e){var t=e.split(" "),n=t[0],r=t[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(e=n,n=r,r=e),t[0]=dd[n]||n,t[1]=dd[r]||r,t.join(" ")},j_=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,r=n.style,s=t.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],hr[o]&&(l=1,o=o==="transformOrigin"?qn:Vt),ys(n,o);l&&(ys(n,Vt),a&&(a.svg&&n.removeAttribute("transform"),Lo(n,1),a.uncache=1,Bm(r)))}},tc={clearProps:function(e,t,n,r,s){if(s.data!=="isFromStart"){var a=e._pt=new Yn(e._pt,t,n,0,0,j_);return a.u=r,a.pr=-10,a.tween=s,e._props.push(n),1}}},Po=[1,0,0,1,0,0],Xm={},Ym=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},pd=function(e){var t=Bi(e,Vt);return Ym(t)?Po:t.substr(7).match(Qp).map($t)},gf=function(e,t){var n=e._gsap||fs(e),r=e.style,s=pd(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Po:s):(s===Po&&!e.offsetParent&&e!==la&&!n.svg&&(l=r.display,r.display="block",a=e.parentNode,(!a||!e.offsetParent)&&(c=1,o=e.nextElementSibling,la.appendChild(e)),s=pd(e),l?r.display=l:ys(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):la.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Yu=function(e,t,n,r,s,a){var o=e._gsap,l=s||gf(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,h=o.xOffset||0,d=o.yOffset||0,f=l[0],g=l[1],_=l[2],m=l[3],p=l[4],y=l[5],x=t.split(" "),v=parseFloat(x[0])||0,A=parseFloat(x[1])||0,w,E,C,S;n?l!==Po&&(E=f*m-g*_)&&(C=v*(m/E)+A*(-_/E)+(_*y-m*p)/E,S=v*(-g/E)+A*(f/E)-(f*y-g*p)/E,v=C,A=S):(w=Gm(e),v=w.x+(~x[0].indexOf("%")?v/100*w.width:v),A=w.y+(~(x[1]||x[0]).indexOf("%")?A/100*w.height:A)),r||r!==!1&&o.smooth?(p=v-c,y=A-u,o.xOffset=h+(p*f+y*_)-p,o.yOffset=d+(p*g+y*m)-y):o.xOffset=o.yOffset=0,o.xOrigin=v,o.yOrigin=A,o.smooth=!!r,o.origin=t,o.originIsAbsolute=!!n,e.style[qn]="0px 0px",a&&(Rr(a,o,"xOrigin",c,v),Rr(a,o,"yOrigin",u,A),Rr(a,o,"xOffset",h,o.xOffset),Rr(a,o,"yOffset",d,o.yOffset)),e.setAttribute("data-svg-origin",v+" "+A)},Lo=function(e,t){var n=e._gsap||new Rm(e);if("x"in n&&!t&&!n.uncache)return n;var r=e.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=Bi(e,qn)||"0",u,h,d,f,g,_,m,p,y,x,v,A,w,E,C,S,M,L,N,z,B,q,H,Y,G,ae,D,he,Fe,tt,Z,re;return u=h=d=_=m=p=y=x=v=0,f=g=1,n.svg=!!(e.getCTM&&Wm(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[Vt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Vt]!=="none"?l[Vt]:"")),r.scale=r.rotate=r.translate="none"),E=gf(e,n.svg),n.svg&&(n.uncache?(G=e.getBBox(),c=n.xOrigin-G.x+"px "+(n.yOrigin-G.y)+"px",Y=""):Y=!t&&e.getAttribute("data-svg-origin"),Yu(e,Y||c,!!Y||n.originIsAbsolute,n.smooth!==!1,E)),A=n.xOrigin||0,w=n.yOrigin||0,E!==Po&&(L=E[0],N=E[1],z=E[2],B=E[3],u=q=E[4],h=H=E[5],E.length===6?(f=Math.sqrt(L*L+N*N),g=Math.sqrt(B*B+z*z),_=L||N?Us(N,L)*Qr:0,y=z||B?Us(z,B)*Qr+_:0,y&&(g*=Math.abs(Math.cos(y*ca))),n.svg&&(u-=A-(A*L+w*z),h-=w-(A*N+w*B))):(re=E[6],tt=E[7],D=E[8],he=E[9],Fe=E[10],Z=E[11],u=E[12],h=E[13],d=E[14],C=Us(re,Fe),m=C*Qr,C&&(S=Math.cos(-C),M=Math.sin(-C),Y=q*S+D*M,G=H*S+he*M,ae=re*S+Fe*M,D=q*-M+D*S,he=H*-M+he*S,Fe=re*-M+Fe*S,Z=tt*-M+Z*S,q=Y,H=G,re=ae),C=Us(-z,Fe),p=C*Qr,C&&(S=Math.cos(-C),M=Math.sin(-C),Y=L*S-D*M,G=N*S-he*M,ae=z*S-Fe*M,Z=B*M+Z*S,L=Y,N=G,z=ae),C=Us(N,L),_=C*Qr,C&&(S=Math.cos(C),M=Math.sin(C),Y=L*S+N*M,G=q*S+H*M,N=N*S-L*M,H=H*S-q*M,L=Y,q=G),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),f=$t(Math.sqrt(L*L+N*N+z*z)),g=$t(Math.sqrt(H*H+re*re)),C=Us(q,H),y=Math.abs(C)>2e-4?C*Qr:0,v=Z?1/(Z<0?-Z:Z):0),n.svg&&(Y=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Ym(Bi(e,Vt)),Y&&e.setAttribute("transform",Y))),Math.abs(y)>90&&Math.abs(y)<270&&(s?(f*=-1,y+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,y+=y<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=d+a,n.scaleX=$t(f),n.scaleY=$t(g),n.rotation=$t(_)+o,n.rotationX=$t(m)+o,n.rotationY=$t(p)+o,n.skewX=y+o,n.skewY=x+o,n.transformPerspective=v+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(r[qn]=nc(c)),n.xOffset=n.yOffset=0,n.force3D=si.force3D,n.renderTransform=n.svg?ev:Vm?qm:Q_,n.uncache=0,n},nc=function(e){return(e=e.split(" "))[0]+" "+e[1]},Vc=function(e,t,n){var r=bn(t);return $t(parseFloat(t)+parseFloat(Br(e,"x",n+"px",r)))+r},Q_=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,qm(e,t)},Xr="0deg",Va="0px",Yr=") ",qm=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,d=n.skewX,f=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,p=n.force3D,y=n.target,x=n.zOrigin,v="",A=p==="auto"&&e&&e!==1||p===!0;if(x&&(h!==Xr||u!==Xr)){var w=parseFloat(u)*ca,E=Math.sin(w),C=Math.cos(w),S;w=parseFloat(h)*ca,S=Math.cos(w),a=Vc(y,a,E*S*-x),o=Vc(y,o,-Math.sin(w)*-x),l=Vc(y,l,C*S*-x+x)}m!==Va&&(v+="perspective("+m+Yr),(r||s)&&(v+="translate("+r+"%, "+s+"%) "),(A||a!==Va||o!==Va||l!==Va)&&(v+=l!==Va||A?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Yr),c!==Xr&&(v+="rotate("+c+Yr),u!==Xr&&(v+="rotateY("+u+Yr),h!==Xr&&(v+="rotateX("+h+Yr),(d!==Xr||f!==Xr)&&(v+="skew("+d+", "+f+Yr),(g!==1||_!==1)&&(v+="scale("+g+", "+_+Yr),y.style[Vt]=v||"translate(0, 0)"},ev=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,d=n.scaleY,f=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,p=n.yOffset,y=n.forceCSS,x=parseFloat(a),v=parseFloat(o),A,w,E,C,S;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=ca,c*=ca,A=Math.cos(l)*h,w=Math.sin(l)*h,E=Math.sin(l-c)*-d,C=Math.cos(l-c)*d,c&&(u*=ca,S=Math.tan(c-u),S=Math.sqrt(1+S*S),E*=S,C*=S,u&&(S=Math.tan(u),S=Math.sqrt(1+S*S),A*=S,w*=S)),A=$t(A),w=$t(w),E=$t(E),C=$t(C)):(A=h,C=d,w=E=0),(x&&!~(a+"").indexOf("px")||v&&!~(o+"").indexOf("px"))&&(x=Br(f,"x",a,"px"),v=Br(f,"y",o,"px")),(g||_||m||p)&&(x=$t(x+g-(g*A+_*E)+m),v=$t(v+_-(g*w+_*C)+p)),(r||s)&&(S=f.getBBox(),x=$t(x+r/100*S.width),v=$t(v+s/100*S.height)),S="matrix("+A+","+w+","+E+","+C+","+x+","+v+")",f.setAttribute("transform",S),y&&(f.style[Vt]=S)},tv=function(e,t,n,r,s){var a=360,o=gn(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?Qr:1),c=l-r,u=r+c+"deg",h,d;return o&&(h=s.split("_")[1],h==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),h==="cw"&&c<0?c=(c+a*cd)%a-~~(c/a)*a:h==="ccw"&&c>0&&(c=(c-a*cd)%a-~~(c/a)*a)),e._pt=d=new Yn(e._pt,t,n,r,c,k_),d.e=u,d.u="deg",e._props.push(n),d},md=function(e,t){for(var n in t)e[n]=t[n];return e},nv=function(e,t,n){var r=md({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,h,d,f,g;r.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[Vt]=t,o=Lo(n,1),ys(n,Vt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Vt],a[Vt]=t,o=Lo(n,1),a[Vt]=c);for(l in hr)c=r[l],u=o[l],c!==u&&s.indexOf(l)<0&&(f=bn(c),g=bn(u),h=f!==g?Br(n,l,c,g):parseFloat(c),d=parseFloat(u),e._pt=new Yn(e._pt,o,l,h,d-h,Gu),e._pt.u=g||0,e._props.push(l));md(o,r)};Xn("padding,margin,Width,Radius",function(i,e){var t="Top",n="Right",r="Bottom",s="Left",a=(e<3?[t,n,r,s]:[t+s,t+n,r+n,r+s]).map(function(o){return e<2?i+o:"border"+o+i});tc[e>1?"border"+i:i]=function(o,l,c,u,h){var d,f;if(arguments.length<4)return d=a.map(function(g){return ir(o,g,c)}),f=d.join(" "),f.split(d[0]).length===5?d[0]:f;d=(u+"").split(" "),f={},a.forEach(function(g,_){return f[g]=d[_]=d[_]||d[(_-1)/2|0]}),o.init(l,f,h)}});var $m={name:"css",register:Xu,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,r,s){var a=this._props,o=e.style,l=n.vars.startAt,c,u,h,d,f,g,_,m,p,y,x,v,A,w,E,C;df||Xu(),this.styles=this.styles||Hm(e),C=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(ti[_]&&Pm(_,t,n,r,e,s)))){if(f=typeof u,g=tc[_],f==="function"&&(u=u.call(n,r,e,s),f=typeof u),f==="string"&&~u.indexOf("random(")&&(u=Ao(u)),g)g(this,e,_,u,n)&&(E=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",Ur.lastIndex=0,Ur.test(c)||(m=bn(c),p=bn(u)),p?m!==p&&(c=Br(e,_,c,p)+p):m&&(u+=m),this.add(o,"setProperty",c,u,r,s,0,0,_),a.push(_),C.push(_,0,o[_]);else if(f!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,r,e,s):l[_],gn(c)&&~c.indexOf("random(")&&(c=Ao(c)),bn(c+"")||c==="auto"||(c+=si.units[_]||bn(ir(e,_))||""),(c+"").charAt(1)==="="&&(c=ir(e,_))):c=ir(e,_),d=parseFloat(c),y=f==="string"&&u.charAt(1)==="="&&u.substr(0,2),y&&(u=u.substr(2)),h=parseFloat(u),_ in Fi&&(_==="autoAlpha"&&(d===1&&ir(e,"visibility")==="hidden"&&h&&(d=0),C.push("visibility",0,o.visibility),Rr(this,o,"visibility",d?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=Fi[_],~_.indexOf(",")&&(_=_.split(",")[0]))),x=_ in hr,x){if(this.styles.save(_),v||(A=e._gsap,A.renderTransform&&!t.parseTransform||Lo(e,t.parseTransform),w=t.smoothOrigin!==!1&&A.smooth,v=this._pt=new Yn(this._pt,o,Vt,0,1,A.renderTransform,A,0,-1),v.dep=1),_==="scale")this._pt=new Yn(this._pt,A,"scaleY",A.scaleY,(y?oa(A.scaleY,y+h):h)-A.scaleY||0,Gu),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){C.push(qn,0,o[qn]),u=J_(u),A.svg?Yu(e,u,0,w,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==A.zOrigin&&Rr(this,A,"zOrigin",A.zOrigin,p),Rr(this,o,_,nc(c),nc(u)));continue}else if(_==="svgOrigin"){Yu(e,u,1,w,0,this);continue}else if(_ in Xm){tv(this,A,_,d,y?oa(d,y+u):u);continue}else if(_==="smoothOrigin"){Rr(this,A,"smooth",A.smooth,u);continue}else if(_==="force3D"){A[_]=u;continue}else if(_==="transform"){nv(this,u,e);continue}}else _ in o||(_=Ma(_)||_);if(x||(h||h===0)&&(d||d===0)&&!F_.test(u)&&_ in o)m=(c+"").substr((d+"").length),h||(h=0),p=bn(u)||(_ in si.units?si.units[_]:m),m!==p&&(d=Br(e,_,c,p)),this._pt=new Yn(this._pt,x?A:o,_,d,(y?oa(d,y+h):h)-d,!x&&(p==="px"||_==="zIndex")&&t.autoRound!==!1?B_:Gu),this._pt.u=p||0,m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=z_);else if(_ in o)K_.call(this,e,_,c,y?y+u:u);else if(_ in e)this.add(e,_,c||e[_],y?y+u:u,r,s);else if(_!=="parseTransform"){rf(_,u);continue}x||(_ in o?C.push(_,0,o[_]):C.push(_,1,c||e[_])),a.push(_)}}E&&Om(this)},render:function(e,t){if(t.tween._time||!pf())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:ir,aliases:Fi,getSetter:function(e,t,n){var r=Fi[t];return r&&r.indexOf(",")<0&&(t=r),t in hr&&t!==qn&&(e._gsap.x||ir(e,"x"))?n&&ld===n?t==="scale"?W_:G_:(ld=n||{})&&(t==="scale"?X_:Y_):e.style&&!ef(e.style[t])?H_:~t.indexOf("-")?V_:hf(e,t)},core:{_removeProperty:ys,_getMatrix:gf}};$n.utils.checkPrefix=Ma;$n.core.getStyleSaver=Hm;(function(i,e,t,n){var r=Xn(i+","+e+","+t,function(s){hr[s]=1});Xn(e,function(s){si.units[s]="deg",Xm[s]=1}),Fi[r[13]]=i+","+e,Xn(n,function(s){var a=s.split(":");Fi[a[1]]=r[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Xn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){si.units[i]="px"});$n.registerPlugin($m);var ot=$n.registerPlugin($m)||$n;ot.core.Tween;function iv(i,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(i,n.key,n)}}function rv(i,e,t){return e&&iv(i.prototype,e),i}/*!
 * Observer 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var vn,kl,ii,Pr,Lr,ua,Zm,es,co,Km,sr,Ei,Jm,jm=function(){return vn||typeof window<"u"&&(vn=window.gsap)&&vn.registerPlugin&&vn},Qm=1,ra=[],ht=[],Hi=[],uo=Date.now,qu=function(e,t){return t},sv=function(){var e=co.core,t=e.bridge||{},n=e._scrollers,r=e._proxies;n.push.apply(n,ht),r.push.apply(r,Hi),ht=n,Hi=r,qu=function(a,o){return t[a](o)}},Nr=function(e,t){return~Hi.indexOf(e)&&Hi[Hi.indexOf(e)+1][t]},ho=function(e){return!!~Km.indexOf(e)},Rn=function(e,t,n,r,s){return e.addEventListener(t,n,{passive:r!==!1,capture:!!s})},Cn=function(e,t,n,r){return e.removeEventListener(t,n,!!r)},Zo="scrollLeft",Ko="scrollTop",$u=function(){return sr&&sr.isPressed||ht.cache++},ic=function(e,t){var n=function r(s){if(s||s===0){Qm&&(ii.history.scrollRestoration="manual");var a=sr&&sr.isPressed;s=r.v=Math.round(s)||(sr&&sr.iOS?1:0),e(s),r.cacheID=ht.cache,a&&qu("ss",s)}else(t||ht.cache!==r.cacheID||qu("ref"))&&(r.cacheID=ht.cache,r.v=e());return r.v+r.offset};return n.offset=0,e&&n},Fn={s:Zo,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:ic(function(i){return arguments.length?ii.scrollTo(i,sn.sc()):ii.pageXOffset||Pr[Zo]||Lr[Zo]||ua[Zo]||0})},sn={s:Ko,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Fn,sc:ic(function(i){return arguments.length?ii.scrollTo(Fn.sc(),i):ii.pageYOffset||Pr[Ko]||Lr[Ko]||ua[Ko]||0})},Vn=function(e,t){return(t&&t._ctx&&t._ctx.selector||vn.utils.toArray)(e)[0]||(typeof e=="string"&&vn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},Hr=function(e,t){var n=t.s,r=t.sc;ho(e)&&(e=Pr.scrollingElement||Lr);var s=ht.indexOf(e),a=r===sn.sc?1:2;!~s&&(s=ht.push(e)-1),ht[s+a]||Rn(e,"scroll",$u);var o=ht[s+a],l=o||(ht[s+a]=ic(Nr(e,n),!0)||(ho(e)?r:ic(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,o||(l.smooth=vn.getProperty(e,"scrollBehavior")==="smooth"),l},Zu=function(e,t,n){var r=e,s=e,a=uo(),o=a,l=t||50,c=Math.max(500,l*3),u=function(g,_){var m=uo();_||m-a>l?(s=r,r=g,o=a,a=m):n?r+=g:r=s+(g-s)/(m-o)*(a-o)},h=function(){s=r=n?0:r,o=a=0},d=function(g){var _=o,m=s,p=uo();return(g||g===0)&&g!==r&&u(g),a===o||p-o>c?0:(r+(n?m:-m))/((n?p:a)-_)*1e3};return{update:u,reset:h,getVelocity:d}},Ga=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},gd=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},e0=function(){co=vn.core.globals().ScrollTrigger,co&&co.core&&sv()},t0=function(e){return vn=e||jm(),!kl&&vn&&typeof document<"u"&&document.body&&(ii=window,Pr=document,Lr=Pr.documentElement,ua=Pr.body,Km=[ii,Pr,Lr,ua],vn.utils.clamp,Jm=vn.core.context||function(){},es="onpointerenter"in ua?"pointer":"mouse",Zm=Zt.isTouch=ii.matchMedia&&ii.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in ii||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Ei=Zt.eventTypes=("ontouchstart"in Lr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Lr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Qm=0},500),e0(),kl=1),kl};Fn.op=sn;ht.cache=0;var Zt=function(){function i(t){this.init(t)}var e=i.prototype;return e.init=function(n){kl||t0(vn)||console.warn("Please gsap.registerPlugin(Observer)"),co||e0();var r=n.tolerance,s=n.dragMinimum,a=n.type,o=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,h=n.onStop,d=n.onStopDelay,f=n.ignore,g=n.wheelSpeed,_=n.event,m=n.onDragStart,p=n.onDragEnd,y=n.onDrag,x=n.onPress,v=n.onRelease,A=n.onRight,w=n.onLeft,E=n.onUp,C=n.onDown,S=n.onChangeX,M=n.onChangeY,L=n.onChange,N=n.onToggleX,z=n.onToggleY,B=n.onHover,q=n.onHoverEnd,H=n.onMove,Y=n.ignoreCheck,G=n.isNormalizer,ae=n.onGestureStart,D=n.onGestureEnd,he=n.onWheel,Fe=n.onEnable,tt=n.onDisable,Z=n.onClick,re=n.scrollSpeed,be=n.capture,oe=n.allowClicks,Le=n.lockAxis,Ue=n.onLockAxis;this.target=o=Vn(o)||Lr,this.vars=n,f&&(f=vn.utils.toArray(f)),r=r||1e-9,s=s||0,g=g||1,re=re||1,a=a||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(ii.getComputedStyle(ua).lineHeight)||22);var ze,Xe,ne,ee,P,Ae,ie,F=this,ce=0,ke=0,we=n.passive||!u,R=Hr(o,Fn),b=Hr(o,sn),V=R(),j=b(),Q=~a.indexOf("touch")&&!~a.indexOf("pointer")&&Ei[0]==="pointerdown",J=ho(o),ge=o.ownerDocument||Pr,de=[0,0,0],ye=[0,0,0],Ke=0,le=function(){return Ke=uo()},pe=function(Ne,rt){return(F.event=Ne)&&f&&~f.indexOf(Ne.target)||rt&&Q&&Ne.pointerType!=="touch"||Y&&Y(Ne,rt)},Ge=function(){F._vx.reset(),F._vy.reset(),Xe.pause(),h&&h(F)},Ve=function(){var Ne=F.deltaX=gd(de),rt=F.deltaY=gd(ye),Ee=Math.abs(Ne)>=r,Je=Math.abs(rt)>=r;L&&(Ee||Je)&&L(F,Ne,rt,de,ye),Ee&&(A&&F.deltaX>0&&A(F),w&&F.deltaX<0&&w(F),S&&S(F),N&&F.deltaX<0!=ce<0&&N(F),ce=F.deltaX,de[0]=de[1]=de[2]=0),Je&&(C&&F.deltaY>0&&C(F),E&&F.deltaY<0&&E(F),M&&M(F),z&&F.deltaY<0!=ke<0&&z(F),ke=F.deltaY,ye[0]=ye[1]=ye[2]=0),(ee||ne)&&(H&&H(F),ne&&(y(F),ne=!1),ee=!1),Ae&&!(Ae=!1)&&Ue&&Ue(F),P&&(he(F),P=!1),ze=0},Re=function(Ne,rt,Ee){de[Ee]+=Ne,ye[Ee]+=rt,F._vx.update(Ne),F._vy.update(rt),c?ze||(ze=requestAnimationFrame(Ve)):Ve()},it=function(Ne,rt){Le&&!ie&&(F.axis=ie=Math.abs(Ne)>Math.abs(rt)?"x":"y",Ae=!0),ie!=="y"&&(de[2]+=Ne,F._vx.update(Ne,!0)),ie!=="x"&&(ye[2]+=rt,F._vy.update(rt,!0)),c?ze||(ze=requestAnimationFrame(Ve)):Ve()},Ye=function(Ne){if(!pe(Ne,1)){Ne=Ga(Ne,u);var rt=Ne.clientX,Ee=Ne.clientY,Je=rt-F.x,Oe=Ee-F.y,Ze=F.isDragging;F.x=rt,F.y=Ee,(Ze||Math.abs(F.startX-rt)>=s||Math.abs(F.startY-Ee)>=s)&&(y&&(ne=!0),Ze||(F.isDragging=!0),it(Je,Oe),Ze||m&&m(F))}},pt=F.onPress=function(Ce){pe(Ce,1)||Ce&&Ce.button||(F.axis=ie=null,Xe.pause(),F.isPressed=!0,Ce=Ga(Ce),ce=ke=0,F.startX=F.x=Ce.clientX,F.startY=F.y=Ce.clientY,F._vx.reset(),F._vy.reset(),Rn(G?o:ge,Ei[1],Ye,we,!0),F.deltaX=F.deltaY=0,x&&x(F))},U=F.onRelease=function(Ce){if(!pe(Ce,1)){Cn(G?o:ge,Ei[1],Ye,!0);var Ne=!isNaN(F.y-F.startY),rt=F.isDragging,Ee=rt&&(Math.abs(F.x-F.startX)>3||Math.abs(F.y-F.startY)>3),Je=Ga(Ce);!Ee&&Ne&&(F._vx.reset(),F._vy.reset(),u&&oe&&vn.delayedCall(.08,function(){if(uo()-Ke>300&&!Ce.defaultPrevented){if(Ce.target.click)Ce.target.click();else if(ge.createEvent){var Oe=ge.createEvent("MouseEvents");Oe.initMouseEvent("click",!0,!0,ii,1,Je.screenX,Je.screenY,Je.clientX,Je.clientY,!1,!1,!1,!1,0,null),Ce.target.dispatchEvent(Oe)}}})),F.isDragging=F.isGesturing=F.isPressed=!1,h&&rt&&!G&&Xe.restart(!0),p&&rt&&p(F),v&&v(F,Ee)}},ve=function(Ne){return Ne.touches&&Ne.touches.length>1&&(F.isGesturing=!0)&&ae(Ne,F.isDragging)},$=function(){return(F.isGesturing=!1)||D(F)},te=function(Ne){if(!pe(Ne)){var rt=R(),Ee=b();Re((rt-V)*re,(Ee-j)*re,1),V=rt,j=Ee,h&&Xe.restart(!0)}},_e=function(Ne){if(!pe(Ne)){Ne=Ga(Ne,u),he&&(P=!0);var rt=(Ne.deltaMode===1?l:Ne.deltaMode===2?ii.innerHeight:1)*g;Re(Ne.deltaX*rt,Ne.deltaY*rt,0),h&&!G&&Xe.restart(!0)}},Me=function(Ne){if(!pe(Ne)){var rt=Ne.clientX,Ee=Ne.clientY,Je=rt-F.x,Oe=Ee-F.y;F.x=rt,F.y=Ee,ee=!0,h&&Xe.restart(!0),(Je||Oe)&&it(Je,Oe)}},qe=function(Ne){F.event=Ne,B(F)},gt=function(Ne){F.event=Ne,q(F)},Wt=function(Ne){return pe(Ne)||Ga(Ne,u)&&Z(F)};Xe=F._dc=vn.delayedCall(d||.25,Ge).pause(),F.deltaX=F.deltaY=0,F._vx=Zu(0,50,!0),F._vy=Zu(0,50,!0),F.scrollX=R,F.scrollY=b,F.isDragging=F.isGesturing=F.isPressed=!1,Jm(this),F.enable=function(Ce){return F.isEnabled||(Rn(J?ge:o,"scroll",$u),a.indexOf("scroll")>=0&&Rn(J?ge:o,"scroll",te,we,be),a.indexOf("wheel")>=0&&Rn(o,"wheel",_e,we,be),(a.indexOf("touch")>=0&&Zm||a.indexOf("pointer")>=0)&&(Rn(o,Ei[0],pt,we,be),Rn(ge,Ei[2],U),Rn(ge,Ei[3],U),oe&&Rn(o,"click",le,!0,!0),Z&&Rn(o,"click",Wt),ae&&Rn(ge,"gesturestart",ve),D&&Rn(ge,"gestureend",$),B&&Rn(o,es+"enter",qe),q&&Rn(o,es+"leave",gt),H&&Rn(o,es+"move",Me)),F.isEnabled=!0,Ce&&Ce.type&&pt(Ce),Fe&&Fe(F)),F},F.disable=function(){F.isEnabled&&(ra.filter(function(Ce){return Ce!==F&&ho(Ce.target)}).length||Cn(J?ge:o,"scroll",$u),F.isPressed&&(F._vx.reset(),F._vy.reset(),Cn(G?o:ge,Ei[1],Ye,!0)),Cn(J?ge:o,"scroll",te,be),Cn(o,"wheel",_e,be),Cn(o,Ei[0],pt,be),Cn(ge,Ei[2],U),Cn(ge,Ei[3],U),Cn(o,"click",le,!0),Cn(o,"click",Wt),Cn(ge,"gesturestart",ve),Cn(ge,"gestureend",$),Cn(o,es+"enter",qe),Cn(o,es+"leave",gt),Cn(o,es+"move",Me),F.isEnabled=F.isPressed=F.isDragging=!1,tt&&tt(F))},F.kill=F.revert=function(){F.disable();var Ce=ra.indexOf(F);Ce>=0&&ra.splice(Ce,1),sr===F&&(sr=0)},ra.push(F),G&&ho(o)&&(sr=F),F.enable(_)},rv(i,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),i}();Zt.version="3.12.5";Zt.create=function(i){return new Zt(i)};Zt.register=t0;Zt.getAll=function(){return ra.slice()};Zt.getById=function(i){return ra.filter(function(e){return e.vars.id===i})[0]};jm()&&vn.registerPlugin(Zt);/*!
 * ScrollTrigger 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var De,Qs,ft,Bt,wi,Ut,n0,rc,Do,fo,Qa,Jo,Mn,vc,Ku,In,_d,vd,ea,i0,Gc,r0,Dn,Ju,s0,a0,Er,ju,_f,ha,vf,sc,Qu,Wc,jo=1,Sn=Date.now,Xc=Sn(),gi=0,eo=0,xd=function(e,t,n){var r=ei(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=r,r?e.substr(6,e.length-7):e},yd=function(e,t){return t&&(!ei(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},av=function i(){return eo&&requestAnimationFrame(i)},Md=function(){return vc=1},Sd=function(){return vc=0},Ui=function(e){return e},to=function(e){return Math.round(e*1e5)/1e5||0},o0=function(){return typeof window<"u"},l0=function(){return De||o0()&&(De=window.gsap)&&De.registerPlugin&&De},Ms=function(e){return!!~n0.indexOf(e)},c0=function(e){return(e==="Height"?vf:ft["inner"+e])||wi["client"+e]||Ut["client"+e]},u0=function(e){return Nr(e,"getBoundingClientRect")||(Ms(e)?function(){return Gl.width=ft.innerWidth,Gl.height=vf,Gl}:function(){return rr(e)})},ov=function(e,t,n){var r=n.d,s=n.d2,a=n.a;return(a=Nr(e,"getBoundingClientRect"))?function(){return a()[r]}:function(){return(t?c0(s):e["client"+s])||0}},lv=function(e,t){return!t||~Hi.indexOf(e)?u0(e):function(){return Gl}},ki=function(e,t){var n=t.s,r=t.d2,s=t.d,a=t.a;return Math.max(0,(n="scroll"+r)&&(a=Nr(e,n))?a()-u0(e)()[s]:Ms(e)?(wi[n]||Ut[n])-c0(r):e[n]-e["offset"+r])},Qo=function(e,t){for(var n=0;n<ea.length;n+=3)(!t||~t.indexOf(ea[n+1]))&&e(ea[n],ea[n+1],ea[n+2])},ei=function(e){return typeof e=="string"},kn=function(e){return typeof e=="function"},no=function(e){return typeof e=="number"},ts=function(e){return typeof e=="object"},Wa=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},Yc=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},Ns=Math.abs,h0="left",f0="top",xf="right",yf="bottom",gs="width",_s="height",po="Right",mo="Left",go="Top",_o="Bottom",en="padding",hi="margin",Sa="Width",Mf="Height",rn="px",fi=function(e){return ft.getComputedStyle(e)},cv=function(e){var t=fi(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},bd=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},rr=function(e,t){var n=t&&fi(e)[Ku]!=="matrix(1, 0, 0, 1, 0, 0)"&&De.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect();return n&&n.progress(0).kill(),r},ac=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},d0=function(e){var t=[],n=e.labels,r=e.duration(),s;for(s in n)t.push(n[s]/r);return t},uv=function(e){return function(t){return De.utils.snap(d0(e),t)}},Sf=function(e){var t=De.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(r,s){return r-s});return n?function(r,s,a){a===void 0&&(a=.001);var o;if(!s)return t(r);if(s>0){for(r-=a,o=0;o<n.length;o++)if(n[o]>=r)return n[o];return n[o-1]}else for(o=n.length,r+=a;o--;)if(n[o]<=r)return n[o];return n[0]}:function(r,s,a){a===void 0&&(a=.001);var o=t(r);return!s||Math.abs(o-r)<a||o-r<0==s<0?o:t(s<0?r-e:r+e)}},hv=function(e){return function(t,n){return Sf(d0(e))(t,n.direction)}},el=function(e,t,n,r){return n.split(",").forEach(function(s){return e(t,s,r)})},hn=function(e,t,n,r,s){return e.addEventListener(t,n,{passive:!r,capture:!!s})},un=function(e,t,n,r){return e.removeEventListener(t,n,!!r)},tl=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},Ed={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},nl={toggleActions:"play",anticipatePin:0},oc={top:0,left:0,center:.5,bottom:1,right:1},zl=function(e,t){if(ei(e)){var n=e.indexOf("="),r=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(r*=t/100),e=e.substr(0,n-1)),e=r+(e in oc?oc[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},il=function(e,t,n,r,s,a,o,l){var c=s.startColor,u=s.endColor,h=s.fontSize,d=s.indent,f=s.fontWeight,g=Bt.createElement("div"),_=Ms(n)||Nr(n,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,p=_?Ut:n,y=e.indexOf("start")!==-1,x=y?c:u,v="border-color:"+x+";font-size:"+h+";color:"+x+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return v+="position:"+((m||l)&&_?"fixed;":"absolute;"),(m||l||!_)&&(v+=(r===sn?xf:yf)+":"+(a+parseFloat(d))+"px;"),o&&(v+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),g._isStart=y,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=v,g.innerText=t||t===0?e+"-"+t:e,p.children[0]?p.insertBefore(g,p.children[0]):p.appendChild(g),g._offset=g["offset"+r.op.d2],Bl(g,0,r,y),g},Bl=function(e,t,n,r){var s={display:"block"},a=n[r?"os2":"p2"],o=n[r?"p2":"os2"];e._isFlipped=r,s[n.a+"Percent"]=r?-100:0,s[n.a]=r?"1px":0,s["border"+a+Sa]=1,s["border"+o+Sa]=0,s[n.p]=t+"px",De.set(e,s)},ct=[],eh={},Io,wd=function(){return Sn()-gi>34&&(Io||(Io=requestAnimationFrame(lr)))},Os=function(){(!Dn||!Dn.isPressed||Dn.startX>Ut.clientWidth)&&(ht.cache++,Dn?Io||(Io=requestAnimationFrame(lr)):lr(),gi||bs("scrollStart"),gi=Sn())},qc=function(){a0=ft.innerWidth,s0=ft.innerHeight},io=function(){ht.cache++,!Mn&&!r0&&!Bt.fullscreenElement&&!Bt.webkitFullscreenElement&&(!Ju||a0!==ft.innerWidth||Math.abs(ft.innerHeight-s0)>ft.innerHeight*.25)&&rc.restart(!0)},Ss={},fv=[],p0=function i(){return un(je,"scrollEnd",i)||ls(!0)},bs=function(e){return Ss[e]&&Ss[e].map(function(t){return t()})||fv},Qn=[],m0=function(e){for(var t=0;t<Qn.length;t+=5)(!e||Qn[t+4]&&Qn[t+4].query===e)&&(Qn[t].style.cssText=Qn[t+1],Qn[t].getBBox&&Qn[t].setAttribute("transform",Qn[t+2]||""),Qn[t+3].uncache=1)},bf=function(e,t){var n;for(In=0;In<ct.length;In++)n=ct[In],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));sc=!0,t&&m0(t),t||bs("revert")},g0=function(e,t){ht.cache++,(t||!Un)&&ht.forEach(function(n){return kn(n)&&n.cacheID++&&(n.rec=0)}),ei(e)&&(ft.history.scrollRestoration=_f=e)},Un,vs=0,Td,dv=function(){if(Td!==vs){var e=Td=vs;requestAnimationFrame(function(){return e===vs&&ls(!0)})}},_0=function(){Ut.appendChild(ha),vf=!Dn&&ha.offsetHeight||ft.innerHeight,Ut.removeChild(ha)},Ad=function(e){return Do(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},ls=function(e,t){if(gi&&!e&&!sc){hn(je,"scrollEnd",p0);return}_0(),Un=je.isRefreshing=!0,ht.forEach(function(r){return kn(r)&&++r.cacheID&&(r.rec=r())});var n=bs("refreshInit");i0&&je.sort(),t||bf(),ht.forEach(function(r){kn(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),ct.slice(0).forEach(function(r){return r.refresh()}),sc=!1,ct.forEach(function(r){if(r._subPinOffset&&r.pin){var s=r.vars.horizontal?"offsetWidth":"offsetHeight",a=r.pin[s];r.revert(!0,1),r.adjustPinSpacing(r.pin[s]-a),r.refresh()}}),Qu=1,Ad(!0),ct.forEach(function(r){var s=ki(r.scroller,r._dir),a=r.vars.end==="max"||r._endClamp&&r.end>s,o=r._startClamp&&r.start>=s;(a||o)&&r.setPositions(o?s-1:r.start,a?Math.max(o?s:r.start+1,s):r.end,!0)}),Ad(!1),Qu=0,n.forEach(function(r){return r&&r.render&&r.render(-1)}),ht.forEach(function(r){kn(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),g0(_f,1),rc.pause(),vs++,Un=2,lr(2),ct.forEach(function(r){return kn(r.vars.onRefresh)&&r.vars.onRefresh(r)}),Un=je.isRefreshing=!1,bs("refresh")},th=0,Hl=1,vo,lr=function(e){if(e===2||!Un&&!sc){je.isUpdating=!0,vo&&vo.update(0);var t=ct.length,n=Sn(),r=n-Xc>=50,s=t&&ct[0].scroll();if(Hl=th>s?-1:1,Un||(th=s),r&&(gi&&!vc&&n-gi>200&&(gi=0,bs("scrollEnd")),Qa=Xc,Xc=n),Hl<0){for(In=t;In-- >0;)ct[In]&&ct[In].update(0,r);Hl=1}else for(In=0;In<t;In++)ct[In]&&ct[In].update(0,r);je.isUpdating=!1}Io=0},nh=[h0,f0,yf,xf,hi+_o,hi+po,hi+go,hi+mo,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Vl=nh.concat([gs,_s,"boxSizing","max"+Sa,"max"+Mf,"position",hi,en,en+go,en+po,en+_o,en+mo]),pv=function(e,t,n){fa(n);var r=e._gsap;if(r.spacerIsNative)fa(r.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},$c=function(e,t,n,r){if(!e._gsap.swappedIn){for(var s=nh.length,a=t.style,o=e.style,l;s--;)l=nh[s],a[l]=n[l];a.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(a.display="inline-block"),o[yf]=o[xf]="auto",a.flexBasis=n.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[gs]=ac(e,Fn)+rn,a[_s]=ac(e,sn)+rn,a[en]=o[hi]=o[f0]=o[h0]="0",fa(r),o[gs]=o["max"+Sa]=n[gs],o[_s]=o["max"+Mf]=n[_s],o[en]=n[en],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},mv=/([A-Z])/g,fa=function(e){if(e){var t=e.t.style,n=e.length,r=0,s,a;for((e.t._gsap||De.core.getCache(e.t)).uncache=1;r<n;r+=2)a=e[r+1],s=e[r],a?t[s]=a:t[s]&&t.removeProperty(s.replace(mv,"-$1").toLowerCase())}},rl=function(e){for(var t=Vl.length,n=e.style,r=[],s=0;s<t;s++)r.push(Vl[s],n[Vl[s]]);return r.t=e,r},gv=function(e,t,n){for(var r=[],s=e.length,a=n?8:0,o;a<s;a+=2)o=e[a],r.push(o,o in t?t[o]:e[a+1]);return r.t=e.t,r},Gl={left:0,top:0},Cd=function(e,t,n,r,s,a,o,l,c,u,h,d,f,g){kn(e)&&(e=e(l)),ei(e)&&e.substr(0,3)==="max"&&(e=d+(e.charAt(4)==="="?zl("0"+e.substr(3),n):0));var _=f?f.time():0,m,p,y;if(f&&f.seek(0),isNaN(e)||(e=+e),no(e))f&&(e=De.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,d,e)),o&&Bl(o,n,r,!0);else{kn(t)&&(t=t(l));var x=(e||"0").split(" "),v,A,w,E;y=Vn(t,l)||Ut,v=rr(y)||{},(!v||!v.left&&!v.top)&&fi(y).display==="none"&&(E=y.style.display,y.style.display="block",v=rr(y),E?y.style.display=E:y.style.removeProperty("display")),A=zl(x[0],v[r.d]),w=zl(x[1]||"0",n),e=v[r.p]-c[r.p]-u+A+s-w,o&&Bl(o,w,r,n-w<20||o._isStart&&w>20),n-=n-w}if(g&&(l[g]=e||-.001,e<0&&(e=0)),a){var C=e+n,S=a._isStart;m="scroll"+r.d2,Bl(a,C,r,S&&C>20||!S&&(h?Math.max(Ut[m],wi[m]):a.parentNode[m])<=C+1),h&&(c=rr(o),h&&(a.style[r.op.p]=c[r.op.p]-r.op.m-a._offset+rn))}return f&&y&&(m=rr(y),f.seek(d),p=rr(y),f._caScrollDist=m[r.p]-p[r.p],e=e/f._caScrollDist*d),f&&f.seek(_),f?e:Math.round(e)},_v=/(webkit|moz|length|cssText|inset)/i,Rd=function(e,t,n,r){if(e.parentNode!==t){var s=e.style,a,o;if(t===Ut){e._stOrig=s.cssText,o=fi(e);for(a in o)!+a&&!_v.test(a)&&o[a]&&typeof s[a]=="string"&&a!=="0"&&(s[a]=o[a]);s.top=n,s.left=r}else s.cssText=e._stOrig;De.core.getCache(e).uncache=1,t.appendChild(e)}},v0=function(e,t,n){var r=t,s=r;return function(a){var o=Math.round(e());return o!==r&&o!==s&&Math.abs(o-r)>3&&Math.abs(o-s)>3&&(a=o,n&&n()),s=r,r=a,a}},sl=function(e,t,n){var r={};r[t.p]="+="+n,De.set(e,r)},Pd=function(e,t){var n=Hr(e,t),r="_scroll"+t.p2,s=function a(o,l,c,u,h){var d=a.tween,f=l.onComplete,g={};c=c||n();var _=v0(n,c,function(){d.kill(),a.tween=0});return h=u&&h||0,u=u||o-c,d&&d.kill(),l[r]=o,l.inherit=!1,l.modifiers=g,g[r]=function(){return _(c+u*d.ratio+h*d.ratio*d.ratio)},l.onUpdate=function(){ht.cache++,a.tween&&lr()},l.onComplete=function(){a.tween=0,f&&f.call(d)},d=a.tween=De.to(e,l),d};return e[r]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},hn(e,"wheel",n.wheelHandler),je.isTouch&&hn(e,"touchmove",n.wheelHandler),s},je=function(){function i(t,n){Qs||i.register(De)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),ju(this),this.init(t,n)}var e=i.prototype;return e.init=function(n,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!eo){this.update=this.refresh=this.kill=Ui;return}n=bd(ei(n)||no(n)||n.nodeType?{trigger:n}:n,nl);var s=n,a=s.onUpdate,o=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,h=s.scrub,d=s.trigger,f=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,m=s.anticipatePin,p=s.onScrubComplete,y=s.onSnapComplete,x=s.once,v=s.snap,A=s.pinReparent,w=s.pinSpacer,E=s.containerAnimation,C=s.fastScrollEnd,S=s.preventOverlaps,M=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Fn:sn,L=!h&&h!==0,N=Vn(n.scroller||ft),z=De.core.getCache(N),B=Ms(N),q=("pinType"in n?n.pinType:Nr(N,"pinType")||B&&"fixed")==="fixed",H=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],Y=L&&n.toggleActions.split(" "),G="markers"in n?n.markers:nl.markers,ae=B?0:parseFloat(fi(N)["border"+M.p2+Sa])||0,D=this,he=n.onRefreshInit&&function(){return n.onRefreshInit(D)},Fe=ov(N,B,M),tt=lv(N,B),Z=0,re=0,be=0,oe=Hr(N,M),Le,Ue,ze,Xe,ne,ee,P,Ae,ie,F,ce,ke,we,R,b,V,j,Q,J,ge,de,ye,Ke,le,pe,Ge,Ve,Re,it,Ye,pt,U,ve,$,te,_e,Me,qe,gt;if(D._startClamp=D._endClamp=!1,D._dir=M,m*=45,D.scroller=N,D.scroll=E?E.time.bind(E):oe,Xe=oe(),D.vars=n,r=r||n.animation,"refreshPriority"in n&&(i0=1,n.refreshPriority===-9999&&(vo=D)),z.tweenScroll=z.tweenScroll||{top:Pd(N,sn),left:Pd(N,Fn)},D.tweenTo=Le=z.tweenScroll[M.p],D.scrubDuration=function(Ee){ve=no(Ee)&&Ee,ve?U?U.duration(Ee):U=De.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:ve,paused:!0,onComplete:function(){return p&&p(D)}}):(U&&U.progress(1).kill(),U=0)},r&&(r.vars.lazy=!1,r._initted&&!D.isReverted||r.vars.immediateRender!==!1&&n.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),D.animation=r.pause(),r.scrollTrigger=D,D.scrubDuration(h),Ye=0,l||(l=r.vars.id)),v&&((!ts(v)||v.push)&&(v={snapTo:v}),"scrollBehavior"in Ut.style&&De.set(B?[Ut,wi]:N,{scrollBehavior:"auto"}),ht.forEach(function(Ee){return kn(Ee)&&Ee.target===(B?Bt.scrollingElement||wi:N)&&(Ee.smooth=!1)}),ze=kn(v.snapTo)?v.snapTo:v.snapTo==="labels"?uv(r):v.snapTo==="labelsDirectional"?hv(r):v.directional!==!1?function(Ee,Je){return Sf(v.snapTo)(Ee,Sn()-re<500?0:Je.direction)}:De.utils.snap(v.snapTo),$=v.duration||{min:.1,max:2},$=ts($)?fo($.min,$.max):fo($,$),te=De.delayedCall(v.delay||ve/2||.1,function(){var Ee=oe(),Je=Sn()-re<500,Oe=Le.tween;if((Je||Math.abs(D.getVelocity())<10)&&!Oe&&!vc&&Z!==Ee){var Ze=(Ee-ee)/R,qt=r&&!L?r.totalProgress():Ze,lt=Je?0:(qt-pt)/(Sn()-Qa)*1e3||0,Pt=De.utils.clamp(-Ze,1-Ze,Ns(lt/2)*lt/.185),nn=Ze+(v.inertia===!1?0:Pt),Tt,At,xt=v,Zn=xt.onStart,Dt=xt.onInterrupt,An=xt.onComplete;if(Tt=ze(nn,D),no(Tt)||(Tt=nn),At=Math.round(ee+Tt*R),Ee<=P&&Ee>=ee&&At!==Ee){if(Oe&&!Oe._initted&&Oe.data<=Ns(At-Ee))return;v.inertia===!1&&(Pt=Tt-Ze),Le(At,{duration:$(Ns(Math.max(Ns(nn-qt),Ns(Tt-qt))*.185/lt/.05||0)),ease:v.ease||"power3",data:Ns(At-Ee),onInterrupt:function(){return te.restart(!0)&&Dt&&Dt(D)},onComplete:function(){D.update(),Z=oe(),r&&(U?U.resetTo("totalProgress",Tt,r._tTime/r._tDur):r.progress(Tt)),Ye=pt=r&&!L?r.totalProgress():D.progress,y&&y(D),An&&An(D)}},Ee,Pt*R,At-Ee-Pt*R),Zn&&Zn(D,Le.tween)}}else D.isActive&&Z!==Ee&&te.restart(!0)}).pause()),l&&(eh[l]=D),d=D.trigger=Vn(d||f!==!0&&f),gt=d&&d._gsap&&d._gsap.stRevert,gt&&(gt=gt(D)),f=f===!0?d:Vn(f),ei(o)&&(o={targets:d,className:o}),f&&(g===!1||g===hi||(g=!g&&f.parentNode&&f.parentNode.style&&fi(f.parentNode).display==="flex"?!1:en),D.pin=f,Ue=De.core.getCache(f),Ue.spacer?b=Ue.pinState:(w&&(w=Vn(w),w&&!w.nodeType&&(w=w.current||w.nativeElement),Ue.spacerIsNative=!!w,w&&(Ue.spacerState=rl(w))),Ue.spacer=Q=w||Bt.createElement("div"),Q.classList.add("pin-spacer"),l&&Q.classList.add("pin-spacer-"+l),Ue.pinState=b=rl(f)),n.force3D!==!1&&De.set(f,{force3D:!0}),D.spacer=Q=Ue.spacer,it=fi(f),le=it[g+M.os2],ge=De.getProperty(f),de=De.quickSetter(f,M.a,rn),$c(f,Q,it),j=rl(f)),G){ke=ts(G)?bd(G,Ed):Ed,F=il("scroller-start",l,N,M,ke,0),ce=il("scroller-end",l,N,M,ke,0,F),J=F["offset"+M.op.d2];var Wt=Vn(Nr(N,"content")||N);Ae=this.markerStart=il("start",l,Wt,M,ke,J,0,E),ie=this.markerEnd=il("end",l,Wt,M,ke,J,0,E),E&&(qe=De.quickSetter([Ae,ie],M.a,rn)),!q&&!(Hi.length&&Nr(N,"fixedMarkers")===!0)&&(cv(B?Ut:N),De.set([F,ce],{force3D:!0}),Ge=De.quickSetter(F,M.a,rn),Re=De.quickSetter(ce,M.a,rn))}if(E){var Ce=E.vars.onUpdate,Ne=E.vars.onUpdateParams;E.eventCallback("onUpdate",function(){D.update(0,0,1),Ce&&Ce.apply(E,Ne||[])})}if(D.previous=function(){return ct[ct.indexOf(D)-1]},D.next=function(){return ct[ct.indexOf(D)+1]},D.revert=function(Ee,Je){if(!Je)return D.kill(!0);var Oe=Ee!==!1||!D.enabled,Ze=Mn;Oe!==D.isReverted&&(Oe&&(_e=Math.max(oe(),D.scroll.rec||0),be=D.progress,Me=r&&r.progress()),Ae&&[Ae,ie,F,ce].forEach(function(qt){return qt.style.display=Oe?"none":"block"}),Oe&&(Mn=D,D.update(Oe)),f&&(!A||!D.isActive)&&(Oe?pv(f,Q,b):$c(f,Q,fi(f),pe)),Oe||D.update(Oe),Mn=Ze,D.isReverted=Oe)},D.refresh=function(Ee,Je,Oe,Ze){if(!((Mn||!D.enabled)&&!Je)){if(f&&Ee&&gi){hn(i,"scrollEnd",p0);return}!Un&&he&&he(D),Mn=D,Le.tween&&!Oe&&(Le.tween.kill(),Le.tween=0),U&&U.pause(),_&&r&&r.revert({kill:!1}).invalidate(),D.isReverted||D.revert(!0,!0),D._subPinOffset=!1;var qt=Fe(),lt=tt(),Pt=E?E.duration():ki(N,M),nn=R<=.01,Tt=0,At=Ze||0,xt=ts(Oe)?Oe.end:n.end,Zn=n.endTrigger||d,Dt=ts(Oe)?Oe.start:n.start||(n.start===0||!d?0:f?"0 0":"0 100%"),An=D.pinnedContainer=n.pinnedContainer&&Vn(n.pinnedContainer,D),T=d&&Math.max(0,ct.indexOf(D))||0,O=T,W,X,k,ue,fe,Se,Pe,$e,Qe,Ie,et,_t,yt;for(G&&ts(Oe)&&(_t=De.getProperty(F,M.p),yt=De.getProperty(ce,M.p));O--;)Se=ct[O],Se.end||Se.refresh(0,1)||(Mn=D),Pe=Se.pin,Pe&&(Pe===d||Pe===f||Pe===An)&&!Se.isReverted&&(Ie||(Ie=[]),Ie.unshift(Se),Se.revert(!0,!0)),Se!==ct[O]&&(T--,O--);for(kn(Dt)&&(Dt=Dt(D)),Dt=xd(Dt,"start",D),ee=Cd(Dt,d,qt,M,oe(),Ae,F,D,lt,ae,q,Pt,E,D._startClamp&&"_startClamp")||(f?-.001:0),kn(xt)&&(xt=xt(D)),ei(xt)&&!xt.indexOf("+=")&&(~xt.indexOf(" ")?xt=(ei(Dt)?Dt.split(" ")[0]:"")+xt:(Tt=zl(xt.substr(2),qt),xt=ei(Dt)?Dt:(E?De.utils.mapRange(0,E.duration(),E.scrollTrigger.start,E.scrollTrigger.end,ee):ee)+Tt,Zn=d)),xt=xd(xt,"end",D),P=Math.max(ee,Cd(xt||(Zn?"100% 0":Pt),Zn,qt,M,oe()+Tt,ie,ce,D,lt,ae,q,Pt,E,D._endClamp&&"_endClamp"))||-.001,Tt=0,O=T;O--;)Se=ct[O],Pe=Se.pin,Pe&&Se.start-Se._pinPush<=ee&&!E&&Se.end>0&&(W=Se.end-(D._startClamp?Math.max(0,Se.start):Se.start),(Pe===d&&Se.start-Se._pinPush<ee||Pe===An)&&isNaN(Dt)&&(Tt+=W*(1-Se.progress)),Pe===f&&(At+=W));if(ee+=Tt,P+=Tt,D._startClamp&&(D._startClamp+=Tt),D._endClamp&&!Un&&(D._endClamp=P||-.001,P=Math.min(P,ki(N,M))),R=P-ee||(ee-=.01)&&.001,nn&&(be=De.utils.clamp(0,1,De.utils.normalize(ee,P,_e))),D._pinPush=At,Ae&&Tt&&(W={},W[M.a]="+="+Tt,An&&(W[M.p]="-="+oe()),De.set([Ae,ie],W)),f&&!(Qu&&D.end>=ki(N,M)))W=fi(f),ue=M===sn,k=oe(),ye=parseFloat(ge(M.a))+At,!Pt&&P>1&&(et=(B?Bt.scrollingElement||wi:N).style,et={style:et,value:et["overflow"+M.a.toUpperCase()]},B&&fi(Ut)["overflow"+M.a.toUpperCase()]!=="scroll"&&(et.style["overflow"+M.a.toUpperCase()]="scroll")),$c(f,Q,W),j=rl(f),X=rr(f,!0),$e=q&&Hr(N,ue?Fn:sn)(),g?(pe=[g+M.os2,R+At+rn],pe.t=Q,O=g===en?ac(f,M)+R+At:0,O&&(pe.push(M.d,O+rn),Q.style.flexBasis!=="auto"&&(Q.style.flexBasis=O+rn)),fa(pe),An&&ct.forEach(function(jt){jt.pin===An&&jt.vars.pinSpacing!==!1&&(jt._subPinOffset=!0)}),q&&oe(_e)):(O=ac(f,M),O&&Q.style.flexBasis!=="auto"&&(Q.style.flexBasis=O+rn)),q&&(fe={top:X.top+(ue?k-ee:$e)+rn,left:X.left+(ue?$e:k-ee)+rn,boxSizing:"border-box",position:"fixed"},fe[gs]=fe["max"+Sa]=Math.ceil(X.width)+rn,fe[_s]=fe["max"+Mf]=Math.ceil(X.height)+rn,fe[hi]=fe[hi+go]=fe[hi+po]=fe[hi+_o]=fe[hi+mo]="0",fe[en]=W[en],fe[en+go]=W[en+go],fe[en+po]=W[en+po],fe[en+_o]=W[en+_o],fe[en+mo]=W[en+mo],V=gv(b,fe,A),Un&&oe(0)),r?(Qe=r._initted,Gc(1),r.render(r.duration(),!0,!0),Ke=ge(M.a)-ye+R+At,Ve=Math.abs(R-Ke)>1,q&&Ve&&V.splice(V.length-2,2),r.render(0,!0,!0),Qe||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),Gc(0)):Ke=R,et&&(et.value?et.style["overflow"+M.a.toUpperCase()]=et.value:et.style.removeProperty("overflow-"+M.a));else if(d&&oe()&&!E)for(X=d.parentNode;X&&X!==Ut;)X._pinOffset&&(ee-=X._pinOffset,P-=X._pinOffset),X=X.parentNode;Ie&&Ie.forEach(function(jt){return jt.revert(!1,!0)}),D.start=ee,D.end=P,Xe=ne=Un?_e:oe(),!E&&!Un&&(Xe<_e&&oe(_e),D.scroll.rec=0),D.revert(!1,!0),re=Sn(),te&&(Z=-1,te.restart(!0)),Mn=0,r&&L&&(r._initted||Me)&&r.progress()!==Me&&r.progress(Me||0,!0).render(r.time(),!0,!0),(nn||be!==D.progress||E||_)&&(r&&!L&&r.totalProgress(E&&ee<-.001&&!be?De.utils.normalize(ee,P,0):be,!0),D.progress=nn||(Xe-ee)/R===be?0:be),f&&g&&(Q._pinOffset=Math.round(D.progress*Ke)),U&&U.invalidate(),isNaN(_t)||(_t-=De.getProperty(F,M.p),yt-=De.getProperty(ce,M.p),sl(F,M,_t),sl(Ae,M,_t-(Ze||0)),sl(ce,M,yt),sl(ie,M,yt-(Ze||0))),nn&&!Un&&D.update(),u&&!Un&&!we&&(we=!0,u(D),we=!1)}},D.getVelocity=function(){return(oe()-ne)/(Sn()-Qa)*1e3||0},D.endAnimation=function(){Wa(D.callbackAnimation),r&&(U?U.progress(1):r.paused()?L||Wa(r,D.direction<0,1):Wa(r,r.reversed()))},D.labelToScroll=function(Ee){return r&&r.labels&&(ee||D.refresh()||ee)+r.labels[Ee]/r.duration()*R||0},D.getTrailing=function(Ee){var Je=ct.indexOf(D),Oe=D.direction>0?ct.slice(0,Je).reverse():ct.slice(Je+1);return(ei(Ee)?Oe.filter(function(Ze){return Ze.vars.preventOverlaps===Ee}):Oe).filter(function(Ze){return D.direction>0?Ze.end<=ee:Ze.start>=P})},D.update=function(Ee,Je,Oe){if(!(E&&!Oe&&!Ee)){var Ze=Un===!0?_e:D.scroll(),qt=Ee?0:(Ze-ee)/R,lt=qt<0?0:qt>1?1:qt||0,Pt=D.progress,nn,Tt,At,xt,Zn,Dt,An,T;if(Je&&(ne=Xe,Xe=E?oe():Ze,v&&(pt=Ye,Ye=r&&!L?r.totalProgress():lt)),m&&f&&!Mn&&!jo&&gi&&(!lt&&ee<Ze+(Ze-ne)/(Sn()-Qa)*m?lt=1e-4:lt===1&&P>Ze+(Ze-ne)/(Sn()-Qa)*m&&(lt=.9999)),lt!==Pt&&D.enabled){if(nn=D.isActive=!!lt&&lt<1,Tt=!!Pt&&Pt<1,Dt=nn!==Tt,Zn=Dt||!!lt!=!!Pt,D.direction=lt>Pt?1:-1,D.progress=lt,Zn&&!Mn&&(At=lt&&!Pt?0:lt===1?1:Pt===1?2:3,L&&(xt=!Dt&&Y[At+1]!=="none"&&Y[At+1]||Y[At],T=r&&(xt==="complete"||xt==="reset"||xt in r))),S&&(Dt||T)&&(T||h||!r)&&(kn(S)?S(D):D.getTrailing(S).forEach(function(k){return k.endAnimation()})),L||(U&&!Mn&&!jo?(U._dp._time-U._start!==U._time&&U.render(U._dp._time-U._start),U.resetTo?U.resetTo("totalProgress",lt,r._tTime/r._tDur):(U.vars.totalProgress=lt,U.invalidate().restart())):r&&r.totalProgress(lt,!!(Mn&&(re||Ee)))),f){if(Ee&&g&&(Q.style[g+M.os2]=le),!q)de(to(ye+Ke*lt));else if(Zn){if(An=!Ee&&lt>Pt&&P+1>Ze&&Ze+1>=ki(N,M),A)if(!Ee&&(nn||An)){var O=rr(f,!0),W=Ze-ee;Rd(f,Ut,O.top+(M===sn?W:0)+rn,O.left+(M===sn?0:W)+rn)}else Rd(f,Q);fa(nn||An?V:j),Ve&&lt<1&&nn||de(ye+(lt===1&&!An?Ke:0))}}v&&!Le.tween&&!Mn&&!jo&&te.restart(!0),o&&(Dt||x&&lt&&(lt<1||!Wc))&&Do(o.targets).forEach(function(k){return k.classList[nn||x?"add":"remove"](o.className)}),a&&!L&&!Ee&&a(D),Zn&&!Mn?(L&&(T&&(xt==="complete"?r.pause().totalProgress(1):xt==="reset"?r.restart(!0).pause():xt==="restart"?r.restart(!0):r[xt]()),a&&a(D)),(Dt||!Wc)&&(c&&Dt&&Yc(D,c),H[At]&&Yc(D,H[At]),x&&(lt===1?D.kill(!1,1):H[At]=0),Dt||(At=lt===1?1:3,H[At]&&Yc(D,H[At]))),C&&!nn&&Math.abs(D.getVelocity())>(no(C)?C:2500)&&(Wa(D.callbackAnimation),U?U.progress(1):Wa(r,xt==="reverse"?1:!lt,1))):L&&a&&!Mn&&a(D)}if(Re){var X=E?Ze/E.duration()*(E._caScrollDist||0):Ze;Ge(X+(F._isFlipped?1:0)),Re(X)}qe&&qe(-Ze/E.duration()*(E._caScrollDist||0))}},D.enable=function(Ee,Je){D.enabled||(D.enabled=!0,hn(N,"resize",io),B||hn(N,"scroll",Os),he&&hn(i,"refreshInit",he),Ee!==!1&&(D.progress=be=0,Xe=ne=Z=oe()),Je!==!1&&D.refresh())},D.getTween=function(Ee){return Ee&&Le?Le.tween:U},D.setPositions=function(Ee,Je,Oe,Ze){if(E){var qt=E.scrollTrigger,lt=E.duration(),Pt=qt.end-qt.start;Ee=qt.start+Pt*Ee/lt,Je=qt.start+Pt*Je/lt}D.refresh(!1,!1,{start:yd(Ee,Oe&&!!D._startClamp),end:yd(Je,Oe&&!!D._endClamp)},Ze),D.update()},D.adjustPinSpacing=function(Ee){if(pe&&Ee){var Je=pe.indexOf(M.d)+1;pe[Je]=parseFloat(pe[Je])+Ee+rn,pe[1]=parseFloat(pe[1])+Ee+rn,fa(pe)}},D.disable=function(Ee,Je){if(D.enabled&&(Ee!==!1&&D.revert(!0,!0),D.enabled=D.isActive=!1,Je||U&&U.pause(),_e=0,Ue&&(Ue.uncache=1),he&&un(i,"refreshInit",he),te&&(te.pause(),Le.tween&&Le.tween.kill()&&(Le.tween=0)),!B)){for(var Oe=ct.length;Oe--;)if(ct[Oe].scroller===N&&ct[Oe]!==D)return;un(N,"resize",io),B||un(N,"scroll",Os)}},D.kill=function(Ee,Je){D.disable(Ee,Je),U&&!Je&&U.kill(),l&&delete eh[l];var Oe=ct.indexOf(D);Oe>=0&&ct.splice(Oe,1),Oe===In&&Hl>0&&In--,Oe=0,ct.forEach(function(Ze){return Ze.scroller===D.scroller&&(Oe=1)}),Oe||Un||(D.scroll.rec=0),r&&(r.scrollTrigger=null,Ee&&r.revert({kill:!1}),Je||r.kill()),Ae&&[Ae,ie,F,ce].forEach(function(Ze){return Ze.parentNode&&Ze.parentNode.removeChild(Ze)}),vo===D&&(vo=0),f&&(Ue&&(Ue.uncache=1),Oe=0,ct.forEach(function(Ze){return Ze.pin===f&&Oe++}),Oe||(Ue.spacer=0)),n.onKill&&n.onKill(D)},ct.push(D),D.enable(!1,!1),gt&&gt(D),r&&r.add&&!R){var rt=D.update;D.update=function(){D.update=rt,ee||P||D.refresh()},De.delayedCall(.01,D.update),R=.01,ee=P=0}else D.refresh();f&&dv()},i.register=function(n){return Qs||(De=n||l0(),o0()&&window.document&&i.enable(),Qs=eo),Qs},i.defaults=function(n){if(n)for(var r in n)nl[r]=n[r];return nl},i.disable=function(n,r){eo=0,ct.forEach(function(a){return a[r?"kill":"disable"](n)}),un(ft,"wheel",Os),un(Bt,"scroll",Os),clearInterval(Jo),un(Bt,"touchcancel",Ui),un(Ut,"touchstart",Ui),el(un,Bt,"pointerdown,touchstart,mousedown",Md),el(un,Bt,"pointerup,touchend,mouseup",Sd),rc.kill(),Qo(un);for(var s=0;s<ht.length;s+=3)tl(un,ht[s],ht[s+1]),tl(un,ht[s],ht[s+2])},i.enable=function(){if(ft=window,Bt=document,wi=Bt.documentElement,Ut=Bt.body,De&&(Do=De.utils.toArray,fo=De.utils.clamp,ju=De.core.context||Ui,Gc=De.core.suppressOverwrites||Ui,_f=ft.history.scrollRestoration||"auto",th=ft.pageYOffset,De.core.globals("ScrollTrigger",i),Ut)){eo=1,ha=document.createElement("div"),ha.style.height="100vh",ha.style.position="absolute",_0(),av(),Zt.register(De),i.isTouch=Zt.isTouch,Er=Zt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Ju=Zt.isTouch===1,hn(ft,"wheel",Os),n0=[ft,Bt,wi,Ut],De.matchMedia?(i.matchMedia=function(l){var c=De.matchMedia(),u;for(u in l)c.add(u,l[u]);return c},De.addEventListener("matchMediaInit",function(){return bf()}),De.addEventListener("matchMediaRevert",function(){return m0()}),De.addEventListener("matchMedia",function(){ls(0,1),bs("matchMedia")}),De.matchMedia("(orientation: portrait)",function(){return qc(),qc})):console.warn("Requires GSAP 3.11.0 or later"),qc(),hn(Bt,"scroll",Os);var n=Ut.style,r=n.borderTopStyle,s=De.core.Animation.prototype,a,o;for(s.revert||Object.defineProperty(s,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",a=rr(Ut),sn.m=Math.round(a.top+sn.sc())||0,Fn.m=Math.round(a.left+Fn.sc())||0,r?n.borderTopStyle=r:n.removeProperty("border-top-style"),Jo=setInterval(wd,250),De.delayedCall(.5,function(){return jo=0}),hn(Bt,"touchcancel",Ui),hn(Ut,"touchstart",Ui),el(hn,Bt,"pointerdown,touchstart,mousedown",Md),el(hn,Bt,"pointerup,touchend,mouseup",Sd),Ku=De.utils.checkPrefix("transform"),Vl.push(Ku),Qs=Sn(),rc=De.delayedCall(.2,ls).pause(),ea=[Bt,"visibilitychange",function(){var l=ft.innerWidth,c=ft.innerHeight;Bt.hidden?(_d=l,vd=c):(_d!==l||vd!==c)&&io()},Bt,"DOMContentLoaded",ls,ft,"load",ls,ft,"resize",io],Qo(hn),ct.forEach(function(l){return l.enable(0,1)}),o=0;o<ht.length;o+=3)tl(un,ht[o],ht[o+1]),tl(un,ht[o],ht[o+2])}},i.config=function(n){"limitCallbacks"in n&&(Wc=!!n.limitCallbacks);var r=n.syncInterval;r&&clearInterval(Jo)||(Jo=r)&&setInterval(wd,r),"ignoreMobileResize"in n&&(Ju=i.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Qo(un)||Qo(hn,n.autoRefreshEvents||"none"),r0=(n.autoRefreshEvents+"").indexOf("resize")===-1)},i.scrollerProxy=function(n,r){var s=Vn(n),a=ht.indexOf(s),o=Ms(s);~a&&ht.splice(a,o?6:2),r&&(o?Hi.unshift(ft,r,Ut,r,wi,r):Hi.unshift(s,r))},i.clearMatchMedia=function(n){ct.forEach(function(r){return r._ctx&&r._ctx.query===n&&r._ctx.kill(!0,!0)})},i.isInViewport=function(n,r,s){var a=(ei(n)?Vn(n):n).getBoundingClientRect(),o=a[s?gs:_s]*r||0;return s?a.right-o>0&&a.left+o<ft.innerWidth:a.bottom-o>0&&a.top+o<ft.innerHeight},i.positionInViewport=function(n,r,s){ei(n)&&(n=Vn(n));var a=n.getBoundingClientRect(),o=a[s?gs:_s],l=r==null?o/2:r in oc?oc[r]*o:~r.indexOf("%")?parseFloat(r)*o/100:parseFloat(r)||0;return s?(a.left+l)/ft.innerWidth:(a.top+l)/ft.innerHeight},i.killAll=function(n){if(ct.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var r=Ss.killAll||[];Ss={},r.forEach(function(s){return s()})}},i}();je.version="3.12.5";je.saveStyles=function(i){return i?Do(i).forEach(function(e){if(e&&e.style){var t=Qn.indexOf(e);t>=0&&Qn.splice(t,5),Qn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),De.core.getCache(e),ju())}}):Qn};je.revert=function(i,e){return bf(!i,e)};je.create=function(i,e){return new je(i,e)};je.refresh=function(i){return i?io():(Qs||je.register())&&ls(!0)};je.update=function(i){return++ht.cache&&lr(i===!0?2:0)};je.clearScrollMemory=g0;je.maxScroll=function(i,e){return ki(i,e?Fn:sn)};je.getScrollFunc=function(i,e){return Hr(Vn(i),e?Fn:sn)};je.getById=function(i){return eh[i]};je.getAll=function(){return ct.filter(function(i){return i.vars.id!=="ScrollSmoother"})};je.isScrolling=function(){return!!gi};je.snapDirectional=Sf;je.addEventListener=function(i,e){var t=Ss[i]||(Ss[i]=[]);~t.indexOf(e)||t.push(e)};je.removeEventListener=function(i,e){var t=Ss[i],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};je.batch=function(i,e){var t=[],n={},r=e.interval||.016,s=e.batchMax||1e9,a=function(c,u){var h=[],d=[],f=De.delayedCall(r,function(){u(h,d),h=[],d=[]}).pause();return function(g){h.length||f.restart(!0),h.push(g.trigger),d.push(g),s<=h.length&&f.progress(1)}},o;for(o in e)n[o]=o.substr(0,2)==="on"&&kn(e[o])&&o!=="onRefreshInit"?a(o,e[o]):e[o];return kn(s)&&(s=s(),hn(je,"refresh",function(){return s=e.batchMax()})),Do(i).forEach(function(l){var c={};for(o in n)c[o]=n[o];c.trigger=l,t.push(je.create(c))}),t};var Ld=function(e,t,n,r){return t>r?e(r):t<0&&e(0),n>r?(r-t)/(n-t):n<0?t/(t-n):1},Zc=function i(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Zt.isTouch?" pinch-zoom":""):"none",e===wi&&i(Ut,t)},al={auto:1,scroll:1},vv=function(e){var t=e.event,n=e.target,r=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,a=s._gsap||De.core.getCache(s),o=Sn(),l;if(!a._isScrollT||o-a._isScrollT>2e3){for(;s&&s!==Ut&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(al[(l=fi(s)).overflowY]||al[l.overflowX]));)s=s.parentNode;a._isScroll=s&&s!==n&&!Ms(s)&&(al[(l=fi(s)).overflowY]||al[l.overflowX]),a._isScrollT=o}(a._isScroll||r==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},x0=function(e,t,n,r){return Zt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r=r&&vv,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return n&&hn(Bt,Zt.eventTypes[0],Id,!1,!0)},onDisable:function(){return un(Bt,Zt.eventTypes[0],Id,!0)}})},xv=/(input|label|select|textarea)/i,Dd,Id=function(e){var t=xv.test(e.target.tagName);(t||Dd)&&(e._gsapAllow=!0,Dd=t)},yv=function(e){ts(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,r=t.momentum,s=t.allowNestedScroll,a=t.onRelease,o,l,c=Vn(e.target)||wi,u=De.core.globals().ScrollSmoother,h=u&&u.get(),d=Er&&(e.content&&Vn(e.content)||h&&e.content!==!1&&!h.smooth()&&h.content()),f=Hr(c,sn),g=Hr(c,Fn),_=1,m=(Zt.isTouch&&ft.visualViewport?ft.visualViewport.scale*ft.visualViewport.width:ft.outerWidth)/ft.innerWidth,p=0,y=kn(r)?function(){return r(o)}:function(){return r||2.8},x,v,A=x0(c,e.type,!0,s),w=function(){return v=!1},E=Ui,C=Ui,S=function(){l=ki(c,sn),C=fo(Er?1:0,l),n&&(E=fo(0,ki(c,Fn))),x=vs},M=function(){d._gsap.y=to(parseFloat(d._gsap.y)+f.offset)+"px",d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(d._gsap.y)+", 0, 1)",f.offset=f.cacheID=0},L=function(){if(v){requestAnimationFrame(w);var G=to(o.deltaY/2),ae=C(f.v-G);if(d&&ae!==f.v+f.offset){f.offset=ae-f.v;var D=to((parseFloat(d&&d._gsap.y)||0)-f.offset);d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+D+", 0, 1)",d._gsap.y=D+"px",f.cacheID=ht.cache,lr()}return!0}f.offset&&M(),v=!0},N,z,B,q,H=function(){S(),N.isActive()&&N.vars.scrollY>l&&(f()>l?N.progress(1)&&f(l):N.resetTo("scrollY",l))};return d&&De.set(d,{y:"+=0"}),e.ignoreCheck=function(Y){return Er&&Y.type==="touchmove"&&L()||_>1.05&&Y.type!=="touchstart"||o.isGesturing||Y.touches&&Y.touches.length>1},e.onPress=function(){v=!1;var Y=_;_=to((ft.visualViewport&&ft.visualViewport.scale||1)/m),N.pause(),Y!==_&&Zc(c,_>1.01?!0:n?!1:"x"),z=g(),B=f(),S(),x=vs},e.onRelease=e.onGestureStart=function(Y,G){if(f.offset&&M(),!G)q.restart(!0);else{ht.cache++;var ae=y(),D,he;n&&(D=g(),he=D+ae*.05*-Y.velocityX/.227,ae*=Ld(g,D,he,ki(c,Fn)),N.vars.scrollX=E(he)),D=f(),he=D+ae*.05*-Y.velocityY/.227,ae*=Ld(f,D,he,ki(c,sn)),N.vars.scrollY=C(he),N.invalidate().duration(ae).play(.01),(Er&&N.vars.scrollY>=l||D>=l-1)&&De.to({},{onUpdate:H,duration:ae})}a&&a(Y)},e.onWheel=function(){N._ts&&N.pause(),Sn()-p>1e3&&(x=0,p=Sn())},e.onChange=function(Y,G,ae,D,he){if(vs!==x&&S(),G&&n&&g(E(D[2]===G?z+(Y.startX-Y.x):g()+G-D[1])),ae){f.offset&&M();var Fe=he[2]===ae,tt=Fe?B+Y.startY-Y.y:f()+ae-he[1],Z=C(tt);Fe&&tt!==Z&&(B+=Z-tt),f(Z)}(ae||G)&&lr()},e.onEnable=function(){Zc(c,n?!1:"x"),je.addEventListener("refresh",H),hn(ft,"resize",H),f.smooth&&(f.target.style.scrollBehavior="auto",f.smooth=g.smooth=!1),A.enable()},e.onDisable=function(){Zc(c,!0),un(ft,"resize",H),je.removeEventListener("refresh",H),A.kill()},e.lockAxis=e.lockAxis!==!1,o=new Zt(e),o.iOS=Er,Er&&!f()&&f(1),Er&&De.ticker.add(Ui),q=o._dc,N=De.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:v0(f,f(),function(){return N.pause()})},onUpdate:lr,onComplete:q.vars.onComplete}),o};je.sort=function(i){return ct.sort(i||function(e,t){return(e.vars.refreshPriority||0)*-1e6+e.start-(t.start+(t.vars.refreshPriority||0)*-1e6)})};je.observe=function(i){return new Zt(i)};je.normalizeScroll=function(i){if(typeof i>"u")return Dn;if(i===!0&&Dn)return Dn.enable();if(i===!1){Dn&&Dn.kill(),Dn=i;return}var e=i instanceof Zt?i:yv(i);return Dn&&Dn.target===e.target&&Dn.kill(),Ms(e.target)&&(Dn=e),e};je.core={_getVelocityProp:Zu,_inputObserver:x0,_scrollers:ht,_proxies:Hi,bridge:{ss:function(){gi||bs("scrollStart"),gi=Sn()},ref:function(){return Mn}}};l0()&&De.registerPlugin(je);var Mv="1.1.18";function y0(i,e,t){return Math.max(i,Math.min(e,t))}function Sv(i,e,t){return(1-t)*i+t*e}function bv(i,e,t,n){return Sv(i,e,1-Math.exp(-t*n))}function Ev(i,e){return(i%e+e)%e}var wv=class{constructor(){We(this,"isRunning",!1);We(this,"value",0);We(this,"from",0);We(this,"to",0);We(this,"currentTime",0);We(this,"lerp");We(this,"duration");We(this,"easing");We(this,"onUpdate")}advance(i){var t;if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=i;const n=y0(0,this.currentTime/this.duration,1);e=n>=1;const r=e?1:this.easing(n);this.value=this.from+(this.to-this.from)*r}else this.lerp?(this.value=bv(this.value,this.to,this.lerp*60,i),Math.round(this.value)===this.to&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),(t=this.onUpdate)==null||t.call(this,this.value,e)}stop(){this.isRunning=!1}fromTo(i,e,{lerp:t,duration:n,easing:r,onStart:s,onUpdate:a}){this.from=this.value=i,this.to=e,this.lerp=t,this.duration=n,this.easing=r,this.currentTime=0,this.isRunning=!0,s==null||s(),this.onUpdate=a}};function Tv(i,e){let t;return function(...n){let r=this;clearTimeout(t),t=setTimeout(()=>{t=void 0,i.apply(r,n)},e)}}var Av=class{constructor(i,e,{autoResize:t=!0,debounce:n=250}={}){We(this,"width",0);We(this,"height",0);We(this,"scrollHeight",0);We(this,"scrollWidth",0);We(this,"debouncedResize");We(this,"wrapperResizeObserver");We(this,"contentResizeObserver");We(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});We(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});We(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=i,this.content=e,t&&(this.debouncedResize=Tv(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var i,e;(i=this.wrapperResizeObserver)==null||i.disconnect(),(e=this.contentResizeObserver)==null||e.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize,!1)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},M0=class{constructor(){We(this,"events",{})}emit(i,...e){var n;let t=this.events[i]||[];for(let r=0,s=t.length;r<s;r++)(n=t[r])==null||n.call(t,...e)}on(i,e){var t;return(t=this.events[i])!=null&&t.push(e)||(this.events[i]=[e]),()=>{var n;this.events[i]=(n=this.events[i])==null?void 0:n.filter(r=>e!==r)}}off(i,e){var t;this.events[i]=(t=this.events[i])==null?void 0:t.filter(n=>e!==n)}destroy(){this.events={}}},Ud=100/6,_r={passive:!1},Cv=class{constructor(i,e={wheelMultiplier:1,touchMultiplier:1}){We(this,"touchStart",{x:0,y:0});We(this,"lastDelta",{x:0,y:0});We(this,"window",{width:0,height:0});We(this,"emitter",new M0);We(this,"onTouchStart",i=>{const{clientX:e,clientY:t}=i.targetTouches?i.targetTouches[0]:i;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:i})});We(this,"onTouchMove",i=>{const{clientX:e,clientY:t}=i.targetTouches?i.targetTouches[0]:i,n=-(e-this.touchStart.x)*this.options.touchMultiplier,r=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:n,y:r},this.emitter.emit("scroll",{deltaX:n,deltaY:r,event:i})});We(this,"onTouchEnd",i=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:i})});We(this,"onWheel",i=>{let{deltaX:e,deltaY:t,deltaMode:n}=i;const r=n===1?Ud:n===2?this.window.width:1,s=n===1?Ud:n===2?this.window.height:1;e*=r,t*=s,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:i})});We(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=i,this.options=e,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,_r),this.element.addEventListener("touchstart",this.onTouchStart,_r),this.element.addEventListener("touchmove",this.onTouchMove,_r),this.element.addEventListener("touchend",this.onTouchEnd,_r)}on(i,e){return this.emitter.on(i,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,_r),this.element.removeEventListener("touchstart",this.onTouchStart,_r),this.element.removeEventListener("touchmove",this.onTouchMove,_r),this.element.removeEventListener("touchend",this.onTouchEnd,_r)}},Rv=class{constructor({wrapper:i=window,content:e=document.documentElement,eventsTarget:t=i,smoothWheel:n=!0,syncTouch:r=!1,syncTouchLerp:s=.075,touchInertiaMultiplier:a=35,duration:o,easing:l=A=>Math.min(1,1.001-Math.pow(2,-10*A)),lerp:c=.1,infinite:u=!1,orientation:h="vertical",gestureOrientation:d="vertical",touchMultiplier:f=1,wheelMultiplier:g=1,autoResize:_=!0,prevent:m,virtualScroll:p,overscroll:y=!0,autoRaf:x=!1,__experimental__naiveDimensions:v=!1}={}){We(this,"_isScrolling",!1);We(this,"_isStopped",!1);We(this,"_isLocked",!1);We(this,"_preventNextNativeScrollEvent",!1);We(this,"_resetVelocityTimeout",null);We(this,"__rafID",null);We(this,"isTouching");We(this,"time",0);We(this,"userData",{});We(this,"lastVelocity",0);We(this,"velocity",0);We(this,"direction",0);We(this,"options");We(this,"targetScroll");We(this,"animatedScroll");We(this,"animate",new wv);We(this,"emitter",new M0);We(this,"dimensions");We(this,"virtualScroll");We(this,"onPointerDown",i=>{i.button===1&&this.reset()});We(this,"onVirtualScroll",i=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(i)===!1)return;const{deltaX:e,deltaY:t,event:n}=i;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:n}),n.ctrlKey||n.lenisStopPropagation)return;const r=n.type.includes("touch"),s=n.type.includes("wheel");this.isTouching=n.type==="touchstart"||n.type==="touchmove";const a=e===0&&t===0;if(this.options.syncTouch&&r&&n.type==="touchstart"&&a&&!this.isStopped&&!this.isLocked){this.reset();return}const l=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(a||l)return;let c=n.composedPath();c=c.slice(0,c.indexOf(this.rootElement));const u=this.options.prevent;if(c.find(m=>{var p,y,x;return m instanceof HTMLElement&&(typeof u=="function"&&(u==null?void 0:u(m))||((p=m.hasAttribute)==null?void 0:p.call(m,"data-lenis-prevent"))||r&&((y=m.hasAttribute)==null?void 0:y.call(m,"data-lenis-prevent-touch"))||s&&((x=m.hasAttribute)==null?void 0:x.call(m,"data-lenis-prevent-wheel")))}))return;if(this.isStopped||this.isLocked){n.preventDefault();return}if(!(this.options.syncTouch&&r||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let d=t;this.options.gestureOrientation==="both"?d=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(d=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(n.lenisStopPropagation=!0),n.preventDefault();const f=r&&this.options.syncTouch,_=r&&n.type==="touchend"&&Math.abs(d)>5;_&&(d=this.velocity*this.options.touchInertiaMultiplier),this.scrollTo(this.targetScroll+d,{programmatic:!1,...f?{lerp:_?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});We(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const i=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-i,this.direction=Math.sign(this.animatedScroll-i),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});We(this,"raf",i=>{const e=i-(this.time||i);this.time=i,this.animate.advance(e*.001),this.options.autoRaf&&(this.__rafID=requestAnimationFrame(this.raf))});window.lenisVersion=Mv,(!i||i===document.documentElement||i===document.body)&&(i=window),this.options={wrapper:i,content:e,eventsTarget:t,smoothWheel:n,syncTouch:r,syncTouchLerp:s,touchInertiaMultiplier:a,duration:o,easing:l,lerp:c,infinite:u,gestureOrientation:d,orientation:h,touchMultiplier:f,wheelMultiplier:g,autoResize:_,prevent:m,virtualScroll:p,overscroll:y,autoRaf:x,__experimental__naiveDimensions:v},this.dimensions=new Av(i,e,{autoResize:_}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll=new Cv(t,{touchMultiplier:f,wheelMultiplier:g}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoRaf&&(this.__rafID=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this.__rafID&&cancelAnimationFrame(this.__rafID)}on(i,e){return this.emitter.on(i,e)}off(i,e){return this.emitter.off(i,e)}setScroll(i){this.isHorizontal?this.rootElement.scrollLeft=i:this.rootElement.scrollTop=i}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){this.isStopped&&(this.reset(),this.isStopped=!1)}stop(){this.isStopped||(this.reset(),this.isStopped=!0)}scrollTo(i,{offset:e=0,immediate:t=!1,lock:n=!1,duration:r=this.options.duration,easing:s=this.options.easing,lerp:a=this.options.lerp,onStart:o,onComplete:l,force:c=!1,programmatic:u=!0,userData:h}={}){if(!((this.isStopped||this.isLocked)&&!c)){if(typeof i=="string"&&["top","left","start"].includes(i))i=0;else if(typeof i=="string"&&["bottom","right","end"].includes(i))i=this.limit;else{let d;if(typeof i=="string"?d=document.querySelector(i):i instanceof HTMLElement&&(i!=null&&i.nodeType)&&(d=i),d){if(this.options.wrapper!==window){const g=this.rootElement.getBoundingClientRect();e-=this.isHorizontal?g.left:g.top}const f=d.getBoundingClientRect();i=(this.isHorizontal?f.left:f.top)+this.animatedScroll}}if(typeof i=="number"){if(i+=e,i=Math.round(i),this.options.infinite?u&&(this.targetScroll=this.animatedScroll=this.scroll):i=y0(0,i,this.limit),i===this.targetScroll){o==null||o(this),l==null||l(this);return}if(this.userData=h??{},t){this.animatedScroll=this.targetScroll=i,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),l==null||l(this),this.userData={};return}u||(this.targetScroll=i),this.animate.fromTo(this.animatedScroll,i,{duration:r,easing:s,lerp:a,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",o==null||o(this)},onUpdate:(d,f)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=d-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=d,this.setScroll(this.scroll),u&&(this.targetScroll=d),f||this.emit(),f&&(this.reset(),this.emit(),l==null||l(this),this.userData={},this.preventNextNativeScrollEvent())}})}}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.__experimental__naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){return this.isHorizontal?this.rootElement.scrollLeft:this.rootElement.scrollTop}get scroll(){return this.options.infinite?Ev(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(i){this._isScrolling!==i&&(this._isScrolling=i,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(i){this._isStopped!==i&&(this._isStopped=i,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(i){this._isLocked!==i&&(this._isLocked=i,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let i="lenis";return this.isStopped&&(i+=" lenis-stopped"),this.isLocked&&(i+=" lenis-locked"),this.isScrolling&&(i+=" lenis-scrolling"),this.isScrolling==="smooth"&&(i+=" lenis-smooth"),i}updateClassName(){this.cleanUpClassName(),this.rootElement.className=`${this.rootElement.className} ${this.className}`.trim()}cleanUpClassName(){this.rootElement.className=this.rootElement.className.replace(/lenis(-\w+)?/g,"").trim()}};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ef="170",Pv=0,Nd=1,Lv=2,S0=1,b0=2,tr=3,Vr=0,zn=1,dn=2,Or=0,da=1,ih=2,Od=3,Fd=4,Dv=5,ss=100,Iv=101,Uv=102,Nv=103,Ov=104,Fv=200,kv=201,zv=202,Bv=203,rh=204,sh=205,Hv=206,Vv=207,Gv=208,Wv=209,Xv=210,Yv=211,qv=212,$v=213,Zv=214,ah=0,oh=1,lh=2,ba=3,ch=4,uh=5,hh=6,fh=7,E0=0,Kv=1,Jv=2,Fr=0,jv=1,Qv=2,ex=3,w0=4,tx=5,nx=6,ix=7,T0=300,Ea=301,wa=302,dh=303,ph=304,xc=306,lc=1e3,cs=1001,mh=1002,Pi=1003,rx=1004,ol=1005,zi=1006,Kc=1007,us=1008,fr=1009,A0=1010,C0=1011,Uo=1012,wf=1013,Es=1014,ar=1015,Go=1016,Tf=1017,Af=1018,Ta=1020,R0=35902,P0=1021,L0=1022,Ci=1023,D0=1024,I0=1025,pa=1026,Aa=1027,U0=1028,Cf=1029,N0=1030,Rf=1031,Pf=1033,Wl=33776,Xl=33777,Yl=33778,ql=33779,gh=35840,_h=35841,vh=35842,xh=35843,yh=36196,Mh=37492,Sh=37496,bh=37808,Eh=37809,wh=37810,Th=37811,Ah=37812,Ch=37813,Rh=37814,Ph=37815,Lh=37816,Dh=37817,Ih=37818,Uh=37819,Nh=37820,Oh=37821,$l=36492,Fh=36494,kh=36495,O0=36283,zh=36284,Bh=36285,Hh=36286,sx=3200,ax=3201,F0=0,ox=1,wr="",Gn="srgb",Da="srgb-linear",yc="linear",Et="srgb",Fs=7680,kd=519,lx=512,cx=513,ux=514,k0=515,hx=516,fx=517,dx=518,px=519,zd=35044,Bd="300 es",or=2e3,cc=2001;class Ia{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const xn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Hd=1234567;const xo=Math.PI/180,No=180/Math.PI;function Ls(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(xn[i&255]+xn[i>>8&255]+xn[i>>16&255]+xn[i>>24&255]+"-"+xn[e&255]+xn[e>>8&255]+"-"+xn[e>>16&15|64]+xn[e>>24&255]+"-"+xn[t&63|128]+xn[t>>8&255]+"-"+xn[t>>16&255]+xn[t>>24&255]+xn[n&255]+xn[n>>8&255]+xn[n>>16&255]+xn[n>>24&255]).toLowerCase()}function an(i,e,t){return Math.max(e,Math.min(t,i))}function Lf(i,e){return(i%e+e)%e}function mx(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function gx(i,e,t){return i!==e?(t-i)/(e-i):0}function yo(i,e,t){return(1-t)*i+t*e}function _x(i,e,t,n){return yo(i,e,1-Math.exp(-t*n))}function vx(i,e=1){return e-Math.abs(Lf(i,e*2)-e)}function xx(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function yx(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Mx(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Sx(i,e){return i+Math.random()*(e-i)}function bx(i){return i*(.5-Math.random())}function Ex(i){i!==void 0&&(Hd=i);let e=Hd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function wx(i){return i*xo}function Tx(i){return i*No}function Ax(i){return(i&i-1)===0&&i!==0}function Cx(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Rx(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Px(i,e,t,n,r){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),u=a((e+n)/2),h=s((e-n)/2),d=a((e-n)/2),f=s((n-e)/2),g=a((n-e)/2);switch(r){case"XYX":i.set(o*u,l*h,l*d,o*c);break;case"YZY":i.set(l*d,o*u,l*h,o*c);break;case"ZXZ":i.set(l*h,l*d,o*u,o*c);break;case"XZX":i.set(o*u,l*g,l*f,o*c);break;case"YXY":i.set(l*f,o*u,l*g,o*c);break;case"ZYZ":i.set(l*g,l*f,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ta(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Pn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Vh={DEG2RAD:xo,RAD2DEG:No,generateUUID:Ls,clamp:an,euclideanModulo:Lf,mapLinear:mx,inverseLerp:gx,lerp:yo,damp:_x,pingpong:vx,smoothstep:xx,smootherstep:yx,randInt:Mx,randFloat:Sx,randFloatSpread:bx,seededRandom:Ex,degToRad:wx,radToDeg:Tx,isPowerOfTwo:Ax,ceilPowerOfTwo:Cx,floorPowerOfTwo:Rx,setQuaternionFromProperEuler:Px,normalize:Pn,denormalize:ta};class me{constructor(e=0,t=0){me.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(an(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class st{constructor(e,t,n,r,s,a,o,l,c){st.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c)}set(e,t,n,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],g=n[8],_=r[0],m=r[3],p=r[6],y=r[1],x=r[4],v=r[7],A=r[2],w=r[5],E=r[8];return s[0]=a*_+o*y+l*A,s[3]=a*m+o*x+l*w,s[6]=a*p+o*v+l*E,s[1]=c*_+u*y+h*A,s[4]=c*m+u*x+h*w,s[7]=c*p+u*v+h*E,s[2]=d*_+f*y+g*A,s[5]=d*m+f*x+g*w,s[8]=d*p+f*v+g*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,d=o*l-u*s,f=c*s-a*l,g=t*h+n*d+r*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(r*c-u*n)*_,e[2]=(o*n-r*a)*_,e[3]=d*_,e[4]=(u*t-r*l)*_,e[5]=(r*s-o*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Jc.makeScale(e,t)),this}rotate(e){return this.premultiply(Jc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Jc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Jc=new st;function z0(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function uc(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Lx(){const i=uc("canvas");return i.style.display="block",i}const Vd={};function ro(i){i in Vd||(Vd[i]=!0,console.warn(i))}function Dx(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function Ix(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Ux(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const mt={enabled:!0,workingColorSpace:Da,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Et&&(i.r=cr(i.r),i.g=cr(i.g),i.b=cr(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Et&&(i.r=ma(i.r),i.g=ma(i.g),i.b=ma(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===wr?yc:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function cr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ma(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Gd=[.64,.33,.3,.6,.15,.06],Wd=[.2126,.7152,.0722],Xd=[.3127,.329],Yd=new st().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),qd=new st().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);mt.define({[Da]:{primaries:Gd,whitePoint:Xd,transfer:yc,toXYZ:Yd,fromXYZ:qd,luminanceCoefficients:Wd,workingColorSpaceConfig:{unpackColorSpace:Gn},outputColorSpaceConfig:{drawingBufferColorSpace:Gn}},[Gn]:{primaries:Gd,whitePoint:Xd,transfer:Et,toXYZ:Yd,fromXYZ:qd,luminanceCoefficients:Wd,outputColorSpaceConfig:{drawingBufferColorSpace:Gn}}});let ks;class Nx{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ks===void 0&&(ks=uc("canvas")),ks.width=e.width,ks.height=e.height;const n=ks.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ks}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=uc("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=cr(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(cr(t[n]/255)*255):t[n]=cr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ox=0;class B0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ox++}),this.uuid=Ls(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(jc(r[a].image)):s.push(jc(r[a]))}else s=jc(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function jc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Nx.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Fx=0;class Bn extends Ia{constructor(e=Bn.DEFAULT_IMAGE,t=Bn.DEFAULT_MAPPING,n=cs,r=cs,s=zi,a=us,o=Ci,l=fr,c=Bn.DEFAULT_ANISOTROPY,u=wr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Fx++}),this.uuid=Ls(),this.name="",this.source=new B0(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new me(0,0),this.repeat=new me(1,1),this.center=new me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==T0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case lc:e.x=e.x-Math.floor(e.x);break;case cs:e.x=e.x<0?0:1;break;case mh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case lc:e.y=e.y-Math.floor(e.y);break;case cs:e.y=e.y<0?0:1;break;case mh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Bn.DEFAULT_IMAGE=null;Bn.DEFAULT_MAPPING=T0;Bn.DEFAULT_ANISOTROPY=1;class wt{constructor(e=0,t=0,n=0,r=1){wt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,v=(f+1)/2,A=(p+1)/2,w=(u+d)/4,E=(h+_)/4,C=(g+m)/4;return x>v&&x>A?x<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(x),r=w/n,s=E/n):v>A?v<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),n=w/r,s=C/r):A<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),n=E/s,r=C/s),this.set(n,r,s,t),this}let y=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(h-_)/y,this.z=(d-u)/y,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class kx extends Ia{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new wt(0,0,e,t),this.scissorTest=!1,this.viewport=new wt(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Bn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new B0(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ws extends kx{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class H0 extends Bn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Pi,this.minFilter=Pi,this.wrapR=cs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class zx extends Bn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Pi,this.minFilter=Pi,this.wrapR=cs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wo{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let l=n[r+0],c=n[r+1],u=n[r+2],h=n[r+3];const d=s[a+0],f=s[a+1],g=s[a+2],_=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==d||c!==f||u!==g){let m=1-o;const p=l*d+c*f+u*g+h*_,y=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const A=Math.sqrt(x),w=Math.atan2(A,p*y);m=Math.sin(m*w)/A,o=Math.sin(o*w)/A}const v=o*y;if(l=l*m+d*v,c=c*m+f*v,u=u*m+g*v,h=h*m+_*v,m===1-o){const A=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=A,c*=A,u*=A,h*=A}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],l=n[r+1],c=n[r+2],u=n[r+3],h=s[a],d=s[a+1],f=s[a+2],g=s[a+3];return e[t]=o*g+u*h+l*f-c*d,e[t+1]=l*g+u*d+c*h-o*f,e[t+2]=c*g+u*f+o*d-l*h,e[t+3]=u*g-o*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(r/2),h=o(s/2),d=l(n/2),f=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"YZX":this._x=d*u*h+c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h-d*f*g;break;case"XZY":this._x=d*u*h-c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+o+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(a-r)*f}else if(n>o&&n>h){const f=2*Math.sqrt(1+n-o-h);this._w=(u-l)/f,this._x=.25*f,this._y=(r+a)/f,this._z=(s+c)/f}else if(o>h){const f=2*Math.sqrt(1+o-n-h);this._w=(s-c)/f,this._x=(r+a)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-n-o);this._w=(a-r)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(an(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-r*o,this._w=a*u-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*r+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=a*h+this._w*d,this._x=n*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,n=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion($d.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion($d.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*n),u=2*(o*t-s*r),h=2*(s*n-a*t);return this.x=t+l*c+a*h-o*u,this.y=n+l*u+o*c-s*h,this.z=r+l*h+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Qc.copy(this).projectOnVector(e),this.sub(Qc)}reflect(e){return this.sub(Qc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(an(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Qc=new I,$d=new Wo;class dr{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Mi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Mi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Mi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Mi):Mi.fromBufferAttribute(s,a),Mi.applyMatrix4(e.matrixWorld),this.expandByPoint(Mi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ll.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ll.copy(n.boundingBox)),ll.applyMatrix4(e.matrixWorld),this.union(ll)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Mi),Mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xa),cl.subVectors(this.max,Xa),zs.subVectors(e.a,Xa),Bs.subVectors(e.b,Xa),Hs.subVectors(e.c,Xa),vr.subVectors(Bs,zs),xr.subVectors(Hs,Bs),qr.subVectors(zs,Hs);let t=[0,-vr.z,vr.y,0,-xr.z,xr.y,0,-qr.z,qr.y,vr.z,0,-vr.x,xr.z,0,-xr.x,qr.z,0,-qr.x,-vr.y,vr.x,0,-xr.y,xr.x,0,-qr.y,qr.x,0];return!eu(t,zs,Bs,Hs,cl)||(t=[1,0,0,0,1,0,0,0,1],!eu(t,zs,Bs,Hs,cl))?!1:(ul.crossVectors(vr,xr),t=[ul.x,ul.y,ul.z],eu(t,zs,Bs,Hs,cl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Zi=[new I,new I,new I,new I,new I,new I,new I,new I],Mi=new I,ll=new dr,zs=new I,Bs=new I,Hs=new I,vr=new I,xr=new I,qr=new I,Xa=new I,cl=new I,ul=new I,$r=new I;function eu(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){$r.fromArray(i,s);const o=r.x*Math.abs($r.x)+r.y*Math.abs($r.y)+r.z*Math.abs($r.z),l=e.dot($r),c=t.dot($r),u=n.dot($r);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Bx=new dr,Ya=new I,tu=new I;class Mc{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Bx.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ya.subVectors(e,this.center);const t=Ya.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Ya,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(tu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ya.copy(e.center).add(tu)),this.expandByPoint(Ya.copy(e.center).sub(tu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ki=new I,nu=new I,hl=new I,yr=new I,iu=new I,fl=new I,ru=new I;class V0{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ki)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ki.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ki.copy(this.origin).addScaledVector(this.direction,t),Ki.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){nu.copy(e).add(t).multiplyScalar(.5),hl.copy(t).sub(e).normalize(),yr.copy(this.origin).sub(nu);const s=e.distanceTo(t)*.5,a=-this.direction.dot(hl),o=yr.dot(this.direction),l=-yr.dot(hl),c=yr.lengthSq(),u=Math.abs(1-a*a);let h,d,f,g;if(u>0)if(h=a*l-o,d=a*o-l,g=s*u,h>=0)if(d>=-g)if(d<=g){const _=1/u;h*=_,d*=_,f=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-a*s+o)),d=h>0?-s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(h=Math.max(0,-(a*s+o)),d=h>0?s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c);else d=a>0?-s:s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(nu).addScaledVector(hl,d),f}intersectSphere(e,t){Ki.subVectors(e.center,this.origin);const n=Ki.dot(this.direction),r=Ki.dot(Ki)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Ki)!==null}intersectTriangle(e,t,n,r,s){iu.subVectors(t,e),fl.subVectors(n,e),ru.crossVectors(iu,fl);let a=this.direction.dot(ru),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;yr.subVectors(this.origin,e);const l=o*this.direction.dot(fl.crossVectors(yr,fl));if(l<0)return null;const c=o*this.direction.dot(iu.cross(yr));if(c<0||l+c>a)return null;const u=-o*yr.dot(ru);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ot{constructor(e,t,n,r,s,a,o,l,c,u,h,d,f,g,_,m){Ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c,u,h,d,f,g,_,m)}set(e,t,n,r,s,a,o,l,c,u,h,d,f,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ot().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Vs.setFromMatrixColumn(e,0).length(),s=1/Vs.setFromMatrixColumn(e,1).length(),a=1/Vs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=a*u,f=a*h,g=o*u,_=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+g*c,t[5]=d-_*c,t[9]=-o*l,t[2]=_-d*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,f=l*h,g=c*u,_=c*h;t[0]=d+_*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=f*o-g,t[6]=_+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,f=l*h,g=c*u,_=c*h;t[0]=d-_*o,t[4]=-a*h,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*u,t[9]=_-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,f=a*h,g=o*u,_=o*h;t[0]=l*u,t[4]=g*c-f,t[8]=d*c+_,t[1]=l*h,t[5]=_*c+d,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,f=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=_-d*h,t[8]=g*h+f,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*h+g,t[10]=d-_*h}else if(e.order==="XZY"){const d=a*l,f=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+_,t[5]=a*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=o*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Hx,e,Vx)}lookAt(e,t,n){const r=this.elements;return Jn.subVectors(e,t),Jn.lengthSq()===0&&(Jn.z=1),Jn.normalize(),Mr.crossVectors(n,Jn),Mr.lengthSq()===0&&(Math.abs(n.z)===1?Jn.x+=1e-4:Jn.z+=1e-4,Jn.normalize(),Mr.crossVectors(n,Jn)),Mr.normalize(),dl.crossVectors(Jn,Mr),r[0]=Mr.x,r[4]=dl.x,r[8]=Jn.x,r[1]=Mr.y,r[5]=dl.y,r[9]=Jn.y,r[2]=Mr.z,r[6]=dl.z,r[10]=Jn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],y=n[3],x=n[7],v=n[11],A=n[15],w=r[0],E=r[4],C=r[8],S=r[12],M=r[1],L=r[5],N=r[9],z=r[13],B=r[2],q=r[6],H=r[10],Y=r[14],G=r[3],ae=r[7],D=r[11],he=r[15];return s[0]=a*w+o*M+l*B+c*G,s[4]=a*E+o*L+l*q+c*ae,s[8]=a*C+o*N+l*H+c*D,s[12]=a*S+o*z+l*Y+c*he,s[1]=u*w+h*M+d*B+f*G,s[5]=u*E+h*L+d*q+f*ae,s[9]=u*C+h*N+d*H+f*D,s[13]=u*S+h*z+d*Y+f*he,s[2]=g*w+_*M+m*B+p*G,s[6]=g*E+_*L+m*q+p*ae,s[10]=g*C+_*N+m*H+p*D,s[14]=g*S+_*z+m*Y+p*he,s[3]=y*w+x*M+v*B+A*G,s[7]=y*E+x*L+v*q+A*ae,s[11]=y*C+x*N+v*H+A*D,s[15]=y*S+x*z+v*Y+A*he,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+s*l*h-r*c*h-s*o*d+n*c*d+r*o*f-n*l*f)+_*(+t*l*f-t*c*d+s*a*d-r*a*f+r*c*u-s*l*u)+m*(+t*c*h-t*o*f-s*a*h+n*a*f+s*o*u-n*c*u)+p*(-r*o*u-t*l*h+t*o*d+r*a*h-n*a*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],y=h*m*c-_*d*c+_*l*f-o*m*f-h*l*p+o*d*p,x=g*d*c-u*m*c-g*l*f+a*m*f+u*l*p-a*d*p,v=u*_*c-g*h*c+g*o*f-a*_*f-u*o*p+a*h*p,A=g*h*l-u*_*l-g*o*d+a*_*d+u*o*m-a*h*m,w=t*y+n*x+r*v+s*A;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/w;return e[0]=y*E,e[1]=(_*d*s-h*m*s-_*r*f+n*m*f+h*r*p-n*d*p)*E,e[2]=(o*m*s-_*l*s+_*r*c-n*m*c-o*r*p+n*l*p)*E,e[3]=(h*l*s-o*d*s-h*r*c+n*d*c+o*r*f-n*l*f)*E,e[4]=x*E,e[5]=(u*m*s-g*d*s+g*r*f-t*m*f-u*r*p+t*d*p)*E,e[6]=(g*l*s-a*m*s-g*r*c+t*m*c+a*r*p-t*l*p)*E,e[7]=(a*d*s-u*l*s+u*r*c-t*d*c-a*r*f+t*l*f)*E,e[8]=v*E,e[9]=(g*h*s-u*_*s-g*n*f+t*_*f+u*n*p-t*h*p)*E,e[10]=(a*_*s-g*o*s+g*n*c-t*_*c-a*n*p+t*o*p)*E,e[11]=(u*o*s-a*h*s-u*n*c+t*h*c+a*n*f-t*o*f)*E,e[12]=A*E,e[13]=(u*_*r-g*h*r+g*n*d-t*_*d-u*n*m+t*h*m)*E,e[14]=(g*o*r-a*_*r-g*n*l+t*_*l+a*n*m-t*o*m)*E,e[15]=(a*h*r-u*o*r+u*n*l-t*h*l-a*n*d+t*o*d)*E,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+n,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,h=o+o,d=s*c,f=s*u,g=s*h,_=a*u,m=a*h,p=o*h,y=l*c,x=l*u,v=l*h,A=n.x,w=n.y,E=n.z;return r[0]=(1-(_+p))*A,r[1]=(f+v)*A,r[2]=(g-x)*A,r[3]=0,r[4]=(f-v)*w,r[5]=(1-(d+p))*w,r[6]=(m+y)*w,r[7]=0,r[8]=(g+x)*E,r[9]=(m-y)*E,r[10]=(1-(d+_))*E,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=Vs.set(r[0],r[1],r[2]).length();const a=Vs.set(r[4],r[5],r[6]).length(),o=Vs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Si.copy(this);const c=1/s,u=1/a,h=1/o;return Si.elements[0]*=c,Si.elements[1]*=c,Si.elements[2]*=c,Si.elements[4]*=u,Si.elements[5]*=u,Si.elements[6]*=u,Si.elements[8]*=h,Si.elements[9]*=h,Si.elements[10]*=h,t.setFromRotationMatrix(Si),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a,o=or){const l=this.elements,c=2*s/(t-e),u=2*s/(n-r),h=(t+e)/(t-e),d=(n+r)/(n-r);let f,g;if(o===or)f=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===cc)f=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=or){const l=this.elements,c=1/(t-e),u=1/(n-r),h=1/(a-s),d=(t+e)*c,f=(n+r)*u;let g,_;if(o===or)g=(a+s)*h,_=-2*h;else if(o===cc)g=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Vs=new I,Si=new Ot,Hx=new I(0,0,0),Vx=new I(1,1,1),Mr=new I,dl=new I,Jn=new I,Zd=new Ot,Kd=new Wo;class Gi{constructor(e=0,t=0,n=0,r=Gi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],h=r[2],d=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(an(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-an(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(an(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-an(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(an(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-an(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Zd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Zd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Kd.setFromEuler(this),this.setFromQuaternion(Kd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Gi.DEFAULT_ORDER="XYZ";class G0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Gx=0;const Jd=new I,Gs=new Wo,Ji=new Ot,pl=new I,qa=new I,Wx=new I,Xx=new Wo,jd=new I(1,0,0),Qd=new I(0,1,0),ep=new I(0,0,1),tp={type:"added"},Yx={type:"removed"},Ws={type:"childadded",child:null},su={type:"childremoved",child:null};class mn extends Ia{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gx++}),this.uuid=Ls(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=mn.DEFAULT_UP.clone();const e=new I,t=new Gi,n=new Wo,r=new I(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ot},normalMatrix:{value:new st}}),this.matrix=new Ot,this.matrixWorld=new Ot,this.matrixAutoUpdate=mn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new G0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Gs.setFromAxisAngle(e,t),this.quaternion.multiply(Gs),this}rotateOnWorldAxis(e,t){return Gs.setFromAxisAngle(e,t),this.quaternion.premultiply(Gs),this}rotateX(e){return this.rotateOnAxis(jd,e)}rotateY(e){return this.rotateOnAxis(Qd,e)}rotateZ(e){return this.rotateOnAxis(ep,e)}translateOnAxis(e,t){return Jd.copy(e).applyQuaternion(this.quaternion),this.position.add(Jd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(jd,e)}translateY(e){return this.translateOnAxis(Qd,e)}translateZ(e){return this.translateOnAxis(ep,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ji.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?pl.copy(e):pl.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),qa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ji.lookAt(qa,pl,this.up):Ji.lookAt(pl,qa,this.up),this.quaternion.setFromRotationMatrix(Ji),r&&(Ji.extractRotation(r.matrixWorld),Gs.setFromRotationMatrix(Ji),this.quaternion.premultiply(Gs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(tp),Ws.child=e,this.dispatchEvent(Ws),Ws.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Yx),su.child=e,this.dispatchEvent(su),su.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ji.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ji.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ji),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(tp),Ws.child=e,this.dispatchEvent(Ws),Ws.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qa,e,Wx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qa,Xx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=r,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}mn.DEFAULT_UP=new I(0,1,0);mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const bi=new I,ji=new I,au=new I,Qi=new I,Xs=new I,Ys=new I,np=new I,ou=new I,lu=new I,cu=new I,uu=new wt,hu=new wt,fu=new wt;class Ai{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),bi.subVectors(e,t),r.cross(bi);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){bi.subVectors(r,t),ji.subVectors(n,t),au.subVectors(e,t);const a=bi.dot(bi),o=bi.dot(ji),l=bi.dot(au),c=ji.dot(ji),u=ji.dot(au),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const d=1/h,f=(c*l-o*u)*d,g=(a*u-o*l)*d;return s.set(1-f-g,g,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Qi)===null?!1:Qi.x>=0&&Qi.y>=0&&Qi.x+Qi.y<=1}static getInterpolation(e,t,n,r,s,a,o,l){return this.getBarycoord(e,t,n,r,Qi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Qi.x),l.addScaledVector(a,Qi.y),l.addScaledVector(o,Qi.z),l)}static getInterpolatedAttribute(e,t,n,r,s,a){return uu.setScalar(0),hu.setScalar(0),fu.setScalar(0),uu.fromBufferAttribute(e,t),hu.fromBufferAttribute(e,n),fu.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(uu,s.x),a.addScaledVector(hu,s.y),a.addScaledVector(fu,s.z),a}static isFrontFacing(e,t,n,r){return bi.subVectors(n,t),ji.subVectors(e,t),bi.cross(ji).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bi.subVectors(this.c,this.b),ji.subVectors(this.a,this.b),bi.cross(ji).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ai.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ai.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return Ai.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Ai.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ai.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;Xs.subVectors(r,n),Ys.subVectors(s,n),ou.subVectors(e,n);const l=Xs.dot(ou),c=Ys.dot(ou);if(l<=0&&c<=0)return t.copy(n);lu.subVectors(e,r);const u=Xs.dot(lu),h=Ys.dot(lu);if(u>=0&&h<=u)return t.copy(r);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Xs,a);cu.subVectors(e,s);const f=Xs.dot(cu),g=Ys.dot(cu);if(g>=0&&f<=g)return t.copy(s);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Ys,o);const m=u*g-f*h;if(m<=0&&h-u>=0&&f-g>=0)return np.subVectors(s,r),o=(h-u)/(h-u+(f-g)),t.copy(r).addScaledVector(np,o);const p=1/(m+_+d);return a=_*p,o=d*p,t.copy(n).addScaledVector(Xs,a).addScaledVector(Ys,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const W0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Sr={h:0,s:0,l:0},ml={h:0,s:0,l:0};function du(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class nt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Gn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,mt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=mt.workingColorSpace){return this.r=e,this.g=t,this.b=n,mt.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=mt.workingColorSpace){if(e=Lf(e,1),t=an(t,0,1),n=an(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=du(a,s,e+1/3),this.g=du(a,s,e),this.b=du(a,s,e-1/3)}return mt.toWorkingColorSpace(this,r),this}setStyle(e,t=Gn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Gn){const n=W0[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=cr(e.r),this.g=cr(e.g),this.b=cr(e.b),this}copyLinearToSRGB(e){return this.r=ma(e.r),this.g=ma(e.g),this.b=ma(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gn){return mt.fromWorkingColorSpace(yn.copy(this),e),Math.round(an(yn.r*255,0,255))*65536+Math.round(an(yn.g*255,0,255))*256+Math.round(an(yn.b*255,0,255))}getHexString(e=Gn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=mt.workingColorSpace){mt.fromWorkingColorSpace(yn.copy(this),t);const n=yn.r,r=yn.g,s=yn.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-n)/h+2;break;case s:l=(n-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=mt.workingColorSpace){return mt.fromWorkingColorSpace(yn.copy(this),t),e.r=yn.r,e.g=yn.g,e.b=yn.b,e}getStyle(e=Gn){mt.fromWorkingColorSpace(yn.copy(this),e);const t=yn.r,n=yn.g,r=yn.b;return e!==Gn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Sr),this.setHSL(Sr.h+e,Sr.s+t,Sr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Sr),e.getHSL(ml);const n=yo(Sr.h,ml.h,t),r=yo(Sr.s,ml.s,t),s=yo(Sr.l,ml.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const yn=new nt;nt.NAMES=W0;let qx=0;class Ua extends Ia{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qx++}),this.uuid=Ls(),this.name="",this.blending=da,this.side=Vr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rh,this.blendDst=sh,this.blendEquation=ss,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new nt(0,0,0),this.blendAlpha=0,this.depthFunc=ba,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=kd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fs,this.stencilZFail=Fs,this.stencilZPass=Fs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==da&&(n.blending=this.blending),this.side!==Vr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==rh&&(n.blendSrc=this.blendSrc),this.blendDst!==sh&&(n.blendDst=this.blendDst),this.blendEquation!==ss&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ba&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==kd&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Fs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Fs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ds extends Ua{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gi,this.combine=E0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Qt=new I,gl=new me;class Hn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=zd,this.updateRanges=[],this.gpuType=ar,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)gl.fromBufferAttribute(this,t),gl.applyMatrix3(e),this.setXY(t,gl.x,gl.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix3(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix4(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyNormalMatrix(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.transformDirection(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ta(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Pn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ta(t,this.array)),t}setX(e,t){return this.normalized&&(t=Pn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ta(t,this.array)),t}setY(e,t){return this.normalized&&(t=Pn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ta(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Pn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ta(t,this.array)),t}setW(e,t){return this.normalized&&(t=Pn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Pn(t,this.array),n=Pn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Pn(t,this.array),n=Pn(n,this.array),r=Pn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Pn(t,this.array),n=Pn(n,this.array),r=Pn(r,this.array),s=Pn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==zd&&(e.usage=this.usage),e}}class X0 extends Hn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Y0 extends Hn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class bt extends Hn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let $x=0;const li=new Ot,pu=new mn,qs=new I,jn=new dr,$a=new dr,cn=new I;class _n extends Ia{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$x++}),this.uuid=Ls(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(z0(e)?Y0:X0)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new st().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return li.makeRotationFromQuaternion(e),this.applyMatrix4(li),this}rotateX(e){return li.makeRotationX(e),this.applyMatrix4(li),this}rotateY(e){return li.makeRotationY(e),this.applyMatrix4(li),this}rotateZ(e){return li.makeRotationZ(e),this.applyMatrix4(li),this}translate(e,t,n){return li.makeTranslation(e,t,n),this.applyMatrix4(li),this}scale(e,t,n){return li.makeScale(e,t,n),this.applyMatrix4(li),this}lookAt(e){return pu.lookAt(e),pu.updateMatrix(),this.applyMatrix4(pu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qs).negate(),this.translate(qs.x,qs.y,qs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new bt(n,3))}else{for(let n=0,r=t.count;n<r;n++){const s=e[n];t.setXYZ(n,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new dr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];jn.setFromBufferAttribute(s),this.morphTargetsRelative?(cn.addVectors(this.boundingBox.min,jn.min),this.boundingBox.expandByPoint(cn),cn.addVectors(this.boundingBox.max,jn.max),this.boundingBox.expandByPoint(cn)):(this.boundingBox.expandByPoint(jn.min),this.boundingBox.expandByPoint(jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if(jn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];$a.setFromBufferAttribute(o),this.morphTargetsRelative?(cn.addVectors(jn.min,$a.min),jn.expandByPoint(cn),cn.addVectors(jn.max,$a.max),jn.expandByPoint(cn)):(jn.expandByPoint($a.min),jn.expandByPoint($a.max))}jn.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)cn.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(cn));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)cn.fromBufferAttribute(o,c),l&&(qs.fromBufferAttribute(e,c),cn.add(qs)),r=Math.max(r,n.distanceToSquared(cn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Hn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let C=0;C<n.count;C++)o[C]=new I,l[C]=new I;const c=new I,u=new I,h=new I,d=new me,f=new me,g=new me,_=new I,m=new I;function p(C,S,M){c.fromBufferAttribute(n,C),u.fromBufferAttribute(n,S),h.fromBufferAttribute(n,M),d.fromBufferAttribute(s,C),f.fromBufferAttribute(s,S),g.fromBufferAttribute(s,M),u.sub(c),h.sub(c),f.sub(d),g.sub(d);const L=1/(f.x*g.y-g.x*f.y);isFinite(L)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(L),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(L),o[C].add(_),o[S].add(_),o[M].add(_),l[C].add(m),l[S].add(m),l[M].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let C=0,S=y.length;C<S;++C){const M=y[C],L=M.start,N=M.count;for(let z=L,B=L+N;z<B;z+=3)p(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const x=new I,v=new I,A=new I,w=new I;function E(C){A.fromBufferAttribute(r,C),w.copy(A);const S=o[C];x.copy(S),x.sub(A.multiplyScalar(A.dot(S))).normalize(),v.crossVectors(w,S);const L=v.dot(l[C])<0?-1:1;a.setXYZW(C,x.x,x.y,x.z,L)}for(let C=0,S=y.length;C<S;++C){const M=y[C],L=M.start,N=M.count;for(let z=L,B=L+N;z<B;z+=3)E(e.getX(z+0)),E(e.getX(z+1)),E(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Hn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const r=new I,s=new I,a=new I,o=new I,l=new I,c=new I,u=new I,h=new I;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)cn.fromBufferAttribute(e,t),cn.normalize(),e.setXYZ(t,cn.x,cn.y,cn.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*u;for(let p=0;p<u;p++)d[g++]=c[f++]}return new Hn(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new _n,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ip=new Ot,Zr=new V0,_l=new Mc,rp=new I,vl=new I,xl=new I,yl=new I,mu=new I,Ml=new I,sp=new I,Sl=new I;class Ft extends mn{constructor(e=new _n,t=new Ds){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Ml.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],h=s[l];u!==0&&(mu.fromBufferAttribute(h,e),a?Ml.addScaledVector(mu,u):Ml.addScaledVector(mu.sub(t),u))}t.add(Ml)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),_l.copy(n.boundingSphere),_l.applyMatrix4(s),Zr.copy(e.ray).recast(e.near),!(_l.containsPoint(Zr.origin)===!1&&(Zr.intersectSphere(_l,rp)===null||Zr.origin.distanceToSquared(rp)>(e.far-e.near)**2))&&(ip.copy(s).invert(),Zr.copy(e.ray).applyMatrix4(ip),!(n.boundingBox!==null&&Zr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Zr)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],y=Math.max(m.start,f.start),x=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let v=y,A=x;v<A;v+=3){const w=o.getX(v),E=o.getX(v+1),C=o.getX(v+2);r=bl(this,p,e,n,c,u,h,w,E,C),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const y=o.getX(m),x=o.getX(m+1),v=o.getX(m+2);r=bl(this,a,e,n,c,u,h,y,x,v),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],y=Math.max(m.start,f.start),x=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let v=y,A=x;v<A;v+=3){const w=v,E=v+1,C=v+2;r=bl(this,p,e,n,c,u,h,w,E,C),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const y=m,x=m+1,v=m+2;r=bl(this,a,e,n,c,u,h,y,x,v),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Zx(i,e,t,n,r,s,a,o){let l;if(e.side===zn?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,e.side===Vr,o),l===null)return null;Sl.copy(o),Sl.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Sl);return c<t.near||c>t.far?null:{distance:c,point:Sl.clone(),object:i}}function bl(i,e,t,n,r,s,a,o,l,c){i.getVertexPosition(o,vl),i.getVertexPosition(l,xl),i.getVertexPosition(c,yl);const u=Zx(i,e,t,n,vl,xl,yl,sp);if(u){const h=new I;Ai.getBarycoord(sp,vl,xl,yl,h),r&&(u.uv=Ai.getInterpolatedAttribute(r,o,l,c,h,new me)),s&&(u.uv1=Ai.getInterpolatedAttribute(s,o,l,c,h,new me)),a&&(u.normal=Ai.getInterpolatedAttribute(a,o,l,c,h,new I),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new I,materialIndex:0};Ai.getNormal(vl,xl,yl,d.normal),u.face=d,u.barycoord=h}return u}class pr extends _n{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],h=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,r,a,2),g("x","z","y",1,-1,e,n,-t,r,a,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new bt(c,3)),this.setAttribute("normal",new bt(u,3)),this.setAttribute("uv",new bt(h,2));function g(_,m,p,y,x,v,A,w,E,C,S){const M=v/E,L=A/C,N=v/2,z=A/2,B=w/2,q=E+1,H=C+1;let Y=0,G=0;const ae=new I;for(let D=0;D<H;D++){const he=D*L-z;for(let Fe=0;Fe<q;Fe++){const tt=Fe*M-N;ae[_]=tt*y,ae[m]=he*x,ae[p]=B,c.push(ae.x,ae.y,ae.z),ae[_]=0,ae[m]=0,ae[p]=w>0?1:-1,u.push(ae.x,ae.y,ae.z),h.push(Fe/E),h.push(1-D/C),Y+=1}}for(let D=0;D<C;D++)for(let he=0;he<E;he++){const Fe=d+he+q*D,tt=d+he+q*(D+1),Z=d+(he+1)+q*(D+1),re=d+(he+1)+q*D;l.push(Fe,tt,re),l.push(tt,Z,re),G+=6}o.addGroup(f,G,S),f+=G,d+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ca(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Ln(i){const e={};for(let t=0;t<i.length;t++){const n=Ca(i[t]);for(const r in n)e[r]=n[r]}return e}function Kx(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function q0(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:mt.workingColorSpace}const Jx={clone:Ca,merge:Ln};var jx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wi extends Ua{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jx,this.fragmentShader=Qx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ca(e.uniforms),this.uniformsGroups=Kx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class $0 extends mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ot,this.projectionMatrix=new Ot,this.projectionMatrixInverse=new Ot,this.coordinateSystem=or}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const br=new I,ap=new me,op=new me;class Nn extends $0{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=No*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(xo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return No*2*Math.atan(Math.tan(xo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){br.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(br.x,br.y).multiplyScalar(-e/br.z),br.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(br.x,br.y).multiplyScalar(-e/br.z)}getViewSize(e,t){return this.getViewBounds(e,ap,op),t.subVectors(op,ap)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(xo*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const $s=-90,Zs=1;class ey extends mn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Nn($s,Zs,e,t);r.layers=this.layers,this.add(r);const s=new Nn($s,Zs,e,t);s.layers=this.layers,this.add(s);const a=new Nn($s,Zs,e,t);a.layers=this.layers,this.add(a);const o=new Nn($s,Zs,e,t);o.layers=this.layers,this.add(o);const l=new Nn($s,Zs,e,t);l.layers=this.layers,this.add(l);const c=new Nn($s,Zs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===or)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===cc)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Z0 extends Bn{constructor(e,t,n,r,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Ea,super(e,t,n,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ty extends ws{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Z0(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:zi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new pr(5,5,5),s=new Wi({name:"CubemapFromEquirect",uniforms:Ca(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:zn,blending:Or});s.uniforms.tEquirect.value=t;const a=new Ft(r,s),o=t.minFilter;return t.minFilter===us&&(t.minFilter=zi),new ey(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}const gu=new I,ny=new I,iy=new st;class ns{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=gu.subVectors(n,t).cross(ny.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(gu),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||iy.getNormalMatrix(e),r=this.coplanarPoint(gu).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Kr=new Mc,El=new I;class Df{constructor(e=new ns,t=new ns,n=new ns,r=new ns,s=new ns,a=new ns){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=or){const n=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],h=r[6],d=r[7],f=r[8],g=r[9],_=r[10],m=r[11],p=r[12],y=r[13],x=r[14],v=r[15];if(n[0].setComponents(l-s,d-c,m-f,v-p).normalize(),n[1].setComponents(l+s,d+c,m+f,v+p).normalize(),n[2].setComponents(l+a,d+u,m+g,v+y).normalize(),n[3].setComponents(l-a,d-u,m-g,v-y).normalize(),n[4].setComponents(l-o,d-h,m-_,v-x).normalize(),t===or)n[5].setComponents(l+o,d+h,m+_,v+x).normalize();else if(t===cc)n[5].setComponents(o,h,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Kr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Kr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Kr)}intersectsSprite(e){return Kr.center.set(0,0,0),Kr.radius=.7071067811865476,Kr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Kr)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(El.x=r.normal.x>0?e.max.x:e.min.x,El.y=r.normal.y>0?e.max.y:e.min.y,El.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(El)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function K0(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function ry(i){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,h=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){const u=l.array,h=l.updateRanges;if(i.bindBuffer(c,o),h.length===0)i.bufferSubData(c,0,u);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){const g=h[d],_=h[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,h[d]=_)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){const _=h[f];i.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}class Na extends _n{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(r),c=o+1,u=l+1,h=e/o,d=t/l,f=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const y=p*d-a;for(let x=0;x<c;x++){const v=x*h-s;g.push(v,-y,0),_.push(0,0,1),m.push(x/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<o;y++){const x=y+c*p,v=y+c*(p+1),A=y+1+c*(p+1),w=y+1+c*p;f.push(x,v,w),f.push(v,A,w)}this.setIndex(f),this.setAttribute("position",new bt(g,3)),this.setAttribute("normal",new bt(_,3)),this.setAttribute("uv",new bt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Na(e.width,e.height,e.widthSegments,e.heightSegments)}}var sy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ay=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,oy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ly=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,uy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hy=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,fy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,dy=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,py=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,my=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_y=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,vy=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,xy=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,yy=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,My=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Sy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,by=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ey=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,wy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ty=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ay=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Cy=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ry=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Py=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ly=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Dy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Iy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Uy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ny="gl_FragColor = linearToOutputTexel( gl_FragColor );",Oy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Fy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ky=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,zy=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,By=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Hy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Vy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Gy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Wy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Xy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Yy=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,qy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$y=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Zy=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ky=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Jy=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,jy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Qy=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,eM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,tM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,nM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,iM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,rM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,sM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,aM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,oM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,hM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,pM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_M=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,vM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,MM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,SM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,bM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,EM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,TM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,AM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,CM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,RM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,PM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,LM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,DM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,IM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,UM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,NM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,OM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,FM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,BM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,HM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,VM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,GM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,WM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,XM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,YM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,$M=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ZM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,KM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,JM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,jM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,QM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,eS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,tS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,nS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,iS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const rS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,oS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,hS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,fS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,dS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,pS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_S=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,xS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,MS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,SS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,bS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ES=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,wS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,TS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,AS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,RS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PS=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,LS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DS=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,IS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,US=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,NS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,OS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,FS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,at={alphahash_fragment:sy,alphahash_pars_fragment:ay,alphamap_fragment:oy,alphamap_pars_fragment:ly,alphatest_fragment:cy,alphatest_pars_fragment:uy,aomap_fragment:hy,aomap_pars_fragment:fy,batching_pars_vertex:dy,batching_vertex:py,begin_vertex:my,beginnormal_vertex:gy,bsdfs:_y,iridescence_fragment:vy,bumpmap_pars_fragment:xy,clipping_planes_fragment:yy,clipping_planes_pars_fragment:My,clipping_planes_pars_vertex:Sy,clipping_planes_vertex:by,color_fragment:Ey,color_pars_fragment:wy,color_pars_vertex:Ty,color_vertex:Ay,common:Cy,cube_uv_reflection_fragment:Ry,defaultnormal_vertex:Py,displacementmap_pars_vertex:Ly,displacementmap_vertex:Dy,emissivemap_fragment:Iy,emissivemap_pars_fragment:Uy,colorspace_fragment:Ny,colorspace_pars_fragment:Oy,envmap_fragment:Fy,envmap_common_pars_fragment:ky,envmap_pars_fragment:zy,envmap_pars_vertex:By,envmap_physical_pars_fragment:Jy,envmap_vertex:Hy,fog_vertex:Vy,fog_pars_vertex:Gy,fog_fragment:Wy,fog_pars_fragment:Xy,gradientmap_pars_fragment:Yy,lightmap_pars_fragment:qy,lights_lambert_fragment:$y,lights_lambert_pars_fragment:Zy,lights_pars_begin:Ky,lights_toon_fragment:jy,lights_toon_pars_fragment:Qy,lights_phong_fragment:eM,lights_phong_pars_fragment:tM,lights_physical_fragment:nM,lights_physical_pars_fragment:iM,lights_fragment_begin:rM,lights_fragment_maps:sM,lights_fragment_end:aM,logdepthbuf_fragment:oM,logdepthbuf_pars_fragment:lM,logdepthbuf_pars_vertex:cM,logdepthbuf_vertex:uM,map_fragment:hM,map_pars_fragment:fM,map_particle_fragment:dM,map_particle_pars_fragment:pM,metalnessmap_fragment:mM,metalnessmap_pars_fragment:gM,morphinstance_vertex:_M,morphcolor_vertex:vM,morphnormal_vertex:xM,morphtarget_pars_vertex:yM,morphtarget_vertex:MM,normal_fragment_begin:SM,normal_fragment_maps:bM,normal_pars_fragment:EM,normal_pars_vertex:wM,normal_vertex:TM,normalmap_pars_fragment:AM,clearcoat_normal_fragment_begin:CM,clearcoat_normal_fragment_maps:RM,clearcoat_pars_fragment:PM,iridescence_pars_fragment:LM,opaque_fragment:DM,packing:IM,premultiplied_alpha_fragment:UM,project_vertex:NM,dithering_fragment:OM,dithering_pars_fragment:FM,roughnessmap_fragment:kM,roughnessmap_pars_fragment:zM,shadowmap_pars_fragment:BM,shadowmap_pars_vertex:HM,shadowmap_vertex:VM,shadowmask_pars_fragment:GM,skinbase_vertex:WM,skinning_pars_vertex:XM,skinning_vertex:YM,skinnormal_vertex:qM,specularmap_fragment:$M,specularmap_pars_fragment:ZM,tonemapping_fragment:KM,tonemapping_pars_fragment:JM,transmission_fragment:jM,transmission_pars_fragment:QM,uv_pars_fragment:eS,uv_pars_vertex:tS,uv_vertex:nS,worldpos_vertex:iS,background_vert:rS,background_frag:sS,backgroundCube_vert:aS,backgroundCube_frag:oS,cube_vert:lS,cube_frag:cS,depth_vert:uS,depth_frag:hS,distanceRGBA_vert:fS,distanceRGBA_frag:dS,equirect_vert:pS,equirect_frag:mS,linedashed_vert:gS,linedashed_frag:_S,meshbasic_vert:vS,meshbasic_frag:xS,meshlambert_vert:yS,meshlambert_frag:MS,meshmatcap_vert:SS,meshmatcap_frag:bS,meshnormal_vert:ES,meshnormal_frag:wS,meshphong_vert:TS,meshphong_frag:AS,meshphysical_vert:CS,meshphysical_frag:RS,meshtoon_vert:PS,meshtoon_frag:LS,points_vert:DS,points_frag:IS,shadow_vert:US,shadow_frag:NS,sprite_vert:OS,sprite_frag:FS},Te={common:{diffuse:{value:new nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new nt(16777215)},opacity:{value:1},center:{value:new me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},Ni={basic:{uniforms:Ln([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:at.meshbasic_vert,fragmentShader:at.meshbasic_frag},lambert:{uniforms:Ln([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new nt(0)}}]),vertexShader:at.meshlambert_vert,fragmentShader:at.meshlambert_frag},phong:{uniforms:Ln([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new nt(0)},specular:{value:new nt(1118481)},shininess:{value:30}}]),vertexShader:at.meshphong_vert,fragmentShader:at.meshphong_frag},standard:{uniforms:Ln([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag},toon:{uniforms:Ln([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new nt(0)}}]),vertexShader:at.meshtoon_vert,fragmentShader:at.meshtoon_frag},matcap:{uniforms:Ln([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:at.meshmatcap_vert,fragmentShader:at.meshmatcap_frag},points:{uniforms:Ln([Te.points,Te.fog]),vertexShader:at.points_vert,fragmentShader:at.points_frag},dashed:{uniforms:Ln([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:at.linedashed_vert,fragmentShader:at.linedashed_frag},depth:{uniforms:Ln([Te.common,Te.displacementmap]),vertexShader:at.depth_vert,fragmentShader:at.depth_frag},normal:{uniforms:Ln([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:at.meshnormal_vert,fragmentShader:at.meshnormal_frag},sprite:{uniforms:Ln([Te.sprite,Te.fog]),vertexShader:at.sprite_vert,fragmentShader:at.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:at.background_vert,fragmentShader:at.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:at.backgroundCube_vert,fragmentShader:at.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:at.cube_vert,fragmentShader:at.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:at.equirect_vert,fragmentShader:at.equirect_frag},distanceRGBA:{uniforms:Ln([Te.common,Te.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:at.distanceRGBA_vert,fragmentShader:at.distanceRGBA_frag},shadow:{uniforms:Ln([Te.lights,Te.fog,{color:{value:new nt(0)},opacity:{value:1}}]),vertexShader:at.shadow_vert,fragmentShader:at.shadow_frag}};Ni.physical={uniforms:Ln([Ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new nt(0)},specularColor:{value:new nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag};const wl={r:0,b:0,g:0},Jr=new Gi,kS=new Ot;function zS(i,e,t,n,r,s,a){const o=new nt(0);let l=s===!0?0:1,c,u,h=null,d=0,f=null;function g(y){let x=y.isScene===!0?y.background:null;return x&&x.isTexture&&(x=(y.backgroundBlurriness>0?t:e).get(x)),x}function _(y){let x=!1;const v=g(y);v===null?p(o,l):v&&v.isColor&&(p(v,1),x=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(y,x){const v=g(x);v&&(v.isCubeTexture||v.mapping===xc)?(u===void 0&&(u=new Ft(new pr(1,1,1),new Wi({name:"BackgroundCubeMaterial",uniforms:Ca(Ni.backgroundCube.uniforms),vertexShader:Ni.backgroundCube.vertexShader,fragmentShader:Ni.backgroundCube.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,w,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Jr.copy(x.backgroundRotation),Jr.x*=-1,Jr.y*=-1,Jr.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Jr.y*=-1,Jr.z*=-1),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(kS.makeRotationFromEuler(Jr)),u.material.toneMapped=mt.getTransfer(v.colorSpace)!==Et,(h!==v||d!==v.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,h=v,d=v.version,f=i.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Ft(new Na(2,2),new Wi({name:"BackgroundMaterial",uniforms:Ca(Ni.background.uniforms),vertexShader:Ni.background.vertexShader,fragmentShader:Ni.background.fragmentShader,side:Vr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=mt.getTransfer(v.colorSpace)!==Et,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,d=v.version,f=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,x){y.getRGB(wl,q0(i)),n.buffers.color.setClear(wl.r,wl.g,wl.b,x,a)}return{getClearColor:function(){return o},setClearColor:function(y,x=1){o.set(y),l=x,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(o,l)},render:_,addToRenderList:m}}function BS(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=d(null);let s=r,a=!1;function o(M,L,N,z,B){let q=!1;const H=h(z,N,L);s!==H&&(s=H,c(s.object)),q=f(M,z,N,B),q&&g(M,z,N,B),B!==null&&e.update(B,i.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,v(M,L,N,z),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function u(M){return i.deleteVertexArray(M)}function h(M,L,N){const z=N.wireframe===!0;let B=n[M.id];B===void 0&&(B={},n[M.id]=B);let q=B[L.id];q===void 0&&(q={},B[L.id]=q);let H=q[z];return H===void 0&&(H=d(l()),q[z]=H),H}function d(M){const L=[],N=[],z=[];for(let B=0;B<t;B++)L[B]=0,N[B]=0,z[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:N,attributeDivisors:z,object:M,attributes:{},index:null}}function f(M,L,N,z){const B=s.attributes,q=L.attributes;let H=0;const Y=N.getAttributes();for(const G in Y)if(Y[G].location>=0){const D=B[G];let he=q[G];if(he===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(he=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(he=M.instanceColor)),D===void 0||D.attribute!==he||he&&D.data!==he.data)return!0;H++}return s.attributesNum!==H||s.index!==z}function g(M,L,N,z){const B={},q=L.attributes;let H=0;const Y=N.getAttributes();for(const G in Y)if(Y[G].location>=0){let D=q[G];D===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(D=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(D=M.instanceColor));const he={};he.attribute=D,D&&D.data&&(he.data=D.data),B[G]=he,H++}s.attributes=B,s.attributesNum=H,s.index=z}function _(){const M=s.newAttributes;for(let L=0,N=M.length;L<N;L++)M[L]=0}function m(M){p(M,0)}function p(M,L){const N=s.newAttributes,z=s.enabledAttributes,B=s.attributeDivisors;N[M]=1,z[M]===0&&(i.enableVertexAttribArray(M),z[M]=1),B[M]!==L&&(i.vertexAttribDivisor(M,L),B[M]=L)}function y(){const M=s.newAttributes,L=s.enabledAttributes;for(let N=0,z=L.length;N<z;N++)L[N]!==M[N]&&(i.disableVertexAttribArray(N),L[N]=0)}function x(M,L,N,z,B,q,H){H===!0?i.vertexAttribIPointer(M,L,N,B,q):i.vertexAttribPointer(M,L,N,z,B,q)}function v(M,L,N,z){_();const B=z.attributes,q=N.getAttributes(),H=L.defaultAttributeValues;for(const Y in q){const G=q[Y];if(G.location>=0){let ae=B[Y];if(ae===void 0&&(Y==="instanceMatrix"&&M.instanceMatrix&&(ae=M.instanceMatrix),Y==="instanceColor"&&M.instanceColor&&(ae=M.instanceColor)),ae!==void 0){const D=ae.normalized,he=ae.itemSize,Fe=e.get(ae);if(Fe===void 0)continue;const tt=Fe.buffer,Z=Fe.type,re=Fe.bytesPerElement,be=Z===i.INT||Z===i.UNSIGNED_INT||ae.gpuType===wf;if(ae.isInterleavedBufferAttribute){const oe=ae.data,Le=oe.stride,Ue=ae.offset;if(oe.isInstancedInterleavedBuffer){for(let ze=0;ze<G.locationSize;ze++)p(G.location+ze,oe.meshPerAttribute);M.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let ze=0;ze<G.locationSize;ze++)m(G.location+ze);i.bindBuffer(i.ARRAY_BUFFER,tt);for(let ze=0;ze<G.locationSize;ze++)x(G.location+ze,he/G.locationSize,Z,D,Le*re,(Ue+he/G.locationSize*ze)*re,be)}else{if(ae.isInstancedBufferAttribute){for(let oe=0;oe<G.locationSize;oe++)p(G.location+oe,ae.meshPerAttribute);M.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let oe=0;oe<G.locationSize;oe++)m(G.location+oe);i.bindBuffer(i.ARRAY_BUFFER,tt);for(let oe=0;oe<G.locationSize;oe++)x(G.location+oe,he/G.locationSize,Z,D,he*re,he/G.locationSize*oe*re,be)}}else if(H!==void 0){const D=H[Y];if(D!==void 0)switch(D.length){case 2:i.vertexAttrib2fv(G.location,D);break;case 3:i.vertexAttrib3fv(G.location,D);break;case 4:i.vertexAttrib4fv(G.location,D);break;default:i.vertexAttrib1fv(G.location,D)}}}}y()}function A(){C();for(const M in n){const L=n[M];for(const N in L){const z=L[N];for(const B in z)u(z[B].object),delete z[B];delete L[N]}delete n[M]}}function w(M){if(n[M.id]===void 0)return;const L=n[M.id];for(const N in L){const z=L[N];for(const B in z)u(z[B].object),delete z[B];delete L[N]}delete n[M.id]}function E(M){for(const L in n){const N=n[L];if(N[M.id]===void 0)continue;const z=N[M.id];for(const B in z)u(z[B].object),delete z[B];delete N[M.id]}}function C(){S(),a=!0,s!==r&&(s=r,c(s.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:C,resetDefaultState:S,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function HS(i,e,t){let n;function r(c){n=c}function s(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function a(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let f=0;for(let g=0;g<h;g++)f+=u[g];t.update(f,n,1)}function l(c,u,h,d){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],u[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*d[_];t.update(g,n,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function VS(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(E){return!(E!==Ci&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){const C=E===Go&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==fr&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==ar&&!C)}function l(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:x,maxFragmentUniforms:v,vertexTextures:A,maxSamples:w}}function GS(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new ns,o=new st,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||r;return r=d,n=h.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const y=s?0:n,x=y*4;let v=p.clippingState||null;l.value=v,v=u(g,d,x,f);for(let A=0;A!==x;++A)v[A]=t[A];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=f+_*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,v=f;x!==_;++x,v+=4)a.copy(h[x]).applyMatrix4(y,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function WS(i){let e=new WeakMap;function t(a,o){return o===dh?a.mapping=Ea:o===ph&&(a.mapping=wa),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===dh||o===ph)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new ty(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class J0 extends $0{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const sa=4,lp=[.125,.215,.35,.446,.526,.582],as=20,_u=new J0,cp=new nt;let vu=null,xu=0,yu=0,Mu=!1;const is=(1+Math.sqrt(5))/2,Ks=1/is,up=[new I(-is,Ks,0),new I(is,Ks,0),new I(-Ks,0,is),new I(Ks,0,is),new I(0,is,-Ks),new I(0,is,Ks),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class Gh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){vu=this._renderer.getRenderTarget(),xu=this._renderer.getActiveCubeFace(),yu=this._renderer.getActiveMipmapLevel(),Mu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(vu,xu,yu),this._renderer.xr.enabled=Mu,e.scissorTest=!1,Tl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ea||e.mapping===wa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),vu=this._renderer.getRenderTarget(),xu=this._renderer.getActiveCubeFace(),yu=this._renderer.getActiveMipmapLevel(),Mu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:zi,minFilter:zi,generateMipmaps:!1,type:Go,format:Ci,colorSpace:Da,depthBuffer:!1},r=hp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hp(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=XS(s)),this._blurMaterial=YS(s,e,t)}return r}_compileMaterial(e){const t=new Ft(this._lodPlanes[0],e);this._renderer.compile(t,_u)}_sceneToCubeUV(e,t,n,r){const o=new Nn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(cp),u.toneMapping=Fr,u.autoClear=!1;const f=new Ds({name:"PMREM.Background",side:zn,depthWrite:!1,depthTest:!1}),g=new Ft(new pr,f);let _=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,_=!0):(f.color.copy(cp),_=!0);for(let p=0;p<6;p++){const y=p%3;y===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):y===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const x=this._cubeSize;Tl(r,y*x,p>2?x:0,x,x),u.setRenderTarget(r),_&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Ea||e.mapping===wa;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=dp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fp());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Ft(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Tl(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,_u)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=up[(r-s-1)%up.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Ft(this._lodPlanes[r],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*as-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):as;m>as&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${as}`);const p=[];let y=0;for(let E=0;E<as;++E){const C=E/_,S=Math.exp(-C*C/2);p.push(S),E===0?y+=S:E<m&&(y+=2*S)}for(let E=0;E<p.length;E++)p[E]=p[E]/y;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;const v=this._sizeLods[r],A=3*v*(r>x-sa?r-x+sa:0),w=4*(this._cubeSize-v);Tl(t,A,w,3*v,2*v),l.setRenderTarget(t),l.render(h,_u)}}function XS(i){const e=[],t=[],n=[];let r=i;const s=i-sa+1+lp.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>i-sa?l=lp[a-i+sa-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,_=3,m=2,p=1,y=new Float32Array(_*g*f),x=new Float32Array(m*g*f),v=new Float32Array(p*g*f);for(let w=0;w<f;w++){const E=w%3*2/3-1,C=w>2?0:-1,S=[E,C,0,E+2/3,C,0,E+2/3,C+1,0,E,C,0,E+2/3,C+1,0,E,C+1,0];y.set(S,_*g*w),x.set(d,m*g*w);const M=[w,w,w,w,w,w];v.set(M,p*g*w)}const A=new _n;A.setAttribute("position",new Hn(y,_)),A.setAttribute("uv",new Hn(x,m)),A.setAttribute("faceIndex",new Hn(v,p)),e.push(A),r>sa&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function hp(i,e,t){const n=new ws(i,e,t);return n.texture.mapping=xc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Tl(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function YS(i,e,t){const n=new Float32Array(as),r=new I(0,1,0);return new Wi({name:"SphericalGaussianBlur",defines:{n:as,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:If(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Or,depthTest:!1,depthWrite:!1})}function fp(){return new Wi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:If(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Or,depthTest:!1,depthWrite:!1})}function dp(){return new Wi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:If(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Or,depthTest:!1,depthWrite:!1})}function If(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function qS(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===dh||l===ph,u=l===Ea||l===wa;if(c||u){let h=e.get(o);const d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Gh(i)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const f=o.image;return c&&f&&f.height>0||u&&f&&r(f)?(t===null&&(t=new Gh(i)),h=c?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function $S(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&ro("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function ZS(i,e,t,n){const r={},s=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}d.removeEventListener("dispose",a),delete r[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const g in d)e.update(d[g],i.ARRAY_BUFFER);const f=h.morphAttributes;for(const g in f){const _=f[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],i.ARRAY_BUFFER)}}function c(h){const d=[],f=h.index,g=h.attributes.position;let _=0;if(f!==null){const y=f.array;_=f.version;for(let x=0,v=y.length;x<v;x+=3){const A=y[x+0],w=y[x+1],E=y[x+2];d.push(A,w,w,E,E,A)}}else if(g!==void 0){const y=g.array;_=g.version;for(let x=0,v=y.length/3-1;x<v;x+=3){const A=x+0,w=x+1,E=x+2;d.push(A,w,w,E,E,A)}}else return;const m=new(z0(d)?Y0:X0)(d,1);m.version=_;const p=s.get(h);p&&e.remove(p),s.set(h,m)}function u(h){const d=s.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function KS(i,e,t){let n;function r(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,f){i.drawElements(n,f,s,d*a),t.update(f,n,1)}function c(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,s,d*a,g),t.update(f,n,g))}function u(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function h(d,f,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,s,d,0,_,0,g);let p=0;for(let y=0;y<g;y++)p+=f[y]*_[y];t.update(p,n,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function JS(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function jS(i,e,t){const n=new WeakMap,r=new wt;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(o);if(d===void 0||d.count!==h){let M=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",M)};var f=M;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let A=o.attributes.position.count*v,w=1;A>e.maxTextureSize&&(w=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const E=new Float32Array(A*w*4*h),C=new H0(E,A,w,h);C.type=ar,C.needsUpdate=!0;const S=v*4;for(let L=0;L<h;L++){const N=p[L],z=y[L],B=x[L],q=A*w*4*L;for(let H=0;H<N.count;H++){const Y=H*S;g===!0&&(r.fromBufferAttribute(N,H),E[q+Y+0]=r.x,E[q+Y+1]=r.y,E[q+Y+2]=r.z,E[q+Y+3]=0),_===!0&&(r.fromBufferAttribute(z,H),E[q+Y+4]=r.x,E[q+Y+5]=r.y,E[q+Y+6]=r.z,E[q+Y+7]=0),m===!0&&(r.fromBufferAttribute(B,H),E[q+Y+8]=r.x,E[q+Y+9]=r.y,E[q+Y+10]=r.z,E[q+Y+11]=B.itemSize===4?r.w:1)}}d={count:h,texture:C,size:new me(A,w)},n.set(o,d),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:s}}function QS(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return h}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}class j0 extends Bn{constructor(e,t,n,r,s,a,o,l,c,u=pa){if(u!==pa&&u!==Aa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===pa&&(n=Es),n===void 0&&u===Aa&&(n=Ta),super(null,r,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Pi,this.minFilter=l!==void 0?l:Pi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Q0=new Bn,pp=new j0(1,1),eg=new H0,tg=new zx,ng=new Z0,mp=[],gp=[],_p=new Float32Array(16),vp=new Float32Array(9),xp=new Float32Array(4);function Oa(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=mp[r];if(s===void 0&&(s=new Float32Array(r),mp[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function on(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function ln(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Sc(i,e){let t=gp[e];t===void 0&&(t=new Int32Array(e),gp[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function e1(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function t1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;i.uniform2fv(this.addr,e),ln(t,e)}}function n1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(on(t,e))return;i.uniform3fv(this.addr,e),ln(t,e)}}function i1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;i.uniform4fv(this.addr,e),ln(t,e)}}function r1(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(on(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),ln(t,e)}else{if(on(t,n))return;xp.set(n),i.uniformMatrix2fv(this.addr,!1,xp),ln(t,n)}}function s1(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(on(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),ln(t,e)}else{if(on(t,n))return;vp.set(n),i.uniformMatrix3fv(this.addr,!1,vp),ln(t,n)}}function a1(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(on(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),ln(t,e)}else{if(on(t,n))return;_p.set(n),i.uniformMatrix4fv(this.addr,!1,_p),ln(t,n)}}function o1(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function l1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;i.uniform2iv(this.addr,e),ln(t,e)}}function c1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;i.uniform3iv(this.addr,e),ln(t,e)}}function u1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;i.uniform4iv(this.addr,e),ln(t,e)}}function h1(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function f1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;i.uniform2uiv(this.addr,e),ln(t,e)}}function d1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;i.uniform3uiv(this.addr,e),ln(t,e)}}function p1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;i.uniform4uiv(this.addr,e),ln(t,e)}}function m1(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(pp.compareFunction=k0,s=pp):s=Q0,t.setTexture2D(e||s,r)}function g1(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||tg,r)}function _1(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||ng,r)}function v1(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||eg,r)}function x1(i){switch(i){case 5126:return e1;case 35664:return t1;case 35665:return n1;case 35666:return i1;case 35674:return r1;case 35675:return s1;case 35676:return a1;case 5124:case 35670:return o1;case 35667:case 35671:return l1;case 35668:case 35672:return c1;case 35669:case 35673:return u1;case 5125:return h1;case 36294:return f1;case 36295:return d1;case 36296:return p1;case 35678:case 36198:case 36298:case 36306:case 35682:return m1;case 35679:case 36299:case 36307:return g1;case 35680:case 36300:case 36308:case 36293:return _1;case 36289:case 36303:case 36311:case 36292:return v1}}function y1(i,e){i.uniform1fv(this.addr,e)}function M1(i,e){const t=Oa(e,this.size,2);i.uniform2fv(this.addr,t)}function S1(i,e){const t=Oa(e,this.size,3);i.uniform3fv(this.addr,t)}function b1(i,e){const t=Oa(e,this.size,4);i.uniform4fv(this.addr,t)}function E1(i,e){const t=Oa(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function w1(i,e){const t=Oa(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function T1(i,e){const t=Oa(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function A1(i,e){i.uniform1iv(this.addr,e)}function C1(i,e){i.uniform2iv(this.addr,e)}function R1(i,e){i.uniform3iv(this.addr,e)}function P1(i,e){i.uniform4iv(this.addr,e)}function L1(i,e){i.uniform1uiv(this.addr,e)}function D1(i,e){i.uniform2uiv(this.addr,e)}function I1(i,e){i.uniform3uiv(this.addr,e)}function U1(i,e){i.uniform4uiv(this.addr,e)}function N1(i,e,t){const n=this.cache,r=e.length,s=Sc(t,r);on(n,s)||(i.uniform1iv(this.addr,s),ln(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Q0,s[a])}function O1(i,e,t){const n=this.cache,r=e.length,s=Sc(t,r);on(n,s)||(i.uniform1iv(this.addr,s),ln(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||tg,s[a])}function F1(i,e,t){const n=this.cache,r=e.length,s=Sc(t,r);on(n,s)||(i.uniform1iv(this.addr,s),ln(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||ng,s[a])}function k1(i,e,t){const n=this.cache,r=e.length,s=Sc(t,r);on(n,s)||(i.uniform1iv(this.addr,s),ln(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||eg,s[a])}function z1(i){switch(i){case 5126:return y1;case 35664:return M1;case 35665:return S1;case 35666:return b1;case 35674:return E1;case 35675:return w1;case 35676:return T1;case 5124:case 35670:return A1;case 35667:case 35671:return C1;case 35668:case 35672:return R1;case 35669:case 35673:return P1;case 5125:return L1;case 36294:return D1;case 36295:return I1;case 36296:return U1;case 35678:case 36198:case 36298:case 36306:case 35682:return N1;case 35679:case 36299:case 36307:return O1;case 35680:case 36300:case 36308:case 36293:return F1;case 36289:case 36303:case 36311:case 36292:return k1}}class B1{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=x1(t.type)}}class H1{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=z1(t.type)}}class V1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const Su=/(\w+)(\])?(\[|\.)?/g;function yp(i,e){i.seq.push(e),i.map[e.id]=e}function G1(i,e,t){const n=i.name,r=n.length;for(Su.lastIndex=0;;){const s=Su.exec(n),a=Su.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){yp(t,c===void 0?new B1(o,i,e):new H1(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new V1(o),yp(t,h)),t=h}}}class Zl{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);G1(s,a,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function Mp(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const W1=37297;let X1=0;function Y1(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Sp=new st;function q1(i){mt._getMatrix(Sp,mt.workingColorSpace,i);const e=`mat3( ${Sp.elements.map(t=>t.toFixed(4))} )`;switch(mt.getTransfer(i)){case yc:return[e,"LinearTransferOETF"];case Et:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function bp(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Y1(i.getShaderSource(e),a)}else return r}function $1(i,e){const t=q1(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Z1(i,e){let t;switch(e){case jv:t="Linear";break;case Qv:t="Reinhard";break;case ex:t="Cineon";break;case w0:t="ACESFilmic";break;case nx:t="AgX";break;case ix:t="Neutral";break;case tx:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Al=new I;function K1(){mt.getLuminanceCoefficients(Al);const i=Al.x.toFixed(4),e=Al.y.toFixed(4),t=Al.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function J1(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(so).join(`
`)}function j1(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Q1(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function so(i){return i!==""}function Ep(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function wp(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const eb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wh(i){return i.replace(eb,nb)}const tb=new Map;function nb(i,e){let t=at[e];if(t===void 0){const n=tb.get(e);if(n!==void 0)t=at[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Wh(t)}const ib=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Tp(i){return i.replace(ib,rb)}function rb(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Ap(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function sb(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===S0?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===b0?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===tr&&(e="SHADOWMAP_TYPE_VSM"),e}function ab(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ea:case wa:e="ENVMAP_TYPE_CUBE";break;case xc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ob(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case wa:e="ENVMAP_MODE_REFRACTION";break}return e}function lb(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case E0:e="ENVMAP_BLENDING_MULTIPLY";break;case Kv:e="ENVMAP_BLENDING_MIX";break;case Jv:e="ENVMAP_BLENDING_ADD";break}return e}function cb(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function ub(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=sb(t),c=ab(t),u=ob(t),h=lb(t),d=cb(t),f=J1(t),g=j1(s),_=r.createProgram();let m,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(so).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(so).join(`
`),p.length>0&&(p+=`
`)):(m=[Ap(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(so).join(`
`),p=[Ap(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Fr?"#define TONE_MAPPING":"",t.toneMapping!==Fr?at.tonemapping_pars_fragment:"",t.toneMapping!==Fr?Z1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",at.colorspace_pars_fragment,$1("linearToOutputTexel",t.outputColorSpace),K1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(so).join(`
`)),a=Wh(a),a=Ep(a,t),a=wp(a,t),o=Wh(o),o=Ep(o,t),o=wp(o,t),a=Tp(a),o=Tp(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Bd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Bd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=y+m+a,v=y+p+o,A=Mp(r,r.VERTEX_SHADER,x),w=Mp(r,r.FRAGMENT_SHADER,v);r.attachShader(_,A),r.attachShader(_,w),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function E(L){if(i.debug.checkShaderErrors){const N=r.getProgramInfoLog(_).trim(),z=r.getShaderInfoLog(A).trim(),B=r.getShaderInfoLog(w).trim();let q=!0,H=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,A,w);else{const Y=bp(r,A,"vertex"),G=bp(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+N+`
`+Y+`
`+G)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(z===""||B==="")&&(H=!1);H&&(L.diagnostics={runnable:q,programLog:N,vertexShader:{log:z,prefix:m},fragmentShader:{log:B,prefix:p}})}r.deleteShader(A),r.deleteShader(w),C=new Zl(r,_),S=Q1(r,_)}let C;this.getUniforms=function(){return C===void 0&&E(this),C};let S;this.getAttributes=function(){return S===void 0&&E(this),S};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(_,W1)),M},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=X1++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=w,this}let hb=0;class fb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new db(e),t.set(e,n)),n}}class db{constructor(e){this.id=hb++,this.code=e,this.usedTimes=0}}function pb(i,e,t,n,r,s,a){const o=new G0,l=new fb,c=new Set,u=[],h=r.logarithmicDepthBuffer,d=r.vertexTextures;let f=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,M,L,N,z){const B=N.fog,q=z.geometry,H=S.isMeshStandardMaterial?N.environment:null,Y=(S.isMeshStandardMaterial?t:e).get(S.envMap||H),G=Y&&Y.mapping===xc?Y.image.height:null,ae=g[S.type];S.precision!==null&&(f=r.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const D=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,he=D!==void 0?D.length:0;let Fe=0;q.morphAttributes.position!==void 0&&(Fe=1),q.morphAttributes.normal!==void 0&&(Fe=2),q.morphAttributes.color!==void 0&&(Fe=3);let tt,Z,re,be;if(ae){const Ce=Ni[ae];tt=Ce.vertexShader,Z=Ce.fragmentShader}else tt=S.vertexShader,Z=S.fragmentShader,l.update(S),re=l.getVertexShaderID(S),be=l.getFragmentShaderID(S);const oe=i.getRenderTarget(),Le=i.state.buffers.depth.getReversed(),Ue=z.isInstancedMesh===!0,ze=z.isBatchedMesh===!0,Xe=!!S.map,ne=!!S.matcap,ee=!!Y,P=!!S.aoMap,Ae=!!S.lightMap,ie=!!S.bumpMap,F=!!S.normalMap,ce=!!S.displacementMap,ke=!!S.emissiveMap,we=!!S.metalnessMap,R=!!S.roughnessMap,b=S.anisotropy>0,V=S.clearcoat>0,j=S.dispersion>0,Q=S.iridescence>0,J=S.sheen>0,ge=S.transmission>0,de=b&&!!S.anisotropyMap,ye=V&&!!S.clearcoatMap,Ke=V&&!!S.clearcoatNormalMap,le=V&&!!S.clearcoatRoughnessMap,pe=Q&&!!S.iridescenceMap,Ge=Q&&!!S.iridescenceThicknessMap,Ve=J&&!!S.sheenColorMap,Re=J&&!!S.sheenRoughnessMap,it=!!S.specularMap,Ye=!!S.specularColorMap,pt=!!S.specularIntensityMap,U=ge&&!!S.transmissionMap,ve=ge&&!!S.thicknessMap,$=!!S.gradientMap,te=!!S.alphaMap,_e=S.alphaTest>0,Me=!!S.alphaHash,qe=!!S.extensions;let gt=Fr;S.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(gt=i.toneMapping);const Wt={shaderID:ae,shaderType:S.type,shaderName:S.name,vertexShader:tt,fragmentShader:Z,defines:S.defines,customVertexShaderID:re,customFragmentShaderID:be,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:ze,batchingColor:ze&&z._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&z.instanceColor!==null,instancingMorph:Ue&&z.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:oe===null?i.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:Da,alphaToCoverage:!!S.alphaToCoverage,map:Xe,matcap:ne,envMap:ee,envMapMode:ee&&Y.mapping,envMapCubeUVHeight:G,aoMap:P,lightMap:Ae,bumpMap:ie,normalMap:F,displacementMap:d&&ce,emissiveMap:ke,normalMapObjectSpace:F&&S.normalMapType===ox,normalMapTangentSpace:F&&S.normalMapType===F0,metalnessMap:we,roughnessMap:R,anisotropy:b,anisotropyMap:de,clearcoat:V,clearcoatMap:ye,clearcoatNormalMap:Ke,clearcoatRoughnessMap:le,dispersion:j,iridescence:Q,iridescenceMap:pe,iridescenceThicknessMap:Ge,sheen:J,sheenColorMap:Ve,sheenRoughnessMap:Re,specularMap:it,specularColorMap:Ye,specularIntensityMap:pt,transmission:ge,transmissionMap:U,thicknessMap:ve,gradientMap:$,opaque:S.transparent===!1&&S.blending===da&&S.alphaToCoverage===!1,alphaMap:te,alphaTest:_e,alphaHash:Me,combine:S.combine,mapUv:Xe&&_(S.map.channel),aoMapUv:P&&_(S.aoMap.channel),lightMapUv:Ae&&_(S.lightMap.channel),bumpMapUv:ie&&_(S.bumpMap.channel),normalMapUv:F&&_(S.normalMap.channel),displacementMapUv:ce&&_(S.displacementMap.channel),emissiveMapUv:ke&&_(S.emissiveMap.channel),metalnessMapUv:we&&_(S.metalnessMap.channel),roughnessMapUv:R&&_(S.roughnessMap.channel),anisotropyMapUv:de&&_(S.anisotropyMap.channel),clearcoatMapUv:ye&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:Ke&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:le&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ge&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ve&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Re&&_(S.sheenRoughnessMap.channel),specularMapUv:it&&_(S.specularMap.channel),specularColorMapUv:Ye&&_(S.specularColorMap.channel),specularIntensityMapUv:pt&&_(S.specularIntensityMap.channel),transmissionMapUv:U&&_(S.transmissionMap.channel),thicknessMapUv:ve&&_(S.thicknessMap.channel),alphaMapUv:te&&_(S.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(F||b),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!q.attributes.uv&&(Xe||te),fog:!!B,useFog:S.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Le,skinning:z.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:he,morphTextureStride:Fe,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:gt,decodeVideoTexture:Xe&&S.map.isVideoTexture===!0&&mt.getTransfer(S.map.colorSpace)===Et,decodeVideoTextureEmissive:ke&&S.emissiveMap.isVideoTexture===!0&&mt.getTransfer(S.emissiveMap.colorSpace)===Et,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===dn,flipSided:S.side===zn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:qe&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qe&&S.extensions.multiDraw===!0||ze)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Wt.vertexUv1s=c.has(1),Wt.vertexUv2s=c.has(2),Wt.vertexUv3s=c.has(3),c.clear(),Wt}function p(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const L in S.defines)M.push(L),M.push(S.defines[L]);return S.isRawShaderMaterial===!1&&(y(M,S),x(M,S),M.push(i.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function y(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function x(S,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),S.push(o.mask)}function v(S){const M=g[S.type];let L;if(M){const N=Ni[M];L=Jx.clone(N.uniforms)}else L=S.uniforms;return L}function A(S,M){let L;for(let N=0,z=u.length;N<z;N++){const B=u[N];if(B.cacheKey===M){L=B,++L.usedTimes;break}}return L===void 0&&(L=new ub(i,M,S,s),u.push(L)),L}function w(S){if(--S.usedTimes===0){const M=u.indexOf(S);u[M]=u[u.length-1],u.pop(),S.destroy()}}function E(S){l.remove(S)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:A,releaseProgram:w,releaseShaderCache:E,programs:u,dispose:C}}function mb(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,l){i.get(a)[o]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function gb(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Cp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Rp(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(h,d,f,g,_,m){let p=i[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},i[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),e++,p}function o(h,d,f,g,_,m){const p=a(h,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?r.push(p):t.push(p)}function l(h,d,f,g,_,m){const p=a(h,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?r.unshift(p):t.unshift(p)}function c(h,d){t.length>1&&t.sort(h||gb),n.length>1&&n.sort(d||Cp),r.length>1&&r.sort(d||Cp)}function u(){for(let h=e,d=i.length;h<d;h++){const f=i[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function _b(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new Rp,i.set(n,[a])):r>=s.length?(a=new Rp,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function vb(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new nt};break;case"SpotLight":t={position:new I,direction:new I,color:new nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new nt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new nt,groundColor:new nt};break;case"RectAreaLight":t={color:new nt,position:new I,halfWidth:new I,halfHeight:new I};break}return i[e.id]=t,t}}}function xb(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let yb=0;function Mb(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Sb(i){const e=new vb,t=xb(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);const r=new I,s=new Ot,a=new Ot;function o(c){let u=0,h=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,y=0,x=0,v=0,A=0,w=0,E=0;c.sort(Mb);for(let S=0,M=c.length;S<M;S++){const L=c[S],N=L.color,z=L.intensity,B=L.distance,q=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=N.r*z,h+=N.g*z,d+=N.b*z;else if(L.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(L.sh.coefficients[H],z);E++}else if(L.isDirectionalLight){const H=e.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const Y=L.shadow,G=t.get(L);G.shadowIntensity=Y.intensity,G.shadowBias=Y.bias,G.shadowNormalBias=Y.normalBias,G.shadowRadius=Y.radius,G.shadowMapSize=Y.mapSize,n.directionalShadow[f]=G,n.directionalShadowMap[f]=q,n.directionalShadowMatrix[f]=L.shadow.matrix,y++}n.directional[f]=H,f++}else if(L.isSpotLight){const H=e.get(L);H.position.setFromMatrixPosition(L.matrixWorld),H.color.copy(N).multiplyScalar(z),H.distance=B,H.coneCos=Math.cos(L.angle),H.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),H.decay=L.decay,n.spot[_]=H;const Y=L.shadow;if(L.map&&(n.spotLightMap[A]=L.map,A++,Y.updateMatrices(L),L.castShadow&&w++),n.spotLightMatrix[_]=Y.matrix,L.castShadow){const G=t.get(L);G.shadowIntensity=Y.intensity,G.shadowBias=Y.bias,G.shadowNormalBias=Y.normalBias,G.shadowRadius=Y.radius,G.shadowMapSize=Y.mapSize,n.spotShadow[_]=G,n.spotShadowMap[_]=q,v++}_++}else if(L.isRectAreaLight){const H=e.get(L);H.color.copy(N).multiplyScalar(z),H.halfWidth.set(L.width*.5,0,0),H.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=H,m++}else if(L.isPointLight){const H=e.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity),H.distance=L.distance,H.decay=L.decay,L.castShadow){const Y=L.shadow,G=t.get(L);G.shadowIntensity=Y.intensity,G.shadowBias=Y.bias,G.shadowNormalBias=Y.normalBias,G.shadowRadius=Y.radius,G.shadowMapSize=Y.mapSize,G.shadowCameraNear=Y.camera.near,G.shadowCameraFar=Y.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=q,n.pointShadowMatrix[g]=L.shadow.matrix,x++}n.point[g]=H,g++}else if(L.isHemisphereLight){const H=e.get(L);H.skyColor.copy(L.color).multiplyScalar(z),H.groundColor.copy(L.groundColor).multiplyScalar(z),n.hemi[p]=H,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Te.LTC_FLOAT_1,n.rectAreaLTC2=Te.LTC_FLOAT_2):(n.rectAreaLTC1=Te.LTC_HALF_1,n.rectAreaLTC2=Te.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const C=n.hash;(C.directionalLength!==f||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==y||C.numPointShadows!==x||C.numSpotShadows!==v||C.numSpotMaps!==A||C.numLightProbes!==E)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=v+A-w,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=E,C.directionalLength=f,C.pointLength=g,C.spotLength=_,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=y,C.numPointShadows=x,C.numSpotShadows=v,C.numSpotMaps=A,C.numLightProbes=E,n.version=yb++)}function l(c,u){let h=0,d=0,f=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){const x=c[p];if(x.isDirectionalLight){const v=n.directional[h];v.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),h++}else if(x.isSpotLight){const v=n.spot[f];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),f++}else if(x.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),a.identity(),s.copy(x.matrixWorld),s.premultiply(m),a.extractRotation(s),v.halfWidth.set(x.width*.5,0,0),v.halfHeight.set(0,x.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(x.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),d++}else if(x.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(x.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:n}}function Pp(i){const e=new Sb(i),t=[],n=[];function r(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function bb(i){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Pp(i),e.set(r,[o])):s>=a.length?(o=new Pp(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class Eb extends Ua{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=sx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class wb extends Ua{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Tb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ab=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Cb(i,e,t){let n=new Df;const r=new me,s=new me,a=new wt,o=new Eb({depthPacking:ax}),l=new wb,c={},u=t.maxTextureSize,h={[Vr]:zn,[zn]:Vr,[dn]:dn},d=new Wi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new me},radius:{value:4}},vertexShader:Tb,fragmentShader:Ab}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new _n;g.setAttribute("position",new Hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ft(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=S0;let p=this.type;this.render=function(w,E,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const S=i.getRenderTarget(),M=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),N=i.state;N.setBlending(Or),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const z=p!==tr&&this.type===tr,B=p===tr&&this.type!==tr;for(let q=0,H=w.length;q<H;q++){const Y=w[q],G=Y.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const ae=G.getFrameExtents();if(r.multiply(ae),s.copy(G.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ae.x),r.x=s.x*ae.x,G.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ae.y),r.y=s.y*ae.y,G.mapSize.y=s.y)),G.map===null||z===!0||B===!0){const he=this.type!==tr?{minFilter:Pi,magFilter:Pi}:{};G.map!==null&&G.map.dispose(),G.map=new ws(r.x,r.y,he),G.map.texture.name=Y.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();const D=G.getViewportCount();for(let he=0;he<D;he++){const Fe=G.getViewport(he);a.set(s.x*Fe.x,s.y*Fe.y,s.x*Fe.z,s.y*Fe.w),N.viewport(a),G.updateMatrices(Y,he),n=G.getFrustum(),v(E,C,G.camera,Y,this.type)}G.isPointLightShadow!==!0&&this.type===tr&&y(G,C),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(S,M,L)};function y(w,E){const C=e.update(_);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new ws(r.x,r.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(E,null,C,d,_,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(E,null,C,f,_,null)}function x(w,E,C,S){let M=null;const L=C.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(L!==void 0)M=L;else if(M=C.isPointLight===!0?l:o,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const N=M.uuid,z=E.uuid;let B=c[N];B===void 0&&(B={},c[N]=B);let q=B[z];q===void 0&&(q=M.clone(),B[z]=q,E.addEventListener("dispose",A)),M=q}if(M.visible=E.visible,M.wireframe=E.wireframe,S===tr?M.side=E.shadowSide!==null?E.shadowSide:E.side:M.side=E.shadowSide!==null?E.shadowSide:h[E.side],M.alphaMap=E.alphaMap,M.alphaTest=E.alphaTest,M.map=E.map,M.clipShadows=E.clipShadows,M.clippingPlanes=E.clippingPlanes,M.clipIntersection=E.clipIntersection,M.displacementMap=E.displacementMap,M.displacementScale=E.displacementScale,M.displacementBias=E.displacementBias,M.wireframeLinewidth=E.wireframeLinewidth,M.linewidth=E.linewidth,C.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const N=i.properties.get(M);N.light=C}return M}function v(w,E,C,S,M){if(w.visible===!1)return;if(w.layers.test(E.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===tr)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,w.matrixWorld);const z=e.update(w),B=w.material;if(Array.isArray(B)){const q=z.groups;for(let H=0,Y=q.length;H<Y;H++){const G=q[H],ae=B[G.materialIndex];if(ae&&ae.visible){const D=x(w,ae,S,M);w.onBeforeShadow(i,w,E,C,z,D,G),i.renderBufferDirect(C,null,z,D,w,G),w.onAfterShadow(i,w,E,C,z,D,G)}}}else if(B.visible){const q=x(w,B,S,M);w.onBeforeShadow(i,w,E,C,z,q,null),i.renderBufferDirect(C,null,z,q,w,null),w.onAfterShadow(i,w,E,C,z,q,null)}}const N=w.children;for(let z=0,B=N.length;z<B;z++)v(N[z],E,C,S,M)}function A(w){w.target.removeEventListener("dispose",A);for(const C in c){const S=c[C],M=w.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const Rb={[ah]:oh,[lh]:hh,[ch]:fh,[ba]:uh,[oh]:ah,[hh]:lh,[fh]:ch,[uh]:ba};function Pb(i,e){function t(){let U=!1;const ve=new wt;let $=null;const te=new wt(0,0,0,0);return{setMask:function(_e){$!==_e&&!U&&(i.colorMask(_e,_e,_e,_e),$=_e)},setLocked:function(_e){U=_e},setClear:function(_e,Me,qe,gt,Wt){Wt===!0&&(_e*=gt,Me*=gt,qe*=gt),ve.set(_e,Me,qe,gt),te.equals(ve)===!1&&(i.clearColor(_e,Me,qe,gt),te.copy(ve))},reset:function(){U=!1,$=null,te.set(-1,0,0,0)}}}function n(){let U=!1,ve=!1,$=null,te=null,_e=null;return{setReversed:function(Me){if(ve!==Me){const qe=e.get("EXT_clip_control");ve?qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.ZERO_TO_ONE_EXT):qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.NEGATIVE_ONE_TO_ONE_EXT);const gt=_e;_e=null,this.setClear(gt)}ve=Me},getReversed:function(){return ve},setTest:function(Me){Me?oe(i.DEPTH_TEST):Le(i.DEPTH_TEST)},setMask:function(Me){$!==Me&&!U&&(i.depthMask(Me),$=Me)},setFunc:function(Me){if(ve&&(Me=Rb[Me]),te!==Me){switch(Me){case ah:i.depthFunc(i.NEVER);break;case oh:i.depthFunc(i.ALWAYS);break;case lh:i.depthFunc(i.LESS);break;case ba:i.depthFunc(i.LEQUAL);break;case ch:i.depthFunc(i.EQUAL);break;case uh:i.depthFunc(i.GEQUAL);break;case hh:i.depthFunc(i.GREATER);break;case fh:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}te=Me}},setLocked:function(Me){U=Me},setClear:function(Me){_e!==Me&&(ve&&(Me=1-Me),i.clearDepth(Me),_e=Me)},reset:function(){U=!1,$=null,te=null,_e=null,ve=!1}}}function r(){let U=!1,ve=null,$=null,te=null,_e=null,Me=null,qe=null,gt=null,Wt=null;return{setTest:function(Ce){U||(Ce?oe(i.STENCIL_TEST):Le(i.STENCIL_TEST))},setMask:function(Ce){ve!==Ce&&!U&&(i.stencilMask(Ce),ve=Ce)},setFunc:function(Ce,Ne,rt){($!==Ce||te!==Ne||_e!==rt)&&(i.stencilFunc(Ce,Ne,rt),$=Ce,te=Ne,_e=rt)},setOp:function(Ce,Ne,rt){(Me!==Ce||qe!==Ne||gt!==rt)&&(i.stencilOp(Ce,Ne,rt),Me=Ce,qe=Ne,gt=rt)},setLocked:function(Ce){U=Ce},setClear:function(Ce){Wt!==Ce&&(i.clearStencil(Ce),Wt=Ce)},reset:function(){U=!1,ve=null,$=null,te=null,_e=null,Me=null,qe=null,gt=null,Wt=null}}}const s=new t,a=new n,o=new r,l=new WeakMap,c=new WeakMap;let u={},h={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,y=null,x=null,v=null,A=null,w=null,E=new nt(0,0,0),C=0,S=!1,M=null,L=null,N=null,z=null,B=null;const q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,Y=0;const G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(G)[1]),H=Y>=1):G.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),H=Y>=2);let ae=null,D={};const he=i.getParameter(i.SCISSOR_BOX),Fe=i.getParameter(i.VIEWPORT),tt=new wt().fromArray(he),Z=new wt().fromArray(Fe);function re(U,ve,$,te){const _e=new Uint8Array(4),Me=i.createTexture();i.bindTexture(U,Me),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let qe=0;qe<$;qe++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(ve,0,i.RGBA,1,1,te,0,i.RGBA,i.UNSIGNED_BYTE,_e):i.texImage2D(ve+qe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,_e);return Me}const be={};be[i.TEXTURE_2D]=re(i.TEXTURE_2D,i.TEXTURE_2D,1),be[i.TEXTURE_CUBE_MAP]=re(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),be[i.TEXTURE_2D_ARRAY]=re(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),be[i.TEXTURE_3D]=re(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),oe(i.DEPTH_TEST),a.setFunc(ba),ie(!1),F(Nd),oe(i.CULL_FACE),P(Or);function oe(U){u[U]!==!0&&(i.enable(U),u[U]=!0)}function Le(U){u[U]!==!1&&(i.disable(U),u[U]=!1)}function Ue(U,ve){return h[U]!==ve?(i.bindFramebuffer(U,ve),h[U]=ve,U===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ve),U===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ve),!0):!1}function ze(U,ve){let $=f,te=!1;if(U){$=d.get(ve),$===void 0&&($=[],d.set(ve,$));const _e=U.textures;if($.length!==_e.length||$[0]!==i.COLOR_ATTACHMENT0){for(let Me=0,qe=_e.length;Me<qe;Me++)$[Me]=i.COLOR_ATTACHMENT0+Me;$.length=_e.length,te=!0}}else $[0]!==i.BACK&&($[0]=i.BACK,te=!0);te&&i.drawBuffers($)}function Xe(U){return g!==U?(i.useProgram(U),g=U,!0):!1}const ne={[ss]:i.FUNC_ADD,[Iv]:i.FUNC_SUBTRACT,[Uv]:i.FUNC_REVERSE_SUBTRACT};ne[Nv]=i.MIN,ne[Ov]=i.MAX;const ee={[Fv]:i.ZERO,[kv]:i.ONE,[zv]:i.SRC_COLOR,[rh]:i.SRC_ALPHA,[Xv]:i.SRC_ALPHA_SATURATE,[Gv]:i.DST_COLOR,[Hv]:i.DST_ALPHA,[Bv]:i.ONE_MINUS_SRC_COLOR,[sh]:i.ONE_MINUS_SRC_ALPHA,[Wv]:i.ONE_MINUS_DST_COLOR,[Vv]:i.ONE_MINUS_DST_ALPHA,[Yv]:i.CONSTANT_COLOR,[qv]:i.ONE_MINUS_CONSTANT_COLOR,[$v]:i.CONSTANT_ALPHA,[Zv]:i.ONE_MINUS_CONSTANT_ALPHA};function P(U,ve,$,te,_e,Me,qe,gt,Wt,Ce){if(U===Or){_===!0&&(Le(i.BLEND),_=!1);return}if(_===!1&&(oe(i.BLEND),_=!0),U!==Dv){if(U!==m||Ce!==S){if((p!==ss||v!==ss)&&(i.blendEquation(i.FUNC_ADD),p=ss,v=ss),Ce)switch(U){case da:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ih:i.blendFunc(i.ONE,i.ONE);break;case Od:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Fd:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case da:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ih:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Od:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Fd:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}y=null,x=null,A=null,w=null,E.set(0,0,0),C=0,m=U,S=Ce}return}_e=_e||ve,Me=Me||$,qe=qe||te,(ve!==p||_e!==v)&&(i.blendEquationSeparate(ne[ve],ne[_e]),p=ve,v=_e),($!==y||te!==x||Me!==A||qe!==w)&&(i.blendFuncSeparate(ee[$],ee[te],ee[Me],ee[qe]),y=$,x=te,A=Me,w=qe),(gt.equals(E)===!1||Wt!==C)&&(i.blendColor(gt.r,gt.g,gt.b,Wt),E.copy(gt),C=Wt),m=U,S=!1}function Ae(U,ve){U.side===dn?Le(i.CULL_FACE):oe(i.CULL_FACE);let $=U.side===zn;ve&&($=!$),ie($),U.blending===da&&U.transparent===!1?P(Or):P(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),s.setMask(U.colorWrite);const te=U.stencilWrite;o.setTest(te),te&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),ke(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?oe(i.SAMPLE_ALPHA_TO_COVERAGE):Le(i.SAMPLE_ALPHA_TO_COVERAGE)}function ie(U){M!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),M=U)}function F(U){U!==Pv?(oe(i.CULL_FACE),U!==L&&(U===Nd?i.cullFace(i.BACK):U===Lv?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Le(i.CULL_FACE),L=U}function ce(U){U!==N&&(H&&i.lineWidth(U),N=U)}function ke(U,ve,$){U?(oe(i.POLYGON_OFFSET_FILL),(z!==ve||B!==$)&&(i.polygonOffset(ve,$),z=ve,B=$)):Le(i.POLYGON_OFFSET_FILL)}function we(U){U?oe(i.SCISSOR_TEST):Le(i.SCISSOR_TEST)}function R(U){U===void 0&&(U=i.TEXTURE0+q-1),ae!==U&&(i.activeTexture(U),ae=U)}function b(U,ve,$){$===void 0&&(ae===null?$=i.TEXTURE0+q-1:$=ae);let te=D[$];te===void 0&&(te={type:void 0,texture:void 0},D[$]=te),(te.type!==U||te.texture!==ve)&&(ae!==$&&(i.activeTexture($),ae=$),i.bindTexture(U,ve||be[U]),te.type=U,te.texture=ve)}function V(){const U=D[ae];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function j(){try{i.compressedTexImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Q(){try{i.compressedTexImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function J(){try{i.texSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ge(){try{i.texSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function de(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ye(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ke(){try{i.texStorage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function le(){try{i.texStorage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function pe(){try{i.texImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ge(){try{i.texImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ve(U){tt.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),tt.copy(U))}function Re(U){Z.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),Z.copy(U))}function it(U,ve){let $=c.get(ve);$===void 0&&($=new WeakMap,c.set(ve,$));let te=$.get(U);te===void 0&&(te=i.getUniformBlockIndex(ve,U.name),$.set(U,te))}function Ye(U,ve){const te=c.get(ve).get(U);l.get(ve)!==te&&(i.uniformBlockBinding(ve,te,U.__bindingPointIndex),l.set(ve,te))}function pt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},ae=null,D={},h={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,y=null,x=null,v=null,A=null,w=null,E=new nt(0,0,0),C=0,S=!1,M=null,L=null,N=null,z=null,B=null,tt.set(0,0,i.canvas.width,i.canvas.height),Z.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:oe,disable:Le,bindFramebuffer:Ue,drawBuffers:ze,useProgram:Xe,setBlending:P,setMaterial:Ae,setFlipSided:ie,setCullFace:F,setLineWidth:ce,setPolygonOffset:ke,setScissorTest:we,activeTexture:R,bindTexture:b,unbindTexture:V,compressedTexImage2D:j,compressedTexImage3D:Q,texImage2D:pe,texImage3D:Ge,updateUBOMapping:it,uniformBlockBinding:Ye,texStorage2D:Ke,texStorage3D:le,texSubImage2D:J,texSubImage3D:ge,compressedTexSubImage2D:de,compressedTexSubImage3D:ye,scissor:Ve,viewport:Re,reset:pt}}function Lp(i,e,t,n){const r=Lb(n);switch(t){case P0:return i*e;case D0:return i*e;case I0:return i*e*2;case U0:return i*e/r.components*r.byteLength;case Cf:return i*e/r.components*r.byteLength;case N0:return i*e*2/r.components*r.byteLength;case Rf:return i*e*2/r.components*r.byteLength;case L0:return i*e*3/r.components*r.byteLength;case Ci:return i*e*4/r.components*r.byteLength;case Pf:return i*e*4/r.components*r.byteLength;case Wl:case Xl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Yl:case ql:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case _h:case xh:return Math.max(i,16)*Math.max(e,8)/4;case gh:case vh:return Math.max(i,8)*Math.max(e,8)/2;case yh:case Mh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Sh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case bh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Eh:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case wh:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Th:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ah:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ch:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Rh:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ph:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Lh:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Dh:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ih:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Uh:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Nh:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Oh:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case $l:case Fh:case kh:return Math.ceil(i/4)*Math.ceil(e/4)*16;case O0:case zh:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Bh:case Hh:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Lb(i){switch(i){case fr:case A0:return{byteLength:1,components:1};case Uo:case C0:case Go:return{byteLength:2,components:1};case Tf:case Af:return{byteLength:2,components:4};case Es:case wf:case ar:return{byteLength:4,components:1};case R0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Db(i,e,t,n,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new me,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,b){return f?new OffscreenCanvas(R,b):uc("canvas")}function _(R,b,V){let j=1;const Q=we(R);if((Q.width>V||Q.height>V)&&(j=V/Math.max(Q.width,Q.height)),j<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const J=Math.floor(j*Q.width),ge=Math.floor(j*Q.height);h===void 0&&(h=g(J,ge));const de=b?g(J,ge):h;return de.width=J,de.height=ge,de.getContext("2d").drawImage(R,0,0,J,ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+J+"x"+ge+")."),de}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),R;return R}function m(R){return R.generateMipmaps}function p(R){i.generateMipmap(R)}function y(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(R,b,V,j,Q=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let J=b;if(b===i.RED&&(V===i.FLOAT&&(J=i.R32F),V===i.HALF_FLOAT&&(J=i.R16F),V===i.UNSIGNED_BYTE&&(J=i.R8)),b===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(J=i.R8UI),V===i.UNSIGNED_SHORT&&(J=i.R16UI),V===i.UNSIGNED_INT&&(J=i.R32UI),V===i.BYTE&&(J=i.R8I),V===i.SHORT&&(J=i.R16I),V===i.INT&&(J=i.R32I)),b===i.RG&&(V===i.FLOAT&&(J=i.RG32F),V===i.HALF_FLOAT&&(J=i.RG16F),V===i.UNSIGNED_BYTE&&(J=i.RG8)),b===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(J=i.RG8UI),V===i.UNSIGNED_SHORT&&(J=i.RG16UI),V===i.UNSIGNED_INT&&(J=i.RG32UI),V===i.BYTE&&(J=i.RG8I),V===i.SHORT&&(J=i.RG16I),V===i.INT&&(J=i.RG32I)),b===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&(J=i.RGB8UI),V===i.UNSIGNED_SHORT&&(J=i.RGB16UI),V===i.UNSIGNED_INT&&(J=i.RGB32UI),V===i.BYTE&&(J=i.RGB8I),V===i.SHORT&&(J=i.RGB16I),V===i.INT&&(J=i.RGB32I)),b===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),V===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),V===i.UNSIGNED_INT&&(J=i.RGBA32UI),V===i.BYTE&&(J=i.RGBA8I),V===i.SHORT&&(J=i.RGBA16I),V===i.INT&&(J=i.RGBA32I)),b===i.RGB&&V===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),b===i.RGBA){const ge=Q?yc:mt.getTransfer(j);V===i.FLOAT&&(J=i.RGBA32F),V===i.HALF_FLOAT&&(J=i.RGBA16F),V===i.UNSIGNED_BYTE&&(J=ge===Et?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function v(R,b){let V;return R?b===null||b===Es||b===Ta?V=i.DEPTH24_STENCIL8:b===ar?V=i.DEPTH32F_STENCIL8:b===Uo&&(V=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Es||b===Ta?V=i.DEPTH_COMPONENT24:b===ar?V=i.DEPTH_COMPONENT32F:b===Uo&&(V=i.DEPTH_COMPONENT16),V}function A(R,b){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Pi&&R.minFilter!==zi?Math.log2(Math.max(b.width,b.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?b.mipmaps.length:1}function w(R){const b=R.target;b.removeEventListener("dispose",w),C(b),b.isVideoTexture&&u.delete(b)}function E(R){const b=R.target;b.removeEventListener("dispose",E),M(b)}function C(R){const b=n.get(R);if(b.__webglInit===void 0)return;const V=R.source,j=d.get(V);if(j){const Q=j[b.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&S(R),Object.keys(j).length===0&&d.delete(V)}n.remove(R)}function S(R){const b=n.get(R);i.deleteTexture(b.__webglTexture);const V=R.source,j=d.get(V);delete j[b.__cacheKey],a.memory.textures--}function M(R){const b=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(b.__webglFramebuffer[j]))for(let Q=0;Q<b.__webglFramebuffer[j].length;Q++)i.deleteFramebuffer(b.__webglFramebuffer[j][Q]);else i.deleteFramebuffer(b.__webglFramebuffer[j]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[j])}else{if(Array.isArray(b.__webglFramebuffer))for(let j=0;j<b.__webglFramebuffer.length;j++)i.deleteFramebuffer(b.__webglFramebuffer[j]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let j=0;j<b.__webglColorRenderbuffer.length;j++)b.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[j]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const V=R.textures;for(let j=0,Q=V.length;j<Q;j++){const J=n.get(V[j]);J.__webglTexture&&(i.deleteTexture(J.__webglTexture),a.memory.textures--),n.remove(V[j])}n.remove(R)}let L=0;function N(){L=0}function z(){const R=L;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),L+=1,R}function B(R){const b=[];return b.push(R.wrapS),b.push(R.wrapT),b.push(R.wrapR||0),b.push(R.magFilter),b.push(R.minFilter),b.push(R.anisotropy),b.push(R.internalFormat),b.push(R.format),b.push(R.type),b.push(R.generateMipmaps),b.push(R.premultiplyAlpha),b.push(R.flipY),b.push(R.unpackAlignment),b.push(R.colorSpace),b.join()}function q(R,b){const V=n.get(R);if(R.isVideoTexture&&ce(R),R.isRenderTargetTexture===!1&&R.version>0&&V.__version!==R.version){const j=R.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(V,R,b);return}}t.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+b)}function H(R,b){const V=n.get(R);if(R.version>0&&V.__version!==R.version){Z(V,R,b);return}t.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+b)}function Y(R,b){const V=n.get(R);if(R.version>0&&V.__version!==R.version){Z(V,R,b);return}t.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+b)}function G(R,b){const V=n.get(R);if(R.version>0&&V.__version!==R.version){re(V,R,b);return}t.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+b)}const ae={[lc]:i.REPEAT,[cs]:i.CLAMP_TO_EDGE,[mh]:i.MIRRORED_REPEAT},D={[Pi]:i.NEAREST,[rx]:i.NEAREST_MIPMAP_NEAREST,[ol]:i.NEAREST_MIPMAP_LINEAR,[zi]:i.LINEAR,[Kc]:i.LINEAR_MIPMAP_NEAREST,[us]:i.LINEAR_MIPMAP_LINEAR},he={[lx]:i.NEVER,[px]:i.ALWAYS,[cx]:i.LESS,[k0]:i.LEQUAL,[ux]:i.EQUAL,[dx]:i.GEQUAL,[hx]:i.GREATER,[fx]:i.NOTEQUAL};function Fe(R,b){if(b.type===ar&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===zi||b.magFilter===Kc||b.magFilter===ol||b.magFilter===us||b.minFilter===zi||b.minFilter===Kc||b.minFilter===ol||b.minFilter===us)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,ae[b.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,ae[b.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,ae[b.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,D[b.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,D[b.minFilter]),b.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,he[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Pi||b.minFilter!==ol&&b.minFilter!==us||b.type===ar&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");i.texParameterf(R,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function tt(R,b){let V=!1;R.__webglInit===void 0&&(R.__webglInit=!0,b.addEventListener("dispose",w));const j=b.source;let Q=d.get(j);Q===void 0&&(Q={},d.set(j,Q));const J=B(b);if(J!==R.__cacheKey){Q[J]===void 0&&(Q[J]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,V=!0),Q[J].usedTimes++;const ge=Q[R.__cacheKey];ge!==void 0&&(Q[R.__cacheKey].usedTimes--,ge.usedTimes===0&&S(b)),R.__cacheKey=J,R.__webglTexture=Q[J].texture}return V}function Z(R,b,V){let j=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(j=i.TEXTURE_3D);const Q=tt(R,b),J=b.source;t.bindTexture(j,R.__webglTexture,i.TEXTURE0+V);const ge=n.get(J);if(J.version!==ge.__version||Q===!0){t.activeTexture(i.TEXTURE0+V);const de=mt.getPrimaries(mt.workingColorSpace),ye=b.colorSpace===wr?null:mt.getPrimaries(b.colorSpace),Ke=b.colorSpace===wr||de===ye?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ke);let le=_(b.image,!1,r.maxTextureSize);le=ke(b,le);const pe=s.convert(b.format,b.colorSpace),Ge=s.convert(b.type);let Ve=x(b.internalFormat,pe,Ge,b.colorSpace,b.isVideoTexture);Fe(j,b);let Re;const it=b.mipmaps,Ye=b.isVideoTexture!==!0,pt=ge.__version===void 0||Q===!0,U=J.dataReady,ve=A(b,le);if(b.isDepthTexture)Ve=v(b.format===Aa,b.type),pt&&(Ye?t.texStorage2D(i.TEXTURE_2D,1,Ve,le.width,le.height):t.texImage2D(i.TEXTURE_2D,0,Ve,le.width,le.height,0,pe,Ge,null));else if(b.isDataTexture)if(it.length>0){Ye&&pt&&t.texStorage2D(i.TEXTURE_2D,ve,Ve,it[0].width,it[0].height);for(let $=0,te=it.length;$<te;$++)Re=it[$],Ye?U&&t.texSubImage2D(i.TEXTURE_2D,$,0,0,Re.width,Re.height,pe,Ge,Re.data):t.texImage2D(i.TEXTURE_2D,$,Ve,Re.width,Re.height,0,pe,Ge,Re.data);b.generateMipmaps=!1}else Ye?(pt&&t.texStorage2D(i.TEXTURE_2D,ve,Ve,le.width,le.height),U&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,le.width,le.height,pe,Ge,le.data)):t.texImage2D(i.TEXTURE_2D,0,Ve,le.width,le.height,0,pe,Ge,le.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Ye&&pt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ve,Ve,it[0].width,it[0].height,le.depth);for(let $=0,te=it.length;$<te;$++)if(Re=it[$],b.format!==Ci)if(pe!==null)if(Ye){if(U)if(b.layerUpdates.size>0){const _e=Lp(Re.width,Re.height,b.format,b.type);for(const Me of b.layerUpdates){const qe=Re.data.subarray(Me*_e/Re.data.BYTES_PER_ELEMENT,(Me+1)*_e/Re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,Me,Re.width,Re.height,1,pe,qe)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,Re.width,Re.height,le.depth,pe,Re.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,$,Ve,Re.width,Re.height,le.depth,0,Re.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ye?U&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,Re.width,Re.height,le.depth,pe,Ge,Re.data):t.texImage3D(i.TEXTURE_2D_ARRAY,$,Ve,Re.width,Re.height,le.depth,0,pe,Ge,Re.data)}else{Ye&&pt&&t.texStorage2D(i.TEXTURE_2D,ve,Ve,it[0].width,it[0].height);for(let $=0,te=it.length;$<te;$++)Re=it[$],b.format!==Ci?pe!==null?Ye?U&&t.compressedTexSubImage2D(i.TEXTURE_2D,$,0,0,Re.width,Re.height,pe,Re.data):t.compressedTexImage2D(i.TEXTURE_2D,$,Ve,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?U&&t.texSubImage2D(i.TEXTURE_2D,$,0,0,Re.width,Re.height,pe,Ge,Re.data):t.texImage2D(i.TEXTURE_2D,$,Ve,Re.width,Re.height,0,pe,Ge,Re.data)}else if(b.isDataArrayTexture)if(Ye){if(pt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ve,Ve,le.width,le.height,le.depth),U)if(b.layerUpdates.size>0){const $=Lp(le.width,le.height,b.format,b.type);for(const te of b.layerUpdates){const _e=le.data.subarray(te*$/le.data.BYTES_PER_ELEMENT,(te+1)*$/le.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,te,le.width,le.height,1,pe,Ge,_e)}b.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,pe,Ge,le.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ve,le.width,le.height,le.depth,0,pe,Ge,le.data);else if(b.isData3DTexture)Ye?(pt&&t.texStorage3D(i.TEXTURE_3D,ve,Ve,le.width,le.height,le.depth),U&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,pe,Ge,le.data)):t.texImage3D(i.TEXTURE_3D,0,Ve,le.width,le.height,le.depth,0,pe,Ge,le.data);else if(b.isFramebufferTexture){if(pt)if(Ye)t.texStorage2D(i.TEXTURE_2D,ve,Ve,le.width,le.height);else{let $=le.width,te=le.height;for(let _e=0;_e<ve;_e++)t.texImage2D(i.TEXTURE_2D,_e,Ve,$,te,0,pe,Ge,null),$>>=1,te>>=1}}else if(it.length>0){if(Ye&&pt){const $=we(it[0]);t.texStorage2D(i.TEXTURE_2D,ve,Ve,$.width,$.height)}for(let $=0,te=it.length;$<te;$++)Re=it[$],Ye?U&&t.texSubImage2D(i.TEXTURE_2D,$,0,0,pe,Ge,Re):t.texImage2D(i.TEXTURE_2D,$,Ve,pe,Ge,Re);b.generateMipmaps=!1}else if(Ye){if(pt){const $=we(le);t.texStorage2D(i.TEXTURE_2D,ve,Ve,$.width,$.height)}U&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,pe,Ge,le)}else t.texImage2D(i.TEXTURE_2D,0,Ve,pe,Ge,le);m(b)&&p(j),ge.__version=J.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function re(R,b,V){if(b.image.length!==6)return;const j=tt(R,b),Q=b.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+V);const J=n.get(Q);if(Q.version!==J.__version||j===!0){t.activeTexture(i.TEXTURE0+V);const ge=mt.getPrimaries(mt.workingColorSpace),de=b.colorSpace===wr?null:mt.getPrimaries(b.colorSpace),ye=b.colorSpace===wr||ge===de?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const Ke=b.isCompressedTexture||b.image[0].isCompressedTexture,le=b.image[0]&&b.image[0].isDataTexture,pe=[];for(let te=0;te<6;te++)!Ke&&!le?pe[te]=_(b.image[te],!0,r.maxCubemapSize):pe[te]=le?b.image[te].image:b.image[te],pe[te]=ke(b,pe[te]);const Ge=pe[0],Ve=s.convert(b.format,b.colorSpace),Re=s.convert(b.type),it=x(b.internalFormat,Ve,Re,b.colorSpace),Ye=b.isVideoTexture!==!0,pt=J.__version===void 0||j===!0,U=Q.dataReady;let ve=A(b,Ge);Fe(i.TEXTURE_CUBE_MAP,b);let $;if(Ke){Ye&&pt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ve,it,Ge.width,Ge.height);for(let te=0;te<6;te++){$=pe[te].mipmaps;for(let _e=0;_e<$.length;_e++){const Me=$[_e];b.format!==Ci?Ve!==null?Ye?U&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,_e,0,0,Me.width,Me.height,Ve,Me.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,_e,it,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ye?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,_e,0,0,Me.width,Me.height,Ve,Re,Me.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,_e,it,Me.width,Me.height,0,Ve,Re,Me.data)}}}else{if($=b.mipmaps,Ye&&pt){$.length>0&&ve++;const te=we(pe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ve,it,te.width,te.height)}for(let te=0;te<6;te++)if(le){Ye?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,pe[te].width,pe[te].height,Ve,Re,pe[te].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,it,pe[te].width,pe[te].height,0,Ve,Re,pe[te].data);for(let _e=0;_e<$.length;_e++){const qe=$[_e].image[te].image;Ye?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,_e+1,0,0,qe.width,qe.height,Ve,Re,qe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,_e+1,it,qe.width,qe.height,0,Ve,Re,qe.data)}}else{Ye?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Ve,Re,pe[te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,it,Ve,Re,pe[te]);for(let _e=0;_e<$.length;_e++){const Me=$[_e];Ye?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,_e+1,0,0,Ve,Re,Me.image[te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,_e+1,it,Ve,Re,Me.image[te])}}}m(b)&&p(i.TEXTURE_CUBE_MAP),J.__version=Q.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function be(R,b,V,j,Q,J){const ge=s.convert(V.format,V.colorSpace),de=s.convert(V.type),ye=x(V.internalFormat,ge,de,V.colorSpace),Ke=n.get(b),le=n.get(V);if(le.__renderTarget=b,!Ke.__hasExternalTextures){const pe=Math.max(1,b.width>>J),Ge=Math.max(1,b.height>>J);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?t.texImage3D(Q,J,ye,pe,Ge,b.depth,0,ge,de,null):t.texImage2D(Q,J,ye,pe,Ge,0,ge,de,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),F(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,Q,le.__webglTexture,0,ie(b)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,Q,le.__webglTexture,J),t.bindFramebuffer(i.FRAMEBUFFER,null)}function oe(R,b,V){if(i.bindRenderbuffer(i.RENDERBUFFER,R),b.depthBuffer){const j=b.depthTexture,Q=j&&j.isDepthTexture?j.type:null,J=v(b.stencilBuffer,Q),ge=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=ie(b);F(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,de,J,b.width,b.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,de,J,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,J,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ge,i.RENDERBUFFER,R)}else{const j=b.textures;for(let Q=0;Q<j.length;Q++){const J=j[Q],ge=s.convert(J.format,J.colorSpace),de=s.convert(J.type),ye=x(J.internalFormat,ge,de,J.colorSpace),Ke=ie(b);V&&F(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ke,ye,b.width,b.height):F(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ke,ye,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,ye,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Le(R,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=n.get(b.depthTexture);j.__renderTarget=b,(!j.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),q(b.depthTexture,0);const Q=j.__webglTexture,J=ie(b);if(b.depthTexture.format===pa)F(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0);else if(b.depthTexture.format===Aa)F(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Ue(R){const b=n.get(R),V=R.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==R.depthTexture){const j=R.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),j){const Q=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,j.removeEventListener("dispose",Q)};j.addEventListener("dispose",Q),b.__depthDisposeCallback=Q}b.__boundDepthTexture=j}if(R.depthTexture&&!b.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");Le(b.__webglFramebuffer,R)}else if(V){b.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[j]),b.__webglDepthbuffer[j]===void 0)b.__webglDepthbuffer[j]=i.createRenderbuffer(),oe(b.__webglDepthbuffer[j],R,!1);else{const Q=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=b.__webglDepthbuffer[j];i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,J)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),oe(b.__webglDepthbuffer,R,!1);else{const j=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,Q)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ze(R,b,V){const j=n.get(R);b!==void 0&&be(j.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&Ue(R)}function Xe(R){const b=R.texture,V=n.get(R),j=n.get(b);R.addEventListener("dispose",E);const Q=R.textures,J=R.isWebGLCubeRenderTarget===!0,ge=Q.length>1;if(ge||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=b.version,a.memory.textures++),J){V.__webglFramebuffer=[];for(let de=0;de<6;de++)if(b.mipmaps&&b.mipmaps.length>0){V.__webglFramebuffer[de]=[];for(let ye=0;ye<b.mipmaps.length;ye++)V.__webglFramebuffer[de][ye]=i.createFramebuffer()}else V.__webglFramebuffer[de]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){V.__webglFramebuffer=[];for(let de=0;de<b.mipmaps.length;de++)V.__webglFramebuffer[de]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(ge)for(let de=0,ye=Q.length;de<ye;de++){const Ke=n.get(Q[de]);Ke.__webglTexture===void 0&&(Ke.__webglTexture=i.createTexture(),a.memory.textures++)}if(R.samples>0&&F(R)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let de=0;de<Q.length;de++){const ye=Q[de];V.__webglColorRenderbuffer[de]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[de]);const Ke=s.convert(ye.format,ye.colorSpace),le=s.convert(ye.type),pe=x(ye.internalFormat,Ke,le,ye.colorSpace,R.isXRRenderTarget===!0),Ge=ie(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ge,pe,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,V.__webglColorRenderbuffer[de])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),oe(V.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(J){t.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),Fe(i.TEXTURE_CUBE_MAP,b);for(let de=0;de<6;de++)if(b.mipmaps&&b.mipmaps.length>0)for(let ye=0;ye<b.mipmaps.length;ye++)be(V.__webglFramebuffer[de][ye],R,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+de,ye);else be(V.__webglFramebuffer[de],R,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);m(b)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ge){for(let de=0,ye=Q.length;de<ye;de++){const Ke=Q[de],le=n.get(Ke);t.bindTexture(i.TEXTURE_2D,le.__webglTexture),Fe(i.TEXTURE_2D,Ke),be(V.__webglFramebuffer,R,Ke,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,0),m(Ke)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let de=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(de=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(de,j.__webglTexture),Fe(de,b),b.mipmaps&&b.mipmaps.length>0)for(let ye=0;ye<b.mipmaps.length;ye++)be(V.__webglFramebuffer[ye],R,b,i.COLOR_ATTACHMENT0,de,ye);else be(V.__webglFramebuffer,R,b,i.COLOR_ATTACHMENT0,de,0);m(b)&&p(de),t.unbindTexture()}R.depthBuffer&&Ue(R)}function ne(R){const b=R.textures;for(let V=0,j=b.length;V<j;V++){const Q=b[V];if(m(Q)){const J=y(R),ge=n.get(Q).__webglTexture;t.bindTexture(J,ge),p(J),t.unbindTexture()}}}const ee=[],P=[];function Ae(R){if(R.samples>0){if(F(R)===!1){const b=R.textures,V=R.width,j=R.height;let Q=i.COLOR_BUFFER_BIT;const J=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ge=n.get(R),de=b.length>1;if(de)for(let ye=0;ye<b.length;ye++)t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let ye=0;ye<b.length;ye++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),de){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ge.__webglColorRenderbuffer[ye]);const Ke=n.get(b[ye]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ke,0)}i.blitFramebuffer(0,0,V,j,0,0,V,j,Q,i.NEAREST),l===!0&&(ee.length=0,P.length=0,ee.push(i.COLOR_ATTACHMENT0+ye),R.depthBuffer&&R.resolveDepthBuffer===!1&&(ee.push(J),P.push(J),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,P)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ee))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),de)for(let ye=0;ye<b.length;ye++){t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,ge.__webglColorRenderbuffer[ye]);const Ke=n.get(b[ye]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.TEXTURE_2D,Ke,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const b=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function ie(R){return Math.min(r.maxSamples,R.samples)}function F(R){const b=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function ce(R){const b=a.render.frame;u.get(R)!==b&&(u.set(R,b),R.update())}function ke(R,b){const V=R.colorSpace,j=R.format,Q=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||V!==Da&&V!==wr&&(mt.getTransfer(V)===Et?(j!==Ci||Q!==fr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),b}function we(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=N,this.setTexture2D=q,this.setTexture2DArray=H,this.setTexture3D=Y,this.setTextureCube=G,this.rebindTextures=ze,this.setupRenderTarget=Xe,this.updateRenderTargetMipmap=ne,this.updateMultisampleRenderTarget=Ae,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=be,this.useMultisampledRTT=F}function Ib(i,e){function t(n,r=wr){let s;const a=mt.getTransfer(r);if(n===fr)return i.UNSIGNED_BYTE;if(n===Tf)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Af)return i.UNSIGNED_SHORT_5_5_5_1;if(n===R0)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===A0)return i.BYTE;if(n===C0)return i.SHORT;if(n===Uo)return i.UNSIGNED_SHORT;if(n===wf)return i.INT;if(n===Es)return i.UNSIGNED_INT;if(n===ar)return i.FLOAT;if(n===Go)return i.HALF_FLOAT;if(n===P0)return i.ALPHA;if(n===L0)return i.RGB;if(n===Ci)return i.RGBA;if(n===D0)return i.LUMINANCE;if(n===I0)return i.LUMINANCE_ALPHA;if(n===pa)return i.DEPTH_COMPONENT;if(n===Aa)return i.DEPTH_STENCIL;if(n===U0)return i.RED;if(n===Cf)return i.RED_INTEGER;if(n===N0)return i.RG;if(n===Rf)return i.RG_INTEGER;if(n===Pf)return i.RGBA_INTEGER;if(n===Wl||n===Xl||n===Yl||n===ql)if(a===Et)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Wl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Xl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Yl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ql)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Wl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Xl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Yl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ql)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===gh||n===_h||n===vh||n===xh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===gh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===_h)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===vh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===xh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===yh||n===Mh||n===Sh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===yh||n===Mh)return a===Et?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Sh)return a===Et?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===bh||n===Eh||n===wh||n===Th||n===Ah||n===Ch||n===Rh||n===Ph||n===Lh||n===Dh||n===Ih||n===Uh||n===Nh||n===Oh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===bh)return a===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Eh)return a===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===wh)return a===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Th)return a===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ah)return a===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ch)return a===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Rh)return a===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ph)return a===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Lh)return a===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Dh)return a===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ih)return a===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Uh)return a===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Nh)return a===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Oh)return a===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===$l||n===Fh||n===kh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===$l)return a===Et?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Fh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===kh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===O0||n===zh||n===Bh||n===Hh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===$l)return s.COMPRESSED_RED_RGTC1_EXT;if(n===zh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Bh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Hh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ta?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class Ub extends Nn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class vt extends mn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Nb={type:"move"};class bu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Nb)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new vt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Ob=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Fb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class kb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new Bn,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Wi({vertexShader:Ob,fragmentShader:Fb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ft(new Na(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class zb extends Ia{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,g=null;const _=new kb,m=t.getContextAttributes();let p=null,y=null;const x=[],v=[],A=new me;let w=null;const E=new Nn;E.viewport=new wt;const C=new Nn;C.viewport=new wt;const S=[E,C],M=new Ub;let L=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let re=x[Z];return re===void 0&&(re=new bu,x[Z]=re),re.getTargetRaySpace()},this.getControllerGrip=function(Z){let re=x[Z];return re===void 0&&(re=new bu,x[Z]=re),re.getGripSpace()},this.getHand=function(Z){let re=x[Z];return re===void 0&&(re=new bu,x[Z]=re),re.getHandSpace()};function z(Z){const re=v.indexOf(Z.inputSource);if(re===-1)return;const be=x[re];be!==void 0&&(be.update(Z.inputSource,Z.frame,c||a),be.dispatchEvent({type:Z.type,data:Z.inputSource}))}function B(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",B),r.removeEventListener("inputsourceschange",q);for(let Z=0;Z<x.length;Z++){const re=v[Z];re!==null&&(v[Z]=null,x[Z].disconnect(re))}L=null,N=null,_.reset(),e.setRenderTarget(p),f=null,d=null,h=null,r=null,y=null,tt.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",B),r.addEventListener("inputsourceschange",q),m.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(A),r.renderState.layers===void 0){const re={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,re),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new ws(f.framebufferWidth,f.framebufferHeight,{format:Ci,type:fr,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let re=null,be=null,oe=null;m.depth&&(oe=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,re=m.stencil?Aa:pa,be=m.stencil?Ta:Es);const Le={colorFormat:t.RGBA8,depthFormat:oe,scaleFactor:s};h=new XRWebGLBinding(r,t),d=h.createProjectionLayer(Le),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new ws(d.textureWidth,d.textureHeight,{format:Ci,type:fr,depthTexture:new j0(d.textureWidth,d.textureHeight,be,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),tt.setContext(r),tt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function q(Z){for(let re=0;re<Z.removed.length;re++){const be=Z.removed[re],oe=v.indexOf(be);oe>=0&&(v[oe]=null,x[oe].disconnect(be))}for(let re=0;re<Z.added.length;re++){const be=Z.added[re];let oe=v.indexOf(be);if(oe===-1){for(let Ue=0;Ue<x.length;Ue++)if(Ue>=v.length){v.push(be),oe=Ue;break}else if(v[Ue]===null){v[Ue]=be,oe=Ue;break}if(oe===-1)break}const Le=x[oe];Le&&Le.connect(be)}}const H=new I,Y=new I;function G(Z,re,be){H.setFromMatrixPosition(re.matrixWorld),Y.setFromMatrixPosition(be.matrixWorld);const oe=H.distanceTo(Y),Le=re.projectionMatrix.elements,Ue=be.projectionMatrix.elements,ze=Le[14]/(Le[10]-1),Xe=Le[14]/(Le[10]+1),ne=(Le[9]+1)/Le[5],ee=(Le[9]-1)/Le[5],P=(Le[8]-1)/Le[0],Ae=(Ue[8]+1)/Ue[0],ie=ze*P,F=ze*Ae,ce=oe/(-P+Ae),ke=ce*-P;if(re.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(ke),Z.translateZ(ce),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Le[10]===-1)Z.projectionMatrix.copy(re.projectionMatrix),Z.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{const we=ze+ce,R=Xe+ce,b=ie-ke,V=F+(oe-ke),j=ne*Xe/R*we,Q=ee*Xe/R*we;Z.projectionMatrix.makePerspective(b,V,j,Q,we,R),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function ae(Z,re){re===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(re.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;let re=Z.near,be=Z.far;_.texture!==null&&(_.depthNear>0&&(re=_.depthNear),_.depthFar>0&&(be=_.depthFar)),M.near=C.near=E.near=re,M.far=C.far=E.far=be,(L!==M.near||N!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),L=M.near,N=M.far),E.layers.mask=Z.layers.mask|2,C.layers.mask=Z.layers.mask|4,M.layers.mask=E.layers.mask|C.layers.mask;const oe=Z.parent,Le=M.cameras;ae(M,oe);for(let Ue=0;Ue<Le.length;Ue++)ae(Le[Ue],oe);Le.length===2?G(M,E,C):M.projectionMatrix.copy(E.projectionMatrix),D(Z,M,oe)};function D(Z,re,be){be===null?Z.matrix.copy(re.matrixWorld):(Z.matrix.copy(be.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(re.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(re.projectionMatrix),Z.projectionMatrixInverse.copy(re.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=No*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Z){l=Z,d!==null&&(d.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let he=null;function Fe(Z,re){if(u=re.getViewerPose(c||a),g=re,u!==null){const be=u.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let oe=!1;be.length!==M.cameras.length&&(M.cameras.length=0,oe=!0);for(let Ue=0;Ue<be.length;Ue++){const ze=be[Ue];let Xe=null;if(f!==null)Xe=f.getViewport(ze);else{const ee=h.getViewSubImage(d,ze);Xe=ee.viewport,Ue===0&&(e.setRenderTargetTextures(y,ee.colorTexture,d.ignoreDepthValues?void 0:ee.depthStencilTexture),e.setRenderTarget(y))}let ne=S[Ue];ne===void 0&&(ne=new Nn,ne.layers.enable(Ue),ne.viewport=new wt,S[Ue]=ne),ne.matrix.fromArray(ze.transform.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.projectionMatrix.fromArray(ze.projectionMatrix),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert(),ne.viewport.set(Xe.x,Xe.y,Xe.width,Xe.height),Ue===0&&(M.matrix.copy(ne.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),oe===!0&&M.cameras.push(ne)}const Le=r.enabledFeatures;if(Le&&Le.includes("depth-sensing")){const Ue=h.getDepthInformation(be[0]);Ue&&Ue.isValid&&Ue.texture&&_.init(e,Ue,r.renderState)}}for(let be=0;be<x.length;be++){const oe=v[be],Le=x[be];oe!==null&&Le!==void 0&&Le.update(oe,re,c||a)}he&&he(Z,re),re.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:re}),g=null}const tt=new K0;tt.setAnimationLoop(Fe),this.setAnimationLoop=function(Z){he=Z},this.dispose=function(){}}}const jr=new Gi,Bb=new Ot;function Hb(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,q0(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,y,x,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,y,x):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===zn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===zn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=e.get(p),x=y.envMap,v=y.envMapRotation;x&&(m.envMap.value=x,jr.copy(v),jr.x*=-1,jr.y*=-1,jr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(jr.y*=-1,jr.z*=-1),m.envMapRotation.value.setFromMatrix4(Bb.makeRotationFromEuler(jr)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=x*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===zn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Vb(i,e,t,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,x){const v=x.program;n.uniformBlockBinding(y,v)}function c(y,x){let v=r[y.id];v===void 0&&(g(y),v=u(y),r[y.id]=v,y.addEventListener("dispose",m));const A=x.program;n.updateUBOMapping(y,A);const w=e.render.frame;s[y.id]!==w&&(d(y),s[y.id]=w)}function u(y){const x=h();y.__bindingPointIndex=x;const v=i.createBuffer(),A=y.__size,w=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,A,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,v),v}function h(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const x=r[y.id],v=y.uniforms,A=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let w=0,E=v.length;w<E;w++){const C=Array.isArray(v[w])?v[w]:[v[w]];for(let S=0,M=C.length;S<M;S++){const L=C[S];if(f(L,w,S,A)===!0){const N=L.__offset,z=Array.isArray(L.value)?L.value:[L.value];let B=0;for(let q=0;q<z.length;q++){const H=z[q],Y=_(H);typeof H=="number"||typeof H=="boolean"?(L.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,N+B,L.__data)):H.isMatrix3?(L.__data[0]=H.elements[0],L.__data[1]=H.elements[1],L.__data[2]=H.elements[2],L.__data[3]=0,L.__data[4]=H.elements[3],L.__data[5]=H.elements[4],L.__data[6]=H.elements[5],L.__data[7]=0,L.__data[8]=H.elements[6],L.__data[9]=H.elements[7],L.__data[10]=H.elements[8],L.__data[11]=0):(H.toArray(L.__data,B),B+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,N,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(y,x,v,A){const w=y.value,E=x+"_"+v;if(A[E]===void 0)return typeof w=="number"||typeof w=="boolean"?A[E]=w:A[E]=w.clone(),!0;{const C=A[E];if(typeof w=="number"||typeof w=="boolean"){if(C!==w)return A[E]=w,!0}else if(C.equals(w)===!1)return C.copy(w),!0}return!1}function g(y){const x=y.uniforms;let v=0;const A=16;for(let E=0,C=x.length;E<C;E++){const S=Array.isArray(x[E])?x[E]:[x[E]];for(let M=0,L=S.length;M<L;M++){const N=S[M],z=Array.isArray(N.value)?N.value:[N.value];for(let B=0,q=z.length;B<q;B++){const H=z[B],Y=_(H),G=v%A,ae=G%Y.boundary,D=G+ae;v+=ae,D!==0&&A-D<Y.storage&&(v+=A-D),N.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=v,v+=Y.storage}}}const w=v%A;return w>0&&(v+=A-w),y.__size=v,y.__cache={},this}function _(y){const x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function m(y){const x=y.target;x.removeEventListener("dispose",m);const v=a.indexOf(x.__bindingPointIndex);a.splice(v,1),i.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function p(){for(const y in r)i.deleteBuffer(r[y]);a=[],r={},s={}}return{bind:l,update:c,dispose:p}}class Gb{constructor(e={}){const{canvas:t=Lx(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const y=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Gn,this.toneMapping=Fr,this.toneMappingExposure=1;const v=this;let A=!1,w=0,E=0,C=null,S=-1,M=null;const L=new wt,N=new wt;let z=null;const B=new nt(0);let q=0,H=t.width,Y=t.height,G=1,ae=null,D=null;const he=new wt(0,0,H,Y),Fe=new wt(0,0,H,Y);let tt=!1;const Z=new Df;let re=!1,be=!1;const oe=new Ot,Le=new Ot,Ue=new I,ze=new wt,Xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ne=!1;function ee(){return C===null?G:1}let P=n;function Ae(T,O){return t.getContext(T,O)}try{const T={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ef}`),t.addEventListener("webglcontextlost",te,!1),t.addEventListener("webglcontextrestored",_e,!1),t.addEventListener("webglcontextcreationerror",Me,!1),P===null){const O="webgl2";if(P=Ae(O,T),P===null)throw Ae(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let ie,F,ce,ke,we,R,b,V,j,Q,J,ge,de,ye,Ke,le,pe,Ge,Ve,Re,it,Ye,pt,U;function ve(){ie=new $S(P),ie.init(),Ye=new Ib(P,ie),F=new VS(P,ie,e,Ye),ce=new Pb(P,ie),F.reverseDepthBuffer&&d&&ce.buffers.depth.setReversed(!0),ke=new JS(P),we=new mb,R=new Db(P,ie,ce,we,F,Ye,ke),b=new WS(v),V=new qS(v),j=new ry(P),pt=new BS(P,j),Q=new ZS(P,j,ke,pt),J=new QS(P,Q,j,ke),Ve=new jS(P,F,R),le=new GS(we),ge=new pb(v,b,V,ie,F,pt,le),de=new Hb(v,we),ye=new _b,Ke=new bb(ie),Ge=new zS(v,b,V,ce,J,f,l),pe=new Cb(v,J,F),U=new Vb(P,ke,F,ce),Re=new HS(P,ie,ke),it=new KS(P,ie,ke),ke.programs=ge.programs,v.capabilities=F,v.extensions=ie,v.properties=we,v.renderLists=ye,v.shadowMap=pe,v.state=ce,v.info=ke}ve();const $=new zb(v,P);this.xr=$,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const T=ie.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=ie.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(T){T!==void 0&&(G=T,this.setSize(H,Y,!1))},this.getSize=function(T){return T.set(H,Y)},this.setSize=function(T,O,W=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=T,Y=O,t.width=Math.floor(T*G),t.height=Math.floor(O*G),W===!0&&(t.style.width=T+"px",t.style.height=O+"px"),this.setViewport(0,0,T,O)},this.getDrawingBufferSize=function(T){return T.set(H*G,Y*G).floor()},this.setDrawingBufferSize=function(T,O,W){H=T,Y=O,G=W,t.width=Math.floor(T*W),t.height=Math.floor(O*W),this.setViewport(0,0,T,O)},this.getCurrentViewport=function(T){return T.copy(L)},this.getViewport=function(T){return T.copy(he)},this.setViewport=function(T,O,W,X){T.isVector4?he.set(T.x,T.y,T.z,T.w):he.set(T,O,W,X),ce.viewport(L.copy(he).multiplyScalar(G).round())},this.getScissor=function(T){return T.copy(Fe)},this.setScissor=function(T,O,W,X){T.isVector4?Fe.set(T.x,T.y,T.z,T.w):Fe.set(T,O,W,X),ce.scissor(N.copy(Fe).multiplyScalar(G).round())},this.getScissorTest=function(){return tt},this.setScissorTest=function(T){ce.setScissorTest(tt=T)},this.setOpaqueSort=function(T){ae=T},this.setTransparentSort=function(T){D=T},this.getClearColor=function(T){return T.copy(Ge.getClearColor())},this.setClearColor=function(){Ge.setClearColor.apply(Ge,arguments)},this.getClearAlpha=function(){return Ge.getClearAlpha()},this.setClearAlpha=function(){Ge.setClearAlpha.apply(Ge,arguments)},this.clear=function(T=!0,O=!0,W=!0){let X=0;if(T){let k=!1;if(C!==null){const ue=C.texture.format;k=ue===Pf||ue===Rf||ue===Cf}if(k){const ue=C.texture.type,fe=ue===fr||ue===Es||ue===Uo||ue===Ta||ue===Tf||ue===Af,Se=Ge.getClearColor(),Pe=Ge.getClearAlpha(),$e=Se.r,Qe=Se.g,Ie=Se.b;fe?(g[0]=$e,g[1]=Qe,g[2]=Ie,g[3]=Pe,P.clearBufferuiv(P.COLOR,0,g)):(_[0]=$e,_[1]=Qe,_[2]=Ie,_[3]=Pe,P.clearBufferiv(P.COLOR,0,_))}else X|=P.COLOR_BUFFER_BIT}O&&(X|=P.DEPTH_BUFFER_BIT),W&&(X|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",te,!1),t.removeEventListener("webglcontextrestored",_e,!1),t.removeEventListener("webglcontextcreationerror",Me,!1),ye.dispose(),Ke.dispose(),we.dispose(),b.dispose(),V.dispose(),J.dispose(),pt.dispose(),U.dispose(),ge.dispose(),$.dispose(),$.removeEventListener("sessionstart",Ee),$.removeEventListener("sessionend",Je),Oe.stop()};function te(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function _e(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const T=ke.autoReset,O=pe.enabled,W=pe.autoUpdate,X=pe.needsUpdate,k=pe.type;ve(),ke.autoReset=T,pe.enabled=O,pe.autoUpdate=W,pe.needsUpdate=X,pe.type=k}function Me(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function qe(T){const O=T.target;O.removeEventListener("dispose",qe),gt(O)}function gt(T){Wt(T),we.remove(T)}function Wt(T){const O=we.get(T).programs;O!==void 0&&(O.forEach(function(W){ge.releaseProgram(W)}),T.isShaderMaterial&&ge.releaseShaderCache(T))}this.renderBufferDirect=function(T,O,W,X,k,ue){O===null&&(O=Xe);const fe=k.isMesh&&k.matrixWorld.determinant()<0,Se=Zn(T,O,W,X,k);ce.setMaterial(X,fe);let Pe=W.index,$e=1;if(X.wireframe===!0){if(Pe=Q.getWireframeAttribute(W),Pe===void 0)return;$e=2}const Qe=W.drawRange,Ie=W.attributes.position;let et=Qe.start*$e,_t=(Qe.start+Qe.count)*$e;ue!==null&&(et=Math.max(et,ue.start*$e),_t=Math.min(_t,(ue.start+ue.count)*$e)),Pe!==null?(et=Math.max(et,0),_t=Math.min(_t,Pe.count)):Ie!=null&&(et=Math.max(et,0),_t=Math.min(_t,Ie.count));const yt=_t-et;if(yt<0||yt===1/0)return;pt.setup(k,X,Se,W,Pe);let jt,Mt=Re;if(Pe!==null&&(jt=j.get(Pe),Mt=it,Mt.setIndex(jt)),k.isMesh)X.wireframe===!0?(ce.setLineWidth(X.wireframeLinewidth*ee()),Mt.setMode(P.LINES)):Mt.setMode(P.TRIANGLES);else if(k.isLine){let Be=X.linewidth;Be===void 0&&(Be=1),ce.setLineWidth(Be*ee()),k.isLineSegments?Mt.setMode(P.LINES):k.isLineLoop?Mt.setMode(P.LINE_LOOP):Mt.setMode(P.LINE_STRIP)}else k.isPoints?Mt.setMode(P.POINTS):k.isSprite&&Mt.setMode(P.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)Mt.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(ie.get("WEBGL_multi_draw"))Mt.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Be=k._multiDrawStarts,$i=k._multiDrawCounts,St=k._multiDrawCount,yi=Pe?j.get(Pe).bytesPerElement:1,Is=we.get(X).currentProgram.getUniforms();for(let Kn=0;Kn<St;Kn++)Is.setValue(P,"_gl_DrawID",Kn),Mt.render(Be[Kn]/yi,$i[Kn])}else if(k.isInstancedMesh)Mt.renderInstances(et,yt,k.count);else if(W.isInstancedBufferGeometry){const Be=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,$i=Math.min(W.instanceCount,Be);Mt.renderInstances(et,yt,$i)}else Mt.render(et,yt)};function Ce(T,O,W){T.transparent===!0&&T.side===dn&&T.forceSinglePass===!1?(T.side=zn,T.needsUpdate=!0,Tt(T,O,W),T.side=Vr,T.needsUpdate=!0,Tt(T,O,W),T.side=dn):Tt(T,O,W)}this.compile=function(T,O,W=null){W===null&&(W=T),p=Ke.get(W),p.init(O),x.push(p),W.traverseVisible(function(k){k.isLight&&k.layers.test(O.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),T!==W&&T.traverseVisible(function(k){k.isLight&&k.layers.test(O.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights();const X=new Set;return T.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const ue=k.material;if(ue)if(Array.isArray(ue))for(let fe=0;fe<ue.length;fe++){const Se=ue[fe];Ce(Se,W,k),X.add(Se)}else Ce(ue,W,k),X.add(ue)}),x.pop(),p=null,X},this.compileAsync=function(T,O,W=null){const X=this.compile(T,O,W);return new Promise(k=>{function ue(){if(X.forEach(function(fe){we.get(fe).currentProgram.isReady()&&X.delete(fe)}),X.size===0){k(T);return}setTimeout(ue,10)}ie.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let Ne=null;function rt(T){Ne&&Ne(T)}function Ee(){Oe.stop()}function Je(){Oe.start()}const Oe=new K0;Oe.setAnimationLoop(rt),typeof self<"u"&&Oe.setContext(self),this.setAnimationLoop=function(T){Ne=T,$.setAnimationLoop(T),T===null?Oe.stop():Oe.start()},$.addEventListener("sessionstart",Ee),$.addEventListener("sessionend",Je),this.render=function(T,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(O),O=$.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,O,C),p=Ke.get(T,x.length),p.init(O),x.push(p),Le.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Z.setFromProjectionMatrix(Le),be=this.localClippingEnabled,re=le.init(this.clippingPlanes,be),m=ye.get(T,y.length),m.init(),y.push(m),$.enabled===!0&&$.isPresenting===!0){const ue=v.xr.getDepthSensingMesh();ue!==null&&Ze(ue,O,-1/0,v.sortObjects)}Ze(T,O,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(ae,D),ne=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,ne&&Ge.addToRenderList(m,T),this.info.render.frame++,re===!0&&le.beginShadows();const W=p.state.shadowsArray;pe.render(W,T,O),re===!0&&le.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=m.opaque,k=m.transmissive;if(p.setupLights(),O.isArrayCamera){const ue=O.cameras;if(k.length>0)for(let fe=0,Se=ue.length;fe<Se;fe++){const Pe=ue[fe];lt(X,k,T,Pe)}ne&&Ge.render(T);for(let fe=0,Se=ue.length;fe<Se;fe++){const Pe=ue[fe];qt(m,T,Pe,Pe.viewport)}}else k.length>0&&lt(X,k,T,O),ne&&Ge.render(T),qt(m,T,O);C!==null&&(R.updateMultisampleRenderTarget(C),R.updateRenderTargetMipmap(C)),T.isScene===!0&&T.onAfterRender(v,T,O),pt.resetDefaultState(),S=-1,M=null,x.pop(),x.length>0?(p=x[x.length-1],re===!0&&le.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function Ze(T,O,W,X){if(T.visible===!1)return;if(T.layers.test(O.layers)){if(T.isGroup)W=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(O);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Z.intersectsSprite(T)){X&&ze.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Le);const fe=J.update(T),Se=T.material;Se.visible&&m.push(T,fe,Se,W,ze.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Z.intersectsObject(T))){const fe=J.update(T),Se=T.material;if(X&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),ze.copy(T.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),ze.copy(fe.boundingSphere.center)),ze.applyMatrix4(T.matrixWorld).applyMatrix4(Le)),Array.isArray(Se)){const Pe=fe.groups;for(let $e=0,Qe=Pe.length;$e<Qe;$e++){const Ie=Pe[$e],et=Se[Ie.materialIndex];et&&et.visible&&m.push(T,fe,et,W,ze.z,Ie)}}else Se.visible&&m.push(T,fe,Se,W,ze.z,null)}}const ue=T.children;for(let fe=0,Se=ue.length;fe<Se;fe++)Ze(ue[fe],O,W,X)}function qt(T,O,W,X){const k=T.opaque,ue=T.transmissive,fe=T.transparent;p.setupLightsView(W),re===!0&&le.setGlobalState(v.clippingPlanes,W),X&&ce.viewport(L.copy(X)),k.length>0&&Pt(k,O,W),ue.length>0&&Pt(ue,O,W),fe.length>0&&Pt(fe,O,W),ce.buffers.depth.setTest(!0),ce.buffers.depth.setMask(!0),ce.buffers.color.setMask(!0),ce.setPolygonOffset(!1)}function lt(T,O,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[X.id]===void 0&&(p.state.transmissionRenderTarget[X.id]=new ws(1,1,{generateMipmaps:!0,type:ie.has("EXT_color_buffer_half_float")||ie.has("EXT_color_buffer_float")?Go:fr,minFilter:us,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:mt.workingColorSpace}));const ue=p.state.transmissionRenderTarget[X.id],fe=X.viewport||L;ue.setSize(fe.z,fe.w);const Se=v.getRenderTarget();v.setRenderTarget(ue),v.getClearColor(B),q=v.getClearAlpha(),q<1&&v.setClearColor(16777215,.5),v.clear(),ne&&Ge.render(W);const Pe=v.toneMapping;v.toneMapping=Fr;const $e=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),p.setupLightsView(X),re===!0&&le.setGlobalState(v.clippingPlanes,X),Pt(T,W,X),R.updateMultisampleRenderTarget(ue),R.updateRenderTargetMipmap(ue),ie.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let Ie=0,et=O.length;Ie<et;Ie++){const _t=O[Ie],yt=_t.object,jt=_t.geometry,Mt=_t.material,Be=_t.group;if(Mt.side===dn&&yt.layers.test(X.layers)){const $i=Mt.side;Mt.side=zn,Mt.needsUpdate=!0,nn(yt,W,X,jt,Mt,Be),Mt.side=$i,Mt.needsUpdate=!0,Qe=!0}}Qe===!0&&(R.updateMultisampleRenderTarget(ue),R.updateRenderTargetMipmap(ue))}v.setRenderTarget(Se),v.setClearColor(B,q),$e!==void 0&&(X.viewport=$e),v.toneMapping=Pe}function Pt(T,O,W){const X=O.isScene===!0?O.overrideMaterial:null;for(let k=0,ue=T.length;k<ue;k++){const fe=T[k],Se=fe.object,Pe=fe.geometry,$e=X===null?fe.material:X,Qe=fe.group;Se.layers.test(W.layers)&&nn(Se,O,W,Pe,$e,Qe)}}function nn(T,O,W,X,k,ue){T.onBeforeRender(v,O,W,X,k,ue),T.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),k.onBeforeRender(v,O,W,X,T,ue),k.transparent===!0&&k.side===dn&&k.forceSinglePass===!1?(k.side=zn,k.needsUpdate=!0,v.renderBufferDirect(W,O,X,k,T,ue),k.side=Vr,k.needsUpdate=!0,v.renderBufferDirect(W,O,X,k,T,ue),k.side=dn):v.renderBufferDirect(W,O,X,k,T,ue),T.onAfterRender(v,O,W,X,k,ue)}function Tt(T,O,W){O.isScene!==!0&&(O=Xe);const X=we.get(T),k=p.state.lights,ue=p.state.shadowsArray,fe=k.state.version,Se=ge.getParameters(T,k.state,ue,O,W),Pe=ge.getProgramCacheKey(Se);let $e=X.programs;X.environment=T.isMeshStandardMaterial?O.environment:null,X.fog=O.fog,X.envMap=(T.isMeshStandardMaterial?V:b).get(T.envMap||X.environment),X.envMapRotation=X.environment!==null&&T.envMap===null?O.environmentRotation:T.envMapRotation,$e===void 0&&(T.addEventListener("dispose",qe),$e=new Map,X.programs=$e);let Qe=$e.get(Pe);if(Qe!==void 0){if(X.currentProgram===Qe&&X.lightsStateVersion===fe)return xt(T,Se),Qe}else Se.uniforms=ge.getUniforms(T),T.onBeforeCompile(Se,v),Qe=ge.acquireProgram(Se,Pe),$e.set(Pe,Qe),X.uniforms=Se.uniforms;const Ie=X.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ie.clippingPlanes=le.uniform),xt(T,Se),X.needsLights=An(T),X.lightsStateVersion=fe,X.needsLights&&(Ie.ambientLightColor.value=k.state.ambient,Ie.lightProbe.value=k.state.probe,Ie.directionalLights.value=k.state.directional,Ie.directionalLightShadows.value=k.state.directionalShadow,Ie.spotLights.value=k.state.spot,Ie.spotLightShadows.value=k.state.spotShadow,Ie.rectAreaLights.value=k.state.rectArea,Ie.ltc_1.value=k.state.rectAreaLTC1,Ie.ltc_2.value=k.state.rectAreaLTC2,Ie.pointLights.value=k.state.point,Ie.pointLightShadows.value=k.state.pointShadow,Ie.hemisphereLights.value=k.state.hemi,Ie.directionalShadowMap.value=k.state.directionalShadowMap,Ie.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Ie.spotShadowMap.value=k.state.spotShadowMap,Ie.spotLightMatrix.value=k.state.spotLightMatrix,Ie.spotLightMap.value=k.state.spotLightMap,Ie.pointShadowMap.value=k.state.pointShadowMap,Ie.pointShadowMatrix.value=k.state.pointShadowMatrix),X.currentProgram=Qe,X.uniformsList=null,Qe}function At(T){if(T.uniformsList===null){const O=T.currentProgram.getUniforms();T.uniformsList=Zl.seqWithValue(O.seq,T.uniforms)}return T.uniformsList}function xt(T,O){const W=we.get(T);W.outputColorSpace=O.outputColorSpace,W.batching=O.batching,W.batchingColor=O.batchingColor,W.instancing=O.instancing,W.instancingColor=O.instancingColor,W.instancingMorph=O.instancingMorph,W.skinning=O.skinning,W.morphTargets=O.morphTargets,W.morphNormals=O.morphNormals,W.morphColors=O.morphColors,W.morphTargetsCount=O.morphTargetsCount,W.numClippingPlanes=O.numClippingPlanes,W.numIntersection=O.numClipIntersection,W.vertexAlphas=O.vertexAlphas,W.vertexTangents=O.vertexTangents,W.toneMapping=O.toneMapping}function Zn(T,O,W,X,k){O.isScene!==!0&&(O=Xe),R.resetTextureUnits();const ue=O.fog,fe=X.isMeshStandardMaterial?O.environment:null,Se=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Da,Pe=(X.isMeshStandardMaterial?V:b).get(X.envMap||fe),$e=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Qe=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Ie=!!W.morphAttributes.position,et=!!W.morphAttributes.normal,_t=!!W.morphAttributes.color;let yt=Fr;X.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(yt=v.toneMapping);const jt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Mt=jt!==void 0?jt.length:0,Be=we.get(X),$i=p.state.lights;if(re===!0&&(be===!0||T!==M)){const oi=T===M&&X.id===S;le.setState(X,T,oi)}let St=!1;X.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==$i.state.version||Be.outputColorSpace!==Se||k.isBatchedMesh&&Be.batching===!1||!k.isBatchedMesh&&Be.batching===!0||k.isBatchedMesh&&Be.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Be.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Be.instancing===!1||!k.isInstancedMesh&&Be.instancing===!0||k.isSkinnedMesh&&Be.skinning===!1||!k.isSkinnedMesh&&Be.skinning===!0||k.isInstancedMesh&&Be.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Be.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Be.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Be.instancingMorph===!1&&k.morphTexture!==null||Be.envMap!==Pe||X.fog===!0&&Be.fog!==ue||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==le.numPlanes||Be.numIntersection!==le.numIntersection)||Be.vertexAlphas!==$e||Be.vertexTangents!==Qe||Be.morphTargets!==Ie||Be.morphNormals!==et||Be.morphColors!==_t||Be.toneMapping!==yt||Be.morphTargetsCount!==Mt)&&(St=!0):(St=!0,Be.__version=X.version);let yi=Be.currentProgram;St===!0&&(yi=Tt(X,O,k));let Is=!1,Kn=!1,Ba=!1;const It=yi.getUniforms(),Di=Be.uniforms;if(ce.useProgram(yi.program)&&(Is=!0,Kn=!0,Ba=!0),X.id!==S&&(S=X.id,Kn=!0),Is||M!==T){ce.buffers.depth.getReversed()?(oe.copy(T.projectionMatrix),Ix(oe),Ux(oe),It.setValue(P,"projectionMatrix",oe)):It.setValue(P,"projectionMatrix",T.projectionMatrix),It.setValue(P,"viewMatrix",T.matrixWorldInverse);const mr=It.map.cameraPosition;mr!==void 0&&mr.setValue(P,Ue.setFromMatrixPosition(T.matrixWorld)),F.logarithmicDepthBuffer&&It.setValue(P,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&It.setValue(P,"isOrthographic",T.isOrthographicCamera===!0),M!==T&&(M=T,Kn=!0,Ba=!0)}if(k.isSkinnedMesh){It.setOptional(P,k,"bindMatrix"),It.setOptional(P,k,"bindMatrixInverse");const oi=k.skeleton;oi&&(oi.boneTexture===null&&oi.computeBoneTexture(),It.setValue(P,"boneTexture",oi.boneTexture,R))}k.isBatchedMesh&&(It.setOptional(P,k,"batchingTexture"),It.setValue(P,"batchingTexture",k._matricesTexture,R),It.setOptional(P,k,"batchingIdTexture"),It.setValue(P,"batchingIdTexture",k._indirectTexture,R),It.setOptional(P,k,"batchingColorTexture"),k._colorsTexture!==null&&It.setValue(P,"batchingColorTexture",k._colorsTexture,R));const Ha=W.morphAttributes;if((Ha.position!==void 0||Ha.normal!==void 0||Ha.color!==void 0)&&Ve.update(k,W,yi),(Kn||Be.receiveShadow!==k.receiveShadow)&&(Be.receiveShadow=k.receiveShadow,It.setValue(P,"receiveShadow",k.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(Di.envMap.value=Pe,Di.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&O.environment!==null&&(Di.envMapIntensity.value=O.environmentIntensity),Kn&&(It.setValue(P,"toneMappingExposure",v.toneMappingExposure),Be.needsLights&&Dt(Di,Ba),ue&&X.fog===!0&&de.refreshFogUniforms(Di,ue),de.refreshMaterialUniforms(Di,X,G,Y,p.state.transmissionRenderTarget[T.id]),Zl.upload(P,At(Be),Di,R)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Zl.upload(P,At(Be),Di,R),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&It.setValue(P,"center",k.center),It.setValue(P,"modelViewMatrix",k.modelViewMatrix),It.setValue(P,"normalMatrix",k.normalMatrix),It.setValue(P,"modelMatrix",k.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const oi=X.uniformsGroups;for(let mr=0,gr=oi.length;mr<gr;mr++){const Qf=oi[mr];U.update(Qf,yi),U.bind(Qf,yi)}}return yi}function Dt(T,O){T.ambientLightColor.needsUpdate=O,T.lightProbe.needsUpdate=O,T.directionalLights.needsUpdate=O,T.directionalLightShadows.needsUpdate=O,T.pointLights.needsUpdate=O,T.pointLightShadows.needsUpdate=O,T.spotLights.needsUpdate=O,T.spotLightShadows.needsUpdate=O,T.rectAreaLights.needsUpdate=O,T.hemisphereLights.needsUpdate=O}function An(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(T,O,W){we.get(T.texture).__webglTexture=O,we.get(T.depthTexture).__webglTexture=W;const X=we.get(T);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=W===void 0,X.__autoAllocateDepthBuffer||ie.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,O){const W=we.get(T);W.__webglFramebuffer=O,W.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(T,O=0,W=0){C=T,w=O,E=W;let X=!0,k=null,ue=!1,fe=!1;if(T){const Pe=we.get(T);if(Pe.__useDefaultFramebuffer!==void 0)ce.bindFramebuffer(P.FRAMEBUFFER,null),X=!1;else if(Pe.__webglFramebuffer===void 0)R.setupRenderTarget(T);else if(Pe.__hasExternalTextures)R.rebindTextures(T,we.get(T.texture).__webglTexture,we.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Ie=T.depthTexture;if(Pe.__boundDepthTexture!==Ie){if(Ie!==null&&we.has(Ie)&&(T.width!==Ie.image.width||T.height!==Ie.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(T)}}const $e=T.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(fe=!0);const Qe=we.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Qe[O])?k=Qe[O][W]:k=Qe[O],ue=!0):T.samples>0&&R.useMultisampledRTT(T)===!1?k=we.get(T).__webglMultisampledFramebuffer:Array.isArray(Qe)?k=Qe[W]:k=Qe,L.copy(T.viewport),N.copy(T.scissor),z=T.scissorTest}else L.copy(he).multiplyScalar(G).floor(),N.copy(Fe).multiplyScalar(G).floor(),z=tt;if(ce.bindFramebuffer(P.FRAMEBUFFER,k)&&X&&ce.drawBuffers(T,k),ce.viewport(L),ce.scissor(N),ce.setScissorTest(z),ue){const Pe=we.get(T.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+O,Pe.__webglTexture,W)}else if(fe){const Pe=we.get(T.texture),$e=O||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,Pe.__webglTexture,W||0,$e)}S=-1},this.readRenderTargetPixels=function(T,O,W,X,k,ue,fe){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=we.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&fe!==void 0&&(Se=Se[fe]),Se){ce.bindFramebuffer(P.FRAMEBUFFER,Se);try{const Pe=T.texture,$e=Pe.format,Qe=Pe.type;if(!F.textureFormatReadable($e)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!F.textureTypeReadable(Qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=T.width-X&&W>=0&&W<=T.height-k&&P.readPixels(O,W,X,k,Ye.convert($e),Ye.convert(Qe),ue)}finally{const Pe=C!==null?we.get(C).__webglFramebuffer:null;ce.bindFramebuffer(P.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(T,O,W,X,k,ue,fe){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=we.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&fe!==void 0&&(Se=Se[fe]),Se){const Pe=T.texture,$e=Pe.format,Qe=Pe.type;if(!F.textureFormatReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!F.textureTypeReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=T.width-X&&W>=0&&W<=T.height-k){ce.bindFramebuffer(P.FRAMEBUFFER,Se);const Ie=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Ie),P.bufferData(P.PIXEL_PACK_BUFFER,ue.byteLength,P.STREAM_READ),P.readPixels(O,W,X,k,Ye.convert($e),Ye.convert(Qe),0);const et=C!==null?we.get(C).__webglFramebuffer:null;ce.bindFramebuffer(P.FRAMEBUFFER,et);const _t=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Dx(P,_t,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Ie),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,ue),P.deleteBuffer(Ie),P.deleteSync(_t),ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,O=null,W=0){T.isTexture!==!0&&(ro("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,T=arguments[1]);const X=Math.pow(2,-W),k=Math.floor(T.image.width*X),ue=Math.floor(T.image.height*X),fe=O!==null?O.x:0,Se=O!==null?O.y:0;R.setTexture2D(T,0),P.copyTexSubImage2D(P.TEXTURE_2D,W,0,0,fe,Se,k,ue),ce.unbindTexture()},this.copyTextureToTexture=function(T,O,W=null,X=null,k=0){T.isTexture!==!0&&(ro("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,T=arguments[1],O=arguments[2],k=arguments[3]||0,W=null);let ue,fe,Se,Pe,$e,Qe,Ie,et,_t;const yt=T.isCompressedTexture?T.mipmaps[k]:T.image;W!==null?(ue=W.max.x-W.min.x,fe=W.max.y-W.min.y,Se=W.isBox3?W.max.z-W.min.z:1,Pe=W.min.x,$e=W.min.y,Qe=W.isBox3?W.min.z:0):(ue=yt.width,fe=yt.height,Se=yt.depth||1,Pe=0,$e=0,Qe=0),X!==null?(Ie=X.x,et=X.y,_t=X.z):(Ie=0,et=0,_t=0);const jt=Ye.convert(O.format),Mt=Ye.convert(O.type);let Be;O.isData3DTexture?(R.setTexture3D(O,0),Be=P.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(R.setTexture2DArray(O,0),Be=P.TEXTURE_2D_ARRAY):(R.setTexture2D(O,0),Be=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,O.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,O.unpackAlignment);const $i=P.getParameter(P.UNPACK_ROW_LENGTH),St=P.getParameter(P.UNPACK_IMAGE_HEIGHT),yi=P.getParameter(P.UNPACK_SKIP_PIXELS),Is=P.getParameter(P.UNPACK_SKIP_ROWS),Kn=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,yt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,yt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Pe),P.pixelStorei(P.UNPACK_SKIP_ROWS,$e),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Qe);const Ba=T.isDataArrayTexture||T.isData3DTexture,It=O.isDataArrayTexture||O.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){const Di=we.get(T),Ha=we.get(O),oi=we.get(Di.__renderTarget),mr=we.get(Ha.__renderTarget);ce.bindFramebuffer(P.READ_FRAMEBUFFER,oi.__webglFramebuffer),ce.bindFramebuffer(P.DRAW_FRAMEBUFFER,mr.__webglFramebuffer);for(let gr=0;gr<Se;gr++)Ba&&P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,we.get(T).__webglTexture,k,Qe+gr),T.isDepthTexture?(It&&P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,we.get(O).__webglTexture,k,_t+gr),P.blitFramebuffer(Pe,$e,ue,fe,Ie,et,ue,fe,P.DEPTH_BUFFER_BIT,P.NEAREST)):It?P.copyTexSubImage3D(Be,k,Ie,et,_t+gr,Pe,$e,ue,fe):P.copyTexSubImage2D(Be,k,Ie,et,_t+gr,Pe,$e,ue,fe);ce.bindFramebuffer(P.READ_FRAMEBUFFER,null),ce.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else It?T.isDataTexture||T.isData3DTexture?P.texSubImage3D(Be,k,Ie,et,_t,ue,fe,Se,jt,Mt,yt.data):O.isCompressedArrayTexture?P.compressedTexSubImage3D(Be,k,Ie,et,_t,ue,fe,Se,jt,yt.data):P.texSubImage3D(Be,k,Ie,et,_t,ue,fe,Se,jt,Mt,yt):T.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,k,Ie,et,ue,fe,jt,Mt,yt.data):T.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,k,Ie,et,yt.width,yt.height,jt,yt.data):P.texSubImage2D(P.TEXTURE_2D,k,Ie,et,ue,fe,jt,Mt,yt);P.pixelStorei(P.UNPACK_ROW_LENGTH,$i),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,St),P.pixelStorei(P.UNPACK_SKIP_PIXELS,yi),P.pixelStorei(P.UNPACK_SKIP_ROWS,Is),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Kn),k===0&&O.generateMipmaps&&P.generateMipmap(Be),ce.unbindTexture()},this.copyTextureToTexture3D=function(T,O,W=null,X=null,k=0){return T.isTexture!==!0&&(ro("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,X=arguments[1]||null,T=arguments[2],O=arguments[3],k=arguments[4]||0),ro('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,O,W,X,k)},this.initRenderTarget=function(T){we.get(T).__webglFramebuffer===void 0&&R.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?R.setTextureCube(T,0):T.isData3DTexture?R.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?R.setTexture2DArray(T,0):R.setTexture2D(T,0),ce.unbindTexture()},this.resetState=function(){w=0,E=0,C=null,ce.reset(),pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return or}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=mt._getDrawingBufferColorSpace(e),t.unpackColorSpace=mt._getUnpackColorSpace()}}class bc extends mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gi,this.environmentIntensity=1,this.environmentRotation=new Gi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Wb extends Ua{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new nt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Dp=new Ot,Xh=new V0,Cl=new Mc,Rl=new I;class ig extends mn{constructor(e=new _n,t=new Wb){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Cl.copy(n.boundingSphere),Cl.applyMatrix4(r),Cl.radius+=s,e.ray.intersectsSphere(Cl)===!1)return;Dp.copy(r).invert(),Xh.copy(e.ray).applyMatrix4(Dp);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=d,_=f;g<_;g++){const m=c.getX(g);Rl.fromBufferAttribute(h,m),Ip(Rl,m,l,r,e,t,this)}}else{const d=Math.max(0,a.start),f=Math.min(h.count,a.start+a.count);for(let g=d,_=f;g<_;g++)Rl.fromBufferAttribute(h,g),Ip(Rl,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Ip(i,e,t,n,r,s,a){const o=Xh.distanceSqToPoint(i);if(o<t){const l=new I;Xh.closestPointToPoint(i,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Xb extends Bn{constructor(e,t,n,r,s,a,o,l,c){super(e,t,n,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Yi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,r=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let r=0;const s=n.length;let a;t?a=t:a=e*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===a)return r/(s-1);const u=n[r],d=n[r+1]-u,f=(a-u)/d;return(r+f)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),l=t||(a.isVector2?new me:new I);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new I,r=[],s=[],a=[],o=new I,l=new Ot;for(let f=0;f<=e;f++){const g=f/e;r[f]=this.getTangentAt(g,new I)}s[0]=new I,a[0]=new I;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),d=Math.abs(r[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(r[f-1],r[f]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(an(r[f-1].dot(r[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(r[f],s[f])}if(t===!0){let f=Math.acos(an(s[0].dot(s[e]),-1,1));f/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(f=-f);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],f*g)),a[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Uf extends Yi{constructor(e=0,t=0,n=1,r=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new me){const n=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*h+this.aX,c=d*h+f*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Yb extends Uf{constructor(e,t,n,r,s,a){super(e,t,n,n,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Nf(){let i=0,e=0,t=0,n=0;function r(s,a,o,l){i=s,e=o,t=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){r(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,u,h){let d=(a-s)/c-(o-s)/(c+u)+(o-a)/u,f=(o-a)/u-(l-a)/(u+h)+(l-o)/h;d*=u,f*=u,r(a,o,d,f)},calc:function(s){const a=s*s,o=a*s;return i+e*s+t*a+n*o}}}const Pl=new I,Eu=new Nf,wu=new Nf,Tu=new Nf;class rg extends Yi{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new I){const n=t,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,u;this.closed||o>0?c=r[(o-1)%s]:(Pl.subVectors(r[0],r[1]).add(r[0]),c=Pl);const h=r[o%s],d=r[(o+1)%s];if(this.closed||o+2<s?u=r[(o+2)%s]:(Pl.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Pl),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),f),_=Math.pow(h.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(u),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Eu.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,g,_,m),wu.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,g,_,m),Tu.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,g,_,m)}else this.curveType==="catmullrom"&&(Eu.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),wu.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),Tu.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(Eu.calc(l),wu.calc(l),Tu.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new I().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Up(i,e,t,n,r){const s=(n-e)*.5,a=(r-t)*.5,o=i*i,l=i*o;return(2*t-2*n+s+a)*l+(-3*t+3*n-2*s-a)*o+s*i+t}function qb(i,e){const t=1-i;return t*t*e}function $b(i,e){return 2*(1-i)*i*e}function Zb(i,e){return i*i*e}function Mo(i,e,t,n){return qb(i,e)+$b(i,t)+Zb(i,n)}function Kb(i,e){const t=1-i;return t*t*t*e}function Jb(i,e){const t=1-i;return 3*t*t*i*e}function jb(i,e){return 3*(1-i)*i*i*e}function Qb(i,e){return i*i*i*e}function So(i,e,t,n,r){return Kb(i,e)+Jb(i,t)+jb(i,n)+Qb(i,r)}class sg extends Yi{constructor(e=new me,t=new me,n=new me,r=new me){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new me){const n=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(So(e,r.x,s.x,a.x,o.x),So(e,r.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class eE extends Yi{constructor(e=new I,t=new I,n=new I,r=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new I){const n=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(So(e,r.x,s.x,a.x,o.x),So(e,r.y,s.y,a.y,o.y),So(e,r.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class ag extends Yi{constructor(e=new me,t=new me){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new me){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new me){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class tE extends Yi{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class og extends Yi{constructor(e=new me,t=new me,n=new me){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new me){const n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(Mo(e,r.x,s.x,a.x),Mo(e,r.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class lg extends Yi{constructor(e=new I,t=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new I){const n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(Mo(e,r.x,s.x,a.x),Mo(e,r.y,s.y,a.y),Mo(e,r.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class cg extends Yi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new me){const n=t,r=this.points,s=(r.length-1)*e,a=Math.floor(s),o=s-a,l=r[a===0?a:a-1],c=r[a],u=r[a>r.length-2?r.length-1:a+1],h=r[a>r.length-3?r.length-1:a+2];return n.set(Up(o,l.x,c.x,u.x,h.x),Up(o,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new me().fromArray(r))}return this}}var hc=Object.freeze({__proto__:null,ArcCurve:Yb,CatmullRomCurve3:rg,CubicBezierCurve:sg,CubicBezierCurve3:eE,EllipseCurve:Uf,LineCurve:ag,LineCurve3:tE,QuadraticBezierCurve:og,QuadraticBezierCurve3:lg,SplineCurve:cg});class nE extends Yi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new hc[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const a=r[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const a=s[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(new hc[r.type]().fromJSON(r))}return this}}class Yh extends nE{constructor(e){super(),this.type="Path",this.currentPoint=new me,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new ag(this.currentPoint.clone(),new me(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){const s=new og(this.currentPoint.clone(),new me(e,t),new me(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,a){const o=new sg(this.currentPoint.clone(),new me(e,t),new me(n,r),new me(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new cg(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,r,s,a),this}absarc(e,t,n,r,s,a){return this.absellipse(e,t,n,n,r,s,a),this}ellipse(e,t,n,r,s,a,o,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,r,s,a,o,l),this}absellipse(e,t,n,r,s,a,o,l){const c=new Uf(e,t,n,r,s,a,o,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Ec extends _n{constructor(e=[new me(0,-.5),new me(.5,0),new me(0,.5)],t=12,n=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=an(r,0,Math.PI*2);const s=[],a=[],o=[],l=[],c=[],u=1/t,h=new I,d=new me,f=new I,g=new I,_=new I;let m=0,p=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:m=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,f.x=p*1,f.y=-m,f.z=p*0,_.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(_.x,_.y,_.z);break;default:m=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),l.push(f.x,f.y,f.z),_.copy(g)}for(let y=0;y<=t;y++){const x=n+y*u*r,v=Math.sin(x),A=Math.cos(x);for(let w=0;w<=e.length-1;w++){h.x=e[w].x*v,h.y=e[w].y,h.z=e[w].x*A,a.push(h.x,h.y,h.z),d.x=y/t,d.y=w/(e.length-1),o.push(d.x,d.y);const E=l[3*w+0]*v,C=l[3*w+1],S=l[3*w+0]*A;c.push(E,C,S)}}for(let y=0;y<t;y++)for(let x=0;x<e.length-1;x++){const v=x+y*e.length,A=v,w=v+e.length,E=v+e.length+1,C=v+1;s.push(A,w,C),s.push(E,C,w)}this.setIndex(s),this.setAttribute("position",new bt(a,3)),this.setAttribute("uv",new bt(o,2)),this.setAttribute("normal",new bt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ec(e.points,e.segments,e.phiStart,e.phiLength)}}class Of extends Ec{constructor(e=1,t=1,n=4,r=8){const s=new Yh;s.absarc(0,-t/2,e,Math.PI*1.5,0),s.absarc(0,t/2,e,0,Math.PI*.5),super(s.getPoints(n),r),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:r}}static fromJSON(e){return new Of(e.radius,e.length,e.capSegments,e.radialSegments)}}class wc extends _n{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);const s=[],a=[],o=[],l=[],c=new I,u=new me;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){const f=n+h/t*r;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[d]/e+1)/2,u.y=(a[d+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new bt(a,3)),this.setAttribute("normal",new bt(o,3)),this.setAttribute("uv",new bt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wc(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class ut extends _n{constructor(e=1,t=1,n=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],h=[],d=[],f=[];let g=0;const _=[],m=n/2;let p=0;y(),a===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new bt(h,3)),this.setAttribute("normal",new bt(d,3)),this.setAttribute("uv",new bt(f,2));function y(){const v=new I,A=new I;let w=0;const E=(t-e)/n;for(let C=0;C<=s;C++){const S=[],M=C/s,L=M*(t-e)+e;for(let N=0;N<=r;N++){const z=N/r,B=z*l+o,q=Math.sin(B),H=Math.cos(B);A.x=L*q,A.y=-M*n+m,A.z=L*H,h.push(A.x,A.y,A.z),v.set(q,E,H).normalize(),d.push(v.x,v.y,v.z),f.push(z,1-M),S.push(g++)}_.push(S)}for(let C=0;C<r;C++)for(let S=0;S<s;S++){const M=_[S][C],L=_[S+1][C],N=_[S+1][C+1],z=_[S][C+1];(e>0||S!==0)&&(u.push(M,L,z),w+=3),(t>0||S!==s-1)&&(u.push(L,N,z),w+=3)}c.addGroup(p,w,0),p+=w}function x(v){const A=g,w=new me,E=new I;let C=0;const S=v===!0?e:t,M=v===!0?1:-1;for(let N=1;N<=r;N++)h.push(0,m*M,0),d.push(0,M,0),f.push(.5,.5),g++;const L=g;for(let N=0;N<=r;N++){const B=N/r*l+o,q=Math.cos(B),H=Math.sin(B);E.x=S*H,E.y=m*M,E.z=S*q,h.push(E.x,E.y,E.z),d.push(0,M,0),w.x=q*.5+.5,w.y=H*.5*M+.5,f.push(w.x,w.y),g++}for(let N=0;N<r;N++){const z=A+N,B=L+N;v===!0?u.push(B,B+1,z):u.push(B+1,B,z),C+=3}c.addGroup(p,C,v===!0?1:2),p+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ut(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ra extends ut{constructor(e=1,t=1,n=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Ra(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Pa extends Yh{constructor(e){super(e),this.uuid=Ls(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(new Yh().fromJSON(r))}return this}}const iE={triangulate:function(i,e,t=2){const n=e&&e.length,r=n?e[0]*t:i.length;let s=ug(i,0,r,t,!0);const a=[];if(!s||s.next===s.prev)return a;let o,l,c,u,h,d,f;if(n&&(s=lE(i,e,s,t)),i.length>80*t){o=c=i[0],l=u=i[1];for(let g=t;g<r;g+=t)h=i[g],d=i[g+1],h<o&&(o=h),d<l&&(l=d),h>c&&(c=h),d>u&&(u=d);f=Math.max(c-o,u-l),f=f!==0?32767/f:0}return Oo(s,a,t,o,l,f,0),a}};function ug(i,e,t,n,r){let s,a;if(r===xE(i,e,t,n)>0)for(s=e;s<t;s+=n)a=Np(s,i[s],i[s+1],a);else for(s=t-n;s>=e;s-=n)a=Np(s,i[s],i[s+1],a);return a&&Tc(a,a.next)&&(ko(a),a=a.next),a}function Ts(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Tc(t,t.next)||Gt(t.prev,t,t.next)===0)){if(ko(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Oo(i,e,t,n,r,s,a){if(!i)return;!a&&s&&dE(i,n,r,s);let o=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,s?sE(i,n,r,s):rE(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),ko(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=aE(Ts(i),e,t),Oo(i,e,t,n,r,s,2)):a===2&&oE(i,e,t,n,r,s):Oo(Ts(i),e,t,n,r,s,1);break}}}function rE(i){const e=i.prev,t=i,n=i.next;if(Gt(e,t,n)>=0)return!1;const r=e.x,s=t.x,a=n.x,o=e.y,l=t.y,c=n.y,u=r<s?r<a?r:a:s<a?s:a,h=o<l?o<c?o:c:l<c?l:c,d=r>s?r>a?r:a:s>a?s:a,f=o>l?o>c?o:c:l>c?l:c;let g=n.next;for(;g!==e;){if(g.x>=u&&g.x<=d&&g.y>=h&&g.y<=f&&aa(r,o,s,l,a,c,g.x,g.y)&&Gt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function sE(i,e,t,n){const r=i.prev,s=i,a=i.next;if(Gt(r,s,a)>=0)return!1;const o=r.x,l=s.x,c=a.x,u=r.y,h=s.y,d=a.y,f=o<l?o<c?o:c:l<c?l:c,g=u<h?u<d?u:d:h<d?h:d,_=o>l?o>c?o:c:l>c?l:c,m=u>h?u>d?u:d:h>d?h:d,p=qh(f,g,e,t,n),y=qh(_,m,e,t,n);let x=i.prevZ,v=i.nextZ;for(;x&&x.z>=p&&v&&v.z<=y;){if(x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==r&&x!==a&&aa(o,u,l,h,c,d,x.x,x.y)&&Gt(x.prev,x,x.next)>=0||(x=x.prevZ,v.x>=f&&v.x<=_&&v.y>=g&&v.y<=m&&v!==r&&v!==a&&aa(o,u,l,h,c,d,v.x,v.y)&&Gt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;x&&x.z>=p;){if(x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==r&&x!==a&&aa(o,u,l,h,c,d,x.x,x.y)&&Gt(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;v&&v.z<=y;){if(v.x>=f&&v.x<=_&&v.y>=g&&v.y<=m&&v!==r&&v!==a&&aa(o,u,l,h,c,d,v.x,v.y)&&Gt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function aE(i,e,t){let n=i;do{const r=n.prev,s=n.next.next;!Tc(r,s)&&hg(r,n,n.next,s)&&Fo(r,s)&&Fo(s,r)&&(e.push(r.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),ko(n),ko(n.next),n=i=s),n=n.next}while(n!==i);return Ts(n)}function oE(i,e,t,n,r,s){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&gE(a,o)){let l=fg(a,o);a=Ts(a,a.next),l=Ts(l,l.next),Oo(a,e,t,n,r,s,0),Oo(l,e,t,n,r,s,0);return}o=o.next}a=a.next}while(a!==i)}function lE(i,e,t,n){const r=[];let s,a,o,l,c;for(s=0,a=e.length;s<a;s++)o=e[s]*n,l=s<a-1?e[s+1]*n:i.length,c=ug(i,o,l,n,!1),c===c.next&&(c.steiner=!0),r.push(mE(c));for(r.sort(cE),s=0;s<r.length;s++)t=uE(r[s],t);return t}function cE(i,e){return i.x-e.x}function uE(i,e){const t=hE(i,e);if(!t)return e;const n=fg(t,i);return Ts(n,n.next),Ts(t,t.next)}function hE(i,e){let t=e,n=-1/0,r;const s=i.x,a=i.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){const d=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=s&&d>n&&(n=d,r=t.x<t.next.x?t:t.next,d===s))return r}t=t.next}while(t!==e);if(!r)return null;const o=r,l=r.x,c=r.y;let u=1/0,h;t=r;do s>=t.x&&t.x>=l&&s!==t.x&&aa(a<c?s:n,a,l,c,a<c?n:s,a,t.x,t.y)&&(h=Math.abs(a-t.y)/(s-t.x),Fo(t,i)&&(h<u||h===u&&(t.x>r.x||t.x===r.x&&fE(r,t)))&&(r=t,u=h)),t=t.next;while(t!==o);return r}function fE(i,e){return Gt(i.prev,i,e.prev)<0&&Gt(e.next,i,i.next)<0}function dE(i,e,t,n){let r=i;do r.z===0&&(r.z=qh(r.x,r.y,e,t,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,pE(r)}function pE(i){let e,t,n,r,s,a,o,l,c=1;do{for(t=i,i=null,s=null,a=0;t;){for(a++,n=t,o=0,e=0;e<c&&(o++,n=n.nextZ,!!n);e++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(r=t,t=t.nextZ,o--):(r=n,n=n.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;t=n}s.nextZ=null,c*=2}while(a>1);return i}function qh(i,e,t,n,r){return i=(i-t)*r|0,e=(e-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function mE(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function aa(i,e,t,n,r,s,a,o){return(r-a)*(e-o)>=(i-a)*(s-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(r-a)*(n-o)}function gE(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!_E(i,e)&&(Fo(i,e)&&Fo(e,i)&&vE(i,e)&&(Gt(i.prev,i,e.prev)||Gt(i,e.prev,e))||Tc(i,e)&&Gt(i.prev,i,i.next)>0&&Gt(e.prev,e,e.next)>0)}function Gt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Tc(i,e){return i.x===e.x&&i.y===e.y}function hg(i,e,t,n){const r=Dl(Gt(i,e,t)),s=Dl(Gt(i,e,n)),a=Dl(Gt(t,n,i)),o=Dl(Gt(t,n,e));return!!(r!==s&&a!==o||r===0&&Ll(i,t,e)||s===0&&Ll(i,n,e)||a===0&&Ll(t,i,n)||o===0&&Ll(t,e,n))}function Ll(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Dl(i){return i>0?1:i<0?-1:0}function _E(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&hg(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Fo(i,e){return Gt(i.prev,i,i.next)<0?Gt(i,e,i.next)>=0&&Gt(i,i.prev,e)>=0:Gt(i,e,i.prev)<0||Gt(i,i.next,e)<0}function vE(i,e){let t=i,n=!1;const r=(i.x+e.x)/2,s=(i.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function fg(i,e){const t=new $h(i.i,i.x,i.y),n=new $h(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function Np(i,e,t,n){const r=new $h(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function ko(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function $h(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function xE(i,e,t,n){let r=0;for(let s=e,a=t-n;s<t;s+=n)r+=(i[a]-i[s])*(i[s+1]+i[a+1]),a=s;return r}class bo{static area(e){const t=e.length;let n=0;for(let r=t-1,s=0;s<t;r=s++)n+=e[r].x*e[s].y-e[s].x*e[r].y;return n*.5}static isClockWise(e){return bo.area(e)<0}static triangulateShape(e,t){const n=[],r=[],s=[];Op(e),Fp(n,e);let a=e.length;t.forEach(Op);for(let l=0;l<t.length;l++)r.push(a),a+=t[l].length,Fp(n,t[l]);const o=iE.triangulate(n,r);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}}function Op(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Fp(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class As extends _n{constructor(e=new Pa([new me(.5,.5),new me(-.5,.5),new me(-.5,-.5),new me(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,r=[],s=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];a(c)}this.setAttribute("position",new bt(r,3)),this.setAttribute("uv",new bt(s,2)),this.computeVertexNormals();function a(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:yE;let x,v=!1,A,w,E,C;p&&(x=p.getSpacedPoints(u),v=!0,d=!1,A=p.computeFrenetFrames(u,!1),w=new I,E=new I,C=new I),d||(m=0,f=0,g=0,_=0);const S=o.extractPoints(c);let M=S.shape;const L=S.holes;if(!bo.isClockWise(M)){M=M.reverse();for(let ne=0,ee=L.length;ne<ee;ne++){const P=L[ne];bo.isClockWise(P)&&(L[ne]=P.reverse())}}const z=bo.triangulateShape(M,L),B=M;for(let ne=0,ee=L.length;ne<ee;ne++){const P=L[ne];M=M.concat(P)}function q(ne,ee,P){return ee||console.error("THREE.ExtrudeGeometry: vec does not exist"),ne.clone().addScaledVector(ee,P)}const H=M.length,Y=z.length;function G(ne,ee,P){let Ae,ie,F;const ce=ne.x-ee.x,ke=ne.y-ee.y,we=P.x-ne.x,R=P.y-ne.y,b=ce*ce+ke*ke,V=ce*R-ke*we;if(Math.abs(V)>Number.EPSILON){const j=Math.sqrt(b),Q=Math.sqrt(we*we+R*R),J=ee.x-ke/j,ge=ee.y+ce/j,de=P.x-R/Q,ye=P.y+we/Q,Ke=((de-J)*R-(ye-ge)*we)/(ce*R-ke*we);Ae=J+ce*Ke-ne.x,ie=ge+ke*Ke-ne.y;const le=Ae*Ae+ie*ie;if(le<=2)return new me(Ae,ie);F=Math.sqrt(le/2)}else{let j=!1;ce>Number.EPSILON?we>Number.EPSILON&&(j=!0):ce<-Number.EPSILON?we<-Number.EPSILON&&(j=!0):Math.sign(ke)===Math.sign(R)&&(j=!0),j?(Ae=-ke,ie=ce,F=Math.sqrt(b)):(Ae=ce,ie=ke,F=Math.sqrt(b/2))}return new me(Ae/F,ie/F)}const ae=[];for(let ne=0,ee=B.length,P=ee-1,Ae=ne+1;ne<ee;ne++,P++,Ae++)P===ee&&(P=0),Ae===ee&&(Ae=0),ae[ne]=G(B[ne],B[P],B[Ae]);const D=[];let he,Fe=ae.concat();for(let ne=0,ee=L.length;ne<ee;ne++){const P=L[ne];he=[];for(let Ae=0,ie=P.length,F=ie-1,ce=Ae+1;Ae<ie;Ae++,F++,ce++)F===ie&&(F=0),ce===ie&&(ce=0),he[Ae]=G(P[Ae],P[F],P[ce]);D.push(he),Fe=Fe.concat(he)}for(let ne=0;ne<m;ne++){const ee=ne/m,P=f*Math.cos(ee*Math.PI/2),Ae=g*Math.sin(ee*Math.PI/2)+_;for(let ie=0,F=B.length;ie<F;ie++){const ce=q(B[ie],ae[ie],Ae);oe(ce.x,ce.y,-P)}for(let ie=0,F=L.length;ie<F;ie++){const ce=L[ie];he=D[ie];for(let ke=0,we=ce.length;ke<we;ke++){const R=q(ce[ke],he[ke],Ae);oe(R.x,R.y,-P)}}}const tt=g+_;for(let ne=0;ne<H;ne++){const ee=d?q(M[ne],Fe[ne],tt):M[ne];v?(E.copy(A.normals[0]).multiplyScalar(ee.x),w.copy(A.binormals[0]).multiplyScalar(ee.y),C.copy(x[0]).add(E).add(w),oe(C.x,C.y,C.z)):oe(ee.x,ee.y,0)}for(let ne=1;ne<=u;ne++)for(let ee=0;ee<H;ee++){const P=d?q(M[ee],Fe[ee],tt):M[ee];v?(E.copy(A.normals[ne]).multiplyScalar(P.x),w.copy(A.binormals[ne]).multiplyScalar(P.y),C.copy(x[ne]).add(E).add(w),oe(C.x,C.y,C.z)):oe(P.x,P.y,h/u*ne)}for(let ne=m-1;ne>=0;ne--){const ee=ne/m,P=f*Math.cos(ee*Math.PI/2),Ae=g*Math.sin(ee*Math.PI/2)+_;for(let ie=0,F=B.length;ie<F;ie++){const ce=q(B[ie],ae[ie],Ae);oe(ce.x,ce.y,h+P)}for(let ie=0,F=L.length;ie<F;ie++){const ce=L[ie];he=D[ie];for(let ke=0,we=ce.length;ke<we;ke++){const R=q(ce[ke],he[ke],Ae);v?oe(R.x,R.y+x[u-1].y,x[u-1].x+P):oe(R.x,R.y,h+P)}}}Z(),re();function Z(){const ne=r.length/3;if(d){let ee=0,P=H*ee;for(let Ae=0;Ae<Y;Ae++){const ie=z[Ae];Le(ie[2]+P,ie[1]+P,ie[0]+P)}ee=u+m*2,P=H*ee;for(let Ae=0;Ae<Y;Ae++){const ie=z[Ae];Le(ie[0]+P,ie[1]+P,ie[2]+P)}}else{for(let ee=0;ee<Y;ee++){const P=z[ee];Le(P[2],P[1],P[0])}for(let ee=0;ee<Y;ee++){const P=z[ee];Le(P[0]+H*u,P[1]+H*u,P[2]+H*u)}}n.addGroup(ne,r.length/3-ne,0)}function re(){const ne=r.length/3;let ee=0;be(B,ee),ee+=B.length;for(let P=0,Ae=L.length;P<Ae;P++){const ie=L[P];be(ie,ee),ee+=ie.length}n.addGroup(ne,r.length/3-ne,1)}function be(ne,ee){let P=ne.length;for(;--P>=0;){const Ae=P;let ie=P-1;ie<0&&(ie=ne.length-1);for(let F=0,ce=u+m*2;F<ce;F++){const ke=H*F,we=H*(F+1),R=ee+Ae+ke,b=ee+ie+ke,V=ee+ie+we,j=ee+Ae+we;Ue(R,b,V,j)}}}function oe(ne,ee,P){l.push(ne),l.push(ee),l.push(P)}function Le(ne,ee,P){ze(ne),ze(ee),ze(P);const Ae=r.length/3,ie=y.generateTopUV(n,r,Ae-3,Ae-2,Ae-1);Xe(ie[0]),Xe(ie[1]),Xe(ie[2])}function Ue(ne,ee,P,Ae){ze(ne),ze(ee),ze(Ae),ze(ee),ze(P),ze(Ae);const ie=r.length/3,F=y.generateSideWallUV(n,r,ie-6,ie-3,ie-2,ie-1);Xe(F[0]),Xe(F[1]),Xe(F[3]),Xe(F[1]),Xe(F[2]),Xe(F[3])}function ze(ne){r.push(l[ne*3+0]),r.push(l[ne*3+1]),r.push(l[ne*3+2])}function Xe(ne){s.push(ne.x),s.push(ne.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return ME(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,a=e.shapes.length;s<a;s++){const o=t[e.shapes[s]];n.push(o)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new hc[r.type]().fromJSON(r)),new As(n,e.options)}}const yE={generateTopUV:function(i,e,t,n,r){const s=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[r*3],u=e[r*3+1];return[new me(s,a),new me(o,l),new me(c,u)]},generateSideWallUV:function(i,e,t,n,r,s){const a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],h=e[n*3+2],d=e[r*3],f=e[r*3+1],g=e[r*3+2],_=e[s*3],m=e[s*3+1],p=e[s*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new me(a,1-l),new me(c,1-h),new me(d,1-g),new me(_,1-p)]:[new me(o,1-l),new me(u,1-h),new me(f,1-g),new me(m,1-p)]}};function ME(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){const s=i[n];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Kt extends _n{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],h=new I,d=new I,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const y=[],x=p/n;let v=0;p===0&&a===0?v=.5/t:p===n&&l===Math.PI&&(v=-.5/t);for(let A=0;A<=t;A++){const w=A/t;h.x=-e*Math.cos(r+w*s)*Math.sin(a+x*o),h.y=e*Math.cos(a+x*o),h.z=e*Math.sin(r+w*s)*Math.sin(a+x*o),g.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),m.push(w+v,1-x),y.push(c++)}u.push(y)}for(let p=0;p<n;p++)for(let y=0;y<t;y++){const x=u[p][y+1],v=u[p][y],A=u[p+1][y],w=u[p+1][y+1];(p!==0||a>0)&&f.push(x,v,w),(p!==n-1||l<Math.PI)&&f.push(v,A,w)}this.setIndex(f),this.setAttribute("position",new bt(g,3)),this.setAttribute("normal",new bt(_,3)),this.setAttribute("uv",new bt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kt(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class pn extends _n{constructor(e=1,t=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);const a=[],o=[],l=[],c=[],u=new I,h=new I,d=new I;for(let f=0;f<=n;f++)for(let g=0;g<=r;g++){const _=g/r*s,m=f/n*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(_),h.y=(e+t*Math.cos(m))*Math.sin(_),h.z=t*Math.sin(m),o.push(h.x,h.y,h.z),u.x=e*Math.cos(_),u.y=e*Math.sin(_),d.subVectors(h,u).normalize(),l.push(d.x,d.y,d.z),c.push(g/r),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=r;g++){const _=(r+1)*f+g-1,m=(r+1)*(f-1)+g-1,p=(r+1)*(f-1)+g,y=(r+1)*f+g;a.push(_,m,y),a.push(m,p,y)}this.setIndex(a),this.setAttribute("position",new bt(o,3)),this.setAttribute("normal",new bt(l,3)),this.setAttribute("uv",new bt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pn(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Ff extends _n{constructor(e=1,t=.4,n=64,r=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:r,p:s,q:a},n=Math.floor(n),r=Math.floor(r);const o=[],l=[],c=[],u=[],h=new I,d=new I,f=new I,g=new I,_=new I,m=new I,p=new I;for(let x=0;x<=n;++x){const v=x/n*s*Math.PI*2;y(v,s,a,e,f),y(v+.01,s,a,e,g),m.subVectors(g,f),p.addVectors(g,f),_.crossVectors(m,p),p.crossVectors(_,m),_.normalize(),p.normalize();for(let A=0;A<=r;++A){const w=A/r*Math.PI*2,E=-t*Math.cos(w),C=t*Math.sin(w);h.x=f.x+(E*p.x+C*_.x),h.y=f.y+(E*p.y+C*_.y),h.z=f.z+(E*p.z+C*_.z),l.push(h.x,h.y,h.z),d.subVectors(h,f).normalize(),c.push(d.x,d.y,d.z),u.push(x/n),u.push(A/r)}}for(let x=1;x<=n;x++)for(let v=1;v<=r;v++){const A=(r+1)*(x-1)+(v-1),w=(r+1)*x+(v-1),E=(r+1)*x+v,C=(r+1)*(x-1)+v;o.push(A,w,C),o.push(w,E,C)}this.setIndex(o),this.setAttribute("position",new bt(l,3)),this.setAttribute("normal",new bt(c,3)),this.setAttribute("uv",new bt(u,2));function y(x,v,A,w,E){const C=Math.cos(x),S=Math.sin(x),M=A/v*x,L=Math.cos(M);E.x=w*(2+L)*.5*C,E.y=w*(2+L)*S*.5,E.z=w*Math.sin(M)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ff(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class kf extends _n{constructor(e=new lg(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),t=64,n=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:s};const a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new I,l=new I,c=new me;let u=new I;const h=[],d=[],f=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new bt(h,3)),this.setAttribute("normal",new bt(d,3)),this.setAttribute("uv",new bt(f,2));function _(){for(let x=0;x<t;x++)m(x);m(s===!1?t:0),y(),p()}function m(x){u=e.getPointAt(x/t,u);const v=a.normals[x],A=a.binormals[x];for(let w=0;w<=r;w++){const E=w/r*Math.PI*2,C=Math.sin(E),S=-Math.cos(E);l.x=S*v.x+C*A.x,l.y=S*v.y+C*A.y,l.z=S*v.z+C*A.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=u.x+n*l.x,o.y=u.y+n*l.y,o.z=u.z+n*l.z,h.push(o.x,o.y,o.z)}}function p(){for(let x=1;x<=t;x++)for(let v=1;v<=r;v++){const A=(r+1)*(x-1)+(v-1),w=(r+1)*x+(v-1),E=(r+1)*x+v,C=(r+1)*(x-1)+v;g.push(A,w,C),g.push(w,E,C)}}function y(){for(let x=0;x<=t;x++)for(let v=0;v<=r;v++)c.x=x/t,c.y=v/r,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new kf(new hc[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class fc extends Ua{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new nt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=F0,this.normalScale=new me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ri extends fc{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new me(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return an(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new nt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new nt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new nt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class zf extends mn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new nt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class SE extends zf{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(mn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new nt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Au=new Ot,kp=new I,zp=new I;class dg{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new me(512,512),this.map=null,this.mapPass=null,this.matrix=new Ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Df,this._frameExtents=new me(1,1),this._viewportCount=1,this._viewports=[new wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;kp.setFromMatrixPosition(e.matrixWorld),t.position.copy(kp),zp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(zp),t.updateMatrixWorld(),Au.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Au),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Au)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Bp=new Ot,Za=new I,Cu=new I;class bE extends dg{constructor(){super(new Nn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new me(4,2),this._viewportCount=6,this._viewports=[new wt(2,1,1,1),new wt(0,1,1,1),new wt(3,1,1,1),new wt(1,1,1,1),new wt(3,0,1,1),new wt(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Za.setFromMatrixPosition(e.matrixWorld),n.position.copy(Za),Cu.copy(n.position),Cu.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Cu),n.updateMatrixWorld(),r.makeTranslation(-Za.x,-Za.y,-Za.z),Bp.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bp)}}class pg extends zf{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new bE}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class EE extends dg{constructor(){super(new J0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Hp extends zf{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(mn.DEFAULT_UP),this.updateMatrix(),this.target=new mn,this.shadow=new EE}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class mg{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Vp(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Vp();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Vp(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ef}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ef);class wE extends bc{constructor(){super();const e=new pr;e.deleteAttribute("uv");const t=new fc({side:zn}),n=new fc,r=new pg(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);const s=new Ft(e,t);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);const a=new Ft(e,n);a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),this.add(a);const o=new Ft(e,n);o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),this.add(o);const l=new Ft(e,n);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);const c=new Ft(e,n);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);const u=new Ft(e,n);u.position.set(2.291,-.756,-2.621),u.rotation.set(0,-.286,0),u.scale.set(1.546,1.552,1.496),this.add(u);const h=new Ft(e,n);h.position.set(-2.193,-.369,-5.547),h.rotation.set(0,.516,0),h.scale.set(3.875,3.487,2.986),this.add(h);const d=new Ft(e,Js(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);const f=new Ft(e,Js(50));f.position.set(-16.109,18.021,-8.207),f.scale.set(.1,2.425,2.751),this.add(f);const g=new Ft(e,Js(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);const _=new Ft(e,Js(43));_.position.set(-.462,8.89,14.52),_.scale.set(4.38,5.441,.088),this.add(_);const m=new Ft(e,Js(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);const p=new Ft(e,Js(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function Js(i){const e=new Ds;return e.color.setScalar(i),e}const Ru=new Map;function xi(i=1){let e=i>>>0||1;return()=>(e=Math.imul(e,1664525)+1013904223>>>0)/4294967296}function Xo(i,e,t,{repeat:n,srgb:r=!0}={}){if(Ru.has(i))return Ru.get(i);const s=document.createElement("canvas");s.width=s.height=e;const a=s.getContext("2d");t(a,e);const o=new Xb(s);return r&&(o.colorSpace=Gn),o.anisotropy=4,n&&(o.wrapS=o.wrapT=lc,o.repeat.set(n[0],n[1])),Ru.set(i,o),o}function Yt(i="speck",{n:e=5e3,dark:t=.18,light:n=.12,bands:r=0,size:s=256,fine:a=!1}={}){return Xo("speckle:"+i,s,(o,l)=>{const c=xi(i.length*977+e);o.fillStyle="#f2f2f2",o.fillRect(0,0,l,l);for(let u=0;u<r;u++){const h=c()*l;o.fillStyle=`rgba(0,0,0,${.03+c()*.06})`,o.fillRect(0,h,l,1+c()*2)}for(let u=0;u<e;u++){const h=c()*l,d=c()*l,f=a?.3+c()*.6:.4+c()*1.4;o.fillStyle=c()>.5?`rgba(0,0,0,${c()*t})`:`rgba(255,255,255,${c()*n})`,o.beginPath(),o.arc(h,d,f,0,Math.PI*2),o.fill()}},{repeat:[1,1]})}function Bf(){return Xo("chai-surface",256,(i,e)=>{const t=e/2,n=i.createRadialGradient(t,t,0,t,t,t);n.addColorStop(0,"#ffffff"),n.addColorStop(.55,"#f1f1f1"),n.addColorStop(.82,"#d9d9d9"),n.addColorStop(.93,"#ffffff"),n.addColorStop(1,"#bdbdbd"),i.fillStyle=n,i.fillRect(0,0,e,e);const r=xi(7);i.strokeStyle="rgba(255,255,255,0.35)",i.lineWidth=3;for(let s=0;s<5;s++){i.beginPath();const a=30+s*18;i.arc(t,t,a,r()*6,r()*6+2.4),i.stroke()}for(let s=0;s<160;s++){const a=r()*Math.PI*2,o=t*(.8+r()*.16);i.fillStyle=`rgba(255,255,255,${.3+r()*.5})`,i.beginPath(),i.arc(t+Math.cos(a)*o,t+Math.sin(a)*o,.8+r()*2.2,0,Math.PI*2),i.fill()}})}function TE({color:i="#2a1408",art:e=null,crema:t=!1,cocoa:n=!1,foamColor:r=null}={}){const s=["coffee",i,e,t,n,r].join("|");return Xo(s,512,(a,o)=>{const l=o/2,c=xi(i.length*31+(e?e.length:3));if(a.fillStyle=i,a.fillRect(0,0,o,o),t||r){const u=r||"#b0743a",h=a.createRadialGradient(l,l,0,l,l,l);h.addColorStop(0,Pu(u,.12)),h.addColorStop(.7,u),h.addColorStop(.95,Pu(u,-.35)),h.addColorStop(1,Pu(u,-.5)),a.fillStyle=h,a.fillRect(0,0,o,o);for(let d=0;d<1400;d++){const f=c()*Math.PI*2,g=Math.sqrt(c())*l;a.fillStyle=c()>.5?"rgba(60,25,8,0.25)":"rgba(255,220,170,0.18)",a.beginPath(),a.arc(l+Math.cos(f)*g,l+Math.sin(f)*g,.6+c()*1.8,0,Math.PI*2),a.fill()}a.strokeStyle="rgba(70,30,10,0.18)",a.lineWidth=6;for(let d=0;d<6;d++)a.beginPath(),a.arc(l,l,40+d*32+c()*10,c()*6,c()*6+1.5),a.stroke()}else{const u=a.createRadialGradient(l,l,l*.5,l,l,l);u.addColorStop(0,"rgba(0,0,0,0)"),u.addColorStop(1,"rgba(0,0,0,0.45)"),a.fillStyle=u,a.fillRect(0,0,o,o)}if(e){const u=a.createRadialGradient(l,l,l*.62,l,l,l);u.addColorStop(0,"rgba(0,0,0,0)"),u.addColorStop(1,"rgba(70,30,10,0.55)"),a.fillStyle=u,a.fillRect(0,0,o,o),a.fillStyle="#f7efe3",a.shadowColor="rgba(255,240,220,0.8)",a.shadowBlur=8,e==="heart"?AE(a,l,l+18,150):e==="rosetta"?CE(a,l,l):e==="dot"&&(a.beginPath(),a.arc(l,l,85,0,Math.PI*2),a.fill()),a.shadowBlur=0}if(n)for(let u=0;u<2500;u++){const h=c()*Math.PI*2,d=Math.sqrt(c())*l*.85;a.fillStyle=`rgba(55,25,10,${.2+c()*.4})`,a.fillRect(l+Math.cos(h)*d,l+Math.sin(h)*d,1.5,1.5)}})}function AE(i,e,t,n){i.beginPath(),i.moveTo(e,t+n*.55),i.bezierCurveTo(e-n*1.1,t-n*.15,e-n*.55,t-n*.95,e,t-n*.42),i.bezierCurveTo(e+n*.55,t-n*.95,e+n*1.1,t-n*.15,e,t+n*.55),i.fill(),i.fillRect(e-3,t-n*.6,6,n*1.3)}function CE(i,e,t){for(let n=0;n<7;n++){const r=t+150-n*40,s=150-n*17;i.beginPath(),i.ellipse(e,r,s,24,0,Math.PI,0,!1),i.ellipse(e,r+10,s*.85,12,0,0,Math.PI,!1),i.fill()}i.beginPath(),i.arc(e,t-140,24,0,Math.PI*2),i.fill(),i.fillRect(e-3,t-150,6,330)}function RE(i="#f3c96b"){return Xo("cheese:"+i,512,(e,t)=>{const n=xi(42);e.fillStyle=i,e.fillRect(0,0,t,t);for(let r=0;r<60;r++){const s=n()*t,a=n()*t,o=15+n()*45,l=e.createRadialGradient(s,a,0,s,a,o);l.addColorStop(0,"rgba(255,245,200,0.55)"),l.addColorStop(1,"rgba(255,245,200,0)"),e.fillStyle=l,e.fillRect(s-o,a-o,o*2,o*2)}for(let r=0;r<70;r++){const s=n()*t,a=n()*t,o=4+n()*16,l=e.createRadialGradient(s,a,0,s,a,o);l.addColorStop(0,"rgba(170,90,20,0.7)"),l.addColorStop(1,"rgba(170,90,20,0)"),e.fillStyle=l,e.fillRect(s-o,a-o,o*2,o*2)}for(let r=0;r<400;r++)e.fillStyle="rgba(60,110,40,0.5)",e.fillRect(n()*t,n()*t,2,2)},{repeat:[.38,.38]})}function Hf(){return Xo("softdot",64,(i,e)=>{const t=i.createRadialGradient(e/2,e/2,0,e/2,e/2,e/2);t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.2,"rgba(255,255,255,0.7)"),t.addColorStop(.45,"rgba(255,255,255,0.28)"),t.addColorStop(.7,"rgba(255,255,255,0.08)"),t.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=t,i.fillRect(0,0,e,e)},{srgb:!1})}function Pu(i,e){const t=new nt(i);return e>0?t.lerp(new nt("#ffffff"),e):t.lerp(new nt("#000000"),-e),"#"+t.getHexString()}function Vf(i,e={}){const t=new Gb({canvas:i,antialias:!0,alpha:!0,powerPreference:"high-performance",...e});return t.setPixelRatio(Math.min(window.devicePixelRatio||1,e.maxDpr||2)),t.toneMapping=w0,t.toneMappingExposure=1.05,t.outputColorSpace=Gn,t.shadowMap.enabled=!0,t.shadowMap.type=b0,t}function Gf(i,e,{shadowSize:t=1024,bounds:n=4}={}){const r=new Gh(e);i.environment=r.fromScene(new wE,.04).texture,i.environmentIntensity=.55,r.dispose(),i.add(new SE("#ffe9cc","#2a1a10",.7));const s=new Hp("#ffd9ae",2.6);s.position.set(4,7,6),s.castShadow=!0,s.shadow.mapSize.set(t,t),Object.assign(s.shadow.camera,{left:-n*1.6,right:n*1.6,top:n,bottom:-n,near:.5,far:30}),s.shadow.bias=-4e-4,s.shadow.normalBias=.02,i.add(s);const a=new Hp("#f0a443",3.2);a.position.set(-6,3,-5),i.add(a);const o=new pg("#ffb36b",12,20,2);return o.position.set(-3,-1,5),i.add(o),{key:s,rim:a,fill:o}}function Wf(i=2,e=.4){const t=new Ft(new Na(i,i).rotateX(-Math.PI/2),new Ds({color:"#000000",alphaMap:Hf(),transparent:!0,opacity:e,depthWrite:!1}));return t.renderOrder=-1,t}const Ka=new I;function ci(i,e,t,n,r,s){const a=2*Math.PI*r/4,o=Math.max(s-2*r,0),l=Math.PI/4;Ka.copy(e),Ka[n]=0,Ka.normalize();const c=.5*a/(a+o),u=1-Ka.angleTo(i)/l;return Math.sign(Ka[t])===1?u*c:o/(a+o)+c+c*(1-u)}class Li extends pr{constructor(e=1,t=1,n=1,r=2,s=.1){if(r=r*2+1,s=Math.min(e/2,t/2,n/2,s),super(1,1,1,r,r,r),r===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const o=new I,l=new I,c=new I(e,t,n).divideScalar(2).subScalar(s),u=this.attributes.position.array,h=this.attributes.normal.array,d=this.attributes.uv.array,f=u.length/6,g=new I,_=.5/r;for(let m=0,p=0;m<u.length;m+=3,p+=2)switch(o.fromArray(u,m),l.copy(o),l.x-=Math.sign(l.x)*_,l.y-=Math.sign(l.y)*_,l.z-=Math.sign(l.z)*_,l.normalize(),u[m+0]=c.x*Math.sign(o.x)+l.x*s,u[m+1]=c.y*Math.sign(o.y)+l.y*s,u[m+2]=c.z*Math.sign(o.z)+l.z*s,h[m+0]=l.x,h[m+1]=l.y,h[m+2]=l.z,Math.floor(m/f)){case 0:g.set(1,0,0),d[p+0]=ci(g,l,"z","y",s,n),d[p+1]=1-ci(g,l,"y","z",s,t);break;case 1:g.set(-1,0,0),d[p+0]=1-ci(g,l,"z","y",s,n),d[p+1]=1-ci(g,l,"y","z",s,t);break;case 2:g.set(0,1,0),d[p+0]=1-ci(g,l,"x","z",s,e),d[p+1]=ci(g,l,"z","x",s,n);break;case 3:g.set(0,-1,0),d[p+0]=1-ci(g,l,"x","z",s,e),d[p+1]=1-ci(g,l,"z","x",s,n);break;case 4:g.set(0,0,1),d[p+0]=1-ci(g,l,"x","y",s,e),d[p+1]=1-ci(g,l,"y","x",s,t);break;case 5:g.set(0,0,-1),d[p+0]=ci(g,l,"x","y",s,e),d[p+1]=1-ci(g,l,"y","x",s,t);break}}}const En=Math.PI*2,PE=i=>i.map(([e,t])=>new me(e,t)),Ac=.95,xe=(i,e={})=>new fc({color:i,roughness:.6,metalness:0,...e}),Gp={bands:70,n:9e3,dark:.09,light:.08,fine:!0},LE=()=>xe("#b9582d",{roughness:.88,map:Yt("clay",Gp),bumpMap:Yt("clay",Gp),bumpScale:.8}),Fa=(i="#f5f1ea")=>new Ri({color:i,roughness:.22,clearcoat:.8,clearcoatRoughness:.12}),Zh=(i="#cfd3d6",e=.28)=>xe(i,{metalness:1,roughness:e}),Gr=()=>new Ri({color:"#ffffff",roughness:.04,metalness:0,transparent:!0,opacity:.2,clearcoat:1,clearcoatRoughness:.03,side:dn,depthWrite:!1,envMapIntensity:1.6}),zo=i=>xe(i,{roughness:.62,map:Yt("bread",{n:3e3,dark:.1}),bumpMap:Yt("bread",{n:3e3,dark:.1}),bumpScale:1.5});function K(i,e,{x:t=0,y:n=0,z:r=0,rx:s=0,ry:a=0,rz:o=0,s:l=1,shadow:c=!0}={}){const u=new Ft(i,e);return u.position.set(t,n,r),u.rotation.set(s,a,o),l!==1&&(typeof l=="number"?u.scale.setScalar(l):u.scale.set(...l)),u.castShadow=c,u.receiveShadow=!0,u}const Jt=(i,e=72)=>new Ec(PE(i),e),Xi=(i,e=64)=>new wc(i,e).rotateX(-Math.PI/2);function ka(i,e,t=1,n=3){const r=i.attributes.position,s=new I;for(let a=0;a<r.count;a++){s.fromBufferAttribute(r,a);const o=Math.sin(s.x*n+t)*Math.cos(s.y*n*1.3+t*2)*Math.sin(s.z*n*.9+t*3),l=s.length()||1;s.multiplyScalar(1+o*e/l),r.setXYZ(a,s.x,s.y,s.z)}return i.computeVertexNormals(),i}function za(i=1.4,e="#f4efe6"){const t=Jt([[0,0],[i*.55,0],[i*.6,.03],[i*.66,.07],[i*.95,.12],[i,.17],[i*.98,.19],[i*.9,.15],[i*.6,.1],[0,.1]]),n=new vt;return n.add(K(t,Fa(e))),n.add(K(new pn(i*.985,.012,6,96).rotateX(Math.PI/2),xe("#e2a03c",{metalness:.6,roughness:.3}),{y:.183,shadow:!1})),n}function Kh({liquid:i="#b9773f"}={}){const e=new vt,t=[[0,0],[.5,0],[.56,.03],[.585,.09],[.62,.4],[.7,.9],[.78,1.35],[.84,1.62],[.875,1.69],[.865,1.73],[.82,1.735],[.785,1.67],[.74,1.4],[.68,1],[.6,.5],[.52,.2],[0,.18]];e.add(K(Jt(t,96),LE()));const n=xe("#9c4523",{roughness:.95});[.42,.5].forEach((s,a)=>e.add(K(new pn(.625+a*.012,.012,6,96).rotateX(Math.PI/2),n,{y:s,shadow:!1})));const r=new Ds({color:i,map:Bf(),toneMapped:!1});return r.color.multiplyScalar(Ac),e.add(K(Xi(.768,72),r,{y:1.56,shadow:!1})),e.userData={liquid:r,steam:new I(0,1.62,0),steamR:.5},e}function DE({liquid:i="#a9692f"}={}){const e=new vt,t=Gr();t.flatShading=!0,e.add(K(new ut(.6,.47,1.35,14,1,!0),t,{y:.675,shadow:!1})),e.add(K(new ut(.47,.47,.12,14),t,{y:.06,shadow:!1}));const n=new Ds({color:i,map:Bf(),toneMapped:!1});return n.color.multiplyScalar(Ac),e.add(K(new ut(.535,.455,.75,14),xe(i,{roughness:.3}),{y:.495})),e.add(K(Xi(.535,14),n,{y:.872,shadow:!1})),e.userData={liquid:n,steam:new I(0,.9,0),steamR:.35},e}function IE({liquid:i="#c27a1c"}={}){const e=new vt,t=Gr();e.add(K(new ut(.58,.5,1.5,48,1,!0),t,{y:.75,shadow:!1})),e.add(K(new ut(.5,.5,.1,48),t,{y:.05,shadow:!1})),e.add(K(new pn(.3,.05,12,32,Math.PI*1.2),t,{x:.62,y:.78,rz:-Math.PI*.6,shadow:!1}));const n=new Ri({color:i,roughness:.1,transparent:!0,opacity:.88,emissive:i,emissiveIntensity:.18});return e.add(K(new ut(.55,.49,1.15,48),n,{y:.68})),e.add(K(new ut(.22,.22,.03,24),xe("#f2d24a",{roughness:.4}),{x:.15,y:1.27,z:.1,rx:.1})),e.add(K(new ut(.19,.19,.032,24),xe("#fff1a8",{roughness:.4}),{x:.15,y:1.272,z:.1,rx:.1,shadow:!1})),e.userData={steam:new I(0,1.3,0),steamR:.4},e}function UE(i=1,e){return K(Jt([[0,0],[.5,0],[.55,.03],[.6,.05],[1.05,.1],[1.2,.16],[1.22,.19],[1.18,.19],[1,.14],[.62,.1],[.55,.09],[0,.09]]),e?new Ri({color:e,roughness:.3,clearcoat:.9}):Fa(),{s:i})}function gg({style:i="cup",liquid:e="#2a1408",art:t=null,crema:n=!1,cocoa:r=!1,foamColor:s=null,layers:a=null,small:o=!1,foam:l=null,cream:c=!1,noIce:u=!1}={}){const h=new vt,d=()=>xe("#ffffff",{roughness:.3,map:TE({color:e,art:t,crema:n,cocoa:r,foamColor:s})});if(i==="cup"||i==="espresso"){const f=i==="espresso",g=f?.72:1,_=f?.065:.09;h.add(UE(g,f?"#2b2522":void 0));const m=new vt;m.position.y=_;const p=f?[[0,0],[.3,0],[.34,.04],[.4,.2],[.44,.5],[.46,.75],[.465,.8],[.425,.8],[.41,.6],[.37,.3],[.28,.14],[0,.12]]:[[0,0],[.32,0],[.36,.03],[.38,.08],[.5,.3],[.62,.62],[.69,.9],[.72,1.04],[.725,1.08],[.69,1.08],[.67,1],[.6,.7],[.48,.36],[.35,.16],[0,.13]],y=f?new Ri({color:"#2b2522",roughness:.3,clearcoat:.9,clearcoatRoughness:.1}):Fa();m.add(K(Jt(p),y));const x=f?.8:1.08,v=f?.445:.707;m.add(K(new pn(v,.018,8,96).rotateX(Math.PI/2),xe("#e2a03c",{metalness:.7,roughness:.25}),{y:x,shadow:!1}));const A=f?.14:.22;return m.add(K(new pn(A,f?.04:.05,14,40,Math.PI*1.25),y,{x:f?.48:.68,y:f?.45:.6,rz:-Math.PI*.625})),m.add(K(Xi(f?.42:.66),d(),{y:f?.7:.95,shadow:!1})),h.add(m),h.userData={steam:new I(0,(f?.75:1)+_,0),steamR:f?.3:.45},h}if(i==="mug"){const f=new Ri({color:"#2b2522",roughness:.45,clearcoat:.5});return h.add(K(Jt([[0,0],[.5,0],[.55,.04],[.56,.1],[.58,1.3],[.585,1.36],[.545,1.36],[.535,1.2],[.51,.15],[0,.12]]),f)),h.add(K(new pn(.3,.07,14,40,Math.PI*1.15),f,{x:.6,y:.72,rz:-Math.PI*.575})),h.add(K(new pn(.565,.025,8,96).rotateX(Math.PI/2),xe("#e2a03c",{metalness:.7,roughness:.25}),{y:1.05,shadow:!1})),h.add(K(Xi(.536),d(),{y:1.22,shadow:!1})),h.userData={steam:new I(0,1.3,0),steamR:.4},h}if(i==="latte-glass"){const f=o?.95:1.45,g=.46,_=o?.52:.56,m=Gr();h.add(K(new ut(_,g,f,48,1,!0),m,{y:f/2,shadow:!1})),h.add(K(new ut(g,g,.1,48),m,{y:.05,shadow:!1}));const p=a||["#3b1d0e",e,"#f3e6d4"],y=f*.86,x=.1,v=p.length===4?[.18,.5,.17,.15]:p.length===2?[.5,.5]:[.2,.62,.18];let A=x;return p.forEach((w,E)=>{const C=y*v[E]*((y-x+.1)/y),S=g+(_-g)*(A/f)-.025,M=g+(_-g)*((A+C)/f)-.025;h.add(K(new ut(M,S,C,48),xe(w,{roughness:.35}),{y:A+C/2})),A+=C}),h.userData={steam:new I(0,A+.05,0),steamR:.4},h}if(i==="iced"){const m=Gr();h.add(K(new ut(.56,.44,2,48,1,!0),m,{y:2/2,shadow:!1})),h.add(K(new ut(.44,.44,.12,48),m,{y:.06,shadow:!1}));const p=c?1.55:1.7,y=a||[e];let x=.12;const v=(p-x)/y.length;if(y.forEach(A=>{const w=.44+.12000000000000005*(x/2)-.025,E=.44+(.56-.44)*((x+v)/2)-.025;h.add(K(new ut(E,w,v,48),new Ri({color:A,roughness:.2,transparent:!0,opacity:.94}),{y:x+v/2})),x+=v}),l&&h.add(K(new ut(.535,.525,.22,48),xe(l,{roughness:.8}),{y:p+.1})),!u){const A=new Ri({color:"#e9f6fa",roughness:.12,transparent:!0,opacity:.5,clearcoat:1}),w=xi(9);for(let E=0;E<6;E++){const C=w()*En,S=.12+w()*.2;h.add(K(new Li(.3,.3,.3,2,.05),A,{x:Math.cos(C)*S,y:p-.35+w()*.45,z:Math.sin(C)*S,rx:w()*3,ry:w()*3,rz:w()*3}))}}if(c){const A=xe("#fbf6ee",{roughness:.75});for(let w=0;w<4;w++){const E=.52-w*.12;h.add(K(new Kt(E,32,16,0,En,0,Math.PI/2),A,{y:p+w*.14,s:[1,.55,1]}))}h.add(K(new Ff(.25,.025,80,6,2,5),xe("#7a3e18",{roughness:.3}),{y:p+.3,rx:Math.PI/2,s:[1,1,.3]}))}return h.add(K(new ut(.035,.035,2,12),xe("#e2a03c",{roughness:.35}),{x:.18,y:1.55,z:-.05,rz:-.22})),h.userData={steam:null},h}return h}function NE({liquid:i="#4a200c"}={}){const e=new vt,t=Gr();e.add(K(Jt([[0,0],[.55,0],[.7,.2],[.75,.5],[.68,.85],[.42,1.1],[.38,1.2],[.42,1.25]]),t,{shadow:!1})),e.add(K(Jt([[0,.02],[.53,.02],[.67,.2],[.71,.5],[0,.5]]),new Ri({color:i,roughness:.15,transparent:!0,opacity:.92}))),e.add(K(new ut(.47,.5,.18,48,1,!0),xe("#8a5a33",{roughness:.7,side:dn}),{y:.97}));const n=Fa("#e8a33d");return e.add(K(Jt([[.3,0],[.38,.02],[.82,.62],[.8,.66],[.7,.62],[.26,.06]]),n,{y:1.25})),e.add(K(new ut(.6,.6,.04,48),n,{y:1.24})),e.add(K(Xi(.68),xe("#3a1a0b",{roughness:.9,map:Yt("grounds",{n:3e3,dark:.4})}),{y:1.75,shadow:!1})),e.userData={steam:new I(0,1.85,0),steamR:.45},e}function OE({liquid:i="#51230e"}={}){const e=new vt,t=Gr(),n=[[0,0],[.5,0],[.7,.15],[.78,.45],[.6,.85],[.28,1.15],[.28,1.25],[.62,1.6],[.82,2.1],[.85,2.2]];return e.add(K(Jt(n),t,{shadow:!1})),e.add(K(Jt([[0,.03],[.48,.03],[.67,.16],[.74,.42],[.66,.6],[0,.6]]),new Ri({color:i,roughness:.12,transparent:!0,opacity:.93}))),e.add(K(Jt([[.3,.9],[.52,.95],[.48,1.3],[.3,1.32]]),xe("#a26b3c",{roughness:.65,map:Yt("wood",{bands:120,n:400})}))),e.add(K(new pn(.43,.03,8,48).rotateX(Math.PI/2),xe("#4a2a17",{roughness:.8}),{y:1.12})),e.add(K(new Kt(.07,16,16),xe("#3b2416"),{x:.47,y:1.1})),e.add(K(new Ra(.75,.9,6,1,!0),xe("#f7f3ea",{roughness:1,side:dn,flatShading:!0}),{y:1.75,rx:Math.PI})),e.userData={steam:new I(0,2.2,0),steamR:.45},e}function FE({liquid:i="#2c1409"}={}){const e=new vt,t=Gr();e.add(K(new ut(.55,.55,1.8,48,1,!0),t,{y:1,shadow:!1})),e.add(K(new ut(.535,.535,1.25,48),new Ri({color:i,roughness:.2,transparent:!0,opacity:.95}),{y:.75})),e.add(K(new ut(.535,.535,.08,48),xe("#9a6a3a",{roughness:.9}),{y:1.4}));const n=Zh();return e.add(K(new ut(.62,.62,.12,48),n,{y:.06})),[.3,1,1.7].forEach(r=>e.add(K(new pn(.57,.025,8,64).rotateX(Math.PI/2),n,{y:r}))),e.add(K(new ut(.6,.58,.16,48),n,{y:1.95})),e.add(K(new ut(.03,.03,.5,12),n,{y:2.2})),e.add(K(new Kt(.11,24,16),xe("#1d1a18",{roughness:.4}),{y:2.48})),e.add(K(new ut(.53,.53,.03,48),Zh("#a9adb0",.5),{y:1.55})),e.add(K(new pn(.4,.07,14,40,Math.PI),xe("#1d1a18",{roughness:.5}),{x:.6,y:1,rz:-Math.PI/2})),e.userData={steam:null},e}function kE(){const i=new vt,e=xe("#bfc3c6",{metalness:1,roughness:.38,flatShading:!0});i.add(K(new ut(.5,.62,.9,8),e,{y:.45})),i.add(K(new ut(.47,.5,.12,8),e,{y:.96})),i.add(K(new ut(.62,.48,.95,8),e,{y:1.5})),i.add(K(new Ra(.64,.25,8),e,{y:2.1})),i.add(K(new Kt(.09,16,12),xe("#1c1a19",{roughness:.5}),{y:2.27})),i.add(K(new Ra(.16,.35,8,1,!0),e,{x:-.62,y:1.9,rz:Math.PI/2.8}));const t=xe("#1c1a19",{roughness:.5});return i.add(K(new Li(.55,.14,.14,3,.05),t,{x:.85,y:1.8,rz:-.25})),i.add(K(new Li(.14,.75,.14,3,.05),t,{x:1.05,y:1.35,rz:.15})),i.userData={steam:new I(-.75,1.95,0),steamR:.15},i}function zE({liquid:i="#b9824f"}={}){const e=new vt,t=Zh("#d9dcdf",.2);e.add(K(Jt([[0,0],[.7,0],[.9,.08],[1.05,.35],[1.1,.5],[1.06,.52],[1,.38],[.85,.12],[0,.1]]),t));const n=new vt;return n.position.y=.1,n.add(K(Jt([[0,0],[.42,0],[.45,.06],[.48,.6],[.58,1.3],[.62,1.38],[.57,1.38],[.53,1.3],[.43,.6],[0,.55]]),t)),n.add(K(Xi(.55),new Ds({color:new nt(i).multiplyScalar(Ac),map:Bf(),toneMapped:!1}),{y:1.27,shadow:!1})),n.add(K(new Kt(.55,32,12,0,En,0,Math.PI/2),xe("#ead7bd",{roughness:.95}),{y:1.26,s:[1,.25,1]})),e.add(n),e.userData={steam:new I(0,1.5,0),steamR:.4},e}function BE(){const i=new vt,e=Gr();return i.add(K(Jt([[0,0],[.4,0],[.42,.05],[.25,.12],[.2,.3],[.65,.55],[.85,.95],[.88,1.05]]),e,{shadow:!1})),i.add(K(Jt([[0,.31],[.22,.31],[.62,.56],[.74,.75],[0,.75]]),xe("#3b1d0e",{roughness:.15}))),i.add(K(ka(new Kt(.48,48,32),.05,2,7),xe("#f6ead0",{roughness:.85}),{y:.95})),i.add(K(new Kt(.49,48,16,0,En,Math.PI*.62,Math.PI*.38),xe("#4a2512",{roughness:.12}),{y:.95})),i.add(K(new Li(.9,.18,.28,3,.06),zo("#d39a54"),{x:.35,y:1.25,z:.15,rz:-.6,ry:.4})),i.userData={steam:null},i}const HE={pepperoni:()=>K(new ut(.17,.16,.035,24),xe("#a3261b",{roughness:.45,map:Yt("pep",{n:600,dark:.5})})),basil:()=>{const i=new Pa;return i.moveTo(0,-.15),i.quadraticCurveTo(.12,0,0,.17),i.quadraticCurveTo(-.12,0,0,-.15),K(new As(i,{depth:.01,bevelEnabled:!1}).rotateX(-Math.PI/2),xe("#2f7a2f",{roughness:.5}))},olive:()=>K(new pn(.055,.03,8,16).rotateX(Math.PI/2),xe("#161414",{roughness:.3})),capsicum:()=>K(new pn(.1,.025,6,16,Math.PI*1.3).rotateX(Math.PI/2),xe("#3f9a3a",{roughness:.35})),onion:()=>K(new pn(.12,.016,6,20,Math.PI).rotateX(Math.PI/2),xe("#a2578f",{roughness:.4})),corn:()=>K(new Kt(.04,10,8),xe("#f2c230",{roughness:.4}),{s:[1,.8,1.2]}),jalapeno:()=>K(new pn(.07,.028,8,16).rotateX(Math.PI/2),xe("#4caf50",{roughness:.4})),paneer:()=>K(new Li(.17,.1,.17,2,.025),xe("#f3e2bf",{roughness:.8,map:Yt("char",{n:300,dark:.7})})),chicken:()=>K(ka(new Li(.17,.09,.14,2,.03),.02,3,30),xe("#b5652e",{roughness:.7})),mushroom:()=>{const i=new Pa;return i.absarc(0,.04,.09,0,Math.PI,!1),i.lineTo(-.03,.04),i.lineTo(-.03,-.08),i.lineTo(.03,-.08),i.lineTo(.03,.04),i.lineTo(.09,.04),K(new As(i,{depth:.02,bevelEnabled:!1}).rotateX(-Math.PI/2),xe("#cdb69a",{roughness:.6}))}};function Eo(i,e,t,n,r=0){const s=new Pa;return s.moveTo(0,0),s.lineTo(Math.cos(e)*i,Math.sin(e)*i),s.absarc(0,0,i,e,t,!1),s.lineTo(0,0),new As(s,{depth:n,curveSegments:48,bevelEnabled:r>0,bevelSize:r,bevelThickness:r,bevelSegments:3}).rotateX(-Math.PI/2)}function _g({toppings:i=["basil"],sauce:e="#c0391b",cheese:t="#f3c96b"}={}){const n=new vt,r=1.3,s=Math.PI/4,a=zo("#e3b26f"),o=zo("#c98a43"),l=xe(e,{roughness:.45}),c=xe("#ffffff",{roughness:.5,map:RE(t)}),u=(p,y)=>{const x=new vt;x.add(K(Eo(r-.04,p,y,.08,.04),a)),x.add(K(Eo(r-.12,p,y,.02),l,{y:.12})),x.add(K(Eo(r-.16,p,y,.025),c,{y:.14}));const v=new pn(r-.06,.11,14,96,y-p).rotateX(-Math.PI/2);return x.add(K(v,o,{y:.12,ry:p})),[p,y].forEach(A=>x.add(K(new Kt(.11,14,10),o,{x:Math.cos(A)*(r-.06),y:.12,z:-Math.sin(A)*(r-.06)}))),x},h=u(s,En),d=u(0,s),f=xi(i.join("").length*13+5),g=i.length?i:[],_=g.length?34:0;for(let p=0;p<_;p++){const y=f()*En,x=.18+Math.sqrt(f())*(r-.42);if(Math.min(Math.abs(y)*x,Math.abs(y-s)*x,Math.abs(En-y)*x)<.13)continue;const A=HE[g[p%g.length]]();A.position.set(Math.cos(y)*x,.18,-Math.sin(y)*x),A.rotation.y=f()*En,(y<s?d:h).add(A)}n.add(h,d);const m=new I(Math.cos(s/2),0,-Math.sin(s/2));return d.position.copy(m.clone().multiplyScalar(.12)),n.userData={slice:d,sliceDir:m,steam:null,tilt:.75},n}function vg({patty:i="veg",cheese:e=!0,double:t=!1,tomato:n=!0}={}){const r=new vt,s=zo("#c98b45");let a=0;r.add(K(Jt([[0,0],[.85,0],[.98,.05],[1.03,.15],[1.02,.25],[.98,.3]]),s)),r.add(K(Xi(.98),xe("#ecc890",{roughness:.9,map:Yt("crumb",{n:4e3,dark:.15})}),{y:.3,shadow:!1})),a=.3;const o={veg:"#8a5a2b",tikki:"#b5732f",paneer:"#e7c48a",chicken:"#7a4a28",crispy:"#c98b3c"}[i]||"#8a5a2b",l=i==="crispy"||i==="tikki"||i==="paneer",c=()=>{const y=Jt([[0,0],[.95,0],[1.04,.04],[1.08,.14],[1.05,.24],[.96,.28],[0,.28]],64);if(l&&ka(y,.025,4,18),r.add(K(y,xe(o,{roughness:.85,map:Yt("patty"+i,{n:6e3,dark:.45}),bumpMap:Yt("patty"+i,{n:6e3,dark:.45}),bumpScale:3,flatShading:l}),{y:a})),a+=.28,e){const x=new Na(2,2,24,24).rotateX(-Math.PI/2),v=x.attributes.position;for(let A=0;A<v.count;A++){const w=v.getX(A),E=v.getZ(A),C=Math.hypot(w,E);C>.9&&v.setY(A,-Math.pow(C-.9,1.5)*.9)}x.computeVertexNormals(),r.add(K(x,xe("#f4b331",{roughness:.32,side:dn}),{y:a+.01,ry:Math.PI/4+a})),a+=.04}};c(),t&&c();const u=new wc(1.2,120).rotateX(-Math.PI/2),h=u.attributes.position;for(let y=0;y<h.count;y++){const x=h.getX(y),v=h.getZ(y);Math.hypot(x,v)>.5&&h.setY(y,Math.sin(Math.atan2(v,x)*15)*.07-.06)}if(u.computeVertexNormals(),r.add(K(u,xe("#6cb33f",{roughness:.55,side:dn}),{y:a+.02})),a+=.05,n){const y=xe("#d8392b",{roughness:.35});for(let x=0;x<3;x++){const v=x/3*En+.4;r.add(K(new ut(.42,.42,.09,28),y,{x:Math.cos(v)*.48,y:a+.045,z:Math.sin(v)*.48}))}a+=.09}const d=xe("#e6c8e0",{roughness:.4});for(let y=0;y<4;y++){const x=y/4*En;r.add(K(new pn(.3,.035,8,32).rotateX(Math.PI/2),d,{x:Math.cos(x)*.45,y:a+.02,z:Math.sin(x)*.45}))}a+=.03;const f=[[0,0],[1,0]];for(let y=0;y<=18;y++){const x=y/18*(Math.PI/2);f.push([1.06*Math.cos(x),.06+.86*Math.pow(Math.sin(x),.85)])}const g=new vt;g.position.y=a,g.add(K(Jt(f),xe("#cf8a3b",{roughness:.42,map:Yt("bread",{n:3e3,dark:.1})})));const _=xe("#f5e6c0",{roughness:.5}),m=new Kt(.035,8,6),p=xi(77);for(let y=0;y<46;y++){const x=.3+p()*1.15,v=p()*En,A=1.06*Math.cos(x),w=.06+.86*Math.pow(Math.sin(x),.85),E=new I(A*Math.cos(v),w,A*Math.sin(v)),C=K(m,_,{s:[.6,1.4,.35],shadow:!1});C.position.copy(E),C.lookAt(E.clone().multiply(new I(1,1.4,1)).multiplyScalar(2)),C.rotateZ(p()*En),g.add(C)}return r.add(g),r.userData={top:g,topY:a,steam:null,tilt:.25},r}function VE(){const i=za(1.5),e=xe("#d79a46",{roughness:.55,map:Yt("pastry",{n:5e3,dark:.25}),bumpMap:Yt("pastry",{n:5e3,dark:.25}),bumpScale:4}),t=ka(new Ra(.62,1.05,3,6),.04,5,6);i.add(K(t,e,{x:-.4,y:.62,z:.1,ry:.4})),i.add(K(t,e,{x:.42,y:.5,z:-.15,rz:1.1,ry:1.2}));const n=new vt;return n.position.set(.55,.12,.7),n.add(K(Jt([[0,0],[.2,0],[.32,.18],[.34,.22],[.3,.2],[0,.12]]),Fa("#e8a33d"))),n.add(K(Xi(.31),xe("#5a1b10",{roughness:.2}),{y:.18})),i.add(n),i.userData={steam:null},i}function dc(i=!0,e="#d39147"){const t=[[0,0],[.7,0]];for(let n=0;n<=12;n++){const r=n/12*(Math.PI/2);t.push([.72*Math.cos(r),(i?.5:.22)*Math.sin(r)])}return K(Jt(t),zo(e))}function GE(){const i=za(1.35),e=dc(!1);e.position.y=.12,e.rotation.x=Math.PI,e.position.y=.36,i.add(e),i.add(K(ka(new Kt(.62,40,24),.035,3,14),xe("#c9852d",{roughness:.7,flatShading:!0}),{y:.5,s:[1,.55,1]})),i.add(K(Xi(.66),xe("#b8401f",{roughness:.8,map:Yt("chutney",{n:4e3,dark:.5})}),{y:.37,shadow:!1}));const t=dc(!0);return t.position.y=.64,t.rotation.z=.12,i.add(t),i.add(K(new Of(.06,.7,6,12),xe("#3d8a2e",{roughness:.3}),{x:.9,y:.26,z:.35,rz:Math.PI/2,ry:.6})),i.userData={steam:null},i}function WE(){const i=za(1.35),e=dc(!1,"#e0a65c");e.rotation.x=Math.PI,e.position.y=.36,i.add(e),i.add(K(new Li(.9,.12,.9,3,.04),xe("#f6df8a",{roughness:.35}),{y:.42,ry:.4}));const t=dc(!0,"#e0a65c");return t.position.set(.1,.5,.05),t.rotation.z=-.25,i.add(t),i.userData={steam:null},i}function XE(){const i=new vt,e=xe("#c8341f",{roughness:.55,side:dn});i.add(K(new ut(.75,.52,1.2,4,1,!0),e,{y:.6,ry:Math.PI/4})),i.add(K(new ut(.52,.52,.04,4),e,{y:.02,ry:Math.PI/4})),i.add(K(new ut(.69,.66,.12,4,1,!0),xe("#f6efe4",{roughness:.6,side:dn}),{y:.95,ry:Math.PI/4}));const t=xe("#f0c35a",{roughness:.6,map:Yt("peri",{n:900,dark:.6})}),n=xi(3);for(let r=0;r<26;r++){const s=(n()-.5)*.7,a=(n()-.5)*.7;i.add(K(new Li(.1,1.2+n()*.3,.1,1,.02),t,{x:s,y:1.05+n()*.25,z:a,rx:(n()-.5)*.4,rz:(n()-.5)*.4}))}return i.userData={steam:null},i}function YE(){const i=new vt;i.add(K(Jt([[0,0],[.45,0],[.5,.06],[.9,.5],[1.1,.85],[1.12,.9],[1.06,.9],[.86,.55],[.45,.15],[0,.12]]),Fa("#e8a33d"))),i.add(K(Xi(1),xe("#e9b04a",{roughness:.5}),{y:.78,shadow:!1}));const e=xe("#f1c34a",{roughness:.45}),t=xi(11);for(let n=0;n<26;n++){const r=[];let s=t()*En,a=t()*.8;for(let o=0;o<7;o++)r.push(new I(Math.cos(s)*a,.8+t()*.08,Math.sin(s)*a)),s+=(t()-.5)*1.6,a=Math.min(.88,Math.max(.05,a+(t()-.5)*.35));i.add(K(new kf(new rg(r),40,.025,5),e,{shadow:!1}))}for(let n=0;n<14;n++){const r=t()*En,s=t()*.75,a=t()>.5;i.add(K(a?new Kt(.05,10,8):new pr(.08,.08,.08),xe(a?"#5aa33a":"#e86a24",{roughness:.4}),{x:Math.cos(r)*s,y:.88,z:Math.sin(r)*s,ry:t()}))}return i.userData={steam:new I(0,.95,0),steamR:.6},i}function qE(){const i=za(1.4),e=xe("#c9852f",{roughness:.4,map:Yt("bread",{n:3e3,dark:.1})});for(let t=-3;t<=3;t++){const n=t*.32,r=.42-Math.abs(t)*.085;i.add(K(new Kt(1,32,20),e,{x:Math.sin(n)*.75,y:.15+r*.8,z:Math.cos(n)*.75-.6,ry:n,s:[r*.75,r*.85,r*1.15]}))}return i.userData={steam:null},i}function $E(){const i=za(1.4),e=xe("#3e2216",{roughness:.75,map:Yt("brownie",{n:3e3,dark:.4,light:.2}),bumpMap:Yt("brownie",{n:3e3,dark:.4,light:.2}),bumpScale:3});i.add(K(new Li(1,.45,1,3,.06),e,{y:.4,ry:.3})),i.add(K(new Li(.9,.42,.9,3,.06),e,{x:.15,y:.84,z:.05,ry:.9}));const t=xi(5),n=xe("#fbf7f0",{roughness:1});for(let r=0;r<30;r++)i.add(K(new Kt(.018,6,4),n,{x:.15+(t()-.5)*.7,y:1.06,z:.05+(t()-.5)*.7,shadow:!1}));return i.add(K(new Kt(.3,32,20),xe("#f7ecd2",{roughness:.8}),{x:-.75,y:.3,z:.45,s:[1,.75,1]})),i.userData={steam:null},i}function ZE({layers:i=["#6b3e22","#f1e2c8"],top:e="#5a321a"}={}){const t=za(1.5),n=-.42,r=.42;let s=.12;return i.forEach(a=>{const o=.9/i.length;t.add(K(Eo(1.25,n,r,o),xe(a,{roughness:.75}),{y:s,x:-.55})),s+=o}),t.add(K(Eo(1.25,n,r,.05),xe(e,{roughness:.85,map:Yt("cocoa",{n:2500,dark:.5})}),{y:s,x:-.55})),t.add(K(new Kt(.17,24,16),xe("#7a2a12",{roughness:.15,clearcoat:1}),{x:.35,y:s+.17})),t.userData={steam:null},t}function KE(){const i=new vt,e=xe("#c78a4a",{roughness:.7,map:Yt("cookie",{n:3e3,dark:.3}),bumpMap:Yt("cookie",{n:3e3,dark:.3}),bumpScale:3}),t=xe("#2c160b",{roughness:.4}),n=xi(21);for(let r=0;r<3;r++){const s=ka(new ut(.8,.82,.2,48,2),.03,r+1,9),a=.1+r*.22;if(i.add(K(s,e,{y:a,x:r*.06,rz:(n()-.5)*.06,rx:(n()-.5)*.06})),r===2)for(let o=0;o<14;o++){const l=n()*En,c=Math.sqrt(n())*.65;i.add(K(new Li(.13,.08,.11,1,.02),t,{x:Math.cos(l)*c+.12,y:a+.11,z:Math.sin(l)*c,ry:n()*3}))}}return i.userData={steam:null},i}function JE(i,e=1){const t=xi(e);switch(i){case"leaf":{const n=new Pa;return n.moveTo(0,-.22),n.quadraticCurveTo(.14,0,0,.24),n.quadraticCurveTo(-.14,0,0,-.22),K(new As(n,{depth:.008,bevelEnabled:!1}),xe(t()>.5?"#3f6b2f":"#567f3a",{roughness:.55,side:dn}),{shadow:!1})}case"bean":{const n=new vt;return n.add(K(new Kt(.1,20,14),xe("#4a2814",{roughness:.35}),{s:[1,.7,1.35],shadow:!1})),n.add(K(new pr(.012,.02,.26),xe("#1d0d05"),{y:.065,shadow:!1})),n}case"cardamom":return K(new Kt(.07,6,10),xe("#8fa65a",{roughness:.6,flatShading:!0}),{s:[1,1,1.9],shadow:!1});case"cinnamon":return K(new ut(.045,.045,.55,12,1,!1,0,Math.PI*1.7),xe("#8a4b24",{roughness:.8,side:dn}),{shadow:!1});case"anise":{const n=new Pa;for(let r=0;r<16;r++){const s=r/16*En,a=r%2?.05:.17;r?n.lineTo(Math.cos(s)*a,Math.sin(s)*a):n.moveTo(a,0)}return K(new As(n,{depth:.03,bevelEnabled:!0,bevelSize:.02,bevelThickness:.02,bevelSegments:2}),xe("#6b3518",{roughness:.7}),{shadow:!1})}case"sesame":default:return K(new Kt(.05,8,6),xe("#f5e6c0"),{s:[.6,.35,1.2],shadow:!1})}}function xg(i){switch(i.type){case"kulhad":return Kh(i);case"cutting":return DE(i);case"glass-tea":return IE(i);case"cup":return gg(i);case"pourover":return NE(i);case"chemex":return OE(i);case"press":return FE(i);case"moka":return kE();case"davara":return zE(i);case"affogato":return BE();case"pizza":return _g(i);case"burger":return vg(i);case"samosa":return VE();case"vadapav":return GE();case"bunmaska":return WE();case"fries":return XE();case"bowl":return YE();case"croissant":return qE();case"brownie":return $E();case"cake":return ZE(i);case"cookie":return KE();default:return Kh()}}function Xf(i,e=2,t=0){const n=new vt,r=new vt;r.add(i),r.rotation.x=t;const s=new dr().setFromObject(r),a=s.getSize(new I),o=s.getCenter(new I);r.position.sub(o);const l=e/Math.max(a.x,a.y,a.z);return n.add(r),n.scale.setScalar(l),n.userData={...i.userData,inner:r,model:i,k:l},n}function yg(i){i.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&[].concat(e.material).forEach(t=>t.dispose())})}function Mg({count:i=150,radius:e=.45,height:t=1.6,size:n=620,color:r="#fff6ea"}={}){const s=new Float32Array(i*3),a=new Float32Array(i),o=new Float32Array(i);for(let h=0;h<i;h++){const d=Math.random()*Math.PI*2,f=Math.sqrt(Math.random())*e;s.set([Math.cos(d)*f,0,Math.sin(d)*f],h*3),a[h]=Math.random(),o[h]=.12+Math.random()*.14}const l=new _n;l.setAttribute("position",new Hn(s,3)),l.setAttribute("aSeed",new Hn(a,1)),l.setAttribute("aSpeed",new Hn(o,1));const c=new Wi({transparent:!0,depthWrite:!1,uniforms:{uTime:{value:0},uH:{value:t},uPx:{value:n*Math.min(window.devicePixelRatio||1,2)},uTex:{value:Hf()},uColor:{value:new nt(r)},uAlpha:{value:1}},vertexShader:`
      uniform float uTime; uniform float uH; uniform float uPx;
      attribute float aSeed; attribute float aSpeed;
      varying float vA;
      void main() {
        float t = fract(uTime * aSpeed + aSeed);
        vec3 p = position;
        p.xz *= (1.0 - t * 0.35);
        p.x += sin(t * 6.0 + aSeed * 20.0 + uTime * 0.7) * 0.28 * t;
        p.z += cos(t * 5.0 + aSeed * 13.0) * 0.2 * t;
        p.y += t * uH;
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        gl_Position = projectionMatrix * mv;
        gl_PointSize = uPx * (0.5 + t * 1.9) / -mv.z;
        vA = smoothstep(0.0, 0.25, t) * pow(1.0 - t, 1.5) * 0.085;
      }`,fragmentShader:`
      uniform sampler2D uTex; uniform vec3 uColor; uniform float uAlpha;
      varying float vA;
      void main() {
        float a = texture2D(uTex, gl_PointCoord).r;
        gl_FragColor = vec4(uColor, a * vA * uAlpha);
      }`}),u=new ig(l,c);return u.frustumCulled=!1,u.renderOrder=5,u}function jE(i=260){const e=new Float32Array(i*3),t=new Float32Array(i);for(let a=0;a<i;a++)e.set([(Math.random()-.5)*18,(Math.random()-.5)*11,-Math.random()*8+2],a*3),t[a]=Math.random()*100;const n=new _n;n.setAttribute("position",new Hn(e,3)),n.setAttribute("aSeed",new Hn(t,1));const r=new Wi({transparent:!0,depthWrite:!1,blending:ih,uniforms:{uTime:{value:0},uTex:{value:Hf()},uPx:{value:70*Math.min(window.devicePixelRatio||1,2)},uScroll:{value:0}},vertexShader:`
      uniform float uTime; uniform float uPx; uniform float uScroll;
      attribute float aSeed; varying float vA;
      void main() {
        vec3 p = position;
        p.y += sin(uTime * 0.3 + aSeed) * 0.4 + uScroll * (0.4 + fract(aSeed) * 0.6);
        p.y = mod(p.y + 5.5, 11.0) - 5.5;
        p.x += cos(uTime * 0.2 + aSeed * 2.0) * 0.3;
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        gl_Position = projectionMatrix * mv;
        gl_PointSize = uPx * (0.4 + fract(aSeed * 7.0)) / -mv.z;
        vA = 0.35 + 0.35 * sin(uTime * 1.5 + aSeed * 5.0);
      }`,fragmentShader:`
      uniform sampler2D uTex; varying float vA;
      void main() { gl_FragColor = vec4(1.0, 0.72, 0.38, texture2D(uTex, gl_PointCoord).r * vA * 0.5); }`}),s=new ig(n,r);return s.frustumCulled=!1,s}const Wp=["leaf","leaf","bean","bean","cardamom","cinnamon","anise","leaf","bean"];class QE{constructor(e){this.canvas=e,this.renderer=Vf(e),this.scene=new bc,this.camera=new Nn(32,1,.1,60),this.camera.position.set(0,.25,10),Gf(this.scene,this.renderer,{shadowSize:2048,bounds:5}),this.mouse=new me,this.mouseL=new me,this.scrollV=0,this.clock=new mg,this.current=null,this.side="right",this.holders={},this.explode=0,this.steams=[],this.buildModels(),this.buildFloaties(),this.dust=jE(),this.scene.add(this.dust),this.resize(),window.addEventListener("resize",()=>this.resize()),window.addEventListener("pointermove",t=>{this.mouse.set(t.clientX/innerWidth*2-1,-(t.clientY/innerHeight)*2+1)}),this.loop=this.loop.bind(this),this.renderer.setAnimationLoop(this.loop)}buildModels(){const e={kulhad:{make:()=>Kh({liquid:"#b9773f"}),size:2,tilt:.32},cup:{make:()=>gg({style:"cup",liquid:"#c99a6a",art:"heart"}),size:2.3,tilt:.45},pizza:{make:()=>_g({toppings:["pepperoni","basil","olive","capsicum"]}),size:2.7,tilt:.9},burger:{make:()=>vg({patty:"veg",double:!0}),size:2.25,tilt:.12}};for(const[t,n]of Object.entries(e)){const r=n.make(),s=Xf(r,n.size),a=new vt;a.add(s),a.userData.baseTilt=n.tilt,a.rotation.x=n.tilt;const o=new vt;o.add(a),a.updateMatrixWorld(!0);const l=new dr().setFromObject(a),c=Wf(n.size*1.3,.4);if(c.position.y=l.min.y-.3,t!=="pizza"&&o.add(c),o.scale.setScalar(1e-4),o.visible=!1,o.userData={spin:a,pivot:s,model:r,def:n,shadow:c},r.userData.steam){const u=Mg({radius:r.userData.steamR,height:1.8});u.position.copy(r.userData.steam),r.add(u),this.steams.push(u)}this.scene.add(o),this.holders[t]=o}this.chaiLiquid=this.holders.kulhad.userData.model.userData.liquid}buildFloaties(){this.floaties=new vt,this.scene.add(this.floaties);for(let e=0;e<38;e++){const t=Wp[e%Wp.length],n=JE(t,e+3),r=-Math.random()*7+1.5,s=1+(-r+2)*.25;n.position.set((Math.random()-.5)*14*s,(Math.random()-.5)*9*s,r),n.rotation.set(Math.random()*6,Math.random()*6,Math.random()*6),n.scale.setScalar(1.1+Math.random()*1.4),n.userData={base:n.position.clone(),rs:new I((Math.random()-.5)*.6,(Math.random()-.5)*.6,(Math.random()-.5)*.4),ph:Math.random()*10,depth:.6+(2-r)*.18},this.floaties.add(n)}}resize(){const e=innerWidth,t=innerHeight;this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix();const n=this.camera.position.z;this.viewH=2*Math.tan(Vh.degToRad(this.camera.fov/2))*n,this.viewW=this.viewH*this.camera.aspect,this.narrow=this.camera.aspect<.95,this.current&&this.place(this.holders[this.current],this.side,!0)}target(e){if(this.narrow)return{x:0,y:this.viewH*.2,s:this.viewH*.3/2};const t=Math.min(this.viewH*.4,this.viewW*.28)/2;return{x:e==="left"?-this.viewW*.23:e==="right"?this.viewW*.23:0,y:-.2,s:t}}place(e,t,n=!1){const r=this.target(t);if(n){e.position.set(r.x,r.y,0),e.scale.setScalar(r.s);return}ot.to(e.position,{x:r.x,y:r.y,duration:1.4,ease:"expo.inOut"}),ot.to(e.scale,{x:r.s,y:r.s,z:r.s,duration:1.2,ease:"expo.inOut"}),ot.to(e.userData.spin.rotation,{y:`+=${t==="left"?-Math.PI:Math.PI}`,duration:1.4,ease:"expo.inOut"})}show(e,t="right"){if(e===this.current&&t===this.side)return;const n=this.current&&this.holders[this.current];if(e===this.current&&n){this.side=t,this.place(n,t);return}if(n&&(ot.killTweensOf(n.scale),ot.to(n.scale,{x:1e-4,y:1e-4,z:1e-4,duration:.55,ease:"power3.in",onComplete:()=>{n.visible=!1}}),ot.to(n.position,{y:n.position.y-1.2,duration:.55,ease:"power3.in"}),ot.to(n.userData.spin.rotation,{y:"+=2",duration:.55,ease:"power2.in"})),this.current=e==="none"?null:e,this.side=t,!this.current)return;const r=this.holders[e],s=this.target(t);ot.killTweensOf(r.scale),ot.killTweensOf(r.position),r.visible=!0,r.position.set(s.x,s.y-1.5,0),r.userData.spin.rotation.y=-2.4,ot.to(r.position,{x:s.x,y:s.y,duration:1.3,ease:"expo.out",delay:n?.25:0}),ot.fromTo(r.scale,{x:1e-4,y:1e-4,z:1e-4},{x:s.s,y:s.s,z:s.s,duration:1.3,ease:"back.out(1.4)",delay:n?.25:0}),ot.to(r.userData.spin.rotation,{y:0,duration:1.8,ease:"expo.out",delay:n?.25:0})}intro(){this.camera.position.z=16,ot.to(this.camera.position,{z:10,duration:2.4,ease:"expo.out"}),this.floaties.children.forEach((e,t)=>{const n=e.scale.x;e.scale.setScalar(1e-4),ot.to(e.scale,{x:n,y:n,z:n,duration:1.6,delay:.3+t*.03,ease:"back.out(2)"})})}setChaiColor(e){ot.to(this.chaiLiquid.color,{...ew(e),duration:.8,ease:"power2.out"})}setExplode(e){this.explode=e}setScroll(e,t){this.scrollP=e,this.scrollV=t}loop(){const e=Math.min(this.clock.getDelta(),.05),t=this.clock.elapsedTime;this.mouseL.lerp(this.mouse,.05);const n=Vh.clamp(this.scrollV||0,-60,60);this.camera.position.x+=(this.mouseL.x*.35-this.camera.position.x)*.06,this.camera.position.y+=(.25+this.mouseL.y*.2-this.camera.position.y)*.06,this.camera.lookAt(0,0,0);for(const s of Object.values(this.holders)){if(!s.visible)continue;const{spin:a,model:o,def:l}=s.userData;a.rotation.y+=e*.35+n*9e-4,a.rotation.x+=(l.tilt-this.mouseL.y*.18-a.rotation.x)*.06,a.rotation.z+=(-this.mouseL.x*.08-a.rotation.z)*.06,a.position.y=Math.sin(t*1.1)*.06;const c=o.userData;if(c.slice){const u=.12+(Math.sin(t*1.4)*.5+.5)*.25;c.slice.position.set(c.sliceDir.x*u,u*.9,c.sliceDir.z*u)}if(c.top){const u=this.explode;if(!c.ranked){const h=[...new Set(o.children.map(d=>(d.userData.y0=d.position.y).toFixed(2)))].sort((d,f)=>d-f);o.children.forEach(d=>d.userData.rank=h.indexOf(d.userData.y0.toFixed(2))),c.ranked=!0}o.children.forEach(h=>{h.position.y=h.userData.y0+h.userData.rank*u*.13+(h===c.top?.04+Math.sin(t*2)*.03:0)})}}for(const s of this.steams)s.material.uniforms.uTime.value=t;this.dust.material.uniforms.uTime.value=t,this.dust.material.uniforms.uScroll.value=(this.scrollP||0)*6;const r=this.scrollP||0;this.floaties.children.forEach(s=>{const{base:a,rs:o,ph:l,depth:c}=s.userData;s.rotation.x+=o.x*e,s.rotation.y+=o.y*e,s.rotation.z+=o.z*e;let u=a.y+Math.sin(t*.5+l)*.3+r*14*c;const h=12;u=((u+h/2)%h+h)%h-h/2,s.position.set(a.x+Math.cos(t*.3+l)*.2-this.mouseL.x*c*.3,u,a.z)}),this.renderer.render(this.scene,this.camera)}}function ew(i){const e=new nt(i).multiplyScalar(Ac);return{r:e.r,g:e.g,b:e.b}}const Sg={pizza:.55,cake:.15,brownie:.1},bg={pizza:2.35,burger:1.8};class tw{constructor(e=420){const t=document.createElement("canvas");this.renderer=Vf(t,{preserveDrawingBuffer:!0,maxDpr:1}),this.renderer.setSize(e,e,!1),this.scene=new bc,this.camera=new Nn(28,1,.1,50),this.camera.position.set(0,2.5,4.7),this.camera.lookAt(0,-.12,0),Gf(this.scene,this.renderer,{shadowSize:1024,bounds:2.5});const n=Wf(3,.5);n.position.y=-.98,this.scene.add(n),this.cache=new Map}render(e,t){if(this.cache.has(t))return this.cache.get(t);const n=xg(e),r=Xf(n,bg[e.type]||1.9,Sg[e.type]||0),s=new dr().setFromObject(r);r.position.y=-.95-s.min.y,r.rotation.y=-.55,this.scene.add(r),this.renderer.render(this.scene,this.camera);const a=this.renderer.domElement.toDataURL("image/png");return this.scene.remove(r),yg(r),this.cache.set(t,a),a}}class nw{constructor(e){this.canvas=e,this.renderer=Vf(e),this.scene=new bc,this.camera=new Nn(28,1,.1,50),this.camera.position.set(0,1.3,5.6),this.camera.lookAt(0,0,0),Gf(this.scene,this.renderer,{shadowSize:1024,bounds:2.5});const t=Wf(2.6,.38);t.position.y=-1,this.scene.add(t),this.rotY=0,this.velY=.008,this.rotX=0,this.clock=new mg;let n=!1,r=0,s=0;e.addEventListener("pointerdown",o=>{n=!0,r=o.clientX,s=o.clientY,e.setPointerCapture(o.pointerId)}),e.addEventListener("pointermove",o=>{n&&(this.velY=(o.clientX-r)*.006,this.rotX=Vh.clamp(this.rotX+(o.clientY-s)*.004,-.5,.6),r=o.clientX,s=o.clientY)});const a=()=>{n=!1};e.addEventListener("pointerup",a),e.addEventListener("pointercancel",a),this.loop=this.loop.bind(this)}load(e){this.pivot&&(this.scene.remove(this.pivot),yg(this.pivot));const t=xg(e);t.userData.steam?(this.steam=Mg({radius:t.userData.steamR,height:1.5,size:260}),this.steam.position.copy(t.userData.steam),t.add(this.steam)):this.steam=null,this.pivot=Xf(t,(bg[e.type]||1.9)*1.05,Sg[e.type]||0);const n=new dr().setFromObject(this.pivot);this.pivot.position.y=-1-n.min.y,this.scene.add(this.pivot),this.rotY=-.6,this.velY=.04,this.resize()}resize(){const e=this.canvas.getBoundingClientRect();e.width&&(this.renderer.setSize(e.width,e.height,!1),this.camera.aspect=e.width/e.height,this.camera.updateProjectionMatrix())}start(){this.renderer.setAnimationLoop(this.loop)}stop(){this.renderer.setAnimationLoop(null)}loop(){const e=this.clock.getElapsedTime();if(this.velY+=(.006-this.velY)*.03,this.rotY+=this.velY,this.pivot){this.pivot.rotation.y=this.rotY,this.pivot.rotation.x+=(this.rotX-this.pivot.rotation.x)*.1;const t=this.pivot.userData.model.userData.slice;if(t){const n=.12+(Math.sin(e*1.4)*.5+.5)*.25,r=this.pivot.userData.model.userData.sliceDir;t.position.set(r.x*n,n*.9,r.z*n)}}this.steam&&(this.steam.material.uniforms.uTime.value=e),this.renderer.render(this.scene,this.camera)}}const Yf=[{id:"chai",label:"Chai",note:"Brewed fresh, every single cup"},{id:"black",label:"Black Coffee",note:"No milk. Just the bean, done right"},{id:"coffee",label:"Milk Coffee",note:"Espresso meets steamed milk"},{id:"cold",label:"Cold & Iced",note:"Slow-steeped, poured over ice"},{id:"pizza",label:"Pizza",note:"Hand-stretched, stone-baked"},{id:"burger",label:"Burgers",note:"Toasted brioche, stacked high"},{id:"snacks",label:"Snacks",note:"The perfect chai companions"},{id:"dessert",label:"Desserts",note:"A sweet last sip"}],er=(i,e={})=>({type:"kulhad",liquid:i,...e}),Ct=(i,e,t={})=>({type:"cup",style:i,liquid:e,...t}),Cs=[{id:"masala",cat:"chai",name:"Masala Chai",price:79,tag:"Bestseller",veg:!0,desc:"Assam CTC simmered with ginger, cardamom, clove, cinnamon & black pepper.",model:er("#b9773f")},{id:"adrak",cat:"chai",name:"Adrak Chai",price:69,veg:!0,desc:"Fiery fresh-crushed ginger, boiled kadak the way the highways do it.",model:er("#bf8045")},{id:"elaichi",cat:"chai",name:"Elaichi Chai",price:69,veg:!0,desc:"Green cardamom pods pounded fresh, gentle and fragrant.",model:er("#c58d55")},{id:"cutting",cat:"chai",name:"Mumbai Cutting",price:39,tag:"Half glass",veg:!0,desc:"Half a glass, full strength. Strong, sweet, and over too soon.",model:{type:"cutting",liquid:"#a9692f"}},{id:"kesar",cat:"chai",name:"Kesar Chai",price:129,tag:"Premium",veg:!0,desc:"Kashmiri saffron threads bloomed in full-cream milk.",model:er("#d39a4a")},{id:"tulsi",cat:"chai",name:"Tulsi Ginger",price:79,veg:!0,desc:"Holy basil and ginger, the immunity cup grandmothers swear by.",model:er("#b88247")},{id:"kahwa",cat:"chai",name:"Kashmiri Kahwa",price:119,veg:!0,desc:"Green tea, saffron, almonds and cinnamon. No milk, all warmth.",model:{type:"glass-tea",liquid:"#d9a63a"}},{id:"noon",cat:"chai",name:"Noon (Pink) Chai",price:139,tag:"New",veg:!0,desc:"Salted Kashmiri pink tea topped with crushed pistachio.",model:er("#d79a9a")},{id:"irani",cat:"chai",name:"Irani Dum Chai",price:89,veg:!0,desc:"Hyderabadi dum-brewed tea mixed with thickened khoya milk.",model:er("#c99662")},{id:"sulaimani",cat:"chai",name:"Sulaimani",price:69,veg:!0,desc:"Malabar black tea with lemon, mint and a touch of spice.",model:{type:"glass-tea",liquid:"#9a3d14"}},{id:"lemon",cat:"chai",name:"Lemongrass Honey",price:79,veg:!0,desc:"Light black tea, fresh lemongrass, wild forest honey.",model:{type:"glass-tea",liquid:"#c27a1c"}},{id:"gur",cat:"chai",name:"Gur Wali Chai",price:89,veg:!0,desc:"Sweetened with organic jaggery instead of sugar. Earthy and rich.",model:er("#a46a38")},{id:"chocochai",cat:"chai",name:"Chocolate Chai",price:119,veg:!0,desc:"Masala chai stirred with 54% dark Belgian chocolate.",model:er("#7d4a2a")},{id:"dirty",cat:"chai",name:"Dirty Chai",price:149,tag:"Chai × Coffee",veg:!0,desc:"Masala chai latte with a double shot of espresso dropped in.",model:Ct("latte-glass","#9a6236",{layers:["#3b1d0e","#b07a48","#efe0c9"]})},{id:"espresso",cat:"black",name:"Espresso",price:99,veg:!0,desc:"18g in, 36g out, 27 seconds. Thick, syrupy, crowned with crema.",model:Ct("espresso","#2a1408",{crema:!0})},{id:"ristretto",cat:"black",name:"Ristretto",price:99,veg:!0,desc:"A shorter, more concentrated shot. Sweeter, less bitter.",model:Ct("espresso","#1f0e05",{crema:!0})},{id:"doppio",cat:"black",name:"Doppio",price:139,veg:!0,desc:"A double espresso for the double deadline.",model:Ct("espresso","#24110a",{crema:!0})},{id:"lungo",cat:"black",name:"Lungo",price:119,veg:!0,desc:"A long pull through the same puck. Lighter body, more bitterness.",model:Ct("cup","#2a1408",{crema:!0})},{id:"americano",cat:"black",name:"Americano",price:139,tag:"Classic",veg:!0,desc:"Espresso topped with hot water. Smooth, long, endlessly drinkable.",model:Ct("cup","#2b160a")},{id:"longblack",cat:"black",name:"Long Black",price:139,veg:!0,desc:"Hot water first, espresso on top, so the crema survives.",model:Ct("cup","#2b160a",{crema:!0})},{id:"pourover",cat:"black",name:"V60 Pour Over",price:189,tag:"Single origin",veg:!0,desc:"Chikmagalur single estate, hand-poured. Bright, floral, clean.",model:{type:"pourover",liquid:"#4a200c"}},{id:"chemex",cat:"black",name:"Chemex",price:219,veg:!0,desc:"A thick paper filter makes for a tea-like clarity. Serves two.",model:{type:"chemex",liquid:"#51230e"}},{id:"frenchpress",cat:"black",name:"French Press",price:179,veg:!0,desc:"Four-minute immersion. Full-bodied, oily, unapologetic.",model:{type:"press",liquid:"#2c1409"}},{id:"aeropress",cat:"black",name:"AeroPress",price:169,veg:!0,desc:"Pressure plus immersion. Clean cup, rich body, under two minutes.",model:Ct("mug","#30170a")},{id:"moka",cat:"black",name:"Moka Pot",price:149,veg:!0,desc:"Stovetop Italian-style. Strong, bold and a little rustic.",model:{type:"moka"}},{id:"turkish",cat:"black",name:"Turkish Coffee",price:159,veg:!0,desc:"Powder-fine grounds simmered in a cezve with cardamom.",model:Ct("espresso","#1a0b04",{crema:!0,foamColor:"#6b4a2a"})},{id:"filter-black",cat:"black",name:"Drip Filter",price:119,veg:!0,desc:"Batch-brewed house blend. Your everyday honest cup.",model:Ct("mug","#2d150a")},{id:"redeye",cat:"black",name:"Red Eye",price:169,tag:"Extra kick",veg:!0,desc:"Drip coffee with a shot of espresso. For the all-nighters.",model:Ct("mug","#1e0d05",{crema:!0})},{id:"cappuccino",cat:"coffee",name:"Cappuccino",price:169,tag:"Bestseller",veg:!0,desc:"Equal thirds espresso, steamed milk and velvet foam.",model:Ct("cup","#c99a6a",{art:"heart"})},{id:"latte",cat:"coffee",name:"Caffè Latte",price:179,veg:!0,desc:"A single shot under lots of silky steamed milk.",model:Ct("latte-glass","#c49468",{layers:["#4a2512","#d3b08c","#f3e6d4"]})},{id:"flatwhite",cat:"coffee",name:"Flat White",price:179,veg:!0,desc:"Double ristretto, micro-foam, stronger coffee flavour.",model:Ct("cup","#b98656",{art:"rosetta"})},{id:"cortado",cat:"coffee",name:"Cortado",price:159,veg:!0,desc:'Espresso "cut" with an equal amount of warm milk.',model:Ct("latte-glass","#9b6a40",{layers:["#4a2512","#c79a70"],small:!0})},{id:"macchiato",cat:"coffee",name:"Macchiato",price:129,veg:!0,desc:'Espresso "stained" with a spoon of milk foam.',model:Ct("espresso","#4a2512",{art:"dot"})},{id:"mocha",cat:"coffee",name:"Café Mocha",price:199,veg:!0,desc:"Espresso, dark chocolate, steamed milk and cocoa dust.",model:Ct("mug","#6e3d22",{art:"heart",cocoa:!0})},{id:"kaapi",cat:"coffee",name:"Filter Kaapi",price:89,tag:"South Indian",veg:!0,desc:"Chicory decoction frothed between davara and tumbler.",model:{type:"davara",liquid:"#b9824f"}},{id:"piccolo",cat:"coffee",name:"Piccolo Latte",price:149,veg:!0,desc:"A ristretto in a tiny glass with silky milk. Small but mighty.",model:Ct("latte-glass","#a57347",{layers:["#3b1d0e","#d0aa82"],small:!0})},{id:"irish",cat:"coffee",name:"Irish-style Coffee",price:229,veg:!0,desc:"Black coffee, brown sugar, cream float (zero proof).",model:Ct("latte-glass","#2b160a",{layers:["#2b160a","#2b160a","#f2e8d8"]})},{id:"dalgona",cat:"coffee",name:"Dalgona",price:189,veg:!0,desc:"Whipped coffee cloud spooned over cold milk.",model:Ct("latte-glass","#e9dccb",{layers:["#f2ebe0","#f2ebe0","#c58a4c"]})},{id:"coldbrew",cat:"cold",name:"Cold Brew",price:199,tag:"18 hr steep",veg:!0,desc:"Steeped 18 hours in cold water. Low acid, naturally sweet.",model:Ct("iced","#3a1a0a")},{id:"nitro",cat:"cold",name:"Nitro Cold Brew",price:239,veg:!0,desc:"Nitrogen-infused cold brew with a creamy, stout-like head.",model:Ct("iced","#2b1308",{foam:"#c9a37a",noIce:!0})},{id:"icedamericano",cat:"cold",name:"Iced Americano",price:169,veg:!0,desc:"Double espresso over ice and chilled water.",model:Ct("iced","#3d1d0c")},{id:"icedlatte",cat:"cold",name:"Iced Latte",price:199,veg:!0,desc:"Espresso cascading through cold milk and ice.",model:Ct("iced","#c39a72",{layers:["#f0e4d2","#a87650","#4a2512"]})},{id:"frappe",cat:"cold",name:"Classic Frappé",price:219,veg:!0,desc:"Blended coffee, milk and ice with a whipped-cream cap.",model:Ct("iced","#b98a63",{cream:!0,noIce:!0})},{id:"vietnamese",cat:"cold",name:"Vietnamese Iced",price:209,veg:!0,desc:"Phin-dripped dark roast over condensed milk and ice.",model:Ct("iced","#7a4523",{layers:["#e9d9bd","#5a2c12","#5a2c12"]})},{id:"icedchai",cat:"cold",name:"Iced Chai Latte",price:179,veg:!0,desc:"Masala chai concentrate shaken with cold milk over ice.",model:Ct("iced","#c99868")},{id:"affogato",cat:"cold",name:"Affogato",price:219,veg:!0,desc:'Vanilla gelato "drowned" in a hot espresso shot.',model:{type:"affogato"}},{id:"margherita",cat:"pizza",name:"Margherita",price:299,veg:!0,desc:"San Marzano tomato, fior di latte, basil, extra-virgin olive oil.",model:{type:"pizza",toppings:["basil"]}},{id:"paneertikka",cat:"pizza",name:"Paneer Tikka",price:379,tag:"Bestseller",veg:!0,desc:"Tandoori paneer, charred onion, capsicum, mint mayo drizzle.",model:{type:"pizza",toppings:["paneer","onion","capsicum"]}},{id:"farmhouse",cat:"pizza",name:"Farmhouse",price:349,veg:!0,desc:"Mushroom, capsicum, sweet corn, olives, red onion.",model:{type:"pizza",toppings:["mushroom","capsicum","corn","olive"]}},{id:"peri",cat:"pizza",name:"Peri Peri Veg",price:349,veg:!0,desc:"Smoky peri peri sauce, jalapeño, onion, golden corn.",model:{type:"pizza",toppings:["jalapeno","corn","onion"],sauce:"#b8361a"}},{id:"fourcheese",cat:"pizza",name:"Quattro Formaggi",price:429,veg:!0,desc:"Mozzarella, cheddar, parmesan and a little blue cheese.",model:{type:"pizza",toppings:[],cheese:"#f7d98c"}},{id:"pepperoni",cat:"pizza",name:"Chicken Pepperoni",price:449,veg:!1,desc:"Cured chicken pepperoni, oregano, mozzarella pull.",model:{type:"pizza",toppings:["pepperoni"]}},{id:"bbq",cat:"pizza",name:"BBQ Chicken",price:449,veg:!1,desc:"Smoked chicken, BBQ glaze, red onion, coriander.",model:{type:"pizza",toppings:["chicken","onion","basil"],sauce:"#6e2410"}},{id:"classicveg",cat:"burger",name:"Classic Veg",price:199,veg:!0,desc:"Crunchy veggie patty, lettuce, tomato, onion, house sauce.",model:{type:"burger",patty:"veg"}},{id:"tikki",cat:"burger",name:"Aloo Tikki Masala",price:169,tag:"Desi",veg:!0,desc:"Spiced potato tikki, mint chutney, pickled onion.",model:{type:"burger",patty:"tikki",cheese:!1}},{id:"paneerburger",cat:"burger",name:"Crispy Paneer",price:249,veg:!0,desc:"Panko-crusted paneer slab, chipotle mayo, slaw.",model:{type:"burger",patty:"paneer"}},{id:"smash",cat:"burger",name:"Double Smash Chicken",price:329,tag:"Loaded",veg:!1,desc:"Two smashed chicken patties, double cheddar, burger sauce.",model:{type:"burger",patty:"chicken",double:!0}},{id:"zinger",cat:"burger",name:"Spicy Crunch Chicken",price:279,veg:!1,desc:"Buttermilk-fried thigh, hot honey, pickles, lettuce.",model:{type:"burger",patty:"crispy",cheese:!1}},{id:"mushroomswiss",cat:"burger",name:"Mushroom & Cheese",price:269,veg:!0,desc:"Garlic mushroom ragout, melted cheese, caramelised onion.",model:{type:"burger",patty:"veg",double:!1,tomato:!1}},{id:"samosa",cat:"snacks",name:"Punjabi Samosa (2)",price:69,veg:!0,desc:"Flaky pastry, spiced potato & peas, tamarind chutney.",model:{type:"samosa"}},{id:"vadapav",cat:"snacks",name:"Vada Pav",price:59,tag:"Mumbai",veg:!0,desc:"Batata vada in a soft pav with dry garlic chutney.",model:{type:"vadapav"}},{id:"bunmaska",cat:"snacks",name:"Bun Maska",price:59,veg:!0,desc:"Soft bun, slathered in Amul butter. Dip it in your chai.",model:{type:"bunmaska"}},{id:"fries",cat:"snacks",name:"Peri Peri Fries",price:129,veg:!0,desc:"Skin-on fries, tossed in peri peri masala.",model:{type:"fries"}},{id:"maggi",cat:"snacks",name:"Masala Maggi",price:99,veg:!0,desc:"The hostel classic, loaded with veggies and cheese.",model:{type:"bowl"}},{id:"croissant",cat:"snacks",name:"Butter Croissant",price:149,veg:!0,desc:"Laminated with French butter, baked every morning.",model:{type:"croissant"}},{id:"brownie",cat:"dessert",name:"Fudge Brownie",price:149,veg:!0,desc:"Dense dark-chocolate brownie, served warm.",model:{type:"brownie"}},{id:"tiramisu",cat:"dessert",name:"Tiramisu",price:229,veg:!0,desc:"Espresso-soaked sponge, mascarpone, cocoa.",model:{type:"cake",layers:["#6b3e22","#f1e2c8","#6b3e22","#f1e2c8"],top:"#5a321a"}},{id:"cheesecake",cat:"dessert",name:"Gulab Jamun Cheesecake",price:249,tag:"Fusion",veg:!0,desc:"Baked cheesecake with a gulab jamun crown.",model:{type:"cake",layers:["#b98a52","#f6ead2","#f6ead2"],top:"#8a3a18"}},{id:"cookie",cat:"dessert",name:"Choco Chunk Cookie",price:99,veg:!0,desc:"Crisp edges, gooey centre, sea-salt flakes.",model:{type:"cookie"}}],Cc={base:[{id:"assam",label:"Assam CTC",price:0,tint:[0,0]},{id:"darjeeling",label:"Darjeeling",price:30,tint:[.04,.03]},{id:"nilgiri",label:"Nilgiri",price:20,tint:[.02,.01]},{id:"green",label:"Green Tea",price:20,tint:[.12,.08]}],milk:[{id:"full",label:"Full Cream",price:0,milk:.55},{id:"toned",label:"Toned",price:0,milk:.42},{id:"oat",label:"Oat Milk",price:40,milk:.5},{id:"almond",label:"Almond",price:50,milk:.46},{id:"none",label:"No Milk",price:0,milk:0}],strength:[{id:"light",label:"Light",price:0,s:.3},{id:"regular",label:"Regular",price:0,s:.55},{id:"kadak",label:"Kadak",price:10,s:.85}],sweet:[{id:"none",label:"No Sugar",price:0},{id:"less",label:"Less",price:0},{id:"regular",label:"Regular",price:0},{id:"jaggery",label:"Jaggery",price:15},{id:"honey",label:"Honey",price:20}],addins:[{id:"ginger",label:"Adrak",price:10},{id:"cardamom",label:"Elaichi",price:10},{id:"tulsi",label:"Tulsi",price:10},{id:"cinnamon",label:"Dalchini",price:10},{id:"saffron",label:"Kesar",price:40},{id:"mint",label:"Pudina",price:10},{id:"lemongrass",label:"Lemongrass",price:10},{id:"clove",label:"Laung",price:10}],size:[{id:"cutting",label:"Cutting",ml:90,price:49},{id:"regular",label:"Regular",ml:180,price:79},{id:"large",label:"Large",ml:300,price:119},{id:"flask",label:"Flask (4)",ml:750,price:279}]},He={espresso:"#3b1d0e",crema:"#b07a3e",water:"#5a2d14",milk:"#e8d6bd",foam:"#f6efe4",choc:"#4a2414",cream:"#fbf6ee",ice:"#cfe3ea",brew:"#4a2310",condensed:"#e9d4a8",sugar:"#d9b77a",gelato:"#f7ecd2",whisk:"#d6a86a"},Eg=[{id:"espresso",name:"Espresso",family:"Black",origin:"Italy, 1901",ml:36,caffeine:63,strength:5,temp:"Hot",desc:"Hot water forced through finely ground coffee at 9 bar. The base of almost everything else.",layers:[[He.espresso,80,"Espresso"],[He.crema,20,"Crema"]]},{id:"ristretto",name:"Ristretto",family:"Black",origin:"Italy",ml:20,caffeine:50,strength:5,temp:"Hot",desc:'"Restricted" shot, with the same coffee and half the water. Sweeter, syrupy, less bitter.',layers:[[He.espresso,75,"Ristretto"],[He.crema,25,"Crema"]]},{id:"doppio",name:"Doppio",family:"Black",origin:"Italy",ml:60,caffeine:126,strength:5,temp:"Hot",desc:"A double espresso: two shots pulled from a double basket.",layers:[[He.espresso,85,"Double espresso"],[He.crema,15,"Crema"]]},{id:"lungo",name:"Lungo",family:"Black",origin:"Italy",ml:110,caffeine:80,strength:4,temp:"Hot",desc:'A "long" espresso: more water pushed through the same puck. More bitter, more volume.',layers:[[He.espresso,88,"Long shot"],[He.crema,12,"Crema"]]},{id:"americano",name:"Americano",family:"Black",origin:"Italy / USA, WWII",ml:240,caffeine:126,strength:3,temp:"Hot",desc:"Espresso diluted with hot water, the story goes, for American GIs who wanted drip-style coffee.",layers:[[He.espresso,33,"Espresso"],[He.water,67,"Hot water"]]},{id:"longblack",name:"Long Black",family:"Black",origin:"Australia / NZ",ml:180,caffeine:126,strength:3,temp:"Hot",desc:"Water first, espresso on top, so the crema stays intact. An Antipodean favourite.",layers:[[He.water,60,"Hot water"],[He.espresso,32,"Double espresso"],[He.crema,8,"Crema"]]},{id:"redeye",name:"Red Eye",family:"Black",origin:"USA",ml:300,caffeine:200,strength:4,temp:"Hot",desc:"Drip coffee with a shot of espresso added. Named for the overnight flight.",layers:[[He.brew,80,"Drip coffee"],[He.espresso,20,"Espresso shot"]]},{id:"pourover",name:"Pour Over",family:"Black",origin:"Germany, 1908",ml:250,caffeine:140,strength:2,temp:"Hot",desc:"Hand-poured through a paper filter (V60, Kalita, Chemex). Clean, bright and aromatic.",layers:[[He.brew,100,"Filtered brew"]]},{id:"frenchpress",name:"French Press",family:"Black",origin:"France / Italy, 1929",ml:300,caffeine:160,strength:3,temp:"Hot",desc:"Coarse grounds steeped four minutes, then pressed with a metal mesh. Heavy and oily.",layers:[[He.brew,95,"Immersion brew"],[He.crema,5,"Bloom oils"]]},{id:"turkish",name:"Turkish",family:"Black",origin:"Ottoman Empire, 1500s",ml:70,caffeine:65,strength:5,temp:"Hot",desc:"Powder-fine coffee simmered in a cezve, served unfiltered with its foam. UNESCO heritage.",layers:[[He.espresso,78,"Unfiltered coffee"],["#7b5636",22,"Köpük foam"]]},{id:"coldbrew",name:"Cold Brew",family:"Cold",origin:"Japan (Kyoto), 1600s",ml:350,caffeine:200,strength:3,temp:"Cold",desc:"Steeped 12 to 24 hours in cold water. Smooth, chocolatey, about 60% less acidic.",layers:[[He.ice,30,"Ice"],[He.brew,70,"Cold brew"]]},{id:"nitro",name:"Nitro Cold Brew",family:"Cold",origin:"USA, 2012",ml:350,caffeine:215,strength:3,temp:"Cold",desc:"Cold brew infused with nitrogen on tap, for a creamy, cascading Guinness-like texture.",layers:[[He.brew,82,"Nitro brew"],["#cda57b",18,"Nitro head"]]},{id:"macchiato",name:"Macchiato",family:"Milk",origin:"Italy, 1980s",ml:45,caffeine:63,strength:5,temp:"Hot",desc:'Espresso "stained" with a dollop of milk foam.',layers:[[He.espresso,70,"Espresso"],[He.foam,30,"Foam dot"]]},{id:"cortado",name:"Cortado",family:"Milk",origin:"Spain",ml:120,caffeine:126,strength:4,temp:"Hot",desc:'Espresso "cut" with an equal part of warm milk, with little to no foam.',layers:[[He.espresso,50,"Espresso"],[He.milk,50,"Warm milk"]]},{id:"piccolo",name:"Piccolo",family:"Milk",origin:"Australia",ml:100,caffeine:50,strength:4,temp:"Hot",desc:"A ristretto topped with steamed milk in a tiny glass. A baby latte.",layers:[[He.espresso,30,"Ristretto"],[He.milk,55,"Steamed milk"],[He.foam,15,"Micro-foam"]]},{id:"flatwhite",name:"Flat White",family:"Milk",origin:"Australia / NZ, 1980s",ml:160,caffeine:130,strength:4,temp:"Hot",desc:"Double ristretto, steamed milk, and a thin velvety micro-foam layer.",layers:[[He.espresso,33,"Double ristretto"],[He.milk,57,"Steamed milk"],[He.foam,10,"Micro-foam"]]},{id:"cappuccino",name:"Cappuccino",family:"Milk",origin:"Italy / Austria",ml:180,caffeine:63,strength:3,temp:"Hot",desc:"The classic thirds: espresso, steamed milk, a thick cap of foam. Named after Capuchin robes.",layers:[[He.espresso,33,"Espresso"],[He.milk,33,"Steamed milk"],[He.foam,34,"Milk foam"]]},{id:"latte",name:"Caffè Latte",family:"Milk",origin:"Italy / USA",ml:300,caffeine:63,strength:2,temp:"Hot",desc:"Espresso with plenty of steamed milk and a light foam layer. The canvas for latte art.",layers:[[He.espresso,17,"Espresso"],[He.milk,73,"Steamed milk"],[He.foam,10,"Light foam"]]},{id:"mocha",name:"Mocha",family:"Milk",origin:"Yemen (name) / USA",ml:300,caffeine:95,strength:3,temp:"Hot",desc:"A latte with chocolate. Named after the Yemeni port of Mokha.",layers:[[He.choc,20,"Chocolate"],[He.espresso,20,"Espresso"],[He.milk,45,"Steamed milk"],[He.cream,15,"Whipped cream"]]},{id:"irish",name:"Irish Coffee",family:"Milk",origin:"Ireland, 1943",ml:240,caffeine:95,strength:3,temp:"Hot",desc:"Hot coffee and brown sugar, with lightly whipped cream floated on top (we serve it zero-proof).",layers:[[He.sugar,8,"Brown sugar"],[He.brew,67,"Hot coffee"],[He.cream,25,"Cream float"]]},{id:"kaapi",name:"Filter Kaapi",family:"Milk",origin:"South India",ml:150,caffeine:90,strength:4,temp:"Hot",desc:"Coffee-chicory decoction from a brass filter, frothed with boiled milk in a davara.",layers:[[He.espresso,30,"Decoction"],[He.milk,55,"Boiled milk"],[He.foam,15,"Pulled froth"]]},{id:"vietnamese",name:"Vietnamese Iced",family:"Cold",origin:"Vietnam, 1850s",ml:200,caffeine:150,strength:5,temp:"Cold",desc:"Dark robusta slow-dripped through a phin onto sweetened condensed milk.",layers:[[He.condensed,25,"Condensed milk"],[He.espresso,45,"Phin coffee"],[He.ice,30,"Ice"]]},{id:"dalgona",name:"Dalgona",family:"Cold",origin:"South Korea / India",ml:250,caffeine:80,strength:2,temp:"Cold",desc:"Instant coffee, sugar and water whipped into a cloud and spooned over cold milk.",layers:[[He.milk,65,"Cold milk"],[He.whisk,35,"Whipped coffee"]]},{id:"affogato",name:"Affogato",family:"Dessert",origin:"Italy",ml:90,caffeine:63,strength:4,temp:"Hot + Cold",desc:'A scoop of vanilla gelato "drowned" in a shot of hot espresso.',layers:[[He.gelato,60,"Gelato"],[He.espresso,40,"Espresso"]]}],iw=["All","Black","Milk","Cold","Dessert"],rw=[{city:"Hyderabad",area:"Jubilee Hills · Road No. 36",hours:"7 AM – 1 AM",feat:["Drive-thru","Rooftop","Wi-Fi"]},{city:"Bengaluru",area:"Indiranagar · 100 Ft Road",hours:"7 AM – 12 AM",feat:["Roastery","Pet friendly","Wi-Fi"]},{city:"Mumbai",area:"Bandra West · Carter Road",hours:"6 AM – 1 AM",feat:["Sea view","Cutting bar"]},{city:"New Delhi",area:"Hauz Khas Village",hours:"8 AM – 12 AM",feat:["Live music","Wi-Fi"]},{city:"Pune",area:"Koregaon Park · Lane 5",hours:"7 AM – 12 AM",feat:["Garden","Pet friendly"]},{city:"Chennai",area:"Besant Nagar · Elliot’s Beach",hours:"6 AM – 11 PM",feat:["Filter kaapi bar","Beachside"]}],sw=[{name:"Ananya R.",where:"Hyderabad",text:"The kesar chai in a kulhad on a rainy evening… I keep coming back. The paneer tikka pizza is criminally good.",c:"#e8a33d"},{name:"Rohit M.",where:"Bengaluru",text:"Finally a place that does a proper V60 AND a proper cutting chai. My whole team runs on this.",c:"#8fa65a"},{name:"Sara K.",where:"Mumbai",text:"Built my own chai with oat milk, kadak, jaggery and tulsi. They nailed it, and the app remembers it.",c:"#c65d33"},{name:"Vikram S.",where:"Pune",text:"Double smash chicken burger plus an iced americano is the perfect Sunday. Ten out of ten.",c:"#f4c069"},{name:"Meera J.",where:"Chennai",text:"Their filter kaapi tastes like my grandmother’s kitchen. Davara, tumbler, the works.",c:"#d79a9a"},{name:"Arjun P.",where:"Delhi",text:"The Coffee Atlas taught me what a cortado actually is. Ordered one. Life changed (a little).",c:"#b9a58f"}];ot.registerPlugin(je);const se=(i,e=document)=>e.querySelector(i),kt=(i,e=document)=>[...e.querySelectorAll(i)],Ti=i=>"₹"+Math.round(i).toLocaleString("en-IN"),wg=matchMedia("(prefers-reduced-motion: reduce)").matches,Tg=matchMedia("(hover: hover) and (pointer: fine)").matches;wg&&document.documentElement.classList.add("reduced");document.body.classList.add("loading");const Ag=se("#stage"),Rs=new QE(Ag);window.chaiverse={stage:Rs};const Yo=new tw(420),qi=new Rv({duration:1.2,smoothWheel:!wg,wheelMultiplier:.9});qi.stop();qi.on("scroll",i=>{je.update(),Rs.setScroll(i.scroll/Math.max(1,i.limit),i.velocity),Cg=Math.min(Math.abs(i.velocity)*.25,6)});ot.ticker.add(i=>qi.raf(i*1e3));ot.ticker.lagSmoothing(0);function Xp(i){const e=se(i);e&&qi.scrollTo(e,{offset:i==="#menu"?0:-40,duration:1.6})}document.addEventListener("click",i=>{const e=i.target.closest("[data-goto]");e&&(i.preventDefault(),Xp(e.dataset.goto));const t=i.target.closest('a[href^="#"]');t&&t.getAttribute("href").length>1?(i.preventDefault(),hw(),Xp(t.getAttribute("href"))):t&&t.getAttribute("href")==="#top"&&(i.preventDefault(),qi.scrollTo(0))});kt("[data-split]").forEach(i=>{const e=i.innerHTML,t=document.createElement("div");t.innerHTML=e;const n=[];t.childNodes.forEach(r=>{r.nodeType===3?r.textContent.split(/(\s+)/).forEach(s=>n.push(s.trim()?`<span class="split-line"><span class="split-word">${s}</span></span>`:s)):n.push(`<span class="split-line"><span class="split-word">${r.outerHTML}</span></span>`)}),i.innerHTML=n.join("")});const aw=se("#loaderPct"),ow=se(".loader-fill"),Il={v:0},lw=document.fonts?document.fonts.ready:Promise.resolve();ot.to(Il,{v:100,duration:2.2,ease:"power2.inOut",onUpdate:()=>{aw.textContent=Math.round(Il.v),ow.setAttribute("y",110-Il.v*.82),se(".loader-wave").setAttribute("transform",`translate(0 ${104-Il.v*.82})`)},onComplete:()=>lw.then(cw)});function cw(){ot.timeline().to("#loader",{clipPath:"inset(0 0 100% 0)",duration:1.1,ease:"expo.inOut"}).set("#loader",{display:"none"}).add(()=>{document.body.classList.remove("loading"),qi.start(),Rs.show("kulhad","right"),Rs.intro()},"-=0.6").from(".nav",{y:-80,opacity:0,duration:1,ease:"expo.out"},"-=0.5").from(".hero .split-word",{yPercent:110,rotate:4,duration:1.2,stagger:.07,ease:"expo.out"},"-=0.8").to(".hero .reveal",{opacity:1,y:0,duration:1,stagger:.1,ease:"expo.out"},"-=0.9").from(".hero-badge, .scroll-cue",{opacity:0,scale:.8,duration:1,ease:"expo.out"},"-=0.8"),uw()}function uw(){const i=se(".journey-track"),e=()=>Math.max(0,i.scrollWidth-innerWidth);ot.to(i,{x:()=>-e(),ease:"none",scrollTrigger:{trigger:".journey",pin:!0,scrub:1,start:"top top",end:()=>"+="+e(),invalidateOnRefresh:!0}}),kt("[data-model]").forEach(s=>{s.dataset.model!=="keep"&&je.create({trigger:s,start:"top 55%",end:"bottom 45%",onEnter:()=>t(s),onEnterBack:()=>t(s)})});function t(s){const a=s.dataset.model;Ag.classList.toggle("dim",a==="none"),Rs.show(a,s.dataset.side||"right")}kt("[data-split]").forEach(s=>{s.closest(".hero")||ot.from(kt(".split-word",s),{yPercent:110,rotate:3,duration:1.1,stagger:.06,ease:"expo.out",scrollTrigger:{trigger:s,start:"top 85%"}})}),je.batch(kt(".reveal").filter(s=>!s.closest(".hero")),{start:"top 88%",onEnter:s=>ot.to(s,{opacity:1,y:0,duration:1,stagger:.08,ease:"expo.out"})}),kt(".chapter-copy").forEach(s=>ot.from(s,{y:80,opacity:0,scale:.96,duration:1.2,ease:"expo.out",scrollTrigger:{trigger:s,start:"top 85%"}}));const n=kt(".layers li");je.create({trigger:"#burger",start:"top 30%",end:"bottom 70%",scrub:!0,onUpdate:s=>{const a=s.progress,o=a<.15?0:a>.85?1-(a-.85)/.15:Math.min(1,(a-.15)/.4);Rs.setExplode(Math.max(0,o));const l=Math.round(Math.min(1,a/.6)*n.length);n.forEach((c,u)=>c.classList.toggle("on",u<l))}}),kt("[data-count]").forEach(s=>{const a=parseFloat(s.dataset.count),o=+s.dataset.dec||0,l=s.dataset.suffix||"",c={v:0};ot.to(c,{v:a,duration:2.2,ease:"power3.out",scrollTrigger:{trigger:s,start:"top 85%"},onUpdate:()=>s.textContent=c.v.toFixed(o)+l})}),ot.from(".tier",{y:100,opacity:0,rotateX:25,duration:1.2,stagger:.12,ease:"expo.out",scrollTrigger:{trigger:".tiers",start:"top 80%"}}),je.batch(".store",{start:"top 90%",onEnter:s=>ot.from(s,{y:60,opacity:0,duration:1,stagger:.08,ease:"expo.out"})});let r=0;je.create({start:0,end:"max",onUpdate:s=>{const a=s.scroll();se("#nav").classList.toggle("scrolled",a>40),se("#nav").classList.toggle("hidden",a>r&&a>600&&!document.body.classList.contains("modal-open")),r=a}}),["chai","coffee","menu","atlas","build","club","stores"].forEach(s=>{je.create({trigger:"#"+s,start:"top 50%",end:"bottom 50%",onToggle:a=>kt(`.nav-links a[href="#${s}"]`).forEach(o=>o.classList.toggle("active",a.isActive))})}),je.refresh()}let Cg=0;function qf(i,e=1,t=40){const n=i.querySelector(".marquee-track");n.innerHTML+=n.innerHTML;let r=0;ot.ticker.add((s,a)=>{const o=n.scrollWidth/2;r-=e*(t+Cg*40)*(a/1e3),r<-o&&(r+=o),r>0&&(r-=o),n.style.transform=`translate3d(${r}px,0,0)`})}if(Tg){const i=se(".cursor-dot"),e=se(".cursor-ring"),t={x:innerWidth/2,y:innerHeight/2},n={...t};addEventListener("pointermove",r=>{t.x=r.clientX,t.y=r.clientY,i.style.transform=`translate(${t.x}px,${t.y}px) translate(-50%,-50%)`}),ot.ticker.add(()=>{n.x+=(t.x-n.x)*.16,n.y+=(t.y-n.y)*.16,e.style.transform=`translate(${n.x}px,${n.y}px) translate(-50%,-50%)`}),document.addEventListener("pointerover",r=>se(".cursor").classList.toggle("hover",!!r.target.closest("a,button,.card,.pill,label,[data-tilt]"))),document.addEventListener("pointermove",r=>{const s=r.target.closest("[data-magnetic]");if(kt("[data-magnetic].mag").forEach(o=>{o!==s&&(o.classList.remove("mag"),ot.to(o,{x:0,y:0,duration:.7,ease:"elastic.out(1,0.4)"}))}),!s)return;s.classList.add("mag");const a=s.getBoundingClientRect();ot.to(s,{x:(r.clientX-a.left-a.width/2)*.25,y:(r.clientY-a.top-a.height/2)*.3,duration:.4,ease:"power3.out"})})}function Rg(i,e=10,t){Tg&&(i.addEventListener("pointermove",n=>{const r=i.getBoundingClientRect(),s=(n.clientX-r.left)/r.width,a=(n.clientY-r.top)/r.height;ot.to(i,{rotateY:(s-.5)*e,rotateX:-(a-.5)*e,transformPerspective:900,duration:.5,ease:"power2.out"}),i.style.setProperty("--gx",s*100+"%"),i.style.setProperty("--gy",a*100+"%")}),i.addEventListener("pointerleave",()=>ot.to(i,{rotateY:0,rotateX:0,duration:.9,ease:"elastic.out(1,0.5)"})))}const Jh=se("#menuToggle"),Pg=se("#mobileNav");Jh.addEventListener("click",()=>{Jh.classList.toggle("open"),Pg.classList.toggle("open")});function hw(){Jh.classList.remove("open"),Pg.classList.remove("open")}let Yp;function Rc(i,e){const t=se("#toast");t.innerHTML=(e?`<img src="${e}" alt="">`:"✦")+`<span>${i}</span>`,t.classList.add("show"),clearTimeout(Yp),Yp=setTimeout(()=>t.classList.remove("show"),2400)}const rs=[],qp=new Map;function fw(i){return Yo.cache.get(i.id)}function Pc(i,e=!1){if(!Yo.cache.has(i.id)){if(rs.includes(i)){e&&(rs.splice(rs.indexOf(i),1),rs.unshift(i));return}e?rs.unshift(i):rs.push(i),dw()}}let Lu=!1;function dw(){if(Lu)return;Lu=!0;const i=()=>{const e=rs.shift();if(!e){Lu=!1;return}const t=Yo.render(e.model,e.id);kt(`img[data-thumb="${e.id}"]`).forEach(n=>{var r;n.src=t,n.classList.add("ready"),(r=n.parentElement.querySelector(".spin"))==null||r.remove()}),(qp.get(e.id)||[]).forEach(n=>n(t)),qp.delete(e.id),setTimeout(i,16)};setTimeout(i,0)}let Bo="chai",hs="",Lg=!1;const La=se("#menuTabs");La.innerHTML=Yf.map(i=>`<button class="tab${i.id===Bo?" active":""}" role="tab" data-cat="${i.id}">${i.label}</button>`).join("")+'<span class="tab-ink"></span>';function Lc(){const i=se(".tab.active",La),e=se(".tab-ink",La);if(!i){e.style.width="0";return}e.style.left=i.offsetLeft+"px",e.style.width=i.offsetWidth+"px"}La.addEventListener("click",i=>{const e=i.target.closest(".tab");e&&(Bo=e.dataset.cat,hs="",se("#menuSearch").value="",kt(".tab",La).forEach(t=>t.classList.toggle("active",t===e)),Lc(),e.scrollIntoView({inline:"center",block:"nearest",behavior:"smooth"}),Dc(!0))});se("#menuSearch").addEventListener("input",i=>{hs=i.target.value.trim().toLowerCase(),kt(".tab",La).forEach(e=>e.classList.toggle("active",!hs&&e.dataset.cat===Bo)),Lc(),Dc(!0)});se("#vegOnly").addEventListener("change",i=>{Lg=i.target.checked,Dc(!0)});const pw='<svg viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg>';function Dc(i){const e=se("#menuGrid");let t=hs?Cs.filter(n=>(n.name+" "+n.desc+" "+n.cat).toLowerCase().includes(hs)):Cs.filter(n=>n.cat===Bo);Lg&&(t=t.filter(n=>n.veg)),se("#catNote").textContent=hs?`${t.length} result${t.length===1?"":"s"} for "${hs}"`:Yf.find(n=>n.id===Bo).note,e.innerHTML=t.length?t.map(n=>{const r=fw(n);return`<article class="card" data-id="${n.id}">
      <div class="card-glare"></div>
      ${n.tag?`<span class="card-tag">${n.tag}</span>`:""}
      <div class="card-img">${r?"":'<span class="spin"></span>'}<img data-thumb="${n.id}" alt="${n.name}" ${r?`src="${r}" class="ready"`:""}></div>
      <div class="card-body">
        <div class="card-title"><h3>${n.name}</h3><span class="veg${n.veg?"":" non"}" title="${n.veg?"Vegetarian":"Non-vegetarian"}"></span></div>
        <p>${n.desc}</p>
        <div class="card-foot"><span class="price">${Ti(n.price)}</span><button class="add" data-add="${n.id}" aria-label="Add ${n.name}">${pw}</button></div>
      </div>
    </article>`}).join(""):'<div class="empty-grid">Nothing matches. Try "chai" or "pizza".</div>',[...t].reverse().forEach(n=>Pc(n,!0)),kt(".card",e).forEach(n=>Rg(n,12)),i&&ot.fromTo(kt(".card",e),{y:40,opacity:0,rotateX:-15},{y:0,opacity:1,rotateX:0,duration:.8,stagger:.04,ease:"expo.out"}),requestAnimationFrame(()=>je.refresh())}se("#menuGrid").addEventListener("click",i=>{const e=i.target.closest("[data-add]");if(e){i.stopPropagation();const n=Cs.find(r=>r.id===e.dataset.add);jf({id:n.id,name:n.name,price:n.price,thumb:n.id}),mw(e.closest(".card").querySelector("img"));return}const t=i.target.closest(".card");t&&Dg(Cs.find(n=>n.id===t.dataset.id))});function mw(i){if(!i||!i.src)return;const e=i.getBoundingClientRect(),t=se("#cartBtn").getBoundingClientRect(),n=i.cloneNode();Object.assign(n.style,{position:"fixed",left:e.left+"px",top:e.top+"px",width:e.width+"px",height:e.height+"px",zIndex:150,pointerEvents:"none",borderRadius:"20px"}),document.body.appendChild(n),ot.to(n,{left:t.left+t.width/2-20,top:t.top+t.height/2-20,width:40,height:40,rotate:360,opacity:.6,duration:.9,ease:"power3.in",onComplete:()=>{n.remove(),se("#cartBtn").classList.remove("bump"),se("#cartBtn").offsetWidth,se("#cartBtn").classList.add("bump")}})}let Dr,Tr,ga=1,Ho=0;const $f={chai:[["Regular",0],["Large",40],["Flask (4)",180]],black:[["Single",0],["Double",50]],coffee:[["Regular",0],["Large",50]],cold:[["Regular",0],["Large",50]],pizza:[['8" Personal',0],['12" Medium',160],['14" Large',280]],burger:[["Just the burger",0],["Meal + fries + drink",129]]};function Dg(i){Tr=i,ga=1,Ho=0,se("#mCat").textContent=Yf.find(t=>t.id===i.cat).label+(i.tag?" · "+i.tag:""),se("#mName").textContent=i.name,se("#mDesc").textContent=i.desc;const e=$f[i.cat]||[];se("#mSizes").innerHTML=e.map(([t,n],r)=>`<button class="pill${r?"":" active"}" data-size="${r}">${t}${n?`<small>+${Ti(n)}</small>`:""}</button>`).join(""),se("#mQty").textContent=1,jh(),se("#modal").classList.add("open"),se("#modal").setAttribute("aria-hidden","false"),document.body.classList.add("modal-open"),qi.stop(),Dr||(Dr=new nw(se("#viewer"))),requestAnimationFrame(()=>{Dr.load(i.model),Dr.start()})}function jh(){var e;const i=((e=($f[Tr.cat]||[])[Ho])==null?void 0:e[1])||0;se("#mPrice").textContent=Ti((Tr.price+i)*ga)}function Zf(){se("#modal").classList.remove("open"),se("#modal").setAttribute("aria-hidden","true"),document.body.classList.remove("modal-open"),qi.start(),setTimeout(()=>Dr&&Dr.stop(),500)}se("#modal").addEventListener("click",i=>{if(i.target.closest("[data-close]"))return Zf();const e=i.target.closest("[data-size]");e&&(Ho=+e.dataset.size,kt("#mSizes .pill").forEach(n=>n.classList.toggle("active",n===e)),jh());const t=i.target.closest("[data-q]");t&&(ga=Math.max(1,ga+ +t.dataset.q),se("#mQty").textContent=ga,jh())});se("#mAdd").addEventListener("click",()=>{const i=($f[Tr.cat]||[])[Ho];jf({id:Tr.id+(i?"-"+Ho:""),name:Tr.name,note:i?i[0]:"",price:Tr.price+(i?i[1]:0),thumb:Tr.id},ga),Zf()});addEventListener("keydown",i=>{i.key==="Escape"&&(Zf(),Bg())});addEventListener("resize",()=>{Dr&&Dr.resize(),Lc()});let pc="All",Kf="espresso";se("#atlasFilters").innerHTML=iw.map(i=>`<button data-fam="${i}" class="${i===pc?"active":""}">${i}</button>`).join("");se("#atlasFilters").addEventListener("click",i=>{const e=i.target.closest("[data-fam]");e&&(pc=e.dataset.fam,kt("#atlasFilters button").forEach(t=>t.classList.toggle("active",t===e)),Ig())});function Ig(){const i=Eg.filter(e=>pc==="All"||e.family===pc);se("#atlasItems").innerHTML=i.map(e=>`<button data-atlas="${e.id}" class="${e.id===Kf?"active":""}"><i style="background:${e.layers[e.layers.length-1][0]}"></i>${e.name}</button>`).join(""),ot.from("#atlasItems button",{opacity:0,x:-10,duration:.4,stagger:.015})}se("#atlasItems").addEventListener("click",i=>{const e=i.target.closest("[data-atlas]");e&&(Kf=e.dataset.atlas,kt("#atlasItems button").forEach(t=>t.classList.toggle("active",t===e)),Ug())});function Ug(){const i=Eg.find(u=>u.id===Kf),e=Math.round(Math.min(330,Math.max(130,110+i.ml*.62))),t=i.ml<80?130:i.ml>280?165:175,n=se("#vessel");n.style.height=e+"px",n.style.width=t+"px",n.style.borderRadius=i.ml<80?"8px 8px 56px 56px":i.temp==="Cold"?"6px 6px 20px 20px":"10px 10px 46px 46px";const r=e*.88,s=se("#vesselLayers");for(;s.children.length<i.layers.length;)s.appendChild(Object.assign(document.createElement("div"),{className:"vlayer",style:"height:0"}));[...s.children].forEach((u,h)=>{const d=i.layers[h];if(!d){u.style.height="0px";return}const[f,g,_]=d;u.style.height=r*g/100+"px",u.style.backgroundColor=f,u.className="vlayer"+(/ice/i.test(_)?" ice":"")+(/foam|froth|head|cream|whipped/i.test(_)?" foam":"")+(h===i.layers.length-1?" top":"")});const a=se("#vesselLabels");a.style.height=r+"px",a.innerHTML=i.layers.map(([,u,h])=>`<div class="vlabel" style="height:${r*u/100}px">${h}<small>${u}%</small></div>`).join("");const o=se("#vesselSteam");o.classList.toggle("off",i.temp==="Cold"),o.style.bottom=e+16+"px";const l=se(".atlas-info");l.classList.remove("swap"),l.offsetWidth,l.classList.add("swap"),se("#atlasFamily").textContent=i.family,se("#atlasName").textContent=i.name,se("#atlasDesc").textContent=i.desc,se("#atlasOrigin").textContent=i.origin,se("#atlasMl").textContent=i.ml+" ml",se("#atlasCaf").textContent="~"+i.caffeine+" mg",se("#atlasTemp").textContent=i.temp,se("#atlasStrength").style.width=i.strength*20+"%";const c=Cs.find(u=>u.id===i.id||u.name.toLowerCase().includes(i.name.toLowerCase().split(" ")[0]));se("#atlasOrder").style.display=c?"":"none",se("#atlasOrder").onclick=()=>c&&Dg(c)}const Nt={base:"assam",milk:"full",strength:"regular",sweet:"regular",addins:new Set(["ginger","cardamom"]),size:"regular"},gw=[["base","Tea base"],["milk","Milk"],["strength","Strength"],["sweet","Sweetener"],["addins","Add-ins (pick any)"],["size","Size"]];se("#builder").innerHTML=gw.map(([i,e])=>`
  <div class="bstep" data-step="${i}"><h4>${e}<span></span></h4><div class="pills">
    ${Cc[i].map(t=>`<button class="pill" data-k="${i}" data-v="${t.id}">${t.label}${t.price&&i!=="size"?`<small>+${t.price}</small>`:i==="size"?`<small>${t.ml}ml</small>`:""}</button>`).join("")}
  </div></div>`).join("");se("#builder").addEventListener("click",i=>{const e=i.target.closest(".pill");if(!e)return;const{k:t,v:n}=e.dataset;t==="addins"?Nt.addins.has(n)?Nt.addins.delete(n):Nt.addins.add(n):Nt[t]=n,ot.fromTo(e,{scale:.9},{scale:1,duration:.5,ease:"elastic.out(1,0.4)"}),kg()});const di=i=>Cc[i].find(e=>e.id===Nt[i]);function js(i,e,t){const n=parseInt(i.slice(1),16),r=parseInt(e.slice(1),16),s=a=>Math.round((n>>a&255)*(1-t)+(r>>a&255)*t);return"#"+(s(16)<<16|s(8)<<8|s(0)).toString(16).padStart(6,"0")}function Ng(){const i={assam:"#5c2a0c",darjeeling:"#8a4515",nilgiri:"#6e3410",green:"#7a6a1c"}[Nt.base],e=di("strength").s,t=di("milk").milk;let n=js(js(i,"#d08a3a",.6),i,e);return n=js(n,"#f2e4cc",t*(1.05-e*.45)),Nt.addins.has("saffron")&&(n=js(n,"#e0a020",.22)),Nt.sweet==="jaggery"&&(n=js(n,"#8a5020",.1)),Nt.base==="green"&&t===0&&(n=js(n,"#c8b040",.3)),n}function Og(){const i=[];Nt.strength==="kadak"&&i.push("Kadak"),Nt.strength==="light"&&i.push("Light");const e=[...Nt.addins].map(t=>Cc.addins.find(n=>n.id===t).label);return e.length>2?i.push(e.slice(0,2).join("-")+" +"+(e.length-2)):e.length&&i.push(e.join("-")),i.push(Nt.base==="green"?"Green Chai":Nt.milk==="none"?"Black Chai":e.length>=3?"Masala Chai":"Chai"),i.join(" ")}function Fg(){return di("size").price+di("base").price+di("milk").price+di("strength").price+di("sweet").price+[...Nt.addins].reduce((i,e)=>i+Cc.addins.find(t=>t.id===e).price,0)}let $p;function kg(){kt("#builder .pill").forEach(n=>{const{k:r,v:s}=n.dataset;n.classList.toggle("active",r==="addins"?Nt.addins.has(s):Nt[r]===s)}),kt("#builder .bstep").forEach(n=>{const r=n.dataset.step;n.querySelector("h4 span").textContent=r==="addins"?Nt.addins.size?Nt.addins.size+" selected":"none":di(r).label}),se("#blendName").textContent=Og(),se("#blendMeta").textContent=`${di("size").ml} ml · ${di("base").label} · ${di("milk").label} · ${di("sweet").label}`;const i=Fg(),e=se("#blendPrice"),t={v:parseInt(e.textContent.replace(/\D/g,""))||i};ot.to(t,{v:i,duration:.6,onUpdate:()=>e.textContent=Ti(t.v)}),clearTimeout($p),$p=setTimeout(()=>Rs.setChaiColor(Ng()),30)}se("#blendAdd").addEventListener("click",()=>{const i=Ng(),e="custom-"+[Nt.base,Nt.milk,Nt.strength,Nt.sweet,[...Nt.addins].sort().join("."),Nt.size].join("_"),t={id:e,model:{type:"kulhad",liquid:i}};Pc(t,!0),jf({id:e,name:Og(),note:se("#blendMeta").textContent,price:Fg(),thumb:e,custom:t})});const _w='<svg viewBox="0 0 24 24"><path d="M5 7h14l-2 12q-5 2-10 0Z"/><path d="M5 7h14"/></svg>';se("#stamps").innerHTML=Array.from({length:10},(i,e)=>`<button class="stamp${e===9?" free":""}${e<6?" on":""}" aria-label="Stamp ${e+1}">${e===9?'<b style="font-size:11px">FREE</b>':_w}</button>`).join("");se("#stamps").addEventListener("click",i=>{const e=i.target.closest(".stamp");e&&(e.classList.toggle("on"),ot.fromTo(e,{scale:.6},{scale:1,duration:.7,ease:"elastic.out(1,0.35)"}),kt(".stamp.on").length===10&&Rc("Your 10th chai is on us! ☕"))});kt("[data-tilt]").forEach(i=>Rg(i,14));const Ul=new Date().getHours();se("#storeGrid").innerHTML=rw.map(i=>`<article class="store">
  <div class="store-city">${i.city}</div><div class="store-area">${i.area}</div>
  <div class="store-feat">${i.feat.map(e=>`<span>${e}</span>`).join("")}</div>
  <div class="store-meta"><span>${i.hours}</span><span class="${Ul>=7||Ul<1?"is-open":""}">${Ul>=7||Ul<1?"● Open now":"Opens 7 AM"}</span></div>
</article>`).join("");se("#reviewTrack").innerHTML=sw.map(i=>`<article class="review"><div class="stars">★★★★★</div><p>“${i.text}”</p><div class="who"><i style="background:${i.c}">${i.name[0]}</i><div>${i.name}<small>${i.where}</small></div></div></article>`).join("");let _i=[];try{_i=JSON.parse(localStorage.getItem("chaiverse-cart")||"[]")}catch{_i=[]}let kr="delivery";function Jf(){try{localStorage.setItem("chaiverse-cart",JSON.stringify(_i))}catch{}}function jf(i,e=1){const t=_i.find(r=>r.id===i.id);t?t.qty+=e:_i.push({...i,qty:e,custom:i.custom?{model:i.custom.model}:void 0}),Jf(),qo();const n=Yo.cache.get(i.thumb);Rc(`${i.name} added to your order`,n),se("#cartBtn").classList.remove("bump"),se("#cartBtn").offsetWidth,se("#cartBtn").classList.add("bump")}function zg(){const i=_i.reduce((n,r)=>n+r.price*r.qty,0),e=i*.05,t=kr==="pickup"||i===0||i>=499?0:39;return{sub:i,tax:e,fee:t,total:i+e+t}}function qo(){const i=_i.reduce((n,r)=>n+r.qty,0),e=se("#cartCount");e.textContent=i,e.classList.toggle("show",i>0),se('[data-step="cart"]').classList.toggle("empty",!_i.length),se("#cartItems").innerHTML=_i.map((n,r)=>{const s=Yo.cache.get(n.thumb)||"";if(!s){const a=Cs.find(o=>o.id===n.thumb)||n.custom&&{id:n.thumb,model:n.custom.model};a&&Pc(a)}return`<div class="citem"><img data-thumb="${n.thumb}" ${s?`src="${s}"`:""} alt=""><div><h5>${n.name}</h5>${n.note?`<small>${n.note}</small>`:""}<div class="citem-price">${Ti(n.price*n.qty)}</div></div>
      <div class="qty"><button data-ci="${r}" data-d="-1" aria-label="Less">−</button><span>${n.qty}</span><button data-ci="${r}" data-d="1" aria-label="More">+</button></div></div>`}).join("");const t=zg();se("#tSub").textContent=Ti(t.sub),se("#tTax").textContent=Ti(t.tax),se("#tFeeLabel").textContent=kr==="pickup"?"Pickup":t.fee?"Delivery (free over ₹499)":"Delivery",se("#tFee").textContent=t.fee?Ti(t.fee):"FREE",se("#tTotal").textContent=Ti(t.total),se("#tTotal2").textContent=Ti(t.total),se(".addr").style.display=kr==="pickup"?"none":""}se("#cartItems").addEventListener("click",i=>{const e=i.target.closest("[data-ci]");if(!e)return;const t=_i[+e.dataset.ci];t.qty+=+e.dataset.d,t.qty<=0&&_i.splice(+e.dataset.ci,1),Jf(),qo()});se("#modeToggle").addEventListener("click",i=>{const e=i.target.closest("[data-mode]");e&&(kr=e.dataset.mode,kt("#modeToggle button").forEach(t=>t.classList.toggle("active",t===e)),se("#modeToggle").classList.toggle("pickup",kr==="pickup"),qo())});function Ic(i){kt(".dstep").forEach(e=>e.classList.toggle("active",e.dataset.step===i))}function vw(){Ic("cart"),se("#drawer").classList.add("open"),se("#drawer").setAttribute("aria-hidden","false"),qi.stop()}function Bg(){se("#drawer").classList.remove("open"),se("#drawer").setAttribute("aria-hidden","true"),se("#modal").classList.contains("open")||qi.start()}se("#cartBtn").addEventListener("click",vw);se("#drawer").addEventListener("click",i=>{i.target.closest("[data-close-cart]")&&Bg(),i.target.closest("[data-back]")&&Ic("cart")});se("#toCheckout").addEventListener("click",()=>Ic("details"));let Zp;se("#checkoutForm").addEventListener("submit",i=>{i.preventDefault();const e=new FormData(i.target);if(kr==="delivery"&&!String(e.get("address")).trim()){i.target.address.focus(),Rc("Please add a delivery address");return}const t="CV"+Math.floor(1e5+Math.random()*9e5);se("#doneMsg").innerHTML=`Thank you, ${String(e.get("name")).split(" ")[0]}! Order <b>#${t}</b> (${Ti(zg().total)}) is being brewed.`,se(".eta span").textContent=kr==="pickup"?"Ready for pickup in":"Arriving in";let n=kr==="pickup"?8*60:28*60;clearInterval(Zp);const r=()=>{se("#eta").textContent=`${String(Math.floor(n/60)).padStart(2,"0")}:${String(n%60).padStart(2,"0")}`,n=Math.max(0,n-1)};r(),Zp=setInterval(r,1e3),_i=[],Jf(),qo(),i.target.reset(),Ic("done")});se("#newsletter").addEventListener("submit",i=>{i.preventDefault(),i.target.reset(),Rc("You’re on the list. Welcome to the club!")});qf(se(".m1"),1,50);qf(se(".m2"),-1,40);qf(se(".r1"),1,30);Dc(!1);Lc();Ig();Ug();kg();qo();Cs.forEach(i=>Pc(i));

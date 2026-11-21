var Jg=Object.defineProperty;var jg=(i,e,t)=>e in i?Jg(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var Xe=(i,e,t)=>jg(i,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function rr(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function am(i,e){i.prototype=Object.create(e.prototype),i.prototype.constructor=i,i.__proto__=e}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var si={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},va={duration:.5,overwrite:!1,delay:0},nd,En,zt,mi=1e8,It=1/mi,Uu=Math.PI*2,Qg=Uu/4,e_=0,om=Math.sqrt,t_=Math.cos,n_=Math.sin,_n=function(e){return typeof e=="string"},Xt=function(e){return typeof e=="function"},fr=function(e){return typeof e=="number"},id=function(e){return typeof e>"u"},Wi=function(e){return typeof e=="object"},Wn=function(e){return e!==!1},rd=function(){return typeof window<"u"},Ko=function(e){return Xt(e)||_n(e)},lm=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Tn=Array.isArray,Nu=/(?:-?\.?\d|\.)+/gi,cm=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ia=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Oc=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,um=/[+-]=-?[.\d]+/,hm=/[^,'"\[\]\s]+/gi,i_=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ht,Ui,Ou,sd,ai={},jl={},dm,fm=function(e){return(jl=Ms(e,ai))&&$n},ad=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Co=function(e,t){return!t&&console.warn(e)},pm=function(e,t){return e&&(ai[e]=t)&&jl&&(jl[e]=t)||ai},Ro=function(){return 0},r_={suppressEvents:!0,isStart:!0,kill:!1},Ol={suppressEvents:!0,kill:!1},s_={suppressEvents:!0},od={},Or=[],Fu={},mm,ti={},Fc={},sf=30,Fl=[],ld="",cd=function(e){var t=e[0],n,r;if(Wi(t)||Xt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(r=Fl.length;r--&&!Fl[r].targetTest(t););n=Fl[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new zm(e[r],n)))||e.splice(r,1);return e},ps=function(e){return e._gsap||cd(gi(e))[0]._gsap},gm=function(e,t,n){return(n=e[t])&&Xt(n)?e[t]():id(n)&&e.getAttribute&&e.getAttribute(t)||n},Xn=function(e,t){return(e=e.split(",")).forEach(t)||e},Zt=function(e){return Math.round(e*1e5)/1e5||0},fn=function(e){return Math.round(e*1e7)/1e7||0},la=function(e,t){var n=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+r:n==="-"?e-r:n==="*"?e*r:e/r},a_=function(e,t){for(var n=t.length,r=0;e.indexOf(t[r])<0&&++r<n;);return r<n},Ql=function(){var e=Or.length,t=Or.slice(0),n,r;for(Fu={},Or.length=0,n=0;n<e;n++)r=t[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},_m=function(e,t,n,r){Or.length&&!En&&Ql(),e.render(t,n,En&&t<0&&(e._initted||e._startAt)),Or.length&&!En&&Ql()},vm=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(hm).length<2?t:_n(e)?e.trim():e},xm=function(e){return e},yi=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},o_=function(e){return function(t,n){for(var r in n)r in t||r==="duration"&&e||r==="ease"||(t[r]=n[r])}},Ms=function(e,t){for(var n in t)e[n]=t[n];return e},af=function i(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Wi(t[n])?i(e[n]||(e[n]={}),t[n]):t[n]);return e},ec=function(e,t){var n={},r;for(r in e)r in t||(n[r]=e[r]);return n},lo=function(e){var t=e.parent||Ht,n=e.keyframes?o_(Tn(e.keyframes)):yi;if(Wn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},l_=function(e,t){for(var n=e.length,r=n===t.length;r&&n--&&e[n]===t[n];);return n<0},ym=function(e,t,n,r,s){var a=e[r],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[r]=t,t._prev=a,t.parent=t._dp=e,t},vc=function(e,t,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var s=t._prev,a=t._next;s?s._next=a:e[n]===t&&(e[n]=a),a?a._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},Hr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},ms=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},c_=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},ku=function(e,t,n,r){return e._startAt&&(En?e._startAt.revert(Ol):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},u_=function i(e){return!e||e._ts&&i(e.parent)},of=function(e){return e._repeat?xa(e._tTime,e=e.duration()+e._rDelay)*e:0},xa=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},tc=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},xc=function(e){return e._end=fn(e._start+(e._tDur/Math.abs(e._ts||e._rts||It)||0))},yc=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=fn(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),xc(e),n._dirty||ms(n,e)),e},Mm=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=tc(e.rawTime(),t),(!t._dur||Xo(0,t.totalDuration(),n)-t._tTime>It)&&t.render(n,!0)),ms(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-It}},Fi=function(e,t,n,r){return t.parent&&Hr(t),t._start=fn((fr(n)?n:n||e!==Ht?hi(e,n,t):e._time)+t._delay),t._end=fn(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),ym(e,t,"_first","_last",e._sort?"_start":0),zu(t)||(e._recent=t),r||Mm(e,t),e._ts<0&&yc(e,e._tTime),e},Sm=function(e,t){return(ai.ScrollTrigger||ad("scrollTrigger",t))&&ai.ScrollTrigger.create(t,e)},bm=function(e,t,n,r,s){if(hd(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!En&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&mm!==ni.frame)return Or.push(e),e._lazy=[s,r],1},h_=function i(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||i(t))},zu=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},d_=function(e,t,n,r){var s=e.ratio,a=t<0||!t&&(!e._start&&h_(e)&&!(!e._initted&&zu(e))||(e._ts<0||e._dp._ts<0)&&!zu(e))?0:1,o=e._rDelay,l=0,c,u,h;if(o&&e._repeat&&(l=Xo(0,e._tDur,t),u=xa(l,o),e._yoyo&&u&1&&(a=1-a),u!==xa(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||En||r||e._zTime===It||!t&&e._zTime){if(!e._initted&&bm(e,t,r,n,l))return;for(h=e._zTime,e._zTime=t||(n?It:0),n||(n=t&&!h),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&ku(e,t,n,!0),e._onUpdate&&!n&&ri(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&ri(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Hr(e,1),!n&&!En&&(ri(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},f_=function(e,t,n){var r;if(n>t)for(r=e._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},ya=function(e,t,n,r){var s=e._repeat,a=fn(t)||0,o=e._tTime/e._tDur;return o&&!r&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:fn(a*(s+1)+e._rDelay*s):a,o>0&&!r&&yc(e,e._tTime=e._tDur*o),e.parent&&xc(e),n||ms(e.parent,e),e},lf=function(e){return e instanceof On?ms(e):ya(e,e._dur)},p_={_start:0,endTime:Ro,totalDuration:Ro},hi=function i(e,t,n){var r=e.labels,s=e._recent||p_,a=e.duration()>=mi?s.endTime(!1):e._dur,o,l,c;return _n(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(t in r||(r[t]=a),r[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(Tn(n)?n[0]:n).totalDuration()),o>1?i(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},co=function(e,t,n){var r=fr(t[1]),s=(r?2:1)+(e<2?0:1),a=t[s],o,l;if(r&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Wn(l.vars.inherit)&&l.parent;a.immediateRender=Wn(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new tn(t[0],a,t[s+1])},Yr=function(e,t){return e||e===0?t(e):t},Xo=function(e,t,n){return n<e?e:n>t?t:n},bn=function(e,t){return!_n(e)||!(t=i_.exec(e))?"":t[1]},m_=function(e,t,n){return Yr(n,function(r){return Xo(e,t,r)})},Bu=[].slice,wm=function(e,t){return e&&Wi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Wi(e[0]))&&!e.nodeType&&e!==Ui},g_=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(r){var s;return _n(r)&&!t||wm(r,1)?(s=n).push.apply(s,gi(r)):n.push(r)})||n},gi=function(e,t,n){return zt&&!t&&zt.selector?zt.selector(e):_n(e)&&!n&&(Ou||!Ma())?Bu.call((t||sd).querySelectorAll(e),0):Tn(e)?g_(e,n):wm(e)?Bu.call(e,0):e?[e]:[]},Hu=function(e){return e=gi(e)[0]||Co("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return gi(t,n.querySelectorAll?n:n===e?Co("Invalid scope")||sd.createElement("div"):e)}},Em=function(e){return e.sort(function(){return .5-Math.random()})},Tm=function(e){if(Xt(e))return e;var t=Wi(e)?e:{each:e},n=gs(t.ease),r=t.from||0,s=parseFloat(t.base)||0,a={},o=r>0&&r<1,l=isNaN(r)||o,c=t.axis,u=r,h=r;return _n(r)?u=h={center:.5,edges:.5,end:1}[r]||0:!o&&l&&(u=r[0],h=r[1]),function(f,d,g){var _=(g||t).length,m=a[_],p,y,x,v,A,b,w,C,S;if(!m){if(S=t.grid==="auto"?0:(t.grid||[1,mi])[1],!S){for(w=-mi;w<(w=g[S++].getBoundingClientRect().left)&&S<_;);S<_&&S--}for(m=a[_]=[],p=l?Math.min(S,_)*u-.5:r%S,y=S===mi?0:l?_*h/S-.5:r/S|0,w=0,C=mi,b=0;b<_;b++)x=b%S-p,v=y-(b/S|0),m[b]=A=c?Math.abs(c==="y"?v:x):om(x*x+v*v),A>w&&(w=A),A<C&&(C=A);r==="random"&&Em(m),m.max=w-C,m.min=C,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(S>_?_-1:c?c==="y"?_/S:S:Math.max(S,_/S))||0)*(r==="edges"?-1:1),m.b=_<0?s-_:s,m.u=bn(t.amount||t.each)||0,n=n&&_<0?Om(n):n}return _=(m[f]-m.min)/m.max||0,fn(m.b+(n?n(_):_)*m.v)+m.u}},Vu=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var r=fn(Math.round(parseFloat(n)/e)*e*t);return(r-r%1)/t+(fr(n)?0:bn(n))}},Am=function(e,t){var n=Tn(e),r,s;return!n&&Wi(e)&&(r=n=e.radius||mi,e.values?(e=gi(e.values),(s=!fr(e[0]))&&(r*=r)):e=Vu(e.increment)),Yr(t,n?Xt(e)?function(a){return s=e(a),Math.abs(s-a)<=r?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=mi,u=0,h=e.length,f,d;h--;)s?(f=e[h].x-o,d=e[h].y-l,f=f*f+d*d):f=Math.abs(e[h]-o),f<c&&(c=f,u=h);return u=!r||c<=r?e[u]:a,s||u===a||fr(a)?u:u+bn(a)}:Vu(e))},Cm=function(e,t,n,r){return Yr(Tn(e)?!t:n===!0?!!(n=0):!r,function(){return Tn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*r)/r})},__=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduce(function(s,a){return a(s)},r)}},v_=function(e,t){return function(n){return e(parseFloat(n))+(t||bn(n))}},x_=function(e,t,n){return Pm(e,t,0,1,n)},Rm=function(e,t,n){return Yr(n,function(r){return e[~~t(r)]})},y_=function i(e,t,n){var r=t-e;return Tn(e)?Rm(e,i(0,e.length),t):Yr(n,function(s){return(r+(s-e)%r)%r+e})},M_=function i(e,t,n){var r=t-e,s=r*2;return Tn(e)?Rm(e,i(0,e.length-1),t):Yr(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>r?s-a:a)})},Po=function(e){for(var t=0,n="",r,s,a,o;~(r=e.indexOf("random(",t));)a=e.indexOf(")",r),o=e.charAt(r+7)==="[",s=e.substr(r+7,a-r-7).match(o?hm:Nu),n+=e.substr(t,r-t)+Cm(o?s:+s[0],o?0:+s[1],+s[2]||1e-5),t=a+1;return n+e.substr(t,e.length-t)},Pm=function(e,t,n,r,s){var a=t-e,o=r-n;return Yr(s,function(l){return n+((l-e)/a*o||0)})},S_=function i(e,t,n,r){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var a=_n(e),o={},l,c,u,h,f;if(n===!0&&(r=1)&&(n=null),a)e={p:e},t={p:t};else if(Tn(e)&&!Tn(t)){for(u=[],h=e.length,f=h-2,c=1;c<h;c++)u.push(i(e[c-1],e[c]));h--,s=function(g){g*=h;var _=Math.min(f,~~g);return u[_](g-_)},n=t}else r||(e=Ms(Tn(e)?[]:{},e));if(!u){for(l in t)ud.call(o,e,l,"get",t[l]);s=function(g){return pd(g,o)||(a?e.p:e)}}}return Yr(n,s)},cf=function(e,t,n){var r=e.labels,s=mi,a,o,l;for(a in r)o=r[a]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},ri=function(e,t,n){var r=e.vars,s=r[t],a=zt,o=e._ctx,l,c,u;if(s)return l=r[t+"Params"],c=r.callbackScope||e,n&&Or.length&&Ql(),o&&(zt=o),u=l?s.apply(c,l):s.call(c),zt=a,u},Qa=function(e){return Hr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!En),e.progress()<1&&ri(e,"onInterrupt"),e},ra,Lm=[],Dm=function(e){if(e)if(e=!e.name&&e.default||e,rd()||e.headless){var t=e.name,n=Xt(e),r=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Ro,render:pd,add:ud,kill:k_,modifier:F_,rawVars:0},a={targetTest:0,get:0,getSetter:fd,aliases:{},register:0};if(Ma(),e!==r){if(ti[t])return;yi(r,yi(ec(e,s),a)),Ms(r.prototype,Ms(s,ec(e,a))),ti[r.prop=t]=r,e.targetTest&&(Fl.push(r),od[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}pm(t,r),e.register&&e.register($n,r,Yn)}else Lm.push(e)},Pt=255,eo={aqua:[0,Pt,Pt],lime:[0,Pt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Pt],navy:[0,0,128],white:[Pt,Pt,Pt],olive:[128,128,0],yellow:[Pt,Pt,0],orange:[Pt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Pt,0,0],pink:[Pt,192,203],cyan:[0,Pt,Pt],transparent:[Pt,Pt,Pt,0]},kc=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Pt+.5|0},Im=function(e,t,n){var r=e?fr(e)?[e>>16,e>>8&Pt,e&Pt]:0:eo.black,s,a,o,l,c,u,h,f,d,g;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),eo[e])r=eo[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&Pt,r&Pt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&Pt,e&Pt]}else if(e.substr(0,3)==="hsl"){if(r=g=e.match(Nu),!t)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,r.length>3&&(r[3]*=1),r[0]=kc(l+1/3,s,a),r[1]=kc(l,s,a),r[2]=kc(l-1/3,s,a);else if(~e.indexOf("="))return r=e.match(cm),n&&r.length<4&&(r[3]=1),r}else r=e.match(Nu)||eo.transparent;r=r.map(Number)}return t&&!g&&(s=r[0]/Pt,a=r[1]/Pt,o=r[2]/Pt,h=Math.max(s,a,o),f=Math.min(s,a,o),u=(h+f)/2,h===f?l=c=0:(d=h-f,c=u>.5?d/(2-h-f):d/(h+f),l=h===s?(a-o)/d+(a<o?6:0):h===a?(o-s)/d+2:(s-a)/d+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),n&&r.length<4&&(r[3]=1),r},Um=function(e){var t=[],n=[],r=-1;return e.split(Fr).forEach(function(s){var a=s.match(ia)||[];t.push.apply(t,a),n.push(r+=a.length+1)}),t.c=n,t},uf=function(e,t,n){var r="",s=(e+r).match(Fr),a=t?"hsla(":"rgba(",o=0,l,c,u,h;if(!s)return e;if(s=s.map(function(f){return(f=Im(f,t,1))&&a+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=Um(e),l=n.c,l.join(r)!==u.c.join(r)))for(c=e.replace(Fr,"1").split(ia),h=c.length-1;o<h;o++)r+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(Fr),h=c.length-1;o<h;o++)r+=c[o]+s[o];return r+c[h]},Fr=function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in eo)i+="|"+e+"\\b";return new RegExp(i+")","gi")}(),b_=/hsl[a]?\(/,Nm=function(e){var t=e.join(" "),n;if(Fr.lastIndex=0,Fr.test(t))return n=b_.test(t),e[1]=uf(e[1],n),e[0]=uf(e[0],n,Um(e[1])),!0},Lo,ni=function(){var i=Date.now,e=500,t=33,n=i(),r=n,s=1e3/240,a=s,o=[],l,c,u,h,f,d,g=function _(m){var p=i()-r,y=m===!0,x,v,A,b;if((p>e||p<0)&&(n+=p-t),r+=p,A=r-n,x=A-a,(x>0||y)&&(b=++h.frame,f=A-h.time*1e3,h.time=A=A/1e3,a+=x+(x>=s?4:s-x),v=1),y||(l=c(_)),v)for(d=0;d<o.length;d++)o[d](A,f,b,m)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){dm&&(!Ou&&rd()&&(Ui=Ou=window,sd=Ui.document||{},ai.gsap=$n,(Ui.gsapVersions||(Ui.gsapVersions=[])).push($n.version),fm(jl||Ui.GreenSockGlobals||!Ui.gsap&&Ui||{}),Lm.forEach(Dm)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(m){return setTimeout(m,a-h.time*1e3+1|0)},Lo=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Lo=0,c=Ro},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){s=1e3/(m||240),a=h.time*1e3+s},add:function(m,p,y){var x=p?function(v,A,b,w){m(v,A,b,w),h.remove(x)}:m;return h.remove(m),o[y?"unshift":"push"](x),Ma(),x},remove:function(m,p){~(p=o.indexOf(m))&&o.splice(p,1)&&d>=p&&d--},_listeners:o},h}(),Ma=function(){return!Lo&&ni.wake()},ft={},w_=/^[\d.\-M][\d.\-,\s]/,E_=/["']/g,T_=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),r=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[r]=isNaN(c)?c.replace(E_,"").trim():+c,r=l.substr(o+1).trim();return t},A_=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<n?e.indexOf(")",n+1):n)},C_=function(e){var t=(e+"").split("("),n=ft[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[T_(t[1])]:A_(e).split(",").map(vm)):ft._CE&&w_.test(e)?ft._CE("",e):n},Om=function(e){return function(t){return 1-e(1-t)}},Fm=function i(e,t){for(var n=e._first,r;n;)n instanceof On?i(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?i(n.timeline,t):(r=n._ease,n._ease=n._yEase,n._yEase=r,n._yoyo=t)),n=n._next},gs=function(e,t){return e&&(Xt(e)?e:ft[e]||C_(e))||t},Ds=function(e,t,n,r){n===void 0&&(n=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:r},a;return Xn(e,function(o){ft[o]=ai[o]=s,ft[a=o.toLowerCase()]=n;for(var l in s)ft[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ft[o+"."+l]=s[l]}),s},km=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},zc=function i(e,t,n){var r=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),a=s/Uu*(Math.asin(1/r)||0),o=function(u){return u===1?1:r*Math.pow(2,-10*u)*n_((u-a)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:km(o);return s=Uu/s,l.config=function(c,u){return i(e,c,u)},l},Bc=function i(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},r=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:km(n);return r.config=function(s){return i(e,s)},r};Xn("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,e){var t=e<5?e+1:e;Ds(i+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});ft.Linear.easeNone=ft.none=ft.Linear.easeIn;Ds("Elastic",zc("in"),zc("out"),zc());(function(i,e){var t=1/e,n=2*t,r=2.5*t,s=function(o){return o<t?i*o*o:o<n?i*Math.pow(o-1.5/e,2)+.75:o<r?i*(o-=2.25/e)*o+.9375:i*Math.pow(o-2.625/e,2)+.984375};Ds("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);Ds("Expo",function(i){return i?Math.pow(2,10*(i-1)):0});Ds("Circ",function(i){return-(om(1-i*i)-1)});Ds("Sine",function(i){return i===1?1:-t_(i*Qg)+1});Ds("Back",Bc("in"),Bc("out"),Bc());ft.SteppedEase=ft.steps=ai.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,r=e+(t?0:1),s=t?1:0,a=1-It;return function(o){return((r*Xo(0,a,o)|0)+s)*n}}};va.ease=ft["quad.out"];Xn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return ld+=i+","+i+"Params,"});var zm=function(e,t){this.id=e_++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:gm,this.set=t?t.getSetter:fd},Do=function(){function i(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,ya(this,+t.duration,1,1),this.data=t.data,zt&&(this._ctx=zt,zt.data.push(this)),Lo||ni.wake()}var e=i.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,ya(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,r){if(Ma(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(yc(this,n),!s._dp||s.parent||Mm(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Fi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===It||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),_m(this,n,r)),this},e.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+of(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},e.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},e.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+of(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,r):this._repeat?xa(this._tTime,s)+1:1},e.timeScale=function(n,r){if(!arguments.length)return this._rts===-It?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?tc(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-It?0:this._rts,this.totalTime(Xo(-Math.abs(this._delay),this._tDur,s),r!==!1),xc(this),c_(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ma(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==It&&(this._tTime-=It)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Fi(r,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Wn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?tc(r.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=s_);var r=En;return En=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),En=r,this},e.globalTime=function(n){for(var r=this,s=arguments.length?n:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,lf(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,lf(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,r){return this.totalTime(hi(this,n),Wn(r))},e.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,Wn(r))},e.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},e.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-It:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-It,this},e.isActive=function(){var n=this.parent||this._dp,r=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=r&&s<this.endTime(!0)-It)},e.eventCallback=function(n,r,s){var a=this.vars;return arguments.length>1?(r?(a[n]=r,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=r)):delete a[n],this):a[n]},e.then=function(n){var r=this;return new Promise(function(s){var a=Xt(n)?n:xm,o=function(){var c=r.then;r.then=null,Xt(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=c),s(a),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?o():r._prom=o})},e.kill=function(){Qa(this)},i}();yi(Do.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-It,_prom:0,_ps:!1,_rts:1});var On=function(i){am(e,i);function e(n,r){var s;return n===void 0&&(n={}),s=i.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Wn(n.sortChildren),Ht&&Fi(n.parent||Ht,rr(s),r),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Sm(rr(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,a){return co(0,arguments,this),this},t.from=function(r,s,a){return co(1,arguments,this),this},t.fromTo=function(r,s,a,o){return co(2,arguments,this),this},t.set=function(r,s,a){return s.duration=0,s.parent=this,lo(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new tn(r,s,hi(this,a),1),this},t.call=function(r,s,a){return Fi(this,tn.delayedCall(0,r,s),a)},t.staggerTo=function(r,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new tn(r,a,hi(this,l)),this},t.staggerFrom=function(r,s,a,o,l,c,u){return a.runBackwards=1,lo(a).immediateRender=Wn(a.immediateRender),this.staggerTo(r,s,a,o,l,c,u)},t.staggerFromTo=function(r,s,a,o,l,c,u,h){return o.startAt=a,lo(o).immediateRender=Wn(o.immediateRender),this.staggerTo(r,s,o,l,c,u,h)},t.render=function(r,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:fn(r),h=this._zTime<0!=r<0&&(this._initted||!c),f,d,g,_,m,p,y,x,v,A,b,w;if(this!==Ht&&u>l&&r>=0&&(u=l),u!==this._tTime||a||h){if(o!==this._time&&c&&(u+=this._time-o,r+=this._time-o),f=u,v=this._start,x=this._ts,p=!x,h&&(c||(o=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(b=this._yoyo,m=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,a);if(f=fn(u%m),u===l?(_=this._repeat,f=c):(_=~~(u/m),_&&_===u/m&&(f=c,_--),f>c&&(f=c)),A=xa(this._tTime,m),!o&&this._tTime&&A!==_&&this._tTime-A*m-this._dur<=0&&(A=_),b&&_&1&&(f=c-f,w=1),_!==A&&!this._lock){var C=b&&A&1,S=C===(b&&_&1);if(_<A&&(C=!C),o=C?0:u%c?c:u,this._lock=1,this.render(o||(w?0:fn(_*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&ri(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1),o&&o!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,S&&(this._lock=2,o=C?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;Fm(this,w)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=f_(this,fn(o),fn(f)),y&&(u-=f-(f=y._start))),this._tTime=u,this._time=f,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,o=0),!o&&f&&!s&&!_&&(ri(this,"onStart"),this._tTime!==u))return this;if(f>=o&&r>=0)for(d=this._first;d;){if(g=d._next,(d._act||f>=d._start)&&d._ts&&y!==d){if(d.parent!==this)return this.render(r,s,a);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,s,a),f!==this._time||!this._ts&&!p){y=0,g&&(u+=this._zTime=-It);break}}d=g}else{d=this._last;for(var M=r<0?r:f;d;){if(g=d._prev,(d._act||M<=d._end)&&d._ts&&y!==d){if(d.parent!==this)return this.render(r,s,a);if(d.render(d._ts>0?(M-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(M-d._start)*d._ts,s,a||En&&(d._initted||d._startAt)),f!==this._time||!this._ts&&!p){y=0,g&&(u+=this._zTime=M?-It:It);break}}d=g}}if(y&&!s&&(this.pause(),y.render(f>=o?0:-It)._zTime=f>=o?1:-1,this._ts))return this._start=v,xc(this),this.render(r,s,a);this._onUpdate&&!s&&ri(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(v===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Hr(this,1),!s&&!(r<0&&!o)&&(u||o||!l)&&(ri(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var a=this;if(fr(s)||(s=hi(this,s,r)),!(r instanceof Do)){if(Tn(r))return r.forEach(function(o){return a.add(o,s)}),this;if(_n(r))return this.addLabel(r,s);if(Xt(r))r=tn.delayedCall(0,r);else return this}return this!==r?Fi(this,r,s):this},t.getChildren=function(r,s,a,o){r===void 0&&(r=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-mi);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof tn?s&&l.push(c):(a&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===r)return s[a]},t.remove=function(r){return _n(r)?this.removeLabel(r):Xt(r)?this.killTweensOf(r):(vc(this,r),r===this._recent&&(this._recent=this._last),ms(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=fn(ni.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),i.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=hi(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,a){var o=tn.delayedCall(0,s||Ro,a);return o.data="isPause",this._hasPause=1,Fi(this,o,hi(this,r))},t.removePause=function(r){var s=this._first;for(r=hi(this,r);s;)s._start===r&&s.data==="isPause"&&Hr(s),s=s._next},t.killTweensOf=function(r,s,a){for(var o=this.getTweensOf(r,a),l=o.length;l--;)Pr!==o[l]&&o[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var a=[],o=gi(r),l=this._first,c=fr(s),u;l;)l instanceof tn?a_(l._targets,o)&&(c?(!Pr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(r,s){s=s||{};var a=this,o=hi(a,r),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,d,g=tn.to(a,yi({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||It,onStart:function(){if(a.pause(),!d){var m=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());g._dur!==m&&ya(g,m,0,1).render(g._time,!0,!0),d=1}u&&u.apply(g,h||[])}},s));return f?g.render(0):g},t.tweenFromTo=function(r,s,a){return this.tweenTo(s,yi({startAt:{time:hi(this,r)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),cf(this,hi(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),cf(this,hi(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+It)},t.shiftChildren=function(r,s,a){a===void 0&&(a=0);for(var o=this._first,l=this.labels,c;o;)o._start>=a&&(o._start+=r,o._end+=r),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=r);return ms(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return i.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),ms(this)},t.totalDuration=function(r){var s=0,a=this,o=a._last,l=mi,c,u,h;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-r:r));if(a._dirty){for(h=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Fi(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!h&&!a._dp||h&&h.smoothChildTiming)&&(a._start+=u/a._ts,a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;ya(a,a===Ht&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(r){if(Ht._ts&&(_m(Ht,tc(r,Ht)),mm=ni.frame),ni.frame>=sf){sf+=si.autoSleep||120;var s=Ht._first;if((!s||!s._ts)&&si.autoSleep&&ni._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||ni.sleep()}}},e}(Do);yi(On.prototype,{_lock:0,_hasPause:0,_forcing:0});var R_=function(e,t,n,r,s,a,o){var l=new Yn(this._pt,e,t,0,1,Xm,null,s),c=0,u=0,h,f,d,g,_,m,p,y;for(l.b=n,l.e=r,n+="",r+="",(p=~r.indexOf("random("))&&(r=Po(r)),a&&(y=[n,r],a(y,e,t),n=y[0],r=y[1]),f=n.match(Oc)||[];h=Oc.exec(r);)g=h[0],_=r.substring(c,h.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),g!==f[u++]&&(m=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:m,c:g.charAt(1)==="="?la(m,g)-m:parseFloat(g)-m,m:d&&d<4?Math.round:0},c=Oc.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=o,(um.test(r)||p)&&(l.e=0),this._pt=l,l},ud=function(e,t,n,r,s,a,o,l,c,u){Xt(r)&&(r=r(s||0,e,a));var h=e[t],f=n!=="get"?n:Xt(h)?c?e[t.indexOf("set")||!Xt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,d=Xt(h)?c?U_:Gm:dd,g;if(_n(r)&&(~r.indexOf("random(")&&(r=Po(r)),r.charAt(1)==="="&&(g=la(f,r)+(bn(f)||0),(g||g===0)&&(r=g))),!u||f!==r||Gu)return!isNaN(f*r)&&r!==""?(g=new Yn(this._pt,e,t,+f||0,r-(f||0),typeof h=="boolean"?O_:Wm,0,d),c&&(g.fp=c),o&&g.modifier(o,this,e),this._pt=g):(!h&&!(t in e)&&ad(t,r),R_.call(this,e,t,f,r,d,l||si.stringFilter,c))},P_=function(e,t,n,r,s){if(Xt(e)&&(e=uo(e,s,t,n,r)),!Wi(e)||e.style&&e.nodeType||Tn(e)||lm(e))return _n(e)?uo(e,s,t,n,r):e;var a={},o;for(o in e)a[o]=uo(e[o],s,t,n,r);return a},Bm=function(e,t,n,r,s,a){var o,l,c,u;if(ti[e]&&(o=new ti[e]).init(s,o.rawVars?t[e]:P_(t[e],r,s,a,n),n,r,a)!==!1&&(n._pt=l=new Yn(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==ra))for(c=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},Pr,Gu,hd=function i(e,t,n){var r=e.vars,s=r.ease,a=r.startAt,o=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.runBackwards,h=r.yoyoEase,f=r.keyframes,d=r.autoRevert,g=e._dur,_=e._startAt,m=e._targets,p=e.parent,y=p&&p.data==="nested"?p.vars.targets:m,x=e._overwrite==="auto"&&!nd,v=e.timeline,A,b,w,C,S,M,P,U,k,V,q,B,Y;if(v&&(!f||!s)&&(s="none"),e._ease=gs(s,va.ease),e._yEase=h?Om(gs(h===!0?s:h,va.ease)):0,h&&e._yoyo&&!e._repeat&&(h=e._yEase,e._yEase=e._ease,e._ease=h),e._from=!v&&!!r.runBackwards,!v||f&&!r.stagger){if(U=m[0]?ps(m[0]).harness:0,B=U&&r[U.prop],A=ec(r,od),_&&(_._zTime<0&&_.progress(1),t<0&&u&&o&&!d?_.render(-1,!0):_.revert(u&&g?Ol:r_),_._lazy=0),a){if(Hr(e._startAt=tn.set(m,yi({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&Wn(l),startAt:null,delay:0,onUpdate:c&&function(){return ri(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(En||!o&&!d)&&e._startAt.revert(Ol),o&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&g&&!_){if(t&&(o=!1),w=yi({overwrite:!1,data:"isFromStart",lazy:o&&!_&&Wn(l),immediateRender:o,stagger:0,parent:p},A),B&&(w[U.prop]=B),Hr(e._startAt=tn.set(m,w)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(En?e._startAt.revert(Ol):e._startAt.render(-1,!0)),e._zTime=t,!o)i(e._startAt,It,It);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&Wn(l)||l&&!g,b=0;b<m.length;b++){if(S=m[b],P=S._gsap||cd(m)[b]._gsap,e._ptLookup[b]=V={},Fu[P.id]&&Or.length&&Ql(),q=y===m?b:y.indexOf(S),U&&(k=new U).init(S,B||A,e,q,y)!==!1&&(e._pt=C=new Yn(e._pt,S,k.name,0,1,k.render,k,0,k.priority),k._props.forEach(function(H){V[H]=C}),k.priority&&(M=1)),!U||B)for(w in A)ti[w]&&(k=Bm(w,A,e,q,S,y))?k.priority&&(M=1):V[w]=C=ud.call(e,S,w,"get",A[w],q,y,0,r.stringFilter);e._op&&e._op[b]&&e.kill(S,e._op[b]),x&&e._pt&&(Pr=e,Ht.killTweensOf(S,V,e.globalTime(t)),Y=!e.parent,Pr=0),e._pt&&l&&(Fu[P.id]=1)}M&&Ym(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!Y,f&&t<=0&&v.render(mi,!0,!0)},L_=function(e,t,n,r,s,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,f,d;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,d=e._targets.length;d--;){if(u=f[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Gu=1,e.vars[t]="+=0",hd(e,o),Gu=0,l?Co(t+" not eligible for reset"):1;c.push(u)}for(d=c.length;d--;)h=c[d],u=h._pt||h,u.s=(r||r===0)&&!s?r:u.s+(r||0)+a*u.c,u.c=n-u.s,h.e&&(h.e=Zt(n)+bn(h.e)),h.b&&(h.b=u.s+bn(h.b))},D_=function(e,t){var n=e[0]?ps(e[0]).harness:0,r=n&&n.aliases,s,a,o,l;if(!r)return t;s=Ms({},t);for(a in r)if(a in s)for(l=r[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},I_=function(e,t,n,r){var s=t.ease||r||"power1.inOut",a,o;if(Tn(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:s})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},uo=function(e,t,n,r,s){return Xt(e)?e.call(t,n,r,s):_n(e)&&~e.indexOf("random(")?Po(e):e},Hm=ld+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Vm={};Xn(Hm+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return Vm[i]=1});var tn=function(i){am(e,i);function e(n,r,s,a){var o;typeof r=="number"&&(s.duration=r,r=s,s=null),o=i.call(this,a?r:lo(r))||this;var l=o.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,d=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,y=r.parent||Ht,x=(Tn(n)||lm(n)?fr(n[0]):"length"in r)?[n]:gi(n),v,A,b,w,C,S,M,P;if(o._targets=x.length?cd(x):Co("GSAP target "+n+" not found. https://gsap.com",!si.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=d,g||f||Ko(c)||Ko(u)){if(r=o.vars,v=o.timeline=new On({data:"nested",defaults:_||{},targets:y&&y.data==="nested"?y.vars.targets:x}),v.kill(),v.parent=v._dp=rr(o),v._start=0,f||Ko(c)||Ko(u)){if(w=x.length,M=f&&Tm(f),Wi(f))for(C in f)~Hm.indexOf(C)&&(P||(P={}),P[C]=f[C]);for(A=0;A<w;A++)b=ec(r,Vm),b.stagger=0,p&&(b.yoyoEase=p),P&&Ms(b,P),S=x[A],b.duration=+uo(c,rr(o),A,S,x),b.delay=(+uo(u,rr(o),A,S,x)||0)-o._delay,!f&&w===1&&b.delay&&(o._delay=u=b.delay,o._start+=u,b.delay=0),v.to(S,b,M?M(A,S,x):0),v._ease=ft.none;v.duration()?c=u=0:o.timeline=0}else if(g){lo(yi(v.vars.defaults,{ease:"none"})),v._ease=gs(g.ease||r.ease||"none");var U=0,k,V,q;if(Tn(g))g.forEach(function(B){return v.to(x,B,">")}),v.duration();else{b={};for(C in g)C==="ease"||C==="easeEach"||I_(C,g[C],b,g.easeEach);for(C in b)for(k=b[C].sort(function(B,Y){return B.t-Y.t}),U=0,A=0;A<k.length;A++)V=k[A],q={ease:V.e,duration:(V.t-(A?k[A-1].t:0))/100*c},q[C]=V.v,v.to(x,q,U),U+=q.duration;v.duration()<c&&v.to({},{duration:c-v.duration()})}}c||o.duration(c=v.duration())}else o.timeline=0;return d===!0&&!nd&&(Pr=rr(o),Ht.killTweensOf(x),Pr=0),Fi(y,rr(o),s),r.reversed&&o.reverse(),r.paused&&o.paused(!0),(h||!c&&!g&&o._start===fn(y._time)&&Wn(h)&&u_(rr(o))&&y.data!=="nested")&&(o._tTime=-It,o.render(Math.max(0,-u)||0)),m&&Sm(rr(o),m),o}var t=e.prototype;return t.render=function(r,s,a){var o=this._time,l=this._tDur,c=this._dur,u=r<0,h=r>l-It&&!u?l:r<It?0:r,f,d,g,_,m,p,y,x,v;if(!c)d_(this,r,s,a);else if(h!==this._tTime||!r||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(f=h,x=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+r,s,a);if(f=fn(h%_),h===l?(g=this._repeat,f=c):(g=~~(h/_),g&&g===fn(h/_)&&(f=c,g--),f>c&&(f=c)),p=this._yoyo&&g&1,p&&(v=this._yEase,f=c-f),m=xa(this._tTime,_),f===o&&!a&&this._initted&&g===m)return this._tTime=h,this;g!==m&&(x&&this._yEase&&Fm(x,p),this.vars.repeatRefresh&&!p&&!this._lock&&this._time!==_&&this._initted&&(this._lock=a=1,this.render(fn(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(bm(this,u?r:f,a,s,h))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&g!==m))return this;if(c!==this._dur)return this.render(r,s,a)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=y=(v||this._ease)(f/c),this._from&&(this.ratio=y=1-y),f&&!o&&!s&&!g&&(ri(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(y,d.d),d=d._next;x&&x.render(r<0?r:x._dur*x._ease(f/this._dur),s,a)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&ku(this,r,s,a),ri(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&ri(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&ku(this,r,!0,!0),(r||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Hr(this,1),!s&&!(u&&!o)&&(h||o||p)&&(ri(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),i.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,a,o,l){Lo||ni.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||hd(this,c),u=this._ease(c/this._dur),L_(this,r,s,a,o,u,c,l)?this.resetTo(r,s,a,o,1):(yc(this,0),this.parent||ym(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Qa(this):this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,Pr&&Pr.vars.overwrite!==!0)._first||Qa(this),this.parent&&a!==this.timeline.totalDuration()&&ya(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=r?gi(r):o,c=this._ptLookup,u=this._pt,h,f,d,g,_,m,p;if((!s||s==="all")&&l_(o,l))return s==="all"&&(this._pt=0),Qa(this);for(h=this._op=this._op||[],s!=="all"&&(_n(s)&&(_={},Xn(s,function(y){return _[y]=1}),s=_),s=D_(o,s)),p=o.length;p--;)if(~l.indexOf(o[p])){f=c[p],s==="all"?(h[p]=s,g=f,d={}):(d=h[p]=h[p]||{},g=s);for(_ in g)m=f&&f[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&vc(this,m,"_pt"),delete f[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&u&&Qa(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return co(1,arguments)},e.delayedCall=function(r,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(r,s,a){return co(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,a){return Ht.killTweensOf(r,s,a)},e}(Do);yi(tn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Xn("staggerTo,staggerFrom,staggerFromTo",function(i){tn[i]=function(){var e=new On,t=Bu.call(arguments,0);return t.splice(i==="staggerFromTo"?5:4,0,0),e[i].apply(e,t)}});var dd=function(e,t,n){return e[t]=n},Gm=function(e,t,n){return e[t](n)},U_=function(e,t,n,r){return e[t](r.fp,n)},N_=function(e,t,n){return e.setAttribute(t,n)},fd=function(e,t){return Xt(e[t])?Gm:id(e[t])&&e.setAttribute?N_:dd},Wm=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},O_=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Xm=function(e,t){var n=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=t.c}t.set(t.t,t.p,r,t)},pd=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},F_=function(e,t,n,r){for(var s=this._pt,a;s;)a=s._next,s.p===r&&s.modifier(e,t,n),s=a},k_=function(e){for(var t=this._pt,n,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?vc(this,t,"_pt"):t.dep||(n=1),t=r;return!n},z_=function(e,t,n,r){r.mSet(e,t,r.m.call(r.tween,n,r.mt),r)},Ym=function(e){for(var t=e._pt,n,r,s,a;t;){for(n=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:a)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:a=t,t=n}e._pt=s},Yn=function(){function i(t,n,r,s,a,o,l,c,u){this.t=n,this.s=s,this.c=a,this.p=r,this.r=o||Wm,this.d=l||this,this.set=c||dd,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=i.prototype;return e.modifier=function(n,r,s){this.mSet=this.mSet||this.set,this.set=z_,this.m=n,this.mt=s,this.tween=r},i}();Xn(ld+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(i){return od[i]=1});ai.TweenMax=ai.TweenLite=tn;ai.TimelineLite=ai.TimelineMax=On;Ht=new On({sortChildren:!1,defaults:va,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});si.stringFilter=Nm;var _s=[],kl={},B_=[],hf=0,H_=0,Hc=function(e){return(kl[e]||B_).map(function(t){return t()})},Wu=function(){var e=Date.now(),t=[];e-hf>2&&(Hc("matchMediaInit"),_s.forEach(function(n){var r=n.queries,s=n.conditions,a,o,l,c;for(o in r)a=Ui.matchMedia(r[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),Hc("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(r){return n.add(null,r)})}),hf=e,Hc("matchMedia"))},qm=function(){function i(t,n){this.selector=n&&Hu(n),this.data=[],this._r=[],this.isReverted=!1,this.id=H_++,t&&this.add(t)}var e=i.prototype;return e.add=function(n,r,s){Xt(n)&&(s=r,r=n,n=Xt);var a=this,o=function(){var c=zt,u=a.selector,h;return c&&c!==a&&c.data.push(a),s&&(a.selector=Hu(s)),zt=a,h=r.apply(a,arguments),Xt(h)&&a._r.push(h),zt=c,a.selector=u,a.isReverted=!1,h};return a.last=o,n===Xt?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},e.ignore=function(n){var r=zt;zt=null,n(this),zt=r},e.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof i?n.push.apply(n,r.getTweens()):r instanceof tn&&!(r.parent&&r.parent.data==="nested")&&n.push(r)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,r){var s=this;if(n?function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof On?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof tn)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),r)for(var a=_s.length;a--;)_s[a].id===this.id&&_s.splice(a,1)},e.revert=function(n){this.kill(n||{})},i}(),V_=function(){function i(t){this.contexts=[],this.scope=t,zt&&zt.data.push(this)}var e=i.prototype;return e.add=function(n,r,s){Wi(n)||(n={matches:n});var a=new qm(0,s||this.scope),o=a.conditions={},l,c,u;zt&&!a.selector&&(a.selector=zt.selector),this.contexts.push(a),r=a.add("onMatch",r),a.queries=n;for(c in n)c==="all"?u=1:(l=Ui.matchMedia(n[c]),l&&(_s.indexOf(a)<0&&_s.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(Wu):l.addEventListener("change",Wu)));return u&&r(a,function(h){return a.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},i}(),nc={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(r){return Dm(r)})},timeline:function(e){return new On(e)},getTweensOf:function(e,t){return Ht.getTweensOf(e,t)},getProperty:function(e,t,n,r){_n(e)&&(e=gi(e)[0]);var s=ps(e||{}).get,a=n?xm:vm;return n==="native"&&(n=""),e&&(t?a((ti[t]&&ti[t].get||s)(e,t,n,r)):function(o,l,c){return a((ti[o]&&ti[o].get||s)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=gi(e),e.length>1){var r=e.map(function(u){return $n.quickSetter(u,t,n)}),s=r.length;return function(u){for(var h=s;h--;)r[h](u)}}e=e[0]||{};var a=ti[t],o=ps(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(u){var h=new a;ra._pt=0,h.init(e,n?u+n:u,ra,0,[e]),h.render(1,h),ra._pt&&pd(1,ra)}:o.set(e,l);return a?c:function(u){return c(e,l,n?u+n:u,o,1)}},quickTo:function(e,t,n){var r,s=$n.to(e,Ms((r={},r[t]="+=0.1",r.paused=!0,r),n||{})),a=function(l,c,u){return s.resetTo(t,l,c,u)};return a.tween=s,a},isTweening:function(e){return Ht.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=gs(e.ease,va.ease)),af(va,e||{})},config:function(e){return af(si,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,r=e.plugins,s=e.defaults,a=e.extendTimeline;(r||"").split(",").forEach(function(o){return o&&!ti[o]&&!ai[o]&&Co(t+" effect requires "+o+" plugin.")}),Fc[t]=function(o,l,c){return n(gi(o),yi(l||{},s),c)},a&&(On.prototype[t]=function(o,l,c){return this.add(Fc[t](o,Wi(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){ft[e]=gs(t)},parseEase:function(e,t){return arguments.length?gs(e,t):ft},getById:function(e){return Ht.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new On(e),r,s;for(n.smoothChildTiming=Wn(e.smoothChildTiming),Ht.remove(n),n._dp=0,n._time=n._tTime=Ht._time,r=Ht._first;r;)s=r._next,(t||!(!r._dur&&r instanceof tn&&r.vars.onComplete===r._targets[0]))&&Fi(n,r,r._start-r._delay),r=s;return Fi(Ht,n,0),n},context:function(e,t){return e?new qm(e,t):zt},matchMedia:function(e){return new V_(e)},matchMediaRefresh:function(){return _s.forEach(function(e){var t=e.conditions,n,r;for(r in t)t[r]&&(t[r]=!1,n=1);n&&e.revert()})||Wu()},addEventListener:function(e,t){var n=kl[e]||(kl[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=kl[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},utils:{wrap:y_,wrapYoyo:M_,distribute:Tm,random:Cm,snap:Am,normalize:x_,getUnit:bn,clamp:m_,splitColor:Im,toArray:gi,selector:Hu,mapRange:Pm,pipe:__,unitize:v_,interpolate:S_,shuffle:Em},install:fm,effects:Fc,ticker:ni,updateRoot:On.updateRoot,plugins:ti,globalTimeline:Ht,core:{PropTween:Yn,globals:pm,Tween:tn,Timeline:On,Animation:Do,getCache:ps,_removeLinkedListItem:vc,reverting:function(){return En},context:function(e){return e&&zt&&(zt.data.push(e),e._ctx=zt),zt},suppressOverwrites:function(e){return nd=e}}};Xn("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return nc[i]=tn[i]});ni.add(On.updateRoot);ra=nc.to({},{duration:0});var G_=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},W_=function(e,t){var n=e._targets,r,s,a;for(r in t)for(s=n.length;s--;)a=e._ptLookup[s][r],a&&(a=a.d)&&(a._pt&&(a=G_(a,r)),a&&a.modifier&&a.modifier(t[r],e,n[s],r))},Vc=function(e,t){return{name:e,rawVars:1,init:function(r,s,a){a._onInit=function(o){var l,c;if(_n(s)&&(l={},Xn(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}W_(o,s)}}}},$n=nc.registerPlugin({name:"attr",init:function(e,t,n,r,s){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],r,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)En?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Vc("roundProps",Vu),Vc("modifiers"),Vc("snap",Am))||nc;tn.version=On.version=$n.version="3.12.5";dm=1;rd()&&Ma();ft.Power0;ft.Power1;ft.Power2;ft.Power3;ft.Power4;ft.Linear;ft.Quad;ft.Cubic;ft.Quart;ft.Quint;ft.Strong;ft.Elastic;ft.Back;ft.SteppedEase;ft.Bounce;ft.Sine;ft.Expo;ft.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var df,Lr,ca,md,cs,ff,gd,X_=function(){return typeof window<"u"},pr={},ts=180/Math.PI,ua=Math.PI/180,Ns=Math.atan2,pf=1e8,_d=/([A-Z])/g,Y_=/(left|right|width|margin|padding|x)/i,q_=/[\s,\(]\S/,ki={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Xu=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},$_=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Z_=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},K_=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},$m=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Zm=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},J_=function(e,t,n){return e.style[t]=n},j_=function(e,t,n){return e.style.setProperty(t,n)},Q_=function(e,t,n){return e._gsap[t]=n},ev=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},tv=function(e,t,n,r,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},nv=function(e,t,n,r,s){var a=e._gsap;a[t]=n,a.renderTransform(s,a)},Vt="transform",qn=Vt+"Origin",iv=function i(e,t){var n=this,r=this.target,s=r.style,a=r._gsap;if(e in pr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=ki[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=sr(r,o)}):this.tfm[e]=a.x?a[e]:sr(r,e),e===qn&&(this.tfm.zOrigin=a.zOrigin);else return ki.transform.split(",").forEach(function(o){return i.call(n,o,t)});if(this.props.indexOf(Vt)>=0)return;a.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(qn,t,"")),e=Vt}(s||t)&&this.props.push(e,t,s[e])},Km=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},rv=function(){var e=this.props,t=this.target,n=t.style,r=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(_d,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)r[a]=this.tfm[a];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=gd(),(!s||!s.isStart)&&!n[Vt]&&(Km(n),r.zOrigin&&n[qn]&&(n[qn]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},Jm=function(e,t){var n={target:e,props:[],revert:rv,save:iv};return e._gsap||$n.core.getCache(e),t&&t.split(",").forEach(function(r){return n.save(r)}),n},jm,Yu=function(e,t){var n=Lr.createElementNS?Lr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Lr.createElement(e);return n&&n.style?n:Lr.createElement(e)},Hi=function i(e,t,n){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(_d,"-$1").toLowerCase())||r.getPropertyValue(t)||!n&&i(e,Sa(t)||t,1)||""},mf="O,Moz,ms,Ms,Webkit".split(","),Sa=function(e,t,n){var r=t||cs,s=r.style,a=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(mf[a]+e in s););return a<0?null:(a===3?"ms":a>=0?mf[a]:"")+e},qu=function(){X_()&&window.document&&(df=window,Lr=df.document,ca=Lr.documentElement,cs=Yu("div")||{style:{}},Yu("div"),Vt=Sa(Vt),qn=Vt+"Origin",cs.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",jm=!!Sa("perspective"),gd=$n.core.reverting,md=1)},Gc=function i(e){var t=Yu("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,r=this.nextSibling,s=this.style.cssText,a;if(ca.appendChild(t),t.appendChild(this),this.style.display="block",e)try{a=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=i}catch{}else this._gsapBBox&&(a=this._gsapBBox());return n&&(r?n.insertBefore(this,r):n.appendChild(this)),ca.removeChild(t),this.style.cssText=s,a},gf=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Qm=function(e){var t;try{t=e.getBBox()}catch{t=Gc.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===Gc||(t=Gc.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+gf(e,["x","cx","x1"])||0,y:+gf(e,["y","cy","y1"])||0,width:0,height:0}:t},e0=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Qm(e))},Ss=function(e,t){if(t){var n=e.style,r;t in pr&&t!==qn&&(t=Vt),n.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(r==="--"?t:t.replace(_d,"-$1").toLowerCase())):n.removeAttribute(t)}},Dr=function(e,t,n,r,s,a){var o=new Yn(e._pt,t,n,0,1,a?Zm:$m);return e._pt=o,o.b=r,o.e=s,e._props.push(n),o},_f={deg:1,rad:1,turn:1},sv={grid:1,flex:1},Vr=function i(e,t,n,r){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=cs.style,l=Y_.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=r==="px",d=r==="%",g,_,m,p;if(r===a||!s||_f[r]||_f[a])return s;if(a!=="px"&&!f&&(s=i(e,t,n,"px")),p=e.getCTM&&e0(e),(d||a==="%")&&(pr[t]||~t.indexOf("adius")))return g=p?e.getBBox()[l?"width":"height"]:e[u],Zt(d?s/g*h:s/100*g);if(o[l?"width":"height"]=h+(f?a:r),_=~t.indexOf("adius")||r==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===Lr||!_.appendChild)&&(_=Lr.body),m=_._gsap,m&&d&&m.width&&l&&m.time===ni.time&&!m.uncache)return Zt(s/m.width*h);if(d&&(t==="height"||t==="width")){var y=e.style[t];e.style[t]=h+r,g=e[u],y?e.style[t]=y:Ss(e,t)}else(d||a==="%")&&!sv[Hi(_,"display")]&&(o.position=Hi(e,"position")),_===e&&(o.position="static"),_.appendChild(cs),g=cs[u],_.removeChild(cs),o.position="absolute";return l&&d&&(m=ps(_),m.time=ni.time,m.width=_[u]),Zt(f?g*s/h:g&&s?h/g*s:0)},sr=function(e,t,n,r){var s;return md||qu(),t in ki&&t!=="transform"&&(t=ki[t],~t.indexOf(",")&&(t=t.split(",")[0])),pr[t]&&t!=="transform"?(s=Uo(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:rc(Hi(e,qn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=ic[t]&&ic[t](e,t,n)||Hi(e,t)||gm(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Vr(e,t,s,n)+n:s},av=function(e,t,n,r){if(!n||n==="none"){var s=Sa(t,e,1),a=s&&Hi(e,s,1);a&&a!==n?(t=s,n=a):t==="borderColor"&&(n=Hi(e,"borderTopColor"))}var o=new Yn(this._pt,e.style,t,0,1,Xm),l=0,c=0,u,h,f,d,g,_,m,p,y,x,v,A;if(o.b=n,o.e=r,n+="",r+="",r==="auto"&&(_=e.style[t],e.style[t]=r,r=Hi(e,t)||r,_?e.style[t]=_:Ss(e,t)),u=[n,r],Nm(u),n=u[0],r=u[1],f=n.match(ia)||[],A=r.match(ia)||[],A.length){for(;h=ia.exec(r);)m=h[0],y=r.substring(l,h.index),g?g=(g+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(g=1),m!==(_=f[c++]||"")&&(d=parseFloat(_)||0,v=_.substr((d+"").length),m.charAt(1)==="="&&(m=la(d,m)+v),p=parseFloat(m),x=m.substr((p+"").length),l=ia.lastIndex-x.length,x||(x=x||si.units[t]||v,l===r.length&&(r+=x,o.e+=x)),v!==x&&(d=Vr(e,t,_,x)||0),o._pt={_next:o._pt,p:y||c===1?y:",",s:d,c:p-d,m:g&&g<4||t==="zIndex"?Math.round:0});o.c=l<r.length?r.substring(l,r.length):""}else o.r=t==="display"&&r==="none"?Zm:$m;return um.test(r)&&(o.e=0),this._pt=o,o},vf={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},ov=function(e){var t=e.split(" "),n=t[0],r=t[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(e=n,n=r,r=e),t[0]=vf[n]||n,t[1]=vf[r]||r,t.join(" ")},lv=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,r=n.style,s=t.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],pr[o]&&(l=1,o=o==="transformOrigin"?qn:Vt),Ss(n,o);l&&(Ss(n,Vt),a&&(a.svg&&n.removeAttribute("transform"),Uo(n,1),a.uncache=1,Km(r)))}},ic={clearProps:function(e,t,n,r,s){if(s.data!=="isFromStart"){var a=e._pt=new Yn(e._pt,t,n,0,0,lv);return a.u=r,a.pr=-10,a.tween=s,e._props.push(n),1}}},Io=[1,0,0,1,0,0],t0={},n0=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},xf=function(e){var t=Hi(e,Vt);return n0(t)?Io:t.substr(7).match(cm).map(Zt)},vd=function(e,t){var n=e._gsap||ps(e),r=e.style,s=xf(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Io:s):(s===Io&&!e.offsetParent&&e!==ca&&!n.svg&&(l=r.display,r.display="block",a=e.parentNode,(!a||!e.offsetParent)&&(c=1,o=e.nextElementSibling,ca.appendChild(e)),s=xf(e),l?r.display=l:Ss(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):ca.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},$u=function(e,t,n,r,s,a){var o=e._gsap,l=s||vd(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,h=o.xOffset||0,f=o.yOffset||0,d=l[0],g=l[1],_=l[2],m=l[3],p=l[4],y=l[5],x=t.split(" "),v=parseFloat(x[0])||0,A=parseFloat(x[1])||0,b,w,C,S;n?l!==Io&&(w=d*m-g*_)&&(C=v*(m/w)+A*(-_/w)+(_*y-m*p)/w,S=v*(-g/w)+A*(d/w)-(d*y-g*p)/w,v=C,A=S):(b=Qm(e),v=b.x+(~x[0].indexOf("%")?v/100*b.width:v),A=b.y+(~(x[1]||x[0]).indexOf("%")?A/100*b.height:A)),r||r!==!1&&o.smooth?(p=v-c,y=A-u,o.xOffset=h+(p*d+y*_)-p,o.yOffset=f+(p*g+y*m)-y):o.xOffset=o.yOffset=0,o.xOrigin=v,o.yOrigin=A,o.smooth=!!r,o.origin=t,o.originIsAbsolute=!!n,e.style[qn]="0px 0px",a&&(Dr(a,o,"xOrigin",c,v),Dr(a,o,"yOrigin",u,A),Dr(a,o,"xOffset",h,o.xOffset),Dr(a,o,"yOffset",f,o.yOffset)),e.setAttribute("data-svg-origin",v+" "+A)},Uo=function(e,t){var n=e._gsap||new zm(e);if("x"in n&&!t&&!n.uncache)return n;var r=e.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=Hi(e,qn)||"0",u,h,f,d,g,_,m,p,y,x,v,A,b,w,C,S,M,P,U,k,V,q,B,Y,H,re,D,ue,Fe,it,Z,ae;return u=h=f=_=m=p=y=x=v=0,d=g=1,n.svg=!!(e.getCTM&&e0(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[Vt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Vt]!=="none"?l[Vt]:"")),r.scale=r.rotate=r.translate="none"),w=vd(e,n.svg),n.svg&&(n.uncache?(H=e.getBBox(),c=n.xOrigin-H.x+"px "+(n.yOrigin-H.y)+"px",Y=""):Y=!t&&e.getAttribute("data-svg-origin"),$u(e,Y||c,!!Y||n.originIsAbsolute,n.smooth!==!1,w)),A=n.xOrigin||0,b=n.yOrigin||0,w!==Io&&(P=w[0],U=w[1],k=w[2],V=w[3],u=q=w[4],h=B=w[5],w.length===6?(d=Math.sqrt(P*P+U*U),g=Math.sqrt(V*V+k*k),_=P||U?Ns(U,P)*ts:0,y=k||V?Ns(k,V)*ts+_:0,y&&(g*=Math.abs(Math.cos(y*ua))),n.svg&&(u-=A-(A*P+b*k),h-=b-(A*U+b*V))):(ae=w[6],it=w[7],D=w[8],ue=w[9],Fe=w[10],Z=w[11],u=w[12],h=w[13],f=w[14],C=Ns(ae,Fe),m=C*ts,C&&(S=Math.cos(-C),M=Math.sin(-C),Y=q*S+D*M,H=B*S+ue*M,re=ae*S+Fe*M,D=q*-M+D*S,ue=B*-M+ue*S,Fe=ae*-M+Fe*S,Z=it*-M+Z*S,q=Y,B=H,ae=re),C=Ns(-k,Fe),p=C*ts,C&&(S=Math.cos(-C),M=Math.sin(-C),Y=P*S-D*M,H=U*S-ue*M,re=k*S-Fe*M,Z=V*M+Z*S,P=Y,U=H,k=re),C=Ns(U,P),_=C*ts,C&&(S=Math.cos(C),M=Math.sin(C),Y=P*S+U*M,H=q*S+B*M,U=U*S-P*M,B=B*S-q*M,P=Y,q=H),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),d=Zt(Math.sqrt(P*P+U*U+k*k)),g=Zt(Math.sqrt(B*B+ae*ae)),C=Ns(q,B),y=Math.abs(C)>2e-4?C*ts:0,v=Z?1/(Z<0?-Z:Z):0),n.svg&&(Y=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!n0(Hi(e,Vt)),Y&&e.setAttribute("transform",Y))),Math.abs(y)>90&&Math.abs(y)<270&&(s?(d*=-1,y+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,y+=y<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=f+a,n.scaleX=Zt(d),n.scaleY=Zt(g),n.rotation=Zt(_)+o,n.rotationX=Zt(m)+o,n.rotationY=Zt(p)+o,n.skewX=y+o,n.skewY=x+o,n.transformPerspective=v+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(r[qn]=rc(c)),n.xOffset=n.yOffset=0,n.force3D=si.force3D,n.renderTransform=n.svg?uv:jm?i0:cv,n.uncache=0,n},rc=function(e){return(e=e.split(" "))[0]+" "+e[1]},Wc=function(e,t,n){var r=bn(t);return Zt(parseFloat(t)+parseFloat(Vr(e,"x",n+"px",r)))+r},cv=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,i0(e,t)},qr="0deg",Wa="0px",$r=") ",i0=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,d=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,p=n.force3D,y=n.target,x=n.zOrigin,v="",A=p==="auto"&&e&&e!==1||p===!0;if(x&&(h!==qr||u!==qr)){var b=parseFloat(u)*ua,w=Math.sin(b),C=Math.cos(b),S;b=parseFloat(h)*ua,S=Math.cos(b),a=Wc(y,a,w*S*-x),o=Wc(y,o,-Math.sin(b)*-x),l=Wc(y,l,C*S*-x+x)}m!==Wa&&(v+="perspective("+m+$r),(r||s)&&(v+="translate("+r+"%, "+s+"%) "),(A||a!==Wa||o!==Wa||l!==Wa)&&(v+=l!==Wa||A?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+$r),c!==qr&&(v+="rotate("+c+$r),u!==qr&&(v+="rotateY("+u+$r),h!==qr&&(v+="rotateX("+h+$r),(f!==qr||d!==qr)&&(v+="skew("+f+", "+d+$r),(g!==1||_!==1)&&(v+="scale("+g+", "+_+$r),y.style[Vt]=v||"translate(0, 0)"},uv=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,d=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,p=n.yOffset,y=n.forceCSS,x=parseFloat(a),v=parseFloat(o),A,b,w,C,S;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=ua,c*=ua,A=Math.cos(l)*h,b=Math.sin(l)*h,w=Math.sin(l-c)*-f,C=Math.cos(l-c)*f,c&&(u*=ua,S=Math.tan(c-u),S=Math.sqrt(1+S*S),w*=S,C*=S,u&&(S=Math.tan(u),S=Math.sqrt(1+S*S),A*=S,b*=S)),A=Zt(A),b=Zt(b),w=Zt(w),C=Zt(C)):(A=h,C=f,b=w=0),(x&&!~(a+"").indexOf("px")||v&&!~(o+"").indexOf("px"))&&(x=Vr(d,"x",a,"px"),v=Vr(d,"y",o,"px")),(g||_||m||p)&&(x=Zt(x+g-(g*A+_*w)+m),v=Zt(v+_-(g*b+_*C)+p)),(r||s)&&(S=d.getBBox(),x=Zt(x+r/100*S.width),v=Zt(v+s/100*S.height)),S="matrix("+A+","+b+","+w+","+C+","+x+","+v+")",d.setAttribute("transform",S),y&&(d.style[Vt]=S)},hv=function(e,t,n,r,s){var a=360,o=_n(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?ts:1),c=l-r,u=r+c+"deg",h,f;return o&&(h=s.split("_")[1],h==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),h==="cw"&&c<0?c=(c+a*pf)%a-~~(c/a)*a:h==="ccw"&&c>0&&(c=(c-a*pf)%a-~~(c/a)*a)),e._pt=f=new Yn(e._pt,t,n,r,c,$_),f.e=u,f.u="deg",e._props.push(n),f},yf=function(e,t){for(var n in t)e[n]=t[n];return e},dv=function(e,t,n){var r=yf({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,h,f,d,g;r.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[Vt]=t,o=Uo(n,1),Ss(n,Vt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Vt],a[Vt]=t,o=Uo(n,1),a[Vt]=c);for(l in pr)c=r[l],u=o[l],c!==u&&s.indexOf(l)<0&&(d=bn(c),g=bn(u),h=d!==g?Vr(n,l,c,g):parseFloat(c),f=parseFloat(u),e._pt=new Yn(e._pt,o,l,h,f-h,Xu),e._pt.u=g||0,e._props.push(l));yf(o,r)};Xn("padding,margin,Width,Radius",function(i,e){var t="Top",n="Right",r="Bottom",s="Left",a=(e<3?[t,n,r,s]:[t+s,t+n,r+n,r+s]).map(function(o){return e<2?i+o:"border"+o+i});ic[e>1?"border"+i:i]=function(o,l,c,u,h){var f,d;if(arguments.length<4)return f=a.map(function(g){return sr(o,g,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(u+"").split(" "),d={},a.forEach(function(g,_){return d[g]=f[_]=f[_]||f[(_-1)/2|0]}),o.init(l,d,h)}});var r0={name:"css",register:qu,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,r,s){var a=this._props,o=e.style,l=n.vars.startAt,c,u,h,f,d,g,_,m,p,y,x,v,A,b,w,C;md||qu(),this.styles=this.styles||Jm(e),C=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(ti[_]&&Bm(_,t,n,r,e,s)))){if(d=typeof u,g=ic[_],d==="function"&&(u=u.call(n,r,e,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=Po(u)),g)g(this,e,_,u,n)&&(w=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",Fr.lastIndex=0,Fr.test(c)||(m=bn(c),p=bn(u)),p?m!==p&&(c=Vr(e,_,c,p)+p):m&&(u+=m),this.add(o,"setProperty",c,u,r,s,0,0,_),a.push(_),C.push(_,0,o[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,r,e,s):l[_],_n(c)&&~c.indexOf("random(")&&(c=Po(c)),bn(c+"")||c==="auto"||(c+=si.units[_]||bn(sr(e,_))||""),(c+"").charAt(1)==="="&&(c=sr(e,_))):c=sr(e,_),f=parseFloat(c),y=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),y&&(u=u.substr(2)),h=parseFloat(u),_ in ki&&(_==="autoAlpha"&&(f===1&&sr(e,"visibility")==="hidden"&&h&&(f=0),C.push("visibility",0,o.visibility),Dr(this,o,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=ki[_],~_.indexOf(",")&&(_=_.split(",")[0]))),x=_ in pr,x){if(this.styles.save(_),v||(A=e._gsap,A.renderTransform&&!t.parseTransform||Uo(e,t.parseTransform),b=t.smoothOrigin!==!1&&A.smooth,v=this._pt=new Yn(this._pt,o,Vt,0,1,A.renderTransform,A,0,-1),v.dep=1),_==="scale")this._pt=new Yn(this._pt,A,"scaleY",A.scaleY,(y?la(A.scaleY,y+h):h)-A.scaleY||0,Xu),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){C.push(qn,0,o[qn]),u=ov(u),A.svg?$u(e,u,0,b,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==A.zOrigin&&Dr(this,A,"zOrigin",A.zOrigin,p),Dr(this,o,_,rc(c),rc(u)));continue}else if(_==="svgOrigin"){$u(e,u,1,b,0,this);continue}else if(_ in t0){hv(this,A,_,f,y?la(f,y+u):u);continue}else if(_==="smoothOrigin"){Dr(this,A,"smooth",A.smooth,u);continue}else if(_==="force3D"){A[_]=u;continue}else if(_==="transform"){dv(this,u,e);continue}}else _ in o||(_=Sa(_)||_);if(x||(h||h===0)&&(f||f===0)&&!q_.test(u)&&_ in o)m=(c+"").substr((f+"").length),h||(h=0),p=bn(u)||(_ in si.units?si.units[_]:m),m!==p&&(f=Vr(e,_,c,p)),this._pt=new Yn(this._pt,x?A:o,_,f,(y?la(f,y+h):h)-f,!x&&(p==="px"||_==="zIndex")&&t.autoRound!==!1?K_:Xu),this._pt.u=p||0,m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=Z_);else if(_ in o)av.call(this,e,_,c,y?y+u:u);else if(_ in e)this.add(e,_,c||e[_],y?y+u:u,r,s);else if(_!=="parseTransform"){ad(_,u);continue}x||(_ in o?C.push(_,0,o[_]):C.push(_,1,c||e[_])),a.push(_)}}w&&Ym(this)},render:function(e,t){if(t.tween._time||!gd())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:sr,aliases:ki,getSetter:function(e,t,n){var r=ki[t];return r&&r.indexOf(",")<0&&(t=r),t in pr&&t!==qn&&(e._gsap.x||sr(e,"x"))?n&&ff===n?t==="scale"?ev:Q_:(ff=n||{})&&(t==="scale"?tv:nv):e.style&&!id(e.style[t])?J_:~t.indexOf("-")?j_:fd(e,t)},core:{_removeProperty:Ss,_getMatrix:vd}};$n.utils.checkPrefix=Sa;$n.core.getStyleSaver=Jm;(function(i,e,t,n){var r=Xn(i+","+e+","+t,function(s){pr[s]=1});Xn(e,function(s){si.units[s]="deg",t0[s]=1}),ki[r[13]]=i+","+e,Xn(n,function(s){var a=s.split(":");ki[a[1]]=r[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Xn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){si.units[i]="px"});$n.registerPlugin(r0);var De=$n.registerPlugin(r0)||$n;De.core.Tween;function fv(i,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(i,n.key,n)}}function pv(i,e,t){return e&&fv(i.prototype,e),i}/*!
 * Observer 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var vn,zl,ii,Ir,Ur,ha,s0,ns,ho,a0,or,Ei,o0,l0=function(){return vn||typeof window<"u"&&(vn=window.gsap)&&vn.registerPlugin&&vn},c0=1,sa=[],ht=[],Vi=[],fo=Date.now,Zu=function(e,t){return t},mv=function(){var e=ho.core,t=e.bridge||{},n=e._scrollers,r=e._proxies;n.push.apply(n,ht),r.push.apply(r,Vi),ht=n,Vi=r,Zu=function(a,o){return t[a](o)}},kr=function(e,t){return~Vi.indexOf(e)&&Vi[Vi.indexOf(e)+1][t]},po=function(e){return!!~a0.indexOf(e)},Rn=function(e,t,n,r,s){return e.addEventListener(t,n,{passive:r!==!1,capture:!!s})},Cn=function(e,t,n,r){return e.removeEventListener(t,n,!!r)},Jo="scrollLeft",jo="scrollTop",Ku=function(){return or&&or.isPressed||ht.cache++},sc=function(e,t){var n=function r(s){if(s||s===0){c0&&(ii.history.scrollRestoration="manual");var a=or&&or.isPressed;s=r.v=Math.round(s)||(or&&or.iOS?1:0),e(s),r.cacheID=ht.cache,a&&Zu("ss",s)}else(t||ht.cache!==r.cacheID||Zu("ref"))&&(r.cacheID=ht.cache,r.v=e());return r.v+r.offset};return n.offset=0,e&&n},Fn={s:Jo,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:sc(function(i){return arguments.length?ii.scrollTo(i,sn.sc()):ii.pageXOffset||Ir[Jo]||Ur[Jo]||ha[Jo]||0})},sn={s:jo,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Fn,sc:sc(function(i){return arguments.length?ii.scrollTo(Fn.sc(),i):ii.pageYOffset||Ir[jo]||Ur[jo]||ha[jo]||0})},Vn=function(e,t){return(t&&t._ctx&&t._ctx.selector||vn.utils.toArray)(e)[0]||(typeof e=="string"&&vn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},Gr=function(e,t){var n=t.s,r=t.sc;po(e)&&(e=Ir.scrollingElement||Ur);var s=ht.indexOf(e),a=r===sn.sc?1:2;!~s&&(s=ht.push(e)-1),ht[s+a]||Rn(e,"scroll",Ku);var o=ht[s+a],l=o||(ht[s+a]=sc(kr(e,n),!0)||(po(e)?r:sc(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,o||(l.smooth=vn.getProperty(e,"scrollBehavior")==="smooth"),l},Ju=function(e,t,n){var r=e,s=e,a=fo(),o=a,l=t||50,c=Math.max(500,l*3),u=function(g,_){var m=fo();_||m-a>l?(s=r,r=g,o=a,a=m):n?r+=g:r=s+(g-s)/(m-o)*(a-o)},h=function(){s=r=n?0:r,o=a=0},f=function(g){var _=o,m=s,p=fo();return(g||g===0)&&g!==r&&u(g),a===o||p-o>c?0:(r+(n?m:-m))/((n?p:a)-_)*1e3};return{update:u,reset:h,getVelocity:f}},Xa=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Mf=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},u0=function(){ho=vn.core.globals().ScrollTrigger,ho&&ho.core&&mv()},h0=function(e){return vn=e||l0(),!zl&&vn&&typeof document<"u"&&document.body&&(ii=window,Ir=document,Ur=Ir.documentElement,ha=Ir.body,a0=[ii,Ir,Ur,ha],vn.utils.clamp,o0=vn.core.context||function(){},ns="onpointerenter"in ha?"pointer":"mouse",s0=Kt.isTouch=ii.matchMedia&&ii.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in ii||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Ei=Kt.eventTypes=("ontouchstart"in Ur?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Ur?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return c0=0},500),u0(),zl=1),zl};Fn.op=sn;ht.cache=0;var Kt=function(){function i(t){this.init(t)}var e=i.prototype;return e.init=function(n){zl||h0(vn)||console.warn("Please gsap.registerPlugin(Observer)"),ho||u0();var r=n.tolerance,s=n.dragMinimum,a=n.type,o=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,h=n.onStop,f=n.onStopDelay,d=n.ignore,g=n.wheelSpeed,_=n.event,m=n.onDragStart,p=n.onDragEnd,y=n.onDrag,x=n.onPress,v=n.onRelease,A=n.onRight,b=n.onLeft,w=n.onUp,C=n.onDown,S=n.onChangeX,M=n.onChangeY,P=n.onChange,U=n.onToggleX,k=n.onToggleY,V=n.onHover,q=n.onHoverEnd,B=n.onMove,Y=n.ignoreCheck,H=n.isNormalizer,re=n.onGestureStart,D=n.onGestureEnd,ue=n.onWheel,Fe=n.onEnable,it=n.onDisable,Z=n.onClick,ae=n.scrollSpeed,be=n.capture,oe=n.allowClicks,Le=n.lockAxis,Ne=n.onLockAxis;this.target=o=Vn(o)||Ur,this.vars=n,d&&(d=vn.utils.toArray(d)),r=r||1e-9,s=s||0,g=g||1,ae=ae||1,a=a||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(ii.getComputedStyle(ha).lineHeight)||22);var Be,Ye,ne,ee,L,Ae,se,F=this,ce=0,ze=0,Ee=n.passive||!u,R=Gr(o,Fn),E=Gr(o,sn),G=R(),j=E(),Q=~a.indexOf("touch")&&!~a.indexOf("pointer")&&Ei[0]==="pointerdown",J=po(o),ge=o.ownerDocument||Ir,fe=[0,0,0],ye=[0,0,0],je=0,le=function(){return je=fo()},pe=function(Oe,st){return(F.event=Oe)&&d&&~d.indexOf(Oe.target)||st&&Q&&Oe.pointerType!=="touch"||Y&&Y(Oe,st)},We=function(){F._vx.reset(),F._vy.reset(),Ye.pause(),h&&h(F)},Ge=function(){var Oe=F.deltaX=Mf(fe),st=F.deltaY=Mf(ye),we=Math.abs(Oe)>=r,Qe=Math.abs(st)>=r;P&&(we||Qe)&&P(F,Oe,st,fe,ye),we&&(A&&F.deltaX>0&&A(F),b&&F.deltaX<0&&b(F),S&&S(F),U&&F.deltaX<0!=ce<0&&U(F),ce=F.deltaX,fe[0]=fe[1]=fe[2]=0),Qe&&(C&&F.deltaY>0&&C(F),w&&F.deltaY<0&&w(F),M&&M(F),k&&F.deltaY<0!=ze<0&&k(F),ze=F.deltaY,ye[0]=ye[1]=ye[2]=0),(ee||ne)&&(B&&B(F),ne&&(y(F),ne=!1),ee=!1),Ae&&!(Ae=!1)&&Ne&&Ne(F),L&&(ue(F),L=!1),Be=0},Re=function(Oe,st,we){fe[we]+=Oe,ye[we]+=st,F._vx.update(Oe),F._vy.update(st),c?Be||(Be=requestAnimationFrame(Ge)):Ge()},rt=function(Oe,st){Le&&!se&&(F.axis=se=Math.abs(Oe)>Math.abs(st)?"x":"y",Ae=!0),se!=="y"&&(fe[2]+=Oe,F._vx.update(Oe,!0)),se!=="x"&&(ye[2]+=st,F._vy.update(st,!0)),c?Be||(Be=requestAnimationFrame(Ge)):Ge()},qe=function(Oe){if(!pe(Oe,1)){Oe=Xa(Oe,u);var st=Oe.clientX,we=Oe.clientY,Qe=st-F.x,ke=we-F.y,Je=F.isDragging;F.x=st,F.y=we,(Je||Math.abs(F.startX-st)>=s||Math.abs(F.startY-we)>=s)&&(y&&(ne=!0),Je||(F.isDragging=!0),rt(Qe,ke),Je||m&&m(F))}},pt=F.onPress=function(Ce){pe(Ce,1)||Ce&&Ce.button||(F.axis=se=null,Ye.pause(),F.isPressed=!0,Ce=Xa(Ce),ce=ze=0,F.startX=F.x=Ce.clientX,F.startY=F.y=Ce.clientY,F._vx.reset(),F._vy.reset(),Rn(H?o:ge,Ei[1],qe,Ee,!0),F.deltaX=F.deltaY=0,x&&x(F))},N=F.onRelease=function(Ce){if(!pe(Ce,1)){Cn(H?o:ge,Ei[1],qe,!0);var Oe=!isNaN(F.y-F.startY),st=F.isDragging,we=st&&(Math.abs(F.x-F.startX)>3||Math.abs(F.y-F.startY)>3),Qe=Xa(Ce);!we&&Oe&&(F._vx.reset(),F._vy.reset(),u&&oe&&vn.delayedCall(.08,function(){if(fo()-je>300&&!Ce.defaultPrevented){if(Ce.target.click)Ce.target.click();else if(ge.createEvent){var ke=ge.createEvent("MouseEvents");ke.initMouseEvent("click",!0,!0,ii,1,Qe.screenX,Qe.screenY,Qe.clientX,Qe.clientY,!1,!1,!1,!1,0,null),Ce.target.dispatchEvent(ke)}}})),F.isDragging=F.isGesturing=F.isPressed=!1,h&&st&&!H&&Ye.restart(!0),p&&st&&p(F),v&&v(F,we)}},ve=function(Oe){return Oe.touches&&Oe.touches.length>1&&(F.isGesturing=!0)&&re(Oe,F.isDragging)},$=function(){return(F.isGesturing=!1)||D(F)},te=function(Oe){if(!pe(Oe)){var st=R(),we=E();Re((st-G)*ae,(we-j)*ae,1),G=st,j=we,h&&Ye.restart(!0)}},_e=function(Oe){if(!pe(Oe)){Oe=Xa(Oe,u),ue&&(L=!0);var st=(Oe.deltaMode===1?l:Oe.deltaMode===2?ii.innerHeight:1)*g;Re(Oe.deltaX*st,Oe.deltaY*st,0),h&&!H&&Ye.restart(!0)}},Me=function(Oe){if(!pe(Oe)){var st=Oe.clientX,we=Oe.clientY,Qe=st-F.x,ke=we-F.y;F.x=st,F.y=we,ee=!0,h&&Ye.restart(!0),(Qe||ke)&&rt(Qe,ke)}},Ze=function(Oe){F.event=Oe,V(F)},_t=function(Oe){F.event=Oe,q(F)},Wt=function(Oe){return pe(Oe)||Xa(Oe,u)&&Z(F)};Ye=F._dc=vn.delayedCall(f||.25,We).pause(),F.deltaX=F.deltaY=0,F._vx=Ju(0,50,!0),F._vy=Ju(0,50,!0),F.scrollX=R,F.scrollY=E,F.isDragging=F.isGesturing=F.isPressed=!1,o0(this),F.enable=function(Ce){return F.isEnabled||(Rn(J?ge:o,"scroll",Ku),a.indexOf("scroll")>=0&&Rn(J?ge:o,"scroll",te,Ee,be),a.indexOf("wheel")>=0&&Rn(o,"wheel",_e,Ee,be),(a.indexOf("touch")>=0&&s0||a.indexOf("pointer")>=0)&&(Rn(o,Ei[0],pt,Ee,be),Rn(ge,Ei[2],N),Rn(ge,Ei[3],N),oe&&Rn(o,"click",le,!0,!0),Z&&Rn(o,"click",Wt),re&&Rn(ge,"gesturestart",ve),D&&Rn(ge,"gestureend",$),V&&Rn(o,ns+"enter",Ze),q&&Rn(o,ns+"leave",_t),B&&Rn(o,ns+"move",Me)),F.isEnabled=!0,Ce&&Ce.type&&pt(Ce),Fe&&Fe(F)),F},F.disable=function(){F.isEnabled&&(sa.filter(function(Ce){return Ce!==F&&po(Ce.target)}).length||Cn(J?ge:o,"scroll",Ku),F.isPressed&&(F._vx.reset(),F._vy.reset(),Cn(H?o:ge,Ei[1],qe,!0)),Cn(J?ge:o,"scroll",te,be),Cn(o,"wheel",_e,be),Cn(o,Ei[0],pt,be),Cn(ge,Ei[2],N),Cn(ge,Ei[3],N),Cn(o,"click",le,!0),Cn(o,"click",Wt),Cn(ge,"gesturestart",ve),Cn(ge,"gestureend",$),Cn(o,ns+"enter",Ze),Cn(o,ns+"leave",_t),Cn(o,ns+"move",Me),F.isEnabled=F.isPressed=F.isDragging=!1,it&&it(F))},F.kill=F.revert=function(){F.disable();var Ce=sa.indexOf(F);Ce>=0&&sa.splice(Ce,1),or===F&&(or=0)},sa.push(F),H&&po(o)&&(or=F),F.enable(_)},pv(i,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),i}();Kt.version="3.12.5";Kt.create=function(i){return new Kt(i)};Kt.register=h0;Kt.getAll=function(){return sa.slice()};Kt.getById=function(i){return sa.filter(function(e){return e.vars.id===i})[0]};l0()&&vn.registerPlugin(Kt);/*!
 * ScrollTrigger 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Ie,ea,dt,Bt,Ti,Ot,d0,ac,No,mo,to,Qo,Mn,Mc,ju,In,Sf,bf,ta,f0,Xc,p0,Dn,Qu,m0,g0,Ar,eh,xd,da,yd,oc,th,Yc,el=1,Sn=Date.now,qc=Sn(),vi=0,no=0,wf=function(e,t,n){var r=ei(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=r,r?e.substr(6,e.length-7):e},Ef=function(e,t){return t&&(!ei(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},gv=function i(){return no&&requestAnimationFrame(i)},Tf=function(){return Mc=1},Af=function(){return Mc=0},Ni=function(e){return e},io=function(e){return Math.round(e*1e5)/1e5||0},_0=function(){return typeof window<"u"},v0=function(){return Ie||_0()&&(Ie=window.gsap)&&Ie.registerPlugin&&Ie},bs=function(e){return!!~d0.indexOf(e)},x0=function(e){return(e==="Height"?yd:dt["inner"+e])||Ti["client"+e]||Ot["client"+e]},y0=function(e){return kr(e,"getBoundingClientRect")||(bs(e)?function(){return Wl.width=dt.innerWidth,Wl.height=yd,Wl}:function(){return ar(e)})},_v=function(e,t,n){var r=n.d,s=n.d2,a=n.a;return(a=kr(e,"getBoundingClientRect"))?function(){return a()[r]}:function(){return(t?x0(s):e["client"+s])||0}},vv=function(e,t){return!t||~Vi.indexOf(e)?y0(e):function(){return Wl}},zi=function(e,t){var n=t.s,r=t.d2,s=t.d,a=t.a;return Math.max(0,(n="scroll"+r)&&(a=kr(e,n))?a()-y0(e)()[s]:bs(e)?(Ti[n]||Ot[n])-x0(r):e[n]-e["offset"+r])},tl=function(e,t){for(var n=0;n<ta.length;n+=3)(!t||~t.indexOf(ta[n+1]))&&e(ta[n],ta[n+1],ta[n+2])},ei=function(e){return typeof e=="string"},kn=function(e){return typeof e=="function"},ro=function(e){return typeof e=="number"},is=function(e){return typeof e=="object"},Ya=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},$c=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},Os=Math.abs,M0="left",S0="top",Md="right",Sd="bottom",vs="width",xs="height",go="Right",_o="Left",vo="Top",xo="Bottom",en="padding",di="margin",ba="Width",bd="Height",rn="px",fi=function(e){return dt.getComputedStyle(e)},xv=function(e){var t=fi(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Cf=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},ar=function(e,t){var n=t&&fi(e)[ju]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ie.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect();return n&&n.progress(0).kill(),r},lc=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},b0=function(e){var t=[],n=e.labels,r=e.duration(),s;for(s in n)t.push(n[s]/r);return t},yv=function(e){return function(t){return Ie.utils.snap(b0(e),t)}},wd=function(e){var t=Ie.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(r,s){return r-s});return n?function(r,s,a){a===void 0&&(a=.001);var o;if(!s)return t(r);if(s>0){for(r-=a,o=0;o<n.length;o++)if(n[o]>=r)return n[o];return n[o-1]}else for(o=n.length,r+=a;o--;)if(n[o]<=r)return n[o];return n[0]}:function(r,s,a){a===void 0&&(a=.001);var o=t(r);return!s||Math.abs(o-r)<a||o-r<0==s<0?o:t(s<0?r-e:r+e)}},Mv=function(e){return function(t,n){return wd(b0(e))(t,n.direction)}},nl=function(e,t,n,r){return n.split(",").forEach(function(s){return e(t,s,r)})},dn=function(e,t,n,r,s){return e.addEventListener(t,n,{passive:!r,capture:!!s})},hn=function(e,t,n,r){return e.removeEventListener(t,n,!!r)},il=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},Rf={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},rl={toggleActions:"play",anticipatePin:0},cc={top:0,left:0,center:.5,bottom:1,right:1},Bl=function(e,t){if(ei(e)){var n=e.indexOf("="),r=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(r*=t/100),e=e.substr(0,n-1)),e=r+(e in cc?cc[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},sl=function(e,t,n,r,s,a,o,l){var c=s.startColor,u=s.endColor,h=s.fontSize,f=s.indent,d=s.fontWeight,g=Bt.createElement("div"),_=bs(n)||kr(n,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,p=_?Ot:n,y=e.indexOf("start")!==-1,x=y?c:u,v="border-color:"+x+";font-size:"+h+";color:"+x+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return v+="position:"+((m||l)&&_?"fixed;":"absolute;"),(m||l||!_)&&(v+=(r===sn?Md:Sd)+":"+(a+parseFloat(f))+"px;"),o&&(v+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),g._isStart=y,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=v,g.innerText=t||t===0?e+"-"+t:e,p.children[0]?p.insertBefore(g,p.children[0]):p.appendChild(g),g._offset=g["offset"+r.op.d2],Hl(g,0,r,y),g},Hl=function(e,t,n,r){var s={display:"block"},a=n[r?"os2":"p2"],o=n[r?"p2":"os2"];e._isFlipped=r,s[n.a+"Percent"]=r?-100:0,s[n.a]=r?"1px":0,s["border"+a+ba]=1,s["border"+o+ba]=0,s[n.p]=t+"px",Ie.set(e,s)},ut=[],nh={},Oo,Pf=function(){return Sn()-vi>34&&(Oo||(Oo=requestAnimationFrame(hr)))},Fs=function(){(!Dn||!Dn.isPressed||Dn.startX>Ot.clientWidth)&&(ht.cache++,Dn?Oo||(Oo=requestAnimationFrame(hr)):hr(),vi||Es("scrollStart"),vi=Sn())},Zc=function(){g0=dt.innerWidth,m0=dt.innerHeight},so=function(){ht.cache++,!Mn&&!p0&&!Bt.fullscreenElement&&!Bt.webkitFullscreenElement&&(!Qu||g0!==dt.innerWidth||Math.abs(dt.innerHeight-m0)>dt.innerHeight*.25)&&ac.restart(!0)},ws={},Sv=[],w0=function i(){return hn($e,"scrollEnd",i)||us(!0)},Es=function(e){return ws[e]&&ws[e].map(function(t){return t()})||Sv},Qn=[],E0=function(e){for(var t=0;t<Qn.length;t+=5)(!e||Qn[t+4]&&Qn[t+4].query===e)&&(Qn[t].style.cssText=Qn[t+1],Qn[t].getBBox&&Qn[t].setAttribute("transform",Qn[t+2]||""),Qn[t+3].uncache=1)},Ed=function(e,t){var n;for(In=0;In<ut.length;In++)n=ut[In],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));oc=!0,t&&E0(t),t||Es("revert")},T0=function(e,t){ht.cache++,(t||!Un)&&ht.forEach(function(n){return kn(n)&&n.cacheID++&&(n.rec=0)}),ei(e)&&(dt.history.scrollRestoration=xd=e)},Un,ys=0,Lf,bv=function(){if(Lf!==ys){var e=Lf=ys;requestAnimationFrame(function(){return e===ys&&us(!0)})}},A0=function(){Ot.appendChild(da),yd=!Dn&&da.offsetHeight||dt.innerHeight,Ot.removeChild(da)},Df=function(e){return No(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},us=function(e,t){if(vi&&!e&&!oc){dn($e,"scrollEnd",w0);return}A0(),Un=$e.isRefreshing=!0,ht.forEach(function(r){return kn(r)&&++r.cacheID&&(r.rec=r())});var n=Es("refreshInit");f0&&$e.sort(),t||Ed(),ht.forEach(function(r){kn(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),ut.slice(0).forEach(function(r){return r.refresh()}),oc=!1,ut.forEach(function(r){if(r._subPinOffset&&r.pin){var s=r.vars.horizontal?"offsetWidth":"offsetHeight",a=r.pin[s];r.revert(!0,1),r.adjustPinSpacing(r.pin[s]-a),r.refresh()}}),th=1,Df(!0),ut.forEach(function(r){var s=zi(r.scroller,r._dir),a=r.vars.end==="max"||r._endClamp&&r.end>s,o=r._startClamp&&r.start>=s;(a||o)&&r.setPositions(o?s-1:r.start,a?Math.max(o?s:r.start+1,s):r.end,!0)}),Df(!1),th=0,n.forEach(function(r){return r&&r.render&&r.render(-1)}),ht.forEach(function(r){kn(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),T0(xd,1),ac.pause(),ys++,Un=2,hr(2),ut.forEach(function(r){return kn(r.vars.onRefresh)&&r.vars.onRefresh(r)}),Un=$e.isRefreshing=!1,Es("refresh")},ih=0,Vl=1,yo,hr=function(e){if(e===2||!Un&&!oc){$e.isUpdating=!0,yo&&yo.update(0);var t=ut.length,n=Sn(),r=n-qc>=50,s=t&&ut[0].scroll();if(Vl=ih>s?-1:1,Un||(ih=s),r&&(vi&&!Mc&&n-vi>200&&(vi=0,Es("scrollEnd")),to=qc,qc=n),Vl<0){for(In=t;In-- >0;)ut[In]&&ut[In].update(0,r);Vl=1}else for(In=0;In<t;In++)ut[In]&&ut[In].update(0,r);$e.isUpdating=!1}Oo=0},rh=[M0,S0,Sd,Md,di+xo,di+go,di+vo,di+_o,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Gl=rh.concat([vs,xs,"boxSizing","max"+ba,"max"+bd,"position",di,en,en+vo,en+go,en+xo,en+_o]),wv=function(e,t,n){fa(n);var r=e._gsap;if(r.spacerIsNative)fa(r.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},Kc=function(e,t,n,r){if(!e._gsap.swappedIn){for(var s=rh.length,a=t.style,o=e.style,l;s--;)l=rh[s],a[l]=n[l];a.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(a.display="inline-block"),o[Sd]=o[Md]="auto",a.flexBasis=n.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[vs]=lc(e,Fn)+rn,a[xs]=lc(e,sn)+rn,a[en]=o[di]=o[S0]=o[M0]="0",fa(r),o[vs]=o["max"+ba]=n[vs],o[xs]=o["max"+bd]=n[xs],o[en]=n[en],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},Ev=/([A-Z])/g,fa=function(e){if(e){var t=e.t.style,n=e.length,r=0,s,a;for((e.t._gsap||Ie.core.getCache(e.t)).uncache=1;r<n;r+=2)a=e[r+1],s=e[r],a?t[s]=a:t[s]&&t.removeProperty(s.replace(Ev,"-$1").toLowerCase())}},al=function(e){for(var t=Gl.length,n=e.style,r=[],s=0;s<t;s++)r.push(Gl[s],n[Gl[s]]);return r.t=e,r},Tv=function(e,t,n){for(var r=[],s=e.length,a=n?8:0,o;a<s;a+=2)o=e[a],r.push(o,o in t?t[o]:e[a+1]);return r.t=e.t,r},Wl={left:0,top:0},If=function(e,t,n,r,s,a,o,l,c,u,h,f,d,g){kn(e)&&(e=e(l)),ei(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?Bl("0"+e.substr(3),n):0));var _=d?d.time():0,m,p,y;if(d&&d.seek(0),isNaN(e)||(e=+e),ro(e))d&&(e=Ie.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,f,e)),o&&Hl(o,n,r,!0);else{kn(t)&&(t=t(l));var x=(e||"0").split(" "),v,A,b,w;y=Vn(t,l)||Ot,v=ar(y)||{},(!v||!v.left&&!v.top)&&fi(y).display==="none"&&(w=y.style.display,y.style.display="block",v=ar(y),w?y.style.display=w:y.style.removeProperty("display")),A=Bl(x[0],v[r.d]),b=Bl(x[1]||"0",n),e=v[r.p]-c[r.p]-u+A+s-b,o&&Hl(o,b,r,n-b<20||o._isStart&&b>20),n-=n-b}if(g&&(l[g]=e||-.001,e<0&&(e=0)),a){var C=e+n,S=a._isStart;m="scroll"+r.d2,Hl(a,C,r,S&&C>20||!S&&(h?Math.max(Ot[m],Ti[m]):a.parentNode[m])<=C+1),h&&(c=ar(o),h&&(a.style[r.op.p]=c[r.op.p]-r.op.m-a._offset+rn))}return d&&y&&(m=ar(y),d.seek(f),p=ar(y),d._caScrollDist=m[r.p]-p[r.p],e=e/d._caScrollDist*f),d&&d.seek(_),d?e:Math.round(e)},Av=/(webkit|moz|length|cssText|inset)/i,Uf=function(e,t,n,r){if(e.parentNode!==t){var s=e.style,a,o;if(t===Ot){e._stOrig=s.cssText,o=fi(e);for(a in o)!+a&&!Av.test(a)&&o[a]&&typeof s[a]=="string"&&a!=="0"&&(s[a]=o[a]);s.top=n,s.left=r}else s.cssText=e._stOrig;Ie.core.getCache(e).uncache=1,t.appendChild(e)}},C0=function(e,t,n){var r=t,s=r;return function(a){var o=Math.round(e());return o!==r&&o!==s&&Math.abs(o-r)>3&&Math.abs(o-s)>3&&(a=o,n&&n()),s=r,r=a,a}},ol=function(e,t,n){var r={};r[t.p]="+="+n,Ie.set(e,r)},Nf=function(e,t){var n=Gr(e,t),r="_scroll"+t.p2,s=function a(o,l,c,u,h){var f=a.tween,d=l.onComplete,g={};c=c||n();var _=C0(n,c,function(){f.kill(),a.tween=0});return h=u&&h||0,u=u||o-c,f&&f.kill(),l[r]=o,l.inherit=!1,l.modifiers=g,g[r]=function(){return _(c+u*f.ratio+h*f.ratio*f.ratio)},l.onUpdate=function(){ht.cache++,a.tween&&hr()},l.onComplete=function(){a.tween=0,d&&d.call(f)},f=a.tween=Ie.to(e,l),f};return e[r]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},dn(e,"wheel",n.wheelHandler),$e.isTouch&&dn(e,"touchmove",n.wheelHandler),s},$e=function(){function i(t,n){ea||i.register(Ie)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),eh(this),this.init(t,n)}var e=i.prototype;return e.init=function(n,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!no){this.update=this.refresh=this.kill=Ni;return}n=Cf(ei(n)||ro(n)||n.nodeType?{trigger:n}:n,rl);var s=n,a=s.onUpdate,o=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,h=s.scrub,f=s.trigger,d=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,m=s.anticipatePin,p=s.onScrubComplete,y=s.onSnapComplete,x=s.once,v=s.snap,A=s.pinReparent,b=s.pinSpacer,w=s.containerAnimation,C=s.fastScrollEnd,S=s.preventOverlaps,M=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Fn:sn,P=!h&&h!==0,U=Vn(n.scroller||dt),k=Ie.core.getCache(U),V=bs(U),q=("pinType"in n?n.pinType:kr(U,"pinType")||V&&"fixed")==="fixed",B=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],Y=P&&n.toggleActions.split(" "),H="markers"in n?n.markers:rl.markers,re=V?0:parseFloat(fi(U)["border"+M.p2+ba])||0,D=this,ue=n.onRefreshInit&&function(){return n.onRefreshInit(D)},Fe=_v(U,V,M),it=vv(U,V),Z=0,ae=0,be=0,oe=Gr(U,M),Le,Ne,Be,Ye,ne,ee,L,Ae,se,F,ce,ze,Ee,R,E,G,j,Q,J,ge,fe,ye,je,le,pe,We,Ge,Re,rt,qe,pt,N,ve,$,te,_e,Me,Ze,_t;if(D._startClamp=D._endClamp=!1,D._dir=M,m*=45,D.scroller=U,D.scroll=w?w.time.bind(w):oe,Ye=oe(),D.vars=n,r=r||n.animation,"refreshPriority"in n&&(f0=1,n.refreshPriority===-9999&&(yo=D)),k.tweenScroll=k.tweenScroll||{top:Nf(U,sn),left:Nf(U,Fn)},D.tweenTo=Le=k.tweenScroll[M.p],D.scrubDuration=function(we){ve=ro(we)&&we,ve?N?N.duration(we):N=Ie.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:ve,paused:!0,onComplete:function(){return p&&p(D)}}):(N&&N.progress(1).kill(),N=0)},r&&(r.vars.lazy=!1,r._initted&&!D.isReverted||r.vars.immediateRender!==!1&&n.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),D.animation=r.pause(),r.scrollTrigger=D,D.scrubDuration(h),qe=0,l||(l=r.vars.id)),v&&((!is(v)||v.push)&&(v={snapTo:v}),"scrollBehavior"in Ot.style&&Ie.set(V?[Ot,Ti]:U,{scrollBehavior:"auto"}),ht.forEach(function(we){return kn(we)&&we.target===(V?Bt.scrollingElement||Ti:U)&&(we.smooth=!1)}),Be=kn(v.snapTo)?v.snapTo:v.snapTo==="labels"?yv(r):v.snapTo==="labelsDirectional"?Mv(r):v.directional!==!1?function(we,Qe){return wd(v.snapTo)(we,Sn()-ae<500?0:Qe.direction)}:Ie.utils.snap(v.snapTo),$=v.duration||{min:.1,max:2},$=is($)?mo($.min,$.max):mo($,$),te=Ie.delayedCall(v.delay||ve/2||.1,function(){var we=oe(),Qe=Sn()-ae<500,ke=Le.tween;if((Qe||Math.abs(D.getVelocity())<10)&&!ke&&!Mc&&Z!==we){var Je=(we-ee)/R,$t=r&&!P?r.totalProgress():Je,ct=Qe?0:($t-pt)/(Sn()-to)*1e3||0,Dt=Ie.utils.clamp(-Je,1-Je,Os(ct/2)*ct/.185),nn=Je+(v.inertia===!1?0:Dt),At,Ct,yt=v,Zn=yt.onStart,Ut=yt.onInterrupt,An=yt.onComplete;if(At=Be(nn,D),ro(At)||(At=nn),Ct=Math.round(ee+At*R),we<=L&&we>=ee&&Ct!==we){if(ke&&!ke._initted&&ke.data<=Os(Ct-we))return;v.inertia===!1&&(Dt=At-Je),Le(Ct,{duration:$(Os(Math.max(Os(nn-$t),Os(At-$t))*.185/ct/.05||0)),ease:v.ease||"power3",data:Os(Ct-we),onInterrupt:function(){return te.restart(!0)&&Ut&&Ut(D)},onComplete:function(){D.update(),Z=oe(),r&&(N?N.resetTo("totalProgress",At,r._tTime/r._tDur):r.progress(At)),qe=pt=r&&!P?r.totalProgress():D.progress,y&&y(D),An&&An(D)}},we,Dt*R,Ct-we-Dt*R),Zn&&Zn(D,Le.tween)}}else D.isActive&&Z!==we&&te.restart(!0)}).pause()),l&&(nh[l]=D),f=D.trigger=Vn(f||d!==!0&&d),_t=f&&f._gsap&&f._gsap.stRevert,_t&&(_t=_t(D)),d=d===!0?f:Vn(d),ei(o)&&(o={targets:f,className:o}),d&&(g===!1||g===di||(g=!g&&d.parentNode&&d.parentNode.style&&fi(d.parentNode).display==="flex"?!1:en),D.pin=d,Ne=Ie.core.getCache(d),Ne.spacer?E=Ne.pinState:(b&&(b=Vn(b),b&&!b.nodeType&&(b=b.current||b.nativeElement),Ne.spacerIsNative=!!b,b&&(Ne.spacerState=al(b))),Ne.spacer=Q=b||Bt.createElement("div"),Q.classList.add("pin-spacer"),l&&Q.classList.add("pin-spacer-"+l),Ne.pinState=E=al(d)),n.force3D!==!1&&Ie.set(d,{force3D:!0}),D.spacer=Q=Ne.spacer,rt=fi(d),le=rt[g+M.os2],ge=Ie.getProperty(d),fe=Ie.quickSetter(d,M.a,rn),Kc(d,Q,rt),j=al(d)),H){ze=is(H)?Cf(H,Rf):Rf,F=sl("scroller-start",l,U,M,ze,0),ce=sl("scroller-end",l,U,M,ze,0,F),J=F["offset"+M.op.d2];var Wt=Vn(kr(U,"content")||U);Ae=this.markerStart=sl("start",l,Wt,M,ze,J,0,w),se=this.markerEnd=sl("end",l,Wt,M,ze,J,0,w),w&&(Ze=Ie.quickSetter([Ae,se],M.a,rn)),!q&&!(Vi.length&&kr(U,"fixedMarkers")===!0)&&(xv(V?Ot:U),Ie.set([F,ce],{force3D:!0}),We=Ie.quickSetter(F,M.a,rn),Re=Ie.quickSetter(ce,M.a,rn))}if(w){var Ce=w.vars.onUpdate,Oe=w.vars.onUpdateParams;w.eventCallback("onUpdate",function(){D.update(0,0,1),Ce&&Ce.apply(w,Oe||[])})}if(D.previous=function(){return ut[ut.indexOf(D)-1]},D.next=function(){return ut[ut.indexOf(D)+1]},D.revert=function(we,Qe){if(!Qe)return D.kill(!0);var ke=we!==!1||!D.enabled,Je=Mn;ke!==D.isReverted&&(ke&&(_e=Math.max(oe(),D.scroll.rec||0),be=D.progress,Me=r&&r.progress()),Ae&&[Ae,se,F,ce].forEach(function($t){return $t.style.display=ke?"none":"block"}),ke&&(Mn=D,D.update(ke)),d&&(!A||!D.isActive)&&(ke?wv(d,Q,E):Kc(d,Q,fi(d),pe)),ke||D.update(ke),Mn=Je,D.isReverted=ke)},D.refresh=function(we,Qe,ke,Je){if(!((Mn||!D.enabled)&&!Qe)){if(d&&we&&vi){dn(i,"scrollEnd",w0);return}!Un&&ue&&ue(D),Mn=D,Le.tween&&!ke&&(Le.tween.kill(),Le.tween=0),N&&N.pause(),_&&r&&r.revert({kill:!1}).invalidate(),D.isReverted||D.revert(!0,!0),D._subPinOffset=!1;var $t=Fe(),ct=it(),Dt=w?w.duration():zi(U,M),nn=R<=.01,At=0,Ct=Je||0,yt=is(ke)?ke.end:n.end,Zn=n.endTrigger||f,Ut=is(ke)?ke.start:n.start||(n.start===0||!f?0:d?"0 0":"0 100%"),An=D.pinnedContainer=n.pinnedContainer&&Vn(n.pinnedContainer,D),T=f&&Math.max(0,ut.indexOf(D))||0,O=T,W,X,z,he,de,Se,Pe,Ke,et,Ue,nt,vt,Mt;for(H&&is(ke)&&(vt=Ie.getProperty(F,M.p),Mt=Ie.getProperty(ce,M.p));O--;)Se=ut[O],Se.end||Se.refresh(0,1)||(Mn=D),Pe=Se.pin,Pe&&(Pe===f||Pe===d||Pe===An)&&!Se.isReverted&&(Ue||(Ue=[]),Ue.unshift(Se),Se.revert(!0,!0)),Se!==ut[O]&&(T--,O--);for(kn(Ut)&&(Ut=Ut(D)),Ut=wf(Ut,"start",D),ee=If(Ut,f,$t,M,oe(),Ae,F,D,ct,re,q,Dt,w,D._startClamp&&"_startClamp")||(d?-.001:0),kn(yt)&&(yt=yt(D)),ei(yt)&&!yt.indexOf("+=")&&(~yt.indexOf(" ")?yt=(ei(Ut)?Ut.split(" ")[0]:"")+yt:(At=Bl(yt.substr(2),$t),yt=ei(Ut)?Ut:(w?Ie.utils.mapRange(0,w.duration(),w.scrollTrigger.start,w.scrollTrigger.end,ee):ee)+At,Zn=f)),yt=wf(yt,"end",D),L=Math.max(ee,If(yt||(Zn?"100% 0":Dt),Zn,$t,M,oe()+At,se,ce,D,ct,re,q,Dt,w,D._endClamp&&"_endClamp"))||-.001,At=0,O=T;O--;)Se=ut[O],Pe=Se.pin,Pe&&Se.start-Se._pinPush<=ee&&!w&&Se.end>0&&(W=Se.end-(D._startClamp?Math.max(0,Se.start):Se.start),(Pe===f&&Se.start-Se._pinPush<ee||Pe===An)&&isNaN(Ut)&&(At+=W*(1-Se.progress)),Pe===d&&(Ct+=W));if(ee+=At,L+=At,D._startClamp&&(D._startClamp+=At),D._endClamp&&!Un&&(D._endClamp=L||-.001,L=Math.min(L,zi(U,M))),R=L-ee||(ee-=.01)&&.001,nn&&(be=Ie.utils.clamp(0,1,Ie.utils.normalize(ee,L,_e))),D._pinPush=Ct,Ae&&At&&(W={},W[M.a]="+="+At,An&&(W[M.p]="-="+oe()),Ie.set([Ae,se],W)),d&&!(th&&D.end>=zi(U,M)))W=fi(d),he=M===sn,z=oe(),ye=parseFloat(ge(M.a))+Ct,!Dt&&L>1&&(nt=(V?Bt.scrollingElement||Ti:U).style,nt={style:nt,value:nt["overflow"+M.a.toUpperCase()]},V&&fi(Ot)["overflow"+M.a.toUpperCase()]!=="scroll"&&(nt.style["overflow"+M.a.toUpperCase()]="scroll")),Kc(d,Q,W),j=al(d),X=ar(d,!0),Ke=q&&Gr(U,he?Fn:sn)(),g?(pe=[g+M.os2,R+Ct+rn],pe.t=Q,O=g===en?lc(d,M)+R+Ct:0,O&&(pe.push(M.d,O+rn),Q.style.flexBasis!=="auto"&&(Q.style.flexBasis=O+rn)),fa(pe),An&&ut.forEach(function(jt){jt.pin===An&&jt.vars.pinSpacing!==!1&&(jt._subPinOffset=!0)}),q&&oe(_e)):(O=lc(d,M),O&&Q.style.flexBasis!=="auto"&&(Q.style.flexBasis=O+rn)),q&&(de={top:X.top+(he?z-ee:Ke)+rn,left:X.left+(he?Ke:z-ee)+rn,boxSizing:"border-box",position:"fixed"},de[vs]=de["max"+ba]=Math.ceil(X.width)+rn,de[xs]=de["max"+bd]=Math.ceil(X.height)+rn,de[di]=de[di+vo]=de[di+go]=de[di+xo]=de[di+_o]="0",de[en]=W[en],de[en+vo]=W[en+vo],de[en+go]=W[en+go],de[en+xo]=W[en+xo],de[en+_o]=W[en+_o],G=Tv(E,de,A),Un&&oe(0)),r?(et=r._initted,Xc(1),r.render(r.duration(),!0,!0),je=ge(M.a)-ye+R+Ct,Ge=Math.abs(R-je)>1,q&&Ge&&G.splice(G.length-2,2),r.render(0,!0,!0),et||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),Xc(0)):je=R,nt&&(nt.value?nt.style["overflow"+M.a.toUpperCase()]=nt.value:nt.style.removeProperty("overflow-"+M.a));else if(f&&oe()&&!w)for(X=f.parentNode;X&&X!==Ot;)X._pinOffset&&(ee-=X._pinOffset,L-=X._pinOffset),X=X.parentNode;Ue&&Ue.forEach(function(jt){return jt.revert(!1,!0)}),D.start=ee,D.end=L,Ye=ne=Un?_e:oe(),!w&&!Un&&(Ye<_e&&oe(_e),D.scroll.rec=0),D.revert(!1,!0),ae=Sn(),te&&(Z=-1,te.restart(!0)),Mn=0,r&&P&&(r._initted||Me)&&r.progress()!==Me&&r.progress(Me||0,!0).render(r.time(),!0,!0),(nn||be!==D.progress||w||_)&&(r&&!P&&r.totalProgress(w&&ee<-.001&&!be?Ie.utils.normalize(ee,L,0):be,!0),D.progress=nn||(Ye-ee)/R===be?0:be),d&&g&&(Q._pinOffset=Math.round(D.progress*je)),N&&N.invalidate(),isNaN(vt)||(vt-=Ie.getProperty(F,M.p),Mt-=Ie.getProperty(ce,M.p),ol(F,M,vt),ol(Ae,M,vt-(Je||0)),ol(ce,M,Mt),ol(se,M,Mt-(Je||0))),nn&&!Un&&D.update(),u&&!Un&&!Ee&&(Ee=!0,u(D),Ee=!1)}},D.getVelocity=function(){return(oe()-ne)/(Sn()-to)*1e3||0},D.endAnimation=function(){Ya(D.callbackAnimation),r&&(N?N.progress(1):r.paused()?P||Ya(r,D.direction<0,1):Ya(r,r.reversed()))},D.labelToScroll=function(we){return r&&r.labels&&(ee||D.refresh()||ee)+r.labels[we]/r.duration()*R||0},D.getTrailing=function(we){var Qe=ut.indexOf(D),ke=D.direction>0?ut.slice(0,Qe).reverse():ut.slice(Qe+1);return(ei(we)?ke.filter(function(Je){return Je.vars.preventOverlaps===we}):ke).filter(function(Je){return D.direction>0?Je.end<=ee:Je.start>=L})},D.update=function(we,Qe,ke){if(!(w&&!ke&&!we)){var Je=Un===!0?_e:D.scroll(),$t=we?0:(Je-ee)/R,ct=$t<0?0:$t>1?1:$t||0,Dt=D.progress,nn,At,Ct,yt,Zn,Ut,An,T;if(Qe&&(ne=Ye,Ye=w?oe():Je,v&&(pt=qe,qe=r&&!P?r.totalProgress():ct)),m&&d&&!Mn&&!el&&vi&&(!ct&&ee<Je+(Je-ne)/(Sn()-to)*m?ct=1e-4:ct===1&&L>Je+(Je-ne)/(Sn()-to)*m&&(ct=.9999)),ct!==Dt&&D.enabled){if(nn=D.isActive=!!ct&&ct<1,At=!!Dt&&Dt<1,Ut=nn!==At,Zn=Ut||!!ct!=!!Dt,D.direction=ct>Dt?1:-1,D.progress=ct,Zn&&!Mn&&(Ct=ct&&!Dt?0:ct===1?1:Dt===1?2:3,P&&(yt=!Ut&&Y[Ct+1]!=="none"&&Y[Ct+1]||Y[Ct],T=r&&(yt==="complete"||yt==="reset"||yt in r))),S&&(Ut||T)&&(T||h||!r)&&(kn(S)?S(D):D.getTrailing(S).forEach(function(z){return z.endAnimation()})),P||(N&&!Mn&&!el?(N._dp._time-N._start!==N._time&&N.render(N._dp._time-N._start),N.resetTo?N.resetTo("totalProgress",ct,r._tTime/r._tDur):(N.vars.totalProgress=ct,N.invalidate().restart())):r&&r.totalProgress(ct,!!(Mn&&(ae||we)))),d){if(we&&g&&(Q.style[g+M.os2]=le),!q)fe(io(ye+je*ct));else if(Zn){if(An=!we&&ct>Dt&&L+1>Je&&Je+1>=zi(U,M),A)if(!we&&(nn||An)){var O=ar(d,!0),W=Je-ee;Uf(d,Ot,O.top+(M===sn?W:0)+rn,O.left+(M===sn?0:W)+rn)}else Uf(d,Q);fa(nn||An?G:j),Ge&&ct<1&&nn||fe(ye+(ct===1&&!An?je:0))}}v&&!Le.tween&&!Mn&&!el&&te.restart(!0),o&&(Ut||x&&ct&&(ct<1||!Yc))&&No(o.targets).forEach(function(z){return z.classList[nn||x?"add":"remove"](o.className)}),a&&!P&&!we&&a(D),Zn&&!Mn?(P&&(T&&(yt==="complete"?r.pause().totalProgress(1):yt==="reset"?r.restart(!0).pause():yt==="restart"?r.restart(!0):r[yt]()),a&&a(D)),(Ut||!Yc)&&(c&&Ut&&$c(D,c),B[Ct]&&$c(D,B[Ct]),x&&(ct===1?D.kill(!1,1):B[Ct]=0),Ut||(Ct=ct===1?1:3,B[Ct]&&$c(D,B[Ct]))),C&&!nn&&Math.abs(D.getVelocity())>(ro(C)?C:2500)&&(Ya(D.callbackAnimation),N?N.progress(1):Ya(r,yt==="reverse"?1:!ct,1))):P&&a&&!Mn&&a(D)}if(Re){var X=w?Je/w.duration()*(w._caScrollDist||0):Je;We(X+(F._isFlipped?1:0)),Re(X)}Ze&&Ze(-Je/w.duration()*(w._caScrollDist||0))}},D.enable=function(we,Qe){D.enabled||(D.enabled=!0,dn(U,"resize",so),V||dn(U,"scroll",Fs),ue&&dn(i,"refreshInit",ue),we!==!1&&(D.progress=be=0,Ye=ne=Z=oe()),Qe!==!1&&D.refresh())},D.getTween=function(we){return we&&Le?Le.tween:N},D.setPositions=function(we,Qe,ke,Je){if(w){var $t=w.scrollTrigger,ct=w.duration(),Dt=$t.end-$t.start;we=$t.start+Dt*we/ct,Qe=$t.start+Dt*Qe/ct}D.refresh(!1,!1,{start:Ef(we,ke&&!!D._startClamp),end:Ef(Qe,ke&&!!D._endClamp)},Je),D.update()},D.adjustPinSpacing=function(we){if(pe&&we){var Qe=pe.indexOf(M.d)+1;pe[Qe]=parseFloat(pe[Qe])+we+rn,pe[1]=parseFloat(pe[1])+we+rn,fa(pe)}},D.disable=function(we,Qe){if(D.enabled&&(we!==!1&&D.revert(!0,!0),D.enabled=D.isActive=!1,Qe||N&&N.pause(),_e=0,Ne&&(Ne.uncache=1),ue&&hn(i,"refreshInit",ue),te&&(te.pause(),Le.tween&&Le.tween.kill()&&(Le.tween=0)),!V)){for(var ke=ut.length;ke--;)if(ut[ke].scroller===U&&ut[ke]!==D)return;hn(U,"resize",so),V||hn(U,"scroll",Fs)}},D.kill=function(we,Qe){D.disable(we,Qe),N&&!Qe&&N.kill(),l&&delete nh[l];var ke=ut.indexOf(D);ke>=0&&ut.splice(ke,1),ke===In&&Vl>0&&In--,ke=0,ut.forEach(function(Je){return Je.scroller===D.scroller&&(ke=1)}),ke||Un||(D.scroll.rec=0),r&&(r.scrollTrigger=null,we&&r.revert({kill:!1}),Qe||r.kill()),Ae&&[Ae,se,F,ce].forEach(function(Je){return Je.parentNode&&Je.parentNode.removeChild(Je)}),yo===D&&(yo=0),d&&(Ne&&(Ne.uncache=1),ke=0,ut.forEach(function(Je){return Je.pin===d&&ke++}),ke||(Ne.spacer=0)),n.onKill&&n.onKill(D)},ut.push(D),D.enable(!1,!1),_t&&_t(D),r&&r.add&&!R){var st=D.update;D.update=function(){D.update=st,ee||L||D.refresh()},Ie.delayedCall(.01,D.update),R=.01,ee=L=0}else D.refresh();d&&bv()},i.register=function(n){return ea||(Ie=n||v0(),_0()&&window.document&&i.enable(),ea=no),ea},i.defaults=function(n){if(n)for(var r in n)rl[r]=n[r];return rl},i.disable=function(n,r){no=0,ut.forEach(function(a){return a[r?"kill":"disable"](n)}),hn(dt,"wheel",Fs),hn(Bt,"scroll",Fs),clearInterval(Qo),hn(Bt,"touchcancel",Ni),hn(Ot,"touchstart",Ni),nl(hn,Bt,"pointerdown,touchstart,mousedown",Tf),nl(hn,Bt,"pointerup,touchend,mouseup",Af),ac.kill(),tl(hn);for(var s=0;s<ht.length;s+=3)il(hn,ht[s],ht[s+1]),il(hn,ht[s],ht[s+2])},i.enable=function(){if(dt=window,Bt=document,Ti=Bt.documentElement,Ot=Bt.body,Ie&&(No=Ie.utils.toArray,mo=Ie.utils.clamp,eh=Ie.core.context||Ni,Xc=Ie.core.suppressOverwrites||Ni,xd=dt.history.scrollRestoration||"auto",ih=dt.pageYOffset,Ie.core.globals("ScrollTrigger",i),Ot)){no=1,da=document.createElement("div"),da.style.height="100vh",da.style.position="absolute",A0(),gv(),Kt.register(Ie),i.isTouch=Kt.isTouch,Ar=Kt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Qu=Kt.isTouch===1,dn(dt,"wheel",Fs),d0=[dt,Bt,Ti,Ot],Ie.matchMedia?(i.matchMedia=function(l){var c=Ie.matchMedia(),u;for(u in l)c.add(u,l[u]);return c},Ie.addEventListener("matchMediaInit",function(){return Ed()}),Ie.addEventListener("matchMediaRevert",function(){return E0()}),Ie.addEventListener("matchMedia",function(){us(0,1),Es("matchMedia")}),Ie.matchMedia("(orientation: portrait)",function(){return Zc(),Zc})):console.warn("Requires GSAP 3.11.0 or later"),Zc(),dn(Bt,"scroll",Fs);var n=Ot.style,r=n.borderTopStyle,s=Ie.core.Animation.prototype,a,o;for(s.revert||Object.defineProperty(s,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",a=ar(Ot),sn.m=Math.round(a.top+sn.sc())||0,Fn.m=Math.round(a.left+Fn.sc())||0,r?n.borderTopStyle=r:n.removeProperty("border-top-style"),Qo=setInterval(Pf,250),Ie.delayedCall(.5,function(){return el=0}),dn(Bt,"touchcancel",Ni),dn(Ot,"touchstart",Ni),nl(dn,Bt,"pointerdown,touchstart,mousedown",Tf),nl(dn,Bt,"pointerup,touchend,mouseup",Af),ju=Ie.utils.checkPrefix("transform"),Gl.push(ju),ea=Sn(),ac=Ie.delayedCall(.2,us).pause(),ta=[Bt,"visibilitychange",function(){var l=dt.innerWidth,c=dt.innerHeight;Bt.hidden?(Sf=l,bf=c):(Sf!==l||bf!==c)&&so()},Bt,"DOMContentLoaded",us,dt,"load",us,dt,"resize",so],tl(dn),ut.forEach(function(l){return l.enable(0,1)}),o=0;o<ht.length;o+=3)il(hn,ht[o],ht[o+1]),il(hn,ht[o],ht[o+2])}},i.config=function(n){"limitCallbacks"in n&&(Yc=!!n.limitCallbacks);var r=n.syncInterval;r&&clearInterval(Qo)||(Qo=r)&&setInterval(Pf,r),"ignoreMobileResize"in n&&(Qu=i.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(tl(hn)||tl(dn,n.autoRefreshEvents||"none"),p0=(n.autoRefreshEvents+"").indexOf("resize")===-1)},i.scrollerProxy=function(n,r){var s=Vn(n),a=ht.indexOf(s),o=bs(s);~a&&ht.splice(a,o?6:2),r&&(o?Vi.unshift(dt,r,Ot,r,Ti,r):Vi.unshift(s,r))},i.clearMatchMedia=function(n){ut.forEach(function(r){return r._ctx&&r._ctx.query===n&&r._ctx.kill(!0,!0)})},i.isInViewport=function(n,r,s){var a=(ei(n)?Vn(n):n).getBoundingClientRect(),o=a[s?vs:xs]*r||0;return s?a.right-o>0&&a.left+o<dt.innerWidth:a.bottom-o>0&&a.top+o<dt.innerHeight},i.positionInViewport=function(n,r,s){ei(n)&&(n=Vn(n));var a=n.getBoundingClientRect(),o=a[s?vs:xs],l=r==null?o/2:r in cc?cc[r]*o:~r.indexOf("%")?parseFloat(r)*o/100:parseFloat(r)||0;return s?(a.left+l)/dt.innerWidth:(a.top+l)/dt.innerHeight},i.killAll=function(n){if(ut.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var r=ws.killAll||[];ws={},r.forEach(function(s){return s()})}},i}();$e.version="3.12.5";$e.saveStyles=function(i){return i?No(i).forEach(function(e){if(e&&e.style){var t=Qn.indexOf(e);t>=0&&Qn.splice(t,5),Qn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Ie.core.getCache(e),eh())}}):Qn};$e.revert=function(i,e){return Ed(!i,e)};$e.create=function(i,e){return new $e(i,e)};$e.refresh=function(i){return i?so():(ea||$e.register())&&us(!0)};$e.update=function(i){return++ht.cache&&hr(i===!0?2:0)};$e.clearScrollMemory=T0;$e.maxScroll=function(i,e){return zi(i,e?Fn:sn)};$e.getScrollFunc=function(i,e){return Gr(Vn(i),e?Fn:sn)};$e.getById=function(i){return nh[i]};$e.getAll=function(){return ut.filter(function(i){return i.vars.id!=="ScrollSmoother"})};$e.isScrolling=function(){return!!vi};$e.snapDirectional=wd;$e.addEventListener=function(i,e){var t=ws[i]||(ws[i]=[]);~t.indexOf(e)||t.push(e)};$e.removeEventListener=function(i,e){var t=ws[i],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};$e.batch=function(i,e){var t=[],n={},r=e.interval||.016,s=e.batchMax||1e9,a=function(c,u){var h=[],f=[],d=Ie.delayedCall(r,function(){u(h,f),h=[],f=[]}).pause();return function(g){h.length||d.restart(!0),h.push(g.trigger),f.push(g),s<=h.length&&d.progress(1)}},o;for(o in e)n[o]=o.substr(0,2)==="on"&&kn(e[o])&&o!=="onRefreshInit"?a(o,e[o]):e[o];return kn(s)&&(s=s(),dn($e,"refresh",function(){return s=e.batchMax()})),No(i).forEach(function(l){var c={};for(o in n)c[o]=n[o];c.trigger=l,t.push($e.create(c))}),t};var Of=function(e,t,n,r){return t>r?e(r):t<0&&e(0),n>r?(r-t)/(n-t):n<0?t/(t-n):1},Jc=function i(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Kt.isTouch?" pinch-zoom":""):"none",e===Ti&&i(Ot,t)},ll={auto:1,scroll:1},Cv=function(e){var t=e.event,n=e.target,r=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,a=s._gsap||Ie.core.getCache(s),o=Sn(),l;if(!a._isScrollT||o-a._isScrollT>2e3){for(;s&&s!==Ot&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(ll[(l=fi(s)).overflowY]||ll[l.overflowX]));)s=s.parentNode;a._isScroll=s&&s!==n&&!bs(s)&&(ll[(l=fi(s)).overflowY]||ll[l.overflowX]),a._isScrollT=o}(a._isScroll||r==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},R0=function(e,t,n,r){return Kt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r=r&&Cv,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return n&&dn(Bt,Kt.eventTypes[0],kf,!1,!0)},onDisable:function(){return hn(Bt,Kt.eventTypes[0],kf,!0)}})},Rv=/(input|label|select|textarea)/i,Ff,kf=function(e){var t=Rv.test(e.target.tagName);(t||Ff)&&(e._gsapAllow=!0,Ff=t)},Pv=function(e){is(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,r=t.momentum,s=t.allowNestedScroll,a=t.onRelease,o,l,c=Vn(e.target)||Ti,u=Ie.core.globals().ScrollSmoother,h=u&&u.get(),f=Ar&&(e.content&&Vn(e.content)||h&&e.content!==!1&&!h.smooth()&&h.content()),d=Gr(c,sn),g=Gr(c,Fn),_=1,m=(Kt.isTouch&&dt.visualViewport?dt.visualViewport.scale*dt.visualViewport.width:dt.outerWidth)/dt.innerWidth,p=0,y=kn(r)?function(){return r(o)}:function(){return r||2.8},x,v,A=R0(c,e.type,!0,s),b=function(){return v=!1},w=Ni,C=Ni,S=function(){l=zi(c,sn),C=mo(Ar?1:0,l),n&&(w=mo(0,zi(c,Fn))),x=ys},M=function(){f._gsap.y=io(parseFloat(f._gsap.y)+d.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},P=function(){if(v){requestAnimationFrame(b);var H=io(o.deltaY/2),re=C(d.v-H);if(f&&re!==d.v+d.offset){d.offset=re-d.v;var D=io((parseFloat(f&&f._gsap.y)||0)-d.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+D+", 0, 1)",f._gsap.y=D+"px",d.cacheID=ht.cache,hr()}return!0}d.offset&&M(),v=!0},U,k,V,q,B=function(){S(),U.isActive()&&U.vars.scrollY>l&&(d()>l?U.progress(1)&&d(l):U.resetTo("scrollY",l))};return f&&Ie.set(f,{y:"+=0"}),e.ignoreCheck=function(Y){return Ar&&Y.type==="touchmove"&&P()||_>1.05&&Y.type!=="touchstart"||o.isGesturing||Y.touches&&Y.touches.length>1},e.onPress=function(){v=!1;var Y=_;_=io((dt.visualViewport&&dt.visualViewport.scale||1)/m),U.pause(),Y!==_&&Jc(c,_>1.01?!0:n?!1:"x"),k=g(),V=d(),S(),x=ys},e.onRelease=e.onGestureStart=function(Y,H){if(d.offset&&M(),!H)q.restart(!0);else{ht.cache++;var re=y(),D,ue;n&&(D=g(),ue=D+re*.05*-Y.velocityX/.227,re*=Of(g,D,ue,zi(c,Fn)),U.vars.scrollX=w(ue)),D=d(),ue=D+re*.05*-Y.velocityY/.227,re*=Of(d,D,ue,zi(c,sn)),U.vars.scrollY=C(ue),U.invalidate().duration(re).play(.01),(Ar&&U.vars.scrollY>=l||D>=l-1)&&Ie.to({},{onUpdate:B,duration:re})}a&&a(Y)},e.onWheel=function(){U._ts&&U.pause(),Sn()-p>1e3&&(x=0,p=Sn())},e.onChange=function(Y,H,re,D,ue){if(ys!==x&&S(),H&&n&&g(w(D[2]===H?k+(Y.startX-Y.x):g()+H-D[1])),re){d.offset&&M();var Fe=ue[2]===re,it=Fe?V+Y.startY-Y.y:d()+re-ue[1],Z=C(it);Fe&&it!==Z&&(V+=Z-it),d(Z)}(re||H)&&hr()},e.onEnable=function(){Jc(c,n?!1:"x"),$e.addEventListener("refresh",B),dn(dt,"resize",B),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=g.smooth=!1),A.enable()},e.onDisable=function(){Jc(c,!0),hn(dt,"resize",B),$e.removeEventListener("refresh",B),A.kill()},e.lockAxis=e.lockAxis!==!1,o=new Kt(e),o.iOS=Ar,Ar&&!d()&&d(1),Ar&&Ie.ticker.add(Ni),q=o._dc,U=Ie.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:C0(d,d(),function(){return U.pause()})},onUpdate:hr,onComplete:q.vars.onComplete}),o};$e.sort=function(i){return ut.sort(i||function(e,t){return(e.vars.refreshPriority||0)*-1e6+e.start-(t.start+(t.vars.refreshPriority||0)*-1e6)})};$e.observe=function(i){return new Kt(i)};$e.normalizeScroll=function(i){if(typeof i>"u")return Dn;if(i===!0&&Dn)return Dn.enable();if(i===!1){Dn&&Dn.kill(),Dn=i;return}var e=i instanceof Kt?i:Pv(i);return Dn&&Dn.target===e.target&&Dn.kill(),bs(e.target)&&(Dn=e),e};$e.core={_getVelocityProp:Ju,_inputObserver:R0,_scrollers:ht,_proxies:Vi,bridge:{ss:function(){vi||Es("scrollStart"),vi=Sn()},ref:function(){return Mn}}};v0()&&Ie.registerPlugin($e);var Lv="1.1.18";function P0(i,e,t){return Math.max(i,Math.min(e,t))}function Dv(i,e,t){return(1-t)*i+t*e}function Iv(i,e,t,n){return Dv(i,e,1-Math.exp(-t*n))}function Uv(i,e){return(i%e+e)%e}var Nv=class{constructor(){Xe(this,"isRunning",!1);Xe(this,"value",0);Xe(this,"from",0);Xe(this,"to",0);Xe(this,"currentTime",0);Xe(this,"lerp");Xe(this,"duration");Xe(this,"easing");Xe(this,"onUpdate")}advance(i){var t;if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=i;const n=P0(0,this.currentTime/this.duration,1);e=n>=1;const r=e?1:this.easing(n);this.value=this.from+(this.to-this.from)*r}else this.lerp?(this.value=Iv(this.value,this.to,this.lerp*60,i),Math.round(this.value)===this.to&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),(t=this.onUpdate)==null||t.call(this,this.value,e)}stop(){this.isRunning=!1}fromTo(i,e,{lerp:t,duration:n,easing:r,onStart:s,onUpdate:a}){this.from=this.value=i,this.to=e,this.lerp=t,this.duration=n,this.easing=r,this.currentTime=0,this.isRunning=!0,s==null||s(),this.onUpdate=a}};function Ov(i,e){let t;return function(...n){let r=this;clearTimeout(t),t=setTimeout(()=>{t=void 0,i.apply(r,n)},e)}}var Fv=class{constructor(i,e,{autoResize:t=!0,debounce:n=250}={}){Xe(this,"width",0);Xe(this,"height",0);Xe(this,"scrollHeight",0);Xe(this,"scrollWidth",0);Xe(this,"debouncedResize");Xe(this,"wrapperResizeObserver");Xe(this,"contentResizeObserver");Xe(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Xe(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Xe(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=i,this.content=e,t&&(this.debouncedResize=Ov(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var i,e;(i=this.wrapperResizeObserver)==null||i.disconnect(),(e=this.contentResizeObserver)==null||e.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize,!1)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},L0=class{constructor(){Xe(this,"events",{})}emit(i,...e){var n;let t=this.events[i]||[];for(let r=0,s=t.length;r<s;r++)(n=t[r])==null||n.call(t,...e)}on(i,e){var t;return(t=this.events[i])!=null&&t.push(e)||(this.events[i]=[e]),()=>{var n;this.events[i]=(n=this.events[i])==null?void 0:n.filter(r=>e!==r)}}off(i,e){var t;this.events[i]=(t=this.events[i])==null?void 0:t.filter(n=>e!==n)}destroy(){this.events={}}},zf=100/6,yr={passive:!1},kv=class{constructor(i,e={wheelMultiplier:1,touchMultiplier:1}){Xe(this,"touchStart",{x:0,y:0});Xe(this,"lastDelta",{x:0,y:0});Xe(this,"window",{width:0,height:0});Xe(this,"emitter",new L0);Xe(this,"onTouchStart",i=>{const{clientX:e,clientY:t}=i.targetTouches?i.targetTouches[0]:i;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:i})});Xe(this,"onTouchMove",i=>{const{clientX:e,clientY:t}=i.targetTouches?i.targetTouches[0]:i,n=-(e-this.touchStart.x)*this.options.touchMultiplier,r=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:n,y:r},this.emitter.emit("scroll",{deltaX:n,deltaY:r,event:i})});Xe(this,"onTouchEnd",i=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:i})});Xe(this,"onWheel",i=>{let{deltaX:e,deltaY:t,deltaMode:n}=i;const r=n===1?zf:n===2?this.window.width:1,s=n===1?zf:n===2?this.window.height:1;e*=r,t*=s,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:i})});Xe(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=i,this.options=e,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,yr),this.element.addEventListener("touchstart",this.onTouchStart,yr),this.element.addEventListener("touchmove",this.onTouchMove,yr),this.element.addEventListener("touchend",this.onTouchEnd,yr)}on(i,e){return this.emitter.on(i,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,yr),this.element.removeEventListener("touchstart",this.onTouchStart,yr),this.element.removeEventListener("touchmove",this.onTouchMove,yr),this.element.removeEventListener("touchend",this.onTouchEnd,yr)}},zv=class{constructor({wrapper:i=window,content:e=document.documentElement,eventsTarget:t=i,smoothWheel:n=!0,syncTouch:r=!1,syncTouchLerp:s=.075,touchInertiaMultiplier:a=35,duration:o,easing:l=A=>Math.min(1,1.001-Math.pow(2,-10*A)),lerp:c=.1,infinite:u=!1,orientation:h="vertical",gestureOrientation:f="vertical",touchMultiplier:d=1,wheelMultiplier:g=1,autoResize:_=!0,prevent:m,virtualScroll:p,overscroll:y=!0,autoRaf:x=!1,__experimental__naiveDimensions:v=!1}={}){Xe(this,"_isScrolling",!1);Xe(this,"_isStopped",!1);Xe(this,"_isLocked",!1);Xe(this,"_preventNextNativeScrollEvent",!1);Xe(this,"_resetVelocityTimeout",null);Xe(this,"__rafID",null);Xe(this,"isTouching");Xe(this,"time",0);Xe(this,"userData",{});Xe(this,"lastVelocity",0);Xe(this,"velocity",0);Xe(this,"direction",0);Xe(this,"options");Xe(this,"targetScroll");Xe(this,"animatedScroll");Xe(this,"animate",new Nv);Xe(this,"emitter",new L0);Xe(this,"dimensions");Xe(this,"virtualScroll");Xe(this,"onPointerDown",i=>{i.button===1&&this.reset()});Xe(this,"onVirtualScroll",i=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(i)===!1)return;const{deltaX:e,deltaY:t,event:n}=i;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:n}),n.ctrlKey||n.lenisStopPropagation)return;const r=n.type.includes("touch"),s=n.type.includes("wheel");this.isTouching=n.type==="touchstart"||n.type==="touchmove";const a=e===0&&t===0;if(this.options.syncTouch&&r&&n.type==="touchstart"&&a&&!this.isStopped&&!this.isLocked){this.reset();return}const l=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(a||l)return;let c=n.composedPath();c=c.slice(0,c.indexOf(this.rootElement));const u=this.options.prevent;if(c.find(m=>{var p,y,x;return m instanceof HTMLElement&&(typeof u=="function"&&(u==null?void 0:u(m))||((p=m.hasAttribute)==null?void 0:p.call(m,"data-lenis-prevent"))||r&&((y=m.hasAttribute)==null?void 0:y.call(m,"data-lenis-prevent-touch"))||s&&((x=m.hasAttribute)==null?void 0:x.call(m,"data-lenis-prevent-wheel")))}))return;if(this.isStopped||this.isLocked){n.preventDefault();return}if(!(this.options.syncTouch&&r||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let f=t;this.options.gestureOrientation==="both"?f=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(f=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(n.lenisStopPropagation=!0),n.preventDefault();const d=r&&this.options.syncTouch,_=r&&n.type==="touchend"&&Math.abs(f)>5;_&&(f=this.velocity*this.options.touchInertiaMultiplier),this.scrollTo(this.targetScroll+f,{programmatic:!1,...d?{lerp:_?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Xe(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const i=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-i,this.direction=Math.sign(this.animatedScroll-i),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Xe(this,"raf",i=>{const e=i-(this.time||i);this.time=i,this.animate.advance(e*.001),this.options.autoRaf&&(this.__rafID=requestAnimationFrame(this.raf))});window.lenisVersion=Lv,(!i||i===document.documentElement||i===document.body)&&(i=window),this.options={wrapper:i,content:e,eventsTarget:t,smoothWheel:n,syncTouch:r,syncTouchLerp:s,touchInertiaMultiplier:a,duration:o,easing:l,lerp:c,infinite:u,gestureOrientation:f,orientation:h,touchMultiplier:d,wheelMultiplier:g,autoResize:_,prevent:m,virtualScroll:p,overscroll:y,autoRaf:x,__experimental__naiveDimensions:v},this.dimensions=new Fv(i,e,{autoResize:_}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll=new kv(t,{touchMultiplier:d,wheelMultiplier:g}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoRaf&&(this.__rafID=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this.__rafID&&cancelAnimationFrame(this.__rafID)}on(i,e){return this.emitter.on(i,e)}off(i,e){return this.emitter.off(i,e)}setScroll(i){this.isHorizontal?this.rootElement.scrollLeft=i:this.rootElement.scrollTop=i}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){this.isStopped&&(this.reset(),this.isStopped=!1)}stop(){this.isStopped||(this.reset(),this.isStopped=!0)}scrollTo(i,{offset:e=0,immediate:t=!1,lock:n=!1,duration:r=this.options.duration,easing:s=this.options.easing,lerp:a=this.options.lerp,onStart:o,onComplete:l,force:c=!1,programmatic:u=!0,userData:h}={}){if(!((this.isStopped||this.isLocked)&&!c)){if(typeof i=="string"&&["top","left","start"].includes(i))i=0;else if(typeof i=="string"&&["bottom","right","end"].includes(i))i=this.limit;else{let f;if(typeof i=="string"?f=document.querySelector(i):i instanceof HTMLElement&&(i!=null&&i.nodeType)&&(f=i),f){if(this.options.wrapper!==window){const g=this.rootElement.getBoundingClientRect();e-=this.isHorizontal?g.left:g.top}const d=f.getBoundingClientRect();i=(this.isHorizontal?d.left:d.top)+this.animatedScroll}}if(typeof i=="number"){if(i+=e,i=Math.round(i),this.options.infinite?u&&(this.targetScroll=this.animatedScroll=this.scroll):i=P0(0,i,this.limit),i===this.targetScroll){o==null||o(this),l==null||l(this);return}if(this.userData=h??{},t){this.animatedScroll=this.targetScroll=i,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),l==null||l(this),this.userData={};return}u||(this.targetScroll=i),this.animate.fromTo(this.animatedScroll,i,{duration:r,easing:s,lerp:a,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",o==null||o(this)},onUpdate:(f,d)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=f-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=f,this.setScroll(this.scroll),u&&(this.targetScroll=f),d||this.emit(),d&&(this.reset(),this.emit(),l==null||l(this),this.userData={},this.preventNextNativeScrollEvent())}})}}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.__experimental__naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){return this.isHorizontal?this.rootElement.scrollLeft:this.rootElement.scrollTop}get scroll(){return this.options.infinite?Uv(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(i){this._isScrolling!==i&&(this._isScrolling=i,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(i){this._isStopped!==i&&(this._isStopped=i,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(i){this._isLocked!==i&&(this._isLocked=i,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let i="lenis";return this.isStopped&&(i+=" lenis-stopped"),this.isLocked&&(i+=" lenis-locked"),this.isScrolling&&(i+=" lenis-scrolling"),this.isScrolling==="smooth"&&(i+=" lenis-smooth"),i}updateClassName(){this.cleanUpClassName(),this.rootElement.className=`${this.rootElement.className} ${this.className}`.trim()}cleanUpClassName(){this.rootElement.className=this.rootElement.className.replace(/lenis(-\w+)?/g,"").trim()}};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Td="170",Bv=0,Bf=1,Hv=2,D0=1,I0=2,ir=3,Wr=0,zn=1,pn=2,zr=0,pa=1,sh=2,Hf=3,Vf=4,Vv=5,os=100,Gv=101,Wv=102,Xv=103,Yv=104,qv=200,$v=201,Zv=202,Kv=203,ah=204,oh=205,Jv=206,jv=207,Qv=208,ex=209,tx=210,nx=211,ix=212,rx=213,sx=214,lh=0,ch=1,uh=2,wa=3,hh=4,dh=5,fh=6,ph=7,U0=0,ax=1,ox=2,Br=0,lx=1,cx=2,ux=3,N0=4,hx=5,dx=6,fx=7,O0=300,Ea=301,Ta=302,mh=303,gh=304,Sc=306,uc=1e3,hs=1001,_h=1002,Li=1003,px=1004,cl=1005,Bi=1006,jc=1007,ds=1008,mr=1009,F0=1010,k0=1011,Fo=1012,Ad=1013,Ts=1014,lr=1015,Yo=1016,Cd=1017,Rd=1018,Aa=1020,z0=35902,B0=1021,H0=1022,Ri=1023,V0=1024,G0=1025,ma=1026,Ca=1027,W0=1028,Pd=1029,X0=1030,Ld=1031,Dd=1033,Xl=33776,Yl=33777,ql=33778,$l=33779,vh=35840,xh=35841,yh=35842,Mh=35843,Sh=36196,bh=37492,wh=37496,Eh=37808,Th=37809,Ah=37810,Ch=37811,Rh=37812,Ph=37813,Lh=37814,Dh=37815,Ih=37816,Uh=37817,Nh=37818,Oh=37819,Fh=37820,kh=37821,Zl=36492,zh=36494,Bh=36495,Y0=36283,Hh=36284,Vh=36285,Gh=36286,mx=3200,gx=3201,q0=0,_x=1,Cr="",Gn="srgb",Ia="srgb-linear",bc="linear",wt="srgb",ks=7680,Gf=519,vx=512,xx=513,yx=514,$0=515,Mx=516,Sx=517,bx=518,wx=519,Wf=35044,Xf="300 es",cr=2e3,hc=2001;class Ua{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const xn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Yf=1234567;const Mo=Math.PI/180,ko=180/Math.PI;function Is(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(xn[i&255]+xn[i>>8&255]+xn[i>>16&255]+xn[i>>24&255]+"-"+xn[e&255]+xn[e>>8&255]+"-"+xn[e>>16&15|64]+xn[e>>24&255]+"-"+xn[t&63|128]+xn[t>>8&255]+"-"+xn[t>>16&255]+xn[t>>24&255]+xn[n&255]+xn[n>>8&255]+xn[n>>16&255]+xn[n>>24&255]).toLowerCase()}function an(i,e,t){return Math.max(e,Math.min(t,i))}function Id(i,e){return(i%e+e)%e}function Ex(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function Tx(i,e,t){return i!==e?(t-i)/(e-i):0}function So(i,e,t){return(1-t)*i+t*e}function Ax(i,e,t,n){return So(i,e,1-Math.exp(-t*n))}function Cx(i,e=1){return e-Math.abs(Id(i,e*2)-e)}function Rx(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Px(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Lx(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Dx(i,e){return i+Math.random()*(e-i)}function Ix(i){return i*(.5-Math.random())}function Ux(i){i!==void 0&&(Yf=i);let e=Yf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Nx(i){return i*Mo}function Ox(i){return i*ko}function Fx(i){return(i&i-1)===0&&i!==0}function kx(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function zx(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Bx(i,e,t,n,r){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),u=a((e+n)/2),h=s((e-n)/2),f=a((e-n)/2),d=s((n-e)/2),g=a((n-e)/2);switch(r){case"XYX":i.set(o*u,l*h,l*f,o*c);break;case"YZY":i.set(l*f,o*u,l*h,o*c);break;case"ZXZ":i.set(l*h,l*f,o*u,o*c);break;case"XZX":i.set(o*u,l*g,l*d,o*c);break;case"YXY":i.set(l*d,o*u,l*g,o*c);break;case"ZYZ":i.set(l*g,l*d,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function na(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Pn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Wh={DEG2RAD:Mo,RAD2DEG:ko,generateUUID:Is,clamp:an,euclideanModulo:Id,mapLinear:Ex,inverseLerp:Tx,lerp:So,damp:Ax,pingpong:Cx,smoothstep:Rx,smootherstep:Px,randInt:Lx,randFloat:Dx,randFloatSpread:Ix,seededRandom:Ux,degToRad:Nx,radToDeg:Ox,isPowerOfTwo:Fx,ceilPowerOfTwo:kx,floorPowerOfTwo:zx,setQuaternionFromProperEuler:Bx,normalize:Pn,denormalize:na};class me{constructor(e=0,t=0){me.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(an(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class at{constructor(e,t,n,r,s,a,o,l,c){at.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c)}set(e,t,n,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],g=n[8],_=r[0],m=r[3],p=r[6],y=r[1],x=r[4],v=r[7],A=r[2],b=r[5],w=r[8];return s[0]=a*_+o*y+l*A,s[3]=a*m+o*x+l*b,s[6]=a*p+o*v+l*w,s[1]=c*_+u*y+h*A,s[4]=c*m+u*x+h*b,s[7]=c*p+u*v+h*w,s[2]=f*_+d*y+g*A,s[5]=f*m+d*x+g*b,s[8]=f*p+d*v+g*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,f=o*l-u*s,d=c*s-a*l,g=t*h+n*f+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(r*c-u*n)*_,e[2]=(o*n-r*a)*_,e[3]=f*_,e[4]=(u*t-r*l)*_,e[5]=(r*s-o*t)*_,e[6]=d*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Qc.makeScale(e,t)),this}rotate(e){return this.premultiply(Qc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Qc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Qc=new at;function Z0(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function dc(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Hx(){const i=dc("canvas");return i.style.display="block",i}const qf={};function ao(i){i in qf||(qf[i]=!0,console.warn(i))}function Vx(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function Gx(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Wx(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const mt={enabled:!0,workingColorSpace:Ia,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===wt&&(i.r=dr(i.r),i.g=dr(i.g),i.b=dr(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===wt&&(i.r=ga(i.r),i.g=ga(i.g),i.b=ga(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Cr?bc:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function dr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ga(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const $f=[.64,.33,.3,.6,.15,.06],Zf=[.2126,.7152,.0722],Kf=[.3127,.329],Jf=new at().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),jf=new at().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);mt.define({[Ia]:{primaries:$f,whitePoint:Kf,transfer:bc,toXYZ:Jf,fromXYZ:jf,luminanceCoefficients:Zf,workingColorSpaceConfig:{unpackColorSpace:Gn},outputColorSpaceConfig:{drawingBufferColorSpace:Gn}},[Gn]:{primaries:$f,whitePoint:Kf,transfer:wt,toXYZ:Jf,fromXYZ:jf,luminanceCoefficients:Zf,outputColorSpaceConfig:{drawingBufferColorSpace:Gn}}});let zs;class Xx{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{zs===void 0&&(zs=dc("canvas")),zs.width=e.width,zs.height=e.height;const n=zs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=zs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=dc("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=dr(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(dr(t[n]/255)*255):t[n]=dr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Yx=0;class K0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Yx++}),this.uuid=Is(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(eu(r[a].image)):s.push(eu(r[a]))}else s=eu(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function eu(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Xx.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let qx=0;class Bn extends Ua{constructor(e=Bn.DEFAULT_IMAGE,t=Bn.DEFAULT_MAPPING,n=hs,r=hs,s=Bi,a=ds,o=Ri,l=mr,c=Bn.DEFAULT_ANISOTROPY,u=Cr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qx++}),this.uuid=Is(),this.name="",this.source=new K0(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new me(0,0),this.repeat=new me(1,1),this.center=new me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new at,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==O0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case uc:e.x=e.x-Math.floor(e.x);break;case hs:e.x=e.x<0?0:1;break;case _h:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case uc:e.y=e.y-Math.floor(e.y);break;case hs:e.y=e.y<0?0:1;break;case _h:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Bn.DEFAULT_IMAGE=null;Bn.DEFAULT_MAPPING=O0;Bn.DEFAULT_ANISOTROPY=1;class Tt{constructor(e=0,t=0,n=0,r=1){Tt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,v=(d+1)/2,A=(p+1)/2,b=(u+f)/4,w=(h+_)/4,C=(g+m)/4;return x>v&&x>A?x<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(x),r=b/n,s=w/n):v>A?v<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),n=b/r,s=C/r):A<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),n=w/s,r=C/s),this.set(n,r,s,t),this}let y=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(h-_)/y,this.z=(f-u)/y,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $x extends Ua{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Tt(0,0,e,t),this.scissorTest=!1,this.viewport=new Tt(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Bn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new K0(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class As extends $x{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class J0 extends Bn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Li,this.minFilter=Li,this.wrapR=hs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Zx extends Bn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Li,this.minFilter=Li,this.wrapR=hs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qo{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let l=n[r+0],c=n[r+1],u=n[r+2],h=n[r+3];const f=s[a+0],d=s[a+1],g=s[a+2],_=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==f||c!==d||u!==g){let m=1-o;const p=l*f+c*d+u*g+h*_,y=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const A=Math.sqrt(x),b=Math.atan2(A,p*y);m=Math.sin(m*b)/A,o=Math.sin(o*b)/A}const v=o*y;if(l=l*m+f*v,c=c*m+d*v,u=u*m+g*v,h=h*m+_*v,m===1-o){const A=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=A,c*=A,u*=A,h*=A}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],l=n[r+1],c=n[r+2],u=n[r+3],h=s[a],f=s[a+1],d=s[a+2],g=s[a+3];return e[t]=o*g+u*h+l*d-c*f,e[t+1]=l*g+u*f+c*h-o*d,e[t+2]=c*g+u*d+o*f-l*h,e[t+3]=u*g-o*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(r/2),h=o(s/2),f=l(n/2),d=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+o+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(a-r)*d}else if(n>o&&n>h){const d=2*Math.sqrt(1+n-o-h);this._w=(u-l)/d,this._x=.25*d,this._y=(r+a)/d,this._z=(s+c)/d}else if(o>h){const d=2*Math.sqrt(1+o-n-h);this._w=(s-c)/d,this._x=(r+a)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-o);this._w=(a-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(an(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-r*o,this._w=a*u-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-t;return this._w=d*a+t*this._w,this._x=d*n+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=a*h+this._w*f,this._x=n*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,n=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Qf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Qf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*n),u=2*(o*t-s*r),h=2*(s*n-a*t);return this.x=t+l*c+a*h-o*u,this.y=n+l*u+o*c-s*h,this.z=r+l*h+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return tu.copy(this).projectOnVector(e),this.sub(tu)}reflect(e){return this.sub(tu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(an(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const tu=new I,Qf=new qo;class gr{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Si.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Si.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Si.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Si):Si.fromBufferAttribute(s,a),Si.applyMatrix4(e.matrixWorld),this.expandByPoint(Si);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ul.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ul.copy(n.boundingBox)),ul.applyMatrix4(e.matrixWorld),this.union(ul)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Si),Si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(qa),hl.subVectors(this.max,qa),Bs.subVectors(e.a,qa),Hs.subVectors(e.b,qa),Vs.subVectors(e.c,qa),Mr.subVectors(Hs,Bs),Sr.subVectors(Vs,Hs),Zr.subVectors(Bs,Vs);let t=[0,-Mr.z,Mr.y,0,-Sr.z,Sr.y,0,-Zr.z,Zr.y,Mr.z,0,-Mr.x,Sr.z,0,-Sr.x,Zr.z,0,-Zr.x,-Mr.y,Mr.x,0,-Sr.y,Sr.x,0,-Zr.y,Zr.x,0];return!nu(t,Bs,Hs,Vs,hl)||(t=[1,0,0,0,1,0,0,0,1],!nu(t,Bs,Hs,Vs,hl))?!1:(dl.crossVectors(Mr,Sr),t=[dl.x,dl.y,dl.z],nu(t,Bs,Hs,Vs,hl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ji[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ji[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ji[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ji[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ji[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ji[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ji[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ji[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ji),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ji=[new I,new I,new I,new I,new I,new I,new I,new I],Si=new I,ul=new gr,Bs=new I,Hs=new I,Vs=new I,Mr=new I,Sr=new I,Zr=new I,qa=new I,hl=new I,dl=new I,Kr=new I;function nu(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Kr.fromArray(i,s);const o=r.x*Math.abs(Kr.x)+r.y*Math.abs(Kr.y)+r.z*Math.abs(Kr.z),l=e.dot(Kr),c=t.dot(Kr),u=n.dot(Kr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Kx=new gr,$a=new I,iu=new I;class wc{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Kx.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;$a.subVectors(e,this.center);const t=$a.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector($a,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(iu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint($a.copy(e.center).add(iu)),this.expandByPoint($a.copy(e.center).sub(iu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ji=new I,ru=new I,fl=new I,br=new I,su=new I,pl=new I,au=new I;class j0{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ji)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ji.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ji.copy(this.origin).addScaledVector(this.direction,t),ji.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){ru.copy(e).add(t).multiplyScalar(.5),fl.copy(t).sub(e).normalize(),br.copy(this.origin).sub(ru);const s=e.distanceTo(t)*.5,a=-this.direction.dot(fl),o=br.dot(this.direction),l=-br.dot(fl),c=br.lengthSq(),u=Math.abs(1-a*a);let h,f,d,g;if(u>0)if(h=a*l-o,f=a*o-l,g=s*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,d=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=s,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-a*s+o)),f=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(h=Math.max(0,-(a*s+o)),f=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c);else f=a>0?-s:s,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(ru).addScaledVector(fl,f),d}intersectSphere(e,t){ji.subVectors(e.center,this.origin);const n=ji.dot(this.direction),r=ji.dot(ji)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,ji)!==null}intersectTriangle(e,t,n,r,s){su.subVectors(t,e),pl.subVectors(n,e),au.crossVectors(su,pl);let a=this.direction.dot(au),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;br.subVectors(this.origin,e);const l=o*this.direction.dot(pl.crossVectors(br,pl));if(l<0)return null;const c=o*this.direction.dot(su.cross(br));if(c<0||l+c>a)return null;const u=-o*br.dot(au);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class kt{constructor(e,t,n,r,s,a,o,l,c,u,h,f,d,g,_,m){kt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c,u,h,f,d,g,_,m)}set(e,t,n,r,s,a,o,l,c,u,h,f,d,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new kt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Gs.setFromMatrixColumn(e,0).length(),s=1/Gs.setFromMatrixColumn(e,1).length(),a=1/Gs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=a*u,d=a*h,g=o*u,_=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+g*c,t[5]=f-_*c,t[9]=-o*l,t[2]=_-f*c,t[6]=g+d*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,g=c*u,_=c*h;t[0]=f+_*o,t[4]=g*o-d,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=d*o-g,t[6]=_+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,g=c*u,_=c*h;t[0]=f-_*o,t[4]=-a*h,t[8]=g+d*o,t[1]=d+g*o,t[5]=a*u,t[9]=_-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*u,d=a*h,g=o*u,_=o*h;t[0]=l*u,t[4]=g*c-d,t[8]=f*c+_,t[1]=l*h,t[5]=_*c+f,t[9]=d*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,d=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=_-f*h,t[8]=g*h+d,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=d*h+g,t[10]=f-_*h}else if(e.order==="XZY"){const f=a*l,d=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+_,t[5]=a*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=o*u,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Jx,e,jx)}lookAt(e,t,n){const r=this.elements;return Jn.subVectors(e,t),Jn.lengthSq()===0&&(Jn.z=1),Jn.normalize(),wr.crossVectors(n,Jn),wr.lengthSq()===0&&(Math.abs(n.z)===1?Jn.x+=1e-4:Jn.z+=1e-4,Jn.normalize(),wr.crossVectors(n,Jn)),wr.normalize(),ml.crossVectors(Jn,wr),r[0]=wr.x,r[4]=ml.x,r[8]=Jn.x,r[1]=wr.y,r[5]=ml.y,r[9]=Jn.y,r[2]=wr.z,r[6]=ml.z,r[10]=Jn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],y=n[3],x=n[7],v=n[11],A=n[15],b=r[0],w=r[4],C=r[8],S=r[12],M=r[1],P=r[5],U=r[9],k=r[13],V=r[2],q=r[6],B=r[10],Y=r[14],H=r[3],re=r[7],D=r[11],ue=r[15];return s[0]=a*b+o*M+l*V+c*H,s[4]=a*w+o*P+l*q+c*re,s[8]=a*C+o*U+l*B+c*D,s[12]=a*S+o*k+l*Y+c*ue,s[1]=u*b+h*M+f*V+d*H,s[5]=u*w+h*P+f*q+d*re,s[9]=u*C+h*U+f*B+d*D,s[13]=u*S+h*k+f*Y+d*ue,s[2]=g*b+_*M+m*V+p*H,s[6]=g*w+_*P+m*q+p*re,s[10]=g*C+_*U+m*B+p*D,s[14]=g*S+_*k+m*Y+p*ue,s[3]=y*b+x*M+v*V+A*H,s[7]=y*w+x*P+v*q+A*re,s[11]=y*C+x*U+v*B+A*D,s[15]=y*S+x*k+v*Y+A*ue,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+s*l*h-r*c*h-s*o*f+n*c*f+r*o*d-n*l*d)+_*(+t*l*d-t*c*f+s*a*f-r*a*d+r*c*u-s*l*u)+m*(+t*c*h-t*o*d-s*a*h+n*a*d+s*o*u-n*c*u)+p*(-r*o*u-t*l*h+t*o*f+r*a*h-n*a*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],g=e[12],_=e[13],m=e[14],p=e[15],y=h*m*c-_*f*c+_*l*d-o*m*d-h*l*p+o*f*p,x=g*f*c-u*m*c-g*l*d+a*m*d+u*l*p-a*f*p,v=u*_*c-g*h*c+g*o*d-a*_*d-u*o*p+a*h*p,A=g*h*l-u*_*l-g*o*f+a*_*f+u*o*m-a*h*m,b=t*y+n*x+r*v+s*A;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/b;return e[0]=y*w,e[1]=(_*f*s-h*m*s-_*r*d+n*m*d+h*r*p-n*f*p)*w,e[2]=(o*m*s-_*l*s+_*r*c-n*m*c-o*r*p+n*l*p)*w,e[3]=(h*l*s-o*f*s-h*r*c+n*f*c+o*r*d-n*l*d)*w,e[4]=x*w,e[5]=(u*m*s-g*f*s+g*r*d-t*m*d-u*r*p+t*f*p)*w,e[6]=(g*l*s-a*m*s-g*r*c+t*m*c+a*r*p-t*l*p)*w,e[7]=(a*f*s-u*l*s+u*r*c-t*f*c-a*r*d+t*l*d)*w,e[8]=v*w,e[9]=(g*h*s-u*_*s-g*n*d+t*_*d+u*n*p-t*h*p)*w,e[10]=(a*_*s-g*o*s+g*n*c-t*_*c-a*n*p+t*o*p)*w,e[11]=(u*o*s-a*h*s-u*n*c+t*h*c+a*n*d-t*o*d)*w,e[12]=A*w,e[13]=(u*_*r-g*h*r+g*n*f-t*_*f-u*n*m+t*h*m)*w,e[14]=(g*o*r-a*_*r-g*n*l+t*_*l+a*n*m-t*o*m)*w,e[15]=(a*h*r-u*o*r+u*n*l-t*h*l-a*n*f+t*o*f)*w,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+n,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,h=o+o,f=s*c,d=s*u,g=s*h,_=a*u,m=a*h,p=o*h,y=l*c,x=l*u,v=l*h,A=n.x,b=n.y,w=n.z;return r[0]=(1-(_+p))*A,r[1]=(d+v)*A,r[2]=(g-x)*A,r[3]=0,r[4]=(d-v)*b,r[5]=(1-(f+p))*b,r[6]=(m+y)*b,r[7]=0,r[8]=(g+x)*w,r[9]=(m-y)*w,r[10]=(1-(f+_))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=Gs.set(r[0],r[1],r[2]).length();const a=Gs.set(r[4],r[5],r[6]).length(),o=Gs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],bi.copy(this);const c=1/s,u=1/a,h=1/o;return bi.elements[0]*=c,bi.elements[1]*=c,bi.elements[2]*=c,bi.elements[4]*=u,bi.elements[5]*=u,bi.elements[6]*=u,bi.elements[8]*=h,bi.elements[9]*=h,bi.elements[10]*=h,t.setFromRotationMatrix(bi),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a,o=cr){const l=this.elements,c=2*s/(t-e),u=2*s/(n-r),h=(t+e)/(t-e),f=(n+r)/(n-r);let d,g;if(o===cr)d=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===hc)d=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=cr){const l=this.elements,c=1/(t-e),u=1/(n-r),h=1/(a-s),f=(t+e)*c,d=(n+r)*u;let g,_;if(o===cr)g=(a+s)*h,_=-2*h;else if(o===hc)g=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Gs=new I,bi=new kt,Jx=new I(0,0,0),jx=new I(1,1,1),wr=new I,ml=new I,Jn=new I,ep=new kt,tp=new qo;class Xi{constructor(e=0,t=0,n=0,r=Xi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(an(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-an(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(an(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-an(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(an(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-an(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ep.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ep,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return tp.setFromEuler(this),this.setFromQuaternion(tp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xi.DEFAULT_ORDER="XYZ";class Q0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Qx=0;const np=new I,Ws=new qo,Qi=new kt,gl=new I,Za=new I,ey=new I,ty=new qo,ip=new I(1,0,0),rp=new I(0,1,0),sp=new I(0,0,1),ap={type:"added"},ny={type:"removed"},Xs={type:"childadded",child:null},ou={type:"childremoved",child:null};class gn extends Ua{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Qx++}),this.uuid=Is(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gn.DEFAULT_UP.clone();const e=new I,t=new Xi,n=new qo,r=new I(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new kt},normalMatrix:{value:new at}}),this.matrix=new kt,this.matrixWorld=new kt,this.matrixAutoUpdate=gn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Q0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ws.setFromAxisAngle(e,t),this.quaternion.multiply(Ws),this}rotateOnWorldAxis(e,t){return Ws.setFromAxisAngle(e,t),this.quaternion.premultiply(Ws),this}rotateX(e){return this.rotateOnAxis(ip,e)}rotateY(e){return this.rotateOnAxis(rp,e)}rotateZ(e){return this.rotateOnAxis(sp,e)}translateOnAxis(e,t){return np.copy(e).applyQuaternion(this.quaternion),this.position.add(np.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ip,e)}translateY(e){return this.translateOnAxis(rp,e)}translateZ(e){return this.translateOnAxis(sp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Qi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?gl.copy(e):gl.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Za.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qi.lookAt(Za,gl,this.up):Qi.lookAt(gl,Za,this.up),this.quaternion.setFromRotationMatrix(Qi),r&&(Qi.extractRotation(r.matrixWorld),Ws.setFromRotationMatrix(Qi),this.quaternion.premultiply(Ws.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ap),Xs.child=e,this.dispatchEvent(Xs),Xs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ny),ou.child=e,this.dispatchEvent(ou),ou.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Qi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Qi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Qi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ap),Xs.child=e,this.dispatchEvent(Xs),Xs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Za,e,ey),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Za,ty,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),d=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=r,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}gn.DEFAULT_UP=new I(0,1,0);gn.DEFAULT_MATRIX_AUTO_UPDATE=!0;gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const wi=new I,er=new I,lu=new I,tr=new I,Ys=new I,qs=new I,op=new I,cu=new I,uu=new I,hu=new I,du=new Tt,fu=new Tt,pu=new Tt;class Ci{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),wi.subVectors(e,t),r.cross(wi);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){wi.subVectors(r,t),er.subVectors(n,t),lu.subVectors(e,t);const a=wi.dot(wi),o=wi.dot(er),l=wi.dot(lu),c=er.dot(er),u=er.dot(lu),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const f=1/h,d=(c*l-o*u)*f,g=(a*u-o*l)*f;return s.set(1-d-g,g,d)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,tr)===null?!1:tr.x>=0&&tr.y>=0&&tr.x+tr.y<=1}static getInterpolation(e,t,n,r,s,a,o,l){return this.getBarycoord(e,t,n,r,tr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,tr.x),l.addScaledVector(a,tr.y),l.addScaledVector(o,tr.z),l)}static getInterpolatedAttribute(e,t,n,r,s,a){return du.setScalar(0),fu.setScalar(0),pu.setScalar(0),du.fromBufferAttribute(e,t),fu.fromBufferAttribute(e,n),pu.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(du,s.x),a.addScaledVector(fu,s.y),a.addScaledVector(pu,s.z),a}static isFrontFacing(e,t,n,r){return wi.subVectors(n,t),er.subVectors(e,t),wi.cross(er).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wi.subVectors(this.c,this.b),er.subVectors(this.a,this.b),wi.cross(er).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ci.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ci.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return Ci.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Ci.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ci.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;Ys.subVectors(r,n),qs.subVectors(s,n),cu.subVectors(e,n);const l=Ys.dot(cu),c=qs.dot(cu);if(l<=0&&c<=0)return t.copy(n);uu.subVectors(e,r);const u=Ys.dot(uu),h=qs.dot(uu);if(u>=0&&h<=u)return t.copy(r);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Ys,a);hu.subVectors(e,s);const d=Ys.dot(hu),g=qs.dot(hu);if(g>=0&&d<=g)return t.copy(s);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(qs,o);const m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return op.subVectors(s,r),o=(h-u)/(h-u+(d-g)),t.copy(r).addScaledVector(op,o);const p=1/(m+_+f);return a=_*p,o=f*p,t.copy(n).addScaledVector(Ys,a).addScaledVector(qs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const eg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Er={h:0,s:0,l:0},_l={h:0,s:0,l:0};function mu(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class tt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Gn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,mt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=mt.workingColorSpace){return this.r=e,this.g=t,this.b=n,mt.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=mt.workingColorSpace){if(e=Id(e,1),t=an(t,0,1),n=an(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=mu(a,s,e+1/3),this.g=mu(a,s,e),this.b=mu(a,s,e-1/3)}return mt.toWorkingColorSpace(this,r),this}setStyle(e,t=Gn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Gn){const n=eg[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=dr(e.r),this.g=dr(e.g),this.b=dr(e.b),this}copyLinearToSRGB(e){return this.r=ga(e.r),this.g=ga(e.g),this.b=ga(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gn){return mt.fromWorkingColorSpace(yn.copy(this),e),Math.round(an(yn.r*255,0,255))*65536+Math.round(an(yn.g*255,0,255))*256+Math.round(an(yn.b*255,0,255))}getHexString(e=Gn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=mt.workingColorSpace){mt.fromWorkingColorSpace(yn.copy(this),t);const n=yn.r,r=yn.g,s=yn.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-n)/h+2;break;case s:l=(n-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=mt.workingColorSpace){return mt.fromWorkingColorSpace(yn.copy(this),t),e.r=yn.r,e.g=yn.g,e.b=yn.b,e}getStyle(e=Gn){mt.fromWorkingColorSpace(yn.copy(this),e);const t=yn.r,n=yn.g,r=yn.b;return e!==Gn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Er),this.setHSL(Er.h+e,Er.s+t,Er.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Er),e.getHSL(_l);const n=So(Er.h,_l.h,t),r=So(Er.s,_l.s,t),s=So(Er.l,_l.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const yn=new tt;tt.NAMES=eg;let iy=0;class Na extends Ua{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:iy++}),this.uuid=Is(),this.name="",this.blending=pa,this.side=Wr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ah,this.blendDst=oh,this.blendEquation=os,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=wa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ks,this.stencilZFail=ks,this.stencilZPass=ks,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==pa&&(n.blending=this.blending),this.side!==Wr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ah&&(n.blendSrc=this.blendSrc),this.blendDst!==oh&&(n.blendDst=this.blendDst),this.blendEquation!==os&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==wa&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Gf&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ks&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ks&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ks&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Gi extends Na{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xi,this.combine=U0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Qt=new I,vl=new me;class Hn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Wf,this.updateRanges=[],this.gpuType=lr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)vl.fromBufferAttribute(this,t),vl.applyMatrix3(e),this.setXY(t,vl.x,vl.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix3(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix4(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyNormalMatrix(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.transformDirection(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=na(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Pn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=na(t,this.array)),t}setX(e,t){return this.normalized&&(t=Pn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=na(t,this.array)),t}setY(e,t){return this.normalized&&(t=Pn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=na(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Pn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=na(t,this.array)),t}setW(e,t){return this.normalized&&(t=Pn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Pn(t,this.array),n=Pn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Pn(t,this.array),n=Pn(n,this.array),r=Pn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Pn(t,this.array),n=Pn(n,this.array),r=Pn(r,this.array),s=Pn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Wf&&(e.usage=this.usage),e}}class tg extends Hn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class ng extends Hn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class gt extends Hn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let ry=0;const ci=new kt,gu=new gn,$s=new I,jn=new gr,Ka=new gr,un=new I;class cn extends Ua{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ry++}),this.uuid=Is(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Z0(e)?ng:tg)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new at().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ci.makeRotationFromQuaternion(e),this.applyMatrix4(ci),this}rotateX(e){return ci.makeRotationX(e),this.applyMatrix4(ci),this}rotateY(e){return ci.makeRotationY(e),this.applyMatrix4(ci),this}rotateZ(e){return ci.makeRotationZ(e),this.applyMatrix4(ci),this}translate(e,t,n){return ci.makeTranslation(e,t,n),this.applyMatrix4(ci),this}scale(e,t,n){return ci.makeScale(e,t,n),this.applyMatrix4(ci),this}lookAt(e){return gu.lookAt(e),gu.updateMatrix(),this.applyMatrix4(gu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($s).negate(),this.translate($s.x,$s.y,$s.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new gt(n,3))}else{for(let n=0,r=t.count;n<r;n++){const s=e[n];t.setXYZ(n,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];jn.setFromBufferAttribute(s),this.morphTargetsRelative?(un.addVectors(this.boundingBox.min,jn.min),this.boundingBox.expandByPoint(un),un.addVectors(this.boundingBox.max,jn.max),this.boundingBox.expandByPoint(un)):(this.boundingBox.expandByPoint(jn.min),this.boundingBox.expandByPoint(jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if(jn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Ka.setFromBufferAttribute(o),this.morphTargetsRelative?(un.addVectors(jn.min,Ka.min),jn.expandByPoint(un),un.addVectors(jn.max,Ka.max),jn.expandByPoint(un)):(jn.expandByPoint(Ka.min),jn.expandByPoint(Ka.max))}jn.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)un.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(un));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)un.fromBufferAttribute(o,c),l&&($s.fromBufferAttribute(e,c),un.add($s)),r=Math.max(r,n.distanceToSquared(un))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Hn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let C=0;C<n.count;C++)o[C]=new I,l[C]=new I;const c=new I,u=new I,h=new I,f=new me,d=new me,g=new me,_=new I,m=new I;function p(C,S,M){c.fromBufferAttribute(n,C),u.fromBufferAttribute(n,S),h.fromBufferAttribute(n,M),f.fromBufferAttribute(s,C),d.fromBufferAttribute(s,S),g.fromBufferAttribute(s,M),u.sub(c),h.sub(c),d.sub(f),g.sub(f);const P=1/(d.x*g.y-g.x*d.y);isFinite(P)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(P),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(P),o[C].add(_),o[S].add(_),o[M].add(_),l[C].add(m),l[S].add(m),l[M].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let C=0,S=y.length;C<S;++C){const M=y[C],P=M.start,U=M.count;for(let k=P,V=P+U;k<V;k+=3)p(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const x=new I,v=new I,A=new I,b=new I;function w(C){A.fromBufferAttribute(r,C),b.copy(A);const S=o[C];x.copy(S),x.sub(A.multiplyScalar(A.dot(S))).normalize(),v.crossVectors(b,S);const P=v.dot(l[C])<0?-1:1;a.setXYZW(C,x.x,x.y,x.z,P)}for(let C=0,S=y.length;C<S;++C){const M=y[C],P=M.start,U=M.count;for(let k=P,V=P+U;k<V;k+=3)w(e.getX(k+0)),w(e.getX(k+1)),w(e.getX(k+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Hn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const r=new I,s=new I,a=new I,o=new I,l=new I,c=new I,u=new I,h=new I;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)un.fromBufferAttribute(e,t),un.normalize(),e.setXYZ(t,un.x,un.y,un.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?d=l[_]*o.data.stride+o.offset:d=l[_]*u;for(let p=0;p<u;p++)f[g++]=c[d++]}return new Hn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new cn,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const lp=new kt,Jr=new j0,xl=new wc,cp=new I,yl=new I,Ml=new I,Sl=new I,_u=new I,bl=new I,up=new I,wl=new I;class Lt extends gn{constructor(e=new cn,t=new Gi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){bl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],h=s[l];u!==0&&(_u.fromBufferAttribute(h,e),a?bl.addScaledVector(_u,u):bl.addScaledVector(_u.sub(t),u))}t.add(bl)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),xl.copy(n.boundingSphere),xl.applyMatrix4(s),Jr.copy(e.ray).recast(e.near),!(xl.containsPoint(Jr.origin)===!1&&(Jr.intersectSphere(xl,cp)===null||Jr.origin.distanceToSquared(cp)>(e.far-e.near)**2))&&(lp.copy(s).invert(),Jr.copy(e.ray).applyMatrix4(lp),!(n.boundingBox!==null&&Jr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Jr)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=a[m.materialIndex],y=Math.max(m.start,d.start),x=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let v=y,A=x;v<A;v+=3){const b=o.getX(v),w=o.getX(v+1),C=o.getX(v+2);r=El(this,p,e,n,c,u,h,b,w,C),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const y=o.getX(m),x=o.getX(m+1),v=o.getX(m+2);r=El(this,a,e,n,c,u,h,y,x,v),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=a[m.materialIndex],y=Math.max(m.start,d.start),x=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let v=y,A=x;v<A;v+=3){const b=v,w=v+1,C=v+2;r=El(this,p,e,n,c,u,h,b,w,C),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const y=m,x=m+1,v=m+2;r=El(this,a,e,n,c,u,h,y,x,v),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function sy(i,e,t,n,r,s,a,o){let l;if(e.side===zn?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,e.side===Wr,o),l===null)return null;wl.copy(o),wl.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(wl);return c<t.near||c>t.far?null:{distance:c,point:wl.clone(),object:i}}function El(i,e,t,n,r,s,a,o,l,c){i.getVertexPosition(o,yl),i.getVertexPosition(l,Ml),i.getVertexPosition(c,Sl);const u=sy(i,e,t,n,yl,Ml,Sl,up);if(u){const h=new I;Ci.getBarycoord(up,yl,Ml,Sl,h),r&&(u.uv=Ci.getInterpolatedAttribute(r,o,l,c,h,new me)),s&&(u.uv1=Ci.getInterpolatedAttribute(s,o,l,c,h,new me)),a&&(u.normal=Ci.getInterpolatedAttribute(a,o,l,c,h,new I),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new I,materialIndex:0};Ci.getNormal(yl,Ml,Sl,f.normal),u.face=f,u.barycoord=h}return u}class _r extends cn{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,r,a,2),g("x","z","y",1,-1,e,n,-t,r,a,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new gt(c,3)),this.setAttribute("normal",new gt(u,3)),this.setAttribute("uv",new gt(h,2));function g(_,m,p,y,x,v,A,b,w,C,S){const M=v/w,P=A/C,U=v/2,k=A/2,V=b/2,q=w+1,B=C+1;let Y=0,H=0;const re=new I;for(let D=0;D<B;D++){const ue=D*P-k;for(let Fe=0;Fe<q;Fe++){const it=Fe*M-U;re[_]=it*y,re[m]=ue*x,re[p]=V,c.push(re.x,re.y,re.z),re[_]=0,re[m]=0,re[p]=b>0?1:-1,u.push(re.x,re.y,re.z),h.push(Fe/w),h.push(1-D/C),Y+=1}}for(let D=0;D<C;D++)for(let ue=0;ue<w;ue++){const Fe=f+ue+q*D,it=f+ue+q*(D+1),Z=f+(ue+1)+q*(D+1),ae=f+(ue+1)+q*D;l.push(Fe,it,ae),l.push(it,Z,ae),H+=6}o.addGroup(d,H,S),d+=H,f+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ra(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Ln(i){const e={};for(let t=0;t<i.length;t++){const n=Ra(i[t]);for(const r in n)e[r]=n[r]}return e}function ay(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function ig(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:mt.workingColorSpace}const oy={clone:Ra,merge:Ln};var ly=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Yi extends Na{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ly,this.fragmentShader=cy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ra(e.uniforms),this.uniformsGroups=ay(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class rg extends gn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new kt,this.projectionMatrix=new kt,this.projectionMatrixInverse=new kt,this.coordinateSystem=cr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Tr=new I,hp=new me,dp=new me;class Nn extends rg{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ko*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Mo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ko*2*Math.atan(Math.tan(Mo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Tr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Tr.x,Tr.y).multiplyScalar(-e/Tr.z),Tr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Tr.x,Tr.y).multiplyScalar(-e/Tr.z)}getViewSize(e,t){return this.getViewBounds(e,hp,dp),t.subVectors(dp,hp)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Mo*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Zs=-90,Ks=1;class uy extends gn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Nn(Zs,Ks,e,t);r.layers=this.layers,this.add(r);const s=new Nn(Zs,Ks,e,t);s.layers=this.layers,this.add(s);const a=new Nn(Zs,Ks,e,t);a.layers=this.layers,this.add(a);const o=new Nn(Zs,Ks,e,t);o.layers=this.layers,this.add(o);const l=new Nn(Zs,Ks,e,t);l.layers=this.layers,this.add(l);const c=new Nn(Zs,Ks,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===cr)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===hc)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class sg extends Bn{constructor(e,t,n,r,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Ea,super(e,t,n,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class hy extends As{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new sg(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Bi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new _r(5,5,5),s=new Yi({name:"CubemapFromEquirect",uniforms:Ra(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:zn,blending:zr});s.uniforms.tEquirect.value=t;const a=new Lt(r,s),o=t.minFilter;return t.minFilter===ds&&(t.minFilter=Bi),new uy(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}const vu=new I,dy=new I,fy=new at;class rs{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=vu.subVectors(n,t).cross(dy.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(vu),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||fy.getNormalMatrix(e),r=this.coplanarPoint(vu).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const jr=new wc,Tl=new I;class Ud{constructor(e=new rs,t=new rs,n=new rs,r=new rs,s=new rs,a=new rs){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=cr){const n=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],h=r[6],f=r[7],d=r[8],g=r[9],_=r[10],m=r[11],p=r[12],y=r[13],x=r[14],v=r[15];if(n[0].setComponents(l-s,f-c,m-d,v-p).normalize(),n[1].setComponents(l+s,f+c,m+d,v+p).normalize(),n[2].setComponents(l+a,f+u,m+g,v+y).normalize(),n[3].setComponents(l-a,f-u,m-g,v-y).normalize(),n[4].setComponents(l-o,f-h,m-_,v-x).normalize(),t===cr)n[5].setComponents(l+o,f+h,m+_,v+x).normalize();else if(t===hc)n[5].setComponents(o,h,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),jr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),jr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(jr)}intersectsSprite(e){return jr.center.set(0,0,0),jr.radius=.7071067811865476,jr.applyMatrix4(e.matrixWorld),this.intersectsSphere(jr)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Tl.x=r.normal.x>0?e.max.x:e.min.x,Tl.y=r.normal.y>0?e.max.y:e.min.y,Tl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Tl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ag(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function py(i){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,h=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){const u=l.array,h=l.updateRanges;if(i.bindBuffer(c,o),h.length===0)i.bufferSubData(c,0,u);else{h.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<h.length;d++){const g=h[f],_=h[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,h[f]=_)}h.length=f+1;for(let d=0,g=h.length;d<g;d++){const _=h[d];i.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}class Oa extends cn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(r),c=o+1,u=l+1,h=e/o,f=t/l,d=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const y=p*f-a;for(let x=0;x<c;x++){const v=x*h-s;g.push(v,-y,0),_.push(0,0,1),m.push(x/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<o;y++){const x=y+c*p,v=y+c*(p+1),A=y+1+c*(p+1),b=y+1+c*p;d.push(x,v,b),d.push(v,A,b)}this.setIndex(d),this.setAttribute("position",new gt(g,3)),this.setAttribute("normal",new gt(_,3)),this.setAttribute("uv",new gt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oa(e.width,e.height,e.widthSegments,e.heightSegments)}}var my=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gy=`#ifdef USE_ALPHAHASH
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
#endif`,_y=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,yy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,My=`#ifdef USE_AOMAP
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
#endif`,Sy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,by=`#ifdef USE_BATCHING
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
#endif`,wy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ey=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ty=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ay=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Cy=`#ifdef USE_IRIDESCENCE
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
#endif`,Ry=`#ifdef USE_BUMPMAP
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
#endif`,Py=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ly=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Dy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Iy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Uy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ny=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Oy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Fy=`#if defined( USE_COLOR_ALPHA )
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
#endif`,ky=`#define PI 3.141592653589793
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
} // validated`,zy=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,By=`vec3 transformedNormal = objectNormal;
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
#endif`,Hy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Gy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Wy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Xy="gl_FragColor = linearToOutputTexel( gl_FragColor );",Yy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qy=`#ifdef USE_ENVMAP
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
#endif`,$y=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Zy=`#ifdef USE_ENVMAP
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
#endif`,Ky=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Jy=`#ifdef USE_ENVMAP
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
#endif`,jy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,eM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,nM=`#ifdef USE_GRADIENTMAP
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
}`,iM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,aM=`uniform bool receiveShadow;
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
#endif`,oM=`#ifdef USE_ENVMAP
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
#endif`,lM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,uM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,dM=`PhysicalMaterial material;
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
#endif`,fM=`struct PhysicalMaterial {
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
}`,pM=`
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
#endif`,mM=`#if defined( RE_IndirectDiffuse )
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
#endif`,gM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_M=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,MM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,SM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,wM=`#if defined( USE_POINTS_UV )
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
#endif`,EM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,TM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,AM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,CM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,RM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,PM=`#ifdef USE_MORPHTARGETS
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
#endif`,LM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,DM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,IM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,UM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,NM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,OM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,FM=`#ifdef USE_NORMALMAP
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
#endif`,kM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,BM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,HM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,VM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,GM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,WM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,XM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,YM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$M=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ZM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,KM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,JM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,QM=`float getShadowMask() {
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
}`,e1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,t1=`#ifdef USE_SKINNING
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
#endif`,n1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,i1=`#ifdef USE_SKINNING
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
#endif`,r1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,s1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,a1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,o1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,l1=`#ifdef USE_TRANSMISSION
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
#endif`,c1=`#ifdef USE_TRANSMISSION
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
#endif`,u1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,h1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,d1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,f1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const p1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,m1=`uniform sampler2D t2D;
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
}`,g1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,v1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,x1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,y1=`#include <common>
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
}`,M1=`#if DEPTH_PACKING == 3200
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
}`,S1=`#define DISTANCE
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
}`,b1=`#define DISTANCE
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
}`,w1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,E1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,T1=`uniform float scale;
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
}`,A1=`uniform vec3 diffuse;
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
}`,C1=`#include <common>
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
}`,R1=`uniform vec3 diffuse;
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
}`,P1=`#define LAMBERT
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
}`,L1=`#define LAMBERT
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
}`,D1=`#define MATCAP
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
}`,I1=`#define MATCAP
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
}`,U1=`#define NORMAL
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
}`,N1=`#define NORMAL
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
}`,O1=`#define PHONG
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
}`,F1=`#define PHONG
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
}`,k1=`#define STANDARD
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
}`,z1=`#define STANDARD
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
}`,B1=`#define TOON
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
}`,H1=`#define TOON
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
}`,V1=`uniform float size;
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
}`,G1=`uniform vec3 diffuse;
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
}`,W1=`#include <common>
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
}`,X1=`uniform vec3 color;
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
}`,Y1=`uniform float rotation;
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
}`,q1=`uniform vec3 diffuse;
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
}`,ot={alphahash_fragment:my,alphahash_pars_fragment:gy,alphamap_fragment:_y,alphamap_pars_fragment:vy,alphatest_fragment:xy,alphatest_pars_fragment:yy,aomap_fragment:My,aomap_pars_fragment:Sy,batching_pars_vertex:by,batching_vertex:wy,begin_vertex:Ey,beginnormal_vertex:Ty,bsdfs:Ay,iridescence_fragment:Cy,bumpmap_pars_fragment:Ry,clipping_planes_fragment:Py,clipping_planes_pars_fragment:Ly,clipping_planes_pars_vertex:Dy,clipping_planes_vertex:Iy,color_fragment:Uy,color_pars_fragment:Ny,color_pars_vertex:Oy,color_vertex:Fy,common:ky,cube_uv_reflection_fragment:zy,defaultnormal_vertex:By,displacementmap_pars_vertex:Hy,displacementmap_vertex:Vy,emissivemap_fragment:Gy,emissivemap_pars_fragment:Wy,colorspace_fragment:Xy,colorspace_pars_fragment:Yy,envmap_fragment:qy,envmap_common_pars_fragment:$y,envmap_pars_fragment:Zy,envmap_pars_vertex:Ky,envmap_physical_pars_fragment:oM,envmap_vertex:Jy,fog_vertex:jy,fog_pars_vertex:Qy,fog_fragment:eM,fog_pars_fragment:tM,gradientmap_pars_fragment:nM,lightmap_pars_fragment:iM,lights_lambert_fragment:rM,lights_lambert_pars_fragment:sM,lights_pars_begin:aM,lights_toon_fragment:lM,lights_toon_pars_fragment:cM,lights_phong_fragment:uM,lights_phong_pars_fragment:hM,lights_physical_fragment:dM,lights_physical_pars_fragment:fM,lights_fragment_begin:pM,lights_fragment_maps:mM,lights_fragment_end:gM,logdepthbuf_fragment:_M,logdepthbuf_pars_fragment:vM,logdepthbuf_pars_vertex:xM,logdepthbuf_vertex:yM,map_fragment:MM,map_pars_fragment:SM,map_particle_fragment:bM,map_particle_pars_fragment:wM,metalnessmap_fragment:EM,metalnessmap_pars_fragment:TM,morphinstance_vertex:AM,morphcolor_vertex:CM,morphnormal_vertex:RM,morphtarget_pars_vertex:PM,morphtarget_vertex:LM,normal_fragment_begin:DM,normal_fragment_maps:IM,normal_pars_fragment:UM,normal_pars_vertex:NM,normal_vertex:OM,normalmap_pars_fragment:FM,clearcoat_normal_fragment_begin:kM,clearcoat_normal_fragment_maps:zM,clearcoat_pars_fragment:BM,iridescence_pars_fragment:HM,opaque_fragment:VM,packing:GM,premultiplied_alpha_fragment:WM,project_vertex:XM,dithering_fragment:YM,dithering_pars_fragment:qM,roughnessmap_fragment:$M,roughnessmap_pars_fragment:ZM,shadowmap_pars_fragment:KM,shadowmap_pars_vertex:JM,shadowmap_vertex:jM,shadowmask_pars_fragment:QM,skinbase_vertex:e1,skinning_pars_vertex:t1,skinning_vertex:n1,skinnormal_vertex:i1,specularmap_fragment:r1,specularmap_pars_fragment:s1,tonemapping_fragment:a1,tonemapping_pars_fragment:o1,transmission_fragment:l1,transmission_pars_fragment:c1,uv_pars_fragment:u1,uv_pars_vertex:h1,uv_vertex:d1,worldpos_vertex:f1,background_vert:p1,background_frag:m1,backgroundCube_vert:g1,backgroundCube_frag:_1,cube_vert:v1,cube_frag:x1,depth_vert:y1,depth_frag:M1,distanceRGBA_vert:S1,distanceRGBA_frag:b1,equirect_vert:w1,equirect_frag:E1,linedashed_vert:T1,linedashed_frag:A1,meshbasic_vert:C1,meshbasic_frag:R1,meshlambert_vert:P1,meshlambert_frag:L1,meshmatcap_vert:D1,meshmatcap_frag:I1,meshnormal_vert:U1,meshnormal_frag:N1,meshphong_vert:O1,meshphong_frag:F1,meshphysical_vert:k1,meshphysical_frag:z1,meshtoon_vert:B1,meshtoon_frag:H1,points_vert:V1,points_frag:G1,shadow_vert:W1,shadow_frag:X1,sprite_vert:Y1,sprite_frag:q1},Te={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new at}},envmap:{envMap:{value:null},envMapRotation:{value:new at},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new at}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new at}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new at},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new at},normalScale:{value:new me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new at},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new at}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new at}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new at}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0},uvTransform:{value:new at}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}}},Oi={basic:{uniforms:Ln([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:ot.meshbasic_vert,fragmentShader:ot.meshbasic_frag},lambert:{uniforms:Ln([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new tt(0)}}]),vertexShader:ot.meshlambert_vert,fragmentShader:ot.meshlambert_frag},phong:{uniforms:Ln([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30}}]),vertexShader:ot.meshphong_vert,fragmentShader:ot.meshphong_frag},standard:{uniforms:Ln([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag},toon:{uniforms:Ln([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new tt(0)}}]),vertexShader:ot.meshtoon_vert,fragmentShader:ot.meshtoon_frag},matcap:{uniforms:Ln([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:ot.meshmatcap_vert,fragmentShader:ot.meshmatcap_frag},points:{uniforms:Ln([Te.points,Te.fog]),vertexShader:ot.points_vert,fragmentShader:ot.points_frag},dashed:{uniforms:Ln([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ot.linedashed_vert,fragmentShader:ot.linedashed_frag},depth:{uniforms:Ln([Te.common,Te.displacementmap]),vertexShader:ot.depth_vert,fragmentShader:ot.depth_frag},normal:{uniforms:Ln([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:ot.meshnormal_vert,fragmentShader:ot.meshnormal_frag},sprite:{uniforms:Ln([Te.sprite,Te.fog]),vertexShader:ot.sprite_vert,fragmentShader:ot.sprite_frag},background:{uniforms:{uvTransform:{value:new at},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ot.background_vert,fragmentShader:ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new at}},vertexShader:ot.backgroundCube_vert,fragmentShader:ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ot.cube_vert,fragmentShader:ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ot.equirect_vert,fragmentShader:ot.equirect_frag},distanceRGBA:{uniforms:Ln([Te.common,Te.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ot.distanceRGBA_vert,fragmentShader:ot.distanceRGBA_frag},shadow:{uniforms:Ln([Te.lights,Te.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:ot.shadow_vert,fragmentShader:ot.shadow_frag}};Oi.physical={uniforms:Ln([Oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new at},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new at},clearcoatNormalScale:{value:new me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new at},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new at},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new at},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new at},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new at},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new at},transmissionSamplerSize:{value:new me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new at},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new at},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new at},anisotropyVector:{value:new me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new at}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag};const Al={r:0,b:0,g:0},Qr=new Xi,$1=new kt;function Z1(i,e,t,n,r,s,a){const o=new tt(0);let l=s===!0?0:1,c,u,h=null,f=0,d=null;function g(y){let x=y.isScene===!0?y.background:null;return x&&x.isTexture&&(x=(y.backgroundBlurriness>0?t:e).get(x)),x}function _(y){let x=!1;const v=g(y);v===null?p(o,l):v&&v.isColor&&(p(v,1),x=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(y,x){const v=g(x);v&&(v.isCubeTexture||v.mapping===Sc)?(u===void 0&&(u=new Lt(new _r(1,1,1),new Yi({name:"BackgroundCubeMaterial",uniforms:Ra(Oi.backgroundCube.uniforms),vertexShader:Oi.backgroundCube.vertexShader,fragmentShader:Oi.backgroundCube.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,b,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Qr.copy(x.backgroundRotation),Qr.x*=-1,Qr.y*=-1,Qr.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Qr.y*=-1,Qr.z*=-1),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4($1.makeRotationFromEuler(Qr)),u.material.toneMapped=mt.getTransfer(v.colorSpace)!==wt,(h!==v||f!==v.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,h=v,f=v.version,d=i.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Lt(new Oa(2,2),new Yi({name:"BackgroundMaterial",uniforms:Ra(Oi.background.uniforms),vertexShader:Oi.background.vertexShader,fragmentShader:Oi.background.fragmentShader,side:Wr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=mt.getTransfer(v.colorSpace)!==wt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||f!==v.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,f=v.version,d=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,x){y.getRGB(Al,ig(i)),n.buffers.color.setClear(Al.r,Al.g,Al.b,x,a)}return{getClearColor:function(){return o},setClearColor:function(y,x=1){o.set(y),l=x,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(o,l)},render:_,addToRenderList:m}}function K1(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null);let s=r,a=!1;function o(M,P,U,k,V){let q=!1;const B=h(k,U,P);s!==B&&(s=B,c(s.object)),q=d(M,k,U,V),q&&g(M,k,U,V),V!==null&&e.update(V,i.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,v(M,P,U,k),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function u(M){return i.deleteVertexArray(M)}function h(M,P,U){const k=U.wireframe===!0;let V=n[M.id];V===void 0&&(V={},n[M.id]=V);let q=V[P.id];q===void 0&&(q={},V[P.id]=q);let B=q[k];return B===void 0&&(B=f(l()),q[k]=B),B}function f(M){const P=[],U=[],k=[];for(let V=0;V<t;V++)P[V]=0,U[V]=0,k[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:U,attributeDivisors:k,object:M,attributes:{},index:null}}function d(M,P,U,k){const V=s.attributes,q=P.attributes;let B=0;const Y=U.getAttributes();for(const H in Y)if(Y[H].location>=0){const D=V[H];let ue=q[H];if(ue===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(ue=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(ue=M.instanceColor)),D===void 0||D.attribute!==ue||ue&&D.data!==ue.data)return!0;B++}return s.attributesNum!==B||s.index!==k}function g(M,P,U,k){const V={},q=P.attributes;let B=0;const Y=U.getAttributes();for(const H in Y)if(Y[H].location>=0){let D=q[H];D===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(D=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(D=M.instanceColor));const ue={};ue.attribute=D,D&&D.data&&(ue.data=D.data),V[H]=ue,B++}s.attributes=V,s.attributesNum=B,s.index=k}function _(){const M=s.newAttributes;for(let P=0,U=M.length;P<U;P++)M[P]=0}function m(M){p(M,0)}function p(M,P){const U=s.newAttributes,k=s.enabledAttributes,V=s.attributeDivisors;U[M]=1,k[M]===0&&(i.enableVertexAttribArray(M),k[M]=1),V[M]!==P&&(i.vertexAttribDivisor(M,P),V[M]=P)}function y(){const M=s.newAttributes,P=s.enabledAttributes;for(let U=0,k=P.length;U<k;U++)P[U]!==M[U]&&(i.disableVertexAttribArray(U),P[U]=0)}function x(M,P,U,k,V,q,B){B===!0?i.vertexAttribIPointer(M,P,U,V,q):i.vertexAttribPointer(M,P,U,k,V,q)}function v(M,P,U,k){_();const V=k.attributes,q=U.getAttributes(),B=P.defaultAttributeValues;for(const Y in q){const H=q[Y];if(H.location>=0){let re=V[Y];if(re===void 0&&(Y==="instanceMatrix"&&M.instanceMatrix&&(re=M.instanceMatrix),Y==="instanceColor"&&M.instanceColor&&(re=M.instanceColor)),re!==void 0){const D=re.normalized,ue=re.itemSize,Fe=e.get(re);if(Fe===void 0)continue;const it=Fe.buffer,Z=Fe.type,ae=Fe.bytesPerElement,be=Z===i.INT||Z===i.UNSIGNED_INT||re.gpuType===Ad;if(re.isInterleavedBufferAttribute){const oe=re.data,Le=oe.stride,Ne=re.offset;if(oe.isInstancedInterleavedBuffer){for(let Be=0;Be<H.locationSize;Be++)p(H.location+Be,oe.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Be=0;Be<H.locationSize;Be++)m(H.location+Be);i.bindBuffer(i.ARRAY_BUFFER,it);for(let Be=0;Be<H.locationSize;Be++)x(H.location+Be,ue/H.locationSize,Z,D,Le*ae,(Ne+ue/H.locationSize*Be)*ae,be)}else{if(re.isInstancedBufferAttribute){for(let oe=0;oe<H.locationSize;oe++)p(H.location+oe,re.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let oe=0;oe<H.locationSize;oe++)m(H.location+oe);i.bindBuffer(i.ARRAY_BUFFER,it);for(let oe=0;oe<H.locationSize;oe++)x(H.location+oe,ue/H.locationSize,Z,D,ue*ae,ue/H.locationSize*oe*ae,be)}}else if(B!==void 0){const D=B[Y];if(D!==void 0)switch(D.length){case 2:i.vertexAttrib2fv(H.location,D);break;case 3:i.vertexAttrib3fv(H.location,D);break;case 4:i.vertexAttrib4fv(H.location,D);break;default:i.vertexAttrib1fv(H.location,D)}}}}y()}function A(){C();for(const M in n){const P=n[M];for(const U in P){const k=P[U];for(const V in k)u(k[V].object),delete k[V];delete P[U]}delete n[M]}}function b(M){if(n[M.id]===void 0)return;const P=n[M.id];for(const U in P){const k=P[U];for(const V in k)u(k[V].object),delete k[V];delete P[U]}delete n[M.id]}function w(M){for(const P in n){const U=n[P];if(U[M.id]===void 0)continue;const k=U[M.id];for(const V in k)u(k[V].object),delete k[V];delete U[M.id]}}function C(){S(),a=!0,s!==r&&(s=r,c(s.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:C,resetDefaultState:S,dispose:A,releaseStatesOfGeometry:b,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function J1(i,e,t){let n;function r(c){n=c}function s(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function a(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let d=0;for(let g=0;g<h;g++)d+=u[g];t.update(d,n,1)}function l(c,u,h,f){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)a(c[g],u[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*f[_];t.update(g,n,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function j1(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(w){return!(w!==Ri&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const C=w===Yo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==mr&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==lr&&!C)}function l(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,b=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:x,maxFragmentUniforms:v,vertexTextures:A,maxSamples:b}}function Q1(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new rs,o=new at,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||r;return r=f,n=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const y=s?0:n,x=y*4;let v=p.clippingState||null;l.value=v,v=u(g,f,x,d);for(let A=0;A!==x;++A)v[A]=t[A];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=d+_*4,y=f.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,v=d;x!==_;++x,v+=4)a.copy(h[x]).applyMatrix4(y,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function eS(i){let e=new WeakMap;function t(a,o){return o===mh?a.mapping=Ea:o===gh&&(a.mapping=Ta),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===mh||o===gh)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new hy(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class og extends rg{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const aa=4,fp=[.125,.215,.35,.446,.526,.582],ls=20,xu=new og,pp=new tt;let yu=null,Mu=0,Su=0,bu=!1;const ss=(1+Math.sqrt(5))/2,Js=1/ss,mp=[new I(-ss,Js,0),new I(ss,Js,0),new I(-Js,0,ss),new I(Js,0,ss),new I(0,ss,-Js),new I(0,ss,Js),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class Xh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){yu=this._renderer.getRenderTarget(),Mu=this._renderer.getActiveCubeFace(),Su=this._renderer.getActiveMipmapLevel(),bu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_p(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(yu,Mu,Su),this._renderer.xr.enabled=bu,e.scissorTest=!1,Cl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ea||e.mapping===Ta?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),yu=this._renderer.getRenderTarget(),Mu=this._renderer.getActiveCubeFace(),Su=this._renderer.getActiveMipmapLevel(),bu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Bi,minFilter:Bi,generateMipmaps:!1,type:Yo,format:Ri,colorSpace:Ia,depthBuffer:!1},r=gp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gp(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=tS(s)),this._blurMaterial=nS(s,e,t)}return r}_compileMaterial(e){const t=new Lt(this._lodPlanes[0],e);this._renderer.compile(t,xu)}_sceneToCubeUV(e,t,n,r){const o=new Nn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(pp),u.toneMapping=Br,u.autoClear=!1;const d=new Gi({name:"PMREM.Background",side:zn,depthWrite:!1,depthTest:!1}),g=new Lt(new _r,d);let _=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,_=!0):(d.color.copy(pp),_=!0);for(let p=0;p<6;p++){const y=p%3;y===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):y===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const x=this._cubeSize;Cl(r,y*x,p>2?x:0,x,x),u.setRenderTarget(r),_&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Ea||e.mapping===Ta;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=vp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_p());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Lt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Cl(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,xu)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=mp[(r-s-1)%mp.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Lt(this._lodPlanes[r],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*ls-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):ls;m>ls&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ls}`);const p=[];let y=0;for(let w=0;w<ls;++w){const C=w/_,S=Math.exp(-C*C/2);p.push(S),w===0?y+=S:w<m&&(y+=2*S)}for(let w=0;w<p.length;w++)p[w]=p[w]/y;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-n;const v=this._sizeLods[r],A=3*v*(r>x-aa?r-x+aa:0),b=4*(this._cubeSize-v);Cl(t,A,b,3*v,2*v),l.setRenderTarget(t),l.render(h,xu)}}function tS(i){const e=[],t=[],n=[];let r=i;const s=i-aa+1+fp.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>i-aa?l=fp[a-i+aa-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,_=3,m=2,p=1,y=new Float32Array(_*g*d),x=new Float32Array(m*g*d),v=new Float32Array(p*g*d);for(let b=0;b<d;b++){const w=b%3*2/3-1,C=b>2?0:-1,S=[w,C,0,w+2/3,C,0,w+2/3,C+1,0,w,C,0,w+2/3,C+1,0,w,C+1,0];y.set(S,_*g*b),x.set(f,m*g*b);const M=[b,b,b,b,b,b];v.set(M,p*g*b)}const A=new cn;A.setAttribute("position",new Hn(y,_)),A.setAttribute("uv",new Hn(x,m)),A.setAttribute("faceIndex",new Hn(v,p)),e.push(A),r>aa&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function gp(i,e,t){const n=new As(i,e,t);return n.texture.mapping=Sc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Cl(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function nS(i,e,t){const n=new Float32Array(ls),r=new I(0,1,0);return new Yi({name:"SphericalGaussianBlur",defines:{n:ls,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Nd(),fragmentShader:`

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
		`,blending:zr,depthTest:!1,depthWrite:!1})}function _p(){return new Yi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Nd(),fragmentShader:`

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
		`,blending:zr,depthTest:!1,depthWrite:!1})}function vp(){return new Yi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Nd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zr,depthTest:!1,depthWrite:!1})}function Nd(){return`

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
	`}function iS(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===mh||l===gh,u=l===Ea||l===Ta;if(c||u){let h=e.get(o);const f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new Xh(i)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const d=o.image;return c&&d&&d.height>0||u&&d&&r(d)?(t===null&&(t=new Xh(i)),h=c?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function rS(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&ao("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function sS(i,e,t,n){const r={},s=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}f.removeEventListener("dispose",a),delete r[f.id];const d=s.get(f);d&&(e.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)e.update(f[g],i.ARRAY_BUFFER);const d=h.morphAttributes;for(const g in d){const _=d[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],i.ARRAY_BUFFER)}}function c(h){const f=[],d=h.index,g=h.attributes.position;let _=0;if(d!==null){const y=d.array;_=d.version;for(let x=0,v=y.length;x<v;x+=3){const A=y[x+0],b=y[x+1],w=y[x+2];f.push(A,b,b,w,w,A)}}else if(g!==void 0){const y=g.array;_=g.version;for(let x=0,v=y.length/3-1;x<v;x+=3){const A=x+0,b=x+1,w=x+2;f.push(A,b,b,w,w,A)}}else return;const m=new(Z0(f)?ng:tg)(f,1);m.version=_;const p=s.get(h);p&&e.remove(p),s.set(h,m)}function u(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function aS(i,e,t){let n;function r(f){n=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,d){i.drawElements(n,d,s,f*a),t.update(d,n,1)}function c(f,d,g){g!==0&&(i.drawElementsInstanced(n,d,s,f*a,g),t.update(d,n,g))}function u(f,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,n,1)}function h(f,d,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/a,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,s,f,0,_,0,g);let p=0;for(let y=0;y<g;y++)p+=d[y]*_[y];t.update(p,n,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function oS(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function lS(i,e,t){const n=new WeakMap,r=new Tt;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(o);if(f===void 0||f.count!==h){let M=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",M)};var d=M;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let A=o.attributes.position.count*v,b=1;A>e.maxTextureSize&&(b=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const w=new Float32Array(A*b*4*h),C=new J0(w,A,b,h);C.type=lr,C.needsUpdate=!0;const S=v*4;for(let P=0;P<h;P++){const U=p[P],k=y[P],V=x[P],q=A*b*4*P;for(let B=0;B<U.count;B++){const Y=B*S;g===!0&&(r.fromBufferAttribute(U,B),w[q+Y+0]=r.x,w[q+Y+1]=r.y,w[q+Y+2]=r.z,w[q+Y+3]=0),_===!0&&(r.fromBufferAttribute(k,B),w[q+Y+4]=r.x,w[q+Y+5]=r.y,w[q+Y+6]=r.z,w[q+Y+7]=0),m===!0&&(r.fromBufferAttribute(V,B),w[q+Y+8]=r.x,w[q+Y+9]=r.y,w[q+Y+10]=r.z,w[q+Y+11]=V.itemSize===4?r.w:1)}}f={count:h,texture:C,size:new me(A,b)},n.set(o,f),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function cS(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return h}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}class lg extends Bn{constructor(e,t,n,r,s,a,o,l,c,u=ma){if(u!==ma&&u!==Ca)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===ma&&(n=Ts),n===void 0&&u===Ca&&(n=Aa),super(null,r,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Li,this.minFilter=l!==void 0?l:Li,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const cg=new Bn,xp=new lg(1,1),ug=new J0,hg=new Zx,dg=new sg,yp=[],Mp=[],Sp=new Float32Array(16),bp=new Float32Array(9),wp=new Float32Array(4);function Fa(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=yp[r];if(s===void 0&&(s=new Float32Array(r),yp[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function on(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function ln(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ec(i,e){let t=Mp[e];t===void 0&&(t=new Int32Array(e),Mp[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function uS(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function hS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;i.uniform2fv(this.addr,e),ln(t,e)}}function dS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(on(t,e))return;i.uniform3fv(this.addr,e),ln(t,e)}}function fS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;i.uniform4fv(this.addr,e),ln(t,e)}}function pS(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(on(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),ln(t,e)}else{if(on(t,n))return;wp.set(n),i.uniformMatrix2fv(this.addr,!1,wp),ln(t,n)}}function mS(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(on(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),ln(t,e)}else{if(on(t,n))return;bp.set(n),i.uniformMatrix3fv(this.addr,!1,bp),ln(t,n)}}function gS(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(on(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),ln(t,e)}else{if(on(t,n))return;Sp.set(n),i.uniformMatrix4fv(this.addr,!1,Sp),ln(t,n)}}function _S(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function vS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;i.uniform2iv(this.addr,e),ln(t,e)}}function xS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;i.uniform3iv(this.addr,e),ln(t,e)}}function yS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;i.uniform4iv(this.addr,e),ln(t,e)}}function MS(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function SS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;i.uniform2uiv(this.addr,e),ln(t,e)}}function bS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;i.uniform3uiv(this.addr,e),ln(t,e)}}function wS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;i.uniform4uiv(this.addr,e),ln(t,e)}}function ES(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(xp.compareFunction=$0,s=xp):s=cg,t.setTexture2D(e||s,r)}function TS(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||hg,r)}function AS(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||dg,r)}function CS(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||ug,r)}function RS(i){switch(i){case 5126:return uS;case 35664:return hS;case 35665:return dS;case 35666:return fS;case 35674:return pS;case 35675:return mS;case 35676:return gS;case 5124:case 35670:return _S;case 35667:case 35671:return vS;case 35668:case 35672:return xS;case 35669:case 35673:return yS;case 5125:return MS;case 36294:return SS;case 36295:return bS;case 36296:return wS;case 35678:case 36198:case 36298:case 36306:case 35682:return ES;case 35679:case 36299:case 36307:return TS;case 35680:case 36300:case 36308:case 36293:return AS;case 36289:case 36303:case 36311:case 36292:return CS}}function PS(i,e){i.uniform1fv(this.addr,e)}function LS(i,e){const t=Fa(e,this.size,2);i.uniform2fv(this.addr,t)}function DS(i,e){const t=Fa(e,this.size,3);i.uniform3fv(this.addr,t)}function IS(i,e){const t=Fa(e,this.size,4);i.uniform4fv(this.addr,t)}function US(i,e){const t=Fa(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function NS(i,e){const t=Fa(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function OS(i,e){const t=Fa(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function FS(i,e){i.uniform1iv(this.addr,e)}function kS(i,e){i.uniform2iv(this.addr,e)}function zS(i,e){i.uniform3iv(this.addr,e)}function BS(i,e){i.uniform4iv(this.addr,e)}function HS(i,e){i.uniform1uiv(this.addr,e)}function VS(i,e){i.uniform2uiv(this.addr,e)}function GS(i,e){i.uniform3uiv(this.addr,e)}function WS(i,e){i.uniform4uiv(this.addr,e)}function XS(i,e,t){const n=this.cache,r=e.length,s=Ec(t,r);on(n,s)||(i.uniform1iv(this.addr,s),ln(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||cg,s[a])}function YS(i,e,t){const n=this.cache,r=e.length,s=Ec(t,r);on(n,s)||(i.uniform1iv(this.addr,s),ln(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||hg,s[a])}function qS(i,e,t){const n=this.cache,r=e.length,s=Ec(t,r);on(n,s)||(i.uniform1iv(this.addr,s),ln(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||dg,s[a])}function $S(i,e,t){const n=this.cache,r=e.length,s=Ec(t,r);on(n,s)||(i.uniform1iv(this.addr,s),ln(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||ug,s[a])}function ZS(i){switch(i){case 5126:return PS;case 35664:return LS;case 35665:return DS;case 35666:return IS;case 35674:return US;case 35675:return NS;case 35676:return OS;case 5124:case 35670:return FS;case 35667:case 35671:return kS;case 35668:case 35672:return zS;case 35669:case 35673:return BS;case 5125:return HS;case 36294:return VS;case 36295:return GS;case 36296:return WS;case 35678:case 36198:case 36298:case 36306:case 35682:return XS;case 35679:case 36299:case 36307:return YS;case 35680:case 36300:case 36308:case 36293:return qS;case 36289:case 36303:case 36311:case 36292:return $S}}class KS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=RS(t.type)}}class JS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ZS(t.type)}}class jS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const wu=/(\w+)(\])?(\[|\.)?/g;function Ep(i,e){i.seq.push(e),i.map[e.id]=e}function QS(i,e,t){const n=i.name,r=n.length;for(wu.lastIndex=0;;){const s=wu.exec(n),a=wu.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Ep(t,c===void 0?new KS(o,i,e):new JS(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new jS(o),Ep(t,h)),t=h}}}class Kl{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);QS(s,a,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function Tp(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const eb=37297;let tb=0;function nb(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Ap=new at;function ib(i){mt._getMatrix(Ap,mt.workingColorSpace,i);const e=`mat3( ${Ap.elements.map(t=>t.toFixed(4))} )`;switch(mt.getTransfer(i)){case bc:return[e,"LinearTransferOETF"];case wt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Cp(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+nb(i.getShaderSource(e),a)}else return r}function rb(i,e){const t=ib(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function sb(i,e){let t;switch(e){case lx:t="Linear";break;case cx:t="Reinhard";break;case ux:t="Cineon";break;case N0:t="ACESFilmic";break;case dx:t="AgX";break;case fx:t="Neutral";break;case hx:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Rl=new I;function ab(){mt.getLuminanceCoefficients(Rl);const i=Rl.x.toFixed(4),e=Rl.y.toFixed(4),t=Rl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ob(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(oo).join(`
`)}function lb(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function cb(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function oo(i){return i!==""}function Rp(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Pp(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ub=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yh(i){return i.replace(ub,db)}const hb=new Map;function db(i,e){let t=ot[e];if(t===void 0){const n=hb.get(e);if(n!==void 0)t=ot[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Yh(t)}const fb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lp(i){return i.replace(fb,pb)}function pb(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Dp(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function mb(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===D0?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===I0?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ir&&(e="SHADOWMAP_TYPE_VSM"),e}function gb(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ea:case Ta:e="ENVMAP_TYPE_CUBE";break;case Sc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function _b(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ta:e="ENVMAP_MODE_REFRACTION";break}return e}function vb(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case U0:e="ENVMAP_BLENDING_MULTIPLY";break;case ax:e="ENVMAP_BLENDING_MIX";break;case ox:e="ENVMAP_BLENDING_ADD";break}return e}function xb(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function yb(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=mb(t),c=gb(t),u=_b(t),h=vb(t),f=xb(t),d=ob(t),g=lb(s),_=r.createProgram();let m,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(oo).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(oo).join(`
`),p.length>0&&(p+=`
`)):(m=[Dp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(oo).join(`
`),p=[Dp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Br?"#define TONE_MAPPING":"",t.toneMapping!==Br?ot.tonemapping_pars_fragment:"",t.toneMapping!==Br?sb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ot.colorspace_pars_fragment,rb("linearToOutputTexel",t.outputColorSpace),ab(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(oo).join(`
`)),a=Yh(a),a=Rp(a,t),a=Pp(a,t),o=Yh(o),o=Rp(o,t),o=Pp(o,t),a=Lp(a),o=Lp(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Xf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Xf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=y+m+a,v=y+p+o,A=Tp(r,r.VERTEX_SHADER,x),b=Tp(r,r.FRAGMENT_SHADER,v);r.attachShader(_,A),r.attachShader(_,b),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function w(P){if(i.debug.checkShaderErrors){const U=r.getProgramInfoLog(_).trim(),k=r.getShaderInfoLog(A).trim(),V=r.getShaderInfoLog(b).trim();let q=!0,B=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,A,b);else{const Y=Cp(r,A,"vertex"),H=Cp(r,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+U+`
`+Y+`
`+H)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(k===""||V==="")&&(B=!1);B&&(P.diagnostics={runnable:q,programLog:U,vertexShader:{log:k,prefix:m},fragmentShader:{log:V,prefix:p}})}r.deleteShader(A),r.deleteShader(b),C=new Kl(r,_),S=cb(r,_)}let C;this.getUniforms=function(){return C===void 0&&w(this),C};let S;this.getAttributes=function(){return S===void 0&&w(this),S};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(_,eb)),M},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=tb++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=b,this}let Mb=0;class Sb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new bb(e),t.set(e,n)),n}}class bb{constructor(e){this.id=Mb++,this.code=e,this.usedTimes=0}}function wb(i,e,t,n,r,s,a){const o=new Q0,l=new Sb,c=new Set,u=[],h=r.logarithmicDepthBuffer,f=r.vertexTextures;let d=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,M,P,U,k){const V=U.fog,q=k.geometry,B=S.isMeshStandardMaterial?U.environment:null,Y=(S.isMeshStandardMaterial?t:e).get(S.envMap||B),H=Y&&Y.mapping===Sc?Y.image.height:null,re=g[S.type];S.precision!==null&&(d=r.getMaxPrecision(S.precision),d!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));const D=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ue=D!==void 0?D.length:0;let Fe=0;q.morphAttributes.position!==void 0&&(Fe=1),q.morphAttributes.normal!==void 0&&(Fe=2),q.morphAttributes.color!==void 0&&(Fe=3);let it,Z,ae,be;if(re){const Ce=Oi[re];it=Ce.vertexShader,Z=Ce.fragmentShader}else it=S.vertexShader,Z=S.fragmentShader,l.update(S),ae=l.getVertexShaderID(S),be=l.getFragmentShaderID(S);const oe=i.getRenderTarget(),Le=i.state.buffers.depth.getReversed(),Ne=k.isInstancedMesh===!0,Be=k.isBatchedMesh===!0,Ye=!!S.map,ne=!!S.matcap,ee=!!Y,L=!!S.aoMap,Ae=!!S.lightMap,se=!!S.bumpMap,F=!!S.normalMap,ce=!!S.displacementMap,ze=!!S.emissiveMap,Ee=!!S.metalnessMap,R=!!S.roughnessMap,E=S.anisotropy>0,G=S.clearcoat>0,j=S.dispersion>0,Q=S.iridescence>0,J=S.sheen>0,ge=S.transmission>0,fe=E&&!!S.anisotropyMap,ye=G&&!!S.clearcoatMap,je=G&&!!S.clearcoatNormalMap,le=G&&!!S.clearcoatRoughnessMap,pe=Q&&!!S.iridescenceMap,We=Q&&!!S.iridescenceThicknessMap,Ge=J&&!!S.sheenColorMap,Re=J&&!!S.sheenRoughnessMap,rt=!!S.specularMap,qe=!!S.specularColorMap,pt=!!S.specularIntensityMap,N=ge&&!!S.transmissionMap,ve=ge&&!!S.thicknessMap,$=!!S.gradientMap,te=!!S.alphaMap,_e=S.alphaTest>0,Me=!!S.alphaHash,Ze=!!S.extensions;let _t=Br;S.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(_t=i.toneMapping);const Wt={shaderID:re,shaderType:S.type,shaderName:S.name,vertexShader:it,fragmentShader:Z,defines:S.defines,customVertexShaderID:ae,customFragmentShaderID:be,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:Be,batchingColor:Be&&k._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&k.instanceColor!==null,instancingMorph:Ne&&k.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:oe===null?i.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:Ia,alphaToCoverage:!!S.alphaToCoverage,map:Ye,matcap:ne,envMap:ee,envMapMode:ee&&Y.mapping,envMapCubeUVHeight:H,aoMap:L,lightMap:Ae,bumpMap:se,normalMap:F,displacementMap:f&&ce,emissiveMap:ze,normalMapObjectSpace:F&&S.normalMapType===_x,normalMapTangentSpace:F&&S.normalMapType===q0,metalnessMap:Ee,roughnessMap:R,anisotropy:E,anisotropyMap:fe,clearcoat:G,clearcoatMap:ye,clearcoatNormalMap:je,clearcoatRoughnessMap:le,dispersion:j,iridescence:Q,iridescenceMap:pe,iridescenceThicknessMap:We,sheen:J,sheenColorMap:Ge,sheenRoughnessMap:Re,specularMap:rt,specularColorMap:qe,specularIntensityMap:pt,transmission:ge,transmissionMap:N,thicknessMap:ve,gradientMap:$,opaque:S.transparent===!1&&S.blending===pa&&S.alphaToCoverage===!1,alphaMap:te,alphaTest:_e,alphaHash:Me,combine:S.combine,mapUv:Ye&&_(S.map.channel),aoMapUv:L&&_(S.aoMap.channel),lightMapUv:Ae&&_(S.lightMap.channel),bumpMapUv:se&&_(S.bumpMap.channel),normalMapUv:F&&_(S.normalMap.channel),displacementMapUv:ce&&_(S.displacementMap.channel),emissiveMapUv:ze&&_(S.emissiveMap.channel),metalnessMapUv:Ee&&_(S.metalnessMap.channel),roughnessMapUv:R&&_(S.roughnessMap.channel),anisotropyMapUv:fe&&_(S.anisotropyMap.channel),clearcoatMapUv:ye&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:je&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:le&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:We&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ge&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Re&&_(S.sheenRoughnessMap.channel),specularMapUv:rt&&_(S.specularMap.channel),specularColorMapUv:qe&&_(S.specularColorMap.channel),specularIntensityMapUv:pt&&_(S.specularIntensityMap.channel),transmissionMapUv:N&&_(S.transmissionMap.channel),thicknessMapUv:ve&&_(S.thicknessMap.channel),alphaMapUv:te&&_(S.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(F||E),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!q.attributes.uv&&(Ye||te),fog:!!V,useFog:S.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Le,skinning:k.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:Fe,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:_t,decodeVideoTexture:Ye&&S.map.isVideoTexture===!0&&mt.getTransfer(S.map.colorSpace)===wt,decodeVideoTextureEmissive:ze&&S.emissiveMap.isVideoTexture===!0&&mt.getTransfer(S.emissiveMap.colorSpace)===wt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===pn,flipSided:S.side===zn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ze&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ze&&S.extensions.multiDraw===!0||Be)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Wt.vertexUv1s=c.has(1),Wt.vertexUv2s=c.has(2),Wt.vertexUv3s=c.has(3),c.clear(),Wt}function p(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const P in S.defines)M.push(P),M.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(y(M,S),x(M,S),M.push(i.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function y(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function x(S,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),S.push(o.mask)}function v(S){const M=g[S.type];let P;if(M){const U=Oi[M];P=oy.clone(U.uniforms)}else P=S.uniforms;return P}function A(S,M){let P;for(let U=0,k=u.length;U<k;U++){const V=u[U];if(V.cacheKey===M){P=V,++P.usedTimes;break}}return P===void 0&&(P=new yb(i,M,S,s),u.push(P)),P}function b(S){if(--S.usedTimes===0){const M=u.indexOf(S);u[M]=u[u.length-1],u.pop(),S.destroy()}}function w(S){l.remove(S)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:A,releaseProgram:b,releaseShaderCache:w,programs:u,dispose:C}}function Eb(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,l){i.get(a)[o]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function Tb(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Ip(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Up(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(h,f,d,g,_,m){let p=i[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},i[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),e++,p}function o(h,f,d,g,_,m){const p=a(h,f,d,g,_,m);d.transmission>0?n.push(p):d.transparent===!0?r.push(p):t.push(p)}function l(h,f,d,g,_,m){const p=a(h,f,d,g,_,m);d.transmission>0?n.unshift(p):d.transparent===!0?r.unshift(p):t.unshift(p)}function c(h,f){t.length>1&&t.sort(h||Tb),n.length>1&&n.sort(f||Ip),r.length>1&&r.sort(f||Ip)}function u(){for(let h=e,f=i.length;h<f;h++){const d=i[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function Ab(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new Up,i.set(n,[a])):r>=s.length?(a=new Up,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Cb(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new tt};break;case"SpotLight":t={position:new I,direction:new I,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new tt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":t={color:new tt,position:new I,halfWidth:new I,halfHeight:new I};break}return i[e.id]=t,t}}}function Rb(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Pb=0;function Lb(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Db(i){const e=new Cb,t=Rb(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);const r=new I,s=new kt,a=new kt;function o(c){let u=0,h=0,f=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,y=0,x=0,v=0,A=0,b=0,w=0;c.sort(Lb);for(let S=0,M=c.length;S<M;S++){const P=c[S],U=P.color,k=P.intensity,V=P.distance,q=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=U.r*k,h+=U.g*k,f+=U.b*k;else if(P.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(P.sh.coefficients[B],k);w++}else if(P.isDirectionalLight){const B=e.get(P);if(B.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const Y=P.shadow,H=t.get(P);H.shadowIntensity=Y.intensity,H.shadowBias=Y.bias,H.shadowNormalBias=Y.normalBias,H.shadowRadius=Y.radius,H.shadowMapSize=Y.mapSize,n.directionalShadow[d]=H,n.directionalShadowMap[d]=q,n.directionalShadowMatrix[d]=P.shadow.matrix,y++}n.directional[d]=B,d++}else if(P.isSpotLight){const B=e.get(P);B.position.setFromMatrixPosition(P.matrixWorld),B.color.copy(U).multiplyScalar(k),B.distance=V,B.coneCos=Math.cos(P.angle),B.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),B.decay=P.decay,n.spot[_]=B;const Y=P.shadow;if(P.map&&(n.spotLightMap[A]=P.map,A++,Y.updateMatrices(P),P.castShadow&&b++),n.spotLightMatrix[_]=Y.matrix,P.castShadow){const H=t.get(P);H.shadowIntensity=Y.intensity,H.shadowBias=Y.bias,H.shadowNormalBias=Y.normalBias,H.shadowRadius=Y.radius,H.shadowMapSize=Y.mapSize,n.spotShadow[_]=H,n.spotShadowMap[_]=q,v++}_++}else if(P.isRectAreaLight){const B=e.get(P);B.color.copy(U).multiplyScalar(k),B.halfWidth.set(P.width*.5,0,0),B.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=B,m++}else if(P.isPointLight){const B=e.get(P);if(B.color.copy(P.color).multiplyScalar(P.intensity),B.distance=P.distance,B.decay=P.decay,P.castShadow){const Y=P.shadow,H=t.get(P);H.shadowIntensity=Y.intensity,H.shadowBias=Y.bias,H.shadowNormalBias=Y.normalBias,H.shadowRadius=Y.radius,H.shadowMapSize=Y.mapSize,H.shadowCameraNear=Y.camera.near,H.shadowCameraFar=Y.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=q,n.pointShadowMatrix[g]=P.shadow.matrix,x++}n.point[g]=B,g++}else if(P.isHemisphereLight){const B=e.get(P);B.skyColor.copy(P.color).multiplyScalar(k),B.groundColor.copy(P.groundColor).multiplyScalar(k),n.hemi[p]=B,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Te.LTC_FLOAT_1,n.rectAreaLTC2=Te.LTC_FLOAT_2):(n.rectAreaLTC1=Te.LTC_HALF_1,n.rectAreaLTC2=Te.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const C=n.hash;(C.directionalLength!==d||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==y||C.numPointShadows!==x||C.numSpotShadows!==v||C.numSpotMaps!==A||C.numLightProbes!==w)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=v+A-b,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=w,C.directionalLength=d,C.pointLength=g,C.spotLength=_,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=y,C.numPointShadows=x,C.numSpotShadows=v,C.numSpotMaps=A,C.numLightProbes=w,n.version=Pb++)}function l(c,u){let h=0,f=0,d=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){const x=c[p];if(x.isDirectionalLight){const v=n.directional[h];v.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),h++}else if(x.isSpotLight){const v=n.spot[d];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),d++}else if(x.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),a.identity(),s.copy(x.matrixWorld),s.premultiply(m),a.extractRotation(s),v.halfWidth.set(x.width*.5,0,0),v.halfHeight.set(0,x.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(x.isPointLight){const v=n.point[f];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),f++}else if(x.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(x.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:n}}function Np(i){const e=new Db(i),t=[],n=[];function r(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function Ib(i){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Np(i),e.set(r,[o])):s>=a.length?(o=new Np(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class Ub extends Na{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=mx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Nb extends Na{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ob=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Fb=`uniform sampler2D shadow_pass;
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
}`;function kb(i,e,t){let n=new Ud;const r=new me,s=new me,a=new Tt,o=new Ub({depthPacking:gx}),l=new Nb,c={},u=t.maxTextureSize,h={[Wr]:zn,[zn]:Wr,[pn]:pn},f=new Yi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new me},radius:{value:4}},vertexShader:Ob,fragmentShader:Fb}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new cn;g.setAttribute("position",new Hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Lt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=D0;let p=this.type;this.render=function(b,w,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const S=i.getRenderTarget(),M=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),U=i.state;U.setBlending(zr),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const k=p!==ir&&this.type===ir,V=p===ir&&this.type!==ir;for(let q=0,B=b.length;q<B;q++){const Y=b[q],H=Y.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const re=H.getFrameExtents();if(r.multiply(re),s.copy(H.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/re.x),r.x=s.x*re.x,H.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/re.y),r.y=s.y*re.y,H.mapSize.y=s.y)),H.map===null||k===!0||V===!0){const ue=this.type!==ir?{minFilter:Li,magFilter:Li}:{};H.map!==null&&H.map.dispose(),H.map=new As(r.x,r.y,ue),H.map.texture.name=Y.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();const D=H.getViewportCount();for(let ue=0;ue<D;ue++){const Fe=H.getViewport(ue);a.set(s.x*Fe.x,s.y*Fe.y,s.x*Fe.z,s.y*Fe.w),U.viewport(a),H.updateMatrices(Y,ue),n=H.getFrustum(),v(w,C,H.camera,Y,this.type)}H.isPointLightShadow!==!0&&this.type===ir&&y(H,C),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(S,M,P)};function y(b,w){const C=e.update(_);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new As(r.x,r.y)),f.uniforms.shadow_pass.value=b.map.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(w,null,C,f,_,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(w,null,C,d,_,null)}function x(b,w,C,S){let M=null;const P=C.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(P!==void 0)M=P;else if(M=C.isPointLight===!0?l:o,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const U=M.uuid,k=w.uuid;let V=c[U];V===void 0&&(V={},c[U]=V);let q=V[k];q===void 0&&(q=M.clone(),V[k]=q,w.addEventListener("dispose",A)),M=q}if(M.visible=w.visible,M.wireframe=w.wireframe,S===ir?M.side=w.shadowSide!==null?w.shadowSide:w.side:M.side=w.shadowSide!==null?w.shadowSide:h[w.side],M.alphaMap=w.alphaMap,M.alphaTest=w.alphaTest,M.map=w.map,M.clipShadows=w.clipShadows,M.clippingPlanes=w.clippingPlanes,M.clipIntersection=w.clipIntersection,M.displacementMap=w.displacementMap,M.displacementScale=w.displacementScale,M.displacementBias=w.displacementBias,M.wireframeLinewidth=w.wireframeLinewidth,M.linewidth=w.linewidth,C.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const U=i.properties.get(M);U.light=C}return M}function v(b,w,C,S,M){if(b.visible===!1)return;if(b.layers.test(w.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&M===ir)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,b.matrixWorld);const k=e.update(b),V=b.material;if(Array.isArray(V)){const q=k.groups;for(let B=0,Y=q.length;B<Y;B++){const H=q[B],re=V[H.materialIndex];if(re&&re.visible){const D=x(b,re,S,M);b.onBeforeShadow(i,b,w,C,k,D,H),i.renderBufferDirect(C,null,k,D,b,H),b.onAfterShadow(i,b,w,C,k,D,H)}}}else if(V.visible){const q=x(b,V,S,M);b.onBeforeShadow(i,b,w,C,k,q,null),i.renderBufferDirect(C,null,k,q,b,null),b.onAfterShadow(i,b,w,C,k,q,null)}}const U=b.children;for(let k=0,V=U.length;k<V;k++)v(U[k],w,C,S,M)}function A(b){b.target.removeEventListener("dispose",A);for(const C in c){const S=c[C],M=b.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const zb={[lh]:ch,[uh]:fh,[hh]:ph,[wa]:dh,[ch]:lh,[fh]:uh,[ph]:hh,[dh]:wa};function Bb(i,e){function t(){let N=!1;const ve=new Tt;let $=null;const te=new Tt(0,0,0,0);return{setMask:function(_e){$!==_e&&!N&&(i.colorMask(_e,_e,_e,_e),$=_e)},setLocked:function(_e){N=_e},setClear:function(_e,Me,Ze,_t,Wt){Wt===!0&&(_e*=_t,Me*=_t,Ze*=_t),ve.set(_e,Me,Ze,_t),te.equals(ve)===!1&&(i.clearColor(_e,Me,Ze,_t),te.copy(ve))},reset:function(){N=!1,$=null,te.set(-1,0,0,0)}}}function n(){let N=!1,ve=!1,$=null,te=null,_e=null;return{setReversed:function(Me){if(ve!==Me){const Ze=e.get("EXT_clip_control");ve?Ze.clipControlEXT(Ze.LOWER_LEFT_EXT,Ze.ZERO_TO_ONE_EXT):Ze.clipControlEXT(Ze.LOWER_LEFT_EXT,Ze.NEGATIVE_ONE_TO_ONE_EXT);const _t=_e;_e=null,this.setClear(_t)}ve=Me},getReversed:function(){return ve},setTest:function(Me){Me?oe(i.DEPTH_TEST):Le(i.DEPTH_TEST)},setMask:function(Me){$!==Me&&!N&&(i.depthMask(Me),$=Me)},setFunc:function(Me){if(ve&&(Me=zb[Me]),te!==Me){switch(Me){case lh:i.depthFunc(i.NEVER);break;case ch:i.depthFunc(i.ALWAYS);break;case uh:i.depthFunc(i.LESS);break;case wa:i.depthFunc(i.LEQUAL);break;case hh:i.depthFunc(i.EQUAL);break;case dh:i.depthFunc(i.GEQUAL);break;case fh:i.depthFunc(i.GREATER);break;case ph:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}te=Me}},setLocked:function(Me){N=Me},setClear:function(Me){_e!==Me&&(ve&&(Me=1-Me),i.clearDepth(Me),_e=Me)},reset:function(){N=!1,$=null,te=null,_e=null,ve=!1}}}function r(){let N=!1,ve=null,$=null,te=null,_e=null,Me=null,Ze=null,_t=null,Wt=null;return{setTest:function(Ce){N||(Ce?oe(i.STENCIL_TEST):Le(i.STENCIL_TEST))},setMask:function(Ce){ve!==Ce&&!N&&(i.stencilMask(Ce),ve=Ce)},setFunc:function(Ce,Oe,st){($!==Ce||te!==Oe||_e!==st)&&(i.stencilFunc(Ce,Oe,st),$=Ce,te=Oe,_e=st)},setOp:function(Ce,Oe,st){(Me!==Ce||Ze!==Oe||_t!==st)&&(i.stencilOp(Ce,Oe,st),Me=Ce,Ze=Oe,_t=st)},setLocked:function(Ce){N=Ce},setClear:function(Ce){Wt!==Ce&&(i.clearStencil(Ce),Wt=Ce)},reset:function(){N=!1,ve=null,$=null,te=null,_e=null,Me=null,Ze=null,_t=null,Wt=null}}}const s=new t,a=new n,o=new r,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,y=null,x=null,v=null,A=null,b=null,w=new tt(0,0,0),C=0,S=!1,M=null,P=null,U=null,k=null,V=null;const q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,Y=0;const H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(H)[1]),B=Y>=1):H.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),B=Y>=2);let re=null,D={};const ue=i.getParameter(i.SCISSOR_BOX),Fe=i.getParameter(i.VIEWPORT),it=new Tt().fromArray(ue),Z=new Tt().fromArray(Fe);function ae(N,ve,$,te){const _e=new Uint8Array(4),Me=i.createTexture();i.bindTexture(N,Me),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ze=0;Ze<$;Ze++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(ve,0,i.RGBA,1,1,te,0,i.RGBA,i.UNSIGNED_BYTE,_e):i.texImage2D(ve+Ze,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,_e);return Me}const be={};be[i.TEXTURE_2D]=ae(i.TEXTURE_2D,i.TEXTURE_2D,1),be[i.TEXTURE_CUBE_MAP]=ae(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),be[i.TEXTURE_2D_ARRAY]=ae(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),be[i.TEXTURE_3D]=ae(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),oe(i.DEPTH_TEST),a.setFunc(wa),se(!1),F(Bf),oe(i.CULL_FACE),L(zr);function oe(N){u[N]!==!0&&(i.enable(N),u[N]=!0)}function Le(N){u[N]!==!1&&(i.disable(N),u[N]=!1)}function Ne(N,ve){return h[N]!==ve?(i.bindFramebuffer(N,ve),h[N]=ve,N===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ve),N===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ve),!0):!1}function Be(N,ve){let $=d,te=!1;if(N){$=f.get(ve),$===void 0&&($=[],f.set(ve,$));const _e=N.textures;if($.length!==_e.length||$[0]!==i.COLOR_ATTACHMENT0){for(let Me=0,Ze=_e.length;Me<Ze;Me++)$[Me]=i.COLOR_ATTACHMENT0+Me;$.length=_e.length,te=!0}}else $[0]!==i.BACK&&($[0]=i.BACK,te=!0);te&&i.drawBuffers($)}function Ye(N){return g!==N?(i.useProgram(N),g=N,!0):!1}const ne={[os]:i.FUNC_ADD,[Gv]:i.FUNC_SUBTRACT,[Wv]:i.FUNC_REVERSE_SUBTRACT};ne[Xv]=i.MIN,ne[Yv]=i.MAX;const ee={[qv]:i.ZERO,[$v]:i.ONE,[Zv]:i.SRC_COLOR,[ah]:i.SRC_ALPHA,[tx]:i.SRC_ALPHA_SATURATE,[Qv]:i.DST_COLOR,[Jv]:i.DST_ALPHA,[Kv]:i.ONE_MINUS_SRC_COLOR,[oh]:i.ONE_MINUS_SRC_ALPHA,[ex]:i.ONE_MINUS_DST_COLOR,[jv]:i.ONE_MINUS_DST_ALPHA,[nx]:i.CONSTANT_COLOR,[ix]:i.ONE_MINUS_CONSTANT_COLOR,[rx]:i.CONSTANT_ALPHA,[sx]:i.ONE_MINUS_CONSTANT_ALPHA};function L(N,ve,$,te,_e,Me,Ze,_t,Wt,Ce){if(N===zr){_===!0&&(Le(i.BLEND),_=!1);return}if(_===!1&&(oe(i.BLEND),_=!0),N!==Vv){if(N!==m||Ce!==S){if((p!==os||v!==os)&&(i.blendEquation(i.FUNC_ADD),p=os,v=os),Ce)switch(N){case pa:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case sh:i.blendFunc(i.ONE,i.ONE);break;case Hf:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Vf:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case pa:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case sh:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Hf:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Vf:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}y=null,x=null,A=null,b=null,w.set(0,0,0),C=0,m=N,S=Ce}return}_e=_e||ve,Me=Me||$,Ze=Ze||te,(ve!==p||_e!==v)&&(i.blendEquationSeparate(ne[ve],ne[_e]),p=ve,v=_e),($!==y||te!==x||Me!==A||Ze!==b)&&(i.blendFuncSeparate(ee[$],ee[te],ee[Me],ee[Ze]),y=$,x=te,A=Me,b=Ze),(_t.equals(w)===!1||Wt!==C)&&(i.blendColor(_t.r,_t.g,_t.b,Wt),w.copy(_t),C=Wt),m=N,S=!1}function Ae(N,ve){N.side===pn?Le(i.CULL_FACE):oe(i.CULL_FACE);let $=N.side===zn;ve&&($=!$),se($),N.blending===pa&&N.transparent===!1?L(zr):L(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),s.setMask(N.colorWrite);const te=N.stencilWrite;o.setTest(te),te&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),ze(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?oe(i.SAMPLE_ALPHA_TO_COVERAGE):Le(i.SAMPLE_ALPHA_TO_COVERAGE)}function se(N){M!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),M=N)}function F(N){N!==Bv?(oe(i.CULL_FACE),N!==P&&(N===Bf?i.cullFace(i.BACK):N===Hv?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Le(i.CULL_FACE),P=N}function ce(N){N!==U&&(B&&i.lineWidth(N),U=N)}function ze(N,ve,$){N?(oe(i.POLYGON_OFFSET_FILL),(k!==ve||V!==$)&&(i.polygonOffset(ve,$),k=ve,V=$)):Le(i.POLYGON_OFFSET_FILL)}function Ee(N){N?oe(i.SCISSOR_TEST):Le(i.SCISSOR_TEST)}function R(N){N===void 0&&(N=i.TEXTURE0+q-1),re!==N&&(i.activeTexture(N),re=N)}function E(N,ve,$){$===void 0&&(re===null?$=i.TEXTURE0+q-1:$=re);let te=D[$];te===void 0&&(te={type:void 0,texture:void 0},D[$]=te),(te.type!==N||te.texture!==ve)&&(re!==$&&(i.activeTexture($),re=$),i.bindTexture(N,ve||be[N]),te.type=N,te.texture=ve)}function G(){const N=D[re];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function j(){try{i.compressedTexImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Q(){try{i.compressedTexImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function J(){try{i.texSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ge(){try{i.texSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function fe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ye(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function je(){try{i.texStorage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function le(){try{i.texStorage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function pe(){try{i.texImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function We(){try{i.texImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ge(N){it.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),it.copy(N))}function Re(N){Z.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),Z.copy(N))}function rt(N,ve){let $=c.get(ve);$===void 0&&($=new WeakMap,c.set(ve,$));let te=$.get(N);te===void 0&&(te=i.getUniformBlockIndex(ve,N.name),$.set(N,te))}function qe(N,ve){const te=c.get(ve).get(N);l.get(ve)!==te&&(i.uniformBlockBinding(ve,te,N.__bindingPointIndex),l.set(ve,te))}function pt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},re=null,D={},h={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,y=null,x=null,v=null,A=null,b=null,w=new tt(0,0,0),C=0,S=!1,M=null,P=null,U=null,k=null,V=null,it.set(0,0,i.canvas.width,i.canvas.height),Z.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:oe,disable:Le,bindFramebuffer:Ne,drawBuffers:Be,useProgram:Ye,setBlending:L,setMaterial:Ae,setFlipSided:se,setCullFace:F,setLineWidth:ce,setPolygonOffset:ze,setScissorTest:Ee,activeTexture:R,bindTexture:E,unbindTexture:G,compressedTexImage2D:j,compressedTexImage3D:Q,texImage2D:pe,texImage3D:We,updateUBOMapping:rt,uniformBlockBinding:qe,texStorage2D:je,texStorage3D:le,texSubImage2D:J,texSubImage3D:ge,compressedTexSubImage2D:fe,compressedTexSubImage3D:ye,scissor:Ge,viewport:Re,reset:pt}}function Op(i,e,t,n){const r=Hb(n);switch(t){case B0:return i*e;case V0:return i*e;case G0:return i*e*2;case W0:return i*e/r.components*r.byteLength;case Pd:return i*e/r.components*r.byteLength;case X0:return i*e*2/r.components*r.byteLength;case Ld:return i*e*2/r.components*r.byteLength;case H0:return i*e*3/r.components*r.byteLength;case Ri:return i*e*4/r.components*r.byteLength;case Dd:return i*e*4/r.components*r.byteLength;case Xl:case Yl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ql:case $l:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case xh:case Mh:return Math.max(i,16)*Math.max(e,8)/4;case vh:case yh:return Math.max(i,8)*Math.max(e,8)/2;case Sh:case bh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case wh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Eh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Th:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ah:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ch:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Rh:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ph:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Lh:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Dh:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ih:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Uh:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Nh:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Oh:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Fh:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case kh:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Zl:case zh:case Bh:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Y0:case Hh:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Vh:case Gh:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Hb(i){switch(i){case mr:case F0:return{byteLength:1,components:1};case Fo:case k0:case Yo:return{byteLength:2,components:1};case Cd:case Rd:return{byteLength:2,components:4};case Ts:case Ad:case lr:return{byteLength:4,components:1};case z0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Vb(i,e,t,n,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new me,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,E){return d?new OffscreenCanvas(R,E):dc("canvas")}function _(R,E,G){let j=1;const Q=Ee(R);if((Q.width>G||Q.height>G)&&(j=G/Math.max(Q.width,Q.height)),j<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const J=Math.floor(j*Q.width),ge=Math.floor(j*Q.height);h===void 0&&(h=g(J,ge));const fe=E?g(J,ge):h;return fe.width=J,fe.height=ge,fe.getContext("2d").drawImage(R,0,0,J,ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+J+"x"+ge+")."),fe}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),R;return R}function m(R){return R.generateMipmaps}function p(R){i.generateMipmap(R)}function y(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(R,E,G,j,Q=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let J=E;if(E===i.RED&&(G===i.FLOAT&&(J=i.R32F),G===i.HALF_FLOAT&&(J=i.R16F),G===i.UNSIGNED_BYTE&&(J=i.R8)),E===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(J=i.R8UI),G===i.UNSIGNED_SHORT&&(J=i.R16UI),G===i.UNSIGNED_INT&&(J=i.R32UI),G===i.BYTE&&(J=i.R8I),G===i.SHORT&&(J=i.R16I),G===i.INT&&(J=i.R32I)),E===i.RG&&(G===i.FLOAT&&(J=i.RG32F),G===i.HALF_FLOAT&&(J=i.RG16F),G===i.UNSIGNED_BYTE&&(J=i.RG8)),E===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(J=i.RG8UI),G===i.UNSIGNED_SHORT&&(J=i.RG16UI),G===i.UNSIGNED_INT&&(J=i.RG32UI),G===i.BYTE&&(J=i.RG8I),G===i.SHORT&&(J=i.RG16I),G===i.INT&&(J=i.RG32I)),E===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(J=i.RGB8UI),G===i.UNSIGNED_SHORT&&(J=i.RGB16UI),G===i.UNSIGNED_INT&&(J=i.RGB32UI),G===i.BYTE&&(J=i.RGB8I),G===i.SHORT&&(J=i.RGB16I),G===i.INT&&(J=i.RGB32I)),E===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),G===i.UNSIGNED_INT&&(J=i.RGBA32UI),G===i.BYTE&&(J=i.RGBA8I),G===i.SHORT&&(J=i.RGBA16I),G===i.INT&&(J=i.RGBA32I)),E===i.RGB&&G===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),E===i.RGBA){const ge=Q?bc:mt.getTransfer(j);G===i.FLOAT&&(J=i.RGBA32F),G===i.HALF_FLOAT&&(J=i.RGBA16F),G===i.UNSIGNED_BYTE&&(J=ge===wt?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function v(R,E){let G;return R?E===null||E===Ts||E===Aa?G=i.DEPTH24_STENCIL8:E===lr?G=i.DEPTH32F_STENCIL8:E===Fo&&(G=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Ts||E===Aa?G=i.DEPTH_COMPONENT24:E===lr?G=i.DEPTH_COMPONENT32F:E===Fo&&(G=i.DEPTH_COMPONENT16),G}function A(R,E){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Li&&R.minFilter!==Bi?Math.log2(Math.max(E.width,E.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?E.mipmaps.length:1}function b(R){const E=R.target;E.removeEventListener("dispose",b),C(E),E.isVideoTexture&&u.delete(E)}function w(R){const E=R.target;E.removeEventListener("dispose",w),M(E)}function C(R){const E=n.get(R);if(E.__webglInit===void 0)return;const G=R.source,j=f.get(G);if(j){const Q=j[E.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&S(R),Object.keys(j).length===0&&f.delete(G)}n.remove(R)}function S(R){const E=n.get(R);i.deleteTexture(E.__webglTexture);const G=R.source,j=f.get(G);delete j[E.__cacheKey],a.memory.textures--}function M(R){const E=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(E.__webglFramebuffer[j]))for(let Q=0;Q<E.__webglFramebuffer[j].length;Q++)i.deleteFramebuffer(E.__webglFramebuffer[j][Q]);else i.deleteFramebuffer(E.__webglFramebuffer[j]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[j])}else{if(Array.isArray(E.__webglFramebuffer))for(let j=0;j<E.__webglFramebuffer.length;j++)i.deleteFramebuffer(E.__webglFramebuffer[j]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let j=0;j<E.__webglColorRenderbuffer.length;j++)E.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[j]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const G=R.textures;for(let j=0,Q=G.length;j<Q;j++){const J=n.get(G[j]);J.__webglTexture&&(i.deleteTexture(J.__webglTexture),a.memory.textures--),n.remove(G[j])}n.remove(R)}let P=0;function U(){P=0}function k(){const R=P;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),P+=1,R}function V(R){const E=[];return E.push(R.wrapS),E.push(R.wrapT),E.push(R.wrapR||0),E.push(R.magFilter),E.push(R.minFilter),E.push(R.anisotropy),E.push(R.internalFormat),E.push(R.format),E.push(R.type),E.push(R.generateMipmaps),E.push(R.premultiplyAlpha),E.push(R.flipY),E.push(R.unpackAlignment),E.push(R.colorSpace),E.join()}function q(R,E){const G=n.get(R);if(R.isVideoTexture&&ce(R),R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){const j=R.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(G,R,E);return}}t.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+E)}function B(R,E){const G=n.get(R);if(R.version>0&&G.__version!==R.version){Z(G,R,E);return}t.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+E)}function Y(R,E){const G=n.get(R);if(R.version>0&&G.__version!==R.version){Z(G,R,E);return}t.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+E)}function H(R,E){const G=n.get(R);if(R.version>0&&G.__version!==R.version){ae(G,R,E);return}t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+E)}const re={[uc]:i.REPEAT,[hs]:i.CLAMP_TO_EDGE,[_h]:i.MIRRORED_REPEAT},D={[Li]:i.NEAREST,[px]:i.NEAREST_MIPMAP_NEAREST,[cl]:i.NEAREST_MIPMAP_LINEAR,[Bi]:i.LINEAR,[jc]:i.LINEAR_MIPMAP_NEAREST,[ds]:i.LINEAR_MIPMAP_LINEAR},ue={[vx]:i.NEVER,[wx]:i.ALWAYS,[xx]:i.LESS,[$0]:i.LEQUAL,[yx]:i.EQUAL,[bx]:i.GEQUAL,[Mx]:i.GREATER,[Sx]:i.NOTEQUAL};function Fe(R,E){if(E.type===lr&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Bi||E.magFilter===jc||E.magFilter===cl||E.magFilter===ds||E.minFilter===Bi||E.minFilter===jc||E.minFilter===cl||E.minFilter===ds)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,re[E.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,re[E.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,re[E.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,D[E.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,D[E.minFilter]),E.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,ue[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Li||E.minFilter!==cl&&E.minFilter!==ds||E.type===lr&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");i.texParameterf(R,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function it(R,E){let G=!1;R.__webglInit===void 0&&(R.__webglInit=!0,E.addEventListener("dispose",b));const j=E.source;let Q=f.get(j);Q===void 0&&(Q={},f.set(j,Q));const J=V(E);if(J!==R.__cacheKey){Q[J]===void 0&&(Q[J]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,G=!0),Q[J].usedTimes++;const ge=Q[R.__cacheKey];ge!==void 0&&(Q[R.__cacheKey].usedTimes--,ge.usedTimes===0&&S(E)),R.__cacheKey=J,R.__webglTexture=Q[J].texture}return G}function Z(R,E,G){let j=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(j=i.TEXTURE_3D);const Q=it(R,E),J=E.source;t.bindTexture(j,R.__webglTexture,i.TEXTURE0+G);const ge=n.get(J);if(J.version!==ge.__version||Q===!0){t.activeTexture(i.TEXTURE0+G);const fe=mt.getPrimaries(mt.workingColorSpace),ye=E.colorSpace===Cr?null:mt.getPrimaries(E.colorSpace),je=E.colorSpace===Cr||fe===ye?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,je);let le=_(E.image,!1,r.maxTextureSize);le=ze(E,le);const pe=s.convert(E.format,E.colorSpace),We=s.convert(E.type);let Ge=x(E.internalFormat,pe,We,E.colorSpace,E.isVideoTexture);Fe(j,E);let Re;const rt=E.mipmaps,qe=E.isVideoTexture!==!0,pt=ge.__version===void 0||Q===!0,N=J.dataReady,ve=A(E,le);if(E.isDepthTexture)Ge=v(E.format===Ca,E.type),pt&&(qe?t.texStorage2D(i.TEXTURE_2D,1,Ge,le.width,le.height):t.texImage2D(i.TEXTURE_2D,0,Ge,le.width,le.height,0,pe,We,null));else if(E.isDataTexture)if(rt.length>0){qe&&pt&&t.texStorage2D(i.TEXTURE_2D,ve,Ge,rt[0].width,rt[0].height);for(let $=0,te=rt.length;$<te;$++)Re=rt[$],qe?N&&t.texSubImage2D(i.TEXTURE_2D,$,0,0,Re.width,Re.height,pe,We,Re.data):t.texImage2D(i.TEXTURE_2D,$,Ge,Re.width,Re.height,0,pe,We,Re.data);E.generateMipmaps=!1}else qe?(pt&&t.texStorage2D(i.TEXTURE_2D,ve,Ge,le.width,le.height),N&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,le.width,le.height,pe,We,le.data)):t.texImage2D(i.TEXTURE_2D,0,Ge,le.width,le.height,0,pe,We,le.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){qe&&pt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ve,Ge,rt[0].width,rt[0].height,le.depth);for(let $=0,te=rt.length;$<te;$++)if(Re=rt[$],E.format!==Ri)if(pe!==null)if(qe){if(N)if(E.layerUpdates.size>0){const _e=Op(Re.width,Re.height,E.format,E.type);for(const Me of E.layerUpdates){const Ze=Re.data.subarray(Me*_e/Re.data.BYTES_PER_ELEMENT,(Me+1)*_e/Re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,Me,Re.width,Re.height,1,pe,Ze)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,Re.width,Re.height,le.depth,pe,Re.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,$,Ge,Re.width,Re.height,le.depth,0,Re.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qe?N&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,Re.width,Re.height,le.depth,pe,We,Re.data):t.texImage3D(i.TEXTURE_2D_ARRAY,$,Ge,Re.width,Re.height,le.depth,0,pe,We,Re.data)}else{qe&&pt&&t.texStorage2D(i.TEXTURE_2D,ve,Ge,rt[0].width,rt[0].height);for(let $=0,te=rt.length;$<te;$++)Re=rt[$],E.format!==Ri?pe!==null?qe?N&&t.compressedTexSubImage2D(i.TEXTURE_2D,$,0,0,Re.width,Re.height,pe,Re.data):t.compressedTexImage2D(i.TEXTURE_2D,$,Ge,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?N&&t.texSubImage2D(i.TEXTURE_2D,$,0,0,Re.width,Re.height,pe,We,Re.data):t.texImage2D(i.TEXTURE_2D,$,Ge,Re.width,Re.height,0,pe,We,Re.data)}else if(E.isDataArrayTexture)if(qe){if(pt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ve,Ge,le.width,le.height,le.depth),N)if(E.layerUpdates.size>0){const $=Op(le.width,le.height,E.format,E.type);for(const te of E.layerUpdates){const _e=le.data.subarray(te*$/le.data.BYTES_PER_ELEMENT,(te+1)*$/le.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,te,le.width,le.height,1,pe,We,_e)}E.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,pe,We,le.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ge,le.width,le.height,le.depth,0,pe,We,le.data);else if(E.isData3DTexture)qe?(pt&&t.texStorage3D(i.TEXTURE_3D,ve,Ge,le.width,le.height,le.depth),N&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,pe,We,le.data)):t.texImage3D(i.TEXTURE_3D,0,Ge,le.width,le.height,le.depth,0,pe,We,le.data);else if(E.isFramebufferTexture){if(pt)if(qe)t.texStorage2D(i.TEXTURE_2D,ve,Ge,le.width,le.height);else{let $=le.width,te=le.height;for(let _e=0;_e<ve;_e++)t.texImage2D(i.TEXTURE_2D,_e,Ge,$,te,0,pe,We,null),$>>=1,te>>=1}}else if(rt.length>0){if(qe&&pt){const $=Ee(rt[0]);t.texStorage2D(i.TEXTURE_2D,ve,Ge,$.width,$.height)}for(let $=0,te=rt.length;$<te;$++)Re=rt[$],qe?N&&t.texSubImage2D(i.TEXTURE_2D,$,0,0,pe,We,Re):t.texImage2D(i.TEXTURE_2D,$,Ge,pe,We,Re);E.generateMipmaps=!1}else if(qe){if(pt){const $=Ee(le);t.texStorage2D(i.TEXTURE_2D,ve,Ge,$.width,$.height)}N&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,pe,We,le)}else t.texImage2D(i.TEXTURE_2D,0,Ge,pe,We,le);m(E)&&p(j),ge.__version=J.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function ae(R,E,G){if(E.image.length!==6)return;const j=it(R,E),Q=E.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+G);const J=n.get(Q);if(Q.version!==J.__version||j===!0){t.activeTexture(i.TEXTURE0+G);const ge=mt.getPrimaries(mt.workingColorSpace),fe=E.colorSpace===Cr?null:mt.getPrimaries(E.colorSpace),ye=E.colorSpace===Cr||ge===fe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const je=E.isCompressedTexture||E.image[0].isCompressedTexture,le=E.image[0]&&E.image[0].isDataTexture,pe=[];for(let te=0;te<6;te++)!je&&!le?pe[te]=_(E.image[te],!0,r.maxCubemapSize):pe[te]=le?E.image[te].image:E.image[te],pe[te]=ze(E,pe[te]);const We=pe[0],Ge=s.convert(E.format,E.colorSpace),Re=s.convert(E.type),rt=x(E.internalFormat,Ge,Re,E.colorSpace),qe=E.isVideoTexture!==!0,pt=J.__version===void 0||j===!0,N=Q.dataReady;let ve=A(E,We);Fe(i.TEXTURE_CUBE_MAP,E);let $;if(je){qe&&pt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ve,rt,We.width,We.height);for(let te=0;te<6;te++){$=pe[te].mipmaps;for(let _e=0;_e<$.length;_e++){const Me=$[_e];E.format!==Ri?Ge!==null?qe?N&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,_e,0,0,Me.width,Me.height,Ge,Me.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,_e,rt,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qe?N&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,_e,0,0,Me.width,Me.height,Ge,Re,Me.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,_e,rt,Me.width,Me.height,0,Ge,Re,Me.data)}}}else{if($=E.mipmaps,qe&&pt){$.length>0&&ve++;const te=Ee(pe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ve,rt,te.width,te.height)}for(let te=0;te<6;te++)if(le){qe?N&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,pe[te].width,pe[te].height,Ge,Re,pe[te].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,rt,pe[te].width,pe[te].height,0,Ge,Re,pe[te].data);for(let _e=0;_e<$.length;_e++){const Ze=$[_e].image[te].image;qe?N&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,_e+1,0,0,Ze.width,Ze.height,Ge,Re,Ze.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,_e+1,rt,Ze.width,Ze.height,0,Ge,Re,Ze.data)}}else{qe?N&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Ge,Re,pe[te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,rt,Ge,Re,pe[te]);for(let _e=0;_e<$.length;_e++){const Me=$[_e];qe?N&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,_e+1,0,0,Ge,Re,Me.image[te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,_e+1,rt,Ge,Re,Me.image[te])}}}m(E)&&p(i.TEXTURE_CUBE_MAP),J.__version=Q.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function be(R,E,G,j,Q,J){const ge=s.convert(G.format,G.colorSpace),fe=s.convert(G.type),ye=x(G.internalFormat,ge,fe,G.colorSpace),je=n.get(E),le=n.get(G);if(le.__renderTarget=E,!je.__hasExternalTextures){const pe=Math.max(1,E.width>>J),We=Math.max(1,E.height>>J);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?t.texImage3D(Q,J,ye,pe,We,E.depth,0,ge,fe,null):t.texImage2D(Q,J,ye,pe,We,0,ge,fe,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),F(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,Q,le.__webglTexture,0,se(E)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,Q,le.__webglTexture,J),t.bindFramebuffer(i.FRAMEBUFFER,null)}function oe(R,E,G){if(i.bindRenderbuffer(i.RENDERBUFFER,R),E.depthBuffer){const j=E.depthTexture,Q=j&&j.isDepthTexture?j.type:null,J=v(E.stencilBuffer,Q),ge=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=se(E);F(E)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,fe,J,E.width,E.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,fe,J,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,J,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ge,i.RENDERBUFFER,R)}else{const j=E.textures;for(let Q=0;Q<j.length;Q++){const J=j[Q],ge=s.convert(J.format,J.colorSpace),fe=s.convert(J.type),ye=x(J.internalFormat,ge,fe,J.colorSpace),je=se(E);G&&F(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,je,ye,E.width,E.height):F(E)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,je,ye,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,ye,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Le(R,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=n.get(E.depthTexture);j.__renderTarget=E,(!j.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),q(E.depthTexture,0);const Q=j.__webglTexture,J=se(E);if(E.depthTexture.format===ma)F(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0);else if(E.depthTexture.format===Ca)F(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Ne(R){const E=n.get(R),G=R.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==R.depthTexture){const j=R.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),j){const Q=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,j.removeEventListener("dispose",Q)};j.addEventListener("dispose",Q),E.__depthDisposeCallback=Q}E.__boundDepthTexture=j}if(R.depthTexture&&!E.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");Le(E.__webglFramebuffer,R)}else if(G){E.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[j]),E.__webglDepthbuffer[j]===void 0)E.__webglDepthbuffer[j]=i.createRenderbuffer(),oe(E.__webglDepthbuffer[j],R,!1);else{const Q=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=E.__webglDepthbuffer[j];i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,J)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),oe(E.__webglDepthbuffer,R,!1);else{const j=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,Q)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Be(R,E,G){const j=n.get(R);E!==void 0&&be(j.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&Ne(R)}function Ye(R){const E=R.texture,G=n.get(R),j=n.get(E);R.addEventListener("dispose",w);const Q=R.textures,J=R.isWebGLCubeRenderTarget===!0,ge=Q.length>1;if(ge||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=E.version,a.memory.textures++),J){G.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer[fe]=[];for(let ye=0;ye<E.mipmaps.length;ye++)G.__webglFramebuffer[fe][ye]=i.createFramebuffer()}else G.__webglFramebuffer[fe]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer=[];for(let fe=0;fe<E.mipmaps.length;fe++)G.__webglFramebuffer[fe]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(ge)for(let fe=0,ye=Q.length;fe<ye;fe++){const je=n.get(Q[fe]);je.__webglTexture===void 0&&(je.__webglTexture=i.createTexture(),a.memory.textures++)}if(R.samples>0&&F(R)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let fe=0;fe<Q.length;fe++){const ye=Q[fe];G.__webglColorRenderbuffer[fe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[fe]);const je=s.convert(ye.format,ye.colorSpace),le=s.convert(ye.type),pe=x(ye.internalFormat,je,le,ye.colorSpace,R.isXRRenderTarget===!0),We=se(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,We,pe,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,G.__webglColorRenderbuffer[fe])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),oe(G.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(J){t.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),Fe(i.TEXTURE_CUBE_MAP,E);for(let fe=0;fe<6;fe++)if(E.mipmaps&&E.mipmaps.length>0)for(let ye=0;ye<E.mipmaps.length;ye++)be(G.__webglFramebuffer[fe][ye],R,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ye);else be(G.__webglFramebuffer[fe],R,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);m(E)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ge){for(let fe=0,ye=Q.length;fe<ye;fe++){const je=Q[fe],le=n.get(je);t.bindTexture(i.TEXTURE_2D,le.__webglTexture),Fe(i.TEXTURE_2D,je),be(G.__webglFramebuffer,R,je,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,0),m(je)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let fe=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(fe=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(fe,j.__webglTexture),Fe(fe,E),E.mipmaps&&E.mipmaps.length>0)for(let ye=0;ye<E.mipmaps.length;ye++)be(G.__webglFramebuffer[ye],R,E,i.COLOR_ATTACHMENT0,fe,ye);else be(G.__webglFramebuffer,R,E,i.COLOR_ATTACHMENT0,fe,0);m(E)&&p(fe),t.unbindTexture()}R.depthBuffer&&Ne(R)}function ne(R){const E=R.textures;for(let G=0,j=E.length;G<j;G++){const Q=E[G];if(m(Q)){const J=y(R),ge=n.get(Q).__webglTexture;t.bindTexture(J,ge),p(J),t.unbindTexture()}}}const ee=[],L=[];function Ae(R){if(R.samples>0){if(F(R)===!1){const E=R.textures,G=R.width,j=R.height;let Q=i.COLOR_BUFFER_BIT;const J=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ge=n.get(R),fe=E.length>1;if(fe)for(let ye=0;ye<E.length;ye++)t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let ye=0;ye<E.length;ye++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),fe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ge.__webglColorRenderbuffer[ye]);const je=n.get(E[ye]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,je,0)}i.blitFramebuffer(0,0,G,j,0,0,G,j,Q,i.NEAREST),l===!0&&(ee.length=0,L.length=0,ee.push(i.COLOR_ATTACHMENT0+ye),R.depthBuffer&&R.resolveDepthBuffer===!1&&(ee.push(J),L.push(J),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,L)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ee))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),fe)for(let ye=0;ye<E.length;ye++){t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,ge.__webglColorRenderbuffer[ye]);const je=n.get(E[ye]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.TEXTURE_2D,je,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const E=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function se(R){return Math.min(r.maxSamples,R.samples)}function F(R){const E=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function ce(R){const E=a.render.frame;u.get(R)!==E&&(u.set(R,E),R.update())}function ze(R,E){const G=R.colorSpace,j=R.format,Q=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||G!==Ia&&G!==Cr&&(mt.getTransfer(G)===wt?(j!==Ri||Q!==mr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),E}function Ee(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=U,this.setTexture2D=q,this.setTexture2DArray=B,this.setTexture3D=Y,this.setTextureCube=H,this.rebindTextures=Be,this.setupRenderTarget=Ye,this.updateRenderTargetMipmap=ne,this.updateMultisampleRenderTarget=Ae,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=be,this.useMultisampledRTT=F}function Gb(i,e){function t(n,r=Cr){let s;const a=mt.getTransfer(r);if(n===mr)return i.UNSIGNED_BYTE;if(n===Cd)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Rd)return i.UNSIGNED_SHORT_5_5_5_1;if(n===z0)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===F0)return i.BYTE;if(n===k0)return i.SHORT;if(n===Fo)return i.UNSIGNED_SHORT;if(n===Ad)return i.INT;if(n===Ts)return i.UNSIGNED_INT;if(n===lr)return i.FLOAT;if(n===Yo)return i.HALF_FLOAT;if(n===B0)return i.ALPHA;if(n===H0)return i.RGB;if(n===Ri)return i.RGBA;if(n===V0)return i.LUMINANCE;if(n===G0)return i.LUMINANCE_ALPHA;if(n===ma)return i.DEPTH_COMPONENT;if(n===Ca)return i.DEPTH_STENCIL;if(n===W0)return i.RED;if(n===Pd)return i.RED_INTEGER;if(n===X0)return i.RG;if(n===Ld)return i.RG_INTEGER;if(n===Dd)return i.RGBA_INTEGER;if(n===Xl||n===Yl||n===ql||n===$l)if(a===wt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Xl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Yl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ql)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===$l)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Xl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Yl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ql)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===$l)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===vh||n===xh||n===yh||n===Mh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===vh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===xh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===yh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Mh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Sh||n===bh||n===wh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Sh||n===bh)return a===wt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===wh)return a===wt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Eh||n===Th||n===Ah||n===Ch||n===Rh||n===Ph||n===Lh||n===Dh||n===Ih||n===Uh||n===Nh||n===Oh||n===Fh||n===kh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Eh)return a===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Th)return a===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ah)return a===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ch)return a===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Rh)return a===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ph)return a===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Lh)return a===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Dh)return a===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ih)return a===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Uh)return a===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Nh)return a===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Oh)return a===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Fh)return a===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===kh)return a===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Zl||n===zh||n===Bh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Zl)return a===wt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===zh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Bh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Y0||n===Hh||n===Vh||n===Gh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Zl)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Hh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Vh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Gh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Aa?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class Wb extends Nn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class xt extends gn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Xb={type:"move"};class Eu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Xb)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new xt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Yb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qb=`
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

}`;class $b{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new Bn,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Yi({vertexShader:Yb,fragmentShader:qb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Lt(new Oa(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Zb extends Ua{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,g=null;const _=new $b,m=t.getContextAttributes();let p=null,y=null;const x=[],v=[],A=new me;let b=null;const w=new Nn;w.viewport=new Tt;const C=new Nn;C.viewport=new Tt;const S=[w,C],M=new Wb;let P=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ae=x[Z];return ae===void 0&&(ae=new Eu,x[Z]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(Z){let ae=x[Z];return ae===void 0&&(ae=new Eu,x[Z]=ae),ae.getGripSpace()},this.getHand=function(Z){let ae=x[Z];return ae===void 0&&(ae=new Eu,x[Z]=ae),ae.getHandSpace()};function k(Z){const ae=v.indexOf(Z.inputSource);if(ae===-1)return;const be=x[ae];be!==void 0&&(be.update(Z.inputSource,Z.frame,c||a),be.dispatchEvent({type:Z.type,data:Z.inputSource}))}function V(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",V),r.removeEventListener("inputsourceschange",q);for(let Z=0;Z<x.length;Z++){const ae=v[Z];ae!==null&&(v[Z]=null,x[Z].disconnect(ae))}P=null,U=null,_.reset(),e.setRenderTarget(p),d=null,f=null,h=null,r=null,y=null,it.stop(),n.isPresenting=!1,e.setPixelRatio(b),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",V),r.addEventListener("inputsourceschange",q),m.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(A),r.renderState.layers===void 0){const ae={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,ae),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new As(d.framebufferWidth,d.framebufferHeight,{format:Ri,type:mr,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ae=null,be=null,oe=null;m.depth&&(oe=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=m.stencil?Ca:ma,be=m.stencil?Aa:Ts);const Le={colorFormat:t.RGBA8,depthFormat:oe,scaleFactor:s};h=new XRWebGLBinding(r,t),f=h.createProjectionLayer(Le),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new As(f.textureWidth,f.textureHeight,{format:Ri,type:mr,depthTexture:new lg(f.textureWidth,f.textureHeight,be,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),it.setContext(r),it.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function q(Z){for(let ae=0;ae<Z.removed.length;ae++){const be=Z.removed[ae],oe=v.indexOf(be);oe>=0&&(v[oe]=null,x[oe].disconnect(be))}for(let ae=0;ae<Z.added.length;ae++){const be=Z.added[ae];let oe=v.indexOf(be);if(oe===-1){for(let Ne=0;Ne<x.length;Ne++)if(Ne>=v.length){v.push(be),oe=Ne;break}else if(v[Ne]===null){v[Ne]=be,oe=Ne;break}if(oe===-1)break}const Le=x[oe];Le&&Le.connect(be)}}const B=new I,Y=new I;function H(Z,ae,be){B.setFromMatrixPosition(ae.matrixWorld),Y.setFromMatrixPosition(be.matrixWorld);const oe=B.distanceTo(Y),Le=ae.projectionMatrix.elements,Ne=be.projectionMatrix.elements,Be=Le[14]/(Le[10]-1),Ye=Le[14]/(Le[10]+1),ne=(Le[9]+1)/Le[5],ee=(Le[9]-1)/Le[5],L=(Le[8]-1)/Le[0],Ae=(Ne[8]+1)/Ne[0],se=Be*L,F=Be*Ae,ce=oe/(-L+Ae),ze=ce*-L;if(ae.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(ze),Z.translateZ(ce),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Le[10]===-1)Z.projectionMatrix.copy(ae.projectionMatrix),Z.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{const Ee=Be+ce,R=Ye+ce,E=se-ze,G=F+(oe-ze),j=ne*Ye/R*Ee,Q=ee*Ye/R*Ee;Z.projectionMatrix.makePerspective(E,G,j,Q,Ee,R),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function re(Z,ae){ae===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ae.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;let ae=Z.near,be=Z.far;_.texture!==null&&(_.depthNear>0&&(ae=_.depthNear),_.depthFar>0&&(be=_.depthFar)),M.near=C.near=w.near=ae,M.far=C.far=w.far=be,(P!==M.near||U!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),P=M.near,U=M.far),w.layers.mask=Z.layers.mask|2,C.layers.mask=Z.layers.mask|4,M.layers.mask=w.layers.mask|C.layers.mask;const oe=Z.parent,Le=M.cameras;re(M,oe);for(let Ne=0;Ne<Le.length;Ne++)re(Le[Ne],oe);Le.length===2?H(M,w,C):M.projectionMatrix.copy(w.projectionMatrix),D(Z,M,oe)};function D(Z,ae,be){be===null?Z.matrix.copy(ae.matrixWorld):(Z.matrix.copy(be.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ae.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ae.projectionMatrix),Z.projectionMatrixInverse.copy(ae.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=ko*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(Z){l=Z,f!==null&&(f.fixedFoveation=Z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Z)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let ue=null;function Fe(Z,ae){if(u=ae.getViewerPose(c||a),g=ae,u!==null){const be=u.views;d!==null&&(e.setRenderTargetFramebuffer(y,d.framebuffer),e.setRenderTarget(y));let oe=!1;be.length!==M.cameras.length&&(M.cameras.length=0,oe=!0);for(let Ne=0;Ne<be.length;Ne++){const Be=be[Ne];let Ye=null;if(d!==null)Ye=d.getViewport(Be);else{const ee=h.getViewSubImage(f,Be);Ye=ee.viewport,Ne===0&&(e.setRenderTargetTextures(y,ee.colorTexture,f.ignoreDepthValues?void 0:ee.depthStencilTexture),e.setRenderTarget(y))}let ne=S[Ne];ne===void 0&&(ne=new Nn,ne.layers.enable(Ne),ne.viewport=new Tt,S[Ne]=ne),ne.matrix.fromArray(Be.transform.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.projectionMatrix.fromArray(Be.projectionMatrix),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert(),ne.viewport.set(Ye.x,Ye.y,Ye.width,Ye.height),Ne===0&&(M.matrix.copy(ne.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),oe===!0&&M.cameras.push(ne)}const Le=r.enabledFeatures;if(Le&&Le.includes("depth-sensing")){const Ne=h.getDepthInformation(be[0]);Ne&&Ne.isValid&&Ne.texture&&_.init(e,Ne,r.renderState)}}for(let be=0;be<x.length;be++){const oe=v[be],Le=x[be];oe!==null&&Le!==void 0&&Le.update(oe,ae,c||a)}ue&&ue(Z,ae),ae.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ae}),g=null}const it=new ag;it.setAnimationLoop(Fe),this.setAnimationLoop=function(Z){ue=Z},this.dispose=function(){}}}const es=new Xi,Kb=new kt;function Jb(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,ig(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,y,x,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,v)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,y,x):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===zn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===zn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=e.get(p),x=y.envMap,v=y.envMapRotation;x&&(m.envMap.value=x,es.copy(v),es.x*=-1,es.y*=-1,es.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(es.y*=-1,es.z*=-1),m.envMapRotation.value.setFromMatrix4(Kb.makeRotationFromEuler(es)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=x*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===zn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function jb(i,e,t,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,x){const v=x.program;n.uniformBlockBinding(y,v)}function c(y,x){let v=r[y.id];v===void 0&&(g(y),v=u(y),r[y.id]=v,y.addEventListener("dispose",m));const A=x.program;n.updateUBOMapping(y,A);const b=e.render.frame;s[y.id]!==b&&(f(y),s[y.id]=b)}function u(y){const x=h();y.__bindingPointIndex=x;const v=i.createBuffer(),A=y.__size,b=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,A,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,v),v}function h(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const x=r[y.id],v=y.uniforms,A=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let b=0,w=v.length;b<w;b++){const C=Array.isArray(v[b])?v[b]:[v[b]];for(let S=0,M=C.length;S<M;S++){const P=C[S];if(d(P,b,S,A)===!0){const U=P.__offset,k=Array.isArray(P.value)?P.value:[P.value];let V=0;for(let q=0;q<k.length;q++){const B=k[q],Y=_(B);typeof B=="number"||typeof B=="boolean"?(P.__data[0]=B,i.bufferSubData(i.UNIFORM_BUFFER,U+V,P.__data)):B.isMatrix3?(P.__data[0]=B.elements[0],P.__data[1]=B.elements[1],P.__data[2]=B.elements[2],P.__data[3]=0,P.__data[4]=B.elements[3],P.__data[5]=B.elements[4],P.__data[6]=B.elements[5],P.__data[7]=0,P.__data[8]=B.elements[6],P.__data[9]=B.elements[7],P.__data[10]=B.elements[8],P.__data[11]=0):(B.toArray(P.__data,V),V+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,U,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(y,x,v,A){const b=y.value,w=x+"_"+v;if(A[w]===void 0)return typeof b=="number"||typeof b=="boolean"?A[w]=b:A[w]=b.clone(),!0;{const C=A[w];if(typeof b=="number"||typeof b=="boolean"){if(C!==b)return A[w]=b,!0}else if(C.equals(b)===!1)return C.copy(b),!0}return!1}function g(y){const x=y.uniforms;let v=0;const A=16;for(let w=0,C=x.length;w<C;w++){const S=Array.isArray(x[w])?x[w]:[x[w]];for(let M=0,P=S.length;M<P;M++){const U=S[M],k=Array.isArray(U.value)?U.value:[U.value];for(let V=0,q=k.length;V<q;V++){const B=k[V],Y=_(B),H=v%A,re=H%Y.boundary,D=H+re;v+=re,D!==0&&A-D<Y.storage&&(v+=A-D),U.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=v,v+=Y.storage}}}const b=v%A;return b>0&&(v+=A-b),y.__size=v,y.__cache={},this}function _(y){const x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function m(y){const x=y.target;x.removeEventListener("dispose",m);const v=a.indexOf(x.__bindingPointIndex);a.splice(v,1),i.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function p(){for(const y in r)i.deleteBuffer(r[y]);a=[],r={},s={}}return{bind:l,update:c,dispose:p}}class Qb{constructor(e={}){const{canvas:t=Hx(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const y=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Gn,this.toneMapping=Br,this.toneMappingExposure=1;const v=this;let A=!1,b=0,w=0,C=null,S=-1,M=null;const P=new Tt,U=new Tt;let k=null;const V=new tt(0);let q=0,B=t.width,Y=t.height,H=1,re=null,D=null;const ue=new Tt(0,0,B,Y),Fe=new Tt(0,0,B,Y);let it=!1;const Z=new Ud;let ae=!1,be=!1;const oe=new kt,Le=new kt,Ne=new I,Be=new Tt,Ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ne=!1;function ee(){return C===null?H:1}let L=n;function Ae(T,O){return t.getContext(T,O)}try{const T={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Td}`),t.addEventListener("webglcontextlost",te,!1),t.addEventListener("webglcontextrestored",_e,!1),t.addEventListener("webglcontextcreationerror",Me,!1),L===null){const O="webgl2";if(L=Ae(O,T),L===null)throw Ae(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let se,F,ce,ze,Ee,R,E,G,j,Q,J,ge,fe,ye,je,le,pe,We,Ge,Re,rt,qe,pt,N;function ve(){se=new rS(L),se.init(),qe=new Gb(L,se),F=new j1(L,se,e,qe),ce=new Bb(L,se),F.reverseDepthBuffer&&f&&ce.buffers.depth.setReversed(!0),ze=new oS(L),Ee=new Eb,R=new Vb(L,se,ce,Ee,F,qe,ze),E=new eS(v),G=new iS(v),j=new py(L),pt=new K1(L,j),Q=new sS(L,j,ze,pt),J=new cS(L,Q,j,ze),Ge=new lS(L,F,R),le=new Q1(Ee),ge=new wb(v,E,G,se,F,pt,le),fe=new Jb(v,Ee),ye=new Ab,je=new Ib(se),We=new Z1(v,E,G,ce,J,d,l),pe=new kb(v,J,F),N=new jb(L,ze,F,ce),Re=new J1(L,se,ze),rt=new aS(L,se,ze),ze.programs=ge.programs,v.capabilities=F,v.extensions=se,v.properties=Ee,v.renderLists=ye,v.shadowMap=pe,v.state=ce,v.info=ze}ve();const $=new Zb(v,L);this.xr=$,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const T=se.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=se.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(T){T!==void 0&&(H=T,this.setSize(B,Y,!1))},this.getSize=function(T){return T.set(B,Y)},this.setSize=function(T,O,W=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=T,Y=O,t.width=Math.floor(T*H),t.height=Math.floor(O*H),W===!0&&(t.style.width=T+"px",t.style.height=O+"px"),this.setViewport(0,0,T,O)},this.getDrawingBufferSize=function(T){return T.set(B*H,Y*H).floor()},this.setDrawingBufferSize=function(T,O,W){B=T,Y=O,H=W,t.width=Math.floor(T*W),t.height=Math.floor(O*W),this.setViewport(0,0,T,O)},this.getCurrentViewport=function(T){return T.copy(P)},this.getViewport=function(T){return T.copy(ue)},this.setViewport=function(T,O,W,X){T.isVector4?ue.set(T.x,T.y,T.z,T.w):ue.set(T,O,W,X),ce.viewport(P.copy(ue).multiplyScalar(H).round())},this.getScissor=function(T){return T.copy(Fe)},this.setScissor=function(T,O,W,X){T.isVector4?Fe.set(T.x,T.y,T.z,T.w):Fe.set(T,O,W,X),ce.scissor(U.copy(Fe).multiplyScalar(H).round())},this.getScissorTest=function(){return it},this.setScissorTest=function(T){ce.setScissorTest(it=T)},this.setOpaqueSort=function(T){re=T},this.setTransparentSort=function(T){D=T},this.getClearColor=function(T){return T.copy(We.getClearColor())},this.setClearColor=function(){We.setClearColor.apply(We,arguments)},this.getClearAlpha=function(){return We.getClearAlpha()},this.setClearAlpha=function(){We.setClearAlpha.apply(We,arguments)},this.clear=function(T=!0,O=!0,W=!0){let X=0;if(T){let z=!1;if(C!==null){const he=C.texture.format;z=he===Dd||he===Ld||he===Pd}if(z){const he=C.texture.type,de=he===mr||he===Ts||he===Fo||he===Aa||he===Cd||he===Rd,Se=We.getClearColor(),Pe=We.getClearAlpha(),Ke=Se.r,et=Se.g,Ue=Se.b;de?(g[0]=Ke,g[1]=et,g[2]=Ue,g[3]=Pe,L.clearBufferuiv(L.COLOR,0,g)):(_[0]=Ke,_[1]=et,_[2]=Ue,_[3]=Pe,L.clearBufferiv(L.COLOR,0,_))}else X|=L.COLOR_BUFFER_BIT}O&&(X|=L.DEPTH_BUFFER_BIT),W&&(X|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",te,!1),t.removeEventListener("webglcontextrestored",_e,!1),t.removeEventListener("webglcontextcreationerror",Me,!1),ye.dispose(),je.dispose(),Ee.dispose(),E.dispose(),G.dispose(),J.dispose(),pt.dispose(),N.dispose(),ge.dispose(),$.dispose(),$.removeEventListener("sessionstart",we),$.removeEventListener("sessionend",Qe),ke.stop()};function te(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function _e(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const T=ze.autoReset,O=pe.enabled,W=pe.autoUpdate,X=pe.needsUpdate,z=pe.type;ve(),ze.autoReset=T,pe.enabled=O,pe.autoUpdate=W,pe.needsUpdate=X,pe.type=z}function Me(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Ze(T){const O=T.target;O.removeEventListener("dispose",Ze),_t(O)}function _t(T){Wt(T),Ee.remove(T)}function Wt(T){const O=Ee.get(T).programs;O!==void 0&&(O.forEach(function(W){ge.releaseProgram(W)}),T.isShaderMaterial&&ge.releaseShaderCache(T))}this.renderBufferDirect=function(T,O,W,X,z,he){O===null&&(O=Ye);const de=z.isMesh&&z.matrixWorld.determinant()<0,Se=Zn(T,O,W,X,z);ce.setMaterial(X,de);let Pe=W.index,Ke=1;if(X.wireframe===!0){if(Pe=Q.getWireframeAttribute(W),Pe===void 0)return;Ke=2}const et=W.drawRange,Ue=W.attributes.position;let nt=et.start*Ke,vt=(et.start+et.count)*Ke;he!==null&&(nt=Math.max(nt,he.start*Ke),vt=Math.min(vt,(he.start+he.count)*Ke)),Pe!==null?(nt=Math.max(nt,0),vt=Math.min(vt,Pe.count)):Ue!=null&&(nt=Math.max(nt,0),vt=Math.min(vt,Ue.count));const Mt=vt-nt;if(Mt<0||Mt===1/0)return;pt.setup(z,X,Se,W,Pe);let jt,St=Re;if(Pe!==null&&(jt=j.get(Pe),St=rt,St.setIndex(jt)),z.isMesh)X.wireframe===!0?(ce.setLineWidth(X.wireframeLinewidth*ee()),St.setMode(L.LINES)):St.setMode(L.TRIANGLES);else if(z.isLine){let He=X.linewidth;He===void 0&&(He=1),ce.setLineWidth(He*ee()),z.isLineSegments?St.setMode(L.LINES):z.isLineLoop?St.setMode(L.LINE_LOOP):St.setMode(L.LINE_STRIP)}else z.isPoints?St.setMode(L.POINTS):z.isSprite&&St.setMode(L.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)St.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(se.get("WEBGL_multi_draw"))St.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const He=z._multiDrawStarts,Ki=z._multiDrawCounts,bt=z._multiDrawCount,Mi=Pe?j.get(Pe).bytesPerElement:1,Us=Ee.get(X).currentProgram.getUniforms();for(let Kn=0;Kn<bt;Kn++)Us.setValue(L,"_gl_DrawID",Kn),St.render(He[Kn]/Mi,Ki[Kn])}else if(z.isInstancedMesh)St.renderInstances(nt,Mt,z.count);else if(W.isInstancedBufferGeometry){const He=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Ki=Math.min(W.instanceCount,He);St.renderInstances(nt,Mt,Ki)}else St.render(nt,Mt)};function Ce(T,O,W){T.transparent===!0&&T.side===pn&&T.forceSinglePass===!1?(T.side=zn,T.needsUpdate=!0,At(T,O,W),T.side=Wr,T.needsUpdate=!0,At(T,O,W),T.side=pn):At(T,O,W)}this.compile=function(T,O,W=null){W===null&&(W=T),p=je.get(W),p.init(O),x.push(p),W.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),T!==W&&T.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),p.setupLights();const X=new Set;return T.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const he=z.material;if(he)if(Array.isArray(he))for(let de=0;de<he.length;de++){const Se=he[de];Ce(Se,W,z),X.add(Se)}else Ce(he,W,z),X.add(he)}),x.pop(),p=null,X},this.compileAsync=function(T,O,W=null){const X=this.compile(T,O,W);return new Promise(z=>{function he(){if(X.forEach(function(de){Ee.get(de).currentProgram.isReady()&&X.delete(de)}),X.size===0){z(T);return}setTimeout(he,10)}se.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let Oe=null;function st(T){Oe&&Oe(T)}function we(){ke.stop()}function Qe(){ke.start()}const ke=new ag;ke.setAnimationLoop(st),typeof self<"u"&&ke.setContext(self),this.setAnimationLoop=function(T){Oe=T,$.setAnimationLoop(T),T===null?ke.stop():ke.start()},$.addEventListener("sessionstart",we),$.addEventListener("sessionend",Qe),this.render=function(T,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(O),O=$.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,O,C),p=je.get(T,x.length),p.init(O),x.push(p),Le.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Z.setFromProjectionMatrix(Le),be=this.localClippingEnabled,ae=le.init(this.clippingPlanes,be),m=ye.get(T,y.length),m.init(),y.push(m),$.enabled===!0&&$.isPresenting===!0){const he=v.xr.getDepthSensingMesh();he!==null&&Je(he,O,-1/0,v.sortObjects)}Je(T,O,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(re,D),ne=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,ne&&We.addToRenderList(m,T),this.info.render.frame++,ae===!0&&le.beginShadows();const W=p.state.shadowsArray;pe.render(W,T,O),ae===!0&&le.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=m.opaque,z=m.transmissive;if(p.setupLights(),O.isArrayCamera){const he=O.cameras;if(z.length>0)for(let de=0,Se=he.length;de<Se;de++){const Pe=he[de];ct(X,z,T,Pe)}ne&&We.render(T);for(let de=0,Se=he.length;de<Se;de++){const Pe=he[de];$t(m,T,Pe,Pe.viewport)}}else z.length>0&&ct(X,z,T,O),ne&&We.render(T),$t(m,T,O);C!==null&&(R.updateMultisampleRenderTarget(C),R.updateRenderTargetMipmap(C)),T.isScene===!0&&T.onAfterRender(v,T,O),pt.resetDefaultState(),S=-1,M=null,x.pop(),x.length>0?(p=x[x.length-1],ae===!0&&le.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function Je(T,O,W,X){if(T.visible===!1)return;if(T.layers.test(O.layers)){if(T.isGroup)W=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(O);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Z.intersectsSprite(T)){X&&Be.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Le);const de=J.update(T),Se=T.material;Se.visible&&m.push(T,de,Se,W,Be.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Z.intersectsObject(T))){const de=J.update(T),Se=T.material;if(X&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Be.copy(T.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),Be.copy(de.boundingSphere.center)),Be.applyMatrix4(T.matrixWorld).applyMatrix4(Le)),Array.isArray(Se)){const Pe=de.groups;for(let Ke=0,et=Pe.length;Ke<et;Ke++){const Ue=Pe[Ke],nt=Se[Ue.materialIndex];nt&&nt.visible&&m.push(T,de,nt,W,Be.z,Ue)}}else Se.visible&&m.push(T,de,Se,W,Be.z,null)}}const he=T.children;for(let de=0,Se=he.length;de<Se;de++)Je(he[de],O,W,X)}function $t(T,O,W,X){const z=T.opaque,he=T.transmissive,de=T.transparent;p.setupLightsView(W),ae===!0&&le.setGlobalState(v.clippingPlanes,W),X&&ce.viewport(P.copy(X)),z.length>0&&Dt(z,O,W),he.length>0&&Dt(he,O,W),de.length>0&&Dt(de,O,W),ce.buffers.depth.setTest(!0),ce.buffers.depth.setMask(!0),ce.buffers.color.setMask(!0),ce.setPolygonOffset(!1)}function ct(T,O,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[X.id]===void 0&&(p.state.transmissionRenderTarget[X.id]=new As(1,1,{generateMipmaps:!0,type:se.has("EXT_color_buffer_half_float")||se.has("EXT_color_buffer_float")?Yo:mr,minFilter:ds,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:mt.workingColorSpace}));const he=p.state.transmissionRenderTarget[X.id],de=X.viewport||P;he.setSize(de.z,de.w);const Se=v.getRenderTarget();v.setRenderTarget(he),v.getClearColor(V),q=v.getClearAlpha(),q<1&&v.setClearColor(16777215,.5),v.clear(),ne&&We.render(W);const Pe=v.toneMapping;v.toneMapping=Br;const Ke=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),p.setupLightsView(X),ae===!0&&le.setGlobalState(v.clippingPlanes,X),Dt(T,W,X),R.updateMultisampleRenderTarget(he),R.updateRenderTargetMipmap(he),se.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let Ue=0,nt=O.length;Ue<nt;Ue++){const vt=O[Ue],Mt=vt.object,jt=vt.geometry,St=vt.material,He=vt.group;if(St.side===pn&&Mt.layers.test(X.layers)){const Ki=St.side;St.side=zn,St.needsUpdate=!0,nn(Mt,W,X,jt,St,He),St.side=Ki,St.needsUpdate=!0,et=!0}}et===!0&&(R.updateMultisampleRenderTarget(he),R.updateRenderTargetMipmap(he))}v.setRenderTarget(Se),v.setClearColor(V,q),Ke!==void 0&&(X.viewport=Ke),v.toneMapping=Pe}function Dt(T,O,W){const X=O.isScene===!0?O.overrideMaterial:null;for(let z=0,he=T.length;z<he;z++){const de=T[z],Se=de.object,Pe=de.geometry,Ke=X===null?de.material:X,et=de.group;Se.layers.test(W.layers)&&nn(Se,O,W,Pe,Ke,et)}}function nn(T,O,W,X,z,he){T.onBeforeRender(v,O,W,X,z,he),T.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),z.onBeforeRender(v,O,W,X,T,he),z.transparent===!0&&z.side===pn&&z.forceSinglePass===!1?(z.side=zn,z.needsUpdate=!0,v.renderBufferDirect(W,O,X,z,T,he),z.side=Wr,z.needsUpdate=!0,v.renderBufferDirect(W,O,X,z,T,he),z.side=pn):v.renderBufferDirect(W,O,X,z,T,he),T.onAfterRender(v,O,W,X,z,he)}function At(T,O,W){O.isScene!==!0&&(O=Ye);const X=Ee.get(T),z=p.state.lights,he=p.state.shadowsArray,de=z.state.version,Se=ge.getParameters(T,z.state,he,O,W),Pe=ge.getProgramCacheKey(Se);let Ke=X.programs;X.environment=T.isMeshStandardMaterial?O.environment:null,X.fog=O.fog,X.envMap=(T.isMeshStandardMaterial?G:E).get(T.envMap||X.environment),X.envMapRotation=X.environment!==null&&T.envMap===null?O.environmentRotation:T.envMapRotation,Ke===void 0&&(T.addEventListener("dispose",Ze),Ke=new Map,X.programs=Ke);let et=Ke.get(Pe);if(et!==void 0){if(X.currentProgram===et&&X.lightsStateVersion===de)return yt(T,Se),et}else Se.uniforms=ge.getUniforms(T),T.onBeforeCompile(Se,v),et=ge.acquireProgram(Se,Pe),Ke.set(Pe,et),X.uniforms=Se.uniforms;const Ue=X.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ue.clippingPlanes=le.uniform),yt(T,Se),X.needsLights=An(T),X.lightsStateVersion=de,X.needsLights&&(Ue.ambientLightColor.value=z.state.ambient,Ue.lightProbe.value=z.state.probe,Ue.directionalLights.value=z.state.directional,Ue.directionalLightShadows.value=z.state.directionalShadow,Ue.spotLights.value=z.state.spot,Ue.spotLightShadows.value=z.state.spotShadow,Ue.rectAreaLights.value=z.state.rectArea,Ue.ltc_1.value=z.state.rectAreaLTC1,Ue.ltc_2.value=z.state.rectAreaLTC2,Ue.pointLights.value=z.state.point,Ue.pointLightShadows.value=z.state.pointShadow,Ue.hemisphereLights.value=z.state.hemi,Ue.directionalShadowMap.value=z.state.directionalShadowMap,Ue.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Ue.spotShadowMap.value=z.state.spotShadowMap,Ue.spotLightMatrix.value=z.state.spotLightMatrix,Ue.spotLightMap.value=z.state.spotLightMap,Ue.pointShadowMap.value=z.state.pointShadowMap,Ue.pointShadowMatrix.value=z.state.pointShadowMatrix),X.currentProgram=et,X.uniformsList=null,et}function Ct(T){if(T.uniformsList===null){const O=T.currentProgram.getUniforms();T.uniformsList=Kl.seqWithValue(O.seq,T.uniforms)}return T.uniformsList}function yt(T,O){const W=Ee.get(T);W.outputColorSpace=O.outputColorSpace,W.batching=O.batching,W.batchingColor=O.batchingColor,W.instancing=O.instancing,W.instancingColor=O.instancingColor,W.instancingMorph=O.instancingMorph,W.skinning=O.skinning,W.morphTargets=O.morphTargets,W.morphNormals=O.morphNormals,W.morphColors=O.morphColors,W.morphTargetsCount=O.morphTargetsCount,W.numClippingPlanes=O.numClippingPlanes,W.numIntersection=O.numClipIntersection,W.vertexAlphas=O.vertexAlphas,W.vertexTangents=O.vertexTangents,W.toneMapping=O.toneMapping}function Zn(T,O,W,X,z){O.isScene!==!0&&(O=Ye),R.resetTextureUnits();const he=O.fog,de=X.isMeshStandardMaterial?O.environment:null,Se=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Ia,Pe=(X.isMeshStandardMaterial?G:E).get(X.envMap||de),Ke=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,et=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Ue=!!W.morphAttributes.position,nt=!!W.morphAttributes.normal,vt=!!W.morphAttributes.color;let Mt=Br;X.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Mt=v.toneMapping);const jt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,St=jt!==void 0?jt.length:0,He=Ee.get(X),Ki=p.state.lights;if(ae===!0&&(be===!0||T!==M)){const li=T===M&&X.id===S;le.setState(X,T,li)}let bt=!1;X.version===He.__version?(He.needsLights&&He.lightsStateVersion!==Ki.state.version||He.outputColorSpace!==Se||z.isBatchedMesh&&He.batching===!1||!z.isBatchedMesh&&He.batching===!0||z.isBatchedMesh&&He.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&He.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&He.instancing===!1||!z.isInstancedMesh&&He.instancing===!0||z.isSkinnedMesh&&He.skinning===!1||!z.isSkinnedMesh&&He.skinning===!0||z.isInstancedMesh&&He.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&He.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&He.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&He.instancingMorph===!1&&z.morphTexture!==null||He.envMap!==Pe||X.fog===!0&&He.fog!==he||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==le.numPlanes||He.numIntersection!==le.numIntersection)||He.vertexAlphas!==Ke||He.vertexTangents!==et||He.morphTargets!==Ue||He.morphNormals!==nt||He.morphColors!==vt||He.toneMapping!==Mt||He.morphTargetsCount!==St)&&(bt=!0):(bt=!0,He.__version=X.version);let Mi=He.currentProgram;bt===!0&&(Mi=At(X,O,z));let Us=!1,Kn=!1,Va=!1;const Nt=Mi.getUniforms(),Ii=He.uniforms;if(ce.useProgram(Mi.program)&&(Us=!0,Kn=!0,Va=!0),X.id!==S&&(S=X.id,Kn=!0),Us||M!==T){ce.buffers.depth.getReversed()?(oe.copy(T.projectionMatrix),Gx(oe),Wx(oe),Nt.setValue(L,"projectionMatrix",oe)):Nt.setValue(L,"projectionMatrix",T.projectionMatrix),Nt.setValue(L,"viewMatrix",T.matrixWorldInverse);const vr=Nt.map.cameraPosition;vr!==void 0&&vr.setValue(L,Ne.setFromMatrixPosition(T.matrixWorld)),F.logarithmicDepthBuffer&&Nt.setValue(L,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Nt.setValue(L,"isOrthographic",T.isOrthographicCamera===!0),M!==T&&(M=T,Kn=!0,Va=!0)}if(z.isSkinnedMesh){Nt.setOptional(L,z,"bindMatrix"),Nt.setOptional(L,z,"bindMatrixInverse");const li=z.skeleton;li&&(li.boneTexture===null&&li.computeBoneTexture(),Nt.setValue(L,"boneTexture",li.boneTexture,R))}z.isBatchedMesh&&(Nt.setOptional(L,z,"batchingTexture"),Nt.setValue(L,"batchingTexture",z._matricesTexture,R),Nt.setOptional(L,z,"batchingIdTexture"),Nt.setValue(L,"batchingIdTexture",z._indirectTexture,R),Nt.setOptional(L,z,"batchingColorTexture"),z._colorsTexture!==null&&Nt.setValue(L,"batchingColorTexture",z._colorsTexture,R));const Ga=W.morphAttributes;if((Ga.position!==void 0||Ga.normal!==void 0||Ga.color!==void 0)&&Ge.update(z,W,Mi),(Kn||He.receiveShadow!==z.receiveShadow)&&(He.receiveShadow=z.receiveShadow,Nt.setValue(L,"receiveShadow",z.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(Ii.envMap.value=Pe,Ii.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&O.environment!==null&&(Ii.envMapIntensity.value=O.environmentIntensity),Kn&&(Nt.setValue(L,"toneMappingExposure",v.toneMappingExposure),He.needsLights&&Ut(Ii,Va),he&&X.fog===!0&&fe.refreshFogUniforms(Ii,he),fe.refreshMaterialUniforms(Ii,X,H,Y,p.state.transmissionRenderTarget[T.id]),Kl.upload(L,Ct(He),Ii,R)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Kl.upload(L,Ct(He),Ii,R),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Nt.setValue(L,"center",z.center),Nt.setValue(L,"modelViewMatrix",z.modelViewMatrix),Nt.setValue(L,"normalMatrix",z.normalMatrix),Nt.setValue(L,"modelMatrix",z.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const li=X.uniformsGroups;for(let vr=0,xr=li.length;vr<xr;vr++){const rf=li[vr];N.update(rf,Mi),N.bind(rf,Mi)}}return Mi}function Ut(T,O){T.ambientLightColor.needsUpdate=O,T.lightProbe.needsUpdate=O,T.directionalLights.needsUpdate=O,T.directionalLightShadows.needsUpdate=O,T.pointLights.needsUpdate=O,T.pointLightShadows.needsUpdate=O,T.spotLights.needsUpdate=O,T.spotLightShadows.needsUpdate=O,T.rectAreaLights.needsUpdate=O,T.hemisphereLights.needsUpdate=O}function An(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(T,O,W){Ee.get(T.texture).__webglTexture=O,Ee.get(T.depthTexture).__webglTexture=W;const X=Ee.get(T);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=W===void 0,X.__autoAllocateDepthBuffer||se.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,O){const W=Ee.get(T);W.__webglFramebuffer=O,W.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(T,O=0,W=0){C=T,b=O,w=W;let X=!0,z=null,he=!1,de=!1;if(T){const Pe=Ee.get(T);if(Pe.__useDefaultFramebuffer!==void 0)ce.bindFramebuffer(L.FRAMEBUFFER,null),X=!1;else if(Pe.__webglFramebuffer===void 0)R.setupRenderTarget(T);else if(Pe.__hasExternalTextures)R.rebindTextures(T,Ee.get(T.texture).__webglTexture,Ee.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Ue=T.depthTexture;if(Pe.__boundDepthTexture!==Ue){if(Ue!==null&&Ee.has(Ue)&&(T.width!==Ue.image.width||T.height!==Ue.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(T)}}const Ke=T.texture;(Ke.isData3DTexture||Ke.isDataArrayTexture||Ke.isCompressedArrayTexture)&&(de=!0);const et=Ee.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(et[O])?z=et[O][W]:z=et[O],he=!0):T.samples>0&&R.useMultisampledRTT(T)===!1?z=Ee.get(T).__webglMultisampledFramebuffer:Array.isArray(et)?z=et[W]:z=et,P.copy(T.viewport),U.copy(T.scissor),k=T.scissorTest}else P.copy(ue).multiplyScalar(H).floor(),U.copy(Fe).multiplyScalar(H).floor(),k=it;if(ce.bindFramebuffer(L.FRAMEBUFFER,z)&&X&&ce.drawBuffers(T,z),ce.viewport(P),ce.scissor(U),ce.setScissorTest(k),he){const Pe=Ee.get(T.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+O,Pe.__webglTexture,W)}else if(de){const Pe=Ee.get(T.texture),Ke=O||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Pe.__webglTexture,W||0,Ke)}S=-1},this.readRenderTargetPixels=function(T,O,W,X,z,he,de){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=Ee.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&de!==void 0&&(Se=Se[de]),Se){ce.bindFramebuffer(L.FRAMEBUFFER,Se);try{const Pe=T.texture,Ke=Pe.format,et=Pe.type;if(!F.textureFormatReadable(Ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!F.textureTypeReadable(et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=T.width-X&&W>=0&&W<=T.height-z&&L.readPixels(O,W,X,z,qe.convert(Ke),qe.convert(et),he)}finally{const Pe=C!==null?Ee.get(C).__webglFramebuffer:null;ce.bindFramebuffer(L.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(T,O,W,X,z,he,de){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=Ee.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&de!==void 0&&(Se=Se[de]),Se){const Pe=T.texture,Ke=Pe.format,et=Pe.type;if(!F.textureFormatReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!F.textureTypeReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=T.width-X&&W>=0&&W<=T.height-z){ce.bindFramebuffer(L.FRAMEBUFFER,Se);const Ue=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Ue),L.bufferData(L.PIXEL_PACK_BUFFER,he.byteLength,L.STREAM_READ),L.readPixels(O,W,X,z,qe.convert(Ke),qe.convert(et),0);const nt=C!==null?Ee.get(C).__webglFramebuffer:null;ce.bindFramebuffer(L.FRAMEBUFFER,nt);const vt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Vx(L,vt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Ue),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,he),L.deleteBuffer(Ue),L.deleteSync(vt),he}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,O=null,W=0){T.isTexture!==!0&&(ao("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,T=arguments[1]);const X=Math.pow(2,-W),z=Math.floor(T.image.width*X),he=Math.floor(T.image.height*X),de=O!==null?O.x:0,Se=O!==null?O.y:0;R.setTexture2D(T,0),L.copyTexSubImage2D(L.TEXTURE_2D,W,0,0,de,Se,z,he),ce.unbindTexture()},this.copyTextureToTexture=function(T,O,W=null,X=null,z=0){T.isTexture!==!0&&(ao("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,T=arguments[1],O=arguments[2],z=arguments[3]||0,W=null);let he,de,Se,Pe,Ke,et,Ue,nt,vt;const Mt=T.isCompressedTexture?T.mipmaps[z]:T.image;W!==null?(he=W.max.x-W.min.x,de=W.max.y-W.min.y,Se=W.isBox3?W.max.z-W.min.z:1,Pe=W.min.x,Ke=W.min.y,et=W.isBox3?W.min.z:0):(he=Mt.width,de=Mt.height,Se=Mt.depth||1,Pe=0,Ke=0,et=0),X!==null?(Ue=X.x,nt=X.y,vt=X.z):(Ue=0,nt=0,vt=0);const jt=qe.convert(O.format),St=qe.convert(O.type);let He;O.isData3DTexture?(R.setTexture3D(O,0),He=L.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(R.setTexture2DArray(O,0),He=L.TEXTURE_2D_ARRAY):(R.setTexture2D(O,0),He=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,O.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,O.unpackAlignment);const Ki=L.getParameter(L.UNPACK_ROW_LENGTH),bt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Mi=L.getParameter(L.UNPACK_SKIP_PIXELS),Us=L.getParameter(L.UNPACK_SKIP_ROWS),Kn=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,Mt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Mt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Pe),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ke),L.pixelStorei(L.UNPACK_SKIP_IMAGES,et);const Va=T.isDataArrayTexture||T.isData3DTexture,Nt=O.isDataArrayTexture||O.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){const Ii=Ee.get(T),Ga=Ee.get(O),li=Ee.get(Ii.__renderTarget),vr=Ee.get(Ga.__renderTarget);ce.bindFramebuffer(L.READ_FRAMEBUFFER,li.__webglFramebuffer),ce.bindFramebuffer(L.DRAW_FRAMEBUFFER,vr.__webglFramebuffer);for(let xr=0;xr<Se;xr++)Va&&L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ee.get(T).__webglTexture,z,et+xr),T.isDepthTexture?(Nt&&L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ee.get(O).__webglTexture,z,vt+xr),L.blitFramebuffer(Pe,Ke,he,de,Ue,nt,he,de,L.DEPTH_BUFFER_BIT,L.NEAREST)):Nt?L.copyTexSubImage3D(He,z,Ue,nt,vt+xr,Pe,Ke,he,de):L.copyTexSubImage2D(He,z,Ue,nt,vt+xr,Pe,Ke,he,de);ce.bindFramebuffer(L.READ_FRAMEBUFFER,null),ce.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Nt?T.isDataTexture||T.isData3DTexture?L.texSubImage3D(He,z,Ue,nt,vt,he,de,Se,jt,St,Mt.data):O.isCompressedArrayTexture?L.compressedTexSubImage3D(He,z,Ue,nt,vt,he,de,Se,jt,Mt.data):L.texSubImage3D(He,z,Ue,nt,vt,he,de,Se,jt,St,Mt):T.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,z,Ue,nt,he,de,jt,St,Mt.data):T.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,z,Ue,nt,Mt.width,Mt.height,jt,Mt.data):L.texSubImage2D(L.TEXTURE_2D,z,Ue,nt,he,de,jt,St,Mt);L.pixelStorei(L.UNPACK_ROW_LENGTH,Ki),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,bt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Mi),L.pixelStorei(L.UNPACK_SKIP_ROWS,Us),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Kn),z===0&&O.generateMipmaps&&L.generateMipmap(He),ce.unbindTexture()},this.copyTextureToTexture3D=function(T,O,W=null,X=null,z=0){return T.isTexture!==!0&&(ao("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,X=arguments[1]||null,T=arguments[2],O=arguments[3],z=arguments[4]||0),ao('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,O,W,X,z)},this.initRenderTarget=function(T){Ee.get(T).__webglFramebuffer===void 0&&R.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?R.setTextureCube(T,0):T.isData3DTexture?R.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?R.setTexture2DArray(T,0):R.setTexture2D(T,0),ce.unbindTexture()},this.resetState=function(){b=0,w=0,C=null,ce.reset(),pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return cr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=mt._getDrawingBufferColorSpace(e),t.unpackColorSpace=mt._getUnpackColorSpace()}}class Tc extends gn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xi,this.environmentIntensity=1,this.environmentRotation=new Xi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class ew extends Na{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new tt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Fp=new kt,qh=new j0,Pl=new wc,Ll=new I;class fg extends gn{constructor(e=new cn,t=new ew){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Pl.copy(n.boundingSphere),Pl.applyMatrix4(r),Pl.radius+=s,e.ray.intersectsSphere(Pl)===!1)return;Fp.copy(r).invert(),qh.copy(e.ray).applyMatrix4(Fp);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let g=f,_=d;g<_;g++){const m=c.getX(g);Ll.fromBufferAttribute(h,m),kp(Ll,m,l,r,e,t,this)}}else{const f=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);for(let g=f,_=d;g<_;g++)Ll.fromBufferAttribute(h,g),kp(Ll,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function kp(i,e,t,n,r,s,a){const o=qh.distanceSqToPoint(i);if(o<t){const l=new I;qh.closestPointToPoint(i,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class tw extends Bn{constructor(e,t,n,r,s,a,o,l,c){super(e,t,n,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class $i{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,r=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let r=0;const s=n.length;let a;t?a=t:a=e*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===a)return r/(s-1);const u=n[r],f=n[r+1]-u,d=(a-u)/f;return(r+d)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),l=t||(a.isVector2?new me:new I);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new I,r=[],s=[],a=[],o=new I,l=new kt;for(let d=0;d<=e;d++){const g=d/e;r[d]=this.getTangentAt(g,new I)}s[0]=new I,a[0]=new I;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),f=Math.abs(r[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(r[d-1],r[d]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(an(r[d-1].dot(r[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(o,g))}a[d].crossVectors(r[d],s[d])}if(t===!0){let d=Math.acos(an(s[0].dot(s[e]),-1,1));d/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(d=-d);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],d*g)),a[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Od extends $i{constructor(e=0,t=0,n=1,r=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new me){const n=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*u-d*h+this.aX,c=f*h+d*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class nw extends Od{constructor(e,t,n,r,s,a){super(e,t,n,n,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Fd(){let i=0,e=0,t=0,n=0;function r(s,a,o,l){i=s,e=o,t=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){r(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,u,h){let f=(a-s)/c-(o-s)/(c+u)+(o-a)/u,d=(o-a)/u-(l-a)/(u+h)+(l-o)/h;f*=u,d*=u,r(a,o,f,d)},calc:function(s){const a=s*s,o=a*s;return i+e*s+t*a+n*o}}}const Dl=new I,Tu=new Fd,Au=new Fd,Cu=new Fd;class pg extends $i{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new I){const n=t,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,u;this.closed||o>0?c=r[(o-1)%s]:(Dl.subVectors(r[0],r[1]).add(r[0]),c=Dl);const h=r[o%s],f=r[(o+1)%s];if(this.closed||o+2<s?u=r[(o+2)%s]:(Dl.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Dl),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),d),_=Math.pow(h.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(u),d);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Tu.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,g,_,m),Au.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,g,_,m),Cu.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,g,_,m)}else this.curveType==="catmullrom"&&(Tu.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),Au.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),Cu.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return n.set(Tu.calc(l),Au.calc(l),Cu.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new I().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function zp(i,e,t,n,r){const s=(n-e)*.5,a=(r-t)*.5,o=i*i,l=i*o;return(2*t-2*n+s+a)*l+(-3*t+3*n-2*s-a)*o+s*i+t}function iw(i,e){const t=1-i;return t*t*e}function rw(i,e){return 2*(1-i)*i*e}function sw(i,e){return i*i*e}function bo(i,e,t,n){return iw(i,e)+rw(i,t)+sw(i,n)}function aw(i,e){const t=1-i;return t*t*t*e}function ow(i,e){const t=1-i;return 3*t*t*i*e}function lw(i,e){return 3*(1-i)*i*i*e}function cw(i,e){return i*i*i*e}function wo(i,e,t,n,r){return aw(i,e)+ow(i,t)+lw(i,n)+cw(i,r)}class mg extends $i{constructor(e=new me,t=new me,n=new me,r=new me){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new me){const n=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(wo(e,r.x,s.x,a.x,o.x),wo(e,r.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class uw extends $i{constructor(e=new I,t=new I,n=new I,r=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new I){const n=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(wo(e,r.x,s.x,a.x,o.x),wo(e,r.y,s.y,a.y,o.y),wo(e,r.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class gg extends $i{constructor(e=new me,t=new me){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new me){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new me){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class hw extends $i{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class _g extends $i{constructor(e=new me,t=new me,n=new me){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new me){const n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(bo(e,r.x,s.x,a.x),bo(e,r.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class vg extends $i{constructor(e=new I,t=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new I){const n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(bo(e,r.x,s.x,a.x),bo(e,r.y,s.y,a.y),bo(e,r.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class xg extends $i{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new me){const n=t,r=this.points,s=(r.length-1)*e,a=Math.floor(s),o=s-a,l=r[a===0?a:a-1],c=r[a],u=r[a>r.length-2?r.length-1:a+1],h=r[a>r.length-3?r.length-1:a+2];return n.set(zp(o,l.x,c.x,u.x,h.x),zp(o,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new me().fromArray(r))}return this}}var fc=Object.freeze({__proto__:null,ArcCurve:nw,CatmullRomCurve3:pg,CubicBezierCurve:mg,CubicBezierCurve3:uw,EllipseCurve:Od,LineCurve:gg,LineCurve3:hw,QuadraticBezierCurve:_g,QuadraticBezierCurve3:vg,SplineCurve:xg});class dw extends $i{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new fc[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const a=r[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const a=s[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(new fc[r.type]().fromJSON(r))}return this}}class $h extends dw{constructor(e){super(),this.type="Path",this.currentPoint=new me,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new gg(this.currentPoint.clone(),new me(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){const s=new _g(this.currentPoint.clone(),new me(e,t),new me(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,a){const o=new mg(this.currentPoint.clone(),new me(e,t),new me(n,r),new me(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new xg(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,r,s,a),this}absarc(e,t,n,r,s,a){return this.absellipse(e,t,n,n,r,s,a),this}ellipse(e,t,n,r,s,a,o,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,r,s,a,o,l),this}absellipse(e,t,n,r,s,a,o,l){const c=new Od(e,t,n,r,s,a,o,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Ac extends cn{constructor(e=[new me(0,-.5),new me(.5,0),new me(0,.5)],t=12,n=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=an(r,0,Math.PI*2);const s=[],a=[],o=[],l=[],c=[],u=1/t,h=new I,f=new me,d=new I,g=new I,_=new I;let m=0,p=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:m=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,d.x=p*1,d.y=-m,d.z=p*0,_.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case e.length-1:l.push(_.x,_.y,_.z);break;default:m=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=_.x,d.y+=_.y,d.z+=_.z,d.normalize(),l.push(d.x,d.y,d.z),_.copy(g)}for(let y=0;y<=t;y++){const x=n+y*u*r,v=Math.sin(x),A=Math.cos(x);for(let b=0;b<=e.length-1;b++){h.x=e[b].x*v,h.y=e[b].y,h.z=e[b].x*A,a.push(h.x,h.y,h.z),f.x=y/t,f.y=b/(e.length-1),o.push(f.x,f.y);const w=l[3*b+0]*v,C=l[3*b+1],S=l[3*b+0]*A;c.push(w,C,S)}}for(let y=0;y<t;y++)for(let x=0;x<e.length-1;x++){const v=x+y*e.length,A=v,b=v+e.length,w=v+e.length+1,C=v+1;s.push(A,b,C),s.push(w,C,b)}this.setIndex(s),this.setAttribute("position",new gt(a,3)),this.setAttribute("uv",new gt(o,2)),this.setAttribute("normal",new gt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ac(e.points,e.segments,e.phiStart,e.phiLength)}}class kd extends Ac{constructor(e=1,t=1,n=4,r=8){const s=new $h;s.absarc(0,-t/2,e,Math.PI*1.5,0),s.absarc(0,t/2,e,0,Math.PI*.5),super(s.getPoints(n),r),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:r}}static fromJSON(e){return new kd(e.radius,e.length,e.capSegments,e.radialSegments)}}class Cc extends cn{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);const s=[],a=[],o=[],l=[],c=new I,u=new me;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=t;h++,f+=3){const d=n+h/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[f]/e+1)/2,u.y=(a[f+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new gt(a,3)),this.setAttribute("normal",new gt(o,3)),this.setAttribute("uv",new gt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cc(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class lt extends cn{constructor(e=1,t=1,n=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],h=[],f=[],d=[];let g=0;const _=[],m=n/2;let p=0;y(),a===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new gt(h,3)),this.setAttribute("normal",new gt(f,3)),this.setAttribute("uv",new gt(d,2));function y(){const v=new I,A=new I;let b=0;const w=(t-e)/n;for(let C=0;C<=s;C++){const S=[],M=C/s,P=M*(t-e)+e;for(let U=0;U<=r;U++){const k=U/r,V=k*l+o,q=Math.sin(V),B=Math.cos(V);A.x=P*q,A.y=-M*n+m,A.z=P*B,h.push(A.x,A.y,A.z),v.set(q,w,B).normalize(),f.push(v.x,v.y,v.z),d.push(k,1-M),S.push(g++)}_.push(S)}for(let C=0;C<r;C++)for(let S=0;S<s;S++){const M=_[S][C],P=_[S+1][C],U=_[S+1][C+1],k=_[S][C+1];(e>0||S!==0)&&(u.push(M,P,k),b+=3),(t>0||S!==s-1)&&(u.push(P,U,k),b+=3)}c.addGroup(p,b,0),p+=b}function x(v){const A=g,b=new me,w=new I;let C=0;const S=v===!0?e:t,M=v===!0?1:-1;for(let U=1;U<=r;U++)h.push(0,m*M,0),f.push(0,M,0),d.push(.5,.5),g++;const P=g;for(let U=0;U<=r;U++){const V=U/r*l+o,q=Math.cos(V),B=Math.sin(V);w.x=S*B,w.y=m*M,w.z=S*q,h.push(w.x,w.y,w.z),f.push(0,M,0),b.x=q*.5+.5,b.y=B*.5*M+.5,d.push(b.x,b.y),g++}for(let U=0;U<r;U++){const k=A+U,V=P+U;v===!0?u.push(V,V+1,k):u.push(V+1,V,k),C+=3}c.addGroup(p,C,v===!0?1:2),p+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Pa extends lt{constructor(e=1,t=1,n=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Pa(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class La extends $h{constructor(e){super(e),this.uuid=Is(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(new $h().fromJSON(r))}return this}}const fw={triangulate:function(i,e,t=2){const n=e&&e.length,r=n?e[0]*t:i.length;let s=yg(i,0,r,t,!0);const a=[];if(!s||s.next===s.prev)return a;let o,l,c,u,h,f,d;if(n&&(s=vw(i,e,s,t)),i.length>80*t){o=c=i[0],l=u=i[1];for(let g=t;g<r;g+=t)h=i[g],f=i[g+1],h<o&&(o=h),f<l&&(l=f),h>c&&(c=h),f>u&&(u=f);d=Math.max(c-o,u-l),d=d!==0?32767/d:0}return zo(s,a,t,o,l,d,0),a}};function yg(i,e,t,n,r){let s,a;if(r===Rw(i,e,t,n)>0)for(s=e;s<t;s+=n)a=Bp(s,i[s],i[s+1],a);else for(s=t-n;s>=e;s-=n)a=Bp(s,i[s],i[s+1],a);return a&&Rc(a,a.next)&&(Ho(a),a=a.next),a}function Cs(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Rc(t,t.next)||Gt(t.prev,t,t.next)===0)){if(Ho(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function zo(i,e,t,n,r,s,a){if(!i)return;!a&&s&&bw(i,n,r,s);let o=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,s?mw(i,n,r,s):pw(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),Ho(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=gw(Cs(i),e,t),zo(i,e,t,n,r,s,2)):a===2&&_w(i,e,t,n,r,s):zo(Cs(i),e,t,n,r,s,1);break}}}function pw(i){const e=i.prev,t=i,n=i.next;if(Gt(e,t,n)>=0)return!1;const r=e.x,s=t.x,a=n.x,o=e.y,l=t.y,c=n.y,u=r<s?r<a?r:a:s<a?s:a,h=o<l?o<c?o:c:l<c?l:c,f=r>s?r>a?r:a:s>a?s:a,d=o>l?o>c?o:c:l>c?l:c;let g=n.next;for(;g!==e;){if(g.x>=u&&g.x<=f&&g.y>=h&&g.y<=d&&oa(r,o,s,l,a,c,g.x,g.y)&&Gt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function mw(i,e,t,n){const r=i.prev,s=i,a=i.next;if(Gt(r,s,a)>=0)return!1;const o=r.x,l=s.x,c=a.x,u=r.y,h=s.y,f=a.y,d=o<l?o<c?o:c:l<c?l:c,g=u<h?u<f?u:f:h<f?h:f,_=o>l?o>c?o:c:l>c?l:c,m=u>h?u>f?u:f:h>f?h:f,p=Zh(d,g,e,t,n),y=Zh(_,m,e,t,n);let x=i.prevZ,v=i.nextZ;for(;x&&x.z>=p&&v&&v.z<=y;){if(x.x>=d&&x.x<=_&&x.y>=g&&x.y<=m&&x!==r&&x!==a&&oa(o,u,l,h,c,f,x.x,x.y)&&Gt(x.prev,x,x.next)>=0||(x=x.prevZ,v.x>=d&&v.x<=_&&v.y>=g&&v.y<=m&&v!==r&&v!==a&&oa(o,u,l,h,c,f,v.x,v.y)&&Gt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;x&&x.z>=p;){if(x.x>=d&&x.x<=_&&x.y>=g&&x.y<=m&&x!==r&&x!==a&&oa(o,u,l,h,c,f,x.x,x.y)&&Gt(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;v&&v.z<=y;){if(v.x>=d&&v.x<=_&&v.y>=g&&v.y<=m&&v!==r&&v!==a&&oa(o,u,l,h,c,f,v.x,v.y)&&Gt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function gw(i,e,t){let n=i;do{const r=n.prev,s=n.next.next;!Rc(r,s)&&Mg(r,n,n.next,s)&&Bo(r,s)&&Bo(s,r)&&(e.push(r.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),Ho(n),Ho(n.next),n=i=s),n=n.next}while(n!==i);return Cs(n)}function _w(i,e,t,n,r,s){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Tw(a,o)){let l=Sg(a,o);a=Cs(a,a.next),l=Cs(l,l.next),zo(a,e,t,n,r,s,0),zo(l,e,t,n,r,s,0);return}o=o.next}a=a.next}while(a!==i)}function vw(i,e,t,n){const r=[];let s,a,o,l,c;for(s=0,a=e.length;s<a;s++)o=e[s]*n,l=s<a-1?e[s+1]*n:i.length,c=yg(i,o,l,n,!1),c===c.next&&(c.steiner=!0),r.push(Ew(c));for(r.sort(xw),s=0;s<r.length;s++)t=yw(r[s],t);return t}function xw(i,e){return i.x-e.x}function yw(i,e){const t=Mw(i,e);if(!t)return e;const n=Sg(t,i);return Cs(n,n.next),Cs(t,t.next)}function Mw(i,e){let t=e,n=-1/0,r;const s=i.x,a=i.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){const f=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=s&&f>n&&(n=f,r=t.x<t.next.x?t:t.next,f===s))return r}t=t.next}while(t!==e);if(!r)return null;const o=r,l=r.x,c=r.y;let u=1/0,h;t=r;do s>=t.x&&t.x>=l&&s!==t.x&&oa(a<c?s:n,a,l,c,a<c?n:s,a,t.x,t.y)&&(h=Math.abs(a-t.y)/(s-t.x),Bo(t,i)&&(h<u||h===u&&(t.x>r.x||t.x===r.x&&Sw(r,t)))&&(r=t,u=h)),t=t.next;while(t!==o);return r}function Sw(i,e){return Gt(i.prev,i,e.prev)<0&&Gt(e.next,i,i.next)<0}function bw(i,e,t,n){let r=i;do r.z===0&&(r.z=Zh(r.x,r.y,e,t,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,ww(r)}function ww(i){let e,t,n,r,s,a,o,l,c=1;do{for(t=i,i=null,s=null,a=0;t;){for(a++,n=t,o=0,e=0;e<c&&(o++,n=n.nextZ,!!n);e++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(r=t,t=t.nextZ,o--):(r=n,n=n.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;t=n}s.nextZ=null,c*=2}while(a>1);return i}function Zh(i,e,t,n,r){return i=(i-t)*r|0,e=(e-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Ew(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function oa(i,e,t,n,r,s,a,o){return(r-a)*(e-o)>=(i-a)*(s-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(r-a)*(n-o)}function Tw(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Aw(i,e)&&(Bo(i,e)&&Bo(e,i)&&Cw(i,e)&&(Gt(i.prev,i,e.prev)||Gt(i,e.prev,e))||Rc(i,e)&&Gt(i.prev,i,i.next)>0&&Gt(e.prev,e,e.next)>0)}function Gt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Rc(i,e){return i.x===e.x&&i.y===e.y}function Mg(i,e,t,n){const r=Ul(Gt(i,e,t)),s=Ul(Gt(i,e,n)),a=Ul(Gt(t,n,i)),o=Ul(Gt(t,n,e));return!!(r!==s&&a!==o||r===0&&Il(i,t,e)||s===0&&Il(i,n,e)||a===0&&Il(t,i,n)||o===0&&Il(t,e,n))}function Il(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Ul(i){return i>0?1:i<0?-1:0}function Aw(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Mg(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Bo(i,e){return Gt(i.prev,i,i.next)<0?Gt(i,e,i.next)>=0&&Gt(i,i.prev,e)>=0:Gt(i,e,i.prev)<0||Gt(i,i.next,e)<0}function Cw(i,e){let t=i,n=!1;const r=(i.x+e.x)/2,s=(i.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Sg(i,e){const t=new Kh(i.i,i.x,i.y),n=new Kh(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function Bp(i,e,t,n){const r=new Kh(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function Ho(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Kh(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Rw(i,e,t,n){let r=0;for(let s=e,a=t-n;s<t;s+=n)r+=(i[a]-i[s])*(i[s+1]+i[a+1]),a=s;return r}class Eo{static area(e){const t=e.length;let n=0;for(let r=t-1,s=0;s<t;r=s++)n+=e[r].x*e[s].y-e[s].x*e[r].y;return n*.5}static isClockWise(e){return Eo.area(e)<0}static triangulateShape(e,t){const n=[],r=[],s=[];Hp(e),Vp(n,e);let a=e.length;t.forEach(Hp);for(let l=0;l<t.length;l++)r.push(a),a+=t[l].length,Vp(n,t[l]);const o=fw.triangulate(n,r);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}}function Hp(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Vp(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class Rs extends cn{constructor(e=new La([new me(.5,.5),new me(-.5,.5),new me(-.5,-.5),new me(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,r=[],s=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];a(c)}this.setAttribute("position",new gt(r,3)),this.setAttribute("uv",new gt(s,2)),this.computeVertexNormals();function a(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:d-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:Pw;let x,v=!1,A,b,w,C;p&&(x=p.getSpacedPoints(u),v=!0,f=!1,A=p.computeFrenetFrames(u,!1),b=new I,w=new I,C=new I),f||(m=0,d=0,g=0,_=0);const S=o.extractPoints(c);let M=S.shape;const P=S.holes;if(!Eo.isClockWise(M)){M=M.reverse();for(let ne=0,ee=P.length;ne<ee;ne++){const L=P[ne];Eo.isClockWise(L)&&(P[ne]=L.reverse())}}const k=Eo.triangulateShape(M,P),V=M;for(let ne=0,ee=P.length;ne<ee;ne++){const L=P[ne];M=M.concat(L)}function q(ne,ee,L){return ee||console.error("THREE.ExtrudeGeometry: vec does not exist"),ne.clone().addScaledVector(ee,L)}const B=M.length,Y=k.length;function H(ne,ee,L){let Ae,se,F;const ce=ne.x-ee.x,ze=ne.y-ee.y,Ee=L.x-ne.x,R=L.y-ne.y,E=ce*ce+ze*ze,G=ce*R-ze*Ee;if(Math.abs(G)>Number.EPSILON){const j=Math.sqrt(E),Q=Math.sqrt(Ee*Ee+R*R),J=ee.x-ze/j,ge=ee.y+ce/j,fe=L.x-R/Q,ye=L.y+Ee/Q,je=((fe-J)*R-(ye-ge)*Ee)/(ce*R-ze*Ee);Ae=J+ce*je-ne.x,se=ge+ze*je-ne.y;const le=Ae*Ae+se*se;if(le<=2)return new me(Ae,se);F=Math.sqrt(le/2)}else{let j=!1;ce>Number.EPSILON?Ee>Number.EPSILON&&(j=!0):ce<-Number.EPSILON?Ee<-Number.EPSILON&&(j=!0):Math.sign(ze)===Math.sign(R)&&(j=!0),j?(Ae=-ze,se=ce,F=Math.sqrt(E)):(Ae=ce,se=ze,F=Math.sqrt(E/2))}return new me(Ae/F,se/F)}const re=[];for(let ne=0,ee=V.length,L=ee-1,Ae=ne+1;ne<ee;ne++,L++,Ae++)L===ee&&(L=0),Ae===ee&&(Ae=0),re[ne]=H(V[ne],V[L],V[Ae]);const D=[];let ue,Fe=re.concat();for(let ne=0,ee=P.length;ne<ee;ne++){const L=P[ne];ue=[];for(let Ae=0,se=L.length,F=se-1,ce=Ae+1;Ae<se;Ae++,F++,ce++)F===se&&(F=0),ce===se&&(ce=0),ue[Ae]=H(L[Ae],L[F],L[ce]);D.push(ue),Fe=Fe.concat(ue)}for(let ne=0;ne<m;ne++){const ee=ne/m,L=d*Math.cos(ee*Math.PI/2),Ae=g*Math.sin(ee*Math.PI/2)+_;for(let se=0,F=V.length;se<F;se++){const ce=q(V[se],re[se],Ae);oe(ce.x,ce.y,-L)}for(let se=0,F=P.length;se<F;se++){const ce=P[se];ue=D[se];for(let ze=0,Ee=ce.length;ze<Ee;ze++){const R=q(ce[ze],ue[ze],Ae);oe(R.x,R.y,-L)}}}const it=g+_;for(let ne=0;ne<B;ne++){const ee=f?q(M[ne],Fe[ne],it):M[ne];v?(w.copy(A.normals[0]).multiplyScalar(ee.x),b.copy(A.binormals[0]).multiplyScalar(ee.y),C.copy(x[0]).add(w).add(b),oe(C.x,C.y,C.z)):oe(ee.x,ee.y,0)}for(let ne=1;ne<=u;ne++)for(let ee=0;ee<B;ee++){const L=f?q(M[ee],Fe[ee],it):M[ee];v?(w.copy(A.normals[ne]).multiplyScalar(L.x),b.copy(A.binormals[ne]).multiplyScalar(L.y),C.copy(x[ne]).add(w).add(b),oe(C.x,C.y,C.z)):oe(L.x,L.y,h/u*ne)}for(let ne=m-1;ne>=0;ne--){const ee=ne/m,L=d*Math.cos(ee*Math.PI/2),Ae=g*Math.sin(ee*Math.PI/2)+_;for(let se=0,F=V.length;se<F;se++){const ce=q(V[se],re[se],Ae);oe(ce.x,ce.y,h+L)}for(let se=0,F=P.length;se<F;se++){const ce=P[se];ue=D[se];for(let ze=0,Ee=ce.length;ze<Ee;ze++){const R=q(ce[ze],ue[ze],Ae);v?oe(R.x,R.y+x[u-1].y,x[u-1].x+L):oe(R.x,R.y,h+L)}}}Z(),ae();function Z(){const ne=r.length/3;if(f){let ee=0,L=B*ee;for(let Ae=0;Ae<Y;Ae++){const se=k[Ae];Le(se[2]+L,se[1]+L,se[0]+L)}ee=u+m*2,L=B*ee;for(let Ae=0;Ae<Y;Ae++){const se=k[Ae];Le(se[0]+L,se[1]+L,se[2]+L)}}else{for(let ee=0;ee<Y;ee++){const L=k[ee];Le(L[2],L[1],L[0])}for(let ee=0;ee<Y;ee++){const L=k[ee];Le(L[0]+B*u,L[1]+B*u,L[2]+B*u)}}n.addGroup(ne,r.length/3-ne,0)}function ae(){const ne=r.length/3;let ee=0;be(V,ee),ee+=V.length;for(let L=0,Ae=P.length;L<Ae;L++){const se=P[L];be(se,ee),ee+=se.length}n.addGroup(ne,r.length/3-ne,1)}function be(ne,ee){let L=ne.length;for(;--L>=0;){const Ae=L;let se=L-1;se<0&&(se=ne.length-1);for(let F=0,ce=u+m*2;F<ce;F++){const ze=B*F,Ee=B*(F+1),R=ee+Ae+ze,E=ee+se+ze,G=ee+se+Ee,j=ee+Ae+Ee;Ne(R,E,G,j)}}}function oe(ne,ee,L){l.push(ne),l.push(ee),l.push(L)}function Le(ne,ee,L){Be(ne),Be(ee),Be(L);const Ae=r.length/3,se=y.generateTopUV(n,r,Ae-3,Ae-2,Ae-1);Ye(se[0]),Ye(se[1]),Ye(se[2])}function Ne(ne,ee,L,Ae){Be(ne),Be(ee),Be(Ae),Be(ee),Be(L),Be(Ae);const se=r.length/3,F=y.generateSideWallUV(n,r,se-6,se-3,se-2,se-1);Ye(F[0]),Ye(F[1]),Ye(F[3]),Ye(F[1]),Ye(F[2]),Ye(F[3])}function Be(ne){r.push(l[ne*3+0]),r.push(l[ne*3+1]),r.push(l[ne*3+2])}function Ye(ne){s.push(ne.x),s.push(ne.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Lw(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,a=e.shapes.length;s<a;s++){const o=t[e.shapes[s]];n.push(o)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new fc[r.type]().fromJSON(r)),new Rs(n,e.options)}}const Pw={generateTopUV:function(i,e,t,n,r){const s=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[r*3],u=e[r*3+1];return[new me(s,a),new me(o,l),new me(c,u)]},generateSideWallUV:function(i,e,t,n,r,s){const a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],h=e[n*3+2],f=e[r*3],d=e[r*3+1],g=e[r*3+2],_=e[s*3],m=e[s*3+1],p=e[s*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new me(a,1-l),new me(c,1-h),new me(f,1-g),new me(_,1-p)]:[new me(o,1-l),new me(u,1-h),new me(d,1-g),new me(m,1-p)]}};function Lw(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){const s=i[n];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class zd extends cn{constructor(e=.5,t=1,n=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);const o=[],l=[],c=[],u=[];let h=e;const f=(t-e)/r,d=new I,g=new me;for(let _=0;_<=r;_++){for(let m=0;m<=n;m++){const p=s+m/n*a;d.x=h*Math.cos(p),d.y=h*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/t+1)/2,g.y=(d.y/t+1)/2,u.push(g.x,g.y)}h+=f}for(let _=0;_<r;_++){const m=_*(n+1);for(let p=0;p<n;p++){const y=p+m,x=y,v=y+n+1,A=y+n+2,b=y+1;o.push(x,v,b),o.push(v,A,b)}}this.setIndex(o),this.setAttribute("position",new gt(l,3)),this.setAttribute("normal",new gt(c,3)),this.setAttribute("uv",new gt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zd(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class qt extends cn{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],h=new I,f=new I,d=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const y=[],x=p/n;let v=0;p===0&&a===0?v=.5/t:p===n&&l===Math.PI&&(v=-.5/t);for(let A=0;A<=t;A++){const b=A/t;h.x=-e*Math.cos(r+b*s)*Math.sin(a+x*o),h.y=e*Math.cos(a+x*o),h.z=e*Math.sin(r+b*s)*Math.sin(a+x*o),g.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),m.push(b+v,1-x),y.push(c++)}u.push(y)}for(let p=0;p<n;p++)for(let y=0;y<t;y++){const x=u[p][y+1],v=u[p][y],A=u[p+1][y],b=u[p+1][y+1];(p!==0||a>0)&&d.push(x,v,b),(p!==n-1||l<Math.PI)&&d.push(v,A,b)}this.setIndex(d),this.setAttribute("position",new gt(g,3)),this.setAttribute("normal",new gt(_,3)),this.setAttribute("uv",new gt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qt(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class mn extends cn{constructor(e=1,t=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);const a=[],o=[],l=[],c=[],u=new I,h=new I,f=new I;for(let d=0;d<=n;d++)for(let g=0;g<=r;g++){const _=g/r*s,m=d/n*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(_),h.y=(e+t*Math.cos(m))*Math.sin(_),h.z=t*Math.sin(m),o.push(h.x,h.y,h.z),u.x=e*Math.cos(_),u.y=e*Math.sin(_),f.subVectors(h,u).normalize(),l.push(f.x,f.y,f.z),c.push(g/r),c.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=r;g++){const _=(r+1)*d+g-1,m=(r+1)*(d-1)+g-1,p=(r+1)*(d-1)+g,y=(r+1)*d+g;a.push(_,m,y),a.push(m,p,y)}this.setIndex(a),this.setAttribute("position",new gt(o,3)),this.setAttribute("normal",new gt(l,3)),this.setAttribute("uv",new gt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mn(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Bd extends cn{constructor(e=1,t=.4,n=64,r=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:r,p:s,q:a},n=Math.floor(n),r=Math.floor(r);const o=[],l=[],c=[],u=[],h=new I,f=new I,d=new I,g=new I,_=new I,m=new I,p=new I;for(let x=0;x<=n;++x){const v=x/n*s*Math.PI*2;y(v,s,a,e,d),y(v+.01,s,a,e,g),m.subVectors(g,d),p.addVectors(g,d),_.crossVectors(m,p),p.crossVectors(_,m),_.normalize(),p.normalize();for(let A=0;A<=r;++A){const b=A/r*Math.PI*2,w=-t*Math.cos(b),C=t*Math.sin(b);h.x=d.x+(w*p.x+C*_.x),h.y=d.y+(w*p.y+C*_.y),h.z=d.z+(w*p.z+C*_.z),l.push(h.x,h.y,h.z),f.subVectors(h,d).normalize(),c.push(f.x,f.y,f.z),u.push(x/n),u.push(A/r)}}for(let x=1;x<=n;x++)for(let v=1;v<=r;v++){const A=(r+1)*(x-1)+(v-1),b=(r+1)*x+(v-1),w=(r+1)*x+v,C=(r+1)*(x-1)+v;o.push(A,b,C),o.push(b,w,C)}this.setIndex(o),this.setAttribute("position",new gt(l,3)),this.setAttribute("normal",new gt(c,3)),this.setAttribute("uv",new gt(u,2));function y(x,v,A,b,w){const C=Math.cos(x),S=Math.sin(x),M=A/v*x,P=Math.cos(M);w.x=b*(2+P)*.5*C,w.y=b*(2+P)*S*.5,w.z=b*Math.sin(M)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bd(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class Hd extends cn{constructor(e=new vg(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),t=64,n=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:s};const a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new I,l=new I,c=new me;let u=new I;const h=[],f=[],d=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new gt(h,3)),this.setAttribute("normal",new gt(f,3)),this.setAttribute("uv",new gt(d,2));function _(){for(let x=0;x<t;x++)m(x);m(s===!1?t:0),y(),p()}function m(x){u=e.getPointAt(x/t,u);const v=a.normals[x],A=a.binormals[x];for(let b=0;b<=r;b++){const w=b/r*Math.PI*2,C=Math.sin(w),S=-Math.cos(w);l.x=S*v.x+C*A.x,l.y=S*v.y+C*A.y,l.z=S*v.z+C*A.z,l.normalize(),f.push(l.x,l.y,l.z),o.x=u.x+n*l.x,o.y=u.y+n*l.y,o.z=u.z+n*l.z,h.push(o.x,o.y,o.z)}}function p(){for(let x=1;x<=t;x++)for(let v=1;v<=r;v++){const A=(r+1)*(x-1)+(v-1),b=(r+1)*x+(v-1),w=(r+1)*x+v,C=(r+1)*(x-1)+v;g.push(A,b,C),g.push(b,w,C)}}function y(){for(let x=0;x<=t;x++)for(let v=0;v<=r;v++)c.x=x/t,c.y=v/r,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Hd(new fc[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class pc extends Na{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new tt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=q0,this.normalScale=new me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Pi extends pc{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new me(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return an(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new tt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new tt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new tt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Vd extends gn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new tt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Dw extends Vd{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(gn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new tt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Ru=new kt,Gp=new I,Wp=new I;class bg{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new me(512,512),this.map=null,this.mapPass=null,this.matrix=new kt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ud,this._frameExtents=new me(1,1),this._viewportCount=1,this._viewports=[new Tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Gp.setFromMatrixPosition(e.matrixWorld),t.position.copy(Gp),Wp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Wp),t.updateMatrixWorld(),Ru.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ru),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ru)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Xp=new kt,Ja=new I,Pu=new I;class Iw extends bg{constructor(){super(new Nn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new me(4,2),this._viewportCount=6,this._viewports=[new Tt(2,1,1,1),new Tt(0,1,1,1),new Tt(3,1,1,1),new Tt(1,1,1,1),new Tt(3,0,1,1),new Tt(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Ja.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ja),Pu.copy(n.position),Pu.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Pu),n.updateMatrixWorld(),r.makeTranslation(-Ja.x,-Ja.y,-Ja.z),Xp.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xp)}}class wg extends Vd{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new Iw}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Uw extends bg{constructor(){super(new og(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Yp extends Vd{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gn.DEFAULT_UP),this.updateMatrix(),this.target=new gn,this.shadow=new Uw}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Eg{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=qp(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=qp();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function qp(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Td}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Td);class Nw extends Tc{constructor(){super();const e=new _r;e.deleteAttribute("uv");const t=new pc({side:zn}),n=new pc,r=new wg(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);const s=new Lt(e,t);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);const a=new Lt(e,n);a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),this.add(a);const o=new Lt(e,n);o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),this.add(o);const l=new Lt(e,n);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);const c=new Lt(e,n);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);const u=new Lt(e,n);u.position.set(2.291,-.756,-2.621),u.rotation.set(0,-.286,0),u.scale.set(1.546,1.552,1.496),this.add(u);const h=new Lt(e,n);h.position.set(-2.193,-.369,-5.547),h.rotation.set(0,.516,0),h.scale.set(3.875,3.487,2.986),this.add(h);const f=new Lt(e,js(50));f.position.set(-16.116,14.37,8.208),f.scale.set(.1,2.428,2.739),this.add(f);const d=new Lt(e,js(50));d.position.set(-16.109,18.021,-8.207),d.scale.set(.1,2.425,2.751),this.add(d);const g=new Lt(e,js(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);const _=new Lt(e,js(43));_.position.set(-.462,8.89,14.52),_.scale.set(4.38,5.441,.088),this.add(_);const m=new Lt(e,js(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);const p=new Lt(e,js(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function js(i){const e=new Gi;return e.color.setScalar(i),e}const Lu=new Map;function oi(i=1){let e=i>>>0||1;return()=>(e=Math.imul(e,1664525)+1013904223>>>0)/4294967296}function Ps(i,e,t,{repeat:n,srgb:r=!0}={}){if(Lu.has(i))return Lu.get(i);const s=document.createElement("canvas");s.width=s.height=e;const a=s.getContext("2d");t(a,e);const o=new tw(s);return r&&(o.colorSpace=Gn),o.anisotropy=4,n&&(o.wrapS=o.wrapT=uc,o.repeat.set(n[0],n[1])),Lu.set(i,o),o}function Yt(i="speck",{n:e=5e3,dark:t=.18,light:n=.12,bands:r=0,size:s=256,fine:a=!1}={}){return Ps("speckle:"+i,s,(o,l)=>{const c=oi(i.length*977+e);o.fillStyle="#f2f2f2",o.fillRect(0,0,l,l);for(let f=0;f<r;f++){const d=c()*l;o.fillStyle=`rgba(0,0,0,${.03+c()*.06})`,o.fillRect(0,d,l,1+c()*2)}const u=6,h=Array.from({length:u*2},()=>new Path2D);for(let f=0;f<e;f++){const d=c()*l,g=c()*l,_=a?.3+c()*.6:.4+c()*1.4,m=c()>.5,p=Math.min(u-1,Math.floor(c()*u)),y=h[(m?0:u)+p];y.moveTo(d+_,g),y.arc(d,g,_,0,Math.PI*2)}h.forEach((f,d)=>{const g=(d%u+.5)/u;o.fillStyle=d<u?`rgba(0,0,0,${g*t})`:`rgba(255,255,255,${g*n})`,o.fill(f)})},{repeat:[1,1]})}function Gd(){return Ps("chai-surface",256,(i,e)=>{const t=e/2,n=i.createRadialGradient(t,t,0,t,t,t);n.addColorStop(0,"#ffffff"),n.addColorStop(.55,"#f1f1f1"),n.addColorStop(.82,"#d9d9d9"),n.addColorStop(.93,"#ffffff"),n.addColorStop(1,"#bdbdbd"),i.fillStyle=n,i.fillRect(0,0,e,e);const r=oi(7);i.strokeStyle="rgba(255,255,255,0.35)",i.lineWidth=3;for(let s=0;s<5;s++){i.beginPath();const a=30+s*18;i.arc(t,t,a,r()*6,r()*6+2.4),i.stroke()}for(let s=0;s<160;s++){const a=r()*Math.PI*2,o=t*(.8+r()*.16);i.fillStyle=`rgba(255,255,255,${.3+r()*.5})`,i.beginPath(),i.arc(t+Math.cos(a)*o,t+Math.sin(a)*o,.8+r()*2.2,0,Math.PI*2),i.fill()}})}function Ow({color:i="#2a1408",art:e=null,crema:t=!1,cocoa:n=!1,foamColor:r=null}={}){const s=["coffee",i,e,t,n,r].join("|");return Ps(s,512,(a,o)=>{const l=o/2,c=oi(i.length*31+(e?e.length:3));if(a.fillStyle=i,a.fillRect(0,0,o,o),t||r){const u=r||"#b0743a",h=a.createRadialGradient(l,l,0,l,l,l);h.addColorStop(0,Du(u,.12)),h.addColorStop(.7,u),h.addColorStop(.95,Du(u,-.35)),h.addColorStop(1,Du(u,-.5)),a.fillStyle=h,a.fillRect(0,0,o,o);for(let f=0;f<1400;f++){const d=c()*Math.PI*2,g=Math.sqrt(c())*l;a.fillStyle=c()>.5?"rgba(60,25,8,0.25)":"rgba(255,220,170,0.18)",a.beginPath(),a.arc(l+Math.cos(d)*g,l+Math.sin(d)*g,.6+c()*1.8,0,Math.PI*2),a.fill()}a.strokeStyle="rgba(70,30,10,0.18)",a.lineWidth=6;for(let f=0;f<6;f++)a.beginPath(),a.arc(l,l,40+f*32+c()*10,c()*6,c()*6+1.5),a.stroke()}else{const u=a.createRadialGradient(l,l,l*.5,l,l,l);u.addColorStop(0,"rgba(0,0,0,0)"),u.addColorStop(1,"rgba(0,0,0,0.45)"),a.fillStyle=u,a.fillRect(0,0,o,o)}if(e){const u=a.createRadialGradient(l,l,l*.62,l,l,l);u.addColorStop(0,"rgba(0,0,0,0)"),u.addColorStop(1,"rgba(70,30,10,0.55)"),a.fillStyle=u,a.fillRect(0,0,o,o),a.fillStyle="#f7efe3",a.shadowColor="rgba(255,240,220,0.8)",a.shadowBlur=8,e==="heart"?Fw(a,l,l+18,150):e==="rosetta"?kw(a,l,l):e==="dot"&&(a.beginPath(),a.arc(l,l,85,0,Math.PI*2),a.fill()),a.shadowBlur=0}if(n)for(let u=0;u<2500;u++){const h=c()*Math.PI*2,f=Math.sqrt(c())*l*.85;a.fillStyle=`rgba(55,25,10,${.2+c()*.4})`,a.fillRect(l+Math.cos(h)*f,l+Math.sin(h)*f,1.5,1.5)}})}function Fw(i,e,t,n){i.beginPath(),i.moveTo(e,t+n*.55),i.bezierCurveTo(e-n*1.1,t-n*.15,e-n*.55,t-n*.95,e,t-n*.42),i.bezierCurveTo(e+n*.55,t-n*.95,e+n*1.1,t-n*.15,e,t+n*.55),i.fill(),i.fillRect(e-3,t-n*.6,6,n*1.3)}function kw(i,e,t){for(let n=0;n<7;n++){const r=t+150-n*40,s=150-n*17;i.beginPath(),i.ellipse(e,r,s,24,0,Math.PI,0,!1),i.ellipse(e,r+10,s*.85,12,0,0,Math.PI,!1),i.fill()}i.beginPath(),i.arc(e,t-140,24,0,Math.PI*2),i.fill(),i.fillRect(e-3,t-150,6,330)}function zw(i="#f3c96b"){return Ps("cheese:"+i,512,(e,t)=>{const n=oi(42);e.fillStyle=i,e.fillRect(0,0,t,t);for(let r=0;r<60;r++){const s=n()*t,a=n()*t,o=15+n()*45,l=e.createRadialGradient(s,a,0,s,a,o);l.addColorStop(0,"rgba(255,245,200,0.55)"),l.addColorStop(1,"rgba(255,245,200,0)"),e.fillStyle=l,e.fillRect(s-o,a-o,o*2,o*2)}for(let r=0;r<70;r++){const s=n()*t,a=n()*t,o=4+n()*16,l=e.createRadialGradient(s,a,0,s,a,o);l.addColorStop(0,"rgba(170,90,20,0.7)"),l.addColorStop(1,"rgba(170,90,20,0)"),e.fillStyle=l,e.fillRect(s-o,a-o,o*2,o*2)}for(let r=0;r<400;r++)e.fillStyle="rgba(60,110,40,0.5)",e.fillRect(n()*t,n()*t,2,2)},{repeat:[.38,.38]})}function Wd(){return Ps("softdot",64,(i,e)=>{const t=i.createRadialGradient(e/2,e/2,0,e/2,e/2,e/2);t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.2,"rgba(255,255,255,0.7)"),t.addColorStop(.45,"rgba(255,255,255,0.28)"),t.addColorStop(.7,"rgba(255,255,255,0.08)"),t.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=t,i.fillRect(0,0,e,e)},{srgb:!1})}function Du(i,e){const t=new tt(i);return e>0?t.lerp(new tt("#ffffff"),e):t.lerp(new tt("#000000"),-e),"#"+t.getHexString()}function Bw(){const i=Ps("stream-map:v2",128,(t,n)=>{const r=t.createLinearGradient(0,0,n,0);[[0,.78],[.06,1],[.11,.8],[.25,.42],[.5,.35],[.75,.42],[.9,.72],[1,.78]].forEach(([a,o])=>{const l=Math.round(o*255);r.addColorStop(a,`rgb(${l},${l},${l})`)}),t.fillStyle=r,t.fillRect(0,0,n,n);const s=oi(11);for(let a=0;a<70;a++){const o=s()*n,l=s()*n,c=1.5+s()*4,u=10+s()*40;t.fillStyle=s()>.45?`rgba(255,255,255,${.06+s()*.12})`:`rgba(0,0,0,${.05+s()*.1})`;for(const h of[0,-n,n])t.beginPath(),t.ellipse(o,l+h,c,u,0,0,Math.PI*2),t.fill()}},{repeat:[1,1.4]}),e=Ps("stream-alpha",64,(t,n)=>{const r=t.createLinearGradient(0,0,0,n);r.addColorStop(0,"#000"),r.addColorStop(.35,"#fff"),r.addColorStop(1,"#fff"),t.fillStyle=r,t.fillRect(0,0,n,n)},{srgb:!1});return{map:i,alpha:e}}const Jh=matchMedia("(pointer: coarse)").matches||Math.min(screen.width,screen.height)<768;function Xd(i,e={}){const t=new Qb({canvas:i,antialias:!0,alpha:!0,powerPreference:"high-performance",...e});return t.setPixelRatio(Math.min(window.devicePixelRatio||1,e.maxDpr||(Jh?1.5:2))),t.toneMapping=N0,t.toneMappingExposure=1.05,t.outputColorSpace=Gn,t.shadowMap.enabled=!0,t.shadowMap.type=I0,t}function Yd(i,e,{shadowSize:t=1024,bounds:n=4}={}){const r=new Xh(e);i.environment=r.fromScene(new Nw,.04).texture,i.environmentIntensity=.55,r.dispose(),i.add(new Dw("#ffe9cc","#2a1a10",.7));const s=new Yp("#ffd9ae",2.6);s.position.set(4,7,6),s.castShadow=!0,s.shadow.mapSize.set(t,t),Object.assign(s.shadow.camera,{left:-n*1.6,right:n*1.6,top:n,bottom:-n,near:.5,far:30}),s.shadow.bias=-4e-4,s.shadow.normalBias=.02,i.add(s);const a=new Yp("#f0a443",3.2);a.position.set(-6,3,-5),i.add(a);const o=new wg("#ffb36b",12,20,2);return o.position.set(-3,-1,5),i.add(o),{key:s,rim:a,fill:o}}function qd(i=2,e=.4){const t=new Lt(new Oa(i,i).rotateX(-Math.PI/2),new Gi({color:"#000000",alphaMap:Wd(),transparent:!0,opacity:e,depthWrite:!1}));return t.renderOrder=-1,t}const ja=new I;function ui(i,e,t,n,r,s){const a=2*Math.PI*r/4,o=Math.max(s-2*r,0),l=Math.PI/4;ja.copy(e),ja[n]=0,ja.normalize();const c=.5*a/(a+o),u=1-ja.angleTo(i)/l;return Math.sign(ja[t])===1?u*c:o/(a+o)+c+c*(1-u)}class Di extends _r{constructor(e=1,t=1,n=1,r=2,s=.1){if(r=r*2+1,s=Math.min(e/2,t/2,n/2,s),super(1,1,1,r,r,r),r===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const o=new I,l=new I,c=new I(e,t,n).divideScalar(2).subScalar(s),u=this.attributes.position.array,h=this.attributes.normal.array,f=this.attributes.uv.array,d=u.length/6,g=new I,_=.5/r;for(let m=0,p=0;m<u.length;m+=3,p+=2)switch(o.fromArray(u,m),l.copy(o),l.x-=Math.sign(l.x)*_,l.y-=Math.sign(l.y)*_,l.z-=Math.sign(l.z)*_,l.normalize(),u[m+0]=c.x*Math.sign(o.x)+l.x*s,u[m+1]=c.y*Math.sign(o.y)+l.y*s,u[m+2]=c.z*Math.sign(o.z)+l.z*s,h[m+0]=l.x,h[m+1]=l.y,h[m+2]=l.z,Math.floor(m/d)){case 0:g.set(1,0,0),f[p+0]=ui(g,l,"z","y",s,n),f[p+1]=1-ui(g,l,"y","z",s,t);break;case 1:g.set(-1,0,0),f[p+0]=1-ui(g,l,"z","y",s,n),f[p+1]=1-ui(g,l,"y","z",s,t);break;case 2:g.set(0,1,0),f[p+0]=1-ui(g,l,"x","z",s,e),f[p+1]=ui(g,l,"z","x",s,n);break;case 3:g.set(0,-1,0),f[p+0]=1-ui(g,l,"x","z",s,e),f[p+1]=1-ui(g,l,"z","x",s,n);break;case 4:g.set(0,0,1),f[p+0]=1-ui(g,l,"x","y",s,e),f[p+1]=1-ui(g,l,"y","x",s,t);break;case 5:g.set(0,0,-1),f[p+0]=ui(g,l,"x","y",s,e),f[p+1]=1-ui(g,l,"y","x",s,t);break}}}const wn=Math.PI*2,Hw=i=>i.map(([e,t])=>new me(e,t)),$o=.95,xe=(i,e={})=>new pc({color:i,roughness:.6,metalness:0,...e}),$p={bands:70,n:9e3,dark:.09,light:.08,fine:!0},Vw=()=>xe("#b9582d",{roughness:.88,map:Yt("clay",$p),bumpMap:Yt("clay",$p),bumpScale:.8}),ka=(i="#f5f1ea")=>new Pi({color:i,roughness:.22,clearcoat:.8,clearcoatRoughness:.12}),jh=(i="#cfd3d6",e=.28)=>xe(i,{metalness:1,roughness:e}),Xr=()=>new Pi({color:"#ffffff",roughness:.04,metalness:0,transparent:!0,opacity:.2,clearcoat:1,clearcoatRoughness:.03,side:pn,depthWrite:!1,envMapIntensity:1.6}),Vo=i=>xe(i,{roughness:.62,map:Yt("bread",{n:3e3,dark:.1}),bumpMap:Yt("bread",{n:3e3,dark:.1}),bumpScale:1.5});function K(i,e,{x:t=0,y:n=0,z:r=0,rx:s=0,ry:a=0,rz:o=0,s:l=1,shadow:c=!0}={}){const u=new Lt(i,e);return u.position.set(t,n,r),u.rotation.set(s,a,o),l!==1&&(typeof l=="number"?u.scale.setScalar(l):u.scale.set(...l)),u.castShadow=c,u.receiveShadow=!0,u}const Jt=(i,e=72)=>new Ac(Hw(i),e),qi=(i,e=64)=>new Cc(i,e).rotateX(-Math.PI/2);function za(i,e,t=1,n=3){const r=i.attributes.position,s=new I;for(let a=0;a<r.count;a++){s.fromBufferAttribute(r,a);const o=Math.sin(s.x*n+t)*Math.cos(s.y*n*1.3+t*2)*Math.sin(s.z*n*.9+t*3),l=s.length()||1;s.multiplyScalar(1+o*e/l),r.setXYZ(a,s.x,s.y,s.z)}return i.computeVertexNormals(),i}function Ba(i=1.4,e="#f4efe6"){const t=Jt([[0,0],[i*.55,0],[i*.6,.03],[i*.66,.07],[i*.95,.12],[i,.17],[i*.98,.19],[i*.9,.15],[i*.6,.1],[0,.1]]),n=new xt;return n.add(K(t,ka(e))),n.add(K(new mn(i*.985,.012,6,96).rotateX(Math.PI/2),xe("#e2a03c",{metalness:.6,roughness:.3}),{y:.183,shadow:!1})),n}function Qh({liquid:i="#b9773f"}={}){const e=new xt,t=[[0,0],[.5,0],[.56,.03],[.585,.09],[.62,.4],[.7,.9],[.78,1.35],[.84,1.62],[.875,1.69],[.865,1.73],[.82,1.735],[.785,1.67],[.74,1.4],[.68,1],[.6,.5],[.52,.2],[0,.18]];e.add(K(Jt(t,96),Vw()));const n=xe("#9c4523",{roughness:.95});[.42,.5].forEach((s,a)=>e.add(K(new mn(.625+a*.012,.012,6,96).rotateX(Math.PI/2),n,{y:s,shadow:!1})));const r=new Gi({color:i,map:Gd(),toneMapped:!1});return r.color.multiplyScalar($o),e.add(K(qi(.768,72),r,{y:1.56,shadow:!1})),e.userData={liquid:r,steam:new I(0,1.62,0),steamR:.5},e}function Gw({liquid:i="#a9692f"}={}){const e=new xt,t=Xr();t.flatShading=!0,e.add(K(new lt(.6,.47,1.35,14,1,!0),t,{y:.675,shadow:!1})),e.add(K(new lt(.47,.47,.12,14),t,{y:.06,shadow:!1}));const n=new Gi({color:i,map:Gd(),toneMapped:!1});return n.color.multiplyScalar($o),e.add(K(new lt(.535,.455,.75,14),xe(i,{roughness:.3}),{y:.495})),e.add(K(qi(.535,14),n,{y:.872,shadow:!1})),e.userData={liquid:n,steam:new I(0,.9,0),steamR:.35},e}function Ww({liquid:i="#c27a1c"}={}){const e=new xt,t=Xr();e.add(K(new lt(.58,.5,1.5,48,1,!0),t,{y:.75,shadow:!1})),e.add(K(new lt(.5,.5,.1,48),t,{y:.05,shadow:!1})),e.add(K(new mn(.3,.05,12,32,Math.PI*1.2),t,{x:.62,y:.78,rz:-Math.PI*.6,shadow:!1}));const n=new Pi({color:i,roughness:.1,transparent:!0,opacity:.88,emissive:i,emissiveIntensity:.18});return e.add(K(new lt(.55,.49,1.15,48),n,{y:.68})),e.add(K(new lt(.22,.22,.03,24),xe("#f2d24a",{roughness:.4}),{x:.15,y:1.27,z:.1,rx:.1})),e.add(K(new lt(.19,.19,.032,24),xe("#fff1a8",{roughness:.4}),{x:.15,y:1.272,z:.1,rx:.1,shadow:!1})),e.userData={steam:new I(0,1.3,0),steamR:.4},e}function Xw(i=1,e){return K(Jt([[0,0],[.5,0],[.55,.03],[.6,.05],[1.05,.1],[1.2,.16],[1.22,.19],[1.18,.19],[1,.14],[.62,.1],[.55,.09],[0,.09]]),e?new Pi({color:e,roughness:.3,clearcoat:.9}):ka(),{s:i})}function Tg({style:i="cup",liquid:e="#2a1408",art:t=null,crema:n=!1,cocoa:r=!1,foamColor:s=null,layers:a=null,small:o=!1,foam:l=null,cream:c=!1,noIce:u=!1}={}){const h=new xt,f=()=>xe("#ffffff",{roughness:.3,map:Ow({color:e,art:t,crema:n,cocoa:r,foamColor:s})});if(i==="cup"||i==="espresso"){const d=i==="espresso",g=d?.72:1,_=d?.065:.09;h.add(Xw(g,d?"#2b2522":void 0));const m=new xt;m.position.y=_;const p=d?[[0,0],[.3,0],[.34,.04],[.4,.2],[.44,.5],[.46,.75],[.465,.8],[.425,.8],[.41,.6],[.37,.3],[.28,.14],[0,.12]]:[[0,0],[.32,0],[.36,.03],[.38,.08],[.5,.3],[.62,.62],[.69,.9],[.72,1.04],[.725,1.08],[.69,1.08],[.67,1],[.6,.7],[.48,.36],[.35,.16],[0,.13]],y=d?new Pi({color:"#2b2522",roughness:.3,clearcoat:.9,clearcoatRoughness:.1}):ka();m.add(K(Jt(p),y));const x=d?.8:1.08,v=d?.445:.707;m.add(K(new mn(v,.018,8,96).rotateX(Math.PI/2),xe("#e2a03c",{metalness:.7,roughness:.25}),{y:x,shadow:!1}));const A=d?.14:.22;return m.add(K(new mn(A,d?.04:.05,14,40,Math.PI*1.25),y,{x:d?.48:.68,y:d?.45:.6,rz:-Math.PI*.625})),m.add(K(qi(d?.42:.66),f(),{y:d?.7:.95,shadow:!1})),h.add(m),h.userData={steam:new I(0,(d?.75:1)+_,0),steamR:d?.3:.45},h}if(i==="mug"){const d=new Pi({color:"#2b2522",roughness:.45,clearcoat:.5});return h.add(K(Jt([[0,0],[.5,0],[.55,.04],[.56,.1],[.58,1.3],[.585,1.36],[.545,1.36],[.535,1.2],[.51,.15],[0,.12]]),d)),h.add(K(new mn(.3,.07,14,40,Math.PI*1.15),d,{x:.6,y:.72,rz:-Math.PI*.575})),h.add(K(new mn(.565,.025,8,96).rotateX(Math.PI/2),xe("#e2a03c",{metalness:.7,roughness:.25}),{y:1.05,shadow:!1})),h.add(K(qi(.536),f(),{y:1.22,shadow:!1})),h.userData={steam:new I(0,1.3,0),steamR:.4},h}if(i==="latte-glass"){const d=o?.95:1.45,g=.46,_=o?.52:.56,m=Xr();h.add(K(new lt(_,g,d,48,1,!0),m,{y:d/2,shadow:!1})),h.add(K(new lt(g,g,.1,48),m,{y:.05,shadow:!1}));const p=a||["#3b1d0e",e,"#f3e6d4"],y=d*.86,x=.1,v=p.length===4?[.18,.5,.17,.15]:p.length===2?[.5,.5]:[.2,.62,.18];let A=x;return p.forEach((b,w)=>{const C=y*v[w]*((y-x+.1)/y),S=g+(_-g)*(A/d)-.025,M=g+(_-g)*((A+C)/d)-.025;h.add(K(new lt(M,S,C,48),xe(b,{roughness:.35}),{y:A+C/2})),A+=C}),h.userData={steam:new I(0,A+.05,0),steamR:.4},h}if(i==="iced"){const m=Xr();h.add(K(new lt(.56,.44,2,48,1,!0),m,{y:2/2,shadow:!1})),h.add(K(new lt(.44,.44,.12,48),m,{y:.06,shadow:!1}));const p=c?1.55:1.7,y=a||[e];let x=.12;const v=(p-x)/y.length;if(y.forEach(A=>{const b=.44+.12000000000000005*(x/2)-.025,w=.44+(.56-.44)*((x+v)/2)-.025;h.add(K(new lt(w,b,v,48),new Pi({color:A,roughness:.2,transparent:!0,opacity:.94}),{y:x+v/2})),x+=v}),l&&h.add(K(new lt(.535,.525,.22,48),xe(l,{roughness:.8}),{y:p+.1})),!u){const A=new Pi({color:"#e9f6fa",roughness:.12,transparent:!0,opacity:.5,clearcoat:1}),b=oi(9);for(let w=0;w<6;w++){const C=b()*wn,S=.12+b()*.2;h.add(K(new Di(.3,.3,.3,2,.05),A,{x:Math.cos(C)*S,y:p-.35+b()*.45,z:Math.sin(C)*S,rx:b()*3,ry:b()*3,rz:b()*3}))}}if(c){const A=xe("#fbf6ee",{roughness:.75});for(let b=0;b<4;b++){const w=.52-b*.12;h.add(K(new qt(w,32,16,0,wn,0,Math.PI/2),A,{y:p+b*.14,s:[1,.55,1]}))}h.add(K(new Bd(.25,.025,80,6,2,5),xe("#7a3e18",{roughness:.3}),{y:p+.3,rx:Math.PI/2,s:[1,1,.3]}))}return h.add(K(new lt(.035,.035,2,12),xe("#e2a03c",{roughness:.35}),{x:.18,y:1.55,z:-.05,rz:-.22})),h.userData={steam:null},h}return h}function Yw({liquid:i="#4a200c"}={}){const e=new xt,t=Xr();e.add(K(Jt([[0,0],[.55,0],[.7,.2],[.75,.5],[.68,.85],[.42,1.1],[.38,1.2],[.42,1.25]]),t,{shadow:!1})),e.add(K(Jt([[0,.02],[.53,.02],[.67,.2],[.71,.5],[0,.5]]),new Pi({color:i,roughness:.15,transparent:!0,opacity:.92}))),e.add(K(new lt(.47,.5,.18,48,1,!0),xe("#8a5a33",{roughness:.7,side:pn}),{y:.97}));const n=ka("#e8a33d");return e.add(K(Jt([[.3,0],[.38,.02],[.82,.62],[.8,.66],[.7,.62],[.26,.06]]),n,{y:1.25})),e.add(K(new lt(.6,.6,.04,48),n,{y:1.24})),e.add(K(qi(.68),xe("#3a1a0b",{roughness:.9,map:Yt("grounds",{n:3e3,dark:.4})}),{y:1.75,shadow:!1})),e.userData={steam:new I(0,1.85,0),steamR:.45},e}function qw({liquid:i="#51230e"}={}){const e=new xt,t=Xr(),n=[[0,0],[.5,0],[.7,.15],[.78,.45],[.6,.85],[.28,1.15],[.28,1.25],[.62,1.6],[.82,2.1],[.85,2.2]];return e.add(K(Jt(n),t,{shadow:!1})),e.add(K(Jt([[0,.03],[.48,.03],[.67,.16],[.74,.42],[.66,.6],[0,.6]]),new Pi({color:i,roughness:.12,transparent:!0,opacity:.93}))),e.add(K(Jt([[.3,.9],[.52,.95],[.48,1.3],[.3,1.32]]),xe("#a26b3c",{roughness:.65,map:Yt("wood",{bands:120,n:400})}))),e.add(K(new mn(.43,.03,8,48).rotateX(Math.PI/2),xe("#4a2a17",{roughness:.8}),{y:1.12})),e.add(K(new qt(.07,16,16),xe("#3b2416"),{x:.47,y:1.1})),e.add(K(new Pa(.75,.9,6,1,!0),xe("#f7f3ea",{roughness:1,side:pn,flatShading:!0}),{y:1.75,rx:Math.PI})),e.userData={steam:new I(0,2.2,0),steamR:.45},e}function $w({liquid:i="#2c1409"}={}){const e=new xt,t=Xr();e.add(K(new lt(.55,.55,1.8,48,1,!0),t,{y:1,shadow:!1})),e.add(K(new lt(.535,.535,1.25,48),new Pi({color:i,roughness:.2,transparent:!0,opacity:.95}),{y:.75})),e.add(K(new lt(.535,.535,.08,48),xe("#9a6a3a",{roughness:.9}),{y:1.4}));const n=jh();return e.add(K(new lt(.62,.62,.12,48),n,{y:.06})),[.3,1,1.7].forEach(r=>e.add(K(new mn(.57,.025,8,64).rotateX(Math.PI/2),n,{y:r}))),e.add(K(new lt(.6,.58,.16,48),n,{y:1.95})),e.add(K(new lt(.03,.03,.5,12),n,{y:2.2})),e.add(K(new qt(.11,24,16),xe("#1d1a18",{roughness:.4}),{y:2.48})),e.add(K(new lt(.53,.53,.03,48),jh("#a9adb0",.5),{y:1.55})),e.add(K(new mn(.4,.07,14,40,Math.PI),xe("#1d1a18",{roughness:.5}),{x:.6,y:1,rz:-Math.PI/2})),e.userData={steam:null},e}function Zw(){const i=new xt,e=xe("#bfc3c6",{metalness:1,roughness:.38,flatShading:!0});i.add(K(new lt(.5,.62,.9,8),e,{y:.45})),i.add(K(new lt(.47,.5,.12,8),e,{y:.96})),i.add(K(new lt(.62,.48,.95,8),e,{y:1.5})),i.add(K(new Pa(.64,.25,8),e,{y:2.1})),i.add(K(new qt(.09,16,12),xe("#1c1a19",{roughness:.5}),{y:2.27})),i.add(K(new Pa(.16,.35,8,1,!0),e,{x:-.62,y:1.9,rz:Math.PI/2.8}));const t=xe("#1c1a19",{roughness:.5});return i.add(K(new Di(.55,.14,.14,3,.05),t,{x:.85,y:1.8,rz:-.25})),i.add(K(new Di(.14,.75,.14,3,.05),t,{x:1.05,y:1.35,rz:.15})),i.userData={steam:new I(-.75,1.95,0),steamR:.15},i}function Kw({liquid:i="#b9824f"}={}){const e=new xt,t=jh("#d9dcdf",.2);e.add(K(Jt([[0,0],[.7,0],[.9,.08],[1.05,.35],[1.1,.5],[1.06,.52],[1,.38],[.85,.12],[0,.1]]),t));const n=new xt;return n.position.y=.1,n.add(K(Jt([[0,0],[.42,0],[.45,.06],[.48,.6],[.58,1.3],[.62,1.38],[.57,1.38],[.53,1.3],[.43,.6],[0,.55]]),t)),n.add(K(qi(.55),new Gi({color:new tt(i).multiplyScalar($o),map:Gd(),toneMapped:!1}),{y:1.27,shadow:!1})),n.add(K(new qt(.55,32,12,0,wn,0,Math.PI/2),xe("#ead7bd",{roughness:.95}),{y:1.26,s:[1,.25,1]})),e.add(n),e.userData={steam:new I(0,1.5,0),steamR:.4},e}function Jw(){const i=new xt,e=Xr();return i.add(K(Jt([[0,0],[.4,0],[.42,.05],[.25,.12],[.2,.3],[.65,.55],[.85,.95],[.88,1.05]]),e,{shadow:!1})),i.add(K(Jt([[0,.31],[.22,.31],[.62,.56],[.74,.75],[0,.75]]),xe("#3b1d0e",{roughness:.15}))),i.add(K(za(new qt(.48,48,32),.05,2,7),xe("#f6ead0",{roughness:.85}),{y:.95})),i.add(K(new qt(.49,48,16,0,wn,Math.PI*.62,Math.PI*.38),xe("#4a2512",{roughness:.12}),{y:.95})),i.add(K(new Di(.9,.18,.28,3,.06),Vo("#d39a54"),{x:.35,y:1.25,z:.15,rz:-.6,ry:.4})),i.userData={steam:null},i}const jw={pepperoni:()=>K(new lt(.17,.16,.035,24),xe("#a3261b",{roughness:.45,map:Yt("pep",{n:600,dark:.5})})),basil:()=>{const i=new La;return i.moveTo(0,-.15),i.quadraticCurveTo(.12,0,0,.17),i.quadraticCurveTo(-.12,0,0,-.15),K(new Rs(i,{depth:.01,bevelEnabled:!1}).rotateX(-Math.PI/2),xe("#2f7a2f",{roughness:.5}))},olive:()=>K(new mn(.055,.03,8,16).rotateX(Math.PI/2),xe("#161414",{roughness:.3})),capsicum:()=>K(new mn(.1,.025,6,16,Math.PI*1.3).rotateX(Math.PI/2),xe("#3f9a3a",{roughness:.35})),onion:()=>K(new mn(.12,.016,6,20,Math.PI).rotateX(Math.PI/2),xe("#a2578f",{roughness:.4})),corn:()=>K(new qt(.04,10,8),xe("#f2c230",{roughness:.4}),{s:[1,.8,1.2]}),jalapeno:()=>K(new mn(.07,.028,8,16).rotateX(Math.PI/2),xe("#4caf50",{roughness:.4})),paneer:()=>K(new Di(.17,.1,.17,2,.025),xe("#f3e2bf",{roughness:.8,map:Yt("char",{n:300,dark:.7})})),chicken:()=>K(za(new Di(.17,.09,.14,2,.03),.02,3,30),xe("#b5652e",{roughness:.7})),mushroom:()=>{const i=new La;return i.absarc(0,.04,.09,0,Math.PI,!1),i.lineTo(-.03,.04),i.lineTo(-.03,-.08),i.lineTo(.03,-.08),i.lineTo(.03,.04),i.lineTo(.09,.04),K(new Rs(i,{depth:.02,bevelEnabled:!1}).rotateX(-Math.PI/2),xe("#cdb69a",{roughness:.6}))}};function To(i,e,t,n,r=0){const s=new La;return s.moveTo(0,0),s.lineTo(Math.cos(e)*i,Math.sin(e)*i),s.absarc(0,0,i,e,t,!1),s.lineTo(0,0),new Rs(s,{depth:n,curveSegments:48,bevelEnabled:r>0,bevelSize:r,bevelThickness:r,bevelSegments:3}).rotateX(-Math.PI/2)}function Qw({toppings:i=["basil"],sauce:e="#c0391b",cheese:t="#f3c96b"}={}){const n=new xt,r=1.3,s=Math.PI/4,a=Vo("#e3b26f"),o=Vo("#c98a43"),l=xe(e,{roughness:.45}),c=xe("#ffffff",{roughness:.5,map:zw(t)}),u=(p,y)=>{const x=new xt;x.add(K(To(r-.04,p,y,.08,.04),a)),x.add(K(To(r-.12,p,y,.02),l,{y:.12})),x.add(K(To(r-.16,p,y,.025),c,{y:.14}));const v=new mn(r-.06,.11,14,96,y-p).rotateX(-Math.PI/2);return x.add(K(v,o,{y:.12,ry:p})),[p,y].forEach(A=>x.add(K(new qt(.11,14,10),o,{x:Math.cos(A)*(r-.06),y:.12,z:-Math.sin(A)*(r-.06)}))),x},h=u(s,wn),f=u(0,s),d=oi(i.join("").length*13+5),g=i.length?i:[],_=g.length?34:0;for(let p=0;p<_;p++){const y=d()*wn,x=.18+Math.sqrt(d())*(r-.42);if(Math.min(Math.abs(y)*x,Math.abs(y-s)*x,Math.abs(wn-y)*x)<.13)continue;const A=jw[g[p%g.length]]();A.position.set(Math.cos(y)*x,.18,-Math.sin(y)*x),A.rotation.y=d()*wn,(y<s?f:h).add(A)}n.add(h,f);const m=new I(Math.cos(s/2),0,-Math.sin(s/2));return f.position.copy(m.clone().multiplyScalar(.12)),n.userData={slice:f,sliceDir:m,steam:null,tilt:.75},n}function eE({patty:i="veg",cheese:e=!0,double:t=!1,tomato:n=!0}={}){const r=new xt,s=Vo("#c98b45");let a=0;r.add(K(Jt([[0,0],[.85,0],[.98,.05],[1.03,.15],[1.02,.25],[.98,.3]]),s)),r.add(K(qi(.98),xe("#ecc890",{roughness:.9,map:Yt("crumb",{n:4e3,dark:.15})}),{y:.3,shadow:!1})),a=.3;const o={veg:"#8a5a2b",tikki:"#b5732f",paneer:"#e7c48a",chicken:"#7a4a28",crispy:"#c98b3c"}[i]||"#8a5a2b",l=i==="crispy"||i==="tikki"||i==="paneer",c=()=>{const y=Jt([[0,0],[.95,0],[1.04,.04],[1.08,.14],[1.05,.24],[.96,.28],[0,.28]],64);if(l&&za(y,.025,4,18),r.add(K(y,xe(o,{roughness:.85,map:Yt("patty"+i,{n:6e3,dark:.45}),bumpMap:Yt("patty"+i,{n:6e3,dark:.45}),bumpScale:3,flatShading:l}),{y:a})),a+=.28,e){const x=new Oa(2,2,24,24).rotateX(-Math.PI/2),v=x.attributes.position;for(let A=0;A<v.count;A++){const b=v.getX(A),w=v.getZ(A),C=Math.hypot(b,w);C>.9&&v.setY(A,-Math.pow(C-.9,1.5)*.9)}x.computeVertexNormals(),r.add(K(x,xe("#f4b331",{roughness:.32,side:pn}),{y:a+.01,ry:Math.PI/4+a})),a+=.04}};c(),t&&c();const u=new Cc(1.2,120).rotateX(-Math.PI/2),h=u.attributes.position;for(let y=0;y<h.count;y++){const x=h.getX(y),v=h.getZ(y);Math.hypot(x,v)>.5&&h.setY(y,Math.sin(Math.atan2(v,x)*15)*.07-.06)}if(u.computeVertexNormals(),r.add(K(u,xe("#6cb33f",{roughness:.55,side:pn}),{y:a+.02})),a+=.05,n){const y=xe("#d8392b",{roughness:.35});for(let x=0;x<3;x++){const v=x/3*wn+.4;r.add(K(new lt(.42,.42,.09,28),y,{x:Math.cos(v)*.48,y:a+.045,z:Math.sin(v)*.48}))}a+=.09}const f=xe("#e6c8e0",{roughness:.4});for(let y=0;y<4;y++){const x=y/4*wn;r.add(K(new mn(.3,.035,8,32).rotateX(Math.PI/2),f,{x:Math.cos(x)*.45,y:a+.02,z:Math.sin(x)*.45}))}a+=.03;const d=[[0,0],[1,0]];for(let y=0;y<=18;y++){const x=y/18*(Math.PI/2);d.push([1.06*Math.cos(x),.06+.86*Math.pow(Math.sin(x),.85)])}const g=new xt;g.position.y=a,g.add(K(Jt(d),xe("#cf8a3b",{roughness:.42,map:Yt("bread",{n:3e3,dark:.1})})));const _=xe("#f5e6c0",{roughness:.5}),m=new qt(.035,8,6),p=oi(77);for(let y=0;y<46;y++){const x=.3+p()*1.15,v=p()*wn,A=1.06*Math.cos(x),b=.06+.86*Math.pow(Math.sin(x),.85),w=new I(A*Math.cos(v),b,A*Math.sin(v)),C=K(m,_,{s:[.6,1.4,.35],shadow:!1});C.position.copy(w),C.lookAt(w.clone().multiply(new I(1,1.4,1)).multiplyScalar(2)),C.rotateZ(p()*wn),g.add(C)}return r.add(g),r.userData={top:g,topY:a,steam:null,tilt:.25},r}function tE(){const i=Ba(1.5),e=xe("#d79a46",{roughness:.55,map:Yt("pastry",{n:5e3,dark:.25}),bumpMap:Yt("pastry",{n:5e3,dark:.25}),bumpScale:4}),t=za(new Pa(.62,1.05,3,6),.04,5,6);i.add(K(t,e,{x:-.4,y:.62,z:.1,ry:.4})),i.add(K(t,e,{x:.42,y:.5,z:-.15,rz:1.1,ry:1.2}));const n=new xt;return n.position.set(.55,.12,.7),n.add(K(Jt([[0,0],[.2,0],[.32,.18],[.34,.22],[.3,.2],[0,.12]]),ka("#e8a33d"))),n.add(K(qi(.31),xe("#5a1b10",{roughness:.2}),{y:.18})),i.add(n),i.userData={steam:null},i}function mc(i=!0,e="#d39147"){const t=[[0,0],[.7,0]];for(let n=0;n<=12;n++){const r=n/12*(Math.PI/2);t.push([.72*Math.cos(r),(i?.5:.22)*Math.sin(r)])}return K(Jt(t),Vo(e))}function nE(){const i=Ba(1.35),e=mc(!1);e.position.y=.12,e.rotation.x=Math.PI,e.position.y=.36,i.add(e),i.add(K(za(new qt(.62,40,24),.035,3,14),xe("#c9852d",{roughness:.7,flatShading:!0}),{y:.5,s:[1,.55,1]})),i.add(K(qi(.66),xe("#b8401f",{roughness:.8,map:Yt("chutney",{n:4e3,dark:.5})}),{y:.37,shadow:!1}));const t=mc(!0);return t.position.y=.64,t.rotation.z=.12,i.add(t),i.add(K(new kd(.06,.7,6,12),xe("#3d8a2e",{roughness:.3}),{x:.9,y:.26,z:.35,rz:Math.PI/2,ry:.6})),i.userData={steam:null},i}function iE(){const i=Ba(1.35),e=mc(!1,"#e0a65c");e.rotation.x=Math.PI,e.position.y=.36,i.add(e),i.add(K(new Di(.9,.12,.9,3,.04),xe("#f6df8a",{roughness:.35}),{y:.42,ry:.4}));const t=mc(!0,"#e0a65c");return t.position.set(.1,.5,.05),t.rotation.z=-.25,i.add(t),i.userData={steam:null},i}function rE(){const i=new xt,e=xe("#c8341f",{roughness:.55,side:pn});i.add(K(new lt(.75,.52,1.2,4,1,!0),e,{y:.6,ry:Math.PI/4})),i.add(K(new lt(.52,.52,.04,4),e,{y:.02,ry:Math.PI/4})),i.add(K(new lt(.69,.66,.12,4,1,!0),xe("#f6efe4",{roughness:.6,side:pn}),{y:.95,ry:Math.PI/4}));const t=xe("#f0c35a",{roughness:.6,map:Yt("peri",{n:900,dark:.6})}),n=oi(3);for(let r=0;r<26;r++){const s=(n()-.5)*.7,a=(n()-.5)*.7;i.add(K(new Di(.1,1.2+n()*.3,.1,1,.02),t,{x:s,y:1.05+n()*.25,z:a,rx:(n()-.5)*.4,rz:(n()-.5)*.4}))}return i.userData={steam:null},i}function sE(){const i=new xt;i.add(K(Jt([[0,0],[.45,0],[.5,.06],[.9,.5],[1.1,.85],[1.12,.9],[1.06,.9],[.86,.55],[.45,.15],[0,.12]]),ka("#e8a33d"))),i.add(K(qi(1),xe("#e9b04a",{roughness:.5}),{y:.78,shadow:!1}));const e=xe("#f1c34a",{roughness:.45}),t=oi(11);for(let n=0;n<26;n++){const r=[];let s=t()*wn,a=t()*.8;for(let o=0;o<7;o++)r.push(new I(Math.cos(s)*a,.8+t()*.08,Math.sin(s)*a)),s+=(t()-.5)*1.6,a=Math.min(.88,Math.max(.05,a+(t()-.5)*.35));i.add(K(new Hd(new pg(r),40,.025,5),e,{shadow:!1}))}for(let n=0;n<14;n++){const r=t()*wn,s=t()*.75,a=t()>.5;i.add(K(a?new qt(.05,10,8):new _r(.08,.08,.08),xe(a?"#5aa33a":"#e86a24",{roughness:.4}),{x:Math.cos(r)*s,y:.88,z:Math.sin(r)*s,ry:t()}))}return i.userData={steam:new I(0,.95,0),steamR:.6},i}function aE(){const i=Ba(1.4),e=xe("#c9852f",{roughness:.4,map:Yt("bread",{n:3e3,dark:.1})});for(let t=-3;t<=3;t++){const n=t*.32,r=.42-Math.abs(t)*.085;i.add(K(new qt(1,32,20),e,{x:Math.sin(n)*.75,y:.15+r*.8,z:Math.cos(n)*.75-.6,ry:n,s:[r*.75,r*.85,r*1.15]}))}return i.userData={steam:null},i}function oE(){const i=Ba(1.4),e=xe("#3e2216",{roughness:.75,map:Yt("brownie",{n:3e3,dark:.4,light:.2}),bumpMap:Yt("brownie",{n:3e3,dark:.4,light:.2}),bumpScale:3});i.add(K(new Di(1,.45,1,3,.06),e,{y:.4,ry:.3})),i.add(K(new Di(.9,.42,.9,3,.06),e,{x:.15,y:.84,z:.05,ry:.9}));const t=oi(5),n=xe("#fbf7f0",{roughness:1});for(let r=0;r<30;r++)i.add(K(new qt(.018,6,4),n,{x:.15+(t()-.5)*.7,y:1.06,z:.05+(t()-.5)*.7,shadow:!1}));return i.add(K(new qt(.3,32,20),xe("#f7ecd2",{roughness:.8}),{x:-.75,y:.3,z:.45,s:[1,.75,1]})),i.userData={steam:null},i}function lE({layers:i=["#6b3e22","#f1e2c8"],top:e="#5a321a"}={}){const t=Ba(1.5),n=-.42,r=.42;let s=.12;return i.forEach(a=>{const o=.9/i.length;t.add(K(To(1.25,n,r,o),xe(a,{roughness:.75}),{y:s,x:-.55})),s+=o}),t.add(K(To(1.25,n,r,.05),xe(e,{roughness:.85,map:Yt("cocoa",{n:2500,dark:.5})}),{y:s,x:-.55})),t.add(K(new qt(.17,24,16),xe("#7a2a12",{roughness:.15,clearcoat:1}),{x:.35,y:s+.17})),t.userData={steam:null},t}function cE(){const i=new xt,e=xe("#c78a4a",{roughness:.7,map:Yt("cookie",{n:3e3,dark:.3}),bumpMap:Yt("cookie",{n:3e3,dark:.3}),bumpScale:3}),t=xe("#2c160b",{roughness:.4}),n=oi(21);for(let r=0;r<3;r++){const s=za(new lt(.8,.82,.2,48,2),.03,r+1,9),a=.1+r*.22;if(i.add(K(s,e,{y:a,x:r*.06,rz:(n()-.5)*.06,rx:(n()-.5)*.06})),r===2)for(let o=0;o<14;o++){const l=n()*wn,c=Math.sqrt(n())*.65;i.add(K(new Di(.13,.08,.11,1,.02),t,{x:Math.cos(l)*c+.12,y:a+.11,z:Math.sin(l)*c,ry:n()*3}))}}return i.userData={steam:null},i}function uE(i,e=1){const t=oi(e);switch(i){case"leaf":{const n=new La;return n.moveTo(0,-.22),n.quadraticCurveTo(.14,0,0,.24),n.quadraticCurveTo(-.14,0,0,-.22),K(new Rs(n,{depth:.008,bevelEnabled:!1}),xe(t()>.5?"#3f6b2f":"#567f3a",{roughness:.55,side:pn}),{shadow:!1})}case"bean":{const n=new xt;return n.add(K(new qt(.1,20,14),xe("#4a2814",{roughness:.35}),{s:[1,.7,1.35],shadow:!1})),n.add(K(new _r(.012,.02,.26),xe("#1d0d05"),{y:.065,shadow:!1})),n}case"cardamom":return K(new qt(.07,6,10),xe("#8fa65a",{roughness:.6,flatShading:!0}),{s:[1,1,1.9],shadow:!1});case"cinnamon":return K(new lt(.045,.045,.55,12,1,!1,0,Math.PI*1.7),xe("#8a4b24",{roughness:.8,side:pn}),{shadow:!1});case"anise":{const n=new La;for(let r=0;r<16;r++){const s=r/16*wn,a=r%2?.05:.17;r?n.lineTo(Math.cos(s)*a,Math.sin(s)*a):n.moveTo(a,0)}return K(new Rs(n,{depth:.03,bevelEnabled:!0,bevelSize:.02,bevelThickness:.02,bevelSegments:2}),xe("#6b3518",{roughness:.7}),{shadow:!1})}case"sesame":default:return K(new qt(.05,8,6),xe("#f5e6c0"),{s:[.6,.35,1.2],shadow:!1})}}function Ag(i){switch(i.type){case"kulhad":return Qh(i);case"cutting":return Gw(i);case"glass-tea":return Ww(i);case"cup":return Tg(i);case"pourover":return Yw(i);case"chemex":return qw(i);case"press":return $w(i);case"moka":return Zw();case"davara":return Kw(i);case"affogato":return Jw();case"pizza":return Qw(i);case"burger":return eE(i);case"samosa":return tE();case"vadapav":return nE();case"bunmaska":return iE();case"fries":return rE();case"bowl":return sE();case"croissant":return aE();case"brownie":return oE();case"cake":return lE(i);case"cookie":return cE();default:return Qh()}}function $d(i,e=2,t=0){const n=new xt,r=new xt;r.add(i),r.rotation.x=t;const s=new gr().setFromObject(r),a=s.getSize(new I),o=s.getCenter(new I);r.position.sub(o);const l=e/Math.max(a.x,a.y,a.z);return n.add(r),n.scale.setScalar(l),n.userData={...i.userData,inner:r,model:i,k:l},n}function Cg(i){i.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&[].concat(e.material).forEach(t=>t.dispose())})}function Rg({count:i=150,radius:e=.45,height:t=1.6,size:n=620,color:r="#fff6ea"}={}){const s=new Float32Array(i*3),a=new Float32Array(i),o=new Float32Array(i);for(let h=0;h<i;h++){const f=Math.random()*Math.PI*2,d=Math.sqrt(Math.random())*e;s.set([Math.cos(f)*d,0,Math.sin(f)*d],h*3),a[h]=Math.random(),o[h]=.12+Math.random()*.14}const l=new cn;l.setAttribute("position",new Hn(s,3)),l.setAttribute("aSeed",new Hn(a,1)),l.setAttribute("aSpeed",new Hn(o,1));const c=new Yi({transparent:!0,depthWrite:!1,uniforms:{uTime:{value:0},uH:{value:t},uPx:{value:n*Math.min(window.devicePixelRatio||1,2)},uTex:{value:Wd()},uColor:{value:new tt(r)},uAlpha:{value:1}},vertexShader:`
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
      }`}),u=new fg(l,c);return u.frustumCulled=!1,u.renderOrder=5,u}function hE(i=260){const e=new Float32Array(i*3),t=new Float32Array(i);for(let a=0;a<i;a++)e.set([(Math.random()-.5)*18,(Math.random()-.5)*11,-Math.random()*8+2],a*3),t[a]=Math.random()*100;const n=new cn;n.setAttribute("position",new Hn(e,3)),n.setAttribute("aSeed",new Hn(t,1));const r=new Yi({transparent:!0,depthWrite:!1,blending:sh,uniforms:{uTime:{value:0},uTex:{value:Wd()},uPx:{value:70*Math.min(window.devicePixelRatio||1,2)},uScroll:{value:0}},vertexShader:`
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
      void main() { gl_FragColor = vec4(1.0, 0.72, 0.38, texture2D(uTex, gl_PointCoord).r * vA * 0.5); }`}),s=new fg(n,r);return s.frustumCulled=!1,s}const dE={kulhad:{make:()=>Qh({liquid:"#b9773f"}),size:2,tilt:.32},cup:{make:()=>Tg({style:"cup",liquid:"#c99a6a",art:"heart"}),size:2.3,tilt:.45}},Zp=["leaf","leaf","bean","bean","cardamom","cinnamon","anise","leaf","bean"];class fE{constructor(e){this.canvas=e,this.renderer=Xd(e),this.scene=new Tc,this.camera=new Nn(32,1,.1,60),this.camera.position.set(0,.25,10),Yd(this.scene,this.renderer,{shadowSize:Jh?1024:2048,bounds:5}),this.mouse=new me,this.mouseL=new me,this.scrollV=0,this.clock=new Eg,this.current=null,this.side="right",this.holders={},this.explode=0,this.steams=[],this.defs=dE,this.buildModel("kulhad"),this.chaiLiquid=this.holders.kulhad.userData.model.userData.liquid,this.buildFloaties(),this.dust=hE(),this.scene.add(this.dust),this.ready=this.renderer.compileAsync(this.scene,this.camera).catch(()=>{}),this.resize(),window.addEventListener("resize",()=>this.resize()),window.addEventListener("pointermove",t=>{this.mouse.set(t.clientX/innerWidth*2-1,-(t.clientY/innerHeight)*2+1)}),this.loop=this.loop.bind(this),this.renderer.setAnimationLoop(this.loop)}buildModel(e){if(this.holders[e])return this.holders[e];const t=this.defs[e],n=t.make(),r=$d(n,t.size),s=new xt;s.add(r),s.userData.baseTilt=t.tilt,s.rotation.x=t.tilt;const a=new xt;a.add(s),s.updateMatrixWorld(!0);const o=new gr().setFromObject(s),l=qd(t.size*1.3,.4);if(l.position.y=o.min.y-.3,e!=="pizza"&&a.add(l),a.scale.setScalar(1e-4),a.visible=!1,a.userData={spin:s,pivot:r,model:n,def:t,shadow:l},n.userData.steam){const c=Rg({radius:n.userData.steamR,height:1.8});c.position.copy(n.userData.steam),n.add(c),this.steams.push(c)}return this.scene.add(a),this.holders[e]=a,a}prebuild(){const e=Object.keys(this.defs).filter(r=>!this.holders[r]),t=window.requestIdleCallback||(r=>setTimeout(r,120)),n=()=>{const r=e.shift();if(!r)return;const s=this.buildModel(r),a=s.visible;s.visible=!0,this.renderer.compileAsync(s,this.camera,this.scene).catch(()=>{}).finally(()=>{this.current!==r&&(s.visible=a),t(n,{timeout:1500})})};t(n,{timeout:1500})}buildFloaties(){this.floaties=new xt,this.scene.add(this.floaties);for(let e=0,t=Jh?22:38;e<t;e++){const n=Zp[e%Zp.length],r=uE(n,e+3),s=-Math.random()*7+1.5,a=1+(-s+2)*.25;r.position.set((Math.random()-.5)*14*a,(Math.random()-.5)*9*a,s),r.rotation.set(Math.random()*6,Math.random()*6,Math.random()*6),r.scale.setScalar(1.1+Math.random()*1.4),r.userData={base:r.position.clone(),rs:new I((Math.random()-.5)*.6,(Math.random()-.5)*.6,(Math.random()-.5)*.4),ph:Math.random()*10,depth:.6+(2-s)*.18},this.floaties.add(r)}}resize(){const e=innerWidth,t=innerHeight;this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix();const n=this.camera.position.z;this.viewH=2*Math.tan(Wh.degToRad(this.camera.fov/2))*n,this.viewW=this.viewH*this.camera.aspect,this.narrow=this.camera.aspect<.95,this.current&&this.place(this.holders[this.current],this.side,!0)}target(e){if(this.narrow)return{x:0,y:this.viewH*.2,s:this.viewH*.3/2};const t=Math.min(this.viewH*.4,this.viewW*.28)/2;return{x:e==="left"?-this.viewW*.23:e==="right"?this.viewW*.23:0,y:-.2,s:t}}place(e,t,n=!1){const r=this.target(t);if(n){e.position.set(r.x,r.y,0),e.scale.setScalar(r.s);return}De.to(e.position,{x:r.x,y:r.y,duration:1.4,ease:"expo.inOut"}),De.to(e.scale,{x:r.s,y:r.s,z:r.s,duration:1.2,ease:"expo.inOut"}),De.to(e.userData.spin.rotation,{y:`+=${t==="left"?-Math.PI:Math.PI}`,duration:1.4,ease:"expo.inOut"})}show(e,t="right"){if(e===this.current&&t===this.side)return;const n=this.current&&this.holders[this.current];if(e===this.current&&n){this.side=t,this.place(n,t);return}if(n&&(De.killTweensOf(n.scale),De.to(n.scale,{x:1e-4,y:1e-4,z:1e-4,duration:.55,ease:"power3.in",onComplete:()=>{n.visible=!1}}),De.to(n.position,{y:n.position.y-1.2,duration:.55,ease:"power3.in"}),De.to(n.userData.spin.rotation,{y:"+=2",duration:.55,ease:"power2.in"})),this.current=e==="none"?null:e,this.side=t,!this.current)return;const r=this.buildModel(e),s=this.target(t);De.killTweensOf(r.scale),De.killTweensOf(r.position),r.visible=!0,r.position.set(s.x,s.y-1.5,0),r.userData.spin.rotation.y=-2.4,De.to(r.position,{x:s.x,y:s.y,duration:1.3,ease:"expo.out",delay:n?.25:0}),De.fromTo(r.scale,{x:1e-4,y:1e-4,z:1e-4},{x:s.s,y:s.s,z:s.s,duration:1.3,ease:"back.out(1.4)",delay:n?.25:0}),De.to(r.userData.spin.rotation,{y:0,duration:1.8,ease:"expo.out",delay:n?.25:0})}intro(){this.camera.position.z=16,De.to(this.camera.position,{z:10,duration:2.4,ease:"expo.out"}),this.floaties.children.forEach((e,t)=>{const n=e.scale.x;e.scale.setScalar(1e-4),De.to(e.scale,{x:n,y:n,z:n,duration:1.6,delay:.3+t*.03,ease:"back.out(2)"})})}pour(e,t=.9){const n=this.holders.kulhad;if(!n||this.current!=="kulhad")return;const r=n.userData.model,s=new tt(e).multiplyScalar($o);if(!this.pourRig){const{map:l,alpha:c}=Bw(),u=3.2,h=new xt;h.position.set(0,1.56,0);const f=new lt(.072,.045,1,24,1,!0).translate(0,.5,0),d=new Gi({color:s.clone().multiplyScalar(1.35),map:l.clone(),alphaMap:c,transparent:!0,toneMapped:!1,depthWrite:!1});d.map.needsUpdate=!0;const g=new Lt(f,d);g.visible=!1,h.add(g),r.add(h);const _=[],m=new zd(.1,.115,48).rotateX(-Math.PI/2);for(let x=0;x<5;x++){const v=new Lt(m,new Gi({color:"#fff3e0",transparent:!0,opacity:0,depthWrite:!1,toneMapped:!1}));v.position.y=1.565,r.add(v),_.push(v)}const p=[],y=new qt(.035,10,8);for(let x=0;x<8;x++){const v=new Lt(y,new Gi({color:s,toneMapped:!1}));v.visible=!1,r.add(v),p.push(v)}this.pourRig={rig:h,stream:g,ripples:_,drops:p,H:u,s:0,mode:"off",until:0,nextRipple:0,ri:0}}const a=this.pourRig;a.stream.material.color.copy(s).multiplyScalar(1.35),a.ripples.forEach(l=>l.material.color.copy(s).lerp(new tt("#fff3e0"),.45)),a.drops.forEach(l=>l.material.color.copy(s));const o=this.clock.elapsedTime;(a.mode==="off"||a.mode==="end")&&(a.mode="grow",a.s=0,a.stream.visible=!0,De.killTweensOf(a),De.to(a,{s:1,duration:.35,ease:"power2.in",onComplete:()=>{a.mode="flow",this.splash()}})),a.until=Math.max(a.until,o+.35+t)}splash(){const e=this.pourRig;e.drops.forEach((t,n)=>{const r=n/e.drops.length*Math.PI*2+Math.random()*.6,s=.25+Math.random()*.3;t.visible=!0,t.position.set(0,1.58,0),t.scale.setScalar(.6+Math.random()*.8),De.killTweensOf(t.position),De.to(t.position,{x:Math.cos(r)*s,z:Math.sin(r)*s,duration:.55,ease:"power1.out"}),De.to(t.position,{y:1.85+Math.random()*.35,duration:.25,ease:"power2.out",yoyo:!0,repeat:1,onComplete:()=>{t.visible=!1}})})}tickPour(e){const t=this.pourRig;if(!t||t.mode==="off")return;t.rig.parent.updateWorldMatrix(!0,!1),t.rig.parent.getWorldQuaternion(t.rig.quaternion).invert();const{stream:n,H:r}=t;if(t.mode==="end"?(n.position.y=0,n.scale.set(1,Math.max(.001,r*t.s),1)):(n.position.y=r*(1-t.s),n.scale.set(1+Math.sin(e*40)*.05,Math.max(.001,r*t.s),1+Math.cos(e*37)*.05)),n.material.map.offset.y=e*2.2,t.mode==="flow"&&e>t.until&&(t.mode="end",De.to(t,{s:0,duration:.3,ease:"power2.in",onComplete:()=>{t.mode="off",n.visible=!1}})),t.mode!=="grow"&&t.s>.3&&e>t.nextRipple){t.nextRipple=e+.28;const s=t.ripples[t.ri++%t.ripples.length];De.killTweensOf(s.scale),De.killTweensOf(s.material),s.scale.setScalar(1),s.material.opacity=.32,De.to(s.scale,{x:5.6,z:5.6,duration:1.1,ease:"power2.out"}),De.to(s.material,{opacity:0,duration:1.1,ease:"power1.in"})}}setChaiColor(e){De.to(this.chaiLiquid.color,{...pE(e),duration:.8,ease:"power2.out"})}setExplode(e){this.explode=e}setScroll(e,t){this.scrollP=e,this.scrollV=t}adapt(e){if(document.hidden||e>.5)return;const t=this.perf||(this.perf={n:0,sum:0});if(t.n++,t.sum+=e,t.n<90)return;const n=t.sum/t.n;t.n=t.sum=0;const r=this.renderer.getPixelRatio();n>1/40&&r>1&&(this.renderer.setPixelRatio(Math.max(1,r-.5)),this.resize())}loop(){const e=this.clock.getDelta();this.adapt(e);const t=Math.min(e,.05),n=this.clock.elapsedTime;this.mouseL.lerp(this.mouse,.05);const r=Wh.clamp(this.scrollV||0,-60,60);this.camera.position.x+=(this.mouseL.x*.35-this.camera.position.x)*.06,this.camera.position.y+=(.25+this.mouseL.y*.2-this.camera.position.y)*.06,this.camera.lookAt(0,0,0);for(const a of Object.values(this.holders)){if(!a.visible)continue;const{spin:o,model:l,def:c}=a.userData;o.rotation.y+=t*.35+r*9e-4,o.rotation.x+=(c.tilt-this.mouseL.y*.18-o.rotation.x)*.06,o.rotation.z+=(-this.mouseL.x*.08-o.rotation.z)*.06,o.position.y=Math.sin(n*1.1)*.06;const u=l.userData;if(u.slice){const h=.12+(Math.sin(n*1.4)*.5+.5)*.25;u.slice.position.set(u.sliceDir.x*h,h*.9,u.sliceDir.z*h)}if(u.top){const h=this.explode;if(!u.ranked){const f=[...new Set(l.children.map(d=>(d.userData.y0=d.position.y).toFixed(2)))].sort((d,g)=>d-g);l.children.forEach(d=>d.userData.rank=f.indexOf(d.userData.y0.toFixed(2))),u.ranked=!0}l.children.forEach(f=>{f.position.y=f.userData.y0+f.userData.rank*h*.13+(f===u.top?.04+Math.sin(n*2)*.03:0)})}}this.tickPour(n);for(const a of this.steams)a.material.uniforms.uTime.value=n;this.dust.material.uniforms.uTime.value=n,this.dust.material.uniforms.uScroll.value=(this.scrollP||0)*6;const s=this.scrollP||0;this.floaties.children.forEach(a=>{const{base:o,rs:l,ph:c,depth:u}=a.userData;a.rotation.x+=l.x*t,a.rotation.y+=l.y*t,a.rotation.z+=l.z*t;let h=o.y+Math.sin(n*.5+c)*.3+s*14*u;const f=12;h=((h+f/2)%f+f)%f-f/2,a.position.set(o.x+Math.cos(n*.3+c)*.2-this.mouseL.x*u*.3,h,o.z)}),this.renderer.render(this.scene,this.camera)}}function pE(i){const e=new tt(i).multiplyScalar($o);return{r:e.r,g:e.g,b:e.b}}const Pg={pizza:.55,cake:.15,brownie:.1},Lg={pizza:2.35,burger:1.8};class mE{constructor(e=420){const t=document.createElement("canvas");this.renderer=Xd(t,{preserveDrawingBuffer:!0,maxDpr:1}),this.renderer.setSize(e,e,!1),this.scene=new Tc,this.camera=new Nn(28,1,.1,50),this.camera.position.set(0,2.5,4.7),this.camera.lookAt(0,-.12,0),Yd(this.scene,this.renderer,{shadowSize:1024,bounds:2.5});const n=qd(3,.5);n.position.y=-.98,this.scene.add(n),this.cache=new Map}render(e,t,n="image/png",r){if(this.cache.has(t))return this.cache.get(t);const s=Ag(e),a=$d(s,Lg[e.type]||1.9,Pg[e.type]||0),o=new gr().setFromObject(a);a.position.y=-.95-o.min.y,a.rotation.y=-.55,this.scene.add(a),this.renderer.render(this.scene,this.camera);const l=this.renderer.domElement.toDataURL(n,r);return this.scene.remove(a),Cg(a),this.cache.set(t,l),l}}class gE{constructor(e){this.canvas=e,this.renderer=Xd(e),this.scene=new Tc,this.camera=new Nn(28,1,.1,50),this.camera.position.set(0,1.3,5.6),this.camera.lookAt(0,0,0),Yd(this.scene,this.renderer,{shadowSize:1024,bounds:2.5});const t=qd(2.6,.38);t.position.y=-1,this.scene.add(t),this.rotY=0,this.velY=.008,this.rotX=0,this.clock=new Eg;let n=!1,r=0,s=0;e.addEventListener("pointerdown",o=>{n=!0,r=o.clientX,s=o.clientY,e.setPointerCapture(o.pointerId)}),e.addEventListener("pointermove",o=>{n&&(this.velY=(o.clientX-r)*.006,this.rotX=Wh.clamp(this.rotX+(o.clientY-s)*.004,-.5,.6),r=o.clientX,s=o.clientY)});const a=()=>{n=!1};e.addEventListener("pointerup",a),e.addEventListener("pointercancel",a),this.loop=this.loop.bind(this)}load(e){this.pivot&&(this.scene.remove(this.pivot),Cg(this.pivot));const t=Ag(e);t.userData.steam?(this.steam=Rg({radius:t.userData.steamR,height:1.5,size:260}),this.steam.position.copy(t.userData.steam),t.add(this.steam)):this.steam=null,this.pivot=$d(t,(Lg[e.type]||1.9)*1.05,Pg[e.type]||0);const n=new gr().setFromObject(this.pivot);this.pivot.position.y=-1-n.min.y,this.scene.add(this.pivot),this.rotY=-.6,this.velY=.04,this.resize()}resize(){const e=this.canvas.getBoundingClientRect();e.width&&(this.renderer.setSize(e.width,e.height,!1),this.camera.aspect=e.width/e.height,this.camera.updateProjectionMatrix())}start(){this.renderer.setAnimationLoop(this.loop)}stop(){this.renderer.setAnimationLoop(null)}loop(){const e=this.clock.getElapsedTime();if(this.velY+=(.006-this.velY)*.03,this.rotY+=this.velY,this.pivot){this.pivot.rotation.y=this.rotY,this.pivot.rotation.x+=(this.rotX-this.pivot.rotation.x)*.1;const t=this.pivot.userData.model.userData.slice;if(t){const n=.12+(Math.sin(e*1.4)*.5+.5)*.25,r=this.pivot.userData.model.userData.sliceDir;t.position.set(r.x*n,n*.9,r.z*n)}}this.steam&&(this.steam.material.uniforms.uTime.value=e),this.renderer.render(this.scene,this.camera)}}const Zd=[{id:"chai",label:"Chai",note:"Brewed fresh, every single cup"},{id:"black",label:"Black Coffee",note:"No milk. Just the bean, done right"},{id:"coffee",label:"Milk Coffee",note:"Espresso meets steamed milk"},{id:"cold",label:"Cold & Iced",note:"Slow-steeped, poured over ice"},{id:"pizza",label:"Pizza",note:"Hand-stretched, stone-baked"},{id:"burger",label:"Burgers",note:"Toasted brioche, stacked high"},{id:"snacks",label:"Snacks",note:"The perfect chai companions"},{id:"dessert",label:"Desserts",note:"A sweet last sip"}],nr=(i,e={})=>({type:"kulhad",liquid:i,...e}),Rt=(i,e,t={})=>({type:"cup",style:i,liquid:e,...t}),Ls=[{id:"masala",cat:"chai",name:"Masala Chai",price:79,tag:"Bestseller",veg:!0,desc:"Assam CTC simmered with ginger, cardamom, clove, cinnamon & black pepper.",model:nr("#b9773f")},{id:"adrak",cat:"chai",name:"Adrak Chai",price:69,veg:!0,desc:"Fiery fresh-crushed ginger, boiled kadak the way the highways do it.",model:nr("#bf8045")},{id:"elaichi",cat:"chai",name:"Elaichi Chai",price:69,veg:!0,desc:"Green cardamom pods pounded fresh, gentle and fragrant.",model:nr("#c58d55")},{id:"cutting",cat:"chai",name:"Mumbai Cutting",price:39,tag:"Half glass",veg:!0,desc:"Half a glass, full strength. Strong, sweet, and over too soon.",model:{type:"cutting",liquid:"#a9692f"}},{id:"kesar",cat:"chai",name:"Kesar Chai",price:129,tag:"Premium",veg:!0,desc:"Kashmiri saffron threads bloomed in full-cream milk.",model:nr("#d39a4a")},{id:"tulsi",cat:"chai",name:"Tulsi Ginger",price:79,veg:!0,desc:"Holy basil and ginger, the immunity cup grandmothers swear by.",model:nr("#b88247")},{id:"kahwa",cat:"chai",name:"Kashmiri Kahwa",price:119,veg:!0,desc:"Green tea, saffron, almonds and cinnamon. No milk, all warmth.",model:{type:"glass-tea",liquid:"#d9a63a"}},{id:"noon",cat:"chai",name:"Noon (Pink) Chai",price:139,tag:"New",veg:!0,desc:"Salted Kashmiri pink tea topped with crushed pistachio.",model:nr("#d79a9a")},{id:"irani",cat:"chai",name:"Irani Dum Chai",price:89,veg:!0,desc:"Hyderabadi dum-brewed tea mixed with thickened khoya milk.",model:nr("#c99662")},{id:"sulaimani",cat:"chai",name:"Sulaimani",price:69,veg:!0,desc:"Malabar black tea with lemon, mint and a touch of spice.",model:{type:"glass-tea",liquid:"#9a3d14"}},{id:"lemon",cat:"chai",name:"Lemongrass Honey",price:79,veg:!0,desc:"Light black tea, fresh lemongrass, wild forest honey.",model:{type:"glass-tea",liquid:"#c27a1c"}},{id:"gur",cat:"chai",name:"Gur Wali Chai",price:89,veg:!0,desc:"Sweetened with organic jaggery instead of sugar. Earthy and rich.",model:nr("#a46a38")},{id:"chocochai",cat:"chai",name:"Chocolate Chai",price:119,veg:!0,desc:"Masala chai stirred with 54% dark Belgian chocolate.",model:nr("#7d4a2a")},{id:"dirty",cat:"chai",name:"Dirty Chai",price:149,tag:"Chai × Coffee",veg:!0,desc:"Masala chai latte with a double shot of espresso dropped in.",model:Rt("latte-glass","#9a6236",{layers:["#3b1d0e","#b07a48","#efe0c9"]})},{id:"espresso",cat:"black",name:"Espresso",price:99,veg:!0,desc:"18g in, 36g out, 27 seconds. Thick, syrupy, crowned with crema.",model:Rt("espresso","#2a1408",{crema:!0})},{id:"ristretto",cat:"black",name:"Ristretto",price:99,veg:!0,desc:"A shorter, more concentrated shot. Sweeter, less bitter.",model:Rt("espresso","#1f0e05",{crema:!0})},{id:"doppio",cat:"black",name:"Doppio",price:139,veg:!0,desc:"A double espresso for the double deadline.",model:Rt("espresso","#24110a",{crema:!0})},{id:"lungo",cat:"black",name:"Lungo",price:119,veg:!0,desc:"A long pull through the same puck. Lighter body, more bitterness.",model:Rt("cup","#2a1408",{crema:!0})},{id:"americano",cat:"black",name:"Americano",price:139,tag:"Classic",veg:!0,desc:"Espresso topped with hot water. Smooth, long, endlessly drinkable.",model:Rt("cup","#2b160a")},{id:"longblack",cat:"black",name:"Long Black",price:139,veg:!0,desc:"Hot water first, espresso on top, so the crema survives.",model:Rt("cup","#2b160a",{crema:!0})},{id:"pourover",cat:"black",name:"V60 Pour Over",price:189,tag:"Single origin",veg:!0,desc:"Chikmagalur single estate, hand-poured. Bright, floral, clean.",model:{type:"pourover",liquid:"#4a200c"}},{id:"chemex",cat:"black",name:"Chemex",price:219,veg:!0,desc:"A thick paper filter makes for a tea-like clarity. Serves two.",model:{type:"chemex",liquid:"#51230e"}},{id:"frenchpress",cat:"black",name:"French Press",price:179,veg:!0,desc:"Four-minute immersion. Full-bodied, oily, unapologetic.",model:{type:"press",liquid:"#2c1409"}},{id:"aeropress",cat:"black",name:"AeroPress",price:169,veg:!0,desc:"Pressure plus immersion. Clean cup, rich body, under two minutes.",model:Rt("mug","#30170a")},{id:"moka",cat:"black",name:"Moka Pot",price:149,veg:!0,desc:"Stovetop Italian-style. Strong, bold and a little rustic.",model:{type:"moka"}},{id:"turkish",cat:"black",name:"Turkish Coffee",price:159,veg:!0,desc:"Powder-fine grounds simmered in a cezve with cardamom.",model:Rt("espresso","#1a0b04",{crema:!0,foamColor:"#6b4a2a"})},{id:"filter-black",cat:"black",name:"Drip Filter",price:119,veg:!0,desc:"Batch-brewed house blend. Your everyday honest cup.",model:Rt("mug","#2d150a")},{id:"redeye",cat:"black",name:"Red Eye",price:169,tag:"Extra kick",veg:!0,desc:"Drip coffee with a shot of espresso. For the all-nighters.",model:Rt("mug","#1e0d05",{crema:!0})},{id:"cappuccino",cat:"coffee",name:"Cappuccino",price:169,tag:"Bestseller",veg:!0,desc:"Equal thirds espresso, steamed milk and velvet foam.",model:Rt("cup","#c99a6a",{art:"heart"})},{id:"latte",cat:"coffee",name:"Caffè Latte",price:179,veg:!0,desc:"A single shot under lots of silky steamed milk.",model:Rt("latte-glass","#c49468",{layers:["#4a2512","#d3b08c","#f3e6d4"]})},{id:"flatwhite",cat:"coffee",name:"Flat White",price:179,veg:!0,desc:"Double ristretto, micro-foam, stronger coffee flavour.",model:Rt("cup","#b98656",{art:"rosetta"})},{id:"cortado",cat:"coffee",name:"Cortado",price:159,veg:!0,desc:'Espresso "cut" with an equal amount of warm milk.',model:Rt("latte-glass","#9b6a40",{layers:["#4a2512","#c79a70"],small:!0})},{id:"macchiato",cat:"coffee",name:"Macchiato",price:129,veg:!0,desc:'Espresso "stained" with a spoon of milk foam.',model:Rt("espresso","#4a2512",{art:"dot"})},{id:"mocha",cat:"coffee",name:"Café Mocha",price:199,veg:!0,desc:"Espresso, dark chocolate, steamed milk and cocoa dust.",model:Rt("mug","#6e3d22",{art:"heart",cocoa:!0})},{id:"kaapi",cat:"coffee",name:"Filter Kaapi",price:89,tag:"South Indian",veg:!0,desc:"Chicory decoction frothed between davara and tumbler.",model:{type:"davara",liquid:"#b9824f"}},{id:"piccolo",cat:"coffee",name:"Piccolo Latte",price:149,veg:!0,desc:"A ristretto in a tiny glass with silky milk. Small but mighty.",model:Rt("latte-glass","#a57347",{layers:["#3b1d0e","#d0aa82"],small:!0})},{id:"irish",cat:"coffee",name:"Irish-style Coffee",price:229,veg:!0,desc:"Black coffee, brown sugar, cream float (zero proof).",model:Rt("latte-glass","#2b160a",{layers:["#2b160a","#2b160a","#f2e8d8"]})},{id:"dalgona",cat:"coffee",name:"Dalgona",price:189,veg:!0,desc:"Whipped coffee cloud spooned over cold milk.",model:Rt("latte-glass","#e9dccb",{layers:["#f2ebe0","#f2ebe0","#c58a4c"]})},{id:"coldbrew",cat:"cold",name:"Cold Brew",price:199,tag:"18 hr steep",veg:!0,desc:"Steeped 18 hours in cold water. Low acid, naturally sweet.",model:Rt("iced","#3a1a0a")},{id:"nitro",cat:"cold",name:"Nitro Cold Brew",price:239,veg:!0,desc:"Nitrogen-infused cold brew with a creamy, stout-like head.",model:Rt("iced","#2b1308",{foam:"#c9a37a",noIce:!0})},{id:"icedamericano",cat:"cold",name:"Iced Americano",price:169,veg:!0,desc:"Double espresso over ice and chilled water.",model:Rt("iced","#3d1d0c")},{id:"icedlatte",cat:"cold",name:"Iced Latte",price:199,veg:!0,desc:"Espresso cascading through cold milk and ice.",model:Rt("iced","#c39a72",{layers:["#f0e4d2","#a87650","#4a2512"]})},{id:"frappe",cat:"cold",name:"Classic Frappé",price:219,veg:!0,desc:"Blended coffee, milk and ice with a whipped-cream cap.",model:Rt("iced","#b98a63",{cream:!0,noIce:!0})},{id:"vietnamese",cat:"cold",name:"Vietnamese Iced",price:209,veg:!0,desc:"Phin-dripped dark roast over condensed milk and ice.",model:Rt("iced","#7a4523",{layers:["#e9d9bd","#5a2c12","#5a2c12"]})},{id:"icedchai",cat:"cold",name:"Iced Chai Latte",price:179,veg:!0,desc:"Masala chai concentrate shaken with cold milk over ice.",model:Rt("iced","#c99868")},{id:"affogato",cat:"cold",name:"Affogato",price:219,veg:!0,desc:'Vanilla gelato "drowned" in a hot espresso shot.',model:{type:"affogato"}},{id:"margherita",cat:"pizza",name:"Margherita",price:299,veg:!0,desc:"San Marzano tomato, fior di latte, basil, extra-virgin olive oil.",model:{type:"pizza",toppings:["basil"]}},{id:"paneertikka",cat:"pizza",name:"Paneer Tikka",price:379,tag:"Bestseller",veg:!0,desc:"Tandoori paneer, charred onion, capsicum, mint mayo drizzle.",model:{type:"pizza",toppings:["paneer","onion","capsicum"]}},{id:"farmhouse",cat:"pizza",name:"Farmhouse",price:349,veg:!0,desc:"Mushroom, capsicum, sweet corn, olives, red onion.",model:{type:"pizza",toppings:["mushroom","capsicum","corn","olive"]}},{id:"peri",cat:"pizza",name:"Peri Peri Veg",price:349,veg:!0,desc:"Smoky peri peri sauce, jalapeño, onion, golden corn.",model:{type:"pizza",toppings:["jalapeno","corn","onion"],sauce:"#b8361a"}},{id:"fourcheese",cat:"pizza",name:"Quattro Formaggi",price:429,veg:!0,desc:"Mozzarella, cheddar, parmesan and a little blue cheese.",model:{type:"pizza",toppings:[],cheese:"#f7d98c"}},{id:"pepperoni",cat:"pizza",name:"Chicken Pepperoni",price:449,veg:!1,desc:"Cured chicken pepperoni, oregano, mozzarella pull.",model:{type:"pizza",toppings:["pepperoni"]}},{id:"bbq",cat:"pizza",name:"BBQ Chicken",price:449,veg:!1,desc:"Smoked chicken, BBQ glaze, red onion, coriander.",model:{type:"pizza",toppings:["chicken","onion","basil"],sauce:"#6e2410"}},{id:"classicveg",cat:"burger",name:"Classic Veg",price:199,veg:!0,desc:"Crunchy veggie patty, lettuce, tomato, onion, house sauce.",model:{type:"burger",patty:"veg"}},{id:"tikki",cat:"burger",name:"Aloo Tikki Masala",price:169,tag:"Desi",veg:!0,desc:"Spiced potato tikki, mint chutney, pickled onion.",model:{type:"burger",patty:"tikki",cheese:!1}},{id:"paneerburger",cat:"burger",name:"Crispy Paneer",price:249,veg:!0,desc:"Panko-crusted paneer slab, chipotle mayo, slaw.",model:{type:"burger",patty:"paneer"}},{id:"smash",cat:"burger",name:"Double Smash Chicken",price:329,tag:"Loaded",veg:!1,desc:"Two smashed chicken patties, double cheddar, burger sauce.",model:{type:"burger",patty:"chicken",double:!0}},{id:"zinger",cat:"burger",name:"Spicy Crunch Chicken",price:279,veg:!1,desc:"Buttermilk-fried thigh, hot honey, pickles, lettuce.",model:{type:"burger",patty:"crispy",cheese:!1}},{id:"mushroomswiss",cat:"burger",name:"Mushroom & Cheese",price:269,veg:!0,desc:"Garlic mushroom ragout, melted cheese, caramelised onion.",model:{type:"burger",patty:"veg",double:!1,tomato:!1}},{id:"samosa",cat:"snacks",name:"Punjabi Samosa (2)",price:69,veg:!0,desc:"Flaky pastry, spiced potato & peas, tamarind chutney.",model:{type:"samosa"}},{id:"vadapav",cat:"snacks",name:"Vada Pav",price:59,tag:"Mumbai",veg:!0,desc:"Batata vada in a soft pav with dry garlic chutney.",model:{type:"vadapav"}},{id:"bunmaska",cat:"snacks",name:"Bun Maska",price:59,veg:!0,desc:"Soft bun, slathered in Amul butter. Dip it in your chai.",model:{type:"bunmaska"}},{id:"fries",cat:"snacks",name:"Peri Peri Fries",price:129,veg:!0,desc:"Skin-on fries, tossed in peri peri masala.",model:{type:"fries"}},{id:"maggi",cat:"snacks",name:"Masala Maggi",price:99,veg:!0,desc:"The hostel classic, loaded with veggies and cheese.",model:{type:"bowl"}},{id:"croissant",cat:"snacks",name:"Butter Croissant",price:149,veg:!0,desc:"Laminated with French butter, baked every morning.",model:{type:"croissant"}},{id:"brownie",cat:"dessert",name:"Fudge Brownie",price:149,veg:!0,desc:"Dense dark-chocolate brownie, served warm.",model:{type:"brownie"}},{id:"tiramisu",cat:"dessert",name:"Tiramisu",price:229,veg:!0,desc:"Espresso-soaked sponge, mascarpone, cocoa.",model:{type:"cake",layers:["#6b3e22","#f1e2c8","#6b3e22","#f1e2c8"],top:"#5a321a"}},{id:"cheesecake",cat:"dessert",name:"Gulab Jamun Cheesecake",price:249,tag:"Fusion",veg:!0,desc:"Baked cheesecake with a gulab jamun crown.",model:{type:"cake",layers:["#b98a52","#f6ead2","#f6ead2"],top:"#8a3a18"}},{id:"cookie",cat:"dessert",name:"Choco Chunk Cookie",price:99,veg:!0,desc:"Crisp edges, gooey centre, sea-salt flakes.",model:{type:"cookie"}}],Pc={base:[{id:"assam",label:"Assam CTC",price:0,tint:[0,0]},{id:"darjeeling",label:"Darjeeling",price:30,tint:[.04,.03]},{id:"nilgiri",label:"Nilgiri",price:20,tint:[.02,.01]},{id:"green",label:"Green Tea",price:20,tint:[.12,.08]}],milk:[{id:"full",label:"Full Cream",price:0,milk:.55},{id:"toned",label:"Toned",price:0,milk:.42},{id:"oat",label:"Oat Milk",price:40,milk:.5},{id:"almond",label:"Almond",price:50,milk:.46},{id:"none",label:"No Milk",price:0,milk:0}],strength:[{id:"light",label:"Light",price:0,s:.3},{id:"regular",label:"Regular",price:0,s:.55},{id:"kadak",label:"Kadak",price:10,s:.85}],sweet:[{id:"none",label:"No Sugar",price:0},{id:"less",label:"Less",price:0},{id:"regular",label:"Regular",price:0},{id:"jaggery",label:"Jaggery",price:15},{id:"honey",label:"Honey",price:20}],addins:[{id:"ginger",label:"Adrak",price:10},{id:"cardamom",label:"Elaichi",price:10},{id:"tulsi",label:"Tulsi",price:10},{id:"cinnamon",label:"Dalchini",price:10},{id:"saffron",label:"Kesar",price:40},{id:"mint",label:"Pudina",price:10},{id:"lemongrass",label:"Lemongrass",price:10},{id:"clove",label:"Laung",price:10}],size:[{id:"cutting",label:"Cutting",ml:90,price:49},{id:"regular",label:"Regular",ml:180,price:79},{id:"large",label:"Large",ml:300,price:119},{id:"flask",label:"Flask (4)",ml:750,price:279}]},Ve={espresso:"#3b1d0e",crema:"#b07a3e",water:"#5a2d14",milk:"#e8d6bd",foam:"#f6efe4",choc:"#4a2414",cream:"#fbf6ee",ice:"#cfe3ea",brew:"#4a2310",condensed:"#e9d4a8",sugar:"#d9b77a",gelato:"#f7ecd2",whisk:"#d6a86a"},Dg=[{id:"espresso",name:"Espresso",family:"Black",origin:"Italy, 1901",ml:36,caffeine:63,strength:5,temp:"Hot",desc:"Hot water forced through finely ground coffee at 9 bar. The base of almost everything else.",layers:[[Ve.espresso,80,"Espresso"],[Ve.crema,20,"Crema"]]},{id:"ristretto",name:"Ristretto",family:"Black",origin:"Italy",ml:20,caffeine:50,strength:5,temp:"Hot",desc:'"Restricted" shot, with the same coffee and half the water. Sweeter, syrupy, less bitter.',layers:[[Ve.espresso,75,"Ristretto"],[Ve.crema,25,"Crema"]]},{id:"doppio",name:"Doppio",family:"Black",origin:"Italy",ml:60,caffeine:126,strength:5,temp:"Hot",desc:"A double espresso: two shots pulled from a double basket.",layers:[[Ve.espresso,85,"Double espresso"],[Ve.crema,15,"Crema"]]},{id:"lungo",name:"Lungo",family:"Black",origin:"Italy",ml:110,caffeine:80,strength:4,temp:"Hot",desc:'A "long" espresso: more water pushed through the same puck. More bitter, more volume.',layers:[[Ve.espresso,88,"Long shot"],[Ve.crema,12,"Crema"]]},{id:"americano",name:"Americano",family:"Black",origin:"Italy / USA, WWII",ml:240,caffeine:126,strength:3,temp:"Hot",desc:"Espresso diluted with hot water, the story goes, for American GIs who wanted drip-style coffee.",layers:[[Ve.espresso,33,"Espresso"],[Ve.water,67,"Hot water"]]},{id:"longblack",name:"Long Black",family:"Black",origin:"Australia / NZ",ml:180,caffeine:126,strength:3,temp:"Hot",desc:"Water first, espresso on top, so the crema stays intact. An Antipodean favourite.",layers:[[Ve.water,60,"Hot water"],[Ve.espresso,32,"Double espresso"],[Ve.crema,8,"Crema"]]},{id:"redeye",name:"Red Eye",family:"Black",origin:"USA",ml:300,caffeine:200,strength:4,temp:"Hot",desc:"Drip coffee with a shot of espresso added. Named for the overnight flight.",layers:[[Ve.brew,80,"Drip coffee"],[Ve.espresso,20,"Espresso shot"]]},{id:"pourover",name:"Pour Over",family:"Black",origin:"Germany, 1908",ml:250,caffeine:140,strength:2,temp:"Hot",desc:"Hand-poured through a paper filter (V60, Kalita, Chemex). Clean, bright and aromatic.",layers:[[Ve.brew,100,"Filtered brew"]]},{id:"frenchpress",name:"French Press",family:"Black",origin:"France / Italy, 1929",ml:300,caffeine:160,strength:3,temp:"Hot",desc:"Coarse grounds steeped four minutes, then pressed with a metal mesh. Heavy and oily.",layers:[[Ve.brew,95,"Immersion brew"],[Ve.crema,5,"Bloom oils"]]},{id:"turkish",name:"Turkish",family:"Black",origin:"Ottoman Empire, 1500s",ml:70,caffeine:65,strength:5,temp:"Hot",desc:"Powder-fine coffee simmered in a cezve, served unfiltered with its foam. UNESCO heritage.",layers:[[Ve.espresso,78,"Unfiltered coffee"],["#7b5636",22,"Köpük foam"]]},{id:"coldbrew",name:"Cold Brew",family:"Cold",origin:"Japan (Kyoto), 1600s",ml:350,caffeine:200,strength:3,temp:"Cold",desc:"Steeped 12 to 24 hours in cold water. Smooth, chocolatey, about 60% less acidic.",layers:[[Ve.ice,30,"Ice"],[Ve.brew,70,"Cold brew"]]},{id:"nitro",name:"Nitro Cold Brew",family:"Cold",origin:"USA, 2012",ml:350,caffeine:215,strength:3,temp:"Cold",desc:"Cold brew infused with nitrogen on tap, for a creamy, cascading Guinness-like texture.",layers:[[Ve.brew,82,"Nitro brew"],["#cda57b",18,"Nitro head"]]},{id:"macchiato",name:"Macchiato",family:"Milk",origin:"Italy, 1980s",ml:45,caffeine:63,strength:5,temp:"Hot",desc:'Espresso "stained" with a dollop of milk foam.',layers:[[Ve.espresso,70,"Espresso"],[Ve.foam,30,"Foam dot"]]},{id:"cortado",name:"Cortado",family:"Milk",origin:"Spain",ml:120,caffeine:126,strength:4,temp:"Hot",desc:'Espresso "cut" with an equal part of warm milk, with little to no foam.',layers:[[Ve.espresso,50,"Espresso"],[Ve.milk,50,"Warm milk"]]},{id:"piccolo",name:"Piccolo",family:"Milk",origin:"Australia",ml:100,caffeine:50,strength:4,temp:"Hot",desc:"A ristretto topped with steamed milk in a tiny glass. A baby latte.",layers:[[Ve.espresso,30,"Ristretto"],[Ve.milk,55,"Steamed milk"],[Ve.foam,15,"Micro-foam"]]},{id:"flatwhite",name:"Flat White",family:"Milk",origin:"Australia / NZ, 1980s",ml:160,caffeine:130,strength:4,temp:"Hot",desc:"Double ristretto, steamed milk, and a thin velvety micro-foam layer.",layers:[[Ve.espresso,33,"Double ristretto"],[Ve.milk,57,"Steamed milk"],[Ve.foam,10,"Micro-foam"]]},{id:"cappuccino",name:"Cappuccino",family:"Milk",origin:"Italy / Austria",ml:180,caffeine:63,strength:3,temp:"Hot",desc:"The classic thirds: espresso, steamed milk, a thick cap of foam. Named after Capuchin robes.",layers:[[Ve.espresso,33,"Espresso"],[Ve.milk,33,"Steamed milk"],[Ve.foam,34,"Milk foam"]]},{id:"latte",name:"Caffè Latte",family:"Milk",origin:"Italy / USA",ml:300,caffeine:63,strength:2,temp:"Hot",desc:"Espresso with plenty of steamed milk and a light foam layer. The canvas for latte art.",layers:[[Ve.espresso,17,"Espresso"],[Ve.milk,73,"Steamed milk"],[Ve.foam,10,"Light foam"]]},{id:"mocha",name:"Mocha",family:"Milk",origin:"Yemen (name) / USA",ml:300,caffeine:95,strength:3,temp:"Hot",desc:"A latte with chocolate. Named after the Yemeni port of Mokha.",layers:[[Ve.choc,20,"Chocolate"],[Ve.espresso,20,"Espresso"],[Ve.milk,45,"Steamed milk"],[Ve.cream,15,"Whipped cream"]]},{id:"irish",name:"Irish Coffee",family:"Milk",origin:"Ireland, 1943",ml:240,caffeine:95,strength:3,temp:"Hot",desc:"Hot coffee and brown sugar, with lightly whipped cream floated on top (we serve it zero-proof).",layers:[[Ve.sugar,8,"Brown sugar"],[Ve.brew,67,"Hot coffee"],[Ve.cream,25,"Cream float"]]},{id:"kaapi",name:"Filter Kaapi",family:"Milk",origin:"South India",ml:150,caffeine:90,strength:4,temp:"Hot",desc:"Coffee-chicory decoction from a brass filter, frothed with boiled milk in a davara.",layers:[[Ve.espresso,30,"Decoction"],[Ve.milk,55,"Boiled milk"],[Ve.foam,15,"Pulled froth"]]},{id:"vietnamese",name:"Vietnamese Iced",family:"Cold",origin:"Vietnam, 1850s",ml:200,caffeine:150,strength:5,temp:"Cold",desc:"Dark robusta slow-dripped through a phin onto sweetened condensed milk.",layers:[[Ve.condensed,25,"Condensed milk"],[Ve.espresso,45,"Phin coffee"],[Ve.ice,30,"Ice"]]},{id:"dalgona",name:"Dalgona",family:"Cold",origin:"South Korea / India",ml:250,caffeine:80,strength:2,temp:"Cold",desc:"Instant coffee, sugar and water whipped into a cloud and spooned over cold milk.",layers:[[Ve.milk,65,"Cold milk"],[Ve.whisk,35,"Whipped coffee"]]},{id:"affogato",name:"Affogato",family:"Dessert",origin:"Italy",ml:90,caffeine:63,strength:4,temp:"Hot + Cold",desc:'A scoop of vanilla gelato "drowned" in a shot of hot espresso.',layers:[[Ve.gelato,60,"Gelato"],[Ve.espresso,40,"Espresso"]]}],_E=["All","Black","Milk","Cold","Dessert"],vE=[{city:"Hyderabad",area:"Jubilee Hills · Road No. 36",hours:"7 AM – 1 AM",feat:["Drive-thru","Rooftop","Wi-Fi"]},{city:"Bengaluru",area:"Indiranagar · 100 Ft Road",hours:"7 AM – 12 AM",feat:["Roastery","Pet friendly","Wi-Fi"]},{city:"Mumbai",area:"Bandra West · Carter Road",hours:"6 AM – 1 AM",feat:["Sea view","Cutting bar"]},{city:"New Delhi",area:"Hauz Khas Village",hours:"8 AM – 12 AM",feat:["Live music","Wi-Fi"]},{city:"Pune",area:"Koregaon Park · Lane 5",hours:"7 AM – 12 AM",feat:["Garden","Pet friendly"]},{city:"Chennai",area:"Besant Nagar · Elliot’s Beach",hours:"6 AM – 11 PM",feat:["Filter kaapi bar","Beachside"]}],xE=[{name:"Ananya R.",where:"Hyderabad",text:"The kesar chai in a kulhad on a rainy evening… I keep coming back. The paneer tikka pizza is criminally good.",c:"#e8a33d"},{name:"Rohit M.",where:"Bengaluru",text:"Finally a place that does a proper V60 AND a proper cutting chai. My whole team runs on this.",c:"#8fa65a"},{name:"Sara K.",where:"Mumbai",text:"Built my own chai with oat milk, kadak, jaggery and tulsi. They nailed it, and the app remembers it.",c:"#c65d33"},{name:"Vikram S.",where:"Pune",text:"Double smash chicken burger plus an iced americano is the perfect Sunday. Ten out of ten.",c:"#f4c069"},{name:"Meera J.",where:"Chennai",text:"Their filter kaapi tastes like my grandmother’s kitchen. Davara, tumbler, the works.",c:"#d79a9a"},{name:"Arjun P.",where:"Delhi",text:"The Coffee Atlas taught me what a cortado actually is. Ordered one. Life changed (a little).",c:"#b9a58f"}],Ha=matchMedia("(prefers-reduced-motion: reduce)").matches;function yE(){const i=document.createElement("div");i.className="progress",i.innerHTML="<i></i>",document.body.append(i);const e=i.firstChild;return t=>{e.style.transform=`scaleX(${t})`}}const Kp="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/·";function Jp(i,e=.9){if(Ha)return;const t=i.dataset.text||(i.dataset.text=i.textContent),n={p:0};De.to(n,{p:1,duration:e,ease:"none",onUpdate:()=>{const r=Math.floor(n.p*t.length);let s=t.slice(0,r);for(let a=r;a<t.length;a++)s+=t[a]===" "?" ":Kp[Math.random()*Kp.length|0];i.textContent=s},onComplete:()=>{i.textContent=t}})}function ME(i,e,t="#b9773f"){var d;const n=document.getElementById("cartBtn");if(!i||!n||Ha)return Promise.resolve();const r=i.getBoundingClientRect();if(!r.width)return Promise.resolve();(d=document.getElementById("nav"))==null||d.classList.remove("hidden");const s=Math.min(140,Math.max(56,r.width*.6)),a=document.createElement("div");a.className="fly",a.style.width=a.style.height=s+"px",a.innerHTML=e?`<img src="${e}" alt="">`:`<span style="background:${t}"></span>`,document.body.append(a);const o=r.left+r.width/2-s/2,l=r.top+r.height/2-s/2,c=De.parseEase("power1.in"),u=De.parseEase("power3.out"),h={p:0},f=()=>{const g=n.getBoundingClientRect(),_=g.left+g.width/2-s/2,m=g.top+g.height/2-s/2,p=h.p;De.set(a,{x:o+(_-o)*c(p),y:l+(m-l)*u(p),scale:1-.78*p,rotate:320*p,opacity:p>.85?(1-p)/.15:1})};return f(),new Promise(g=>{De.to(h,{p:1,duration:.9,ease:"power1.inOut",onUpdate:f,onComplete:()=>{a.remove(),g()}})})}function SE(i=1){const e=document.getElementById("cartBtn");if(!e)return;const t=e.getBoundingClientRect(),n=document.createElement("span");n.className="plus-one",n.textContent="+"+i,document.body.append(n),De.fromTo(n,{x:t.left+t.width/2-10,y:t.top+4,opacity:1,scale:.6},{y:t.top-34,scale:1.1,opacity:0,duration:.9,ease:"power2.out",onComplete:()=>n.remove()})}function bE(i,e=46){if(Ha||!i)return;const t=i.getBoundingClientRect(),n=t.left+t.width/2,r=t.top+t.height/2,s=["leaf","bean","spark","spark","leaf"];for(let a=0;a<e;a++){const o=document.createElement("i");o.className="confetti "+s[a%s.length],document.body.append(o);const l=Math.random()*Math.PI*2,c=160+Math.random()*260;De.set(o,{x:n,y:r,rotate:Math.random()*360}),De.timeline({onComplete:()=>o.remove()}).to(o,{x:n+Math.cos(l)*c,duration:1.6+Math.random()*.6,ease:"power2.out"},0).to(o,{y:r+Math.sin(l)*c*.7-120,duration:.6,ease:"power2.out"},0).to(o,{y:`+=${320+Math.random()*200}`,duration:1.3,ease:"power1.in"},.6).to(o,{rotate:`+=${(Math.random()-.5)*900}`,duration:1.9,ease:"none"},0).to(o,{opacity:0,duration:.4},1.5)}}function wE(i,e=22){if(Ha||!i)return;const t=document.createElement("div");t.className="embers",t.setAttribute("aria-hidden","true"),t.innerHTML=Array.from({length:e},()=>{const n=Math.random()*100,r=4+Math.random()*6,s=-Math.random()*10,a=2+Math.random()*4,o=(Math.random()-.5)*120;return`<i style="left:${n}%;--d:${r}s;--del:${s}s;--s:${a}px;--dx:${o}px"></i>`}).join(""),i.prepend(t)}const EE='<span class="wisps" aria-hidden="true"><i></i><i></i><i></i></span>',jp={pizza:"img/pizza-real.webp"};function TE(i){const e=document.createElement("div");e.className="real-food real-pizza",e.setAttribute("aria-hidden","true"),e.innerHTML=`<div class="rf-shadow"></div>
    <div class="rp-spin">
      <img class="rp-base" src="${jp.pizza}" alt="" decoding="async">
      <div class="rp-gap"></div>
      <div class="rp-cheese"><i></i><i></i><i></i></div>
      <div class="rp-lift"><img src="${jp.pizza}" alt="" decoding="async"></div>
    </div>`,i.prepend(e);const t=e.querySelector(".rp-lift"),n=e.querySelector(".rp-gap"),r=e.querySelectorAll(".rp-cheese i"),s=De.timeline({repeat:-1,repeatDelay:1.4,paused:!0,delay:.6});return s.to(t,{xPercent:-1.2,yPercent:-7.6,scale:1.035,duration:1.2,ease:"power2.out"},0).to(n,{opacity:1,duration:.5},0).fromTo(r,{scaleY:0,opacity:.95},{scaleY:1,duration:1.2,ease:"power2.out",stagger:.06},0).to(r,{opacity:0,duration:.25,stagger:.08},1.3).to(t,{xPercent:0,yPercent:0,scale:1,duration:1.1,ease:"power2.inOut"},2.9).to(n,{opacity:0,duration:.6},3.3),{el:e,play:a=>{e.classList.toggle("playing",a),Ha||(a?s.play():s.pause())}}}const Qp=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2;function AE(i,e,t="C",n){var A;const r=document.createElement("div");r.className="real-food real-burger",r.innerHTML=`<div class="rf-shadow"></div><div class="rb-rig"></div>
    ${Object.keys(e).length>1?`<div class="rb-switch" role="group" aria-label="Burger photo option">${Object.keys(e).map(b=>`<button data-opt="${b}">${b}</button>`).join("")}</div>`:""}`,i.prepend(r);const s=r.querySelector(".rb-rig"),a=r.querySelector(".rf-shadow");let o=[],l=[],c=[],u={},h=0,f=!1,d=0,g=0,_=0,m=0,p=0;function y(b){o=e[b],r.querySelectorAll(".rb-switch button").forEach(P=>P.classList.toggle("active",P.dataset.opt===b));const w=o.length,C=o[w-1],S=C.x+C.w/2;l=new Array(w),l[w-1]={x:C.x,y:C.y};for(let P=w-2;P>=0;P--){const U=o[P],k=o[P+1];l[P]={x:U.x+(S-U.w/2-U.x)*.75,y:l[P+1].y+.5*Math.min(U.h,k.h)-U.h}}const M=P=>({x0:Math.min(...P.map(U=>U.x)),x1:Math.max(...P.map((U,k)=>U.x+o[k].w)),y0:Math.min(...P.map(U=>U.y)),y1:Math.max(...P.map((U,k)=>U.y+o[k].h))});u={ex:M(o),as:M(l)},n&&n(b,o),s.innerHTML=o.map((P,U)=>`<div class="rb-piece" style="z-index:${10+w-U}"><img src="${P.src}" alt="" decoding="async" draggable="false"></div>`).join(""),c=[...s.children],v()}function x(b,w,C){return{s:Math.min(w/(b.x1-b.x0),C/(b.y1-b.y0)),cx:(b.x0+b.x1)/2,cy:(b.y0+b.y1)/2}}function v(){const b=r.clientWidth,w=r.clientHeight*.9;if(!b||!o.length)return;const C=x(u.as,b*.82,w*.62),S=x(u.ex,b,w),M=Qp(h),P=o.length,U=C.s+(S.s-C.s)*M,k=C.cx+(S.cx-C.cx)*M,V=C.cy+(S.cy-C.cy)*M;c.forEach((q,B)=>{const Y=o[B],H=l[B],re=Qp(Math.max(0,Math.min(1,h*1.35-B/P*.35))),D=H.x+(Y.x-H.x)*re,ue=H.y+(Y.y-H.y)*re,Fe=B===0?Math.sin(p*2.2)*.012*Y.h*(1-re):0;q.style.width=Y.w*U+"px",q.style.height=Y.h*U+"px",q.style.transform=`translate3d(${b/2+(D-k)*U}px, ${r.clientHeight/2+(ue-V+Fe)*U}px, ${(P/2-B)*24*re}px) rotateZ(${(B%2?1:-1)*3*re*Math.sin(p*1.2+B)}deg)`,q.style.setProperty("--sh",4+14*re+"px")}),a.style.transform=`scaleX(${1-.3*M})`,a.style.opacity=String(1-.5*M),s.style.transform=`rotateX(${_+4}deg) rotateY(${m}deg)`}return addEventListener("pointermove",b=>{d=b.clientX/innerWidth-.5,g=b.clientY/innerHeight-.5},{passive:!0}),De.ticker.add((b,w)=>{f&&(p+=w/1e3,_+=(-g*10-_)*.06,m+=(d*26+(Ha?0:Math.sin(p*.5)*7)-m)*.06,v())}),addEventListener("resize",v),(A=r.querySelector(".rb-switch"))==null||A.addEventListener("click",b=>{const w=b.target.closest("button");w&&y(w.dataset.opt)}),y(t),{el:r,play:b=>{f=b,r.classList.toggle("playing",b)},explode:b=>{h=b,f||v()}}}const CE={C:[{name:"Sesame bun",src:"img/burger/C-0.webp",x:577,y:303,w:796,h:394},{name:"Onion rings",src:"img/burger/C-1.webp",x:555,y:748,w:802,h:182},{name:"Tomato",src:"img/burger/C-2.webp",x:497,y:919,w:944,h:441},{name:"Cheese on patty",src:"img/burger/C-3.webp",x:560,y:1360,w:857,h:435},{name:"Lettuce on heel",src:"img/burger/C-4.webp",x:494,y:1800,w:1204,h:617}]};De.registerPlugin($e);const ie=(i,e=document)=>e.querySelector(i),Et=(i,e=document)=>[...e.querySelectorAll(i)],RE=new Intl.NumberFormat("en-IN"),Ai=i=>"₹"+RE.format(Math.round(i)),Kd=matchMedia("(prefers-reduced-motion: reduce)").matches,Ig=matchMedia("(hover: hover) and (pointer: fine)").matches;Kd&&document.documentElement.classList.add("reduced");document.body.classList.add("loading");const Ug=ie("#stage"),_i=new fE(Ug);window.chaiverse={stage:_i};const PE=new Set(Ls.map(i=>i.id));let Jl;const LE=()=>Jl||(Jl=new mE(420)),Lc=i=>PE.has(i)?`thumbs/${i}.webp`:Jl==null?void 0:Jl.cache.get(i),DE=yE(),IE=TE(ie("#pizza .chapter-inner")),UE={A:"A toasted sesame bun, crisp lettuce and red onion, creamy mayo, vine tomato, melted cheese, a ribbon of ketchup and a flame-grilled patty.",B:"A sesame bun, cucumber and red onion, crispy bacon, cheddar and Swiss, a char-grilled patty, tomato and crunchy lettuce.",C:"A toasted sesame bun, onion rings, juicy tomato, a cheddar-topped patty and crisp lettuce on a soft heel."},em=AE(ie("#burger .chapter-inner"),{C:CE.C},"C",(i,e)=>{ie("#burger .chapter-copy p").textContent=UE[i]+" Keep scrolling to watch it come apart.",ie("#burger .layers").innerHTML=e.map((t,n)=>`<li><b>${String(n+1).padStart(2,"0")}</b> ${t.name}</li>`).join("")}),Zi=new zv({duration:1.2,smoothWheel:!Kd,wheelMultiplier:.9});Zi.stop();Zi.on("scroll",i=>{$e.update(),_i.setScroll(i.scroll/Math.max(1,i.limit),i.velocity),DE(i.scroll/Math.max(1,i.limit)),Fg=Math.min(Math.abs(i.velocity)*.25,6)});De.ticker.add(i=>Zi.raf(i*1e3));De.ticker.lagSmoothing(0);function tm(i){const e=ie(i);e&&Zi.scrollTo(e,{offset:i==="#menu"?0:-40,duration:1.6})}document.addEventListener("click",i=>{const e=i.target.closest("[data-goto]");e&&(i.preventDefault(),tm(e.dataset.goto));const t=i.target.closest('a[href^="#"]');t&&t.getAttribute("href").length>1?(i.preventDefault(),VE(),tm(t.getAttribute("href"))):t&&t.getAttribute("href")==="#top"&&(i.preventDefault(),Zi.scrollTo(0))});Et("[data-split]").forEach(i=>{const e=i.innerHTML,t=document.createElement("div");t.innerHTML=e;const n=[];t.childNodes.forEach(r=>{r.nodeType===3?r.textContent.split(/(\s+)/).forEach(s=>n.push(s.trim()?`<span class="split-line"><span class="split-word">${s}</span></span>`:s)):n.push(`<span class="split-line"><span class="split-word">${r.outerHTML}</span></span>`)}),i.innerHTML=n.join("")});const NE=ie("#loaderPct"),OE=ie(".loader-fill"),Ao={v:0},FE=ie(".loader-wave"),Ng=()=>{NE.textContent=Math.round(Ao.v),OE.setAttribute("y",110-Ao.v*.82),FE.setAttribute("transform",`translate(0 ${104-Ao.v*.82})`)},kE=De.to(Ao,{v:88,duration:1.4,ease:"power2.out",onUpdate:Ng}),Og=i=>new Promise(e=>setTimeout(e,i)),zE=Promise.race([document.fonts?document.fonts.ready:Promise.resolve(),Og(2500)]);Promise.all([_i.ready,zE,Og(600)]).then(()=>{kE.kill(),De.to(Ao,{v:100,duration:.3,ease:"power1.out",onUpdate:Ng,onComplete:BE})});function BE(){De.timeline().to("#loader",{clipPath:"inset(0 0 100% 0)",duration:.9,ease:"expo.inOut"}).set("#loader",{display:"none"}).add(()=>{document.body.classList.remove("loading"),Zi.start(),_i.show("kulhad","right"),_i.intro(),De.delayedCall(1.4,()=>_i.pour("#b9773f",1.4))},"-=0.6").from(".nav",{y:-80,opacity:0,duration:1,ease:"expo.out"},"-=0.5").from(".hero .split-word",{yPercent:110,rotate:4,duration:1.2,stagger:.07,ease:"expo.out",onComplete:()=>ie(".hero-title").classList.add("drawn")},"-=0.8").to(".hero .reveal",{opacity:1,y:0,duration:1,stagger:.1,ease:"expo.out"},"-=0.9").from(".hero-badge, .scroll-cue",{opacity:0,scale:.8,duration:1,ease:"expo.out"},"-=0.8"),HE(),setTimeout(()=>_i.prebuild(),1600)}function HE(){const i=ie(".journey-track"),e=()=>Math.max(0,i.scrollWidth-innerWidth),t=De.to(i,{x:()=>-e(),ease:"none",scrollTrigger:{trigger:".journey",pin:!0,scrub:1,start:"top top",end:()=>"+="+e(),invalidateOnRefresh:!0}});Et(".jcard").forEach(s=>{const a=Et("svg path, svg circle",s);a.forEach(l=>l.setAttribute("pathLength","1")),De.fromTo(a,{strokeDasharray:1,strokeDashoffset:1},{strokeDashoffset:0,duration:1.3,stagger:.15,ease:"power2.inOut",scrollTrigger:{trigger:s,containerAnimation:t,start:"left 85%",toggleActions:"play none none reverse"}});const o=ie(".jnum",s);$e.create({trigger:s,containerAnimation:t,start:"left 85%",onEnter:()=>Jp(o,.6)})}),Et("[data-model]").forEach(s=>{s.dataset.model!=="keep"&&$e.create({trigger:s,start:"top 55%",end:"bottom 45%",onEnter:()=>n(s),onEnterBack:()=>n(s)})});function n(s){const a=s.dataset.model;Ug.classList.toggle("dim",a==="none"),_i.show(a,s.dataset.side||"right"),a==="kulhad"&&!s.classList.contains("hero")&&De.delayedCall(1.2,()=>_i.pour(s.id==="build"?_c():"#b9773f",1))}Et("[data-split]").forEach(s=>{s.closest(".hero")||De.from(Et(".split-word",s),{yPercent:110,rotate:3,duration:1.1,stagger:.06,ease:"expo.out",scrollTrigger:{trigger:s,start:"top 85%"},onComplete:()=>s.classList.add("drawn")})}),Et(".chapter-no").forEach(s=>$e.create({trigger:s,start:"top 90%",once:!0,onEnter:()=>Jp(s)})),$e.create({trigger:"#stamps",start:"top 85%",once:!0,onEnter:$E}),$e.batch(Et(".reveal").filter(s=>!s.closest(".hero")),{start:"top 88%",onEnter:s=>De.to(s,{opacity:1,y:0,duration:1,stagger:.08,ease:"expo.out"})}),Et(".chapter-copy").forEach(s=>De.from(s,{y:80,opacity:0,scale:.96,duration:1.2,ease:"expo.out",scrollTrigger:{trigger:s,start:"top 85%"}})),[[IE,"#pizza"],[em,"#burger"]].forEach(([s,a])=>{$e.create({trigger:a,start:"top bottom",end:"bottom top",onToggle:o=>s.play(o.isActive)}),De.fromTo(s.el,{opacity:0,scale:.8,rotate:a==="#pizza"?-35:0},{opacity:1,scale:1,rotate:0,duration:1.4,ease:"expo.out",scrollTrigger:{trigger:a,start:"top 60%"}})}),$e.create({trigger:"#burger",start:"top 30%",end:"bottom 70%",scrub:!0,onUpdate:s=>{const a=s.progress,o=a<.15?0:a>.85?1-(a-.85)/.15:Math.min(1,(a-.15)/.4);em.explode(Math.max(0,o));const l=Et(".layers li"),c=Math.round(Math.min(1,a/.6)*l.length);l.forEach((u,h)=>u.classList.toggle("on",h<c))}}),Et("[data-count]").forEach(s=>{const a=parseFloat(s.dataset.count),o=+s.dataset.dec||0,l=s.dataset.suffix||"",c={v:0};De.to(c,{v:a,duration:2.2,ease:"power3.out",scrollTrigger:{trigger:s,start:"top 85%"},onUpdate:()=>s.textContent=c.v.toFixed(o)+l})}),De.fromTo(".tier",{y:100,opacity:0,rotateX:25},{y:0,opacity:1,rotateX:0,duration:1.2,stagger:.12,ease:"expo.out",scrollTrigger:{trigger:".tiers",start:"top 80%"}}),$e.batch(".store",{start:"top 90%",once:!0,onEnter:s=>De.fromTo(s,{y:60,opacity:0},{y:0,opacity:1,duration:1,stagger:.08,ease:"expo.out"})});let r=0;$e.create({start:0,end:"max",onUpdate:s=>{const a=s.scroll();ie("#nav").classList.toggle("scrolled",a>40),ie("#nav").classList.toggle("hidden",a>r&&a>600&&!document.body.classList.contains("modal-open")),r=a}}),["chai","coffee","menu","atlas","build","club","stores"].forEach(s=>{$e.create({trigger:"#"+s,start:"top 50%",end:"bottom 50%",onToggle:a=>Et(`.nav-links a[href="#${s}"]`).forEach(o=>o.classList.toggle("active",a.isActive))})}),$e.refresh()}let Fg=0;function Jd(i,e=1,t=40){const n=i.querySelector(".marquee-track");n.innerHTML+=n.innerHTML;let r=0;De.ticker.add((s,a)=>{const o=n.scrollWidth/2;r-=e*(t+Fg*40)*(a/1e3),r<-o&&(r+=o),r>0&&(r-=o),n.style.transform=`translate3d(${r}px,0,0)`})}if(Ig){const i=ie(".cursor-dot"),e=ie(".cursor-ring"),t={x:innerWidth/2,y:innerHeight/2},n={...t};addEventListener("pointermove",r=>{t.x=r.clientX,t.y=r.clientY,i.style.transform=`translate(${t.x}px,${t.y}px) translate(-50%,-50%)`}),De.ticker.add(()=>{n.x+=(t.x-n.x)*.16,n.y+=(t.y-n.y)*.16,e.style.transform=`translate(${n.x}px,${n.y}px) translate(-50%,-50%)`}),document.addEventListener("pointerover",r=>ie(".cursor").classList.toggle("hover",!!r.target.closest("a,button,.card,.pill,label,[data-tilt]"))),document.addEventListener("pointermove",r=>{const s=r.target.closest("[data-magnetic]");if(Et("[data-magnetic].mag").forEach(o=>{o!==s&&(o.classList.remove("mag"),De.to(o,{x:0,y:0,duration:.7,ease:"elastic.out(1,0.4)"}))}),!s)return;s.classList.add("mag");const a=s.getBoundingClientRect();De.to(s,{x:(r.clientX-a.left-a.width/2)*.25,y:(r.clientY-a.top-a.height/2)*.3,duration:.4,ease:"power3.out"})})}function kg(i,e=10,t){Ig&&(i.addEventListener("pointermove",n=>{const r=i.getBoundingClientRect(),s=(n.clientX-r.left)/r.width,a=(n.clientY-r.top)/r.height;De.to(i,{rotateY:(s-.5)*e,rotateX:-(a-.5)*e,transformPerspective:900,duration:.5,ease:"power2.out"}),i.style.setProperty("--gx",s*100+"%"),i.style.setProperty("--gy",a*100+"%")}),i.addEventListener("pointerleave",()=>De.to(i,{rotateY:0,rotateX:0,duration:.9,ease:"elastic.out(1,0.5)"})))}const ed=ie("#menuToggle"),zg=ie("#mobileNav");ed.addEventListener("click",()=>{ed.classList.toggle("open"),zg.classList.toggle("open")});function VE(){ed.classList.remove("open"),zg.classList.remove("open")}let nm;function Dc(i,e){const t=ie("#toast");t.innerHTML=(e?`<img src="${e}" alt="">`:"✦")+`<span>${i}</span>`,t.classList.add("show"),clearTimeout(nm),nm=setTimeout(()=>t.classList.remove("show"),2400)}const as=[],im=new Map;function Bg(i,e=!1){if(!Lc(i.id)){if(as.includes(i)){e&&(as.splice(as.indexOf(i),1),as.unshift(i));return}e?as.unshift(i):as.push(i),GE()}}let Iu=!1;function GE(){if(Iu)return;Iu=!0;const i=()=>{const e=as.shift();if(!e){Iu=!1;return}const t=LE().render(e.model,e.id);Et(`img[data-thumb="${e.id}"]`).forEach(n=>{var r;n.src=t,n.classList.add("ready"),(r=n.parentElement.querySelector(".spin"))==null||r.remove()}),(im.get(e.id)||[]).forEach(n=>n(t)),im.delete(e.id),setTimeout(i,16)};setTimeout(i,0)}let Go="chai",fs="",Hg=!1;const Da=ie("#menuTabs");Da.innerHTML=Zd.map(i=>`<button class="tab${i.id===Go?" active":""}" role="tab" data-cat="${i.id}">${i.label}</button>`).join("")+'<span class="tab-ink"></span>';function Ic(){const i=ie(".tab.active",Da),e=ie(".tab-ink",Da);if(!i){e.style.width="0";return}e.style.left=i.offsetLeft+"px",e.style.width=i.offsetWidth+"px"}Da.addEventListener("click",i=>{const e=i.target.closest(".tab");e&&(Go=e.dataset.cat,fs="",ie("#menuSearch").value="",Et(".tab",Da).forEach(t=>t.classList.toggle("active",t===e)),Ic(),e.scrollIntoView({inline:"center",block:"nearest",behavior:"smooth"}),Uc(!0))});ie("#menuSearch").addEventListener("input",i=>{fs=i.target.value.trim().toLowerCase(),Et(".tab",Da).forEach(e=>e.classList.toggle("active",!fs&&e.dataset.cat===Go)),Ic(),Uc(!0)});ie("#vegOnly").addEventListener("change",i=>{Hg=i.target.checked,Uc(!0)});const WE=new Set(["chai","black","coffee"]),XE='<svg viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg>';function Uc(i){const e=ie("#menuGrid");let t=fs?Ls.filter(n=>(n.name+" "+n.desc+" "+n.cat).toLowerCase().includes(fs)):Ls.filter(n=>n.cat===Go);Hg&&(t=t.filter(n=>n.veg)),ie("#catNote").textContent=fs?`${t.length} result${t.length===1?"":"s"} for "${fs}"`:Zd.find(n=>n.id===Go).note,e.innerHTML=t.length?t.map(n=>`<article class="card" data-id="${n.id}">
      <div class="card-glare"></div>
      ${n.tag?`<span class="card-tag">${n.tag}</span>`:""}
      <div class="card-img">${WE.has(n.cat)&&n.model.style!=="iced"?EE:""}<span class="spin"></span><img data-thumb="${n.id}" alt="${n.name}" src="${Lc(n.id)}" loading="lazy" decoding="async" width="420" height="420" onload="this.classList.add('ready');this.previousElementSibling?.remove()"></div>
      <div class="card-body">
        <div class="card-title"><h3>${n.name}</h3><span class="veg${n.veg?"":" non"}" title="${n.veg?"Vegetarian":"Non-vegetarian"}"></span></div>
        <p>${n.desc}</p>
        <div class="card-foot"><span class="price">${Ai(n.price)}</span><button class="add" data-add="${n.id}" aria-label="Add ${n.name}">${XE}</button></div>
      </div>
    </article>`).join(""):'<div class="empty-grid">Nothing matches. Try "chai" or "pizza".</div>',Et(".card",e).forEach(n=>kg(n,12)),i&&De.fromTo(Et(".card",e),{y:40,opacity:0,rotateX:-15},{y:0,opacity:1,rotateX:0,duration:.8,stagger:.04,ease:"expo.out"}),requestAnimationFrame(()=>$e.refresh())}ie("#menuGrid").addEventListener("click",i=>{const e=i.target.closest("[data-add]");if(e){i.stopPropagation();const n=Ls.find(r=>r.id===e.dataset.add);nf({id:n.id,name:n.name,price:n.price,thumb:n.id},1,e.closest(".card").querySelector(".card-img")),De.fromTo(e,{rotate:0},{rotate:180,duration:.5,ease:"back.out(2)"});return}const t=i.target.closest(".card");t&&Vg(Ls.find(n=>n.id===t.dataset.id))});let Nr,Rr,_a=1,Wo=0;const jd={chai:[["Regular",0],["Large",40],["Flask (4)",180]],black:[["Single",0],["Double",50]],coffee:[["Regular",0],["Large",50]],cold:[["Regular",0],["Large",50]],pizza:[['8" Personal',0],['12" Medium',160],['14" Large',280]],burger:[["Just the burger",0],["Meal + fries + drink",129]]};function Vg(i){Rr=i,_a=1,Wo=0,ie("#mCat").textContent=Zd.find(t=>t.id===i.cat).label+(i.tag?" · "+i.tag:""),ie("#mName").textContent=i.name,ie("#mDesc").textContent=i.desc;const e=jd[i.cat]||[];ie("#mSizes").innerHTML=e.map(([t,n],r)=>`<button class="pill${r?"":" active"}" data-size="${r}">${t}${n?`<small>+${Ai(n)}</small>`:""}</button>`).join(""),ie("#mQty").textContent=1,td(),ie("#modal").classList.add("open"),ie("#modal").setAttribute("aria-hidden","false"),document.body.classList.add("modal-open"),Zi.stop(),Nr||(Nr=new gE(ie("#viewer"))),requestAnimationFrame(()=>{Nr.load(i.model),Nr.start()})}function td(){var e;const i=((e=(jd[Rr.cat]||[])[Wo])==null?void 0:e[1])||0;ie("#mPrice").textContent=Ai((Rr.price+i)*_a)}function Qd(){ie("#modal").classList.remove("open"),ie("#modal").setAttribute("aria-hidden","true"),document.body.classList.remove("modal-open"),Zi.start(),setTimeout(()=>Nr&&Nr.stop(),500)}ie("#modal").addEventListener("click",i=>{if(i.target.closest("[data-close]"))return Qd();const e=i.target.closest("[data-size]");e&&(Wo=+e.dataset.size,Et("#mSizes .pill").forEach(n=>n.classList.toggle("active",n===e)),td());const t=i.target.closest("[data-q]");t&&(_a=Math.max(1,_a+ +t.dataset.q),ie("#mQty").textContent=_a,td())});ie("#mAdd").addEventListener("click",()=>{const i=(jd[Rr.cat]||[])[Wo];nf({id:Rr.id+(i?"-"+Wo:""),name:Rr.name,note:i?i[0]:"",price:Rr.price+(i?i[1]:0),thumb:Rr.id},_a,ie("#viewer")),Qd()});addEventListener("keydown",i=>{i.key==="Escape"&&(Qd(),Kg())});addEventListener("resize",()=>{Nr&&Nr.resize(),Ic()});let gc="All",ef="espresso";ie("#atlasFilters").innerHTML=_E.map(i=>`<button data-fam="${i}" class="${i===gc?"active":""}">${i}</button>`).join("");ie("#atlasFilters").addEventListener("click",i=>{const e=i.target.closest("[data-fam]");e&&(gc=e.dataset.fam,Et("#atlasFilters button").forEach(t=>t.classList.toggle("active",t===e)),Gg())});function Gg(){const i=Dg.filter(e=>gc==="All"||e.family===gc);ie("#atlasItems").innerHTML=i.map(e=>`<button data-atlas="${e.id}" class="${e.id===ef?"active":""}"><i style="background:${e.layers[e.layers.length-1][0]}"></i>${e.name}</button>`).join(""),De.from("#atlasItems button",{opacity:0,x:-10,duration:.4,stagger:.015})}ie("#atlasItems").addEventListener("click",i=>{const e=i.target.closest("[data-atlas]");e&&(ef=e.dataset.atlas,Et("#atlasItems button").forEach(t=>t.classList.toggle("active",t===e)),Wg())});function Wg(){const i=Dg.find(u=>u.id===ef),e=Math.round(Math.min(330,Math.max(130,110+i.ml*.62))),t=i.ml<80?130:i.ml>280?165:175,n=ie("#vessel");n.style.height=e+"px",n.style.width=t+"px",n.style.borderRadius=i.ml<80?"8px 8px 56px 56px":i.temp==="Cold"?"6px 6px 20px 20px":"10px 10px 46px 46px";const r=e*.88,s=ie("#vesselLayers");for(;s.children.length<i.layers.length;)s.appendChild(Object.assign(document.createElement("div"),{className:"vlayer",style:"height:0"}));[...s.children].forEach((u,h)=>{const f=i.layers[h];if(!f){u.style.height="0px";return}const[d,g,_]=f;u.style.height=r*g/100+"px",u.style.backgroundColor=d,u.className="vlayer"+(/ice/i.test(_)?" ice":"")+(/foam|froth|head|cream|whipped/i.test(_)?" foam":"")+(h===i.layers.length-1?" top":"")});const a=ie("#vesselLabels");a.style.height=r+"px",a.innerHTML=i.layers.map(([,u,h])=>`<div class="vlabel" style="height:${r*u/100}px">${h}<small>${u}%</small></div>`).join("");const o=ie("#vesselSteam");o.classList.toggle("off",i.temp==="Cold"),o.style.bottom=e+16+"px";const l=ie(".atlas-info");l.classList.remove("swap"),l.offsetWidth,l.classList.add("swap"),ie("#atlasFamily").textContent=i.family,ie("#atlasName").textContent=i.name,ie("#atlasDesc").textContent=i.desc,ie("#atlasOrigin").textContent=i.origin,ie("#atlasMl").textContent=i.ml+" ml",ie("#atlasCaf").textContent="~"+i.caffeine+" mg",ie("#atlasTemp").textContent=i.temp,ie("#atlasStrength").style.width=i.strength*20+"%";const c=Ls.find(u=>u.id===i.id||u.name.toLowerCase().includes(i.name.toLowerCase().split(" ")[0]));ie("#atlasOrder").style.display=c?"":"none",ie("#atlasOrder").onclick=()=>c&&Vg(c)}const Ft={base:"assam",milk:"full",strength:"regular",sweet:"regular",addins:new Set(["ginger","cardamom"]),size:"regular"},YE=[["base","Tea base"],["milk","Milk"],["strength","Strength"],["sweet","Sweetener"],["addins","Add-ins (pick any)"],["size","Size"]];ie("#builder").innerHTML=YE.map(([i,e])=>`
  <div class="bstep" data-step="${i}"><h4>${e}<span></span></h4><div class="pills">
    ${Pc[i].map(t=>`<button class="pill" data-k="${i}" data-v="${t.id}">${t.label}${t.price&&i!=="size"?`<small>+${t.price}</small>`:i==="size"?`<small>${t.ml}ml</small>`:""}</button>`).join("")}
  </div></div>`).join("");ie("#builder").addEventListener("click",i=>{const e=i.target.closest(".pill");if(!e)return;const{k:t,v:n}=e.dataset;t==="addins"?Ft.addins.has(n)?Ft.addins.delete(n):Ft.addins.add(n):Ft[t]=n,De.fromTo(e,{scale:.9},{scale:1,duration:.5,ease:"elastic.out(1,0.4)"}),qg()});const pi=i=>Pc[i].find(e=>e.id===Ft[i]);function Qs(i,e,t){const n=parseInt(i.slice(1),16),r=parseInt(e.slice(1),16),s=a=>Math.round((n>>a&255)*(1-t)+(r>>a&255)*t);return"#"+(s(16)<<16|s(8)<<8|s(0)).toString(16).padStart(6,"0")}function _c(){const i={assam:"#5c2a0c",darjeeling:"#8a4515",nilgiri:"#6e3410",green:"#7a6a1c"}[Ft.base],e=pi("strength").s,t=pi("milk").milk;let n=Qs(Qs(i,"#d08a3a",.6),i,e);return n=Qs(n,"#f2e4cc",t*(1.05-e*.45)),Ft.addins.has("saffron")&&(n=Qs(n,"#e0a020",.22)),Ft.sweet==="jaggery"&&(n=Qs(n,"#8a5020",.1)),Ft.base==="green"&&t===0&&(n=Qs(n,"#c8b040",.3)),n}function Xg(){const i=[];Ft.strength==="kadak"&&i.push("Kadak"),Ft.strength==="light"&&i.push("Light");const e=[...Ft.addins].map(t=>Pc.addins.find(n=>n.id===t).label);return e.length>2?i.push(e.slice(0,2).join("-")+" +"+(e.length-2)):e.length&&i.push(e.join("-")),i.push(Ft.base==="green"?"Green Chai":Ft.milk==="none"?"Black Chai":e.length>=3?"Masala Chai":"Chai"),i.join(" ")}function Yg(){return pi("size").price+pi("base").price+pi("milk").price+pi("strength").price+pi("sweet").price+[...Ft.addins].reduce((i,e)=>i+Pc.addins.find(t=>t.id===e).price,0)}let rm;function qg(){Et("#builder .pill").forEach(n=>{const{k:r,v:s}=n.dataset;n.classList.toggle("active",r==="addins"?Ft.addins.has(s):Ft[r]===s)}),Et("#builder .bstep").forEach(n=>{const r=n.dataset.step;n.querySelector("h4 span").textContent=r==="addins"?Ft.addins.size?Ft.addins.size+" selected":"none":pi(r).label}),ie("#blendName").textContent=Xg(),ie("#blendMeta").textContent=`${pi("size").ml} ml · ${pi("base").label} · ${pi("milk").label} · ${pi("sweet").label}`;const i=Yg(),e=ie("#blendPrice"),t={v:parseInt(e.textContent.replace(/\D/g,""))||i};De.to(t,{v:i,duration:.6,onUpdate:()=>e.textContent=Ai(t.v)}),clearTimeout(rm),rm=setTimeout(()=>{_i.setChaiColor(_c()),_i.pour(_c(),.5)},30)}ie("#blendAdd").addEventListener("click",()=>{const i=_c(),e="custom-"+[Ft.base,Ft.milk,Ft.strength,Ft.sweet,[...Ft.addins].sort().join("."),Ft.size].join("_"),t={id:e,model:{type:"kulhad",liquid:i}};Bg(t,!0),nf({id:e,name:Xg(),note:ie("#blendMeta").textContent,price:Yg(),thumb:e,custom:t},1,ie("#blendAdd")),_i.pour(i,.8)});const qE='<svg viewBox="0 0 24 24"><path d="M5 7h14l-2 12q-5 2-10 0Z"/><path d="M5 7h14"/></svg>';ie("#stamps").innerHTML=Array.from({length:10},(i,e)=>`<button class="stamp${e===9?" free":""}${e<6?Kd?" on":" pre":""}" aria-label="Stamp ${e+1}">${e===9?'<b style="font-size:11px">FREE</b>':qE}</button>`).join("");function $E(){Et(".stamp.pre").forEach((i,e)=>{i.classList.remove("pre"),De.delayedCall(.25+e*.22,()=>$g(i))})}function $g(i){i.classList.add("on"),De.fromTo(i,{scale:1.9,rotate:-40,opacity:0},{scale:1,rotate:0,opacity:1,duration:.32,ease:"power4.in",clearProps:"transform,opacity"}),i.classList.remove("inked"),i.offsetWidth,i.classList.add("inked")}ie("#stamps").addEventListener("click",i=>{const e=i.target.closest(".stamp");e&&(e.classList.contains("on")?(e.classList.remove("on"),De.fromTo(e,{scale:.6},{scale:1,duration:.7,ease:"elastic.out(1,0.35)"})):$g(e),Et(".stamp.on").length===10&&Dc("Your 10th chai is on us! ☕"))});Et("[data-tilt]").forEach(i=>kg(i,14));const Nl=new Date().getHours();ie("#storeGrid").innerHTML=vE.map(i=>`<article class="store">
  <div class="store-city">${i.city}</div><div class="store-area">${i.area}</div>
  <div class="store-feat">${i.feat.map(e=>`<span>${e}</span>`).join("")}</div>
  <div class="store-meta"><span>${i.hours}</span><span class="${Nl>=7||Nl<1?"is-open":""}">${Nl>=7||Nl<1?'<i class="live"></i>Open now':"Opens 7 AM"}</span></div>
</article>`).join("");ie("#reviewTrack").innerHTML=xE.map(i=>`<article class="review"><div class="stars">★★★★★</div><p>“${i.text}”</p><div class="who"><i style="background:${i.c}">${i.name[0]}</i><div>${i.name}<small>${i.where}</small></div></div></article>`).join("");let xi=[];try{xi=JSON.parse(localStorage.getItem("chaiverse-cart")||"[]")}catch{xi=[]}let ur="delivery";function tf(){try{localStorage.setItem("chaiverse-cart",JSON.stringify(xi))}catch{}}function nf(i,e=1,t){var s;const n=xi.find(a=>a.id===i.id);n?n.qty+=e:xi.push({...i,qty:e,custom:i.custom?{model:i.custom.model}:void 0}),tf(),Zo();const r=Lc(i.thumb);Dc(`${i.name} added to your order`,r),ME(t,r,(s=i.custom)==null?void 0:s.model.liquid).then(()=>{ie("#cartBtn").classList.remove("bump"),ie("#cartBtn").offsetWidth,ie("#cartBtn").classList.add("bump"),SE(e)})}function Zg(){const i=xi.reduce((n,r)=>n+r.price*r.qty,0),e=i*.05,t=ur==="pickup"||i===0||i>=499?0:39;return{sub:i,tax:e,fee:t,total:i+e+t}}function Zo(){const i=xi.reduce((n,r)=>n+r.qty,0),e=ie("#cartCount");e.textContent=i,e.classList.toggle("show",i>0),ie('[data-step="cart"]').classList.toggle("empty",!xi.length),ie("#cartItems").innerHTML=xi.map((n,r)=>{const s=Lc(n.thumb)||"";if(!s){const a=Ls.find(o=>o.id===n.thumb)||n.custom&&{id:n.thumb,model:n.custom.model};a&&Bg(a)}return`<div class="citem"><img data-thumb="${n.thumb}" ${s?`src="${s}"`:""} alt=""><div><h5>${n.name}</h5>${n.note?`<small>${n.note}</small>`:""}<div class="citem-price">${Ai(n.price*n.qty)}</div></div>
      <div class="qty"><button data-ci="${r}" data-d="-1" aria-label="Less">−</button><span>${n.qty}</span><button data-ci="${r}" data-d="1" aria-label="More">+</button></div></div>`}).join("");const t=Zg();ie("#tSub").textContent=Ai(t.sub),ie("#tTax").textContent=Ai(t.tax),ie("#tFeeLabel").textContent=ur==="pickup"?"Pickup":t.fee?"Delivery (free over ₹499)":"Delivery",ie("#tFee").textContent=t.fee?Ai(t.fee):"FREE",ie("#tTotal").textContent=Ai(t.total),ie("#tTotal2").textContent=Ai(t.total),ie(".addr").style.display=ur==="pickup"?"none":""}ie("#cartItems").addEventListener("click",i=>{const e=i.target.closest("[data-ci]");if(!e)return;const t=xi[+e.dataset.ci];t.qty+=+e.dataset.d,t.qty<=0&&xi.splice(+e.dataset.ci,1),tf(),Zo()});ie("#modeToggle").addEventListener("click",i=>{const e=i.target.closest("[data-mode]");e&&(ur=e.dataset.mode,Et("#modeToggle button").forEach(t=>t.classList.toggle("active",t===e)),ie("#modeToggle").classList.toggle("pickup",ur==="pickup"),Zo())});function Nc(i){Et(".dstep").forEach(e=>e.classList.toggle("active",e.dataset.step===i))}function ZE(){Nc("cart"),ie("#drawer").classList.add("open"),ie("#drawer").setAttribute("aria-hidden","false"),Zi.stop()}function Kg(){ie("#drawer").classList.remove("open"),ie("#drawer").setAttribute("aria-hidden","true"),ie("#modal").classList.contains("open")||Zi.start()}ie("#cartBtn").addEventListener("click",ZE);ie("#drawer").addEventListener("click",i=>{i.target.closest("[data-close-cart]")&&Kg(),i.target.closest("[data-back]")&&Nc("cart")});ie("#toCheckout").addEventListener("click",()=>Nc("details"));let sm;ie("#checkoutForm").addEventListener("submit",i=>{i.preventDefault();const e=new FormData(i.target);if(ur==="delivery"&&!String(e.get("address")).trim()){i.target.address.focus(),Dc("Please add a delivery address");return}const t="CV"+Math.floor(1e5+Math.random()*9e5);ie("#doneMsg").innerHTML=`Thank you, ${String(e.get("name")).split(" ")[0]}! Order <b>#${t}</b> (${Ai(Zg().total)}) is being brewed.`,ie(".eta span").textContent=ur==="pickup"?"Ready for pickup in":"Arriving in";let n=ur==="pickup"?8*60:28*60;clearInterval(sm);const r=()=>{ie("#eta").textContent=`${String(Math.floor(n/60)).padStart(2,"0")}:${String(n%60).padStart(2,"0")}`,n=Math.max(0,n-1)};r(),sm=setInterval(r,1e3),xi=[],tf(),Zo(),i.target.reset(),Nc("done"),ie(".ride").classList.toggle("pickup",ur==="pickup"),De.delayedCall(.7,()=>bE(ie(".done-svg")))});ie("#newsletter").addEventListener("submit",i=>{i.preventDefault(),i.target.reset(),Dc("You’re on the list. Welcome to the club!")});Jd(ie(".m1"),1,50);Jd(ie(".m2"),-1,40);Jd(ie(".r1"),1,30);wE(ie("#pizza"));Uc(!1);Ic();Gg();Wg();qg();Zo();

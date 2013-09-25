define("magix/magix",function(){var e=/\/\.\/|\/[^\/]+?\/\.{2}\/|([^:\/])\/\/+/,t=/\/[^\/]*$/,r=/[#?].*$/,n="",i=/([^=&?\/#]+)=?([^&=#?]*)/g,a="pathname",o=/^https?:\/\//i,s=0,c="/",f="vframe",u=function(){throw Error("unimplement method")},v=function(){},l={tagName:f,rootId:"magix_vf_root",execError:v},h={}.hasOwnProperty,m=function(e,t){return e?h.call(e,t):e},d=function(e){return function(t,r,n){switch(arguments.length){case 0:n=e;break;case 1:n=C.isObject(t)?y(e,t):m(e,t)?e[t]:null;break;case 2:null===r?(delete e[t],n=r):e[t]=n=r}return n}},p=function(e,t){return t.f==e.f?t.t-e.t:t.f-e.f},g=function(e,t){var r=this;return r.get?(r.c=[],r.x=e||20,r.b=r.x+(isNaN(t)?5:t),void 0):new g(e,t)},y=function(e,t,r){for(var n in t)r&&m(r,n)||(e[n]=t[n]);return e};y(g.prototype,{get:function(e){var t,r=this,n=r.c;return e=a+e,m(n,e)&&(t=n[e],t.f>=1&&(t.f++,t.t=s++,t=t.v)),t},set:function(e,t,r){var n=this,i=n.c,o=a+e,c=i[o];if(!m(i,o)){if(i.length>=n.b){i.sort(p);for(var f=n.b-n.x;f--;)c=i.pop(),delete i[c.k],c.m&&b(c.m,c.o,c)}c={},i.push(c),i[o]=c}return c.o=e,c.k=o,c.v=t,c.f=1,c.t=s++,c.m=r,c},del:function(e){e=a+e;var t=this.c,r=t[e];r&&(r.f=-1e5,r.v=n,delete t[e],r.m&&(b(r.m,r.o,r),r.m=0))},has:function(e){return e=a+e,m(this.c,e)}});var x=g(60),w=g(),b=function(e,t,r,n,i,a){for(C.isArray(e)||(e=[e]),t&&(C.isArray(t)||t.callee)||(t=[t]),n=0;e.length>n;n++)try{a=e[n],i=a&&a.apply(r,t)}catch(o){l.execError(o)}return i},C={isArray:u,isObject:u,isFunction:u,isRegExp:u,isString:u,isNumber:u,isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},libRequire:u,include:u,mix:y,unimpl:u,has:m,safeExec:b,noop:v,config:d(l),start:function(e){var t=this;y(l,e),t.libRequire(l.iniFile,function(r){l=y(l,r,e),l.tagNameChanged=l.tagName!=f;var n=l.progress;t.libRequire(["magix/router","magix/vom"],function(e,r){e.on("!ul",r.locChged),e.on("changed",r.locChged),n&&r.on("progress",n),t.libRequire(l.extensions,e.start)})})},keys:Object.keys||function(e){var t=[];for(var r in e)m(e,r)&&t.push(r);return t},local:d({}),path:function(i,a){var s=i+"\n"+a,f=w.get(s);if(!f){if(o.test(a))f=a;else if(i=i.replace(r,n).replace(t,n)+c,a.charAt(0)==c){var u=o.test(i)?8:0,v=i.indexOf(c,u);f=i.substring(0,v)+a}else f=i+a;for(;e.test(f);)f=f.replace(e,"$1/");w.set(s,f)}return f},pathToObject:function(e,t){var s=x.get(e);if(!s){s={};var f={},u=n;r.test(e)?u=e.replace(r,n):~e.indexOf("=")||(u=e);var v=e.replace(u,n);if(u&&o.test(u)){var l=u.indexOf(c,8);u=~l?u.substring(l):c}v.replace(i,function(e,r,n){if(t)try{n=decodeURIComponent(n)}catch(i){}f[r]=n}),s[a]=u,s.params=f,x.set(e,s)}return s},objectToPath:function(e,t,r){var n,i=e[a],o=[],s=e.params;for(var c in s)n=s[c],(!r||n||m(r,c))&&(t&&(n=encodeURIComponent(n)),o.push(c+"="+n));return o.length&&(i=i+"?"+o.join("&")),i},listToMap:function(e,t){var r,n,i,a={};if(C.isString(e)&&(e=e.split(",")),e&&(i=e.length))for(r=0;i>r;r++)n=e[r],a[t?n[t]:n]=t?n:1;return a},cache:g},E=Object.prototype.toString;return mix(C,{libRequire:function(e,t){C.isArray(e)||(e=[e]),e?require(e,t):t&&t()},isArray:$.isArray,isFunction:$.isFunction,isObject:function(e){return"[object Object]"==E.call(e)},isString:function(e){return"[object String]"==E.call(e)},isNumber:function(e){return"[object Number]"==E.call(e)},isRegExp:function(e){return"[object RegExp]"==E.call(e)},extend:function(e,t,r,n){e.superclass=t.prototype,t.prototype.constructor=t;var i=function(){};return i.prototype=t.prototype,e.prototype=new i,C.mix(e.prototype,r),C.mix(e,n),e.prototype.constructor=e,e}})}),define("magix/router",["magix/magix","magix/event"],function(e,t){var r,n,i,a,o,s=window,c="",f="pathname",u=e.has,v=e.mix,l=document,h=/^UTF-8$/i.test(l.charset||l.characterSet||"UTF-8"),m=e.config(),d=e.cache(),p=e.cache(40),g=/#.*$/,y=/^[^#]*#?!?/,x="params",w=m.nativeHistory,b=function(t,r,n){if(t){n=this[x],e.isString(t)&&(t=t.split(","));for(var i=0;t.length>i&&!(r=u(n,t[i]));i++);}return r},C=function(){return u(this,f)},E=function(){return u(this,"view")},M=function(e,t,r){return t=this,r=t[x],r[e]},T=function(t){var r=e.pathToObject(t,h),n=r[f];return n&&o&&(r[f]=e.path(s.location[f],n)),r},O=v({getView:function(t,r){if(!i){i={rs:m.routes||{},nf:m.notFoundView};var n=m.defaultView;if(!n)throw Error("unset defaultView");i.home=n;var a=m.defaultPathname||c;i.rs[a]=n,i[f]=a}var o;t||(t=i[f]);var s=i.rs;return o=e.isFunction(s)?s.call(m,t,r):s[t],{view:o?o:i.nf||i.home,pathname:o||w?t:i.nf?t:i[f]}},start:function(){var e=O,t=s.history;a=w&&t.pushState,o=w&&!a,a?e.useState():e.useHash(),e.route()},parseQH:function(e,t){e=e||s.location.href;var r=O,n=d.get(e);if(!n){var i=e.replace(g,c),a=e.replace(y,c),o=T(i),u=T(a),l={};v(l,o[x]),v(l,u[x]),n={get:M,href:e,srcQuery:i,srcHash:a,query:o,hash:u,params:l},d.set(e,n)}if(t&&!n.view){var h;h=w?n.hash[f]||n.query[f]:n.hash[f];var m=r.getView(h,n);v(n,m)}return n},getChged:function(e,t){var r=e.href,n=t.href,i=r+"\n"+n,a=p.get(i);if(a||(i=n+"\n"+i,a=p.get(i)),!a){var o,s,c;a={params:{}},s=e[f],c=t[f],s!=c&&(a[f]={from:s,to:c},o=1),s=e.view,c=t.view,s!=c&&(a.view={from:s,to:c},o=1);var u,v=e[x],l=t[x];for(u in v)s=v[u],c=l[u],v[u]!=l[u]&&(o=1,a[x][u]={from:s,to:c});for(u in l)s=v[u],c=l[u],v[u]!=l[u]&&(o=1,a[x][u]={from:s,to:c});a.occur=o,a.isParam=b,a.isPathname=C,a.isView=E,p.set(i,a)}return a},route:function(){var e=O,t=e.parseQH(0,1),i=n||{params:{},href:"~"},a=!n;n=t;var o=e.getChged(i,t);o.occur&&(r=t,e.fire("changed",{location:t,changed:o,force:a}))},navigate:function(t,n,i){var s=O;if(!n&&e.isObject(t)&&(n=t,t=c),n&&(t=e.objectToPath({params:n,pathname:t},h)),t){var l=T(t),m={};if(m[x]=v({},l[x]),m[f]=l[f],m[f]){if(o){var d=r.query[x];for(var p in d)u(d,p)&&!u(m[x],p)&&(m[x][p]=c)}}else{var g=v({},r[x]);m[x]=v(g,m[x]),m[f]=r[f]}var y,w=e.objectToPath(m,h,r.query[x]);y=a?w!=r.srcQuery:w!=r.srcHash,y&&(a?(s.poped=1,history[i?"replaceState":"pushState"](null,null,w),s.route()):(v(m,r,m),m.srcHash=w,m.hash={params:m[x],pathname:m[f]},s.fire("!ul",{loc:r=m}),w="#!"+w,i?location.replace(w):location.hash=w))}}},t);return O.useState=function(){var e=O,t=location.href;$(s).on("popstate",function(){var r=location.href==t;(e.poped||!r)&&(e.poped=1,e.route())},!1)},O.useHash=function(){$(s).on("hashchange",O.route,!1)},O}),define("magix/body",["magix/magix"],function(e){var t,r=e.has,n=e.mix,i={},a=document.body,o={},s=String.fromCharCode(26),c="mx-owner",f="mx-ei",u={},v=65536,l=function(e){return e.id||(e.id="mx-e-"+v--)},h=function(e,t,r){return r?e.setAttribute(t,r):r=e.getAttribute(t),r},m={special:function(e){n(i,e)},process:function(e){for(var n=e.target||e.srcElement;n&&1!=n.nodeType;)n=n.parentNode;var i=n,o=e.type,v=u[o]||(u[o]=RegExp("(?:^|,)"+o+"(?:,|$)"));if(!v.test(h(n,f))){for(var m,d,p="mx-"+o,g=[];i&&i!=a&&(m=h(i,p),d=h(i,f),!m&&!v.test(d));)g.push(i),i=i.parentNode;if(m){var y,x=m.indexOf(s);x>-1&&(y=m.slice(0,x),m=m.slice(x));var w=h(i,c)||y;if(!w)for(var b=i,$=t.all();b&&b!=a;){if(r($,b.id)){h(i,c,w=b.id);break}b=b.parentNode}if(!w)throw Error("miss "+c+":"+m);var C=t.get(w),E=C&&C.view;E&&E.processEvent({info:m,se:e,st:o,tId:l(n),cId:l(i)})}else for(var M;g.length;)M=g.shift(),d=h(M,f),v.test(d)||(d=d?d+","+o:o,h(M,f,d))}},on:function(e,r){var n=this;if(!o[e]){t=r,o[e]=0;var s=i[e];s?n.lib(0,a,e):a["on"+e]=function(e){e=e||window.event,e&&n.process(e)}}o[e]++},un:function(e){var t=this,r=o[e];if(r>0){if(r--,!r){var n=i[e];n?t.lib(1,a,e):a["on"+e]=null}o[e]=r}}};return m.lib=function(e,t,r){var n=e?"undelegate":"delegate";$(t)[n]("[mx-"+r+"]",r,m.process)},m}),define("magix/event",["magix/magix"],function(e){var t=function(e){return"~"+e},r=e.safeExec,n={fire:function(e,n,i,a){var o=t(e),s=this,c=s[o];if(c){n||(n={}),n.type||(n.type=e);for(var f,u,v=c.length,l=v-1;v--;)f=a?v:l-v,u=c[f],(u.d||u.r)&&(c.splice(f,1),l--),u.d||r(u.f,n,s)}i&&delete s[o]},on:function(r,n,i){var a=t(r),o=this[a]||(this[a]=[]);e.isNumeric(i)?o.splice(i,0,{f:n}):o.push({f:n,r:i})},un:function(e,r){var n=t(e),i=this[n];if(i)if(r){for(var a,o=i.length-1;o>=0;o--)if(a=i[o],a.f==r&&!a.d){a.d=1;break}}else delete this[n]}};return n}),define("magix/vframe",["magix/magix","magix/event","magix/view"],function(e,t,r){var n,i,a,o=document,s=65536,c=e.safeExec,f=[].slice,u=e.mix,v=e.config("tagName"),l=e.config("rootId"),h=!e.config("tagNameChanged"),m=e.has,d="mx-view",p=h?"mx-defer":"mx-vframe",g="alter",y="created",x=function(e){return"object"==typeof e?e:o.getElementById(e)},w=function(e,t,r){return r=x(e),r?r.getElementsByTagName(t):[]},b=function(e){return o.createElement(e)},$=function(e){return e.id||(e.id="magix_vf_"+s--)},C=function(e,t,r){if(e=x(e),t=x(t),e&&t)if(e!==t)try{r=t.contains?t.contains(e):16&t.compareDocumentPosition(e)}catch(n){r=0}else r=1;return r},E=/<script[^>]*>[\s\S]*?<\/script>/gi,M=function(e){var t=this;t.id=e,t.cM={},t.cC=0,t.rC=0,t.sign=1<<30,t.rM={}};return u(M,{root:function(e,t){if(!n){a=t;var r=x(l);r||(r=b(v),r.id=l,o.body.insertBefore(r,o.body.firstChild)),n=new M(l),e.add(n)}return n}}),u(u(M.prototype,t),{mountView:function(t,n,i){var o=this,s=x(o.id);if(s._bak?s._chgd=1:(s._bak=1,s._tmpl=s.innerHTML.replace(E,"")),o.unmountView(),t){var f=e.pathToObject(t),v=f.pathname,l=--o.sign;e.libRequire(v,function(e){if(l==o.sign){var t=o.owner;r.prepare(e);var h=new e({owner:o,id:o.id,$:x,path:v,vom:t,location:a});o.view=h,h.on("interact",function(e){e.tmpl||(s._chgd&&(s.innerHTML=s._tmpl),o.mountZoneVframes(0,0,1)),h.on("rendered",function(){o.mountZoneVframes(0,0,1)}),h.on("prerender",function(){o.unmountZoneVframes(0,1)||o.cAlter()}),h.on("inited",function(){o.viewInited=1,o.fire("viewInited",{view:h}),i&&c(i,h,o)})},0),n=n||{},h.load(u(n,f.params,n))}})}},unmountView:function(){var e=this;if(e.view){i||(i={}),e.unmountZoneVframes(0,1),e.cAlter(i),e.view.destroy();var t=x(e.id);t&&t._bak&&(t.innerHTML=t._tmpl),delete e.view,delete e.viewInited,i=0,e.fire("viewUnmounted")}e.sign--},mountVframe:function(e,t,r){var n=this,i=n.owner,a=i.get(e);return a||(a=new M(e),a.pId=n.id,m(n.cM,e)||n.cC++,n.cM[e]=1,i.add(a)),a.mountView(t,r),a},mountZoneVframes:function(e,t){var r=this,n=e||r.id;r.unmountZoneVframes(n,1);var i=w(n,v),a=i.length,o={};if(a)for(var s,c,f,u,l=0;a>l;l++)if(s=i[l],c=$(s),!m(o,c)&&(f=s.getAttribute(d),u=!s.getAttribute(p),u=u==h,u||f)){r.mountVframe(c,f,t);for(var g,y=w(s,v),x=0,b=y.length;b>x;x++)g=y[x],f=g.getAttribute(d),u=!g.getAttribute(p),u=u==h,u||f||(o[$(g)]=1)}r.cCreated()},unmountVframe:function(e,t){var r=this;e=e||r.id;var n=r.owner,i=n.get(e);if(i){i.unmountView(),n.remove(e),r.fire("destroy");var a=n.get(i.pId);a&&m(a.cM,e)&&(delete a.cM[e],a.cC--,t||a.cCreated())}},unmountZoneVframes:function(e,t){var r,n,i,a=this;if(e){var o=a.cM,s={};for(i in o)C(i,e)&&(s[i]=1);r=s}else r=a.cM;for(i in r)n=1,a.unmountVframe(i,1);return t||a.cCreated(),n},invokeView:function(e){var t,r=this,n=r.view,i=f.call(arguments,1);return r.viewInited&&n[e]&&(t=c(n[e],i,n)),t},cCreated:function(e){var t=this;if(t.cC==t.rC){var r=t.view;r&&!t.fcc&&(t.fcc=1,delete t.fca,r.fire(y,e),t.fire(y,e));var n=t.owner;n.vfCreated();var i=t.id,a=n.get(t.pId);a&&!m(a.rM,i)&&(a.rM[i]=a.cM[i],a.rC++,a.cCreated(e))}},cAlter:function(e){var t=this;if(e||(e={}),delete t.fcc,!t.fca){var r=t.view,n=t.id;r&&(t.fca=1,r.fire(g,e),t.fire(g,e));var i=t.owner,a=i.get(t.pId);a&&m(a.rM,n)&&(a.rC--,delete a.rM[n],a.cAlter(e))}},locChged:function(t,r){var n=this,i=n.view;if(i&&i.sign>0&&i.rendered){var a=i.olChanged(r),o={location:t,changed:r,prevent:function(){this.cs=[]},toChildren:function(t){t=t||[],e.isString(t)&&(t=t.split(",")),this.cs=t}};a&&c(i.locationChange,o,i);for(var s,f=o.cs||e.keys(n.cM),u=0,v=f.length,l=n.owner;v>u;u++)s=l.get(f[u]),s&&s.locChged(t,r)}}}),M}),define("magix/view",["magix/magix","magix/event","magix/body"],function(e,t,r){var n=e.safeExec,i=e.has,a=",",o=[],s=e.noop,c=e.mix,f={render:1,renderUI:1},u="~",v=function(e){return function(){var t,r=this,n=r.notifyUpdate();return n&&(t=e.apply(r,arguments)),t}},l=e.cache(40),h=/\smx-(?!view|defer|owner)[a-z]+\s*=\s*['"]/g,m=String.fromCharCode(26),d=function(){this.render()},p={prevent:function(e){e=e||this.domEvent,e.preventDefault?e.preventDefault():e.returnValue=!1},stop:function(e){e=e||this.domEvent,e.stopPropagation?e.stopPropagation():e.cancelBubble=!0},halt:function(e){this.prevent(e),this.stop(e)}},g=/(\w+)(?:<(\w+)>)?(?:{([\s\S]*)})?/,y=/(\w+):([^,]+)/g,x=/([$\w]+)<([\w,]+)>/,w=function(e){var t=this;c(t,e),t.sign=1,n(w.ms,[e],t)};w.ms=[],w.prepare=function(e){var t=this,r=e.superclass;if(r&&t.prepare(r.constructor),!e[u]){e[u]=1,e.extend=t.extend;var n,o,c,l,h,d=e.prototype,p={};for(var g in d)if(i(d,g))if(n=d[g],o=g.match(x))for(c=o[1],l=o[2],l=l.split(a),h=l.length-1;h>-1;h--)o=l[h],p[o]=1,d[c+m+o]=n;else i(f,g)&&n!=s&&(d[g]=v(n));l&&(d.$evts=p)}},w.mixin=function(e,t){w.ms.push(t),c(w.prototype,e)},c(c(w.prototype,t),{render:s,locationChange:s,init:s,hasTmpl:!0,enableEvent:!0,load:function(){var e=this,t=e.hasTmpl,r=arguments,a=e.sign,s=i(e,"template"),c=function(i){if(a==e.sign){s||(e.template=e.wrapMxEvent(i)),e.delegateEvents(),e.fire("interact",{tmpl:t},1),n(e.init,r,e),e.fire("inited",0,1),n(e.render,o,e);var c=!t&&!e.rendered;c&&(e.rendered=!0,e.fire("primed",null,1))}};t&&!s?e.fetchTmpl(c):c()},beginUpdate:function(){var e=this;e.sign&&e.rendered&&(e.fire("refresh",0,1),e.fire("prerender"))},endUpdate:function(){var e=this;e.sign&&(e.rendered||e.fire("primed",0,1),e.rendered=!0,e.fire("rendered"))},notifyUpdate:function(){var e=this;return e.sign&&(e.sign++,e.fire("rendercall")),e.sign},wrapMxEvent:function(e){return(e+"").replace(h,"$&"+this.id+m)},setViewHTML:function(e){var t,r=this;r.beginUpdate(),r.sign&&(t=r.$(r.id),t&&(t.innerHTML=e)),r.endUpdate()},observeLocation:function(t){var r,n=this;n.$ol||(n.$ol={keys:[]}),r=n.$ol;var i=r.keys;e.isObject(t)&&(r.pn=t.pathname,t=t.keys),t&&(r.keys=i.concat((t+"").split(a))),n.locationChange==s&&(n.locationChange=d)},olChanged:function(e){var t=this,r=t.$ol;if(r){var n=0;if(r.pn&&(n=e.isPathname()),!n){var i=r.keys;n=e.isParam(i)}return n}return 1},destroy:function(){var e=this;e.sign>0&&(e.sign=0),e.sign--,e.fire("refresh",0,1),e.fire("destroy",0,1,1),e.delegateEvents(1)},processEvent:function(e){var t=this;if(t.enableEvent&&t.sign){var r=e.info,i=e.se,a=l.get(r);a||(a=r.match(g),a={n:a[1],f:a[2],i:a[3],p:{}},a.i&&a.i.replace(y,function(e,t,r){a.p[t]=r}),l.set(r,a));var o=a.n+m+e.st,s=t[o];if(s){var f=p[a.f];f&&f.call(p,i),n(s,c({currentId:e.cId,targetId:e.tId,type:e.st,domEvent:i,params:a.p},p),t)}}},delegateEvents:function(e){var t=this,n=t.$evts,i=e?r.un:r.on,a=t.vom;for(var o in n)i.call(r,o,a)}});var b,C="?t="+Date.now(),E={},M={};return w.prototype.fetchTmpl=function(e){var t=this,r="template"in t;if(r)e(t.template);else if(i(E,t.path))e(E[t.path]);else{var a=t.path.indexOf("/");if(!b){var o=t.path.substring(0,a);b=require.s.contexts._.config.paths[o]}var s=t.path.substring(a+1),c=b+s+".html",f=M[c],u=function(r){e(E[t.path]=r)};f?f.push(u):(f=M[c]=[u],$.ajax({url:c+C,success:function(e){n(f,e),delete M[c]},error:function(e,t){n(f,t),delete M[c]}}))}},w.extend=function(t,r,i){var a=this,o=function(){o.superclass.constructor.apply(this,arguments),r&&n(r,arguments,this)};return o.extend=a.extend,e.extend(o,a,t,i)},w}),define("magix/vom",["magix/vframe","magix/magix","magix/event"],function(e,t,r){var n=t.has,i=t.mix,a=0,o=0,s=0,c=0,f={},u={},v=t.mix({all:function(){return f},add:function(e){n(f,e.id)||(a++,f[e.id]=e,e.owner=v,v.fire("add",{vframe:e}))},get:function(e){return f[e]},remove:function(e){var t=f[e];t&&(a--,t.fcc&&o--,delete f[e],v.fire("remove",{vframe:t}))},vfCreated:function(){if(!c){o++;var e=o/a;e>s&&v.fire("progress",{percent:s=e},c=1==e)}},root:function(){return e.root(v,u)},locChged:function(e){var t,r=e.loc;if(r?t=1:r=e.location,i(u,r),!t){var n=v.root(),a=e.changed;a.isView()?n.mountView(r.view):n.locChged(r,a)}}},r);return v}),define("mxext/mmanager",["magix/magix"],function(e){var t=e.has,r=e.safeExec,n=e.mix,i=e.isFunction,a=function(t){var r=this;r.$mClass=t,r.$mCache=e.cache(),r.$mCacheKeys={},r.$mMetas={}},o=[].slice,s={urlParams:1,postParams:1,cacheKey:1,cacheTime:1,before:1,after:1},c=function(e,t,r){return function(){return e.apply(t,[t,r].concat(o.call(arguments)))}},f=function(e){return e&&e.mxViewCtor&&e.manage},u=function(e,t,n){var i=n.key,a=n.cKeys,o=a[i];if(o){var s=o.q;delete a[i],r(s,e)}},v=function(e){return function(){var t=new p(this),r=arguments,n=r[r.length-1];return f(n)&&(n.manage(t),r=o.call(r,0,-1)),t[e].apply(t,r)}},l=function(e,t){return function(r,n){var i=o.call(arguments,1);return this.send(r,i.length>1?i:n,e,t)}};n(a,{create:function(e){if(!e)throw Error("ungiven modelClass");return new a(e)}});var h={ALL:1,ONE:2,ORDER:4},m=Date.now||function(){return+new Date},d=m(),p=function(e){this.$host=e,this.$doTask=!1,this.$reqModels={},this.id="mr"+d--};return n(p.prototype,{send:function(n,i,a,o){var s=this;if(s.$doTask)return s.next(function(){this.send(n,i,a,o)}),s;s.$doTask=!0;var f=s.$host,v=f.$mCache,l=f.$mCacheKeys,d=s.$reqModels;e.isArray(n)||(n=[n]);var p,g,y,x=n.length,w=0,b=Array(x),$=[],C={},E=[],M=e.isArray(i);M&&($=Array(i.length));for(var T,O=function(e,t,n){if(!s.$destroy){w++,delete d[e.id];var o=e.$mm,c=o.cacheKey;if(b[t]=e,n)p=!0,y=!0,g=n,C.msg=n,C[t]=n;else{if(y=!1,!c||c&&!v.has(c)){c&&v.set(c,e),o.doneAt=m();var f=o.after,u=o.meta;f&&r(f,[e,u])}!e.fromCache&&o.used>0&&(e.fromCache=!0),o.used++}if(a==h.ONE){var l=M?i[t]:i;l&&($[t]=r(l,[y?C:null,e,C],s))}else if(a==h.ORDER){E[t]={m:e,e:y,s:n};for(var T,O,P=E.i||0;T=E[P];P++)O=M?i[P]:i,T.e&&(C.msg=T.s,C[P]=T.s),$[P]=r(O,[T.e?C:null,T.m,C].concat($),s);E.i=P}w>=x&&(p||(C=null),a==h.ALL?(b.unshift(C),$[0]=C,$[1]=r(i,b,s)):$.unshift(C),s.$ntId=setTimeout(function(){s.doNext($)},30))}},P=0;n.length>P;P++){if(T=n[P],!T)throw Error("miss attrs:"+n);var V=f.getModel(T,o),A=V.cKey,k=V.entity,j=c(O,k,P);j.id=s.id,A&&t(l,A)?l[A].q.push(j):V.update?(d[k.id]=k,A&&(l[A]={q:[j],e:k},j=u),k.request(j,{key:A,cKeys:l})):j()}return s},fetchAll:function(e,t){return this.send(e,t,h.ALL)},saveAll:function(e,t){return this.send(e,t,h.ALL,1)},fetchOrder:l(h.ORDER),saveOrder:l(h.ORDER,1),saveOne:l(h.ONE,1),fetchOne:l(h.ONE),abort:function(){var e=this;clearTimeout(e.$ntId);var n=e.$host,i=e.$reqModels,a=n.$mCacheKeys;for(var o in i){var s=i[o],c=s.$mm.cacheKey;if(c&&t(a,c)){for(var f,u=a[c],v=u.q,l=[],h=[],m=0;v.length>m;m++)f=v[m],f.id!=e.id?l.push(f):e.$destroy||h.push(f);r(h,["abort"],e),l.length?u.q=l:s.abort()}else s.abort()}e.$reqModels={},e.$queue=[],e.$doTask=!1},next:function(e){var t=this;if(t.$queue||(t.$queue=[]),t.$queue.push(e),!t.$doTask){var r=t.$latest;t.doNext(r)}return t},doNext:function(e){var t=this;t.$doTask=!1;var n=t.$queue;if(n){var i=n.shift();i&&r(i,e,t)}t.$latest=e},destroy:function(){var e=this;e.$destroy=!0,e.abort()}}),n(a.prototype,{registerModels:function(t){var r=this,n=r.$mMetas;e.isArray(t)||(t=[t]);for(var i,a,o=0;t.length>o;o++){if(i=t[o],a=i.name,i&&!a)throw Error("miss name attribute");if(n[a])throw Error("already exist:"+a);n[a]=i}},registerMethods:function(e){var t=this;n(t,e)},createModel:function(e){var t=this,n=t.getModelMeta(e),a=new t.$mClass;a.set(n,s),a.$mm={used:0};var o=e.before||n.before;i(o)&&r(o,[a,n,e]);var c=e.after||n.after;a.$mm.after=c;var f=e.cacheKey||n.cacheKey;return i(f)&&(f=r(f,[n,e])),a.$mm.cacheKey=f,a.$mm.meta=n,a.set(e,s),a.setUrlParams(n.urlParams),a.setPostParams(n.postParams),a.setUrlParams(e.urlParams),a.setPostParams(e.postParams),a},getModelMeta:function(t){var r,n=this,i=n.$mMetas;r=e.isString(t)?t:t.name;var a=i[r];if(!a)throw Error("Unfound:"+r);return a},getModel:function(e,t){var r,n,i=this;return t||(r=i.getCachedModel(e)),r||(n=!0,r=i.createModel(e)),{entity:r,cKey:r.$mm.cacheKey,update:n}},saveAll:v("saveAll"),fetchAll:v("fetchAll"),saveOrder:v("saveOrder"),fetchOrder:v("fetchOrder"),saveOne:v("saveOne"),fetchOne:v("fetchOne"),createMRequest:function(e){var t=new p(this);return f(e)&&e.manage(t),t},clearCacheByKey:function(e){var t=this,r=t.$mCache;r.del(e)},clearCacheByName:function(e){for(var t=this,r=t.$mCache,n=r.c,i=0;n.length>i;i++){var a=n[i],o=a.v,s=o&&o.$mm;if(s){var c=s.meta.name;c==e&&r.del(s.cacheKey)}}},getCachedModel:function(t){var n,a,o=this,s=o.$mCache,c=null;if(e.isString(t)?n=t:(a=o.getModelMeta(t),n=t.cacheKey||a.cacheKey,i(n)&&(n=r(n,[a,t]))),n){var f=o.$mCacheKeys,u=f[n];if(u)c=u.e;else if(c=s.get(n)){a||(a=c.$mm.meta);var v=t.cacheTime||a.cacheTime||0;i(v)&&(v=r(v,[a,t])),v>0&&m()-c.$mm.doneAt>v&&(o.clearCacheByKey(n),c=null)}}return c}}),a}),define("mxext/model",["magix/magix"],function(e){var t=function(t,r){var n=this,i=function(){i.superclass.constructor.apply(this,arguments),r&&e.safeExec(r,arguments,this)};return e.mix(i,n,{prototype:!0}),e.extend(i,n,t)},r=+new Date,n=function(e){e&&this.set(e),this.id="m"+r--},i=encodeURIComponent;return e.mix(n,{GET:"GET",POST:"POST",extend:t}),e.mix(n.prototype,{sync:e.noop,parse:function(e){return e},getPostParams:function(){return this.getParams(n.POST)},getUrlParams:function(){return this.getParams(n.GET)},getParams:function(t){var r=this;t=t?t.toUpperCase():n.GET;var a,o="$"+t,s=r[o],c=[];if(s)for(var f in s)if(a=s[f],e.isArray(a))for(var u=0;a.length>u;u++)c.push(f+"="+i(a[u]));else c.push(f+"="+i(a));return c.join("&")},setUrlParamsIf:function(e,t){this.setParams(e,t,n.GET,!0)},setPostParamsIf:function(e,t){var r=this;r.setParams(e,t,n.POST,!0)},setParams:function(t,r,i,a){i=i?i.toUpperCase():n.GET;var o=this;o.$types||(o.$types={}),o.$types[i]=!0;var s="$"+i;if(o[s]||(o[s]={}),e.isObject(t))for(var c in t)a&&o[s][c]||(o[s][c]=t[c]);else t&&(a&&o[s][t]||(o[s][t]=r))},setPostParams:function(e,t){var r=this;r.setParams(e,t,n.POST)},setUrlParams:function(e,t){this.setParams(e,t,n.GET)},reset:function(){var t=this,r=t.$types;if(r){for(var n in r)e.has(r,n)&&delete t["$"+n];delete t.$types}var i=t.$keys,a=t.$attrs;if(i){for(var o=0;i.length>o;o++)delete a[i[o]];delete t.$keys}},get:function(e){var t=this,r=!arguments.length,n=t.$attrs;return n?r?n:n[e]:null},set:function(t,r,n){var i=this;if(i.$attrs||(i.$attrs={}),n&&!i.$keys&&(i.$keys=[]),e.isObject(t)){e.isObject(r)||(r={});for(var a in t)n&&i.$keys.push(a),e.has(r,a)||(i.$attrs[a]=t[a])}else t&&(n&&i.$keys.push(t),i.$attrs[t]=r)},request:function(t,r){t||(t=function(){});var n=this;n.$abort=!1;var i=function(i,a){if(n.$abort)t("abort",null,r);else if(i)t(i,a,r);else{if(a){var o=n.parse(a);e.isObject(o)||(o={data:o}),n.set(o,null,!0)}t(i,a,r)}};n.$trans=n.sync(i,r)},abort:function(){var e=this,t=e.$trans;t&&t.abort&&t.abort(),delete e.$trans,e.$abort=!0},isAborted:function(){return this.$abort}}),n}),define("mxext/view",["magix/magix","magix/view","magix/router"],function(e,t,r){var n=window,i=e.mix,a=function(e){n.clearTimeout(e),n.clearInterval(e)},o=function(e){c(e.destroy,[],e)},s=0,c=e.safeExec,f=e.has,u=t.extend({navigate:function(){r.navigate.apply(r,arguments)},manage:function(t,r){var n=this,i=arguments,c=!0;1==i.length&&(r=t,t="res_"+s++,c=!1),n.$res||(n.$res={});var f;e.isNumber(r)?f=a:r&&r.destroy&&(f=o);var u={hasKey:c,res:r,sign:n.sign,destroy:f};return n.$res[t]=u,r},getManaged:function(e){var t=this,r=t.$res;if(r&&f(r,e)){var n=r[e],i=n.res;return i}return null},removeManaged:function(e){var t=this,r=null,n=t.$res;return n&&f(n,e)&&(r=n[e].res,delete n[e]),r},destroyManaged:function(){var e=this,t=e.$res;if(t)for(var r in t){var n=t[r];if(n.sign!=e.sign){var i=n.res,a=n.destroy,o=!1;a&&(a(i),o=!0),n.hasKey||delete t[r],e.fire("destroyManaged",{resource:i,processed:o})}}},destroyMRequest:function(){var e=this,t=e.$res;if(t)for(var r in t){var n=t[r],i=n.res;i&&i.fetchOne&&i.fetchAll&&(i.destroy(),delete t[r])}}},function(){var e=this;e.on("interact",function(){e.on("rendercall",e.destroyMRequest),e.on("prerender",e.destroyManaged),e.on("destroy",e.destroyManaged)}),c(u.ms,arguments,e)},{ms:[],mixin:function(e,t){u.ms.push(t),i(u.prototype,e)}});return u}),document.createElement("vframe");
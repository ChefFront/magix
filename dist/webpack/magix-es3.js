/*!3.8.3 MIT kooboy_li@163.com*/module.exports=function(){var n,t=require("$"),e=t.isPlainObject,r=t.isArray,i=0,o="",f=[],a=",",u=window,c=document,h=t(c),s=u.setTimeout,d="changed",v="change",$="pageunload",l="value",p=function(){},g=JSON.stringify,m="\x1e",b="object",w="prototype",y="params",x="path",k="mx-view",V=/[#?].*$/,I=/([^=&?\/#]+)=?([^&#?]*)/g,S=/(?!^)=|&/,A=function(n){return(n||"mx_")+i++},T=A(),C={rootId:A(),defaultView:T,error:function(n){throw n}},O=function(n){return typeof n==b?n:c.getElementById(n)},U=function(n){return!n||typeof n!=b},j=function(n,t,e){if(n=O(n),t=O(t),n&&t&&!(e=n==t))try{e=16==(16&t.compareDocumentPosition(n))}catch(n){}return e},q=function(n){for(var t,e=1,r=arguments.length;e<r;e++)for(var i in t=arguments[e])L(t,i)&&(n[i]=t[i]);return n},P=function(n,t,e){for(e in t=[],n)L(n,e)&&t.push(e);return t},Z=C.hasOwnProperty,E=t("head"),H=function(n,t){t&&!H[n]&&(H[n]=1,E.append("<style>"+t))},N=function(n){return n.id||(n.$a=1,n.id=A())},z=function(n,t,e,i,o){t=t||f,r(n)||(n=[n]),r(t)||(t=[t]);for(var a=0,u=n;a<u.length;a++){o=u[a];try{i=o&&o.apply(e,t)}catch(n){C.error(n)}}return i},L=function(n,t){return n&&Z.call(n,t)},B=function(n,t,e){var r,i;for(r in t)i=t[r],e[r]=(i+o)[0]==m?n[i]:i},M=function(n,t){return t.f-n.f||t.t-n.t},R=function(n,t,e,r){(r=this).c=[],r.b=t||5,r.x=r.b+(n||20),r.r=e};q(R[w],{get:function(n){var t=this.c[m+n];return t&&(t.f++,t.t=i++,t=t.v),t},each:function(n,t,e){for(var r=0,i=(e=this).c;r<i.length;r++)n(i[r].v,t,e)},set:function(n,t){var e=this.c,r=m+n,o=e[r],f=this.b;if(!o){if(e.length>=this.x)for(e.sort(M);f--;)(o=e.pop()).f>0&&this.del(o.o);o={o:n},e.push(o),e[r]=o}o.v=t,o.f=1,o.t=i++},del:function(n){n=m+n;var t=this.c,e=t[n],r=this.r;e&&(e.f=-1,e.v=o,delete t[n],r&&z(r,e.o))},has:function(n){return L(this.c,m+n)}});var _,D,F=t.isFunction,J=function(n,t){var e=C.views||p;if(e[T]||(e[T]=_),!n)return t();r(n)||(n=[n]);for(var i,o=[],f=0,a=function(){f||t.apply(an,o)},u=function(n,t,e){(n=n(e=function(n){o[t]||(f--,o[t]=n,a())})).then&&n.then(e)},c=0;c<n.length;c++)i=e[n[c]],F(i)&&!i.extend?(f++,u(i,c)):o[c]=e[n[c]];a()},Q=function(){},W=function(n,t,e,r,i){return Q[w]=t[w],i=new Q,q(i,e),q(n,r),i.constructor=n,n[w]=i,n},G=t.find||t.zepto,K=G.matchesSelector||G.matches,X=function(n,t){t=n.data,n.eventTarget=t.e,z(t.f,n,t.v)},Y=function(n,e,r,i,o){o&&(e+="."+o.i),i?t(n).off(e,r):t(n).on(e,o,r)},nn=new R,tn=0,en=function(n,t,e){try{e=decodeURIComponent(e)}catch(n){}D[t]=e},rn=function(n){var t,e=nn.get(n);return e||(D={},n==(t=n.replace(V,o))&&S.test(t)&&(t=o),n.replace(t,o).replace(I,en),nn.set(n,e={a:t,b:D})),{path:e.a,params:q({},e.b)}},on=function(n,t,e){var r,i,f,a=[];for(i in t)r=t[i]+o,(!e||r||L(e,i))&&(r=encodeURIComponent(r),a.push(f=i+"="+r));return f&&(n+=(n&&(~n.indexOf("?")?"&":"?"))+a.join("&")),n},fn=function(n,t){var e,r={};if(n)for(var i=0,o=n;i<o.length;i++)e=o[i],r[t&&e?e[t]:e]=t?e:1+(0|r[e]);return r},an={config:function(n,t){return t=C,n&&(t=e(n)?q(t,n):t[n]),t},boot:function(n){q(C,n),J(C.ini,function(t){q(C,t,n),J(C.exts,function(){Nn.on(d,Dn),ln.on(d,Dn),tn=1,Pn()})})},toMap:fn,toTry:z,toUrl:on,parseUrl:rn,mix:q,has:L,keys:P,inside:j,node:O,applyStyle:H,guid:A,use:J,Cache:R,nodeId:N},un={fire:function(n,t,e,r){var i,f,a,u,c=this,h=c[m+n];if(t||(t={}),t.type||(t.type=n),h)for(f=(i=h.length)-1;i--;)(u=h[a=r?i:f-i]).f?(u.x=1,z(u.f,t,c),u.x=o):u.x||(h.splice(a,1),f--);(h=c["on"+n])&&z(h,t,c),e&&c.off(n)},on:function(n,t){var e=m+n;(this[e]||(this[e]=[])).push({f:t})},off:function(n,t){var e,r=m+n,i=this[r];if(t){if(i)for(var f=0,a=i;f<a.length;f++)if((e=a[f]).f==t){e.f=o;break}}else delete this[r],delete this["on"+n]}};an.Event=un;var cn={},hn={},sn={},dn=0,vn=function(n){for(var t=0,e=n=(n+o).split(",");t<e.length;t++){var r=e[t];L(hn,r)?hn[r]++:hn[r]=1}return n},$n=function(n){for(var t,e=0,r=n;e<r.length;e++)t=r[e],L(hn,t)&&(--hn[t]||(delete hn[t],delete cn[t]))};var ln=q({get:function(n){var t=n?cn[n]:cn;return t},set:function(n){dn=function(n,t,e){var r,i,o,f=0;for(o in n)r=n[o],i=t[o],U(r)&&i===r||(e[o]=1,f=1),t[o]=r;return f}(n,cn,sn)||dn},digest:function(n){n&&ln.set(n),dn&&(dn=0,this.fire(d,{keys:sn}),sn={})},diff:function(){return sn},clean:function(n){return{ctor:function(){n=vn(n),this.on("destroy",function(){return $n(n)})}}}},un);an.State=ln;var pn,gn,mn,bn,wn,yn,xn,kn,Vn="view",In=new R,Sn=new R,An=u.location,Tn=0,Cn={query:{},params:{},href:o},On=/(?:^.*\/\/[^\/]+|#.*$)/gi,Un=/^[^#]*#?!?/,jn=function(n){return this[y][n]||o},qn=function(n,t){n="#!"+n,t?An.replace(n):An.hash=n},Pn=function(){var n,t,e=En().srcHash;Y(u,"hashchange",function(r,i,f){t||(i=En(),(n=i.srcHash)!=e&&(f=function(){r.p=1,e=n,t=o,qn(n),Hn()},r={reject:function(){r.p=1,t=o,qn(e)},resolve:f,prevent:function(){t=1}},Nn.fire(v,r),t||r.p||f()))}),u.onbeforeunload=function(n,t,e){if(n=n||u.event,t={},Nn.fire($,t),e=t.msg)return n&&(n.returnValue=e),e},Hn()},Zn=c.title,En=function(n){n=n||An.href;var t,r,i,f,a,u=In.get(n);return u||(t=n.replace(On,o),r=n.replace(Un,o),i=rn(t),f=rn(r),a=q({},i[y],f[y]),u={get:jn,href:n,srcQuery:t,srcHash:r,query:i,hash:f,params:a},tn&&(!function(n,t){if(gn||(gn=C.routes||{},mn=C.unmatchView,bn=C.defaultView,wn=C.defaultPath||"/",yn=C.rewrite),!n[Vn]){var r=n.hash[x]||wn;yn&&(r=yn(r,n[y],gn)),t=gn[r]||mn||bn,n[x]=r,n[Vn]=t,e(t)&&q(n,t)}}(u),In.set(n,u))),u},Hn=function(){var n=En(),t=function(n,t){var e=n.href,r=t.href,i=e+m+r,o=Sn.get(i);if(!o){var f,a;o={params:a={},force:!e};for(var u=n[y],c=t[y],h=function(n){var t=u[n],e=c[n];t!=e&&(a[n]={from:t,to:e},f=1)},s=0,d=P(u).concat(P(c));s<d.length;s++)h(d[s]);u=n,c=t,a=o,h(x),h(Vn),Sn.set(i,o={a:f,b:o})}return o}(Cn,Cn=n);return!Tn&&t.a&&((pn=t.b)[x]&&(c.title=n.title||Zn),Nn.fire(d,pn)),Tn=0,pn},Nn=q({parse:En,diff:Hn,to:function(n,t,r,i){!t&&e(n)&&(t=n,n=o);var f,a,u,c,h=rn(n),s=h[y],d=h[x],v=Cn[x],$=Cn[y],l=Cn.query[y];if(q(s,t),d)for(v in l)L(s,v)||(s[v]=o);else $&&(d=v,s=q({},$,s));a=Cn,u=r,c=i,(f=on(f=d,s,l))!=a.srcHash&&(Tn=c,qn(f,u))}},un);an.Router=Nn;var zn=function(n){if(!n.$a&&!n.$b&&n.$cc==n.$rc){n.$cr||(n.$cr=1,n.$ca=0,n.fire("created"));var t=void 0,e=n.id,r=n.pId;(t=Bn[r])&&!L(t.$d,e)&&(t.$d[e]=1,t.$rc++,zn(t))}},Ln=function(n,t){if(!n.$ca&&n.$cr){n.$cr=0,n.$ca=1,n.fire("alter",t);var e=void 0,r=n.id,i=n.pId;(e=Bn[i])&&L(e.$d,r)&&(e.$rc--,delete e.$d[r],Ln(e,t))}},Bn={},Mn=[],Rn=0,_n=function(n,t,e){if(n&&n.$f!=Rn&&(e=n.$v)&&e.$a>1){(t?function(n,t,e){var r,i=n.$os;if(i)for(var o=0,f=i;o<f.length&&(r=f[o],!(e=L(t,r)));o++);return e}(e,t):At(e))&&e.$b();for(var r=void 0,i=0,o=n.children();i<o.length;i++)r=o[i],_n(Bn[r],t)}},Dn=function(t){var e,r,o=(xn||(n=c.body,O(r=C.rootId)||(n.id=r),xn=new Fn(r)),xn);(e=t[Vn])?o.mountView(e.to):(Rn=i++,_n(o,t.keys))},Fn=function(n,t,e){var r,i;(e=this).id=n,e.$c={},e.$cc=0,e.$rc=0,e.$g=1,e.$d={},e.$e=[],e.pId=t,i=e,L(Bn,r=n)||(Bn[r]=i,Fn.fire("add",{vframe:i}),(r=O(r))&&(r.vframe=i))};q(Fn,{all:function(){return Bn},get:function(n){return Bn[n]}},un),q(Fn[w],un,{mountView:function(n,t){var e,r,i,o,f,a,u=this,c=u.id,h=u.pId,s=u.$g,d=O(c);!u.$h&&d&&(u.$h=1,u.$i=d.innerHTML),u.unmountView(),u.$a=0,d&&n&&(u[x]=n,e=rn(n),i=e[x],r=++s,o=e[y],a=(a=(a=(a=Bn[h])&&a.$v)&&a.$d)&&a.$a,n.indexOf(m)>0&&B(a,o,o),u.$n=e[x],q(o,t),J(i,function(n){if(r==u.$g){if(!n)return C.error(Error("id:"+c+" cannot load:"+i));f=St(n),i=new n(c,u,o,f),u.$v=i,u.$f=Rn,kt(i),z(i.init,o,i),i.$b(),i.$e||(u.$h=0,i.$f||i.endUpdate())}}))},unmountView:function(){var n,e,r=this,i=r.$v,o=r.id;r.$e=[],i&&(kn||(e=1,kn={id:o}),r.$a=1,r.unmountZone(0,1),Ln(r,kn),r.$v=0,i.$a>0&&(i.$a=0,i.fire("destroy",0,1,1),yt(i,1),kt(i,1),i.owner=0),i.$a--,(n=O(o))&&r.$h&&t(n).html(r.$i),e&&(kn=0)),r.$g++},mountVframe:function(n,t,e){var r,i=this,o=i.id,f=i.$c;return Ln(i,{id:n}),(r=Bn[n])||(L(f,n)||(i.$o=0,i.$cc++),f[n]=n,(r=Mn.pop())?Fn.call(r,n,o):r=new Fn(n,o)),r.mountView(t,e),r},mountZone:function(n,e){var r,i,o=this,f=[];n=n||o.id;var a,u=t("#"+n+" ["+k+"]");o.$b=1;for(var c=0,h=u;c<h.length;c++)r=h[c],i=N(r),r.$b||(r.$b=1,f.push([i,r.getAttribute(k)]));for(var s=0,d=f;s<d.length;s++)i=(a=d[s])[0],r=a[1],f[i]?C.error(Error("vf.id duplicate:"+i+" at "+o[x])):o.mountVframe(f[i]=i,r);o.$b=0,e||zn(o)},unmountVframe:function(n,t){var e,r,i,o;if(n=n?this.$c[n]:this.id,e=Bn[n]){var f=e.$cr,a=e.pId;e.unmountView(),i=f,(o=Bn[r=n])&&(delete Bn[r],Fn.fire("remove",{vframe:o,fcc:i}),(r=O(r))&&(r.$b=0),r&&(r.vframe=0),r&&(r.$d=0)),e.id=e.pId=e.$c=e.$d=0,e.$h=0,e.off("alter"),e.off("created"),Mn.push(e),(e=Bn[a])&&L(e.$c,n)&&(delete e.$c[n],e.$o=0,e.$cc--,t||zn(e))}},unmountZone:function(n,t){var e;for(e in this.$c)(!n||e!=n&&j(e,n))&&this.unmountVframe(e,1);t||zn(this)},parent:function(n,t){for(t=this,n=n>>>0||1;t&&n--;)t=Bn[t.pId];return t},children:function(n){return(n=this).$o||(n.$o=P(n.$c))},invoke:function(n,t){var e,r,i,o,f,a=this.$e;return(r=this.$v)&&r.$f?e=(i=r[n])&&z(i,t,r):((o=a[f=m+n])&&(o.r=t===o.a),o={n:n,a:t,k:f},a.push(o),a[f]=o),e}}),an.Vframe=Fn,t.fn.invokeView=function(n,t){if(this.length){var e=this[0],r=e.vframe;if(void 0===t)return r&&r.invoke(n);for(var i=0;i<this.length;i++)(r=(e=this[i]).vframe)&&r.invoke(n,t)}};var Jn=new R(30,10),Qn=/(?:([\w\-]+)\x1e)?([^(]+)\(([\s\S]*)?\)/,Wn={},Gn={},Kn=function(t,e){var r,i,o,a,u,c,h=[],s=t,d=t.getAttribute("mx-"+e),v=[],$=0;if(d&&((a=Jn.get(d))||((a={v:(a=d.match(Qn)||f)[1],n:a[2],i:a[3]}).p=a.i&&z(Function("return "+a.i),f,t),Jn.set(d,a)),a=q({},a,{r:d}),h.push(a)),a&&!a.v||Gn[e]){if(!(c=t.$a))for(v.push(s);s!=n&&(s=s.parentNode);){if(Bn[i=s.id]||(i=s.$v)){c=i;break}v.push(s)}if(c){for(var l=0,p=v;l<p.length;l++)(d=p[l]).$a=c;s=t.id,Bn[s]&&($=c=s);do{if((r=Bn[c])&&(u=r.$v)){for(i in(o=u.$so)[e])o={r:i,v:c,n:i},i?K(t,i)&&h.push(o):$&&h.unshift(o);if(u.$e&&!$){a&&!a.v&&(a.v=c);break}$=0}}while(r&&(c=r.pId))}}return h},Xn=function(t){for(var e,r,i,o,f,a,u,c=t.target,h=t.type,s=[];c!=n;){if((e=Kn(c,h)).length){s=[];for(var d=0,v=e;d<v.length;d++){var $=v[d],l=$.v,p=($.r,$.n),g=$.p,b=$.i;if(a!=l){if(a&&t.isPropagationStopped())break;a=l}if(o=(i=Bn[l])&&i.$v){if((f=o[p+m+h])&&(t.eventTarget=c,u=g||{},b&&b.indexOf(m)>0&&B(o.$d.$a,u,u={}),t[y]=u,z(f,t,o),t.isImmediatePropagationStopped()))break;0}else t.stopPropagation();0}}if((r=c.$)&&r[h]||t.isPropagationStopped())break;s.push(c),c=c.parentNode||n}for(var w=0,x=s;w<x.length;w++)(r=(c=x[w]).$||(c.$={}))[h]=1},Yn={input:1,br:1,hr:1,img:1,embed:1,source:1,area:1,param:1,col:1,track:1,wbr:1},nt={input:[l,"checked"],textarea:[l],option:["selected"]},tt="#text";var et=/^<([a-z\d]+)((?:\s+[-A-Za-z\d_]+(?:="[^"]*")?)*)\s*(\/?)>/,rt=/([-A-Za-z\d_]+)(?:="([^"]*)")?/g,it=/^<\/[a-z\d+]+>/,ot={},ft=/&#?[^\W]+;?/g,at=c.createElement("div"),ut=function(n){return L(ot,n)||(at.innerHTML=n,ot[n]=at.innerText),ot[n]},ct=function(n){return n.replace(ft,ut)},ht=function(n,t){var e=N(t);n.$c[e]?n.unmountVframe(e,1):n.unmountZone(e,1)},st=function(n,t,e,r){var i,f,a,u,c=t.d,h=n.attributes,s=t.h;for(u=h.length;u--;)f=h[u].name,L(s,f)||("id"==f?r||e.d.push([n,o]):(e.c=1,n.removeAttribute(f)));for(var d=0,v=t.e;d<v.length;d++)f=(i=v[d]).f,a=ct(i.g),"id"==f?e.d.push([n,a]):n.getAttribute(f)!=a&&(e.c=1,n.setAttribute(f,a));var $=nt[c];if($)for(var p=0,g=$;p<g.length;p++)n[i=g[p]]=L(s,i)?i!=l||s[i]:i==l&&o},dt=function(n,t,e,r,i){return(i=n.d)==tt?c.createTextNode(n.b):(r=c.createElementNS("svg"==i?"http://www.w3.org/2000/svg":t.namespaceURI,i),st(r,n,e),r.innerHTML=n.b,r)},vt=function(n,t,e,r,i){var o,f,a,u,c,h,s,d,v,$,l={};for(o=(u=n.childNodes).length,f=(c=t.a).length,a=0;a<o;a++)v=(h=u[a]).id,h.$a&&(v=($=Bn[v])&&$.$n),v&&(v=l[v]||(l[v]=[])).push(h);for(a=0;a<f;a++)h=u[a],(v=l[(s=c[a]).i])&&(v=v.shift())?(v!=h&&n.insertBefore(v,h),$t(v,n,s,e,r,i)):h?l[h.i]?(o++,e.c=1,n.insertBefore(dt(s,n,e),h)):$t(h,n,s,e,r,i):(n.appendChild(dt(s,n,e)),e.c=1);for(a=f;a<o;a++)d=n.lastChild,ht(r,d),n.removeChild(d),e.c=1},$t=function(n,t,e,r,i,o){var f=n.nodeName.toLowerCase();if(f==e.d)if(f==tt)n.nodeValue!=e.b&&(n.nodeValue=ct(e.b));else{var a=e.h[k],u=e.b,c=void 0,h=void 0,s=void 0,d=Bn[n.id],v=void 0,$=void 0,l=void 0,p=void 0,g=void 0,b=void 0;a&&d&&(v=(l=d.$v).$g,p=rn(a),b=u!=d.$i,$=a.indexOf("?")>0||b),a&&d&&d.$n==p[x]?$&&(v?(g=p[y],a.indexOf(m)>-1&&B(o,g,g),d.$i=u,d[x]=a,p={inner:u,deep:!l.$e,html:b},st(n,e,r,1),z(v,[g,p],l)&&l.$b(),h=p.deep):(s=1,h=1,c=1)):(c=1,h=1,s=d),s&&d.unmountVframe(0,1),c&&st(n,e,r,d&&a),h&&vt(n,e,r,i,o)}else ht(i,n),t.replaceChild(dt(e,t,r),n),r.c=1},lt=function(n){var t,e,r,i=n.$b,a=Bn[i],u=n.$a,c=a&&a.$v,s={d:[]},d=O(i);if(c&&c.$a>0&&(t=c.$e)){r=function(n){for(var t,e,r,i,a,u,c,h,s,d,v,$=n.length,p=0,g={a:[],b:n},m=[g];p<$;)t=1,"<"==(r=n.slice(p))[0]&&("/"==r[1]?(i=r.match(it))&&(c=m.pop(),u=n.slice(c.c,p),"textarea"==c.d?(c.e.push({f:l,g:u}),c.h[l]=u,c.a=f):c.b=u,g=m[m.length-1],p+=i[0].length,t=0):(i=r.match(et))&&(a=i[1],u=[],h={},v=o,i[2].replace(rt,function(n,t,e){e=e||o,"id"==t?v=e:t==k&&e&&!v&&(v=rn(e)[x]),u.push({f:t,g:e}),h[t]=e}),p+=i[0].length,d=i[3]||L(Yn,a),c={i:v,d:a,e:u,h:h,a:[],c:p},g.a.push(c),d?c.j=1:(m.push(c),g=c),t=0)),t&&(p+=(s=(e=r.indexOf("<"))<0?r:r.substring(0,e)).length,c={d:tt,b:s},g.a.push(c));return g}(bt(t(u),i)),vt(d,r,s,a,u);for(var v=0,$=s.d;v<$.length;v++)(e=$[v])[0].id=e[1];s.c&&(c.endUpdate(i),h.trigger({type:"htmlchanged",vId:i}))}c.fire("domready")},pt=function(n){var t;this.$b=n,this.$a=((t={vId:n})[m]=1,t)};q(pt[w],{get:function(n,t){return t=this.$a,n&&(t=t[n]),t},set:function(n){return q(this.$a,n),this},digest:function(n){return this.set(n),lt(this),this},snapshot:function(){return this.$d=g(this.$a),this},altered:function(){if(this.$d)return this.$d!=g(this.$a)}});var gt=/^(\$?)([^<]*)<([^>]+)>$/,mt=/\x1f/g,bt=function(n,t){return(n+o).replace(mt,t)},wt=function(n,t,e){return n.$h?e=n:((e=function(n){z(e.$h,n,this)}).$h=[n],e.$i=1),e.$h=e.$h.concat(t.$h||t),e},yt=function(n,t){var e,r,i=n.$r;for(e in i)r=i[e],(t||r.x)&&xt(i,e,1)},xt=function(n,t,e,r){var i,o,a=n[t];return a&&a!=r&&((i=(o=a.e).destroy)&&e&&z(i,f,o),delete n[t]),o},kt=function(t,e){var r,i,o,f,a,u,c=t.$eo,h=t.$so,s=t.$el,d=t.id;for(r in c)i=r,o=h[r],f=e,void 0,void 0,a=0|Wn[i],u=f?-1:1,a&&f!==a||Y(n,i,Xn,f),Wn[i]=a+u,o&&(Gn[i]=(0|Gn[i])+u);for(var v=0,$=s;v<$.length;v++)r=$[v],Y(r.e,r.n,X,e,{i:d,v:t,f:r.f,e:r.e})},Vt=[],It={win:u,doc:c},St=function(n){if(!n[m]){n[m]=[];var t=n[w],e=void 0,r=void 0,i=void 0,o={},f=[],u={},c=void 0,h=void 0,s=void 0,d=void 0,v=void 0,$={};if(r=t.mixins){for(var l=0,p=r;l<p.length;l++)for(s in c=p[l])e=c[s],i=$[s],"ctor"!=s?(gt.test(s)&&(i?e=wt(i,e):e.$i=1),$[s]=e):n[m].push(e);for(s in $)L(t,s)||(t[s]=$[s])}for(s in t)if(e=t[s],r=s.match(gt)){h=r[1],i=r[2];for(var g=0,b=r[3].split(a);g<b.length;g++){if(d=b[g],c=It[i],v=1,h){if(c){f.push({f:e,e:c,n:d});continue}v=2,(c=u[d])||(c=u[d]={}),c[i]=1}o[d]=o[d]|v,(c=t[d=i+m+d])?c.$i&&(e.$i?t[d]=wt(c,e):L(t,s)&&(t[d]=e)):t[d]=e}}k="$b",V=(y=t)[x="render"],y[x]=y[k]=function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];(I=this).$a>0&&(I.$a++,I.fire("rendercall"),yt(I),z(V,n,I))},t.$eo=o,t.$el=f,t.$so=u,t.$e=t.tmpl,t.$g=t.assign}var y,x,k,V,I;return n[m]},At=function(n){var t,e,r,i=n.$l;if(i.f&&(i.p&&(t=pn[x]),!t&&i.k)){r=pn[y];for(var o=0,f=i.k;o<f.length&&(e=f[o],!(t=L(r,e)));o++);}return t},Tt=function(n,t,e,r){(r=this).owner=t,r.id=n,r.$l={k:[]},r.$r={},r.$a=1,r.updater=r.$d=new pt(r.id),z(Vt,e,r)},Ct=Tt[w];q(Tt,{merge:function(){for(var n,t,e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];for(var i=0,o=e;i<o.length;i++)(t=(n=o[i])&&n.ctor)&&Vt.push(t),q(Ct,n)},extend:function(n,t){var e=this,r=(n=n||{}).ctor,i=[];r&&i.push(r);var o=function(n,t,r,o){e.call(this,n,t,r),z(i.concat(o),r,this)};return o.extend=e.extend,W(o,e,n,t)}}),q(Ct,un,{init:p,wrapEvent:function(n){return bt(n,this.id)},beginUpdate:function(n,t){(t=this).$a>0&&t.$f&&t.owner.unmountZone(n,1)},endUpdate:function(n,t,e,r,i){(e=this).$a>0&&(n=n||e.id,t?i=t:(i=e.$f,e.$f=1),(r=e.owner).mountZone(n,t),i||s(e.wrapAsync(function(){!function(n,t,e){for(t=n.$e;t.length;)(e=t.shift()).r||n.invoke(e.n,e.a),delete t[e.k]}(r)}),0))},wrapAsync:function(n,t){var e=this,r=e.$a;return function(){for(var i=[],o=0;o<arguments.length;o++)i[o]=arguments[o];if(r>0&&r==e.$a)return n.apply(t||e,i)}},observeLocation:function(n,t){var r;(r=this.$l).f=1,e(n)&&(t=n[x],n=n[y]),r.p=t,n&&(r.k=(n+o).split(a))},observeState:function(n){this.$os=(n+o).split(a)},capture:function(n,t,e,r){return r=this.$r,t?(xt(r,n,1,t),r[n]={e:t,x:e}):t=(r=r[n])&&r.e,t},release:function(n,t){return xt(this.$r,n,t)},leaveTip:function(n,t){var e=this,r=function(i){var o="a",f="b";i.type!=v&&(o="b",f="a"),r[o]?(i.prevent(),i.reject()):t()?(i.prevent(),r[f]=1,e.leaveConfirm(n,function(){r[f]=0,i.resolve()},function(){r[f]=0,i.reject()})):i.resolve()},i=function(e){t()&&(e.msg=n)};Nn.on(v,r),Nn.on($,i),e.on("unload",r),e.on("destroy",function(){Nn.off(v,r),Nn.off($,i)})},render:p}),an.View=Tt;var Ot=t.type,Ut=t.now||Date.now,jt=function(){this.id=A("b"),this.$={}};q(jt[w],{get:function(n,t,e){var i=t!=e,f=this.$;if(n){for(var a=r(n)?n.slice():(n+o).split("."),u=void 0;(u=a.shift())&&f;)f=f[u];u&&(f=e)}return i&&Ot(t)!=Ot(f)&&(f=t),f},set:function(n,t){var r;e(n)||((r={})[n]=t,n=r),q(this.$,n)}});var qt=function(n,t,e){(e=this[n])&&(delete this[n],z(e,t,e.e))},Pt=function(n,t,e,i,o){if(n.$d)return n;if(n.$e)return n.enqueue(Pt.bind(n,n,t,e,i,o));n.$e=1,r(t)||(t=[t]);for(var f,a,u,c,h,s,d,v,$,l=n.constructor,p=0,g=l.$f,m=(f=e,a=l,u=n,c=t.length,h=i,s=l.$c,d=[],v=0,$=0,function(n,t){var e,r=this;$++;var i=r.$b,o=i.k;d[n+1]=r;var l,p={bag:r,error:t};if(t?(v=t,a.fire("fail",p),e=1):s.has(o)||(o&&s.set(o,r),i.t=Ut(),(l=i.a)&&z(l,r,r),(l=i.x)&&a.clear(l),a.fire("done",p),e=1),!u.$d){var g=$==c;g&&(u.$e=0,2==h&&(d[0]=v,z(f,d,u))),1==h&&z(f,[t||null,r,g,n],u)}e&&a.fire("end",p)}),b=0,w=t;b<w.length;b++){var y=w[b];if(y){var x=l.get(y,o),k=x.e,V=k.$b.k,I=m.bind(k,p++),S=void 0;V&&g[V]?g[V].push(I):x.u?(V&&((S=[I]).e=k,g[V]=S,I=qt.bind(g,V)),l.$s(k,I)):I()}}return n},Zt=function(){var n=this;n.id=A("s"),n.$g=[]};q(Zt[w],{all:function(n,t){return Pt(this,n,t,2)},save:function(n,t){return Pt(this,n,t,2,1)},one:function(n,t){return Pt(this,n,t,1)},enqueue:function(n){var t=this;return t.$d||(t.$g.push(n),t.dequeue(t.$h)),t},dequeue:function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];var e,r=this;r.$e||r.$d||(r.$e=1,s(function(){r.$e=0,r.$d||(e=r.$g.shift())&&z(e,r.$h=n)},0))},destroy:function(n){(n=this).$d=1,n.$g=0}});var Et=function(n,t){return[g(t),g(n)].join(m)},Ht=function(n,t,e,r){(r=n&&n.$b)&&t[r.n]&&e.del(r.k)},Nt=q({add:function(n){var t,e=this.$b;r(n)||(n=[n]);for(var i=0,o=n;i<o.length;i++)if(t=o[i]){var f=t.name,a=t.cache;t.cache=0|a,e[f]=t}},create:function(n){var t=this.meta(n),r=0|n.cache||t.cache,i=new jt;i.set(t),i.$b={n:t.name,a:t.after,x:t.cleans,k:r&&Et(t,n)},e(n)&&i.set(n);var o=t.before;return o&&z(o,i,i),this.fire("begin",{bag:i}),i},meta:function(n){return this.$b[n.name||n]||n},get:function(n,t){var e,r;return t||(e=this.cached(n)),e||(e=this.create(n),r=1),{e:e,u:r}},clear:function(n){this.$c.each(Ht,fn((n+o).split(a)))},cached:function(n){var t,e,r=this.$c,i=this.meta(n),o=0|n.cache||i.cache;if(o&&(e=Et(i,n)),e){var f=this.$f[e];f?t=f.e:(t=r.get(e))&&Ut()-t.$b.t>o&&(r.del(e),t=0)}return t}},un);return Zt.extend=function(n,t,e){var r=function(){Zt.call(this)};return r.$s=n,r.$c=new R(t,e),r.$f={},r.$b={},W(r,Zt,null,Nt)},an.Service=Zt,q(p[w],un),p.extend=function n(t,e){var r=this,i=t&&t.ctor,o=function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];r.apply(this,n),i&&i.apply(this,n)};return o.extend=n,W(o,r,t,e)},an.Base=p,_=Tt.extend(),an}();
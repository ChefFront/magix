/*!3.8.3 MIT kooboy_li@163.com*/define("magix",["$"],function(e){var n,t,r=e("$"),i=r.isPlainObject,o=r.isArray,a=0,f="",u=[],c=",",s=window,h=document,d=r(h),v=s.setTimeout,$="changed",l="change",p="pageunload",g="value",m=function(){},b=JSON.stringify,w="\x1e",y="object",x="prototype",k="params",V="path",I="mx-view",S=/[#?].*$/,j=/([^=&?\/#]+)=?([^&#?]*)/g,A=/(?!^)=|&/,T=function(e){return(e||"mx_")+a++},C=T(),O={rootId:T(),defaultView:C,error:function(e){throw e}},U=function(e){return typeof e==y?e:h.getElementById(e)},P=function(e){return!e||typeof e!=y},Z=function(e,n,t){if(e=U(e),n=U(n),e&&n&&!(t=e==n))try{t=16==(16&n.compareDocumentPosition(e))}catch(e){}return t},q=function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var i in n=arguments[t])L(n,i)&&(e[i]=n[i]);return e},E=function(e,n,t){for(t in n=[],e)L(e,t)&&n.push(t);return n},H=O.hasOwnProperty,N=r("head"),_=function(e,n){n&&!_[e]&&(_[e]=1,N.append("<style>"+n))},M=function(e){return e.id||(e.$a=1,e.id=T())},z=function(e,n,t,r,i){n=n||u,o(e)||(e=[e]),o(n)||(n=[n]);for(var a=0,f=e;a<f.length;a++){i=f[a];try{r=i&&i.apply(t,n)}catch(e){O.error(e)}}return r},L=function(e,n){return e&&H.call(e,n)},B=function(e,n,t){var r,i;for(r in n)i=n[r],t[r]=(i+f)[0]==w?e[i]:i},R=function(e,n){return n.f-e.f||n.t-e.t},D=function(e,n,t,r){(r=this).c=[],r.b=n||5,r.x=r.b+(e||20),r.r=t};q(D[x],{get:function(e){var n=this.c[w+e];return n&&(n.f++,n.t=a++,n=n.v),n},each:function(e,n,t){for(var r=0,i=(t=this).c;r<i.length;r++)e(i[r].v,n,t)},set:function(e,n){var t=this.c,r=w+e,i=t[r],o=this.b;if(!i){if(t.length>=this.x)for(t.sort(R);o--;)(i=t.pop()).f>0&&this.del(i.o);i={o:e},t.push(i),t[r]=i}i.v=n,i.f=1,i.t=a++},del:function(e){e=w+e;var n=this.c,t=n[e],r=this.r;t&&(t.f=-1,t.v=f,delete n[e],r&&z(r,t.o))},has:function(e){return L(this.c,w+e)}});var F,J=function(n,r){if(n){var i=[],a=void 0;if(C==n)t||(t=An.extend()),r(t);else if(s.seajs)seajs.use(n,function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];for(var t=0,o=e;t<o.length;t++){var a=o[t];i.push(a&&a.__esModule&&a.default||a)}r&&r.apply(void 0,i)});else{o(n)||(n=[n]);for(var f=0,u=n;f<u.length;f++)a=u[f],a=e(a),i.push(a&&a.__esModule&&a.default||a);r&&r.apply(void 0,i)}}else r()},Q=function(){},W=function(e,n,t,r,i){return Q[x]=n[x],i=new Q,q(i,t),q(e,r),i.constructor=e,e[x]=i,e},G=r.find||r.zepto,K=G.matchesSelector||G.matches,X=function(e,n){n=e.data,e.eventTarget=n.e,z(n.f,e,n.v)},Y=function(e,n,t,i,o){o&&(n+="."+o.i),i?r(e).off(n,t):r(e).on(n,o,t)},ee=new D,ne=0,te=function(e,n,t){try{t=decodeURIComponent(t)}catch(e){}F[n]=t},re=function(e){var n,t=ee.get(e);return t||(F={},e==(n=e.replace(S,f))&&A.test(n)&&(n=f),e.replace(n,f).replace(j,te),ee.set(e,t={a:n,b:F})),{path:t.a,params:q({},t.b)}},ie=function(e,n,t){var r,i,o,a=[];for(i in n)r=n[i]+f,(!t||r||L(t,i))&&(r=encodeURIComponent(r),a.push(o=i+"="+r));return o&&(e+=(e&&(~e.indexOf("?")?"&":"?"))+a.join("&")),e},oe=function(e,n){var t,r={};if(e)for(var i=0,o=e;i<o.length;i++)t=o[i],r[n&&t?t[n]:t]=n?t:1+(0|r[t]);return r},ae={config:function(e,n){return n=O,e&&(n=i(e)?q(n,e):n[e]),n},boot:function(e){q(O,e),J(O.ini,function(n){q(O,n,e),J(O.exts,function(){He.on($,Re),$e.on($,Re),ne=1,Pe()})})},toMap:oe,toTry:z,toUrl:ie,parseUrl:re,mix:q,has:L,keys:E,inside:Z,node:U,applyStyle:_,guid:T,use:J,Cache:D,nodeId:M},fe={fire:function(e,n,t,r){var i,o,a,u,c=this,s=c[w+e];if(n||(n={}),n.type||(n.type=e),s)for(o=(i=s.length)-1;i--;)(u=s[a=r?i:o-i]).f?(u.x=1,z(u.f,n,c),u.x=f):u.x||(s.splice(a,1),o--);(s=c["on"+e])&&z(s,n,c),t&&c.off(e)},on:function(e,n){var t=w+e;(this[t]||(this[t]=[])).push({f:n})},off:function(e,n){var t,r=w+e,i=this[r];if(n){if(i)for(var o=0,a=i;o<a.length;o++)if((t=a[o]).f==n){t.f=f;break}}else delete this[r],delete this["on"+e]}};ae.Event=fe;var ue={},ce={},se={},he=0,de=function(e){for(var n=0,t=e=(e+f).split(",");n<t.length;n++){var r=t[n];L(ce,r)?ce[r]++:ce[r]=1}return e},ve=function(e){for(var n,t=0,r=e;t<r.length;t++)n=r[t],L(ce,n)&&(--ce[n]||(delete ce[n],delete ue[n]))};var $e=q({get:function(e){var n=e?ue[e]:ue;return n},set:function(e){he=function(e,n,t){var r,i,o,a=0;for(o in e)r=e[o],i=n[o],P(r)&&i===r||(t[o]=1,a=1),n[o]=r;return a}(e,ue,se)||he},digest:function(e){e&&$e.set(e),he&&(he=0,this.fire($,{keys:se}),se={})},diff:function(){return se},clean:function(e){return{ctor:function(){e=de(e),this.on("destroy",function(){return ve(e)})}}}},fe);ae.State=$e;var le,pe,ge,me,be,we,ye,xe,ke="view",Ve=new D,Ie=new D,Se=s.location,je=0,Ae={query:{},params:{},href:f},Te=/(?:^.*\/\/[^\/]+|#.*$)/gi,Ce=/^[^#]*#?!?/,Oe=function(e){return this[k][e]||f},Ue=function(e,n){e="#!"+e,n?Se.replace(e):Se.hash=e},Pe=function(){var e,n,t=qe().srcHash;Y(s,"hashchange",function(r,i,o){n||(i=qe(),(e=i.srcHash)!=t&&(o=function(){r.p=1,t=e,n=f,Ue(e),Ee()},r={reject:function(){r.p=1,n=f,Ue(t)},resolve:o,prevent:function(){n=1}},He.fire(l,r),n||r.p||o()))}),s.onbeforeunload=function(e,n,t){if(e=e||s.event,n={},He.fire(p,n),t=n.msg)return e&&(e.returnValue=t),t},Ee()},Ze=h.title,qe=function(e){e=e||Se.href;var n,t,r,o,a,u=Ve.get(e);return u||(n=e.replace(Te,f),t=e.replace(Ce,f),r=re(n),o=re(t),a=q({},r[k],o[k]),u={get:Oe,href:e,srcQuery:n,srcHash:t,query:r,hash:o,params:a},ne&&(!function(e,n){if(pe||(pe=O.routes||{},ge=O.unmatchView,me=O.defaultView,be=O.defaultPath||"/",we=O.rewrite),!e[ke]){var t=e.hash[V]||be;we&&(t=we(t,e[k],pe)),n=pe[t]||ge||me,e[V]=t,e[ke]=n,i(n)&&q(e,n)}}(u),Ve.set(e,u))),u},Ee=function(){var e=qe(),n=function(e,n){var t=e.href,r=n.href,i=t+w+r,o=Ie.get(i);if(!o){var a,f;o={params:f={},force:!t};for(var u=e[k],c=n[k],s=function(e){var n=u[e],t=c[e];n!=t&&(f[e]={from:n,to:t},a=1)},h=0,d=E(u).concat(E(c));h<d.length;h++)s(d[h]);u=e,c=n,f=o,s(V),s(ke),Ie.set(i,o={a:a,b:o})}return o}(Ae,Ae=e);return!je&&n.a&&((le=n.b)[V]&&(h.title=e.title||Ze),He.fire($,le)),je=0,le},He=q({parse:qe,diff:Ee,to:function(e,n,t,r){!n&&i(e)&&(n=e,e=f);var o,a,u,c,s=re(e),h=s[k],d=s[V],v=Ae[V],$=Ae[k],l=Ae.query[k];if(q(h,n),d)for(v in l)L(h,v)||(h[v]=f);else $&&(d=v,h=q({},$,h));a=Ae,u=t,c=r,(o=ie(o=d,h,l))!=a.srcHash&&(je=c,Ue(o,u))}},fe);ae.Router=He;var Ne=function(e){if(!e.$a&&!e.$b&&e.$cc==e.$rc){e.$cr||(e.$cr=1,e.$ca=0,e.fire("created"));var n=void 0,t=e.id,r=e.pId;(n=Me[r])&&!L(n.$d,t)&&(n.$d[t]=1,n.$rc++,Ne(n))}},_e=function(e,n){if(!e.$ca&&e.$cr){e.$cr=0,e.$ca=1,e.fire("alter",n);var t=void 0,r=e.id,i=e.pId;(t=Me[i])&&L(t.$d,r)&&(t.$rc--,delete t.$d[r],_e(t,n))}},Me={},ze=[],Le=0,Be=function(e,n,t){if(e&&e.$f!=Le&&(t=e.$v)&&t.$a>1){(n?function(e,n,t){var r,i=e.$os;if(i)for(var o=0,a=i;o<a.length&&(r=a[o],!(t=L(n,r)));o++);return t}(t,n):jn(t))&&t.$b();for(var r=void 0,i=0,o=e.children();i<o.length;i++)r=o[i],Be(Me[r],n)}},Re=function(e){var t,r,i=(ye||(n=h.body,U(r=O.rootId)||(n.id=r),ye=new De(r)),ye);(t=e[ke])?i.mountView(t.to):(Le=a++,Be(i,e.keys))},De=function(e,n,t){var r,i;(t=this).id=e,t.$c={},t.$cc=0,t.$rc=0,t.$g=1,t.$d={},t.$e=[],t.pId=n,i=t,L(Me,r=e)||(Me[r]=i,De.fire("add",{vframe:i}),(r=U(r))&&(r.vframe=i))};q(De,{all:function(){return Me},get:function(e){return Me[e]}},fe),q(De[x],fe,{mountView:function(e,n){var t,r,i,o,a,f,u=this,c=u.id,s=u.pId,h=u.$g,d=U(c);!u.$h&&d&&(u.$h=1,u.$i=d.innerHTML),u.unmountView(),u.$a=0,d&&e&&(u[V]=e,t=re(e),i=t[V],r=++h,o=t[k],f=(f=(f=(f=Me[s])&&f.$v)&&f.$d)&&f.$a,e.indexOf(w)>0&&B(f,o,o),u.$n=t[V],q(o,n),J(i,function(e){if(r==u.$g){if(!e)return O.error(Error("id:"+c+" cannot load:"+i));a=Sn(e),i=new e(c,u,o,a),u.$v=i,u.$f=Le,kn(i),z(i.init,o,i),i.$b(),i.$e||(u.$h=0,i.$f||i.endUpdate())}}))},unmountView:function(){var e,n,t=this,i=t.$v,o=t.id;t.$e=[],i&&(xe||(n=1,xe={id:o}),t.$a=1,t.unmountZone(0,1),_e(t,xe),t.$v=0,i.$a>0&&(i.$a=0,i.fire("destroy",0,1,1),yn(i,1),kn(i,1),i.owner=0),i.$a--,(e=U(o))&&t.$h&&r(e).html(t.$i),n&&(xe=0)),t.$g++},mountVframe:function(e,n,t){var r,i=this,o=i.id,a=i.$c;return _e(i,{id:e}),(r=Me[e])||(L(a,e)||(i.$o=0,i.$cc++),a[e]=e,(r=ze.pop())?De.call(r,e,o):r=new De(e,o)),r.mountView(n,t),r},mountZone:function(e,n){var t,i,o=this,a=[];e=e||o.id;var f,u=r("#"+e+" ["+I+"]");o.$b=1;for(var c=0,s=u;c<s.length;c++)t=s[c],i=M(t),t.$b||(t.$b=1,a.push([i,t.getAttribute(I)]));for(var h=0,d=a;h<d.length;h++)i=(f=d[h])[0],t=f[1],a[i]?O.error(Error("vf.id duplicate:"+i+" at "+o[V])):o.mountVframe(a[i]=i,t);o.$b=0,n||Ne(o)},unmountVframe:function(e,n){var t,r,i,o;if(e=e?this.$c[e]:this.id,t=Me[e]){var a=t.$cr,f=t.pId;t.unmountView(),i=a,(o=Me[r=e])&&(delete Me[r],De.fire("remove",{vframe:o,fcc:i}),(r=U(r))&&(r.$b=0),r&&(r.vframe=0),r&&(r.$d=0)),t.id=t.pId=t.$c=t.$d=0,t.$h=0,t.off("alter"),t.off("created"),ze.push(t),(t=Me[f])&&L(t.$c,e)&&(delete t.$c[e],t.$o=0,t.$cc--,n||Ne(t))}},unmountZone:function(e,n){var t;for(t in this.$c)(!e||t!=e&&Z(t,e))&&this.unmountVframe(t,1);n||Ne(this)},parent:function(e,n){for(n=this,e=e>>>0||1;n&&e--;)n=Me[n.pId];return n},children:function(e){return(e=this).$o||(e.$o=E(e.$c))},invoke:function(e,n){var t,r,i,o,a,f=this.$e;return(r=this.$v)&&r.$f?t=(i=r[e])&&z(i,n,r):((o=f[a=w+e])&&(o.r=n===o.a),o={n:e,a:n,k:a},f.push(o),f[a]=o),t}}),ae.Vframe=De,r.fn.invokeView=function(e,n){if(this.length){var t=this[0],r=t.vframe;if(void 0===n)return r&&r.invoke(e);for(var i=0;i<this.length;i++)(r=(t=this[i]).vframe)&&r.invoke(e,n)}};var Fe=new D(30,10),Je=/(?:([\w\-]+)\x1e)?([^(]+)\(([\s\S]*)?\)/,Qe={},We={},Ge=function(e,t){var r,i,o,a,f,c,s=[],h=e,d=e.getAttribute("mx-"+t),v=[],$=0;if(d&&((a=Fe.get(d))||((a={v:(a=d.match(Je)||u)[1],n:a[2],i:a[3]}).p=a.i&&z(Function("return "+a.i),u,e),Fe.set(d,a)),a=q({},a,{r:d}),s.push(a)),a&&!a.v||We[t]){if(!(c=e.$a))for(v.push(h);h!=n&&(h=h.parentNode);){if(Me[i=h.id]||(i=h.$v)){c=i;break}v.push(h)}if(c){for(var l=0,p=v;l<p.length;l++)(d=p[l]).$a=c;h=e.id,Me[h]&&($=c=h);do{if((r=Me[c])&&(f=r.$v)){for(i in(o=f.$so)[t])o={r:i,v:c,n:i},i?K(e,i)&&s.push(o):$&&s.unshift(o);if(f.$e&&!$){a&&!a.v&&(a.v=c);break}$=0}}while(r&&(c=r.pId))}}return s},Ke=function(e){for(var t,r,i,o,a,f,u,c=e.target,s=e.type,h=[];c!=n;){if((t=Ge(c,s)).length){h=[];for(var d=0,v=t;d<v.length;d++){var $=v[d],l=$.v,p=($.r,$.n),g=$.p,m=$.i;if(f!=l){if(f&&e.isPropagationStopped())break;f=l}if(o=(i=Me[l])&&i.$v){if((a=o[p+w+s])&&(e.eventTarget=c,u=g||{},m&&m.indexOf(w)>0&&B(o.$d.$a,u,u={}),e[k]=u,z(a,e,o),e.isImmediatePropagationStopped()))break;0}else e.stopPropagation();0}}if((r=c.$)&&r[s]||e.isPropagationStopped())break;h.push(c),c=c.parentNode||n}for(var b=0,y=h;b<y.length;b++)(r=(c=y[b]).$||(c.$={}))[s]=1},Xe={input:1,br:1,hr:1,img:1,embed:1,source:1,area:1,param:1,col:1,track:1,wbr:1},Ye={input:[g,"checked"],textarea:[g],option:["selected"]},en="#text";var nn=/^<([a-z\d]+)((?:\s+[-A-Za-z\d_]+(?:="[^"]*")?)*)\s*(\/?)>/,tn=/([-A-Za-z\d_]+)(?:="([^"]*)")?/g,rn=/^<\/[a-z\d+]+>/,on={},an=/&#?[^\W]+;?/g,fn=h.createElement("div"),un=function(e){return L(on,e)||(fn.innerHTML=e,on[e]=fn.innerText),on[e]},cn=function(e){return e.replace(an,un)},sn=function(e,n){var t=M(n);e.$c[t]?e.unmountVframe(t,1):e.unmountZone(t,1)},hn=function(e,n,t,r){var i,o,a,u,c=n.d,s=e.attributes,h=n.h;for(u=s.length;u--;)o=s[u].name,L(h,o)||("id"==o?r||t.d.push([e,f]):(t.c=1,e.removeAttribute(o)));for(var d=0,v=n.e;d<v.length;d++)o=(i=v[d]).f,a=cn(i.g),"id"==o?t.d.push([e,a]):e.getAttribute(o)!=a&&(t.c=1,e.setAttribute(o,a));var $=Ye[c];if($)for(var l=0,p=$;l<p.length;l++)e[i=p[l]]=L(h,i)?i!=g||h[i]:i==g&&f},dn=function(e,n,t,r,i){return(i=e.d)==en?h.createTextNode(e.b):(r=h.createElementNS("svg"==i?"http://www.w3.org/2000/svg":n.namespaceURI,i),hn(r,e,t),r.innerHTML=e.b,r)},vn=function(e,n,t,r,i){var o,a,f,u,c,s,h,d,v,$,l={};for(o=(u=e.childNodes).length,a=(c=n.a).length,f=0;f<o;f++)v=(s=u[f]).id,s.$a&&(v=($=Me[v])&&$.$n),v&&(v=l[v]||(l[v]=[])).push(s);for(f=0;f<a;f++)s=u[f],(v=l[(h=c[f]).i])&&(v=v.shift())?(v!=s&&e.insertBefore(v,s),$n(v,e,h,t,r,i)):s?l[s.i]?(o++,t.c=1,e.insertBefore(dn(h,e,t),s)):$n(s,e,h,t,r,i):(e.appendChild(dn(h,e,t)),t.c=1);for(f=a;f<o;f++)d=e.lastChild,sn(r,d),e.removeChild(d),t.c=1},$n=function(e,n,t,r,i,o){var a=e.nodeName.toLowerCase();if(a==t.d)if(a==en)e.nodeValue!=t.b&&(e.nodeValue=cn(t.b));else{var f=t.h[I],u=t.b,c=void 0,s=void 0,h=void 0,d=Me[e.id],v=void 0,$=void 0,l=void 0,p=void 0,g=void 0,m=void 0;f&&d&&(v=(l=d.$v).$g,p=re(f),m=u!=d.$i,$=f.indexOf("?")>0||m),f&&d&&d.$n==p[V]?$&&(v?(g=p[k],f.indexOf(w)>-1&&B(o,g,g),d.$i=u,d[V]=f,p={inner:u,deep:!l.$e,html:m},hn(e,t,r,1),z(v,[g,p],l)&&l.$b(),s=p.deep):(h=1,s=1,c=1)):(c=1,s=1,h=d),h&&d.unmountVframe(0,1),c&&hn(e,t,r,d&&f),s&&vn(e,t,r,i,o)}else sn(i,e),n.replaceChild(dn(t,n,r),e),r.c=1},ln=function(e){var n,t,r,i=e.$b,o=Me[i],a=e.$a,c=o&&o.$v,s={d:[]},h=U(i);if(c&&c.$a>0&&(n=c.$e)){r=function(e){for(var n,t,r,i,o,a,c,s,h,d,v,$=e.length,l=0,p={a:[],b:e},m=[p];l<$;)n=1,"<"==(r=e.slice(l))[0]&&("/"==r[1]?(i=r.match(rn))&&(c=m.pop(),a=e.slice(c.c,l),"textarea"==c.d?(c.e.push({f:g,g:a}),c.h[g]=a,c.a=u):c.b=a,p=m[m.length-1],l+=i[0].length,n=0):(i=r.match(nn))&&(o=i[1],a=[],s={},v=f,i[2].replace(tn,function(e,n,t){t=t||f,"id"==n?v=t:n==I&&t&&!v&&(v=re(t)[V]),a.push({f:n,g:t}),s[n]=t}),l+=i[0].length,d=i[3]||L(Xe,o),c={i:v,d:o,e:a,h:s,a:[],c:l},p.a.push(c),d?c.j=1:(m.push(c),p=c),n=0)),n&&(l+=(h=(t=r.indexOf("<"))<0?r:r.substring(0,t)).length,c={d:en,b:h},p.a.push(c));return p}(bn(n(a),i)),vn(h,r,s,o,a);for(var v=0,$=s.d;v<$.length;v++)(t=$[v])[0].id=t[1];s.c&&(c.endUpdate(i),d.trigger({type:"htmlchanged",vId:i}))}c.fire("domready")},pn=function(e){var n;this.$b=e,this.$a=((n={vId:e})[w]=1,n)};q(pn[x],{get:function(e,n){return n=this.$a,e&&(n=n[e]),n},set:function(e){return q(this.$a,e),this},digest:function(e){return this.set(e),ln(this),this},snapshot:function(){return this.$d=b(this.$a),this},altered:function(){if(this.$d)return this.$d!=b(this.$a)}});var gn=/^(\$?)([^<]*)<([^>]+)>$/,mn=/\x1f/g,bn=function(e,n){return(e+f).replace(mn,n)},wn=function(e,n,t){return e.$h?t=e:((t=function(e){z(t.$h,e,this)}).$h=[e],t.$i=1),t.$h=t.$h.concat(n.$h||n),t},yn=function(e,n){var t,r,i=e.$r;for(t in i)r=i[t],(n||r.x)&&xn(i,t,1)},xn=function(e,n,t,r){var i,o,a=e[n];return a&&a!=r&&((i=(o=a.e).destroy)&&t&&z(i,u,o),delete e[n]),o},kn=function(e,t){var r,i,o,a,f,u,c=e.$eo,s=e.$so,h=e.$el,d=e.id;for(r in c)i=r,o=s[r],a=t,void 0,void 0,f=0|Qe[i],u=a?-1:1,f&&a!==f||Y(n,i,Ke,a),Qe[i]=f+u,o&&(We[i]=(0|We[i])+u);for(var v=0,$=h;v<$.length;v++)r=$[v],Y(r.e,r.n,X,t,{i:d,v:e,f:r.f,e:r.e})},Vn=[],In={win:s,doc:h},Sn=function(e){if(!e[w]){e[w]=[];var n=e[x],t=void 0,r=void 0,i=void 0,o={},a=[],f={},u=void 0,s=void 0,h=void 0,d=void 0,v=void 0,$={};if(r=n.mixins){for(var l=0,p=r;l<p.length;l++)for(h in u=p[l])t=u[h],i=$[h],"ctor"!=h?(gn.test(h)&&(i?t=wn(i,t):t.$i=1),$[h]=t):e[w].push(t);for(h in $)L(n,h)||(n[h]=$[h])}for(h in n)if(t=n[h],r=h.match(gn)){s=r[1],i=r[2];for(var g=0,m=r[3].split(c);g<m.length;g++){if(d=m[g],u=In[i],v=1,s){if(u){a.push({f:t,e:u,n:d});continue}v=2,(u=f[d])||(u=f[d]={}),u[i]=1}o[d]=o[d]|v,(u=n[d=i+w+d])?u.$i&&(t.$i?n[d]=wn(u,t):L(n,h)&&(n[d]=t)):n[d]=t}}k="$b",V=(b=n)[y="render"],b[y]=b[k]=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];(I=this).$a>0&&(I.$a++,I.fire("rendercall"),yn(I),z(V,e,I))},n.$eo=o,n.$el=a,n.$so=f,n.$e=n.tmpl,n.$g=n.assign}var b,y,k,V,I;return e[w]},jn=function(e){var n,t,r,i=e.$l;if(i.f&&(i.p&&(n=le[V]),!n&&i.k)){r=le[k];for(var o=0,a=i.k;o<a.length&&(t=a[o],!(n=L(r,t)));o++);}return n},An=function(e,n,t,r){(r=this).owner=n,r.id=e,r.$l={k:[]},r.$r={},r.$a=1,r.updater=r.$d=new pn(r.id),z(Vn,t,r)},Tn=An[x];q(An,{merge:function(){for(var e,n,t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];for(var i=0,o=t;i<o.length;i++)(n=(e=o[i])&&e.ctor)&&Vn.push(n),q(Tn,e)},extend:function(e,n){var t=this,r=(e=e||{}).ctor,i=[];r&&i.push(r);var o=function(e,n,r,o){t.call(this,e,n,r),z(i.concat(o),r,this)};return o.extend=t.extend,W(o,t,e,n)}}),q(Tn,fe,{init:m,wrapEvent:function(e){return bn(e,this.id)},beginUpdate:function(e,n){(n=this).$a>0&&n.$f&&n.owner.unmountZone(e,1)},endUpdate:function(e,n,t,r,i){(t=this).$a>0&&(e=e||t.id,n?i=n:(i=t.$f,t.$f=1),(r=t.owner).mountZone(e,n),i||v(t.wrapAsync(function(){!function(e,n,t){for(n=e.$e;n.length;)(t=n.shift()).r||e.invoke(t.n,t.a),delete n[t.k]}(r)}),0))},wrapAsync:function(e,n){var t=this,r=t.$a;return function(){for(var i=[],o=0;o<arguments.length;o++)i[o]=arguments[o];if(r>0&&r==t.$a)return e.apply(n||t,i)}},observeLocation:function(e,n){var t;(t=this.$l).f=1,i(e)&&(n=e[V],e=e[k]),t.p=n,e&&(t.k=(e+f).split(c))},observeState:function(e){this.$os=(e+f).split(c)},capture:function(e,n,t,r){return r=this.$r,n?(xn(r,e,1,n),r[e]={e:n,x:t}):n=(r=r[e])&&r.e,n},release:function(e,n){return xn(this.$r,e,n)},leaveTip:function(e,n){var t=this,r=function(i){var o="a",a="b";i.type!=l&&(o="b",a="a"),r[o]?(i.prevent(),i.reject()):n()?(i.prevent(),r[a]=1,t.leaveConfirm(e,function(){r[a]=0,i.resolve()},function(){r[a]=0,i.reject()})):i.resolve()},i=function(t){n()&&(t.msg=e)};He.on(l,r),He.on(p,i),t.on("unload",r),t.on("destroy",function(){He.off(l,r),He.off(p,i)})},render:m}),ae.View=An;var Cn=r.type,On=r.now||Date.now,Un=function(){this.id=T("b"),this.$={}};q(Un[x],{get:function(e,n,t){var r=n!=t,i=this.$;if(e){for(var a=o(e)?e.slice():(e+f).split("."),u=void 0;(u=a.shift())&&i;)i=i[u];u&&(i=t)}return r&&Cn(n)!=Cn(i)&&(i=n),i},set:function(e,n){var t;i(e)||((t={})[e]=n,e=t),q(this.$,e)}});var Pn=function(e,n,t){(t=this[e])&&(delete this[e],z(t,n,t.e))},Zn=function(e,n,t,r,i){if(e.$d)return e;if(e.$e)return e.enqueue(Zn.bind(e,e,n,t,r,i));e.$e=1,o(n)||(n=[n]);for(var a,f,u,c,s,h,d,v,$,l=e.constructor,p=0,g=l.$f,m=(a=t,f=l,u=e,c=n.length,s=r,h=l.$c,d=[],v=0,$=0,function(e,n){var t,r=this;$++;var i=r.$b,o=i.k;d[e+1]=r;var l,p={bag:r,error:n};if(n?(v=n,f.fire("fail",p),t=1):h.has(o)||(o&&h.set(o,r),i.t=On(),(l=i.a)&&z(l,r,r),(l=i.x)&&f.clear(l),f.fire("done",p),t=1),!u.$d){var g=$==c;g&&(u.$e=0,2==s&&(d[0]=v,z(a,d,u))),1==s&&z(a,[n||null,r,g,e],u)}t&&f.fire("end",p)}),b=0,w=n;b<w.length;b++){var y=w[b];if(y){var x=l.get(y,i),k=x.e,V=k.$b.k,I=m.bind(k,p++),S=void 0;V&&g[V]?g[V].push(I):x.u?(V&&((S=[I]).e=k,g[V]=S,I=Pn.bind(g,V)),l.$s(k,I)):I()}}return e},qn=function(){var e=this;e.id=T("s"),e.$g=[]};q(qn[x],{all:function(e,n){return Zn(this,e,n,2)},save:function(e,n){return Zn(this,e,n,2,1)},one:function(e,n){return Zn(this,e,n,1)},enqueue:function(e){var n=this;return n.$d||(n.$g.push(e),n.dequeue(n.$h)),n},dequeue:function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];var t,r=this;r.$e||r.$d||(r.$e=1,v(function(){r.$e=0,r.$d||(t=r.$g.shift())&&z(t,r.$h=e)},0))},destroy:function(e){(e=this).$d=1,e.$g=0}});var En=function(e,n){return[b(n),b(e)].join(w)},Hn=function(e,n,t,r){(r=e&&e.$b)&&n[r.n]&&t.del(r.k)},Nn=q({add:function(e){var n,t=this.$b;o(e)||(e=[e]);for(var r=0,i=e;r<i.length;r++)if(n=i[r]){var a=n.name,f=n.cache;n.cache=0|f,t[a]=n}},create:function(e){var n=this.meta(e),t=0|e.cache||n.cache,r=new Un;r.set(n),r.$b={n:n.name,a:n.after,x:n.cleans,k:t&&En(n,e)},i(e)&&r.set(e);var o=n.before;return o&&z(o,r,r),this.fire("begin",{bag:r}),r},meta:function(e){return this.$b[e.name||e]||e},get:function(e,n){var t,r;return n||(t=this.cached(e)),t||(t=this.create(e),r=1),{e:t,u:r}},clear:function(e){this.$c.each(Hn,oe((e+f).split(c)))},cached:function(e){var n,t,r=this.$c,i=this.meta(e),o=0|e.cache||i.cache;if(o&&(t=En(i,e)),t){var a=this.$f[t];a?n=a.e:(n=r.get(t))&&On()-n.$b.t>o&&(r.del(t),n=0)}return n}},fe);return qn.extend=function(e,n,t){var r=function(){qn.call(this)};return r.$s=e,r.$c=new D(n,t),r.$f={},r.$b={},W(r,qn,null,Nn)},ae.Service=qn,q(m[x],fe),m.extend=function e(n,t){var r=this,i=n&&n.ctor,o=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];r.apply(this,e),i&&i.apply(this,e)};return o.extend=e,W(o,r,n,t)},ae.Base=m,ae.default=ae,ae});
var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let s,l;function i(t,e){return s||(s=document.createElement("a")),s.href=e,t===s.href}function a(t,e){t.appendChild(e)}function u(t,e,n){t.insertBefore(e,n||null)}function f(t){t.parentNode.removeChild(t)}function d(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function p(t){return document.createElement(t)}function g(t){return document.createTextNode(t)}function h(){return g(" ")}function m(){return g("")}function v(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function $(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function _(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function w(t,e){t.value=null==e?"":e}function y(t,e){for(let n=0;n<t.options.length;n+=1){const o=t.options[n];if(o.__value===e)return void(o.selected=!0)}t.selectedIndex=-1}function b(t,e,n){t.classList[n?"add":"remove"](e)}function x(t){l=t}function k(){if(!l)throw new Error("Function called outside component initialization");return l}function L(t){k().$$.on_mount.push(t)}function M(t){return k().$$.context.get(t)}const U=[],C=[],E=[],T=[],j=Promise.resolve();let q=!1;function A(t){E.push(t)}const O=new Set;let S=0;function D(){const t=l;do{for(;S<U.length;){const t=U[S];S++,x(t),N(t.$$)}for(x(null),U.length=0,S=0;C.length;)C.pop()();for(let t=0;t<E.length;t+=1){const e=E[t];O.has(e)||(O.add(e),e())}E.length=0}while(U.length);for(;T.length;)T.pop()();q=!1,O.clear(),x(t)}function N(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(A)}}const R=new Set;let H;function I(){H={r:0,c:[],p:H}}function P(){H.r||o(H.c),H=H.p}function B(t,e){t&&t.i&&(R.delete(t),t.i(e))}function X(t,e,n,o){if(t&&t.o){if(R.has(t))return;R.add(t),H.c.push((()=>{R.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}else o&&o()}function F(t,e){t.d(1),e.delete(t.key)}function z(t){t&&t.c()}function K(t,n,c,s){const{fragment:l,on_mount:i,on_destroy:a,after_update:u}=t.$$;l&&l.m(n,c),s||A((()=>{const n=i.map(e).filter(r);a?a.push(...n):o(n),t.$$.on_mount=[]})),u.forEach(A)}function G(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function W(t,e){-1===t.$$.dirty[0]&&(U.push(t),q||(q=!0,j.then(D)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function J(e,r,c,s,i,a,u,d=[-1]){const p=l;x(e);const g=e.$$={fragment:null,ctx:null,props:a,update:t,not_equal:i,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(r.context||(p?p.$$.context:[])),callbacks:n(),dirty:d,skip_bound:!1,root:r.target||p.$$.root};u&&u(g.root);let h=!1;if(g.ctx=c?c(e,r.props||{},((t,n,...o)=>{const r=o.length?o[0]:n;return g.ctx&&i(g.ctx[t],g.ctx[t]=r)&&(!g.skip_bound&&g.bound[t]&&g.bound[t](r),h&&W(e,t)),n})):[],g.update(),h=!0,o(g.before_update),g.fragment=!!s&&s(g.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);g.fragment&&g.fragment.l(t),t.forEach(f)}else g.fragment&&g.fragment.c();r.intro&&B(e.$$.fragment),K(e,r.target,r.anchor,r.customElement),D()}x(p)}class Q{$destroy(){G(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function V(e){let n,o,r,c,s,l,d,m,v,w,y,b,x,k,L,U,C,E=(e[0].from_name||" ")+"",T=e[0].html+"",j=e[1][e[0].group_id][1]+"";return{c(){n=p("div"),o=p("img"),s=h(),l=p("div"),d=p("div"),m=g(E),v=h(),w=p("div"),y=h(),b=p("div"),x=g(j),k=h(),L=p("a"),U=p("time"),C=g(e[3]),$(o,"class","avatar svelte-15hb0c4"),i(o.src,r=M("LUOXU_URL")+"/avatar/"+e[0].from_id+".jpg")||$(o,"src",r),$(o,"height","64"),$(o,"width","64"),$(o,"alt",c=e[0].from_name+" 的头像"),$(d,"class","name svelte-15hb0c4"),$(w,"class","text svelte-15hb0c4"),$(U,"datetime",e[4]),$(U,"title",e[2]),$(L,"href",e[5]),$(L,"class","svelte-15hb0c4"),$(b,"class","time svelte-15hb0c4"),$(l,"class","content svelte-15hb0c4"),$(n,"class","message svelte-15hb0c4")},m(t,e){u(t,n,e),a(n,o),a(n,s),a(n,l),a(l,d),a(d,m),a(l,v),a(l,w),w.innerHTML=T,a(l,y),a(l,b),a(b,x),a(b,k),a(b,L),a(L,U),a(U,C)},p(t,[e]){1&e&&!i(o.src,r=M("LUOXU_URL")+"/avatar/"+t[0].from_id+".jpg")&&$(o,"src",r),1&e&&c!==(c=t[0].from_name+" 的头像")&&$(o,"alt",c),1&e&&E!==(E=(t[0].from_name||" ")+"")&&_(m,E),1&e&&T!==(T=t[0].html+"")&&(w.innerHTML=T),3&e&&j!==(j=t[1][t[0].group_id][1]+"")&&_(x,j)},i:t,o:t,d(t){t&&f(n)}}}function Y(t,e,n){let{msg:o}=e,{groupinfo:r}=e,{now:c}=e;const s=new Intl.DateTimeFormat(void 0,{timeStyle:"full",dateStyle:"full",hour12:!1}).format;let l=new Date(1e3*o.t),i=o.edited?new Date(1e3*o.edited):null,a=s(l)+(i?`\n最后编辑于：${s(i)}`:""),u=function(t,e){const n={year:31536e6,month:2628e6,day:864e5,hour:36e5,minute:6e4,second:1e3},o=new Intl.RelativeTimeFormat,r=t-e;for(const[t,e]of Object.entries(n))if(Math.abs(r)>e||"second"===t)return o.format(Math.round(r/e),t)}(l,c),f=l.toISOString(),d=r[o.group_id][0]?`tg://resolve?domain=${r[o.group_id][0]}&post=${o.id}`:`tg://privatepost?channel=${o.group_id}&post=${o.id}`;return t.$$set=t=>{"msg"in t&&n(0,o=t.msg),"groupinfo"in t&&n(1,r=t.groupinfo),"now"in t&&n(6,c=t.now)},[o,r,a,u,f,d,c]}class Z extends Q{constructor(t){super(),J(this,t,Y,V,c,{msg:0,groupinfo:1,now:6})}}function tt(t,e,n){const o=t.slice();return o[25]=e[n],o[27]=n,o}function et(t,e){let n,o,r,c,s,l,d,m=e[25][1]+"";return{key:t,first:null,c(){n=p("li"),o=p("img"),c=g(m),s=h(),i(o.src,r=e[6]+"/avatar/"+e[25][0]+".jpg")||$(o,"src",r),$(o,"alt","avatar"),$(o,"class","svelte-179qc5o"),$(n,"data-idx",l=e[27]),$(n,"title",d=e[25][1]),$(n,"class","svelte-179qc5o"),b(n,"selected",e[27]===e[1]),this.first=n},m(t,e){u(t,n,e),a(n,o),a(n,c),a(n,s)},p(t,s){e=t,4&s&&!i(o.src,r=e[6]+"/avatar/"+e[25][0]+".jpg")&&$(o,"src",r),4&s&&m!==(m=e[25][1]+"")&&_(c,m),4&s&&l!==(l=e[27])&&$(n,"data-idx",l),4&s&&d!==(d=e[25][1])&&$(n,"title",d),6&s&&b(n,"selected",e[27]===e[1])},d(t){t&&f(n)}}}function nt(e){let n,r,c,s,l,d,g,m,_,w=[],y=new Map,x=e[2];const k=t=>t[25];for(let t=0;t<x.length;t+=1){let n=tt(e,x,t),o=k(n);y.set(o,w[t]=et(o,n))}return{c(){n=p("div"),r=p("input"),c=h(),s=p("img"),d=h(),g=p("ul");for(let t=0;t<w.length;t+=1)w[t].c();$(r,"type","text"),$(r,"class","svelte-179qc5o"),$(s,"class","selected-avatar svelte-179qc5o"),$(s,"alt",""),i(s.src,l=e[6]+"/avatar/"+(e[0]?e[0]:"nobody")+".jpg")||$(s,"src",l),$(g,"class","svelte-179qc5o"),b(g,"hidden",0===e[2].length||e[5]),$(n,"class","svelte-179qc5o")},m(t,o){u(t,n,o),a(n,r),e[14](r),a(n,c),a(n,s),a(n,d),a(n,g);for(let t=0;t<w.length;t+=1)w[t].m(g,null);var l;e[18](g),m||(_=[v(window,"resize",e[7]),v(r,"input",e[15]),v(r,"focus",e[16]),v(r,"blur",e[17]),v(r,"keydown",e[11]),v(g,"click",e[9]),v(g,"mousedown",(l=ot,function(t){return t.preventDefault(),l.call(this,t)}))],m=!0)},p(t,[e]){1&e&&!i(s.src,l=t[6]+"/avatar/"+(t[0]?t[0]:"nobody")+".jpg")&&$(s,"src",l),70&e&&(x=t[2],w=function(t,e,n,o,r,c,s,l,i,a,u,f){let d=t.length,p=c.length,g=d;const h={};for(;g--;)h[t[g].key]=g;const m=[],v=new Map,$=new Map;for(g=p;g--;){const t=f(r,c,g),l=n(t);let i=s.get(l);i?o&&i.p(t,e):(i=a(l,t),i.c()),v.set(l,m[g]=i),l in h&&$.set(l,Math.abs(g-h[l]))}const _=new Set,w=new Set;function y(t){B(t,1),t.m(l,u),s.set(t.key,t),u=t.first,p--}for(;d&&p;){const e=m[p-1],n=t[d-1],o=e.key,r=n.key;e===n?(u=e.first,d--,p--):v.has(r)?!s.has(o)||_.has(o)?y(e):w.has(r)?d--:$.get(o)>$.get(r)?(w.add(o),y(e)):(_.add(r),d--):(i(n,s),d--)}for(;d--;){const e=t[d];v.has(e.key)||i(e,s)}for(;p;)y(m[p-1]);return m}(w,e,k,1,t,x,y,g,F,et,null,tt)),36&e&&b(g,"hidden",0===t[2].length||t[5])},i:t,o:t,d(t){t&&f(n),e[14](null);for(let t=0;t<w.length;t+=1)w[t].d();e[18](null),m=!1,o(_)}}}const ot=()=>{};function rt(t,e,n){let o,r,c,s,{group:l}=e,{selected:i}=e,{selected_init:a}=e,u="",f=[],d=M("LUOXU_URL"),p=!1,g=new AbortController;function h(){r&&clearTimeout(r),r=setTimeout((function(){!async function(){if(!c.value)return;n(1,o=null),g.abort(),g=new AbortController;try{const t=await fetch(`${d}/names?g=${l}&q=${c.value}`,{signal:g.signal}),e=await t.json();g.signal.aborted||n(2,f=e.names)}catch(t){t instanceof DOMException&&"AbortError"===t.name||console.error(t)}}()}),300)}function m(){n(0,i=f[o][0]),u=f[o][1],n(3,c.value=u,c),n(12,a=null)}function v(){i&&i!==a&&(c.value?n(3,c.value=u,c):(n(0,i=a),u=""))}function $(t){n(1,o="number"==typeof o?t>0?(o+1)%f.length:(o-1)%f.length:t>0?0:f.length-1)}L((()=>{const t=c.getBoundingClientRect();n(4,s.style.top=t.height-1+"px",s),n(4,s.style.width=t.width-2+"px",s)}));return t.$$set=t=>{"group"in t&&n(13,l=t.group),"selected"in t&&n(0,i=t.selected),"selected_init"in t&&n(12,a=t.selected_init)},[i,o,f,c,s,p,d,function(){const t=c.getBoundingClientRect();n(4,s.style.width=t.width-2+"px",s)},h,function(t){let e=t.target;"IMG"===e.tagName&&(e=e.parentNode),"LI"==e.tagName&&(n(1,o=0|e.dataset.idx),m(),c.focus(),n(5,p=!0))},v,function(t){"ArrowDown"===t.key||"n"===t.key&&t.altKey?($(1),t.preventDefault()):"ArrowUp"===t.key||"p"===t.key&&t.altKey?($(-1),t.preventDefault()):"Enter"===t.key&&(m(),t.preventDefault())},a,l,function(t){C[t?"unshift":"push"]((()=>{c=t,n(3,c)}))},()=>{n(5,p=!1),h()},()=>n(5,p=!1),()=>{n(5,p=!0),v()},function(t){C[t?"unshift":"push"]((()=>{s=t,n(4,s)}))}]}class ct extends Q{constructor(t){super(),J(this,t,rt,nt,c,{group:13,selected:0,selected_init:12})}}function st(t){return new Promise(((e,n)=>{setTimeout(e,t)}))}function lt(t,e,n){const o=t.slice();return o[24]=e[n],o}function it(t,e,n){const o=t.slice();return o[2]=e[n],o}function at(t){let e,n,r,c,s=t[10]&&function(t){let e;return{c(){e=p("option"),e.textContent="全部",e.__value="",e.value=e.__value},m(t,n){u(t,e,n)},d(t){t&&f(e)}}}(),l=t[0],i=[];for(let e=0;e<l.length;e+=1)i[e]=ft(it(t,l,e));return{c(){e=p("select"),s&&s.c(),n=m();for(let t=0;t<i.length;t+=1)i[t].c();void 0===t[2]&&A((()=>t[17].call(e)))},m(o,l){u(o,e,l),s&&s.m(e,null),a(e,n);for(let t=0;t<i.length;t+=1)i[t].m(e,null);y(e,t[2]),r||(c=[v(e,"change",t[17]),v(e,"change",t[13])],r=!0)},p(t,n){if(1&n){let o;for(l=t[0],o=0;o<l.length;o+=1){const r=it(t,l,o);i[o]?i[o].p(r,n):(i[o]=ft(r),i[o].c(),i[o].m(e,null))}for(;o<i.length;o+=1)i[o].d(1);i.length=l.length}5&n&&y(e,t[2])},d(t){t&&f(e),s&&s.d(),d(i,t),r=!1,o(c)}}}function ut(e){let n,o;return{c(){n=p("select"),o=p("option"),o.textContent="正在加载群组信息...",o.selected=!0,o.__value="正在加载群组信息...",o.value=o.__value},m(t,e){u(t,n,e),a(n,o)},p:t,d(t){t&&f(n)}}}function ft(t){let e,n,o,r=t[2].name+"";return{c(){e=p("option"),n=g(r),e.__value=o=t[2].group_id,e.value=e.__value},m(t,o){u(t,e,o),a(e,n)},p(t,c){1&c&&r!==(r=t[2].name+"")&&_(n,r),1&c&&o!==(o=t[2].group_id)&&(e.__value=o,e.value=e.__value)},d(t){t&&f(e)}}}function dt(e){let n;return{c(){n=p("div"),n.innerHTML="<p>搜索消息时，搜索字符串不区分简繁（会使用 OpenCC\n        自动转换），也不进行分词（请手动将可能不连在一起的词语以空格分开）。</p> \n      <p>搜索字符串支持以下功能：</p> \n      <ul><li>以空格分开的多个搜索词是「与」的关系</li> \n        <li>使用 OR（全大写）来表达「或」条件</li> \n        <li>使用 - 来表达排除，如 落絮 - 测试</li> \n        <li>使用小括号来分组</li></ul> \n      <p>人名补全支持上下方向键和 Alt+N/P 进行选择。</p> \n      <p>搜索结果右下角的时间，悬停可查看绝对时间、最后编辑时间（如编辑过），点击可跳转到\n        Telegram 中展示该消息。</p>"},m(t,e){u(t,n,e)},p:t,i:t,o:t,d(t){t&&f(n)}}}function pt(t){let e,n,o=t[4].messages,r=[];for(let e=0;e<o.length;e+=1)r[e]=gt(lt(t,o,e));const c=t=>X(r[t],1,1,(()=>{r[t]=null}));return{c(){for(let t=0;t<r.length;t+=1)r[t].c();e=m()},m(t,o){for(let e=0;e<r.length;e+=1)r[e].m(t,o);u(t,e,o),n=!0},p(t,n){if(48&n){let s;for(o=t[4].messages,s=0;s<o.length;s+=1){const c=lt(t,o,s);r[s]?(r[s].p(c,n),B(r[s],1)):(r[s]=gt(c),r[s].c(),B(r[s],1),r[s].m(e.parentNode,e))}for(I(),s=o.length;s<r.length;s+=1)c(s);P()}},i(t){if(!n){for(let t=0;t<o.length;t+=1)B(r[t]);n=!0}},o(t){r=r.filter(Boolean);for(let t=0;t<r.length;t+=1)X(r[t]);n=!1},d(t){d(r,t),t&&f(e)}}}function gt(t){let e,n;return e=new Z({props:{msg:t[24],groupinfo:t[4].groupinfo,now:t[5]}}),{c(){z(e.$$.fragment)},m(t,o){K(e,t,o),n=!0},p(t,n){const o={};16&n&&(o.msg=t[24]),16&n&&(o.groupinfo=t[4].groupinfo),32&n&&(o.now=t[5]),e.$set(o)},i(t){n||(B(e.$$.fragment,t),n=!0)},o(t){X(e.$$.fragment,t),n=!1},d(t){G(e,t)}}}function ht(t){let e,n;function o(t,e){return t[3]?_t:t[4]&&0===t[4].messages.length?$t:t[4]&&!t[4].has_more?vt:void 0}let r=o(t),c=r&&r(t),s=t[4]&&t[4].has_more&&wt(t);return{c(){c&&c.c(),e=h(),s&&s.c(),n=m()},m(t,o){c&&c.m(t,o),u(t,e,o),s&&s.m(t,o),u(t,n,o)},p(t,l){r===(r=o(t))&&c?c.p(t,l):(c&&c.d(1),c=r&&r(t),c&&(c.c(),c.m(e.parentNode,e))),t[4]&&t[4].has_more?s?s.p(t,l):(s=wt(t),s.c(),s.m(n.parentNode,n)):s&&(s.d(1),s=null)},d(t){c&&c.d(t),t&&f(e),s&&s.d(t),t&&f(n)}}}function mt(e){let n;return{c(){n=p("div"),n.innerHTML='<p class="svelte-cd7t1">正在加载...</p>',$(n,"class","info svelte-cd7t1")},m(t,e){u(t,n,e)},p:t,d(t){t&&f(n)}}}function vt(e){let n;return{c(){n=p("div"),n.innerHTML='<p class="svelte-cd7t1">到底了。</p>',$(n,"class","info svelte-cd7t1")},m(t,e){u(t,n,e)},p:t,d(t){t&&f(n)}}}function $t(e){let n;return{c(){n=p("div"),n.innerHTML='<p class="svelte-cd7t1">没有匹配的消息。</p>',$(n,"class","info svelte-cd7t1")},m(t,e){u(t,n,e)},p:t,d(t){t&&f(n)}}}function _t(t){let e,n;return{c(){e=p("p"),n=g(t[3]),$(e,"class","error svelte-cd7t1")},m(t,o){u(t,e,o),a(e,n)},p(t,e){8&e&&_(n,t[3])},d(t){t&&f(e)}}}function wt(e){let n,o,r,c;return{c(){n=p("div"),o=p("button"),o.textContent="加载更多",$(o,"class","svelte-cd7t1"),$(n,"class","info svelte-cd7t1")},m(t,s){u(t,n,s),a(n,o),r||(c=v(o,"click",e[14]),r=!0)},p:t,d(t){t&&f(n),r=!1,c()}}}function yt(t){let e,n,r,c,s,l,i,d,g,m,_,y,b,x,k,L;function M(t,e){return 0===t[0].length?ut:at}let U=M(t),E=U(t);function j(e){t[21](e)}let q={group:t[2],selected_init:t[8]};void 0!==t[7]&&(q.selected=t[7]),l=new ct({props:q}),C.push((()=>function(t,e,n){const o=t.$$.props[e];void 0!==o&&(t.$$.bound[o]=n,n(t.$$.ctx[o]))}(l,"selected",j)));const A=[pt,dt],O=[];function S(t,e){return t[4]?0:t[6]||t[3]?-1:1}function D(t,e){return t[6]?mt:ht}~(_=S(t))&&(y=O[_]=A[_](t));let N=D(t),R=N(t);return{c(){e=p("main"),n=p("div"),E.c(),r=h(),c=p("input"),s=h(),z(l.$$.fragment),d=h(),g=p("button"),g.textContent="搜索",m=h(),y&&y.c(),b=h(),R.c(),$(c,"type","search"),$(c,"class","svelte-cd7t1"),$(g,"class","svelte-cd7t1"),$(n,"id","searchbox"),$(n,"class","svelte-cd7t1"),$(e,"class","svelte-cd7t1")},m(o,i){u(o,e,i),a(e,n),E.m(n,null),a(n,r),a(n,c),w(c,t[1]),a(n,s),K(l,n,null),a(n,d),a(n,g),a(e,m),~_&&O[_].m(e,null),a(e,b),R.m(e,null),x=!0,k||(L=[v(window,"hashchange",t[16]),v(c,"input",t[18]),v(c,"input",t[19]),v(c,"keydown",t[20]),v(g,"click",t[22])],k=!0)},p(t,[o]){U===(U=M(t))&&E?E.p(t,o):(E.d(1),E=U(t),E&&(E.c(),E.m(n,r))),2&o&&w(c,t[1]);const s={};var a;4&o&&(s.group=t[2]),256&o&&(s.selected_init=t[8]),!i&&128&o&&(i=!0,s.selected=t[7],a=()=>i=!1,T.push(a)),l.$set(s);let u=_;_=S(t),_===u?~_&&O[_].p(t,o):(y&&(I(),X(O[u],1,1,(()=>{O[u]=null})),P()),~_?(y=O[_],y?y.p(t,o):(y=O[_]=A[_](t),y.c()),B(y,1),y.m(e,b)):y=null),N===(N=D(t))&&R?R.p(t,o):(R.d(1),R=N(t),R&&(R.c(),R.m(e,null)))},i(t){x||(B(l.$$.fragment,t),B(y),x=!0)},o(t){X(l.$$.fragment,t),X(y),x=!1},d(t){t&&f(e),E.d(),G(l),~_&&O[_].d(),R.d(),k=!1,o(L)}}}const bt="https://search-pub.xtaolabs.com/luoxu";function xt(t,e,n){const o=bt.startsWith("http://localhost");let r,c,s,l,i,a,u=[],f=new Date,d=!1,p=!1,g=!1,h=new AbortController;var m,v;function $(){const t=function(){const t=location.hash;if(t)return new URLSearchParams(t.substring(1))}();t&&(n(1,c=""),n(2,r=""),n(4,l=null),t.has("g")&&n(2,r=t.get("g")),t.has("q")&&n(1,c=t.get("q")),t.has("sender")&&(n(7,i=t.get("sender")),n(8,a=i)),(r||o)&&c&&(n(4,l=null),_()))}async function _(t){if(h.abort(),h=new AbortController,!r&&!o)return void n(3,s="请选择要搜索的群组");if(!c&&!o)return void n(3,s="请输入搜索关键字");n(3,s=""),n(9,g=!0),console.log(`searching ${c} for group ${r}, older than ${t}, from ${i}`);const e=new URLSearchParams;let a;r&&e.append("g",r),c&&e.append("q",c),i&&e.append("sender",i);const u=e.toString();t?a=`${bt}/search?${e}&end=${t}`:(location.hash=`#${u}`,n(15,p=!0),l&&n(4,l.messages=[],l),a=`${bt}/search?${u}`),n(5,f=new Date),n(6,d=!0);try{const e=await fetch(a,{signal:h.signal}),o=await e.json();if(n(6,d=!1),h.signal.aborted)return[];if(t)return o;n(4,l=o)}catch(t){n(3,s=t),n(6,d=!1)}n(9,g=!1)}m="LUOXU_URL",v=bt,k().$$.context.set(m,v),L((async()=>{for($();;)try{const t=await fetch(`${bt}/groups`);n(0,u=(await t.json()).groups),n(15,p=!0),r||n(2,r="");break}catch(t){console.error("failed to fetch group info, will retry",t),await st(1e3)}}));return t.$$.update=()=>{if(32775&t.$$.dirty&&p&&u){let t;for(const e of u)e.group_id===r&&(t=e.name);document.title=c&&t?`搜索：${c} 于 ${t} - 落絮`:c?`搜索：${c} - 落絮`:t?`搜索 ${t} - 落絮`:"落絮",n(15,p=!1)}},[u,c,r,s,l,f,d,i,a,g,o,$,_,async function(){n(3,s=""),c&&await _()},async function(){const t=l.messages[l.messages.length-1].t,e=l.messages,o=await _(t);n(4,l.messages=[...e,...o.messages],l),n(4,l.has_more=o.has_more,l)},p,()=>{g||$()},function(){r=function(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}(this),n(2,r),n(0,u)},function(){c=this.value,n(1,c)},()=>n(3,s=""),t=>{"Enter"===t.key&&_()},function(t){i=t,n(7,i)},()=>_()]}return new class extends Q{constructor(t){super(),J(this,t,xt,yt,c,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map

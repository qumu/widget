import{f as xt,u as Ot,i as qt,x as tt}from"./iframe-DNtGHJok.js";import"./preload-helper-PPVm8Dsz.js";const Lt=t=>(e,n)=>{n!==void 0?n.addInitializer((()=>{customElements.define(t,e)})):customElements.define(t,e)};const $t={attribute:!0,type:String,converter:Ot,reflect:!1,hasChanged:xt},Tt=(t=$t,e,n)=>{const{kind:o,metadata:r}=n;let i=globalThis.litPropertyMetadata.get(r);if(i===void 0&&globalThis.litPropertyMetadata.set(r,i=new Map),o==="setter"&&((t=Object.create(t)).wrapped=!0),i.set(n.name,t),o==="accessor"){const{name:a}=n;return{set(s){const c=e.get.call(this);e.set.call(this,s),this.requestUpdate(a,c,t)},init(s){return s!==void 0&&this.C(a,void 0,t,s),s}}}if(o==="setter"){const{name:a}=n;return function(s){const c=this[a];e.call(this,s),this.requestUpdate(a,c,t)}}throw Error("Unsupported decorator location: "+o)};function Nt(t){return(e,n)=>typeof n=="object"?Tt(t,e,n):((o,r,i)=>{const a=r.hasOwnProperty(i);return r.constructor.createProperty(i,o),a?Object.getOwnPropertyDescriptor(r,i):void 0})(t,e,n)}var fe,_,nt,F,Oe,ot,rt,it,ke,me,ye,Q={},at=[],Ht=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,K=Array.isArray;function W(t,e){for(var n in e)t[n]=e[n];return t}function be(t){t&&t.parentNode&&t.parentNode.removeChild(t)}function A(t,e,n){var o,r,i,a={};for(i in e)i=="key"?o=e[i]:i=="ref"?r=e[i]:a[i]=e[i];if(arguments.length>2&&(a.children=arguments.length>3?fe.call(arguments,2):n),typeof t=="function"&&t.defaultProps!=null)for(i in t.defaultProps)a[i]===void 0&&(a[i]=t.defaultProps[i]);return se(t,a,o,r,null)}function se(t,e,n,o,r){var i={type:t,props:e,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:r??++nt,__i:-1,__u:0};return r==null&&_.vnode!=null&&_.vnode(i),i}function z(t){return t.children}function V(t,e){this.props=t,this.context=e}function G(t,e){if(e==null)return t.__?G(t.__,t.__i+1):null;for(var n;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null)return n.__e;return typeof t.type=="function"?G(t):null}function lt(t){var e,n;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null){t.__e=t.__c.base=n.__e;break}return lt(t)}}function qe(t){(!t.__d&&(t.__d=!0)&&F.push(t)&&!ue.__r++||Oe!=_.debounceRendering)&&((Oe=_.debounceRendering)||ot)(ue)}function ue(){for(var t,e,n,o,r,i,a,s=1;F.length;)F.length>s&&F.sort(rt),t=F.shift(),s=F.length,t.__d&&(n=void 0,o=void 0,r=(o=(e=t).__v).__e,i=[],a=[],e.__P&&((n=W({},o)).__v=o.__v+1,_.vnode&&_.vnode(n),Ce(e.__P,n,o,e.__n,e.__P.namespaceURI,32&o.__u?[r]:null,i,r??G(o),!!(32&o.__u),a),n.__v=o.__v,n.__.__k[n.__i]=n,ct(i,n,a),o.__e=o.__=null,n.__e!=r&&lt(n)));ue.__r=0}function Le(t,e,n,o,r,i,a,s,c,u,d){var l,x,h,q,R,J,S,O=o&&o.__k||at,U=e.length;for(c=(function(I,B,N,X,M){var k,g,m,f,E,H=N.length,Y=H,w=0;for(I.__k=new Array(M),k=0;k<M;k++)(g=B[k])!=null&&typeof g!="boolean"&&typeof g!="function"?(f=k+w,(g=I.__k[k]=typeof g=="string"||typeof g=="number"||typeof g=="bigint"||g.constructor==String?se(null,g,null,null,null):K(g)?se(z,{children:g},null,null,null):g.constructor==null&&g.__b>0?se(g.type,g.props,g.key,g.ref?g.ref:null,g.__v):g).__=I,g.__b=I.__b+1,m=null,(E=g.__i=Mt(g,N,f,Y))!=-1&&(Y--,(m=N[E])&&(m.__u|=2)),m==null||m.__v==null?(E==-1&&(M>H?w--:M<H&&w++),typeof g.type!="function"&&(g.__u|=4)):E!=f&&(E==f-1?w--:E==f+1?w++:(E>f?w--:w++,g.__u|=4))):I.__k[k]=null;if(Y)for(k=0;k<H;k++)(m=N[k])!=null&&!(2&m.__u)&&(m.__e==X&&(X=G(m)),_t(m,m));return X})(n,e,O,c,U),l=0;l<U;l++)(h=n.__k[l])!=null&&(x=h.__i==-1?Q:O[h.__i]||Q,h.__i=l,J=Ce(t,h,x,r,i,a,s,c,u,d),q=h.__e,h.ref&&x.ref!=h.ref&&(x.ref&&Se(x.ref,null,h),d.push(h.ref,h.__c||q,h)),R==null&&q!=null&&(R=q),(S=!!(4&h.__u))||x.__k===h.__k?c=st(h,c,t,S):typeof h.type=="function"&&J!==void 0?c=J:q&&(c=q.nextSibling),h.__u&=-7);return n.__e=R,c}function st(t,e,n,o){var r,i;if(typeof t.type=="function"){for(r=t.__k,i=0;r&&i<r.length;i++)r[i]&&(r[i].__=t,e=st(r[i],e,n,o));return e}t.__e!=e&&(o&&(e&&t.type&&!e.parentNode&&(e=G(t)),n.insertBefore(t.__e,e||null)),e=t.__e);do e=e&&e.nextSibling;while(e!=null&&e.nodeType==8);return e}function _e(t,e){return e=e||[],t==null||typeof t=="boolean"||(K(t)?t.some(function(n){_e(n,e)}):e.push(t)),e}function Mt(t,e,n,o){var r,i,a,s=t.key,c=t.type,u=e[n],d=u!=null&&!(2&u.__u);if(u===null&&t.key==null||d&&s==u.key&&c==u.type)return n;if(o>(d?1:0)){for(r=n-1,i=n+1;r>=0||i<e.length;)if((u=e[a=r>=0?r--:i++])!=null&&!(2&u.__u)&&s==u.key&&c==u.type)return a}return-1}function $e(t,e,n){e[0]=="-"?t.setProperty(e,n??""):t[e]=n==null?"":typeof n!="number"||Ht.test(e)?n:n+"px"}function re(t,e,n,o,r){var i,a;e:if(e=="style")if(typeof n=="string")t.style.cssText=n;else{if(typeof o=="string"&&(t.style.cssText=o=""),o)for(e in o)n&&e in n||$e(t.style,e,"");if(n)for(e in n)o&&n[e]==o[e]||$e(t.style,e,n[e])}else if(e[0]=="o"&&e[1]=="n")i=e!=(e=e.replace(it,"$1")),a=e.toLowerCase(),e=a in t||e=="onFocusOut"||e=="onFocusIn"?a.slice(2):e.slice(2),t.l||(t.l={}),t.l[e+i]=n,n?o?n.u=o.u:(n.u=ke,t.addEventListener(e,i?ye:me,i)):t.removeEventListener(e,i?ye:me,i);else{if(r=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e!="popover"&&e in t)try{t[e]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&e[4]!="-"?t.removeAttribute(e):t.setAttribute(e,e=="popover"&&n==1?"":n))}}function Te(t){return function(e){if(this.l){var n=this.l[e.type+t];if(e.t==null)e.t=ke++;else if(e.t<n.u)return;return n(_.event?_.event(e):e)}}}function Ce(t,e,n,o,r,i,a,s,c,u){var d,l,x,h,q,R,J,S,O,U,I,B,N,X,M,k,g,m=e.type;if(e.constructor!=null)return null;128&n.__u&&(c=!!(32&n.__u),i=[s=e.__e=n.__e]),(d=_.__b)&&d(e);e:if(typeof m=="function")try{if(S=e.props,O="prototype"in m&&m.prototype.render,U=(d=m.contextType)&&o[d.__c],I=d?U?U.props.value:d.__:o,n.__c?J=(l=e.__c=n.__c).__=l.__E:(O?e.__c=l=new m(S,I):(e.__c=l=new V(S,I),l.constructor=m,l.render=Wt),U&&U.sub(l),l.props=S,l.state||(l.state={}),l.context=I,l.__n=o,x=l.__d=!0,l.__h=[],l._sb=[]),O&&l.__s==null&&(l.__s=l.state),O&&m.getDerivedStateFromProps!=null&&(l.__s==l.state&&(l.__s=W({},l.__s)),W(l.__s,m.getDerivedStateFromProps(S,l.__s))),h=l.props,q=l.state,l.__v=e,x)O&&m.getDerivedStateFromProps==null&&l.componentWillMount!=null&&l.componentWillMount(),O&&l.componentDidMount!=null&&l.__h.push(l.componentDidMount);else{if(O&&m.getDerivedStateFromProps==null&&S!==h&&l.componentWillReceiveProps!=null&&l.componentWillReceiveProps(S,I),!l.__e&&l.shouldComponentUpdate!=null&&l.shouldComponentUpdate(S,l.__s,I)===!1||e.__v==n.__v){for(e.__v!=n.__v&&(l.props=S,l.state=l.__s,l.__d=!1),e.__e=n.__e,e.__k=n.__k,e.__k.some(function(f){f&&(f.__=e)}),B=0;B<l._sb.length;B++)l.__h.push(l._sb[B]);l._sb=[],l.__h.length&&a.push(l);break e}l.componentWillUpdate!=null&&l.componentWillUpdate(S,l.__s,I),O&&l.componentDidUpdate!=null&&l.__h.push(function(){l.componentDidUpdate(h,q,R)})}if(l.context=I,l.props=S,l.__P=t,l.__e=!1,N=_.__r,X=0,O){for(l.state=l.__s,l.__d=!1,N&&N(e),d=l.render(l.props,l.state,l.context),M=0;M<l._sb.length;M++)l.__h.push(l._sb[M]);l._sb=[]}else do l.__d=!1,N&&N(e),d=l.render(l.props,l.state,l.context),l.state=l.__s;while(l.__d&&++X<25);l.state=l.__s,l.getChildContext!=null&&(o=W(W({},o),l.getChildContext())),O&&!x&&l.getSnapshotBeforeUpdate!=null&&(R=l.getSnapshotBeforeUpdate(h,q)),k=d,d!=null&&d.type===z&&d.key==null&&(k=ut(d.props.children)),s=Le(t,K(k)?k:[k],e,n,o,r,i,a,s,c,u),l.base=e.__e,e.__u&=-161,l.__h.length&&a.push(l),J&&(l.__E=l.__=null)}catch(f){if(e.__v=null,c||i!=null)if(f.then){for(e.__u|=c?160:128;s&&s.nodeType==8&&s.nextSibling;)s=s.nextSibling;i[i.indexOf(s)]=null,e.__e=s}else{for(g=i.length;g--;)be(i[g]);ve(e)}else e.__e=n.__e,e.__k=n.__k,f.then||ve(e);_.__e(f,e,n)}else i==null&&e.__v==n.__v?(e.__k=n.__k,e.__e=n.__e):s=e.__e=(function(f,E,H,Y,w,C,It,j,Et){var p,Z,te,ne,P,D,oe,$=H.props,T=E.props,L=E.type;if(L=="svg"?w="http://www.w3.org/2000/svg":L=="math"?w="http://www.w3.org/1998/Math/MathML":w||(w="http://www.w3.org/1999/xhtml"),C!=null){for(p=0;p<C.length;p++)if((P=C[p])&&"setAttribute"in P==!!L&&(L?P.localName==L:P.nodeType==3)){f=P,C[p]=null;break}}if(f==null){if(L==null)return document.createTextNode(T);f=document.createElementNS(w,L,T.is&&T),j&&(_.__m&&_.__m(E,C),j=!1),C=null}if(L==null)$===T||j&&f.data==T||(f.data=T);else{if(C=C&&fe.call(f.childNodes),$=H.props||Q,!j&&C!=null)for($={},p=0;p<f.attributes.length;p++)$[(P=f.attributes[p]).name]=P.value;for(p in $)if(P=$[p],p!="children"){if(p=="dangerouslySetInnerHTML")te=P;else if(!(p in T)){if(p=="value"&&"defaultValue"in T||p=="checked"&&"defaultChecked"in T)continue;re(f,p,null,P,w)}}for(p in T)P=T[p],p=="children"?ne=P:p=="dangerouslySetInnerHTML"?Z=P:p=="value"?D=P:p=="checked"?oe=P:j&&typeof P!="function"||$[p]===P||re(f,p,P,$[p],w);if(Z)j||te&&(Z.__html==te.__html||Z.__html==f.innerHTML)||(f.innerHTML=Z.__html),E.__k=[];else if(te&&(f.innerHTML=""),Le(E.type=="template"?f.content:f,K(ne)?ne:[ne],E,H,Y,L=="foreignObject"?"http://www.w3.org/1999/xhtml":w,C,It,C?C[0]:H.__k&&G(H,0),j,Et),C!=null)for(p=C.length;p--;)be(C[p]);j||(p="value",L=="progress"&&D==null?f.removeAttribute("value"):D!=null&&(D!==f[p]||L=="progress"&&!D||L=="option"&&D!=$[p])&&re(f,p,D,$[p],w),p="checked",oe!=null&&oe!=f[p]&&re(f,p,oe,$[p],w))}return f})(n.__e,e,n,o,r,i,a,c,u);return(d=_.diffed)&&d(e),128&e.__u?void 0:s}function ve(t){t&&t.__c&&(t.__c.__e=!0),t&&t.__k&&t.__k.forEach(ve)}function ct(t,e,n){for(var o=0;o<n.length;o++)Se(n[o],n[++o],n[++o]);_.__c&&_.__c(e,t),t.some(function(r){try{t=r.__h,r.__h=[],t.some(function(i){i.call(r)})}catch(i){_.__e(i,r.__v)}})}function ut(t){return typeof t!="object"||t==null||t.__b&&t.__b>0?t:K(t)?t.map(ut):W({},t)}function Se(t,e,n){try{if(typeof t=="function"){var o=typeof t.__u=="function";o&&t.__u(),o&&e==null||(t.__u=t(e))}else t.current=e}catch(r){_.__e(r,n)}}function _t(t,e,n){var o,r;if(_.unmount&&_.unmount(t),(o=t.ref)&&(o.current&&o.current!=t.__e||Se(o,null,e)),(o=t.__c)!=null){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(i){_.__e(i,e)}o.base=o.__P=null}if(o=t.__k)for(r=0;r<o.length;r++)o[r]&&_t(o[r],e,n||typeof t.type!="function");n||be(t.__e),t.__c=t.__=t.__e=void 0}function Wt(t,e,n){return this.constructor(t,n)}function Ne(t,e,n){var o,r,i;e==document&&(e=document.documentElement),_.__&&_.__(t,e),o=e.__k,r=[],i=[],Ce(e,t=e.__k=A(z,null,[t]),o||Q,Q,e.namespaceURI,o?null:e.firstChild?fe.call(e.childNodes):null,r,o?o.__e:e.firstChild,!1,i),ct(r,t,i)}fe=at.slice,_={__e:function(t,e,n,o){for(var r,i,a;e=e.__;)if((r=e.__c)&&!r.__)try{if((i=r.constructor)&&i.getDerivedStateFromError!=null&&(r.setState(i.getDerivedStateFromError(t)),a=r.__d),r.componentDidCatch!=null&&(r.componentDidCatch(t,o||{}),a=r.__d),a)return r.__E=r}catch(s){t=s}throw t}},nt=0,V.prototype.setState=function(t,e){var n;n=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=W({},this.state),typeof t=="function"&&(t=t(W({},n),this.props)),t&&W(n,t),t!=null&&this.__v&&(e&&this._sb.push(e),qe(this))},V.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),qe(this))},V.prototype.render=z,F=[],ot=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,rt=function(t,e){return t.__v.__b-e.__v.__b},ue.__r=0,it=/(PointerCapture)$|Capture$/i,ke=0,me=Te(!1),ye=Te(!0);var Vt=0;function v(t,e,n,o,r,i){e||(e={});var a,s,c=e;if("ref"in c)for(s in c={},e)s=="ref"?a=e[s]:c[s]=e[s];var u={type:t,props:c,key:n,ref:a,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--Vt,__i:-1,__u:0,__source:r,__self:i};if(typeof t=="function"&&(a=t.defaultProps))for(s in a)c[s]===void 0&&(c[s]=a[s]);return _.vnode&&_.vnode(u),u}class At{async getPresentation(e,n,o="created",r="DESCENDING"){const i=new URL(`/api/2.2/rest/widgets/${e}.json`,`https://${n}`);let a;i.searchParams.set("offset","0"),i.searchParams.set("limit","1"),i.searchParams.set("sortBy",`${o},${r}`),i.searchParams.set("useUserAuth","false");try{a=await fetch(i.toString(),{method:"GET"})}catch(u){throw new Error(`Failed to fetch presentation from host "${n}": ${u.message}`,{cause:u})}const{kulus:s,error:c}=await a.json();if(!a.ok||!s?.length)throw new Error(c?.message??`Failed to fetch presentation with guid "${e}" from host "${n}"`);return s[0]}}const Ut=new Set(["selector","host","guid","widgetOptions","playerParameters","sortBy","sortOrder"]),jt=new Set(["playbackMode","playerConfigurationGuid","playIcon","onIframeLoaded","onThumbnailClick"]),Dt=new Set(["captions","debug","loop","pv","quality","showControlPanel","sidebar","speech","speechTerm","start","volume","reporting","reportingId"]);class Ft{validateAndSanitize(e){if(!e||typeof e!="object")throw new Error("Configuration must be a valid object");if(["selector","host","guid"].forEach(o=>{if(!Object.hasOwn(e,o))throw new Error(`\`${o}\` is not defined in the configuration`)}),["selector","host","guid","sortBy"].forEach(o=>{const r=e[o];if(Object.hasOwn(e,o)){if(r==null)throw new Error(`\`${o}\` is undefined or null`);if(!(o==="selector"&&r instanceof HTMLElement)){if(typeof r!="string")throw new TypeError(`\`${o}\` must be a string${o==="selector"?" or an instance of HTMLElement":""}`);if(r.trim()==="")throw new Error(`\`${o}\` cannot be an empty string`)}}}),Object.hasOwn(e,"sortOrder")&&!["ASCENDING","DESCENDING"].includes(e.sortOrder))throw new Error('`sortOrder` must be either "ASCENDING" or "DESCENDING"');const n={...e,playerParameters:{...e.playerParameters},widgetOptions:{...e.widgetOptions}};e.widgetOptions?.playIcon&&(n.widgetOptions.playIcon={...e.widgetOptions.playIcon}),Object.keys(n).forEach(o=>{Ut.has(o)||(console.warn(`Unsupported field \`${o}\` in configuration`),delete n[o])});try{new URL(`https://${n.host.replace("https://","")}`)}catch{throw new Error("`host` must be a valid domain name")}return this.validatePlayerParameters(n.playerParameters),this.validateWidgetOptions(n.widgetOptions),n}validatePlayerParameters(e){if(e){if(Object.keys(e).forEach(n=>{Dt.has(n)||(console.warn(`Unsupported field \`playerParameters.${n}\` in configuration`),delete e[n])}),e.pv!==void 0&&!["pipls","pipss","sbs"].includes(e.pv))throw new Error('`playerParameters.pv` must be either "pipls", "pipss" or "sbs"');if(e.quality!==void 0&&!["240p","480p","720p","1080p","1440p","auto","best"].includes(e.quality))throw new Error('`playerParameters.quality` must be either "240p", "480p", "720p", "1080p", "1440p" or "auto"')}}validateWidgetOptions(e){if(e){if(Object.keys(e).forEach(n=>{jt.has(n)||(console.warn(`Unsupported field \`widgetOptions.${n}\` in configuration`),delete e[n])}),e.playbackMode!==void 0){const n=e.playbackMode;if(!["inline","inline-autoload","inline-autoplay","modal"].includes(n))throw new Error('`widgetOptions.playbackMode` must be either "inline", "inline-autoload", "inline-autoplay" or "modal"')}if(e.playIcon!==void 0){if(e.playIcon.position!==void 0&&!["top-left","top","top-right","left","center","right","bottom-left","bottom","bottom-right"].includes(e.playIcon.position))throw new Error("`widgetOptions.playIcon.position` must be a valid position value");[void 0,"inline","modal"].includes(e.playbackMode)||console.warn('`widgetOptions.playIcon` is only applicable when `widgetOptions.playbackMode` is either "modal" or "inline"')}if(e.onIframeLoaded!==void 0&&typeof e.onIframeLoaded!="function")throw new TypeError("`widgetOptions.onIframeLoaded` must be a function");if(e.onThumbnailClick!==void 0)if([void 0,"inline"].includes(e.playbackMode)){if(typeof e.onThumbnailClick!="function")throw new TypeError("`widgetOptions.onThumbnailClick` must be a function")}else console.warn('`widgetOptions.onThumbnailClick` is only applicable when `widgetOptions.playbackMode` is "inline"'),delete e.onThumbnailClick}}setDefaults(e){const n={playbackMode:"inline",...e.widgetOptions,playIcon:{height:44,position:"center",width:44,...e.widgetOptions?.playIcon}},o={...e.playerParameters};return{...e,host:e.host.replace("https://","").replace(/\/.*$/,""),playerParameters:o,widgetOptions:n}}}var ee,y,he,He,pe=0,pt=[],b=_,Me=b.__b,We=b.__r,Ve=b.diffed,Ae=b.__c,Ue=b.unmount,je=b.__;function Ie(t,e){b.__h&&b.__h(y,t,pe||e),pe=0;var n=y.__H||(y.__H={__:[],__h:[]});return t>=n.__.length&&n.__.push({}),n.__[t]}function dt(t){return pe=1,(function(e,n,o){var r=Ie(ee++,2);if(r.t=e,!r.__c&&(r.__=[Fe(void 0,n),function(c){var u=r.__N?r.__N[0]:r.__[0],d=r.t(u,c);u!==d&&(r.__N=[d,r.__[1]],r.__c.setState({}))}],r.__c=y,!y.__f)){var i=function(c,u,d){if(!r.__c.__H)return!0;var l=r.__c.__H.__.filter(function(h){return!!h.__c});if(l.every(function(h){return!h.__N}))return!a||a.call(this,c,u,d);var x=r.__c.props!==c;return l.forEach(function(h){if(h.__N){var q=h.__[0];h.__=h.__N,h.__N=void 0,q!==h.__[0]&&(x=!0)}}),a&&a.call(this,c,u,d)||x};y.__f=!0;var a=y.shouldComponentUpdate,s=y.componentWillUpdate;y.componentWillUpdate=function(c,u,d){if(this.__e){var l=a;a=void 0,i(c,u,d),a=l}s&&s.call(this,c,u,d)},y.shouldComponentUpdate=i}return r.__N||r.__})(Fe,t)}function ft(t,e){var n=Ie(ee++,3);!b.__s&&gt(n.__H,e)&&(n.__=t,n.u=e,y.__H.__h.push(n))}function ht(t){return pe=5,(function(e,n){var o=Ie(ee++,7);return gt(o.__H,n)&&(o.__=e(),o.__H=n,o.__h=e),o.__})(function(){return{current:t}},[])}function Rt(){for(var t;t=pt.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(ce),t.__H.__h.forEach(we),t.__H.__h=[]}catch(e){t.__H.__h=[],b.__e(e,t.__v)}}b.__b=function(t){y=null,Me&&Me(t)},b.__=function(t,e){t&&e.__k&&e.__k.__m&&(t.__m=e.__k.__m),je&&je(t,e)},b.__r=function(t){We&&We(t),ee=0;var e=(y=t.__c).__H;e&&(he===y?(e.__h=[],y.__h=[],e.__.forEach(function(n){n.__N&&(n.__=n.__N),n.u=n.__N=void 0})):(e.__h.forEach(ce),e.__h.forEach(we),e.__h=[],ee=0)),he=y},b.diffed=function(t){Ve&&Ve(t);var e=t.__c;e&&e.__H&&(e.__H.__h.length&&(pt.push(e)!==1&&He===b.requestAnimationFrame||((He=b.requestAnimationFrame)||Jt)(Rt)),e.__H.__.forEach(function(n){n.u&&(n.__H=n.u),n.u=void 0})),he=y=null},b.__c=function(t,e){e.some(function(n){try{n.__h.forEach(ce),n.__h=n.__h.filter(function(o){return!o.__||we(o)})}catch(o){e.some(function(r){r.__h&&(r.__h=[])}),e=[],b.__e(o,n.__v)}}),Ae&&Ae(t,e)},b.unmount=function(t){Ue&&Ue(t);var e,n=t.__c;n&&n.__H&&(n.__H.__.forEach(function(o){try{ce(o)}catch(r){e=r}}),n.__H=void 0,e&&b.__e(e,n.__v))};var De=typeof requestAnimationFrame=="function";function Jt(t){var e,n=function(){clearTimeout(o),De&&cancelAnimationFrame(e),setTimeout(t)},o=setTimeout(n,35);De&&(e=requestAnimationFrame(n))}function ce(t){var e=y,n=t.__c;typeof n=="function"&&(t.__c=void 0,n()),y=e}function we(t){var e=y;t.__c=t.__(),y=e}function gt(t,e){return!t||t.length!==e.length||e.some(function(n,o){return n!==t[o]})}function Fe(t,e){return typeof e=="function"?e(t):e}function Re(t,e){for(var n in t)if(n!=="__source"&&!(n in e))return!0;for(var o in e)if(o!=="__source"&&t[o]!==e[o])return!0;return!1}function Je(t,e){this.props=t,this.context=e}(Je.prototype=new V).isPureReactComponent=!0,Je.prototype.shouldComponentUpdate=function(t,e){return Re(this.props,t)||Re(this.state,e)};var Be=_.__b;_.__b=function(t){t.type&&t.type.__f&&t.ref&&(t.props.ref=t.ref,t.ref=null),Be&&Be(t)};var Bt=_.__e;_.__e=function(t,e,n,o){if(t.then){for(var r,i=e;i=i.__;)if((r=i.__c)&&r.__c)return e.__e==null&&(e.__e=n.__e,e.__k=n.__k),r.__c(t,e)}Bt(t,e,n,o)};var Xe=_.unmount;function mt(t,e,n){return t&&(t.__c&&t.__c.__H&&(t.__c.__H.__.forEach(function(o){typeof o.__c=="function"&&o.__c()}),t.__c.__H=null),(t=(function(o,r){for(var i in r)o[i]=r[i];return o})({},t)).__c!=null&&(t.__c.__P===n&&(t.__c.__P=e),t.__c.__e=!0,t.__c=null),t.__k=t.__k&&t.__k.map(function(o){return mt(o,e,n)})),t}function yt(t,e,n){return t&&n&&(t.__v=null,t.__k=t.__k&&t.__k.map(function(o){return yt(o,e,n)}),t.__c&&t.__c.__P===e&&(t.__e&&n.appendChild(t.__e),t.__c.__e=!0,t.__c.__P=n)),t}function ge(){this.__u=0,this.o=null,this.__b=null}function bt(t){var e=t.__.__c;return e&&e.__a&&e.__a(t)}function ie(){this.i=null,this.l=null}_.unmount=function(t){var e=t.__c;e&&e.__R&&e.__R(),e&&32&t.__u&&(t.type=null),Xe&&Xe(t)},(ge.prototype=new V).__c=function(t,e){var n=e.__c,o=this;o.o==null&&(o.o=[]),o.o.push(n);var r=bt(o.__v),i=!1,a=function(){i||(i=!0,n.__R=null,r?r(s):s())};n.__R=a;var s=function(){if(!--o.__u){if(o.state.__a){var c=o.state.__a;o.__v.__k[0]=yt(c,c.__c.__P,c.__c.__O)}var u;for(o.setState({__a:o.__b=null});u=o.o.pop();)u.forceUpdate()}};o.__u++||32&e.__u||o.setState({__a:o.__b=o.__v.__k[0]}),t.then(a,a)},ge.prototype.componentWillUnmount=function(){this.o=[]},ge.prototype.render=function(t,e){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),o=this.__v.__k[0].__c;this.__v.__k[0]=mt(this.__b,n,o.__O=o.__P)}this.__b=null}var r=e.__a&&A(z,null,t.fallback);return r&&(r.__u&=-33),[A(z,null,e.__a?null:t.children),r]};var ze=function(t,e,n){if(++n[1]===n[0]&&t.l.delete(e),t.props.revealOrder&&(t.props.revealOrder[0]!=="t"||!t.l.size))for(n=t.i;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;t.i=n=n[2]}};(ie.prototype=new V).__a=function(t){var e=this,n=bt(e.__v),o=e.l.get(t);return o[0]++,function(r){var i=function(){e.props.revealOrder?(o.push(r),ze(e,t,o)):r()};n?n(i):i()}},ie.prototype.render=function(t){this.i=null,this.l=new Map;var e=_e(t.children);t.revealOrder&&t.revealOrder[0]==="b"&&e.reverse();for(var n=e.length;n--;)this.l.set(e[n],this.i=[1,0,this.i]);return t.children},ie.prototype.componentDidUpdate=ie.prototype.componentDidMount=function(){var t=this;this.l.forEach(function(e,n){ze(t,n,e)})};var Xt=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,zt=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,Gt=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,Yt=/[A-Z0-9]/g,Zt=typeof document<"u",Qt=function(t){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(t)};V.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(t){Object.defineProperty(V.prototype,t,{configurable:!0,get:function(){return this["UNSAFE_"+t]},set:function(e){Object.defineProperty(this,t,{configurable:!0,writable:!0,value:e})}})});var Ge=_.event;function Kt(){}function en(){return this.cancelBubble}function tn(){return this.defaultPrevented}_.event=function(t){return Ge&&(t=Ge(t)),t.persist=Kt,t.isPropagationStopped=en,t.isDefaultPrevented=tn,t.nativeEvent=t};var nn={enumerable:!1,configurable:!0,get:function(){return this.class}},Ye=_.vnode;_.vnode=function(t){typeof t.type=="string"&&(function(e){var n=e.props,o=e.type,r={},i=o.indexOf("-")===-1;for(var a in n){var s=n[a];if(!(a==="value"&&"defaultValue"in n&&s==null||Zt&&a==="children"&&o==="noscript"||a==="class"||a==="className")){var c=a.toLowerCase();a==="defaultValue"&&"value"in n&&n.value==null?a="value":a==="download"&&s===!0?s="":c==="translate"&&s==="no"?s=!1:c[0]==="o"&&c[1]==="n"?c==="ondoubleclick"?a="ondblclick":c!=="onchange"||o!=="input"&&o!=="textarea"||Qt(n.type)?c==="onfocus"?a="onfocusin":c==="onblur"?a="onfocusout":Gt.test(a)&&(a=c):c=a="oninput":i&&zt.test(a)?a=a.replace(Yt,"-$&").toLowerCase():s===null&&(s=void 0),c==="oninput"&&r[a=c]&&(a="oninputCapture"),r[a]=s}}o=="select"&&r.multiple&&Array.isArray(r.value)&&(r.value=_e(n.children).forEach(function(u){u.props.selected=r.value.indexOf(u.props.value)!=-1})),o=="select"&&r.defaultValue!=null&&(r.value=_e(n.children).forEach(function(u){u.props.selected=r.multiple?r.defaultValue.indexOf(u.props.value)!=-1:r.defaultValue==u.props.value})),n.class&&!n.className?(r.class=n.class,Object.defineProperty(r,"className",nn)):(n.className&&!n.class||n.class&&n.className)&&(r.class=r.className=n.className),e.props=r})(t),t.$$typeof=Xt,Ye&&Ye(t)};var Ze=_.__r;_.__r=function(t){Ze&&Ze(t),t.__c};var Qe=_.diffed;_.diffed=function(t){Qe&&Qe(t);var e=t.props,n=t.__e;n!=null&&t.type==="textarea"&&"value"in e&&e.value!==n.value&&(n.value=e.value==null?"":e.value)};const on=t=>A("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor",width:64,height:64,"aria-hidden":"true",class:"qc-icon",...t},A("path",{d:"M22.643 17.734a1 1 0 000-1.696L12.417 9.647a1 1 0 00-1.53.848v12.783a1 1 0 001.53.848l10.226-6.392zm-9.166 8.088a3 3 0 01-4.59-2.544V10.495a3 3 0 014.59-2.544l10.226 6.391a3 3 0 010 5.088l-10.226 6.392z"})),rn={fallbackLocale:"en",interpolation:{prefix:"{{",suffix:"}}"},locale:"en",messages:{}},an={nplurals:2,plurals:t=>+(t!==1)},ln={fr:{nplurals:2,plurals:t=>+(t>1)},ja:{nplurals:1,plurals:()=>0}};class Ee{options;constructor(e){this.options={...rn,...e}}static getValue(e,n){let o,r=e,i=n;for(;r&&typeof r=="object"&&i&&(o=i.indexOf("."))>0;)r=r[i.substring(0,o)],i=i.substring(o+1);return r&&i&&typeof r=="object"?r[i]:""}addMessages(e,n){this.options.messages[e]=n}getLanguage(){return this.options.locale.split("-").shift()}getLocale(){return this.options.locale}setLocale(e){this.options.locale=e}t(e,n={},o){const r=o||this.getLocale(),i=r.split("-").shift(),a=this.getKey(e,n,ln[i]||an),s=this.getTemplate(a,r);return s?this.interpolate(s,n,r):e}getKey(e,n,o){let r=e;if("context"in n&&(r+=`_${n.context}`),"count"in n){const i=o.plurals(Math.abs(Number(n.count)));return o.nplurals===1||i===0||(o.nplurals===2?r+="_plural":r+=`_${i}`),r}return r}getLocaleAndLang(e){return[e,e.split("-").shift()]}getTemplate(e,n){const o=new Set([this.getLocaleAndLang(n),this.getLocaleAndLang(this.options.fallbackLocale)].flat());for(const r of o){const i=this.options.messages[r],a=Ee.getValue(i,e);if(a)return a}return null}interpolate(e,n={},o){const r=new RegExp(`${this.options.interpolation.prefix}(\\w+)${this.options.interpolation.suffix}`,"g");return e.replace(r,(i,a)=>n[a]).replace(/\$t\(([^)]+)\)/g,(i,a)=>this.t(a,n,o))}}const sn={common:{PLAY_PRESENTATION:"Play Presentation: {{title}}","Presentation not found":"Presentation not found"}},cn={common:{PLAY_PRESENTATION:"Jouer la présentation : {{title}}","Presentation not found":"Présentation introuvable"}},un={common:{PLAY_PRESENTATION:"プレゼンテーションを再生: {{title}}","Presentation not found":"プレゼンテーションが見つかりません"}};function _n(t){const e=t.closest("[lang]");return e?e.lang:window.navigator.language||"en"}let vt;function wt(){return vt}function Pt({presentation:t,onClick:e,widgetOptions:n}){const o=wt(),r=n.playIcon?.position||"center",i=r.includes("left")?"start":r.includes("right")?"end":"center";return v("button",{type:"button",class:"qc-thumbnail",onClick:()=>{n.onThumbnailClick?n.onThumbnailClick(t):e()},style:{"place-items":`${r.includes("top")?"start":r.includes("bottom")?"end":"center"} ${i}`},children:[v("span",{class:"qc-sr-only",children:o.t("common.PLAY_PRESENTATION",{title:t.title})}),v("img",{class:"qc-thumbnail__image",src:t.thumbnail?.cdnUrl||t.thumbnail?.url,alt:""}),n.playIcon?.url?v("img",{alt:"",class:"qc-thumbnail__play-button",src:n.playIcon?.url,style:{width:`${n.playIcon.width}px`,height:`${n.playIcon.height}px`}}):v(on,{className:"qc-icon qc-thumbnail__play-button qc-thumbnail__play-button--default",width:n.playIcon.width,height:n.playIcon.height})]})}function kt({presentation:t,widgetOptions:e,playerParameters:n}){const[o,r]=dt(["inline-autoload","inline-autoplay","modal"].includes(e.playbackMode)),i=ht(null);ft(()=>{if(!o||!i.current)return;const u=i.current,d=()=>{e.onIframeLoaded?.(u)};return u.addEventListener("load",d),()=>{u.removeEventListener("load",d)}},[o]);const a=new URL(t.player||""),s=["inline-autoplay","inline","modal"].includes(e.playbackMode);a.searchParams.set("autoplay",s.toString()),Object.entries(n).forEach(([u,d])=>{a.searchParams.set(u,String(d))}),e.playerConfigurationGuid&&a.searchParams.set("playerConfigurationGuid",e.playerConfigurationGuid);const c=v("iframe",{ref:i,src:a.toString(),width:"100%",height:"100%",allow:"autoplay; fullscreen",title:t.title,class:"qc-player"});return o?c:v(Pt,{presentation:t,onClick:()=>r(!0),widgetOptions:e})}const pn=t=>A("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 32 32",fill:"currentColor","aria-hidden":"true",class:"qc-icon",...t},A("path",{d:"M19.2722 16.1472L28.6472 25.5222C29.0616 25.9366 29.2944 26.4986 29.2944 27.0847C29.2944 27.6708 29.0616 28.2328 28.6472 28.6472C28.2328 29.0616 27.6708 29.2944 27.0847 29.2944C26.4986 29.2944 25.9366 29.0616 25.5222 28.6472L16.1472 19.2722L6.77221 28.6472C6.35781 29.0616 5.79576 29.2944 5.20971 29.2944C4.62366 29.2944 4.06161 29.0616 3.64721 28.6472C3.23281 28.2328 3 27.6708 3 27.0847C3 26.4986 3.23281 25.9366 3.64721 25.5222L13.0222 16.1472L3.64721 6.77221C3.23281 6.35781 3 5.79576 3 5.20971C3 4.62366 3.23281 4.06161 3.64721 3.64721C4.06161 3.23281 4.62366 3 5.20971 3C5.79576 3 6.35781 3.23281 6.77221 3.64721L16.1472 13.0222L25.5222 3.64721C25.9366 3.23281 26.4986 3 27.0847 3C27.6708 3 28.2328 3.23281 28.6472 3.64721C29.0616 4.06161 29.2944 4.62366 29.2944 5.20971C29.2944 5.79576 29.0616 6.35781 28.6472 6.77221L19.2722 16.1472Z"}));function dn({presentation:t,widgetOptions:e,playerParameters:n,aspectRatio:o}){const[r,i]=dt(!1),a=ht(null);ft(()=>{r&&a.current?.showModal()},[r]);const s=()=>{a.current?.close(),i(!1)};return t?v("div",{class:"qc-dialog",children:[v(Pt,{onClick:()=>i(!0),presentation:t,widgetOptions:e}),r&&v("dialog",{ref:a,onClick:c=>{c.target===a.current&&s()},onClose:()=>i(!1),style:{"aspect-ratio":o||"16 / 9"},children:[v("button",{type:"button",class:"qc-dialog__close-button",onClick:s,children:v(pn,{className:"qc-icon"})}),v(kt,{presentation:t,playerParameters:n,widgetOptions:e})]})]}):""}const fn=t=>A("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 256",fill:"currentColor","aria-hidden":"true",class:"qc-icon",...t},A("path",{d:"M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16h64a8,8,0,0,0,7.59-5.47l14.83-44.48L163,151.43a8.07,8.07,0,0,0,4.46-4.46l14.62-36.55,44.48-14.83A8,8,0,0,0,232,88V56A16,16,0,0,0,216,40ZM112.41,157.47,98.23,200H40V172l52-52,30.42,30.42L117,152.57A8,8,0,0,0,112.41,157.47ZM216,82.23,173.47,96.41a8,8,0,0,0-4.9,4.62l-14.72,36.82L138.58,144l-35.27-35.27a16,16,0,0,0-22.62,0L40,149.37V56H216Zm12.68,33a8,8,0,0,0-7.21-1.1l-23.8,7.94a8,8,0,0,0-4.9,4.61l-14.31,35.77-35.77,14.31a8,8,0,0,0-4.61,4.9l-7.94,23.8A8,8,0,0,0,137.73,216H216a16,16,0,0,0,16-16V121.73A8,8,0,0,0,228.68,115.24ZM216,200H148.83l3.25-9.75,35.51-14.2a8.07,8.07,0,0,0,4.46-4.46l14.2-35.51,9.75-3.25Z"}));function hn(){const t=wt();return v("div",{class:"qc-not-found",children:[v(fn,{width:48,height:48}),v("div",{children:t.t("common.Presentation not found")})]})}class xe{configurationService=new Ft;configuration;presentationService=new At;presentation=null;container=null;destroyed=!1;static async create(e){const n=new xe(e);return await n.init(),n}constructor(e){this.configuration=this.configurationService.validateAndSanitize(e),this.configuration=this.configurationService.setDefaults(this.configuration)}destroy(){this.destroyed||(this.container&&(Ne(null,this.container),this.container.innerHTML=""),this.presentation=null,this.destroyed=!0)}async init(){try{this.presentation=await this.presentationService.getPresentation(this.configuration.guid,this.configuration.host,this.configuration.sortBy,this.configuration.sortOrder)}catch(e){console.error(e)}finally{this.mount()}}mount(){const e=this.configuration.selector instanceof HTMLElement?this.configuration.selector:document.querySelector(this.configuration.selector);if(!e)throw new Error(`Element for selector "${this.configuration.selector}" not found`);vt=new Ee({locale:_n(e),messages:{en:sn,fr:cn,ja:un}}),this.container=e,e.innerHTML="";const n=this.presentation?.mediaDisplayWidth&&this.presentation?.mediaDisplayHeight?`${this.presentation.mediaDisplayWidth} / ${this.presentation.mediaDisplayHeight}`:"16 / 9";Ne(v("div",{class:"qc-widget qc-presentation-widget",style:{"aspect-ratio":n},children:this.presentation?this.configuration.widgetOptions?.playbackMode==="modal"?v(dn,{aspectRatio:n,presentation:this.presentation,playerParameters:this.configuration.playerParameters,widgetOptions:this.configuration.widgetOptions}):v(kt,{presentation:this.presentation,playerParameters:this.configuration.playerParameters,widgetOptions:this.configuration.widgetOptions}):v(hn,{})}),e)}}var gn=Object.defineProperty,mn=Object.getOwnPropertyDescriptor,Ct=(t,e,n,o)=>{for(var r=o>1?void 0:o?mn(e,n):e,i=t.length-1,a;i>=0;i--)(a=t[i])&&(r=(o?a(e,n,r):a(r))||r);return o&&r&&gn(e,n,r),r};let Pe=class extends qt{constructor(){super(...arguments),this.widget=null}createRenderRoot(){return this}disconnectedCallback(){super.disconnectedCallback(),this.destroyWidget()}updated(t){t.has("configuration")&&this.recreateWidget()}recreateWidget(){const t=this.querySelector("#container");t&&(this.destroyWidget(),xe.create({selector:t,...this.configuration}).then(e=>{this.widget=e}).catch(console.error))}destroyWidget(){this.widget&&(this.widget.destroy(),this.widget=null)}render(){return tt`<div id="container"></div>`}};Ct([Nt({type:Object})],Pe.prototype,"configuration",2);Pe=Ct([Lt("presentation-widget")],Pe);const de="1.0.0-beta.9",St=`--qc-theme-background-color: #09091a;
--qc-theme-color: #f5f8fa;

--qc-presentation-widget-border-radius: 0;
--qc-presentation-widget-height: 100%;
--qc-presentation-widget-width: 100%;

--qc-thumbnail-image-fit: cover;

--qc-thumbnail-play-button-margin: 16px;
--qc-thumbnail-play-button-padding: 8px;
--qc-thumbnail-play-button-background-color: var(--qc-theme-background-color);
--qc-thumbnail-play-button-background-opacity: 0.8;
--qc-thumbnail-play-button-background-opacity-hover: 1;

--qc-dialog-backdrop: rgb(0 0 0 / 0.5);
--qc-dialog-background-color: #000;
--qc-dialog-border-color: #000;
--qc-dialog-border-radius: 0;
--qc-dialog-border-style: solid;
--qc-dialog-border-width: 3px;
--qc-dialog-close-button-background-color: var(--qc-theme-background-color);
--qc-dialog-close-button-background-opacity: 0.8;
--qc-dialog-close-button-background-opacity-hover: 1;
--qc-dialog-close-button-color: var(--qc-theme-color);
--qc-dialog-close-button-padding: 6px;
--qc-dialog-close-button-shadow: 0 0 1px 1px #000000;
--qc-dialog-close-icon-size: 20px;
--qc-dialog-padding: 0;
--qc-dialog-width-max: 1100px;
--qc-dialog-width: 90vw;`,Ke=St.split(`
`).filter(t=>t.trim().startsWith("--qc-")).reduce((t,e)=>{const[n,o]=e.split(":").map(r=>r?.trim());return t.set(n,o.replace(";","")),t},new Map),wn={component:"presentation-widget"},ae={parameters:{docs:{source:{code:`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8"/>
    <title>Presentation Widget</title>
    <link rel="stylesheet" href="https://unpkg.com/@enghouse-qumu/widget@${de}/presentation-widget.css">
  </head>
  <body>
    <p>The widget below uses the lang attribute from the html tag</p>
    <div id="widget1"></div>
    
    <p>The widget below is forced to French thanks to lang="fr"</p>
    <div id="widget2" lang="fr"></div>

    <script type="module">
      import { PresentationWidget } from 'https://unpkg.com/@enghouse-qumu/widget@${de}/presentation-widget.js';
      
      PresentationWidget.create({
        host:'demo.qumucloud.com',
        guid: 'JN6JHrg17xpwF8klXSIfFj',
        selector: '#widget1',
      }).catch((err) => console.log(err));
      
      PresentationWidget.create({
        host: 'demo.qumucloud.com',
        guid: 'JN6JHrg17xpwF8klXSIfFj',
        selector: '#widget2',
      }).catch((err) => console.log(err));
    <\/script>
  </body>
</html>`}}},render:()=>(console.log("foo"),tt`
    <p>The widget below uses the lang attribute from the html tag</p>
    <presentation-widget .configuration=${{guid:"JN6JHrg17xpwF8klXSIfFj",host:"demo.qumucloud.com"}}></presentation-widget>

    <p>The widget below is forced to French thanks to lang="fr"</p>
    <presentation-widget lang="fr" .configuration=${{guid:"JN6JHrg17xpwF8klXSIfFj",host:"demo.qumucloud.com"}}></presentation-widget>
  `)};function et(t){const e={playbackMode:t.playbackMode};t.playIconPosition&&(e.playIcon=e.playIcon||{},e.playIcon.position=t.playIconPosition),t.playIconWidth!==void 0&&t.playIconWidth!==null&&(e.playIcon=e.playIcon||{},e.playIcon.width=t.playIconWidth),t.playIconHeight!==void 0&&t.playIconHeight!==null&&(e.playIcon=e.playIcon||{},e.playIcon.height=t.playIconHeight),t.playIconUrl&&(e.playIcon=e.playIcon||{},e.playIcon.url=t.playIconUrl);const n={};t.playerCaptions&&(n.captions=t.playerCaptions),t.playerDebug!==void 0&&t.playerDebug!==null&&(n.debug=t.playerDebug),t.playerLoop!==void 0&&t.playerLoop!==null&&(n.loop=t.playerLoop),t.playerView&&(n.pv=t.playerView),t.playerQuality&&(n.quality=t.playerQuality),t.playerShowControlPanel!==void 0&&t.playerShowControlPanel!==null&&(n.showControlPanel=t.playerShowControlPanel),t.playerSidebar!==void 0&&t.playerSidebar!==null&&(n.sidebar=t.playerSidebar),t.playerStart&&(n.start=t.playerStart),t.playerVolume&&(n.volume=t.playerVolume),t.playerReporting!==void 0&&t.playerReporting!==null&&(n.reporting=t.playerReporting),t.playerReportingId&&(n.reportingId=t.playerReportingId);const o={host:t.host,guid:t.guid,widgetOptions:e};return Object.keys(n).length&&(o.playerParameters=n),o}function yn(t){return t.split(`
`).filter(e=>e.trim().startsWith("--qc-")).reduce((e,n)=>{let[o,r]=n.split(":").map(i=>i?.trim());return r=r?.replace(";",""),Ke.has(o)&&Ke.get(o)!==r&&e.push(`${o}: ${r};`),e},[]).join(`
`)}const le={args:{host:"demo.qumucloud.com",guid:"JN6JHrg17xpwF8klXSIfFj",playbackMode:"inline",playIconPosition:"center",cssVars:St},argTypes:{host:{control:"text"},guid:{control:"text"},playbackMode:{control:"select",name:"Playback Mode",options:["inline","inline-autoload","inline-autoplay","modal"],table:{defaultValue:{summary:"inline"}}},playIconPosition:{control:"select",name:"Position",options:["top-left","top","top-right","left","center","right","bottom-left","bottom","bottom-right"],table:{category:"Play Icon"}},playIconWidth:{control:"number",name:"Width",table:{category:"Play Icon"}},playIconHeight:{control:"number",name:"Height",table:{category:"Play Icon"}},playIconUrl:{control:"text",name:"Custom Play Icon URL",table:{category:"Play Icon"}},playerCaptions:{control:"text",name:"Captions",table:{category:"Player Parameters"}},playerDebug:{control:"boolean",name:"Enable Debug Mode",table:{category:"Player Parameters"}},playerLoop:{control:"boolean",name:"Loop",table:{category:"Player Parameters"}},playerView:{control:"select",name:"View",options:["pipls","pipss","sbs"],table:{category:"Player Parameters"}},playerQuality:{control:"select",name:"Quality",options:["auto","best","1440p","1080p","720p","360p","240p"],table:{category:"Player Parameters"}},playerShowControlPanel:{control:"boolean",name:"Show the Control Panel",table:{category:"Player Parameters"}},playerSidebar:{control:"boolean",name:"Show the Sidebar",table:{category:"Player Parameters"}},playerStart:{control:"text",name:"Start at",table:{category:"Player Parameters"}},playerVolume:{control:"range",max:100,min:0,name:"Volume",table:{category:"Player Parameters"}},playerReporting:{control:"boolean",name:"Enable Playback Analytics",table:{category:"Player Parameters"}},playerReportingId:{control:"text",name:"Reporting ID",table:{category:"Player Parameters"}},cssVars:{control:{multiline:!0,type:"text"},name:"CSS Variables",table:{category:"CSS Variables"}}},parameters:{docs:{source:{transform:(t,e)=>{const n=et(e.args),o=yn(e.args.cssVars),r=o.length>0?`
    <style>
      :root {
        ${o.split(`
`).map((i,a)=>a===0?i:`        ${i}`).join(`
`)}
      }
    </style>`:"";return`
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8"/>
    <title>Presentation Widget</title>
    <link rel="stylesheet" href="https://unpkg.com/@enghouse-qumu/widget@${de}/presentation-widget.css">${r}
  </head>
  <body>
    <div id="widget"></div>
    
    <script type="module">
      import { PresentationWidget } from 'https://unpkg.com/@enghouse-qumu/widget@${de}/presentation-widget.js';
      
      PresentationWidget.create(${JSON.stringify(n,null,2).split(`
`).map((i,a)=>a===0?i:`      ${i}`).join(`
`)}).catch((err) => console.log(err));
    <\/script>
  </body>
</html>
          `}}}},render:t=>{const e=document.createElement("presentation-widget");return e.configuration=et(t),t.cssVars?.split(`
`).forEach(n=>{if(!n.startsWith("--qc-"))return;const[o,r]=n.split(":").map(i=>i?.trim());o&&r&&e.style.setProperty(o,r.replace(";",""))}),e}};ae.parameters={...ae.parameters,docs:{...ae.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8"/>
    <title>Presentation Widget</title>
    <link rel="stylesheet" href="https://unpkg.com/@enghouse-qumu/widget@\${version}/presentation-widget.css">
  </head>
  <body>
    <p>The widget below uses the lang attribute from the html tag</p>
    <div id="widget1"></div>
    
    <p>The widget below is forced to French thanks to lang="fr"</p>
    <div id="widget2" lang="fr"></div>

    <script type="module">
      import { PresentationWidget } from 'https://unpkg.com/@enghouse-qumu/widget@\${version}/presentation-widget.js';
      
      PresentationWidget.create({
        host:'demo.qumucloud.com',
        guid: 'JN6JHrg17xpwF8klXSIfFj',
        selector: '#widget1',
      }).catch((err) => console.log(err));
      
      PresentationWidget.create({
        host: 'demo.qumucloud.com',
        guid: 'JN6JHrg17xpwF8klXSIfFj',
        selector: '#widget2',
      }).catch((err) => console.log(err));
    <\/script>
  </body>
</html>\`
      }
    }
  },
  render: () => {
    console.log('foo');
    return html\`
    <p>The widget below uses the lang attribute from the html tag</p>
    <presentation-widget .configuration=\${{
      guid: 'JN6JHrg17xpwF8klXSIfFj',
      host: 'demo.qumucloud.com'
    }}></presentation-widget>

    <p>The widget below is forced to French thanks to lang="fr"</p>
    <presentation-widget lang="fr" .configuration=\${{
      guid: 'JN6JHrg17xpwF8klXSIfFj',
      host: 'demo.qumucloud.com'
    }}></presentation-widget>
  \`;
  }
}`,...ae.parameters?.docs?.source}}};le.parameters={...le.parameters,docs:{...le.parameters?.docs,source:{originalSource:`{
  args: {
    /* eslint-disable sort-keys */
    host: 'demo.qumucloud.com',
    guid: 'JN6JHrg17xpwF8klXSIfFj',
    playbackMode: 'inline',
    playIconPosition: 'center',
    cssVars: DEFAULT_CSS_VARIABLES
    /* eslint-enable sort-keys */
  },
  argTypes: {
    host: {
      control: 'text'
    },
    // eslint-disable-next-line sort-keys
    guid: {
      control: 'text'
    },
    playbackMode: {
      control: 'select',
      name: 'Playback Mode',
      options: ['inline', 'inline-autoload', 'inline-autoplay', 'modal'],
      table: {
        defaultValue: {
          summary: 'inline'
        }
      }
    },
    playIconPosition: {
      control: 'select',
      name: 'Position',
      options: ['top-left', 'top', 'top-right', 'left', 'center', 'right', 'bottom-left', 'bottom', 'bottom-right'],
      table: {
        category: 'Play Icon'
      }
    },
    playIconWidth: {
      control: 'number',
      name: 'Width',
      table: {
        category: 'Play Icon'
      }
    },
    // eslint-disable-next-line sort-keys
    playIconHeight: {
      control: 'number',
      name: 'Height',
      table: {
        category: 'Play Icon'
      }
    },
    playIconUrl: {
      control: 'text',
      name: 'Custom Play Icon URL',
      table: {
        category: 'Play Icon'
      }
    },
    // eslint-disable-next-line sort-keys
    playerCaptions: {
      control: 'text',
      name: 'Captions',
      table: {
        category: 'Player Parameters'
      }
    },
    playerDebug: {
      control: 'boolean',
      name: 'Enable Debug Mode',
      table: {
        category: 'Player Parameters'
      }
    },
    playerLoop: {
      control: 'boolean',
      name: 'Loop',
      table: {
        category: 'Player Parameters'
      }
    },
    playerView: {
      control: 'select',
      name: 'View',
      options: ['pipls', 'pipss', 'sbs'],
      table: {
        category: 'Player Parameters'
      }
    },
    // eslint-disable-next-line sort-keys
    playerQuality: {
      control: 'select',
      name: 'Quality',
      options: ['auto', 'best', '1440p', '1080p', '720p', '360p', '240p'],
      table: {
        category: 'Player Parameters'
      }
    },
    playerShowControlPanel: {
      control: 'boolean',
      name: 'Show the Control Panel',
      table: {
        category: 'Player Parameters'
      }
    },
    playerSidebar: {
      control: 'boolean',
      name: 'Show the Sidebar',
      table: {
        category: 'Player Parameters'
      }
    },
    playerStart: {
      control: 'text',
      name: 'Start at',
      table: {
        category: 'Player Parameters'
      }
    },
    playerVolume: {
      control: 'range',
      max: 100,
      min: 0,
      name: 'Volume',
      table: {
        category: 'Player Parameters'
      }
    },
    // eslint-disable-next-line sort-keys
    playerReporting: {
      control: 'boolean',
      name: 'Enable Playback Analytics',
      table: {
        category: 'Player Parameters'
      }
    },
    playerReportingId: {
      control: 'text',
      name: 'Reporting ID',
      table: {
        category: 'Player Parameters'
      }
    },
    // eslint-disable-next-line sort-keys
    cssVars: {
      control: {
        multiline: true,
        type: 'text'
      },
      name: 'CSS Variables',
      table: {
        category: 'CSS Variables'
      }
    }
  },
  parameters: {
    docs: {
      source: {
        transform: (_: string, storyContext: StoryContext) => {
          const configuration = getConfiguration(storyContext.args);
          const overridenCssVariables = getOverridenCssVariables(storyContext.args.cssVars as string);

          // the weird spacing here is on purpose, it's to make the HTML code look better in the docs panel
          const cssVariables = overridenCssVariables.length > 0 ? \`
    <style>
      :root {
        \${overridenCssVariables.split('\\n')
          // add 8 spaces (indent level inside <style>)
          .map((line, i) => i === 0 ? line : \`        \${line}\`).join('\\n')}
      }
    </style>\` : '';
          return \`
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8"/>
    <title>Presentation Widget</title>
    <link rel="stylesheet" href="https://unpkg.com/@enghouse-qumu/widget@\${version}/presentation-widget.css">\${cssVariables}
  </head>
  <body>
    <div id="widget"></div>
    
    <script type="module">
      import { PresentationWidget } from 'https://unpkg.com/@enghouse-qumu/widget@\${version}/presentation-widget.js';
      
      PresentationWidget.create(\${JSON.stringify(configuration, null, 2).split('\\n')
          // add 6 spaces (indent level inside <script>)
          .map((line, i) => i === 0 ? line : \`      \${line}\`).join('\\n')}).catch((err) => console.log(err));
    <\/script>
  </body>
</html>
          \`;
        }
      }
    }
  },
  render: (args: Partial<Args>) => {
    const el = document.createElement('presentation-widget') as PresentationWidgetComponent;
    el.configuration = getConfiguration(args);
    args.cssVars?.split('\\n').forEach((line: string) => {
      if (!line.startsWith('--qc-')) {
        return;
      }
      const [key, value] = line.split(':').map(s => s?.trim());
      if (key && value) {
        el.style.setProperty(key, value.replace(';', ''));
      }
    });
    return el;
  }
}`,...le.parameters?.docs?.source}}};const Pn=["Localisation","Playground"];export{ae as Localisation,le as Playground,Pn as __namedExportsOrder,wn as default};

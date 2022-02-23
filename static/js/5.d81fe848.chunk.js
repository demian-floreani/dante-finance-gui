(this["webpackJsonptomb.finance"]=this["webpackJsonptomb.finance"]||[]).push([[5],{773:function(e,t,n){"use strict";var a=n(0),r=n(774),c=n(114);t.a=function(){var e=Object(r.b)(),t=Object(c.b)();return Object(a.useCallback)((function(n,a){n.then((function(t){return e(t,{summary:a})})).catch((function(e){if(!e.message.includes("User denied")){var n="Unable to ".concat(a[0].toLowerCase()).concat(a.slice(1));console.error("".concat(n,": ").concat(e.message||e.stack)),t({error:{message:n,stack:e.message||e.stack}})}}))}),[t,e])}},774:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return u}));var a=n(0),r=n(54),c=n(404),o=n(100);function l(){var e=Object(c.h)(),t=e.chainId,n=e.account,l=Object(r.b)();return Object(a.useCallback)((function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=a.summary,c=a.approval;if(n&&t){var i=e.hash;if(!i)throw Error("No transaction hash found.");l(Object(o.a)({hash:i,from:n,chainId:t,approval:c,summary:r}))}}),[l,t,n])}function i(){var e,t=Object(c.h)().chainId,n=Object(r.c)((function(e){return e.transactions}));return t&&null!==(e=n[t])&&void 0!==e?e:{}}function u(e,t){var n=i();return Object(a.useMemo)((function(){return"string"===typeof e&&"string"===typeof t&&Object.keys(n).some((function(a){var r=n[a];if(!r)return!1;if(r.receipt)return!1;var c=r.approval;return!!c&&(c.spender===t&&c.tokenAddress===e&&function(e){return(new Date).getTime()-e.addedTime<864e5}(r))}))}),[n,t,e])}},775:function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var a,r,c,o,l,i,u=n(25),s=n(0),m=n.n(s),d=n(21),f=n(754),b=d.d.div(a||(a=Object(u.a)(["\n  align-items: center;\n  background-color: ",";\n  border-radius: ","px;\n  display: flex;\n  padding: 0 ","px;\n"])),(function(e){return e.theme.color.grey[200]}),(function(e){return e.theme.borderRadius}),(function(e){return e.theme.spacing[3]})),p=d.d.input(r||(r=Object(u.a)(["\n  background: none;\n  border: 0;\n  color: ",";\n  font-size: 18px;\n  flex: 1;\n  height: 56px;\n  margin: 0;\n  padding: 0;\n  outline: none;\n"])),(function(e){return e.theme.color.grey[600]})),v=function(e){var t=e.endAdornment,n=e.onChange,a=e.placeholder,r=e.startAdornment,c=e.value;return m.a.createElement(b,null,!!r&&r,m.a.createElement(p,{placeholder:a,value:c,onChange:n}),!!t&&t)},O=d.d.div(c||(c=Object(u.a)([""]))),E=d.d.div(o||(o=Object(u.a)(["\n  width: ","px;\n"])),(function(e){return e.theme.spacing[3]})),h=d.d.div(l||(l=Object(u.a)(["\n  align-items: center;\n  display: flex;\n"]))),g=d.d.div(i||(i=Object(u.a)(["\n  align-items: center;\n  color: ",";\n  display: flex;\n  font-size: 14px;\n  font-weight: 700;\n  height: 44px;\n  justify-content: flex-end;\n"])),(function(e){return e.theme.color.grey[400]})),j=function(e){var t=e.max,n=e.symbol,a=e.onChange,r=e.onSelectMax,c=e.value;return m.a.createElement(O,null,m.a.createElement(g,null,t.toLocaleString()," ",n," Available"),m.a.createElement(v,{endAdornment:m.a.createElement(h,null,m.a.createElement(E,null),m.a.createElement("div",null,m.a.createElement(f.a,{size:"small",color:"primary",variant:"contained",onClick:r},"Max"))),onChange:a,placeholder:"0",value:c}))}},776:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var a,r,c,o=n(25),l=n(0),i=n.n(l),u=n(21),s=u.d.div(a||(a=Object(o.a)(["\n  align-items: center;\n  background-color: ","00;\n  display: flex;\n  height: 96px;\n  margin: ","px ","px\n    ","px;\n  padding: 0 ","px;\n"])),(function(e){return e.theme.color.grey[100]}),(function(e){return e.theme.spacing[4]}),(function(e){return-e.theme.spacing[4]}),(function(e){return-e.theme.spacing[4]}),(function(e){return e.theme.spacing[4]})),m=u.d.div(r||(r=Object(o.a)(["\n  flex: 1;\n"]))),d=u.d.div(c||(c=Object(o.a)(["\n  width: ","px;\n"])),(function(e){return e.theme.spacing[4]})),f=function(e){var t=e.children,n=i.a.Children.toArray(t).length;return i.a.createElement(s,null,i.a.Children.map(t,(function(e,t){return i.a.createElement(i.a.Fragment,null,i.a.createElement(m,null,e),t<n-1&&i.a.createElement(d,null))})))}},777:function(e,t,n){"use strict";var a=n(2),r=n.n(a),c=n(12),o=n(22),l=n(0),i=n(404);t.a=function(e,t,n){var a=Object(l.useState)(null),u=Object(o.a)(a,2),s=u[0],m=u[1],d=Object(i.h)().account,f=Object(l.useCallback)(Object(c.a)(r.a.mark((function n(){var a;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.allowance(d,t);case 2:a=n.sent,m(a);case 4:case"end":return n.stop()}}),n)}))),[d,t,e]);return Object(l.useEffect)((function(){d&&t&&e&&f().catch((function(e){return console.log("Failed to fetch allowance: ".concat(e.stack))}))}),[d,t,e,n,f]),s}},779:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(0),r=n.n(a),c=n(767),o=n(212),l=function(){return r.a.createElement(c.a,{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}},r.a.createElement(o.a,null))}},780:function(e,t,n){"use strict";var a=n(2),r=n.n(a),c=n(12),o=n(22),l=n(0),i=n(92),u=n(39);t.a=function(){var e=Object(l.useState)(),t=Object(o.a)(e,2),n=t[0],a=t[1],s=Object(i.a)(),m=Object(l.useCallback)(Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=a,e.next=3,s.getDanteStat();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)}))),[s]);return Object(l.useEffect)((function(){m().catch((function(e){return console.error("Failed to fetch TOMB price: ".concat(e.stack))}));var e=setInterval(m,u.b.refreshInterval);return function(){return clearInterval(e)}}),[a,s,m]),n}},782:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a,r=n(2),c=n.n(r),o=n(12),l=n(94),i=n(28),u=n(0),s=n(774),m=n(777),d=l.ethers.constants.MaxUint256,f=i.a.from("1000000000000000000000000");!function(e){e[e.UNKNOWN=0]="UNKNOWN",e[e.NOT_APPROVED=1]="NOT_APPROVED",e[e.PENDING=2]="PENDING",e[e.APPROVED=3]="APPROVED"}(a||(a={})),t.b=function(e,t){var n=Object(s.a)(e.address,t),r=Object(m.a)(e,t,n),l=Object(u.useMemo)((function(){return r?r.lt(f)?n?a.PENDING:a.NOT_APPROVED:a.APPROVED:a.UNKNOWN}),[r,n]),i=Object(s.b)(),b=Object(u.useCallback)(Object(o.a)(c.a.mark((function n(){var r;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(l===a.NOT_APPROVED){n.next=3;break}return console.error("approve was called unnecessarily"),n.abrupt("return");case 3:return n.next=5,e.approve(t,d);case 5:r=n.sent,i(r,{summary:"Approve ".concat(e.symbol),approval:{tokenAddress:e.address,spender:t}});case 7:case"end":return n.stop()}}),n)}))),[l,e,t,i]);return[l,b]}},784:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a,r=n(25),c=n(0),o=n.n(c),l=n(21),i=l.d.div(a||(a=Object(r.a)(["\n  height: ","px;\n  width: ","px;\n"])),(function(e){return e.size}),(function(e){return e.size})),u=function(e){var t,n=e.size,a=void 0===n?"md":n,r=Object(c.useContext)(l.a).spacing;switch(a){case"lg":t=r[6];break;case"sm":t=r[2];break;case"md":default:t=r[4]}return o.a.createElement(i,{size:t})}},785:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a,r=n(25),c=n(0),o=n.n(c),l=n(21).d.div(a||(a=Object(r.a)(["\n  font-size: 36px;\n  font-weight: 700;\n"]))),i=function(e){var t=e.value;return o.a.createElement(l,null,t)}},786:function(e,t,n){"use strict";var a=n(2),r=n.n(a),c=n(12),o=n(22),l=n(0),i=n(92),u=n(39);t.a=function(e){var t=Object(l.useState)(),n=Object(o.a)(t,2),a=n[0],s=n[1],m=Object(i.a)(),d=Object(l.useCallback)(Object(c.a)(r.a.mark((function t(){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=s,t.next=3,m.getLPStat(e);case 3:t.t1=t.sent,(0,t.t0)(t.t1);case 5:case"end":return t.stop()}}),t)}))),[m,e]);return Object(l.useEffect)((function(){d().catch((function(e){return console.error("Failed to fetch TOMB price: ".concat(e.stack))}));var e=setInterval(d,u.b.refreshInterval);return function(){return clearInterval(e)}}),[s,m,d]),a}},790:function(e,t,n){"use strict";var a=n(0),r=n(92),c=n(773);t.a=function(e){var t=Object(r.a)(),n=Object(c.a)();return{onZap:Object(a.useCallback)((function(a,r,c){n(t.zapIn(a,r,c),"Zap ".concat(c," in ").concat(e.depositTokenName,"."))}),[e,t,n])}}},792:function(e,t,n){"use strict";var a=n(2),r=n.n(a),c=n(12),o=n(22),l=n(0),i=n(92),u=n(39);t.a=function(){var e=Object(l.useState)(),t=Object(o.a)(e,2),n=t[0],a=t[1],s=Object(i.a)(),m=Object(l.useCallback)(Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=a,e.next=3,s.getShareStat();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)}))),[s]);return Object(l.useEffect)((function(){m().catch((function(e){return console.error("Failed to fetch TSHARE price: ".concat(e.stack))}));var e=setInterval(m,u.b.refreshInterval);return function(){return clearInterval(e)}}),[a,s,m]),n}},793:function(e,t,n){"use strict";var a=n(2),r=n.n(a),c=n(12),o=n(22),l=n(0),i=n(92),u=n(39);t.a=function(e,t){var n=Object(l.useState)("0"),a=Object(o.a)(n,2),s=a[0],m=a[1],d=Object(i.a)(),f=null===d||void 0===d?void 0:d.isUnlocked,b=Object(l.useCallback)(Object(c.a)(r.a.mark((function n(){var a;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,d.getDepositTokenPriceInDollars(e,t);case 2:a=n.sent,m(a);case 4:case"end":return n.stop()}}),n)}))),[t,e,d]);return Object(l.useEffect)((function(){if(f){b().catch((function(e){return console.error(e.stack)}));var e=setInterval(b,u.b.refreshInterval);return function(){return clearInterval(e)}}}),[f,m,d,b]),s}},795:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var a,r=n(0),c=n.n(r),o=n(21),l=n(25),i=o.d.div(a||(a=Object(l.a)([""]))),u=function(e){var t=e.children;return c.a.createElement(i,null,t)},s=function(e){var t=e.color,n=Object(r.useContext)(o.a).color;return c.a.createElement(u,null,c.a.createElement("svg",{height:"24",viewBox:"0 0 24 24",width:"24"},c.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),c.a.createElement("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z",fill:t||n.grey[400]})))},m=function(e){var t=e.color,n=Object(r.useContext)(o.a).color;return c.a.createElement(u,null,c.a.createElement("svg",{viewBox:"0 0 24 24",fill:t||n.grey[400],width:"18px",height:"18px"},c.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),c.a.createElement("path",{d:"M19 13H5v-2h14v2z"})))}},796:function(e,t,n){"use strict";var a,r=n(25),c=n(2),o=n.n(c),l=n(12),i=n(22),u=n(0),s=n.n(u),m=n(161),d=n(840),f=n(837),b=n(754),p=n(19),v=n(834),O=n(257),E=n(776),h=n(258),g=n(775),j=n(21),k=n(30),x=n(163),y=n(786),N=n(166),w=n(92),T=n(404),I=n(94),C=n(28),P=n(774),A=n(777),S=n(89),D=I.ethers.constants.MaxUint256,R=C.a.from("1000000000000000000000000");!function(e){e[e.UNKNOWN=0]="UNKNOWN",e[e.NOT_APPROVED=1]="NOT_APPROVED",e[e.PENDING=2]="PENDING",e[e.APPROVED=3]="APPROVED"}(a||(a={}));var M,F,z=function(e){var t,n=Object(w.a)();e===S.a?t=n.FTM:e===S.c?t=n.DANTE:e===S.d&&(t=n.TSHARE);var r=Object(P.a)(t.address,S.e),c=Object(A.a)(t,S.e,r),i=Object(u.useMemo)((function(){return t===n.FTM?a.APPROVED:c?c.lt(R)?r?a.PENDING:a.NOT_APPROVED:a.APPROVED:a.UNKNOWN}),[c,r,t,n]),s=Object(P.b)(),m=Object(u.useCallback)(Object(l.a)(o.a.mark((function e(){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i===a.NOT_APPROVED){e.next=3;break}return console.error("approve was called unnecessarily"),e.abrupt("return");case 3:return e.next=5,t.approve(S.e,D);case 5:n=e.sent,s(n,{summary:"Approve ".concat(t.symbol),approval:{tokenAddress:t.address,spender:S.e}});case 7:case"end":return e.stop()}}),e)}))),[i,t,s]);return[i,m]},U=n(823),V=j.d.div(M||(M=Object(r.a)(["\n  height: ","px;\n  width: ","px;\n"])),(function(e){return e.theme.spacing[4]}),(function(e){return e.theme.spacing[4]})),B=j.d.div(F||(F=Object(r.a)(["\n  align-items: center;\n  color: ",";\n  display: flex;\n  font-size: 14px;\n  font-weight: 700;\n  height: 22px;\n  justify-content: flex-start;\n"])),(function(e){return e.theme.color.grey[400]})),L=Object(p.a)({root:{backgroundColor:"white",color:"#2c2560","&:hover":{backgroundColor:"grey",color:"#2c2560"},selected:{backgroundColor:"black"}}})(v.a);t.a=function(e){var t=e.onConfirm,n=(e.onDismiss,e.tokenName),r=void 0===n?"":n,c=e.decimals,p=void 0===c?18:c,v=Object(w.a)(),j=Object(T.h)().balance,I=(Number(j)/1e18).toFixed(4).toString(),C=Object(N.a)(v.DANTE),P=Object(N.a)(v.TSHARE),A=Object(u.useState)(""),D=Object(i.a)(A,2),R=D[0],M=D[1],F=Object(u.useState)(S.a),W=Object(i.a)(F,2),G=W[0],_=W[1],H=Object(u.useState)(I),K=Object(i.a)(H,2),Z=K[0],$=K[1],q=Object(u.useState)({token0:"0",token1:"0"}),J=Object(i.a)(q,2),Y=J[0],Q=J[1],X=z(G),ee=Object(i.a)(X,2),te=ee[0],ne=ee[1],ae=Object(y.a)("DANTE-TOMB-LP"),re=Object(y.a)("GRAIL-FTM-LP"),ce=Object(u.useMemo)((function(){return ae||null}),[ae]),oe=Object(u.useMemo)((function(){return re||null}),[re]),le=r.startsWith(S.c)?null===ce||void 0===ce?void 0:ce.ftmAmount:null===oe||void 0===oe?void 0:oe.ftmAmount;var ie=function(){var e=Object(l.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==t.currentTarget.value&&0!==t.currentTarget.value||(M(t.currentTarget.value),Q({token0:"0",token1:"0"})),a=t.currentTarget.value,!isNaN(parseFloat(a))&&isFinite(a)){e.next=3;break}return e.abrupt("return");case 3:return M(t.currentTarget.value),e.next=6,v.estimateZapIn(G,r,String(t.currentTarget.value));case 6:n=e.sent,Q({token0:n[0].toString(),token1:n[1].toString()});case 8:case"end":return e.stop()}var a}),e)})));return function(t){return e.apply(this,arguments)}}(),ue=function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return M(Z),e.next=3,v.estimateZapIn(G,r,String(Z));case 3:t=e.sent,Q({token0:t[0].toString(),token1:t[1].toString()});case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return s.a.createElement(O.a,null,s.a.createElement(h.a,{text:"Zap in ".concat(r)}),s.a.createElement(m.a,{variant:"h6",align:"center"},"Powered by"," ",s.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://mlnl.finance"},"mlnl.finance")),s.a.createElement(V,null),s.a.createElement(d.a,{style:{color:"#2c2560"},id:"label"},"Select asset to zap with"),s.a.createElement(f.a,{onChange:function(e){var t=e.target.value;_(t),$(I),e.target.value===S.d&&$(Object(k.b)(P,p)),e.target.value===S.c&&$(Object(k.b)(C,p))},style:{color:"#2c2560"},labelId:"label",id:"select",value:G},s.a.createElement(L,{value:S.a},"FTM"),s.a.createElement(L,{value:S.c},"TOMB"),s.a.createElement(L,{value:S.d},"TSHARE")),s.a.createElement(g.a,{onSelectMax:ue,onChange:ie,value:R,max:Z,symbol:G}),s.a.createElement(x.a,{text:"Zap Estimations"}),s.a.createElement(B,null," ",r,": ",Number(Y.token0)/Number(le)),s.a.createElement(B,null," ","(",Number(Y.token0)," ",S.a," / ",Number(Y.token1)," ",r.startsWith(S.c)?S.c:S.d,")"," "),s.a.createElement(E.a,null,s.a.createElement(b.a,{color:"primary",variant:"contained",onClick:function(){return te!==a.APPROVED?ne():t(G,r,R)}},te!==a.APPROVED?"Approve":"Let's go")),s.a.createElement(V,null),s.a.createElement(U.a,{variant:"filled",severity:"warning"},"Beta feature. Use at your own risk!"))}},797:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var a,r,c,o=n(25),l=n(0),i=n.n(l),u=n(21),s=u.d.div(a||(a=Object(o.a)(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  padding-bottom: ","px;\n  padding-top: ","px;\n  max-width: 512px;\n  width: 100%;\n  margin: 0 auto;\n"])),(function(e){return e.theme.spacing[6]}),(function(e){return e.theme.spacing[6]})),m=u.d.h1(r||(r=Object(o.a)(["\n  color: ",";\n  font-size: 36px;\n  font-weight: 700;\n  margin: 0;\n  padding: 0;\n"])),(function(e){return e.theme.color.grey[100]})),d=u.d.h3(c||(c=Object(o.a)(["\n  color: ",";\n  font-size: 18px;\n  font-weight: 400;\n  margin: 0;\n  padding: 0;\n  text-align: center;\n"])),(function(e){return e.theme.color.grey[400]})),f=function(e){e.icon;var t=e.subtitle,n=e.title;return i.a.createElement(s,null,i.a.createElement(m,null,n),i.a.createElement(d,null,t))}},798:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a,r,c=n(25),o=n(0),l=n.n(o),i=n(21),u=n(69),s=i.d.button(a||(a=Object(c.a)(["\n  align-items: center;\n  // background-color: ",";\n  background-color: ",";\n  border: 0;\n  border-radius: 28px;\n  color: ",";\n  cursor: pointer;\n  display: flex;\n  font-weight: 700;\n  height: 56px;\n  justify-content: center;\n  letter-spacing: 1px;\n  outline: none;\n  padding: 0;\n  margin: 0;\n  pointer-events: ",";\n  text-transform: uppercase;\n  width: 56px;\n  &:hover {\n    // background-color: ",";\n    background-color: #2c2560;\n  }\n"])),(function(e){return e.theme.color.grey[e.disabled?900:700]}),(function(e){return e.disabled?e.theme.color.grey[900]:"#571eb1"}),(function(e){return e.disabled?e.theme.color.grey[500]:e.theme.color.primary.main}),(function(e){return e.disabled?"none":void 0}),(function(e){return e.theme.color.grey[800]})),m=Object(i.d)(u.b)(r||(r=Object(c.a)(["\n  align-items: center;\n  color: inherit;\n  display: flex;\n  flex: 1;\n  height: 56px;\n  justify-content: center;\n  margin: 0 ","px;\n  padding: 0 ","px;\n  text-decoration: none;\n"])),(function(e){return-e.theme.spacing[4]}),(function(e){return e.theme.spacing[4]})),d=function(e){var t=e.children,n=e.disabled,a=e.onClick,r=e.to;return l.a.createElement(s,{disabled:n,onClick:a},r?l.a.createElement(m,{to:r},t):t)}},816:function(e,t,n){"use strict";var a=n(207),r=n(208);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=r(n(0)),o=(0,a(n(209)).default)(c.createElement("path",{d:"M7 2v11h3v9l7-12h-4l4-8z"}),"FlashOn");t.default=o},817:function(e,t,n){e.exports=n.p+"static/media/purgatory.f27e2f89.png"},836:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return Qe}));var a,r,c,o,l,i,u,s,m,d,f,b,p,v=n(22),O=n(25),E=n(0),h=n.n(E),g=n(404),j=n(46),k=n(56),x=n(21),y=n(746),N=n(767),w=n(748),T=n(801),I=n(815),C=n(161),P=n(754),A=n(797),S=n(784),D=n(779),R=n(163),M=n(785),F=n(2),z=n.n(F),U=n(12),V=n(28),B=n(92),L=n(39),W=function(e,t,n){var a=Object(E.useState)(V.a.from(0)),r=Object(v.a)(a,2),c=r[0],o=r[1],l=Object(B.a)(),i=null===l||void 0===l?void 0:l.isUnlocked,u=Object(E.useCallback)(Object(U.a)(z.a.mark((function a(){var r;return z.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,l.earnedFromBank(e,t,n,l.myAccount);case 2:r=a.sent,o(r);case 4:case"end":return a.stop()}}),a)}))),[e,t,n,l]);return Object(E.useEffect)((function(){if(i){u().catch((function(e){return console.error(e.stack)}));var e=setInterval(u,L.b.refreshInterval);return function(){return clearInterval(e)}}}),[i,e,l,u]),c},G=n(773),_=function(e){var t=Object(B.a)(),n=Object(G.a)();return{onReward:Object(E.useCallback)((function(){n(t.harvest(e.contract,e.poolId),"Claim ".concat(e.earnTokenName," from ").concat(e.contract))}),[e,t,n])}},H=n(30),K=n(164),Z=n(780),$=n(792),q=x.d.div(a||(a=Object(O.a)(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n"]))),J=x.d.div(r||(r=Object(O.a)(["\n  display: flex;\n  justify-content: center;\n  margin-top: ","px;\n  width: 100%;\n"])),(function(e){return e.theme.spacing[6]})),Y=x.d.div(c||(c=Object(O.a)(["\n  align-items: center;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: space-between;\n"]))),Q=function(e){var t=e.bank,n=W(t.contract,t.earnTokenName,t.poolId),a=_(t).onReward,r=Object(Z.a)(),c=Object($.a)(),o="GRAIL"===t.earnTokenName?"GRAIL":"DANTE",l="GRAIL"===t.earnTokenName?c:r,i=Object(E.useMemo)((function(){return l?Number(l.priceInDollars).toFixed(2):null}),[l]),u=(Number(i)*Number(Object(H.b)(n))).toFixed(2);return h.a.createElement(T.a,null,h.a.createElement(I.a,null,h.a.createElement(Y,null,h.a.createElement(q,null,h.a.createElement(K.a,{symbol:t.earnToken.symbol}),h.a.createElement(M.a,{value:Object(H.b)(n)}),h.a.createElement(R.a,{text:"\u2248 $".concat(u)}),h.a.createElement(R.a,{text:"".concat(o," Earned")})),h.a.createElement(J,null,h.a.createElement(P.a,{onClick:a,disabled:n.eq(0),color:"primary",variant:"contained"},"Claim")))))},X=n(795),ee=n(816),te=n.n(ee),ne=n(798),ae=n(782),re=n(259),ce=n(73),oe=function(e){var t=Object(B.a)(),n=Object(G.a)();return{onStake:Object(E.useCallback)((function(a){var r=Object(ce.parseUnits)(a,e.depositToken.decimal);n(t.stake(e.contract,e.poolId,r),"Stake ".concat(a," ").concat(e.depositTokenName," to ").concat(e.contract))}),[e,t,n])}},le=n(790),ie=function(e,t){var n=Object(E.useState)(V.a.from(0)),a=Object(v.a)(n,2),r=a[0],c=a[1],o=Object(B.a)(),l=null===o||void 0===o?void 0:o.isUnlocked,i=Object(E.useCallback)(Object(U.a)(z.a.mark((function n(){var a;return z.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.stakedBalanceOnBank(e,t,o.myAccount);case 2:a=n.sent,c(a);case 4:case"end":return n.stop()}}),n)}))),[e,t,o]);return Object(E.useEffect)((function(){if(l){i().catch((function(e){return console.error(e.stack)}));var e=setInterval(i,L.b.refreshInterval);return function(){return clearInterval(e)}}}),[l,e,c,o,i]),r},ue=n(793),se=n(166),me=function(e){var t=Object(B.a)(),n=Object(G.a)();return{onWithdraw:Object(E.useCallback)((function(a){var r=Object(ce.parseUnits)(a,e.depositToken.decimal);n(t.unstake(e.contract,e.poolId,r),"Withdraw ".concat(a," ").concat(e.depositTokenName," from ").concat(e.contract))}),[e,t,n])}},de=n(257),fe=n(776),be=n(258),pe=n(775),ve=function(e){var t=e.max,n=e.decimals,a=e.onConfirm,r=(e.onDismiss,e.tokenName),c=void 0===r?"":r,o=Object(E.useState)(""),l=Object(v.a)(o,2),i=l[0],u=l[1],s=Object(E.useMemo)((function(){return Object(H.c)(t,n,!1)}),[t,n]),m=Object(E.useCallback)((function(e){u(e.currentTarget.value)}),[u]),d=Object(E.useCallback)((function(){u(s)}),[s,u]);return h.a.createElement(de.a,null,h.a.createElement(be.a,{text:"Deposit ".concat(c)}),h.a.createElement(pe.a,{value:i,onSelectMax:d,onChange:m,max:s,symbol:c}),h.a.createElement(fe.a,null,h.a.createElement(P.a,{color:"primary",variant:"contained",onClick:function(){return a(i)}},"Confirm")))},Oe=function(e){var t=e.onConfirm,n=(e.onDismiss,e.max),a=e.tokenName,r=void 0===a?"":a,c=e.decimals,o=void 0===c?18:c,l=Object(E.useState)(""),i=Object(v.a)(l,2),u=i[0],s=i[1],m=Object(E.useMemo)((function(){return Object(H.c)(n,o,!1)}),[n,o]),d=Object(E.useCallback)((function(e){s(e.currentTarget.value)}),[s]),f=Object(E.useCallback)((function(){s(m)}),[m,s]);return h.a.createElement(de.a,null,h.a.createElement(be.a,{text:"Withdraw ".concat(r)}),h.a.createElement(pe.a,{onSelectMax:f,onChange:d,value:u,max:m,symbol:r}),h.a.createElement(fe.a,null,h.a.createElement(P.a,{color:"primary",variant:"contained",onClick:function(){return t(u)}},"Confirm")))},Ee=n(796),he=x.d.div(o||(o=Object(O.a)(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n"]))),ge=x.d.div(l||(l=Object(O.a)(["\n  display: flex;\n  justify-content: center;\n  margin-top: 28px;\n  width: 100%;\n"]))),je=x.d.div(i||(i=Object(O.a)(["\n  height: ","px;\n  width: ","px;\n"])),(function(e){return e.theme.spacing[4]}),(function(e){return e.theme.spacing[4]})),ke=x.d.div(u||(u=Object(O.a)(["\n  align-items: center;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: space-between;\n"]))),xe=function(e){var t=e.bank,n=Object(ae.b)(t.depositToken,t.address),a=Object(v.a)(n,2),r=a[0],c=a[1],o=Object(E.useContext)(x.a).color,l=Object(se.a)(t.depositToken),i=ie(t.contract,t.poolId),u=Object(ue.a)(t.depositTokenName,t.depositToken),s=Object(E.useMemo)((function(){return u||null}),[u]),m=(Number(s)*Number(Object(H.b)(i,t.depositToken.decimal))).toFixed(2),d=oe(t).onStake,f=Object(le.a)(t).onZap,b=me(t).onWithdraw,p=Object(re.a)(h.a.createElement(ve,{max:l,decimals:t.depositToken.decimal,onConfirm:function(e){Number(e)<=0||isNaN(Number(e))||(d(e),j())},tokenName:t.depositTokenName})),O=Object(v.a)(p,2),g=O[0],j=O[1],k=Object(re.a)(h.a.createElement(Ee.a,{decimals:t.depositToken.decimal,onConfirm:function(e,t,n){Number(n)<=0||isNaN(Number(n))||(f(e,t,n),w())},tokenName:t.depositTokenName})),y=Object(v.a)(k,2),N=y[0],w=y[1],C=Object(re.a)(h.a.createElement(Oe,{max:i,decimals:t.depositToken.decimal,onConfirm:function(e){Number(e)<=0||isNaN(Number(e))||(b(e),D())},tokenName:t.depositTokenName})),A=Object(v.a)(C,2),S=A[0],D=A[1];return h.a.createElement(T.a,null,h.a.createElement(I.a,null,h.a.createElement(ke,null,h.a.createElement(he,null,h.a.createElement(K.a,{symbol:t.depositToken.symbol}),h.a.createElement(M.a,{value:Object(H.b)(i,t.depositToken.decimal)}),h.a.createElement(R.a,{text:"\u2248 $".concat(m)}),h.a.createElement(R.a,{text:"".concat(t.depositTokenName," Staked")})),h.a.createElement(ge,null,r!==ae.a.APPROVED?h.a.createElement(P.a,{disabled:t.closedForStaking||r===ae.a.PENDING||r===ae.a.UNKNOWN,onClick:c,color:"primary",variant:"contained",style:{marginTop:"20px"}},"Approve ".concat(t.depositTokenName)):h.a.createElement(h.a.Fragment,null,h.a.createElement(ne.a,{onClick:S},h.a.createElement(X.b,null)),h.a.createElement(je,null),h.a.createElement(ne.a,{disabled:t.closedForStaking,onClick:function(){return t.closedForStaking?null:N()}},h.a.createElement(te.a,{style:{color:o.grey[400]}})),h.a.createElement(je,null),h.a.createElement(ne.a,{disabled:t.closedForStaking,onClick:function(){return t.closedForStaking?null:g()}},h.a.createElement(X.a,null)))))))},ye=n(267),Ne=function(e){return Object(E.useContext)(ye.a).banks.find((function(t){return t.contract===e}))},we=function(e){var t=Object(B.a)(),n=Object(E.useState)(),a=Object(v.a)(n,2),r=a[0],c=a[1],o=Object(E.useCallback)(Object(U.a)(z.a.mark((function n(){return z.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.t0=c,n.next=3,t.getPoolAPRs(e);case 3:n.t1=n.sent,(0,n.t0)(n.t1);case 5:case"end":return n.stop()}}),n)}))),[t,e]);return Object(E.useEffect)((function(){o().catch((function(e){return console.error("Failed to fetch TBOND price: ".concat(e.stack))}));var e=setInterval(o,L.b.refreshInterval);return function(){return clearInterval(e)}}),[c,t,o]),r},Te=function(e){var t=Object(B.a)(),n=Object(G.a)();return{onRedeem:Object(E.useCallback)((function(){n(t.exit(e.contract,e.poolId),"Redeem ".concat(e.contract))}),[e,t,n])}},Ie=Object(y.a)((function(e){return{gridItem:Object(k.a)({height:"100%"},e.breakpoints.up("md"),{height:"90px"})}})),Ce=function(e){var t,n,a=e.bank,r=Object(B.a)(),c=r.DANTE.address,o=r.TSHARE.address;return a.depositTokenName.includes("DANTE")?(t="TOMB-FTM pair",n="https://spookyswap.finance/add/FTM/"+c):(t="TSHARE-FTM pair",n="https://spookyswap.finance/add/FTM/"+o),h.a.createElement(T.a,null,h.a.createElement(I.a,null,h.a.createElement(Se,{href:n,target:"_blank"},"\ud83d\udc7b Provide liquidity for ".concat(t," now on SpookySwap \ud83d\udc7b"))))},Pe=function(){return h.a.createElement(Me,null,h.a.createElement(A.a,{icon:"\ud83c\udfda",title:"Not Found",subtitle:"You've hit a bank just robbed by unicorns."}))},Ae=x.d.div(s||(s=Object(O.a)(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  @media (max-width: 768px) {\n    width: 100%;\n  }\n"]))),Se=x.d.a(m||(m=Object(O.a)(["\n  font-weight: 700;\n  text-decoration: none;\n  color: ",";\n"])),(function(e){return e.theme.color.primary.main})),De=x.d.div(d||(d=Object(O.a)(["\n  display: flex;\n  width: 600px;\n  @media (max-width: 768px) {\n    width: 100%;\n    flex-flow: column nowrap;\n    align-items: center;\n  }\n"]))),Re=x.d.div(f||(f=Object(O.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  @media (max-width: 768px) {\n    width: 80%;\n  }\n"]))),Me=x.d.div(b||(b=Object(O.a)(["\n  display: flex;\n  flex: 1;\n  align-items: center;\n  justify-content: center;\n"]))),Fe=function(){Object(E.useEffect)((function(){return window.scrollTo(0,0)}));var e=Ie(),t=Object(j.f)().bankId,n=Ne(t),a=Object(g.h)().account,r=Te(n).onRedeem,c=we(n);A.a,"Deposit ".concat(null===n||void 0===n?void 0:n.depositTokenName," and earn ").concat(null===n||void 0===n?void 0:n.earnTokenName),null===n||void 0===n||n.name;return a&&n?h.a.createElement(h.a.Fragment,null,h.a.createElement(N.a,null,h.a.createElement(w.a,{container:!0,justify:"center",spacing:3,style:{marginBottom:"50px"}},h.a.createElement(w.a,{item:!0,xs:12,md:2,lg:2,className:e.gridItem},h.a.createElement(T.a,{className:e.gridItem},h.a.createElement(I.a,{style:{textAlign:"center"}},h.a.createElement(C.a,null,"APR"),h.a.createElement(C.a,null,n.closedForStaking?"0.00":null===c||void 0===c?void 0:c.yearlyAPR,"%")))),h.a.createElement(w.a,{item:!0,xs:12,md:2,lg:2,className:e.gridItem},h.a.createElement(T.a,{className:e.gridItem},h.a.createElement(I.a,{style:{textAlign:"center"}},h.a.createElement(C.a,null,"Daily APR"),h.a.createElement(C.a,null,n.closedForStaking?"0.00":null===c||void 0===c?void 0:c.dailyAPR,"%")))),h.a.createElement(w.a,{item:!0,xs:12,md:2,lg:2,className:e.gridItem},h.a.createElement(T.a,{className:e.gridItem},h.a.createElement(I.a,{style:{textAlign:"center"}},h.a.createElement(C.a,null,"TVL"),h.a.createElement(C.a,null,"$",null===c||void 0===c?void 0:c.TVL)))))),h.a.createElement(N.a,{mt:5},h.a.createElement(Ae,null,h.a.createElement(De,null,h.a.createElement(Re,null,h.a.createElement(Q,{bank:n})),h.a.createElement(S.a,null),h.a.createElement(Re,null,h.a.createElement(xe,{bank:n}))),h.a.createElement(S.a,{size:"lg"}),n.depositTokenName.includes("LP")&&h.a.createElement(Ce,{bank:n}),h.a.createElement(S.a,{size:"lg"}),h.a.createElement("div",null,h.a.createElement(P.a,{onClick:r,color:"primary",variant:"contained"},"Claim & Withdraw")),h.a.createElement(S.a,{size:"lg"})))):n?h.a.createElement(D.a,null):h.a.createElement(Pe,null)},ze=n(747),Ue=n(823),Ve=n(260),Be=n(69),Le=n(5),We=n(10),Ge=n(13),_e=n(19),He=E.forwardRef((function(e,t){var n=e.disableSpacing,a=void 0!==n&&n,r=e.classes,c=e.className,o=Object(We.a)(e,["disableSpacing","classes","className"]);return E.createElement("div",Object(Le.a)({className:Object(Ge.a)(r.root,c,!a&&r.spacing),ref:t},o))})),Ke=Object(_e.a)({root:{display:"flex",alignItems:"center",padding:8},spacing:{"& > :not(:first-child)":{marginLeft:8}}},{name:"MuiCardActions"})(He),Ze=function(e){var t=e.bank;return h.a.createElement(w.a,{item:!0,xs:12,md:4,lg:4},h.a.createElement(T.a,{className:".custom-dante-box",variant:"outlined"},h.a.createElement(I.a,null,h.a.createElement(N.a,{style:{position:"relative"}},h.a.createElement(N.a,{style:{position:"absolute",right:"0px",top:"-5px",height:"48px",width:"48px",alignItems:"center",display:"flex",justifyContent:"center"}},h.a.createElement(K.a,{size:64,symbol:t.depositTokenName})),h.a.createElement(C.a,{variant:"h5",component:"h2"},t.depositTokenName),h.a.createElement(C.a,{color:"textSecondary"},"Deposit ",t.depositTokenName.toUpperCase()," Earn "," ".concat(t.earnTokenName)))),h.a.createElement(Ke,{style:{justifyContent:"flex-end"}},h.a.createElement(P.a,{color:"primary",size:"small",variant:"contained",component:Be.b,to:"/cemetery/".concat(t.contract)},"View"))))},$e=n(817),qe=n.n($e),Je=function(){return[Object(E.useContext)(ye.a).banks]},Ye=Object(x.c)(p||(p=Object(O.a)(["\n  body {\n    background: url(",") no-repeat !important;\n    background-size: cover !important;\n  }\n"])),qe.a),Qe=function(){var e=Je(),t=Object(v.a)(e,1)[0],n=Object(j.g)().path,a=Object(g.h)().account,r=t.filter((function(e){return!e.finished}));return h.a.createElement(j.c,null,h.a.createElement(Ve.a,null,h.a.createElement(j.a,{exact:!0,path:n},h.a.createElement(Ye,null),a?h.a.createElement(ze.a,{maxWidth:"lg"},h.a.createElement(C.a,{color:"textPrimary",align:"center",variant:"h3",gutterBottom:!0},"Purgatory"),h.a.createElement(N.a,{mt:5},h.a.createElement("div",{hidden:0===r.filter((function(e){return 2===e.sectionInUI})).length},h.a.createElement(C.a,{color:"textPrimary",variant:"h4",gutterBottom:!0},"Earn TSHARE by staking LP"),h.a.createElement(w.a,{container:!0,spacing:3},r.filter((function(e){return 2===e.sectionInUI})).map((function(e){return h.a.createElement(h.a.Fragment,{key:e.name},h.a.createElement(Ze,{bank:e}))})))),h.a.createElement("div",{hidden:0===r.filter((function(e){return 1===e.sectionInUI})).length},h.a.createElement(C.a,{color:"textPrimary",variant:"h4",gutterBottom:!0,style:{marginTop:"20px"}},"Earn TOMB by staking LP"),h.a.createElement(Ue.a,{variant:"filled",severity:"warning"},"All below pools have ended. Please unstake and collect your rewards."),h.a.createElement(w.a,{container:!0,spacing:3,style:{marginTop:"20px"}},r.filter((function(e){return 1===e.sectionInUI})).map((function(e){return h.a.createElement(h.a.Fragment,{key:e.name},h.a.createElement(Ze,{bank:e}))})))),h.a.createElement("div",{hidden:0===r.filter((function(e){return 0===e.sectionInUI})).length},h.a.createElement(C.a,{color:"textPrimary",variant:"h4",gutterBottom:!0,style:{marginTop:"20px"}},"Genesis Pools"),h.a.createElement(w.a,{container:!0,spacing:3},r.filter((function(e){return 0===e.sectionInUI})).map((function(e){return h.a.createElement(h.a.Fragment,{key:e.name},h.a.createElement(Ze,{bank:e}))})))))):h.a.createElement(D.a,null)),h.a.createElement(j.a,{path:"".concat(n,"/:bankId")},h.a.createElement(Ye,null),h.a.createElement(Fe,null))))}}}]);
//# sourceMappingURL=5.d81fe848.chunk.js.map
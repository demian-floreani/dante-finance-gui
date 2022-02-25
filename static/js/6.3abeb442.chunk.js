(this["webpackJsonptomb.finance"]=this["webpackJsonptomb.finance"]||[]).push([[6],{773:function(e,t,n){"use strict";var a=n(0),r=n(774),c=n(114);t.a=function(){var e=Object(r.b)(),t=Object(c.b)();return Object(a.useCallback)((function(n,a){n.then((function(t){return e(t,{summary:a})})).catch((function(e){if(!e.message.includes("User denied")){var n="Unable to ".concat(a[0].toLowerCase()).concat(a.slice(1));console.error("".concat(n,": ").concat(e.message||e.stack)),t({error:{message:n,stack:e.message||e.stack}})}}))}),[t,e])}},774:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return u}));var a=n(0),r=n(54),c=n(405),o=n(100);function l(){var e=Object(c.h)(),t=e.chainId,n=e.account,l=Object(r.b)();return Object(a.useCallback)((function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=a.summary,c=a.approval;if(n&&t){var i=e.hash;if(!i)throw Error("No transaction hash found.");l(Object(o.a)({hash:i,from:n,chainId:t,approval:c,summary:r}))}}),[l,t,n])}function i(){var e,t=Object(c.h)().chainId,n=Object(r.c)((function(e){return e.transactions}));return t&&null!==(e=n[t])&&void 0!==e?e:{}}function u(e,t){var n=i();return Object(a.useMemo)((function(){return"string"===typeof e&&"string"===typeof t&&Object.keys(n).some((function(a){var r=n[a];if(!r)return!1;if(r.receipt)return!1;var c=r.approval;return!!c&&(c.spender===t&&c.tokenAddress===e&&function(e){return(new Date).getTime()-e.addedTime<864e5}(r))}))}),[n,t,e])}},775:function(e,t,n){"use strict";n.d(t,"a",(function(){return E}));var a,r,c,o,l,i,u=n(25),s=n(0),m=n.n(s),d=n(21),f=n(754),b=d.d.div(a||(a=Object(u.a)(["\n  align-items: center;\n  background-color: ",";\n  border-radius: ","px;\n  display: flex;\n  padding: 0 ","px;\n"])),(function(e){return e.theme.color.grey[200]}),(function(e){return e.theme.borderRadius}),(function(e){return e.theme.spacing[3]})),p=d.d.input(r||(r=Object(u.a)(["\n  background: none;\n  border: 0;\n  color: ",";\n  font-size: 18px;\n  flex: 1;\n  height: 56px;\n  margin: 0;\n  padding: 0;\n  outline: none;\n"])),(function(e){return e.theme.color.grey[600]})),v=function(e){var t=e.endAdornment,n=e.onChange,a=e.placeholder,r=e.startAdornment,c=e.value;return m.a.createElement(b,null,!!r&&r,m.a.createElement(p,{placeholder:a,value:c,onChange:n}),!!t&&t)},h=d.d.div(c||(c=Object(u.a)([""]))),O=d.d.div(o||(o=Object(u.a)(["\n  width: ","px;\n"])),(function(e){return e.theme.spacing[3]})),j=d.d.div(l||(l=Object(u.a)(["\n  align-items: center;\n  display: flex;\n"]))),g=d.d.div(i||(i=Object(u.a)(["\n  align-items: center;\n  color: ",";\n  display: flex;\n  font-size: 14px;\n  font-weight: 700;\n  height: 44px;\n  justify-content: flex-end;\n"])),(function(e){return e.theme.color.grey[400]})),E=function(e){var t=e.max,n=e.symbol,a=e.onChange,r=e.onSelectMax,c=e.value;return m.a.createElement(h,null,m.a.createElement(g,null,t.toLocaleString()," ",n," Available"),m.a.createElement(v,{endAdornment:m.a.createElement(j,null,m.a.createElement(O,null),m.a.createElement("div",null,m.a.createElement(f.a,{size:"small",color:"primary",variant:"contained",onClick:r},"Max"))),onChange:a,placeholder:"0",value:c}))}},776:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var a,r,c,o=n(25),l=n(0),i=n.n(l),u=n(21),s=u.d.div(a||(a=Object(o.a)(["\n  align-items: center;\n  background-color: ","00;\n  display: flex;\n  height: 96px;\n  margin: ","px ","px\n    ","px;\n  padding: 0 ","px;\n"])),(function(e){return e.theme.color.grey[100]}),(function(e){return e.theme.spacing[4]}),(function(e){return-e.theme.spacing[4]}),(function(e){return-e.theme.spacing[4]}),(function(e){return e.theme.spacing[4]})),m=u.d.div(r||(r=Object(o.a)(["\n  flex: 1;\n"]))),d=u.d.div(c||(c=Object(o.a)(["\n  width: ","px;\n"])),(function(e){return e.theme.spacing[4]})),f=function(e){var t=e.children,n=i.a.Children.toArray(t).length;return i.a.createElement(s,null,i.a.Children.map(t,(function(e,t){return i.a.createElement(i.a.Fragment,null,i.a.createElement(m,null,e),t<n-1&&i.a.createElement(d,null))})))}},777:function(e,t,n){"use strict";var a=n(2),r=n.n(a),c=n(12),o=n(22),l=n(0),i=n(405);t.a=function(e,t,n){var a=Object(l.useState)(null),u=Object(o.a)(a,2),s=u[0],m=u[1],d=Object(i.h)().account,f=Object(l.useCallback)(Object(c.a)(r.a.mark((function n(){var a;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.allowance(d,t);case 2:a=n.sent,m(a);case 4:case"end":return n.stop()}}),n)}))),[d,t,e]);return Object(l.useEffect)((function(){d&&t&&e&&f().catch((function(e){return console.log("Failed to fetch allowance: ".concat(e.stack))}))}),[d,t,e,n,f]),s}},779:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(0),r=n.n(a),c=n(767),o=n(212),l=function(){return r.a.createElement(c.a,{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}},r.a.createElement(o.a,null))}},780:function(e,t,n){"use strict";var a=n(2),r=n.n(a),c=n(12),o=n(22),l=n(0),i=n(92),u=n(39);t.a=function(){var e=Object(l.useState)(),t=Object(o.a)(e,2),n=t[0],a=t[1],s=Object(i.a)(),m=Object(l.useCallback)(Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=a,e.next=3,s.getDanteStat();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)}))),[s]);return Object(l.useEffect)((function(){m().catch((function(e){return console.error("Failed to fetch TOMB price: ".concat(e.stack))}));var e=setInterval(m,u.b.refreshInterval);return function(){return clearInterval(e)}}),[a,s,m]),n}},782:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a,r=n(2),c=n.n(r),o=n(12),l=n(94),i=n(28),u=n(0),s=n(774),m=n(777),d=l.ethers.constants.MaxUint256,f=i.a.from("1000000000000000000000000");!function(e){e[e.UNKNOWN=0]="UNKNOWN",e[e.NOT_APPROVED=1]="NOT_APPROVED",e[e.PENDING=2]="PENDING",e[e.APPROVED=3]="APPROVED"}(a||(a={})),t.b=function(e,t){var n=Object(s.a)(e.address,t),r=Object(m.a)(e,t,n),l=Object(u.useMemo)((function(){return r?r.lt(f)?n?a.PENDING:a.NOT_APPROVED:a.APPROVED:a.UNKNOWN}),[r,n]),i=Object(s.b)(),b=Object(u.useCallback)(Object(o.a)(c.a.mark((function n(){var r;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(l===a.NOT_APPROVED){n.next=3;break}return console.error("approve was called unnecessarily"),n.abrupt("return");case 3:return n.next=5,e.approve(t,d);case 5:r=n.sent,i(r,{summary:"Approve ".concat(e.symbol),approval:{tokenAddress:e.address,spender:t}});case 7:case"end":return n.stop()}}),n)}))),[l,e,t,i]);return[l,b]}},784:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a,r=n(25),c=n(0),o=n.n(c),l=n(21),i=l.d.div(a||(a=Object(r.a)(["\n  height: ","px;\n  width: ","px;\n"])),(function(e){return e.size}),(function(e){return e.size})),u=function(e){var t,n=e.size,a=void 0===n?"md":n,r=Object(c.useContext)(l.a).spacing;switch(a){case"lg":t=r[6];break;case"sm":t=r[2];break;case"md":default:t=r[4]}return o.a.createElement(i,{size:t})}},792:function(e,t,n){"use strict";var a=n(2),r=n.n(a),c=n(12),o=n(22),l=n(0),i=n(92),u=n(39);t.a=function(e,t){var n=Object(l.useState)("0"),a=Object(o.a)(n,2),s=a[0],m=a[1],d=Object(i.a)(),f=null===d||void 0===d?void 0:d.isUnlocked,b=Object(l.useCallback)(Object(c.a)(r.a.mark((function n(){var a;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,d.getDepositTokenPriceInDollars(e,t);case 2:a=n.sent,m(a);case 4:case"end":return n.stop()}}),n)}))),[t,e,d]);return Object(l.useEffect)((function(){if(f){b().catch((function(e){return console.error(e.stack)}));var e=setInterval(b,u.b.refreshInterval);return function(){return clearInterval(e)}}}),[f,m,d,b]),s}},794:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var a,r=n(0),c=n.n(r),o=n(21),l=n(25),i=o.d.div(a||(a=Object(l.a)([""]))),u=function(e){var t=e.children;return c.a.createElement(i,null,t)},s=function(e){var t=e.color,n=Object(r.useContext)(o.a).color;return c.a.createElement(u,null,c.a.createElement("svg",{height:"24",viewBox:"0 0 24 24",width:"24"},c.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),c.a.createElement("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z",fill:t||n.grey[400]})))},m=function(e){var t=e.color,n=Object(r.useContext)(o.a).color;return c.a.createElement(u,null,c.a.createElement("svg",{viewBox:"0 0 24 24",fill:t||n.grey[400],width:"18px",height:"18px"},c.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),c.a.createElement("path",{d:"M19 13H5v-2h14v2z"})))}},796:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a,r,c=n(25),o=n(0),l=n.n(o),i=n(21),u=n(69),s=i.d.button(a||(a=Object(c.a)(["\n  align-items: center;\n  // background-color: ",";\n  background-color: ",";\n  border: 0;\n  border-radius: 28px;\n  color: ",";\n  cursor: pointer;\n  display: flex;\n  font-weight: 700;\n  height: 56px;\n  justify-content: center;\n  letter-spacing: 1px;\n  outline: none;\n  padding: 0;\n  margin: 0;\n  pointer-events: ",";\n  text-transform: uppercase;\n  width: 56px;\n  &:hover {\n    // background-color: ",";\n    background-color: #2c2560;\n  }\n"])),(function(e){return e.theme.color.grey[e.disabled?900:700]}),(function(e){return e.disabled?e.theme.color.grey[900]:"#571eb1"}),(function(e){return e.disabled?e.theme.color.grey[500]:e.theme.color.primary.main}),(function(e){return e.disabled?"none":void 0}),(function(e){return e.theme.color.grey[800]})),m=Object(i.d)(u.b)(r||(r=Object(c.a)(["\n  align-items: center;\n  color: inherit;\n  display: flex;\n  flex: 1;\n  height: 56px;\n  justify-content: center;\n  margin: 0 ","px;\n  padding: 0 ","px;\n  text-decoration: none;\n"])),(function(e){return-e.theme.spacing[4]}),(function(e){return e.theme.spacing[4]})),d=function(e){var t=e.children,n=e.disabled,a=e.onClick,r=e.to;return l.a.createElement(s,{disabled:n,onClick:a},r?l.a.createElement(m,{to:r},t):t)}},817:function(e,t,n){e.exports=n.p+"static/media/eden.f27e2f89.png"},833:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return Le}));var a,r,c,o,l,i,u,s,m,d,f,b,p,v,h,O=n(56),j=n(25),g=n(0),E=n.n(g),x=n(405),k=n(249),y=n.n(k),w=n(21),C=n(784),I=n(767),S=n(799),N=n(813),A=n(754),T=n(161),D=n(163),R=n(22),M=n(92),F=function(){var e=Object(g.useState)({from:new Date,to:new Date}),t=Object(R.a)(e,2),n=t[0],a=t[1],r=Object(M.a)();return Object(g.useEffect)((function(){r&&r.getUserClaimRewardTime().then(a)}),[r]),n},P=n(2),z=n.n(P),U=n(12),W=n(39),G=function(){var e=Object(g.useState)(!1),t=Object(R.a)(e,2),n=t[0],a=t[1],r=Object(M.a)(),c=null===r||void 0===r?void 0:r.isUnlocked,o=Object(g.useCallback)(Object(U.a)(z.a.mark((function e(){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=a,e.next=3,r.canUserClaimRewardFromMasonry();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)}))),[r]);return Object(g.useEffect)((function(){if(c){o().catch((function(e){return console.error(e.stack)}));var e=setInterval(o,W.b.refreshInterval);return function(){return clearInterval(e)}}}),[c,o,r]),n},B=n(816),H=w.d.p(a||(a=Object(j.a)(["\n  // font-size: 14px;\n  font-weight: 700;\n  // color: ",";\n  margin: 0 0 6px 0;\n"])),(function(e){return e.theme.color.grey[100]})),L=w.d.div(r||(r=Object(j.a)(["\n  width: 100%;\n  height: 8px;\n  border-radius: 3px;\n  background: ",";\n"])),(function(e){return e.theme.color.grey[700]})),V=w.d.div(c||(c=Object(j.a)(["\n  width: ","%;\n  height: 100%;\n  border-radius: 3px;\n  background: ",";\n"])),(function(e){return e.progress}),(function(e){return e.theme.color.grey[100]})),_=w.d.div(o||(o=Object(j.a)(["\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  // padding: ","px ","px;\n"])),(function(e){return e.theme.spacing[2]}),(function(e){return e.theme.spacing[4]})),K=function(e){var t=e.base,n=e.deadline,a=e.hideBar,r=(e.description,Date.now()>=n.getTime()?100:(Date.now()-t.getTime())/(n.getTime()-t.getTime())*100);return E.a.createElement(_,null,E.a.createElement(B.a,{key:(new Date).getTime(),date:n,renderer:function(e){var t=e.days,n=e.hours,a=e.minutes,r=e.seconds,c=String(24*t+n),o=String(a),l=String(r);return E.a.createElement(H,null,c.padStart(2,"0"),":",o.padStart(2,"0"),":",l.padStart(2,"0"))}}),a?"":E.a.createElement(L,null,E.a.createElement(V,{progress:r})))},q=n(773),J=function(){var e=Object(M.a)(),t=Object(q.a)();return{onReward:Object(g.useCallback)((function(){t(e.harvestCashFromMasonry(),"Claim TOMB from Masonry")}),[e,t])}},$=n(28),Q=function(){var e=Object(g.useState)($.a.from(0)),t=Object(R.a)(e,2),n=t[0],a=t[1],r=Object(M.a)(),c=null===r||void 0===r?void 0:r.isUnlocked,o=Object(g.useCallback)(Object(U.a)(z.a.mark((function e(){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=a,e.next=3,r.getEarningsOnMasonry();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)}))),[r]);return Object(g.useEffect)((function(){if(c){o().catch((function(e){return console.error(e.stack)}));var e=setInterval(o,W.b.refreshInterval);return function(){return clearInterval(e)}}}),[c,a,o,r]),n},X=n(780),Y=n(30),Z=w.d.div(l||(l=Object(j.a)(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n"]))),ee=w.d.div(i||(i=Object(j.a)(["\n  display: flex;\n  justify-content: center;\n  margin-top: ","px;\n  width: 100%;\n"])),(function(e){return e.theme.spacing[6]})),te=w.d.div(u||(u=Object(j.a)(["\n  align-items: center;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: space-between;\n"]))),ne=function(){var e=Object(X.a)(),t=J().onReward,n=Q(),a=G(),r=Object(g.useMemo)((function(){return e?Number(e.priceInDollars).toFixed(2):null}),[e]),c=(Number(r)*Number(Object(Y.b)(n))).toFixed(2),o=F(),l=o.from,i=o.to;return E.a.createElement(I.a,null,E.a.createElement(S.a,{style:{backgroundColor:"rgba(104, 76, 172, 0.9)"}},E.a.createElement(N.a,null,E.a.createElement(te,null,E.a.createElement(Z,null,E.a.createElement(D.a,{symbol:"DANTE"}),E.a.createElement("span",{style:{fontSize:"28px",marginTop:"10px"}},Object(Y.b)(n)),E.a.createElement("span",{style:{fontSize:"16px"}},"\u2248 $".concat(c)),E.a.createElement("span",{style:{fontSize:"16px"}},"DANTE Earned")),E.a.createElement(ee,null,E.a.createElement(A.a,{onClick:t,color:"primary",variant:"contained",disabled:n.eq(0)||!a},"Claim Reward"))))),E.a.createElement(I.a,{mt:2,style:{color:"#FFF"}},a?"":E.a.createElement(S.a,{style:{backgroundColor:"rgba(104, 76, 172, 0.9)"}},E.a.createElement(N.a,null,E.a.createElement(T.a,{style:{textAlign:"center"}},"Claim possible in"),E.a.createElement(K,{hideBar:!0,base:l,deadline:i,description:"Claim available in"})))))},ae=n(794),re=n(796),ce=n(782),oe=n(259),le=n(165),ie=function(){var e=Object(g.useState)(!1),t=Object(R.a)(e,2),n=t[0],a=t[1],r=Object(M.a)(),c=null===r||void 0===r?void 0:r.isUnlocked,o=Object(g.useCallback)(Object(U.a)(z.a.mark((function e(){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=a,e.next=3,r.canUserUnstakeFromMasonry();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)}))),[r]);return Object(g.useEffect)((function(){if(c){o().catch((function(e){return console.error(e.stack)}));var e=setInterval(o,W.b.refreshInterval);return function(){return clearInterval(e)}}}),[c,o,r]),n},ue=n(257),se=n(776),me=n(258),de=n(775),fe=function(e){var t=e.max,n=e.onConfirm,a=(e.onDismiss,e.tokenName),r=void 0===a?"":a,c=Object(g.useState)(""),o=Object(R.a)(c,2),l=o[0],i=o[1],u=Object(g.useMemo)((function(){return Object(Y.c)(t,"USDC"===r?6:18)}),[t,r]),s=Object(g.useCallback)((function(e){i(e.currentTarget.value)}),[i]),m=Object(g.useCallback)((function(){i(u)}),[u,i]);return E.a.createElement(ue.a,null,E.a.createElement(me.a,{text:"Deposit ".concat(r)}),E.a.createElement(de.a,{value:l,onSelectMax:m,onChange:s,max:u,symbol:r}),E.a.createElement(se.a,null,E.a.createElement(A.a,{color:"primary",variant:"contained",onClick:function(){return n(l)}},"Confirm")))},be=function(e){var t=e.onConfirm,n=(e.onDismiss,e.max),a=e.tokenName,r=void 0===a?"":a,c=Object(g.useState)(""),o=Object(R.a)(c,2),l=o[0],i=o[1],u=Object(g.useMemo)((function(){return Object(Y.c)(n)}),[n]),s=Object(g.useCallback)((function(e){i(e.currentTarget.value)}),[i]),m=Object(g.useCallback)((function(){i(u)}),[u,i]);return E.a.createElement(ue.a,null,E.a.createElement(me.a,{text:"Withdraw ".concat(r)}),E.a.createElement(de.a,{onSelectMax:m,onChange:s,value:l,max:u,symbol:r}),E.a.createElement(se.a,null,E.a.createElement(A.a,{color:"primary",variant:"contained",onClick:function(){return t(l)}},"Confirm")))},pe=function(){var e=Object(g.useState)($.a.from(0)),t=Object(R.a)(e,2),n=t[0],a=t[1],r=Object(M.a)(),c=null===r||void 0===r?void 0:r.isUnlocked,o=Object(g.useCallback)(Object(U.a)(z.a.mark((function e(){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=a,e.next=3,r.getStakedSharesOnMasonry();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)}))),[r]);return Object(g.useEffect)((function(){if(c){o().catch((function(e){return console.error(e.stack)}));var e=setInterval(o,W.b.refreshInterval);return function(){return clearInterval(e)}}}),[a,c,r,o]),n},ve=n(792),he=function(){var e=Object(g.useState)({from:new Date,to:new Date}),t=Object(R.a)(e,2),n=t[0],a=t[1],r=Object(M.a)();return Object(g.useEffect)((function(){r&&r.getUserUnstakeTime().then(a)}),[r]),n},Oe=function(){var e=Object(M.a)(),t=Object(q.a)();return{onStake:Object(g.useCallback)((function(n){t(e.stakeShareToMasonry(n),"Stake ".concat(n," TSHARE to the masonry"))}),[e,t])}},je=function(){var e=Object(M.a)(),t=Object(q.a)();return{onWithdraw:Object(g.useCallback)((function(n){t(e.withdrawShareFromMasonry(n),"Withdraw ".concat(n," TSHARE from the masonry"))}),[e,t])}},ge=w.d.div(s||(s=Object(j.a)(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n"]))),Ee=w.d.div(m||(m=Object(j.a)(["\n  display: flex;\n  justify-content: center;\n  margin-top: 28px;\n  width: 100%;\n"]))),xe=w.d.div(d||(d=Object(j.a)(["\n  height: ","px;\n  width: ","px;\n"])),(function(e){return e.theme.spacing[4]}),(function(e){return e.theme.spacing[4]})),ke=w.d.div(f||(f=Object(j.a)(["\n  align-items: center;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: space-between;\n"]))),ye=function(){var e=Object(M.a)(),t=Object(ce.b)(e.TSHARE,e.contracts.Masonry.address),n=Object(R.a)(t,2),a=n[0],r=n[1],c=Object(le.a)(e.TSHARE),o=pe(),l=he(),i=l.from,u=l.to,s=Object(ve.a)("GRAIL",e.TSHARE),m=Object(g.useMemo)((function(){return s?(Number(s)*Number(Object(Y.b)(o))).toFixed(2).toString():null}),[s,o]),d=Oe().onStake,f=je().onWithdraw,b=ie(),p=Object(oe.a)(E.a.createElement(fe,{max:c,onConfirm:function(e){d(e),O()},tokenName:"GRAIL"})),v=Object(R.a)(p,2),h=v[0],O=v[1],j=Object(oe.a)(E.a.createElement(be,{max:o,onConfirm:function(e){f(e),y()},tokenName:"GRAIL"})),x=Object(R.a)(j,2),k=x[0],y=x[1];return E.a.createElement(I.a,null,E.a.createElement(S.a,{style:{backgroundColor:"rgba(104, 76, 172, 0.9)"}},E.a.createElement(N.a,null,E.a.createElement(ke,null,E.a.createElement(ge,null,E.a.createElement(D.a,{symbol:"GRAIL"}),E.a.createElement("span",{style:{fontSize:"28px",marginTop:"10px"}},Object(Y.b)(o)),E.a.createElement("span",{style:{fontSize:"16px"}},"\u2248 $".concat(m)),E.a.createElement("span",{style:{fontSize:"16px"}},"GRAIL Staked")),E.a.createElement(Ee,null,a!==ce.a.APPROVED?E.a.createElement(A.a,{disabled:a!==ce.a.NOT_APPROVED,variant:"contained",color:"primary",style:{marginTop:"20px"},onClick:r},"Approve GRAIL"):E.a.createElement(E.a.Fragment,null,E.a.createElement(re.a,{disabled:!b,onClick:k},E.a.createElement(ae.b,null)),E.a.createElement(xe,null),E.a.createElement(re.a,{onClick:h},E.a.createElement(ae.a,null))))))),E.a.createElement(I.a,{mt:2,style:{color:"#FFF"}},b?"":E.a.createElement(S.a,{style:{backgroundColor:"rgba(104, 76, 172, 0.9)"}},E.a.createElement(N.a,null,E.a.createElement(T.a,{style:{textAlign:"center"}},"Withdraw possible in"),E.a.createElement(K,{hideBar:!0,base:i,deadline:u,description:"Withdraw available in"})))))},we=n(746),Ce=n(748),Ie=n(821),Se=n(779),Ne=n(260),Ae=function(e){var t=Object(M.a)(),n=Object(q.a)();return{onRedeem:Object(g.useCallback)((function(){var a=e||"Redeem TSHARE from Masonry";n(t.exitFromMasonry(),a)}),[t,e,n])}},Te=function(){var e=Object(g.useState)($.a.from(0)),t=Object(R.a)(e,2),n=t[0],a=t[1],r=Object(M.a)(),c=Object(g.useCallback)(Object(U.a)(z.a.mark((function e(){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=a,e.next=3,r.getCurrentEpoch();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)}))),[r]);return Object(g.useEffect)((function(){c().catch((function(e){return console.error("Failed to fetch TOMB price: ".concat(e.stack))}));var e=setInterval(c,W.b.refreshInterval);return function(){return clearInterval(e)}}),[a,r,c]),n},De=function(){var e=Object(g.useState)(0),t=Object(R.a)(e,2),n=t[0],a=t[1],r=Object(M.a)(),c=Object(g.useCallback)(Object(U.a)(z.a.mark((function e(){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=a,e.next=3,r.getMasonryAPR();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)}))),[r]);return Object(g.useEffect)((function(){c().catch((function(e){return console.error("Failed to fetch masonry apr: ".concat(e.stack))}));var e=setInterval(c,W.b.refreshInterval);return function(){return clearInterval(e)}}),[a,r,c]),n},Re=function(){var e=Object(g.useState)(),t=Object(R.a)(e,2),n=t[0],a=t[1],r=Object(M.a)(),c=Object(g.useCallback)(Object(U.a)(z.a.mark((function e(){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=a,e.next=3,r.getTombStatInEstimatedTWAP();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)}))),[r]);return Object(g.useEffect)((function(){c().catch((function(e){return console.error("Failed to fetch TOMB price: ".concat(e.stack))}));var e=setInterval(c,W.b.refreshInterval);return function(){return clearInterval(e)}}),[a,r,c]),n},Me=function(){var e=Object(g.useState)({from:new Date,to:new Date}),t=Object(R.a)(e,2),n=t[0],a=t[1],r=Object(M.a)();return Object(g.useEffect)((function(){r&&r.getTreasuryNextAllocationTime().then(a)}),[r]),n},Fe=function(){var e=Object(g.useState)($.a.from(0)),t=Object(R.a)(e,2),n=t[0],a=t[1],r=Object(M.a)(),c=null===r||void 0===r?void 0:r.isUnlocked,o=Object(g.useCallback)(Object(U.a)(z.a.mark((function e(){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=a,e.next=3,r.getTotalStakedInMasonry();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)}))),[r]);return Object(g.useEffect)((function(){if(c){o().catch((function(e){return console.error(e.stack)}));var e=setInterval(o,W.b.refreshInterval);return function(){return clearInterval(e)}}}),[c,o,r]),n},Pe=n(817),ze=n.n(Pe),Ue=Object(w.c)(b||(b=Object(j.a)(["\n  body, html {\n    background: url(",") no-repeat !important;\n    background-size: cover !important;\n  }\n"])),ze.a),We=Object(we.a)((function(e){return{gridItem:Object(O.a)({height:"100%"},e.breakpoints.up("md"),{height:"90px"})}})),Ge=w.d.div(p||(p=Object(j.a)(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  @media (max-width: 768px) {\n    width: 100%;\n  }\n"]))),Be=w.d.div(v||(v=Object(j.a)(["\n  display: flex;\n  width: 600px;\n  @media (max-width: 768px) {\n    width: 100%;\n    flex-flow: column nowrap;\n    align-items: center;\n  }\n"]))),He=w.d.div(h||(h=Object(j.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  @media (max-width: 768px) {\n    width: 80%;\n  }\n"]))),Le=function(){var e=We(),t=Object(x.h)().account,n=Ae().onRedeem,a=pe(),r=Te(),c=Re(),o=Fe(),l=De(),i=G(),u=ie(),s=Object(g.useMemo)((function(){return c?Number(c.priceInDollars).toFixed(4):null}),[c]),m=Me().to;return E.a.createElement(Ne.a,null,E.a.createElement(Ue,null),t?E.a.createElement(E.a.Fragment,null,E.a.createElement("h2",{style:{display:"table",padding:"10px",backgroundColor:"rgba(104, 76, 172, 0.9)",color:"#FFF",margin:"0px auto 0px auto"}},"Eden"),E.a.createElement(I.a,{mt:5},E.a.createElement(Ce.a,{container:!0,justify:"center",spacing:3},E.a.createElement(Ce.a,{item:!0,xs:12,md:2,lg:2,className:e.gridItem},E.a.createElement(S.a,{className:e.gridItem,style:{backgroundColor:"rgba(104, 76, 172, 0.9)"}},E.a.createElement(N.a,null,E.a.createElement(T.a,{style:{textAlign:"center"}},"Next Epoch"),E.a.createElement(K,{base:y()().toDate(),hideBar:!0,deadline:m,description:"Next Epoch"})))),E.a.createElement(Ce.a,{item:!0,xs:12,md:2,lg:2,className:e.gridItem},E.a.createElement(S.a,{className:e.gridItem,style:{backgroundColor:"rgba(104, 76, 172, 0.9)"}},E.a.createElement(N.a,{align:"center"},E.a.createElement(T.a,null,"Current Epoch"),E.a.createElement(T.a,null,Number(r))))),E.a.createElement(Ce.a,{item:!0,xs:12,md:2,lg:2,className:e.gridItem},E.a.createElement(S.a,{className:e.gridItem,style:{backgroundColor:"rgba(104, 76, 172, 0.9)"}},E.a.createElement(N.a,{align:"center"},E.a.createElement(T.a,null,"DANTE Price",E.a.createElement("small",null,"(TWAP)")),E.a.createElement(T.a,null,s)))),E.a.createElement(Ce.a,{item:!0,xs:12,md:2,lg:2,className:e.gridItem},E.a.createElement(S.a,{className:e.gridItem,style:{backgroundColor:"rgba(104, 76, 172, 0.9)"}},E.a.createElement(N.a,{align:"center"},E.a.createElement(T.a,null,"APR"),E.a.createElement(T.a,null,l.toFixed(2),"%")))),E.a.createElement(Ce.a,{item:!0,xs:12,md:2,lg:2},E.a.createElement(S.a,{className:e.gridItem,style:{backgroundColor:"rgba(104, 76, 172, 0.9)"}},E.a.createElement(N.a,{align:"center"},E.a.createElement(T.a,null,"GRAILs Staked"),E.a.createElement(T.a,null,Object(Y.b)(o)))))),E.a.createElement(Ce.a,{container:!0,justify:"center"},E.a.createElement(I.a,{mt:3,style:{width:"600px"}},E.a.createElement(Ie.a,{variant:"filled",severity:"warning"},"Staked GRAILs can only be withdrawn after 6 epochs since deposit."))),E.a.createElement(I.a,{mt:4},E.a.createElement(Ge,null,E.a.createElement(Be,null,E.a.createElement(He,null,E.a.createElement(ne,null)),E.a.createElement(C.a,null),E.a.createElement(He,null,E.a.createElement(ye,null)))))),E.a.createElement(I.a,{mt:5},E.a.createElement(Ce.a,{container:!0,justify:"center",spacing:3,mt:10},E.a.createElement(A.a,{disabled:a.eq(0)||!u&&!i,onClick:n,color:"primary",variant:"contained"},"Claim and Withdraw")))):E.a.createElement(Se.a,null))}}}]);
//# sourceMappingURL=6.3abeb442.chunk.js.map
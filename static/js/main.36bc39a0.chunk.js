(this.webpackJsonpfeed=this.webpackJsonpfeed||[]).push([[0],{38:function(e,n,t){},39:function(e,n,t){"use strict";t.r(n);var r=t(2),a=t.n(r),c=t(26),o=t.n(c),i=t(7),s=t(8),l=t(14);t(24),t(40);l.a.initializeApp({apiKey:"AIzaSyDrYdVo7ZeWU3AVYX8iFo7qWAK6gCpMgwQ",authDomain:"agencia-gift.firebaseapp.com",projectId:"agencia-gift",storageBucket:"agencia-gift.appspot.com",messagingSenderId:"404011545951",appId:"1:404011545951:web:7f4a77ec0dce84fb6432ea",measurementId:"G-KE55SGFC5L"});var d,b,u,j,h,p,O,g,f,x,m,v,A,w,k,y,C=l.a.auth(),S=l.a.firestore(),B=l.a.firestore.FieldValue.serverTimestamp,z={google:new l.a.auth.GoogleAuthProvider},E=function(){var e=Object(r.useState)(null),n=Object(s.a)(e,2),t=n[0],a=n[1],c=Object(r.useState)(null),o=Object(s.a)(c,2),i=o[0],l=o[1],d=Object(r.useState)({}),b=Object(s.a)(d,2),u=b[0],j=b[1];return Object(r.useEffect)((function(){return C.onAuthStateChanged(a)}),[a]),Object(r.useEffect)((function(){t?S.collection("userConfig").doc(t.uid).get().then((function(e){return j(e.data()||{})})):j({})}),[t]),{user:t,error:i,userConfig:u,signIn:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"google";l(null),C.signInWithPopup(z[e]).catch((function(e){return l(e)}))},signOut:function(){return C.signOut()}}},I=t(3),D=t(4),M="#e7e7e7",G="#999",R="#666",F=function(e,n,t,r){return Object(D.a)(d||(d=Object(I.a)(["\n    color: ",";\n    background-color: ",";\n\n    &:hover, &:focus {\n        background-color: ",";\n    }\n\n    &:active {\n        background-color: ",";\n    }\n"])),e,n,t||n,r||t||n)},P={idle:"#0062b5",hover:"#008aff",active:"#0062b5",error:"red"},U={primary:F("#fff",P.idle,P.hover,P.active),naked:F(P.idle,"transparent",M)},K="4px",L="8px",Z="16px",N="32px",T="64px",W=Object(D.a)(b||(b=Object(I.a)(["\n    font: inherit;\n    line-height: 1.5;\n    padding: "," ",";\n    border: 1px solid ",";\n    border-radius: 4px;\n\n    ","\n"])),L,Z,G,(function(e){return e.expand&&Object(D.a)(u||(u=Object(I.a)(["\n        flex: 1;\n    "])))})),Q=D.b.input(j||(j=Object(I.a)(["\n    ","\n"])),W),q=D.b.textarea(h||(h=Object(I.a)(["\n    ","\n    min-height: 6em;\n"])),W),Y=D.b.button(p||(p=Object(I.a)(["\n    ","\n    ","\n    display: inline-block;\n    vertical-align: middle;\n    cursor: pointer;\n"])),W,U.primary),H=Object(D.b)(Y)(O||(O=Object(I.a)(["\n    ","\n    border: 0 none;\n"])),U.naked),V=D.b.div(g||(g=Object(I.a)(["\n    margin: auto;\n    padding-left: ",";\n    padding-right: ",";\n    max-width: ",";\n"])),Z,Z,"800px"),X=D.b.div(f||(f=Object(I.a)(["\n    display: flex;\n    flex-direction: column;\n\n    ","\n\n    > * {\n        margin-top: ",";\n        margin-bottom: ",";\n    }\n"])),(function(e){return e.expand&&Object(D.a)(x||(x=Object(I.a)(["\n        flex: 1;\n    "])))}),K,K),J=D.b.div(m||(m=Object(I.a)(["\n    display: flex;\n    justify-content: space-between;\n\n    ","\n\n    ","\n"])),(function(e){return e.wrap&&Object(D.a)(v||(v=Object(I.a)(["\n        flex-wrap: wrap;\n    "])))}),(function(e){var n=e.breakUnder;return n&&Object(D.a)(A||(A=Object(I.a)(["\n        @media (max-width: ","px) {\n            flex-direction: column;\n        }\n    "])),n)})),_=D.b.img(w||(w=Object(I.a)(["\n    align-self: stretch;\n    width: 200px;\n    object-fit: contain;\n    object-position: top;\n    margin-top: ",";\n    margin-bottom: ",";\n    margin-right: ",";\n"])),K,K,L),$=D.b.p(k||(k=Object(I.a)(["\n    color: ",";\n"])),P.hover),ee=Object(D.b)($)(y||(y=Object(I.a)(["\n    color: ",";\n"])),P.error),ne=t(1),te=function(e){var n=e.image,t=e.title,r=e.description,a=e.setTitle,c=e.setDescription;return Object(ne.jsxs)(J,{children:[n&&Object(ne.jsx)(_,{src:n,alt:"Imagem encontrada."}),Object(ne.jsxs)(X,{expand:!0,children:[Object(ne.jsx)(Q,{placeholder:"Title...",value:t,onChange:function(e){return a(e.target.value)}}),Object(ne.jsx)(q,{expand:!0,placeholder:"Description...",value:r,onChange:function(e){return c(e.target.value)}}),Object(ne.jsx)(Y,{children:"Publicar"})]})]})},re=t(12),ae=t.n(re),ce=t(16),oe=/^(http(s)?:\/\/.)(www\.)?[-a-zA-Z0-9@:%._+~#=]+\.[a-z]{2,}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)?/,ie=function(){var e=Object(ce.a)(ae.a.mark((function e(n){var t;return ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://gift-scraper.herokuapp.com/scrape/?format=json","&url=").concat(n)).then((function(e){return e.ok&&e.json()}));case 2:return t=e.sent,e.abrupt("return",t||{});case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),se=new Map,le=function(e){var n=Object(r.useState)({loading:!1}),t=Object(s.a)(n,2),a=t[0],c=t[1],o=Object(r.useState)(!0),l=Object(s.a)(o,2),d=l[0],b=l[1];return Object(r.useEffect)((function(){var n=!!e.match(oe);b(n);var t=se.get(e);if(t)c(Object(i.a)(Object(i.a)({},a),t));else if(n&&!se.has(e)){se.set(e,null);var r=S.collection("scrape").doc(encodeURIComponent(e)),o=function(){var n=Object(ce.a)(ae.a.mark((function n(){var t,a;return ae.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t=B(),n.next=4,ie(e);case 4:return a=n.sent,n.next=7,r.set(a);case 7:se.set(e,a),c(Object(i.a)(Object(i.a)({},a),{},{fetchedAt:t,loading:!1})),n.next=15;break;case 11:n.prev=11,n.t0=n.catch(0),se.set(e,{error:n.t0}),c({data:null,error:n.t0,loading:!1});case 15:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(){return n.apply(this,arguments)}}();c({data:null,error:null,loading:!0}),r.get().then((function(n){var t=n.data();t?(se.set(e,t),c(Object(i.a)(Object(i.a)({},t),{},{loading:!1}))):o()})).catch((function(e){c({data:null,error:e,loading:!1})}))}}),[e]),{isUrlValid:d,data:a.data,error:a.error,loading:a.loading}},de=t(17),be=function(e){var n=e.trim().toLowerCase().split(/[^a-zA-Z\u00C0-\u017F]+/).filter((function(e){return e&&e.length>2}));return Object(de.a)(new Set(n))},ue=function(){var e=Object(r.useState)(""),n=Object(s.a)(e,2),t=n[0],a=n[1],c=Object(r.useState)(""),o=Object(s.a)(c,2),i=o[0],l=o[1],d=Object(r.useState)(""),b=Object(s.a)(d,2),u=b[0],j=b[1],h=Object(r.useState)(""),p=Object(s.a)(h,2),O=p[0],g=p[1],f=Object(r.useState)(""),x=Object(s.a)(f,2),m=x[0],v=x[1],A=E().user,w=le(i),k=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5e3;a(e),setTimeout((function(){return a("")}),n)};Object(r.useEffect)((function(){w.data?(j(w.data.title||""),g(w.data.description||""),v(w.data.images[0]||"")):v("")}),[w.data]),Object(r.useEffect)((function(){w.error&&k("Ocorreu um erro ao pesquisar. Verifique se o link est\xe1 correto e tente novamente",1e4)}),[w.error]);var y=function(){var e=A.uid,n=A.displayName,t=A.photoURL;return{url:i,title:u,description:O,image:m,author:{uid:e,displayName:n,photoURL:t},createdAt:B(),keywords:be("".concat(u," ").concat(O))}},C=function(){var e=Object(ce.a)(ae.a.mark((function e(n){return ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),a(""),i){e.next=5;break}return k("Informe o link para compartilhar."),e.abrupt("return");case 5:return e.prev=5,e.next=8,S.collection("links").add(y());case 8:a(""),l(""),j(""),g(""),v(""),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(5),a(e.t0);case 14:case"end":return e.stop()}}),e,null,[[5,11]])})));return function(n){return e.apply(this,arguments)}}();return{state:{error:t,url:i,title:u,description:O,image:m,loading:w.loading,showPublishForm:w.isUrlValid&&!w.loading},actions:{setTitle:j,setDescription:g,addLink:C,setUrl:function(e){l(e),a("")}}}};var je,he,pe,Oe,ge,fe,xe,me,ve,Ae=function(){var e=ue(),n=e.state,t=e.actions,r=E(),a=r.user;return r.error&&!a?Object(ne.jsx)(ee,{children:"Erro no login. Tente novamente."}):a?Object(ne.jsxs)("form",{onSubmit:t.addLink,children:[Object(ne.jsx)("h4",{children:"Compartilhar link"}),Object(ne.jsxs)(X,{children:[Object(ne.jsx)(Q,{placeholder:"https://",value:n.url,onChange:function(e){return t.setUrl(e.target.value)}}),n.loading&&Object(ne.jsx)($,{children:"Carregando..."}),n.showPublishForm&&Object(ne.jsx)(te,Object(i.a)(Object(i.a)({},n),t)),n.error&&Object(ne.jsx)(ee,{children:"Desculpe! Ocorreu um erro inesperado :("})]})]}):null},we={src:"https://agenciagift.github.io/favicon.png",alt:"Ag\xeancia Gift",width:49.25,height:50},ke="REQUEST_SEARCH",ye=function(e,n){switch(n.type){case ke:return Object(i.a)(Object(i.a)({},e),{},{search:n.payload});default:return e}},Ce={search:""},Se=Object(r.createContext)(Ce),Be=function(e){var n=e.children,t=Object(r.useReducer)(ye,Ce),a=Object(s.a)(t,2),c=a[0],o=a[1];return Object(ne.jsx)(Se.Provider,{value:{search:c.search,requestSearch:function(e){o({type:ke,payload:e})}},children:n})},ze=function(e){var n=e.color,t=void 0===n?R:n;return Object(ne.jsx)("svg",{version:"1.1",viewBox:"0 0 32 32",width:"16px",height:"16px",xmlns:"http://www.w3.org/2000/svg",children:Object(ne.jsx)("path",{d:"m14.043 0.0078125c-5.3701 0.068248-10.449 3.3774-12.68 8.2637-2.2883 4.7601-1.6495 10.664 1.5996 14.826 3.2048 4.2711 8.8267 6.4228 14.064 5.3828h0.003906c1.8669-0.351 3.6187-1.1381 5.2031-2.1836l5.4219 5.4219c0.37413 0.37472 0.98134 0.37472 1.3555 0l2.707-2.707c0.37472-0.37413 0.37472-0.98134 0-1.3555l-5.4375-5.4375c2.8144-4.2212 3.2446-9.843 0.88867-14.361-2.4325-4.881-7.6746-8.0154-13.127-7.8496zm0.10742 5.1816c0.00436 3.96e-5 0.009371 3.96e-5 0.013671 0 3.4522-0.10801 6.8459 1.9236 8.3828 5.0156 0.0023 0.00436 0.005312 0.009372 0.007813 0.013672 1.408 2.6981 1.2799 6.1396-0.24805 8.7656-0.78782 1.2734-2.0081 2.4671-3.2402 3.2695-0.92393 0.55046-1.9484 0.93903-3.0039 1.1367-0.0024 5e-4 -0.003459-5.17e-4 -0.005859 0-3.3047 0.65716-6.9578-0.7419-8.9766-3.4395-0.003322-0.00392-0.0063756-0.007919-0.0097656-0.011719-2.0515-2.6262-2.4647-6.4608-1.0176-9.4629 0.00246-0.004799 0.0035094-0.010825 0.0058594-0.015624 1.4049-3.0821 4.705-5.2305 8.0918-5.2715z",fill:t})})},Ee=D.b.form(je||(je=Object(I.a)(["\n    display: flex;\n    align-items: center;\n    flex: 1;\n    margin-left: ",";\n    margin-right: ",";\n    border-radius: 999px;\n\n    transition: 0.3s ease-in-out;\n\n    ","\n"])),Z,Z,(function(e){return e.focus&&Object(D.a)(he||(he=Object(I.a)(["\n        background-color: #fff;\n    "])))})),Ie=Object(D.b)(Q)(pe||(pe=Object(I.a)(["\n    flex: 1;\n    background-color: transparent;\n    border: 0 none;\n\n    &:hover, &:focus {\n        outline: none;\n    }\n\n    &:hover {\n        cursor: pointer;\n    }\n\n    &:focus {\n        cursor: auto;\n    }\n"]))),De=Object(D.b)(Y)(Oe||(Oe=Object(I.a)(["\n    display: flex;\n    align-items: center;\n    background-color: transparent;\n    border: 0 none;\n    padding-left: 0;\n\n    ","\n"])),F("transparent","transparent")),Me=Object(D.b)(ze)(ge||(ge=Object(I.a)(["\n    display: block;\n    width: 0.5em;\n    height: 0.5em;\n"])));function Ge(){var e=Object(r.useState)(""),n=Object(s.a)(e,2),t=n[0],a=n[1],c=Object(r.useState)(!1),o=Object(s.a)(c,2),i=o[0],l=o[1],d=Object(r.useContext)(Se).requestSearch;return Object(ne.jsxs)(Ee,{onSubmit:function(e){e.preventDefault(),d(t)},focus:i,children:[Object(ne.jsx)(Ie,{type:"text",placeholder:i?"":"Clique para pesquisar",value:t,onChange:function(e){return a(e.target.value)},onFocus:function(){return l(!0)},onBlur:function(){return l(!1)}}),i&&Object(ne.jsx)(De,{children:Object(ne.jsx)(Me,{})})]})}var Re,Fe,Pe,Ue,Ke,Le=D.b.div(fe||(fe=Object(I.a)(["\n    position: absolute;\n    top: 100%;\n    right: 0;\n    min-width: 200px;\n    margin-top: ",";\n    background-color: #fff;\n    border-radius: 4px;\n    filter: drop-shadow(0 5px 10px rgba(0, 0, 0, 0.3));\n\n    &:before {\n        content: '';\n        position: absolute;\n        right: 16px;\n        bottom: 100%;\n        border-width: 0 "," ",";\n        border-style: solid;\n        border-color: transparent transparent #fff;\n    }\n"])),Z,L,L),Ze=D.b.ul(xe||(xe=Object(I.a)(["\n    list-style: none;\n    margin: 0;\n    padding: 0;\n"]))),Ne=D.b.p(me||(me=Object(I.a)(["\n    margin: ",";\n    font-size: 0.75em;\n"])),Z),Te=D.b.button(ve||(ve=Object(I.a)(["\n    display: block;\n    width: 100%;\n    border: 0 none;\n    padding: ",";\n\n    white-space: nowrap;\n    font: inherit;\n    text-align: left;\n\n    ","\n"])),Z,F("currentColor","transparent",M)),We=function(e){var n=e.showMenu,t=e.setShowMenu,r=E(),a=r.user,c=r.signIn,o=r.signOut;if(!n)return null;var i=function(){return t(!1)};return Object(ne.jsx)(Le,{children:a?Object(ne.jsxs)(ne.Fragment,{children:[Object(ne.jsx)(Ne,{children:a.displayName}),Object(ne.jsx)(Ze,{children:Object(ne.jsx)("li",{children:Object(ne.jsx)(Te,{onClick:function(){o(),i()},children:"Sair"})})})]}):Object(ne.jsx)(ne.Fragment,{children:Object(ne.jsx)(Ze,{children:Object(ne.jsx)("li",{children:Object(ne.jsx)(Te,{onClick:function(){c(),i()},children:"Login"})})})})})},Qe=D.b.div(Re||(Re=Object(I.a)(["\n    position: relative;\n"]))),qe=D.b.button(Fe||(Fe=Object(I.a)(["\n    ","\n    padding: 0;\n    border: 1px solid #fff;\n    border-radius: 50%;\n    overflow: hidden;\n\n    &:hover, &:focus, &:active {\n        border-color: ",";\n    }\n"])),F("currentColor","transparent"),P.hover),Ye=D.b.img(Pe||(Pe=Object(I.a)(["\n    display: block;\n    width: 46px;\n    height: 46px;\n"])));function He(){var e=Object(r.useState)(!1),n=Object(s.a)(e,2),t=n[0],a=n[1],c=E().user,o={src:c?c.photoURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAATdAAAE3QBedN++wAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAS2SURBVHic5ZvNixxFGMZ/1buQj90EIbIbZgmDUQyIEEhyDB5CMBiSETUQ9KKEnMRIFOKeNH+AEE/xoJDkENB4iosERJnMxZtZIZLFHFzIYVcd8SPmazeweT1U9aSnnd7t6n6rd+I88J62+3mf99maqur6MCJCSBhjRoA9wJNArUcAzPeIn4GmiNwJqi+EAcaYMaABvAjsBdYWpFoAvgW+BKZEpK2jMAERUQlgDXAM+A5YAkQ5lhz3MWCNmm6FwiPgdeBGgKKz4obLGa2qAcB+4GqFhafjKrC/cgOAOnB5FQtPx2WgXokBwG6g3QdFp6MN7A5qAHAEWOyDYrNiETiibgAwBJzqgwLzxilgSMUAV/zFACJngS9czAbgv5jHhDwGaP7nLwD7gE098mxyf/tcsyWUMgD7m9cQ8jtwyKOveRn4TSn3sn3CSr29Rof3NTDm3TvD48BXCvkXWWZ0yEpeR2eomwMe8y0+oWMjOjPMNhnzhKzELaXm90LR4hNanlfS0splAHBAKeGnZYtPaPpESdOBZQ3ADnnXlJJtUzRgm5Kma6SGxnSio0qJbuLWGpQMMI5TQ9vRngYA67GdlkaSplbxCX1NJW1zwPqYN+Ih3uThElVZfK/EE4Kzhq0VoMuAw0oJwDZXbWhydmqNAIwxE8BOxQSaXCE4d7qaOy3gILaj0cIuRa4QnAZbc8eAhiI5wBZjzLgWmePaosXn0ACIjDGj2HV7bRxS5HpFkSvGHlc7DXSGl3TcAp5QGP7qwD+BNDYiYKuyszFGgXPGmGjFJzNgjDHAGWCDmqpubI3QG/t74Tng/RLvTxLm5xmjBnCeMM0rGZeAmkez3wxMVaDrPOhNMVeKP4HXWGY3BzsqvQr8UZGmpgF+wn5tVYU7wDR2ahtPb3e52AGMVKjlusH2sKE6mX7HrcI99P8FEfYwwqBifuANGKYaA+5h+xofbATWBdCSRDADZrD7AdMurovIkg+BMWYIOzrtcLEPeEZZ5zzAcfTG1fvAB8BwgCWxYcd9X1HvcdD7GPoB2K5deA8jtrtcGpobYD9aFkoSzQIjoYtPmDBC+R3lBWA0EpHb2OlwUQh2AzLoeb6uhDZXvHFbFE0RuR1PhKZKEJ0WkVaJ9wvB5TxdgmIqJgKYAB7g34xuUmHTz/gpFNkweQBMiLh9ARGZA64UcHG6yqafhss9XeDVK67mrn2BCwWIQmyA+KKIhk6tSQM+xn9S9CgaMI+tFUgYICJ3gZOeZDOez4eAr4aTrlaguwUAnPUkfNozeQj4LObMYGvsoMsAN1+f9CA86PFsKPhomPzPN0nG8NIi/5Dy0ioOg4c9dLZ6cmQQ18l/SOoe8FbFhRvgXfJP4f0OSbkkvsfkLgHjFRRfA77x0OV/TC6RzPegZBt7+GBtgMLXAW/jv2Re7KBkInGRo7K/ACeAUYXCNwDvAb8W0FHuqKwTUOaw9F/AZ9jrLZs9m/kb2HPDfxfMneuwdK5bY2556kPgnRUfzoYAP2Kvw7WxZ4HjW2BjwLiLp4BnS+QB+Ag4IXmW4Tyb42BemEiZMLhXZhIm1BnUS1MpIwbz2lzKhMG9OJky4pG8Ojvwl6eDGNCVoM+vz/8LPV93/9ZULQ4AAAAASUVORK5CYII=",alt:c?c.displayName:"Fa\xe7a login"};return Object(ne.jsxs)(Qe,{children:[Object(ne.jsx)(qe,{onClick:function(){return a(!t)},children:Object(ne.jsx)(Ye,{src:o.src,alt:o.alt})}),Object(ne.jsx)(We,{showMenu:t,setShowMenu:a})]})}var Ve=D.b.header(Ue||(Ue=Object(I.a)(["\n    padding-top: ",";\n    padding-bottom: ",";\n    background-color: ",";\n"])),L,L,M),Xe=Object(D.b)(V)(Ke||(Ke=Object(I.a)(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n"])));function Je(){return Object(ne.jsx)(Ve,{children:Object(ne.jsxs)(Xe,{children:[Object(ne.jsx)("img",Object(i.a)(Object(i.a)({},we),{},{alt:we.alt})),Object(ne.jsx)(Ge,{}),Object(ne.jsx)(He,{})]})})}var _e,$e,en,nn,tn,rn,an,cn,on,sn,ln,dn,bn,un,jn={nextItem:{},startAfter:{},searchTerm:"",loading:!1,ended:!1,docs:[]},hn=function(e,n){switch(n.type){case"startLoading":return Object(i.a)(Object(i.a)({},e),{},{loading:!0});case"setDocs":var t=function(e){var n=[],t=null;return e.forEach((function(e){n.push(Object(i.a)(Object(i.a)({},e.data()),{},{id:e.id}))})),11===n.length&&(n.pop(),t=e.docs[e.size-1]),[n,t]}(n.payload),r=Object(s.a)(t,2),a=r[0],c=r[1],o=e.startAfter.exists?[].concat(Object(de.a)(e.docs),Object(de.a)(a)):a;return Object(i.a)(Object(i.a)({},e),{},{loading:!1,docs:o,nextItem:c,ended:!c});case"next":return Object(i.a)(Object(i.a)({},e),{},{startAfter:e.nextItem||{}});case"search":return Object(i.a)(Object(i.a)({},jn),{},{searchTerm:n.payload});default:return e}},pn=function(e){var n=Object(r.useReducer)(hn,jn),t=Object(s.a)(n,2),a=t[0],c=a.docs,o=a.loading,i=a.startAfter,l=a.searchTerm,d=a.ended,b=t[1];return Object(r.useEffect)((function(){b({type:"search",payload:e})}),[e]),Object(r.useEffect)((function(){b({type:"startLoading"}),function(e,n){var t=S.collection("links").orderBy("createdAt","desc").startAt(e).limit(11);if(n){var r=be(n);if(r.length)return t.where("keywords","array-contains-any",r)}return t}(i,l).get().then((function(e){b({type:"setDocs",payload:e})}))}),[i,l]),{docs:c,loading:o,next:function(){return b({type:"next"})},ended:d}},On=function(){return Object(ne.jsx)("svg",{version:"1.1",viewBox:"0 0 512 512",width:"26px",height:"26px",xmlns:"http://www.w3.org/2000/svg",children:Object(ne.jsx)("path",{d:"m64 512v-464c0-26.51 21.49-48 48-48h288c26.51 0 48 21.49 48 48v464l-192-112z"})})},gn=function(){return Object(ne.jsx)("svg",{version:"1.1",viewBox:"0 0 22 22",width:"26px",height:"26px",xmlns:"http://www.w3.org/2000/svg",children:Object(ne.jsx)("path",{d:"m14.5 0h-11c-1.1 0-2 0.9-2 2v13c0 0.55 0.45 1 1 1s1-0.45 1-1v-12c0-0.55 0.45-1 1-1h10c0.55 0 1-0.45 1-1s-0.45-1-1-1zm0.59 4.59 4.83 4.83c0.37 0.37 0.58 0.88 0.58 1.41v9.17c0 1.1-0.9 2-2 2h-11.01c-1.1 0-1.99-0.9-1.99-2l0.01-14c0-1.1 0.89-2 1.99-2h6.17c0.53 0 1.04 0.21 1.42 0.59zm-0.59 6.41h4.5l-5.5-5.5v4.5c0 0.55 0.45 1 1 1z"})})},fn=function(){return Object(ne.jsx)("svg",{version:"1",viewBox:"0 0 44 44",width:"26px",height:"26px",xmlns:"http://www.w3.org/2000/svg",children:Object(ne.jsx)("path",{d:"m32 4c-4.2 0-7.9 2.1-10 5.4-2.1-3.3-5.8-5.4-10-5.4-6.6 0-12 5.4-12 12 0 11.9 22 24 22 24s22-12 22-24c0-6.6-5.4-12-12-12z"})})},xn=D.b.li(_e||(_e=Object(I.a)(["\n    margin-bottom: ",";\n    border-radius: ",";\n    box-shadow: 0 3px 0 ",";\n"])),N,Z,M),mn=D.b.a($e||($e=Object(I.a)(["\n    word-break: break-word;\n    font-size: 1.4em;\n    color: ",";\n    text-decoration: none;\n\n    &:hover, &:focus, &:active {\n        color: ",";\n        text-decoration: underline;\n    }\n"])),P.idle,P.hover),vn=D.b.p(en||(en=Object(I.a)(["\n    font-size: 0.8em;\n"]))),An=Object(D.b)(_)(nn||(nn=Object(I.a)(["\n    margin-right: ",";\n    margin-bottom: ",";\n"])),N,N),wn=Object(D.b)(J)(tn||(tn=Object(I.a)(["\n    justify-content: flex-end;\n    margin-top: ",";\n    margin-bottom: ",";\n"])),Z,Z),kn=Object(D.b)(H)(rn||(rn=Object(I.a)(["\n    border-radius: 999px;\n    margin-right: ",";\n    color: ",";\n    transition-property: background-color;\n\n    ","\n\n    &:hover, &:focus, &:active {\n        color: ",";\n    }\n\n    &:active {\n        transform: scale(0.9);\n    }\n\n    svg {\n        display: block;\n        color: inherit;\n\n        > * {\n            fill: currentColor;\n        }\n    }\n"])),L,G,(function(e){return"string"===typeof e.children?Object(D.a)(an||(an=Object(I.a)(["\n        padding: "," ",";\n    "])),L,Z):Object(D.a)(cn||(cn=Object(I.a)(["\n        padding: ",";\n    "])),L)}),(function(e){var n=e.activeColor;return n&&P[n]||P.hover})),yn=function(e){var n=e.id,t=S.collection("links").doc(n);return Object(ne.jsx)(kn,{title:"Apagar publica\xe7\xe3o","aria-label":"Apagar publica\xe7\xe3o",onClick:function(){return t.delete()},children:"DELETAR"})},Cn=function(e){var n=e.id,t=E().userConfig;return Object(ne.jsxs)(wn,{children:[t.moderator&&Object(ne.jsx)(yn,{id:n}),Object(ne.jsx)(kn,{title:"Marcar como gostei","aria-label":"Marcar como gostei",children:Object(ne.jsx)(fn,{})}),Object(ne.jsx)(kn,{title:"Salvar para a minha lista","aria-label":"Salvar para a minha lista",children:Object(ne.jsx)(On,{})}),Object(ne.jsx)(kn,{title:"Copiar o endere\xe7o do link","aria-label":"Copiar o endere\xe7o do link",children:Object(ne.jsx)(gn,{})})]})};function Sn(e){var n,t=e.link,r=function(e){var n;return(null===e||void 0===e||null===(n=e.createdAt)||void 0===n?void 0:n.toDate)&&e.createdAt.toDate instanceof Function?e.createdAt.toDate():new Date(0)}(t);return Object(ne.jsx)(xn,{children:Object(ne.jsxs)(J,{breakUnder:600,children:[t.image&&Object(ne.jsx)(An,{src:t.image,alt:t.title}),Object(ne.jsxs)(X,{expand:!0,children:[Object(ne.jsx)("p",{children:Object(ne.jsx)(mn,{href:t.url,target:"_blank",rel:"noreferrer",children:t.title||t.url})}),Object(ne.jsxs)(vn,{children:[Object(ne.jsx)("strong",{children:null===(n=t.author)||void 0===n?void 0:n.displayName}),Object(ne.jsx)("span",{children:" em ".concat(r.toLocaleString())})]}),Object(ne.jsx)("p",{children:t.description}),Object(ne.jsx)(Cn,Object(i.a)({},t))]})]})},t.id)}var Bn=D.b.div(on||(on=Object(I.a)(["\n    margin-top: ",";\n    margin-bottom: ",";\n"])),T,T),zn=Object(D.b)(J)(sn||(sn=Object(I.a)(["\n    margin-bottom: ",";\n    padding-bottom: ",";\n    border-bottom: 1px solid ",";\n"])),N,K,G),En=Object(D.b)(H)(ln||(ln=Object(I.a)(["\n    padding-top: ",";\n    padding-bottom: ",";\n    margin-left: ",";\n"])),K,K,Z),In=D.b.ul(dn||(dn=Object(I.a)(["\n    list-style: none;\n    margin: 0;\n    padding: 0;\n"]))),Dn=Object(D.b)(H)(bn||(bn=Object(I.a)(["\n    display: block;\n    width: 100%;\n    margin: 0;\n    padding: ",";\n    text-align: center;\n    color: ",";\n"])),L,P.idle),Mn=Object(D.b)($)(un||(un=Object(I.a)(["\n    margin: 0;\n    padding: ",";\n    text-align: center;\n"])),L),Gn=function(e){var n=e.next,t=e.loading,r=e.empty;return e.ended?Object(ne.jsx)("p",{children:"N\xe3o h\xe1 mais resultados."}):t?Object(ne.jsx)(Mn,{children:"Carregando..."}):r?Object(ne.jsx)("p",{children:"Nada para exibir :( Tente uma pesquisa diferente."}):Object(ne.jsx)(Dn,{onClick:function(){return n()},children:"Carregar mais"})};function Rn(){var e=Object(r.useContext)(Se),n=e.search,t=e.requestSearch,a=pn(n),c=a.docs,o=a.next,i=a.loading,s=a.ended;return Object(ne.jsxs)(Bn,{children:[n&&Object(ne.jsxs)(zn,{children:[Object(ne.jsxs)("p",{children:["Pesquisando por: ",Object(ne.jsx)("strong",{children:n}),"."]}),Object(ne.jsx)(En,{onClick:function(){return t("")},children:"Remover filtro"})]}),Object(ne.jsx)(In,{children:c.map((function(e){return Object(ne.jsx)(Sn,{link:e},e.id)}))}),Object(ne.jsx)(Gn,{next:o,loading:i,empty:!c.length,ended:s})]})}var Fn=function(){return Object(ne.jsxs)(ne.Fragment,{children:[Object(ne.jsx)(Je,{}),Object(ne.jsxs)(V,{children:[Object(ne.jsx)(Ae,{}),Object(ne.jsx)(Rn,{})]})]})};t(38),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(Object(ne.jsx)(a.a.StrictMode,{children:Object(ne.jsx)(Be,{children:Object(ne.jsx)(Fn,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[39,1,2]]]);
//# sourceMappingURL=main.36bc39a0.chunk.js.map
(this.webpackJsonpfeed=this.webpackJsonpfeed||[]).push([[0],{38:function(e,n,t){},39:function(e,n,t){"use strict";t.r(n);var r=t(2),a=t.n(r),c=t(26),o=t.n(c),i=t(7),s=t(8),l=t(16);t(24),t(40);l.a.initializeApp({apiKey:"AIzaSyDrYdVo7ZeWU3AVYX8iFo7qWAK6gCpMgwQ",authDomain:"agencia-gift.firebaseapp.com",projectId:"agencia-gift",storageBucket:"agencia-gift.appspot.com",messagingSenderId:"404011545951",appId:"1:404011545951:web:7f4a77ec0dce84fb6432ea",measurementId:"G-KE55SGFC5L"});var u,b,d,j,p,O,f,h,g,x,m,v,A,w,k,y,S=l.a.auth(),C=l.a.firestore(),B=l.a.firestore.FieldValue.serverTimestamp,E={google:new l.a.auth.GoogleAuthProvider},I=function(){var e=Object(r.useState)(null),n=Object(s.a)(e,2),t=n[0],a=n[1],c=Object(r.useState)(null),o=Object(s.a)(c,2),i=o[0],l=o[1],u=Object(r.useState)({}),b=Object(s.a)(u,2),d=b[0],j=b[1];return Object(r.useEffect)((function(){return S.onAuthStateChanged(a)}),[a]),Object(r.useEffect)((function(){t?C.collection("userConfig").doc(t.uid).get().then((function(e){return j(e.data()||{})})):j({})}),[t]),{user:t,error:i,userConfig:d,signIn:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"google";l(null),S.signInWithPopup(E[e]).catch((function(e){return l(e)}))},signOut:function(){return S.signOut()}}},D=t(3),z=t(4),G="#e7e7e7",M="#999",K="#666",N=function(e,n,t,r){return Object(z.a)(u||(u=Object(D.a)(["\n    color: ",";\n    background-color: ",";\n\n    &:hover, &:focus {\n        background-color: ",";\n    }\n\n    &:active {\n        background-color: ",";\n    }\n"])),e,n,t||n,r||t||n)},P={idle:"#0062b5",hover:"#008aff",active:"#0062b5",error:"red"},R={primary:N("#fff",P.idle,P.hover,P.active),naked:N(P.idle,"transparent",G)},U="4px",F="8px",L="16px",Z="32px",Q="64px",T=Object(z.a)(b||(b=Object(D.a)(["\n    font: inherit;\n    line-height: 1.5;\n    padding: "," ",";\n    border: 1px solid ",";\n    border-radius: 4px;\n\n    ","\n"])),F,L,M,(function(e){return e.expand&&Object(z.a)(d||(d=Object(D.a)(["\n        flex: 1;\n    "])))})),W=z.b.input(j||(j=Object(D.a)(["\n    ","\n"])),T),q=z.b.textarea(p||(p=Object(D.a)(["\n    ","\n    min-height: 6em;\n"])),T),Y=z.b.button(O||(O=Object(D.a)(["\n    ","\n    ","\n    display: inline-block;\n    vertical-align: middle;\n    cursor: pointer;\n"])),T,R.primary),H=Object(z.b)(Y)(f||(f=Object(D.a)(["\n    ","\n    border: 0 none;\n"])),R.naked),V=z.b.div(h||(h=Object(D.a)(["\n    margin: auto;\n    padding-left: ",";\n    padding-right: ",";\n    max-width: ",";\n"])),L,L,"800px"),X=z.b.div(g||(g=Object(D.a)(["\n    display: flex;\n    flex-direction: column;\n\n    ","\n\n    > * {\n        margin-top: ",";\n        margin-bottom: ",";\n    }\n"])),(function(e){return e.expand&&Object(z.a)(x||(x=Object(D.a)(["\n        flex: 1;\n    "])))}),U,U),J=z.b.div(m||(m=Object(D.a)(["\n    display: flex;\n    justify-content: space-between;\n\n    ","\n\n    ","\n"])),(function(e){return e.wrap&&Object(z.a)(v||(v=Object(D.a)(["\n        flex-wrap: wrap;\n    "])))}),(function(e){var n=e.breakUnder;return n&&Object(z.a)(A||(A=Object(D.a)(["\n        @media (max-width: ","px) {\n            flex-direction: column;\n        }\n    "])),n)})),_=z.b.img(w||(w=Object(D.a)(["\n    align-self: stretch;\n    width: 200px;\n    object-fit: contain;\n    object-position: top;\n    margin-top: ",";\n    margin-bottom: ",";\n    margin-right: ",";\n"])),U,U,F),$=z.b.p(k||(k=Object(D.a)(["\n    color: ",";\n"])),P.hover),ee=Object(z.b)($)(y||(y=Object(D.a)(["\n    color: ",";\n"])),P.error),ne=t(1),te=function(e){var n=e.image,t=e.title,r=e.description,a=e.setTitle,c=e.setDescription;return Object(ne.jsxs)(J,{children:[n&&Object(ne.jsx)(_,{src:n,alt:"Imagem encontrada."}),Object(ne.jsxs)(X,{expand:!0,children:[Object(ne.jsx)(W,{placeholder:"Title...",value:t,onChange:function(e){return a(e.target.value)}}),Object(ne.jsx)(q,{expand:!0,placeholder:"Description...",value:r,onChange:function(e){return c(e.target.value)}}),Object(ne.jsx)(Y,{children:"Publicar"})]})]})},re=t(12),ae=t.n(re),ce=t(13),oe={src:"https://agenciagift.github.io/favicon.png",alt:"Ag\xeancia Gift",width:49.25,height:50},ie="links",se=t(15),le=function(e){var n=e.trim().toLowerCase().split(/[^a-zA-Z\u00C0-\u017F]+/).filter((function(e){return e&&e.length>2}));return Object(se.a)(new Set(n))},ue="LOADING",be="SET_LINKS",de="ADD_LINK",je="REMOVE_LINK",pe="REQUEST_SEARCH",Oe="REQUEST_NEXT_PAGE",fe={nextItem:{},startAfter:{},search:"",loading:!1,ended:!1,links:[]},he=function(e,n){switch(n.type){case ue:return Object(i.a)(Object(i.a)({},e),{},{loading:!0});case be:var t=function(e){var n=[],t=null;return e.forEach((function(e){n.push(Object(i.a)(Object(i.a)({},e.data()),{},{id:e.id}))})),11===n.length&&(n.pop(),t=e.docs[e.size-1]),[n,t]}(n.payload),r=Object(s.a)(t,2),a=r[0],c=r[1],o=e.startAfter.exists?[].concat(Object(se.a)(e.links),Object(se.a)(a)):a;return Object(i.a)(Object(i.a)({},e),{},{loading:!1,links:o,nextItem:c,ended:!c});case de:return Object(i.a)(Object(i.a)({},e),{},{links:[n.payload].concat(Object(se.a)(e.links))});case je:return Object(i.a)(Object(i.a)({},e),{},{links:e.links.filter((function(e){var t=e.id;return n.payload!==t}))});case Oe:return Object(i.a)(Object(i.a)({},e),{},{startAfter:e.nextItem||{}});case pe:return Object(i.a)(Object(i.a)({},fe),{},{search:n.payload});default:return e}},ge=Object(r.createContext)(fe),xe=function(e){var n=e.children,t=Object(r.useReducer)(he,fe),a=Object(s.a)(t,2),c=a[0],o=a[1];Object(r.useEffect)((function(){o({type:ue}),function(e,n){var t=C.collection(ie).orderBy("createdAt","desc").startAt(e).limit(11);if(n){var r=le(n);if(r.length)return t.where("keywords","array-contains-any",r)}return t}(c.startAfter,c.search).get().then((function(e){o({type:be,payload:e})}))}),[c.search,c.startAfter]);var l=function(){var e=Object(ce.a)(ae.a.mark((function e(n){return ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.collection(ie).add(n);case 2:o({type:de,payload:n});case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),u=function(){var e=Object(ce.a)(ae.a.mark((function e(n){return ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.collection(ie).doc(n).delete();case 2:o({type:je,payload:n});case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return Object(ne.jsx)(ge.Provider,{value:Object(i.a)(Object(i.a)({},c),{},{next:function(){return o({type:Oe})},add:l,remove:u,requestSearch:function(e){o({type:pe,payload:e})}}),children:n})},me=/^(http(s)?:\/\/.)(www\.)?[-a-zA-Z0-9@:%._+~#=]+\.[a-z]{2,}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)?/,ve=function(){var e=Object(ce.a)(ae.a.mark((function e(n){var t;return ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://gift-scraper.herokuapp.com/scrape/?format=json","&url=").concat(n)).then((function(e){return e.ok&&e.json()}));case 2:return t=e.sent,e.abrupt("return",t||{});case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),Ae=new Map,we=function(e){var n=Object(r.useState)({loading:!1}),t=Object(s.a)(n,2),a=t[0],c=t[1],o=Object(r.useState)(!0),l=Object(s.a)(o,2),u=l[0],b=l[1];return Object(r.useEffect)((function(){var n=!!e.match(me);b(n);var t=Ae.get(e);if(t)c(Object(i.a)(Object(i.a)({},a),t));else if(n&&!Ae.has(e)){Ae.set(e,null);var r=C.collection("scrape").doc(encodeURIComponent(e)),o=function(){var n=Object(ce.a)(ae.a.mark((function n(){var t,a;return ae.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t=B(),n.next=4,ve(e);case 4:return a=n.sent,n.next=7,r.set(a);case 7:Ae.set(e,a),c(Object(i.a)(Object(i.a)({},a),{},{fetchedAt:t,loading:!1})),n.next=15;break;case 11:n.prev=11,n.t0=n.catch(0),Ae.set(e,{error:n.t0}),c({data:null,error:n.t0,loading:!1});case 15:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(){return n.apply(this,arguments)}}();c({data:null,error:null,loading:!0}),r.get().then((function(n){var t=n.data();t?(Ae.set(e,t),c(Object(i.a)(Object(i.a)({},t),{},{loading:!1}))):o()})).catch((function(e){c({data:null,error:e,loading:!1})}))}}),[e]),{isUrlValid:u,data:a.data,error:a.error,loading:a.loading}},ke=function(){var e=Object(r.useContext)(ge).add,n=Object(r.useState)(""),t=Object(s.a)(n,2),a=t[0],c=t[1],o=Object(r.useState)(""),i=Object(s.a)(o,2),l=i[0],u=i[1],b=Object(r.useState)(""),d=Object(s.a)(b,2),j=d[0],p=d[1],O=Object(r.useState)(""),f=Object(s.a)(O,2),h=f[0],g=f[1],x=Object(r.useState)(""),m=Object(s.a)(x,2),v=m[0],A=m[1],w=I().user,k=we(l),y=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5e3;c(e),setTimeout((function(){return c("")}),n)};Object(r.useEffect)((function(){k.data?(p(k.data.title||""),g(k.data.description||""),A(k.data.images[0]||"")):A("")}),[k.data]),Object(r.useEffect)((function(){k.error&&y("Ocorreu um erro ao pesquisar. Verifique se o link est\xe1 correto e tente novamente",1e4)}),[k.error]);var S=function(){var e=w.uid,n=w.displayName,t=w.photoURL;return{url:l,title:j,description:h,image:v,author:{uid:e,displayName:n,photoURL:t},createdAt:B(),keywords:le("".concat(j," ").concat(h))}},C=function(){var n=Object(ce.a)(ae.a.mark((function n(t){return ae.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t.preventDefault(),c(""),l){n.next=5;break}return y("Informe o link para compartilhar."),n.abrupt("return");case 5:return n.prev=5,n.next=8,e(S());case 8:c(""),u(""),p(""),g(""),A(""),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(5),c(n.t0);case 14:case"end":return n.stop()}}),n,null,[[5,11]])})));return function(e){return n.apply(this,arguments)}}();return{state:{error:a,url:l,title:j,description:h,image:v,loading:k.loading,showPublishForm:k.isUrlValid&&!k.loading},actions:{setTitle:p,setDescription:g,addLink:C,setUrl:function(e){c(""),u(e),p(e?j:""),g(e?h:""),A(e?v:"")}}}};var ye,Se,Ce,Be,Ee,Ie,De,ze,Ge,Me=function(){var e=ke(),n=e.state,t=e.actions,r=I(),a=r.user;return r.error&&!a?Object(ne.jsx)(ee,{children:"Erro no login. Tente novamente."}):a?Object(ne.jsxs)("form",{onSubmit:t.addLink,children:[Object(ne.jsx)("h4",{children:"Compartilhar link"}),Object(ne.jsxs)(X,{children:[Object(ne.jsx)(W,{placeholder:"https://",value:n.url,onChange:function(e){return t.setUrl(e.target.value)}}),n.loading&&Object(ne.jsx)($,{children:"Carregando..."}),n.showPublishForm&&Object(ne.jsx)(te,Object(i.a)(Object(i.a)({},n),t)),n.error&&Object(ne.jsx)(ee,{children:"Desculpe! Ocorreu um erro inesperado :("})]})]}):null},Ke=function(e){var n=e.color,t=void 0===n?K:n;return Object(ne.jsx)("svg",{version:"1.1",viewBox:"0 0 32 32",width:"16px",height:"16px",xmlns:"http://www.w3.org/2000/svg",children:Object(ne.jsx)("path",{d:"m14.043 0.0078125c-5.3701 0.068248-10.449 3.3774-12.68 8.2637-2.2883 4.7601-1.6495 10.664 1.5996 14.826 3.2048 4.2711 8.8267 6.4228 14.064 5.3828h0.003906c1.8669-0.351 3.6187-1.1381 5.2031-2.1836l5.4219 5.4219c0.37413 0.37472 0.98134 0.37472 1.3555 0l2.707-2.707c0.37472-0.37413 0.37472-0.98134 0-1.3555l-5.4375-5.4375c2.8144-4.2212 3.2446-9.843 0.88867-14.361-2.4325-4.881-7.6746-8.0154-13.127-7.8496zm0.10742 5.1816c0.00436 3.96e-5 0.009371 3.96e-5 0.013671 0 3.4522-0.10801 6.8459 1.9236 8.3828 5.0156 0.0023 0.00436 0.005312 0.009372 0.007813 0.013672 1.408 2.6981 1.2799 6.1396-0.24805 8.7656-0.78782 1.2734-2.0081 2.4671-3.2402 3.2695-0.92393 0.55046-1.9484 0.93903-3.0039 1.1367-0.0024 5e-4 -0.003459-5.17e-4 -0.005859 0-3.3047 0.65716-6.9578-0.7419-8.9766-3.4395-0.003322-0.00392-0.0063756-0.007919-0.0097656-0.011719-2.0515-2.6262-2.4647-6.4608-1.0176-9.4629 0.00246-0.004799 0.0035094-0.010825 0.0058594-0.015624 1.4049-3.0821 4.705-5.2305 8.0918-5.2715z",fill:t})})},Ne=z.b.form(ye||(ye=Object(D.a)(["\n    display: flex;\n    align-items: center;\n    flex: 1;\n    margin-left: ",";\n    margin-right: ",";\n    border-radius: 999px;\n\n    transition: 0.3s ease-in-out;\n\n    ","\n"])),L,L,(function(e){return e.focus&&Object(z.a)(Se||(Se=Object(D.a)(["\n        background-color: #fff;\n    "])))})),Pe=Object(z.b)(W)(Ce||(Ce=Object(D.a)(["\n    flex: 1;\n    background-color: transparent;\n    border: 0 none;\n\n    &:hover, &:focus {\n        outline: none;\n    }\n\n    &:hover {\n        cursor: pointer;\n    }\n\n    &:focus {\n        cursor: auto;\n    }\n"]))),Re=Object(z.b)(Y)(Be||(Be=Object(D.a)(["\n    display: flex;\n    align-items: center;\n    background-color: transparent;\n    border: 0 none;\n    padding-left: 0;\n\n    ","\n"])),N("transparent","transparent")),Ue=Object(z.b)(Ke)(Ee||(Ee=Object(D.a)(["\n    display: block;\n    width: 0.5em;\n    height: 0.5em;\n"])));function Fe(){var e=Object(r.useState)(""),n=Object(s.a)(e,2),t=n[0],a=n[1],c=Object(r.useState)(!1),o=Object(s.a)(c,2),i=o[0],l=o[1],u=Object(r.useContext)(ge).requestSearch;return Object(ne.jsxs)(Ne,{onSubmit:function(e){e.preventDefault(),u(t)},focus:i,children:[Object(ne.jsx)(Pe,{type:"text",placeholder:i?"":"Clique para pesquisar",value:t,onChange:function(e){return a(e.target.value)},onFocus:function(){return l(!0)},onBlur:function(){return l(!1)}}),i&&Object(ne.jsx)(Re,{children:Object(ne.jsx)(Ue,{})})]})}var Le,Ze,Qe,Te,We,qe=z.b.div(Ie||(Ie=Object(D.a)(["\n    position: absolute;\n    top: 100%;\n    right: 0;\n    min-width: 200px;\n    margin-top: ",";\n    background-color: #fff;\n    border-radius: 4px;\n    filter: drop-shadow(0 5px 10px rgba(0, 0, 0, 0.3));\n\n    &:before {\n        content: '';\n        position: absolute;\n        right: 16px;\n        bottom: 100%;\n        border-width: 0 "," ",";\n        border-style: solid;\n        border-color: transparent transparent #fff;\n    }\n"])),L,F,F),Ye=z.b.ul(De||(De=Object(D.a)(["\n    list-style: none;\n    margin: 0;\n    padding: 0;\n"]))),He=z.b.p(ze||(ze=Object(D.a)(["\n    margin: ",";\n    font-size: 0.75em;\n"])),L),Ve=z.b.button(Ge||(Ge=Object(D.a)(["\n    display: block;\n    width: 100%;\n    border: 0 none;\n    padding: ",";\n\n    white-space: nowrap;\n    font: inherit;\n    text-align: left;\n\n    ","\n"])),L,N("currentColor","transparent",G)),Xe=function(e){var n=e.showMenu,t=e.setShowMenu,r=I(),a=r.user,c=r.signIn,o=r.signOut;if(!n)return null;var i=function(){return t(!1)};return Object(ne.jsx)(qe,{children:a?Object(ne.jsxs)(ne.Fragment,{children:[Object(ne.jsx)(He,{children:a.displayName}),Object(ne.jsx)(Ye,{children:Object(ne.jsx)("li",{children:Object(ne.jsx)(Ve,{onClick:function(){o(),i()},children:"Sair"})})})]}):Object(ne.jsx)(ne.Fragment,{children:Object(ne.jsx)(Ye,{children:Object(ne.jsx)("li",{children:Object(ne.jsx)(Ve,{onClick:function(){c(),i()},children:"Login"})})})})})},Je=z.b.div(Le||(Le=Object(D.a)(["\n    position: relative;\n"]))),_e=z.b.button(Ze||(Ze=Object(D.a)(["\n    ","\n    padding: 0;\n    border: 1px solid #fff;\n    border-radius: 50%;\n    overflow: hidden;\n\n    &:hover, &:focus, &:active {\n        border-color: ",";\n    }\n"])),N("currentColor","transparent"),P.hover),$e=z.b.img(Qe||(Qe=Object(D.a)(["\n    display: block;\n    width: 46px;\n    height: 46px;\n"])));function en(){var e=Object(r.useState)(!1),n=Object(s.a)(e,2),t=n[0],a=n[1],c=I().user,o={src:c?c.photoURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAATdAAAE3QBedN++wAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAS2SURBVHic5ZvNixxFGMZ/1buQj90EIbIbZgmDUQyIEEhyDB5CMBiSETUQ9KKEnMRIFOKeNH+AEE/xoJDkENB4iosERJnMxZtZIZLFHFzIYVcd8SPmazeweT1U9aSnnd7t6n6rd+I88J62+3mf99maqur6MCJCSBhjRoA9wJNArUcAzPeIn4GmiNwJqi+EAcaYMaABvAjsBdYWpFoAvgW+BKZEpK2jMAERUQlgDXAM+A5YAkQ5lhz3MWCNmm6FwiPgdeBGgKKz4obLGa2qAcB+4GqFhafjKrC/cgOAOnB5FQtPx2WgXokBwG6g3QdFp6MN7A5qAHAEWOyDYrNiETiibgAwBJzqgwLzxilgSMUAV/zFACJngS9czAbgv5jHhDwGaP7nLwD7gE098mxyf/tcsyWUMgD7m9cQ8jtwyKOveRn4TSn3sn3CSr29Rof3NTDm3TvD48BXCvkXWWZ0yEpeR2eomwMe8y0+oWMjOjPMNhnzhKzELaXm90LR4hNanlfS0splAHBAKeGnZYtPaPpESdOBZQ3ADnnXlJJtUzRgm5Kma6SGxnSio0qJbuLWGpQMMI5TQ9vRngYA67GdlkaSplbxCX1NJW1zwPqYN+Ih3uThElVZfK/EE4Kzhq0VoMuAw0oJwDZXbWhydmqNAIwxE8BOxQSaXCE4d7qaOy3gILaj0cIuRa4QnAZbc8eAhiI5wBZjzLgWmePaosXn0ACIjDGj2HV7bRxS5HpFkSvGHlc7DXSGl3TcAp5QGP7qwD+BNDYiYKuyszFGgXPGmGjFJzNgjDHAGWCDmqpubI3QG/t74Tng/RLvTxLm5xmjBnCeMM0rGZeAmkez3wxMVaDrPOhNMVeKP4HXWGY3BzsqvQr8UZGmpgF+wn5tVYU7wDR2ahtPb3e52AGMVKjlusH2sKE6mX7HrcI99P8FEfYwwqBifuANGKYaA+5h+xofbATWBdCSRDADZrD7AdMurovIkg+BMWYIOzrtcLEPeEZZ5zzAcfTG1fvAB8BwgCWxYcd9X1HvcdD7GPoB2K5deA8jtrtcGpobYD9aFkoSzQIjoYtPmDBC+R3lBWA0EpHb2OlwUQh2AzLoeb6uhDZXvHFbFE0RuR1PhKZKEJ0WkVaJ9wvB5TxdgmIqJgKYAB7g34xuUmHTz/gpFNkweQBMiLh9ARGZA64UcHG6yqafhss9XeDVK67mrn2BCwWIQmyA+KKIhk6tSQM+xn9S9CgaMI+tFUgYICJ3gZOeZDOez4eAr4aTrlaguwUAnPUkfNozeQj4LObMYGvsoMsAN1+f9CA86PFsKPhomPzPN0nG8NIi/5Dy0ioOg4c9dLZ6cmQQ18l/SOoe8FbFhRvgXfJP4f0OSbkkvsfkLgHjFRRfA77x0OV/TC6RzPegZBt7+GBtgMLXAW/jv2Re7KBkInGRo7K/ACeAUYXCNwDvAb8W0FHuqKwTUOaw9F/AZ9jrLZs9m/kb2HPDfxfMneuwdK5bY2556kPgnRUfzoYAP2Kvw7WxZ4HjW2BjwLiLp4BnS+QB+Ag4IXmW4Tyb42BemEiZMLhXZhIm1BnUS1MpIwbz2lzKhMG9OJky4pG8Ojvwl6eDGNCVoM+vz/8LPV93/9ZULQ4AAAAASUVORK5CYII=",alt:c?c.displayName:"Fa\xe7a login"};return Object(ne.jsxs)(Je,{children:[Object(ne.jsx)(_e,{onClick:function(){return a(!t)},children:Object(ne.jsx)($e,{src:o.src,alt:o.alt})}),Object(ne.jsx)(Xe,{showMenu:t,setShowMenu:a})]})}var nn=z.b.header(Te||(Te=Object(D.a)(["\n    padding-top: ",";\n    padding-bottom: ",";\n    background-color: ",";\n"])),F,F,G),tn=Object(z.b)(V)(We||(We=Object(D.a)(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n"])));function rn(){return Object(ne.jsx)(nn,{children:Object(ne.jsxs)(tn,{children:[Object(ne.jsx)("img",Object(i.a)(Object(i.a)({},oe),{},{alt:oe.alt})),Object(ne.jsx)(Fe,{}),Object(ne.jsx)(en,{})]})})}var an,cn,on,sn,ln,un,bn,dn,jn,pn,On,fn,hn,gn,xn=z.b.li(an||(an=Object(D.a)(["\n    margin-bottom: ",";\n    border-radius: ",";\n    box-shadow: 0 3px 0 ",";\n"])),Z,L,G),mn=z.b.a(cn||(cn=Object(D.a)(["\n    word-break: break-word;\n    font-size: 1.4em;\n    color: ",";\n    text-decoration: none;\n\n    &:hover, &:focus, &:active {\n        color: ",";\n        text-decoration: underline;\n    }\n"])),P.idle,P.hover),vn=z.b.p(on||(on=Object(D.a)(["\n    font-size: 0.8em;\n"]))),An=Object(z.b)(_)(sn||(sn=Object(D.a)(["\n    margin-right: ",";\n    margin-bottom: ",";\n"])),Z,Z),wn=Object(z.b)(J)(ln||(ln=Object(D.a)(["\n    justify-content: flex-end;\n    margin-top: ",";\n    margin-bottom: ",";\n"])),L,L),kn=(Object(z.b)(H)(un||(un=Object(D.a)(["\n    border-radius: 999px;\n    margin-right: ",";\n    color: ",";\n    transition-property: background-color;\n\n    ","\n\n    &:hover, &:focus, &:active {\n        color: ",";\n    }\n\n    &:active {\n        transform: scale(0.9);\n    }\n\n    svg {\n        display: block;\n        color: inherit;\n\n        > * {\n            fill: currentColor;\n        }\n    }\n"])),F,M,(function(e){return"string"===typeof e.children?Object(z.a)(bn||(bn=Object(D.a)(["\n        padding: "," ",";\n    "])),F,L):Object(z.a)(dn||(dn=Object(D.a)(["\n        padding: ",";\n    "])),F)}),(function(e){var n=e.activeColor;return n&&P[n]||P.hover})),function(e){e.id,I().userConfig;return Object(ne.jsx)(wn,{})});function yn(e){var n,t,r=e.link,a=function(e){var n;return(null===e||void 0===e||null===(n=e.createdAt)||void 0===n?void 0:n.toDate)&&e.createdAt.toDate instanceof Function?e.createdAt.toDate():new Date(0)}(r);return Object(ne.jsx)(xn,{children:Object(ne.jsxs)(J,{breakUnder:600,children:[r.image&&Object(ne.jsx)(An,{src:r.image,alt:r.title}),Object(ne.jsxs)(X,{expand:!0,children:[Object(ne.jsx)("p",{children:Object(ne.jsx)(mn,{href:r.url,target:"_blank",rel:"noreferrer",children:r.title||r.url})}),Object(ne.jsxs)(vn,{children:[Object(ne.jsx)("strong",{children:null===(n=r.author)||void 0===n?void 0:n.displayName}),Object(ne.jsx)("span",{children:" em ".concat(a.toLocaleString())})]}),null===(t=r.description)||void 0===t?void 0:t.split("\n").filter((function(e){return e})).map((function(e){return Object(ne.jsx)("p",{children:e})})),Object(ne.jsx)(kn,Object(i.a)({},r))]})]})},r.id)}var Sn=z.b.div(jn||(jn=Object(D.a)(["\n    margin-top: ",";\n    margin-bottom: ",";\n"])),Q,Q),Cn=Object(z.b)(J)(pn||(pn=Object(D.a)(["\n    margin-bottom: ",";\n    padding-bottom: ",";\n    border-bottom: 1px solid ",";\n"])),Z,U,M),Bn=Object(z.b)(H)(On||(On=Object(D.a)(["\n    padding-top: ",";\n    padding-bottom: ",";\n    margin-left: ",";\n"])),U,U,L),En=z.b.ul(fn||(fn=Object(D.a)(["\n    list-style: none;\n    margin: 0;\n    padding: 0;\n"]))),In=Object(z.b)(H)(hn||(hn=Object(D.a)(["\n    display: block;\n    width: 100%;\n    margin: 0;\n    padding: ",";\n    text-align: center;\n    color: ",";\n"])),F,P.idle),Dn=Object(z.b)($)(gn||(gn=Object(D.a)(["\n    margin: 0;\n    padding: ",";\n    text-align: center;\n"])),F),zn=function(e){var n=e.next,t=e.loading,r=e.empty;return e.ended?Object(ne.jsx)("p",{children:"N\xe3o h\xe1 mais resultados."}):t?Object(ne.jsx)(Dn,{children:"Carregando..."}):r?Object(ne.jsx)("p",{children:"Nada para exibir :( Tente uma pesquisa diferente."}):Object(ne.jsx)(In,{onClick:function(){return n()},children:"Carregar mais"})};function Gn(){var e=Object(r.useContext)(ge),n=e.links,t=e.search,a=e.loading,c=e.ended,o=e.next,i=e.requestSearch;return Object(ne.jsxs)(Sn,{children:[t&&Object(ne.jsxs)(Cn,{children:[Object(ne.jsxs)("p",{children:["Pesquisando por: ",Object(ne.jsx)("strong",{children:t}),"."]}),Object(ne.jsx)(Bn,{onClick:function(){return i("")},children:"Remover filtro"})]}),Object(ne.jsx)(En,{children:n.map((function(e){return Object(ne.jsx)(yn,{link:e},e.id)}))}),Object(ne.jsx)(zn,{next:o,loading:a,empty:!n.length,ended:c})]})}var Mn=function(){return Object(ne.jsxs)(ne.Fragment,{children:[Object(ne.jsx)(rn,{}),Object(ne.jsxs)(V,{children:[Object(ne.jsx)(Me,{}),Object(ne.jsx)(Gn,{})]})]})};t(38),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(Object(ne.jsx)(a.a.StrictMode,{children:Object(ne.jsx)(xe,{children:Object(ne.jsx)(Mn,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[39,1,2]]]);
//# sourceMappingURL=main.2313f655.chunk.js.map
(this.webpackJsonpfeed=this.webpackJsonpfeed||[]).push([[0],{33:function(e,n,t){},41:function(e,n,t){"use strict";t.r(n);var r=t(1),a=t.n(r),c=t(18),o=t.n(c),i=(t(33),t(12)),s=t.n(i),u=t(17),l=t(8),b=t(16);t(24),t(42);b.a.initializeApp({apiKey:"AIzaSyDrYdVo7ZeWU3AVYX8iFo7qWAK6gCpMgwQ",authDomain:"agencia-gift.firebaseapp.com",projectId:"agencia-gift",storageBucket:"agencia-gift.appspot.com",messagingSenderId:"404011545951",appId:"1:404011545951:web:7f4a77ec0dce84fb6432ea",measurementId:"G-KE55SGFC5L"});var d,j,A,g,f,h,p,O,m,x,v,w=b.a.auth(),B=b.a.firestore(),C=b.a.firestore.FieldValue.serverTimestamp,S={google:new b.a.auth.GoogleAuthProvider},I=function(){var e=Object(r.useState)(null),n=Object(l.a)(e,2),t=n[0],a=n[1],c=Object(r.useState)(null),o=Object(l.a)(c,2),i=o[0],s=o[1];return w.onAuthStateChanged(a),Object(r.useEffect)((function(){t&&B.collection("userConfig").doc(t.uid).get().then((function(e){return s(e.data())}))}),[t]),{user:t,userConfig:i,signIn:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"google";return w.signInWithPopup(S[e])},signOut:function(){return w.signOut()}}},E=t(10),k=/^(http(s)?:\/\/.)(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)?/,D=function(){var e=Object(u.a)(s.a.mark((function e(n){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://gift-scraper.herokuapp.com/scrape/?format=json","&url=").concat(n)).then((function(e){return e.ok&&e.json()}));case 2:return t=e.sent,e.abrupt("return",t||{});case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),G=new Map,M=function(e){var n=Object(r.useState)({loading:!1}),t=Object(l.a)(n,2),a=t[0],c=t[1],o=Object(r.useState)(!0),i=Object(l.a)(o,2),b=i[0],d=i[1];return Object(r.useEffect)((function(){var n=!!e.match(k);if(d(n),n&&!a.loading){var t=G.get(e);if(t)c(Object(E.a)(Object(E.a)({},a),t));else{var r=B.collection("scrape").doc(encodeURIComponent(e)),o=function(){var n=Object(u.a)(s.a.mark((function n(){var t;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,D(e);case 3:return t=n.sent,n.next=6,r.set(t);case 6:G.set(e,t),c(Object(E.a)(Object(E.a)({},t),{},{loading:!1})),n.next=14;break;case 10:n.prev=10,n.t0=n.catch(0),G.set(e,{error:n.t0}),c({data:null,error:n.t0,loading:!1});case 14:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(){return n.apply(this,arguments)}}();c({data:null,error:null,loading:!0}),r.get().then((function(n){var t=n.data();t?(G.set(e,t),c(Object(E.a)(Object(E.a)({},t),{},{loading:!1}))):o()})).catch((function(e){c({data:null,error:e,loading:!1})}))}}else c(Object(E.a)(Object(E.a)({},a),{},{data:null,error:null}))}),[e]),Object(E.a)({isUrlValid:b},a)},F=t(5),U=t(6),K="#e7e7e7",Q="#999",Y=function(e,n,t,r){return Object(U.a)(d||(d=Object(F.a)(["\n    color: ",";\n    background-color: ",";\n\n    &:hover, &:focus {\n        background-color: ",";\n    }\n\n    &:active {\n        background-color: ",";\n    }\n"])),e,n,t||n,r||t||n)},y="#008aff",P={primary:Y("#fff","#0062b5",y,"#0062b5")},R={XS:4,S:8,M:16,L:32,XL:64},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"m";return"".concat(R[e.toUpperCase()]||R.M,"px")},H={default:800},N=Object(U.a)(j||(j=Object(F.a)(["\n    font: inherit;\n    line-height: 1.5;\n    padding: ",";\n    border: 1px solid ",";\n    border-radius: 0;\n\n    ","\n"])),z("s"),Q,(function(e){return e.expand&&Object(U.a)(A||(A=Object(F.a)(["\n        flex: 1;\n    "])))})),W=U.b.input(g||(g=Object(F.a)(["\n    ","\n"])),N),Z=U.b.textarea(f||(f=Object(F.a)(["\n    ","\n    min-height: 6em;\n"])),N),T=U.b.button(h||(h=Object(F.a)(["\n    ","\n    ",";\n"])),N,P.primary),q=U.b.div(p||(p=Object(F.a)(["\n    margin: auto;\n    padding-left: ",";\n    padding-right: ",";\n    max-width: ",";\n"])),z(),z(),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"default";return"".concat(H[e]||H.default,"px")}()),L=U.b.div(O||(O=Object(F.a)(["\n    display: flex;\n    flex-direction: column;\n\n    ","\n\n    > * {\n        margin-top: ",";\n        margin-bottom: ",";\n    }\n"])),(function(e){return e.expand&&Object(U.a)(m||(m=Object(F.a)(["\n        flex: 1;\n    "])))}),z("xs"),z("xs")),V=U.b.div(x||(x=Object(F.a)(["\n    display: flex;\n    justify-content: space-between;\n"]))),J=U.b.img(v||(v=Object(F.a)(["\n    align-self: stretch;\n    width: 200px;\n    object-fit: contain;\n    object-position: top;\n    margin-top: ",";\n    margin-bottom: ",";\n    margin-right: ",";\n"])),z("xs"),z("xs"),z("s")),X=t(2);var _,$,ee,ne,te,re,ae,ce,oe,ie=function(){var e=Object(r.useState)(""),n=Object(l.a)(e,2),t=n[0],a=n[1],c=Object(r.useState)(""),o=Object(l.a)(c,2),i=o[0],b=o[1],d=Object(r.useState)(""),j=Object(l.a)(d,2),A=j[0],g=j[1],f=Object(r.useState)(""),h=Object(l.a)(f,2),p=h[0],O=h[1],m=Object(r.useState)(""),x=Object(l.a)(m,2),v=x[0],w=x[1],S=I().user,E=M(i),k=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5e3;a(e),setTimeout((function(){return a("")}),n)};Object(r.useEffect)((function(){E.data?(g(E.data.title||""),O(E.data.description||""),w(E.data.image||"")):w("")}),[E.data]),Object(r.useEffect)((function(){E.error&&k("Ocorreu um erro ao pesquisar. Verifique se o link est\xe1 correto e tente novamente",1e4)}),[E.error]);var D=function(){var e=C(),n=S.uid;return{url:i,title:A,description:p,image:v,author:n,createdAt:e}},G=function(){var e=Object(u.a)(s.a.mark((function e(n){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),a(""),i){e.next=5;break}return k("Informe o link para compartilhar."),e.abrupt("return");case 5:return e.prev=5,e.next=8,B.collection("links").add(D());case 8:a(""),b(""),g(""),O(""),w(""),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(5),a("Ocorreu um erro inesperado :( Desculpe.");case 14:case"end":return e.stop()}}),e,null,[[5,11]])})));return function(n){return e.apply(this,arguments)}}();if(!S)return null;var F=function(){return Object(X.jsxs)(V,{children:[v&&Object(X.jsx)(J,{src:v,alt:"Imagem encontrada."}),Object(X.jsxs)(L,{expand:!0,children:[Object(X.jsx)(W,{placeholder:"Title...",value:A,onChange:function(e){return g(e.target.value)}}),Object(X.jsx)(Z,{expand:!0,placeholder:"Description...",value:p,onChange:function(e){return O(e.target.value)}}),Object(X.jsx)(T,{children:"Publicar"})]})]})};return Object(X.jsxs)("form",{onSubmit:G,children:[Object(X.jsx)("h4",{children:"Compartilhar link"}),Object(X.jsxs)(L,{children:[Object(X.jsx)(W,{placeholder:"https://",value:i,onChange:function(e){b(e.target.value),a("")}}),E.isUrlValid&&!E.loading&&!t&&Object(X.jsx)(F,{}),t&&Object(X.jsx)("p",{style:{color:"red"},children:"".concat(t)})]})]})},se={src:"https://agenciagift.github.io/favicon.png",alt:"Ag\xeancia Gift",width:49.25,height:50},ue=t(19),le=t(20),be={value:{term:""},status:"IDLE"},de=Object(le.b)({name:"search",initialState:be,reducers:{set:function(e,n){e.value=n.payload}}}),je=de.actions.set,Ae=de.reducer,ge=U.b.form(_||(_=Object(F.a)(["\n    display: flex;\n    flex: 1;\n    margin-left: ",";\n    margin-right: ",";\n    padding-left: ",";\n    padding-right: ",";\n    border-radius: 999px;\n\n    transition: 0.3s ease-in-out;\n\n    ","\n"])),z("l"),z("l"),z("s"),z("s"),(function(e){return e.focus&&Object(U.a)($||($=Object(F.a)(["\n        background-color: #fff;\n    "])))})),fe=Object(U.b)(W)(ee||(ee=Object(F.a)(["\n    flex: 1;\n    background-color: transparent;\n    border: 0 none;\n\n    &:hover, &:focus {\n        outline: none;\n    }\n\n    &:hover {\n        cursor: pointer;\n    }\n\n    &:focus {\n        cursor: auto;\n    }\n"]))),he=Object(U.b)(T)(ne||(ne=Object(F.a)(["\n    background-color: transparent;\n    border: 0 none;\n\n    ","\n"])),Y("currentColor","transparent")),pe=U.b.img(te||(te=Object(F.a)(["\n    display: block;\n    width: 1em;\n    height: 1em;\n    opacity: 0.5;\n"])));function Oe(){var e=Object(r.useState)(""),n=Object(l.a)(e,2),t=n[0],a=n[1],c=Object(r.useState)(!1),o=Object(l.a)(c,2),i=o[0],s=o[1],u=Object(ue.b)();return Object(X.jsxs)(ge,{onSubmit:function(e){e.preventDefault(),u(je({term:t}))},focus:i,children:[Object(X.jsx)(fe,{type:"text",placeholder:"Clique para pesquisar",value:t,onChange:function(e){return a(e.target.value)},onFocus:function(){return s(!0)},onBlur:function(){return s(!1)}}),i&&Object(X.jsx)(he,{children:Object(X.jsx)(pe,{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAABugAAAboB6KsBBgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAVPSURBVHic7ZtdaB1FFMd/c5s2H1ZtCWiaoNaYKFYRLSqCYhGFqrRpCwpiESOiogTsg+In2reKPltRKopfiH2wqUpFNAUrYqW2VqEGWmK1bVqNthaTpmlqjg+z12ySnbmzu7O794J/OC87e8/5n//OnZ05M6tEBJ9QSs0DbgUWAW1Aa2BtwBnAEeAQMBjYAWCriOz0SsSVrw8BlFILga7AlgB1CdwcBDYHtlVETqUm5gIRSWzADcA2QDzbcWAtMDcNP6ccEia+COjNIPHp9hvQA8yuCgGAecAG4HQOyYdtH7CsUAGATqA/58TDNgE8RzBu+TKnQVApdQvwATC/4s2TGAG+R4/45VF/GFjA5NvhIuDiGD4JeHSLyGjM30XD4cn3AOO4PaWDwCvAbUC9Y89qB9YAfTHi7ADaMv8LAA86EhoA7iZl9wTOA94A/nGI+RNwdmYCADcCpyqQGAIeBeZ4HZjgcuBjBxE+AUreBQAWAr/n1Q0tQrj8/V7yKgB6urq7QtD3gcYskw/xuRk4WoHPPT4FeDFLxROK0AkctnD6GzgntQDBIDRqCfRh2oEuhQjXASct3F72IcCblgA/ksPcvIII3RZ+40BnYgGAKzC/foaB9iKTD/FcbxFhYxoBbIubtUUnHuI5Hzhm4bo4tgDoRY7pnX+k6K4fIcLjvgbpssPVFoePFJ1whAANwC8Gvnvj+CqhsZJoDAOvG9oKg4icBF41NHcopS5z9VVSStWja3hR+ExExuISzAmbLG2mBzoDJeAmYK6hfXMcRnlCRPYAew3Ny139lIAOQ9sEerFRzeg1XDflNAMldIEiCgdE5I/YlPLFLsP1ZqXUHBcHNgEGE1HKF4ctbS0uDmwCHIpNJ3/YBDDlNQX/CwCY/iv57Mykg41jydI25SaTiq2x6eQP21P+2cWBTYC22HTyh22gG3BxUEIvdqJQCwKYesBRETnu4sDWA85XSjUmopUfTJsqTt0ftAC/Gtrq0QXJaoZpyuvU/UEL0IeuBEWhKy6jvKCUakHXCaOwz9VPSUT+RO/xR2GZUkrFJZcTugATN9MaYQbK70rT0nIBsDQGqTxxn+F6v4hsd/YSVFguwFwR2kVBpXBLRWiVhe8TsUtigdMdFqeri046xHMWemM0iudpoDWpACssAgwADUUnH/B8yMJzS2x/05x/ZXH+XhUkfxX64IWJ411pBbje4lyApwtM/lz0nMXG7wugKbEAQaBNlgATwKoCkm8Evq6QfCIRooJ1AH9ZAowDD+eYfCvwrWPysUUwBV1K5aNw64G6jJO/Bl2YiZN8LBFswdc4BPkSuDKDxBuAx7Bv1XsRoRKRDQ5BJoB3gAs9JF4C7sW87eVdhEqEZgMbHQONAe8CdxBzMxV9KOpZYI/HxJ1EqHhQMlgMPU9wStN68yTGgM+B7eh6Q9lG0FWcFvQ6ox24HX1gMmv0ActF5MSUqzGe0p3YJyG1YDN6Qtz/6GKKPS/sXYQkA1Ud+gTpYBUkk9S2JBYgJEQT8Az64wbfBEeAt9EluRcyEqE7lQAhIeajixO9wImUpLYB9wNnTouxLgMBhoBmL98MlaGUakLPIlcAl6JH+hb06zSMYXTldiBkn4qIsZanlFoHPOmNrEaPVwGiELxGm9FiNAD7RWQooS/fIryWuQC+4VmEb5w2EKsJIvIUemD0gVk1JwB4FWF3TQoA3kT4oebGgOlIMSYcAy5JPQ+oBiPZPOEBLxOhajH0p7YuH1sJ8BHl76aLJu5ZhCXAfkvio+iPvP7b6ar5MWA6lFJnoTdPrgWuRp+C3Ql8B7wlIv3h+/8F6+s+wtrvmX0AAAAASUVORK5CYII=",alt:"Pesquisar"})})]})}var me,xe,ve,we,Be,Ce=U.b.div(re||(re=Object(F.a)(["\n    position: absolute;\n    top: 100%;\n    right: 0;\n    min-width: 200px;\n    margin-top: ",";\n    background-color: #fff;\n    border-radius: 4px;\n    filter: drop-shadow(0 5px 10px rgba(0, 0, 0, 0.3));\n\n    &:before {\n        content: '';\n        position: absolute;\n        right: 16px;\n        bottom: 100%;\n        border-width: 0 "," ",";\n        border-style: solid;\n        border-color: transparent transparent #fff;\n    }\n"])),z(),z("s"),z("s")),Se=U.b.ul(ae||(ae=Object(F.a)(["\n    list-style: none;\n    margin: 0;\n    padding: 0;\n"]))),Ie=U.b.p(ce||(ce=Object(F.a)(["\n    margin: ",";\n    font-size: 0.75em;\n"])),z()),Ee=U.b.button(oe||(oe=Object(F.a)(["\n    display: block;\n    width: 100%;\n    border: 0 none;\n    padding: ",";\n\n    white-space: nowrap;\n    font: inherit;\n    text-align: left;\n\n    ","\n"])),z(),Y("currentColor","transparent",K)),ke=function(e){var n=e.showMenu,t=e.setShowMenu,r=I(),a=r.user,c=r.signIn,o=r.signOut;if(!n)return null;var i=function(){return t(!1)};return Object(X.jsx)(Ce,{children:a?Object(X.jsxs)(X.Fragment,{children:[Object(X.jsx)(Ie,{children:a.displayName}),Object(X.jsx)(Se,{children:Object(X.jsx)("li",{children:Object(X.jsx)(Ee,{onClick:function(){o(),i()},children:"Sair"})})})]}):Object(X.jsx)(X.Fragment,{children:Object(X.jsx)(Se,{children:Object(X.jsx)("li",{children:Object(X.jsx)(Ee,{onClick:function(){c(),i()},children:"Login"})})})})})},De=U.b.div(me||(me=Object(F.a)(["\n    position: relative;\n"]))),Ge=U.b.button(xe||(xe=Object(F.a)(["\n    ","\n    padding: 0;\n    border: 1px solid #fff;\n    border-radius: 50%;\n    overflow: hidden;\n\n    &:hover, &:focus, &:active {\n        border-color: ",";\n    }\n"])),Y("currentColor","transparent"),y),Me=U.b.img(ve||(ve=Object(F.a)(["\n    display: block;\n    width: 46px;\n    height: 46px;\n"])));function Fe(){var e=Object(r.useState)(!1),n=Object(l.a)(e,2),t=n[0],a=n[1],c=I().user,o={src:c?c.photoURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAATdAAAE3QBedN++wAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAS2SURBVHic5ZvNixxFGMZ/1buQj90EIbIbZgmDUQyIEEhyDB5CMBiSETUQ9KKEnMRIFOKeNH+AEE/xoJDkENB4iosERJnMxZtZIZLFHFzIYVcd8SPmazeweT1U9aSnnd7t6n6rd+I88J62+3mf99maqur6MCJCSBhjRoA9wJNArUcAzPeIn4GmiNwJqi+EAcaYMaABvAjsBdYWpFoAvgW+BKZEpK2jMAERUQlgDXAM+A5YAkQ5lhz3MWCNmm6FwiPgdeBGgKKz4obLGa2qAcB+4GqFhafjKrC/cgOAOnB5FQtPx2WgXokBwG6g3QdFp6MN7A5qAHAEWOyDYrNiETiibgAwBJzqgwLzxilgSMUAV/zFACJngS9czAbgv5jHhDwGaP7nLwD7gE098mxyf/tcsyWUMgD7m9cQ8jtwyKOveRn4TSn3sn3CSr29Rof3NTDm3TvD48BXCvkXWWZ0yEpeR2eomwMe8y0+oWMjOjPMNhnzhKzELaXm90LR4hNanlfS0splAHBAKeGnZYtPaPpESdOBZQ3ADnnXlJJtUzRgm5Kma6SGxnSio0qJbuLWGpQMMI5TQ9vRngYA67GdlkaSplbxCX1NJW1zwPqYN+Ih3uThElVZfK/EE4Kzhq0VoMuAw0oJwDZXbWhydmqNAIwxE8BOxQSaXCE4d7qaOy3gILaj0cIuRa4QnAZbc8eAhiI5wBZjzLgWmePaosXn0ACIjDGj2HV7bRxS5HpFkSvGHlc7DXSGl3TcAp5QGP7qwD+BNDYiYKuyszFGgXPGmGjFJzNgjDHAGWCDmqpubI3QG/t74Tng/RLvTxLm5xmjBnCeMM0rGZeAmkez3wxMVaDrPOhNMVeKP4HXWGY3BzsqvQr8UZGmpgF+wn5tVYU7wDR2ahtPb3e52AGMVKjlusH2sKE6mX7HrcI99P8FEfYwwqBifuANGKYaA+5h+xofbATWBdCSRDADZrD7AdMurovIkg+BMWYIOzrtcLEPeEZZ5zzAcfTG1fvAB8BwgCWxYcd9X1HvcdD7GPoB2K5deA8jtrtcGpobYD9aFkoSzQIjoYtPmDBC+R3lBWA0EpHb2OlwUQh2AzLoeb6uhDZXvHFbFE0RuR1PhKZKEJ0WkVaJ9wvB5TxdgmIqJgKYAB7g34xuUmHTz/gpFNkweQBMiLh9ARGZA64UcHG6yqafhss9XeDVK67mrn2BCwWIQmyA+KKIhk6tSQM+xn9S9CgaMI+tFUgYICJ3gZOeZDOez4eAr4aTrlaguwUAnPUkfNozeQj4LObMYGvsoMsAN1+f9CA86PFsKPhomPzPN0nG8NIi/5Dy0ioOg4c9dLZ6cmQQ18l/SOoe8FbFhRvgXfJP4f0OSbkkvsfkLgHjFRRfA77x0OV/TC6RzPegZBt7+GBtgMLXAW/jv2Re7KBkInGRo7K/ACeAUYXCNwDvAb8W0FHuqKwTUOaw9F/AZ9jrLZs9m/kb2HPDfxfMneuwdK5bY2556kPgnRUfzoYAP2Kvw7WxZ4HjW2BjwLiLp4BnS+QB+Ag4IXmW4Tyb42BemEiZMLhXZhIm1BnUS1MpIwbz2lzKhMG9OJky4pG8Ojvwl6eDGNCVoM+vz/8LPV93/9ZULQ4AAAAASUVORK5CYII=",alt:c?c.displayName:"Fa\xe7a login"};return Object(X.jsxs)(De,{children:[Object(X.jsx)(Ge,{onClick:function(){return a(!t)},children:Object(X.jsx)(Me,{src:o.src,alt:o.alt})}),Object(X.jsx)(ke,{showMenu:t,setShowMenu:a})]})}var Ue=U.b.header(we||(we=Object(F.a)(["\n    padding-top: ",";\n    padding-bottom: ",";\n    background-color: ",";\n"])),z("s"),z("s"),K),Ke=Object(U.b)(q)(Be||(Be=Object(F.a)(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n"])));function Qe(){return Object(X.jsx)(Ue,{children:Object(X.jsxs)(Ke,{children:[Object(X.jsx)("img",Object(E.a)(Object(E.a)({},se),{},{alt:se.alt})),Object(X.jsx)(Oe,{}),Object(X.jsx)(Fe,{})]})})}var Ye,ye,Pe,Re=function(e){var n=Object(r.useState)([]),t=Object(l.a)(n,2),a=t[0],c=t[1];return Object(r.useEffect)((function(){var n=B.collection(e).orderBy("createdAt","desc").onSnapshot((function(e){var n=[];e.forEach((function(e){n.push(Object(E.a)(Object(E.a)({},e.data()),{},{id:e.id}))})),c(n)}));return function(){return n()}}),[e]),{docs:a}},ze=U.b.li(Ye||(Ye=Object(F.a)(["\n    margin-bottom: ",";\n"])),z("l")),He=U.b.a(ye||(ye=Object(F.a)(["\n    word-break: break-word;\n"])));function Ne(e){var n=e.link;return Object(X.jsxs)(ze,{children:[Object(X.jsx)("p",{children:Object(X.jsx)("strong",{children:Object(X.jsx)(He,{href:n.url,target:"_blank",rel:"noreferrer",children:n.title||n.url})})}),Object(X.jsx)("p",{children:n.description})]},n.id)}var We=U.b.ul(Pe||(Pe=Object(F.a)(["\n    list-style: none;\n    margin: "," 0;\n    padding: 0;\n"])),z("xl"));function Ze(){var e=Re("links").docs;return Object(X.jsx)(We,{children:e.map((function(e){return Object(X.jsx)(Ne,{link:e},e.id)}))})}var Te=function(){return Object(X.jsxs)(X.Fragment,{children:[Object(X.jsx)(Qe,{}),Object(X.jsxs)(q,{children:[Object(X.jsx)(ie,{}),Object(X.jsx)(Ze,{})]})]})},qe=Object(le.a)({reducer:{search:Ae}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(Object(X.jsx)(a.a.StrictMode,{children:Object(X.jsx)(ue.a,{store:qe,children:Object(X.jsx)(Te,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[41,1,2]]]);
//# sourceMappingURL=main.2246cb89.chunk.js.map
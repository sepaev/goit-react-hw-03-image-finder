(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{32:function(e,t,n){},57:function(e,t,n){"use strict";n.r(t);var a,r,o,i,s,c,p,l,u,d,g,h,b,x,f,m,j=n(0),v=n.n(j),O=n(11),y=n.n(O),w=(n(32),n(5)),k=n(6),S=n(8),C=n(7),N=n(9),q=(n(16),"22594439-4316377fda5f0b6c1b052f095"),F="photo",z="horizontal",M=12,I={position:"top-right",autoClose:3e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0},R=n(2),L=n(3),T=L.a.header(a||(a=Object(R.a)(["\n  top: 0;\n  left: 0;\n  position: sticky;\n  z-index: 1100;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 64px;\n  padding-right: 24px;\n  padding-left: 24px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  color: #fff;\n  background-color: #3f51b5;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14),\n    0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n"]))),A=L.a.form(r||(r=Object(R.a)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n"]))),D=L.a.button(o||(o=Object(R.a)(["\n  display: inline-block;\n  width: 48px;\n  height: 48px;\n  border: 0;\n  background-image: url('https://image.flaticon.com/icons/svg/149/149852.svg');\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n  &:hover {\n    opacity: 1;\n  }\n"]))),E=L.a.span(i||(i=Object(R.a)(["\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  clip-path: inset(50%);\n  border: 0;\n"]))),P=L.a.input(s||(s=Object(R.a)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n  &::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),U=n(1),B=function(e){Object(S.a)(n,e);var t=Object(C.a)(n);function n(){var e;Object(w.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:""},e.handleQueryChange=function(t){e.setState({query:t.currentTarget.value.toLowerCase()})},e.handleSubmit=function(t){t.preventDefault();var n=e.state.query.trim();n?(e.props.onSubmit(n),e.setState({query:""})):N.b.error("Please input search value.",I)},e}return Object(k.a)(n,[{key:"render",value:function(){return Object(U.jsx)(T,{children:Object(U.jsxs)(A,{onSubmit:this.handleSubmit,children:[Object(U.jsx)(D,{type:"submit",children:Object(U.jsx)(E,{children:"Search"})}),Object(U.jsx)(P,{className:"SearchForm-input",type:"text",autocomplete:"off",name:"pictureName",autoFocus:!0,placeholder:"Search images and photos",value:this.state.query,onChange:this.handleQueryChange}),Object(U.jsx)(N.a,{})]})})}}]),n}(j.Component),W=n(12),H=n(10),J=n.n(H),Q=n(15),_=L.a.ul(c||(c=Object(R.a)(["\n  display: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  grid-gap: 16px;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"]))),V=n(59),G=n(26),K=n.n(G).a.create({baseURL:"".concat("https://pixabay.com/api/"),responseType:"json"}),X=L.a.li(p||(p=Object(R.a)(["\n  border-radius: 2px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14),\n    0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n"]))),Y=L.a.img(l||(l=Object(R.a)(["\n  width: 100%;\n  height: 260px;\n  object-fit: cover;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover {\n    transform: scale(1.03);\n    cursor: zoom-in;\n  }\n"]))),Z=function(e){var t=e.id,n=e.src,a=e.alt,r=e.onClick;return Object(U.jsx)(X,{children:Object(U.jsx)(Y,{src:n,alt:a,id:t,loading:"lazy",onClick:r})})},$=L.a.div(u||(u=Object(R.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.8);\n  z-index: 1200;\n"]))),ee=L.a.div(d||(d=Object(R.a)(["\n  max-width: calc(100vw - 48px);\n  max-height: calc(100vh - 24px);\n"]))),te=L.a.img(g||(g=Object(R.a)(["\n  width: 100%auto;\n"]))),ne=function(e){Object(S.a)(n,e);var t=Object(C.a)(n);function n(){var e;Object(w.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).onTapped=function(t){var n=e.props.modalNeighbors,a=n.prev,r=n.next;t.preventDefault(),"Escape"===t.key&&e.props.exitFunc(),"ArrowLeft"===t.key&&e.props.changeNeighbors(a.id),"ArrowRight"===t.key&&e.props.changeNeighbors(r.id)},e.onClickModal=function(t){"DIV"===t.target.nodeName&&e.props.exitFunc()},e}return Object(k.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.onTapped)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.onTapped)}},{key:"render",value:function(){var e=this.props.modalNeighbors.curr;return Object(U.jsx)($,{onClick:this.onClickModal,children:Object(U.jsx)(ee,{children:Object(U.jsx)(te,{src:e.largeImageURL,alt:e.tags,loading:"lazy"})})})}}]),n}(j.Component),ae=L.a.button(h||(h=Object(R.a)(["\n  padding: 8px 16px;\n  border-radius: 2px;\n  background-color: #3f51b5;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  text-align: center;\n  display: inline-block;\n  color: #fff;\n  border: 0;\n  text-decoration: none;\n  cursor: pointer;\n  font-family: inherit;\n  font-size: 18px;\n  line-height: 24px;\n  font-style: normal;\n  font-weight: 500;\n  min-width: 180px;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14),\n    0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n  &:hover,\n  &:focus {\n    background-color: #303f9f;\n  }\n"]))),re=function(e){var t=e.title,n=e.onClick;return Object(U.jsx)(ae,{onClick:n,children:t})},oe=function(e){Object(S.a)(n,e);var t=Object(C.a)(n);function n(){var e;Object(w.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={response:{pages:0,total:0,hits:null},query:"",readyForResponse:!0,page:1,modalIsOpen:!1,modalNeighbors:null},e.toggleModal=function(t){if(t){t.preventDefault();var n=t.target.id,a=e.getNeighbors(n);e.setState((function(e){return{modalIsOpen:!e.modalIsOpen,modalNeighbors:a}}))}else e.setState((function(e){return{modalIsOpen:!e.modalIsOpen,modalNeighbors:null}}))},e.changeNeighbors=function(t){var n=e.getNeighbors(t);e.setState({modalNeighbors:n})},e.getNeighbors=function(t){var n=e.state.response.hits;if(n)for(var a=0;a<n.length;a++)if(n[a].id.toString()===t.toString()){var r=0===a?n[n.length-1]:n[a-1],o=a===n.length-1?n[0]:n[a+1];return{prev:r,curr:n[a],next:o}}return null},e.getResponse=function(){var t=Object(Q.a)(J.a.mark((function t(n){var a,r,o,i,s,c,p=arguments;return J.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=p.length>1&&void 0!==p[1]?p[1]:e.state.page,r=q,o=F,i=z,s=M,t.prev=2,t.next=5,K.get("/",{params:{q:n,page:a,key:r,image_type:o,orientation:i,per_page:s}});case 5:if(200!==(c=t.sent).status){t.next=10;break}return t.abrupt("return",c);case 10:throw new Error("Error - "+c.status);case 11:t.next=16;break;case 13:return t.prev=13,t.t0=t.catch(2),t.abrupt("return",{data:{total:0,hits:[],error:t.t0}});case 16:case"end":return t.stop()}}),t,null,[[2,13]])})));return function(e){return t.apply(this,arguments)}}(),e.getClearStateObject=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return{response:{pages:0,total:0,hits:null},query:e,readyForResponse:t,page:1,modalIsOpen:!1}},e.loadMore=function(){e.setState({page:e.state.page+1,readyForResponse:!0})},e.componentDidUpdate=function(){var t=Object(Q.a)(J.a.mark((function t(n,a){var r,o,i,s,c,p,l,u;return J.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=e.props.query,o=e.props.changeStatus,i=e.state,s=i.query,c=i.readyForResponse,p=i.page,!c&&r===s){t.next=11;break}return o("pending"),l=M,t.next=8,e.getResponse(r).then((function(e){return e.data})).then((function(t){var n=t.total,i=t.hits,c=t.error;if(n>0){var u,d=n%l>0?parseInt(n/l)+1:n/l;return r!==s?(u=null,o("resolved","Was found ".concat(n," results. Avaliable ").concat(d," pages!"))):(u=a.response.hits,o("resolved","Added more ".concat(l," pictures! Current page ").concat(p," of  ").concat(d," pages."))),{response:{pages:d,total:n,hits:u?[].concat(Object(W.a)(u),Object(W.a)(i)):Object(W.a)(i)},query:r,readyForResponse:!1,page:p}}return c?(console.dir(c.message),o("rejected",c.message)):o("idle","Please, start new search."),e.getClearStateObject(r,!1)}));case 8:u=t.sent,e.setState(u),window.setTimeout((function(e){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}),300);case 11:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),e}return Object(k.a)(n,[{key:"render",value:function(){var e=this,t=this.state.response.hits;return Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(_,{children:null!==t&&t.map((function(t){var n=t.id,a=t.webformatURL,r=t.tags;return Object(U.jsx)(Z,{id:n,src:a,alt:r,onClick:e.toggleModal},Object(V.a)())}))}),this.state.response.pages>this.state.page&&Object(U.jsx)(re,{title:"load more ".concat(M," pictures"),onClick:this.loadMore}),this.state.modalIsOpen&&Object(U.jsx)(ne,{modalNeighbors:this.state.modalNeighbors,exitFunc:this.toggleModal,changeNeighbors:this.changeNeighbors})]})}}]),n}(j.Component),ie=L.a.div(b||(b=Object(R.a)(["\n  position: fixed;\n  top: 40%;\n  padding: 40px;\n  text-align: center;\n  margin: 50px auto;\n  font-size: 50px;\n  font-weight: 800;\n  color: lightgrey;\n  filter: drop-shadow(2px 4px 6px black);\n  background: linear-gradient(217deg, rgba(255, 0, 0, 0.8), rgba(255, 0, 0, 0) 70.71%),\n    linear-gradient(127deg, rgba(0, 255, 0, 0.8), rgba(0, 255, 0, 0) 70.71%),\n    linear-gradient(336deg, rgba(0, 0, 255, 0.8), rgba(0, 0, 255, 0) 70.71%);\n  border-radius: 50px;\n"]))),se=function(e){var t=e.query;return Object(U.jsxs)(ie,{children:["Searching for a ",t,"..."]})},ce=L.a.section(x||(x=Object(R.a)(["\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-gap: 16px;\n  padding-bottom: 24px;\n  margin-top: 0;\n"]))),pe=L.a.div(f||(f=Object(R.a)(["\n  position: fixed;\n  top: 40%;\n  text-align: center;\n  margin: 50px auto;\n  font-size: 50px;\n  font-weight: 800;\n  color: lightgrey;\n  filter: drop-shadow(2px 4px 6px black);\n"]))),le=L.a.h1(m||(m=Object(R.a)(["\n  color: black;\n  margin-top: 0;\n"]))),ue=function(e){Object(S.a)(n,e);var t=Object(C.a)(n);function n(){var e;Object(w.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={status:"idle",query:"",lastMessage:""},e.handleFormSubmit=function(t){e.setState({status:"resolved",query:t})},e.changeStatus=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=e.state,r=a.status,o=a.lastMessage;r!==t&&(""!==n?(o!==n&&N.b.info(n,I),e.setState({status:t,lastMessage:n})):e.setState({status:t}))},e}return Object(k.a)(n,[{key:"render",value:function(){var e=this.state.query;return Object(U.jsxs)(ce,{children:[Object(U.jsx)(B,{onSubmit:this.handleFormSubmit}),"idle"===this.state.status&&Object(U.jsxs)(pe,{children:[e&&Object(U.jsxs)(le,{children:["Sorry, ",e," not found"]}),"Waiting for you to start new searching"]}),Object(U.jsx)(oe,{query:e,changeStatus:this.changeStatus}),"rejected"===this.state.status&&Object(U.jsx)(pe,{children:this.state.lastMessage}),"pending"===this.state.status&&Object(U.jsx)(se,{query:e})]})}}]),n}(j.Component),de=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,60)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),o(e),i(e)}))};y.a.render(Object(U.jsx)(v.a.StrictMode,{children:Object(U.jsx)(ue,{})}),document.getElementById("root")),de()}},[[57,1,2]]]);
//# sourceMappingURL=main.f5481fde.chunk.js.map
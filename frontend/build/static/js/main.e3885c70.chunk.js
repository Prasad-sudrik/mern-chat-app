(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{151:function(e,t,n){},152:function(e,t,n){},182:function(e,t,n){},187:function(e,t,n){"use strict";n.r(t);var r,a,s=n(0),c=n(49),i=n.n(c),o=(n(151),n(66)),l=n(13),u=(n(152),n(110)),d=n(112),j=n(10),b=n(17),h=n(7),p=n(81),O=n(111),x=n(45),f=n(117),m=n(71),g=n(18),v=n.n(g),C=n(3),w=Object(s.createContext)(),y=function(){return Object(s.useContext)(w)},k=function(e){var t=e.children,n=Object(s.useState)(null),r=Object(h.a)(n,2),a=r[0],c=r[1],i=Object(s.useState)(),o=Object(h.a)(i,2),u=o[0],d=o[1],j=Object(s.useState)([]),b=Object(h.a)(j,2),p=b[0],O=b[1],x=Object(s.useState)([]),f=Object(h.a)(x,2),m=f[0],g=f[1],v=Object(l.useHistory)();return Object(s.useEffect)((function(){var e=JSON.parse(localStorage.getItem("userInfo"));c(e),e||v.push("/")}),[v]),Object(C.jsx)(w.Provider,{value:{selectedChat:u,user:a,setUser:c,setSelectedChat:d,chats:p,setChats:O,notification:m,setNotification:g},children:t})},S=function(){var e=Object(s.useState)(!1),t=Object(h.a)(e,2),n=t[0],r=t[1],a=Object(s.useState)(),c=Object(h.a)(a,2),i=c[0],o=c[1],l=Object(s.useState)(),d=Object(h.a)(l,2),g=d[0],w=d[1],k=Object(s.useState)(),S=Object(h.a)(k,2),_=S[0],F=S[1],E=Object(f.a)(),A=Object(m.useHistory)(),z=y().setUser,I=function(){var e=Object(b.a)(Object(j.a)().mark((function e(){var t,n,r;return Object(j.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(F(!0),i&&g){e.next=5;break}return E({title:"Please Fill all the Fields",status:"warning",duration:5e3,isClosable:!0,position:"bottom"}),F(!1),e.abrupt("return");case 5:return e.prev=5,t={headers:{"Content-type":"application/json"}},e.next=9,v.a.post("/api/user/login",{email:i,password:g},t);case 9:n=e.sent,r=n.data,E({title:"Login Successful",status:"success",duration:5e3,isClosable:!0,position:"bottom"}),z(r),localStorage.setItem("userInfo",JSON.stringify(r)),F(!1),A.push("/chats"),e.next=22;break;case 18:e.prev=18,e.t0=e.catch(5),E({title:"Error Occured",description:e.t0.response.data.message,status:"warning",duration:5e3,isClosable:!0,position:"bottom"}),F(!1);case 22:case"end":return e.stop()}}),e,null,[[5,18]])})));return function(){return e.apply(this,arguments)}}();return Object(C.jsxs)(u.e,{spacing:"5px",children:[Object(C.jsxs)(p.a,{id:"email",isRequired:!0,children:[Object(C.jsx)(p.b,{children:"Email"}),Object(C.jsx)(O.a,{value:i,placeholder:"Enter Your Email",onChange:function(e){return o(e.target.value)}})]}),Object(C.jsxs)(p.a,{id:"password",isRequired:!0,children:[Object(C.jsx)(p.b,{children:"Password"}),Object(C.jsxs)(O.b,{children:[Object(C.jsx)(O.a,{value:g,type:n?"text":"password",placeholder:"Enter Your Password",onChange:function(e){return w(e.target.value)}}),Object(C.jsx)(O.c,{width:"4.5rem",children:Object(C.jsx)(x.a,{h:"1.75rem",size:"sm",onClick:function(){return r((function(e){return!e}))},children:n?"Hide":"Show"})})]})]}),Object(C.jsx)(x.a,{colorScheme:"blue",width:"100%",style:{marginTop:15},onClick:I,isLoading:_,children:"Login"}),Object(C.jsx)(x.a,{colorScheme:"red",variant:"solid",width:"100%",style:{marginTop:15},onClick:function(){o("guest@example.com"),w("123456")},children:"Get Guest User Credentials"})]})},_=function(){var e=y().setUser,t=Object(s.useState)(!1),n=Object(h.a)(t,2),r=n[0],a=n[1],c=Object(s.useState)(),i=Object(h.a)(c,2),o=i[0],l=i[1],d=Object(s.useState)(),g=Object(h.a)(d,2),w=g[0],k=g[1],S=Object(s.useState)(),_=Object(h.a)(S,2),F=_[0],E=_[1],A=Object(s.useState)(),z=Object(h.a)(A,2),I=z[0],N=z[1],R=Object(s.useState)(),B=Object(h.a)(R,2),W=B[0],P=B[1],U=Object(m.useHistory)(),L=Object(s.useState)(!1),M=Object(h.a)(L,2),T=M[0],D=M[1],G=Object(f.a)(),J=function(){return a((function(e){return!e}))},H=function(){var t=Object(b.a)(Object(j.a)().mark((function t(){var n,r,a;return Object(j.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(D(!0),o&&w&&F&&I){t.next=5;break}return G({title:"Please Fill all the Fields",status:"warning",duration:5e3,isClosable:!0,position:"bottom"}),D(!1),t.abrupt("return");case 5:if(F===I){t.next=8;break}return G({title:"Passwords Do Not Match",status:"warning",duration:5e3,isClosable:!0,position:"bottom"}),t.abrupt("return");case 8:return t.prev=8,n={headers:{"Content-type":"application/json"}},t.next=12,v.a.post("/api/user",{name:o,email:w,password:F,pic:W},n);case 12:r=t.sent,a=r.data,G({title:"Registration Successful",status:"warning",duration:5e3,isClosable:!0,position:"bottom"}),e(a),localStorage.setItem("userInfo",JSON.stringify(a)),D(!1),U.push("/chats"),t.next=25;break;case 21:t.prev=21,t.t0=t.catch(8),G({title:"Error Occured",description:t.t0.response.data.message,status:"warning",duration:5e3,isClosable:!0,position:"bottom"}),D(!1);case 25:case"end":return t.stop()}}),t,null,[[8,21]])})));return function(){return t.apply(this,arguments)}}();return Object(C.jsxs)(u.e,{spacing:"5px",children:[Object(C.jsxs)(p.a,{id:"first-name",isRequired:!0,children:[Object(C.jsx)(p.b,{children:"Name"}),Object(C.jsx)(O.a,{placeholder:"Enter Your Name",onChange:function(e){return l(e.target.value)}})]}),Object(C.jsxs)(p.a,{id:"email",isRequired:!0,children:[Object(C.jsx)(p.b,{children:"Email"}),Object(C.jsx)(O.a,{placeholder:"Enter Your Email",onChange:function(e){return k(e.target.value)}})]}),Object(C.jsxs)(p.a,{id:"password",isRequired:!0,children:[Object(C.jsx)(p.b,{children:"Password"}),Object(C.jsxs)(O.b,{children:[Object(C.jsx)(O.a,{type:r?"text":"password",placeholder:"Enter Your Password",onChange:function(e){return E(e.target.value)}}),Object(C.jsx)(O.c,{width:"4.5rem",children:Object(C.jsx)(x.a,{h:"1.75rem",size:"sm",onClick:J,children:r?"Hide":"Show"})})]})]}),Object(C.jsxs)(p.a,{id:"password",isRequired:!0,children:[Object(C.jsx)(p.b,{children:"Confirm Password"}),Object(C.jsxs)(O.b,{children:[Object(C.jsx)(O.a,{type:r?"text":"password",placeholder:"Confirm Password",onChange:function(e){return N(e.target.value)}}),Object(C.jsx)(O.c,{width:"4.5rem",children:Object(C.jsx)(x.a,{h:"1.75rem",size:"sm",onClick:J,children:r?"Hide":"Show"})})]})]}),Object(C.jsxs)(p.a,{id:"pic",children:[Object(C.jsx)(p.b,{children:"Upload your Picture"}),Object(C.jsx)(O.a,{type:"file",p:1.5,accept:"image/*",onChange:function(e){return function(e){if(D(!0),void 0!==e){if("image/jpeg"!==e.type&&"image/png"!==e.type)return G({title:"Please Select an Image!",status:"warning",duration:5e3,isClosable:!0,position:"bottom"}),void D(!1);var t=new FormData;t.append("file",e),t.append("upload_preset","chat-app"),t.append("cloud_name","de4u2lz9l"),fetch("https://api.cloudinary.com/v1_1/de4u2lz9l/image/upload",{method:"post",body:t}).then((function(e){return e.json()})).then((function(e){P(e.url.toString()),D(!1)})).catch((function(e){console.log(e),D(!1)}))}else G({title:"Please Select an Image!",status:"warning",duration:5e3,isClosable:!0,position:"bottom"})}(e.target.files[0])}})]}),Object(C.jsx)(x.a,{colorScheme:"blue",width:"100%",style:{marginTop:15},onClick:H,isLoading:T,children:"Sign Up"})]})},F=function(){var e=Object(m.useHistory)();return Object(s.useEffect)((function(){JSON.parse(localStorage.getItem("userInfo"))&&e.push("/chats")}),[e]),Object(C.jsxs)(u.b,{maxW:"xl",centerContent:!0,children:[Object(C.jsx)(u.a,{d:"flex",justifyContent:"center",p:3,bg:"white",w:"100%",m:"40px 0 15px 0",borderRadius:"lg",borderWidth:"1px",children:Object(C.jsx)(u.d,{fontSize:"4xl",fontFamily:"Work sans",color:"black",textAlign:"center",children:"Talk-A-Tive"})}),Object(C.jsx)(u.a,{bg:"white",w:"100%",p:4,borderRadius:"lg",borderWidth:"1px",children:Object(C.jsxs)(d.e,{variant:"soft-rounded",children:[Object(C.jsxs)(d.b,{mb:"1em",children:[Object(C.jsx)(d.a,{width:"50%",children:"Login"}),Object(C.jsx)(d.a,{width:"50%",children:"Sign Up"})]}),Object(C.jsxs)(d.d,{children:[Object(C.jsx)(d.c,{children:Object(C.jsx)(S,{})}),Object(C.jsx)(d.c,{children:Object(C.jsx)(_,{})})]})]})})]})},E=n(54),A=n(8),z=n(115),I=n(118),N=n(114),R=n(116),B=n(82),W=n(32),P=n(83),U=function(e){var t=e.user,n=e.children,r=Object(A.d)(),a=r.isOpen,s=r.onOpen,c=r.onClose;return Object(C.jsxs)(C.Fragment,{children:[n?Object(C.jsx)("span",{onClick:s,children:n}):Object(C.jsx)(x.b,{display:{base:"flex"},icon:Object(C.jsx)(W.f,{}),onClick:s}),Object(C.jsxs)(R.f,{size:"lg",isCentered:!0,isOpen:a,onClose:c,children:[Object(C.jsx)(R.l,{}),Object(C.jsxs)(R.i,{height:"410px",children:[Object(C.jsx)(R.k,{fontSize:"40px",fontFamily:"Work sans",display:"flex",justifyContent:"center",children:t.name}),Object(C.jsx)(R.h,{}),Object(C.jsxs)(R.g,{display:"flex",flexDir:"column",alignItems:"center",justifyContent:"space-between",children:[Object(C.jsx)(P.a,{borderRadius:"full",boxSize:"150px",src:t.pic,alt:t.name}),Object(C.jsxs)(u.d,{fontSize:{base:"28px",md:"30px"},fontFamily:"Work sans",children:["Email: ",t.email]})]}),Object(C.jsx)(R.j,{children:Object(C.jsx)(x.a,{colorScheme:"blue",mr:3,onClick:c,children:"Close"})})]})]})]})},L=n(113),M=function(){return Object(C.jsxs)(u.c,{children:[Object(C.jsx)(L.a,{height:"45px"}),Object(C.jsx)(L.a,{height:"45px"}),Object(C.jsx)(L.a,{height:"45px"}),Object(C.jsx)(L.a,{height:"45px"}),Object(C.jsx)(L.a,{height:"45px"}),Object(C.jsx)(L.a,{height:"45px"}),Object(C.jsx)(L.a,{height:"45px"}),Object(C.jsx)(L.a,{height:"45px"}),Object(C.jsx)(L.a,{height:"45px"}),Object(C.jsx)(L.a,{height:"45px"}),Object(C.jsx)(L.a,{height:"45px"}),Object(C.jsx)(L.a,{height:"45px"})]})},T=function(e){var t=e.user,n=e.handleFunction;return Object(C.jsxs)(u.a,{onClick:n,bg:"#E8E8E8",_hover:{background:"#38B2AC",color:"white"},w:"100%",display:"flex",alignItems:"center",color:"black",px:3,py:2,mb:2,borderRadius:"lg",children:[Object(C.jsx)(N.a,{mr:"2",size:"sm",cursor:"pointer",name:t.name,src:t.pic}),Object(C.jsxs)(u.a,{children:[Object(C.jsx)(u.d,{children:t.name}),Object(C.jsxs)(u.d,{fontSize:"xs",children:[Object(C.jsx)("b",{children:"Email :"}),t.email]})]})]})},D=function(e,t){return t[0]._id===e._id?t[1].name:t[0].name},G=function(e,t,n,r){return n<e.length-1&&(e[n+1].sender._id!==t.sender._id||void 0===e[n+1].sender._id)&&e[n].sender._id!==r},J=function(e,t,n){return t===e.length-1&&e[e.length-1].sender._id!==n&&e[e.length-1].sender._id},H=function(e,t,n,r){return n<e.length-1&&e[n+1].sender._id===t.sender._id&&e[n].sender._id!==r?33:n<e.length-1&&e[n+1].sender._id!==t.sender._id&&e[n].sender._id!==r||n===e.length-1&&e[n].sender._id!==r?0:"auto"},Y=function(){var e=Object(f.a)(),t=Object(s.useState)(""),n=Object(h.a)(t,2),r=n[0],a=n[1],c=Object(s.useState)([]),i=Object(h.a)(c,2),o=i[0],d=i[1],p=Object(s.useState)(!1),m=Object(h.a)(p,2),g=m[0],w=m[1],k=Object(s.useState)(),S=Object(h.a)(k,2),_=S[0],F=S[1],P=y(),L=P.user,G=P.setSelectedChat,J=P.chats,H=P.setChats,Y=P.setUser,q=P.notification,K=(P.setNotification,Object(l.useHistory)()),Q=Object(A.d)(),V=Q.isOpen,X=Q.onOpen,Z=Q.onClose,$=function(){var t=Object(b.a)(Object(j.a)().mark((function t(){var n,a,s;return Object(j.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r){t.next=3;break}return e({title:"Please Enter something in search",status:"warning",duration:5e3,isClosable:!0,position:"top-left"}),t.abrupt("return");case 3:return t.prev=3,w(!0),n={headers:{Authorization:"Bearer ".concat(L.token)}},t.next=8,v.a.get("/api/user?search=".concat(r),n);case 8:a=t.sent,s=a.data,w(!1),d(s),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(3),e({title:"Error Occured!",description:"Failed to Load the Search Results",status:"error",duration:5e3,isClosable:!0,position:"bottom-left"});case 17:case"end":return t.stop()}}),t,null,[[3,14]])})));return function(){return t.apply(this,arguments)}}(),ee=function(){var t=Object(b.a)(Object(j.a)().mark((function t(n){var r,a,s;return Object(j.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,F(!0),r={headers:{"Content-type":"application/json",Authorization:"Bearer ".concat(L.token)}},t.next=5,v.a.post("/api/chat",{userId:n},r);case 5:a=t.sent,s=a.data,J.find((function(e){return e._id===s._id}))||H([s].concat(Object(E.a)(J))),G(s),F(!1),Z(),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(0),e({title:"Error fetching the chat",description:t.t0.message,status:"error",duration:5e3,isClosable:!0,position:"bottom-left"});case 16:case"end":return t.stop()}}),t,null,[[0,13]])})));return function(e){return t.apply(this,arguments)}}();return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsxs)(u.a,{display:"flex",justifyContent:"space-between",alignItems:"center",bg:"white",w:"100%",padding:"5px 10px 5px 10px",borderWidth:"5px",children:[Object(C.jsx)(z.a,{label:"Search Users to chat",hasArrow:!0,placement:"bottom-end",children:Object(C.jsxs)(x.a,{variant:"ghost",onClick:X,children:[Object(C.jsx)("i",{className:"fas fa-search"}),Object(C.jsx)(u.d,{display:{base:"none",md:"flex"},px:"4",children:"Search User"})]})}),Object(C.jsx)(u.d,{fontSize:"2xl",fontFamily:"Work sans",children:"Tak-A-Tive"}),Object(C.jsxs)("div",{children:[Object(C.jsxs)(I.a,{children:[Object(C.jsx)(I.b,{p:1,children:Object(C.jsx)(W.c,{fontSize:"2xl",m:1})}),Object(C.jsxs)(I.e,{pl:2,children:[!q.length&&"No New Messages",q.map((function(e){return Object(C.jsx)(I.d,{children:e.chat.isGroupChat?"New Message in ".concat(e.chat.chatName):"New Message from ".concat(D(L,e.chat.users))},e._id)}))]})]}),Object(C.jsxs)(I.a,{children:[Object(C.jsx)(I.b,{as:x.a,rightIcon:Object(C.jsx)(W.d,{}),children:Object(C.jsx)(N.a,{size:"sm",cursor:"pointer",name:L.name,src:L.pic})}),Object(C.jsxs)(I.e,{children:[Object(C.jsx)(U,{user:L,children:Object(C.jsx)(I.d,{children:"My Profile"})}),Object(C.jsx)(I.c,{}),Object(C.jsx)(I.d,{onClick:function(){console.log("logout"),localStorage.removeItem("userInfo"),H([]),Y(null),G(""),K.push("/")},children:"Logout"})]})]})]})]}),Object(C.jsxs)(R.a,{placement:"left",onClose:Z,isOpen:V,children:[Object(C.jsx)(R.e,{}),Object(C.jsxs)(R.c,{children:[Object(C.jsx)(R.d,{borderBottomWidth:"1px",children:"Search Users"}),Object(C.jsxs)(R.b,{children:[Object(C.jsxs)(u.a,{display:"flex",pb:2,children:[Object(C.jsx)(O.a,{placeholder:"Search by name or email",mr:2,value:r,onChange:function(e){return a(e.target.value)}}),Object(C.jsx)(x.a,{onClick:$,children:"Go"})]}),g?Object(C.jsx)(M,{}):null===o||void 0===o?void 0:o.map((function(e){return Object(C.jsx)(T,{user:e,handleFunction:function(){return ee(e._id)}},e._id)})),_&&Object(C.jsx)(B.a,{ml:"auto",display:"flex"})]})]})]})]})},q=function(e){var t=e.user,n=e.handleFunction;return Object(C.jsxs)(u.a,{px:2,py:1,borderRadius:"lg",m:1,mb:2,variant:"solid",fontSize:12,bg:"purple",color:"white",cursor:"pointer",onClick:n,children:[t.name,Object(C.jsx)(W.e,{pl:1})]})},K=function(e){var t=e.children,n=Object(A.d)(),r=n.isOpen,a=n.onOpen,c=n.onClose,i=Object(s.useState)(),o=Object(h.a)(i,2),l=o[0],d=o[1],m=Object(s.useState)([]),g=Object(h.a)(m,2),w=g[0],k=g[1],S=Object(s.useState)(),_=Object(h.a)(S,2),F=(_[0],_[1]),z=Object(s.useState)([]),I=Object(h.a)(z,2),N=I[0],B=I[1],W=Object(s.useState)(!1),P=Object(h.a)(W,2),U=P[0],L=P[1],M=Object(f.a)(),D=y(),G=D.user,J=D.chats,H=D.setChats,Y=function(){var e=Object(b.a)(Object(j.a)().mark((function e(t){var n,r,a;return Object(j.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(F(t),t){e.next=3;break}return e.abrupt("return");case 3:return e.prev=3,L(!0),n={headers:{Authorization:"Bearer ".concat(G.token)}},e.next=8,v.a.get("/api/user?search=".concat(t),n);case 8:r=e.sent,a=r.data,console.log(a),L(!1),B(a),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(3),M({title:"Error Occured",description:"Failed to Load the Search Results",status:"error",duration:5e3,isClosable:!0,position:"bottom-left"}),L(!1);case 19:case"end":return e.stop()}}),e,null,[[3,15]])})));return function(t){return e.apply(this,arguments)}}(),K=function(){var e=Object(b.a)(Object(j.a)().mark((function e(){var t,n,r;return Object(j.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(l&&w){e.next=3;break}return M({title:"Please fill all the fields",status:"warning",duration:5e3,isClosable:!0,position:"top"}),e.abrupt("return");case 3:return e.prev=3,t={headers:{Authorization:"Bearer ".concat(G.token)}},e.next=7,v.a.post("api/chat/group",{name:l,users:JSON.stringify(w.map((function(e){return e._id})))},t);case 7:n=e.sent,r=n.data,H([r].concat(Object(E.a)(J))),c(),M({title:"New Group Chat Created!",status:"success",duration:5e3,isClosable:!0,position:"bottom"}),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(3),M({title:"Failed to Create the Chat!",description:e.t0.response.data,status:"success",duration:5e3,isClosable:!0,position:"bottom"});case 17:case"end":return e.stop()}}),e,null,[[3,14]])})));return function(){return e.apply(this,arguments)}}();return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)("span",{onClick:a,children:t}),Object(C.jsxs)(R.f,{isOpen:r,onClose:c,children:[Object(C.jsx)(R.l,{}),Object(C.jsxs)(R.i,{children:[Object(C.jsx)(R.k,{fontSize:"35px",fontFamily:"Work sans",display:"flex",justifyContent:"center",children:"Create Group Chat"}),Object(C.jsx)(R.h,{}),Object(C.jsxs)(R.g,{display:"flex",flexDir:"column",alignItems:"center",children:[Object(C.jsx)(p.a,{children:Object(C.jsx)(O.a,{placeholder:"Chat Name",mb:3,onChange:function(e){return d(e.target.value)}})}),Object(C.jsx)(p.a,{children:Object(C.jsx)(O.a,{placeholder:"Add Users eg: John, Prasad, Jane",mb:1,onChange:function(e){return Y(e.target.value)}})}),Object(C.jsx)(u.a,{w:"100%",display:"flex",flexWrap:"wrap",children:w.map((function(e){return Object(C.jsx)(q,{user:e,handleFunction:function(){return t=e,void k(w.filter((function(e){return e._id!==t._id})));var t}},e._id)}))}),U?Object(C.jsx)("div",{children:"loading"}):null===N||void 0===N?void 0:N.slice(0,4).map((function(e){return Object(C.jsx)(T,{user:e,handleFunction:function(){return t=e,void(w.includes(t)?M({title:"User already added",status:"warning",duration:5e3,isClosable:!0,position:"top"}):k([].concat(Object(E.a)(w),[t])));var t}},e._id)}))]}),Object(C.jsx)(R.j,{children:Object(C.jsx)(x.a,{colorScheme:"blue",onClick:K,children:"Create Chat"})})]})]})]})},Q=function(e){var t=e.fetchAgain,n=Object(s.useState)(),r=Object(h.a)(n,2),a=r[0],c=r[1],i=y(),o=i.selectedChat,l=i.user,d=i.setSelectedChat,p=i.chats,O=i.setChats,m=Object(f.a)(),g=function(){var e=Object(b.a)(Object(j.a)().mark((function e(){var t,n,r;return Object(j.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={headers:{Authorization:"Bearer ".concat(l.token)}},e.next=4,v.a.get("/api/chat",t);case 4:n=e.sent,r=n.data,console.log(r),O(r),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),m({title:"Error Occured!",description:"Failed to Load the chats",status:"error",duration:5e3,isClosable:!0,position:"bottom-left"});case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){c(JSON.parse(localStorage.getItem("userInfo"))),g()}),[t]),Object(C.jsxs)(u.a,{display:{base:o?"none":"flex",md:"flex"},flexDir:"column",alignItems:"center",p:3,bg:"white",w:{base:"100%",md:"31%"},borderRadius:"lg",borderWidth:"1px",children:[Object(C.jsxs)(u.a,{pb:3,px:3,fontSize:{base:"28px",md:"30px"},fontFamily:"Work sans",display:"flex",w:"100%",justifyContent:"space-between",alignItems:"centre",children:["My Chats",Object(C.jsx)(K,{children:Object(C.jsx)(x.a,{display:"flex",fontSize:{base:"17px",md:"10px",lg:"17px"},rightIcon:Object(C.jsx)(W.a,{}),children:"New Group Chat"})})]}),Object(C.jsx)(u.a,{display:"flex",flexDir:"column",p:3,bg:"#F8F8F8",w:"100%",h:"100%",borderRadius:"lg",overflowY:"hidden",children:p?Object(C.jsx)(u.c,{overflowY:"scroll",children:p.map((function(e){return Object(C.jsxs)(u.a,{onClick:function(){return d(e)},cursor:"pointer",bg:o===e?"#38B2AC":"#E8E8E8",color:o===e?"white":"black",px:3,py:2,borderRadius:"lg",children:[Object(C.jsx)(u.d,{children:e.isGroupChat?e.chatName:D(a,e.users)}),e.latestMessage&&Object(C.jsxs)(u.d,{fontSize:"xs",children:[Object(C.jsxs)("b",{children:[e.latestMessage.sender.name," : "]}),e.latestMessage.content.length>50?e.latestMessage.content.substring(0,51)+"...":e.latestMessage.content]})]},e._id)}))}):Object(C.jsx)(M,{})})]})},V=(n(182),function(e){var t=e.fetchAgain,n=e.setFetchAgain,r=e.fetchMessages,a=Object(A.d)(),c=a.isOpen,i=a.onOpen,o=a.onClose,l=Object(s.useState)(),d=Object(h.a)(l,2),m=d[0],g=d[1],w=Object(s.useState)(""),k=Object(h.a)(w,2),S=(k[0],k[1]),_=Object(s.useState)([]),F=Object(h.a)(_,2),E=F[0],z=F[1],I=Object(s.useState)(!1),N=Object(h.a)(I,2),P=N[0],U=N[1],L=Object(s.useState)(!1),M=Object(h.a)(L,2),D=M[0],G=M[1],J=Object(f.a)(),H=y(),Y=H.selectedChat,K=H.setSelectedChat,Q=H.user,V=function(){var e=Object(b.a)(Object(j.a)().mark((function e(r){var a,s,c;return Object(j.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!Y.users.find((function(e){return e._id===r._id}))){e.next=3;break}return J({title:"User Already in group!",status:"error",duration:5e3,isClosable:!0,position:"bottom"}),e.abrupt("return");case 3:if(Y.groupAdmin._id===Q._id){e.next=6;break}return J({title:"Only admins can add someone!",status:"error",duration:5e3,isClosable:!0,position:"bottom"}),e.abrupt("return");case 6:return e.prev=6,U(!0),a={headers:{Authorization:"Bearer ".concat(Q.token)}},e.next=11,v.a.put("/api/chat/groupadd",{chatId:Y._id,userId:r._id},a);case 11:s=e.sent,c=s.data,K(c),n(!t),U(!1),e.next=22;break;case 18:e.prev=18,e.t0=e.catch(6),J({title:"Error Occured",description:e.t0.response.data.message,status:"error",duration:5e3,isClosable:!0,position:"bottom"}),U(!1);case 22:case"end":return e.stop()}}),e,null,[[6,18]])})));return function(t){return e.apply(this,arguments)}}(),X=function(){var e=Object(b.a)(Object(j.a)().mark((function e(a){var s,c,i;return Object(j.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Y.groupAdmin._id===Q._id||a._id===Q._id){e.next=3;break}return J({title:"Only admins can remove someone!",status:"error",duration:5e3,isClosable:!0,position:"bottom"}),e.abrupt("return");case 3:return e.prev=3,U(!0),s={headers:{Authorization:"Bearer ".concat(Q.token)}},e.next=8,v.a.put("/api/chat/groupremove",{chatId:Y._id,userId:a._id},s);case 8:c=e.sent,i=c.data,a._id===Q._id?K():K(i),n(!t),r(),U(!1),e.next=20;break;case 16:e.prev=16,e.t0=e.catch(3),J({title:"Error Occured!",description:e.t0.response.data.message,status:"error",duration:5e3,isClosable:!0,position:"bottom"}),U(!1);case 20:case"end":return e.stop()}}),e,null,[[3,16]])})));return function(t){return e.apply(this,arguments)}}(),Z=function(){var e=Object(b.a)(Object(j.a)().mark((function e(){var r,a,s;return Object(j.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(m){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,G(!0),r={headers:{Authorization:"Bearer ".concat(Q.token)}},e.next=7,v.a.put("/api/chat/rename",{chatId:Y._id,chatName:m},r);case 7:a=e.sent,s=a.data,K(s),n(!t),G(!1),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(2),J({title:"Error Occured!",description:e.t0.response.data.message,status:"error",duration:5e3,isClosable:!0,position:"bottom"}),G(!1);case 18:g("");case 19:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(){return e.apply(this,arguments)}}(),$=function(){var e=Object(b.a)(Object(j.a)().mark((function e(t){var n,r,a;return Object(j.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(S(t),t){e.next=3;break}return e.abrupt("return");case 3:return e.prev=3,U(!0),n={headers:{Authorization:"Bearer ".concat(Q.token)}},e.next=8,v.a.get("/api/user?search=".concat(t),n);case 8:r=e.sent,a=r.data,console.log(a),U(!1),z(a),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(3),J({title:"Error Occured",description:"Failed to Load the Search Results",status:"error",duration:5e3,isClosable:!0,position:"bottom-left"}),U(!1);case 19:case"end":return e.stop()}}),e,null,[[3,15]])})));return function(t){return e.apply(this,arguments)}}();return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(x.b,{display:{base:"flex"},icon:Object(C.jsx)(W.f,{}),onClick:i}),Object(C.jsxs)(R.f,{isOpen:c,onClose:o,children:[Object(C.jsx)(R.l,{}),Object(C.jsxs)(R.i,{children:[Object(C.jsx)(R.k,{fontSize:"35px",fontFamily:"Work sans",display:"flex",justifyContent:"center",children:Y.chatName}),Object(C.jsx)(R.h,{}),Object(C.jsxs)(R.g,{children:[Object(C.jsx)(u.a,{w:"100%",display:"flex",flexWrap:"wrap",pb:3,children:Y.users.map((function(e){return Object(C.jsx)(q,{user:e,handleFunction:function(){return X(e)}},Q._id)}))}),Object(C.jsxs)(p.a,{display:"flex",children:[Object(C.jsx)(O.a,{placeholder:"Chat Name",mb:3,value:m,onChange:function(e){return g(e.target.value)}}),Object(C.jsx)(x.a,{variant:"solid",colorScheme:"teal",ml:1,isLoading:D,onClick:Z,children:"Update"})]}),Object(C.jsx)(p.a,{children:Object(C.jsx)(O.a,{placeholder:"Add User to group",mb:1,onChange:function(e){return $(e.target.value)}})}),P?Object(C.jsx)(B.a,{size:"lg"}):null===E||void 0===E?void 0:E.map((function(e){return Object(C.jsx)(T,{user:e,handleFunction:function(){return V(e)}},e._id)}))]}),Object(C.jsx)(R.j,{children:Object(C.jsx)(x.a,{onClick:function(){return X(Q)},colorScheme:"red",children:"Leave Group"})})]})]})]})}),X=n(121),Z=function(e){var t=e.messages,n=y().user;return Object(C.jsx)(X.a,{children:t&&t.map((function(e,r){return Object(C.jsxs)("div",{style:{display:"flex"},children:[(G(t,e,r,n._id)||J(t,r,n._id))&&Object(C.jsx)(z.a,{label:e.sender.name,placement:"bottom-start",hasArrow:!0,children:Object(C.jsx)(N.a,{mt:"7px",mr:1,size:"sm",cursor:"pointer",name:e.sender.name,src:e.sender.pic})}),Object(C.jsx)("span",{style:{backgroundColor:"".concat(e.sender._id===n._id?"#BEE3F8":"#B9F5D0"),borderRadius:"20px",padding:"5px 15px",maxWidth:"75%",marginLeft:H(t,e,r,n._id),marginTop:G(t,e,r,n._id)?3:10},children:e.content})]},e._id)}))})},$=n(123),ee=function(e){var t=e.fetchAgain,n=e.setFetchAgain,c=Object(s.useState)([]),i=Object(h.a)(c,2),o=i[0],l=i[1],d=Object(s.useState)(!1),m=Object(h.a)(d,2),g=m[0],w=m[1],k=Object(s.useState)(""),S=Object(h.a)(k,2),_=S[0],F=S[1],A=Object(s.useState)(!1),z=Object(h.a)(A,2),I=z[0],N=z[1],R=Object(s.useState)(!1),P=Object(h.a)(R,2),L=P[0],M=P[1],T=Object(s.useState)(!1),G=Object(h.a)(T,2),J=G[0],H=G[1],Y=Object(f.a)(),q=y(),K=q.user,Q=q.selectedChat,X=q.setSelectedChat,ee=q.notification,te=q.setNotification,ne=function(){var e=Object(b.a)(Object(j.a)().mark((function e(){var t,n,a;return Object(j.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Q){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,t={headers:{Authorization:"Bearer ".concat(K.token)}},w(!0),e.next=7,v.a.get("/api/message/".concat(Q._id),t);case 7:n=e.sent,a=n.data,l(a),w(!1),r.emit("join chat",Q._id),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(2),Y({title:"Error Occured!",description:"Failed to Load the Messages",status:"error",duration:5e3,isClosable:!0,position:"bottom"});case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(){return e.apply(this,arguments)}}(),re=function(){var e=Object(b.a)(Object(j.a)().mark((function e(t){var n,a,s;return Object(j.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("Enter"!==t.key||!_){e.next=16;break}return r.emit("stop typing",Q._id),e.prev=2,n={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(K.token)}},F(""),e.next=7,v.a.post("/api/message",{content:_,chatId:Q},n);case 7:a=e.sent,s=a.data,r.emit("new message",s),l([].concat(Object(E.a)(o),[s])),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(2),Y({title:"Error Occured!",description:"Failed to send the Message",status:"error",duration:5e3,isClosable:!0,position:"bottom"});case 16:case"end":return e.stop()}}),e,null,[[2,13]])})));return function(t){return e.apply(this,arguments)}}();Object(s.useEffect)((function(){(r=Object($.a)("http://localhost:5000")).emit("setup",K),r.on("connected",(function(){return N(!0)})),r.on("typing",(function(){return H(!0)})),r.on("stop typing",(function(){return H(!1)}))}),[]),Object(s.useEffect)((function(){ne(),a=Q}),[Q]),console.log(ee,"-----------------"),Object(s.useEffect)((function(){r.on("message recieved",(function(e){a&&a._id===e.chat._id?l([].concat(Object(E.a)(o),[e])):ee.includes(e)||(te([e].concat(Object(E.a)(ee))),n(!t))}))}));var ae,se;return Object(C.jsx)(C.Fragment,{children:Q?Object(C.jsxs)(C.Fragment,{children:[Object(C.jsxs)(u.d,{fontSize:{base:"28px",md:"30px"},pb:3,px:2,w:"100%",fontFamily:"Work sans",display:"flex",justifyContent:{base:"space-between"},alignItems:"center",children:[Object(C.jsx)(x.b,{display:{base:"flex",md:"none"},icon:Object(C.jsx)(W.b,{}),onClick:function(){return X("")}}),o&&(Q.isGroupChat?Object(C.jsxs)(C.Fragment,{children:[Q.chatName.toUpperCase(),Object(C.jsx)(V,{fetchAgain:t,setFetchAgain:n,fetchMessages:ne})]}):Object(C.jsxs)(C.Fragment,{children:[D(K,Q.users),Object(C.jsx)(U,{user:(ae=K,se=Q.users,se[0]._id===ae._id?se[1]:se[0])})]}))]}),Object(C.jsxs)(u.a,{p:3,display:"flex",flexDir:"column",justifyContent:"flex-end",bg:"#E8E8E8",w:"100%",h:"100%",borderRadius:"lg",overflowY:"hidden",children:[g?Object(C.jsx)(B.a,{size:"xl",w:20,h:20,alignSelf:"center",margin:"auto"}):Object(C.jsx)("div",{className:"messages",children:Object(C.jsx)(Z,{messages:o})}),Object(C.jsxs)(p.a,{id:"first-name",onKeyDown:re,isRequired:!0,mt:3,children:[J?Object(C.jsx)("div",{children:Object(C.jsx)("div",{style:{width:"fit-content",height:"35px",borderRadius:"18px 18px",marginBottom:"15px",marginLeft:"35px",backgroundColor:"lightblue",padding:"5px",display:"flex",textAlign:"flex-start",color:"whitesmoke",fontFamily:"sans-serif"},children:Object(C.jsx)("i",{children:"Typing..."})})}):Object(C.jsx)(C.Fragment,{}),Object(C.jsx)(O.a,{variant:"filled",bg:"#E0E0E0",placeholder:"Enter a message..",onChange:function(e){if(F(e.target.value),I){L||(M(!0),r.emit("typing",Q._id));var t=(new Date).getTime();setTimeout((function(){(new Date).getTime()-t>=1e3&&L&&(r.emit("stop typing",Q._id),M(!1))}),1e3)}},value:_})]})]})]}):Object(C.jsx)(u.a,{display:"flex",alignItems:"center",justifyContent:"center",h:"100%",children:Object(C.jsx)(u.d,{fontSize:"3xl",pb:3,fontFamily:"Work sans",children:"Click on a user to start chatting"})})})},te=function(e){var t=e.fetchAgain,n=e.setFetchAgain,r=y().selectedChat;return Object(C.jsx)(u.a,{display:{base:r?"flex":"none",md:"flex"},alignItems:"center",flexDir:"column",p:3,bg:"white",w:{base:"100%",md:"68%"},borderRadius:"lg",borderWidth:"1px",children:Object(C.jsx)(ee,{fetchAgain:t,setFetchAgain:n})})},ne=function(){var e=y().user;e||console.log("No user in ChatPage");var t=Object(s.useState)(!1),n=Object(h.a)(t,2),r=n[0],a=n[1];return Object(C.jsxs)("div",{style:{width:"100%"},children:[e&&Object(C.jsx)(Y,{}),Object(C.jsxs)(u.a,{display:"flex",justifyContent:"space-between",width:"100%",height:"91.5vh",padding:"10px",children:[e&&Object(C.jsx)(Q,{fetchAgain:r}),e&&Object(C.jsx)(te,{fetchAgain:r,setFetchAgain:a})]})]})};var re=function(){return Object(C.jsx)(o.a,{children:Object(C.jsxs)("div",{className:"App",children:[Object(C.jsx)(l.Route,{path:"/",component:F,exact:!0}),Object(C.jsx)(l.Route,{path:"/chats",component:ne})]})})},ae=n(19);document.getElementById("root");i.a.render(Object(C.jsx)(ae.a,{children:Object(C.jsx)(o.a,{children:Object(C.jsx)(k,{children:Object(C.jsx)(re,{})})})}),document.getElementById("root"))}},[[187,1,2]]]);
//# sourceMappingURL=main.e3885c70.chunk.js.map
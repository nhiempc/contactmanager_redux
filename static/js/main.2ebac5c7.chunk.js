(this.webpackJsonpcontactmanager_redux=this.webpackJsonpcontactmanager_redux||[]).push([[0],{48:function(e,t,a){},49:function(e,t,a){},83:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(24),s=a.n(r),o=(a(48),a(49),a(11)),i=a(12),l=a(15),p=a(14),u=a(17),d=a.n(u),h=a(16),j=a(1),m=function(e){Object(l.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).PropTypes={branding:d.a.string.isRequired},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props.branding;return Object(j.jsx)("div",{children:Object(j.jsx)("nav",{className:"navbar navbar-expand-sm bg-dark navbar-dark",children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(h.b,{className:"navbar-brand",to:"/contactmanager_redux",children:e}),Object(j.jsxs)("ul",{className:"navbar-nav",children:[Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsxs)(h.b,{className:"nav-link",to:"/contactmanager_redux/",children:[Object(j.jsx)("i",{className:"fas fa-home pr-2"}),"Home"]})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsxs)(h.b,{className:"nav-link",to:"/contactmanager_redux/contact/add",children:[Object(j.jsx)("i",{className:"fas fa-plus pr-2"}),"Add Contact"]})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsxs)(h.b,{className:"nav-link",to:"/contactmanager_redux/about",children:[Object(j.jsx)("i",{className:"fas fa-question pr-2"}),"About Us"]})})]})]})})})}}]),a}(n.Component);function b(){return Object(j.jsxs)("div",{children:[Object(j.jsxs)("h1",{className:"display-4",children:[Object(j.jsx)("span",{className:"text-danger",children:"About"})," Contact Manager"]}),Object(j.jsx)("p",{className:"lead",children:"Simple app to manage contacts"}),Object(j.jsx)("p",{className:"text-secondary",children:"Version 1.0"})]})}function O(){return Object(j.jsxs)("div",{children:[Object(j.jsxs)("h1",{className:"display-4",children:[Object(j.jsx)("span",{className:"text-danger",children:"404"})," Page Not Found"]}),Object(j.jsx)("p",{className:"lead",children:"Sorry, this page dosen't exist"})]})}a(58),a(59),a(60);var f=a(13),x=a(5),v=a.n(x),g=a(19),y=a(21),C=a.n(y),N="GET_CONTACTS",k="DELETE_CONTACT",E="ADD_CONTACT",w="GET_CONTACT",S="UPDATE_CONTACT",_=function(e){Object(l.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={showContactInfo:!1},e.onDeleteClick=function(t){e.props.deleteContact(t)},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=this.props.contact,a=t.id,n=t.name,c=t.email,r=t.phone,s=this.state.showContactInfo;return Object(j.jsxs)("div",{className:"card card-body mb-3",children:[Object(j.jsxs)("h4",{children:[n,Object(j.jsx)("i",{className:"fas fa-sort-down",style:{cursor:"pointer",paddingLeft:"0.5rem"},onClick:function(){e.setState({showContactInfo:!e.state.showContactInfo})}}),Object(j.jsx)("i",{className:"fas fa-times",style:{cursor:"pointer",float:"right",color:"red"},onClick:this.onDeleteClick.bind(this,a)}),Object(j.jsx)(h.b,{to:"contact/edit/".concat(a),children:Object(j.jsx)("i",{className:"fas fa-pencil-alt",style:{cursor:"pointer",float:"right",color:"black",marginRight:"1rem"}})})]}),s?Object(j.jsxs)("ul",{className:"list-group",children:[Object(j.jsxs)("li",{className:"list-group-item",children:["Email: ",c]}),Object(j.jsxs)("li",{className:"list-group-item",children:["Phone: ",r]})]}):null]})}}]),a}(n.Component),T=Object(f.b)(null,{deleteContact:function(e){return function(){var t=Object(g.a)(v.a.mark((function t(a){return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,C.a.delete("https://6078053be7f4f50017183934.mockapi.io/api/contacts/".concat(e));case 3:a({type:k,payload:e}),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),a({type:k,payload:e});case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()}})(_),A=function(e){Object(l.a)(a,e);var t=Object(p.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.props.getContacts()}},{key:"render",value:function(){var e=this.props.contacts;return Object(j.jsxs)(c.a.Fragment,{children:[Object(j.jsxs)("h1",{className:"display-4 mb-2",children:[Object(j.jsx)("span",{className:"text-danger",children:"Contact"})," List"]}),e.map((function(e){return Object(j.jsx)(T,{contact:e},e.id)}))]})}}]),a}(n.Component),D=Object(f.b)((function(e){return{contacts:e.contact.contacts}}),{getContacts:function(){return function(){var e=Object(g.a)(v.a.mark((function e(t){var a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.get("https://6078053be7f4f50017183934.mockapi.io/api/contacts");case 2:a=e.sent,t({type:N,payload:a.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(A),P=a(20),q=a(41),I=a.n(q),F=function(e){var t=e.label,a=e.name,n=e.value,c=e.placeholder,r=e.type,s=e.onChange,o=e.error;return Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{htmlFor:a,children:t}),Object(j.jsx)("input",{type:r,name:a,className:I()("form-control form-control-lg",{"is-invalid":o}),placeholder:c,value:n,onChange:s}),o&&Object(j.jsx)("div",{className:"invalid-feedback",children:o})]})};F.defaultProps={type:"text"};var L=F,M=function(e){Object(l.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={name:"",email:"",phone:"",error:{}},e.onChange=function(t){return e.setState(Object(P.a)({},t.target.name,t.target.value))},e.onSubmit=function(t){t.preventDefault();var a=e.state,n=a.name,c=a.email,r=a.phone;if(""!==n)if(""!==c)if(""!==r){var s={name:n,email:c,phone:r};e.props.addContact(s),e.setState({name:"",email:"",phone:"",error:{}}),e.props.history.push("/")}else e.setState({error:{phone:"Phone is required"}});else e.setState({error:{email:"Email is required"}});else e.setState({error:{name:"Name is required"}})},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state,t=e.name,a=e.email,n=e.phone,c=e.error;return Object(j.jsxs)("div",{className:"card mb-3",children:[Object(j.jsxs)("div",{className:"card-header display-4",children:[Object(j.jsx)("span",{className:"text-danger",children:"Add"})," Contact"]}),Object(j.jsx)("div",{className:"card-body",children:Object(j.jsxs)("form",{onSubmit:this.onSubmit.bind(this),children:[Object(j.jsx)(L,{label:"Name",name:"name",placeholder:"Enter Name",value:t,onChange:this.onChange,error:c.name}),Object(j.jsx)(L,{label:"Email",name:"email",type:"email",placeholder:"Enter Email",value:a,onChange:this.onChange,error:c.email}),Object(j.jsx)(L,{label:"Phone",name:"phone",type:"phone",placeholder:"Enter Phone",value:n,onChange:this.onChange,error:c.phone}),Object(j.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Add Contact"})]})})]})}}]),a}(n.Component),R=Object(f.b)(null,{addContact:function(e){return function(){var t=Object(g.a)(v.a.mark((function t(a){var n;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C.a.post("https://6078053be7f4f50017183934.mockapi.io/api/contacts",e);case 2:n=t.sent,a({type:E,payload:n.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})(M),U=function(e){Object(l.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={name:"",email:"",phone:"",error:{}},e.onChange=function(t){return e.setState(Object(P.a)({},t.target.name,t.target.value))},e.onSubmit=function(t){t.preventDefault();var a=e.state,n=a.name,c=a.email,r=a.phone;if(""!==n)if(""!==c)if(""!==r){var s={id:e.props.match.params.id,name:n,email:c,phone:r};e.props.updateContact(s),e.setState({name:"",email:"",phone:"",error:{}}),e.props.history.push("/")}else e.setState({error:{phone:"Phone is required"}});else e.setState({error:{email:"Email is required"}});else e.setState({error:{name:"Name is required"}})},e}return Object(i.a)(a,[{key:"componentWillReceiveProps",value:function(e,t){var a=e.contact,n=a.name,c=a.email,r=a.phone;this.setState({name:n,email:c,phone:r})}},{key:"componentDidMount",value:function(){var e=Object(g.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=this.props.match.params.id,this.props.getContact(t);case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.name,a=e.email,n=e.phone,c=e.error;return Object(j.jsxs)("div",{className:"card mb-3",children:[Object(j.jsxs)("div",{className:"card-header display-4",children:[Object(j.jsx)("span",{className:"text-danger",children:"Edit"})," Contact"]}),Object(j.jsx)("div",{className:"card-body",children:Object(j.jsxs)("form",{onSubmit:this.onSubmit.bind(this),children:[Object(j.jsx)(L,{label:"Name",name:"name",placeholder:"Enter Name",value:t,onChange:this.onChange,error:c.name}),Object(j.jsx)(L,{label:"Email",name:"email",type:"email",placeholder:"Enter Email",value:a,onChange:this.onChange,error:c.email}),Object(j.jsx)(L,{label:"Phone",name:"phone",type:"phone",placeholder:"Enter Phone",value:n,onChange:this.onChange,error:c.phone}),Object(j.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Update Contact"})]})})]})}}]),a}(n.Component),X=Object(f.b)((function(e){return{contact:e.contact.contact}}),{getContact:function(e){return function(){var t=Object(g.a)(v.a.mark((function t(a){var n;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C.a.get("https://6078053be7f4f50017183934.mockapi.io/api/contacts/".concat(e));case 2:n=t.sent,a({type:w,payload:n.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},updateContact:function(e){return function(){var t=Object(g.a)(v.a.mark((function t(a){var n;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C.a.put("https://6078053be7f4f50017183934.mockapi.io/api/contacts/".concat(e.id),e);case 2:n=t.sent,a({type:S,payload:n.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})(U),V=a(18),B=a(42),G=a(43),J=a(10),H={contacts:[],contact:{}},W=Object(V.c)({contact:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return Object(J.a)(Object(J.a)({},e),{},{contacts:t.payload});case w:return Object(J.a)(Object(J.a)({},e),{},{contact:t.payload});case k:return Object(J.a)(Object(J.a)({},e),{},{contacts:e.contacts.filter((function(e){return e.id!==t.payload.id}))});case E:return Object(J.a)(Object(J.a)({},e),{},{contacts:[t.payload].concat(Object(G.a)(e.contacts))});case S:return Object(J.a)(Object(J.a)({},e),{},{contacts:e.contacts.map((function(e){return e.id===t.payload.id?e=t.payload:e}))});default:return e}}}),z=[B.a],K=Object(V.e)(W,{},Object(V.d)(V.a.apply(void 0,z),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())),Q=a(3);var Y=function(){return Object(j.jsx)(f.a,{store:K,children:Object(j.jsx)(h.a,{children:Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(m,{branding:"Contact Manager"}),Object(j.jsx)("div",{className:"container mt-2",children:Object(j.jsxs)(Q.c,{children:[Object(j.jsx)(Q.a,{exact:!0,path:"/contactmanager_redux",component:D}),Object(j.jsx)(Q.a,{exact:!0,path:"/contactmanager_redux/about",component:b}),Object(j.jsx)(Q.a,{exact:!0,path:"/contactmanager_redux/contact/add",component:R}),Object(j.jsx)(Q.a,{exact:!0,path:"/contactmanager_redux/contact/edit/:id",component:X}),Object(j.jsx)(Q.a,{component:O})]})})]})})})},Z=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,84)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))};s.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(Y,{})}),document.getElementById("root")),Z()}},[[83,1,2]]]);
//# sourceMappingURL=main.2ebac5c7.chunk.js.map
(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{11:function(t,e,n){t.exports={list:"ContactList_list__2atzu",listItem:"ContactList_listItem__lUv4b",name:"ContactList_name__2_rhs",phone:"ContactList_phone__37SzF",deleteButton:"ContactList_deleteButton__2b5_p"}},17:function(t,e,n){t.exports={form:"Form_form__3kVBK",label:"Form_label__mkyQB",input:"Form_input__2gOw_",button:"Form_button__kVP6Y"}},18:function(t,e,n){t.exports={app:"App_app__dNNoM",dark:"App_dark__2v9KZ",light:"App_light__1KK8m",loader:"App_loader__wz-6w"}},38:function(t,e,n){t.exports={filter:"Filter_filter__3JzXh"}},44:function(t,e,n){t.exports=n(91)},90:function(t,e,n){},91:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(10),o=n.n(r),u=n(9),l=n(19),s=n(20),i=n(23),m=n(22),b=n(106),f=n(37),h=n.n(f),d=n(4),C=n(16),p=n.n(C),E=n(3),O=Object(E.b)("contact/ADD_REQUEST"),_=Object(E.b)("contact/ADD_SUCCESS"),j=Object(E.b)("contact/ADD_ERROR"),v={fetchContactsRequest:Object(E.b)("contact/FETCH_REQUEST"),fetchContactsSuccess:Object(E.b)("contact/FETCH_SUCCESS"),fetchContactsError:Object(E.b)("contact/FETCH_ERROR"),addContactRequest:O,addContactSuccess:_,addContactError:j,removeContactRequest:Object(E.b)("contact/REMOVE_REQUEST"),removeContactSuccess:Object(E.b)("contact/REMOVE_SUCCESS"),removeContactError:Object(E.b)("contact/REMOVE_ERROR"),deleteContact:Object(E.b)("contact/DELETE_CONTACT"),filterContact:Object(E.b)("contact/FILTER_CONTACT")};p.a.defaults.baseURL="http://localhost:5000";var g,S,R={addContact:function(t,e){return function(n){n(v.addContactRequest()),p.a.post("/contacts",{name:t,number:e}).then((function(t){var e=t.data;return n(v.addContactSuccess(e))})).catch((function(t){return n(v.addContactError(t))}))}},fetchContacts:function(){return function(t){t(v.fetchContactsRequest()),p.a.get("/contacts").then((function(e){var n=e.data;return t(v.fetchContactsSuccess(n))})).catch((function(e){return t(v.fetchContactsError(e))}))}},removeContact:function(t){return function(e){e(v.removeContactRequest()),p.a.delete("/contacts/".concat(t)).then((function(){return e(v.removeContactSuccess(t))})).catch((function(t){return e(v.removeContactError(t))}))}}},F=n(17),N=n.n(F),y=N.a.form,k=N.a.label,T=N.a.input,L=N.a.button,D=function(t){var e=t.handleChange,n=t.handleSubmit,a=t.name,r=t.number;return c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",null,"Phonebook"),c.a.createElement("form",{onSubmit:n,className:y},c.a.createElement("label",{className:k},"Name",c.a.createElement("input",{name:"name",value:a,type:"text",placeholder:"name...",className:T,onChange:e})),c.a.createElement("label",{className:k},"Number",c.a.createElement("input",{name:"number",value:r,type:"tel",placeholder:"phone...",className:T,onChange:e})),c.a.createElement("button",{className:L,type:"submit"},"add contact")))},w=function(t){Object(i.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.target,a=n.value,c=n.name;return t.setState(Object(d.a)({},c,a))},t.handleSubmit=function(e){e.preventDefault();var n=t.state,a=n.name,c=n.number;""!==a&&""!==c&&t.props.onSubmit(a,c),t.setState({name:"",number:""})},t}return Object(s.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return c.a.createElement(c.a.Fragment,null,c.a.createElement(D,{handleChange:this.handleChange,handleSubmit:this.handleSubmit,name:e,number:n}))}}]),n}(a.Component),A={onSubmit:R.addContact},q=Object(u.b)(null,A)(w),U=n(11),x=n.n(U),B=x.a.listItem,M=x.a.name,I=x.a.phone,V=x.a.deleteButton,z=function(t){var e=t.contact,n=t.deleteContact;return c.a.createElement("li",{className:B},c.a.createElement("p",{className:M},c.a.createElement("b",null,"Name:"),e.name),c.a.createElement("p",{className:I},c.a.createElement("b",null,"Phone:"),e.number),c.a.createElement("button",{className:V,type:"button",onClick:function(){return n(e.id)}},"Delete"))},H=function(t){return t.contacts.contacts},K=function(t){return t.contacts.filter},Q=function(t){return t.contacts.loading},J=H,P=function(t){return t.theme.isOpen},G=K,X=function(t){var e=H(t),n=K(t).toLowerCase();return e.filter((function(t){return t.name.toLowerCase().includes(n)}))},Y={onDelete:R.removeContact,onFilter:v.filterContact},Z=Object(u.b)((function(t){return{contacts:X(t)}}),Y)((function(t){var e=t.contacts,n=t.onDelete,a=t.onFilter;return c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",null,"Contacts"),c.a.createElement("ul",{className:x.a.list},e.map((function(t){return c.a.createElement(z,{key:t.id,contact:t,deleteContact:function(){return n(t.id)},filterContact:function(){return a(t.id)}})}))))})),W=n(38),$=n.n(W).a.filter,tt={handleFilterChange:v.filterContact},et=Object(u.b)((function(t){return{value:G(t)}}),tt)((function(t){var e=t.handleFilterChange,n=t.value;return c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",null,"Search"),c.a.createElement("input",{className:$,value:n,name:"filter",type:"tel",placeholder:"find contacts by name...",onChange:function(t){return e(t.target.value)}}))})),nt={toggleTheme:Object(E.b)("theme/THEME_TOGGLE",(function(t,e){return{payload:{theme:{isOpen:e}}}}))},at=n(18),ct=n.n(at),rt=ct.a.dark,ot=ct.a.light,ut=ct.a.app,lt=ct.a.loader,st=function(t){Object(i.a)(n,t);var e=Object(m.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.props.onFetchContacts()}},{key:"render",value:function(){var t=this.props,e=t.contacts,n=t.isOpen,a=t.isLoading,r=t.toggle;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:n?rt:ot},c.a.createElement(b.a,{checked:n,onChange:r}),c.a.createElement("div",{className:ut},a?c.a.createElement(h.a,{className:lt,type:"Oval",color:"#1A237E",height:125,width:125}):c.a.createElement(c.a.Fragment,null,c.a.createElement(q,null),e.length>0&&c.a.createElement(c.a.Fragment,null,c.a.createElement(et,null),c.a.createElement(Z,null))))))}}]),n}(a.Component),it={toggle:nt.toggleTheme,onFetchContacts:R.fetchContacts},mt=Object(u.b)((function(t){return{contacts:J(t),isOpen:P(t),isLoading:Q(t)}}),it)(st),bt=n(42),ft=n(8),ht=Object(E.c)([],(g={},Object(d.a)(g,v.fetchContactsSuccess,(function(t,e){return e.payload})),Object(d.a)(g,v.addContactSuccess,(function(t,e){return[].concat(Object(bt.a)(t),[e.payload])})),Object(d.a)(g,v.removeContactSuccess,(function(t,e){return t.filter((function(t){return t.id!==e.payload}))})),g)),dt=Object(E.c)("",Object(d.a)({},v.filterContact,(function(t,e){return e.payload}))),Ct=Object(E.c)(!1,(S={},Object(d.a)(S,v.fetchContactsRequest,(function(){return!0})),Object(d.a)(S,v.fetchContactsSuccess,(function(){return!1})),Object(d.a)(S,v.fetchContactsError,(function(){return!1})),Object(d.a)(S,v.addContactRequest,(function(){return!0})),Object(d.a)(S,v.addContactSuccess,(function(){return!1})),Object(d.a)(S,v.addContactError,(function(){return!1})),Object(d.a)(S,v.removeContactRequest,(function(){return!0})),Object(d.a)(S,v.removeContactSuccess,(function(){return!1})),Object(d.a)(S,v.removeContactError,(function(){return!1})),S)),pt=Object(ft.c)({contacts:ht,filter:dt,loading:Ct}),Et=n(26),Ot=Object(E.c)({isOpen:!1},Object(d.a)({},nt.toggleTheme,(function(t,e){return Object(Et.a)(Object(Et.a)({},t),{},{isOpen:!t.isOpen})}))),_t=Object(E.a)({reducer:{contacts:pt,theme:Ot}});n(90);o.a.render(c.a.createElement(u.a,{store:_t},c.a.createElement(mt,null)),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.74022bd6.chunk.js.map
(this["webpackJsonpreact-admin"]=this["webpackJsonpreact-admin"]||[]).push([[0],{146:function(e,a,t){},147:function(e,a,t){},257:function(e,a,t){"use strict";t.r(a);var n,r,l,c=t(0),m=t.n(c),s=t(17),u=t.n(s),o=t(80);t(146);!function(e){var a;!function(e){e.DEl_TAGS="DEl_TAGS",e.UPD_TAGS="UPD_TAGS",e.ADD_TAGS="ADD_TAGS",e.SEL_TAGS="SEL_TAGS"}(a||(a={})),e.ETagTypes=a}(n||(n={})),(l=r||(r={})).update_tag=function(e){return{type:n.ETagTypes.UPD_TAGS,value:e}},l.delete_tag=function(e){return{type:n.ETagTypes.DEl_TAGS,value:e}},l.add_tag=function(e){return{type:n.ETagTypes.ADD_TAGS,value:e}};var i=t(132),E=t(21),p=function(e){console.log(e);var a={backgroundImage:"url(".concat(e.backgroundImg,")"),height:"100vh",backgroundColor:"#f0f2f5",backgroundRepeat:"no-repeat",backgroundPosition:"center 110px",backgroundSize:"100%"};return m.a.createElement("div",{style:a},e.children)},d=t.p+"static/media/background.ebcb9160.svg",g=(t(147),t(263)),f=t(261),_=t(262),b=t(264),T=t(266),y=t(134),h=t(267),S=t(268),v=t(269),A=t(270),I=t(271),D=g.a.TabPane,G=function(e){console.log("Received values of form: ",e)},k=function(){return m.a.createElement(_.a,{name:"phoneLogin",initialValues:{remember:!0},onFinish:G},m.a.createElement(_.a.Item,{name:"username",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u8d26\u6237"}]},m.a.createElement(b.a,{prefix:m.a.createElement(h.a,{className:"site-form-item-icon"}),placeholder:""})),m.a.createElement(_.a.Item,{name:"password",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u5bc6\u7801!"}]},m.a.createElement(b.a,{prefix:m.a.createElement(S.a,{className:"site-form-item-icon"}),type:"password",placeholder:""})),m.a.createElement(_.a.Item,null,m.a.createElement(_.a.Item,{name:"remember",valuePropName:"checked",noStyle:!0},m.a.createElement(T.a,null,"\u8bb0\u4f4f\u5bc6\u7801")),m.a.createElement("a",{href:""},"\u5fd8\u8bb0\u5bc6\u7801")),m.a.createElement(_.a.Item,null,m.a.createElement(y.a,{className:"password__button",size:"large",type:"primary",htmlType:"submit"},"\u767b\u5f55")),m.a.createElement(_.a.Item,null,m.a.createElement("a",{href:""},"\u6ce8\u518c")))},N=function(){return m.a.createElement(_.a,{name:"passwordLogin",initialValues:{remember:!0},onFinish:G},m.a.createElement(_.a.Item,{name:"username",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u8d26\u6237"}]},m.a.createElement(b.a,{size:"large",className:"password__input",prefix:m.a.createElement(h.a,{className:"site-form-item-icon"}),placeholder:"\u7528\u6237\u540d\uff1aadmin or user"})),m.a.createElement(_.a.Item,{name:"password",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u5bc6\u7801!"}]},m.a.createElement(b.a,{prefix:m.a.createElement(S.a,{className:"site-form-item-icon"}),type:"password",placeholder:"\u5bc6\u7801\uff1a123456",className:"password__input",size:"large"})),m.a.createElement(_.a.Item,null,m.a.createElement(f.a,{justify:"space-between"},m.a.createElement(_.a.Item,{name:"remember",valuePropName:"checked",noStyle:!0},m.a.createElement(T.a,null,"\u8bb0\u4f4f\u5bc6\u7801")),m.a.createElement("a",{href:""},"\u5fd8\u8bb0\u5bc6\u7801"))),m.a.createElement(_.a.Item,null,m.a.createElement(y.a,{size:"large",className:"password__button",type:"primary",htmlType:"submit"},"\u767b\u5f55")),m.a.createElement(_.a.Item,null,m.a.createElement(f.a,{justify:"space-between"},m.a.createElement(_.a.Item,{label:"\u5176\u4ed6\u767b\u5f55\u65b9\u5f0f",colon:!1,className:"login__iconGroup"},m.a.createElement(v.a,{className:"login__icon"}),m.a.createElement(A.a,{className:"login__icon"}),m.a.createElement(I.a,{className:"login__icon"})),m.a.createElement("a",{href:""},"\u6ce8\u518c\u8d26\u6237"))))},w=function(){return m.a.createElement(p,{backgroundImg:d},m.a.createElement(f.a,{className:"login__container",align:"middle",justify:"center"},m.a.createElement(f.a,null,m.a.createElement(g.a,{defaultActiveKey:"1"},m.a.createElement(D,{tab:"\u8d26\u6237\u5bc6\u7801\u767b\u5f55",key:"1"},m.a.createElement(N,null)),m.a.createElement(D,{tab:"\u624b\u673a\u53f7\u767b\u5f55",key:"2"},m.a.createElement(k,null))))))},j=function(){return m.a.createElement(i.a,null,m.a.createElement(E.c,null,m.a.createElement(E.a,{exact:!0,path:"/login",component:w})))},O=Object(o.b)((function(e){return{tagsState:e.commonReducer.tagsState}}),(function(e){return{handleChange:function(a){return e(r.update_tag(a))},handleClick:function(a){return e(r.add_tag(a))},deleteList:function(a){return e(r.delete_tag(a))}}}))((function(e){return m.a.createElement(m.a.Fragment,null,m.a.createElement(j,null))})),P=t(68),x=t(48),L=t(133),z=t(135);var q=Object(x.c)({tagsState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=arguments.length>1?arguments[1]:void 0;switch(a.type){case n.ETagTypes.ADD_TAGS:return[].concat(Object(z.a)(e),[a.value]);case n.ETagTypes.DEl_TAGS:return e.filter((function(e){return e.name!==a.value.name}));case n.ETagTypes.UPD_TAGS:return e.map((function(e){return e.name===a.value.name?Object(P.a)(Object(P.a)({},e),{},{isOn:!e.isOn}):e}));case n.ETagTypes.SEL_TAGS:default:return e}}}),R=Object(x.c)({commonReducer:q});t(255),t(256);u.a.render(m.a.createElement(o.a,{store:Object(P.a)({},Object(x.d)(R,Object(x.a)(L.a)))},m.a.createElement(O,null)),document.getElementById("root"))}},[[257,1,2]]]);
//# sourceMappingURL=main.ab86a85f.chunk.js.map
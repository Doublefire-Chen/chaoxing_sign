webpackJsonp([1],{"1uuo":function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("7+uW"),n=s("NCfY"),r=s("Au9i"),i=s.n(r),o={name:"App",data:function(){return{usersSelected:[],users:[],usersToSign:[],usersSigned:[],selected:"1",scanOpen:!1}},components:{QrcodeStream:n.QrcodeStream},mounted:function(){var t=this;this.axios.get("/scan").then(function(e){for(var s=0;s<e.data.length;s++)t.users.push({value:e.data[s].username,label:e.data[s].name})})},methods:{startSign:function(){this.usersToSign=[];for(var t=0;t<this.users.length;t++)this.usersSelected.indexOf(this.users[t].value)>=0&&this.usersToSign.push({username:this.users[t].value,name:this.users[t].label});Object(r.Toast)("开始签到"),this.selected="2"},onDecode:function(t){var e=this;this.scanOpen=!1,r.Indicator.open("正在签到...");for(var s=[],a=0;a<this.usersToSign.length;a++)s.push(this.usersToSign[a].username);var n={sign_users:s,enc:t};this.axios.post("/scan",n).then(function(t){console.log(t.data);for(var s=0;s<t.data.length;s++)e.usersSigned.push(t.data[s]);for(var a=[],n=0;n<e.usersToSign.length;n++){a.push(t.data[j]);for(var i=0;i<t.data.length;i++)t.data[i].username!==e.usersToSign[n].username&&a.pop()}e.usersToSign=a,r.Indicator.close()}).catch(function(){r.Indicator.close()})}}},u={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("mt-navbar",{model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},[s("mt-tab-item",{attrs:{id:"1"}},[t._v("选择签到人")]),t._v(" "),s("mt-tab-item",{attrs:{id:"2"}},[t._v("未签到")]),t._v(" "),s("mt-tab-item",{attrs:{id:"3"}},[t._v("已签到")])],1),t._v(" "),s("mt-tab-container",{model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},[s("mt-tab-container-item",{attrs:{id:"1"}},[s("mt-checklist",{attrs:{title:"选择需要签到的人",options:t.users},model:{value:t.usersSelected,callback:function(e){t.usersSelected=e},expression:"usersSelected"}}),t._v(" "),s("div",{staticClass:"confirm"},[s("mt-button",{attrs:{type:"primary"},nativeOn:{click:function(e){return t.startSign(e)}}},[t._v("确认")])],1)],1),t._v(" "),s("mt-tab-container-item",{attrs:{id:"2"}},[s("p"),t._v(" "),s("div",{staticClass:"scan-qrcode"},[t.scanOpen?s("qrcode-stream",{on:{decode:t.onDecode}}):t._e()],1),t._v(" "),s("div",{staticClass:"scan-open"},[s("mt-switch",{model:{value:t.scanOpen,callback:function(e){t.scanOpen=e},expression:"scanOpen"}})],1),t._v(" "),s("div",{staticClass:"notOK"},t._l(t.usersToSign,function(t,e){return s("mt-cell",{key:e,attrs:{title:t.name}})}),1)]),t._v(" "),s("mt-tab-container-item",{attrs:{id:"3"}},[s("p"),t._v(" "),s("div",{staticClass:"OK"},t._l(t.usersSigned,function(t,e){return s("mt-cell",{key:e,attrs:{title:t.name}})}),1)])],1)],1)},staticRenderFns:[]};var l=s("VU/8")(o,u,!1,function(t){s("XRwb")},null,null).exports,c=s("/ocq"),v={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hello"},[s("h1",[t._v(t._s(t.msg))]),t._v(" "),s("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),s("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("\n        Core Docs\n      ")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("\n        Forum\n      ")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("\n        Community Chat\n      ")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("\n        Twitter\n      ")])]),t._v(" "),s("br"),t._v(" "),s("li",[s("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("\n        Docs for This Template\n      ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("\n        vue-router\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("\n        vuex\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("\n        vue-loader\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("\n        awesome-vue\n      ")])])])}]};var d=s("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},v,!1,function(t){s("1uuo")},"data-v-d8ec41bc",null).exports;a.default.use(c.a);var h=new c.a({routes:[{path:"/",name:"HelloWorld",component:d}]}),m=(s("d8/S"),s("DWlv")),_=s.n(m),p=s("mtWM"),f=s.n(p);a.default.config.productionTip=!1,a.default.use(_.a,f.a),a.default.axios.defaults.baseURL="/api",a.default.use(i.a),new a.default({el:"#app",router:h,components:{App:l},template:"<App/>"})},XRwb:function(t,e){},"d8/S":function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.e238bc746548c8a51a6a.js.map
webpackJsonp([1],{NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("//Fk"),l=a.n(n),o=a("7+uW"),r=a("zL8q"),i=a.n(r),s=(a("tvR6"),a("mtWM")),u=a.n(s),d=a("mw3O"),c=a.n(d),f=a("Rf8U"),p=a.n(f),m={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var h=a("VU/8")({name:"App"},m,!1,function(t){a("vGjf")},null,null).exports,b=a("/ocq"),v={data:function(){return{tableData:[],dialogFormVisible:!1,form:{id:"",url:""}}},methods:{handleStart:function(t,e){var a=this;o.default.set(this.tableData[t],2,2),u()({url:"/download",method:"post",data:{id:this.tableData[t][0]}}).then(function(t){a.loaddata()},function(t){a.loaddata()})},showstatus:function(t,e){return 1==t[2]?"已完成":0==t[2]?"失败":2==t[2]?"下载中...":"未开始"},handleDelete:function(t,e){var a=this;u()({url:"/deletefile",method:"post",data:{id:this.tableData[t][0]}}).then(function(t){a.loaddata()})},addfile:function(){var t=this;this.dialogFormVisible=!1,""!=this.form.url&&u()({url:"/addfile",method:"post",data:{url:this.form.url}}).then(function(e){t.form.url="",t.loaddata()})},allrun:function(){for(var t=this,e=0;e<this.tableData.length;e++)null==this.tableData[e][2]&&o.default.set(this.tableData[e],2,2);u.a.get("/download").then(function(e){t.loaddata()},function(e){t.loaddata()})},loaddata:function(){var t=this;u.a.get("/getfile").then(function(e){t.tableData=e.data})}},mounted:function(){this.loaddata()}},g={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("div",{staticClass:"btn_class"},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogFormVisible=!0}}},[t._v("添加任务")]),t._v(" "),a("el-button",{attrs:{type:"success"},on:{click:t.allrun}},[t._v("全部开始")])],1),t._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:"","align:center":""}},[a("el-table-column",{attrs:{type:"index","header-align":"center"}}),t._v(" "),a("el-table-column",{attrs:{label:"URL",width:"300","header-align":"center",prop:"1"}}),t._v(" "),a("el-table-column",{attrs:{label:"文件路径",width:"300","header-align":"center",prop:"3"}}),t._v(" "),a("el-table-column",{attrs:{label:"状态",width:"100","header-align":"center",prop:"2",formatter:t.showstatus}}),t._v(" "),a("el-table-column",{attrs:{label:"操作","header-align":"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"mini"},on:{click:function(a){t.handleStart(e.$index,e.row)}}},[t._v("开始")]),t._v(" "),a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){t.handleDelete(e.$index,e.row)}}},[t._v("删除")])]}}])})],1),t._v(" "),a("el-dialog",{attrs:{title:"添加文件地址",visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-form",{attrs:{model:t.form}},[a("el-form-item",{attrs:{label:"文件地址"}},[a("el-input",{attrs:{type:"textarea",rows:5},model:{value:t.form.url,callback:function(e){t.$set(t.form,"url",e)},expression:"form.url"}})],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.addfile}},[t._v("确 定")])],1)],1)],1)},staticRenderFns:[]};var w=a("VU/8")(v,g,!1,function(t){a("XDbC")},"data-v-62f1f2b0",null).exports;o.default.use(b.a);var y=new b.a({routes:[{path:"/",name:"main",component:w}]});a("OMJi");u.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",u.a.defaults.timeout=5e3,o.default.use(i.a,p.a,u.a),o.default.config.productionTip=!1,u.a.interceptors.request.use(function(t){return"post"===t.method&&(t.data=c.a.stringify(t.data)),t},function(t){return _.toast("错误的传参","fail"),l.a.reject(t)}),u.a.interceptors.request.use(function(t){return t},function(t){return l.a.reject(t)}),u.a.interceptors.response.use(function(t){return t},function(t){return l.a.reject(t)}),new o.default({el:"#app",router:y,components:{App:h},template:"<App/>"})},XDbC:function(t,e){},tvR6:function(t,e){},vGjf:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.a335008b82dbb3284f32.js.map
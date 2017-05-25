webpackJsonp([1],{11:function(t,e,a){a(35);var s=a(9)(a(31),a(41),null,null);t.exports=s.exports},30:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t){var e=a(2),s=a.n(e),i=a(12),n=a(11),r=a.n(n);t.jQuery=a(10);var l=t.jQuery;window.$=l,window.axios=a(2),i.a.prototype.$http=s.a,i.a.config.productionTip=!1,new i.a({el:"#app",template:"<App/>",components:{App:r.a}})}.call(e,a(1))},31:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(39),i=a.n(s);e.default={name:"app",components:{Hello:i.a}}},32:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"hello",mounted:function(){this.getData()},data:function(){return{filters:!1,selectedFilter:null,sokratiData:[]}},methods:{getData:function(){var t=this;this.$http.get("http://preview.sokrati.com/data/open_spendings.json").then(function(e){t.sokratiData=e.data.data})}}}},35:function(t,e){},39:function(t,e,a){var s=a(9)(a(32),a(40),null,null);t.exports=s.exports},40:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"columns"},[a("div",{staticClass:"column is-three-quarters"},[a("table",{staticClass:"table sortable is-bordered is-striped is-narrow",attrs:{id:"myTable"}},[t._m(0),t._v(" "),a("tbody",t._l(t.sokratiData,function(e,s){return a("tr",[a("th",[t._v(t._s(e.eng_rev_type))]),t._v(" "),a("th",[t._v(t._s(e.year_start))]),t._v(" "),a("th",[t._v(t._s(e.year_end))]),t._v(" "),a("th",[t._v(t._s(e.type))]),t._v(" "),a("th",[t._v(t._s(e.amount))])])}))])]),t._v(" "),a("div",{staticClass:"column"},[t.filters?t._e():a("a",{staticClass:"button is-black is-outlined",on:{click:function(e){e.preventDefault(),t.filters=!0}}},[t._v("Add Filters")]),t._v(" "),t.filters?a("form",[a("div",{staticClass:"field"},[a("p",{staticClass:"control"},[a("span",{staticClass:"select"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedFilter,expression:"selectedFilter"}],on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.selectedFilter=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:""}},[t._v("Select Filter")]),t._v(" "),a("option",{attrs:{value:"eng_rev_type"}},[t._v("eng_rev_type")]),t._v(" "),a("option",{attrs:{value:"year_start"}},[t._v("year_start")]),t._v(" "),a("option",{attrs:{value:"year_end"}},[t._v("year_end")]),t._v(" "),a("option",{attrs:{value:"type"}},[t._v("type")]),t._v(" "),a("option",{attrs:{value:"amount"}},[t._v("amount")])])])])]),t._v(" "),t.selectedFilter?a("div",{staticClass:"field",staticStyle:{"max-width":"50%"}},[a("p",{staticClass:"control"},[a("input",{staticClass:"input",attrs:{type:"text",placeholder:t.selectedFilter}})])]):t._e()]):t._e(),t._v(" "),t.filters?a("div",{staticClass:"field is-grouped",staticStyle:{"margin-top":"15px"}},[t._m(1),t._v(" "),a("p",{staticClass:"control"},[a("a",{staticClass:"button is-black is-outlined",on:{click:function(e){e.preventDefault(),t.filters=!1}}},[t._v("\n            Hide Filters\n          ")])])]):t._e()])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("Revenue Type")]),t._v(" "),a("th",[t._v("Year start")]),t._v(" "),a("th",[t._v("Year end")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Amount")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"control"},[a("a",{staticClass:"button is-primary"},[t._v("\n            Save changes\n          ")])])}]}},41:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[t._m(0),t._v(" "),a("hello")],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tile is-ancestor"},[a("div",{staticClass:"tile is-vertical is-16"},[a("div",{staticClass:"tile is-parent"},[a("article",{staticClass:"tile is-child notification is-danger"},[a("p",{staticClass:"title"},[t._v("Sokrati Data Analytics")])])])])])}]}}},[30]);
//# sourceMappingURL=app.851d16ce3239d04b3501.js.map
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1f1cd5ac","chunk-2d217eca"],{"0a8a":function(t,e,n){"use strict";var a=n("528a");t.exports=function(t,e){var n=[][t];return!!n&&a((function(){n.call(null,e||function(){return 1},1)}))}},"19e5":function(t,e,n){"use strict";n("bda1")},"236f":function(t,e,n){(function(e){var a=n("a546");t.exports="undefined"!=typeof e&&"process"==a(e)}).call(this,n("eef6"))},"73a8":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"Aone-page2"},[e("div",{staticClass:"lefts"},[e("p",{staticClass:"size20_weights"},[t._v("试卷详情"+t._s(t.set_points))]),e("p",{staticClass:"size16_weights"},[t._v(" 已选单选题"+t._s(t.single_num)+"道"+t._s(t.single_score)+"分 ， 已选多选题"+t._s(t.multi_num)+"道"+t._s(t.multi_score)+"分 ， 已选判断题"+t._s(t.judge_num)+"道"+t._s(t.judge_score)+"分 ， 已选总分"+t._s(t.score)+" "),e("span",{staticClass:"zongshu"},[t._v(t._s(t.total_s))])]),e("div",{staticClass:"questions_left"},[t._l(t.details,(function(n,a){return e("div",{staticClass:"item_question"},[e("div",{staticClass:"icon_lds"}),e("p",{staticClass:"ques_content"},[e("span",{staticClass:"ques_type",staticStyle:{display:"inline-block"}},[t._v(" 【 "+t._s(t.setType(n.question.type))+" 】")]),e("span",{staticClass:"chaochu2",staticStyle:{width:"80%"}},[t._v(t._s(a+1)+"、 "+t._s(n.question.content)+" ")])]),3==n.question.type?e("div",{staticStyle:{width:"90%"}},[e("p",{staticClass:"flex_center_starts2 item_aswer"},[e("el-radio",{staticStyle:{"text-align":"center",width:"10%","font-size":"16px"},attrs:{label:"是"}}),e("el-radio",{staticStyle:{"text-align":"center",width:"10%","font-size":"16px"},attrs:{label:"否"}})],1),e("p",{staticClass:"item_aswer",staticStyle:{"text-align":"left"}},[e("span",{staticClass:"bingo"},[t._v(" 正确答案为： "),e("span",[t._v(" "+t._s(t.set_pan(n.question.answer))+" ")])])])]):t._e(),2==n.question.type?e("div",{staticStyle:{width:"90%"}},[e("div",{staticClass:"item_aswer"},t._l(n.question.options,(function(t){return e("p",{staticStyle:{"text-align":"left"}},[e("el-checkbox",{attrs:{title:t.option+"."+t.content,label:t.option+"."+t.content}})],1)})),0),e("p",{staticClass:"item_aswer",staticStyle:{"text-align":"left"}},[e("span",{staticClass:"bingo"},[t._v(" 正确答案为： 【"),t._l(n.question.answer,(function(n){return e("span",[t._v(" "+t._s(n)+"、")])})),t._v(" 】 ")],2)])]):t._e(),1==n.question.type?e("div",{staticStyle:{width:"90%"}},[e("div",{staticClass:"item_aswer"},t._l(n.question.options,(function(t){return e("p",{staticStyle:{"text-align":"left"}},[e("el-radio",{attrs:{title:t.option+"."+t.content,label:t.option+"."+t.content}})],1)})),0),e("p",{staticClass:"item_aswer",staticStyle:{"text-align":"left"}},[e("span",{staticClass:"bingo"},[t._v(" 正确答案为： "),e("span",[t._v(" "+t._s(n.question.answer[0])+" ")])])])]):t._e()])})),0==t.details.length?e("div",{staticStyle:{margin:"100px auto",width:"50%","text-align":"center"}},[t._v(" 暂无选中题目 ")]):t._e()],2)])])},r=[],i=(n("ed70"),n("9d95"),n("c997")),o={name:"paperDetail",data(){return{zancun_list:[],zhens:!1,dialogInfo2:{title:"试卷预览",visible:!1,width:"800px"},course:[{id:0,name:"全部"}],ability:[{id:0,name:"全部"}],judge:null,odd_num:null,even_num:null,activeName:"",paperId:0,formInline:{content:"",course_id:"",page:1,limit:10,degree:"",ability_id:"",type:""},filters:{content:"",course_id:"",page:1,limit:20,degree:"",ability_id:"",type:"",is_option:1},name:"",details:[],score:0,single_num:0,single_score:0,multi_num:0,multi_score:0,judge_num:0,judge_score:0,filters_list:[]}},created(){this.paperId=this.$route.query.paperId,this.getPaperQuestion()},computed:{},methods:{go_paper(){let t=[];this.$store.state.d2admin.account.filters_list.map(e=>{t.push(e.id)}),Object(i["paperQuestion2"])(this.paperId,t).then(t=>{console.log(t,"是否提交成功")})},set_paper(){if(100!=this.total_s)return this.$message.warning("请确保总分为100分"),!1;100==this.total_s&&(this.dialogInfo2.visible=!0)},getkey(t){return t.id},del_item(t,e){console.log(this.$store.state.d2admin.account.filters_list[t].id,"删除数组id"),console.log(t,"删除数组角标"),console.log(e,"删除得数据");let n=[];this.$store.state.d2admin.account.filters_list.map(t=>{t.id!=e.id&&n.push(t)}),this.$nextTick(()=>{this.$refs.lds_new_table.toggleRowSelection(e,!1),this.$store.state.d2admin.account.filters_list=n,console.log(this.$store.state.d2admin.account.filters_list,"剩余数组")})},handleCurrentChange(t){this.filters.page=t,this.getSearch()},merge(t,e){t=[...t,...e],t=Array.from(new Set(t)),console.log(t)},handleSelectionChange(t){if(console.log(t,"执行了搜索x原始数据"),t){console.log("并且是已经选择过的——————————————————————");let e=t;e=e.flat(2),console.log(e,"xx2，降维之后得数据");let n={},a=e.reduce((t,e)=>(!n[e.id]&&(n[e.id]=t.push(e)),t),[]);console.log(a,"去重测试"),console.log(a,"newx首次去重之后得数据"),this.$store.state.d2admin.account.filters_list=a,console.log(this.$store.state.d2admin.account.filters_list,"当前得左侧数据")}},get_question(t){},set_pan(t){return"True"==t[0]?"正确":"错误"},set_duo(t){let e="";return t.map(t=>{e=t+" 、"}),e},setType(t){return 3==t?"判断题":2==t?"多选题":1==t?"单选题":void 0},setKey(){this.filters.content=this.formInline.content,this.filters.type=this.formInline.type||"0",this.filters.degree=this.formInline.degree||"0",this.filters.ability_id=this.formInline.ability_id||"0",this.filters.course_id=this.formInline.course_id||"0"},getPaperQuestion(){Object(i["paperQuestion"])(this.paperId,{limit:100}).then(t=>{console.log(t,"22"),200==t.code?(this.name=t.data.name,this.details=t.data.details,this.score=t.data.score,this.single_num=t.data.single_num,this.single_score=t.data.single_score,this.multi_num=t.data.multi_num,this.multi_score=t.data.multi_score,this.judge_num=t.data.judge_num,this.judge_score=t.data.judge_score):this.$message.error("系统异常")})}}},u=o,s=(n("19e5"),n("e607")),c=function(t){t.options.__source="src/views/newdata/paperDetail2.vue"},d=c,l=Object(s["a"])(u,a,r,!1,null,"11a96156",null);"function"===typeof d&&d(l);e["default"]=l.exports},"73e0":function(t,e,n){var a=n("ecb5"),r=n("79e9"),i=n("84a1"),o=n("600f"),u=TypeError,s=function(t){return function(e,n,s,c){a(n);var d=r(e),l=i(d),p=o(d),f=t?p-1:0,m=t?-1:1;if(s<2)while(1){if(f in l){c=l[f],f+=m;break}if(f+=m,t?f<0:p<=f)throw u("Reduce of empty array with no initial value")}for(;t?f>=0:p>f;f+=m)f in l&&(c=n(c,l[f],f,d));return c}};t.exports={left:s(!1),right:s(!0)}},"9d95":function(t,e,n){"use strict";var a=n("65d6"),r=n("73e0").left,i=n("0a8a"),o=n("0bf4"),u=n("236f"),s=!u&&o>79&&o<83,c=s||!i("reduce");a({target:"Array",proto:!0,forced:c},{reduce:function(t){var e=arguments.length;return r(this,t,e,e>1?arguments[1]:void 0)}})},bda1:function(t,e,n){},c997:function(t,e,n){"use strict";n.r(e),n.d(e,"getFormwork",(function(){return r})),n.d(e,"getUnitItem",(function(){return i})),n.d(e,"getDataItem",(function(){return o})),n.d(e,"addFormwork",(function(){return u})),n.d(e,"delFormwork",(function(){return s})),n.d(e,"putFormworkItem",(function(){return c})),n.d(e,"getFormworkItem",(function(){return d})),n.d(e,"getEquipmentSearch",(function(){return l})),n.d(e,"getUnitSearch",(function(){return p})),n.d(e,"getFormworkSearch",(function(){return f})),n.d(e,"getDataInfo",(function(){return m})),n.d(e,"getDataInfoItem",(function(){return g})),n.d(e,"getUnit",(function(){return h})),n.d(e,"addUnit",(function(){return _})),n.d(e,"putUnitItem",(function(){return b})),n.d(e,"delUnit",(function(){return j})),n.d(e,"addDataInfo",(function(){return y})),n.d(e,"delDataInfo",(function(){return O})),n.d(e,"putDataInfo",(function(){return w})),n.d(e,"getexcel",(function(){return x})),n.d(e,"new_agency",(function(){return v})),n.d(e,"new_agency2",(function(){return I})),n.d(e,"new_area",(function(){return q})),n.d(e,"new_area2",(function(){return $})),n.d(e,"process",(function(){return C})),n.d(e,"process2",(function(){return k})),n.d(e,"getagency",(function(){return S})),n.d(e,"process3",(function(){return D})),n.d(e,"target",(function(){return F})),n.d(e,"target2",(function(){return U})),n.d(e,"score",(function(){return E})),n.d(e,"detail",(function(){return z})),n.d(e,"dels",(function(){return T})),n.d(e,"puts",(function(){return Q})),n.d(e,"getquestion",(function(){return A})),n.d(e,"getcourse",(function(){return L})),n.d(e,"getability",(function(){return R})),n.d(e,"postquestion",(function(){return J})),n.d(e,"putquestion",(function(){return P})),n.d(e,"deletequestion",(function(){return B})),n.d(e,"paperList",(function(){return K})),n.d(e,"paperDelete",(function(){return N})),n.d(e,"paperEdit",(function(){return G})),n.d(e,"paperRevoke",(function(){return H})),n.d(e,"paperCreate",(function(){return M})),n.d(e,"paperQuestion",(function(){return V})),n.d(e,"paperQuestion2",(function(){return W})),n.d(e,"getpaper",(function(){return X})),n.d(e,"postpaper",(function(){return Y})),n.d(e,"getpapermine",(function(){return Z})),n.d(e,"getresult",(function(){return tt})),n.d(e,"getid",(function(){return et})),n.d(e,"get_look",(function(){return nt})),n.d(e,"top_one",(function(){return at}));var a=n("dd88");n("86ba");function r(t){return Object(a["a"])({url:"/api/getFormwork",method:"post",data:t})}function i(t){return Object(a["a"])({url:"/api/getUnitItem",method:"post",data:t})}function o(t){return Object(a["a"])({url:"/api/getExcelByData",method:"post",data:t})}function u(t){return Object(a["a"])({url:"/api/addFormwork",method:"post",data:t})}function s(t){return Object(a["a"])({url:"/api/delFormwork",method:"post",data:t})}function c(t){return Object(a["a"])({url:"/api/putFormworkItem",method:"post",data:t})}function d(t){return Object(a["a"])({url:"/api/getFormworkItem",method:"post",data:t})}function l(t){return Object(a["a"])({url:"/api/getEquipmentSearch",method:"post",data:t})}function p(t){return Object(a["a"])({url:"/api/getUnitSearch",method:"post",data:t})}function f(t){return Object(a["a"])({url:"/api/getFormworkSearch",method:"post",data:t})}function m(t){return Object(a["a"])({url:"/api/getDataInfo",method:"post",data:t})}function g(t){return Object(a["a"])({url:"/api/getDataInfoItem",method:"post",data:t})}function h(t){return Object(a["a"])({url:"/api/getUnit",method:"post",data:t})}function _(t){return Object(a["a"])({url:"/api/addUnit",method:"post",data:t})}function b(t){return Object(a["a"])({url:"/api/putUnitItem",method:"post",data:t})}function j(t){return Object(a["a"])({url:"/api/delUnit",method:"post",data:t})}function y(t){return Object(a["a"])({url:"/api/addDataInfo",method:"post",data:t})}function O(t){return Object(a["a"])({url:"/api/delDataInfo",method:"post",data:t})}function w(t){return Object(a["a"])({url:"/api/putDataInfo",method:"post",data:t})}function x(t){return Object(a["a"])({url:"/api/getexcel",method:"post",data:t})}function v(t){return Object(a["a"])({url:"/api/agency/",method:"post",data:t})}function I(t){return Object(a["a"])({url:"/api/agency/",method:"get"})}function q(t){return Object(a["a"])({url:"/api/system/area/?code=100000",method:"get"})}function $(t){return Object(a["a"])({url:"/api/system/area/?code="+t,method:"get"})}function C(t){return Object(a["a"])({url:"/api/agency/process/",method:"post",data:t})}function k(t){return Object(a["a"])({url:"/api/agency/process/",method:"get",params:t})}function S(t){return Object(a["a"])({url:`/api/agency/${t}/`,method:"get"})}function D(t){return Object(a["a"])({url:"/api/agency/process/",method:"put",params:t})}function F(t){return Object(a["a"])({url:"/api/agency/target/",method:"get",params:t})}function U(t){return Object(a["a"])({url:"/api/agency/target/",method:"post",data:t})}function E(t){return Object(a["a"])({url:"/api/agency/target/score/",method:"get",params:t})}function z(t){return Object(a["a"])({url:`/api/agency/process/detail/${t}/`,method:"get"})}function T(t){return Object(a["a"])({url:`/api/agency/${t}/`,method:"DELETE"})}function Q(t){return Object(a["a"])({url:`/api/agency/${t}/`,method:"put"})}function A(t){return Object(a["a"])({url:"/api/exam/question/",method:"get",params:t})}function L(t){return Object(a["a"])({url:"/api/exam/course/",method:"get"})}function R(t){return Object(a["a"])({url:"/api/exam/ability/",method:"get"})}function J(t){return Object(a["a"])({url:"/api/exam/question/",method:"post",data:t})}function P(t,e){return Object(a["a"])({url:"/api/exam/question/"+t+"/",method:"put",data:e})}function B(t){return Object(a["a"])({url:`/api/exam/question/${t}/`,method:"DELETE"})}function K(t){return Object(a["a"])({url:"/api/exam/paper/",method:"get",params:t})}function N(t){return Object(a["a"])({url:`/api/exam/paper/${t}/`,method:"delete"})}function G(t,e){return Object(a["a"])({url:`/api/exam/paper/${t}/`,method:"put",data:e})}function H(t,e){return Object(a["a"])({url:`/api/exam/paper/${t}/`,method:"patch",data:e})}function M(t){return Object(a["a"])({url:"/api/exam/paper/",method:"post",data:t})}function V(t,e){return Object(a["a"])({url:`/api/exam/paper_question/${t}/`,method:"get",params:e})}function W(t,e){return Object(a["a"])({url:`/api/exam/paper_question/${t}/`,method:"put",data:e})}function X(){return Object(a["a"])({url:"/api/exam/paper/",method:"get"})}function Y(t,e){return Object(a["a"])({url:`/api/exam/mine/${t}/`,method:"post",data:e})}function Z(){return Object(a["a"])({url:"/api/exam/mine/",method:"get"})}function tt(t){return Object(a["a"])({url:`/api/exam/result/${t}/`,method:"get"})}function et(t){return Object(a["a"])({url:"/api/exam/mine/",method:"post",data:t})}function nt(t){return Object(a["a"])({url:`/api/exam/mine/${t}/`,method:"get"})}function at(t){return Object(a["a"])({url:`/api/exam/paper_score/${t}/`,method:"get"})}}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d8cab78c"],{"60f6":function(t,e,n){"use strict";n("77b6")},"77b6":function(t,e,n){},"7a1f":function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"b",(function(){return r}));var a=n("dd88");n("86ba");function i(t){return Object(a["a"])({url:"/api/screen/census/",method:"get",data:t})}function o(t){return Object(a["a"])({url:"/api/screen/word/",method:"get",data:t})}function r(t){return Object(a["a"])({url:"/api/report/?type=3&page=1&limit=10",method:"get",data:t})}},e5e9:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"bg"},[t._m(0),e("div",{staticClass:"bg_content"},[e("div",[e("div",{ref:"chart2",attrs:{id:"char2"}})])])])},i=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"bg_tt"},[e("p",[t._v("热门关键词")]),e("p",{staticStyle:{"margin-top":"-5px"}},[e("img",{staticClass:"imgs",attrs:{src:"/image/nmind/tit.png",alt:""}})])])}],o=(n("ed70"),n("a70e"),n("3578"),n("1da7"),n("7a1f")),r={data(){return{myChart2:null,wordClouds:[],worddata:[{name:"Java",value:2300,count:2300},{name:"python",value:2e3,count:2300},{name:"Java",value:2300,count:2300},{name:"python",value:2e3,count:2300},{name:"Java",value:2300,count:2300},{name:"js",value:2e3,count:2300},{name:"map",value:400,count:2300},{name:"go",value:100,count:2300},{name:"css",value:200,count:2300},{name:"html",value:2200,count:2300}]}},created(){},mounted(){""!=this.wordClouds&&this.initCharts(this.wordClouds),Object(o["c"])().then(t=>{"200"==t.code&&(this.wordClouds=t.data,this.wordClouds.map(t=>{t["value"]=t["count"]}),this.worddata=this.wordClouds,this.initCharts(this.wordClouds.slice(0,20)))})},methods:{initCharts(t){let e=this.$echarts.init(this.$refs.chart2);this.myChart2=this.$echarts.init(this.$refs.chart2);this.wordClouds;e.on("click",t=>{sessionStorage.setItem("keys",t.name),this.$router.push({name:"/search/result",query:{keyword:t.name,type:0}})});e.setOption({title:{x:"center"},backgroundColor:"#fff0",series:[{animation:!0,animationDuration:3e3,animationDuration:function(t){return 1500*t},animationEasing:"linear",animationThreshold:10,type:"wordCloud",gridSize:0,sizeRange:[14,45],rotationRange:[0,0],textStyle:{color:function(){var t=["#56e0fd","#286e8f","#7a7340","#1a7bdb","#008cfb","#11356f","#103771","#77663c","#1b567b","#2979cc","#2b688f"];return t[parseInt(10*Math.random())]}},left:"center",top:"center",right:null,bottom:null,width:"200%",height:"200%",data:t}]}),window.addEventListener("resize",(function(){e.resize()}))}}},s=r,u=(n("60f6"),n("e607")),c=function(t){t.options.__source="src/views/system/index/components/d2-page-cover/wordcloud.vue"},d=c,l=Object(u["a"])(s,a,i,!1,null,"1e110112",null);"function"===typeof d&&d(l);e["default"]=l.exports}}]);
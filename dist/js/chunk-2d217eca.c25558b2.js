(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d217eca"],{c997:function(t,e,n){"use strict";n.r(e),n.d(e,"getFormwork",(function(){return u})),n.d(e,"getUnitItem",(function(){return a})),n.d(e,"getDataItem",(function(){return o})),n.d(e,"addFormwork",(function(){return c})),n.d(e,"delFormwork",(function(){return i})),n.d(e,"putFormworkItem",(function(){return d})),n.d(e,"getFormworkItem",(function(){return p})),n.d(e,"getEquipmentSearch",(function(){return f})),n.d(e,"getUnitSearch",(function(){return m})),n.d(e,"getFormworkSearch",(function(){return s})),n.d(e,"getDataInfo",(function(){return l})),n.d(e,"getDataInfoItem",(function(){return g})),n.d(e,"getUnit",(function(){return h})),n.d(e,"addUnit",(function(){return b})),n.d(e,"putUnitItem",(function(){return j})),n.d(e,"delUnit",(function(){return O})),n.d(e,"addDataInfo",(function(){return x})),n.d(e,"delDataInfo",(function(){return w})),n.d(e,"putDataInfo",(function(){return I})),n.d(e,"getexcel",(function(){return y})),n.d(e,"new_agency",(function(){return k})),n.d(e,"new_agency2",(function(){return D})),n.d(e,"new_area",(function(){return $})),n.d(e,"new_area2",(function(){return q})),n.d(e,"process",(function(){return F})),n.d(e,"process2",(function(){return U})),n.d(e,"getagency",(function(){return E})),n.d(e,"process3",(function(){return _})),n.d(e,"target",(function(){return S})),n.d(e,"target2",(function(){return L})),n.d(e,"score",(function(){return v})),n.d(e,"detail",(function(){return J})),n.d(e,"dels",(function(){return Q})),n.d(e,"puts",(function(){return T})),n.d(e,"getquestion",(function(){return B})),n.d(e,"getcourse",(function(){return C})),n.d(e,"getability",(function(){return R})),n.d(e,"postquestion",(function(){return z})),n.d(e,"putquestion",(function(){return A})),n.d(e,"deletequestion",(function(){return G})),n.d(e,"paperList",(function(){return H})),n.d(e,"paperDelete",(function(){return K})),n.d(e,"paperEdit",(function(){return M})),n.d(e,"paperRevoke",(function(){return N})),n.d(e,"paperCreate",(function(){return P})),n.d(e,"paperQuestion",(function(){return V})),n.d(e,"paperQuestion2",(function(){return W})),n.d(e,"getpaper",(function(){return X})),n.d(e,"postpaper",(function(){return Y})),n.d(e,"getpapermine",(function(){return Z})),n.d(e,"getresult",(function(){return tt})),n.d(e,"getid",(function(){return et})),n.d(e,"get_look",(function(){return nt})),n.d(e,"top_one",(function(){return rt}));var r=n("dd88");n("86ba");function u(t){return Object(r["a"])({url:"/api/getFormwork",method:"post",data:t})}function a(t){return Object(r["a"])({url:"/api/getUnitItem",method:"post",data:t})}function o(t){return Object(r["a"])({url:"/api/getExcelByData",method:"post",data:t})}function c(t){return Object(r["a"])({url:"/api/addFormwork",method:"post",data:t})}function i(t){return Object(r["a"])({url:"/api/delFormwork",method:"post",data:t})}function d(t){return Object(r["a"])({url:"/api/putFormworkItem",method:"post",data:t})}function p(t){return Object(r["a"])({url:"/api/getFormworkItem",method:"post",data:t})}function f(t){return Object(r["a"])({url:"/api/getEquipmentSearch",method:"post",data:t})}function m(t){return Object(r["a"])({url:"/api/getUnitSearch",method:"post",data:t})}function s(t){return Object(r["a"])({url:"/api/getFormworkSearch",method:"post",data:t})}function l(t){return Object(r["a"])({url:"/api/getDataInfo",method:"post",data:t})}function g(t){return Object(r["a"])({url:"/api/getDataInfoItem",method:"post",data:t})}function h(t){return Object(r["a"])({url:"/api/getUnit",method:"post",data:t})}function b(t){return Object(r["a"])({url:"/api/addUnit",method:"post",data:t})}function j(t){return Object(r["a"])({url:"/api/putUnitItem",method:"post",data:t})}function O(t){return Object(r["a"])({url:"/api/delUnit",method:"post",data:t})}function x(t){return Object(r["a"])({url:"/api/addDataInfo",method:"post",data:t})}function w(t){return Object(r["a"])({url:"/api/delDataInfo",method:"post",data:t})}function I(t){return Object(r["a"])({url:"/api/putDataInfo",method:"post",data:t})}function y(t){return Object(r["a"])({url:"/api/getexcel",method:"post",data:t})}function k(t){return Object(r["a"])({url:"/api/agency/",method:"post",data:t})}function D(t){return Object(r["a"])({url:"/api/agency/",method:"get"})}function $(t){return Object(r["a"])({url:"/api/system/area/?code=100000",method:"get"})}function q(t){return Object(r["a"])({url:"/api/system/area/?code="+t,method:"get"})}function F(t){return Object(r["a"])({url:"/api/agency/process/",method:"post",data:t})}function U(t){return Object(r["a"])({url:"/api/agency/process/",method:"get",params:t})}function E(t){return Object(r["a"])({url:`/api/agency/${t}/`,method:"get"})}function _(t){return Object(r["a"])({url:"/api/agency/process/",method:"put",params:t})}function S(t){return Object(r["a"])({url:"/api/agency/target/",method:"get",params:t})}function L(t){return Object(r["a"])({url:"/api/agency/target/",method:"post",data:t})}function v(t){return Object(r["a"])({url:"/api/agency/target/score/",method:"get",params:t})}function J(t){return Object(r["a"])({url:`/api/agency/process/detail/${t}/`,method:"get"})}function Q(t){return Object(r["a"])({url:`/api/agency/${t}/`,method:"DELETE"})}function T(t){return Object(r["a"])({url:`/api/agency/${t}/`,method:"put"})}function B(t){return Object(r["a"])({url:"/api/exam/question/",method:"get",params:t})}function C(t){return Object(r["a"])({url:"/api/exam/course/",method:"get"})}function R(t){return Object(r["a"])({url:"/api/exam/ability/",method:"get"})}function z(t){return Object(r["a"])({url:"/api/exam/question/",method:"post",data:t})}function A(t,e){return Object(r["a"])({url:"/api/exam/question/"+t+"/",method:"put",data:e})}function G(t){return Object(r["a"])({url:`/api/exam/question/${t}/`,method:"DELETE"})}function H(t){return Object(r["a"])({url:"/api/exam/paper/",method:"get",params:t})}function K(t){return Object(r["a"])({url:`/api/exam/paper/${t}/`,method:"delete"})}function M(t,e){return Object(r["a"])({url:`/api/exam/paper/${t}/`,method:"put",data:e})}function N(t,e){return Object(r["a"])({url:`/api/exam/paper/${t}/`,method:"patch",data:e})}function P(t){return Object(r["a"])({url:"/api/exam/paper/",method:"post",data:t})}function V(t,e){return Object(r["a"])({url:`/api/exam/paper_question/${t}/`,method:"get",params:e})}function W(t,e){return Object(r["a"])({url:`/api/exam/paper_question/${t}/`,method:"put",data:e})}function X(){return Object(r["a"])({url:"/api/exam/paper/",method:"get"})}function Y(t,e){return Object(r["a"])({url:`/api/exam/mine/${t}/`,method:"post",data:e})}function Z(){return Object(r["a"])({url:"/api/exam/mine/",method:"get"})}function tt(t){return Object(r["a"])({url:`/api/exam/result/${t}/`,method:"get"})}function et(t){return Object(r["a"])({url:"/api/exam/mine/",method:"post",data:t})}function nt(t){return Object(r["a"])({url:`/api/exam/mine/${t}/`,method:"get"})}function rt(t){return Object(r["a"])({url:`/api/exam/paper_score/${t}/`,method:"get"})}}}]);
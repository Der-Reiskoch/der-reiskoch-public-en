import{r as T,h as W,q as z,o as C,w,c as r,u as F,W as M,a as N,Z as B,m as q,Y as o,j as h,B as $,d as j}from"./khao-ui-svelte-dispatchRemoteControlEvent-4.17.8.js";import{h as E}from"./khao-ui-svelte-style-4.17.8.js";import{T as U}from"./khao-ui-button-4.17.8.js";import"./khao-ui-svelte-this-4.17.8.js";import"./khao-ui-icon-4.17.8.js";var Y=T("<div><!></div>");const Z={hash:"svelte-dpccdp",code:`.feedback-none.svelte-dpccdp {
    animation: none;}

  @keyframes svelte-dpccdp-feedback-success {
    10%,
    90% {
      transform: translate3d(0, -1px, 0);
    }

    20%,
    80% {
      transform: translate3d(0, 2px, 0);
    }

    30%,
    50%,
    70% {
      transform: translate3d(0, -4px, 0);
    }

    40%,
    60% {
      transform: translate3d(0, 4px, 0);
    }
  }.feedback-success.svelte-dpccdp {
    animation: svelte-dpccdp-feedback-success 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;}`};function A(n,a){z(a,!0),C(n,Z);let k=w("none"),l=r(a,"label",7,""),e=r(a,"title",7,""),f=r(a,"priority",7,"primary"),g=r(a,"size",7,"medium"),i=r(a,"iconName",7,""),b=r(a,"textToCopy",7,""),c=r(a,"copyFrom",7,""),m=r(a,"customMinWidth",7,"");F(()=>{!b()&&!c()&&console.error("khao-copy-to-clipboard: both textToCopy and copyFrom are empty!")});const p=a=>{a&&(h(k,a,!0),setTimeout(()=>{h(k,"none")},1e3))};async function u(a){try{await navigator.clipboard.writeText(a),p("success")}catch{p("error")}}function s(){let a=b();if(!b()){const b=document.getElementById(c());b?a=b.value:console.error(`khao-copy-to-clipboard: no element found with id=${c()}`)}u(a)}var t={get label(){return l()},set label(a=""){l(a),o()},get title(){return e()},set title(a=""){e(a),o()},get priority(){return f()},set priority(a="primary"){f(a),o()},get size(){return g()},set size(a="medium"){g(a),o()},get iconName(){return i()},set iconName(a=""){i(a),o()},get textToCopy(){return b()},set textToCopy(a=""){b(a),o()},get copyFrom(){return c()},set copyFrom(a=""){c(a),o()},get customMinWidth(){return m()},set customMinWidth(a=""){m(a),o()}},d=Y(),v=M(d);return U(v,{get label(){return l()},get title(){return e()},get priority(){return f()},get size(){return g()},get iconName(){return i()},get customMinWidth(){return m()},href:"javasctipt:",onClick:s}),$(d),B(()=>E(d,1,`feedback-${j(k)??""}`,"svelte-dpccdp")),q(n,d),N(t)}customElements.define("khao-copy-to-clipboard",W(A,{label:{},title:{},priority:{},size:{},iconName:{},textToCopy:{},copyFrom:{},customMinWidth:{}},[],[],!0))
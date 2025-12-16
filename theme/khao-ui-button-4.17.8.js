import{r as G,n as M,h as _,q as j,o as K,c as a,W as Y,K as Z,a as E,Z as F,l as O,m as Q,Y as r,B as T}from"./khao-ui-svelte-dispatchRemoteControlEvent-4.17.8.js";import{W as A,o as i}from"./khao-ui-svelte-this-4.17.8.js";import{h as D,N as H}from"./khao-ui-svelte-style-4.17.8.js";import{h as I}from"./khao-ui-icon-4.17.8.js";const w="primary";var J=G("<a> <!></a>");const L={hash:"svelte-kq5sdz",code:`.button.svelte-kq5sdz {appearance:none;background:transparent;border:none;cursor:pointer;flex-grow:0;flex-shrink:0;font:inherit;padding:0;user-select:none;&:focus {outline:none;}}:host {--khao-button-container-color: var(--khao-sys-color-primary);--khao-button-label-text-color: var(--khao-sys-color-on-primary);--khao-button-state-layer-color: var(--khao-sys-color-on-primary);--khao-button-label-font-weight: var(
      --khao-sys-typescale-label-medium-weight-prominent
    );--khao-button-container-shape: var(--khao-sys-shape-corner-small);--khao-button-leading-space: var(--khao-sys-size-regular-5);--khao-button-trailing-space: var(--khao-sys-size-regular-5);--khao-button-icon-leading-space: var(--khao-sys-size-regular-2);--khao-button-height-compact: var(--khao-sys-size-regular-8);--khao-button-width-compact: 80px;--khao-button-height-medium: var(--khao-sys-size-regular-10);--khao-button-width-medium: 150px;--khao-button-height-large: var(--khao-sys-size-regular-12);--khao-button-width-large: 180px;--khao-button-hover-state-layer-opacity: var(
      --khao-sys-state-hover-state-layer-opacity
    );--khao-button-focus-state-layer-opacity: var(
      --khao-sys-state-focus-state-layer-opacity
    );--khao-button-pressed-state-layer-opacity: var(
      --khao-sys-state-pressed-state-layer-opacity
    );}a.button.svelte-kq5sdz {text-decoration:none;}.button.svelte-kq5sdz {display:inline-flex;color:var(--khao-button-label-text-color);background-color:var(--khao-button-container-color);align-items:center;justify-content:center;padding:0.2rem;border-radius:var(--khao-button-container-shape);font-weight:var(--khao-button-label-font-weight);cursor:pointer;padding-inline-start:var(--khao-button-leading-space);padding-inline-end:var(--khao-button-trailing-space);gap:var(--khao-button-icon-leading-space);white-space:nowrap;transition:background-color 0.1s,
      color 0.2s;&:hover {background-color:color-mix(
        in srgb,
        var(--khao-button-container-color),
        var(--khao-button-state-layer-color)
          var(--khao-button-hover-state-layer-opacity)
      );}&:focus-visible {background-color:color-mix(
        in srgb,
        var(--khao-button-container-color),
        var(--khao-button-state-layer-color)
          var(--khao-button-focus-state-layer-opacity)
      );outline-offset:2px;outline:2px solid
        color-mix(
          in srgb,
          var(--khao-button-container-color),
          var(--khao-button-state-layer-color)
            var(--khao-button-focus-state-layer-opacity)
        );}&:active {background-color:color-mix(
        in srgb,
        var(--khao-button-container-color),
        var(--khao-button-state-layer-color)
          var(--khao-button-pressed-state-layer-opacity)
      );}}.button-size-compact.svelte-kq5sdz {min-width:var(--khao-button-width-compact);height:var(--khao-button-height-compact);}.button-size-medium.svelte-kq5sdz {min-width:var(--khao-button-width-medium);height:var(--khao-button-height-medium);}.button-size-large.svelte-kq5sdz {min-width:var(--khao-button-width-large);height:var(--khao-button-height-large);}.button-secondary.svelte-kq5sdz {--khao-button-container-color: var(--khao-sys-color-secondary);--khao-button-label-text-color: var(--khao-sys-color-on-secondary);--khao-button-state-layer-color: var(--khao-sys-color-on-secondary);}.button-tertiary.svelte-kq5sdz {--khao-button-container-color: var(--khao-sys-color-tertiary);--khao-button-label-text-color: var(--khao-sys-color-on-tertiary);--khao-button-state-layer-color: var(--khao-sys-color-on-tertiary);}`};function P(t,b){var u,c,k,v,x;j(b,!0),K(t,L);function z(b,a,c){var d=b!==""&&a!==""?`--khao-button-container-color:${b}; --khao-button-label-text-color:${a}; --khao-button-icon-color: ${a}; --khao-button-state-layer-color: ${a};`:"";return d+=c!==""?`min-width: ${c}`:"",d}function y(a,b){return a===null&&b!==null?"button":""}let e=a(b,"label",7),h=a(b,"title",23,e),f=a(b,"href",7,null),s=a(b,"rel",7,null),l=a(b,"target",7,null),m=a(b,"priority",7,w),n=a(b,"size",7,"medium"),o=a(b,"customBGColor",7,""),p=a(b,"customColor",7,""),q=a(b,"customMinWidth",7,""),g=a(b,"iconName",7,""),d=a(b,"onClick",7,null);return u={get label(){return e()},set label(a){e(a),r()},get title(){return h()},set title(a=e){h(a),r()},get href(){return f()},set href(a=null){f(a),r()},get rel(){return s()},set rel(a=null){s(a),r()},get target(){return l()},set target(a=null){l(a),r()},get priority(){return m()},set priority(a=w){m(a),r()},get size(){return n()},set size(a="medium"){n(a),r()},get customBGColor(){return o()},set customBGColor(a=""){o(a),r()},get customColor(){return p()},set customColor(a=""){p(a),r()},get customMinWidth(){return q()},set customMinWidth(a=""){q(a),r()},get iconName(){return g()},set iconName(a=""){g(a),r()},get onClick(){return d()},set onClick(a=null){d(a),r()}},c=J(),c.__click=function(...b){var a;(a=d())==null||a.apply(this,b)},k=Y(c),v=Z(k),x=a=>{I(a,{get iconName(){return g()},sizeFactor:"5"})},A(v,a=>{g()!==""&&a(x)}),T(c),F((a,b)=>{D(c,1,`button button-${m()??""} button-size-${n()??""}`,"svelte-kq5sdz"),i(c,"title",h()),i(c,"href",d()===null?f():"javascript:"),i(c,"target",l()),i(c,"rel",s()),H(c,a),i(c,"role",b),O(k,`${e()??""} `)},[()=>z(o(),p(),q()),()=>y(f(),d())]),Q(t,c),E(u)}M(["click"]),customElements.define("khao-button",_(P,{label:{},title:{},href:{},rel:{},target:{},priority:{},size:{},customBGColor:{},customColor:{},customMinWidth:{},iconName:{},onClick:{}},[],[],!0));export{P as T}
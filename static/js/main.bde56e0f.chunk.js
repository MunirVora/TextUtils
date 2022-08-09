(this.webpackJsonptextutils=this.webpackJsonptextutils||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(4),l=n.n(s),r=(n(9),n(2)),o=(n(10),n(0));function i(e){return Object(o.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(o.jsxs)("div",{className:"container-fluid",children:[Object(o.jsx)("a",{className:"navbar-brand",href:"/",children:e.title}),Object(o.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{className:"navbar-toggler-icon"})}),Object(o.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(o.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link","aria-current":"page",href:"/",children:"Home"})})})}),Object(o.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(o.jsx)("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",id:"flexSwitchCheckDefault"}),Object(o.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"Dark Mode"})]})]})})}function d(e){var t=Object(c.useState)(""),n=Object(r.a)(t,2),a=n[0],s=n[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{style:{color:"light"===e.mode?"#042743":"white"},children:[Object(o.jsx)("h2",{className:"my-2",children:e.heading}),Object(o.jsx)("div",{className:"mb-3",children:Object(o.jsx)("textarea",{className:"form-control",value:a,onChange:function(e){s(e.target.value)},id:"myBox",rows:"6",style:{backgroundColor:"light"===e.mode?"white":"#13466e",color:"light"===e.mode?"black":"white"}})}),Object(o.jsx)("button",{type:"button",disabled:0===a.length,onClick:function(){s(a.toUpperCase()),e.showAlert("Converted to Uppercase!","success")},className:"btn btn-primary mx-1 my-1",children:"Convert to Uppercase"}),Object(o.jsx)("button",{type:"button",disabled:0===a.length,onClick:function(){s(a.toLowerCase()),e.showAlert("Converted to Lowercase!","success")},className:"btn btn-primary mx-1 my-1",children:"Convert to Lowercase"}),Object(o.jsx)("button",{type:"button",disabled:0===a.length,onClick:function(){s(""),e.showAlert("Text Cleared!","success")},className:"btn btn-primary mx-1 my-1",children:"Clear Text"}),Object(o.jsx)("button",{type:"button",disabled:0===a.length,onClick:function(){var t=document.getElementById("myBox");t.select(),navigator.clipboard.writeText(t.value),document.getSelection().removeAllRanges(),e.showAlert("Copied to Clipboard!","success")},className:"btn btn-primary mx-1 my-1",children:"Copy Text"}),Object(o.jsx)("button",{type:"button",disabled:0===a.length,onClick:function(){s(a.split(/[ ]+/).join(" ")),e.showAlert("Extra Spaces Removed","success")},className:"btn btn-primary mx-1 my-1",children:"Remove Extra Spaces"})]}),Object(o.jsxs)("div",{style:{color:"light"===e.mode?"#042743":"white"},children:[Object(o.jsx)("h2",{className:"my-3",children:"Your Text Summary"}),Object(o.jsxs)("p",{children:[a.split(" ").filter((function(e){return 0!==e.length})).length," words and ",a.length," characters"]}),Object(o.jsxs)("p",{children:[.008*a.split(" ").filter((function(e){return 0!==e.length})).length," minutes to read"]}),Object(o.jsx)("h2",{children:"Preview"}),Object(o.jsx)("p",{children:a.length>0?a:"Nothing to Preview!"})]})]})}function b(e){return Object(o.jsx)("div",{style:{height:"50px"},children:e.alert&&Object(o.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(o.jsx)("strong",{children:function(e){var t=e.toLowerCase();return e.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)})," : ",e.alert.msg]})})}i.defaultProps={title:"Set Title Here"};var h=function(){var e=Object(c.useState)("light"),t=Object(r.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(""),l=Object(r.a)(s,2),h=l[0],u=l[1],j=function(e,t){u({msg:e,type:t}),setTimeout((function(){u(null)}),1500)};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(i,{mode:n,toggleMode:function(){"light"===n?(a("dark"),document.body.style.backgroundColor="#042743",j("Dark Mode Enabled!","success")):(a("light"),document.body.style.backgroundColor="white",j("Light Mode Enabled!","success"))},title:"TextUtils"}),Object(o.jsx)(b,{alert:h}),Object(o.jsx)("div",{className:"container",children:Object(o.jsx)(d,{showAlert:j,mode:n,heading:"Enter your text to analyze"})})]})},u=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,l=t.getTTFB;n(e),c(e),a(e),s(e),l(e)}))};l.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(h,{})}),document.getElementById("root")),u()},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.bde56e0f.chunk.js.map
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[76712],{15995:(e,t,r)=>{r.d(t,{A:()=>o});var a=r(62540);r(63696);var n=r(11750);function o({children:e,hidden:t,className:r}){return(0,a.jsx)("div",{role:"tabpanel",className:(0,n.A)("tabItem_pnkT",r),hidden:t,children:e})}},27446:(e,t,r)=>{r.d(t,{A:()=>j});var a=r(62540),n=r(63696),o=r(11750),s=r(7846),l=r(49519),i=r(96439),c=r(19739),u=r(66904),d=r(79244);function h(e){var t,r;return null!==(r=null===(t=n.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){let{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))||void 0===t?void 0:t.filter(Boolean))&&void 0!==r?r:[]}function p({value:e,tabValues:t}){return t.some(t=>t.value===e)}var m=r(10709);function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},a=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),a.forEach(function(t){var a;a=r[t],t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a})}return e}function b(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r.push.apply(r,a)}return r})(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}),e}function v({className:e,block:t,selectedValue:r,selectValue:n,tabValues:l}){let i=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),u=e=>{let t=e.currentTarget,a=l[i.indexOf(t)].value;a!==r&&(c(t),n(a))},d=e=>{var t,r;let a=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{let r=i.indexOf(e.currentTarget)+1;a=null!==(t=i[r])&&void 0!==t?t:i[0];break}case"ArrowLeft":{let t=i.indexOf(e.currentTarget)-1;a=null!==(r=i[t])&&void 0!==r?r:i[i.length-1]}}null==a||a.focus()};return(0,a.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":t},e),children:l.map(({value:e,label:t,attributes:n})=>(0,a.jsx)("li",b(f({role:"tab",tabIndex:r===e?0:-1,"aria-selected":r===e,ref:e=>i.push(e),onKeyDown:d,onClick:u},n),{className:(0,o.A)("tabs__item","tabItem_AQgk",null==n?void 0:n.className,{"tabs__item--active":r===e}),children:null!=t?t:e}),e))})}function g({lazy:e,children:t,selectedValue:r}){let s=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){let e=s.find(e=>e.props.value===r);return e?(0,n.cloneElement)(e,{className:(0,o.A)("margin-top--md",e.props.className)}):null}return(0,a.jsx)("div",{className:"margin-top--md",children:s.map((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))})}function y(e){let t=function(e){let{defaultValue:t,queryString:r=!1,groupId:a}=e,o=function(e){let{values:t,children:r}=e;return(0,n.useMemo)(()=>{let e=null!=t?t:h(r).map(({props:{value:e,label:t,attributes:r,default:a}})=>({value:e,label:t,attributes:r,default:a}));return!function(e){let t=(0,u.XI)(e,(e,t)=>e.value===t.value);if(t.length>0)throw Error(`Docusaurus error: Duplicate values "${t.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[t,r])}(e),[s,m]=(0,n.useState)(()=>(function({defaultValue:e,tabValues:t}){var r;if(0===t.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!p({value:e,tabValues:t}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}let a=null!==(r=t.find(e=>e.default))&&void 0!==r?r:t[0];if(!a)throw Error("Unexpected error: 0 tabValues");return a.value})({defaultValue:t,tabValues:o})),[f,b]=function({queryString:e=!1,groupId:t}){let r=(0,l.W6)(),a=function({queryString:e=!1,groupId:t}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:e,groupId:t});return[(0,c.aZ)(a),(0,n.useCallback)(e=>{var t,n;if(!a)return;let o=new URLSearchParams(r.location.search);o.set(a,e),r.replace((t=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},a=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),a.forEach(function(t){var a;a=r[t],t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a})}return e}({},r.location),n=n={search:o.toString()},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r.push.apply(r,a)}return r})(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}),t))},[a,r])]}({queryString:r,groupId:a}),[v,g]=function({groupId:e}){let t=e?`docusaurus.tab.${e}`:null,[r,a]=(0,d.Dv)(t);return[r,(0,n.useCallback)(e=>{t&&a.set(e)},[t,a])]}({groupId:a}),y=(()=>{let e=null!=f?f:v;return p({value:e,tabValues:o})?e:null})();return(0,i.A)(()=>{y&&m(y)},[y]),{selectedValue:s,selectValue:(0,n.useCallback)(e=>{if(!p({value:e,tabValues:o}))throw Error(`Can't select invalid tab value=${e}`);m(e),b(e),g(e)},[b,g,o]),tabValues:o}}(e);return(0,a.jsxs)("div",{className:(0,o.A)("tabs-container","tabList_Qoir"),children:[(0,a.jsx)(v,f({},t,e)),(0,a.jsx)(g,f({},t,e))]})}function j(e){let t=(0,m.A)();return(0,a.jsx)(y,b(f({},e),{children:h(e.children)}),String(t))}},28355:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var a=r(62540),n=r(43023),o=r(27446),s=r(15995);let l={sidebar_position:4,slug:"/api/themes/@docusaurus/theme-search-algolia"},i="\u{1F4E6} theme-search-algolia",c={id:"api/themes/theme-search-algolia",title:"\u{1F4E6} theme-search-algolia",description:"This theme provides a @theme/SearchBar component that integrates with Algolia DocSearch easily. Combined with @docusaurus/theme-classic, it provides a very easy search integration. You can read more on search documentation.",source:"@site/docs/api/themes/theme-search-algolia.mdx",sourceDirName:"api/themes",slug:"/api/themes/@docusaurus/theme-search-algolia",permalink:"/docs/api/themes/@docusaurus/theme-search-algolia",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/api/themes/theme-search-algolia.mdx",tags:[],version:"current",lastUpdatedBy:"ankur-vunet",lastUpdatedAt:1725273634e3,sidebarPosition:4,frontMatter:{sidebar_position:4,slug:"/api/themes/@docusaurus/theme-search-algolia"},sidebar:"api",previous:{title:"\u{1F4E6} theme-live-codeblock",permalink:"/docs/api/themes/@docusaurus/theme-live-codeblock"},next:{title:"\u{1F4E6} theme-mermaid",permalink:"/docs/api/themes/@docusaurus/theme-mermaid"}},u={},d=[];function h(e){let t={a:"a",admonition:"admonition",code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"-theme-search-algolia",children:"\u{1F4E6} theme-search-algolia"})}),"\n",(0,a.jsxs)(t.p,{children:["This theme provides a ",(0,a.jsx)(t.code,{children:"@theme/SearchBar"})," component that integrates with Algolia DocSearch easily. Combined with ",(0,a.jsx)(t.code,{children:"@docusaurus/theme-classic"}),", it provides a very easy search integration. You can read more on ",(0,a.jsx)(t.a,{href:"/docs/search",children:"search"})," documentation."]}),"\n",(0,a.jsxs)(o.A,{groupId:"npm2yarn",children:[(0,a.jsx)(s.A,{value:"npm",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"npm install --save @docusaurus/theme-search-algolia\n"})})}),(0,a.jsx)(s.A,{value:"yarn",label:"Yarn",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"yarn add @docusaurus/theme-search-algolia\n"})})}),(0,a.jsx)(s.A,{value:"pnpm",label:"pnpm",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"pnpm add @docusaurus/theme-search-algolia\n"})})})]}),"\n",(0,a.jsxs)(t.p,{children:["This theme also adds search page available at ",(0,a.jsx)(t.code,{children:"/search"})," (as swizzlable ",(0,a.jsx)(t.code,{children:"SearchPage"})," component) path with OpenSearch support. You can change this default path via ",(0,a.jsx)(t.code,{children:"themeConfig.algolia.searchPagePath"}),". Use ",(0,a.jsx)(t.code,{children:"false"})," to disable search page."]}),"\n",(0,a.jsx)(t.admonition,{type:"tip",children:(0,a.jsxs)(t.p,{children:["If you have installed ",(0,a.jsx)(t.code,{children:"@docusaurus/preset-classic"}),", you don't need to install it as a dependency."]})})]})}function p(e={}){let{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},43023:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>l});var a=r(63696);let n={},o=a.createContext(n);function s(e){let t=a.useContext(o);return a.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[750],{5824:function(e,r,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/orders/[id]",function(){return s(3688)}])},3688:function(e,r,s){"use strict";s.r(r),s.d(r,{__N_SSP:function(){return u}});var l=s(5893),t=s(6699),a=s(5147),c=s(1608),i=s(1555),d=s(1664),o=s(9008),n=s(8649),_=s.n(n),m=(s(7294),s(7174)),h=s(1152),u=(s(5449),!0);r.default=function(e){e.categories;var r=window.location.pathname.split("/").pop(),s=(0,m.C)((function(e){return e.order.orders})).find((function(e){return e.id===+r}));(0,m.T)();return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(o.default,{children:[(0,l.jsxs)("title",{children:["Applecart eshop | Order \u2116",r]}),(0,l.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,l.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,l.jsx)("link",{href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",rel:"stylesheet"})]}),(0,l.jsx)("section",{className:"section--page",children:(0,l.jsxs)("div",{className:"container",children:[(0,l.jsxs)(t.Z,{className:"custom-breadcrumb",children:[(0,l.jsx)(t.Z.Item,{children:(0,l.jsx)(d.default,{href:"/",children:"Home"})}),(0,l.jsx)(t.Z.Item,{children:(0,l.jsx)(d.default,{href:"/orders",children:"Orders"})}),(0,l.jsxs)(t.Z.Item,{active:!0,children:["Order \u2116",r]})]}),(0,l.jsxs)("div",{className:_().order_block,children:[(0,l.jsxs)("h2",{className:_().page_title+" mb-5",children:["Order \u2116",r]}),(0,l.jsx)("div",{className:_().order__table,children:(0,l.jsxs)(a.Z,{className:"table-bordered text-center",children:[(0,l.jsx)("thead",{className:_().thead__dark,children:(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{scope:"col",children:"\u2116"}),(0,l.jsx)("th",{scope:"col",children:"Product"}),(0,l.jsx)("th",{scope:"col",children:"Quantity"}),(0,l.jsx)("th",{scope:"col",children:"Title"}),(0,l.jsx)("th",{scope:"col",children:"Price"})]})}),(0,l.jsx)("tbody",{children:s.items.map((function(e,r){return(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{scope:"row",className:_().order__tableCell,children:r+1}),(0,l.jsx)("td",{className:_().order__tableCell,children:(0,l.jsx)(d.default,{href:"/catalog/".concat(e.categoryAlias,"/").concat(e.alias),children:(0,l.jsx)("img",{className:_().product__image,src:e.productThumb})})}),(0,l.jsx)("td",{className:_().order__tableCell,children:e.quantity}),(0,l.jsx)("td",{className:_().order__tableCell,children:e.title}),(0,l.jsxs)("td",{className:_().order__tableCell,children:[(0,h.Z)(e.price),"$"]})]})}))})]})}),(0,l.jsx)("div",{className:_().order_mobile,children:s.items.map((function(e,r){return(0,l.jsxs)("div",{className:_().order_mobile_item,children:[(0,l.jsx)("h5",{className:_().order_mobile_item_link,children:(0,l.jsx)(d.default,{href:"/catalog/".concat(e.categoryAlias,"/").concat(e.alias),children:e.title})}),(0,l.jsxs)(c.Z,{className:_().order_mobile_item_details,children:[(0,l.jsx)(i.Z,{xs:6,children:(0,l.jsx)(d.default,{href:"/catalog/".concat(e.categoryAlias,"/").concat(e.alias),children:(0,l.jsx)("img",{className:_().order_mobile_item_image,src:e.productThumb})})}),(0,l.jsxs)(i.Z,{xs:6,children:[(0,l.jsxs)("p",{children:["x ",e.quantity]}),(0,l.jsxs)("h5",{children:[(0,h.Z)(e.price),"$"]})]})]})]})}))})]})]})})]})}},8649:function(e){e.exports={page_title:"Order_page_title__JO6Py",order_block:"Order_order_block__OO_1C",order__table:"Order_order__table__zOnvk",order__tableCell:"Order_order__tableCell__VVBRV",thead__dark:"Order_thead__dark__inZIs",product__image:"Order_product__image__R0QEQ",order_mobile:"Order_order_mobile__phpDc",order_mobile_item_link:"Order_order_mobile_item_link__oKOsu",order_mobile_item:"Order_order_mobile_item__SfiRV",order_mobile_item_details:"Order_order_mobile_item_details__pkDe7","col-xs-6":"Order_col-xs-6__WuVXf",order_mobile_item_image:"Order_order_mobile_item_image__P8tf6"}},9008:function(e,r,s){e.exports=s(3121)},6699:function(e,r,s){"use strict";s.d(r,{Z:function(){return m}});var l=s(4184),t=s.n(l),a=s(7294),c=s(6792),i=s(3833),d=s(5893);const o=a.forwardRef((({bsPrefix:e,active:r,children:s,className:l,as:a="li",linkAs:o=i.Z,linkProps:n,href:_,title:m,target:h,...u},x)=>{const f=(0,c.vE)(e,"breadcrumb-item");return(0,d.jsx)(a,{ref:x,...u,className:t()(f,l,{active:r}),"aria-current":r?"page":void 0,children:r?s:(0,d.jsx)(o,{...n,href:_,title:m,target:h,children:s})})}));o.displayName="BreadcrumbItem",o.defaultProps={active:!1,linkProps:{}};var n=o;const _=a.forwardRef((({bsPrefix:e,className:r,listProps:s,children:l,label:a,as:i="nav",...o},n)=>{const _=(0,c.vE)(e,"breadcrumb");return(0,d.jsx)(i,{"aria-label":a,className:r,ref:n,...o,children:(0,d.jsx)("ol",{...s,className:t()(_,null==s?void 0:s.className),children:l})})}));_.displayName="Breadcrumb",_.defaultProps={label:"breadcrumb",listProps:{}};var m=Object.assign(_,{Item:n})},1608:function(e,r,s){"use strict";var l=s(4184),t=s.n(l),a=s(7294),c=s(6792),i=s(5893);const d=["xxl","xl","lg","md","sm","xs"],o=a.forwardRef((({bsPrefix:e,className:r,as:s="div",...l},a)=>{const o=(0,c.vE)(e,"row"),n=`${o}-cols`,_=[];return d.forEach((e=>{const r=l[e];let s;delete l[e],null!=r&&"object"===typeof r?({cols:s}=r):s=r;const t="xs"!==e?`-${e}`:"";null!=s&&_.push(`${n}${t}-${s}`)})),(0,i.jsx)(s,{ref:a,...l,className:t()(r,o,..._)})}));o.displayName="Row",r.Z=o}},function(e){e.O(0,[774,888,179],(function(){return r=5824,e(e.s=r);var r}));var r=e.O();_N_E=r}]);
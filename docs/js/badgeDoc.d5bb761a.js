(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["badgeDoc"],{"480a":function(n,e,p){"use strict";var a=function(){var n=this,e=n.$createElement,p=n._self._c||e;return p("div",{staticClass:"demoWrap"},[p("div",{staticClass:"pWrap"},[n._m(0),p("div",{staticClass:"pMain"},[p("iframe",{attrs:{src:n.url,frameborder:"0"}})]),p("div",{staticClass:"pHome"})])])},s=[function(){var n=this,e=n.$createElement,p=n._self._c||e;return p("div",{staticClass:"pControl"},[p("div",{staticClass:"pControlL"}),p("div",{staticClass:"pControlR"})])}],t={name:"Demo",props:{src:{type:String}},computed:{url:function(){return"//".concat(window.location.host+window.location.pathname,"#").concat(this.src)}}},r=t,i=(p("9c76"),p("2877")),b=Object(i["a"])(r,a,s,!1,null,null,null);e["a"]=b.exports},"7ee4":function(n,e,p){"use strict";p.r(e);var a=function(){var n=this,e=n.$createElement,p=n._self._c||e;return p("div",[p("Md",{attrs:{mdData:n.mdData}}),p("Demo",{attrs:{src:"/demo/badge"}})],1)},s=[],t=p("4f03"),r=p("480a"),i=p("d14d"),b=p.n(i),c={components:{Md:t["a"],Demo:r["a"]},data:function(){return{mdData:b.a}}},d=c,o=p("2877"),l=Object(o["a"])(d,a,s,!1,null,null,null);e["default"]=l.exports},"83ff":function(n,e,p){},"9c76":function(n,e,p){"use strict";var a=p("83ff"),s=p.n(a);s.a},d14d:function(n,e){n.exports='# 徽标 Badge\n\n徽标、标签，用于标注性提示。\n\n## 代码演示\n\n```html\n\x3c!-- *.vue --\x3e\n\n<template>\n  <p-wing-blank>\n    <p-white-space></p-white-space>\n    <p-badge>1234</p-badge>\n    &nbsp;&nbsp;\n    <p-badge radiusCircle>1234</p-badge>\n    &nbsp;&nbsp;\n\n    <p-white-space></p-white-space>\n    <p-badge type="error">1234</p-badge>\n    &nbsp;&nbsp;\n    <p-badge type="error" radiusCircle>1234</p-badge>\n    &nbsp;&nbsp;\n\n    <p-white-space></p-white-space>\n    <p-badge type="warning">1234</p-badge>\n    &nbsp;&nbsp;\n    <p-badge type="warning" radiusCircle>1234</p-badge>\n    &nbsp;&nbsp;\n\n    <p-white-space></p-white-space>\n    <p-badge type="success">1234</p-badge>\n    &nbsp;&nbsp;\n    <p-badge type="success" radiusCircle>1234</p-badge>\n    &nbsp;&nbsp;\n\n    <p-white-space></p-white-space>\n    <p-badge border>1234</p-badge>\n    &nbsp;&nbsp;\n    <p-badge border radiusCircle>1234</p-badge>\n    &nbsp;&nbsp;\n\n    <p-white-space></p-white-space>\n    <p-badge type="error" border>1234</p-badge>\n    &nbsp;&nbsp;\n    <p-badge type="error" border radiusCircle>1234</p-badge>\n    &nbsp;&nbsp;\n\n    <p-white-space></p-white-space>\n    <p-badge type="warning" border>1234</p-badge>\n    &nbsp;&nbsp;\n    <p-badge type="warning" border radiusCircle>1234</p-badge>\n    &nbsp;&nbsp;\n\n    <p-white-space></p-white-space>\n    <p-badge type="success" border>1234</p-badge>\n    &nbsp;&nbsp;\n    <p-badge type="success" border radiusCircle>1234</p-badge>\n    &nbsp;&nbsp;\n\n  </p-wing-blank>\n</template>\n\n<script>\nexport default {\n  name: \'BadgeDemo\'\n}\n<\/script>\n\n```\n\n## API\n\n| 属性 | 说明 | 类型 | 默认值 |\n| --- | --- | --- | --- |\n| type | 徽标类型，值可为 primary、error、warning、success | string | \'primary\' |\n| height | 徽标高度 | string | \'24px\' |\n| border | 边框类型的徽标 | boolean | false |\n| radiusCircle | 圆角徽标 | boolean | false |\n'}}]);
//# sourceMappingURL=badgeDoc.d5bb761a.js.map
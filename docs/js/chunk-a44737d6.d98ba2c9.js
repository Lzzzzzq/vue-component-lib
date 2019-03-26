(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a44737d6"],{"08ea":function(n,t,e){"use strict";e.r(t);var a=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[e("Md",{attrs:{mdData:n.mdData}}),e("Demo",{attrs:{src:"/demo/reach-bottom"}})],1)},o=[],i=e("4f03"),r=e("480a"),s=e("136d"),m=e.n(s),d={components:{Md:i["a"],Demo:r["a"]},data:function(){return{mdData:m.a}}},l=d,h=e("2877"),c=Object(h["a"])(l,a,o,!1,null,null,null);t["default"]=c.exports},"136d":function(n,t){n.exports='# 触底加载 ReachBottom\n\n将组件置于列表底部，触底后触发指定事件。\n\n## 代码演示\n\n```html\n<template>\n  <div class="wrap">\n    <div v-for="item in listNum" :key="item" class="item">item{{item}}</div>\n    <p-reach-bottom\n      @reachBottom="handleLoadMore"\n      ref="loadmore"\n      :preloadDistance="0"\n      @reachStateChange="handleChangeState"\n      immediate\n    ></p-reach-bottom>\n  </div>\n</template>\n```\n\n```js\nexport default {\n  data () {\n    return {\n      listNum: 20\n    }\n  },\n  methods: {\n    handleLoadMore: function ({ finish }) {\n      setTimeout(() => {\n        // 通知组件加载完成\n        this.$refs.loadmore.loadFinish()\n\n        // 模拟增加内容\n        this.listNum += 20\n\n        // 模拟加载完全部\n        if (this.listNum === 60) {\n          this.$refs.loadmore.loadNomore()\n        }\n      }, 1000)\n    },\n    handleChangeState: function (newState) {\n      console.log(newState)\n    }\n  }\n}\n```\n\n\n## API\n\n| 属性 | 说明 | 类型 | 默认值 |\n| --- | --- | --- | --- |\n| preloadDistance | 预加载距离 | number | 0 |\n| immediate | 是否插入页面时直接判断是否触底 | boolean | false |\n\n## 事件\n\n| 事件名称 | 说明 |\n| --- | --- |\n| reachBottom | 触底后触发的事件，将会传递一个对象，对象中带有 finish 事件，触底后的异步操作执行完毕后，调用 finish 事件即可使组件恢复默认状态 |\n| reachStateChange | 触底状态发生改变时触发，0 为默认，1 为正在加载，-1 为没有更多 |\n\n## ref 事件\n\n| 事件名称 | 说明 |\n| --- | --- |\n| loadFinish | 恢复组件为默认状态，功能与 reachBottom 回调中的 finish 相同 |\n| loadNomore | 通知组件没有更多了 |\n| loadInit | loadNomore 后，调用该方法恢复默认状态 |\n\n## slot\n\n上拉显示的元素可以自定义，需放在 slot 属性为 bottom 的元素内\n'}}]);
//# sourceMappingURL=chunk-a44737d6.d98ba2c9.js.map
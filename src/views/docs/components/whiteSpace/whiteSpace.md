# 上下留白 WhiteSpace

布局组件，用于模块间距。

## 代码演示
```javascript
// main.js

import { WhiteSpace } from 'news-ui-mobile'

Vue.use(WhiteSpace)
```

```html
<!-- *.vue -->

<template>
  <NumWingBlank>
    <NumWhiteSpace></NumWhiteSpace>
    <NumButton>默认距离 10px</NumButton>
    <NumWhiteSpace size="30px"></NumWhiteSpace>
    <NumButton>自定义距离 30px</NumButton>
    <NumWhiteSpace size="60px"></NumWhiteSpace>
    <NumButton>自定义距离 60px</NumButton>
  </NumWingBlank>
</template>

<script>
export default {
  name: 'WhiteSpaceDemo'
}
</script>

```

## API

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| size | 自定义距离 | string | '10px' |
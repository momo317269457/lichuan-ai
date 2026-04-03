## Why

力川金属网站需要新增产品中心页面，用于展示公司产品及规格。当前首页已有产品展示，但缺乏专门的产品详情页，无法满足客户对产品规格的详细查询需求。

## What Changes

- 新增 `/product` 产品中心页面
- 采用与首页一致的深色工业风格设计
- 展示四大产品线：不锈钢卷材与板材、不锈钢管材、不锈钢型材、不锈钢加工制品
- 每个产品可展开查看详细规格参数
- 响应式布局适配桌面/平板/移动端

## Capabilities

### New Capabilities
- `product-page`: 产品中心页面，包含产品列表和规格展示

## Impact

- 新增页面：`lc-metal-website/pages/product/index.js`
- 样式复用：`styles/globals.css` 现有样式
- 数据源：`brochure.json` 产品数据
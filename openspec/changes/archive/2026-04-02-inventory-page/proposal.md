## Why

力川金属网站需要新增"现货库存"页面，展示公司充足的现货储备能力，增强客户对快速供货的信心。

## What Changes

- 新增 `/inventory` 现货库存页面
- 采用与首页一致的深色工业风格设计
- 使用轮播图展示现货库存场景
- 展示库存产品类别和规格

## Capabilities

### New Capabilities
- `inventory-page`: 现货库存页面，包含轮播图和库存信息

## Impact

- 新增页面：`lc-metal-website/pages/inventory/index.js`
- 样式复用：`styles/globals.css` 现有样式（包括轮播图样式）
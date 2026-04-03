## Why

力川金属网站需要新增"关于我们"页面，用于展示公司实力、企业文化和联系方式，同时提供用户反馈/联系表单，增强用户信任和互动。

## What Changes

- 新增 `/about` 关于我们页面
- 采用与首页一致的深色工业风格设计
- 展示公司介绍、实力展示（资质、产能、合作伙伴等）
- 展示联系方式（电话、邮箱、地址）
- 添加用户反馈/联系表单（姓名、联系方式、留言）

## Capabilities

### New Capabilities
- `about-us-page`: 关于我们页面，包含公司介绍、实力展示、联系表单

## Impact

- 新增页面：`lc-metal-website/pages/about/index.js`
- 样式复用：`styles/globals.css` 现有样式
- 数据源：`brochure.json` 公司信息
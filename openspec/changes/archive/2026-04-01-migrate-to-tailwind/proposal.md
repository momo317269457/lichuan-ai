## Why

NextUI 库已弃用，建议迁移到 @heroui/react。但更推荐的方案是使用 Tailwind CSS，它是一个成熟、活跃的 Utility-First CSS 框架，与 Next.js 项目配合良好。使用 Tailwind 可以获得更好的开发体验和更小的产物体积。

## What Changes

- 安装 Tailwind CSS 及相关依赖
- 配置 Tailwind (tailwind.config.js, postcss.config.js)
- 更新 `globals.css` 使用 Tailwind 指令
- 重写 `pages/index.js` 使用 Tailwind 工具类替代 styled-jsx
- 更新 `components/Layout.js` 使用 Tailwind 工具类
- 移除不再需要的依赖 (@nextui-org/react, framer-motion)

## Capabilities

### New Capabilities
- `tailwind-styling`: 使用 Tailwind CSS 进行全站样式管理

### Modified Capabilities
- 无

## Impact

- 代码: `pages/index.js`, `components/Layout.js`, `styles/globals.css`
- 依赖: 新增 tailwindcss, postcss, autoprefixer; 移除 @nextui-org/react, framer-motion

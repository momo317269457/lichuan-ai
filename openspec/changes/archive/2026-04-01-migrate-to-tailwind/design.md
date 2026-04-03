## Context

项目当前使用 styled-jsx 进行组件样式管理，这会导致：
1. 样式与组件代码耦合，难以复用
2. 产物体积较大
3. 维护性较差

需要迁移到 Tailwind CSS 以获得更好的开发体验。

## Goals / Non-Goals

**Goals:**
- 安装并配置 Tailwind CSS
- 将所有 styled-jsx 内联样式迁移到 Tailwind 工具类
- 保持页面外观与现有实现一致
- 移除不再需要的 NextUI 相关依赖

**Non-Goals:**
- 不改变页面布局和功能
- 不添加新的 UI 组件库

## Decisions

1. **Tailwind 版本**: 使用 v3 (最新稳定版)
2. **配置方式**: 使用 PostCSS 集成 (与 Next.js 兼容)
3. **样式策略**: 使用 Tailwind 工具类 + @apply 指令处理复杂样式

## Risks / Trade-offs

- [风险] 迁移过程中可能出现细微的视觉差异 → Mitigation: 仔细对比测试
- [风险] Tailwind 类名较长 → Mitigation: 使用 @apply 提取重复样式

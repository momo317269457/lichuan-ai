## ADDED Requirements

### Requirement: 现货库存页面路由
网站 SHALL 提供 `/inventory` 路由访问现货库存页面。

#### Scenario: 访问库存页面
- **WHEN** 用户在浏览器中访问 http://example.com/inventory
- **THEN** 页面显示现货库存内容

### Requirement: 图片轮播
页面 SHALL 展示库存场景图片轮播。

#### Scenario: 轮播显示
- **WHEN** 页面加载完成
- **THEN** 显示库存场景轮播图，支持自动切换和手动切换

### Requirement: 库存产品展示
页面 SHALL 展示主要库存产品类别。

#### Scenario: 产品类别显示
- **WHEN** 页面加载完成
- **THEN** 显示不锈钢卷材、板材、管材、型材等产品类别

### Requirement: 响应式布局
库存页面 SHALL 在桌面端和移动端正确显示。

#### Scenario: 移动端布局
- **WHEN** 用户在移动设备访问页面
- **THEN** 页面内容正确适配屏幕宽度
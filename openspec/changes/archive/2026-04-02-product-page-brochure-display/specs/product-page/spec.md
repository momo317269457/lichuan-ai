## ADDED Requirements

### Requirement: 产品中心页面路由
网站 SHALL 提供 `/product` 路由访问产品中心页面。

#### Scenario: 访问产品中心页面
- **WHEN** 用户在浏览器中访问 http://example.com/product
- **THEN** 页面显示产品中心内容，包含产品列表和规格

### Requirement: 产品列表展示
产品中心页面 SHALL 展示所有产品，每个产品包含名称和图片。

#### Scenario: 产品卡片显示
- **WHEN** 页面加载完成
- **THEN** 显示所有产品卡片，包括不锈钢卷材与板材、不锈钢管材、不锈钢型材、不锈钢加工制品

### Requirement: 规格展开/收起
用户 SHALL 可以点击按钮展开或收起产品规格详情。

#### Scenario: 展开规格
- **WHEN** 用户点击"查看详情"按钮
- **THEN** 显示该产品的规格表格，按钮变为"收起详情"

#### Scenario: 收起规格
- **WHEN** 用户点击"收起详情"按钮
- **THEN** 隐藏规格表格，按钮变为"查看详情"

### Requirement: 响应式布局
产品中心页面 SHALL 在桌面端三列、平板端两列、移动端单列显示。

#### Scenario: 桌面端布局
- **WHEN** 用户在桌面设备（≥1024px）访问页面
- **THEN** 产品卡片三列显示

#### Scenario: 移动端布局
- **WHEN** 用户在移动设备（<768px）访问页面
- **THEN** 产品卡片单列显示
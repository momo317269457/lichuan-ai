## ADDED Requirements

### Requirement: Use Tailwind CSS for all styling
The system SHALL use Tailwind CSS for all component styling, replacing styled-jsx inline styles.

#### Scenario: Tailwind configuration exists
- **WHEN** the project is configured with tailwind.config.js and postcss.config.js
- **THEN** Tailwind utilities are available globally

#### Scenario: Components use Tailwind classes
- **WHEN** components render with Tailwind utility classes
- **THEN** styles are applied correctly matching the design

### Requirement: Visual consistency with previous design
The styled components SHALL maintain visual consistency with the previous styled-jsx implementation.

#### Scenario: Hero section renders correctly
- **WHEN** the hero section renders with Tailwind classes
- **THEN** it displays company name and description with proper typography and spacing

#### Scenario: Grid sections render correctly
- **WHEN** product, service, and certification sections render
- **THEN** cards are displayed in a responsive grid layout matching the original design

#### Scenario: Image gallery renders correctly
- **WHEN** brochure images section renders
- **THEN** images display with captions in a responsive grid

#### Scenario: Contact section renders correctly
- **WHEN** contact section renders
- **THEN** phone, email, and address are displayed clearly

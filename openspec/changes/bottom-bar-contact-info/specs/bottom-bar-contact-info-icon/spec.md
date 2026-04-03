## ADDED Requirements

### Requirement: bottom-bar-contact-info-icon-displays-contact-information
The system SHALL render the bottom bar with contact information using icons alongside text for the icon-based variant, aligned with brand aesthetics.

#### Scenario: Bottom bar icon variant shows contact information on page load
- **WHEN** the page loads
- **THEN** the bottom bar displays icons for phone, email, and address with corresponding accessible labels, followed by optional text labels if space allows.

#### Scenario: Icon buttons are accessible
- **WHEN** a user navigates via keyboard
- **THEN** each icon is focusable and exposes an accessible label (aria-label) describing its action.

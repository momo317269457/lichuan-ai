## ADDED Requirements

### Requirement: bottom-bar-contact-info-text-displays-contact-information
The system SHALL render the bottom bar with contact information (phone, email, and physical address) as inline text in the text-based variant.

#### Scenario: Bottom bar text variant shows contact info on page load
- **WHEN** the page loads
- **THEN** the bottom bar displays: a phone number, an email link, and a physical address in a single horizontal row, styled to match brand tokens, and accessible via keyboard navigation.

#### Scenario: Contact links are functional
- **WHEN** a user focuses a contact item
- **THEN** the phone number should initiate a call on devices with telephony, the email should open the default mail client, and the address should be copyable or link to a map depending on implementation.

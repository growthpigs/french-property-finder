Feature Specification V3 - March 2025
Below is the revised Feature Specification V3 - March 2025, incorporating the new changes while preserving the original structure and content you shared. The new additions are seamlessly integrated into the relevant sections, with a dedicated subsection for the card stack and interaction features.

PHONE VERIFICATION
Implementation:
20-second phone signup flow with OTP verification.
Primary authentication method for all users.
WhatsApp alternative pathway with conversion prompts.
Contextual value display before verification request.
User Benefits:
Reduced friction (vs. email verification).
Single-tap verification on iPhone.
Instant account access without profile creation.
Progressive data collection during usage.

TAG SYSTEM V1
Auto-Tag Recognition: Detect intentions from natural language conversation.
Tag Hierarchy: Primary (Location, Budget) and Secondary (Features) tags.
Interactive Management: Tap tags to edit criteria without restarting.
Sharable Tag Sets: "Critères Partagés" mechanism for social distribution.

COLLABORATIVE DECISION SYSTEM
"Cercle de Décision": Multi-user property evaluation framework.
Decision Heatmaps: Visual representation of group preferences.
Role Assignment: Collaborator specialization (financial, location expert).
Bilateral Rewards: Premium features for both referrer and referee.

REJECTION MANAGEMENT V1
Recovery Interface: "Previously Declined" section with filtering.
Rejection Classification: Quick-select reason when rejecting properties.
Immediate Undo: Prominent option after left-swipe.
Group Recovery: Collaborative reconsideration of rejected properties.

LOCATION INTELLIGENCE V1
User-Generated Insights: "Expertise Locale" neighborhood knowledge system.
Verification Mechanisms: Community validation of contributed insights.
Expert Recognition: "Connaisseur Local" badges for trusted contributors.
Localized Alerts: Neighborhood-specific updates and insights.

PWA OPTIMIZATION V1
Offline Capabilities: Basic browsing without connection.
Cross-Device Synchronization: Consistent experience across platforms.
Installation Prompts: Strategic PWA installation suggestions.
Progressive Loading: Critical-path optimization for core features.

GROWTH MECHANISMS V1
Phone-First Ambassador Program: Progressive rewards for referrals.
"Moments Immobiliers": Shareable milestone achievements.
WhatsApp Integration: Property alerts and sharing capabilities.
Decision Circle Expansion: Incentives for adding multiple collaborators.

CARD STACK AND INTERACTION
Card Stack:
Square property cards displayed in a fan stack (top card fully visible, others slightly rotated and scaled).
Only the top card is swipeable (left for reject, right for save).
Includes an instruction card (first card) and a promo card (last card).
Action Buttons:
Four buttons on each property card: Info, Call, Share, Web.
Vertically stacked on the right side of the card.
Each button triggers a half-screen slide-up modal.
Half-Screen Modals:
Slide up from the bottom, covering 50% of the screen.
Types: Info (property details), Call (contact options), Share (sharing links), Web (external listing).
Includes a drag handle and close button for dismissal.
Instruction Card:
First card in the stack with an SVG image teaching swipe mechanics (e.g., "Swipe right to save, left to reject").
Features a loading indicator in the bottom-right corner while properties load.
Promo Card:
Last card in the stack encouraging premium sign-up.
Blue background with a "Sign up with phone" button linking to phone verification.
Tinder-like Swipe Effect:
Cards exit on a curved path with rotation.
Right swipe triggers a red heart animation; left swipe triggers a gray broken heart animation.

IMPLEMENTATION SEQUENCE
Phase 1: Core Experience (1-2 months):
PWA with conversational interface and tag detection.
Phone verification system.
Basic property swiping with action buttons, card stack, and Tinder-like swipe effect.
Property certification display (1-5 rating).
Phase 2: Growth Acceleration (3-4 months):
"Cercle de Décision" collaborative framework.
"Critères Partagés" sharing mechanism.
WhatsApp integration for alerts and sharing.
Phone ambassador program with tiered rewards.
Phase 3: Marketplace Expansion (5-6 months):
Agent acquisition tools and dashboard.
"Expertise Locale" neighborhood knowledge system.
Advanced collaborative features with role assignment.
"Moments Immobiliers" achievement sharing.
Phase 4: Platform Evolution (7+ months):
Native app development (conditional on PWA performance).
Advanced agent tools and premium placement.
Community-driven neighborhood insights.
Cross-platform synchronization enhancements.

KEY PRINCIPLES
Mobile-first PWA design optimized for conversational interface.
Embedded viral mechanisms at natural user journey touchpoints.
Dual-sided marketplace balancing user and agent value.
Data protection with reference-only property storage.
Progressive feature disclosure based on engagement level.

Notes: This specification reflects our strategic pivot to PWA-first development with phone verification and embedded growth mechanisms, while maintaining the core value proposition of conversational property search. The new card stack and interaction features enhance user engagement and align with the Tinder-like swipe paradigm.



French Property Finder: App Overview
Date: [Insert Current Date]
Purpose:
 Simplify property browsing in France with an intuitive, collaborative, and conversational interface powered by AI and a Tinder-like swipe experience.
Target Audience:
 Property seekers in France looking for a fast, engaging way to find their ideal home.

Key Features
Card Stack and Swipe Interaction:
Users swipe through a fan stack of square property cards (right to save, left to reject).
Each card includes four action buttons (Info, Call, Share, Web) that trigger half-screen modals for quick access to property details, contact options, sharing, and external listings.
Includes an instruction card for onboarding and a promo card encouraging premium sign-ups.
Swipe gestures feature Tinder-like animations (red heart for save, gray broken heart for reject).
Details in Feature Specification V3 - March 2025.
AI-Powered Search:
Natural language processing detects user intentions and generates relevant property tags for personalized search.
Collaborative Tools:
"Cercle de Décision" enables group property evaluations with decision heatmaps and role assignments.
Phone-First Design:
20-second phone signup with OTP or WhatsApp verification, optimized for a mobile PWA experience.

Technical Foundation
Frontend: Built with React and Framer Motion for smooth animations and interactions.
Architecture: Mobile-first PWA design, ensuring offline capabilities and cross-device sync.
Data Handling: Property data fetched via API, prioritizing data protection and reference-only storage.

Development Status
Current Focus: Core experience (Phase 1)—card stack, swipe mechanics, action buttons, and phone verification.
Upcoming Phases:
Phase 2: Growth acceleration with collaborative features and WhatsApp integration.
Phase 3: Marketplace expansion with agent tools and neighborhood insights.
Phase 4: Platform evolution, potentially including native app development.
Implementation Sequence: Detailed in Feature Specification V3 - March 2025.

Key Principles
Mobile-first PWA design optimized for conversational interactions.
Embedded growth mechanisms (e.g., phone ambassador program, sharable milestones).
Dual-sided marketplace balancing user and agent value.
Progressive feature disclosure based on user engagement.

Note for Ongoing Development
This App Overview is a high-level reference for the French Property Finder project. For real-time updates, challenges, and decisions, refer to the ongoing Claude chat logs, which complement this document with detailed, dynamic context. The Overview will be updated periodically to reflect major milestones.


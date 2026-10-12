---
name: bluewaste-frontend-design
description: Review or design BlueWaste web interfaces for citizen reporting, dashboards, maps, and cleanup schedules while preserving existing application contracts and visual conventions.
---

# BlueWaste Frontend Design

## Read First

Read AGENTS.md and knowledge.md from the repository root.
Follow the current task scope.

During the documentation-and-skills activity, do not modify
application code. This skill provides reusable guidance for
future authorized design work.

## When to Use

Use for BlueWaste page layout, responsive design, accessibility,
form presentation, map controls, and dashboard visual hierarchy.

For report status logic, authorization, or cleanup workflow
behavior, use bluewaste-report-workflow instead.

## Inspect the Existing Interface

1. Locate the target page and its imported components under web/.
2. Inspect shared layouts, styles, and existing design tokens.
3. Trace the page's data source and server/client boundaries.
4. Identify the user role and primary action.
5. Record relevant source paths and any unverified behavior.

Do not assume a dependency is used merely because it appears
in package.json.

## Preserve Application Contracts

- Retain existing routes, API fields, validation, and event handlers.
- Preserve authentication and role-based navigation.
- Keep secrets and server-only code out of client components.
- Reuse existing components before introducing replacements.
- Preserve map coordinates, filters, legends, and status meanings.
- Preserve chart labels, units, and underlying data calculations.
- Do not change report or cleanup logic as part of visual work.

## Design Workflow

1. Define the page's primary action and necessary information.
2. Follow the existing palette, typography, spacing, and components.
3. Organize content for both narrow and wide screens.
4. Provide loading, empty, error, and success states.
5. Use visible field labels and clear validation messages.
6. Support keyboard navigation and visible focus.
7. Pair status colors with readable text or icons.
8. Keep map and chart controls usable on small screens.

Use illustrative data only when a mockup is requested.
Label it clearly and keep it separate from live records.

## Verification

For future authorized implementation:
- Inspect the diff for unintended logic changes.
- Check relevant pages at mobile and desktop widths.
- Verify keyboard use, labels, dialogs, and overflow.
- Confirm existing actions and navigation still work.
- Run only checks permitted by the task and AGENTS.md.
- Report checks not performed and remaining uncertainties.

Do not submit live reports or change live records for UI testing.

## Deliverable

Describe:
- The page and user role.
- Source files inspected.
- Design decisions and preserved contracts.
- Files changed, if implementation was authorized.
- Verification results and limitations.
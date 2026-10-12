---
name: bluewaste-report-workflow
description: Inspect or debug BlueWaste waste reporting, image analysis, report statuses, worker assignments, notifications, and cleanup scheduling while preserving existing data and authorization rules.
---

# BlueWaste Report Workflow

## Read First

Read AGENTS.md and knowledge.md from the repository root.
Follow the authorized task scope.

During the documentation-and-skills activity, inspect only.
Do not modify application code or execute database operations.

## When to Use

Use for questions or authorized debugging involving:
- Citizen report submission.
- Report and cleanup images.
- Image analysis results.
- Report status changes.
- Worker assignments.
- Cleanup schedules and notifications.

Use bluewaste-frontend-design for visual layout work.

## Trace the Relevant Flow

1. Locate the relevant web or Flutter screen.
2. Identify the API request and its field names.
3. Locate the matching server handler and validation.
4. Inspect authentication and server-side role checks.
5. Trace Prisma reads, writes, and relationships.
6. Locate image upload or inference calls, if relevant.
7. Identify notification and dashboard consumers.
8. Record source paths and unresolved questions.

Inspect backend and web server code as applicable.
Do not assume all requests use the Express backend.

## Preserve Declared Values

The observed backend schema declares:

- Roles: CITIZEN, LGU_ADMIN, FIELD_WORKER.
- Report statuses: PENDING, VERIFIED, CLEANUP_SCHEDULED,
  IN_PROGRESS, CLEANED, REJECTED.
- Image types: REPORT, CLEANUP.
- Analysis statuses: DIRTY, CLEAN.
- Waste categories: with_waste, no_waste.
- Cleanup schedule statuses: UPCOMING, ONGOING,
  COMPLETED, CANCELLED.

Check the current source before relying on these values.
Enum order does not establish allowed status transitions.

## Review Workflow Rules

- Identify who may create, view, assign, and update records.
- Verify authorization on the server, not only in the interface.
- Preserve report ownership and worker assignment checks.
- Inspect required evidence before cleanup completion.
- Check consistency between reports and cleanup schedules.
- Preserve API contracts used by both web and Flutter.
- Distinguish report status from image analysis results.
- Inspect handling of failed uploads and unavailable inference.
- Check notification behavior without assuming delivery succeeds.

Treat these as inspection questions until source confirms behavior.

## Future Authorized Debugging

1. Describe the concrete trigger and expected behavior.
2. Trace the issue to the relevant source.
3. Propose the smallest change within the requested scope.
4. Check effects on web, mobile, and server consumers.
5. Use isolated test data and mocked external services.
6. Verify relevant success, failure, and permission cases.

Do not run migrations, seeds, or use live records unless
the task explicitly authorizes those operations.

## Deliverable

Report:
- The workflow inspected.
- Relevant source paths.
- Confirmed rules and unverified details.
- Proposed or authorized changes.
- Checks performed and actual results.

Never invent model fields, routes, status transitions,
or successful test results.
# BlueWaste — Project Knowledge

## 1. Overview

BlueWaste is a smart waste management platform for Panabo City.

The project includes:
- An Express backend API.
- A Next.js web dashboard and citizen reporting interface.
- A Flutter mobile application.
- An optional FastAPI YOLO inference service.

## 2. Documentation Scope

This document is based on the supplied README excerpt,
package.json files, and visible Prisma schema sections.

Package declarations confirm configured dependencies and scripts.
They do not prove that every feature is implemented or working.

Full routes, database models, upload flows, authentication behavior,
and runtime operation have not been verified.

## 3. Technology Stack

| Component | Technology | Evidence |
| --- | --- | --- |
| Backend | Express 4, TypeScript | backend/package.json |
| Database access | Prisma 6 | backend/package.json |
| Database | PostgreSQL | backend/prisma/schema.prisma |
| Web | Next.js 15.5.15, React 18 | web/package.json |
| Styling | Tailwind CSS 3 | web/package.json |
| Mapping dependencies | Leaflet and React Leaflet | web/package.json |
| Chart dependencies | Chart.js and React Chart.js | web/package.json |
| Mobile | Flutter | README excerpt |
| Optional inference | FastAPI and YOLO | README excerpt |
| Image storage requirement | Cloudinary account | README excerpt |
| Backend test tooling | Vitest and Supertest | backend/package.json |

Versions above describe manifest declarations, not verified
installed versions.

## 4. Project Structure

| Path | Purpose |
| --- | --- |
| backend/ | Express API, Prisma schema, and seed data |
| web/ | Next.js dashboard and citizen reporting interface |
| mobile_flutter/ | Flutter mobile application |
| yolo-fastapi-sample/ | Optional local inference service |
| package.json | Root commands and npm workspace configuration |
| backend/package.json | Backend dependencies and commands |
| web/package.json | Web dependencies and commands |
| backend/prisma/schema.prisma | Backend data schema |

Additional observed folders include api/, assets/, and scripts/.
Their internal behavior has not been inspected.

The npm workspaces are backend and web.
Flutter and the optional Python service are outside those workspaces.

## 5. Visible Schema Definitions

Source: backend/prisma/schema.prisma.

### Roles

- CITIZEN
- LGU_ADMIN
- FIELD_WORKER

### Report Status Values

- PENDING
- VERIFIED
- CLEANUP_SCHEDULED
- IN_PROGRESS
- CLEANED
- REJECTED

These are declared values. Allowed transitions and role permissions
must be checked in application code.

### Other Declared Values

| Definition | Values |
| --- | --- |
| WasteCategory | with_waste, no_waste |
| ImageType | REPORT, CLEANUP |
| NotificationType | NEW_REPORT, STATUS_CHANGE, ASSIGNMENT, SYSTEM, CLEANUP_SCHEDULE |
| CleanupScheduleStatus | UPCOMING, ONGOING, COMPLETED, CANCELLED |
| WasteType | PLASTIC, ORGANIC, GLASS, METAL, PAPER |
| AnalysisStatus | DIRTY, CLEAN |
| Severity | CRITICAL, HIGH, MODERATE, SPAM |

PostgreSQL configuration references the DATABASE_URL environment
variable. No credential values belong in this document.

The complete model fields and relationships have not been reviewed.

## 6. Prerequisites Listed in the README

- Node.js 18 or newer.
- npm 9 or newer.
- PostgreSQL 14 or newer.
- A Cloudinary account for backend image uploads.
- Optional Python 3.10 or newer for the local inference service.

These requirements were supplied from the README and have not
been tested in this documentation activity.

## 7. Existing Commands

The following commands are documented for reference only.
They have not been executed or verified during this activity.

| Command from repository root | Declared purpose |
| --- | --- |
| npm run backend:dev | Start the backend development process |
| npm run web:dev | Start the Next.js development process |
| npm run backend:typecheck | Run the backend TypeScript check |
| npm run web:typecheck | Run the web TypeScript check |
| npm run mobile:analyze | Run Flutter analysis |
| npm run lint | Invoke the web lint script |
| npm run test --workspace=backend | Invoke backend Vitest tests |
| npm run backend:build | Generate Prisma client and compile backend |
| npm run web:build | Generate Prisma client and build Next.js |
| npm run build | Invoke the web build |

The presence of a test or lint command does not establish that
tests exist or that the command succeeds.

## 8. Commands with Side Effects

The root postinstall script generates Prisma clients for both
backend and web. Backend and web build scripts also generate clients.

Database migration and seed commands can change database state.
Cleanup scripts can change local files.

For this documentation-and-skills activity:
- Do not install dependencies or execute postinstall scripts.
- Do not run migrations, seeds, cleanup, builds, or deployment.
- Do not connect to a live database.
- Do not modify application code or configuration.

## 9. Verification Gaps

The following remain unverified:
- API routes and request/response contracts.
- Authentication and authorization implementation.
- Full database models and relationships.
- Image upload and inference request flow.
- Mobile-to-API integration.
- Implemented status transitions.
- Runtime feature behavior and test results.

Inspect the relevant source before making future claims or changes.
Do not treat missing verification as a confirmed application defect.

## 10. Activity Boundaries

Work on the agent-skills branch.

Add only the required project documentation and skill folders.
Keep existing application files unchanged.

Review Git changes before committing or pushing.
Leave the branch unmerged into main.
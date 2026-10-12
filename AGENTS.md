# AGENTS.md — BlueWaste Project Guidance

## Project Reference

Read knowledge.md before working on this repository.
It records the available evidence and unverified details.

BlueWaste includes:
- backend/: Express, TypeScript, Prisma, PostgreSQL.
- web/: Next.js, React, TypeScript, Tailwind CSS.
- mobile_flutter/: Flutter application.
- yolo-fastapi-sample/: Optional inference service.

Resolve project paths from the repository root.

## Current Activity Scope

This activity adds documentation and reusable skills only.

- Work on the agent-skills branch.
- Keep existing application files unchanged.
- Add only knowledge.md, AGENTS.md, CLAUDE.md,
  and the four required skill folders under .agents/skills/.
- Do not change dependencies, lockfiles, database schemas,
  migrations, environment files, or deployment configuration.
- Do not install dependencies or run generators, builds,
  migrations, seeds, cleanup scripts, or deployments.
- Do not connect to live databases or submit live reports.
- Do not merge into main or force-push.

Skill instructions do not expand the authorized activity scope.

## Source Inspection Rules

- Inspect relevant source before describing implementation.
- Cite repository paths when documenting technical facts.
- Distinguish dependency declarations from working features.
- Mark unseen routes, models, permissions, and flows as unverified.
- Never invent API endpoints, model fields, or test results.
- Never copy credentials, tokens, or personal records into documentation.

## Conventions for Future Authorized Code Work

The current activity does not authorize application changes.

For a future explicitly authorized implementation task:
- Follow existing patterns in the affected component.
- Preserve API field names and response formats.
- Preserve authentication and server-side authorization.
- Check consumers in both web and mobile before changing an API.
- Inspect both Prisma schemas before proposing data-model changes.
- Preserve existing report status and category values unless
  a change is explicitly requested.
- Verify allowed status transitions in source; enum order
  alone does not define the workflow.
- Keep optional inference behavior separate from assumptions
  about a running inference service.

## Verification Commands

For the current documentation activity, use read-only Git checks:

    git branch --show-current
    git status --short
    git diff --name-status
    git diff --cached --name-status

Git diff does not include untracked files.
Use git status to identify new files and inspect their contents.

Before committing:
- Confirm the branch is agent-skills.
- Confirm existing tracked application files have no changes.
- Inspect each added file.
- Stage only the intended documentation and skill paths.
- Review the staged diff.
- Pause and investigate unexpected changes without discarding work.

## Existing Application Checks — Reference Only

These commands are declared in package.json files.
Do not execute them during this activity.

    npm run backend:typecheck
    npm run web:typecheck
    npm run mobile:analyze
    npm run lint
    npm run test --workspace=backend

Before future execution, inspect configuration and test setup
for generated files, external connections, and other side effects.
Report actual results and any checks that were not run.

## Required Skill Inventory

The following is the target inventory.
A skill is available only after its complete folder is added.

| Skill | Intended path | Purpose |
| --- | --- | --- |
| bluewaste-frontend-design | .agents/skills/bluewaste-frontend-design/SKILL.md | Guide BlueWaste interface design |
| bluewaste-report-workflow | .agents/skills/bluewaste-report-workflow/SKILL.md | Guide inspection of reporting and cleanup workflows |
| jupyter-notebook | .agents/skills/jupyter-notebook/SKILL.md | Provider skill for notebook work |
| playwright | .agents/skills/playwright/SKILL.md | Provider skill for browser inspection |

Read the relevant SKILL.md before using a skill.
Retain provider supporting files and license information.
Adding a skill does not authorize executing its scripts.

## Completion Report

State:
- Which files were added.
- What was verified.
- Which details remain unverified.
- Whether the branch was committed or pushed.

Do not claim application tests passed unless they were run.
Keep the branch unmerged into main.
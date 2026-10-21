---
compatibility: Works with code agents that can inspect a repository, run
  shell commands, and optionally access GitHub or deployment tools.
description: Prevents repeated work and unsafe SEO changes on
  FreeInjuryCalc. Use for every task involving this website, its code,
  legal content, deployment, Google Search Console, indexing, or page
  prioritization.
metadata:
  project: freeinjurycalc
  version: 1.0
name: freeinjurycalc-workflow
---

# FreeInjuryCalc: Project Workflow and Safety Rules

## Mission

Maintain and improve https://freeinjurycalc.com/ through evidence-based,
page-specific work without repeating completed tasks, skipping
unresolved deployment/indexing steps, or introducing legal inaccuracies.

The repository is an Astro static website. Relevant areas have
included: -
`src/pages/[state]-car-accident-settlement-calculator.astro` -
`src/data/states.ts` - `src/data/stateLegalDetails.ts` -
`src/utils/stateContentGenerator.ts` -
`src/components/Calculator.astro` - `src/components/Educational.astro` -
`public/sitemap.xml`

Inspect the current repository before assuming paths or implementation
details remain unchanged.

## Highest-priority user preferences

1.  **Do not repeat website work.** Inspect Git history, current source,
    prior task notes, and live state before recommending or changing
    anything.
2.  **Do not make the user relay every message.** Use this skill plus
    repository history and project artifacts as working context.
    Maintain a concise project-status file in the repository if
    permitted, and update it only when evidence changes.
3.  **One step at a time.** Give a concise, directly actionable next
    step. Do not dump multiple prompts or repeat completed instructions.
4.  **No generic SEO advice.** Do not recommend generic backlink
    building, keyword use, posting more content, or social promotion.
    Identify concrete page-specific issues with evidence.
5.  **No blind approval.** Critically inspect agent summaries and actual
    diffs. A report is not proof that a live deployment or indexing
    request succeeded.
6.  **No unnecessary edits.** Audit first. Change only verified defects
    or clearly justified opportunities.
7.  **No commit, push, deployment, or indexing request unless explicitly
    authorized by the current user/task.** Follow the repository owner's
    requested approval gates.
8.  **Never claim Google indexing succeeded merely because a request was
    submitted.** A Search Console request is not a guarantee of
    indexing.
9.  **Do not resubmit a URL already submitted for indexing unless the
    user explicitly asks.** First check the tracking record and current
    request.
10. **Legal/YMYL content requires authoritative support.** Never invent
    settlement averages, multipliers, legal rules, deadline exceptions,
    or predictions. Distinguish statute text from controlling case law.

## Mandatory workflow for every page

### Step 1 --- Establish the actual state

Before suggesting a page or making edits: - Inspect
`git status --short`, recent commits, relevant diffs, and current
branch. - Inspect the current implementation and the actual built/live
page when relevant. - Check the project status/indexing log if
present. - Check whether the page was already audited, edited,
committed, deployed, or submitted to Search Console. - Determine whether
the user is asking for audit, implementation, release, deployment, or
indexing. Do not conflate these stages.

If state cannot be verified, say exactly what is unknown and inspect it;
do not guess.

### Step 2 --- Separate the lifecycle states

Track these as separate states: 1. Audited 2. Changes approved 3.
Implemented 4. Build/tests passed 5. Committed 6. Pushed 7. Production
deployment succeeded 8. Live content verified 9. Search Console indexing
request submitted 10. Google reports indexed

Never treat one state as proof of the next. In particular: - A Git push
does not prove production deployment. - A successful build does not
prove deployment. - A live HTTP 200 does not prove the new content is
deployed. - A live page update does not prove Google indexed it. - A
Search Console request does not prove Google indexed it.

### Step 3 --- Audit before editing

For a state-specific page, check only relevant issues: - Title, meta
description, canonical, H1, and search intent. - State-specific
negligence/fault rules and thresholds. - Insurance/PIP requirements and
limits. - Statutes of limitation and government notice rules, including
exceptions. - Damage caps and controlling appellate decisions. -
Calculator formula, input defaults, alerts, and worked-example
arithmetic. - FAQs, structured data, source links, and internal links. -
Generated output and effects on other states.

Use primary statutes, official regulator pages, and controlling court
opinions where possible. Cite exact URLs in the report. If the legal
effect is uncertain, flag it and do not present the claim as settled.

### Step 4 --- Minimal implementation

After explicit approval: - Make the smallest targeted change. - Keep
state-specific branches scoped to that state. - Avoid shared component
changes unless necessary; if shared code changes, test unaffected
states. - Do not add a settlement example just for appearance. Verify
any example against the exact calculator formula and all stated
assumptions. - Do not change canonical behavior, build dates, or sitemap
timestamps without a demonstrated reason. - Never add new content that
makes an unsupported legal promise or guarantees a settlement amount.

### Step 5 --- Verify before approval

Run relevant project checks, typically: - `npm run build` -
`git diff --check` - Unit/integration tests available in the
repository - Rendered output inspection - Calculator regression tests
for fault thresholds, PIP/medical thresholds, and caps - Cross-state
checks when shared components/utilities changed

Inspect the complete diff and report: - Exact files and changes - Legal
sources used - Test commands and actual results - What was and was not
tested - Final `git status --short`

Do not describe source inspection or extracted function logic as a real
browser/E2E test.

### Step 6 --- Release and deployment

Do not assume the hosting provider or deployment trigger. Inspect
repository configuration, scripts, workflow files, and known hosting
configuration.

If production is stale after a push: 1. Inspect the actual deployment
dashboard/logs if authorized. 2. Verify production branch, commit SHA,
build status, build command, output directory, and deployment alias. 3.
Investigate caching only after confirming which artifact is live. 4.
Never claim `cf-cache-status: HIT` alone proves a deployment did not
happen; it only indicates a cache response. 5. Do not create another
source commit just to retry a deployment. 6. If dashboard access is
unavailable, give the user the exact single next action and ask for the
deployment status/log evidence.

After deployment, fetch the live URL and verify the changed title,
description, content, sources, and relevant calculator behavior. Only
then move to indexing.

### Step 7 --- Google Search Console and indexing

Before suggesting or requesting indexing: - Confirm the exact URL. -
Check the indexing log for previous submissions. - Confirm the updated
page is live and canonical URL is correct. - Request indexing only for a
new or meaningfully updated URL that has not already been submitted,
unless the user explicitly overrides this rule. - Record the request as
"submitted," not "indexed." - Ask the user for the URL Inspection result
when Search Console access is unavailable. - Do not move to a new SEO
target while the user's current page has an unresolved
deployment/indexing blocker.

## Project history and known indexing constraints

This list is a starting point from earlier work, not a substitute for
inspecting current Git history and Search Console. Do not resubmit any
listed URL unless the user explicitly asks.

Previously reported as submitted to Google Search Console: -
`https://freeinjurycalc.com/whiplash-settlement-calculator/` -
`https://freeinjurycalc.com/workers-compensation-calculator/` -
`https://freeinjurycalc.com/truck-accident-settlement-calculator/` -
`https://freeinjurycalc.com/slip-and-fall-settlement-calculator/` -
`https://freeinjurycalc.com/michigan-car-accident-settlement-calculator/` -
`https://freeinjurycalc.com/missouri-car-accident-settlement-calculator/` -
`https://freeinjurycalc.com/new-hampshire-car-accident-settlement-calculator/` -
`https://freeinjurycalc.com/oklahoma-car-accident-settlement-calculator/` -
`https://freeinjurycalc.com/pennsylvania-car-accident-settlement-calculator/` -
`https://freeinjurycalc.com/california-car-accident-settlement-calculator/` -
`https://freeinjurycalc.com/motorcycle-accident-settlement-calculator/` -
`https://freeinjurycalc.com/back-injury-settlement-calculator/`

Reported completed commits include: - Michigan: `f463388` - Missouri:
`6b7703a` - New Hampshire: `8f3b268` - Oklahoma: `f553a28` -
Pennsylvania: `90f6b4e` - Shared cleanup: `19d8565` - California:
`1fa67fd` - Motorcycle: `9864e1a` - Back injury: `eb06297`

### Current unresolved Kansas item --- do not skip

Target:
`https://freeinjurycalc.com/kansas-car-accident-settlement-calculator/`

Commit reported by user: - `556f1c7` ---
`Improve Kansas car accident calculator legal accuracy`

Reported code changes: - Removed the \$350,000 cap from Kansas
calculator enforcement because *Hilburn v. Enerpipe Ltd.*, 309 Kan. 1127
(2019), held K.S.A. § 60-19a02 facially unconstitutional. - Updated
Kansas title/meta description, FAQ, H1, and authoritative sources
section. - Changed files were: - `src/components/Calculator.astro` -
`src/pages/[state]-car-accident-settlement-calculator.astro` -
`src/utils/stateContentGenerator.ts`

The user reported the live page was still showing old content after the
push. Antigravity diagnosed Cloudflare Pages and suggested the user
trigger/verify deployment. The conversation did **not** establish
independently that: - Cloudflare Pages production deployment for
`556f1c7` succeeded, - the live page contains the new *Hilburn*
explanation, or - Google Search Console currently reports the URL
indexed.

The user explicitly stated that the Kansas page is not indexed and
objected that the assistant moved to another page before resolving it.
Therefore: - Treat Kansas production verification and indexing status as
unresolved until directly confirmed. - Do not pivot to Nevada or another
page while Kansas remains the active blocker. - Do not state that Kansas
was never worked on: it was changed and committed according to the user,
but production and indexing remain unverified. - Do not submit a
duplicate indexing request automatically. First establish live
deployment and ask for/inspect current URL Inspection status; only
request indexing if not already submitted and user authorizes it. - The
latest Search Console spreadsheet was dated 2026-10-20, but it is not
proof of Kansas indexing status.

## Page prioritization

Use the user's most recent Search Console export as evidence. Prioritize
pages with meaningful impressions and a plausible improvement
opportunity, but verify that: - The page is not already fixed. - The
work has not already been completed. - The page's indexing/deployment
state is understood. - Current blockers on the active page are resolved
before switching targets.

Do not repeat an audit just because a page has low impressions. If no
meaningful defect is found, move to another page only after explaining
why.

## Response format to the user

-   Be concise and direct.
-   Give one next action at a time.
-   Do not ask the user to repeat information already in this file or
    repository history.
-   Do not repeatedly paste long prompts unless the user asks for one.
-   If providing a code-agent prompt, include only the immediate task,
    scope, evidence to gather, and stop conditions.
-   Clearly distinguish confirmed facts, agent-reported results, and
    unresolved assumptions.

## Definition of done

A page task is not complete until the appropriate requested lifecycle
stage is verified. For a page release that includes indexing, the final
record must separately state: - Code committed/pushed - Production
deployment verified - Live content verified - Indexing request submitted
(if applicable) - Search Console indexing status confirmed (if
available)

Never mark a page "done" just because the code was committed.

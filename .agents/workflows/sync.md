---
description: "Workflow to ensure code is committed and pushed after every major task"
---

# Auto-Sync Workflow

1. Check for modified files using `git status`.
2. If there are changes:
   - Stage all changes: `git add --all`
   - Commit changes with a descriptive message related to the current task.
   - Push to the remote repository: `git push`

> [!IMPORTANT]
> This workflow should be triggered by Antigravity proactively at the end of every significant task or at the user's request to ensure progress is never lost.

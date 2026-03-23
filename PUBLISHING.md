# Publishing Guide

Create a new draft branch:

```bash
git switch master
git pull
git switch -c draft/my-new-post
```

Write post in `src/blog/`. Add images and other assets as needed.

Push to remote:

```bash
git add .
git commit -m "Added draft: My New Post"
git push -u origin draft/my-new-post
```

On GitHub...

1. Open a PR
2. Review it
3. Merge it
4. Delete the merged draft branch

Sync the local repo with the remote.

```bash
git switch master
git pull --prune origin master
git branch -D draft/my-new-post
```

## Notes

If `master` changes while you're drafting, you can merge those changes into the draft:

```bash
git switch draft/my-new-post
git merge master
```

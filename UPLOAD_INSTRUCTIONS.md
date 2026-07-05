# Upload Instructions

## Option A: Replace the GitHub Pages site from the GitHub web UI

1. Unzip `joy-world-class-github-pages.zip`.
2. Open your repository: `DrJoyKarmakar/DrJoyKarmakar.github.io`.
3. Upload these files/folders into the repository root:
   - `index.html`
   - `README.md`
   - `assets/`
4. Commit the changes to the `master` branch.
5. Open GitHub Pages after the deployment finishes.

## Option B: Upload with Git

```bash
git clone https://github.com/DrJoyKarmakar/DrJoyKarmakar.github.io.git
cd DrJoyKarmakar.github.io
cp -R /path/to/unzipped-package/* .
git add .
git commit -m "Create world-class AI chemistry landing page"
git push origin master
```

## Notes

- This package is a polished static GitHub Pages landing page.
- It does not delete your existing Academic Pages content automatically. If you want a full replacement, upload these files at the repository root and keep/remove older folders depending on whether you still need the old academic template.
- The design uses your existing public banner image URL and current links.

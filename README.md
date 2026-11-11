# Hanieh Motamedi — Portfolio

A bilingual (English / فارسی) personal portfolio. Plain HTML, CSS and JavaScript, no frameworks and no external requests.

## Structure (flat: every file in one folder)

All files sit next to index.html, with no subfolders. This matches how GitHub's
upload page and Android phones upload files, so nothing can get lost.

    index.html  style.css  main.js  README.md  .nojekyll
    12 images (.webp)  7 fonts (.woff2)

## Adding contact details
Open main.js. At the top is the CONTACT object: fill in email, instagram (full URL)
or linkedin (full URL). Empty items stay hidden.

## Publishing / updating on GitHub Pages
1. Unzip the ZIP.
2. In the repository: Add file > Upload files > select ALL files > Commit changes.
   Files with the same name are replaced automatically.
3. Settings > Pages > Deploy from a branch > main > / (root) > Save.
4. After 1 to 2 minutes open https://USERNAME.github.io/REPOSITORY/ (refresh if it looks old).
File names are case-sensitive: keep them exactly as they are.

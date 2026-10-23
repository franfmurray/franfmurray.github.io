# Francisco Murray — Photography

A minimal static portfolio, hosted on GitHub Pages.

| Page | File |
| --- | --- |
| Home (split monochrome / colour) | `index.html` |
| Black & white archive (filterable) | `monochrome.html` |
| Current colour project | `colour.html` |
| About | `about.html` |
| Contact | `contact.html` |
| Not found | `404.html` |

## Adding your photographs

1. Put image files in `photos/monochrome/` and `photos/colour/` (long edge ~2000px, JPG, under ~500 KB each).
2. Open `js/photos.js` and replace each placeholder `src` with your file path, e.g. `src: "photos/monochrome/01.jpg"`, and set `w`/`h` to the image's pixel size.
3. Edit your name, email, Instagram, the project title/statement and the journal notes in the same file.

The About page text lives in `about.html`. Everything else (navigation, footer, galleries, lightbox) is shared via `js/main.js` and `css/style.css`.

The original Christopher Nolan coursework site is kept in `archive/nolan/`.

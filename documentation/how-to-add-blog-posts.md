# How to Add a New Blog Post

Blog posts are written in [markdown](https://www.markdownguide.org/cheat-sheet/) and should be added to the `src/posts/` folder.

The name of the file will be its URL - This is the format we're using

```
YYYYMMDD-title-of-post.md
```

(`YYYY`, `MM`, `DD` should be replaced by the year, month and day of the planned
publishing)

## Metadata

The top of the markdown file needs to include some metadata (FrontMatter data)
about the post, which is surrounded by `---` lines.

For example:

```
---
title: Why do we need Web Compatibility
description: Why do we need standards for a healthy web
imageUrl: https://placekitten.com/g/600/600
imageDescription: A black and white photo of a kitten contemplating Web Compatibility
date: 2017-01-16
author: User 2
authorImageUrl: https://placehold.co/64
---

This is where the content of your blogpost goes
```

- `title` the title of the post
  - This will be an `h1` on the page (and shown on the post previews)
  - Leave the title out of the markdown body, otherwise it will appear twice on the page
  - Since `h1`s should be the unique top-most headline, the biggest headlines inside the content should be `h2`s, written as `## Some Headline` in markdown.
- `description` A short description of the article
  - (at time of writing) this is not displayed on the post's page
  - It is used in the metadata of the page.
- `imageUrl` The url of the image asset that should be the post's "main" image.
  - It will appear prominently next to the headline
  - will fill most of the post previews on other pages
  - It will be cropped to an aspect ratio of either 1/1 (desktop, square) or 3/2 (mobile). The cropping takes the center section of the image that fulfills the ratio. (Future improvements could allow separate images)
  - Unless the image is hosted on another site (are you sure it's not gonna be deleted at somepoint?), it should be put in a fitting folder inside `src/assets/images/`. The URL will then be the path of the image, starting at `/assets`, (e.g. `/assets/images/posts/grumpy-cat.jpg`)
- `imageDescription` A description of the image's contents, e.g. for visually impaired people (alt text)
  - If the image is fully presentational and adds no extra content this field can be left empty
  - Otherwise try to describe the image succinctly, describing the parts and features of the image that matter in the context of the post. (e.g. a cat photo in a blogpost about the life of Grumpy Cat would would probably describe the cat's colors, features, and demeanor in some detail, while the same picture used for a blog post about `.cat` domains would mostly describe it as being "the Grumpy Cat meme" with minimal details.)
  - Text contents should be fully transcribed, unless it's purely decorative / wouldn't be of interest to be read visually. (e.g. a blurry picture of code, the green Matrix wall of letters, stacked screenshots of hundreds of comments ...)
  - There is no need to include bits of "The image shows..." at the start, only if it's giving relevant information about the type of the image (e.g. "A black and white photo", "A screenshot")
- `date` The date of the article.
  - This would usually be the date of publishing, not when it was written.
- `author` The name of the author, as it appears on the website
- `authorImageUrl` URL of a small avatar of the author
  - See `imageUrl` on where to place it / what the URL will be
  - The image will be cropped to a circle and displayed at size `30x30` (CSS pixels, so a hi-DPI monitor might pick up more details from an image in higher resolution, e.g. `60x60`)

- [How to Add a New Blog Post](#how-to-add-a-new-blog-post)
  - [Step-by-Step Guide](#step-by-step-guide)
    - [Create a branch](#create-a-branch)
    - [Create the File for the Blog Post](#create-the-file-for-the-blog-post)
    - [Write the Post](#write-the-post)
    - [Add Cover Image](#add-cover-image)
    - [Add Author Image](#add-author-image)
    - [Add metadata](#add-metadata)
      - [title](#title)
      - [description](#description)
      - [imageUrl](#imageurl)
      - [imageDescription](#imagedescription)
      - [date](#date)
      - [author](#author)
      - [authorImageUrl](#authorimageurl)
    - [Create a PR](#create-a-pr)
    - [Merge the PR](#merge-the-pr)
  - [Support](#support)

# How to Add a New Blog Post

Learn how to add a new blog post.

## Step-by-Step Guide

Follow this guide to create and publish a new blog post

### Create a branch

1. create a new branch for your blog post, the new branch should have `main` as base.

Make sure you are currently on the main branch

```bash
git checkout main
```

Update the `main` branch

```bash
git pull
```

And check that you don't have any new changes

```bash
git status
```
The output of the `status` comment should include the phrase `Your branch is up to date`.

Now you are ready to create the new branch for you blog post

```bash
git checkout feat/YOUR_BRANCH_NAME
```

Your branch name should include the topic of your posts, e.g. `feat/why-rocks-are-cool-post`.

### Create the File for the Blog Post

Blog posts are stored as [markdown](https://www.markdownguide.org/cheat-sheet/) files.
New posts should be added to the `src/posts/` folder.

The name of the file will be its URL - This is the format we're using

```
YYYYMMDD-title-of-post.md
```

(`YYYY`, `MM`, `DD` should be replaced by the year, month and day of the planned
publishing)

### Write the Post

Blog posts are written in [markdown](https://www.markdownguide.org/cheat-sheet/).

When writing a blog post please make sure to use inclusive and simple language to make the posts as accessible as possible.

To see your blog post you can run the command
```bash
npm run start
```

Note: if this is your first time working with the project you need to run first
```bash
npm i
```
in the project folder.

When the `start` command is running a local server is started and one of the replies of the command is the local address, likely [http://localhost:8080/](http://localhost:8080/).

When you follow the address you can navigate to your blog post. Every time you save the markdown file the page reloads automatically.

### Add Cover Image
Every post in our blog needs a cover image.

When selecting a cover image there are multiple things to consider:
- do not use anything offensive or shocking
- check the license of the image, it is your responsibility to make sure the image can be used, you are always welcome to get in touch if you want support
- the image should somewhat support the content of the post

A good source for images that we can use is [Pexels](https://www.pexels.com/)

Once you selected an image we need to make sure it has the right ratio and format.

The ratio is 3:2 and the format is `webp`.

A good website to convert your selected image into the right ratio and format is [RedKetchup](https://redketchup.io/image-resizer).

On that page you first upload your image, then select as `Aspect Ratio` the value `3:2`. If the current ratio is not 3:2 you can select the portion of the image that will be used in the preview above ratio selection.

For the resizing please select a width of 768 pixels and a height of 512 pixels.

Then under `Export As` you select `WEBP` and press `Download`. A new layer opens where you need to click on `Download` again in the left top corner.

Now you have a cover image, please give it a fitting name, e.g. the keyword you used to find the image.

The image can now be added to the post images folder under `src/assets/images/posts`.

To use the cover image the image path needs to be added to the [metadata](#add-metadata) of the posts.

### Add Author Image
If you are the first time contributing a post to this blog you should add yourself as an author.

To do that you need to select an image that you want to represent yourself.

The image does not need to be a picture of you but should be under a license that allowed the use on our page.

The image should be converted into a 1:1 ratio with a length of 64 pixels and saved in the webp format.

Our suggested tool is [RedKetchup](https://redketchup.io/image-resizer).

Once you have uploaded your image you
- select `Square` for `Aspect Ratio`
- set `Resize Dimensions` to `64`
- select `WEBP` under `Export As`
- click `Download`
- in the overlay that opens click `Download` in the top left corner again

Now your author image is ready and can be saved under `src/assets/images/authors`. The name of the image should be your author name, first name is sufficient right now.

To set the author image for your posts please follow the instructions under [Add Metadata](#add-metadata).

### Add metadata

The top of the markdown file needs to include some metadata (FrontMatter data)
about the post, which is surrounded by `---` lines.

For example:

```
---
title: Why do we need Web Compatibility
description: Why do we need standards for a healthy web
imageUrl: /assets/images/posts/YOUR_COVER_IMAGE.webp
imageDescription: A black and white photo of a kitten contemplating Web Compatibility
date: 2017-01-16
author: User 2
authorImageUrl: /assets/images/authors/YOUR_NAME.webp
---

This is where the content of your blogpost goes
```

#### title
- This is the main title of the post
- It will be an `h1` on the page (and shown on the post previews)
- Leave the title out of the markdown body, otherwise it will appear twice on the page
- Since `h1`s should be the unique top-most headline, the biggest headlines inside the content should be `h2`s, written as `## Some Headline` in markdown

#### description
- A short description of the content of the posts or a one sentence summary
- This is not displayed on the post's page (at time of writing)
- It is used in the metadata of the page

#### imageUrl
- URL to the cover image if the post
- It will appear prominently next to the headline
- will fill most of the post previews on other pages
- It will be cropped to an aspect ratio of either 1/1 (desktop, square) or 3/2 (mobile). The cropping takes the center section of the image that fulfills the ratio. (Future improvements could allow separate images)
- The image should be hosted on the DEVEN website. Go to [Add Cover Image](#add-cover-image) section for more information

#### imageDescription
- A description of the image's contents, e.g. for visually impaired people (alt text)
- Empty if it is a decorative image. The text will be used as an alt text of the image
- If the image is fully presentational and adds no extra content this field can be left empty
- Otherwise try to describe the image succinctly, describing the parts and features of the image that matter in the context of the post. (e.g. a cat photo in a blogpost about the life of Grumpy Cat would would probably describe the cat's colors, features, and demeanor in some detail, while the same picture used for a blog post about `.cat` domains would mostly describe it as being "the Grumpy Cat meme" with minimal details.)
- Text contents should be fully transcribed, unless it's purely decorative / wouldn't be of interest to be read visually. (e.g. a blurry picture of code, the green Matrix wall of letters, stacked screenshots of hundreds of comments ...)
- There is no need to include bits of "The image shows..." at the start, only if it's giving relevant information about the type of the image (e.g. "A black and white photo", "A screenshot")

#### date
- Date of the planned publishing in the format `YYYY-MM-DD`

#### author
- The name of the author, as it appears on the website

#### authorImageUrl
- URL to the avatar of the author. This should be a relative link, which means the image of the author should be stored on the DEVEN website. Go to [Add Author Image](#add-author-image) section for more information.

### Create a PR

Once the blog post is written and all metadata added the changes need to be reviewed.

To get a review you first need add your changes to GitHub.

In the console type

```bash
git status
```

to see which files changed and/or where added. If you think all shown files should be part of the change type in the console

```bash
git add .
```

This will stage all of the changed/added files. Now we create a commit that includes those changes.

```bash
git commit -m 'feat: add post YOUR_POST_TITLE'
```

In the command above replace `YOUR_POST_TITLE` with the title of your post and run the command.

The commit is now created and need to be send over to GitHub, for that we run the command

```bash
git push
```

In the output of the command you should see a URL under `Create a pull request for 'YOUR_BRANCH' on GitHub by visiting:` which you can click to create a PR on Github. If you do not see the link visit the [GitHub page](https://github.com/deven-org/deven-website/pulls) and press `New pull request`.

Once the PR is created please share it with the team for a review. You can do that by posting it in the internal Slack channel or tag [@Jumace](https://github.com/Jumace) as a reviewer.

### Merge the PR

After the PR is approved you can merge it. This will trigger an automatic deployment of the DEVEN website and the article will be visible on the website a few minutes after.

## Support

If you are stuck at any time or have a question do not hesitate to get in touch with us.
# Welcome to our contributing guide

Thank you for investing your time in contributing to our project! We sincerely appreciate it. :sparkles:.
Please, read our [Code of Conduct](#code_of_conduct) to keep our community approachable and respectable.

## Content

- [Welcome to our docs contributing guide](#welcome-to-our-docs-contributing-guide)
- [Code of Conduct](#code_of_conduct)
- [Requirements](#requirement)
- [Getting started](#getting_started)
   - [Installation](#installation)
   - [File Structure](#file_structure)
- [Issues](#issues)
   - [Create a new issue](#create-a-new-issue)
   - [Solve an issue](#solve-an-issue)
- [Create a new branch](#create-a-new-branch)
  - [Option 1: Creating a Branch from the Terminal](#option-1-creating-a-branch-from-the-terminal)
  - [Option 2: Creating a Branch from a GitHub Issue](#option-2-creating-a-branch-from-the-github-issue)
- [Create a new blog post](#create-a-new-blog-post)
- [Prerequisites](#prerequisites)
   - [Build](#build)
   - [Commits](#commits)
- [Create a Pull Request](#create-a-pull-request)
  - [Merge the Pull Request](#merge-the-pull-request)

## Code of Conduct

Our team is dedicated to providing a harassment-free experience for everyone, regardless of gender, gender identity and expression, sexual orientation, disability, physical appearance, body size, age, race, or religion. We do not tolerate harassment of users, contributors and maintainers in any form, including physical or verbal abuse, stalking, or unwelcome advances.

This code of conduct applies to the project's Github Page as well as the Slack and Teams channels. Anyone who violates this code of conduct may be expelled from these spaces at the discretion of the core team.

Users and contributors are responsible for knowing and abiding by these rules.

## :gear: Requirements
1. First you need to install Git. Git is needed to clone the project to your local machine. If you don't have it
   installed yet you can follow this
   [installation guide](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).
2. This project is a Node.js package. You need Node Version 18 or higher in order to run it. Check your installed
   version with node -v. For more information check out the [Node.js Documentation](https://nodejs.org/en/docs/).
3. If you don't have Yarn installed, please install it (any version, we will pick the right settings later). For more
   information check out the [Yarn Documentation](https://classic.yarnpkg.com/en/docs).

## :arrow_forward: Getting started
### Installation

1. First, open a terminal and navigate to the folder you want to fork or clone this project

   ```bash
   cd git_projects
   ```

2. In you want to contribute to this repository, the first step is to clone the repository:

   ```bash
   git clone https://github.com/deven-org/deven-website.git
   ```

3. Install dependencies and run build:

   ```bash
   npm install && run build
   ```

4. Run

   ```bash
   npm serve
   ```

When the `serve` command is running a local server is started and one of the replies of the command is the local address, likely [http://localhost:8080/](http://localhost:8080/).

When you follow the address you can navigate to your site. Every time you save the markdown file the page reloads automatically.

### :file_folder: File Structure
    .
    └── .github            // GitHub templates for bugs, tickets and wiki
    └── .vscode            // settings for Visual Studio Code editor
    └── dist               // output of the generated html files
    └── docs               // documentation of the project
    └── src                // source files of the website
        └── _data          // JSON data for the website, i.e. the team 
        └── _includes      // collection of website building blocks
          └── content      // content of every page
          └── layouts      // nunjucks template layouts
          └── macros       // nunjucks macros
          └── styles       // CSS media settings
        └── assets         // files/folders which are accessed on the webpage, e.g. CSS, fonts and more
        └── feed           // nunjucks template for RSS
        └── posts          // blog of the website
        └── scripts        // scripts to transform local data to JSON data

## Issues

### Create a new issue

If you encounter a problem with the component or documentation, please search for an existing issue. If a related issue doesn't exist, you can open a new issue from the same page.

Or, if you want to create a new component, page, or improvement

<details>
<summary>How to write a useful issue?</summary>

###### For bugs 
- It should be _reproducible_. It should contain all the instructions needed to reproduce the same outcome.

- It should be _specific_. It's important that it addresses one specific problem.

###### For new component or page or improvement

- It should be _justified_. A clear description of why the new component or page is needed and how it will improve the project.

- It should be _well-defined_. Clear scope of what the component or page should do, including key features and expectation of behavior.

</details>

### Solve an issue

Scan through our [existing issues](https://github.com/deven-org/deven-website/issues) to find one that interests you.
If you find an issue that needs work, feel free to open a merge request with a fix.

## Create a new branch

### Option 1: Creating a Branch from the Terminal

Create a new branch for your issue / blog post, the new branch should have `main` as base.

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

Now you are ready to create the new branch for your issue or blog post

```bash
git checkout YOUR_BRANCH_NAME
```

Your branch name should include the ticket number of your issue or the topic of your posts, e.g. `feat/why-rocks-are-cool-post`.

### Option 2: Creating a Branch from a GitHub Issue

If you have already created an issue, you can create a new branch directly from the issue's page.

1. Navigate to the issue you want to create a branch from.

2. Click on `Create a branch` in the right panel under the `Development` section.

3. Ensure your branch name includes the issue's ticket number for easy tracking.

4. Double-check your repository destination and ensure the branch source is set to main.

5. After creating your branch, check it out locally using:

```bash
git checkout YOUR_BRANCH_NAME
```

## Create a new blog post

After creating a new branch for your new post. Follow this guide to create and publish a new blog post.

<details>
<summary>Guide to Creating a New Blog Post</summary>

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

</details>

## Prerequisites

Before submitting a merge request, ensure that your branch meets all requirements.

### Build

1. If there are changes in the src folder, please run:

```bash
npm run build
```

2. The build process may generate automatic changes. Make sure to commit and push these changes before submitting your merge request.

### Commits

The commits must be compliant with the [Conventional Commits specification](https://www.conventionalcommits.org/en/v1.0.0/).

## Create a Pull Request

Once you have completed the issue or written the blog post, it needs to be reviewed.

1. To create a pull request, go to the branch page, click on the options icon (horizontal three dots) next to your branch, and select `New pull request`.

2. Name the pull request using the issue number and title if there's an issue related to this PR. Otherwise, use your blog post title. Example: feat/YOUR_BRANCH_NAME.

3. The description should clearly explain what has been done in that branch, so that the reviewer knows what to expect.

### Merge the Pull Request

Once the PR is approved, you can merge it. This will trigger an automatic deployment of the DEVEN website, and the changes or article will be visible within a few minutes.

**Always remember to squash and merge**




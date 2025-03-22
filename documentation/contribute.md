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
- [Create a new blog post](#create-a-new-blog-post)
- [Prerequisites](#prerequisites)
   - [Build](#build)
   - [Commits](#commits)

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
   ```sh
   $ cd git_projects
   ```
2. In you want to contribute to this repository, the first step is to clone the repository:
   ```sh
   $ git clone https://github.com/deven-org/deven-website.git
   ```
3. Install dependencies and run build:
   ```sh
   $ npm install && run build
   ```
4. Run
   ```sh
   $ npm serve
   ```

### :file_folder: File Structure
    .
    └── .github            // GitHub templates for bugs, tickets and wiki
    └── .vscode            // settings for Visual Studio Code editor
    └── dist               // output of the generated html files
    └── docs               // documentation of the project
    └── documentation      // documentation skeleton
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

#### Create a new issue

If you encounter a problem with the component or documentation, please search for an existing issue. If a related issue doesn't exist, you can open a new issue from the same page.

Or, if you want to create a new component, page, or improvement

<details>
<summary>How to write a useful issue?</summary>
<br />

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

## Create a new blog post

If you want to create a new blog post, please read our [How to add blog posts](./how-to-add-blog-posts.md) guidelines and instructions.

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





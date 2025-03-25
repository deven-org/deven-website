# Welcome to our docs contributing guide

Thank you for investing your time in contributing to our project! We sincerely appreciate it. :sparkles:.
Please, read our [Code of Conduct](#code_of_conduct) to keep our community approachable and respectable.

## Content

- [Welcome to our docs contributing guide](#welcome-to-our-docs-contributing-guide)
- [Code of Conduct](#code_of_conduct)
- [Requirements](#requirement)
- [Getting started](#getting_started)
   - [Installation](#installation)
   - [File Structure](#file_structure)

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
    └── .github             // 
    └── .vscode            // 
    └── dist               // source that generate html files
    └── docs              // documentation of the project
    └── src
        └── _data         // 
        └── _includes     // 
          └── content     // content of every page
          └── layouts     // standard layout of every page
          └── macros     // 
          └── styles     // media settings
        └── assets       // where css files images, fonts, favicon are stored
        └── feed        // 
        └── posts       // newsletter
        └── scripts       //






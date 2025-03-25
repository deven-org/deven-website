# Welcome to our docs contributing guide

## Content


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


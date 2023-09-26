## Getting Started

deven-documentation-skeleton is designed to function in all environments, including those that are not based on NodeJS.

If you environment is not built on NodeJS, you can fork it - here is how. It enables the cloning of Deven's documentation skeleton into your project, provides details on documentation coverage, and assists in identifying and cloning any missing chapters.

## Goals

- Help engineers easily add detailed documentation to their projects, so they can save time and resources.
- Make it easier for engineers to find information by creating a single documentation project that covers all their projects. This will reduce their mental workload.
- Onboard new team members faster.
- Ensure information is shared and preserved, even after team members move on to new projects.

## Documentation structure

```
└── src/doc
    └── README.md
    └── ARCHITECTURE.md
    └── CODEOFCONDUCT.md
    └── CONTRIBUTE.md
    └── DEPLOYMENT.md
    └── GETSTARTED.md
    └── GLOSSARY.md
    └── PROJECTBACKGROUND.md
    └── TESTING.md
```

## Requirements

1. This setup is compatible with all major operating systems, and has been tested on Windows 8, Windows 8.1, Windows 10, Mac, and Linux.  
   It's a Node.js package, so you'll need to have Node Version 4 or higher and npm Version 2 or higher installed.  
   To check your installed versions, run `node -v` and `npm -v`.
2. To run our code, please make sure you meet the following requirements:
   - Node.js => v14.0.0 (for more information, please check [the Node.js Documentation](https://nodejs.org/en/docs/))
   - If you use Yarn, you'll need version >= v1.2.0.
   - If you use npm, you'll need version >= v8.0.0.

## Installation

Install the package in your project:

```
yarn add deven-documentation-skeleton --dev
```

or

```
npm install deven-documentation-skeleton --save-dev
```

Add the following entries to your package.json scripts section:

```
"scripts": {
    "doc:install": "deven-documentation-skeleton install",
    "doc:check": "deven-documentation-skeleton check",
    "doc:update": "deven-documentation-skeleton update"
}
```

## How to use it

### 1. Install

Install the documentation using the `install` command.

```
npm run doc:install
```

or

```
yarn doc:install
```

#### What to expect?

First, a new folder will be created (`./doc`) containing all the skeleton chapters.
Then, it will generate a config (`./.deven-skeleton-install.config`), which will track the installed version.

If the `./doc` folder already exists, it will be renamed to `./_doc`, and a new doc folder will be generated. If both the doc folder and the `_doc` folder exist, the script won't proceed until you delete one of them.

If the `./.deven-skeleton-install.config` is already existing, the script will just stop. It means that the documentation skeleton has been already successfully installed, and there's no need to proceed with a new installation.

### 2. Check

Once the documentation skeleton has been installed, you can use the check command to verify the status of the documentation.

```
npm run doc:check
```

or

```
yarn doc:check
```

#### What to expect?

The tool will show the **diff** between the skeleton chapters and the chapters located in the local documentation folder. If other files have been added to the `doc` folder, they will be ignored.

The content of the chapters won't be analysed nor considered for this report.

### 3. Update

In case one or more chapters are missing in the local documentation folder, the command update will clone them into the doc folder.

```
npm run doc:update
```

or

```
yarn doc:update
```

#### What to expect?

If the documentation folder is missing, it will be created. If the README file is missing, it will be created. The tool will clone the missing chapters in the documentation folder.

If the local version is larger than the one of the installed packaged, the script won't run.

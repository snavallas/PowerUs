# PowerUs Coding Challenge

This repository contains an end to end test for the following scenario specified by the Coding Challenge instructions provided by *PowerUs GmbH*.

### Requirements
- Use Cypress with mobile view
- Use Typescript (optional)
- Develop a code that is:
    - Clean and easy to read
    - Scalable
    - Simple
- Provide instructions in a readme file

### Scenario
 - Starting at https://testing.powerus.de/
 - On the header, click on **Für Arbeitgeber**
 - On the next page click on the button **Jetzt Beratung vereinbaren**
 - Fill out the funnel and click on **Kostenlos beraten lassen**

 A preview of the scenario can be seen in this [video](https://drive.google.com/file/d/1AnGUAC3k9d6jlioN0TCvFIjjzpHzt2dT/view).

## Project structure
Framework: _Cypress and typescript_

Design pattern: _Page Object Model (POM)_

The basic folder structure is depicted below:
```
PowerUs
├───cypress
│   └───e2e: contains the specification file
│   └───pages: contains the page objects
│   └───support: contains the selectors used in the test
│───.gitignore: files not to be tracked by Git
│───cypress.config.ts: stores specific Cypress configuration
│───tsconfig.json: specifies root files and compiler options required to compile the project
│───package.json: project metadata, commands, dependencies, etc.
```
 
## Project setup

### Pre-requisites
- **NodeJS**: you can download it [here](https://nodejs.org/en/download/).
- **Git**: can be downloaded [here](https://git-scm.com/downloads).
- **Visual Studio Code** (optional): get the installer [here](https://code.visualstudio.com/download).

### Install dependencies
1. Execute `git clone https://github.com/snavallas/PowerUs.git` to clone this repository to your local machine.
2. Execute `npm install` so that all dependencies are installed on your local machine.

## Run test
You can run the test in two different modes:

 - `npm run test:open`: opens Cypress interface and lets you decide which browser to use (compatible browsers Cypress found on your system)
 - `npm run test:run`: runs the test in headless mode. 

>  These commands are specified in `package.json` file.

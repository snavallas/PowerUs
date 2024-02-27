# End to end tests

This repository contains an end to end for the following scenario specified by the Coding Challenge instructions provided by *PowerUs GmbH*.

 - Starting at https://testing.powerus.de/
 - On the header, click on **Für Arbeitgeber**
 - On the next page click on the button **Jetzt Beratung vereinbaren**
 - Fill out the funnel and click on **Kostenlos beraten lassen**

## Project structure
Framework: _Cypress and typescript_
Design patter: _Page Object Model (POM)_

The basic folder structure is depicted below:
```
PowerUs
├───cypres
│   └───e2e: contains the specification file
│   └───pages: contains the page objects
│   └───support: contains the selectors used in the test
│───.gitignore: files not to be tracked by Git
│───cypress.config.ts: stores specific Cypress configuration
│───tsconfig.json: specifies root files and compiler options required to compile the project
│───package.json: project metada, commands, dependencies, etc
```
 
## Run test
First execute `npm install` so that the dependencies are installed on your local machine
You can run the tests in two different forms:

 - `npm run test:open`: opens Cypress interface and lets you decide which browser to use (compatible browsers Cypress found on your system)
 - `npm run test:run`: runs the test in headless mode. 

>  See `package.json` file for implementation

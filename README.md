# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## Help + Testing
This repo contains a clone version of trello app with the e2e tests written in Cypress for login.
The steps below will take you all the way through Cypress. It is assumed you have nothing installed except for node + git.

**If you get stuck, here is more help:**

* [Cypress Support](https://on.cypress.io/support)

### 1. Install Cypress

[Follow these instructions to install Cypress.](https://on.cypress.io/installing-cypress)

### 2. Fork this repo

If you want to experiment with running this project in Continuous Integration, you'll need to [fork](https://github.com/cypress-io/cypress-example-phonecat#fork-destination-box) it first.

After forking this project in `Github`, run these commands:

```bash
## clone this repo to a local directory
git clone https://github.com/<your-username>/cypress-example-phonecat.git

## cd into the cloned repo
cd cypress-example-phonecat

## install the node_modules
npm install

## start the local webserver
npm start
```

The `npm start` script will spawn a webserver on port `8000` which hosts the Phonecat app.

You can verify this by opening your browser and navigating to: [`http://localhost:8000`](http://localhost:8000)

You should see the Phonecat app up and running. We are now ready to run Cypress tests.

### 3. Add the project to Cypress

[Follow these instructions to add the project to Cypress.](https://on.cypress.io/writing-your-first-test)

### 4. Run in Continuous Integration

[Follow these instructions to run the tests in CI.](https://on.cypress.io/continuous-integration)

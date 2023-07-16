# CMS Frontend

This repository contains the frontend code for the CMS (Club Management System) project. It provides the user interface and client-side functionality for the CMS, allowing users to interact with the system.

## Technologies Used

- React: JavaScript library for building user interfaces
- Axios: Promise-based HTTP client for making API requests
- React Router: Routing library for React applications

## Getting Started

To get started with the frontend, follow these steps:

1. Clone the repository:

   ```git clone https://github.com/Amansingh-afk/clubhub-ui.git```
   
2.Install the dependencies:

```
cd clubhub-ui
npm install
```

3.Start the development server:

`npm start`
The development server will start running on `http://localhost:3000`. You can access the application in your web browser.

### Folder Structure
The folder structure of the frontend repository is as follows:

src/: Contains the main source code of the frontend.

components/: Includes reusable components used throughout the application.

views/: Defines the individual views/screens of the application such as student dashboard, admin dashboard, super admin dashboard.

utils/: Provides utility functions or services, such as API interaction or authentication handling.

config.js: Contains the constants used throughout the appilcation.

App.js: Entry point of the application, where the main routing and component hierarchy is defined.

index.js: Renders the root component and sets up the React DOM.

public/: Contains static assets, such as the HTML file and other resources.

### Available Scripts
In the project directory, you can run the following scripts:

npm start: Starts the development server.

npm run build: Builds the application for production.

npm test: Runs the test suites.

npm run eject: Ejects the create-react-app configuration.

Refer to the package.json file for more details on each script.

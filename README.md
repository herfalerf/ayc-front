# Align Your Culture

##### [Click here to access the site](https://abaft-kick.surge.sh)

#### About

This project was created for a startup company.  The project provides a customer facing website for the company which displays the company's video repository, information on services offered, information on the team at the company and a way to contact the company.  The site also provides an administrator portal so that the company can easily modify the videos displayed, the team members info and keep track of the customers who have contacted the company.  As of this time the website is has been submitted to the client and will be deployed on the client's domain once enough content has been created by the client.  Particular attention was paid to make the website as responsive and mobile friendly as possible.  Web design and company assets were provided by the client for this project.

#### Admin portal

Please note the admin portal is not accessible through a link on the website and must be accessed by visiting https://abaft-kick.surge.sh/admin.  Account creation is not possible by design.  Below is a demo of the userflow for the admin portal.

#### Admin portal demo

##### Login
![login](https://github.com/herfalerf/ayc-front/blob/master/readmeimages/login.png)

###### After Login, the Admin navigation button will appear 
![home](https://github.com/herfalerf/ayc-front/blob/master/readmeimages/home.png)

###### Clicking the button makes the drop down accessible
![adminnav](https://github.com/herfalerf/ayc-front/blob/master/readmeimages/adminnav.png)

##### The Video manager link allows for management of the video library
![video](https://github.com/herfalerf/ayc-front/blob/master/readmeimages/video.png)

###### you can add a new video 
![videoadd](https://github.com/herfalerf/ayc-front/blob/master/readmeimages/videoadd.png)

###### or edit/delete an existing video as well as add or remove tags for that video.
![videoedit](https://github.com/herfalerf/ayc-front/blob/master/readmeimages/videoedit.png)

###### Team Manager and Customers links have similar functionality to the video manager.

![team](https://github.com/herfalerf/ayc-front/blob/master/readmeimages/team.png)
![customer](https://github.com/herfalerf/ayc-front/blob/master/readmeimages/customer.png)



#### Technology

##### Front-end

The front end of Align Your Culture was created using React.js and Material-ui.  Axios was utlized for requests, Formik was utilized for form styling with Yup for validation.  The front end is currently deployed on surge for demonstration purposes, but will be deployed on the company's domain once they have created enough content for the site to go live.

##### Backend

The backend of Align Your Culture is created using Node.js.  The site features a custom API written using the Express.js framework and deployed to Heroku.  Password encryption (for the admin login) is accomplished with bcrypt and authentication is done using JWT.  The backend utilizes PostgreSQL for its database.  Please see the backend repo for more details. 
[Backend repo](https://github.com/herfalerf/ayc-back)

##### Testing

Please read the instructions in the below Create React App section on how to test the front-end.  Instructions on testing the back end are provided in the backend repo
[Backend repo](https://github.com/herfalerf/ayc-back)

##### Web Design by [akorn.creative](https://99designs.com/profiles/akorncreative)


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

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

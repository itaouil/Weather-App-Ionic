# **Weather App**

A weather mobile application, able to display the forecast of a given location, which is requested thought the app input.

The stack used for the app is:

* Ionic2
* Angular2
* Typescript
* HTML5
* SCSS

## **Development Cycle**

1. **Setup MLAB and Ionic2**

The storage used is mongoDB, but on the cloud. More precisely it has been used the sandbox free service offered by MLAB. Secondly we installed Ionic2 (offering the mobile friendly framework) and Cordova that simulates native functionalities of the device targeted

2. **Create Ionic2 Components**

Well it is absolutely similar to Angular2, you create your component with the Component decorator, you set up your exporting class and add the relative providers, declaration, etc on the app.module.ts and finally create and import the scss files for the relative component in global scss files and you let it handle the style application.

3. **WUnderground Service**

To fetch forecast data we used the WUnderground API. You just to sign up (for free) and request your key which is used for the API call (with a limited number of calls per day, given that it is for free). Moreover, we create our *weather.service.ts* class where we import our HTTP module and create a class method that make calls to the API to fetch the data.

4. **Display API data**

We have data now. Let's display them. By using the Ionic's grid system based on flexbox (similar the bootstrap's one as well) we are able to define the width of our items in the page. To display the data we use Ionic's special tags (for list items, etc).

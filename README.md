# **Weather App**

A weather mobile application, able to display the forecast of a given location, which is requested thought the app input.

The stack used for the app is:

* Ionic2
* Angular2
* Typescript
* HTML5
* SCSS

## Pic

![alt](https://github.com/itaouil95/Weather-App-Ionic/blob/master/weather-app-pic.png)

## **Development Cycle**

1. **Setup Ionic2**

We proceed by installing Ionic2 (offering the mobile friendly framework) and Cordova that simulates native functionalities of the device targeted

2. **Create Ionic2 Components**

Well it is absolutely similar to Angular2, you create your component with the Component decorator, you set up your exporting class and add the relative providers, declaration, etc on the app.module.ts and finally create and import the scss files for the relative component in global scss files and you let it handle the style application.

3. **WUnderground Service**

To fetch forecast data we used the WUnderground API. You just to sign up (for free) and request your key which is used for the API call (with a limited number of calls per day, given that it is for free). Moreover, we create our *weather.service.ts* class where we import our HTTP module and create a class method that make calls to the API to fetch the data.

4. **Display API data**

We have data now. Let's display them. By using the Ionic's grid system based on flexbox (similar the bootstrap's one as well) we are able to define the width of our items in the page. To display the data we use Ionic's special tags (for list items, etc).

5. **Autocomplete Functionality**

The next stage in our app is to implement the autocomplete functionality while you are typing the city you want to visualise the weather for. To do this we are using the autocomplete API that **WUnderground** is offering plus the two way data binding offered in Angular2. We create a service method that gives back sets of objects for all the possible autocompletion and we define a method in our component class that calls the service method via the injected instance of the service whenever the ngModel is called on a property of the class. In our case **searchUrl**. Afterwards we display the name of the cities in ionic-list. There you go. It is DONE.

# movielist

General Assembly WDI-19 Project 2: MovieList

![image5](https://github.com/Williamconnelly/movielist/blob/master/public/img/screenshot_1.png)

## Project Summary

I got to make my first full-stack web application and as a great lover of film and media cataloguing, I took this project as an opportunity to exercise some of that passion. MovieList queries the OMDb API for movie information such as plot synopsis and poster images and displays them for a user to rate and add to their personal list catalogue. The rating system works on a 1-10 metric and a user can sort through their list by Title, Rating, and Year. A user can update or remove a movie if their thoughts on a movie change. A user's profile displays their average movie rating as well as an array of their favorite movies. 

## Wireframes & Planning

#### Planning Sketch
![image5](https://github.com/Williamconnelly/movielist/blob/master/public/img/planning.jpg)

#### Landing Page
![image1](https://github.com/Williamconnelly/movielist/blob/master/public/img/wf-index.png)

#### User Login Page
![image1](https://github.com/Williamconnelly/movielist/blob/master/public/img/wf-login.png)

#### Movie API Index Page
![image1](https://github.com/Williamconnelly/movielist/blob/master/public/img/wf-movieIndex.png)

#### Individual Movie Show Page
![image1](https://github.com/Williamconnelly/movielist/blob/master/public/img/wf-show.png)

#### User List Page
![image1](https://github.com/Williamconnelly/movielist/blob/master/public/img/wf-list.png)

#### User Profile Page
![image1](https://github.com/Williamconnelly/movielist/blob/master/public/img/wf-profile.png)

## Routes: 

| METHOD        | PATH          |
|:-------------:|:-------------:|
| GET           | /             |
| GET           | /profile      |
| GET           | /auth/signup  |
| GET           | /auth/login   |
| POST          | /auth/signup  |
| POST          | /auth/login   |
| GET           | /auth/logout  |
| POST          | /movies       |
| GET           | /movies/:id   |
| GET           | /user_movies  |
| POST          | /user_movies  |
| DELETE        | /user_movies  |
| PUT           | /user_movies  |
| POST          | /user_movies/sorted |

## Early Project Stages

Initially, I wasn't sure how to scope my project. I knew that I wanted a user to be able to catalogue and rate movies but did I want users to be able to inspect each other's lists? How would I connect them - through commenting, recommendations? Ultimately, I opted for the conservative goal of keeping the functionality personal for the time being. I wanted to focus on what drew me to the idea - displaying the user's list information in multi-faceted and engaging ways. 

![image5](https://github.com/Williamconnelly/movielist/blob/master/public/img/screenshot_2.png)

## Development Struggles

By far my biggest struggle throughout development was handling the wildly varying API data alongside Materialize, which I took on fully for the first time this project. With everything from poster-sizes, to title lengths, to the consistent availability of certain information, it made the design process very difficult. The regrettable bulk of my time was spent ensuring highly variant elements were readable and responsive instead of implementing additional pages and features. 

![image5](https://github.com/Williamconnelly/movielist/blob/master/public/img/screenshot_3.png)

## Future Goals

I'd love to tackle some of the things I didn't get to on this go-around such as displaying more detailed user information on the profile page. A graph displaying a user's ratings over each year and displaying which years they found the most or least engaging would be high on that list. While the favorite movie aspect of the profile is functional, I would ultimately prefer if the user had full control over something like their top 10 movies. There's yet some styling I want to add to the interface as well. One of my bigger goals for MovieList was for it to display a user's deviation from standard ratings however I would need more consistent data in order to render that information and thus, a different API. 

![image5](https://github.com/Williamconnelly/movielist/blob/master/public/img/screenshot_4.png)

## Known-Issues

As far as I'm aware, the site is fully functional as is. There are a number of styling issues still present and not every page is as successfully responsive as the last. There is a display issue with the rating select option on the main movie index page. It had to be shifted unceremoniously inside of it's parent form because there was a critical error with the HTML form attribute which caused it to infrequently exclude data. Some unexpected API responses are likely infrequently displaying.

![image5](https://github.com/Williamconnelly/movielist/blob/master/public/img/screenshot_5.png)

## List of Technologies Used

* HTML
* CSS
* Materialize
* CSS Grid
* jQuery
* JavaScript
* Express
* Sequelize
* Postgres
* OMDb API
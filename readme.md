Github User Search 💃🏻💃🏻💃🏻
==================

This is a micro web service for users to look up a Github user and see the list of the user's followers.
Only avatars are shown in the result, and you may visit the follower's account simply by clicking on the avatar.
The "Load More" button should fetch a new payload of the followers if the user has more than 30 followers. Each request only returns 30 followers.

## Description 👩🏻‍💻

The problem of this coding challenging is to make API calls to the Github API and get the desired user back.
This problem has been broke down into two parts:
* 1) get the user and the followers_url in one API call (pass in authentication in headers or parameters to avoid rate limit)
* 2) get the actual list of followers of this user using the followers_url in another API call (upon successfully called the followers_url endpoint, increment the page number so it will fetch the next payload when the "load more" button is clicked)
* If I had more time to spend on this problem, I would write some unit tests for the backend routes and assert the AJAX calls is working well. On the frontend, perhaps I would look into Jasmine for JS testing or Selenium. Moreover, I would spend more time on coming up with additional edge cases and conditions to improve the quality of the service. At current stage, this service needs more security and stability.

## Technical choices 🙈

As a junior software engineer, my choice of technology is limited and tend to be straight forward. I have experience in building projects of a full stack web app and below are similar tech stacks except my previous project involves dealing with database modeling and ORMs.

* Python - Python is the best (requests library is used for API calls)
* Flask - Flask is a micro framework that is easy to get it running fast and doesn't come with a bundle of packages like Django that are not necessary in this problem. Maybe it can made purely frontend, but I prefer to have some code in the back especially when I use my secret token for API calls.
* Javascript - JS is a must for the frontend, I tried my best to make it look organized and nice but I guess I'm not really a frontend guru.
* jQuery - I keep jQuery to minimal use because I wanted to practice vanilla JS to modify the DOM elements (also I've heard goods and bads about jQuery in the industry, so I chose to use a little just to let you know that I know this stuff 🤓)
* HTML5/CSS - Basic templating
* Github API v3 - of course


## Links of Proud 🥂🦄

* LinkedIn - https://www.linkedin.com/
* Github - https://github.com/shioramen/
* San Franasia - http://sanfranasia.herokuapp.com/
* Personal Page - http://estherxtan.com/

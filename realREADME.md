Github User Search 💃🏻💃🏻💃🏻
==================

* Description of the problem and solution.
* Reasoning behind your technical choices, including architectural trade-offs
    you might have made, anything you left out, or what you might do differently
    if you were to spend additional time on the project.
* Link to other code you're particularly proud of.
* Link to your resume or public profile.
* Link to the hosted application.


## Description 👩🏻‍💻
--------------
The problem of this coding challenging is to make API calls to the Github API and get the desired user back.
This problem has been broke down into two parts:
* 1) get the user and the followers_url in one API call (pass in authentication in headers or parameters to avoid rate limit)
* 2) get the actual list of followers of this user using the followers_url in another API call (upon successfully called the followers_url endpoint, increment the page number so it will fetch the next payload when the "load more" button is clicked)


## Technical choices 🙈
--------------------
* Python - Python is the best
* Flask - Flask is a micro framework that is easy to get it running fast and doesn't come with a bundle of packages like Django that are not necessary in this problem. Maybe it can made purely frontend, but I prefer to have some code in the back especially when I use my secret token for API calls.
* Javascript - JS is a must for the frontend, I tried my best to make it look organized and nice but I guess I'm not really a frontend guru.
* jQuery - I keep jQuery to minimal use because I wanted to practice vanilla JS to modify the DOM elements (also I've heard goods and bads about jQuery in the industry, so I chose to use a little just to let you know that I know this stuff 🤓)
* HTML5/CSS -
* Github API v3 - of course


## Links of Proud 🥂🦄
-----------------
* LinkedIn - https://www.linkedin.com/
* Github - https://github.com/shioramen/
* San Franasia - http://sanfranasia.herokuapp.com/
* Personal Page - http://estherxtan.com/
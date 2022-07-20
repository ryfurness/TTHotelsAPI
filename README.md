
# TT Hotels API
Here is a hotel information API where you can search for a Hotel's name or location etcand it will return some basic information about them.

## How It's Made:

**Tech used:** HTML, JavaScript, Express.js, Heroku.app, data-search

We developed a server in Express (Node.js) to listen for the API call to the server for any hotel (via domain/api/{hotel search terms}) and that name is searched on a data-search object that is stored in the sever.js file that runs Express. This dat-search object is built from a small .csv dataset of hotels stored on the server. Once the Hotel name is found, that Hotel's object is returned in JSON. Unfound hotels return a blank sheet.
The code is deployed to Heroku.app

## Optimizations

We kept the code light to keep it rapid, and it returns JSON. We developed a light index.html file just to provide simple instructions for using the API.

## Lessons Learned:

Heroku can access youro entire github repo if you go the default route of creating the app in the Heroku platform (as opposed to the CLI) where you effectively facilitate a second copy of your server+ files on Heroku's own git repo. That's preferable for security.

## Examples:

http://tthotels.herokuapp.com/api/hilton


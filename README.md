# TT Hotels API
Here is a hotel information API where you can search for a Hotel's name or location etcand it will return some basic information about them.

## How It's Made:

**Tech used:** HTML, JavaScript, Express.js, Heroku.app

We developed a server in Express (Node.js) to listen for the API call to the server for any hotel (via domain/api/{hotel name}) and that name is checked in a Hotel object that is stored in the sever.js file that runs Express. Once the Hotel name is found, that Hotel's object is returned in JSON. Unfound hotels return an unknown with all properties set to {unknown}.
The code is deployed to Heroku.app

## Optimizations

We kept the code light to keep it rapid, and it returns JSON. We developed a light index.html file just to provide simple instructions for using the API.

## Lessons Learned:

Still learning

## Examples:

"http://tthotels.herokuapp.com/api/hilton"




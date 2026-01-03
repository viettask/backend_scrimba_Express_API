1. Import express 

Save a new instance of express to a const called “server”.

Access the listen() method on “server”. 

Pass in the port and a callback function which will execute when the server starts listening. 

The callback can just log a connection message and the port.

2. Our app instance gives us access to a method which handles GET requests.

It needs to be passed two pieces of info:
  - The route as a string
  - a callback function that takes two params, the request and the response.

The response gives us access to a method that sends JSON.
  
It needs to be passed the data we want to serve.
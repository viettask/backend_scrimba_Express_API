1. 3 ways users can get data
    1. /api
    2. /api/industry/ai
    3. /api?has_mvp=true&is_seeking_funding=true

2. We will be studing
    1. creating a server
    2. sending status codes (200,400, etc)
    3. setting header
    4. handling requests/ responses

3. package.json is the blueprint
    contains metadata (name, version, author, description, etc)

    simplifies collaboration
        manages dependencies
        defining start script

4. npm init

5. npm install express

6. Request
    Method: GET
    Request Path: /api
    Data: query string/path params

7. Handle Request
    Filtering data
    Throwing an error
    Generate a response

8. Response:
    Resource (JSON)
    Content-Type (application/json)
    Status code: 200, 404, etc

9. HTTP is a text-based protocol
    All data transferred between a client and the server must be in the form of strings.

10. queryParams
    Ex: /api?course=express&bad_jokes=true 

11. The request object
    req.body - data from the request body
    req.params 
    req.methods - HTTP method (eg GET, POST)
    req.ip - Client's IP address
    req.query - The query params

12. Same-Origin policy
    By default, browsers enforce a same-origin policy
    This means requests can only be made to the same protocol,
    domain, and port as the one serving the web page.

    npm install cors
    
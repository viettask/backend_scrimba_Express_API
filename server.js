// import http from 'node:http'

// const server = http.createServer((req, res)=> {
//     console.log('server accessed')
//     res.end('<html><body>Hello</body></html>')
// })

// server.listen(8000, ()=>console.log('listening 8000'))


/*
Challenge 1:
 1. Create a package.json file by typing "npm init" in the terminal.
 2. Answer the questions using the info in project_details.md.
*/


/*
Challenge 2:
- Install the express dependency.
- Check the dependencies list in package.json
*/

/*
Challenge 3:
  1. When the client makes a GET request to ‘/api’, serve all of our data as json.

  hint.md for help!
*/

/*
Challenge4 :
1. When a user hits the /api endpoint with query params, filter the data so 
we only serve objects that meet their requirements. 
     
The user can filter by the following properties:
  industry, country, continent, is_seeking_funding, has_mvp

Test Cases

/api?industry=renewable%20energy&country=germany&has_mvp=true
  Should get the "GreenGrid Energy" object.

/api?industry=renewable%20energy&country=germany&has_mvp=false
  Should not get any object

/api?continent=asia&is_seeking_funding=true&has_mvp=true
  should get for objects with IDs 3, 22, 26, 29
*/



import express from 'express'
import { apiRouter } from './routes/apiRoutes.js'


//import { startups } from './data.js'
//import { people } from './data1.js'

const PORT = 8000


/*
Challenge 8:
1. Refactor the code to use express.Router()
*/

const app = express()

// app.get('/api', (req, res) => {
//     let filteredData = startups

//   const { industry, country, continent, is_seeking_funding, has_mvp } = req.query

//   if (industry) {
//     filteredData = filteredData.filter( startup => 
//       startup.industry.toLowerCase() === industry.toLowerCase()
//     )
//   }

//   if (country) {
//     filteredData = filteredData.filter( startup => 
//       startup.country.toLowerCase() === country.toLowerCase()
//     )
//   }
  
//   if (continent) {
//     filteredData = filteredData.filter( startup => 
//       startup.continent.toLowerCase() === continent.toLowerCase()
//     )
//   }

//   if (is_seeking_funding) {
//     filteredData = filteredData.filter( startup => 
//       startup.is_seeking_funding === JSON.parse(is_seeking_funding.toLowerCase())
//     )
//   }
  
//   if (has_mvp) {
//     filteredData = filteredData.filter( startup => 
//       startup.has_mvp === JSON.parse(has_mvp.toLowerCase())
//     )
//   }

//   res.json(filteredData)
// })
/*
Challenge 5: 
1. Update the code so a GET request to api/metals/gold
    logs an object {category: ‘metals’, type: ‘gold’}

But a GET request to api/crypto/eth
    logs an object {category: crypto-name, type: eth}
*/
// { category: 'crypto-name', type: 'eth' }
// app.get('/api/:category/:type', (req, res) => {

//     console.log(req.params)
//     res.json()
// })

/*
Challenge 6:
1. Add a new route which accepts GET requests to /api/<field>/<term>.
2. Filter the data based on the path params.
3. Serve the filtered data.

For now, don’t worry that using some fields will trigger an error.

** The functionality **
Get all startups in a given country via api/country/<country name>
Get all startups in a given continent via api/continent/<continent name>
Get all startups in a given industry via api/industry/<industry name>

**Test Cases** 

These should work:
  api/country/india
  api/continent/europe
  api/industry/ai

This will throw an error - but that's fine!
	api/has_mvp/true

*/

// app.get('/api', (req, res) => {
//   console.log(req.query)
//   res.json(people)
// })

// app.get('/api/:field/:term', (req, res) => {

//   const { field, term } = req.params

//   const allowedFields = ['country', 'continent', 'industry']
//   if (!allowedFields.includes(field)) {
//     return res.status(400).json({message: "Search field not allowed. Please use only 'country', 'continent', 'industry'" })
//   }


//   const filteredData = startups.filter(
//     startup => startup[field].toLowerCase() === term.toLowerCase()
//   )
//   res.json(filteredData)
// })

/*
Challenge 7:
1. If the client’s 'field' is not supported, serve this object:
  {message: "Search field not allowed. Please use only 'country', 'continent', 'industry'" }
2. Chain in the .status(<code>) method to set a status code.
	What status code should you set?
3. You might run into an error! Find a solution!

hint.md for help!
*/

/*
Challenge 9:
1. If a client uses an unknown route, serve this JSON 

{ message: "Endpoint not found. Please check the API documentation." }

Remember to server an error code!

Test:
http://localhost:8000/wrong-api/useless/user
*/

app.use(cors())

app.use('/api', apiRouter)

app.use((req, res) => {
  res.status(404).json({ message: "Endpoint not found. Please check the API documentation." })
})


app.listen(PORT, ()=> console.log(`server connected on port ${PORT}`))

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

import express from 'express'
import { startups } from './data/data.js'

const PORT = 8000

const app = express()

app.get('/api', (req, res) => {
  res.json(startups)  
})

app.listen(PORT, ()=> console.log(`server connected on port ${PORT}`))

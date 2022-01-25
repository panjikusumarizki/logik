const express = require('express')
const app = express()
const cors = require('cors')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

app.get('/', (request, response) => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(json => response.send(json.map(a => a.name)))
    .catch(error => {
        console.log(error.message)
    })
})

app.listen(3000, () => {
    console.log('App running on http://localhost:3000')
})
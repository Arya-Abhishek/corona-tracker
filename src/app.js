const express = require('express')
const path = require('path')

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))
app.set('view engine', 'hbs')
app.get('/home', (req, res) => {
    // Provide an object to send as JSON
    res.send({
        infected: 'around 2500',
        location: 'India'
    })
})

app.get('', (req, res) => {
    res.render('index', {
        title: 'Live Corona Update!',
        name: 'Abhishek Arya'
    })
})

app.get('/help', (req, res) => {
    res.send('<h1>Help!</h1>')
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})
// This will start the server at port 3000
const express = require('express');
const hbs = require('hbs')

const port = process.env.PORT || 3000
var app = express();

app.set('view engine', 'hbs')
app.use(express.static(__dirname + '/public'))
app.use((req, res, next) => {
    next()
})
// app.use((req, res, next) => {
//     res.render('maintenance.hbs')
// })
  
hbs.registerPartials(__dirname + '/views/partials')
hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear()
})

app.get('/', (req, res) => {
    res.render('home.hbs', {
        pageTitle: 'Welcome to my site',
       
    })    
})

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'A Title',
      
    })
})
app.get('/projects', (req, res) => {
    res.render('projects.hbs', {
        pageTitle: 'Projects'
    })
})
app.get('/bad', (req, res) => {
    res.send({
        errorMessage: 'Invalid URL'
    })
})

app.listen(port, () => console.log("server is up on port ", port)) ;
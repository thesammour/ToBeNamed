const express = require('express');
const app = express();

app.use( express.static( "public" ) );
app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('index')
})
app.get('/services', (req, res) => {
    res.render('services')
})
app.get('/faculties', (req, res) => {
    res.render('faculties')
})
app.get('/mgt', (req, res) => {
    res.render('management-faculty')
})
app.get('/mis', (req, res) => {
    res.render('./Majors/mis')
})
app.get('/mis/path', (req, res) => {
    res.render('./Majors/mispath')
})
app.get('/mis/courses', (req, res) => {
    res.render('./Majors/miscourses')
})
app.get('/colleges/mis', (req, res) => {
    res.render('collegecomparison')
})
app.get('/mis/jobs', (req, res) => {
    res.render('jobs')
})
app.get('/soft-skills', (req, res) => {
    res.render('softskills')
})
app.listen('5555', (req, res) => {
    console.log('Running Port')
})
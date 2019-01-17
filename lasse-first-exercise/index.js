const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const port = 3000
const users = require ('./components/users')
const student = require('./components/student')
const course = require('./components/course')
const grading = require('./components/grading')

app.get('/', function(req, res){
    res.send('hello world');
  });

app.use(bodyParser.json());

app.use('/users', users);
app.use('/students', student);
app.use('/courses', course);
app.use('/grades', grading);




app.listen(port, () => console.log(`Example app listening on port ${port}!`))
const express = require('express')
const app = express()

app.use(function (req, res, next) {
    res.setHeader(
      'Content-Security-Policy',
      "default-src 'self' http://localhost:3000/favicon.ico; font-src 'self'; img-src 'self'; script-src 'self'; style-src 'self'; frame-src 'self'"
    );
    next();
});

const courses = [
    {id: 1, name: 'hello'},
    {id: 2, name: 'Mateusz'},
    {id: 3, name: 'hi ho'},
    {id: 4, name: 'asdf'},
]
app.get('/', (req, res) => {
    res.send('hello world!!!')
})

app.get('/api/courses', (req, res)=>{
    res.send(courses)
})

app.get('api/courses/:id',(req, res)=>{
    const course = courses.find(c => c.id === parseInt(req.params.id))
    if (!course){
        res.status(404).send("the course was not found 404")
    }
    res.send(course)
})

const port = process.env.PORT || 3000
app.listen(port, () => console.log('slucham na porcie ' + port))
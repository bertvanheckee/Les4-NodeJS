const express = require('express');
const app = express();
app.use(express.json())

const courses = [
    {id: 1, name: 'course1'},
    {id: 2, name: 'course2'},
    {id: 3, name: 'course3'},
]


app.get('/',(req,res)=>{
    res.write('<html>');
    res.write('<body>');
    res.write('<h1>Hello World</h1>');
    res.write('</body>');
    res.write('</html');
    res.end();
});

app.get('/api', (req,res) => {
    res.send([1,2,3]);
});




app.get('/api/courses/:id', (req,res) => {
    //res.send(courses);
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) return res.status(404).send('the course is not found');
    res.send(course)
});

app.post('/api/courses',(req,res) => {
    const course = {
        id: course.length +1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});


const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`listening on port ${port}`));


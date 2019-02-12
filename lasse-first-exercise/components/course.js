const express = require('express');
let router = express.Router();

let z = 1;
let courses = [
    {
        id: z++,
        name: "Practical DevOps Security",
        description: "The road to continuous security in development lifecycle. Good for beginners.",
    },
    {
        id: z++,
        name: "Introduction to HTML",
        description: "A complete beginner to Expert.",
        

    },
    {
        id: z++,
        name: "Python Deep Learning",
        description: "It is the second edition and good as well for the beginners.",
        
    }
]

router.get('/', (req, res) => res.json(courses));
router.post('/', (req, res)=> {
    //read body data from req
    console.log(req.body);

    //append users data to users array
    courses.push(req.body);
    res.send('OK');
})
router.put('/', (req,res) =>{
    const course = req.body
    let modifiedCourse = null;
    console.log(course);
    courses.forEach(cou=>{
        if(cou.id==course.id){
            cou.name = course.name;
            cou.description = course.description;
            
            modifiedCourse = cou;

        }
    });
    if (modifiedCourse) {
        res.send('OK');
    } else {
        res.send('not found');
    }
    
});

router.delete('/:id', (req, res) =>{
    let index = -1;
    courses.forEach((course, idx) => {
        if (course.id == req.params.id) {
            index = idx;
        }

    });
    if (index >= 0) {
        courses.splice(index, 1);
        res.send('OK')
    } else {
        res.send('not found');
    }
});


module.exports = router;
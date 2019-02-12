const express = require('express');
let router = express.Router();

let z = 1;
let grades = [
    {
        id: z++,
        studentid: 1,
        courseid: 2,
        grade: 5
    },
    {
        id: z++,
        studentid: 3,
        courseid: 3,
        grade: 4
    },
    {
        id: z++,
        studentid: 2,
        courseid: 2,
        grade: 3
    }
]

router.get('/', (req, res) => res.json(grades));
router.post('/', (req, res)=> {
    //read body data from req
    console.log(req.body);

    //append users data to users array
    grades.push(req.body);
    res.send('OK');
})
router.put('/', (req,res) =>{
    const grade = req.body
    let modifiedGrade = null;
    console.log(grade);
    grades.forEach(grad=>{
        if(grad.id==grade.id){
            grad.name = grade.name;
            grad.description = grade.description;
            
            modifiedGrade = grad;

        }
    });
    if (modifiedGrade) {
        res.send('OK');
    } else {
        res.send('not found');
    }
    
});


router.delete('/:id', (req, res) =>{
    let index = -1;
    grades.forEach((grade, idx) => {
        if (grade.id == req.params.id) {
            index = idx;
        }

    });
    if (index >= 0) {
        grades.splice(index, 1);
        res.send('OK')
    } else {
        res.send('not found');
    }
});


module.exports = router;
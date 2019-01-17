const express = require('express');
let router = express.Router();

let grades = [
    {
        id: 1,
        studentid: 1,
        courseid: 2,
        grade: 5
    },
    {
        id: 2,
        studentid: 3,
        courseid: 3,
        grade: 4
    },
    {
        id: 3,
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
router.put('/:id', (req,res) =>{
    console.log(req.params.id);
    res.send('OK');
})


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
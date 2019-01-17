const express = require('express');
let router = express.Router();

let students = [
    {
        id: 1,
        name: "Shambo Pandey",
        address: "Kotkantie 1 Oulu",
        class: "DIN17SP"
    },
    {
        id: 2,
        name: "Nita Björkman",
        address: "Hanhitie 17 Oulu",
        class: "DIN18SP"

    },
    {
        id: 3,
        name: "Janne Kodistalo",
        address: "Raksila 17 Oulu",
        class: "DIN18SP"

    }
]

router.get('/', (req, res) => res.json(students));
router.post('/', (req, res)=> {
    //read body data from req
    console.log(req.body);

    //append users data to users array
    students.push(req.body);
    res.send('OK');
})
router.put('/', (req,res) =>{
    const student = req.body
    let modifiedStudent = null;
    console.log(student);
    students.forEach(stud=>{
        if(stud.id==student.id){
            stud.name = student.name;
            stud.address = student.address;
            stud.class = student.class;
            modifiedStudent = stud;

        }
    });
    if (modifiedStudent) {
        res.send('OK');
    } else {
        res.send('not found');
    }
    
});


router.delete('/:id', (req, res) =>{
    let index = -1;
    students.forEach((student, idx) => {
        if (student.id == req.params.id) {
            index = idx;
        }

    });
    if (index >= 0) {
        students.splice(index, 1);
        res.send('OK')
    } else {
        res.send('not found');
    }
});

module.exports = router;
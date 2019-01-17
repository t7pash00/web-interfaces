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
router.put('/:id', (req,res) =>{
    console.log(req.params.id);
    res.send('OK');
})


router.delete('/:id', (req, res) =>{
    console.log(req.params.id);
    res.send('OK');

})

module.exports = router;
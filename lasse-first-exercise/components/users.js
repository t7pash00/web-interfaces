const express = require('express');
let router = express.Router();

let users = [
    {
        id: 1,
        name: "Demo"
    }
]

router.get('/', (req, res) => res.json(users));
router.post('/', (req, res)=> {
    //read body data from req
    console.log(req.body);

    //append users data to users array
    users.push(req.body);
    res.send('OK');
})
router.delete('/', (req, res) => res.json(users))

module.exports = router;
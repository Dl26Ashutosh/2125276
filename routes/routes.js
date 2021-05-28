const express = require('express');


// File system module
const fs = require('fs')

// router for expressm app
const router = express.Router();


// default route
router.get('/',(req,res)=>{
    res.send('OK');
})


// route for writing output in output1 file will locate in data folder
router.get('/api/input1/:value',(req,res)=>{
    const content = req.params.value;
    try {
    const data = fs.appendFileSync('data/output1.txt', content+'\n')
    res.send('Successfully Written in text 1 file');
    } catch (err) {
    console.error(err)
    }
    
})
// route for writing output in output2 file will locate in data folder
router.get('/api/input2:value',(req,res)=>{
    const content = req.params.value;
    try {
    const data = fs.appendFileSync('data/output2.txt', content+'\n')
    res.send('Successfully Written in text 2 file');
    } catch (err) {
    console.error(err)
    }
})


module.exports = router;
const express = require('express')  //importing express from node_modules/express/index.js file
const app = express(); //creates an express object

//Whenever we do a get request for / as path the below things are carried out
app.disable('etag')  //to stop 304 not modified error. For disabling cache
app.get('/',(req, res)=>{
        res.send('Hellooooo')
})

app.listen(3000,()=>{
    console.log('Server started on port')
})
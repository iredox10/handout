const express = require('express');
const app = express()
const mongoose = require('mongoose')
const routes = require('./routes/routes')


mongoose.connect('mongodb://localhost/handout')
.then(res => console.log('connect'))
.catch(err => console.log(err))

app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use('/api',routes)



app.listen(4000)
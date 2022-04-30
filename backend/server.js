import express from 'express';
import mongoose from 'mongoose'
const app = express()

// internal module
import routes from './routes/routes.js'

mongoose.connect('mongodb://localhost/handout')
.then(res => console.log('connect'))
.catch(err => console.log(err))

// middlewares
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use('/api',routes)



app.listen(4000)
import express from 'express'
import mongoose from 'mongoose'
// import cors from 'cors';

const app = express()

// internal module
import routes from './routes/routes.js'

mongoose.connect('mongodb://localhost/handout')
.then(res => console.log('connect'))
.catch(err => console.log(err))

// middlewares
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use('/handout',routes)



app.listen(4000)
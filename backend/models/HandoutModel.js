import mongoose from 'mongoose'

const handoutSchema = new mongoose.Schema({
    courseName: {
        type: String,
        required: true,
        unique: true
    },
    courseCode:{
        type: String,
        required: true,
        unique: true
    },
    lecturer: {
        type: String,
        required: true   
    },
    creditUnit:{
        type: Number,
        required: true
    },
    department:{
        type: String,
        required: true
    },
    class: {
        type: String,
        required: true
    },
    document: String,
})

const Handout = mongoose.model('handout',handoutSchema)

export default Handout
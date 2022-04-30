import mongoose from 'mongoose'

const handoutSchema = new mongoose.Schema({
    courseName: {
        type: String,
        required: true
    },
    courseCode:{
        type: String,
        required: true
    },
    lecturer: {
        type: String,
        required: true   
    },
    creditUnit:{
        type: String,
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

export default handoutModel = mongoose.model('handout',handoutSchema)
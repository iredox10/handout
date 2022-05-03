import Handout from '../models/HandoutModel.js'
export const get_home = async (req,res) =>{
    try {
        const handouts = await Handout.find()
        res.status(200).json(handouts)

    } catch (err) {
        console.log(err)
    }
}

export const add_handout = async (req,res) =>{
    try {
        const handout  = new Handout(req.body)
        const newHandout = await handout.save()
        res.json(newHandout)
    } catch (err) {
        console.log(err);
    }
}

export const delete_handout = async (req,res) =>{
    try {
        await Handout.findByIdAndDelete(req.params.id)
        res.status(201).json('successfully deleted')
    } catch (err) {
        console.log(err)
    }
}
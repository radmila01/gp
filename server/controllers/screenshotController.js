const  uuid = require('uuid')
const path = require('path')
const {Screenshot}= require('../models/models')

const ApiError = require('../error/ApiError');

class screenController{
    async create(req, res) {

        const {id,name} = req.body
            const {img} = req.files
        let fileName=uuid.v4()+".jpg"
            img.mv(path.resolve(__dirname ,'..','images',fileName))
            const screenshots = await  Screenshot.create({id,name:name,img: fileName})
            return res.json(screenshots) }

    async getAll(req, res) {
        const screenshots = await Screenshot.findAll()
        return res.json(screenshots)
    }
    }


module.exports = new screenController()
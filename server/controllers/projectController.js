const uuid = require("uuid");
const path = require('path');

const {Project}= require('../models/models')

const ApiError = require('../error/apiError');
const {rows} = require("pg/lib/defaults");


class projectController {

    async create(req, res) {

        const {id,name,description} = req.body
        const {img} = req.files
        let fileName=uuid.v4()+".jpg"
        img.mv(path.resolve(__dirname ,'..','static',fileName))
        const project = await  Project.create({id,name:name,description:description,img: fileName})
        return res.json(project) }


    /* async create(req, res) {
         const {name} = req.body
         const project = await Project.create({name: name})
         return res.json(project)
     }*/

    async getAll(req, res) {
        const projects = await Project.findAll()
        return res.json(projects)
    }

    async getOne(req, res) {
        const {id} = req.params
        const project = await Project.findOne(
            {where: {id}},
        )
        return res.json(project)
    }

    async update(req, res) {
        const {id,name} = req.body

       try { const project = await Project.findOne({where: {id}},)


        project.name = name
       // await project.save()

            res.json(project) } catch (e) {
           
       }


    }

  async delete(req,res) {
      const {id} = req.body
     try{ const project = await Project.findOne({where: {id}},)

        project.destroy(
            {
                where: { id:id }

          }).then((res) => {
          project.log =res
      })
         
      res.json(project) } catch (e) {

  }

  }


}
module.exports = new projectController()
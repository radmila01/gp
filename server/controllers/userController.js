const ApiError = require('../error/apiError');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {User} = require('../models/models')

const generateJwt = (id, email, role) => {
    return jwt.sign(
        {id: id, email, role},
        process.env.SECRET_KEY
    )
}

class UserController {
    async registration(req, res, next) {
        const {email, password, rolle} = req.body
        if(!email || !password) {
            return next(ApiError.badRequest('Неправильно указан email или пароль'))
        }
        const candidate = await User.findOne({where: {email}})
        if (candidate) {
            return next(ApiError.badRequest('Пользователь с таким email уже существует'))
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({email, rolle, password: hashPassword})
        const token = generateJwt(user.id, user.email, user.rolle)
        return res.json({token})
    }
    async login(req, res, next) {
           const {email, password} = req.body
          const user = await User.findOne({where: {email}})
         const userId = user.id;
          if (!user) {
              return next(ApiError.internal('Пользователь не найден'))
          }
          let comparePassword = bcrypt.compareSync(password, user.password)
          if (!comparePassword) {
              return next(ApiError.internal('Указан неверный пароль'))
    }
 if(fcmId != "") {
    const fcm = FcmId.findOne({where: {fcmId}})
     if(!fcm) {
       FcmId.create({userId, FcmId})
  }
 }
 const token = generateJwt(user.id, user.email, user.role)
    return res.json({token})
}


    async check(req, res, next) {

    }

    async getAll(req,res){
        const users = await User.findAll()
        return res.json(users)
    }

    async getOne(req, res) {
        const {id} = req.params
        const user = await User.findOne(
            {where: {id}},
        )
        return res.json(user)
    }
}

module.exports = new UserController()




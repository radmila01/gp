const ApiError = require('../error/apiError');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {Accounts} = require('../models/models')

const generateJwt = (id, email,password) => {
    return jwt.sign(
        {id: id, email, password},
        process.env.SECRET_KEY
    )
}

class AccountsController {

    async registration(req, res, next) {

        const {email, password,fio} = req.body
        if (!email || !password || !fio) {
            return next(ApiError.badRequest('Некорректный email или password'))
        }
        const candidate = await Accounts.findOne({where: {email}})
        if (candidate) {
            return next(ApiError.badRequest('Пользователь с таким email уже существует'))
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const accounts = await Accounts.create({ email, password: hashPassword,fio})
        const token = generateJwt(accounts.id, accounts.email, accounts.password)
        return res.json({token})
    }

    async login(req, res, next) {
        const {email, password} = req.body
        const accounts = await Accounts.findOne({where: {email}})
        if (!accounts) {
            return next(ApiError.internal('Пользователь не найден'))
        }
        let comparePassword = bcrypt.compareSync(password, accounts.password)
        if (!comparePassword) {
            return next(ApiError.internal('Указан неверный пароль'))
        }
        const token = generateJwt(accounts.id, accounts.email, accounts.rolle)
        return res.json({token})
    }

    async check(req, res, next) {
        const token = generateJwt(req.user.id, req.user.email, req.user.rolle)
        return res.json({token})
    }



async getAll(req,res){
        const accounts = await Accounts.findAll()
        return res.json(accounts)
    }

    async getOne(req, res) {
        const {id} = req.params
        const accounts = await Accounts.findOne(
            {where: {id}},
        )
        return res.json(accounts)
    }
}

module.exports = new AccountsController()




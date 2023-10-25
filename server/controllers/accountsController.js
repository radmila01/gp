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

        const {surname,nam,email, password} = req.body
        if (!surname || !nam || !email || !password ) {
            return next(ApiError.badRequest('Некорректный email или password'))
        }
        const candidate = await Accounts.findOne({where: {email}})
        if (candidate) {
            return next(ApiError.badRequest('Пользователь с таким email уже существует'))
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const accounts = await Accounts.create({surname,nam,email, password: hashPassword})
        const token = generateJwt(accounts.id, accounts.seurname,accounts.nam, accounts.email, accounts.password)
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

async delete(req, res){

    try {
        const { id } = req.params;

        // Поиск пользователя в базе данных по идентификатору
        const accounts = await Accounts.findOne({ where: { id } });

        // Проверка, найден ли пользователь
        if (accounts) {
            // Удаление пользователя из базы данных
            await accounts.destroy();

            // Отправка сообщения об успешном удалении
            return res.json({ message: 'Пользователь успешно удален' });
        } else {
            // Отправка сообщения об ошибке, если пользователь не найден
            return res.status(404).json({ message: 'Пользователь не найден' });
        }
    } catch (error) {
        // Отправка сообщения об ошибке, если произошла ошибка при обращении к базе данных
        return res.status(500).json({ message: 'Ошибка сервера' });
    }



}




}
module.exports = new AccountsController()




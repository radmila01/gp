const uuid = require("uuid");
const path = require('path');

const {Organization}= require('../models/models')
const {Accounts}= require('../models/models')


const ApiError = require('../error/apiError');
const {rows} = require("pg/lib/defaults");

class OrganizationController {
    async create(req, res) {
        const { name } = req.body;

        try {
            const organization = await Organization.create({ name: name });
            return res.json(organization);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Ошибка сервера при создании организации' });
        }
    }

    async addToCompany(req, res) {
        try {
            const { surname, nam, organizationId } = req.body;

            // Найти пользователя по фамилии и имени
            const user = await Accounts.findOne({
                where: {
                    surname: surname,
                    nam: nam,
                },
            });

            if (user) {
                // Найти компанию, к которой нужно добавить пользователя (например, по ID компании)
                const company = await Organization.findByPk(organizationId);

                if (company) {
                    // Добавить связь между пользователем и компанией
                    await user.addOrganization(company);
                    res.status(200).json({ message: 'Пользователь успешно добавлен в компанию' });
                } else {
                    res.status(404).json({ error: 'Компания не найдена' });
                }
            } else {
                res.status(404).json({ error: 'Пользователь не найден' });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Внутренняя ошибка сервера' });
        }
    }


    async getUsersInCompany(req, res) {
        try {
            const { organizationId } = req.params;

            // Найти компанию по ID
            const company = await Organization.findByPk(organizationId);

            if (company) {
                // Получить список пользователей внутри компании
                const users = await company.getAccounts();

                res.status(200).json(users);
            } else {
                res.status(404).json({ error: 'Компания не найдена' });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Внутренняя ошибка сервера' });
        }
    }


}
    module.exports = new OrganizationController()

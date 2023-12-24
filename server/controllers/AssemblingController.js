const uuid = require("uuid");
const path = require('path');

const {Assembling}= require('../models/models')
const fs = require('fs/promises'); // Используем promises-версию модуля fs
const ApiError = require('../error/apiError');
const {rows} = require("pg/lib/defaults");

class AssemblingController {


    async create(req, res) {

        try {
            const {description, version, assemblingNumber} = req.body;
            const {url} = req.files;

// Проверяем, что файл данных был передан
            if (!url) {
                return res.status(400).json({message: 'Файл данных обязателен'});
            }

// Генерируем уникальное имя для файла
            const fileName = uuid.v4() + path.extname(url.name);
            const filePath = path.resolve(__dirname, '..', 'uploads', fileName);

// Записываем данные файла
            await fs.writeFile(filePath, url.data);

// Создаем запись в базе данных
            const assembling = await Assembling.create({
                description,
                version,
                url: fileName, // Сохраняем имя файла в базе данных
                assemblingNumber
            });

            return res.json(assembling);
        } catch (error) {
            console.error(error);
            res.status(500).json({message: 'Ошибка добавления APK-сборки', error: error.message});
        }

    }

    async getAssemblingById  (req, res) {
        try {
            const { id } = req.params;

            // Ищем сборку по идентификатору в базе данных
            const assembling = await Assembling.findByPk(id);

            // Проверяем, найдена ли сборка
            if (!assembling) {
                return res.status(404).json({ message: 'Сборка не найдена' });
            }

            // Отправляем данные сборки клиенту
            return res.json(assembling);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Ошибка получения сборки', error: error.message });
        }
    }


}

module.exports = new AssemblingController()
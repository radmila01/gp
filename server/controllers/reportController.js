const uuid = require("uuid");
const path = require('path');

const {Report}= require('../models/models')
const {Assembling}= require('../models/models')
const fs = require('fs/promises'); // Используем promises-версию модуля fs

const ApiError = require('../error/apiError');
const {rows} = require("pg/lib/defaults");

class reportController {

    async addReport  (req, res) {
        try {
            const { assemblingId, comments } = req.body;
            const { photo } = req.files;

            // Проверяем, что сборка существует
            const assembling = await Assembling.findByPk(assemblingId);
            if (!assembling) {
                return res.status(404).json({ message: 'Сборка не найдена' });
            }

            // Генерируем уникальное имя для фотографии
            const photoFileName = uuid.v4() + path.extname(photo.name);
            const photoFilePath = path.resolve(__dirname, '..', 'static', photoFileName);

            // Записываем фотографию
            await fs.writeFile(photoFilePath, photo.data);

            // Создаем запись в базе данных для отчета
            const report = await Report.create({
                comments,
                photo: photoFileName, // Сохраняем имя файла в базе данных
                assemblingId: assembling.id // Устанавливаем внешний ключ
            });

            return res.json(report);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Ошибка добавления отчета: ' + `${error.message}`});
        }
    }

    async getReportById  (req, res)  {
    try {
        const { id } = req.params;

        // Используем метод findOne для поиска отчета по идентификатору
        const report = await Report.findOne({
            where: { id },
            include: [{ model: Assembling }] // Если необходимо получить связанные данные из сборки
        });

        // Проверяем, найден ли отчет
        if (!report) {
            return res.status(404).json({ message: 'Отчет не найден' });
        }

        // Отправляем данные отчета клиенту
        return res.json(report);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Ошибка получения информации по отчету', error: error.message });
    }
    }
}
module.exports = new reportController()
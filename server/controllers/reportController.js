const uuid = require("uuid");
const path = require('path');

const {Report}= require('../models/models')

const ApiError = require('../error/apiError');
const {rows} = require("pg/lib/defaults");

class reportController {

  /*  async create(req, res) {
        const { comments } = req.body;
        const { img } = req.files;

        try {
            // Создайте запись отчета
            const report = await Report.create({ comments: comments });

            // Создайте запись в модели Image для каждой картинки
            for (let i = 0; i < img.length; i++) {
                const fileName = uuid.v4() + path.extname(img[i].name);
                const filePath = path.resolve(__dirname, '..', 'static', fileName);

                // Сохраните картинку на сервере
                await img[i].mv(filePath);

                // Создайте запись в модели Image и свяжите ее с отчетом
                await Image.create({ path: filePath, reportId: report.id });
            }

            res.status(201).json({ message: 'Report created successfully' });
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Something went wrong' });
        }
    }*/

}
module.exports = new reportController()
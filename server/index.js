require('dotenv').config()

const express = require('express')
const sequelize = require('./db')
const PORT = process.env.PORT || 3001
const models = require('./models/models')
const app = express()
const cors = require('cors')
const fileUpload = require('express-fileupload')
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')
const path = require('path')
const swaggerUI = require("swagger-ui-express")
const swaggerJsDoc = require("swagger-jsdoc")
const multer = require('multer');


const options = {
    definition: {
        "openapi": "3.0.0",
        "info": {
            "title": "Система тестирования мобильных приложений",
            "version": "1.0.0",
            "description": "Правильная система тестирования программного обеспечения дает преимущество" +
                    " компаниям и организациям в скорости, удобстве и ресурсозатратности данного процесса. " +
                    "Это значительно упрощает разработку программного обеспечения." +
                    " Создаваемая система предлагает новый подход в тестировании мобильных приложений," +
                    " обеспечивая удобство, комфорт и безопасность одновременно."
        },
        servers: [
            {
                url: "http://localhost:3003",
            },
        ],
    },
    apis: ["./routes/*.js"]

}
const specs = swaggerJsDoc(options)

app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname,'static')))

app.use(fileUpload({}))
app.use('/api', router)
app.use(errorHandler)
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs))

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync({})
        app.listen(PORT, () => console.log('Server started'))
    } catch (e) {
        console.log(e)
    }
}

start()

//force: true
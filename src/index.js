const express = require("express")
const helmet= require("helmet")
const compression = require("compression")
const morgan = require("morgan")
const bodyParser = require("body-parser")
const formData = require("express-form-data")
const routes = require("./routers")

const app = express()

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs')
app.use(helmet.noCache())
app.use(helmet.frameguard())
app.use(compression({
  threshold: 512,
}))
app.use(morgan('dev'))
app.use(bodyParser.json({ limit: '5mb' }))
app.use(bodyParser.json({ type: 'application/vnd.api+json' }))
app.use(bodyParser.urlencoded({ limit: '5mb', extended: true }))
app.use(formData.parse({ autoFiles: true }));
app.use(formData.format());
app.use(formData.stream());
app.use(formData.union());
app.use('/', routes)
app.use((req, res) => {
  res.status(404).json({
    status: 404,
    description: 'Not found',
    url: req.originalUrl,
  })
})
app.listen(3000, () => console.log('App listening on port 3000!'))

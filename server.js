const express = require('express')
const bodyParser = require('body-parser')
require('dotenv').config();

const app = express()

app.use('/storage_user', express.static('storage_user'));
app.use('/storage_product', express.static('storage_product'));

const userRouter = require('./api/routes/users')
const productRouter = require('./api/routes/products')
const favoriteRouter = require('./api/routes/favorites')
const cartRouter = require('./api/routes/carts')
const historyRouter = require('./api/routes/history')
const reviewRouter = require('./api/routes/review')
const addressRouter = require('./api/routes/address')
const orderRouter = require('./api/routes/orders')


// Middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Use methods from my file
app.use('/users', userRouter)
app.use('/products', productRouter)
app.use('/favorites', favoriteRouter)
app.use('/carts', cartRouter)
app.use('/history', historyRouter)
app.use('/review', reviewRouter)
app.use('/address', addressRouter)
app.use('/orders', orderRouter)

const http = require('http')

const appPort = 8080
app.set('port', appPort)

// Create Web server
http.createServer(app).listen(appPort, () =>
    console.log(`Node app running at localhost:${appPort}`))
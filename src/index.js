
module.exports = (app) =>{
    app.use('/cep', require('./routes/cep'))
    app.use('/ship', require('./routes/ship'))
}
const HomeRouter = require('./home')
function route(app){
    
    // app.get('/search',(req,res)=> {

    //     res.render('search');
    // })
    app.use('/home',HomeRouter)
    // app.use('/news',newsRouter)
    // app.use('/me',MeRouter)

    // app.use('/',SiteRouter)

    

}
module.exports = route;
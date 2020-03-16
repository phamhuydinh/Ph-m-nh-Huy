let express =require('express');
let app =express();
//Set public static folder
app.use(express.static(__dirname+'/public'));
//Use View Engine
let expressHbs= require('express-handlebars');
let hbs=expressHbs.create({
    extname: 'hbs',
    defaultLayout: 'layout',
    layoutsDir: __dirname + '/views/layouts/',
    partialsDir: __dirname + '/views/partials/'
});
app.engine('hbs',hbs.engine);
app.set('view engine','hbs');
//Define your routes here
app.get('/',(req,res)=>{
    res.render('index');
});

app.get('/:page',(req,res)=>{
    let banners = {
        blog: 'Our Blog',
        category: 'Shop Category',
        cart: 'Shopping Cart',
        checkout: 'Product Checkout',
        confirmation: 'Order Confirmation',
        contact: 'Contact Us',
        login: 'Login / Register',
        register: 'Register',
    };
    let page =req.params.page;
res.render(page,{banner: banners[page]});
});

//Set server port & start server
app.set('port',process.env.PORT || 5000);
app.listen (app.get('port'),()=>{
    console.log(`Server is running at port ${app.get('port')}`);
});



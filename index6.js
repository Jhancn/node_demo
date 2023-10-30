//templating engine
const express= require('express');
const app= express();
app.set('view engine','pug');
app.set('views','./views');
app.get('/', (req,res) => {
    res.render('index6',{title:'My Express App', message:'Hello'})
})
const  port = process.env.PORT || 3030;
app.listen(port, () => console.log('listening'))
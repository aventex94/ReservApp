const express = require('express');
const app = express();
const userRouter = require('./routes/userRoutes') 
const body=require('body-parser');
const models = require('./models');

app.use(body.json());
app.use(body.urlencoded({ extended: false }));

app.use('/',userRouter);
app.listen(3002,()=>{
    models.sequelize.sync({});
    console.log("Servidor Corriendo");
});
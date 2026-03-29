require('dotenv').config();
const express = require('express');
const app = express();
const error = require('./src/middlewares/errorMiddleware.js')
const PORT = process.env.PORT || 1000;
const routes = require('./src/routes/routes.js')
const cors = require('cors')


app.use(cors());
app.use(express.json());
app.use('/api',routes);
app.get('/',(req, res)=>{
    res.send('API Online!');
});

app.use(error);

app.listen(PORT, ()=> {
    console.log(`Servidor ouvindo a porta ${PORT}`)
});

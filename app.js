const express = require('express');
const path = require('path')
const app = express();
const publicPath = path.resolve(__dirname, './public')
app.use(express.static(publicPath) )

let port = process.env.port || 3030 

app.listen(port, () => 
console.log('Servidor funcionando')
)

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './/views/home.html'))
});

app.get('/register', (req, res) => {
    res.sendFile(path.resolve(__dirname, './/views/register.html'))
});

app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, './/views/login.html'))
});










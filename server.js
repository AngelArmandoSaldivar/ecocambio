const database = require('./app/config/database');
const config = require('./app/config/config');
const app = require('./app/app');

database.connect();//Conecta a la bd

app.listen(config.port, (err) => {
    if(err) return console.log(err);
    console.log(`Listen on port ${config.port}...`);
} )
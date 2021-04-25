const mongoose = require('mongoose');
const config = require('./config');

module.exports = {

    connection: null,     

    connect: () => {
        if(this.connection) return this.connection;
        return mongoose.connect((config.db)).then(connection => {
            this.connection = connection;
            console.log('Connected to the database..');
        }).catch((err) => console.log(err));
    }

}
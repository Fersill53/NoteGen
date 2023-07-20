const express = require('express');
const fs = require('fs');
const path = require('path');

const apiRoutes = require('./Routes/apiroutes');
const htmlRoutes = require('./Routes/htmlroutes');

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(express.static('public'));

app.use('/api', apiRoutes);

app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log('Notegen listening to port ${PORT}');
});
const express = require('express');
const path = require('path');
const datp = require('./routes/api/dat');
const cors = require('cors');
const cookieParse = require('cookie-parser');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PATCH', 'DELETE', 'PUT'],
    allowedHeaders: 'Content-Type, Authorization, Origin, X-Requested-With, Accept'
}));
app.use(cookieParse());

app.use('/api', datp);

// start server

//const PORT = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 4000;

const PORT = process.env.PORT || 3000

//const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 4000;

const server = app.listen(PORT, function () {
    console.log('Server listening on port ' + PORT);
});
//app.listen(PORT);
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

const PORT = process.env.PORT || 3000;
app.listen(PORT);
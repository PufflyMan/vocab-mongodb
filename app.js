const express = require('express');
const app = express();
port = 3000;
const mongoose = require('mongoose');

var mongoDB = 'mongodb://127.0.0.1/vocab'
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
// app.get('/', (req, res) => {
//     res.send("Expressive");
// });

app.use(express.json());

app.use('/api', require('./route/route'))

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})


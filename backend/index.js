const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://nathanbarsoti:notebook100@cluster0-cfn0q.mongodb.net/omniWeekDB?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json());

app.get('/', (req, res) => {
    return res.json({
        message: "App is working!"
    });
});

app.listen(3333);




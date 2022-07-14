require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/Person')
const app = express();
const urlMongoDb = "mongodb+srv://" + process.env.DB_USER + ":" + process.env.DB_PASSWORD + "@apicluster.tfhke.mongodb.net/bancodaapi?retryWrites=true&w=majority"

app.use(express.urlencoded({
    extended: true
}))
app.use(express.json());
app.use(routes)


mongoose.connect(urlMongoDb)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`Server running on port: ${process.env.PORT}`);
            console.lo
        })
    }).
    catch(error => {
        console.log(error);
    })


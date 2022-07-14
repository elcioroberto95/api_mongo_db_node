const express = require('express');
const { port } = require('./env_variables');


const app = express();
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json());

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
})
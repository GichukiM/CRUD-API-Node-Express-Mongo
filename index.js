const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const productRoute = require('./routes/product.route.js');
const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/api/products', productRoute)

app.get('/', (req, res) => {
    res.send('<h1>Hello, Kenya!</h1>');
});


mongoose.connect("mongodb+srv://gichukimuchiri80:SmhbBv7m5FKiUXVs@cruddb.scvyb.mongodb.net/CRUD-API-TUTORIAL?retryWrites=true&w=majority&appName=CRUDDB")
.then(() => {
    console.log("Connection established");
    app.listen(3000, () => {
        console.log('listening on port 3000');
    });
}).catch((err) => {
    console.log("Connection failed", err);
});
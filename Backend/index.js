//Route
const express = require('express');
const cors = require('cors');
const app = express();  
const port = process.env.PORT || 3000;
const path = require('path');

app.use(express.json());
app.use(cors({
    allowedHeaders: "https://**"
}));

app.get('/', (req, res) => {
    res.sendFile(getFilePath("index.html"));
});

app.get('/browse', (req, res) => {
    res.sendFile(getFilePath("BrowseCatz/indexBrowse.html"))
})

app.get('/order', (req, res) => {
    res.sendFile(getFilePath("OrderFood/indexFood.html"));
})

app.get('/cart', (req, res) => {
    res.sendFile(getFilePath("Cart/indexCart.html"));
})

//routes that will be used to get information from the database
const catRouting = require('./Routes/cat.js'); // Correcting the path
app.use('/catsonmarz/cat', catRouting);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

function getFilePath(relativePath){
    return path.resolve(process.cwd(), relativePath);
}
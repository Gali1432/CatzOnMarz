//Route
const express = require('express');
const cors = require('cors');
const app = express();  
const port = process.env.PORT || 3000;
const path = require('path');

let publicPath = path.join(__dirname, 'public');
console.log("PUBLIC PATH:", publicPath);
app.use(express.static(publicPath));

app.use(express.json());
app.use(cors({
    origin: "http://localhost:3000",
    allowedHeaders: "http://**"
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

app.get('/appointment', (req, res) => {
    res.sendFile(getFilePath("Appointment/appointment.html"));
})

app.get('/reserve', (req, res) => {
    res.sendFile(getFilePath("Appointment/reservation.html"));
})

app.get('/gallery', (req, res) => {
    res.sendFile(getFilePath("CatGallery/indexGallery.html"));
})

app.get('/login', (req, res) => {
    res.sendFile(getFilePath("UserAuth/Register.html"));
})

app.get('/aceandspade', (req, res) => {
    res.sendFile(getFilePath("BrowseCatz/ace and spade.html"));
})

app.get('/fuzzy', (req, res) => {
    res.sendFile(getFilePath("BrowseCatz/fuzzy.html"));
});

//routes that will be used to get information from the database
const catRouting = require('./Routes/cat.js'); // Correcting the path
app.use('/catsonmarz/cat', catRouting);

const eventRouting = require('./Routes/event.js');
const { get } = require('http');
app.use('/catsonmarz/event', eventRouting);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

//helper method for routes
function getFilePath(relativePath){
    return path.resolve(process.cwd(), relativePath);
}
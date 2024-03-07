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

app.get('/adopt', (req, res) => {
    res.sendFile(getFilePath("AdoptCat/adoption-page.html"));
})

app.get('/fuzzy', (req, res) => {
    res.sendFile(getFilePath("BrowseCatz/fuzzy.html"));
});





app.get('/whiskers', (req, res) => {
    res.sendFile(getFilePath("BrowseCatz/whiskers.html"));
});

app.get('/oliver', (req, res) => {
    res.sendFile(getFilePath("BrowseCatz/oliver.html"));
});

app.get('/aceandspade', (req, res) => {
    res.sendFile(getFilePath("BrowseCatz/ace and spade.html"));
});

app.get('/mittens', (req, res) => {
    res.sendFile(getFilePath("BrowseCatz/mittens.html"));
});

app.get('/tinker', (req, res) => {
    res.sendFile(getFilePath("BrowseCatz/tinker.html"));
});

app.get('/chips', (req, res) => {
    res.sendFile(getFilePath("BrowseCatz/chips.html"));
});

app.get('/salem', (req, res) => {
    res.sendFile(getFilePath("BrowseCatz/salem.html"));
});

app.get('/biscuit', (req, res) => {
    res.sendFile(getFilePath("BrowseCatz/biscuit.html"));
});

app.get('/willow', (req, res) => {
    res.sendFile(getFilePath("BrowseCatz/willow.html"));
});

app.get('/wizard', (req, res) => {
    res.sendFile(getFilePath("BrowseCatz/wizard.html"));
});

app.get('/nyx', (req, res) => {
    res.sendFile(getFilePath("BrowseCatz/nyx.html"));
});

app.get('/ace', (req, res) => {
    res.sendFile(getFilePath("BrowseCatz/ace.html"));
});

app.get('/lily', (req, res) => {
    res.sendFile(getFilePath("BrowseCatz/lily.html"));
});

app.get('/jasper', (req, res) => {
    res.sendFile(getFilePath("BrowseCatz/jasper.html"));
});


const catRouting = require('./Routes/cat.js'); 
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
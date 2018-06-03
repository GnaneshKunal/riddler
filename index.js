const express = require('express');
const cors = require('cors');
const { data } = require('./riddles/data.json');

const PORT = process.env.PORT || 8080;

const length = data.length;

const app = express();
app.use(cors());

app.get('/', (req, res) => {
    return res.status(200).send({
	"?": '?',
    });
});

app.get('/riddle', (req, res) => {

    let num = Math.floor(Math.random() * length) + 1;
    let a = req.query.a;
    let riddle = data[num];
    if (a === "0") {
	delete riddle.a;
    }
    
    return res.status(200).send({
	riddle 
    });
    
});

app.listen(PORT, (err) => {
    if (err)
	throw err;
    console.log("Server is listening");
});



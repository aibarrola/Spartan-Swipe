import express from 'express';
import mongoose from 'mongoose';
import Cors from 'cors';

import Cards from './dbSwipeCards.js';

// App Config
const app = express();
const port = process.env.PORT || 8001;
const connection_url = 'mongodb+srv://admin:g30Cj7hOKhj7Cne0@cluster0.ew7fq.mongodb.net/spartanswipedb?retryWrites=true&w=majority';

// Middlewares
app.use(express.json());
app.use(Cors());

// Database Config
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});

// API Endpoints
app.get('/', (req, res) => res.send('Hello World! :)'));

app.post('/spartanswipe/cards', (req, res) => {
    const dbSwipeCard = req.body;

    Cards.create(dbSwipeCard, (error, data) => {
        if (error) 
        {
            res.status(500).send(error);
        }
        else
        {
            res.status(201).send(data);
        }
    });
});

app.get('/spartanswipe/cards', (req, res) => {
    Cards.find({}, (error, data) => {
        if (error) 
        {
            res.status(500).send(error);
            console.log(error);
        }
        else
        {
            res.send(data);
            console.log(data);
        }
    });
});

// Listener
app.listen(port, () => console.log(`listening on localhost: ${port}`));

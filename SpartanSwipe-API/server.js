import express from 'express';
import mongoose from 'mongoose';
import Cors from 'cors';

import Cards from './dbSwipeCards.js';

// App Config
const app = express();
const port = process.env.PORT || 8001;
const connection_url = 'mongodb+srv://admin:NSfH6WvtoNPjujXf@cluster0.ew7fq.mongodb.net/SpartanSwipeDatabase?retryWrites=true&w=majority';

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
app.get('/', (req, res) => res.status(200).send('Hello World!'));

app.post('/SpartanSwipe/cards', (req, res) => {
    const dbSwipeCard = req.body;

    Cards.create(dbSwipeCard, (err, data) => {
        if (err) 
        {
            res.status(500).send(err);
        }
        else
        {
            res.status(201).send(data);
        }
    });
});

app.get('/SpartanSwipe/cards', (req, res) => {
    Cards.find((err, data) => {
        if (err) 
        {
            res.status(500).send(err);
        }
        else
        {
            res.send(data);
        }
    });
});

// Listener
app.listen(port, () => console.log(`listening on localhost: ${port}`));

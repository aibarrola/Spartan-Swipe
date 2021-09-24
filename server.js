const express = require('express');
const connectDB = require('./config/db');

const app = express();

//Connect database
connectDB();

//init middleware
//allow us to get req json
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API Running'));

//define routes
app.use('/users', require('./routes/api/users'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on post ${PORT}`));
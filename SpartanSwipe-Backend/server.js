const express = require('express');
const connectDB = require('./config/db')

// App Config
const app = express();
const PORT = process.env.PORT || 8001;
connectDB();

// API Endpoints
app.get('/', (req, res) => res.send('Hello World!'));

//Middleware
app.use(express.json({ extended: false }));

//Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/cards', require('./routes/api/cards'));

// Listener
app.listen(PORT, () => console.log(`listening on localhost: ${PORT}`));
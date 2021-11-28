const express = require('express');
const connectDB = require('./config/db')

// App Config
const app = express();
const PORT = process.env.PORT || 8005;
connectDB();

// API Endpoints, default res status is 200
app.get('/', (req, res) => res.send('Hello World!'));

//Middleware
app.use(express.json({ extended: false }));

//Routes
// When the application goes to the urls /api/..., it's going to call the ./routes/api/... which will then look inside 
// the routes
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/cards', require('./routes/api/cards'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/users', require('./routes/api/users'));

app.use('/api/chat', require('./routes/api/chat'));
app.use('/api/messages', require('./routes/api/messages'));

// Listener
app.listen(PORT, () => console.log(`listening on localhost: ${PORT}`));
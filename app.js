// app.js
const express = require('express');
const path = require('path');


const app = express();
const PORT = 3000;

// Import routes

const authRoutes = require('./routes/authRoutes');
app.use(express.static('public'));
app.use('/views', express.static(path.join(__dirname, 'views')));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Use routes

app.use('/auth', authRoutes);   
     

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
